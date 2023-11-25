var Gk=Object.defineProperty;var Yk=(t,e,n)=>e in t?Gk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ue=(t,e,n)=>(Yk(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function qg(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const tt={},lo=[],Jn=()=>{},Xk=()=>!1,Qk=/^on[^a-z]/,Gh=t=>Qk.test(t),Kg=t=>t.startsWith("onUpdate:"),Lt=Object.assign,Gg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jk=Object.prototype.hasOwnProperty,Ue=(t,e)=>Jk.call(t,e),re=Array.isArray,co=t=>$l(t)==="[object Map]",qo=t=>$l(t)==="[object Set]",jy=t=>$l(t)==="[object Date]",ye=t=>typeof t=="function",Tt=t=>typeof t=="string",sl=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",Yg=t=>Qe(t)&&ye(t.then)&&ye(t.catch),Fw=Object.prototype.toString,$l=t=>Fw.call(t),Zk=t=>$l(t).slice(8,-1),Uw=t=>$l(t)==="[object Object]",Xg=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vu=qg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eS=/-(\w)/g,vi=Yh(t=>t.replace(eS,(e,n)=>n?n.toUpperCase():"")),tS=/\B([A-Z])/g,Lr=Yh(t=>t.replace(tS,"-$1").toLowerCase()),Xh=Yh(t=>t.charAt(0).toUpperCase()+t.slice(1)),ld=Yh(t=>t?`on${Xh(t)}`:""),rl=(t,e)=>!Object.is(t,e),bu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nS=t=>{const e=Tt(t)?Number(t):NaN;return isNaN(e)?t:e};let Wy;const op=()=>Wy||(Wy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ms(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Tt(i)?oS(i):Ms(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Tt(t))return t;if(Qe(t))return t}}const iS=/;(?![^(]*\))/g,sS=/:([^]+)/,rS=/\/\*[^]*?\*\//g;function oS(t){const e={};return t.replace(rS,"").split(iS).forEach(n=>{if(n){const i=n.split(sS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yn(t){let e="";if(Tt(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const i=yn(t[n]);i&&(e+=i+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lS=qg(aS);function Bw(t){return!!t||t===""}function cS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=zl(t[i],e[i]);return n}function zl(t,e){if(t===e)return!0;let n=jy(t),i=jy(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=sl(t),i=sl(e),n||i)return t===e;if(n=re(t),i=re(e),n||i)return n&&i?cS(t,e):!1;if(n=Qe(t),i=Qe(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zl(t[o],e[o]))return!1}}return String(t)===String(e)}function Qg(t,e){return t.findIndex(n=>zl(n,e))}const _e=t=>Tt(t)?t:t==null?"":re(t)||Qe(t)&&(t.toString===Fw||!ye(t.toString))?JSON.stringify(t,Vw,2):String(t),Vw=(t,e)=>e&&e.__v_isRef?Vw(t,e.value):co(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:qo(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!re(e)&&!Uw(e)?String(e):e;let Cn;class $w{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Cn,!e&&Cn&&(this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Cn;try{return Cn=this,e()}finally{Cn=n}}}on(){Cn=this}off(){Cn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jg(t){return new $w(t)}function uS(t,e=Cn){e&&e.active&&e.effects.push(t)}function Zg(){return Cn}function zw(t){Cn&&Cn.cleanups.push(t)}const em=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hw=t=>(t.w&Ps)>0,jw=t=>(t.n&Ps)>0,hS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},fS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Hw(s)&&!jw(s)?s.delete(t):e[n++]=s,s.w&=~Ps,s.n&=~Ps}e.length=n}},$u=new WeakMap;let Ia=0,Ps=1;const ap=30;let Kn;const yr=Symbol(""),lp=Symbol("");class tm{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uS(this,i)}run(){if(!this.active)return this.fn();let e=Kn,n=Is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kn,Kn=this,Is=!0,Ps=1<<++Ia,Ia<=ap?hS(this):qy(this),this.fn()}finally{Ia<=ap&&fS(this),Ps=1<<--Ia,Kn=this.parent,Is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kn===this?this.deferStop=!0:this.active&&(qy(this),this.onStop&&this.onStop(),this.active=!1)}}function qy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Is=!0;const Ww=[];function Ko(){Ww.push(Is),Is=!1}function Go(){const t=Ww.pop();Is=t===void 0?!0:t}function En(t,e,n){if(Is&&Kn){let i=$u.get(t);i||$u.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=em()),qw(s)}}function qw(t,e){let n=!1;Ia<=ap?jw(t)||(t.n|=Ps,n=!Hw(t)):n=!t.has(Kn),n&&(t.add(Kn),Kn.deps.push(t))}function Wi(t,e,n,i,s,r){const o=$u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?Xg(n)&&a.push(o.get("length")):(a.push(o.get(yr)),co(t)&&a.push(o.get(lp)));break;case"delete":re(t)||(a.push(o.get(yr)),co(t)&&a.push(o.get(lp)));break;case"set":co(t)&&a.push(o.get(yr));break}if(a.length===1)a[0]&&cp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cp(em(l))}}function cp(t,e){const n=re(t)?t:[...t];for(const i of n)i.computed&&Ky(i);for(const i of n)i.computed||Ky(i)}function Ky(t,e){(t!==Kn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function dS(t,e){var n;return(n=$u.get(t))==null?void 0:n.get(e)}const pS=qg("__proto__,__v_isRef,__isVue"),Kw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sl)),gS=nm(),mS=nm(!1,!0),_S=nm(!0),Gy=yS();function yS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ie(this);for(let r=0,o=this.length;r<o;r++)En(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ko();const i=Ie(this)[e].apply(this,n);return Go(),i}}),t}function vS(t){const e=Ie(this);return En(e,"has",t),e.hasOwnProperty(t)}function nm(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?NS:Jw:e?Qw:Xw).get(i))return i;const o=re(i);if(!t){if(o&&Ue(Gy,s))return Reflect.get(Gy,s,r);if(s==="hasOwnProperty")return vS}const a=Reflect.get(i,s,r);return(sl(s)?Kw.has(s):pS(s))||(t||En(i,"get",s),e)?a:ht(a)?o&&Xg(s)?a:a.value:Qe(a)?t?Zw(a):qi(a):a}}const bS=Gw(),wS=Gw(!0);function Gw(t=!1){return function(n,i,s,r){let o=n[i];if(To(o)&&ht(o)&&!ht(s))return!1;if(!t&&(!zu(s)&&!To(s)&&(o=Ie(o),s=Ie(s)),!re(n)&&ht(o)&&!ht(s)))return o.value=s,!0;const a=re(n)&&Xg(i)?Number(i)<n.length:Ue(n,i),l=Reflect.set(n,i,s,r);return n===Ie(r)&&(a?rl(s,o)&&Wi(n,"set",i,s):Wi(n,"add",i,s)),l}}function ES(t,e){const n=Ue(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Wi(t,"delete",e,void 0),i}function TS(t,e){const n=Reflect.has(t,e);return(!sl(e)||!Kw.has(e))&&En(t,"has",e),n}function IS(t){return En(t,"iterate",re(t)?"length":yr),Reflect.ownKeys(t)}const Yw={get:gS,set:bS,deleteProperty:ES,has:TS,ownKeys:IS},CS={get:_S,set(t,e){return!0},deleteProperty(t,e){return!0}},xS=Lt({},Yw,{get:mS,set:wS}),im=t=>t,Qh=t=>Reflect.getPrototypeOf(t);function Sc(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ie(t),r=Ie(e);n||(e!==r&&En(s,"get",e),En(s,"get",r));const{has:o}=Qh(s),a=i?im:n?om:ol;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ac(t,e=!1){const n=this.__v_raw,i=Ie(n),s=Ie(t);return e||(t!==s&&En(i,"has",t),En(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Rc(t,e=!1){return t=t.__v_raw,!e&&En(Ie(t),"iterate",yr),Reflect.get(t,"size",t)}function Yy(t){t=Ie(t);const e=Ie(this);return Qh(e).has.call(e,t)||(e.add(t),Wi(e,"add",t,t)),this}function Xy(t,e){e=Ie(e);const n=Ie(this),{has:i,get:s}=Qh(n);let r=i.call(n,t);r||(t=Ie(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?rl(e,o)&&Wi(n,"set",t,e):Wi(n,"add",t,e),this}function Qy(t){const e=Ie(this),{has:n,get:i}=Qh(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Wi(e,"delete",t,void 0),r}function Jy(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Wi(t,"clear",void 0,void 0),n}function Dc(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ie(o),l=e?im:t?om:ol;return!t&&En(a,"iterate",yr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Oc(t,e,n){return function(...i){const s=this.__v_raw,r=Ie(s),o=co(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?im:e?om:ol;return!e&&En(r,"iterate",l?lp:yr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function as(t){return function(...e){return t==="delete"?!1:this}}function kS(){const t={get(r){return Sc(this,r)},get size(){return Rc(this)},has:Ac,add:Yy,set:Xy,delete:Qy,clear:Jy,forEach:Dc(!1,!1)},e={get(r){return Sc(this,r,!1,!0)},get size(){return Rc(this)},has:Ac,add:Yy,set:Xy,delete:Qy,clear:Jy,forEach:Dc(!1,!0)},n={get(r){return Sc(this,r,!0)},get size(){return Rc(this,!0)},has(r){return Ac.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:Dc(!0,!1)},i={get(r){return Sc(this,r,!0,!0)},get size(){return Rc(this,!0)},has(r){return Ac.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:Dc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oc(r,!1,!1),n[r]=Oc(r,!0,!1),e[r]=Oc(r,!1,!0),i[r]=Oc(r,!0,!0)}),[t,n,e,i]}const[SS,AS,RS,DS]=kS();function sm(t,e){const n=e?t?DS:RS:t?AS:SS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ue(n,s)&&s in i?n:i,s,r)}const OS={get:sm(!1,!1)},MS={get:sm(!1,!0)},PS={get:sm(!0,!1)},Xw=new WeakMap,Qw=new WeakMap,Jw=new WeakMap,NS=new WeakMap;function LS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FS(t){return t.__v_skip||!Object.isExtensible(t)?0:LS(Zk(t))}function qi(t){return To(t)?t:rm(t,!1,Yw,OS,Xw)}function US(t){return rm(t,!1,xS,MS,Qw)}function Zw(t){return rm(t,!0,CS,PS,Jw)}function rm(t,e,n,i,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=FS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function zi(t){return To(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function To(t){return!!(t&&t.__v_isReadonly)}function zu(t){return!!(t&&t.__v_isShallow)}function Jh(t){return zi(t)||To(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Io(t){return Bu(t,"__v_skip",!0),t}const ol=t=>Qe(t)?qi(t):t,om=t=>Qe(t)?Zw(t):t;function e2(t){Is&&Kn&&(t=Ie(t),qw(t.dep||(t.dep=em())))}function t2(t,e){t=Ie(t);const n=t.dep;n&&cp(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function at(t){return n2(t,!1)}function Zh(t){return n2(t,!0)}function n2(t,e){return ht(t)?t:new BS(t,e)}class BS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ol(e)}get value(){return e2(this),this._value}set value(e){const n=this.__v_isShallow||zu(e)||To(e);e=n?e:Ie(e),rl(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ol(e),t2(this))}}function C(t){return ht(t)?t.value:t}const VS={get:(t,e,n)=>C(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function i2(t){return zi(t)?t:new Proxy(t,VS)}function $S(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=s2(t,n);return e}class zS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dS(Ie(this._object),this._key)}}class HS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function jS(t,e,n){return ht(t)?t:ye(t)?new HS(t):Qe(t)&&arguments.length>1?s2(t,e,n):at(t)}function s2(t,e,n){const i=t[e];return ht(i)?i:new zS(t,e,n)}class WS{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new tm(e,()=>{this._dirty||(this._dirty=!0,t2(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ie(this);return e2(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qS(t,e,n=!1){let i,s;const r=ye(t);return r?(i=t,s=Jn):(i=t.get,s=t.set),new WS(i,s,r||!s,n)}function Cs(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Hl(r,e,n)}return s}function Zn(t,e,n,i){if(ye(t)){const r=Cs(t,e,n,i);return r&&Yg(r)&&r.catch(o=>{Hl(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Zn(t[r],e,n,i));return s}function Hl(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Cs(l,null,10,[t,o,a]);return}}KS(t,n,s,i)}function KS(t,e,n,i=!0){console.error(t)}let al=!1,up=!1;const Jt=[];let hi=0;const uo=[];let Oi=null,ar=0;const r2=Promise.resolve();let am=null;function lm(t){const e=am||r2;return t?e.then(this?t.bind(this):t):e}function GS(t){let e=hi+1,n=Jt.length;for(;e<n;){const i=e+n>>>1;ll(Jt[i])<t?e=i+1:n=i}return e}function cm(t){(!Jt.length||!Jt.includes(t,al&&t.allowRecurse?hi+1:hi))&&(t.id==null?Jt.push(t):Jt.splice(GS(t.id),0,t),o2())}function o2(){!al&&!up&&(up=!0,am=r2.then(c2))}function YS(t){const e=Jt.indexOf(t);e>hi&&Jt.splice(e,1)}function a2(t){re(t)?uo.push(...t):(!Oi||!Oi.includes(t,t.allowRecurse?ar+1:ar))&&uo.push(t),o2()}function Zy(t,e=al?hi+1:0){for(;e<Jt.length;e++){const n=Jt[e];n&&n.pre&&(Jt.splice(e,1),e--,n())}}function l2(t){if(uo.length){const e=[...new Set(uo)];if(uo.length=0,Oi){Oi.push(...e);return}for(Oi=e,Oi.sort((n,i)=>ll(n)-ll(i)),ar=0;ar<Oi.length;ar++)Oi[ar]();Oi=null,ar=0}}const ll=t=>t.id==null?1/0:t.id,XS=(t,e)=>{const n=ll(t)-ll(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function c2(t){up=!1,al=!0,Jt.sort(XS);const e=Jn;try{for(hi=0;hi<Jt.length;hi++){const n=Jt[hi];n&&n.active!==!1&&Cs(n,null,14)}}finally{hi=0,Jt.length=0,l2(),al=!1,am=null,(Jt.length||uo.length)&&c2()}}function QS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||tt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||tt;f&&(s=n.map(d=>Tt(d)?d.trim():d)),h&&(s=n.map(Vu))}let a,l=i[a=ld(e)]||i[a=ld(vi(e))];!l&&r&&(l=i[a=ld(Lr(e))]),l&&Zn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Zn(c,t,6,s)}}function u2(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ye(t)){const l=c=>{const u=u2(c,e,!0);u&&(a=!0,Lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Qe(t)&&i.set(t,null),null):(re(r)?r.forEach(l=>o[l]=null):Lt(o,r),Qe(t)&&i.set(t,o),o)}function ef(t,e){return!t||!Gh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,Lr(e))||Ue(t,e))}let xn=null,tf=null;function Hu(t){const e=xn;return xn=t,tf=t&&t.type.__scopeId||null,e}function Yo(t){tf=t}function Xo(){tf=null}function um(t,e=xn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&hv(-1);const r=Hu(e);let o;try{o=t(...s)}finally{Hu(r),i._d&&hv(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function cd(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=t;let m,_;const y=Hu(t);try{if(n.shapeFlag&4){const b=s||i;m=qn(u.call(b,b,h,r,d,f,p)),_=l}else{const b=e;m=qn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),_=e.props?l:ZS(l)}}catch(b){Ua.length=0,Hl(b,t,1),m=X(Ki)}let w=m;if(_&&g!==!1){const b=Object.keys(_),{shapeFlag:T}=w;b.length&&T&7&&(o&&b.some(Kg)&&(_=eA(_,o)),w=xo(w,_))}return n.dirs&&(w=xo(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),m=w,Hu(y),m}function JS(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(qu(i)){if(i.type!==Ki||i.children==="v-if"){if(e)return;e=i}}else return}return e}const ZS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gh(n))&&((e||(e={}))[n]=t[n]);return e},eA=(t,e)=>{const n={};for(const i in t)(!Kg(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function tA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ev(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ef(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ev(i,o,c):!0:!!o;return!1}function ev(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ef(n,r))return!0}return!1}function hm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nA=t=>t.__isSuspense,iA={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){t==null?rA(e,n,i,s,r,o,a,l,c):oA(t,e,n,i,s,o,a,l,c)},hydrate:aA,create:fm,normalize:lA},sA=iA;function cl(t,e){const n=t.props&&t.props[e];ye(n)&&n()}function rA(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=fm(t,s,i,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,i,f,r,o),f.deps>0?(cl(t,"onPending"),cl(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),ho(f,t.ssFallback)):f.resolve(!1,!0)}function oA(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:_}=h;if(g)h.pendingBranch=f,gs(f,g)?(l(g,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():m&&(l(p,d,n,i,s,null,r,o,a),ho(h,d))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=g):c(g,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,i,s,null,r,o,a),ho(h,d))):p&&gs(f,p)?(l(p,f,n,i,s,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&gs(f,p))l(p,f,n,i,s,h,r,o,a),ho(h,f);else if(cl(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:w}=h;y>0?setTimeout(()=>{h.pendingId===w&&h.fallback(d)},y):y===0&&h.fallback(d)}}function fm(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:g,remove:m}}=c;let _;const y=uA(t);y&&e!=null&&e.pendingBranch&&(_=e.pendingId,e.deps++);const w=t.props?nS(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,S=!1){const{vnode:I,activeBranch:x,pendingBranch:L,pendingId:U,effects:B,parentComponent:Y,container:Ve}=b;if(b.isHydrating)b.isHydrating=!1;else if(!T){const ne=x&&L.transition&&L.transition.mode==="out-in";ne&&(x.transition.afterLeave=()=>{U===b.pendingId&&f(L,Ve,fe,0)});let{anchor:fe}=b;x&&(fe=p(x),d(x,Y,b,!0)),ne||f(L,Ve,fe,0)}ho(b,L),b.pendingBranch=null,b.isInFallback=!1;let Ne=b.parent,ce=!1;for(;Ne;){if(Ne.pendingBranch){Ne.effects.push(...B),ce=!0;break}Ne=Ne.parent}ce||a2(B),b.effects=[],y&&e&&e.pendingBranch&&_===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),cl(I,"onResolve")},fallback(T){if(!b.pendingBranch)return;const{vnode:S,activeBranch:I,parentComponent:x,container:L,isSVG:U}=b;cl(S,"onFallback");const B=p(I),Y=()=>{b.isInFallback&&(h(null,T,L,B,x,null,U,a,l),ho(b,T))},Ve=T.transition&&T.transition.mode==="out-in";Ve&&(I.transition.afterLeave=Y),b.isInFallback=!0,d(I,x,null,!0),Ve||Y()},move(T,S,I){b.activeBranch&&f(b.activeBranch,T,S,I),b.container=T},next(){return b.activeBranch&&p(b.activeBranch)},registerDep(T,S){const I=!!b.pendingBranch;I&&b.deps++;const x=T.vnode.el;T.asyncDep.catch(L=>{Hl(L,T,0)}).then(L=>{if(T.isUnmounted||b.isUnmounted||b.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:U}=T;mp(T,L,!1),x&&(U.el=x);const B=!x&&T.subTree.el;S(T,U,g(x||T.subTree.el),x?null:p(T.subTree),b,o,l),B&&m(B),hm(T,U.el),I&&--b.deps===0&&b.resolve()})},unmount(T,S){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,T,S),b.pendingBranch&&d(b.pendingBranch,n,T,S)}};return b}function aA(t,e,n,i,s,r,o,a,l){const c=e.suspense=fm(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function lA(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=tv(i?n.default:n),t.ssFallback=i?tv(n.fallback):X(Ki)}function tv(t){let e;if(ye(t)){const n=Co&&t._c;n&&(t._d=!1,M()),t=t(),n&&(t._d=!0,e=Un,C2())}return re(t)&&(t=JS(t)),t=qn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function cA(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):a2(t)}function ho(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,s=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=s,hm(i,s))}function uA(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function hA(t,e){return dm(t,null,{flush:"post"})}const Mc={};function xs(t,e,n){return dm(t,e,n)}function dm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=tt){var a;const l=Zg()===((a=Ot)==null?void 0:a.scope)?Ot:null;let c,u=!1,h=!1;if(ht(t)?(c=()=>t.value,u=zu(t)):zi(t)?(c=()=>t,i=!0):re(t)?(h=!0,u=t.some(b=>zi(b)||zu(b)),c=()=>t.map(b=>{if(ht(b))return b.value;if(zi(b))return cr(b);if(ye(b))return Cs(b,l,2)})):ye(t)?e?c=()=>Cs(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Zn(t,l,3,[d])}:c=Jn,e&&i){const b=c;c=()=>cr(b())}let f,d=b=>{f=y.onStop=()=>{Cs(b,l,4)}},p;if(ul)if(d=Jn,e?n&&Zn(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const b=ZA();p=b.__watcherHandles||(b.__watcherHandles=[])}else return Jn;let g=h?new Array(t.length).fill(Mc):Mc;const m=()=>{if(y.active)if(e){const b=y.run();(i||u||(h?b.some((T,S)=>rl(T,g[S])):rl(b,g)))&&(f&&f(),Zn(e,l,3,[b,g===Mc?void 0:h&&g[0]===Mc?[]:g,d]),g=b)}else y.run()};m.allowRecurse=!!e;let _;s==="sync"?_=m:s==="post"?_=()=>pn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),_=()=>cm(m));const y=new tm(c,_);e?n?m():g=y.run():s==="post"?pn(y.run.bind(y),l&&l.suspense):y.run();const w=()=>{y.stop(),l&&l.scope&&Gg(l.scope.effects,y)};return p&&p.push(w),w}function fA(t,e,n){const i=this.proxy,s=Tt(t)?t.includes(".")?h2(i,t):()=>i[t]:t.bind(i,i);let r;ye(e)?r=e:(r=e.handler,n=e);const o=Ot;Ns(this);const a=dm(s,r.bind(i),n);return o?Ns(o):ks(),a}function h2(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function cr(t,e){if(!Qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))cr(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)cr(t[n],e);else if(qo(t)||co(t))t.forEach(n=>{cr(n,e)});else if(Uw(t))for(const n in t)cr(t[n],e);return t}function gn(t,e){const n=xn;if(n===null)return t;const i=of(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=tt]=e[r];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&cr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ko(),Zn(l,n,8,[t.el,a,t,e]),Go())}}function jl(t,e){return ye(t)?(()=>Lt({name:t.name},e,{setup:t}))():t}const wu=t=>!!t.type.__asyncLoader,f2=t=>t.type.__isKeepAlive;function dA(t,e){d2(t,"a",e)}function pA(t,e){d2(t,"da",e)}function d2(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(nf(e,i,n),n){let s=n.parent;for(;s&&s.parent;)f2(s.parent.vnode)&&gA(i,e,n,s),s=s.parent}}function gA(t,e,n,i){const s=nf(e,t,i,!0);gm(()=>{Gg(i[e],s)},n)}function nf(t,e,n=Ot,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ko(),Ns(n);const a=Zn(e,n,t,o);return ks(),Go(),a});return i?s.unshift(r):s.push(r),r}}const ns=t=>(e,n=Ot)=>(!ul||t==="sp")&&nf(t,(...i)=>e(...i),n),mA=ns("bm"),pm=ns("m"),_A=ns("bu"),yA=ns("u"),p2=ns("bum"),gm=ns("um"),g2=ns("sp"),vA=ns("rtg"),bA=ns("rtc");function wA(t,e=Ot){nf("ec",t,e)}const m2="components";function Wl(t,e){return TA(m2,t,!0,e)||t}const EA=Symbol.for("v-ndc");function TA(t,e,n=!0,i=!1){const s=xn||Ot;if(s){const r=s.type;if(t===m2){const a=QA(r,!1);if(a&&(a===e||a===vi(e)||a===Xh(vi(e))))return r}const o=nv(s[t]||r[t],e)||nv(s.appContext[t],e);return!o&&i?r:o}}function nv(t,e){return t&&(t[e]||t[vi(e)]||t[Xh(vi(e))])}function un(t,e,n,i){let s;const r=n&&n[i];if(re(t)||Tt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const hp=t=>t?S2(t)?of(t)||t.proxy:hp(t.parent):null,Fa=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hp(t.parent),$root:t=>hp(t.root),$emit:t=>t.emit,$options:t=>mm(t),$forceUpdate:t=>t.f||(t.f=()=>cm(t.update)),$nextTick:t=>t.n||(t.n=lm.bind(t.proxy)),$watch:t=>fA.bind(t)}),ud=(t,e)=>t!==tt&&!t.__isScriptSetup&&Ue(t,e),IA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ud(i,e))return o[e]=1,i[e];if(s!==tt&&Ue(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ue(c,e))return o[e]=3,r[e];if(n!==tt&&Ue(n,e))return o[e]=4,n[e];fp&&(o[e]=0)}}const u=Fa[e];let h,f;if(u)return e==="$attrs"&&En(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==tt&&Ue(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ue(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ud(s,e)?(s[e]=n,!0):i!==tt&&Ue(i,e)?(i[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==tt&&Ue(t,o)||ud(e,o)||(a=r[0])&&Ue(a,o)||Ue(i,o)||Ue(Fa,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function iv(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function ei(t){const e=Qo();let n=t();return ks(),Yg(n)&&(n=n.catch(i=>{throw Ns(e),i})),[n,()=>Ns(e)]}let fp=!0;function CA(t){const e=mm(t),n=t.proxy,i=t.ctx;fp=!1,e.beforeCreate&&sv(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:w,unmounted:b,render:T,renderTracked:S,renderTriggered:I,errorCaptured:x,serverPrefetch:L,expose:U,inheritAttrs:B,components:Y,directives:Ve,filters:Ne}=e;if(c&&xA(c,i,null),o)for(const fe in o){const Le=o[fe];ye(Le)&&(i[fe]=Le.bind(n))}if(s){const fe=s.call(n,n);Qe(fe)&&(t.data=qi(fe))}if(fp=!0,r)for(const fe in r){const Le=r[fe],jt=ye(Le)?Le.bind(n,n):ye(Le.get)?Le.get.bind(n,n):Jn,hn=!ye(Le)&&ye(Le.set)?Le.set.bind(n):Jn,Wt=qe({get:jt,set:hn});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:_t=>Wt.value=_t})}if(a)for(const fe in a)_2(a[fe],i,n,fe);if(l){const fe=ye(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(Le=>{Eu(Le,fe[Le])})}u&&sv(u,t,"c");function ne(fe,Le){re(Le)?Le.forEach(jt=>fe(jt.bind(n))):Le&&fe(Le.bind(n))}if(ne(mA,h),ne(pm,f),ne(_A,d),ne(yA,p),ne(dA,g),ne(pA,m),ne(wA,x),ne(bA,S),ne(vA,I),ne(p2,y),ne(gm,b),ne(g2,L),re(U))if(U.length){const fe=t.exposed||(t.exposed={});U.forEach(Le=>{Object.defineProperty(fe,Le,{get:()=>n[Le],set:jt=>n[Le]=jt})})}else t.exposed||(t.exposed={});T&&t.render===Jn&&(t.render=T),B!=null&&(t.inheritAttrs=B),Y&&(t.components=Y),Ve&&(t.directives=Ve)}function xA(t,e,n=Jn){re(t)&&(t=dp(t));for(const i in t){const s=t[i];let r;Qe(s)?"default"in s?r=wn(s.from||i,s.default,!0):r=wn(s.from||i):r=wn(s),ht(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function sv(t,e,n){Zn(re(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _2(t,e,n,i){const s=i.includes(".")?h2(n,i):()=>n[i];if(Tt(t)){const r=e[t];ye(r)&&xs(s,r)}else if(ye(t))xs(s,t.bind(n));else if(Qe(t))if(re(t))t.forEach(r=>_2(r,e,n,i));else{const r=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(r)&&xs(s,r,t)}}function mm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ju(l,c,o,!0)),ju(l,e,o)),Qe(e)&&r.set(e,l),l}function ju(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ju(t,r,n,!0),s&&s.forEach(o=>ju(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=kA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kA={data:rv,props:ov,emits:ov,methods:Ca,computed:Ca,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Ca,directives:Ca,watch:AA,provide:rv,inject:SA};function rv(t,e){return e?t?function(){return Lt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function SA(t,e){return Ca(dp(t),dp(e))}function dp(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function Ca(t,e){return t?Lt(Object.create(null),t,e):e}function ov(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Lt(Object.create(null),iv(t),iv(e??{})):e}function AA(t,e){if(!t)return e;if(!e)return t;const n=Lt(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function y2(){return{app:null,config:{isNativeTag:Xk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function DA(t,e){return function(i,s=null){ye(i)||(i=Lt({},i)),s!=null&&!Qe(s)&&(s=null);const r=y2(),o=new Set;let a=!1;const l=r.app={_uid:RA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:D2,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ye(c.install)?(o.add(c),c.install(l,...u)):ye(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=X(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,of(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Wu=l;try{return c()}finally{Wu=null}}};return l}}let Wu=null;function Eu(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function wn(t,e,n=!1){const i=Ot||xn;if(i||Wu){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Wu._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(i&&i.proxy):e}}function OA(t,e,n,i=!1){const s={},r={};Bu(r,rf,1),t.propsDefaults=Object.create(null),v2(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:US(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function MA(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ef(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ue(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=vi(f);s[p]=pp(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{v2(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ue(e,h)&&((u=Lr(h))===h||!Ue(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=pp(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ue(e,h))&&(delete r[h],c=!0)}c&&Wi(t,"set","$attrs")}function v2(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vu(l))continue;const c=e[l];let u;s&&Ue(s,u=vi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ef(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ie(n),c=a||tt;for(let u=0;u<r.length;u++){const h=r[u];n[h]=pp(s,l,h,c[h],t,!Ue(c,h))}}return o}function pp(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ue(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ye(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Ns(s),i=c[n]=l.call(null,e),ks())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}function b2(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ye(t)){const u=h=>{l=!0;const[f,d]=b2(h,e,!0);Lt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Qe(t)&&i.set(t,lo),lo;if(re(r))for(let u=0;u<r.length;u++){const h=vi(r[u]);av(h)&&(o[h]=tt)}else if(r)for(const u in r){const h=vi(u);if(av(h)){const f=r[u],d=o[h]=re(f)||ye(f)?{type:f}:Lt({},f);if(d){const p=uv(Boolean,d.type),g=uv(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||Ue(d,"default"))&&a.push(h)}}}const c=[o,a];return Qe(t)&&i.set(t,c),c}function av(t){return t[0]!=="$"}function lv(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cv(t,e){return lv(t)===lv(e)}function uv(t,e){return re(e)?e.findIndex(n=>cv(n,t)):ye(e)&&cv(e,t)?0:-1}const w2=t=>t[0]==="_"||t==="$stable",_m=t=>re(t)?t.map(qn):[qn(t)],PA=(t,e,n)=>{if(e._n)return e;const i=um((...s)=>_m(e(...s)),n);return i._c=!1,i},E2=(t,e,n)=>{const i=t._ctx;for(const s in t){if(w2(s))continue;const r=t[s];if(ye(r))e[s]=PA(s,r,i);else if(r!=null){const o=_m(r);e[s]=()=>o}}},T2=(t,e)=>{const n=_m(e);t.slots.default=()=>n},NA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),Bu(e,"_",n)):E2(e,t.slots={})}else t.slots={},e&&T2(t,e);Bu(t.slots,rf,1)},LA=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Lt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,E2(e,s)),o=e}else e&&(T2(t,e),o={default:1});if(r)for(const a in s)!w2(a)&&!(a in o)&&delete s[a]};function gp(t,e,n,i,s=!1){if(re(t)){t.forEach((f,d)=>gp(f,e&&(re(e)?e[d]:e),n,i,s));return}if(wu(i)&&!s)return;const r=i.shapeFlag&4?of(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,Ue(h,c)&&(h[c]=null)):ht(c)&&(c.value=null)),ye(l))Cs(l,a,12,[o,u]);else{const f=Tt(l),d=ht(l);if(f||d){const p=()=>{if(t.f){const g=f?Ue(h,l)?h[l]:u[l]:l.value;s?re(g)&&Gg(g,r):re(g)?g.includes(r)||g.push(r):f?(u[l]=[r],Ue(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ue(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,pn(p,n)):p()}}}const pn=cA;function FA(t){return UA(t)}function UA(t,e){const n=op();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Jn,insertStaticContent:p}=t,g=(v,E,A,R=null,P=null,z=null,K=!1,V=null,H=!!E.dynamicChildren)=>{if(v===E)return;v&&!gs(v,E)&&(R=q(v),_t(v,P,z,!0),v=null),E.patchFlag===-2&&(H=!1,E.dynamicChildren=null);const{type:N,ref:ae,shapeFlag:J}=E;switch(N){case sf:m(v,E,A,R);break;case Ki:_(v,E,A,R);break;case Tu:v==null&&y(E,A,R,K);break;case we:Y(v,E,A,R,P,z,K,V,H);break;default:J&1?T(v,E,A,R,P,z,K,V,H):J&6?Ve(v,E,A,R,P,z,K,V,H):(J&64||J&128)&&N.process(v,E,A,R,P,z,K,V,H,Fe)}ae!=null&&P&&gp(ae,v&&v.ref,z,E||v,!E)},m=(v,E,A,R)=>{if(v==null)i(E.el=a(E.children),A,R);else{const P=E.el=v.el;E.children!==v.children&&c(P,E.children)}},_=(v,E,A,R)=>{v==null?i(E.el=l(E.children||""),A,R):E.el=v.el},y=(v,E,A,R)=>{[v.el,v.anchor]=p(v.children,E,A,R,v.el,v.anchor)},w=({el:v,anchor:E},A,R)=>{let P;for(;v&&v!==E;)P=f(v),i(v,A,R),v=P;i(E,A,R)},b=({el:v,anchor:E})=>{let A;for(;v&&v!==E;)A=f(v),s(v),v=A;s(E)},T=(v,E,A,R,P,z,K,V,H)=>{K=K||E.type==="svg",v==null?S(E,A,R,P,z,K,V,H):L(v,E,P,z,K,V,H)},S=(v,E,A,R,P,z,K,V)=>{let H,N;const{type:ae,props:J,shapeFlag:le,transition:me,dirs:Ce}=v;if(H=v.el=o(v.type,z,J&&J.is,J),le&8?u(H,v.children):le&16&&x(v.children,H,null,R,P,z&&ae!=="foreignObject",K,V),Ce&&Qs(v,null,R,"created"),I(H,v,v.scopeId,K,R),J){for(const Ke in J)Ke!=="value"&&!vu(Ke)&&r(H,Ke,null,J[Ke],z,v.children,R,P,W);"value"in J&&r(H,"value",null,J.value),(N=J.onVnodeBeforeMount)&&li(N,R,v)}Ce&&Qs(v,null,R,"beforeMount");const Je=(!P||P&&!P.pendingBranch)&&me&&!me.persisted;Je&&me.beforeEnter(H),i(H,E,A),((N=J&&J.onVnodeMounted)||Je||Ce)&&pn(()=>{N&&li(N,R,v),Je&&me.enter(H),Ce&&Qs(v,null,R,"mounted")},P)},I=(v,E,A,R,P)=>{if(A&&d(v,A),R)for(let z=0;z<R.length;z++)d(v,R[z]);if(P){let z=P.subTree;if(E===z){const K=P.vnode;I(v,K,K.scopeId,K.slotScopeIds,P.parent)}}},x=(v,E,A,R,P,z,K,V,H=0)=>{for(let N=H;N<v.length;N++){const ae=v[N]=V?ds(v[N]):qn(v[N]);g(null,ae,E,A,R,P,z,K,V)}},L=(v,E,A,R,P,z,K)=>{const V=E.el=v.el;let{patchFlag:H,dynamicChildren:N,dirs:ae}=E;H|=v.patchFlag&16;const J=v.props||tt,le=E.props||tt;let me;A&&Js(A,!1),(me=le.onVnodeBeforeUpdate)&&li(me,A,E,v),ae&&Qs(E,v,A,"beforeUpdate"),A&&Js(A,!0);const Ce=P&&E.type!=="foreignObject";if(N?U(v.dynamicChildren,N,V,A,R,Ce,z):K||Le(v,E,V,null,A,R,Ce,z,!1),H>0){if(H&16)B(V,E,J,le,A,R,P);else if(H&2&&J.class!==le.class&&r(V,"class",null,le.class,P),H&4&&r(V,"style",J.style,le.style,P),H&8){const Je=E.dynamicProps;for(let Ke=0;Ke<Je.length;Ke++){const yt=Je[Ke],jn=J[yt],Kr=le[yt];(Kr!==jn||yt==="value")&&r(V,yt,jn,Kr,P,v.children,A,R,W)}}H&1&&v.children!==E.children&&u(V,E.children)}else!K&&N==null&&B(V,E,J,le,A,R,P);((me=le.onVnodeUpdated)||ae)&&pn(()=>{me&&li(me,A,E,v),ae&&Qs(E,v,A,"updated")},R)},U=(v,E,A,R,P,z,K)=>{for(let V=0;V<E.length;V++){const H=v[V],N=E[V],ae=H.el&&(H.type===we||!gs(H,N)||H.shapeFlag&70)?h(H.el):A;g(H,N,ae,null,R,P,z,K,!0)}},B=(v,E,A,R,P,z,K)=>{if(A!==R){if(A!==tt)for(const V in A)!vu(V)&&!(V in R)&&r(v,V,A[V],null,K,E.children,P,z,W);for(const V in R){if(vu(V))continue;const H=R[V],N=A[V];H!==N&&V!=="value"&&r(v,V,N,H,K,E.children,P,z,W)}"value"in R&&r(v,"value",A.value,R.value)}},Y=(v,E,A,R,P,z,K,V,H)=>{const N=E.el=v?v.el:a(""),ae=E.anchor=v?v.anchor:a("");let{patchFlag:J,dynamicChildren:le,slotScopeIds:me}=E;me&&(V=V?V.concat(me):me),v==null?(i(N,A,R),i(ae,A,R),x(E.children,A,ae,P,z,K,V,H)):J>0&&J&64&&le&&v.dynamicChildren?(U(v.dynamicChildren,le,A,P,z,K,V),(E.key!=null||P&&E===P.subTree)&&I2(v,E,!0)):Le(v,E,A,ae,P,z,K,V,H)},Ve=(v,E,A,R,P,z,K,V,H)=>{E.slotScopeIds=V,v==null?E.shapeFlag&512?P.ctx.activate(E,A,R,K,H):Ne(E,A,R,P,z,K,H):ce(v,E,H)},Ne=(v,E,A,R,P,z,K)=>{const V=v.component=qA(v,R,P);if(f2(v)&&(V.ctx.renderer=Fe),KA(V),V.asyncDep){if(P&&P.registerDep(V,ne),!v.el){const H=V.subTree=X(Ki);_(null,H,E,A)}return}ne(V,v,E,A,P,z,K)},ce=(v,E,A)=>{const R=E.component=v.component;if(tA(v,E,A))if(R.asyncDep&&!R.asyncResolved){fe(R,E,A);return}else R.next=E,YS(R.update),R.update();else E.el=v.el,R.vnode=E},ne=(v,E,A,R,P,z,K)=>{const V=()=>{if(v.isMounted){let{next:ae,bu:J,u:le,parent:me,vnode:Ce}=v,Je=ae,Ke;Js(v,!1),ae?(ae.el=Ce.el,fe(v,ae,K)):ae=Ce,J&&bu(J),(Ke=ae.props&&ae.props.onVnodeBeforeUpdate)&&li(Ke,me,ae,Ce),Js(v,!0);const yt=cd(v),jn=v.subTree;v.subTree=yt,g(jn,yt,h(jn.el),q(jn),v,P,z),ae.el=yt.el,Je===null&&hm(v,yt.el),le&&pn(le,P),(Ke=ae.props&&ae.props.onVnodeUpdated)&&pn(()=>li(Ke,me,ae,Ce),P)}else{let ae;const{el:J,props:le}=E,{bm:me,m:Ce,parent:Je}=v,Ke=wu(E);if(Js(v,!1),me&&bu(me),!Ke&&(ae=le&&le.onVnodeBeforeMount)&&li(ae,Je,E),Js(v,!0),J&&Ee){const yt=()=>{v.subTree=cd(v),Ee(J,v.subTree,v,P,null)};Ke?E.type.__asyncLoader().then(()=>!v.isUnmounted&&yt()):yt()}else{const yt=v.subTree=cd(v);g(null,yt,A,R,v,P,z),E.el=yt.el}if(Ce&&pn(Ce,P),!Ke&&(ae=le&&le.onVnodeMounted)){const yt=E;pn(()=>li(ae,Je,yt),P)}(E.shapeFlag&256||Je&&wu(Je.vnode)&&Je.vnode.shapeFlag&256)&&v.a&&pn(v.a,P),v.isMounted=!0,E=A=R=null}},H=v.effect=new tm(V,()=>cm(N),v.scope),N=v.update=()=>H.run();N.id=v.uid,Js(v,!0),N()},fe=(v,E,A)=>{E.component=v;const R=v.vnode.props;v.vnode=E,v.next=null,MA(v,E.props,R,A),LA(v,E.children,A),Ko(),Zy(),Go()},Le=(v,E,A,R,P,z,K,V,H=!1)=>{const N=v&&v.children,ae=v?v.shapeFlag:0,J=E.children,{patchFlag:le,shapeFlag:me}=E;if(le>0){if(le&128){hn(N,J,A,R,P,z,K,V,H);return}else if(le&256){jt(N,J,A,R,P,z,K,V,H);return}}me&8?(ae&16&&W(N,P,z),J!==N&&u(A,J)):ae&16?me&16?hn(N,J,A,R,P,z,K,V,H):W(N,P,z,!0):(ae&8&&u(A,""),me&16&&x(J,A,R,P,z,K,V,H))},jt=(v,E,A,R,P,z,K,V,H)=>{v=v||lo,E=E||lo;const N=v.length,ae=E.length,J=Math.min(N,ae);let le;for(le=0;le<J;le++){const me=E[le]=H?ds(E[le]):qn(E[le]);g(v[le],me,A,null,P,z,K,V,H)}N>ae?W(v,P,z,!0,!1,J):x(E,A,R,P,z,K,V,H,J)},hn=(v,E,A,R,P,z,K,V,H)=>{let N=0;const ae=E.length;let J=v.length-1,le=ae-1;for(;N<=J&&N<=le;){const me=v[N],Ce=E[N]=H?ds(E[N]):qn(E[N]);if(gs(me,Ce))g(me,Ce,A,null,P,z,K,V,H);else break;N++}for(;N<=J&&N<=le;){const me=v[J],Ce=E[le]=H?ds(E[le]):qn(E[le]);if(gs(me,Ce))g(me,Ce,A,null,P,z,K,V,H);else break;J--,le--}if(N>J){if(N<=le){const me=le+1,Ce=me<ae?E[me].el:R;for(;N<=le;)g(null,E[N]=H?ds(E[N]):qn(E[N]),A,Ce,P,z,K,V,H),N++}}else if(N>le)for(;N<=J;)_t(v[N],P,z,!0),N++;else{const me=N,Ce=N,Je=new Map;for(N=Ce;N<=le;N++){const Tn=E[N]=H?ds(E[N]):qn(E[N]);Tn.key!=null&&Je.set(Tn.key,N)}let Ke,yt=0;const jn=le-Ce+1;let Kr=!1,$y=0;const fa=new Array(jn);for(N=0;N<jn;N++)fa[N]=0;for(N=me;N<=J;N++){const Tn=v[N];if(yt>=jn){_t(Tn,P,z,!0);continue}let ai;if(Tn.key!=null)ai=Je.get(Tn.key);else for(Ke=Ce;Ke<=le;Ke++)if(fa[Ke-Ce]===0&&gs(Tn,E[Ke])){ai=Ke;break}ai===void 0?_t(Tn,P,z,!0):(fa[ai-Ce]=N+1,ai>=$y?$y=ai:Kr=!0,g(Tn,E[ai],A,null,P,z,K,V,H),yt++)}const zy=Kr?BA(fa):lo;for(Ke=zy.length-1,N=jn-1;N>=0;N--){const Tn=Ce+N,ai=E[Tn],Hy=Tn+1<ae?E[Tn+1].el:R;fa[N]===0?g(null,ai,A,Hy,P,z,K,V,H):Kr&&(Ke<0||N!==zy[Ke]?Wt(ai,A,Hy,2):Ke--)}}},Wt=(v,E,A,R,P=null)=>{const{el:z,type:K,transition:V,children:H,shapeFlag:N}=v;if(N&6){Wt(v.component.subTree,E,A,R);return}if(N&128){v.suspense.move(E,A,R);return}if(N&64){K.move(v,E,A,Fe);return}if(K===we){i(z,E,A);for(let J=0;J<H.length;J++)Wt(H[J],E,A,R);i(v.anchor,E,A);return}if(K===Tu){w(v,E,A);return}if(R!==2&&N&1&&V)if(R===0)V.beforeEnter(z),i(z,E,A),pn(()=>V.enter(z),P);else{const{leave:J,delayLeave:le,afterLeave:me}=V,Ce=()=>i(z,E,A),Je=()=>{J(z,()=>{Ce(),me&&me()})};le?le(z,Ce,Je):Je()}else i(z,E,A)},_t=(v,E,A,R=!1,P=!1)=>{const{type:z,props:K,ref:V,children:H,dynamicChildren:N,shapeFlag:ae,patchFlag:J,dirs:le}=v;if(V!=null&&gp(V,null,A,v,!0),ae&256){E.ctx.deactivate(v);return}const me=ae&1&&le,Ce=!wu(v);let Je;if(Ce&&(Je=K&&K.onVnodeBeforeUnmount)&&li(Je,E,v),ae&6)D(v.component,A,R);else{if(ae&128){v.suspense.unmount(A,R);return}me&&Qs(v,null,E,"beforeUnmount"),ae&64?v.type.remove(v,E,A,P,Fe,R):N&&(z!==we||J>0&&J&64)?W(N,E,A,!1,!0):(z===we&&J&384||!P&&ae&16)&&W(H,E,A),R&&Nn(v)}(Ce&&(Je=K&&K.onVnodeUnmounted)||me)&&pn(()=>{Je&&li(Je,E,v),me&&Qs(v,null,E,"unmounted")},A)},Nn=v=>{const{type:E,el:A,anchor:R,transition:P}=v;if(E===we){oi(A,R);return}if(E===Tu){b(v);return}const z=()=>{s(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(v.shapeFlag&1&&P&&!P.persisted){const{leave:K,delayLeave:V}=P,H=()=>K(A,z);V?V(v.el,z,H):H()}else z()},oi=(v,E)=>{let A;for(;v!==E;)A=f(v),s(v),v=A;s(E)},D=(v,E,A)=>{const{bum:R,scope:P,update:z,subTree:K,um:V}=v;R&&bu(R),P.stop(),z&&(z.active=!1,_t(K,v,E,A)),V&&pn(V,E),pn(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},W=(v,E,A,R=!1,P=!1,z=0)=>{for(let K=z;K<v.length;K++)_t(v[K],E,A,R,P)},q=v=>v.shapeFlag&6?q(v.component.subTree):v.shapeFlag&128?v.suspense.next():f(v.anchor||v.el),se=(v,E,A)=>{v==null?E._vnode&&_t(E._vnode,null,null,!0):g(E._vnode||null,v,E,null,null,null,A),Zy(),l2(),E._vnode=v},Fe={p:g,um:_t,m:Wt,r:Nn,mt:Ne,mc:x,pc:Le,pbc:U,n:q,o:t};let ft,Ee;return e&&([ft,Ee]=e(Fe)),{render:se,hydrate:ft,createApp:DA(se,ft)}}function Js({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function I2(t,e,n=!1){const i=t.children,s=e.children;if(re(i)&&re(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ds(s[r]),a.el=o.el),n||I2(o,a)),a.type===sf&&(a.el=o.el)}}function BA(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const VA=t=>t.__isTeleport,we=Symbol.for("v-fgt"),sf=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Tu=Symbol.for("v-stc"),Ua=[];let Un=null;function M(t=!1){Ua.push(Un=t?null:[])}function C2(){Ua.pop(),Un=Ua[Ua.length-1]||null}let Co=1;function hv(t){Co+=t}function x2(t){return t.dynamicChildren=Co>0?Un||lo:null,C2(),Co>0&&Un&&Un.push(t),t}function $(t,e,n,i,s,r){return x2(k(t,e,n,i,s,r,!0))}function $t(t,e,n,i,s){return x2(X(t,e,n,i,s,!0))}function qu(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return t.type===e.type&&t.key===e.key}const rf="__vInternal",k2=({key:t})=>t??null,Iu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Tt(t)||ht(t)||ye(t)?{i:xn,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,i=0,s=null,r=t===we?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&k2(e),ref:e&&Iu(e),scopeId:tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(ym(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Tt(n)?8:16),Co>0&&!o&&Un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Un.push(l),l}const X=$A;function $A(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===EA)&&(t=Ki),qu(t)){const a=xo(t,e,!0);return n&&ym(a,n),Co>0&&!r&&Un&&(a.shapeFlag&6?Un[Un.indexOf(t)]=a:Un.push(a)),a.patchFlag|=-2,a}if(JA(t)&&(t=t.__vccOpts),e){e=zA(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=yn(a)),Qe(l)&&(Jh(l)&&!re(l)&&(l=Lt({},l)),e.style=Ms(l))}const o=Tt(t)?1:nA(t)?128:VA(t)?64:Qe(t)?4:ye(t)?2:0;return k(t,e,n,i,s,o,r,!0)}function zA(t){return t?Jh(t)||rf in t?Lt({},t):t:null}function xo(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?HA(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&k2(a),ref:e&&e.ref?n&&s?re(s)?s.concat(Iu(e)):[s,Iu(e)]:Iu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xo(t.ssContent),ssFallback:t.ssFallback&&xo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Te(t=" ",e=0){return X(sf,null,t,e)}function Re(t="",e=!1){return e?(M(),$t(Ki,null,t)):X(Ki,null,t)}function qn(t){return t==null||typeof t=="boolean"?X(Ki):re(t)?X(we,null,t.slice()):typeof t=="object"?ds(t):X(sf,null,String(t))}function ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xo(t)}function ym(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ym(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(rf in e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:xn},n=32):(e=String(e),i&64?(n=16,e=[Te(e)]):n=8);t.children=e,t.shapeFlag|=n}function HA(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=yn([e.class,i.class]));else if(s==="style")e.style=Ms([e.style,i.style]);else if(Gh(s)){const r=e[s],o=i[s];o&&r!==o&&!(re(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function li(t,e,n,i=null){Zn(t,e,7,[n,i])}const jA=y2();let WA=0;function qA(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||jA,r={uid:WA++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $w(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:b2(i,s),emitsOptions:u2(i,s),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=QS.bind(null,r),t.ce&&t.ce(r),r}let Ot=null;const Qo=()=>Ot||xn;let vm,Gr,fv="__VUE_INSTANCE_SETTERS__";(Gr=op()[fv])||(Gr=op()[fv]=[]),Gr.push(t=>Ot=t),vm=t=>{Gr.length>1?Gr.forEach(e=>e(t)):Gr[0](t)};const Ns=t=>{vm(t),t.scope.on()},ks=()=>{Ot&&Ot.scope.off(),vm(null)};function S2(t){return t.vnode.shapeFlag&4}let ul=!1;function KA(t,e=!1){ul=e;const{props:n,children:i}=t.vnode,s=S2(t);OA(t,n,s,e),NA(t,i);const r=s?GA(t,e):void 0;return ul=!1,r}function GA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Io(new Proxy(t.ctx,IA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?XA(t):null;Ns(t),Ko();const r=Cs(i,t,0,[t.props,s]);if(Go(),ks(),Yg(r)){if(r.then(ks,ks),e)return r.then(o=>{mp(t,o,e)}).catch(o=>{Hl(o,t,0)});t.asyncDep=r}else mp(t,r,e)}else A2(t,e)}function mp(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=i2(e)),A2(t,n)}let dv;function A2(t,e,n){const i=t.type;if(!t.render){if(!e&&dv&&!i.render){const s=i.template||mm(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:r,delimiters:a},o),l);i.render=dv(s,c)}}t.render=i.render||Jn}Ns(t),Ko(),CA(t),Go(),ks()}function YA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return En(t,"get","$attrs"),e[n]}}))}function XA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return YA(t)},slots:t.slots,emit:t.emit,expose:e}}function of(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(i2(Io(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fa)return Fa[n](t)},has(e,n){return n in e||n in Fa}}))}function QA(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function JA(t){return ye(t)&&"__vccOpts"in t}const qe=(t,e)=>qS(t,e,ul);function ql(t,e,n){const i=arguments.length;return i===2?Qe(e)&&!re(e)?qu(e)?X(t,null,[e]):X(t,e):X(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&qu(n)&&(n=[n]),X(t,e,n))}const R2=Symbol.for("v-scx"),ZA=()=>wn(R2),D2="3.3.4",e3="http://www.w3.org/2000/svg",lr=typeof document<"u"?document:null,pv=lr&&lr.createElement("template"),t3={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?lr.createElementNS(e3,t):lr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{pv.innerHTML=i?`<svg>${t}</svg>`:t;const a=pv.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function n3(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function i3(t,e,n){const i=t.style,s=Tt(n);if(n&&!s){if(e&&!Tt(e))for(const r in e)n[r]==null&&_p(i,r,"");for(const r in n)_p(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const gv=/\s*!important$/;function _p(t,e,n){if(re(n))n.forEach(i=>_p(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=s3(t,e);gv.test(n)?t.setProperty(Lr(i),n.replace(gv,""),"important"):t[i]=n}}const mv=["Webkit","Moz","ms"],hd={};function s3(t,e){const n=hd[e];if(n)return n;let i=vi(e);if(i!=="filter"&&i in t)return hd[e]=i;i=Xh(i);for(let s=0;s<mv.length;s++){const r=mv[s]+i;if(r in t)return hd[e]=r}return e}const _v="http://www.w3.org/1999/xlink";function r3(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_v,e.slice(6,e.length)):t.setAttributeNS(_v,e,n);else{const r=lS(e);n==null||r&&!Bw(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function o3(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bw(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ms(t,e,n,i){t.addEventListener(e,n,i)}function a3(t,e,n,i){t.removeEventListener(e,n,i)}function l3(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=c3(e);if(i){const c=r[e]=f3(i,s);ms(t,a,c,l)}else o&&(a3(t,a,o,l),r[e]=void 0)}}const yv=/(?:Once|Passive|Capture)$/;function c3(t){let e;if(yv.test(t)){e={};let i;for(;i=t.match(yv);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let fd=0;const u3=Promise.resolve(),h3=()=>fd||(u3.then(()=>fd=0),fd=Date.now());function f3(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Zn(d3(i,n.value),e,5,[i])};return n.value=t,n.attached=h3(),n}function d3(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const vv=/^on[a-z]/,p3=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?n3(t,i,s):e==="style"?i3(t,n,i):Gh(e)?Kg(e)||l3(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):g3(t,e,i,s))?o3(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),r3(t,e,i,s))};function g3(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&vv.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vv.test(e)&&Tt(n)?!1:e in t}function m3(t){const e=Qo();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>vp(r,s))},i=()=>{const s=t(e.proxy);yp(e.subTree,s),n(s)};hA(i),pm(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),gm(()=>s.disconnect())})}function yp(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{yp(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)vp(t.el,e);else if(t.type===we)t.children.forEach(n=>yp(n,e));else if(t.type===Tu){let{el:n,anchor:i}=t;for(;n&&(vp(n,e),n!==i);)n=n.nextSibling}}function vp(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>bu(e,n):e};function _3(t){t.target.composing=!0}function bv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ko(s);const r=i||s.props&&s.props.type==="number";ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Vu(a)),t._assign(a)}),n&&ms(t,"change",()=>{t.value=t.value.trim()}),e||(ms(t,"compositionstart",_3),ms(t,"compositionend",bv),ms(t,"change",bv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=ko(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Vu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},y3={deep:!0,created(t,e,n){t._assign=ko(n),ms(t,"change",()=>{const i=t._modelValue,s=hl(t),r=t.checked,o=t._assign;if(re(i)){const a=Qg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(qo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(O2(t,r))})},mounted:wv,beforeUpdate(t,e,n){t._assign=ko(n),wv(t,e,n)}};function wv(t,{value:e,oldValue:n},i){t._modelValue=e,re(e)?t.checked=Qg(e,i.props.value)>-1:qo(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=zl(e,O2(t,!0)))}const v3={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=qo(e);ms(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Vu(hl(o)):hl(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=ko(i)},mounted(t,{value:e}){Ev(t,e)},beforeUpdate(t,e,n){t._assign=ko(n)},updated(t,{value:e}){Ev(t,e)}};function Ev(t,e){const n=t.multiple;if(!(n&&!re(e)&&!qo(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=hl(r);if(n)re(e)?r.selected=Qg(e,o)>-1:r.selected=e.has(o);else if(zl(hl(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function hl(t){return"_value"in t?t._value:t.value}function O2(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const b3=["ctrl","shift","alt","meta"],w3={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>b3.some(n=>t[`${n}Key`]&&!e.includes(n))},Ye=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=w3[e[s]];if(r&&r(n,e))return}return t(n,...i)},E3={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Li=(t,e)=>n=>{if(!("key"in n))return;const i=Lr(n.key);if(e.some(s=>s===i||E3[s]===i))return t(n)},T3=Lt({patchProp:p3},t3);let Tv;function I3(){return Tv||(Tv=FA(T3))}const C3=(...t)=>{const e=I3().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=x3(i);if(!s)return;const r=e._component;!ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function x3(t){return Tt(t)?document.querySelector(t):t}var k3=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let M2;const af=t=>M2=t,P2=Symbol();function bp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ba;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ba||(Ba={}));function S3(){const t=Jg(!0),e=t.run(()=>at({}));let n=[],i=[];const s=Io({install(r){af(s),s._a=r,r.provide(P2,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!k3?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const N2=()=>{};function Iv(t,e,n,i=N2){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Zg()&&zw(s),s}function Yr(t,...e){t.slice().forEach(n=>{n(...e)})}function wp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];bp(s)&&bp(i)&&t.hasOwnProperty(n)&&!ht(i)&&!zi(i)?t[n]=wp(s,i):t[n]=i}return t}const A3=Symbol();function R3(t){return!bp(t)||!t.hasOwnProperty(A3)}const{assign:fs}=Object;function D3(t){return!!(ht(t)&&t.effect)}function O3(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=$S(n.state.value[t]);return fs(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Io(qe(()=>{af(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=L2(t,c,e,n,i,!0),l}function L2(t,e,n={},i,s,r){let o;const a=fs({actions:{}},n),l={deep:!0};let c,u,h=Io([]),f=Io([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),at({});let g;function m(I){let x;c=u=!1,typeof I=="function"?(I(i.state.value[t]),x={type:Ba.patchFunction,storeId:t,events:d}):(wp(i.state.value[t],I),x={type:Ba.patchObject,payload:I,storeId:t,events:d});const L=g=Symbol();lm().then(()=>{g===L&&(c=!0)}),u=!0,Yr(h,x,i.state.value[t])}const _=r?function(){const{state:x}=n,L=x?x():{};this.$patch(U=>{fs(U,L)})}:N2;function y(){o.stop(),h=[],f=[],i._s.delete(t)}function w(I,x){return function(){af(i);const L=Array.from(arguments),U=[],B=[];function Y(ce){U.push(ce)}function Ve(ce){B.push(ce)}Yr(f,{args:L,name:I,store:T,after:Y,onError:Ve});let Ne;try{Ne=x.apply(this&&this.$id===t?this:T,L)}catch(ce){throw Yr(B,ce),ce}return Ne instanceof Promise?Ne.then(ce=>(Yr(U,ce),ce)).catch(ce=>(Yr(B,ce),Promise.reject(ce))):(Yr(U,Ne),Ne)}}const b={_p:i,$id:t,$onAction:Iv.bind(null,f),$patch:m,$reset:_,$subscribe(I,x={}){const L=Iv(h,I,x.detached,()=>U()),U=o.run(()=>xs(()=>i.state.value[t],B=>{(x.flush==="sync"?u:c)&&I({storeId:t,type:Ba.direct,events:d},B)},fs({},l,x)));return L},$dispose:y},T=qi(b);i._s.set(t,T);const S=i._e.run(()=>(o=Jg(),o.run(()=>e())));for(const I in S){const x=S[I];if(ht(x)&&!D3(x)||zi(x))r||(p&&R3(x)&&(ht(x)?x.value=p[I]:wp(x,p[I])),i.state.value[t][I]=x);else if(typeof x=="function"){const L=w(I,x);S[I]=L,a.actions[I]=x}}return fs(T,S),fs(Ie(T),S),Object.defineProperty(T,"$state",{get:()=>i.state.value[t],set:I=>{m(x=>{fs(x,I)})}}),i._p.forEach(I=>{fs(T,o.run(()=>I({store:T,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(T.$state,p),c=!0,u=!0,T}function bm(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Qo();return a=a||c&&wn(P2,null),a&&af(a),a=M2,a._s.has(i)||(r?L2(i,e,s,a):O3(i,s,a)),a._s.get(i)}return o.$id=i,o}function M3(t){{t=Ie(t);const e={};for(const n in t){const i=t[n];(ht(i)||zi(i))&&(e[n]=jS(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw Jo(e)},Jo=function(t){return new Error("Firebase Database ("+F2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},P3=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new N3;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B2=function(t){const e=U2(t);return lf.encodeByteArray(e,!0)},Ku=function(t){return B2(t).replace(/\./g,"")},Gu=function(t){try{return lf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(t){return V2(void 0,t)}function V2(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!F3(n)||(t[n]=V2(t[n],e[n]));return t}function F3(t){return t!=="__proto__"}/**
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
 */function U3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const B3=()=>U3().__FIREBASE_DEFAULTS__,V3=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gu(t[1]);return e&&JSON.parse(e)},wm=()=>{try{return B3()||V3()||$3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$2=t=>{var e,n;return(n=(e=wm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z3=t=>{const e=$2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},H3=()=>{var t;return(t=wm())===null||t===void 0?void 0:t.config},z2=t=>{var e;return(e=wm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function j3(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ku(JSON.stringify(n)),Ku(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function W3(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q3(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function j2(){return F2.NODE_ADMIN===!0}function W2(){try{return typeof indexedDB=="object"}catch{return!1}}function K3(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3="FirebaseError";class Ci extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=G3,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Y3(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ci(s,a,i)}}function Y3(t,e){return t.replace(X3,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const X3=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){return JSON.parse(t)}function Vt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=dl(Gu(r[0])||""),n=dl(Gu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Q3=function(t){const e=q2(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},J3=function(t){const e=q2(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function So(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Xu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Cv(r)&&Cv(o)){if(!Xu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Cv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function eR(t,e){const n=new tR(t,e);return n.subscribe.bind(n)}class tR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=dd),s.error===void 0&&(s.error=dd),s.complete===void 0&&(s.complete=dd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dd(){}function iR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,j(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cf=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class rR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new fl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aR(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oR(t){return t===ir?void 0:t}function aR(t){return t.instantiationMode==="EAGER"}/**
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
 */class lR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Be||(Be={}));const cR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},uR=Be.INFO,hR={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},fR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=hR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=uR,this._logHandler=fR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const dR=(t,e)=>e.some(n=>t instanceof n);let xv,kv;function pR(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gR(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K2=new WeakMap,Tp=new WeakMap,G2=new WeakMap,pd=new WeakMap,Tm=new WeakMap;function mR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ss(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K2.set(n,t)}).catch(()=>{}),Tm.set(e,t),e}function _R(t){if(Tp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Tp.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ss(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yR(t){Ip=t(Ip)}function vR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(gd(this),e,...n);return G2.set(i,e.sort?e.sort():[e]),Ss(i)}:gR().includes(t)?function(...e){return t.apply(gd(this),e),Ss(K2.get(this))}:function(...e){return Ss(t.apply(gd(this),e))}}function bR(t){return typeof t=="function"?vR(t):(t instanceof IDBTransaction&&_R(t),dR(t,pR())?new Proxy(t,Ip):t)}function Ss(t){if(t instanceof IDBRequest)return mR(t);if(pd.has(t))return pd.get(t);const e=bR(t);return e!==t&&(pd.set(t,e),Tm.set(e,t)),e}const gd=t=>Tm.get(t);function wR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ss(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ss(o.result),l.oldVersion,l.newVersion,Ss(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ER=["get","getKey","getAll","getAllKeys","count"],TR=["put","add","delete","clear"],md=new Map;function Sv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=TR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ER.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return md.set(e,r),r}yR(t=>({...t,get:(e,n,i)=>Sv(e,n)||t.get(e,n,i),has:(e,n)=>!!Sv(e,n)||t.has(e,n)}));/**
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
 */class IR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function CR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",Av="0.9.8";/**
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
 */const Ir=new Kl("@firebase/app"),xR="@firebase/app-compat",kR="@firebase/analytics-compat",SR="@firebase/analytics",AR="@firebase/app-check-compat",RR="@firebase/app-check",DR="@firebase/auth",OR="@firebase/auth-compat",MR="@firebase/database",PR="@firebase/database-compat",NR="@firebase/functions",LR="@firebase/functions-compat",FR="@firebase/installations",UR="@firebase/installations-compat",BR="@firebase/messaging",VR="@firebase/messaging-compat",$R="@firebase/performance",zR="@firebase/performance-compat",HR="@firebase/remote-config",jR="@firebase/remote-config-compat",WR="@firebase/storage",qR="@firebase/storage-compat",KR="@firebase/firestore",GR="@firebase/firestore-compat",YR="firebase",XR="9.20.0";/**
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
 */const xp="[DEFAULT]",QR={[Cp]:"fire-core",[xR]:"fire-core-compat",[SR]:"fire-analytics",[kR]:"fire-analytics-compat",[RR]:"fire-app-check",[AR]:"fire-app-check-compat",[DR]:"fire-auth",[OR]:"fire-auth-compat",[MR]:"fire-rtdb",[PR]:"fire-rtdb-compat",[NR]:"fire-fn",[LR]:"fire-fn-compat",[FR]:"fire-iid",[UR]:"fire-iid-compat",[BR]:"fire-fcm",[VR]:"fire-fcm-compat",[$R]:"fire-perf",[zR]:"fire-perf-compat",[HR]:"fire-rc",[jR]:"fire-rc-compat",[WR]:"fire-gcs",[qR]:"fire-gcs-compat",[KR]:"fire-fst",[GR]:"fire-fst-compat","fire-js":"fire-js",[YR]:"fire-js-all"};/**
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
 */const Qu=new Map,kp=new Map;function JR(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(kp.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;kp.set(e,t);for(const n of Qu.values())JR(n,t);return!0}function Im(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},As=new Zo("app","Firebase",ZR);/**
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
 */class eD{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=XR;function Y2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:xp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw As.create("bad-app-name",{appName:String(s)});if(n||(n=H3()),!n)throw As.create("no-options");const r=Qu.get(s);if(r){if(Xu(n,r.options)&&Xu(i,r.config))return r;throw As.create("duplicate-app",{appName:s})}const o=new lR(s);for(const l of kp.values())o.addComponent(l);const a=new eD(n,i,o);return Qu.set(s,a),a}function Cm(t=xp){const e=Qu.get(t);if(!e&&t===xp)return Y2();if(!e)throw As.create("no-app",{appName:t});return e}function Sn(t,e,n){var i;let s=(i=QR[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}bi(new ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tD="firebase-heartbeat-database",nD=1,pl="firebase-heartbeat-store";let _d=null;function X2(){return _d||(_d=wR(tD,nD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pl)}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),_d}async function iD(t){try{return(await X2()).transaction(pl).objectStore(pl).get(Q2(t))}catch(e){if(e instanceof Ci)Ir.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function Rv(t,e){try{const i=(await X2()).transaction(pl,"readwrite");return await i.objectStore(pl).put(e,Q2(t)),i.done}catch(n){if(n instanceof Ci)Ir.warn(n.message);else{const i=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(i.message)}}}function Q2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sD=1024,rD=30*24*60*60*1e3;class oD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=rD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dv(),{heartbeatsToSend:n,unsentEntries:i}=aD(this._heartbeatsCache.heartbeats),s=Ku(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Dv(){return new Date().toISOString().substring(0,10)}function aD(t,e=sD){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ov(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ov(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W2()?K3().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ov(t){return Ku(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cD(t){bi(new ii("platform-logger",e=>new IR(e),"PRIVATE")),bi(new ii("heartbeat",e=>new oD(e),"PRIVATE")),Sn(Cp,Av,t),Sn(Cp,Av,"esm2017"),Sn("fire-js","")}cD("");function xm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function J2(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uD=J2,Z2=new Zo("auth","Firebase",J2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Kl("@firebase/auth");function hD(t,...e){Ju.logLevel<=Be.WARN&&Ju.warn(`Auth (${Ws}): ${t}`,...e)}function Cu(t,...e){Ju.logLevel<=Be.ERROR&&Ju.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,...e){throw km(t,...e)}function mi(t,...e){return km(t,...e)}function eE(t,e,n){const i=Object.assign(Object.assign({},uD()),{[e]:n});return new Zo("auth","Firebase",i).create(e,{appName:t.name})}function fD(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&wi(t,"argument-error"),eE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function km(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Z2.create(t,...e)}function pe(t,e,...n){if(!t)throw km(e,...n)}function Fi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function Gi(t,e){t||Fi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dD(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dD()||W3()||"connection"in navigator)?navigator.onLine:!0}function gD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gi(n>e,"Short delay should be less than long delay!"),this.isMobile=Em()||H2()}get(){return pD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){Gi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new Gl(3e4,6e4);function nE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yl(t,e,n,i,s={}){return iE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ea(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tE.fetch()(sE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function iE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},mD),e);try{const s=new vD(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pc(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eE(t,u,c);wi(t,u)}}catch(s){if(s instanceof Ci)throw s;wi(t,"network-request-failed",{message:String(s)})}}async function yD(t,e,n,i,s={}){const r=await Yl(t,e,n,i,s);return"mfaPendingCredential"in r&&wi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function sE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Sm(t.config,s):`${t.config.apiScheme}://${s}`}class vD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),_D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=mi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e){return Yl(t,"POST","/v1/accounts:delete",e)}async function wD(t,e){return Yl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ED(t,e=!1){const n=Ft(t),i=await n.getIdToken(e),s=Am(i);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Va(yd(s.auth_time)),issuedAtTime:Va(yd(s.iat)),expirationTime:Va(yd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yd(t){return Number(t)*1e3}function Am(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gu(n);return s?JSON.parse(s):(Cu("Failed to decode base64 JWT payload"),null)}catch(s){return Cu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TD(t){const e=Am(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ci&&ID(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ID({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zu(t){var e;const n=t.auth,i=await t.getIdToken(),s=await gl(t,wD(n,{idToken:i}));pe(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?SD(r.providerUserInfo):[],a=kD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xD(t){const e=Ft(t);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kD(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function SD(t){return t.map(e=>{var{providerId:n}=e,i=xm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){const n=await iE(t,{},async()=>{const i=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=sE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await AD(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ml;return i&&(pe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=xm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await gl(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ED(this,e)}reload(){return xD(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Zu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gl(this,bD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:b,isAnonymous:T,providerData:S,stsTokenManager:I}=n;pe(w&&I,e,"internal-error");const x=ml.fromJSON(this.name,I);pe(typeof w=="string",e,"internal-error"),ls(h,e.name),ls(f,e.name),pe(typeof b=="boolean",e,"internal-error"),pe(typeof T=="boolean",e,"internal-error"),ls(d,e.name),ls(p,e.name),ls(g,e.name),ls(m,e.name),ls(_,e.name),ls(y,e.name);const L=new vr({uid:w,auth:e,email:f,emailVerified:b,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:x,createdAt:_,lastLoginAt:y});return S&&Array.isArray(S)&&(L.providerData=S.map(U=>Object.assign({},U))),m&&(L._redirectEventId=m),L}static async _fromIdTokenResponse(e,n,i=!1){const s=new ml;s.updateFromServerResponse(n);const r=new vr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Zu(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function Ui(t){Gi(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(Gi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
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
 */class oE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oE.type="NONE";const Nv=oE;/**
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
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=xu(this.userKey,s.apiKey,r),this.fullPersistenceKey=xu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new fo(Ui(Nv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ui(Nv);const o=xu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fo(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fo(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hE(e))return"Blackberry";if(fE(e))return"Webos";if(Rm(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(uE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function aE(t=rn()){return/firefox\//i.test(t)}function Rm(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=rn()){return/crios\//i.test(t)}function cE(t=rn()){return/iemobile/i.test(t)}function uE(t=rn()){return/android/i.test(t)}function hE(t=rn()){return/blackberry/i.test(t)}function fE(t=rn()){return/webos/i.test(t)}function uf(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RD(t=rn()){var e;return uf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DD(){return q3()&&document.documentMode===10}function dE(t=rn()){return uf(t)||uE(t)||fE(t)||hE(t)||/windows phone/i.test(t)||cE(t)}function OD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Lv(rn());break;case"Worker":n=`${Lv(rn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${i}`}async function gE(t,e){return Yl(t,"GET","/v2/recaptchaConfig",nE(t,e))}function Fv(t){return t!==void 0&&t.enterprise!==void 0}class mE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _E(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=mi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",MD().appendChild(i)})}function PD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ND="https://www.google.com/recaptcha/enterprise.js?render=",LD="recaptcha-enterprise";class FD{constructor(e){this.type=LD,this.auth=Xl(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{gE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new mE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Fv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Fv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_E(ND+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class UD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uv(this),this.idTokenSubscription=new Uv(this),this.beforeStateQueue=new UD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ui(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ui(e))})}async initializeRecaptchaConfig(){const e=await gE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new FD(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ui(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[Ui(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xl(t){return Ft(t)}class Uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=eR(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t,e){const n=Im(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Xu(r,e??{}))return s;wi(s,"already-initialized")}return n.initialize({options:e})}function $D(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ui);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zD(t,e,n){const i=Xl(t);pe(i._canInitEmulator,i,"emulator-config-failed"),pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=yE(e),{host:o,port:a}=HD(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||jD()}function yE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HD(t){const e=yE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Bv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Bv(o)}}}function Bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(e){return Fi("not implemented")}_linkToIdToken(e,n){return Fi("not implemented")}_getReauthenticationResolver(e){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e){return yD(t,"POST","/v1/accounts:signInWithIdp",nE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="http://localhost";class Cr extends vE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=xm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Cr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,po(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Ql{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pi.credential(n,i)}catch{return null}}}Pi.GOOGLE_SIGN_IN_METHOD="google.com";Pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Ql{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.GITHUB_SIGN_IN_METHOD="github.com";ys.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ql{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return vs.credential(n,i)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await vr._fromIdTokenResponse(e,i,s),o=Vv(i);return new Ao({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Vv(i);return new Ao({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends Ci{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,eh.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new eh(e,n,i,s)}}function bE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?eh._fromErrorAndOperation(t,r,e,i):r})}async function qD(t,e,n=!1){const i=await gl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ao._forOperation(t,"link",i)}/**
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
 */async function KD(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await gl(t,bE(i,s,e,t),n);pe(r.idToken,i,"internal-error");const o=Am(r.idToken);pe(o,i,"internal-error");const{sub:a}=o;return pe(t.uid===a,i,"user-mismatch"),Ao._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e,n=!1){const i="signIn",s=await bE(t,i,e),r=await Ao._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function wE(t,e,n,i){return Ft(t).onIdTokenChanged(e,n,i)}function YD(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function XD(t){return Ft(t).signOut()}const th="__sak";/**
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
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(th,"1"),this.storage.removeItem(th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(){const t=rn();return Rm(t)||uf(t)}const JD=1e3,ZD=10;class TE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QD()&&OD(),this.fallbackToPolling=dE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);DD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZD):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},JD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const eO=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IE.type="SESSION";const CE=IE;/**
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
 */function tO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new hf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await tO(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Om("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function iO(t){_i().location.href=t}/**
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
 */function xE(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function sO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oO(){return xE()?self:null}/**
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
 */const kE="firebaseLocalStorageDb",aO=1,nh="firebaseLocalStorage",SE="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ff(t,e){return t.transaction([nh],e?"readwrite":"readonly").objectStore(nh)}function lO(){const t=indexedDB.deleteDatabase(kE);return new Jl(t).toPromise()}function Ap(){const t=indexedDB.open(kE,aO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(nh,{keyPath:SE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(nh)?e(i):(i.close(),await lO(),e(await Ap()))})})}async function $v(t,e,n){const i=ff(t,!0).put({[SE]:e,value:n});return new Jl(i).toPromise()}async function cO(t,e){const n=ff(t,!1).get(e),i=await new Jl(n).toPromise();return i===void 0?null:i.value}function zv(t,e){const n=ff(t,!0).delete(e);return new Jl(n).toPromise()}const uO=800,hO=3;class AE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>hO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hf._getInstance(oO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sO(),!this.activeServiceWorker)return;this.sender=new nO(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ap();return await $v(e,th,"1"),await zv(e,th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>$v(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>cO(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ff(s,!1).getAll();return new Jl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AE.type="LOCAL";const fO=AE;new Gl(3e4,6e4);/**
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
 */function RE(t,e){return e?Ui(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mm extends vE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dO(t){return GD(t.auth,new Mm(t),t.bypassAuthState)}function pO(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),KD(n,new Mm(t),t.bypassAuthState)}async function gO(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),qD(n,new Mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dO;case"linkViaPopup":case"linkViaRedirect":return gO;case"reauthViaPopup":case"reauthViaRedirect":return pO;default:wi(this.auth,"internal-error")}}resolve(e){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new Gl(2e3,1e4);async function _O(t,e,n){const i=Xl(t);fD(t,e,Dm);const s=RE(i,n);return new ur(i,"signInViaPopup",e,s).executeNotNull()}class ur extends DE{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Gi(this.filter.length===1,"Popup operations only handle one event");const e=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mO.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="pendingRedirect",ku=new Map;class vO extends DE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const i=await bO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bO(t,e){const n=TO(e),i=EO(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function wO(t,e){ku.set(t._key(),e)}function EO(t){return Ui(t._redirectPersistence)}function TO(t){return xu(yO,t.config.apiKey,t.name)}async function IO(t,e,n=!1){const i=Xl(t),s=RE(i,e),o=await new vO(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=10*60*1e3;class xO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!OE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hv(e))}saveEventToCache(e){this.cachedEventUids.add(Hv(e)),this.lastProcessedEventTime=Date.now()}}function Hv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t,e={}){return Yl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RO=/^https?/;async function DO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SO(t);for(const n of e)try{if(OO(n))return}catch{}wi(t,"unauthorized-domain")}function OO(t){const e=Sp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!RO.test(n))return!1;if(AO.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const MO=new Gl(3e4,6e4);function jv(){const t=_i().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PO(t){return new Promise((e,n)=>{var i,s,r;function o(){jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jv(),n(mi(t,"network-request-failed"))},timeout:MO.get()})}if(!((s=(i=_i().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=_i().gapi)===null||r===void 0)&&r.load)o();else{const a=PD("iframefcb");return _i()[a]=()=>{gapi.load?o():n(mi(t,"network-request-failed"))},_E(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Su=null,e})}let Su=null;function NO(t){return Su=Su||PO(t),Su}/**
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
 */const LO=new Gl(5e3,15e3),FO="__/auth/iframe",UO="emulator/auth/iframe",BO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $O(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sm(e,UO):`https://${t.config.authDomain}/${FO}`,i={apiKey:e.apiKey,appName:t.name,v:Ws},s=VO.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ea(i).slice(1)}`}async function zO(t){const e=await NO(t),n=_i().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:$O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=mi(t,"network-request-failed"),a=_i().setTimeout(()=>{r(o)},LO.get());function l(){_i().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const HO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jO=500,WO=600,qO="_blank",KO="http://localhost";class Wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GO(t,e,n,i=jO,s=WO){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HO),{width:i.toString(),height:s.toString(),top:r,left:o}),c=rn().toLowerCase();n&&(a=lE(c)?qO:n),aE(c)&&(e=e||KO,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(RD(c)&&a!=="_self")return YO(e||"",a),new Wv(null);const h=window.open(e||"",a,u);pe(h,t,"popup-blocked");try{h.focus()}catch{}return new Wv(h)}function YO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const XO="__/auth/handler",QO="emulator/auth/handler",JO=encodeURIComponent("fac");async function qv(t,e,n,i,s,r){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ws,eventId:s};if(e instanceof Dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ql){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${JO}=${encodeURIComponent(l)}`:"";return`${ZO(t)}?${ea(a).slice(1)}${c}`}function ZO({config:t}){return t.emulator?Sm(t,QO):`https://${t.authDomain}/${XO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="webStorageSupport";class e4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CE,this._completeRedirectFn=IO,this._overrideRedirectResult=wO}async _openPopup(e,n,i,s){var r;Gi((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qv(e,n,i,Sp(),s);return GO(e,o,Om())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await qv(e,n,i,Sp(),s);return iO(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Gi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zO(e),i=new xO(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vd,{type:vd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[vd];o!==void 0&&n(!!o),wi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dE()||Rm()||uf()}}const t4=e4;var Kv="@firebase/auth",Gv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function s4(t){bi(new ii("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),pe(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},c=new BD(i,s,r,l);return $D(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bi(new ii("auth-internal",e=>{const n=Xl(e.getProvider("auth").getImmediate());return(i=>new n4(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Kv,Gv,i4(t)),Sn(Kv,Gv,"esm2017")}/**
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
 */const r4=5*60,o4=z2("authIdTokenMaxAge")||r4;let Yv=null;const a4=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>o4)return;const s=n==null?void 0:n.token;Yv!==s&&(Yv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ME(t=Cm()){const e=Im(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VD(t,{popupRedirectResolver:t4,persistence:[fO,eO,CE]}),i=z2("authTokenSyncURL");if(i){const r=a4(i);YD(n,r,()=>r(n.currentUser)),wE(n,o=>r(o))}const s=$2("auth");return s&&zD(n,`http://${s}`),n}s4("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=new Map,c4={activated:!1,tokenObservers:[]};function Ei(t){return l4.get(t)||Object.assign({},c4)}const Xv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new fl,await h4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new fl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function h4(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ih=new Zo("appCheck","AppCheck",f4);function d4(t){if(!Ei(t).activated)throw ih.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4="firebase-app-check-database",g4=1,Rp="firebase-app-check-store";let Nc=null;function m4(){return Nc||(Nc=new Promise((t,e)=>{try{const n=indexedDB.open(p4,g4);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(ih.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Rp,{keyPath:"compositeKey"})}}}catch(n){e(ih.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Nc)}function _4(t,e){return y4(v4(t),e)}async function y4(t,e){const i=(await m4()).transaction(Rp,"readwrite"),r=i.objectStore(Rp).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(ih.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function v4(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Kl("@firebase/app-check");function Qv(t,e){return W2()?_4(t,e).catch(n=>{Dp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4={error:"UNKNOWN_ERROR"};function w4(t){return lf.encodeString(JSON.stringify(t),!1)}async function Op(t,e=!1){const n=t.app;d4(n);const i=Ei(n);let s=i.token,r;if(s&&!xa(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(xa(l)?s=l:await Qv(n,void 0))}if(!e&&s&&xa(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ei(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Dp.warn(l.message):Dp.error(l),r=l}let a;return s?r?xa(s)?a={token:s.token,internalError:r}:a=Zv(r):(a={token:s.token},i.token=s,await Qv(n,s)):a=Zv(r),o&&I4(n,a),a}function E4(t,e,n,i){const{app:s}=t,r=Ei(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&xa(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Jv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Jv(t))}function PE(t,e){const n=Ei(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Jv(t){const{app:e}=t,n=Ei(e);let i=n.tokenRefresher;i||(i=T4(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function T4(t){const{app:e}=t;return new u4(async()=>{const n=Ei(e);let i;if(n.token?i=await Op(t,!0):i=await Op(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ei(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Xv.RETRIAL_MIN_WAIT,Xv.RETRIAL_MAX_WAIT)}function I4(t,e){const n=Ei(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function xa(t){return t.expireTimeMillis-Date.now()>0}function Zv(t){return{token:w4(b4),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ei(this.app);for(const n of e)PE(this.app,n.next);return Promise.resolve()}}function x4(t,e){return new C4(t,e)}function k4(t){return{getToken:e=>Op(t,e),addTokenListener:e=>E4(t,"INTERNAL",e),removeTokenListener:e=>PE(t.app,e)}}const S4="@firebase/app-check",A4="0.6.5",R4="app-check",e0="app-check-internal";function D4(){bi(new ii(R4,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return x4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(e0).initialize()})),bi(new ii(e0,t=>{const e=t.getProvider("app-check").getImmediate();return k4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Sn(S4,A4)}D4();var O4="firebase",M4="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(O4,M4,"app");const NE=Symbol("firebaseApp");function df(t){return Qo()&&wn(NE,null)||Cm(t)}const di=()=>{},P4=typeof window<"u";function Pm(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function N4(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Fr(t){return!!t&&typeof t=="object"}const L4=Object.prototype;function F4(t){return Fr(t)&&Object.getPrototypeOf(t)===L4}function Nm(t){return Fr(t)&&t.type==="document"}function LE(t){return Fr(t)&&t.type==="collection"}function U4(t){return Nm(t)||LE(t)}function B4(t){return Fr(t)&&t.type==="query"}function V4(t){return Fr(t)&&"ref"in t}function $4(t){return Fr(t)&&typeof t.bucket=="string"}function z4(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function H4(){return!!(Qo()&&wn(R2,null))}const Lc=new WeakMap;function j4(t,e){if(!Lc.has(t)){const n=Jg(!0);Lc.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Lc.delete(t)}}return Lc.get(t)}const W4=new WeakMap,Fc=new WeakMap;function FE(t){const e=df(t);if(!Fc.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{Fc.set(e,r),n(r.value)}];Fc.set(e,s)}return Fc.get(e)}function qs(t){const e=FE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function q4(t,e){const n=ME(e);wE(n,i=>{const s=FE();t.value=i,Array.isArray(s)&&s[1](t)})}const t0="@firebase/database",n0="0.14.4";/**
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
 */let UE="";function K4(t){UE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Vt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:dl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return is(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G4(e)}}catch{}return new Y4},hr=BE("localStorage"),Mp=BE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Kl("@firebase/database"),X4=function(){let t=1;return function(){return t++}}(),VE=function(t){const e=sR(t),n=new Z3;n.update(e);const i=n.digest();return lf.encodeByteArray(i)},Zl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Zl.apply(null,i):typeof i=="object"?e+=Vt(i):e+=i,e+=" "}return e};let br=null,i0=!0;const Q4=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(go.logLevel=Be.VERBOSE,br=go.log.bind(go),e&&Mp.set("logging_enabled",!0)):typeof t=="function"?br=t:(br=null,Mp.remove("logging_enabled"))},Yt=function(...t){if(i0===!0&&(i0=!1,br===null&&Mp.get("logging_enabled")===!0&&Q4(!0)),br){const e=Zl.apply(null,t);br(e)}},ec=function(t){return function(...e){Yt(t,...e)}},Pp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zl(...t);go.error(e)},xr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zl(...t)}`;throw go.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Zl(...t);go.warn(e)},J4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$E=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Z4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ro="[MIN_NAME]",kr="[MAX_NAME]",ta=function(t,e){if(t===e)return 0;if(t===Ro||e===kr)return-1;if(e===Ro||t===kr)return 1;{const n=s0(t),i=s0(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},eM=function(t,e){return t===e?0:t<e?-1:1},da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Vt(e))},Lm=function(t){if(typeof t!="object"||t===null)return Vt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Vt(e[i]),n+=":",n+=Lm(t[e[i]]);return n+="}",n},zE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Hn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const HE=function(t){j(!$E(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},tM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},iM=new RegExp("^-?(0*)\\d{1,10}$"),sM=-2147483648,rM=2147483647,s0=function(t){if(iM.test(t)){const e=Number(t);if(e>=sM&&e<=rM)return e}return null},tc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},oM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class aM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Np{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Np.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="5",jE="v",WE="s",qE="r",KE="f",GE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,YE="ls",XE="p",Lp="ac",QE="websocket",JE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ZE(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let i;if(e===QE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uM(t)&&(n.ns=t.namespace);const s=[];return Hn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.counters_={}}incrementCounter(e,n=1){is(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return L3(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={},wd={};function Um(t){const e=t.toString();return bd[e]||(bd[e]=new hM),bd[e]}function fM(t,e){const n=t.toString();return wd[n]||(wd[n]=e()),wd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&tc(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="start",pM="close",gM="pLPCommand",mM="pRTLPCB",eT="id",tT="pw",nT="ser",_M="cb",yM="seg",vM="ts",bM="d",wM="dframe",iT=1870,sT=30,EM=iT-sT,TM=25e3,IM=3e4;class io{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ec(e),this.stats_=Um(n),this.urlFn=l=>(this.appCheckToken&&(l[Lp]=this.appCheckToken),ZE(n,JE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IM)),Z4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===r0)this.id=a,this.password=l;else if(o===pM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[r0]="t",i[nT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[_M]=this.scriptTagHolder.uniqueCallbackIdentifier),i[jE]=Fm,this.transportSessionId&&(i[WE]=this.transportSessionId),this.lastSessionId&&(i[YE]=this.lastSessionId),this.applicationId&&(i[XE]=this.applicationId),this.appCheckToken&&(i[Lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&GE.test(location.hostname)&&(i[qE]=KE);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){io.forceAllow_=!0}static forceDisallow(){io.forceDisallow_=!0}static isAvailable(){return io.forceAllow_?!0:!io.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tM()&&!nM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=B2(n),s=zE(i,EM);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[wM]="t",i[eT]=e,i[tT]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Vt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=X4(),window[gM+this.uniqueCallbackIdentifier]=e,window[mM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Yt("frame writing exception"),a.stack&&Yt(a.stack),Yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eT]=this.myID,e[tT]=this.myPW,e[nT]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sT+i.length<=iT;){const o=this.pendingSegs.shift();i=i+"&"+yM+s+"="+o.seg+"&"+vM+s+"="+o.ts+"&"+bM+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(TM)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=16384,xM=45e3;let sh=null;typeof MozWebSocket<"u"?sh=MozWebSocket:typeof WebSocket<"u"&&(sh=WebSocket);class Gn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ec(this.connId),this.stats_=Um(n),this.connURL=Gn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[jE]=Fm,typeof location<"u"&&location.hostname&&GE.test(location.hostname)&&(o[qE]=KE),n&&(o[WE]=n),i&&(o[YE]=i),s&&(o[Lp]=s),r&&(o[XE]=r),ZE(e,QE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hr.set("previous_websocket_failure",!0);try{let i;j2(),this.mySock=new sh(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&sh!==null&&!Gn.forceDisallow_}static previouslyFailed(){return hr.isInMemoryStorage||hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=dl(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zE(n,CM);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gn.responsesRequiredToBeHealthy=2;Gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[io,Gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gn&&Gn.isAvailable();let i=n&&!Gn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Gn];else{const s=this.transports_=[];for(const r of _l.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);_l.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_l.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=6e4,SM=5e3,AM=10*1024,RM=100*1024,Ed="t",o0="d",DM="s",a0="r",OM="e",l0="o",c0="a",u0="n",h0="p",MM="h";class PM{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ec("c:"+this.id+":"),this.transportManager_=new _l(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=$a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ed in e){const n=e[Ed];n===c0?this.upgradeIfSecondaryHealthy_():n===a0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===l0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=da("t",e),i=da("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:h0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:c0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:u0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=da("t",e),i=da("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=da(Ed,e);if(o0 in e){const i=e[o0];if(n===MM){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===u0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DM?this.onConnectionShutdown_(i):n===a0?this.onReset_(i):n===OM?Pp("Server Error: "+i):n===l0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fm!==i&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),$a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:h0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends oT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Em()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rh}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=32,d0=768;class ct{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ge(){return new ct("")}function Me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ls(t){return t.pieces_.length-t.pieceNum_}function nt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ct(t.pieces_,e)}function aT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function NM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ct(e,0)}function Mt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ct)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ct(n,0)}function Se(t){return t.pieceNum_>=t.pieces_.length}function Bn(t,e){const n=Me(t),i=Me(e);if(n===null)return e;if(n===i)return Bn(nt(t),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uT(t,e){if(Ls(t)!==Ls(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Yn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ls(t)>Ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class LM{constructor(e,n){this.errorPrefix_=n,this.parts_=lT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=cf(this.parts_[i]);hT(this)}}function FM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cf(e),hT(t)}function UM(t){const e=t.parts_.pop();t.byteLength_-=cf(e),t.parts_.length>0&&(t.byteLength_-=1)}function hT(t){if(t.byteLength_>d0)throw new Error(t.errorPrefix_+"has a key path longer than "+d0+" bytes ("+t.byteLength_+").");if(t.parts_.length>f0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+f0+") or object contains a cycle "+sr(t))}function sr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends oT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Vm}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=1e3,BM=60*5*1e3,p0=30*1e3,VM=1.3,$M=3e4,zM="server_kill",g0=3;class Hi extends rT{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Hi.nextPersistentConnectionId_++,this.log_=ec("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pa,this.maxReconnectDelay_=BM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!j2())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Vt(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new fl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Hi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&is(e,"w")){const i=So(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J3(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=p0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q3(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Vt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pp("Unrecognized action received from server: "+Vt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$M&&(this.reconnectDelay_=pa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Hi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new PM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{An(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(zM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&An(h),l())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ep(this.interruptReasons_)&&(this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Lm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ct(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=g0&&(this.reconnectDelay_=p0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=g0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+UE.replace(/\./g,"-")]=1,Em()?e["framework.cordova"]=1:H2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rh.getInstance().currentlyOnline();return Ep(this.interruptReasons_)&&e}}Hi.nextPersistentConnectionId_=0;Hi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Pe(Ro,e),s=new Pe(Ro,n);return this.compare(i,s)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;class fT extends pf{static get __EMPTY_NODE(){return Uc}static set __EMPTY_NODE(e){Uc=e}compare(e,n){return ta(e.name,n.name)}isDefinedOn(e){throw Jo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(kr,Uc)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Uc)}toString(){return".key"}}const mo=new fT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Dt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Dt.RED,this.left=s??vn.EMPTY_NODE,this.right=r??vn.EMPTY_NODE}copy(e,n,i,s,r){return new Dt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return vn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Dt.RED=!0;Dt.BLACK=!1;class HM{copy(e,n,i,s,r){return this}insert(e,n,i){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vn{constructor(e,n=vn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bc(this.root_,null,this.comparator_,!0,e)}}vn.EMPTY_NODE=new HM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t,e){return ta(t.name,e.name)}function $m(t,e){return ta(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fp;function WM(t){Fp=t}const dT=function(t){return typeof t=="number"?"number:"+HE(t):"string:"+t},pT=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&is(e,".sv"),"Priority must be a string or number.")}else j(t===Fp||t.isEmpty(),"priority of unexpected type.");j(t===Fp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m0;class At{constructor(e,n=At.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pT(this.priorityNode_)}static set __childrenNodeConstructor(e){m0=e}static get __childrenNodeConstructor(){return m0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new At(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Se(e)?this:Me(e)===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:At.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Me(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(j(i!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,At.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=HE(this.value_):e+=this.value_,this.lazyHash_=VE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===At.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof At.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=At.VALUE_TYPE_ORDER.indexOf(n),r=At.VALUE_TYPE_ORDER.indexOf(i);return j(s>=0,"Unknown leaf type: "+n),j(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}At.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gT,mT;function qM(t){gT=t}function KM(t){mT=t}class GM extends pf{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ta(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(kr,new At("[PRIORITY-POST]",mT))}makePost(e,n){const i=gT(e);return new Pe(n,new At("[PRIORITY-POST]",i))}toString(){return".priority"}}const en=new GM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=Math.log(2);class XM{constructor(e){const n=r=>parseInt(Math.log(r)/YM,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oh=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),g=s(d+1,c);return h=t[d],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,p,g)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,g){const m=h-p,_=h;h-=p;const y=s(m+1,_),w=t[m],b=n?n(w):w;d(new Dt(b,w.node,g,null,y))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?f(m,Dt.BLACK):(f(m,Dt.BLACK),f(m,Dt.RED))}return u},o=new XM(t.length),a=r(o);return new vn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;const Xr={};class Bi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Xr&&en,"ChildrenNode.ts has not been loaded"),Td=Td||new Bi({".priority":Xr},{".priority":en}),Td}get(e){const n=So(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vn?n:null}hasIndex(e){return is(this.indexSet_,e.toString())}addIndex(e,n){j(e!==mo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Pe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=oh(i,e.getCompare()):a=Xr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Bi(u,c)}addToIndexes(e,n){const i=Yu(this.indexes_,(s,r)=>{const o=So(this.indexSet_,r);if(j(o,"Missing index implementation for "+r),s===Xr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),oh(a,o.getCompare())}else return Xr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new Bi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Yu(this.indexes_,s=>{if(s===Xr)return s;{const r=n.get(e.name);return r?s.remove(new Pe(e.name,r)):s}});return new Bi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class He{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&pT(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ga||(ga=new He(new vn($m),null,Bi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ga}updatePriority(e){return this.children_.isEmpty()?this:new He(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ga:n}}getChild(e){const n=Me(e);return n===null?this:this.getImmediateChild(n).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Pe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ga:this.priorityNode_;return new He(s,o,r)}}updateChild(e,n){const i=Me(e);if(i===null)return n;{j(Me(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(nt(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(en,(o,a)=>{n[o]=a.val(e),i++,r&&He.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dT(this.getPriority().val())+":"),this.forEachChild(en,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":VE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nc?-1:0}withIndex(e){if(e===mo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new He(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(en),s=n.getIterator(en);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mo?null:this.indexMap_.get(e.toString())}}He.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QM extends He{constructor(){super(new vn($m),He.EMPTY_NODE,Bi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return He.EMPTY_NODE}isEmpty(){return!1}}const nc=new QM;Object.defineProperties(Pe,{MIN:{value:new Pe(Ro,He.EMPTY_NODE)},MAX:{value:new Pe(kr,nc)}});fT.__EMPTY_NODE=He.EMPTY_NODE;At.__childrenNodeConstructor=He;WM(nc);KM(nc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=!0;function Xt(t,e=null){if(t===null)return He.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new At(n,Xt(e))}if(!(t instanceof Array)&&JM){const n=[];let i=!1;if(Hn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Xt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Pe(o,l)))}}),n.length===0)return He.EMPTY_NODE;const r=oh(n,jM,o=>o.name,$m);if(i){const o=oh(n,en.getCompare());return new He(r,Xt(e),new Bi({".priority":o},{".priority":en}))}else return new He(r,Xt(e),Bi.Default)}else{let n=He.EMPTY_NODE;return Hn(t,(i,s)=>{if(is(t,i)&&i.substring(0,1)!=="."){const r=Xt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Xt(e))}}qM(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM extends pf{constructor(e){super(),this.indexPath_=e,j(!Se(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ta(e.name,n.name):r}makePost(e,n){const i=Xt(e),s=He.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(n,s)}maxPost(){const e=He.EMPTY_NODE.updateChild(this.indexPath_,nc);return new Pe(kr,e)}toString(){return lT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends pf{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ta(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const i=Xt(e);return new Pe(n,i)}toString(){return".value"}}const tP=new eP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){return{type:"value",snapshotNode:t}}function iP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=en}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ro}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===en}copy(){const e=new zm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function y0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===en?n="$priority":t.index_===tP?n="$value":t.index_===mo?n="$key":(j(t.index_ instanceof ZM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Vt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Vt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Vt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Vt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Vt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function v0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==en&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends rT{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ec("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ah.getListenId_(e,i),a={};this.listens_[o]=a;const l=y0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),So(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=ah.getListenId_(e,n);delete this.listens_[i]}get(e){const n=y0(e._queryParams),i=e._path.toString(),s=new fl;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ea(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dl(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.rootNode_=He.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){return{value:null,children:new Map}}function _T(t,e,n){if(Se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Me(e);t.children.has(i)||t.children.set(i,lh());const s=t.children.get(i);e=nt(e),_T(s,e,n)}}function Up(t,e,n){t.value!==null?n(e,t.value):aP(t,(i,s)=>{const r=new ct(e.toString()+"/"+i);Up(s,r,n)})}function aP(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Hn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=10*1e3,cP=30*1e3,uP=5*60*1e3;class hP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lP(e);const i=b0+(cP-b0)*Math.random();$a(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Hn(e,(s,r)=>{r>0&&is(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),$a(this.reportStats_.bind(this),Math.floor(Math.random()*2*uP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pi||(pi={}));function yT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pi.ACK_USER_WRITE,this.source=yT()}operationForChild(e){if(Se(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ct(e));return new ch(Ge(),n,this.revert)}}else return j(Me(this.path)===e,"operationForChild called for unrelated child."),new ch(nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pi.OVERWRITE}operationForChild(e){return Se(this.path)?new Sr(this.source,Ge(),this.snap.getImmediateChild(e)):new Sr(this.source,nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pi.MERGE}operationForChild(e){if(Se(this.path)){const n=this.children.subtree(new ct(e));return n.isEmpty()?null:n.value?new Sr(this.source,Ge(),n.value):new yl(this.source,Ge(),n)}else return j(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yl(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Se(e))return this.isFullyInitialized()&&!this.filtered_;const n=Me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fP(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rP(o.childName,o.snapshotNode))}),ma(t,s,"child_removed",e,i,n),ma(t,s,"child_added",e,i,n),ma(t,s,"child_moved",r,i,n),ma(t,s,"child_changed",e,i,n),ma(t,s,"value",e,i,n),s}function ma(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>pP(t,a,l)),o.forEach(a=>{const l=dP(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pP(t,e,n){if(e.childName==null||n.childName==null)throw Jo("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),s=new Pe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){return{eventCache:t,serverCache:e}}function za(t,e,n,i){return wT(new Hm(e,n,i),t.serverCache)}function ET(t,e,n,i){return wT(t.eventCache,new Hm(e,n,i))}function Bp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;const gP=()=>(Id||(Id=new vn(eM)),Id);class et{constructor(e,n=gP()){this.value=e,this.children=n}static fromObject(e){let n=new et(null);return Hn(e,(i,s)=>{n=n.set(new ct(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ge(),value:this.value};if(Se(e))return null;{const i=Me(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(nt(e),n);return r!=null?{path:Mt(new ct(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Se(e))return this;{const n=Me(e),i=this.children.get(n);return i!==null?i.subtree(nt(e)):new et(null)}}set(e,n){if(Se(e))return new et(n,this.children);{const i=Me(e),r=(this.children.get(i)||new et(null)).set(nt(e),n),o=this.children.insert(i,r);return new et(this.value,o)}}remove(e){if(Se(e))return this.children.isEmpty()?new et(null):new et(null,this.children);{const n=Me(e),i=this.children.get(n);if(i){const s=i.remove(nt(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new et(null):new et(this.value,r)}else return this}}get(e){if(Se(e))return this.value;{const n=Me(e),i=this.children.get(n);return i?i.get(nt(e)):null}}setTree(e,n){if(Se(e))return n;{const i=Me(e),r=(this.children.get(i)||new et(null)).setTree(nt(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new et(this.value,o)}}fold(e){return this.fold_(Ge(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Mt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ge(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Se(e))return null;{const r=Me(e),o=this.children.get(r);return o?o.findOnPath_(nt(e),Mt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ge(),n)}foreachOnPath_(e,n,i){if(Se(e))return this;{this.value&&i(n,this.value);const s=Me(e),r=this.children.get(s);return r?r.foreachOnPath_(nt(e),Mt(n,s),i):new et(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Mt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.writeTree_=e}static empty(){return new ti(new et(null))}}function Ha(t,e,n){if(Se(e))return new ti(new et(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Bn(s,e);return r=r.updateChild(o,n),new ti(t.writeTree_.set(s,r))}else{const s=new et(n),r=t.writeTree_.setTree(e,s);return new ti(r)}}}function w0(t,e,n){let i=t;return Hn(n,(s,r)=>{i=Ha(i,Mt(e,s),r)}),i}function E0(t,e){if(Se(e))return ti.empty();{const n=t.writeTree_.setTree(e,new et(null));return new ti(n)}}function Vp(t,e){return Ur(t,e)!=null}function Ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bn(n.path,e)):null}function T0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(en,(i,s)=>{e.push(new Pe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Pe(i,s.value))}),e}function Rs(t,e){if(Se(e))return t;{const n=Ur(t,e);return n!=null?new ti(new et(n)):new ti(t.writeTree_.subtree(e))}}function $p(t){return t.writeTree_.isEmpty()}function Do(t,e){return TT(Ge(),t.writeTree_,e)}function TT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(j(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=TT(Mt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Mt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e){return AT(e,t)}function mP(t,e,n,i,s){j(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ha(t.visibleWrites,e,n)),t.lastWriteId=i}function _P(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function yP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&vP(a,i.path)?s=!1:Yn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return bP(t),!0;if(i.snap)t.visibleWrites=E0(t.visibleWrites,i.path);else{const a=i.children;Hn(a,l=>{t.visibleWrites=E0(t.visibleWrites,Mt(i.path,l))})}return!0}else return!1}function vP(t,e){if(t.snap)return Yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yn(Mt(t.path,n),e))return!0;return!1}function bP(t){t.visibleWrites=CT(t.allWrites,wP,Ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wP(t){return t.visible}function CT(t,e,n){let i=ti.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Yn(n,o)?(a=Bn(n,o),i=Ha(i,a,r.snap)):Yn(o,n)&&(a=Bn(o,n),i=Ha(i,Ge(),r.snap.getChild(a)));else if(r.children){if(Yn(n,o))a=Bn(n,o),i=w0(i,a,r.children);else if(Yn(o,n))if(a=Bn(o,n),Se(a))i=w0(i,Ge(),r.children);else{const l=So(r.children,Me(a));if(l){const c=l.getChild(nt(a));i=Ha(i,Ge(),c)}}}else throw Jo("WriteRecord should have .snap or .children")}}return i}function xT(t,e,n,i,s){if(!i&&!s){const r=Ur(t.visibleWrites,e);if(r!=null)return r;{const o=Rs(t.visibleWrites,e);if($p(o))return n;if(n==null&&!Vp(o,Ge()))return null;{const a=n||He.EMPTY_NODE;return Do(o,a)}}}else{const r=Rs(t.visibleWrites,e);if(!s&&$p(r))return n;if(!s&&n==null&&!Vp(r,Ge()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Yn(c.path,e)||Yn(e,c.path))},a=CT(t.allWrites,o,e),l=n||He.EMPTY_NODE;return Do(a,l)}}}function EP(t,e,n){let i=He.EMPTY_NODE;const s=Ur(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(en,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Rs(t.visibleWrites,e);return n.forEachChild(en,(o,a)=>{const l=Do(Rs(r,new ct(o)),a);i=i.updateImmediateChild(o,l)}),T0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Rs(t.visibleWrites,e);return T0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function TP(t,e,n,i,s){j(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Mt(e,n);if(Vp(t.visibleWrites,r))return null;{const o=Rs(t.visibleWrites,r);return $p(o)?s.getChild(n):Do(o,s.getChild(n))}}function IP(t,e,n,i){const s=Mt(e,n),r=Ur(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Rs(t.visibleWrites,s);return Do(o,i.getNode().getImmediateChild(n))}else return null}function CP(t,e){return Ur(t.visibleWrites,e)}function xP(t,e,n,i,s,r,o){let a;const l=Rs(t.visibleWrites,e),c=Ur(l,Ge());if(c!=null)a=c;else if(n!=null)a=Do(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function kP(){return{visibleWrites:ti.empty(),allWrites:[],lastWriteId:-1}}function zp(t,e,n,i){return xT(t.writeTree,t.treePath,e,n,i)}function kT(t,e){return EP(t.writeTree,t.treePath,e)}function I0(t,e,n,i){return TP(t.writeTree,t.treePath,e,n,i)}function uh(t,e){return CP(t.writeTree,Mt(t.treePath,e))}function SP(t,e,n,i,s,r){return xP(t.writeTree,t.treePath,e,n,i,s,r)}function jm(t,e,n){return IP(t.writeTree,t.treePath,e,n)}function ST(t,e){return AT(Mt(t.treePath,e),t.writeTree)}function AT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,_0(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,sP(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,iP(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,_0(i,e.snapshotNode,s.oldSnap));else throw Jo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const RT=new RP;class Wm{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Hm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),r=SP(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function DP(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OP(t,e,n,i,s){const r=new AP;let o,a;if(n.type===pi.OVERWRITE){const c=n;c.source.fromUser?o=Hp(t,e,c.path,c.snap,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Se(c.path),o=hh(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===pi.MERGE){const c=n;c.source.fromUser?o=PP(t,e,c.path,c.children,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=jp(t,e,c.path,c.children,i,s,a,r))}else if(n.type===pi.ACK_USER_WRITE){const c=n;c.revert?o=FP(t,e,c.path,i,s,r):o=NP(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===pi.LISTEN_COMPLETE)o=LP(t,e,n.path,i,r);else throw Jo("Unknown operation type: "+n.type);const l=r.getChanges();return MP(e,o,l),{viewCache:o,changes:l}}function MP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(nP(Bp(e)))}}function DT(t,e,n,i,s,r){const o=e.eventCache;if(uh(i,n)!=null)return e;{let a,l;if(Se(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ar(e),u=c instanceof He?c:He.EMPTY_NODE,h=kT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zp(i,Ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Me(n);if(c===".priority"){j(Ls(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=I0(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=nt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=I0(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=jm(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return za(e,a,o.isFullyInitialized()||Se(n),t.filter.filtersNodes())}}function hh(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Se(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Me(n);if(!l.isCompleteForPath(n)&&Ls(n)>1)return e;const p=nt(n),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,p,RT,null)}const h=ET(e,c,l.isFullyInitialized()||Se(n),u.filtersNodes()),f=new Wm(s,h,r);return DT(t,h,n,s,f,a)}function Hp(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Wm(s,e,r);if(Se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=za(e,c,!0,t.filter.filtersNodes());else{const h=Me(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=za(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=nt(n),d=a.getNode().getImmediateChild(h);let p;if(Se(f))p=i;else{const g=u.getCompleteChild(h);g!=null?aT(f)===".priority"&&g.getChild(cT(f)).isEmpty()?p=g:p=g.updateChild(f,i):p=He.EMPTY_NODE}if(d.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=za(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function C0(t,e){return t.eventCache.isCompleteForChild(e)}function PP(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Mt(n,l);C0(e,Me(u))&&(a=Hp(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Mt(n,l);C0(e,Me(u))||(a=Hp(t,a,u,c,s,r,o))}),a}function x0(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function jp(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Se(n)?c=i:c=new et(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=x0(t,d,f);l=hh(t,l,new ct(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),g=x0(t,p,f);l=hh(t,l,new ct(h),g,s,r,o,a)}}),l}function NP(t,e,n,i,s,r,o){if(uh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return hh(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Se(n)){let c=new et(null);return l.getNode().forEachChild(mo,(u,h)=>{c=c.set(new ct(u),h)}),jp(t,e,n,c,s,r,a,o)}else return e}else{let c=new et(null);return i.foreach((u,h)=>{const f=Mt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),jp(t,e,n,c,s,r,a,o)}}function LP(t,e,n,i,s){const r=e.serverCache,o=ET(e,r.getNode(),r.isFullyInitialized()||Se(n),r.isFiltered());return DT(t,o,n,i,RT,s)}function FP(t,e,n,i,s,r){let o;if(uh(i,n)!=null)return e;{const a=new Wm(i,e,s),l=e.eventCache.getNode();let c;if(Se(n)||Me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zp(i,Ar(e));else{const h=e.serverCache.getNode();j(h instanceof He,"serverChildren would be complete if leaf node"),u=kT(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Me(n);let h=jm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,nt(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,He.EMPTY_NODE,nt(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zp(i,Ar(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||uh(i,Ge())!=null,za(e,c,o,t.filter.filtersNodes())}}function UP(t,e){const n=Ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Se(e)&&!n.getImmediateChild(Me(e)).isEmpty())?n.getChild(e):null}function k0(t,e,n,i){e.type===pi.MERGE&&e.source.queryId!==null&&(j(Ar(t.viewCache_),"We should always have a full cache before handling merges"),j(Bp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=OP(t.processor_,s,e,n,i);return DP(t.processor_,r.viewCache),j(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,BP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function BP(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return fP(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S0;function VP(t){j(!S0,"__referenceConstructor has already been defined"),S0=t}function qm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return j(r!=null,"SyncTree gave us an op for an invalid query."),k0(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(k0(o,e,n,i));return r}}function Km(t,e){let n=null;for(const i of t.views.values())n=n||UP(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A0;function $P(t){j(!A0,"__referenceConstructor has already been defined"),A0=t}class R0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new et(null),this.pendingWriteTree_=kP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zP(t,e,n,i,s){return mP(t.pendingWriteTree_,e,n,i,s),s?mf(t,new Sr(yT(),e,n)):[]}function so(t,e,n=!1){const i=_P(t.pendingWriteTree_,e);if(yP(t.pendingWriteTree_,e)){let r=new et(null);return i.snap!=null?r=r.set(Ge(),!0):Hn(i.children,o=>{r=r.set(new ct(o),!0)}),mf(t,new ch(i.path,r,n))}else return[]}function gf(t,e,n){return mf(t,new Sr(vT(),e,n))}function HP(t,e,n){const i=et.fromObject(n);return mf(t,new yl(vT(),e,i))}function jP(t,e,n,i){const s=NT(t,i);if(s!=null){const r=LT(s),o=r.path,a=r.queryId,l=Bn(o,e),c=new Sr(bT(a),l,n);return FT(t,o,c)}else return[]}function WP(t,e,n,i){const s=NT(t,i);if(s){const r=LT(s),o=r.path,a=r.queryId,l=Bn(o,e),c=et.fromObject(n),u=new yl(bT(a),l,c);return FT(t,o,u)}else return[]}function OT(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bn(o,e),c=Km(a,l);if(c)return c});return xT(s,e,r,n,!0)}function mf(t,e){return MT(e,t.syncPointTree_,null,IT(t.pendingWriteTree_,Ge()))}function MT(t,e,n,i){if(Se(t.path))return PT(t,e,n,i);{const s=e.get(Ge());n==null&&s!=null&&(n=Km(s,Ge()));let r=[];const o=Me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ST(i,o);r=r.concat(MT(a,l,c,u))}return s&&(r=r.concat(qm(s,t,i,n))),r}}function PT(t,e,n,i){const s=e.get(Ge());n==null&&s!=null&&(n=Km(s,Ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ST(i,o),u=t.operationForChild(o);u&&(r=r.concat(PT(u,a,l,c)))}),s&&(r=r.concat(qm(s,t,i,n))),r}function NT(t,e){return t.tagToQueryMap.get(e)}function LT(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ct(t.substr(0,e))}}function FT(t,e,n){const i=t.syncPointTree_.get(e);j(i,"Missing sync point for query tag that we're tracking");const s=IT(t.pendingWriteTree_,e);return qm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gm(n)}node(){return this.node_}}class Ym{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Mt(this.path_,e);return new Ym(this.syncTree_,n)}node(){return OT(this.syncTree_,this.path_)}}const qP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},D0=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return GP(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},GP=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&j(!1,"Unexpected increment value: "+i);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},YP=function(t,e,n,i){return Xm(e,new Ym(n,t),i)},XP=function(t,e,n){return Xm(t,new Gm(e),n)};function Xm(t,e,n){const i=t.getPriority().val(),s=D0(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=D0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new At(a,Xt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new At(s))),o.forEachChild(en,(a,l)=>{const c=Xm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Jm(t,e){let n=e instanceof ct?e:new ct(e),i=t,s=Me(n);for(;s!==null;){const r=So(i.node.children,s)||{children:{},childCount:0};i=new Qm(s,i,r),n=nt(n),s=Me(n)}return i}function na(t){return t.node.value}function UT(t,e){t.node.value=e,Wp(t)}function BT(t){return t.node.childCount>0}function QP(t){return na(t)===void 0&&!BT(t)}function _f(t,e){Hn(t.node.children,(n,i)=>{e(new Qm(n,t,i))})}function VT(t,e,n,i){n&&!i&&e(t),_f(t,s=>{VT(s,e,!0,i)}),n&&i&&e(t)}function JP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ic(t){return new ct(t.parent===null?t.name:ic(t.parent)+"/"+t.name)}function Wp(t){t.parent!==null&&ZP(t.parent,t.name,t)}function ZP(t,e,n){const i=QP(n),s=is(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Wp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Wp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=/[\[\].#$\/\u0000-\u001F\u007F]/,tN=/[\[\].#$\u0000-\u001F\u007F]/,Cd=10*1024*1024,$T=function(t){return typeof t=="string"&&t.length!==0&&!eN.test(t)},nN=function(t){return typeof t=="string"&&t.length!==0&&!tN.test(t)},iN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nN(t)},zT=function(t,e,n){const i=n instanceof ct?new LM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sr(i));if(typeof e=="function")throw new Error(t+"contains a function "+sr(i)+" with contents = "+e.toString());if($E(e))throw new Error(t+"contains "+e.toString()+" "+sr(i));if(typeof e=="string"&&e.length>Cd/3&&cf(e)>Cd)throw new Error(t+"contains a string greater than "+Cd+" utf8 bytes "+sr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Hn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$T(o)))throw new Error(t+" contains an invalid key ("+o+") "+sr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FM(i,o),zT(t,a,i),UM(i)}),s&&r)throw new Error(t+' contains ".value" child '+sr(i)+" in addition to actual children.")}},sN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$T(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iN(n))throw new Error(iR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oN(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!uT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Br(t,e,n){oN(t,n),aN(t,i=>Yn(i,e)||Yn(e,i))}function aN(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(lN(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();br&&Yt("event: "+n.toString()),tc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="repo_interrupt",uN=25;class hN{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lh(),this.transactionQueueTree_=new Qm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fN(t,e,n){if(t.stats_=Um(t.repoInfo_),t.forceRestClient_||oM())t.server_=new ah(t.repoInfo_,(i,s,r,o)=>{O0(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>M0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Vt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Hi(t.repoInfo_,e,(i,s,r,o)=>{O0(t,i,s,r,o)},i=>{M0(t,i)},i=>{pN(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=fM(t.repoInfo_,()=>new hP(t.stats_,t.server_)),t.infoData_=new oP,t.infoSyncTree_=new R0({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=gf(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zm(t,"connected",!1),t.serverSyncTree_=new R0({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Br(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function dN(t){const n=t.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function HT(t){return qP({timestamp:dN(t)})}function O0(t,e,n,i,s){t.dataUpdateCount++;const r=new ct(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Yu(n,c=>Xt(c));o=WP(t.serverSyncTree_,r,l,s)}else{const l=Xt(n);o=jP(t.serverSyncTree_,r,l,s)}else if(i){const l=Yu(n,c=>Xt(c));o=HP(t.serverSyncTree_,r,l)}else{const l=Xt(n);o=gf(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=t_(t,r)),Br(t.eventQueue_,a,o)}function M0(t,e){Zm(t,"connected",e),e===!1&&mN(t)}function pN(t,e){Hn(e,(n,i)=>{Zm(t,n,i)})}function Zm(t,e,n){const i=new ct("/.info/"+e),s=Xt(n);t.infoData_.updateSnapshot(i,s);const r=gf(t.infoSyncTree_,i,s);Br(t.eventQueue_,i,r)}function gN(t){return t.nextWriteId_++}function mN(t){jT(t,"onDisconnectEvents");const e=HT(t),n=lh();Up(t.onDisconnect_,Ge(),(s,r)=>{const o=YP(s,r,t.serverSyncTree_,e);_T(n,s,o)});let i=[];Up(n,Ge(),(s,r)=>{i=i.concat(gf(t.serverSyncTree_,s,r));const o=bN(t,s);t_(t,o)}),t.onDisconnect_=lh(),Br(t.eventQueue_,Ge(),i)}function _N(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cN)}function jT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Yt(n,...e)}function WT(t,e,n){return OT(t.serverSyncTree_,e,n)||He.EMPTY_NODE}function e_(t,e=t.transactionQueueTree_){if(e||yf(t,e),na(e)){const n=KT(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&yN(t,ic(e),n)}else BT(e)&&_f(e,n=>{e_(t,n)})}function yN(t,e,n){const i=n.map(c=>c.currentWriteId),s=WT(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];j(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(so(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yf(t,Jm(t.transactionQueueTree_,e)),e_(t,t.transactionQueueTree_),Br(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)tc(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}t_(t,e)}},o)}function t_(t,e){const n=qT(t,e),i=ic(n),s=KT(t,n);return vN(t,s,i),i}function vN(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bn(n,l.path);let u=!1,h;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(so(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uN)u=!0,h="maxretry",s=s.concat(so(t.serverSyncTree_,l.currentWriteId,!0));else{const f=WT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){zT("transaction failed: Data returned ",d,l.path);let p=Xt(d);typeof d=="object"&&d!=null&&is(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=l.currentWriteId,_=HT(t),y=XP(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=gN(t),o.splice(o.indexOf(m),1),s=s.concat(zP(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(so(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(so(t.serverSyncTree_,l.currentWriteId,!0))}Br(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}yf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)tc(i[a]);e_(t,t.transactionQueueTree_)}function qT(t,e){let n,i=t.transactionQueueTree_;for(n=Me(e);n!==null&&na(i)===void 0;)i=Jm(i,n),e=nt(e),n=Me(e);return i}function KT(t,e){const n=[];return GT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function GT(t,e,n){const i=na(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);_f(e,s=>{GT(t,s,n)})}function yf(t,e){const n=na(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,UT(e,n.length>0?n:void 0)}_f(e,i=>{yf(t,i)})}function bN(t,e){const n=ic(qT(t,e)),i=Jm(t.transactionQueueTree_,e);return JP(i,s=>{xd(t,s)}),xd(t,i),VT(i,s=>{xd(t,s)}),n}function xd(t,e){const n=na(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(so(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?UT(e,void 0):n.length=r+1,Br(t.eventQueue_,ic(e),s);for(let o=0;o<i.length;o++)tc(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function EN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const P0=function(t,e){const n=TN(t),i=n.namespace;n.domain==="firebase.com"&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||J4();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cM(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ct(n.pathString)}},TN=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=wN(t.substring(u,h)));const f=EN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Se(this._path)?null:aT(this._path)}get ref(){return new ia(this._repo,this._path)}get _queryIdentifier(){const e=v0(this._queryParams),n=Lm(e);return n==="{}"?"default":n}get _queryObject(){return v0(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof n_))return!1;const n=this._repo===e._repo,i=uT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+NM(this._path)}}class ia extends n_{constructor(e,n){super(e,n,new zm,!1)}get parent(){const e=cT(this._path);return e===null?null:new ia(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}VP(ia);$P(ia);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="FIREBASE_DATABASE_EMULATOR_HOST",qp={};let CN=!1;function xN(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=P0(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[IN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=P0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Np(Np.OWNER):new lM(t.name,t.options,e);sN("Invalid Firebase Database URL",o),Se(o.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=SN(a,t,u,new aM(t.name,n));return new AN(h,t)}function kN(t,e){const n=qp[e];(!n||n[t.key]!==t)&&xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_N(t),delete n[t.key]}function SN(t,e,n,i){let s=qp[e.name];s||(s={},qp[e.name]=s);let r=s[t.toURLString()];return r&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hN(t,CN,n,i),s[t.toURLString()]=r,r}class AN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ia(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function RN(t){K4(Ws),bi(new ii("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xN(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Sn(t0,n0,t),Sn(t0,n0,"esm2017")}Hi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Hi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};RN();var DN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee,i_=i_||{},ge=DN||self;function fh(){}function vf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function sc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ON(t){return Object.prototype.hasOwnProperty.call(t,kd)&&t[kd]||(t[kd]=++MN)}var kd="closure_uid_"+(1e9*Math.random()>>>0),MN=0;function PN(t,e,n){return t.call.apply(t.bind,arguments)}function NN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function tn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tn=PN:tn=NN,tn.apply(null,arguments)}function Vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ks(){this.s=this.s,this.o=this.o}var LN=0;Ks.prototype.s=!1;Ks.prototype.na=function(){!this.s&&(this.s=!0,this.M(),LN!=0)&&ON(this)};Ks.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const YT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function s_(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function N0(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(vf(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function nn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nn.prototype.h=function(){this.defaultPrevented=!0};var FN=function(){if(!ge.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ge.addEventListener("test",fh,e),ge.removeEventListener("test",fh,e)}catch{}return t}();function dh(t){return/^[\s\xa0]*$/.test(t)}var L0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sd(t,e){return t<e?-1:t>e?1:0}function bf(){var t=ge.navigator;return t&&(t=t.userAgent)?t:""}function fi(t){return bf().indexOf(t)!=-1}function r_(t){return r_[" "](t),t}r_[" "]=fh;function UN(t){var e=$N;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var BN=fi("Opera"),Oo=fi("Trident")||fi("MSIE"),XT=fi("Edge"),Kp=XT||Oo,QT=fi("Gecko")&&!(bf().toLowerCase().indexOf("webkit")!=-1&&!fi("Edge"))&&!(fi("Trident")||fi("MSIE"))&&!fi("Edge"),VN=bf().toLowerCase().indexOf("webkit")!=-1&&!fi("Edge");function JT(){var t=ge.document;return t?t.documentMode:void 0}var ph;e:{var Ad="",Rd=function(){var t=bf();if(QT)return/rv:([^\);]+)(\)|;)/.exec(t);if(XT)return/Edge\/([\d\.]+)/.exec(t);if(Oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VN)return/WebKit\/(\S+)/.exec(t);if(BN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rd&&(Ad=Rd?Rd[1]:""),Oo){var Dd=JT();if(Dd!=null&&Dd>parseFloat(Ad)){ph=String(Dd);break e}}ph=Ad}var $N={};function zN(){return UN(function(){let t=0;const e=L0(String(ph)).split("."),n=L0("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Sd(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Sd(s[2].length==0,r[2].length==0)||Sd(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Gp;if(ge.document&&Oo){var F0=JT();Gp=F0||parseInt(ph,10)||void 0}else Gp=void 0;var HN=Gp;function vl(t,e){if(nn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(QT){e:{try{r_(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vl.X.h.call(this)}}Ht(vl,nn);var jN={2:"touch",3:"pen",4:"mouse"};vl.prototype.h=function(){vl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rc="closure_listenable_"+(1e6*Math.random()|0),WN=0;function qN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++WN,this.ba=this.ea=!1}function wf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function o_(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ZT(t){const e={};for(const n in t)e[n]=t[n];return e}const U0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eI(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<U0.length;r++)n=U0[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ef(t){this.src=t,this.g={},this.h=0}Ef.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Xp(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new qN(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Yp(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=YT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(wf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xp(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var a_="closure_lm_"+(1e6*Math.random()|0),Od={};function tI(t,e,n,i,s){if(i&&i.once)return iI(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)tI(t,e[r],n,i,s);return null}return n=u_(n),t&&t[rc]?t.N(e,n,sc(i)?!!i.capture:!!i,s):nI(t,e,n,!1,i,s)}function nI(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=sc(s)?!!s.capture:!!s,a=c_(t);if(a||(t[a_]=a=new Ef(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=KN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)FN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(rI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KN(){function t(n){return e.call(t.src,t.listener,n)}const e=GN;return t}function iI(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)iI(t,e[r],n,i,s);return null}return n=u_(n),t&&t[rc]?t.O(e,n,sc(i)?!!i.capture:!!i,s):nI(t,e,n,!0,i,s)}function sI(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)sI(t,e[r],n,i,s);else i=sc(i)?!!i.capture:!!i,n=u_(n),t&&t[rc]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Xp(r,n,i,s),-1<n&&(wf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=c_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xp(e,n,i,s)),(n=-1<t?e[t]:null)&&l_(n))}function l_(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[rc])Yp(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(rI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=c_(e))?(Yp(n,t),n.h==0&&(n.src=null,e[a_]=null)):wf(t)}}}function rI(t){return t in Od?Od[t]:Od[t]="on"+t}function GN(t,e){if(t.ba)t=!0;else{e=new vl(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&l_(t),t=n.call(i,e)}return t}function c_(t){return t=t[a_],t instanceof Ef?t:null}var Md="__closure_events_fn_"+(1e9*Math.random()>>>0);function u_(t){return typeof t=="function"?t:(t[Md]||(t[Md]=function(e){return t.handleEvent(e)}),t[Md])}function Ut(){Ks.call(this),this.i=new Ef(this),this.P=this,this.I=null}Ht(Ut,Ks);Ut.prototype[rc]=!0;Ut.prototype.removeEventListener=function(t,e,n,i){sI(this,t,e,n,i)};function zt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new nn(e,t);else if(e instanceof nn)e.target=e.target||t;else{var s=e;e=new nn(i,t),eI(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=$c(o,i,!0,e)&&s}if(o=e.g=t,s=$c(o,i,!0,e)&&s,s=$c(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=$c(o,i,!1,e)&&s}Ut.prototype.M=function(){if(Ut.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)wf(n[i]);delete t.g[e],t.h--}}this.I=null};Ut.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ut.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function $c(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Yp(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var h_=ge.JSON.stringify;function YN(){var t=lI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XN{constructor(){this.h=this.g=null}add(e,n){const i=oI.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var oI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QN,t=>t.reset());class QN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function JN(t){ge.setTimeout(()=>{throw t},0)}function aI(t,e){Qp||ZN(),Jp||(Qp(),Jp=!0),lI.add(t,e)}var Qp;function ZN(){var t=ge.Promise.resolve(void 0);Qp=function(){t.then(e6)}}var Jp=!1,lI=new XN;function e6(){for(var t;t=YN();){try{t.h.call(t.g)}catch(n){JN(n)}var e=oI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jp=!1}function Tf(t,e){Ut.call(this),this.h=t||1,this.g=e||ge,this.j=tn(this.lb,this),this.l=Date.now()}Ht(Tf,Ut);ee=Tf.prototype;ee.ca=!1;ee.R=null;ee.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zt(this,"tick"),this.ca&&(f_(this),this.start()))}};ee.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function f_(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ee.M=function(){Tf.X.M.call(this),f_(this),delete this.g};function d_(t,e,n){if(typeof t=="function")n&&(t=tn(t,n));else if(t&&typeof t.handleEvent=="function")t=tn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ge.setTimeout(t,e||0)}function cI(t){t.g=d_(()=>{t.g=null,t.i&&(t.i=!1,cI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class t6 extends Ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cI(this)}M(){super.M(),this.g&&(ge.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bl(t){Ks.call(this),this.h=t,this.g={}}Ht(bl,Ks);var B0=[];function uI(t,e,n,i){Array.isArray(n)||(n&&(B0[0]=n.toString()),n=B0);for(var s=0;s<n.length;s++){var r=tI(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function hI(t){o_(t.g,function(e,n){this.g.hasOwnProperty(n)&&l_(e)},t),t.g={}}bl.prototype.M=function(){bl.X.M.call(this),hI(this)};bl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function If(){this.g=!0}If.prototype.Aa=function(){this.g=!1};function n6(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function i6(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ro(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+r6(t,n)+(i?" "+i:"")})}function s6(t,e){t.info(function(){return"TIMEOUT: "+e})}If.prototype.info=function(){};function r6(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return h_(n)}catch{return e}}var Vr={},V0=null;function Cf(){return V0=V0||new Ut}Vr.Pa="serverreachability";function fI(t){nn.call(this,Vr.Pa,t)}Ht(fI,nn);function wl(t){const e=Cf();zt(e,new fI(e))}Vr.STAT_EVENT="statevent";function dI(t,e){nn.call(this,Vr.STAT_EVENT,t),this.stat=e}Ht(dI,nn);function cn(t){const e=Cf();zt(e,new dI(e,t))}Vr.Qa="timingevent";function pI(t,e){nn.call(this,Vr.Qa,t),this.size=e}Ht(pI,nn);function oc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ge.setTimeout(function(){t()},e)}var xf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},gI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function p_(){}p_.prototype.h=null;function $0(t){return t.h||(t.h=t.i())}function mI(){}var ac={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function g_(){nn.call(this,"d")}Ht(g_,nn);function m_(){nn.call(this,"c")}Ht(m_,nn);var Zp;function kf(){}Ht(kf,p_);kf.prototype.g=function(){return new XMLHttpRequest};kf.prototype.i=function(){return{}};Zp=new kf;function lc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new bl(this),this.O=o6,t=Kp?125:void 0,this.T=new Tf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _I}function _I(){this.i=null,this.g="",this.h=!1}var o6=45e3,eg={},gh={};ee=lc.prototype;ee.setTimeout=function(t){this.O=t};function tg(t,e,n){t.K=1,t.v=Af(Yi(e)),t.s=n,t.P=!0,yI(t,null)}function yI(t,e){t.F=Date.now(),cc(t),t.A=Yi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),xI(n.i,"t",i),t.C=0,n=t.l.H,t.h=new _I,t.g=KI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new t6(tn(t.La,t,t.g),t.N)),uI(t.S,t.g,"readystatechange",t.ib),e=t.H?ZT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),wl(),n6(t.j,t.u,t.A,t.m,t.U,t.s)}ee.ib=function(t){t=t.target;const e=this.L;e&&Vi(t)==3?e.l():this.La(t)};ee.La=function(t){try{if(t==this.g)e:{const u=Vi(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Kp||this.g&&(this.h.h||this.g.fa()||W0(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wl(3):wl(2)),Sf(this);var n=this.g.aa();this.Y=n;t:if(vI(this)){var i=W0(this.g);t="";var s=i.length,r=Vi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),ja(this);var o="";break t}this.h.i=new ge.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,i6(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dh(a)){var c=a;break t}}c=null}if(n=c)ro(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ng(this,n);else{this.i=!1,this.o=3,cn(12),fr(this),ja(this);break e}}this.P?(bI(this,u,o),Kp&&this.i&&u==3&&(uI(this.S,this.T,"tick",this.hb),this.T.start())):(ro(this.j,this.m,o,null),ng(this,o)),u==4&&fr(this),this.i&&!this.I&&(u==4?HI(this.l,this):(this.i=!1,cc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,cn(12)):(this.o=0,cn(13)),fr(this),ja(this)}}}catch{}finally{}};function vI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function bI(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=a6(t,n),s==gh){e==4&&(t.o=4,cn(14),i=!1),ro(t.j,t.m,null,"[Incomplete Response]");break}else if(s==eg){t.o=4,cn(15),ro(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ro(t.j,t.m,s,null),ng(t,s);vI(t)&&s!=gh&&s!=eg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,cn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),T_(e),e.K=!0,cn(11))):(ro(t.j,t.m,n,"[Invalid Chunked Response]"),fr(t),ja(t))}ee.hb=function(){if(this.g){var t=Vi(this.g),e=this.g.fa();this.C<e.length&&(Sf(this),bI(this,t,e),this.i&&t!=4&&cc(this))}};function a6(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gh:(n=Number(e.substring(n,i)),isNaN(n)?eg:(i+=1,i+n>e.length?gh:(e=e.substr(i,n),t.C=i+n,e)))}ee.cancel=function(){this.I=!0,fr(this)};function cc(t){t.V=Date.now()+t.O,wI(t,t.O)}function wI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=oc(tn(t.gb,t),e)}function Sf(t){t.B&&(ge.clearTimeout(t.B),t.B=null)}ee.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(s6(this.j,this.A),this.K!=2&&(wl(),cn(17)),fr(this),this.o=2,ja(this)):wI(this,this.V-t)};function ja(t){t.l.G==0||t.I||HI(t.l,t)}function fr(t){Sf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,f_(t.T),hI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ng(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ig(n.h,t))){if(!t.J&&ig(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yh(n),Of(n);else break e;E_(n),cn(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=oc(tn(n.cb,n),6e3));if(1>=AI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else dr(n,11)}else if((t.J||n.g==t)&&yh(n),!dh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(__(r,r.h),r.h=null))}if(i.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,ut(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=qI(i,i.H?i.ka:null,i.V),o.J){RI(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Sf(a),cc(a)),i.g=o}else $I(i);0<n.i.length&&Mf(n)}else c[0]!="stop"&&c[0]!="close"||dr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?dr(n,7):w_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}wl(4)}catch{}}function l6(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vf(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function c6(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function EI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=c6(t),i=l6(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var TI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u6(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function wr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wr){this.h=e!==void 0?e:t.h,mh(this,t.j),this.s=t.s,this.g=t.g,_h(this,t.m),this.l=t.l,e=t.i;var n=new El;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),z0(this,n),this.o=t.o}else t&&(n=String(t).match(TI))?(this.h=!!e,mh(this,n[1]||"",!0),this.s=ka(n[2]||""),this.g=ka(n[3]||"",!0),_h(this,n[4]),this.l=ka(n[5]||"",!0),z0(this,n[6]||"",!0),this.o=ka(n[7]||"")):(this.h=!!e,this.i=new El(null,this.h))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sa(e,H0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sa(e,H0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sa(n,n.charAt(0)=="/"?d6:f6,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sa(n,g6)),t.join("")};function Yi(t){return new wr(t)}function mh(t,e,n){t.j=n?ka(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _h(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function z0(t,e,n){e instanceof El?(t.i=e,m6(t.i,t.h)):(n||(e=Sa(e,p6)),t.i=new El(e,t.h))}function ut(t,e,n){t.i.set(e,n)}function Af(t){return ut(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ka(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,h6),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function h6(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var H0=/[#\/\?@]/g,f6=/[#\?:]/g,d6=/[#\?]/g,p6=/[#\?@]/g,g6=/#/g;function El(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gs(t){t.g||(t.g=new Map,t.h=0,t.i&&u6(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ee=El.prototype;ee.add=function(t,e){Gs(this),this.i=null,t=sa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function II(t,e){Gs(t),e=sa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function CI(t,e){return Gs(t),e=sa(t,e),t.g.has(e)}ee.forEach=function(t,e){Gs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};ee.oa=function(){Gs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};ee.W=function(t){Gs(this);let e=[];if(typeof t=="string")CI(this,t)&&(e=e.concat(this.g.get(sa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ee.set=function(t,e){return Gs(this),this.i=null,t=sa(this,t),CI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ee.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xI(t,e,n){II(t,e),0<n.length&&(t.i=null,t.g.set(sa(t,e),s_(n)),t.h+=n.length)}ee.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function sa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function m6(t,e){e&&!t.j&&(Gs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(II(this,i),xI(this,s,n))},t)),t.j=e}var _6=class{constructor(e,n){this.h=e,this.g=n}};function kI(t){this.l=t||y6,ge.PerformanceNavigationTiming?(t=ge.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ge.g&&ge.g.Ga&&ge.g.Ga()&&ge.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var y6=10;function SI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function AI(t){return t.h?1:t.g?t.g.size:0}function ig(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function __(t,e){t.g?t.g.add(e):t.h=e}function RI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kI.prototype.cancel=function(){if(this.i=DI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return s_(t.i)}function y_(){}y_.prototype.stringify=function(t){return ge.JSON.stringify(t,void 0)};y_.prototype.parse=function(t){return ge.JSON.parse(t,void 0)};function v6(){this.g=new y_}function b6(t,e,n){const i=n||"";try{EI(t,function(s,r){let o=s;sc(s)&&(o=h_(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function w6(t,e){const n=new If;if(ge.Image){const i=new Image;i.onload=Vc(zc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Vc(zc,n,i,"TestLoadImage: error",!1,e),i.onabort=Vc(zc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Vc(zc,n,i,"TestLoadImage: timeout",!1,e),ge.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function zc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function uc(t){this.l=t.ac||null,this.j=t.jb||!1}Ht(uc,p_);uc.prototype.g=function(){return new Rf(this.l,this.j)};uc.prototype.i=function(t){return function(){return t}}({});function Rf(t,e){Ut.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=v_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ht(Rf,Ut);var v_=0;ee=Rf.prototype;ee.open=function(t,e){if(this.readyState!=v_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tl(this)};ee.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ge).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ee.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hc(this)),this.readyState=v_};ee.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tl(this)),this.g&&(this.readyState=3,Tl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ge.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function OI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ee.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hc(this):Tl(this),this.readyState==3&&OI(this)}};ee.Va=function(t){this.g&&(this.response=this.responseText=t,hc(this))};ee.Ua=function(t){this.g&&(this.response=t,hc(this))};ee.ga=function(){this.g&&hc(this)};function hc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tl(t)}ee.setRequestHeader=function(t,e){this.v.append(t,e)};ee.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ee.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Tl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var E6=ge.JSON.parse;function mt(t){Ut.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=MI,this.K=this.L=!1}Ht(mt,Ut);var MI="",T6=/^https?$/i,I6=["POST","PUT"];ee=mt.prototype;ee.Ka=function(t){this.L=t};ee.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zp.g(),this.C=this.u?$0(this.u):$0(Zp),this.g.onreadystatechange=tn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){j0(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ge.FormData&&t instanceof ge.FormData,!(0<=YT(I6,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{LI(this),0<this.B&&((this.K=C6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tn(this.qa,this)):this.A=d_(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){j0(this,r)}};function C6(t){return Oo&&zN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ee.qa=function(){typeof i_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))};function j0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PI(t),Df(t)}function PI(t){t.D||(t.D=!0,zt(t,"complete"),zt(t,"error"))}ee.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zt(this,"complete"),zt(this,"abort"),Df(this))};ee.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Df(this,!0)),mt.X.M.call(this)};ee.Ha=function(){this.s||(this.F||this.v||this.l?NI(this):this.fb())};ee.fb=function(){NI(this)};function NI(t){if(t.h&&typeof i_<"u"&&(!t.C[1]||Vi(t)!=4||t.aa()!=2)){if(t.v&&Vi(t)==4)d_(t.Ha,0,t);else if(zt(t,"readystatechange"),Vi(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(TI)[1]||null;if(!s&&ge.self&&ge.self.location){var r=ge.self.location.protocol;s=r.substr(0,r.length-1)}i=!T6.test(s?s.toLowerCase():"")}n=i}if(n)zt(t,"complete"),zt(t,"success");else{t.m=6;try{var o=2<Vi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",PI(t)}}finally{Df(t)}}}}function Df(t,e){if(t.g){LI(t);const n=t.g,i=t.C[0]?fh:null;t.g=null,t.C=null,e||zt(t,"ready");try{n.onreadystatechange=i}catch{}}}function LI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ge.clearTimeout(t.A),t.A=null)}function Vi(t){return t.g?t.g.readyState:0}ee.aa=function(){try{return 2<Vi(this)?this.g.status:-1}catch{return-1}};ee.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ee.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),E6(e)}};function W0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case MI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ee.Ea=function(){return this.m};ee.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function FI(t){let e="";return o_(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function b_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=FI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ut(t,e,n))}function _a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function UI(t){this.Ca=0,this.i=[],this.j=new If,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_a("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_a("baseRetryDelayMs",5e3,t),this.bb=_a("retryDelaySeedMs",1e4,t),this.$a=_a("forwardChannelMaxRetries",2,t),this.ta=_a("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kI(t&&t.concurrentRequestLimit),this.Fa=new v6,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ee=UI.prototype;ee.ma=8;ee.G=1;function w_(t){if(BI(t),t.G==3){var e=t.U++,n=Yi(t.F);ut(n,"SID",t.I),ut(n,"RID",e),ut(n,"TYPE","terminate"),fc(t,n),e=new lc(t,t.j,e,void 0),e.K=2,e.v=Af(Yi(n)),n=!1,ge.navigator&&ge.navigator.sendBeacon&&(n=ge.navigator.sendBeacon(e.v.toString(),"")),!n&&ge.Image&&(new Image().src=e.v,n=!0),n||(e.g=KI(e.l,null),e.g.da(e.v)),e.F=Date.now(),cc(e)}WI(t)}function Of(t){t.g&&(T_(t),t.g.cancel(),t.g=null)}function BI(t){Of(t),t.u&&(ge.clearTimeout(t.u),t.u=null),yh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ge.clearTimeout(t.m),t.m=null)}function Mf(t){SI(t.h)||t.m||(t.m=!0,aI(t.Ja,t),t.C=0)}function x6(t,e){return AI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=oc(tn(t.Ja,t,e),jI(t,t.C)),t.C++,!0)}ee.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new lc(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ZT(r),eI(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=VI(this,s,e),n=Yi(this.F),ut(n,"RID",t),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),fc(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(FI(r)))+"&"+e:this.o&&b_(n,this.o,r)),__(this.h,s),this.Ya&&ut(n,"TYPE","init"),this.O?(ut(n,"$req",e),ut(n,"SID","null"),s.Z=!0,tg(s,n,null)):tg(s,n,e),this.G=2}}else this.G==3&&(t?q0(this,t):this.i.length==0||SI(this.h)||q0(this))};function q0(t,e){var n;e?n=e.m:n=t.U++;const i=Yi(t.F);ut(i,"SID",t.I),ut(i,"RID",n),ut(i,"AID",t.T),fc(t,i),t.o&&t.s&&b_(i,t.o,t.s),n=new lc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=VI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),__(t.h,n),tg(n,i,e)}function fc(t,e){t.ia&&o_(t.ia,function(n,i){ut(e,i,n)}),t.l&&EI({},function(n,i){ut(e,i,n)})}function VI(t,e,n){n=Math.min(t.i.length,n);var i=t.l?tn(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{b6(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function $I(t){t.g||t.u||(t.Z=1,aI(t.Ia,t),t.A=0)}function E_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=oc(tn(t.Ia,t),jI(t,t.A)),t.A++,!0)}ee.Ia=function(){if(this.u=null,zI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=oc(tn(this.eb,this),t)}};ee.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,cn(10),Of(this),zI(this))};function T_(t){t.B!=null&&(ge.clearTimeout(t.B),t.B=null)}function zI(t){t.g=new lc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yi(t.sa);ut(e,"RID","rpc"),ut(e,"SID",t.I),ut(e,"CI",t.L?"0":"1"),ut(e,"AID",t.T),ut(e,"TYPE","xmlhttp"),fc(t,e),t.o&&t.s&&b_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Af(Yi(e)),n.s=null,n.P=!0,yI(n,t)}ee.cb=function(){this.v!=null&&(this.v=null,Of(this),E_(this),cn(19))};function yh(t){t.v!=null&&(ge.clearTimeout(t.v),t.v=null)}function HI(t,e){var n=null;if(t.g==e){yh(t),T_(t),t.g=null;var i=2}else if(ig(t.h,e))n=e.D,RI(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Cf(),zt(i,new pI(i,n)),Mf(t)}else $I(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&x6(t,e)||i==2&&E_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:dr(t,5);break;case 4:dr(t,10);break;case 3:dr(t,6);break;default:dr(t,2)}}}function jI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function dr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=tn(t.kb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),ge.location&&ge.location.protocol=="http"||mh(n,"https"),Af(n)),w6(n.toString(),i)}else cn(2);t.G=0,t.l&&t.l.va(e),WI(t),BI(t)}ee.kb=function(t){t?(this.j.info("Successfully pinged google.com"),cn(2)):(this.j.info("Failed to ping google.com"),cn(1))};function WI(t){if(t.G=0,t.la=[],t.l){const e=DI(t.h);(e.length!=0||t.i.length!=0)&&(N0(t.la,e),N0(t.la,t.i),t.h.i.length=0,s_(t.i),t.i.length=0),t.l.ua()}}function qI(t,e,n){var i=n instanceof wr?Yi(n):new wr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),_h(i,i.m);else{var s=ge.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new wr(null,void 0);i&&mh(r,i),e&&(r.g=e),s&&_h(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&ut(i,n,e),ut(i,"VER",t.ma),fc(t,i),i}function KI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new mt(new uc({jb:!0})):new mt(t.ra),e.Ka(t.H),e}function GI(){}ee=GI.prototype;ee.xa=function(){};ee.wa=function(){};ee.va=function(){};ee.ua=function(){};ee.Ra=function(){};function vh(){if(Oo&&!(10<=Number(HN)))throw Error("Environmental error: no available transport.")}vh.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){Ut.call(this),this.g=new UI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!dh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ra(this)}Ht(Dn,Ut);Dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;cn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=qI(t,null,t.V),Mf(t)};Dn.prototype.close=function(){w_(this.g)};Dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=h_(t),t=n);e.i.push(new _6(e.ab++,t)),e.G==3&&Mf(e)};Dn.prototype.M=function(){this.g.l=null,delete this.j,w_(this.g),delete this.g,Dn.X.M.call(this)};function YI(t){g_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ht(YI,g_);function XI(){m_.call(this),this.status=1}Ht(XI,m_);function ra(t){this.g=t}Ht(ra,GI);ra.prototype.xa=function(){zt(this.g,"a")};ra.prototype.wa=function(t){zt(this.g,new YI(t))};ra.prototype.va=function(t){zt(this.g,new XI)};ra.prototype.ua=function(){zt(this.g,"b")};vh.prototype.createWebChannel=vh.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;xf.NO_ERROR=0;xf.TIMEOUT=8;xf.HTTP_ERROR=6;gI.COMPLETE="complete";mI.EventType=ac;ac.OPEN="a";ac.CLOSE="b";ac.ERROR="c";ac.MESSAGE="d";Ut.prototype.listen=Ut.prototype.N;mt.prototype.listenOnce=mt.prototype.O;mt.prototype.getLastError=mt.prototype.Oa;mt.prototype.getLastErrorCode=mt.prototype.Ea;mt.prototype.getStatus=mt.prototype.aa;mt.prototype.getResponseJson=mt.prototype.Sa;mt.prototype.getResponseText=mt.prototype.fa;mt.prototype.send=mt.prototype.da;mt.prototype.setWithCredentials=mt.prototype.Ka;var k6=function(){return new vh},S6=function(){return Cf()},Pd=xf,A6=gI,R6=Vr,K0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},D6=uc,Hc=mI,O6=mt;const G0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Kl("@firebase/firestore");function Y0(){return Rr.logLevel}function te(t,...e){if(Rr.logLevel<=Be.DEBUG){const n=e.map(I_);Rr.debug(`Firestore (${oa}): ${t}`,...n)}}function Xi(t,...e){if(Rr.logLevel<=Be.ERROR){const n=e.map(I_);Rr.error(`Firestore (${oa}): ${t}`,...n)}}function bh(t,...e){if(Rr.logLevel<=Be.WARN){const n=e.map(I_);Rr.warn(`Firestore (${oa}): ${t}`,...n)}}function I_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: `+t;throw Xi(e),new Error(e)}function lt(t,e){t||he()}function be(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class P6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class N6{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ji,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ji)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string"),new QI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new Gt(e)}}class L6{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class F6{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new L6(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string"),this.T=n.token,new U6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=V6(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ze(t,e){return t<e?-1:t>e?1:0}function Mo(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Et(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Et(0,0))}static max(){return new ve(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,i){n===void 0?n=0:n>e.length&&he(),i===void 0?i=e.length-n:i>e.length-n&&he(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Il{construct(e,n,i){return new st(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Q(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const $6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Il{construct(e,n,i){return new Zt(e,n,i)}static isValidIdentifier(e){return $6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Zt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new Q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(n)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(st.fromString(e))}static fromName(e){return new oe(st.fromString(e).popFirst(5))}static empty(){return new oe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new st(e.slice()))}}function z6(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(i===1e9?new Et(n+1,0):new Et(n,i));return new Fs(s,oe.empty(),e)}function H6(t){return new Fs(t.readTime,t.key,-1)}class Fs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Fs(ve.min(),oe.empty(),-1)}static max(){return new Fs(ve.max(),oe.empty(),-1)}}function j6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ze(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==W6)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,i)=>{n(e)})}static reject(e){return new F((n,i)=>{i(e)})}static waitFor(e){return new F((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=F.resolve(!1);for(const i of e)n=n.next(s=>s?F.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new F((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new F((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function pc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class C_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}C_.ct=-1;function Pf(t){return t==null}function wh(t){return t===0&&1/t==-1/0}function K6(t){return typeof t=="number"&&Number.isInteger(t)&&!wh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jc(this.root,e,this.comparator,!0)}}class jc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Bt.RED,this.left=s??Bt.EMPTY,this.right=r??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Bt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Q0(this.data.getIterator())}getIteratorFrom(e){return new Q0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class Q0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new Ct(Zt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class G6 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new G6("Invalid base64 string: "+s):s}}(e);return new on(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new on(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const Y6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Us(t){if(lt(!!t),typeof t=="string"){let e=0;const n=Y6.exec(t);if(lt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:bt(t.seconds),nanos:bt(t.nanos)}}function bt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Po(t){return typeof t=="string"?on.fromBase64String(t):on.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tC(t){const e=t.mapValue.fields.__previous_value__;return eC(e)?tC(e):e}function Cl(t){const e=Us(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class xl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eC(t)?4:Q6(t)?9007199254740991:10:he()}function Ti(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cl(t).isEqual(Cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Us(i.timestampValue),o=Us(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Po(i.bytesValue).isEqual(Po(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return bt(i.geoPointValue.latitude)===bt(s.geoPointValue.latitude)&&bt(i.geoPointValue.longitude)===bt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return bt(i.integerValue)===bt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=bt(i.doubleValue),o=bt(s.doubleValue);return r===o?wh(r)===wh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Mo(t.arrayValue.values||[],e.arrayValue.values||[],Ti);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(X0(r)!==X0(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ti(r[a],o[a])))return!1;return!0}(t,e);default:return he()}}function kl(t,e){return(t.values||[]).find(n=>Ti(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=Dr(t),i=Dr(e);if(n!==i)return ze(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=bt(s.integerValue||s.doubleValue),a=bt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return J0(t.timestampValue,e.timestampValue);case 4:return J0(Cl(t),Cl(e));case 5:return ze(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Po(s),a=Po(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ze(o[l],a[l]);if(c!==0)return c}return ze(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=ze(bt(s.latitude),bt(r.latitude));return o!==0?o:ze(bt(s.longitude),bt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=No(o[l],a[l]);if(c)return c}return ze(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Wc.mapValue&&r===Wc.mapValue)return 0;if(s===Wc.mapValue)return 1;if(r===Wc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ze(a[u],c[u]);if(h!==0)return h;const f=No(o[a[u]],l[c[u]]);if(f!==0)return f}return ze(a.length,c.length)}(t.mapValue,e.mapValue);default:throw he()}}function J0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=Us(t),i=Us(e),s=ze(n.seconds,i.seconds);return s!==0?s:ze(n.nanos,i.nanos)}function Lo(t){return sg(t)}function sg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Us(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Po(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=sg(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${sg(i.fields[a])}`;return r+"}"}(t.mapValue):he();var e,n}function Z0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function rg(t){return!!t&&"integerValue"in t}function x_(t){return!!t&&"arrayValue"in t}function e1(t){return!!t&&"nullValue"in t}function t1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Au(t){return!!t&&"mapValue"in t}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Wa(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Q6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=Zt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Wa(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ti(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Au(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){$r(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new mn(Wa(this.value))}}function nC(t){const e=[];return $r(t.fields,(n,i)=>{const s=new Zt([n]);if(Au(i)){const r=nC(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qt(e,0,ve.min(),ve.min(),ve.min(),mn.empty(),0)}static newFoundDocument(e,n,i,s){return new Qt(e,1,n,ve.min(),i,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,ve.min(),ve.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,ve.min(),ve.min(),mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eh{constructor(e,n){this.position=e,this.inclusive=n}}function n1(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=oe.comparator(oe.fromName(o.referenceValue),n.key):i=No(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function i1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ti(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function J6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iC{}class wt extends iC{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new eL(e,n,i):n==="array-contains"?new iL(e,i):n==="in"?new sL(e,i):n==="not-in"?new rL(e,i):n==="array-contains-any"?new oL(e,i):new wt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new tL(e,i):new nL(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(No(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class si extends iC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new si(e,n)}matches(e){return sC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sC(t){return t.op==="and"}function rC(t){return Z6(t)&&sC(t)}function Z6(t){for(const e of t.filters)if(e instanceof si)return!1;return!0}function og(t){if(t instanceof wt)return t.field.canonicalString()+t.op.toString()+Lo(t.value);if(rC(t))return t.filters.map(e=>og(e)).join(",");{const e=t.filters.map(n=>og(n)).join(",");return`${t.op}(${e})`}}function oC(t,e){return t instanceof wt?function(n,i){return i instanceof wt&&n.op===i.op&&n.field.isEqual(i.field)&&Ti(n.value,i.value)}(t,e):t instanceof si?function(n,i){return i instanceof si&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&oC(r,i.filters[o]),!0):!1}(t,e):void he()}function aC(t){return t instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${Lo(e.value)}`}(t):t instanceof si?function(e){return e.op.toString()+" {"+e.getFilters().map(aC).join(" ,")+"}"}(t):"Filter"}class eL extends wt{constructor(e,n,i){super(e,n,i),this.key=oe.fromName(i.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class tL extends wt{constructor(e,n){super(e,"in",n),this.keys=lC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nL extends wt{constructor(e,n){super(e,"not-in",n),this.keys=lC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>oe.fromName(i.referenceValue))}class iL extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return x_(n)&&kl(n.arrayValue,this.value)}}class sL extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kl(this.value.arrayValue,n)}}class rL extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kl(this.value.arrayValue,n)}}class oL extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!x_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>kl(this.value.arrayValue,i))}}/**
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
 */class aL{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function s1(t,e=null,n=[],i=[],s=null,r=null,o=null){return new aL(t,e,n,i,s,r,o)}function k_(t){const e=be(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>og(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Pf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Lo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Lo(i)).join(",")),e.ft=n}return e.ft}function S_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i1(t.startAt,e.startAt)&&i1(t.endAt,e.endAt)}function ag(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function lL(t,e,n,i,s,r,o,a){return new gc(t,e,n,i,s,r,o,a)}function Nf(t){return new gc(t)}function r1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function A_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function uC(t){return t.collectionGroup!==null}function _o(t){const e=be(t);if(e.dt===null){e.dt=[];const n=A_(e),i=cC(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new qa(n)),e.dt.push(new qa(Zt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qa(Zt.keyField(),r))}}}return e.dt}function Qi(t){const e=be(t);if(!e.wt)if(e.limitType==="F")e.wt=s1(e.path,e.collectionGroup,_o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of _o(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new qa(r.field,o))}const i=e.endAt?new Eh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Eh(e.startAt.position,e.startAt.inclusive):null;e.wt=s1(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function lg(t,e){e.getFirstInequalityField(),A_(t);const n=t.filters.concat([e]);return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cg(t,e,n){return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lf(t,e){return S_(Qi(t),Qi(e))&&t.limitType===e.limitType}function hC(t){return`${k_(Qi(t))}|lt:${t.limitType}`}function ug(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>aC(i)).join(", ")}]`),Pf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Lo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Lo(i)).join(",")),`Target(${n})`}(Qi(t))}; limitType=${t.limitType})`}function Ff(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):oe.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of _o(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=n1(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,_o(n),i)||n.endAt&&!function(s,r,o){const a=n1(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,_o(n),i))}(t,e)}function cL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fC(t){return(e,n)=>{let i=!1;for(const s of _o(t)){const r=uL(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function uL(t,e,n){const i=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?No(a,l):he()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return ZI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new xt(oe.comparator);function Ji(){return hL}const dC=new xt(oe.comparator);function Aa(...t){let e=dC;for(const n of t)e=e.insert(n.key,n);return e}function pC(t){let e=dC;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function pr(){return Ka()}function gC(){return Ka()}function Ka(){return new aa(t=>t.toString(),(t,e)=>t.isEqual(e))}const fL=new xt(oe.comparator),dL=new Ct(oe.comparator);function xe(...t){let e=dL;for(const n of t)e=e.add(n);return e}const pL=new Ct(ze);function mC(){return pL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wh(e)?"-0":e}}function yC(t){return{integerValue:""+t}}function gL(t,e){return K6(e)?yC(e):_C(t,e)}/**
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
 */class Uf{constructor(){this._=void 0}}function mL(t,e,n){return t instanceof Th?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Sl?bC(t,e):t instanceof Al?wC(t,e):function(i,s){const r=vC(i,s),o=o1(r)+o1(i._t);return rg(r)&&rg(i._t)?yC(o):_C(i.serializer,o)}(t,e)}function _L(t,e,n){return t instanceof Sl?bC(t,e):t instanceof Al?wC(t,e):n}function vC(t,e){return t instanceof Ih?rg(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Th extends Uf{}class Sl extends Uf{constructor(e){super(),this.elements=e}}function bC(t,e){const n=EC(e);for(const i of t.elements)n.some(s=>Ti(s,i))||n.push(i);return{arrayValue:{values:n}}}class Al extends Uf{constructor(e){super(),this.elements=e}}function wC(t,e){let n=EC(e);for(const i of t.elements)n=n.filter(s=>!Ti(s,i));return{arrayValue:{values:n}}}class Ih extends Uf{constructor(e,n){super(),this.serializer=e,this._t=n}}function o1(t){return bt(t.integerValue||t.doubleValue)}function EC(t){return x_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yL(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Sl&&i instanceof Sl||n instanceof Al&&i instanceof Al?Mo(n.elements,i.elements,Ti):n instanceof Ih&&i instanceof Ih?Ti(n._t,i._t):n instanceof Th&&i instanceof Th}(t.transform,e.transform)}class vL{constructor(e,n){this.version=e,this.transformResults=n}}class ni{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ni}static exists(e){return new ni(void 0,e)}static updateTime(e){return new ni(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bf{}function TC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R_(t.key,ni.none()):new mc(t.key,t.data,ni.none());{const n=t.data,i=mn.empty();let s=new Ct(Zt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ys(t.key,i,new kn(s.toArray()),ni.none())}}function bL(t,e,n){t instanceof mc?function(i,s,r){const o=i.value.clone(),a=l1(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ys?function(i,s,r){if(!Ru(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=l1(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(IC(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,i){return t instanceof mc?function(s,r,o,a){if(!Ru(s.precondition,r))return o;const l=s.value.clone(),c=c1(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ys?function(s,r,o,a){if(!Ru(s.precondition,r))return o;const l=c1(s.fieldTransforms,a,r),c=r.data;return c.setAll(IC(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Ru(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function wL(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=vC(i.transform,s||null);r!=null&&(n===null&&(n=mn.empty()),n.set(i.field,r))}return n||null}function a1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Mo(n,i,(s,r)=>yL(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mc extends Bf{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ys extends Bf{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function IC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function l1(t,e,n){const i=new Map;lt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,_L(o,a,n[s]))}return i}function c1(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,mL(r,o,e))}return i}class R_ extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EL extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&bL(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ga(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ga(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=gC();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=TC(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(n,i)=>a1(n,i))&&Mo(this.baseMutations,e.baseMutations,(n,i)=>a1(n,i))}}class D_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){lt(e.mutations.length===i.length);let s=fL;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new D_(e,n,i,s)}}/**
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
 */class IL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Oe;function xL(t){switch(t){default:return he();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function CC(t){if(t===void 0)return Xi("GRPC error has no .code"),O.UNKNOWN;switch(t){case vt.OK:return O.OK;case vt.CANCELLED:return O.CANCELLED;case vt.UNKNOWN:return O.UNKNOWN;case vt.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case vt.INTERNAL:return O.INTERNAL;case vt.UNAVAILABLE:return O.UNAVAILABLE;case vt.UNAUTHENTICATED:return O.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case vt.NOT_FOUND:return O.NOT_FOUND;case vt.ALREADY_EXISTS:return O.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return O.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case vt.ABORTED:return O.ABORTED;case vt.OUT_OF_RANGE:return O.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return O.UNIMPLEMENTED;case vt.DATA_LOSS:return O.DATA_LOSS;default:return he()}}(Oe=vt||(vt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class O_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return qc}static getOrCreateInstance(){return qc===null&&(qc=new O_),qc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let qc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,_c.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Vf(ve.min(),s,mC(),Ji(),xe())}}class _c{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new _c(i,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class xC{constructor(e,n){this.targetId=e,this.Et=n}}class kC{constructor(e,n,i=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class u1{constructor(){this.At=0,this.Rt=f1(),this.vt=on.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=xe(),n=xe(),i=xe();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:he()}}),new _c(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=f1()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class kL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ji(),this.qt=h1(),this.Ut=new Ct(ze)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(ag(o))if(s===0){const a=new oe(o.path);this.Qt(i,a,Qt.newNoDocument(a,ve.min()))}else lt(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=O_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ag(a.target)){const l=new oe(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Qt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=xe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Vf(e,n,this.Ut,this.Lt,i);return this.Lt=Ji(),this.qt=h1(),this.Ut=new Ct(ze),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new u1,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ct(ze),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new u1),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function h1(){return new xt(oe.comparator)}function f1(){return new xt(oe.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RL=(()=>({and:"AND",or:"OR"}))();class DL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ch(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OL(t,e){return Ch(t,e.toTimestamp())}function yi(t){return lt(!!t),ve.fromTimestamp(function(e){const n=Us(e);return new Et(n.seconds,n.nanos)}(t))}function M_(t,e){return function(n){return new st(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function AC(t){const e=st.fromString(t);return lt(MC(e)),e}function hg(t,e){return M_(t.databaseId,e.path)}function Nd(t,e){const n=AC(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(RC(n))}function fg(t,e){return M_(t.databaseId,e)}function ML(t){const e=AC(t);return e.length===4?st.emptyPath():RC(e)}function dg(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RC(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function d1(t,e,n){return{name:hg(t,e),fields:n.value.mapValue.fields}}function PL(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(lt(c===void 0||typeof c=="string"),on.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),on.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:CC(l.code);return new Q(c,l.message||"")}(o);n=new kC(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Nd(t,i.document.name),r=yi(i.document.updateTime),o=i.document.createTime?yi(i.document.createTime):ve.min(),a=new mn({mapValue:{fields:i.document.fields}}),l=Qt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Du(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Nd(t,i.document),r=i.readTime?yi(i.readTime):ve.min(),o=Qt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Nd(t,i.document),r=i.removedTargetIds||[];n=new Du([],r,s,null)}else{if(!("filter"in e))return he();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new CL(s),o=i.targetId;n=new xC(o,r)}}return n}function NL(t,e){let n;if(e instanceof mc)n={update:d1(t,e.key,e.value)};else if(e instanceof R_)n={delete:hg(t,e.key)};else if(e instanceof Ys)n={update:d1(t,e.key,e.data),updateMask:jL(e.fieldMask)};else{if(!(e instanceof EL))return he();n={verify:hg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Th)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Sl)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Al)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ih)return{fieldPath:r.field.canonicalString(),increment:o._t};throw he()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function LL(t,e){return t&&t.length>0?(lt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?yi(i.updateTime):yi(s);return r.isEqual(ve.min())&&(r=yi(s)),new vL(r,i.transformResults||[])}(n,e))):[]}function FL(t,e){return{documents:[fg(t,e.path)]}}function UL(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=fg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return OC(si.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:eo(u.field),direction:$L(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Pf(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function BL(t){let e=ML(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){lt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=DC(u);return h instanceof si&&rC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new qa(to(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Eh(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Eh(f,h)}(n.endAt)),lL(e,s,o,r,a,"F",l,c)}function VL(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return he()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function DC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=to(e.unaryFilter.field);return wt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=to(e.unaryFilter.field);return wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(e.unaryFilter.field);return wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=to(e.unaryFilter.field);return wt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(e){return wt.create(to(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return si.create(e.compositeFilter.filters.map(n=>DC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return he()}}(e.compositeFilter.op))}(t):he()}function $L(t){return SL[t]}function zL(t){return AL[t]}function HL(t){return RL[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return Zt.fromServerFormat(t.fieldPath)}function OC(t){return t instanceof wt?function(e){if(e.op==="=="){if(t1(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NAN"}};if(e1(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(t1(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NOT_NAN"}};if(e1(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(e.field),op:zL(e.op),value:e.value}}}(t):t instanceof si?function(e){const n=e.getFilters().map(i=>OC(i));return n.length===1?n[0]:{compositeFilter:{op:HL(e.op),filters:n}}}(t):he()}function jL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,i,s,r=ve.min(),o=ve.min(),a=on.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.se=e}}function qL(t){const e=BL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cg(e,e.limit,"L"):e}/**
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
 */class KL{constructor(){this.He=new GL}addToCollectionParentIndex(e,n){return this.He.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Fs.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Fs.min())}updateCollectionGroup(e,n,i){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class GL{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ct(st.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ct(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Fo(0)}static bn(){return new Fo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.changes=new aa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?F.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Ga(i.mutation,s,kn.empty(),Et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,xe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=xe()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Aa();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,xe()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ji();const o=Ka(),a=Ka();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ys)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ga(u.mutation,c,u.mutation.getFieldMask(),Et.now())):o.set(c.key,kn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new XL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ka();let s=new xt((o,a)=>o-a),r=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||kn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||xe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=gC();u.forEach(f=>{if(!r.has(f)){const d=TC(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return F.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return oe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):F.resolve(pr());let a=-1,l=r;return o.next(c=>F.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,xe())).next(u=>({batchId:a,changes:pC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(i=>{let s=Aa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Aa();return this.indexManager.getCollectionParents(e,s).next(o=>F.forEach(o,a=>{const l=function(c,u){return new gc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Qt.newInvalidDocument(c)))});let o=Aa();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ga(c.mutation,l,kn.empty(),Et.now()),Ff(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return F.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:yi(i.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:qL(i.bundledQuery),readTime:yi(i.readTime)}}(n)),F.resolve()}}/**
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
 */class ZL{constructor(){this.overlays=new xt(oe.comparator),this.ts=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const i=pr();return F.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),F.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),F.resolve()}getOverlaysForCollection(e,n,i){const s=pr(),r=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new xt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=pr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=pr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return F.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new IL(n,i));let r=this.ts.get(n);r===void 0&&(r=xe(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.es=new Ct(Rt.ns),this.ss=new Ct(Rt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new Rt(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new Rt(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new oe(new st([])),i=new Rt(n,e),s=new Rt(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new oe(new st([])),i=new Rt(n,e),s=new Rt(n,e+1);let r=xe();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Rt(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return oe.comparator(e.key,n.key)||ze(e.ds,n.ds)}static rs(e,n){return ze(e.ds,n.ds)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ct(Rt.ns)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TL(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Rt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Rt(n,0),s=new Rt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ct(ze);return n.forEach(s=>{const r=new Rt(s,0),o=new Rt(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),F.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;oe.isDocumentKey(r)||(r=r.child(""));const o=new Rt(new oe(r),0);let a=new Ct(ze);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),F.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){lt(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return F.forEach(n.mutations,s=>{const r=new Rt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new Rt(n,0),s=this._s.firstAfterOrEqual(i);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.Ts=e,this.docs=new xt(oe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return F.resolve(i?i.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let i=Ji();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Qt.newInvalidDocument(s))}),F.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ji();const o=n.path,a=new oe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||j6(H6(u),i)<=0||(s.has(u.key)||Ff(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,n,i,s){he()}Es(e,n){return F.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new n5(this)}getSize(e){return F.resolve(this.size)}}class n5 extends YL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),F.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.persistence=e,this.As=new aa(n=>k_(n),S_),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Rs=0,this.vs=new P_,this.targetCount=0,this.bs=Fo.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),F.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Fo(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Sn(n),F.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(r).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return F.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),F.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),F.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return F.resolve(i)}containsKey(e,n){return F.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new C_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new i5(this),this.indexManager=new KL,this.remoteDocumentCache=function(i){return new t5(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new WL(n),this.xs=new JL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new e5(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){te("MemoryPersistence","Starting transaction:",e);const s=new r5(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return F.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class r5 extends q6{constructor(e){super(),this.currentSequenceNumber=e}}class N_{constructor(e){this.persistence=e,this.$s=new P_,this.Ms=null}static Fs(e){return new N_(e)}get Bs(){if(this.Ms)return this.Ms;throw he()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),F.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),F.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Bs,i=>{const s=oe.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,ve.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return F.or([()=>F.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=xe(),s=xe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new L_(e,n.fromCache,i,s)}}/**
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
 */class o5{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(r1(n))return F.resolve(null);let i=Qi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cg(n,null,"F"),i=Qi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=xe(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,cg(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return r1(n)||s.isEqual(ve.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(Y0()<=Be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ug(n)),this.Fi(e,o,n,z6(s,-1)))})}$i(e,n){let i=new Ct(fC(e));return n.forEach((s,r)=>{Ff(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Y0()<=Be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ug(n)),this.xi.getDocumentsMatchingQuery(e,n,Fs.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new xt(ze),this.qi=new aa(r=>k_(r),S_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function l5(t,e,n,i){return new a5(t,e,n,i)}async function PC(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=xe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function c5(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=F.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const g=l.docVersions.get(d);lt(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=xe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function NC(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function u5(t,e){const n=be(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(on.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=Ji(),c=xe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(h5(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(ve.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function h5(t,e,n){let i=xe(),s=xe();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ji();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function f5(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function d5(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,F.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new Er(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function pg(t,e,n){const i=be(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pc(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function p1(t,e,n){const i=be(t);let s=ve.min(),r=xe();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=be(a),h=u.qi.get(c);return h!==void 0?F.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Qi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?r:xe())).next(a=>(p5(i,cL(e),a),{documents:a,Wi:r})))}function p5(t,e,n){let i=t.Ui.get(e)||ve.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class g1{constructor(){this.activeTargetIds=mC()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g5{constructor(){this.Br=new g1,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new g1,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m5{qr(e){}shutdown(){}}/**
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
 */class m1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function Ld(){return Kc===null?Kc=268435456+Math.round(2147483648*Math.random()):Kc++,"0x"+Kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class v5 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Ld(),a=this.ao(e,n);te("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(te("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw bh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+oa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=_5[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Ld();return new Promise((o,a)=>{const l=new O6;l.setWithCredentials(!0),l.listenOnce(A6.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pd.NO_ERROR:const u=l.getResponseJson();te(qt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Pd.TIMEOUT:te(qt,`RPC '${e}' ${r} timed out`),a(new Q(O.DEADLINE_EXCEEDED,"Request time out"));break;case Pd.HTTP_ERROR:const h=l.getStatus();if(te(qt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(d.status);a(new Q(p,d.message))}else a(new Q(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q(O.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(qt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);te(qt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Ld(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=k6(),a=S6(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new D6({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");te(qt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new y5({Wr:g=>{f?te(qt,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(h||(te(qt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),te(qt,`RPC '${e}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,y=>{try{_(y)}catch(w){setTimeout(()=>{throw w},0)}})};return p(u,Hc.EventType.OPEN,()=>{f||te(qt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Hc.EventType.CLOSE,()=>{f||(f=!0,te(qt,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Hc.EventType.ERROR,g=>{f||(f=!0,bh(qt,`RPC '${e}' stream ${s} transport errored:`,g),d.so(new Q(O.UNAVAILABLE,"The operation could not be completed")))}),p(u,Hc.EventType.MESSAGE,g=>{var m;if(!f){const _=g.data[0];lt(!!_);const y=_,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){te(qt,`RPC '${e}' stream ${s} received error:`,w);const b=w.status;let T=function(I){const x=vt[I];if(x!==void 0)return CC(x)}(b),S=w.message;T===void 0&&(T=O.INTERNAL,S="Unknown error status: "+b+" with message "+w.message),f=!0,d.so(new Q(T,S)),u.close()}else te(qt,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,R6.STAT_EVENT,g=>{g.stat===K0.PROXY?te(qt,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===K0.NOPROXY&&te(qt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){return new DL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new LC(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new Q(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b5 extends FC{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=PL(this.serializer,e),i=function(s){if(!("targetChange"in s))return ve.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?ve.min():r.readTime?yi(r.readTime):ve.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=dg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=ag(a)?{documents:FL(s,a)}:{query:UL(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=SC(s,r.resumeToken):r.snapshotVersion.compareTo(ve.min())>0&&(o.readTime=Ch(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=VL(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=dg(this.serializer),n.removeTarget=e,this.Fo(n)}}class w5 extends FC{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=LL(e.writeResults,e.commitTime),i=yi(e.commitTime);return this.listener.Zo(i,n)}return lt(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=dg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>NL(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(O.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Q(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class T5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Xi(n),this.ru=!1):te("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{zr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=be(a);l.du.add(4),await yc(l),l.mu.set("Unknown"),l.du.delete(4),await zf(l)}(this))})}),this.mu=new T5(i,s)}}async function zf(t){if(zr(t))for(const e of t.wu)await e(!0)}async function yc(t){for(const e of t.wu)await e(!1)}function UC(t,e){const n=be(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),B_(n)?U_(n):la(n).No()&&F_(n,e))}function BC(t,e){const n=be(t),i=la(n);n.fu.delete(e),i.No()&&VC(n,e),n.fu.size===0&&(i.No()?i.$o():zr(n)&&n.mu.set("Unknown"))}function F_(t,e){t.gu.Ot(e.targetId),la(t).jo(e)}function VC(t,e){t.gu.Ot(e),la(t).Wo(e)}function U_(t){t.gu=new kL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),la(t).start(),t.mu.ou()}function B_(t){return zr(t)&&!la(t).xo()&&t.fu.size>0}function zr(t){return be(t).du.size===0}function $C(t){t.gu=void 0}async function C5(t){t.fu.forEach((e,n)=>{F_(t,e)})}async function x5(t,e){$C(t),B_(t)?(t.mu.au(e),U_(t)):t.mu.set("Unknown")}async function k5(t,e,n){if(t.mu.set("Online"),e instanceof kC&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await xh(t,i)}else if(e instanceof Du?t.gu.Kt(e):e instanceof xC?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ve.min()))try{const i=await NC(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(on.EMPTY_BYTE_STRING,l.snapshotVersion)),VC(s,a);const c=new Er(l.target,a,1,l.sequenceNumber);F_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){te("RemoteStore","Failed to raise snapshot:",i),await xh(t,i)}}async function xh(t,e,n){if(!pc(e))throw e;t.du.add(1),await yc(t),t.mu.set("Offline"),n||(n=()=>NC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await zf(t)})}function zC(t,e){return e().catch(n=>xh(t,n,e))}async function Hf(t){const e=be(t),n=Bs(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;S5(e);)try{const s=await f5(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,A5(e,s)}catch(s){await xh(e,s)}HC(e)&&jC(e)}function S5(t){return zr(t)&&t.lu.length<10}function A5(t,e){t.lu.push(e);const n=Bs(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function HC(t){return zr(t)&&!Bs(t).xo()&&t.lu.length>0}function jC(t){Bs(t).start()}async function R5(t){Bs(t).tu()}async function D5(t){const e=Bs(t);for(const n of t.lu)e.Yo(n.mutations)}async function O5(t,e,n){const i=t.lu.shift(),s=D_.from(i,e,n);await zC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hf(t)}async function M5(t,e){e&&Bs(t).Jo&&await async function(n,i){if(s=i.code,xL(s)&&s!==O.ABORTED){const r=n.lu.shift();Bs(n).Oo(),await zC(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Hf(n)}var s}(t,e),HC(t)&&jC(t)}async function _1(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const i=zr(n);n.du.add(3),await yc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await zf(n)}async function P5(t,e){const n=be(t);e?(n.du.delete(2),await zf(n)):e||(n.du.add(2),await yc(n),n.mu.set("Unknown"))}function la(t){return t.yu||(t.yu=function(e,n,i){const s=be(e);return s.nu(),new b5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:C5.bind(null,t),Zr:x5.bind(null,t),zo:k5.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),B_(t)?U_(t):t.mu.set("Unknown")):(await t.yu.stop(),$C(t))})),t.yu}function Bs(t){return t.pu||(t.pu=function(e,n,i){const s=be(e);return s.nu(),new w5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:R5.bind(null,t),Zr:M5.bind(null,t),Xo:D5.bind(null,t),Zo:O5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Hf(t)):(await t.pu.stop(),t.lu.length>0&&(te("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new V_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $_(t,e){if(Xi("AsyncQueue",`${e}: ${t}`),pc(t))return new Q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||oe.comparator(n.key,i.key):(n,i)=>oe.comparator(n.key,i.key),this.keyedMap=Aa(),this.sortedSet=new xt(this.comparator)}static emptySet(e){return new yo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new yo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.Iu=new xt(oe.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):he():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Uo{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,yo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(){this.Eu=void 0,this.listeners=[]}}class L5{constructor(){this.queries=new aa(e=>hC(e),Lf),this.onlineState="Unknown",this.Au=new Set}}async function z_(t,e){const n=be(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new N5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=$_(o,`Initialization of query '${ug(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&j_(n)}async function H_(t,e){const n=be(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function F5(t,e){const n=be(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&j_(n)}function U5(t,e,n){const i=be(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function j_(t){t.Au.forEach(e=>{e.next()})}class W_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Uo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.key=e}}class qC{constructor(e){this.key=e}}class B5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=xe(),this.mutatedKeys=xe(),this.Ku=fC(e),this.Gu=new yo(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new y1,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Ff(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(i.track({type:3,doc:d}),m=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),m=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),m=!0):f&&!d&&(i.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Uo(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new y1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=xe(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new qC(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new WC(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=xe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Uo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class V5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class $5{constructor(e){this.key=e,this.ec=!1}}class z5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new aa(a=>hC(a),Lf),this.ic=new Map,this.rc=new Set,this.oc=new xt(oe.comparator),this.uc=new Map,this.cc=new P_,this.ac={},this.hc=new Map,this.lc=Fo.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function H5(t,e){const n=Z5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await d5(n.localStore,Qi(e));n.isPrimaryClient&&UC(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await j5(n,e,i,a==="current",o.resumeToken)}return s}async function j5(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,g,m,_){let y=g.view.zu(m);y.Mi&&(y=await p1(p.localStore,g.query,!1).then(({documents:T})=>g.view.zu(T,y)));const w=_&&_.targetChanges.get(g.targetId),b=g.view.applyChanges(y,p.isPrimaryClient,w);return b1(p,g.targetId,b.Yu),b.snapshot}(t,h,f,d);const r=await p1(t.localStore,e,!0),o=new B5(e,r.Wi),a=o.zu(r.documents),l=_c.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);b1(t,n,c.Yu);const u=new V5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function W5(t,e){const n=be(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Lf(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await pg(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),BC(n.remoteStore,i.targetId),gg(n,i.targetId)}).catch(dc)):(gg(n,i.targetId),await pg(n.localStore,i.targetId,!0))}async function q5(t,e,n){const i=e8(t);try{const s=await function(r,o){const a=be(r),l=Et.now(),c=o.reduce((f,d)=>f.add(d.key),xe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ji(),p=xe();return a.Ki.getEntries(f,c).next(g=>{d=g,d.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{u=g;const m=[];for(const _ of o){const y=wL(_,u.get(_.key).overlayedDocument);y!=null&&m.push(new Ys(_.key,y,nC(y.value.mapValue),ni.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:pC(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new xt(ze)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await vc(i,s.changes),await Hf(i.remoteStore)}catch(s){const r=$_(s,"Failed to persist write");n.reject(r)}}async function KC(t,e){const n=be(t);try{const i=await u5(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(lt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?lt(o.ec):s.removedDocuments.size>0&&(lt(o.ec),o.ec=!1))}),await vc(n,i,e)}catch(i){await dc(i)}}function v1(t,e,n){const i=be(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=be(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&j_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function K5(t,e,n){const i=be(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new xt(oe.comparator);o=o.insert(r,Qt.newNoDocument(r,ve.min()));const a=xe().add(r),l=new Vf(ve.min(),new Map,new Ct(ze),o,a);await KC(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),q_(i)}else await pg(i.localStore,e,!1).then(()=>gg(i,e,n)).catch(dc)}async function G5(t,e){const n=be(t),i=e.batch.batchId;try{const s=await c5(n.localStore,e);YC(n,i,null),GC(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await vc(n,s)}catch(s){await dc(s)}}async function Y5(t,e,n){const i=be(t);try{const s=await function(r,o){const a=be(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(lt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);YC(i,e,n),GC(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await vc(i,s)}catch(s){await dc(s)}}function GC(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function YC(t,e,n){const i=be(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function gg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||XC(t,i)})}function XC(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(BC(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),q_(t))}function b1(t,e,n){for(const i of n)i instanceof WC?(t.cc.addReference(i.key,e),X5(t,i)):i instanceof qC?(te("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||XC(t,i.key)):he()}function X5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(te("SyncEngine","New document in limbo: "+n),t.rc.add(i),q_(t))}function q_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new oe(st.fromString(e)),i=t.lc.next();t.uc.set(i,new $5(n)),t.oc=t.oc.insert(n,i),UC(t.remoteStore,new Er(Qi(Nf(n.path)),i,2,C_.ct))}}async function vc(t,e,n){const i=be(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=L_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=be(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>F.forEach(l,h=>F.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>F.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!pc(u))throw u;te("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function Q5(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const i=await PC(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new Q(O.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vc(n,i.Qi)}}function J5(t,e){const n=be(t),i=n.uc.get(e);if(i&&i.ec)return xe().add(i.key);{let s=xe();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function Z5(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=KC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K5.bind(null,e),e.nc.zo=F5.bind(null,e.eventManager),e.nc.wc=U5.bind(null,e.eventManager),e}function e8(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y5.bind(null,e),e}class w1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$f(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return l5(this.persistence,new o5,e.initialUser,this.serializer)}createPersistence(e){return new s5(N_.Fs,this.serializer)}createSharedClientState(e){return new g5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class t8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>v1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q5.bind(null,this.syncEngine),await P5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new L5}createDatastore(e){const n=$f(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new v5(s));var s;return function(r,o,a,l){return new E5(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>v1(this.syncEngine,a,0),o=m1.D()?new m1:new m5,new I5(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new z5(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=be(e);te("RemoteStore","RemoteStore shutting down."),n.du.add(5),await yc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class K_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Xi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Gt.UNAUTHENTICATED,this.clientId=JI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=$_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await PC(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s8(t);te("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>_1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>_1(e.remoteStore,r)),t._onlineComponents=e}function i8(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function s8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!i8(n))throw n;bh("Error using user provided cache. Falling back to memory cache: "+n),await Ud(t,new w1)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Ud(t,new w1);return t._offlineComponents}async function QC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await E1(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await E1(t,new t8))),t._onlineComponents}function r8(t){return QC(t).then(e=>e.syncEngine)}async function kh(t){const e=await QC(t),n=e.eventManager;return n.onListen=H5.bind(null,e.syncEngine),n.onUnlisten=W5.bind(null,e.syncEngine),n}function o8(t,e,n={}){const i=new ji;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new K_({next:h=>{r.enqueueAndForget(()=>H_(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new Q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new Q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new W_(Nf(o.path),c,{includeMetadataChanges:!0,xu:!0});return z_(s,u)}(await kh(t),t.asyncQueue,e,n,i)),i.promise}function a8(t,e,n={}){const i=new ji;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new K_({next:h=>{r.enqueueAndForget(()=>H_(s,u)),h.fromCache&&a.source==="server"?l.reject(new Q(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new W_(o,c,{includeMetadataChanges:!0,xu:!0});return z_(s,u)}(await kh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e,n){if(!n)throw new Q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function l8(t,e,n,i){if(e===!0&&i===!0)throw new Q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function I1(t){if(!oe.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C1(t){if(oe.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jf(t);throw new Q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,l8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new M6;switch(n.type){case"firstParty":return new F6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=T1.get(e);n&&(te("ComponentProvider","Removing Datastore"),T1.delete(e),n.terminate())}(this),Promise.resolve()}}function c8(t,e,n,i={}){var s;const r=(t=Rn(t,Wf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&bh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Gt.MOCK_USER;else{o=j3(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new Q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Gt(l)}t._authCredentials=new P6(new QI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class Hr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Ds extends Hr{constructor(e,n,i){super(e,n,Nf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new oe(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function On(t,e,...n){if(t=Ft(t),JC("collection","path",e),t instanceof Wf){const i=st.fromString(e,...n);return C1(i),new Ds(t,null,i)}{if(!(t instanceof sn||t instanceof Ds))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(st.fromString(e,...n));return C1(i),new Ds(t.firestore,null,i)}}function de(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=JI.A()),JC("doc","path",e),t instanceof Wf){const i=st.fromString(e,...n);return I1(i),new sn(t,null,new oe(i))}{if(!(t instanceof sn||t instanceof Ds))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(st.fromString(e,...n));return I1(i),new sn(t.firestore,t instanceof Ds?t.converter:null,new oe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new LC(this,"async_queue_retry"),this.qc=()=>{const n=Fd();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ji;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!pc(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Xi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=V_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&he()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function k1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Vs extends Wf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new u8,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZC(this),this._firestoreClient.terminate()}}function h8(t,e){const n=typeof t=="object"?t:Cm(),i=typeof t=="string"?t:e||"(default)",s=Im(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=z3("firestore");r&&c8(s,...r)}return s}function qf(t){return t._firestoreClient||ZC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZC(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new X6(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new n8(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bo(on.fromBase64String(e))}catch(n){throw new Q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bo(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f8=/^__.*__$/;class d8{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new mc(e,this.data,n,this.fieldTransforms)}}class ex{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ys(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Y_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Y_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Sh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(tx(this.Yc)&&f8.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class p8{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||$f(e)}ua(e,n,i,s=!1){return new Y_({Yc:e,methodName:n,oa:i,path:Zt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X_(t){const e=t._freezeSettings(),n=$f(t._databaseId);return new p8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function g8(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);Q_("Data must be an object, but it was:",o,i);const a=nx(i,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=mg(e,h,n);if(!o.contains(f))throw new Q(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sx(u,f)||u.push(f)}l=new kn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new d8(new mn(a),l,c)}class Yf extends G_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yf}}function m8(t,e,n,i){const s=t.ua(1,e,n);Q_("Data must be an object, but it was:",s,i);const r=[],o=mn.empty();$r(i,(l,c)=>{const u=J_(e,l,n);c=Ft(c);const h=s.na(u);if(c instanceof Yf)r.push(u);else{const f=bc(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new kn(r);return new ex(o,a,s.fieldTransforms)}function _8(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[mg(e,i,n)],l=[s];if(r.length%2!=0)throw new Q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(mg(e,r[f])),l.push(r[f+1]);const c=[],u=mn.empty();for(let f=a.length-1;f>=0;--f)if(!sx(c,a[f])){const d=a[f];let p=l[f];p=Ft(p);const g=o.na(d);if(p instanceof Yf)c.push(d);else{const m=bc(p,g);m!=null&&(c.push(d),u.set(d,m))}}const h=new kn(c);return new ex(u,h,o.fieldTransforms)}function y8(t,e,n,i=!1){return bc(n,t.ua(i?4:3,e))}function bc(t,e){if(ix(t=Ft(t)))return Q_("Unsupported field value:",e,t),nx(t,e);if(t instanceof G_)return function(n,i){if(!tx(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=bc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gL(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Et.fromDate(n);return{timestampValue:Ch(i.serializer,s)}}if(n instanceof Et){const s=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ch(i.serializer,s)}}if(n instanceof Gf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bo)return{bytesValue:SC(i.serializer,n._byteString)};if(n instanceof sn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:M_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${jf(n)}`)}(t,e)}function nx(t,e){const n={};return ZI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(i,s)=>{const r=bc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function ix(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Gf||t instanceof Bo||t instanceof sn||t instanceof G_)}function Q_(t,e,n){if(!ix(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=jf(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function mg(t,e,n){if((e=Ft(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return J_(t,e);throw Sh("Field path arguments must be of type string or ",t,!1,void 0,n)}const v8=new RegExp("[~\\*/\\[\\]]");function J_(t,e,n){if(e.search(v8)>=0)throw Sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kf(...e.split("."))._internalPath}catch{throw Sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Q(O.INVALID_ARGUMENT,a+t+l)}function sx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new b8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class b8 extends rx{data(){return super.data()}}function Z_(t,e){return typeof e=="string"?J_(t,e):e instanceof Kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class w8 extends ey{}function Bd(t,e,...n){let i=[];e instanceof ey&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof ty).length,o=s.filter(a=>a instanceof Xf).length;if(r>1||r>0&&o>0)throw new Q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Xf extends w8{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Xf(e,n,i)}_apply(e){const n=this._parse(e);return ax(e._query,n),new Hr(e.firestore,e.converter,lg(e._query,n))}_parse(e){const n=X_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){A1(u,c);const f=[];for(const d of u)f.push(S1(a,s,d));h={arrayValue:{values:f}}}else h=S1(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||A1(u,c),h=y8(o,r,u,c==="in"||c==="not-in");return wt.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Vd(t,e,n){const i=e,s=Z_("where",t);return Xf._create(s,i,n)}class ty extends ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ty(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:si.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)ax(r,a),r=lg(r,a)}(e._query,n),new Hr(e.firestore,e.converter,lg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function S1(t,e,n){if(typeof(n=Ft(n))=="string"){if(n==="")throw new Q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uC(e)&&n.indexOf("/")!==-1)throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(st.fromString(n));if(!oe.isDocumentKey(i))throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Z0(t,new oe(i))}if(n instanceof sn)return Z0(t,n._key);throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jf(n)}.`)}function A1(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ax(t,e){if(e.isInequality()){const i=A_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new Q(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=cC(t);r!==null&&E8(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function E8(t,e,n){if(!n.isEqual(e))throw new Q(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class T8{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Po(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){const i={};return $r(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Gf(bt(e.latitude),bt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=tC(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Cl(e));default:return null}}convertTimestamp(e){const n=Us(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=st.fromString(e);lt(MC(i));const s=new xl(i.get(1),i.get(3)),r=new oe(i.popFirst(5));return s.isEqual(n)||Xi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I8(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lx extends rx{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Z_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ou extends lx{data(e={}){return super.data(e)}}class cx{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ra(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ou(this._firestore,this._userDataWriter,i.key,i,new Ra(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Ou(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ra(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ou(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ra(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:C8(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function C8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){t=Rn(t,sn);const e=Rn(t.firestore,Vs);return o8(qf(e),t._key).then(n=>ux(e,t,n))}class iy extends T8{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function x8(t){t=Rn(t,Hr);const e=Rn(t.firestore,Vs),n=qf(e),i=new iy(e);return ox(t._query),a8(n,t._query).then(s=>new cx(e,i,t,s))}function bs(t,e,n){t=Rn(t,sn);const i=Rn(t.firestore,Vs),s=I8(t.converter,e,n);return ry(i,[g8(X_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ni.none())])}function Pt(t,e,n,...i){t=Rn(t,sn);const s=Rn(t.firestore,Vs),r=X_(s);let o;return o=typeof(e=Ft(e))=="string"||e instanceof Kf?_8(r,"updateDoc",t._key,e,n,i):m8(r,"updateDoc",t._key,e),ry(s,[o.toMutation(t._key,ni.exists(!0))])}function k8(t){return ry(Rn(t.firestore,Vs),[new R_(t._key,ni.none())])}function sy(t,...e){var n,i,s;t=Ft(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||k1(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(k1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof sn)c=Rn(t.firestore,Vs),u=Nf(t._key.path),l={next:h=>{e[o]&&e[o](ux(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rn(t,Hr);c=Rn(h.firestore,Vs),u=h._query;const f=new iy(c);l={next:d=>{e[o]&&e[o](new cx(c,f,h,d))},error:e[o+1],complete:e[o+2]},ox(t._query)}return function(h,f,d,p){const g=new K_(p),m=new W_(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>z_(await kh(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>H_(await kh(h),m))}}(qf(c),u,a,l)}function ry(t,e){return function(n,i){const s=new ji;return n.asyncQueue.enqueueAndForget(async()=>q5(await r8(n),i,s)),s.promise}(qf(t),e)}function ux(t,e,n){const i=n.docs.get(e._key),s=new iy(t);return new lx(t,s,e._key,i,new Ra(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){oa=n})(Ws),bi(new ii("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Vs(new N6(n.getProvider("auth-internal")),new B6(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Sn(G0,"3.10.1",t),Sn(G0,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="firebasestorage.googleapis.com",S8="storageBucket",A8=2*60*1e3,R8=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Ci{constructor(e,n,i=0){super($d(e),`Firebase Storage: ${n} (${$d(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ii;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ii||(Ii={}));function $d(t){return"storage/"+t}function D8(){const t="An unknown error occurred, please check the error payload for server response.";return new xi(Ii.UNKNOWN,t)}function O8(){return new xi(Ii.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function M8(){return new xi(Ii.CANCELED,"User canceled the upload/download.")}function P8(t){return new xi(Ii.INVALID_URL,"Invalid URL '"+t+"'.")}function N8(t){return new xi(Ii.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function R1(t){return new xi(Ii.INVALID_ARGUMENT,t)}function fx(){return new xi(Ii.APP_DELETED,"The Firebase app was deleted.")}function L8(t){return new xi(Ii.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(i.path==="")return i;throw N8(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},g=n===hx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<w.length;b++){const T=w[b],S=T.regex.exec(e);if(S){const I=S[T.indices.bucket];let x=S[T.indices.path];x||(x=""),i=new Xn(I,x),T.postModify(i);break}}if(i==null)throw P8(e);return i}}class F8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U8(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(d,l())},m)}function f(){r&&clearTimeout(r)}function d(m,..._){if(c){f();return}if(m){f(),u.call(null,m,..._);return}if(l()||o){f(),u.call(null,m,..._);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let p=!1;function g(m){p||(p=!0,f(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function B8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V8(t){return t!==void 0}function D1(t,e,n,i){if(i<e)throw R1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw R1(`Invalid value for '${t}'. Expected ${n} or less.`)}function $8(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ah;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ah||(Ah={}));/**
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
 */function z8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H8{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Gc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ah.NO_ERROR,l=r.getStatus();if(!a||z8(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ah.ABORT;i(!1,new Gc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Gc(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());V8(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=D8();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?fx():M8();o(l)}else{const l=O8();o(l)}};this.canceled_?n(!1,new Gc(!1,null,!0)):this.backoffId_=U8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&B8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function j8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function q8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function G8(t,e,n,i,s,r,o=!0){const a=$8(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return q8(c,e),j8(c,n),W8(c,r),K8(c,i),new H8(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function X8(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Rh{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rh(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X8(this._location.path)}get storage(){return this._service}get parent(){const e=Y8(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Rh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw L8(e)}}function O1(t,e){const n=e==null?void 0:e[S8];return n==null?null:Xn.makeFromBucketSpec(n,t)}class Q8{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=A8,this._maxUploadRetryTime=R8,this._requests=new Set,s!=null?this._bucket=Xn.makeFromBucketSpec(s,this._host):this._bucket=O1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=O1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new F8(fx());{const o=G8(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const M1="@firebase/storage",P1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J8="storage";function Z8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Q8(n,i,s,e,Ws)}function eF(){bi(new ii(J8,Z8,"PUBLIC").setMultipleInstances(!0)),Sn(M1,P1,""),Sn(M1,P1,"esm2017")}eF();const zd=new WeakMap;function dx(t,e){return zd.has(e)||zd.set(e,t||{f:{},r:{},s:{},u:{}}),zd.get(e)}function tF(t,e,n,i){if(!t)return n;const[s,r]=px(t);if(!s)return n;const o=dx(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function nF(t,e,n,i){if(!t)return;const[s,r]=px(t);if(!s)return;const o=dx(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(di),a}function px(t){return U4(t)||B4(t)?["f",t.path]:V4(t)?["r",t.toString()]:$4(t)?["s",t.toString()]:[]}const Hd=new WeakMap;function iF(t,e,n){const i=df();Hd.has(i)||Hd.set(i,new Map);const s=Hd.get(i),r=nF(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):di}const sF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function _g(t,e,n,i){if(!F4(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof Et||p instanceof Gf)h[d]=p;else if(Nm(p)){const g=c+d;h[d]=g in n?l[d]:p.path,f[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[d][g]=r[m.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else Fr(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const oy={reset:!1,wait:!0,maxRefDepth:2,converter:sF,snapshotOptions:{serverTimestamps:"estimate"}};function Dh(t){for(const e in t)t[e].unsub()}function yg(t,e,n,i,s,r,o,a,l){const[c,u]=_g(i.data(t.snapshotOptions),Pm(e,n),s,t);r.set(e,n,c),vg(t,e,n,s,u,r,o,a,l)}function rF({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=di;return a.once?ny(t).then(u=>{u.exists()?yg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=sy(t,u=>{u.exists()?yg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Dh(l)}}function vg(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(g=>c.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(g){g in d&&++h>=f&&a(n)}c.forEach(g=>{const m=i[g],_=s[g],y=`${n}.${g}`;if(d[y]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>Pm(e,y),unsub:rF({ref:_,target:e,path:y,depth:o,ops:r,resolve:p.bind(null,y),reject:l},t),path:_.path}})}function oF(t,e,n,i,s,r){const o=Object.assign({},oy,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=at(c?[]:t.value);c||n.set(t,h,[]);const d=i;let p,g=di;const m=[],_={added:({newIndex:w,doc:b})=>{m.splice(w,0,Object.create(null));const T=m[w],[S,I]=_g(b.data(l),void 0,T,o);n.add(C(f),w,S),vg(o,f,`${h}.${w}`,T,I,n,0,i.bind(null,b),s)},modified:({oldIndex:w,newIndex:b,doc:T})=>{const S=C(f),I=m[w],x=S[w],[L,U]=_g(T.data(l),x,I,o);m.splice(b,0,I),n.remove(S,w),n.add(S,b,L),vg(o,f,`${h}.${b}`,I,U,n,0,i,s)},removed:({oldIndex:w})=>{const b=C(f);n.remove(b,w),Dh(m.splice(w,1)[0])}};function y(w){const b=w.docChanges(a);if(!p&&b.length){p=!0;let T=0;const S=b.length,I=Object.create(null);for(let x=0;x<S;x++)I[b[x].doc.id]=!0;i=x=>{x&&x.id in I&&++T>=S&&(c&&(n.set(t,h,C(f)),f=t),d(C(f)),i=di)}}b.forEach(T=>{_[T.type](T)}),b.length||(c&&(n.set(t,h,C(f)),f=t),i(C(f)))}return u?x8(e).then(y).catch(s):g=sy(e,y,s),w=>{if(g(),w){const b=typeof w=="function"?w():[];n.set(t,h,b)}m.forEach(Dh)}}function aF(t,e,n,i,s,r){const o=Object.assign({},oy,r),a="value",l=Object.create(null);i=z4(i,()=>Pm(t,a));let c=di;function u(h){h.exists()?yg(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?ny(e).then(u).catch(s):c=sy(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Dh(l)}}function lF(t,e){let n=di;const i=Object.assign({},oy,e),s=C(t),r=i.target||at();H4()&&(i.once=!0);const o=tF(s,i.ssrKey,r.value,df());r.value=o;let l=!(LE(s)?(o||[]).length>0:o!==void 0);const c=at(!1),u=at(),h=Zh(),f=Zg();let d=di;function p(){let _=C(t);const y=new Promise((w,b)=>{if(n(i.reset),!_)return n=di,w(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(Nm(_)?aF:oF)(r,_,cF,w,b,i)}).catch(w=>(h.value===y&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===y&&(c.value=!1)});h.value=y}let g=di;ht(t)&&(g=xs(t,p)),p(),s&&(d=iF(h.value,s,i.ssrKey)),Qo()&&g2(()=>h.value),f&&zw(m);function m(_=i.reset){g(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>m}})}const cF={set:(t,e,n)=>N4(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Xe(t,e){return lF(t,e)}function uF(t){return(e,n)=>{const i=j4(e,n).run(()=>at(t));W4.set(e,i),q4(i,e)}}function hF(t){return P4?ME(df(t)):null}function fF(t,{firebaseApp:e,modules:n=[]}){t.provide(NE,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const no=typeof window<"u";function dF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const je=Object.assign;function jd(t,e){const n={};for(const i in e){const s=e[i];n[i]=ri(s)?s.map(t):t(s)}return n}const Ya=()=>{},ri=Array.isArray,pF=/\/$/,gF=t=>t.replace(pF,"");function Wd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=vF(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function mF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function N1(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _F(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Vo(e.matched[i],n.matched[s])&&gx(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gx(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yF(t[n],e[n]))return!1;return!0}function yF(t,e){return ri(t)?L1(t,e):ri(e)?L1(e,t):t===e}function L1(t,e){return ri(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function vF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Rl;(function(t){t.pop="pop",t.push="push"})(Rl||(Rl={}));var Xa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xa||(Xa={}));function bF(t){if(!t)if(no){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gF(t)}const wF=/^[^#]+#/;function EF(t,e){return t.replace(wF,"#")+e}function TF(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Qf=()=>({left:window.pageXOffset,top:window.pageYOffset});function IF(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=TF(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function F1(t,e){return(history.state?history.state.position-e:-1)+t}const bg=new Map;function CF(t,e){bg.set(t,e)}function xF(t){const e=bg.get(t);return bg.delete(t),e}let kF=()=>location.protocol+"//"+location.host;function mx(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),N1(l,"")}return N1(n,t)+i+s}function SF(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=mx(t,location),p=n.value,g=e.value;let m=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}m=g?f.position-g.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:m,type:Rl.pop,direction:m?m>0?Xa.forward:Xa.back:Xa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(je({},f.state,{scroll:Qf()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function U1(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Qf():null}}function AF(t){const{history:e,location:n}=window,i={value:mx(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:kF()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=je({},e.state,U1(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=je({},s.value,e.state,{forward:l,scroll:Qf()});r(u.current,u,!0);const h=je({},U1(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function RF(t){t=bF(t);const e=AF(t),n=SF(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=je({location:"",base:t,go:i,createHref:EF.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function DF(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),RF(t)}function OF(t){return typeof t=="string"||t&&typeof t=="object"}function _x(t){return typeof t=="string"||typeof t=="symbol"}const cs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yx=Symbol("");var B1;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(B1||(B1={}));function $o(t,e){return je(new Error,{type:t,[yx]:!0},e)}function Si(t,e){return t instanceof Error&&yx in t&&(e==null||!!(t.type&e))}const V1="[^/]+?",MF={sensitive:!1,strict:!1,start:!0,end:!0},PF=/[.+*?^${}()[\]/\\]/g;function NF(t,e){const n=je({},MF,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(PF,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=f;r.push({name:p,repeatable:g,optional:m});const y=_||V1;if(y!==V1){d+=10;try{new RegExp(`(${y})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+b.message)}}let w=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),s+=w,d+=20,m&&(d+=-8),g&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:m}=d,_=p in c?c[p]:"";if(ri(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=ri(_)?_.join("/"):_;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function LF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function FF(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=LF(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if($1(i))return 1;if($1(s))return-1}return s.length-i.length}function $1(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UF={type:0,value:""},BF=/[a-zA-Z0-9_]/;function VF(t){if(!t)return[[]];if(t==="/")return[[UF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:BF.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function $F(t,e,n){const i=NF(VF(t.path),n),s=je(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zF(t,e){const n=[],i=new Map;e=j1({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=HF(u);p.aliasOf=f&&f.record;const g=j1(e,u),m=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of w)m.push(je({},p,{components:f?f.record.components:p.components,path:b,aliasOf:f?f.record:p}))}let _,y;for(const w of m){const{path:b}=w;if(h&&b[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";w.path=h.record.path+(b&&S+b)}if(_=$F(w,h,g),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),d&&u.name&&!H1(_)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)r(T[S],_,f&&f.children[S])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:Ya}function o(u){if(_x(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&FF(u,n[h])>=0&&(u.record.path!==n[h].record.path||!vx(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!H1(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw $o(1,{location:u});g=f.record.name,d=je(z1(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&z1(u.params,f.keys.map(y=>y.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(y=>y.re.test(p)),f&&(d=f.parse(p),g=f.record.name);else{if(f=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw $o(1,{location:u,currentLocation:h});g=f.record.name,d=je({},h.params,u.params),p=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:d,matched:m,meta:WF(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function z1(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function HF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function H1(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WF(t){return t.reduce((e,n)=>je(e,n.meta),{})}function j1(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function vx(t,e){return e.children.some(n=>n===t||vx(t,n))}const bx=/#/g,qF=/&/g,KF=/\//g,GF=/=/g,YF=/\?/g,wx=/\+/g,XF=/%5B/g,QF=/%5D/g,Ex=/%5E/g,JF=/%60/g,Tx=/%7B/g,ZF=/%7C/g,Ix=/%7D/g,e9=/%20/g;function ay(t){return encodeURI(""+t).replace(ZF,"|").replace(XF,"[").replace(QF,"]")}function t9(t){return ay(t).replace(Tx,"{").replace(Ix,"}").replace(Ex,"^")}function wg(t){return ay(t).replace(wx,"%2B").replace(e9,"+").replace(bx,"%23").replace(qF,"%26").replace(JF,"`").replace(Tx,"{").replace(Ix,"}").replace(Ex,"^")}function n9(t){return wg(t).replace(GF,"%3D")}function i9(t){return ay(t).replace(bx,"%23").replace(YF,"%3F")}function s9(t){return t==null?"":i9(t).replace(KF,"%2F")}function Oh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function r9(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wx," "),o=r.indexOf("="),a=Oh(o<0?r:r.slice(0,o)),l=o<0?null:Oh(r.slice(o+1));if(a in e){let c=e[a];ri(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function W1(t){let e="";for(let n in t){const i=t[n];if(n=n9(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ri(i)?i.map(r=>r&&wg(r)):[i&&wg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function o9(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ri(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const a9=Symbol(""),q1=Symbol(""),Jf=Symbol(""),ly=Symbol(""),Eg=Symbol("");function ya(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ps(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a($o(4,{from:n,to:e})):h instanceof Error?a(h):OF(h)?a($o(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function qd(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(l9(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ps(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=dF(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ps(f,n,i,r,o)()}))}}return s}function l9(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function K1(t){const e=wn(Jf),n=wn(ly),i=qe(()=>e.resolve(C(t.to))),s=qe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Vo.bind(null,u));if(f>-1)return f;const d=G1(l[c-2]);return c>1&&G1(u)===d&&h[h.length-1].path!==d?h.findIndex(Vo.bind(null,l[c-2])):f}),r=qe(()=>s.value>-1&&f9(n.params,i.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&gx(n.params,i.value.params));function a(l={}){return h9(l)?e[C(t.replace)?"replace":"push"](C(t.to)).catch(Ya):Promise.resolve()}return{route:i,href:qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const c9=jl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:K1,setup(t,{slots:e}){const n=qi(K1(t)),{options:i}=wn(Jf),s=qe(()=>({[Y1(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Y1(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ql("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),u9=c9;function h9(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function f9(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ri(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function G1(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Y1=(t,e,n)=>t??e??n,d9=jl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=wn(Eg),s=qe(()=>t.route||i.value),r=wn(q1,0),o=qe(()=>{let c=C(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=qe(()=>s.value.matched[o.value]);Eu(q1,qe(()=>o.value+1)),Eu(a9,a),Eu(Eg,s);const l=at();return xs(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Vo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return X1(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=ql(f,je({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return X1(n.default,{Component:m,route:c})||m}}});function X1(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const p9=d9;function g9(t){const e=zF(t.routes,t),n=t.parseQuery||r9,i=t.stringifyQuery||W1,s=t.history,r=ya(),o=ya(),a=ya(),l=Zh(cs);let c=cs;no&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jd.bind(null,D=>""+D),h=jd.bind(null,s9),f=jd.bind(null,Oh);function d(D,W){let q,se;return _x(D)?(q=e.getRecordMatcher(D),se=W):se=D,e.addRoute(se,q)}function p(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function g(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function _(D,W){if(W=je({},W||l.value),typeof D=="string"){const v=Wd(n,D,W.path),E=e.resolve({path:v.path},W),A=s.createHref(v.fullPath);return je(v,E,{params:f(E.params),hash:Oh(v.hash),redirectedFrom:void 0,href:A})}let q;if("path"in D)q=je({},D,{path:Wd(n,D.path,W.path).path});else{const v=je({},D.params);for(const E in v)v[E]==null&&delete v[E];q=je({},D,{params:h(D.params)}),W.params=h(W.params)}const se=e.resolve(q,W),Fe=D.hash||"";se.params=u(f(se.params));const ft=mF(i,je({},D,{hash:t9(Fe),path:se.path})),Ee=s.createHref(ft);return je({fullPath:ft,hash:Fe,query:i===W1?o9(D.query):D.query||{}},se,{redirectedFrom:void 0,href:Ee})}function y(D){return typeof D=="string"?Wd(n,D,l.value.path):je({},D)}function w(D,W){if(c!==D)return $o(8,{from:W,to:D})}function b(D){return I(D)}function T(D){return b(je(y(D),{replace:!0}))}function S(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let se=typeof q=="function"?q(D):q;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=y(se):{path:se},se.params={}),je({query:D.query,hash:D.hash,params:"path"in se?{}:D.params},se)}}function I(D,W){const q=c=_(D),se=l.value,Fe=D.state,ft=D.force,Ee=D.replace===!0,v=S(q);if(v)return I(je(y(v),{state:typeof v=="object"?je({},Fe,v.state):Fe,force:ft,replace:Ee}),W||q);const E=q;E.redirectedFrom=W;let A;return!ft&&_F(i,se,q)&&(A=$o(16,{to:E,from:se}),hn(se,se,!0,!1)),(A?Promise.resolve(A):L(E,se)).catch(R=>Si(R)?Si(R,2)?R:jt(R):fe(R,E,se)).then(R=>{if(R){if(Si(R,2))return I(je({replace:Ee},y(R.to),{state:typeof R.to=="object"?je({},Fe,R.to.state):Fe,force:ft}),W||E)}else R=B(E,se,!0,Ee,Fe);return U(E,se,R),R})}function x(D,W){const q=w(D,W);return q?Promise.reject(q):Promise.resolve()}function L(D,W){let q;const[se,Fe,ft]=m9(D,W);q=qd(se.reverse(),"beforeRouteLeave",D,W);for(const v of se)v.leaveGuards.forEach(E=>{q.push(ps(E,D,W))});const Ee=x.bind(null,D,W);return q.push(Ee),Qr(q).then(()=>{q=[];for(const v of r.list())q.push(ps(v,D,W));return q.push(Ee),Qr(q)}).then(()=>{q=qd(Fe,"beforeRouteUpdate",D,W);for(const v of Fe)v.updateGuards.forEach(E=>{q.push(ps(E,D,W))});return q.push(Ee),Qr(q)}).then(()=>{q=[];for(const v of D.matched)if(v.beforeEnter&&!W.matched.includes(v))if(ri(v.beforeEnter))for(const E of v.beforeEnter)q.push(ps(E,D,W));else q.push(ps(v.beforeEnter,D,W));return q.push(Ee),Qr(q)}).then(()=>(D.matched.forEach(v=>v.enterCallbacks={}),q=qd(ft,"beforeRouteEnter",D,W),q.push(Ee),Qr(q))).then(()=>{q=[];for(const v of o.list())q.push(ps(v,D,W));return q.push(Ee),Qr(q)}).catch(v=>Si(v,8)?v:Promise.reject(v))}function U(D,W,q){for(const se of a.list())se(D,W,q)}function B(D,W,q,se,Fe){const ft=w(D,W);if(ft)return ft;const Ee=W===cs,v=no?history.state:{};q&&(se||Ee?s.replace(D.fullPath,je({scroll:Ee&&v&&v.scroll},Fe)):s.push(D.fullPath,Fe)),l.value=D,hn(D,W,q,Ee),jt()}let Y;function Ve(){Y||(Y=s.listen((D,W,q)=>{if(!oi.listening)return;const se=_(D),Fe=S(se);if(Fe){I(je(Fe,{replace:!0}),se).catch(Ya);return}c=se;const ft=l.value;no&&CF(F1(ft.fullPath,q.delta),Qf()),L(se,ft).catch(Ee=>Si(Ee,12)?Ee:Si(Ee,2)?(I(Ee.to,se).then(v=>{Si(v,20)&&!q.delta&&q.type===Rl.pop&&s.go(-1,!1)}).catch(Ya),Promise.reject()):(q.delta&&s.go(-q.delta,!1),fe(Ee,se,ft))).then(Ee=>{Ee=Ee||B(se,ft,!1),Ee&&(q.delta&&!Si(Ee,8)?s.go(-q.delta,!1):q.type===Rl.pop&&Si(Ee,20)&&s.go(-1,!1)),U(se,ft,Ee)}).catch(Ya)}))}let Ne=ya(),ce=ya(),ne;function fe(D,W,q){jt(D);const se=ce.list();return se.length?se.forEach(Fe=>Fe(D,W,q)):console.error(D),Promise.reject(D)}function Le(){return ne&&l.value!==cs?Promise.resolve():new Promise((D,W)=>{Ne.add([D,W])})}function jt(D){return ne||(ne=!D,Ve(),Ne.list().forEach(([W,q])=>D?q(D):W()),Ne.reset()),D}function hn(D,W,q,se){const{scrollBehavior:Fe}=t;if(!no||!Fe)return Promise.resolve();const ft=!q&&xF(F1(D.fullPath,0))||(se||!q)&&history.state&&history.state.scroll||null;return lm().then(()=>Fe(D,W,ft)).then(Ee=>Ee&&IF(Ee)).catch(Ee=>fe(Ee,D,W))}const Wt=D=>s.go(D);let _t;const Nn=new Set,oi={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:b,replace:T,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Le,install(D){const W=this;D.component("RouterLink",u9),D.component("RouterView",p9),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>C(l)}),no&&!_t&&l.value===cs&&(_t=!0,b(s.location).catch(Fe=>{}));const q={};for(const Fe in cs)q[Fe]=qe(()=>l.value[Fe]);D.provide(Jf,W),D.provide(ly,qi(q)),D.provide(Eg,l);const se=D.unmount;Nn.add(D),D.unmount=function(){Nn.delete(D),Nn.size<1&&(c=cs,Y&&Y(),Y=null,l.value=cs,_t=!1,ne=!1),se()}}};return oi}function Qr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function m9(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vo(c,l))||s.push(l))}return[n,i,s]}function Zf(){return wn(Jf)}function jr(){return wn(ly)}const Mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},_9={class:"container"},y9={__name:"App",setup(t){const e=jr();return(n,i)=>{const s=Wl("RouterView");return M(),$("div",_9,[(M(),$t(sA,null,{default:um(()=>[(M(),$t(s,{key:C(e).fullPath}))]),_:1}))])}}},v9=Mn(y9,[["__scopeId","data-v-eaa77c1f"]]),Cx=Y2({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"auth.odinn.nl",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),ie=h8(Cx);function Q1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q1(Object(n),!0).forEach(function(i){kt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Mh(t){"@babel/helpers - typeof";return Mh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mh(t)}function b9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J1(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w9(t,e,n){return e&&J1(t.prototype,e),n&&J1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cy(t,e){return T9(t)||C9(t,e)||xx(t,e)||k9()}function wc(t){return E9(t)||I9(t)||xx(t)||x9()}function E9(t){if(Array.isArray(t))return Tg(t)}function T9(t){if(Array.isArray(t))return t}function I9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function C9(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function xx(t,e){if(t){if(typeof t=="string")return Tg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tg(t,e)}}function Tg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function x9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z1=function(){},uy={},kx={},Sx=null,Ax={mark:Z1,measure:Z1};try{typeof window<"u"&&(uy=window),typeof document<"u"&&(kx=document),typeof MutationObserver<"u"&&(Sx=MutationObserver),typeof performance<"u"&&(Ax=performance)}catch{}var S9=uy.navigator||{},eb=S9.userAgent,tb=eb===void 0?"":eb,$s=uy,ot=kx,nb=Sx,Yc=Ax;$s.document;var ss=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",Rx=~tb.indexOf("MSIE")||~tb.indexOf("Trident/"),Xc,Qc,Jc,Zc,eu,Zi="___FONT_AWESOME___",Ig=16,Dx="fa",Ox="svg-inline--fa",Or="data-fa-i2svg",Cg="data-fa-pseudo-element",A9="data-fa-pseudo-element-pending",hy="data-prefix",fy="data-icon",ib="fontawesome-i2svg",R9="async",D9=["HTML","HEAD","STYLE","SCRIPT"],Mx=function(){try{return!0}catch{return!1}}(),it="classic",pt="sharp",dy=[it,pt];function Ec(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[it]}})}var Dl=Ec((Xc={},kt(Xc,it,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),kt(Xc,pt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Xc)),Ol=Ec((Qc={},kt(Qc,it,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),kt(Qc,pt,{solid:"fass",regular:"fasr",light:"fasl"}),Qc)),Ml=Ec((Jc={},kt(Jc,it,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),kt(Jc,pt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Jc)),O9=Ec((Zc={},kt(Zc,it,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),kt(Zc,pt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Zc)),M9=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Px="fa-layers-text",P9=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,N9=Ec((eu={},kt(eu,it,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),kt(eu,pt,{900:"fass",400:"fasr",300:"fasl"}),eu)),Nx=[1,2,3,4,5,6,7,8,9,10],L9=Nx.concat([11,12,13,14,15,16,17,18,19,20]),F9=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pl=new Set;Object.keys(Ol[it]).map(Pl.add.bind(Pl));Object.keys(Ol[pt]).map(Pl.add.bind(Pl));var U9=[].concat(dy,wc(Pl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gr.GROUP,gr.SWAP_OPACITY,gr.PRIMARY,gr.SECONDARY]).concat(Nx.map(function(t){return"".concat(t,"x")})).concat(L9.map(function(t){return"w-".concat(t)})),Qa=$s.FontAwesomeConfig||{};function B9(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function V9(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ot&&typeof ot.querySelector=="function"){var $9=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$9.forEach(function(t){var e=cy(t,2),n=e[0],i=e[1],s=V9(B9(n));s!=null&&(Qa[i]=s)})}var Lx={styleDefault:"solid",familyDefault:"classic",cssPrefix:Dx,replacementClass:Ox,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qa.familyPrefix&&(Qa.cssPrefix=Qa.familyPrefix);var zo=G(G({},Lx),Qa);zo.autoReplaceSvg||(zo.observeMutations=!1);var Z={};Object.keys(Lx).forEach(function(t){Object.defineProperty(Z,t,{enumerable:!0,set:function(n){zo[t]=n,Ja.forEach(function(i){return i(Z)})},get:function(){return zo[t]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(e){zo.cssPrefix=e,Ja.forEach(function(n){return n(Z)})},get:function(){return zo.cssPrefix}});$s.FontAwesomeConfig=Z;var Ja=[];function z9(t){return Ja.push(t),function(){Ja.splice(Ja.indexOf(t),1)}}var us=Ig,gi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H9(t){if(!(!t||!ss)){var e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ot.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return ot.head.insertBefore(e,i),t}}var j9="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nl(){for(var t=12,e="";t-- >0;)e+=j9[Math.random()*62|0];return e}function ca(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function py(t){return t.classList?ca(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W9(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fx(t[n]),'" ')},"").trim()}function ed(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function gy(t){return t.size!==gi.size||t.x!==gi.x||t.y!==gi.y||t.rotate!==gi.rotate||t.flipX||t.flipY}function q9(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function K9(t){var e=t.transform,n=t.width,i=n===void 0?Ig:n,s=t.height,r=s===void 0?Ig:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Rx?l+="translate(".concat(e.x/us-i/2,"em, ").concat(e.y/us-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/us,"em), calc(-50% + ").concat(e.y/us,"em)) "):l+="translate(".concat(e.x/us,"em, ").concat(e.y/us,"em) "),l+="scale(".concat(e.size/us*(e.flipX?-1:1),", ").concat(e.size/us*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var G9=`:root, :host {
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
}`;function Ux(){var t=Dx,e=Ox,n=Z.cssPrefix,i=Z.replacementClass,s=G9;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var sb=!1;function Kd(){Z.autoAddCss&&!sb&&(H9(Ux()),sb=!0)}var Y9={mixout:function(){return{dom:{css:Ux,insertCss:Kd}}},hooks:function(){return{beforeDOMElementCreation:function(){Kd()},beforeI2svg:function(){Kd()}}}},es=$s||{};es[Zi]||(es[Zi]={});es[Zi].styles||(es[Zi].styles={});es[Zi].hooks||(es[Zi].hooks={});es[Zi].shims||(es[Zi].shims=[]);var Qn=es[Zi],Bx=[],X9=function t(){ot.removeEventListener("DOMContentLoaded",t),Ph=1,Bx.map(function(e){return e()})},Ph=!1;ss&&(Ph=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),Ph||ot.addEventListener("DOMContentLoaded",X9));function Q9(t){ss&&(Ph?setTimeout(t,0):Bx.push(t))}function Tc(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?Fx(t):"<".concat(e," ").concat(W9(i),">").concat(r.map(Tc).join(""),"</").concat(e,">")}function rb(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var J9=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},Gd=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?J9(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function Z9(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function xg(t){var e=Z9(t);return e.length===1?e[0].toString(16):null}function e7(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function ob(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function kg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=ob(e);typeof Qn.hooks.addPack=="function"&&!s?Qn.hooks.addPack(t,ob(e)):Qn.styles[t]=G(G({},Qn.styles[t]||{}),r),t==="fas"&&kg("fa",e)}var tu,nu,iu,oo=Qn.styles,t7=Qn.shims,n7=(tu={},kt(tu,it,Object.values(Ml[it])),kt(tu,pt,Object.values(Ml[pt])),tu),my=null,Vx={},$x={},zx={},Hx={},jx={},i7=(nu={},kt(nu,it,Object.keys(Dl[it])),kt(nu,pt,Object.keys(Dl[pt])),nu);function s7(t){return~U9.indexOf(t)}function r7(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!s7(s)?s:null}var Wx=function(){var e=function(r){return Gd(oo,function(o,a,l){return o[l]=Gd(a,r,{}),o},{})};Vx=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),$x=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),jx=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in oo||Z.autoFetchSvg,i=Gd(t7,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});zx=i.names,Hx=i.unicodes,my=td(Z.styleDefault,{family:Z.familyDefault})};z9(function(t){my=td(t.styleDefault,{family:Z.familyDefault})});Wx();function _y(t,e){return(Vx[t]||{})[e]}function o7(t,e){return($x[t]||{})[e]}function mr(t,e){return(jx[t]||{})[e]}function qx(t){return zx[t]||{prefix:null,iconName:null}}function a7(t){var e=Hx[t],n=_y("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zs(){return my}var yy=function(){return{prefix:null,iconName:null,rest:[]}};function td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?it:n,s=Dl[i][t],r=Ol[i][t]||Ol[i][s],o=t in Qn.styles?t:null;return r||o||null}var ab=(iu={},kt(iu,it,Object.keys(Ml[it])),kt(iu,pt,Object.keys(Ml[pt])),iu);function nd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},kt(e,it,"".concat(Z.cssPrefix,"-").concat(it)),kt(e,pt,"".concat(Z.cssPrefix,"-").concat(pt)),e),o=null,a=it;(t.includes(r[it])||t.some(function(c){return ab[it].includes(c)}))&&(a=it),(t.includes(r[pt])||t.some(function(c){return ab[pt].includes(c)}))&&(a=pt);var l=t.reduce(function(c,u){var h=r7(Z.cssPrefix,u);if(oo[u]?(u=n7[a].includes(u)?O9[a][u]:u,o=u,c.prefix=u):i7[a].indexOf(u)>-1?(o=u,c.prefix=td(u,{family:a})):h?c.iconName=h:u!==Z.replacementClass&&u!==r[it]&&u!==r[pt]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?qx(c.iconName):{},d=mr(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!oo.far&&oo.fas&&!Z.autoFetchSvg&&(c.prefix="fas")}return c},yy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===pt&&(oo.fass||Z.autoFetchSvg)&&(l.prefix="fass",l.iconName=mr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=zs()||"fas"),l}var l7=function(){function t(){b9(this,t),this.definitions={}}return w9(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=G(G({},n.definitions[a]||{}),o[a]),kg(a,o[a]);var l=Ml[it][a];l&&kg(l,o[a]),Wx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),lb=[],ao={},vo={},c7=Object.keys(vo);function u7(t,e){var n=e.mixoutsTo;return lb=t,ao={},Object.keys(vo).forEach(function(i){c7.indexOf(i)===-1&&delete vo[i]}),lb.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Mh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){ao[o]||(ao[o]=[]),ao[o].push(r[o])})}i.provides&&i.provides(vo)}),n}function Sg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=ao[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Mr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=ao[t]||[];s.forEach(function(r){r.apply(null,n)})}function ts(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vo[t]?vo[t].apply(null,e):void 0}function Ag(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zs();if(e)return e=mr(n,e)||e,rb(Kx.definitions,n,e)||rb(Qn.styles,n,e)}var Kx=new l7,h7=function(){Z.autoReplaceSvg=!1,Z.observeMutations=!1,Mr("noAuto")},f7={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ss?(Mr("beforeI2svg",e),ts("pseudoElements2svg",e),ts("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,Q9(function(){p7({autoReplaceSvgRoot:n}),Mr("watch",e)})}},d7={icon:function(e){if(e===null)return null;if(Mh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:mr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=td(e[0]);return{prefix:i,iconName:mr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Z.cssPrefix,"-"))>-1||e.match(M9))){var s=nd(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||zs(),iconName:mr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=zs();return{prefix:r,iconName:mr(r,e)||e}}}},Pn={noAuto:h7,config:Z,dom:f7,parse:d7,library:Kx,findIconDefinition:Ag,toHtml:Tc},p7=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ot:n;(Object.keys(Qn.styles).length>0||Z.autoFetchSvg)&&ss&&Z.autoReplaceSvg&&Pn.dom.i2svg({node:i})};function id(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Tc(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ss){var i=ot.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function g7(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(gy(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=ed(G(G({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function m7(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(Z.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:G(G({},s),{},{id:o}),children:i}]}]}function vy(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",y=[Z.replacementClass,r?"".concat(Z.cssPrefix,"-").concat(r):""].filter(function(L){return h.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(h.classes).join(" "),w={children:[],attributes:G(G({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},b=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(w.attributes[Or]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Nl())},children:[l]}),delete w.attributes.title);var T=G(G({},w),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:G(G({},b),h.styles)}),S=i.found&&n.found?ts("generateAbstractMask",T)||{children:[],attributes:{}}:ts("generateAbstractIcon",T)||{children:[],attributes:{}},I=S.children,x=S.attributes;return T.children=I,T.attributes=x,a?m7(T):g7(T)}function cb(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=G(G(G({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Or]="");var u=G({},o.styles);gy(s)&&(u.transform=K9({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=ed(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function _7(t){var e=t.content,n=t.title,i=t.extra,s=G(G(G({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=ed(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yd=Qn.styles;function Rg(t){var e=t[0],n=t[1],i=t.slice(4),s=cy(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(gr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(gr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(gr.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var y7={found:!1,width:512,height:512};function v7(t,e){!Mx&&!Z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dg(t,e){var n=e;return e==="fa"&&Z.styleDefault!==null&&(e=zs()),new Promise(function(i,s){if(ts("missingIconAbstract"),n==="fa"){var r=qx(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Yd[e]&&Yd[e][t]){var o=Yd[e][t];return i(Rg(o))}v7(t,e),i(G(G({},y7),{},{icon:Z.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}}))})}var ub=function(){},Og=Z.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:ub,measure:ub},Da='FA "6.4.0"',b7=function(e){return Og.mark("".concat(Da," ").concat(e," begins")),function(){return Gx(e)}},Gx=function(e){Og.mark("".concat(Da," ").concat(e," ends")),Og.measure("".concat(Da," ").concat(e),"".concat(Da," ").concat(e," begins"),"".concat(Da," ").concat(e," ends"))},by={begin:b7,end:Gx},Mu=function(){};function hb(t){var e=t.getAttribute?t.getAttribute(Or):null;return typeof e=="string"}function w7(t){var e=t.getAttribute?t.getAttribute(hy):null,n=t.getAttribute?t.getAttribute(fy):null;return e&&n}function E7(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Z.replacementClass)}function T7(){if(Z.autoReplaceSvg===!0)return Pu.replace;var t=Pu[Z.autoReplaceSvg];return t||Pu.replace}function I7(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function C7(t){return ot.createElement(t)}function Yx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?I7:C7:n;if(typeof t=="string")return ot.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(Yx(o,{ceFn:i}))}),s}function x7(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(Yx(s),n)}),n.getAttribute(Or)===null&&Z.keepOriginalSource){var i=ot.createComment(x7(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~py(n).indexOf(Z.replacementClass))return Pu.replace(e);var s=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===Z.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return Tc(a)}).join(`
`);n.setAttribute(Or,""),n.innerHTML=o}};function fb(t){t()}function Xx(t,e){var n=typeof e=="function"?e:Mu;if(t.length===0)n();else{var i=fb;Z.mutateApproach===R9&&(i=$s.requestAnimationFrame||fb),i(function(){var s=T7(),r=by.begin("mutate");t.map(s),r(),n()})}}var wy=!1;function Qx(){wy=!0}function Mg(){wy=!1}var Nh=null;function db(t){if(nb&&Z.observeMutations){var e=t.treeCallback,n=e===void 0?Mu:e,i=t.nodeCallback,s=i===void 0?Mu:i,r=t.pseudoElementsCallback,o=r===void 0?Mu:r,a=t.observeMutationsRoot,l=a===void 0?ot:a;Nh=new nb(function(c){if(!wy){var u=zs();ca(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!hb(h.addedNodes[0])&&(Z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&hb(h.target)&&~F9.indexOf(h.attributeName))if(h.attributeName==="class"&&w7(h.target)){var f=nd(py(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(hy,d||u),p&&h.target.setAttribute(fy,p)}else E7(h.target)&&s(h.target)})}}),ss&&Nh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function k7(){Nh&&Nh.disconnect()}function S7(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function A7(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=nd(py(t));return s.prefix||(s.prefix=zs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=o7(s.prefix,t.innerText)||_y(s.prefix,xg(t.innerText))),!s.iconName&&Z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function R7(t){var e=ca(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Z.autoA11y&&(n?e["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(i||Nl()):(e["aria-hidden"]="true",e.focusable="false")),e}function D7(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=A7(t),i=n.iconName,s=n.prefix,r=n.rest,o=R7(t),a=Sg("parseNodeAttributes",{},t),l=e.styleParser?S7(t):[];return G({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:gi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var O7=Qn.styles;function Jx(t){var e=Z.autoReplaceSvg==="nest"?pb(t,{styleParser:!1}):pb(t);return~e.extra.classes.indexOf(Px)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}var Hs=new Set;dy.map(function(t){Hs.add("fa-".concat(t))});Object.keys(Dl[it]).map(Hs.add.bind(Hs));Object.keys(Dl[pt]).map(Hs.add.bind(Hs));Hs=wc(Hs);function gb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ss)return Promise.resolve();var n=ot.documentElement.classList,i=function(h){return n.add("".concat(ib,"-").concat(h))},s=function(h){return n.remove("".concat(ib,"-").concat(h))},r=Z.autoFetchSvg?Hs:dy.map(function(u){return"fa-".concat(u)}).concat(Object.keys(O7));r.includes("fa")||r.push("fa");var o=[".".concat(Px,":not([").concat(Or,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Or,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ca(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=by.begin("onTree"),c=a.reduce(function(u,h){try{var f=Jx(h);f&&u.push(f)}catch(d){Mx||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){Xx(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function M7(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jx(t).then(function(n){n&&Xx([n],e)})}function P7(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Ag(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Ag(s||{})),t(i,G(G({},n),{},{mask:s}))}}var N7=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?gi:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,g=n.classes,m=g===void 0?[]:g,_=n.attributes,y=_===void 0?{}:_,w=n.styles,b=w===void 0?{}:w;if(e){var T=e.prefix,S=e.iconName,I=e.icon;return id(G({type:"icon"},e),function(){return Mr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Z.autoA11y&&(f?y["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(p||Nl()):(y["aria-hidden"]="true",y.focusable="false")),vy({icons:{main:Rg(I),mask:l?Rg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:S,transform:G(G({},gi),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:y,styles:b,classes:m}})})}},L7={mixout:function(){return{icon:P7(N7)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gb,n.nodeCallback=M7,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?ot:i,r=n.callback,o=r===void 0?function(){}:r;return gb(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([Dg(s,a),u.iconName?Dg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=cy(g,2),_=m[0],y=m[1];d([n,vy({icons:{main:_,mask:y},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=ed(a);l.length>0&&(s.style=l);var c;return gy(o)&&(c=ts("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},F7={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return id({type:"layer"},function(){Mr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers")].concat(wc(r)).join(" ")},children:o}]})}}}},U7={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return id({type:"counter",content:n},function(){return Mr("beforeDOMElementCreation",{content:n,params:i}),_7({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(Z.cssPrefix,"-layers-counter")].concat(wc(a))}})})}}}},B7={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?gi:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return id({type:"text",content:n},function(){return Mr("beforeDOMElementCreation",{content:n,params:i}),cb({content:n,transform:G(G({},gi),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(Z.cssPrefix,"-layers-text")].concat(wc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(Rx){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return Z.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,cb({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},V7=new RegExp('"',"ug"),mb=[1105920,1112319];function $7(t){var e=t.replace(V7,""),n=e7(e,0),i=n>=mb[0]&&n<=mb[1],s=e.length===2?e[0]===e[1]:!1;return{value:xg(s?e[0]:e),isSecondary:i||s}}function _b(t,e){var n="".concat(A9).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=ca(t.children),o=r.filter(function(I){return I.getAttribute(Cg)===e})[0],a=$s.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(P9),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?pt:it,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ol[f][l[2].toLowerCase()]:N9[f][c],p=$7(h),g=p.value,m=p.isSecondary,_=l[0].startsWith("FontAwesome"),y=_y(d,g),w=y;if(_){var b=a7(g);b.iconName&&b.prefix&&(y=b.iconName,d=b.prefix)}if(y&&!m&&(!o||o.getAttribute(hy)!==d||o.getAttribute(fy)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var T=D7(),S=T.extra;S.attributes[Cg]=e,Dg(y,d).then(function(I){var x=vy(G(G({},T),{},{icons:{main:I,mask:yy()},prefix:d,iconName:w,extra:S,watchable:!0})),L=ot.createElement("svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=x.map(function(U){return Tc(U)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function z7(t){return Promise.all([_b(t,"::before"),_b(t,"::after")])}function H7(t){return t.parentNode!==document.head&&!~D9.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Cg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yb(t){if(ss)return new Promise(function(e,n){var i=ca(t.querySelectorAll("*")).filter(H7).map(z7),s=by.begin("searchPseudoElements");Qx(),Promise.all(i).then(function(){s(),Mg(),e()}).catch(function(){s(),Mg(),n()})})}var j7={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yb,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?ot:i;Z.searchPseudoElements&&yb(s)}}},vb=!1,W7={mixout:function(){return{dom:{unwatch:function(){Qx(),vb=!0}}}},hooks:function(){return{bootstrap:function(){db(Sg("mutationObserverCallbacks",{}))},noAuto:function(){k7()},watch:function(n){var i=n.observeMutationsRoot;vb?Mg():db(Sg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},bb=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},q7={mixout:function(){return{parse:{transform:function(n){return bb(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=bb(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:G({},d.outer),children:[{tag:"g",attributes:G({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:G(G({},i.icon.attributes),d.path)}]}]}}}},Xd={x:0,y:0,width:"100%",height:"100%"};function wb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function K7(t){return t.tag==="g"?t.children:[t]}var G7={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?nd(s.split(" ").map(function(o){return o.trim()})):yy();return r.prefix||(r.prefix=zs()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=q9({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:G(G({},Xd),{},{fill:"white"})},g=u.children?{children:u.children.map(wb)}:{},m={tag:"g",attributes:G({},d.inner),children:[wb(G({tag:u.tag,attributes:G(G({},u.attributes),d.path)},g))]},_={tag:"g",attributes:G({},d.outer),children:[m]},y="mask-".concat(a||Nl()),w="clip-".concat(a||Nl()),b={tag:"mask",attributes:G(G({},Xd),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:K7(f)},b]};return i.push(T,{tag:"rect",attributes:G({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(y,")")},Xd)}),{children:i,attributes:s}}}},Y7={provides:function(e){var n=!1;$s.matchMedia&&(n=$s.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:G(G({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=G(G({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:G(G({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:G(G({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:G(G({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:G(G({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:G(G({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:G(G({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:G(G({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},X7={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},Q7=[Y9,L7,F7,U7,B7,j7,W7,q7,G7,Y7,X7];u7(Q7,{mixoutsTo:Pn});Pn.noAuto;Pn.config;var De=Pn.library;Pn.dom;var Pg=Pn.parse;Pn.findIconDefinition;Pn.toHtml;var J7=Pn.icon;Pn.layer;Pn.text;Pn.counter;function Eb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Ni(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Eb(Object(n),!0).forEach(function(i){dn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Eb(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Lh(t){"@babel/helpers - typeof";return Lh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lh(t)}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z7(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function eU(t,e){if(t==null)return{};var n=Z7(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var tU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zx={exports:{}};(function(t){(function(e){var n=function(_,y,w){if(!c(y)||h(y)||f(y)||d(y)||l(y))return y;var b,T=0,S=0;if(u(y))for(b=[],S=y.length;T<S;T++)b.push(n(_,y[T],w));else{b={};for(var I in y)Object.prototype.hasOwnProperty.call(y,I)&&(b[_(I,w)]=n(_,y[I],w))}return b},i=function(_,y){y=y||{};var w=y.separator||"_",b=y.split||/(?=[A-Z])/;return _.split(b).join(w)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,w){return w?w.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var y=s(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return i(_,y).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,y){var w=y&&"process"in y?y.process:y;return typeof w!="function"?_:function(b,T){return w(b,_,T)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,y){return n(g(s,y),_)},decamelizeKeys:function(_,y){return n(g(o,y),_,y)},pascalizeKeys:function(_,y){return n(g(r,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(tU)})(Zx);var nU=Zx.exports,iU=["class","style"];function sU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=nU.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function rU(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ek(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return ek(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=rU(u);break;case"style":l.style=sU(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=eU(n,iU);return ql(t.tag,Ni(Ni(Ni({},e),{},{class:s.class,style:Ni(Ni({},s.style),o)},s.attrs),a),i)}var tk=!1;try{tk=!0}catch{}function oU(){if(!tk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Qd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dn({},t,e):{}}function aU(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dn(e,"fa-".concat(t.size),t.size!==null),dn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dn(e,"fa-pull-".concat(t.pull),t.pull!==null),dn(e,"fa-swap-opacity",t.swapOpacity),dn(e,"fa-bounce",t.bounce),dn(e,"fa-shake",t.shake),dn(e,"fa-beat",t.beat),dn(e,"fa-fade",t.fade),dn(e,"fa-beat-fade",t.beatFade),dn(e,"fa-flash",t.flash),dn(e,"fa-spin-pulse",t.spinPulse),dn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Tb(t){if(t&&Lh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pg.icon)return Pg.icon(t);if(t===null)return null;if(Lh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var bo=jl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=qe(function(){return Tb(e.icon)}),r=qe(function(){return Qd("classes",aU(e))}),o=qe(function(){return Qd("transform",typeof e.transform=="string"?Pg.transform(e.transform):e.transform)}),a=qe(function(){return Qd("mask",Tb(e.mask))}),l=qe(function(){return J7(s.value,Ni(Ni(Ni(Ni({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});xs(l,function(u){if(!u)return oU("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=qe(function(){return l.value?ek(l.value.abstract[0],{},i):null});return function(){return c.value}}});const lU={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(M(),$("div",{class:yn(["flag",{inverted:e.inverted}]),style:Ms({backgroundColor:e.color})},[X(C(bo),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},nk=Mn(lU,[["__scopeId","data-v-6db28dbb"]]),rs=bm("board",()=>{const t=at(""),e=at(""),n=at("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const cU={key:0,class:"hidden-indicator"},uU=["src"],hU={class:"boardTileFlags"},fU={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=rs(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u,h;return M(),$("div",{class:yn(["tile",{isSelected:C(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&((a=e.tileData)==null?void 0:a.hidden)==!0,nullTile:((l=e.tileData)==null?void 0:l.type)=="null"&&(e==null?void 0:e.isEditor)==!1}]),onClick:r[0]||(r[0]=f=>i({id:e.tileData.id,...e.tileData})),style:Ms({"--_backgroundColor":(c=e.tileData)==null?void 0:c.bgColor})},[(e==null?void 0:e.isEditor)==!0&&((u=e.tileData)==null?void 0:u.hidden)==!0?(M(),$("div",cU,[X(C(bo),{class:"icon",icon:["fas","eye-low-vision"]})])):Re("",!0),((h=e.tileData)==null?void 0:h.type)!=="null"||e.isEditor&&e.tileData.img?(M(),$("img",{key:1,src:e.tileData.img.trim()||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,uU)):Re("",!0),k("div",hU,[e.groupsData?(M(!0),$(we,{key:0},un(e.groupsData,f=>(M(),$t(nk,{key:"tile-flag-"+f.name+"-"+e.tileData.id,class:yn(["tileFlag","flag-end-"+f.flagEnd]),icon:f.icon,group:f.name,name:f!=null&&f.collected.hasOwnProperty(e.tileData.id)?f.name:"",color:"none",inverted:!0,style:Ms({opacity:(f==null?void 0:f.collected)!=null&&(f!=null&&f.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","group","name","style"]))),128)):Re("",!0)])],6)}}},ik=Mn(fU,[["__scopeId","data-v-d4847934"]]);const dU={key:0,class:"bingo-board"},pU={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;m3(s=>({"152c3219":t.boardData.settings.width}));const n=rs(),i=M3(n.selectedTile);return(s,r)=>e.boardData?(M(),$("main",dU,[(M(!0),$(we,null,un(e.tilesData,o=>(M(),$t(ik,{key:"board-tile-"+o.coordinates,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:C(i)==o.id,isEditor:e.isEditor,isModerator:e.isModerator},null,8,["tileData","groupsData","teamData","selected","isEditor","isModerator"]))),128))])):Re("",!0)}},Ey=Mn(pU,[["__scopeId","data-v-eafc1f84"]]);const gU={__name:"iconButton",props:{groupIcon:{required:!1,type:String},fasIcon:{required:!0,type:String},label:{required:!1,type:String}},setup(t){const e=t;return(n,i)=>{const s=Wl("font-awesome-icon");return M(),$("button",{class:yn(["icon-button btn",{outline:e.fasIcon==e.groupIcon}])},[Te(_e(e.label)+" ",1),X(s,{class:yn({outline:e.fasIcon==e.groupIcon}),icon:["fa",e.fasIcon]},null,8,["class","icon"])],2)}}},ke=Mn(gU,[["__scopeId","data-v-04be184b"]]);const Ty=t=>(Yo("data-v-2179b98a"),t=t(),Xo(),t),mU={key:0},_U=Ty(()=>k("br",null,null,-1)),yU={key:0},vU=Ty(()=>k("br",null,null,-1)),bU=Ty(()=>k("br",null,null,-1)),wU={key:0,class:"rules"},EU={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=rs(),i=qi([]),s=r=>{document.querySelectorAll("[name]").forEach(o=>{o.parentNode.parentNode.style.opacity=1,o.parentNode.parentNode.style.backgroundColor="initial",o.parentNode.parentNode.style.borderColor="",o.parentNode.style.opacity=1}),i.includes(r)?i[0]="":(i[0]=r,document.querySelectorAll("[name]").forEach(o=>{o.parentNode.style.opacity=.1,o.parentNode.parentNode.style.borderColor="var(--color-accent)"}),document.querySelectorAll(`[name='${r}']`).forEach(o=>{o.parentNode.parentNode.style.borderColor="",o.parentNode.parentNode.style.backgroundColor="color-mix(in srgb, lime, transparent 90%)"})),console.log(r)};return(r,o)=>{var a;return M(),$("div",null,[e.groupsData?(M(),$("ul",mU,[(M(!0),$(we,null,un(e.groupsData,(l,c)=>(M(),$("li",{key:c+l.id,class:"tooltip"},[X(nk,{color:l.color,class:yn(["tileFlag","flag-end-"+l.flagEnd]),icon:l.icon,style:Ms({"--groupColor":l.color,"--width":l.points/25*100*1.5+"px"})},null,8,["color","class","icon","style"]),Te(" "+_e(l.name),1),_U,X(ke,{class:"iconBtn",label:"view details",onClick:u=>s(l.name),fasIcon:"eye"},null,8,["onClick"]),i.includes(l.name)?(M(),$("ul",yU,[(M(!0),$(we,null,un(l.members,u=>(M(),$("li",{key:u},_e(u),1))),128))])):Re("",!0),Te(" score: "+_e(l.points?l.points:"0"),1),vU,bU]))),128)),((a=C(n))==null?void 0:a.rules)!=null?(M(),$("li",wU,_e(C(n).rules),1)):Re("",!0)])):Re("",!0)])}}},TU=Mn(EU,[["__scopeId","data-v-2179b98a"]]);const IU={key:0},CU={key:1,class:"items"},xU={__name:"sidePannel",setup(t){const e=rs();return(n,i)=>(M(),$(we,null,[k("h2",null,_e(C(e).selectedTile.title)+_e(C(e).selectedTile.points!=0?`, ${C(e).selectedTile.points} points`:""),1),(M(),$t(ik,{class:"board-tile",tileData:C(e).selectedTile,key:"side-pannel-tile-"+C(e).selectedTile},null,8,["tileData"])),C(e).selectedTile.description?(M(),$("p",IU,_e(C(e).selectedTile.description),1)):Re("",!0),C(e).selectedTile.items?(M(),$("p",CU,[Te(" Eligible items: "),(M(!0),$(we,null,un(C(e).selectedTile.items,(s,r)=>(M(),$(we,null,[Te(_e(s.item)+" "+_e(s.count>1?"x"+s.count:"")+" "+_e(r!==C(e).selectedTile.items.length-1?",":""),1)],64))),256))])):Re("",!0)],64))}},kU=Mn(xU,[["__scopeId","data-v-3ee9f1f5"]]),SU=bm("userStateStore",()=>{const t=at({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}}),AU=new Pi,sk=hF(),rk=async(t,e)=>{_O(sk,AU).then(async n=>{const i=n.user;(await ny(de(ie,"Users",i.uid))).exists()||bs(de(ie,"Users",i.uid),{count:0}),e.push(t)}).catch(n=>{const i=n.code,s=n.message;console.error(n,i,s)})},RU=async t=>{XD(sk).then(()=>t.push({path:"/"}))};const DU={class:"dashboard"},OU={__name:"loginButton",props:{destination:{type:Object,required:!0}},async setup(t){let e,n;const i=t,s=jr(),r=s.params.boardUUID,o=SU();let a;const l=([e,n]=ei(()=>qs()),e=await e,n(),e);l&&(a=Xe(de(ie,"Users",l.uid)));const c=Zf(),u=Xe(de(ie,"Boards",s.params.boardUUID)),h=(f,d)=>{d?c.push({name:f,params:{boardUUID:d}}):c.push({name:f})};return(f,d)=>{var p,g,m,_,y,w,b,T,S,I,x,L;return M(),$("div",DU,[C(l)?(M(),$(we,{key:1},[X(ke,{class:"iconBtn",label:"Dashboard",onClick:d[1]||(d[1]=U=>h("userOverview")),fasIcon:"list-ul"}),C(u)&&C(o).user&&C(l)&&(C(l).uid==((p=C(u))==null?void 0:p.ownerID)||((g=C(a))==null?void 0:g.type)=="admin"||(_=(m=C(u))==null?void 0:m.editors)!=null&&_.includes(C(l).uid))?(M(),$t(ke,{key:0,class:yn([{"current-page":C(s).name=="editBoard"},"iconBtn"]),label:"Edit board",onClick:d[2]||(d[2]=U=>h("editBoard",C(r))),fasIcon:"pen-to-square"},null,8,["class"])):Re("",!0),(M(),$t(ke,{key:1,class:yn(["iconBtn",{"current-page":C(s).name=="overview"}]),label:"Preview board",onClick:d[3]||(d[3]=U=>h("overview",C(r))),fasIcon:"eye"},null,8,["class"])),C(u)&&C(o).user&&C(l)&&(C(l).uid==((y=C(u))==null?void 0:y.ownerID)||((w=C(a))==null?void 0:w.type)=="admin"||(T=(b=C(u))==null?void 0:b.moderators)!=null&&T.includes(C(l).uid)||(I=(S=C(u))==null?void 0:S.editors)!=null&&I.includes(C(l).uid))?(M(),$t(ke,{key:2,class:yn([{"current-page":C(s).name=="moderator"},"iconBtn"]),label:"Verify tiles",onClick:d[4]||(d[4]=U=>h("moderator",C(r))),fasIcon:"square-check"},null,8,["class"])):Re("",!0),C(l)&&C(l)&&(C(l).uid==((x=C(u))==null?void 0:x.ownerID)||((L=C(a))==null?void 0:L.type)=="admin")?(M(),$(we,{key:3},[X(ke,{class:yn([{"current-page":C(s).name=="groupView"},"iconBtn"]),label:"Magage groups",onClick:d[5]||(d[5]=U=>h("groupView",C(r))),fasIcon:"users-gear"},null,8,["class"]),X(ke,{class:"iconBtn",onClick:d[6]||(d[6]=U=>C(RU)(C(c))),fasIcon:"right-from-bracket",label:"Log out"})],64)):Re("",!0)],64)):(M(),$t(ke,{key:0,class:"iconBtn",onClick:d[0]||(d[0]=U=>C(rk)(i.destination,C(c))),fasIcon:"right-to-bracket"}))])}}},Ic=Mn(OU,[["__scopeId","data-v-0911feee"]]);const Iy=t=>(Yo("data-v-a3059734"),t=t(),Xo(),t),MU={class:"container"},PU={class:"main-section"},NU={key:1,class:"detail-pane"},LU={style:{"justify-content":"end",display:"flex"}},FU=Iy(()=>k("h1",null,"Not authenticated",-1)),UU=Iy(()=>k("p",null,"you do not need to log in to view a published board.",-1)),BU=Iy(()=>k("p",null," if the board you are looking for is private, you need to be the owner, a moderator, or editor to view this board. ",-1)),VU={__name:"BoardView",async setup(t){var d;let e,n;const i=rs();let s;const r=([e,n]=ei(()=>qs()),e=await e,n(),e);r&&(s=Xe(de(ie,"Users",r.uid)));const o=jr();i.setBoardUUID(o.params.boardUUID),i.setSelectedTile("");const a=i.boardUUID,l=at(!1),{data:c}=Xe(On(ie,"Boards",a,"Groups")),u=Xe(de(ie,"Boards",a));i.setRules((d=u.value)==null?void 0:d.rules);const h=qe(()=>{var g;let p={};return c&&((g=c==null?void 0:c.value)==null||g.forEach(async m=>{p[m.id]={...m}})),p||{}}),{data:f}=Xe(On(ie,`Boards/${a}/Tiles`));return(p,g)=>{var m,_,y,w,b,T;return M(),$("div",MU,[X(Ic,{destination:{name:"overview",params:{boardUUID:C(a)}}},null,8,["destination"]),C(u)&&C(f)&&(C(u).settings.public||((m=C(r))==null?void 0:m.uid)==C(u).ownerID||((_=C(s))==null?void 0:_.type)=="admin"||(w=C(u).moderators)!=null&&w.includes((y=C(r))==null?void 0:y.uid)||(T=C(u).editors)!=null&&T.includes((b=C(r))==null?void 0:b.uid))?(M(),$(we,{key:0},[k("section",null,[k("h1",null,_e(C(u).name),1)]),k("section",PU,[l.value==l.value?(M(),$(we,{key:0},[h.value?(M(),$t(TU,{key:0,class:"score-card",groupsData:h.value},null,8,["groupsData"])):Re("",!0)],64)):Re("",!0),(M(),$t(Ey,{class:"bingo-board",boardData:C(u),groupsData:h.value,tilesData:C(f),key:"bingo-board-"+C(i).boardUUID},null,8,["boardData","groupsData","tilesData"])),C(i).selectedTile!=""?(M(),$("aside",NU,[k("div",LU,[X(ke,{onClick:g[0]||(g[0]=()=>{C(i).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),C(i).selectedTile!=""?(M(),$t(kU,{key:0})):Re("",!0)])):Re("",!0)])],64)):(M(),$(we,{key:1},[FU,UU,BU],64))])}}},$U=Mn(VU,[["__scopeId","data-v-a3059734"]]),zU=["for"],HU=k("br",null,null,-1),jU=["id","checked","onClick"],WU={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=qe(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],Pt(de(ie,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Pt(de(ie,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,Pt(de(ie,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Pt(de(ie,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&Pt(de(ie,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(M(),$("div",{key:e.tileData.id},[k("h2",null,"{ "+_e(e.tileData.id.split("")[0])+" , "+_e(e.tileData.id.split("")[1])+" }",1),k("ul",null,[(M(!0),$(we,null,un(e.groupsData,o=>(M(),$("li",{key:o.id+n.value.id,class:yn({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[k("label",{for:o.id+n.value.id},[Te(_e(o.name)+" : "+_e(o.verify.hasOwnProperty(e.tileData.id)),1),HU,Te(" collected: "),(M(),$("input",{id:o.id+n.value.id,type:"checkbox",class:"toggle",key:o.id+n.value.id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:Ye(a=>i({tile:n.value,group:o}),["prevent"])},null,8,jU))],8,zU)],2))),128))])])):Re("",!0)}},qU={class:"container"},KU={key:0},GU={key:0},YU={key:1},XU={__name:"ModeratorView",async setup(t){let e,n;const i=rs(),s=([e,n]=ei(()=>qs()),e=await e,n(),e),r=jr(),o=qe(()=>r.params.boardUUID),{data:a}=Xe(On(ie,"Boards",o.value,"Groups")),{data:l,promise:c}=Xe(de(ie,"Users",`${s.uid}`));[e,n]=ei(()=>c.value),await e,n();const{data:u,promise:h}=Xe(de(ie,"Boards",o.value));[e,n]=ei(()=>h.value.then(p=>{p.moderators||(p.moderators=[]),p.editors||(p.editors=[])})),await e,n();const f=qe(()=>{var g;let p={};return a&&((g=a==null?void 0:a.value)==null||g.forEach(m=>{m.name!="moderator"&&(p[m.id]={id:m.id,name:m.name,member:m.members,icon:m.icon,color:m.color,points:m.points,flagEnd:m.flagEnd,collected:m.collected,verify:m.verify})})),p||{}}),{data:d}=Xe(On(ie,`Boards/${o.value}/Tiles`));return(p,g)=>{var m,_,y,w,b,T,S,I;return M(),$("div",qU,[X(Ic,{destination:{name:"moderator",params:o.value}},null,8,["destination"]),k("section",null,[((m=C(u))==null?void 0:m.name)!=null?(M(),$("h1",KU,_e(C(u).name),1)):Re("",!0)]),C(s)&&(C(s).uid==((_=C(u))==null?void 0:_.ownerID)||((y=C(l))==null?void 0:y.type)=="admin"||(b=(w=C(u))==null?void 0:w.moderators)!=null&&b.includes(C(s).uid)||(S=(T=C(u))==null?void 0:T.editors)!=null&&S.includes(C(s).uid))?(M(),$("section",GU,[X(Ey,{boardData:C(u),groupsData:f.value,tilesData:C(d),isModerator:!0,isEditor:!!((I=C(u).editors)!=null&&I.includes(C(s).uid))},null,8,["boardData","groupsData","tilesData","isEditor"]),k("aside",null,[(M(),$t(WU,{tileData:C(i).selectedTile,key:C(i).selectedTile.id,boardUUID:o.value,groupsData:f.value,boardData:C(u)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(M(),$("section",YU,"please log in or return to the [board]"))])}}},QU={class:"tile"},JU={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(M(),$("div",QU,_e(e.tile.coordinates),1))}},ZU=bm("boardCreate",()=>{const t=at({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}}),eB=["onKeydown"],tB={class:"pen"},nB=k("br",null,null,-1),iB=k("br",null,null,-1),sB={key:0,class:"bingo-board"},rB=["onClick"],oB={key:1},aB={key:2},lB={__name:"newBoard",async setup(t){let e,n;const i=ZU(),s=([e,n]=ei(()=>qs()),e=await e,n(),e),r=Zf(),o=at({name:"<name of bingo board>",editors:[],moderators:[],settings:{width:1,height:1,public:!1},order:[]}),a=Xe(de(ie,"Users",s.uid)),l=at(null),c=()=>{l.value.focus()},u=d=>{d.target.blur(),l.value.innerText.trim()==""?(o.value.name="Enter title here",l.value.innerText="Enter title here"):o.value.name=l.value.innerText.trim()},h=qe(()=>{let d=[];for(let p=0;p<=parseInt(o.value.settings.width)*o.value.settings.height-1;p++){const g=Math.floor(p/parseInt(o.value.settings.width)+1),m=p%parseInt(o.value.settings.width)+1;let _=`T${g}-${m}`;d.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:_,img:null,bgColor:null})}return d}),f=async()=>{const d=de(On(ie,"Boards")),p=de(On(ie,"Boards",d.id,"Groups"));h.value.forEach(g=>{o.value.order.push(g.coordinates)}),await bs(d,{...o.value,ownerID:s.uid}).then(()=>{h.value.forEach(g=>{bs(de(ie,"Boards",d.id,"Tiles",`${g.coordinates}`),{...g})})}).then(()=>{bs(de(ie,p.path),{name:"all",collected:{},verify:{},icon:"frog",color:"#8a038f",points:0}),bs(de(ie,"Users",s.uid),{count:a.value.count+1}),i.setSelectedTile(""),r.push({name:"editBoard",params:{boardUUID:d.id}})})};return s||r.push({name:"loginView"}),(d,p)=>{var m,_;const g=Wl("font-awesome-icon");return M(),$(we,null,[C(s)&&((m=C(a))==null?void 0:m.count)<5?(M(),$(we,{key:0},[k("h1",{class:"title-wrap",onClick:p[0]||(p[0]=Ye(y=>c(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:l,contenteditable:"",spellcheck:"false",onKeydown:Li(u,["enter"]),onBlur:u},_e(o.value.name),41,eB),k("span",tB,[X(g,{icon:["fas","pen"]})])]),k("div",null,[Te(" name: width: "),gn(k("input",{min:"1",max:"9",name:"width",type:"range","onUpdate:modelValue":p[1]||(p[1]=y=>o.value.settings.width=y)},null,512),[[Fn,o.value.settings.width]]),Te(_e(o.value.settings.width),1),nB,Te(" height: "),gn(k("input",{min:"1",max:"9",name:"height",type:"range","onUpdate:modelValue":p[2]||(p[2]=y=>o.value.settings.height=y)},null,512),[[Fn,o.value.settings.height]]),Te(_e(o.value.settings.height),1),iB,Te(" total tiles: "+_e(o.value.settings.width*o.value.settings.height),1)]),h.value?(M(),$("main",sB,[(M(!0),$(we,null,un(h.value,y=>(M(),$t(JU,{key:y.coordinates,tile:y},null,8,["tile"]))),128))])):Re("",!0),k("button",{class:"btn",onClick:Ye(f,["prevent"])},"Save Settings",8,rB)],64)):Re("",!0),C(s).loggedIn?Re("",!0):(M(),$("h1",oB,"not authenticated")),((_=C(a))==null?void 0:_.count)>=6?(M(),$("h1",aB,"You've exceded the 5 board limit")):Re("",!0)],64)}}};const os=t=>(Yo("data-v-0db54fdc"),t=t(),Xo(),t),cB=os(()=>k("h1",null,"User Settings and overview",-1)),uB={class:"user-details"},hB=os(()=>k("h2",null,"User details",-1)),fB=os(()=>k("br",null,null,-1)),dB={class:"highlight UID"},pB=os(()=>k("br",null,null,-1)),gB=os(()=>k("h2",null,"Your boards",-1)),mB={class:"board-list"},_B={class:"highlight UID"},yB=["onClick"],vB=["onClick"],bB=["onClick"],wB=["onClick"],EB=["checked","onClick"],TB={class:"_item"},IB=os(()=>k("h3",null,"New Board",-1)),CB=os(()=>k("p",null,"Create a new Bingo event",-1)),xB=os(()=>k("h2",null,"Boards you can edit",-1)),kB={key:0,class:"board-list"},SB=["onClick"],AB=["onClick"],RB=["onClick"],DB={key:1},OB=os(()=>k("h2",null,"Boards you can moderate",-1)),MB={class:"board-list"},PB=["onClick"],NB=["onClick"],LB={key:1},FB={__name:"UserOverview",async setup(t){let e,n;const i=([e,n]=ei(()=>qs()),e=await e,n(),e);i||f.push({name:"loginView"});const s=On(ie,"Boards"),r=at(i.uid),o=at("=="),{data:a,promise:l}=Xe(de(ie,"Users",i.uid));[e,n]=ei(()=>l.value.then(()=>{a.value.type=="admin"&&(o.value="!="),a.value.type=="admin"&&(r.value="0")}).catch(m=>{console.error(m.error)})),await e,n();const c=Xe(Bd(s,Vd("ownerID",o.value,r.value))),u=Xe(Bd(s,Vd("moderators","array-contains",i.uid))),h=Xe(Bd(s,Vd("editors","array-contains",i.uid))),f=Zf(),d=(m,_)=>{f.push({name:m,params:{boardUUID:_}})},p=m=>{let _={...m};_.settings.public=!m.settings.public,Pt(de(ie,"Boards",m.id),_)},g=m=>{for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_))return!1;return!0};return(m,_)=>{var y;return C(i)?(M(),$(we,{key:0},[cB,k("section",uB,[hB,k("p",null,[Te(" Total boards: "+_e((y=C(a))!=null&&y.count?C(a).count:0),1),fB,Te(" User ID: "),k("span",dB,_e(C(i).uid),1),pB,Te(" Share your user ID with people to have them add you as moderator and-or editor. ")])]),k("section",null,[gB,k("div",mB,[(M(!0),$(we,null,un(C(c),w=>(M(),$("div",{class:"_item",key:w.id+w.name},[k("h3",null,_e(w.name),1),k("p",null,[Te(" Board id: "),k("span",_B,_e(w.id),1)]),k("p",{onClick:b=>d("editBoard",w.id)},[X(ke,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,yB),k("p",{onClick:b=>d("overview",w.id)},[X(ke,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,vB),k("p",{onClick:b=>d("moderator",w.id)},[X(ke,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,bB),k("p",{onClick:b=>d("groupView",w.id)},[X(ke,{class:"iconBtn",label:"Manage groups: ",fasIcon:"users-gear"})],8,wB),k("p",null,[Te(" Public: "),k("input",{class:"toggle",type:"checkbox",checked:w.settings.public,onClick:b=>p(w)},null,8,EB)])]))),128)),k("div",TB,[IB,CB,!C(a)||C(a).count<6?(M(),$("button",{key:0,class:"btn highlight new-board",onClick:_[0]||(_[0]=Ye(w=>C(f).push({name:"newBoard"}),["prevent"]))}," Create new board ")):Re("",!0)])])]),g(C(h))?Re("",!0):(M(),$("section",{key:C(h)},[xB,C(h)?(M(),$("div",kB,[(M(!0),$(we,null,un(C(h),w=>(M(),$("div",{class:"_item",key:w},[k("h3",null,_e(w.name),1),k("p",{onClick:b=>d("editBoard",w.id)},[X(ke,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,SB),k("p",{onClick:b=>d("overview",w.id)},[X(ke,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,AB),k("p",{onClick:b=>d("moderator",w.id)},[X(ke,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,RB)]))),128))])):Re("",!0)])),g(C(u))?Re("",!0):(M(),$("section",DB,[OB,k("div",MB,[(M(!0),$(we,null,un(C(u),w=>(M(),$("div",{class:"_item",key:w},[k("h3",null,_e(w.name),1),k("p",{onClick:b=>d("overview",w.id)},[X(ke,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,PB),k("p",{onClick:b=>d("moderator",w.id)},[X(ke,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,NB)]))),128))])]))],64)):(M(),$("h1",LB,"Not Authenticated"))}}},UB=Mn(FB,[["__scopeId","data-v-0db54fdc"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Cc(t){return t+.5|0}const ws=(t,e,n)=>Math.max(Math.min(t,n),e);function Oa(t){return ws(Cc(t*2.55),0,255)}function Os(t){return ws(Cc(t*255),0,255)}function Mi(t){return ws(Cc(t/2.55)/100,0,1)}function Ib(t){return ws(Cc(t*100),0,100)}const Ln={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ng=[..."0123456789ABCDEF"],BB=t=>Ng[t&15],VB=t=>Ng[(t&240)>>4]+Ng[t&15],su=t=>(t&240)>>4===(t&15),$B=t=>su(t.r)&&su(t.g)&&su(t.b)&&su(t.a);function zB(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Ln[t[1]]*17,g:255&Ln[t[2]]*17,b:255&Ln[t[3]]*17,a:e===5?Ln[t[4]]*17:255}:(e===7||e===9)&&(n={r:Ln[t[1]]<<4|Ln[t[2]],g:Ln[t[3]]<<4|Ln[t[4]],b:Ln[t[5]]<<4|Ln[t[6]],a:e===9?Ln[t[7]]<<4|Ln[t[8]]:255})),n}const HB=(t,e)=>t<255?e(t):"";function jB(t){var e=$B(t)?BB:VB;return t?"#"+e(t.r)+e(t.g)+e(t.b)+HB(t.a,e):void 0}const WB=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ok(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function qB(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function KB(t,e,n){const i=ok(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function GB(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function Cy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=GB(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function xy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(Os)}function ky(t,e,n){return xy(ok,t,e,n)}function YB(t,e,n){return xy(KB,t,e,n)}function XB(t,e,n){return xy(qB,t,e,n)}function ak(t){return(t%360+360)%360}function QB(t){const e=WB.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Oa(+e[5]):Os(+e[5]));const s=ak(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=YB(s,r,o):e[1]==="hsv"?i=XB(s,r,o):i=ky(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function JB(t,e){var n=Cy(t);n[0]=ak(n[0]+e),n=ky(n),t.r=n[0],t.g=n[1],t.b=n[2]}function ZB(t){if(!t)return;const e=Cy(t),n=e[0],i=Ib(e[1]),s=Ib(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Mi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const Cb={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},xb={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function eV(){const t={},e=Object.keys(xb),n=Object.keys(Cb);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,Cb[r]);r=parseInt(xb[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let ru;function tV(t){ru||(ru=eV(),ru.transparent=[0,0,0,0]);const e=ru[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const nV=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function iV(t){const e=nV.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?Oa(o):ws(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?Oa(i):ws(i,0,255)),s=255&(e[4]?Oa(s):ws(s,0,255)),r=255&(e[6]?Oa(r):ws(r,0,255)),{r:i,g:s,b:r,a:n}}}function sV(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Mi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Jd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Jr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function rV(t,e,n){const i=Jr(Mi(t.r)),s=Jr(Mi(t.g)),r=Jr(Mi(t.b));return{r:Os(Jd(i+n*(Jr(Mi(e.r))-i))),g:Os(Jd(s+n*(Jr(Mi(e.g))-s))),b:Os(Jd(r+n*(Jr(Mi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function ou(t,e,n){if(t){let i=Cy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=ky(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function lk(t,e){return t&&Object.assign(e||{},t)}function kb(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Os(t[3]))):(e=lk(t,{r:0,g:0,b:0,a:1}),e.a=Os(e.a)),e}function oV(t){return t.charAt(0)==="r"?iV(t):QB(t)}class Ll{constructor(e){if(e instanceof Ll)return e;const n=typeof e;let i;n==="object"?i=kb(e):n==="string"&&(i=zB(e)||tV(e)||oV(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=lk(this._rgb);return e&&(e.a=Mi(e.a)),e}set rgb(e){this._rgb=kb(e)}rgbString(){return this._valid?sV(this._rgb):void 0}hexString(){return this._valid?jB(this._rgb):void 0}hslString(){return this._valid?ZB(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=rV(this._rgb,e._rgb,n)),this}clone(){return new Ll(this.rgb)}alpha(e){return this._rgb.a=Os(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Cc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ou(this._rgb,2,e),this}darken(e){return ou(this._rgb,2,-e),this}saturate(e){return ou(this._rgb,1,e),this}desaturate(e){return ou(this._rgb,1,-e),this}rotate(e){return JB(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Ai(){}const aV=(()=>{let t=0;return()=>t++})();function rt(t){return t===null||typeof t>"u"}function dt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function $e(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Nt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function In(t,e){return Nt(t)?t:e}function Ae(t,e){return typeof t>"u"?e:t}const lV=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ze(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function We(t,e,n,i){let s,r,o;if(dt(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if($e(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Fh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Uh(t){if(dt(t))return t.map(Uh);if($e(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Uh(t[n[s]]);return e}return t}function ck(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function cV(t,e,n,i){if(!ck(t))return;const s=e[t],r=n[t];$e(s)&&$e(r)?Fl(s,r,i):e[t]=Uh(r)}function Fl(t,e,n){const i=dt(e)?e:[e],s=i.length;if(!$e(t))return t;n=n||{};const r=n.merger||cV;let o;for(let a=0;a<s;++a){if(o=i[a],!$e(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function Za(t,e){return Fl(t,e,{merger:uV})}function uV(t,e,n){if(!ck(t))return;const i=e[t],s=n[t];$e(i)&&$e(s)?Za(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Uh(s))}const Sb={"":t=>t,x:t=>t.x,y:t=>t.y};function hV(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function fV(t){const e=hV(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Bh(t,e){return(Sb[e]||(Sb[e]=fV(e)))(t)}function Sy(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Vh=t=>typeof t<"u",js=t=>typeof t=="function",Ab=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function dV(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const St=Math.PI,zn=2*St,pV=zn+St,$h=Number.POSITIVE_INFINITY,gV=St/180,bn=St/2,Zs=St/4,Rb=St*2/3,Es=Math.log10,Ho=Math.sign;function el(t,e,n){return Math.abs(t-e)<n}function Db(t){const e=Math.round(t);t=el(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Es(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function mV(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Ul(t){return!isNaN(parseFloat(t))&&isFinite(t)}function _V(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function uk(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Ts(t){return t*(St/180)}function Ay(t){return t*(180/St)}function Ob(t){if(!Nt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function yV(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*St&&(r+=zn),{angle:r,distance:s}}function Lg(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function vV(t,e){return(t-e+pV)%zn-St}function Wn(t){return(t%zn+zn)%zn}function hk(t,e,n,i){const s=Wn(t),r=Wn(e),o=Wn(n),a=Wn(r-s),l=Wn(o-s),c=Wn(s-r),u=Wn(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function Vn(t,e,n){return Math.max(e,Math.min(n,t))}function bV(t){return Vn(t,-32768,32767)}function Ma(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Ry(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const _r=(t,e,n,i)=>Ry(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),wV=(t,e,n)=>Ry(t,n,i=>t[i][e]>=n);function EV(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const fk=["push","pop","shift","splice","unshift"];function TV(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),fk.forEach(n=>{const i="_onData"+Sy(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Mb(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(fk.forEach(r=>{delete t[r]}),delete t._chartjs)}function IV(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const dk=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function pk(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,dk.call(window,()=>{i=!1,t.apply(e,n)}))}}function CV(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Dy=t=>t==="start"?"left":t==="end"?"right":"center",Kt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,xV=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function kV(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=Vn(Math.min(_r(a,o.axis,c).lo,n?i:_r(e,l,o.getPixelForValue(c)).lo),0,i-1)),f?r=Vn(Math.max(_r(a,o.axis,u,!0).hi+1,n?0:_r(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function SV(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const au=t=>t===0||t===1,Pb=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*zn/n)),Nb=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*zn/n)+1,tl={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*bn)+1,easeOutSine:t=>Math.sin(t*bn),easeInOutSine:t=>-.5*(Math.cos(St*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>au(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>au(t)?t:Pb(t,.075,.3),easeOutElastic:t=>au(t)?t:Nb(t,.075,.3),easeInOutElastic(t){return au(t)?t:t<.5?.5*Pb(t*2,.1125,.45):.5+.5*Nb(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-tl.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?tl.easeInBounce(t*2)*.5:tl.easeOutBounce(t*2-1)*.5+.5};function Oy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Lb(t){return Oy(t)?t:new Ll(t)}function Zd(t){return Oy(t)?t:new Ll(t).saturate(.5).darken(.1).hexString()}const AV=["x","y","borderWidth","radius","tension"],RV=["color","borderColor","backgroundColor"];function DV(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:RV},numbers:{type:"number",properties:AV}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function OV(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Fb=new Map;function MV(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Fb.get(n);return i||(i=new Intl.NumberFormat(t,e),Fb.set(n,i)),i}function My(t,e,n){return MV(e,n).format(t)}const gk={values(t){return dt(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=PV(t,n)}const o=Es(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),My(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(Es(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?gk.numeric.call(this,t,e,n):""}};function PV(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var sd={formatters:gk};function NV(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:sd.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Pr=Object.create(null),Fg=Object.create(null);function nl(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function ep(t,e,n){return typeof e=="string"?Fl(nl(t,e),n):Fl(nl(t,""),e)}class LV{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Zd(s.backgroundColor),this.hoverBorderColor=(i,s)=>Zd(s.borderColor),this.hoverColor=(i,s)=>Zd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return ep(this,e,n)}get(e){return nl(this,e)}describe(e,n){return ep(Fg,e,n)}override(e,n){return ep(Pr,e,n)}route(e,n,i,s){const r=nl(this,e),o=nl(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return $e(l)?Object.assign({},c,l):Ae(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var gt=new LV({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[DV,OV,NV]);function FV(t){return!t||rt(t.size)||rt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function zh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function UV(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,f;for(l=0;l<a;l++)if(h=n[l],h!=null&&!dt(h))o=zh(t,s,r,o,h);else if(dt(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!dt(f)&&(o=zh(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(l=0;l<d;l++)delete s[r[l]];r.splice(0,d)}return o}function er(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function Ub(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Ug(t,e,n,i){mk(t,e,n,i,null)}function mk(t,e,n,i,s){let r,o,a,l,c,u,h,f;const d=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*gV;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,g,0,0,zn):t.arc(n,i,g,0,zn),t.closePath();break;case"triangle":u=s?s/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=Rb,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=Rb,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(m+Zs)*l,h=Math.cos(m+Zs)*(s?s/2-c:l),a=Math.sin(m+Zs)*l,f=Math.sin(m+Zs)*(s?s/2-c:l),t.arc(n-h,i-a,c,m-St,m-bn),t.arc(n+f,i-o,c,m-bn,m),t.arc(n+h,i+a,c,m,m+bn),t.arc(n-f,i+o,c,m+bn,m+St),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}m+=Zs;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":m+=Zs;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),m+=Zs,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function $i(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Py(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Ny(t){t.restore()}function BV(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function VV(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function $V(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),rt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function zV(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function HV(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Nr(t,e,n,i,s,r={}){const o=dt(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,$V(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&HV(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),rt(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),zV(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Hh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-bn,St,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,St,bn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,bn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-bn,!0),t.lineTo(n+o.topLeft,i)}const jV=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,WV=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function qV(t,e){const n=(""+t).match(jV);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const KV=t=>+t||0;function _k(t,e){const n={},i=$e(e),s=i?Object.keys(e):e,r=$e(t)?i?o=>Ae(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=KV(r(o));return n}function GV(t){return _k(t,{top:"y",right:"x",bottom:"y",left:"x"})}function wo(t){return _k(t,["topLeft","topRight","bottomLeft","bottomRight"])}function an(t){const e=GV(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function It(t,e){t=t||{},e=e||gt.font;let n=Ae(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Ae(t.style,e.style);i&&!(""+i).match(WV)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Ae(t.family,e.family),lineHeight:qV(Ae(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Ae(t.weight,e.weight),string:""};return s.string=FV(s),s}function lu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&dt(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function YV(t,e,n){const{min:i,max:s}=t,r=lV(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Xs(t,e){return Object.assign(Object.create(t),e)}function Ly(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=wk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ly([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return vk(a,l,()=>i$(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return Vb(a).includes(l)},ownKeys(a){return Vb(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function jo(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:yk(t,i),setContext:r=>jo(t,r,n,i),override:r=>jo(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return vk(r,o,()=>QV(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function yk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:js(n)?n:()=>n,isIndexable:js(i)?i:()=>i}}const XV=(t,e)=>t?t+Sy(e):e,Fy=(t,e)=>$e(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function vk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function QV(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return js(a)&&o.isScriptable(e)&&(a=JV(e,a,t,n)),dt(a)&&a.length&&(a=ZV(e,a,t,o.isIndexable)),Fy(e,a)&&(a=jo(a,s,r&&r[e],o)),a}function JV(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),Fy(t,l)&&(l=Uy(s._scopes,s,t,l)),l}function ZV(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if($e(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=Uy(c,s,t,u);e.push(jo(h,r,o&&o[t],a))}}return e}function bk(t,e,n){return js(t)?t(e,n):t}const e$=(t,e)=>t===!0?e:typeof t=="string"?Bh(e,t):void 0;function t$(t,e,n,i,s){for(const r of e){const o=e$(n,r);if(o){t.add(o);const a=bk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Uy(t,e,n,i){const s=e._rootScopes,r=bk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=Bb(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=Bb(a,o,r,l,i),l===null)?!1:Ly(Array.from(a),[""],s,r,()=>n$(e,n,i))}function Bb(t,e,n,i,s){for(;n;)n=t$(t,e,n,i,s);return n}function n$(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return dt(s)&&$e(n)?n:s||{}}function i$(t,e,n,i){let s;for(const r of e)if(s=wk(XV(r,t),n),typeof s<"u")return Fy(t,s)?Uy(n,i,t,s):s}function wk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Vb(t){let e=t._keys;return e||(e=t._keys=s$(t._scopes)),e}function s$(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const r$=Number.EPSILON||1e-14,Wo=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ek=t=>t==="x"?"y":"x";function o$(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Lg(r,s),l=Lg(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function a$(t,e,n){const i=t.length;let s,r,o,a,l,c=Wo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=Wo(t,u+1),!(!l||!c)){if(el(e[u],0,r$)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function l$(t,e,n="x"){const i=Ek(n),s=t.length;let r,o,a,l=Wo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Wo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function c$(t,e="x"){const n=Ek(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=Wo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=Wo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?Ho(s[o-1])!==Ho(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}a$(t,s,r),l$(t,r,e)}function cu(t,e,n){return Math.max(Math.min(t,n),e)}function u$(t,e){let n,i,s,r,o,a=$i(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&$i(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=cu(s.cp1x,e.left,e.right),s.cp1y=cu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=cu(s.cp2x,e.left,e.right),s.cp2y=cu(s.cp2y,e.top,e.bottom)))}function h$(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")c$(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=o$(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&u$(t,n)}function Tk(){return typeof window<"u"&&typeof document<"u"}function By(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function jh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const rd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function f$(t,e){return rd(t).getPropertyValue(e)}const d$=["top","right","bottom","left"];function Tr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=d$[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const p$=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function g$(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(p$(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function rr(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=rd(n),r=s.boxSizing==="border-box",o=Tr(s,"padding"),a=Tr(s,"border","width"),{x:l,y:c,box:u}=g$(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/d*n.width/i),y:Math.round((c-f)/p*n.height/i)}}function m$(t,e,n){let i,s;if(e===void 0||n===void 0){const r=By(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=rd(r),l=Tr(a,"border","width"),c=Tr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=jh(a.maxWidth,r,"clientWidth"),s=jh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||$h,maxHeight:s||$h}}const uu=t=>Math.round(t*10)/10;function _$(t,e,n,i){const s=rd(t),r=Tr(s,"margin"),o=jh(s.maxWidth,t,"clientWidth")||$h,a=jh(s.maxHeight,t,"clientHeight")||$h,l=m$(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const f=Tr(s,"border","width"),d=Tr(s,"padding");c-=d.width+f.width,u-=d.height+f.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=uu(Math.min(c,o,l.maxWidth)),u=uu(Math.min(u,a,l.maxHeight)),c&&!u&&(u=uu(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=uu(Math.floor(u*i))),{width:c,height:u}}function $b(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const y$=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function zb(t,e){const n=f$(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function or(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function v$(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function b$(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=or(t,s,n),a=or(s,r,n),l=or(r,e,n),c=or(o,a,n),u=or(a,l,n);return or(c,u,n)}const w$=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},E$=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Eo(t,e,n){return t?w$(e,n):E$()}function Ik(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Ck(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function xk(t){return t==="angle"?{between:hk,compare:vV,normalize:Wn}:{between:Ma,compare:(e,n)=>e-n,normalize:e=>e}}function Hb({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function T$(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=xk(i),l=e.length;let{start:c,end:u,loop:h}=t,f,d;if(h){for(c+=l,u+=l,f=0,d=l;f<d&&o(a(e[c%l][i]),s,r);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function I$(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=xk(i),{start:u,end:h,loop:f,style:d}=T$(t,e,n),p=[];let g=!1,m=null,_,y,w;const b=()=>l(s,w,_)&&a(s,w)!==0,T=()=>a(r,_)===0||l(r,w,_),S=()=>g||b(),I=()=>!g||T();for(let x=u,L=u;x<=h;++x)y=e[x%o],!y.skip&&(_=c(y[i]),_!==w&&(g=l(_,s,r),m===null&&S()&&(m=a(_,s)===0?x:L),m!==null&&I()&&(p.push(Hb({start:m,end:x,loop:f,count:o,style:d})),m=null),L=x,w=_));return m!==null&&p.push(Hb({start:m,end:h,loop:f,count:o,style:d})),p}function C$(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=I$(i[s],t.points,e);r.length&&n.push(...r)}return n}function x$(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function k$(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function S$(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=x$(n,s,r,i);if(i===!0)return jb(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return jb(t,k$(n,o,l,c),n,e)}function jb(t,e,n,i){return!i||!i.setContext||!n?e:A$(t,e,n,i)}function A$(t,e,n,i){const s=t._chart.getContext(),r=Wb(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,f=h;function d(p,g,m,_){const y=a?-1:1;if(p!==g){for(p+=l;n[p%l].skip;)p-=y;for(;n[g%l].skip;)g+=y;p%l!==g%l&&(c.push({start:p%l,end:g%l,loop:m,style:_}),u=_,h=g%l)}}for(const p of e){h=a?h:p.start;let g=n[h%l],m;for(f=h+1;f<=p.end;f++){const _=n[f%l];m=Wb(i.setContext(Xs(s,{type:"segment",p0:g,p1:_,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),R$(m,u)&&d(h,f-1,p.loop,u),g=_,u=m}h<f-1&&d(h,f-1,p.loop,u)}return c}function Wb(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function R$(t,e){if(!e)return!1;const n=[],i=function(s,r){return Oy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class D${constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=dk.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ri=new D$;const qb="transparent",O$={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Lb(t||qb),s=i.valid&&Lb(e||qb);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class M${constructor(e,n,i,s){const r=n[i];s=lu([e.to,s,r,e.from]);const o=lu([e.from,r,s]);this._active=!0,this._fn=e.fn||O$[e.type||typeof o],this._easing=tl[e.easing]||tl.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=lu([e.to,n,s,e.from]),this._from=lu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class kk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!$e(e))return;const n=Object.keys(gt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!$e(r))return;const o={};for(const a of n)o[a]=r[a];(dt(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=N$(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&P$(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[c]=u;continue}r[c]=h=new M$(f,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ri.add(this._chart,i),!0}}function P$(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function N$(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Kb(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function L$(t,e,n){if(n===!1)return!1;const i=Kb(t,n),s=Kb(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function F$(t){let e,n,i,s;return $e(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function Sk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Gb(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],Nt(c)&&(r||e===0||Ho(e)===Ho(c))&&(e+=c)}return e}}function U$(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Yb(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function B$(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function V$(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function $$(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Xb(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Qb(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=B$(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[l]:g,[c]:m}=p,_=p._stacks||(p._stacks={});f=_[c]=$$(s,u,g),f[a]=m,f._top=Xb(f,o,!0,i.type),f._bottom=Xb(f,o,!1,i.type);const y=f._visualValues||(f._visualValues={});y[a]=m}}function tp(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function z$(t,e){return Xs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function H$(t,e,n){return Xs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function va(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const np=t=>t==="reset"||t==="none",Jb=(t,e)=>e?t:Object.assign({},t),j$=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Sk(n,!0),values:null};class il{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Yb(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&va(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=Ae(i.xAxisID,tp(e,"x")),o=n.yAxisID=Ae(i.yAxisID,tp(e,"y")),a=n.rAxisID=Ae(i.rAxisID,tp(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Mb(this._data,this),e._stacked&&va(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if($e(n))this._data=U$(n);else if(i!==n){if(i){Mb(i,this);const s=this._cachedMeta;va(s),s._parsed=[]}n&&Object.isExtensible(n)&&TV(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Yb(n.vScale,n),n.stack!==i.stack&&(s=!0,va(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Qb(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{dt(s[e])?f=this.parseArrayData(i,s,e,n):$e(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],l&&(d()&&(l=!1),c=h);i._sorted=l}o&&Qb(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],c[u]={x:r.parse(Bh(d,a),f),y:o.parse(Bh(d,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:Sk(s,!0),values:n._stacks[e.axis]._visualValues};return Gb(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=Gb(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=j$(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=V$(a);let f,d;function p(){d=s[f];const g=d[a.axis];return!Nt(d[e.axis])||u>g||h<g}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,e,d,l),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,e,d,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Nt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=F$(Ae(this.options.clip,L$(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=H$(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=z$(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&Vh(i);if(a)return Jb(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),u),d=Object.keys(gt.elements[e]),p=()=>this.getContext(i,s,n),g=c.resolveNamedOptions(f,d,p,h);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(Jb(g,l))),g}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(e,i,n))}const c=new kk(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||np(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){np(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!np(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&va(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ue(il,"defaults",{}),ue(il,"datasetElementType",null),ue(il,"dataElementType",null);class Nu extends il{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=kV(n,s,o);this._drawStart=a,this._drawCount=l,SV(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:g}=this.options,m=Ul(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",y=n+i,w=e.length;let b=n>0&&this.getParsed(n-1);for(let T=0;T<w;++T){const S=e[T],I=_?S:{};if(T<n||T>=y){I.skip=!0;continue}const x=this.getParsed(T),L=rt(x[d]),U=I[f]=o.getPixelForValue(x[f],T),B=I[d]=r||L?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,x,l):x[d],T);I.skip=isNaN(U)||isNaN(B)||L,I.stop=T>0&&Math.abs(x[f]-b[f])>m,g&&(I.parsed=x,I.raw=c.data[T]),h&&(I.options=u||this.resolveDataElementOptions(T,S.active?"active":s)),_||this.updateElement(S,T,I,s),b=x}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ue(Nu,"id","line"),ue(Nu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ue(Nu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function tr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Vy{constructor(e){ue(this,"options");this.options=e||{}}static override(e){Object.assign(Vy.prototype,e)}init(){}formats(){return tr()}parse(){return tr()}format(){return tr()}add(){return tr()}diff(){return tr()}startOf(){return tr()}endOf(){return tr()}}var W$={_date:Vy};function q$(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?wV:_r;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),f=l(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function xc(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:f}=q$(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,c,d)}}}function K$(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function ip(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||xc(t,n,e,function(a,l,c){!s&&!$i(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function G$(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=yV(o,{x:e.x,y:e.y});hk(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return xc(t,n,e,r),s}function Y$(t,e,n,i,s,r){let o=[];const a=K$(n);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const m=a(e,p);m<l?(o=[{element:u,datasetIndex:h,index:f}],l=m):m===l&&o.push({element:u,datasetIndex:h,index:f})}return xc(t,n,e,c),o}function sp(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?G$(t,e,n,s):Y$(t,e,n,i,s,r)}function Zb(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return xc(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var X$={evaluateInteractionItems:xc,modes:{index(t,e,n,i){const s=rr(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?ip(t,s,r,i,o):sp(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=rr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?ip(t,s,r,i,o):sp(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=rr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return ip(t,s,r,i,o)},nearest(t,e,n,i){const s=rr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return sp(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=rr(e,t);return Zb(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=rr(e,t);return Zb(t,s,"y",n.intersect,i)}}};const Ak=["left","top","right","bottom"];function ba(t,e){return t.filter(n=>n.pos===e)}function ew(t,e){return t.filter(n=>Ak.indexOf(n.pos)===-1&&n.box.axis===e)}function wa(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Q$(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function J$(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!Ak.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function Z$(t,e){const n=J$(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function ez(t){const e=Q$(t),n=wa(e.filter(c=>c.box.fullSize),!0),i=wa(ba(e,"left"),!0),s=wa(ba(e,"right")),r=wa(ba(e,"top"),!0),o=wa(ba(e,"bottom")),a=ew(e,"x"),l=ew(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:ba(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function tw(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function Rk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function tz(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!$e(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&Rk(o,r.getPadding());const a=Math.max(0,e.outerWidth-tw(o,t,"left","right")),l=Math.max(0,e.outerHeight-tw(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function nz(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function iz(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Pa(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,iz(a.horizontal,e));const{same:h,other:f}=tz(e,n,a,i);c|=h&&s.length,u=u||f,l.fullSize||s.push(a)}return c&&Pa(s,e,n,i)||u}function hu(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function nw(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,f=c.size||l.height;Vh(c.start)&&(o=c.start),l.fullSize?hu(l,s.left,o,n.outerWidth-s.right-s.left,f):hu(l,e.left+c.placed,o,h,f),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,f=c.size||l.width;Vh(c.start)&&(r=c.start),l.fullSize?hu(l,r,s.top,f,n.outerHeight-s.bottom-s.top):hu(l,r,e.top+c.placed,f,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var $n={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=an(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=ez(t.boxes),l=a.vertical,c=a.horizontal;We(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=l.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);Rk(f,an(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=Z$(l.concat(c),h);Pa(a.fullSize,d,h,p),Pa(l,d,h,p),Pa(c,d,h,p)&&Pa(l,d,h,p),nz(d),nw(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,nw(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},We(a.chartArea,g=>{const m=g.box;Object.assign(m,t.chartArea),m.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class Dk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class sz extends Dk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Lu="$chartjs",rz={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},iw=t=>t===null||t==="";function oz(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Lu]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",iw(s)){const r=zb(t,"width");r!==void 0&&(t.width=r)}if(iw(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=zb(t,"height");r!==void 0&&(t.height=r)}return t}const Ok=y$?{passive:!0}:!1;function az(t,e,n){t.addEventListener(e,n,Ok)}function lz(t,e,n){t.canvas.removeEventListener(e,n,Ok)}function cz(t,e){const n=rz[t.type]||t.type,{x:i,y:s}=rr(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Wh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function uz(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Wh(a.addedNodes,i),o=o&&!Wh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function hz(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Wh(a.removedNodes,i),o=o&&!Wh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Bl=new Map;let sw=0;function Mk(){const t=window.devicePixelRatio;t!==sw&&(sw=t,Bl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function fz(t,e){Bl.size||window.addEventListener("resize",Mk),Bl.set(t,e)}function dz(t){Bl.delete(t),Bl.size||window.removeEventListener("resize",Mk)}function pz(t,e,n){const i=t.canvas,s=i&&By(i);if(!s)return;const r=pk((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),fz(t,r),o}function rp(t,e,n){n&&n.disconnect(),e==="resize"&&dz(t)}function gz(t,e,n){const i=t.canvas,s=pk(r=>{t.ctx!==null&&n(cz(r,t))},t);return az(i,e,s),s}class mz extends Dk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(oz(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Lu])return!1;const i=n[Lu].initial;["height","width"].forEach(r=>{const o=i[r];rt(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Lu],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:uz,detach:hz,resize:pz}[n]||gz;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:rp,detach:rp,resize:rp}[n]||lz)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return _$(e,n,i,s)}isAttached(e){const n=By(e);return!!(n&&n.isConnected)}}function _z(t){return!Tk()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?sz:mz}var yu;let Wr=(yu=class{constructor(){ue(this,"x");ue(this,"y");ue(this,"active",!1);ue(this,"options");ue(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ul(this.x)&&Ul(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ue(yu,"defaults",{}),ue(yu,"defaultRoutes"),yu);function yz(t,e){const n=t.options.ticks,i=vz(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?wz(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Ez(e,c,r,o/s),c;const u=bz(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((l-a)/(o-1)):null;for(fu(e,c,u,rt(d)?0:a-d,a),h=0,f=o-1;h<f;h++)fu(e,c,u,r[h],r[h+1]);return fu(e,c,u,l,rt(d)?e.length:l+d),c}return fu(e,c,u),c}function vz(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function bz(t,e,n){const i=Tz(t),s=e.length/n;if(!i)return Math.max(s,1);const r=mV(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function wz(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Ez(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function fu(t,e,n,i,s){const r=Ae(i,0),o=Math.min(Ae(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function Tz(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const Iz=t=>t==="left"?"right":t==="right"?"left":t,rw=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,ow=(t,e)=>Math.min(e||t,t);function aw(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Cz(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function xz(t,e){We(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function Ea(t){return t.drawTicks?t.tickLength:0}function lw(t,e){if(!t.display)return 0;const n=It(t.font,e),i=an(t.padding);return(dt(t.text)?t.text.length:1)*n.lineHeight+i.height}function kz(t,e){return Xs(t,{scale:e,type:"scale"})}function Sz(t,e,n){return Xs(t,{tick:n,index:e,type:"tick"})}function Az(t,e,n){let i=Dy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=Iz(i)),i}function Rz(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,f,d,p;const g=o-s,m=a-r;if(t.isHorizontal()){if(d=Kt(i,r,a),$e(n)){const _=Object.keys(n)[0],y=n[_];p=u[_].getPixelForValue(y)+g-e}else n==="center"?p=(c.bottom+c.top)/2+g-e:p=rw(t,n,e);f=a-r}else{if($e(n)){const _=Object.keys(n)[0],y=n[_];d=u[_].getPixelForValue(y)-m+e}else n==="center"?d=(c.left+c.right)/2-m+e:d=rw(t,n,e);p=Kt(i,o,s),h=n==="left"?-bn:bn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class qr extends Wr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=In(e,Number.POSITIVE_INFINITY),n=In(n,Number.NEGATIVE_INFINITY),i=In(i,Number.POSITIVE_INFINITY),s=In(s,Number.NEGATIVE_INFINITY),{min:In(e,i),max:In(n,s),minDefined:Nt(e),maxDefined:Nt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:In(n,In(i,n)),max:In(i,In(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ze(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=YV(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?aw(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=yz(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ze(this.options.afterUpdate,[this])}beforeSetDimensions(){Ze(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ze(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Ze(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ze(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Ze(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Ze(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ze(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=ow(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=Vn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),l=this.maxHeight-Ea(e.grid)-n.padding-lw(e.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),o=Ay(Math.min(Math.asin(Vn((u.highest.height+6)/a,-1,1)),Math.asin(Vn(l/c,-1,1))-Math.asin(Vn(f/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Ze(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ze(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=lw(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=Ea(r)+l):(e.height=this.maxHeight,e.width=Ea(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=Ts(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:g*h.width+m*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(c,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;l?c?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ze(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)rt(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=aw(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/ow(n,i));let c=0,u=0,h,f,d,p,g,m,_,y,w,b,T;for(h=0;h<n;h+=l){if(p=e[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},y=g.lineHeight,w=b=0,!rt(p)&&!dt(p))w=zh(s,_.data,_.gc,w,p),b=y;else if(dt(p))for(f=0,d=p.length;f<d;++f)T=p[f],!rt(T)&&!dt(T)&&(w=zh(s,_.data,_.gc,w,T),b+=y);o.push(w),a.push(b),c=Math.max(w,c),u=Math.max(b,u)}xz(r,n);const S=o.indexOf(c),I=a.indexOf(u),x=L=>({width:o[L]||0,height:a[L]||0});return{first:x(0),last:x(n-1),widest:x(S),highest:x(I),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return bV(this._alignToPixels?er(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=Sz(this.getContext(),e,i))}return this.$context||(this.$context=kz(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Ts(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=Ea(r),d=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(ne){return er(i,ne,g)};let y,w,b,T,S,I,x,L,U,B,Y,Ve;if(o==="top")y=_(this.bottom),I=this.bottom-f,L=y-m,B=_(e.top)+m,Ve=e.bottom;else if(o==="bottom")y=_(this.top),B=e.top,Ve=_(e.bottom)-m,I=y+m,L=this.top+f;else if(o==="left")y=_(this.right),S=this.right-f,x=y-m,U=_(e.left)+m,Y=e.right;else if(o==="right")y=_(this.left),U=e.left,Y=_(e.right)-m,S=y+m,x=this.left+f;else if(n==="x"){if(o==="center")y=_((e.top+e.bottom)/2+.5);else if($e(o)){const ne=Object.keys(o)[0],fe=o[ne];y=_(this.chart.scales[ne].getPixelForValue(fe))}B=e.top,Ve=e.bottom,I=y+m,L=I+f}else if(n==="y"){if(o==="center")y=_((e.left+e.right)/2);else if($e(o)){const ne=Object.keys(o)[0],fe=o[ne];y=_(this.chart.scales[ne].getPixelForValue(fe))}S=y-m,x=S-f,U=e.left,Y=e.right}const Ne=Ae(s.ticks.maxTicksLimit,h),ce=Math.max(1,Math.ceil(h/Ne));for(w=0;w<h;w+=ce){const ne=this.getContext(w),fe=r.setContext(ne),Le=a.setContext(ne),jt=fe.lineWidth,hn=fe.color,Wt=Le.dash||[],_t=Le.dashOffset,Nn=fe.tickWidth,oi=fe.tickColor,D=fe.tickBorderDash||[],W=fe.tickBorderDashOffset;b=Cz(this,w,l),b!==void 0&&(T=er(i,b,jt),c?S=x=U=Y=T:I=L=B=Ve=T,d.push({tx1:S,ty1:I,tx2:x,ty2:L,x1:U,y1:B,x2:Y,y2:Ve,width:jt,color:hn,borderDash:Wt,borderDashOffset:_t,tickWidth:Nn,tickColor:oi,tickBorderDash:D,tickBorderDashOffset:W}))}return this._ticksLength=h,this._borderValue=y,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,f=Ea(i.grid),d=f+u,p=h?-u:d,g=-Ts(this.labelRotation),m=[];let _,y,w,b,T,S,I,x,L,U,B,Y,Ve="middle";if(s==="top")S=this.bottom-p,I=this._getXAxisLabelAlignment();else if(s==="bottom")S=this.top+p,I=this._getXAxisLabelAlignment();else if(s==="left"){const ce=this._getYAxisLabelAlignment(f);I=ce.textAlign,T=ce.x}else if(s==="right"){const ce=this._getYAxisLabelAlignment(f);I=ce.textAlign,T=ce.x}else if(n==="x"){if(s==="center")S=(e.top+e.bottom)/2+d;else if($e(s)){const ce=Object.keys(s)[0],ne=s[ce];S=this.chart.scales[ce].getPixelForValue(ne)+d}I=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")T=(e.left+e.right)/2-d;else if($e(s)){const ce=Object.keys(s)[0],ne=s[ce];T=this.chart.scales[ce].getPixelForValue(ne)}I=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?Ve="top":l==="end"&&(Ve="bottom"));const Ne=this._getLabelSizes();for(_=0,y=a.length;_<y;++_){w=a[_],b=w.label;const ce=r.setContext(this.getContext(_));x=this.getPixelForTick(_)+r.labelOffset,L=this._resolveTickFontOptions(_),U=L.lineHeight,B=dt(b)?b.length:1;const ne=B/2,fe=ce.color,Le=ce.textStrokeColor,jt=ce.textStrokeWidth;let hn=I;o?(T=x,I==="inner"&&(_===y-1?hn=this.options.reverse?"left":"right":_===0?hn=this.options.reverse?"right":"left":hn="center"),s==="top"?c==="near"||g!==0?Y=-B*U+U/2:c==="center"?Y=-Ne.highest.height/2-ne*U+U:Y=-Ne.highest.height+U/2:c==="near"||g!==0?Y=U/2:c==="center"?Y=Ne.highest.height/2-ne*U:Y=Ne.highest.height-B*U,h&&(Y*=-1),g!==0&&!ce.showLabelBackdrop&&(T+=U/2*Math.sin(g))):(S=x,Y=(1-B)*U/2);let Wt;if(ce.showLabelBackdrop){const _t=an(ce.backdropPadding),Nn=Ne.heights[_],oi=Ne.widths[_];let D=Y-_t.top,W=0-_t.left;switch(Ve){case"middle":D-=Nn/2;break;case"bottom":D-=Nn;break}switch(I){case"center":W-=oi/2;break;case"right":W-=oi;break}Wt={left:W,top:D,width:oi+_t.width,height:Nn+_t.height,color:ce.backdropColor}}m.push({label:b,font:L,textOffset:Y,options:{rotation:g,color:fe,strokeColor:Le,strokeWidth:jt,textAlign:hn,textBaseline:Ve,translation:[T,S],backdrop:Wt}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Ts(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=er(e,this.left,o)-o/2,u=er(e,this.right,a)+a/2,h=f=l):(h=er(e,this.top,o)-o/2,f=er(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Py(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Nr(i,c,0,u,l,a)}s&&Ny(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=It(i.font),o=an(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||$e(n)?(l+=o.bottom,dt(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=Rz(this,l,n,a);Nr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:Az(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Ae(e.grid&&e.grid.z,-1),s=Ae(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==qr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return It(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class du{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;Mz(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,Dz(e,o,i),this.override&&gt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in gt[s]&&(delete gt[s][i],this.override&&delete Pr[i])}}function Dz(t,e,n){const i=Fl(Object.create(null),[n?gt.get(n):{},gt.get(e),t.defaults]);gt.set(e,i),t.defaultRoutes&&Oz(e,t.defaultRoutes),t.descriptors&&gt.describe(e,t.descriptors)}function Oz(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");gt.route(r,s,l,a)})}function Mz(t){return"id"in t&&"defaults"in t}class Pz{constructor(){this.controllers=new du(il,"datasets",!0),this.elements=new du(Wr,"elements"),this.plugins=new du(Object,"plugins"),this.scales=new du(qr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):We(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=Sy(e);Ze(i["before"+s],[],i),n[e](i),Ze(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var ui=new Pz;class Nz{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Ze(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){rt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=Ae(i.options&&i.options.plugins,{}),r=Lz(i);return s===!1&&!n?[]:Uz(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function Lz(t){const e={},n=[],i=Object.keys(ui.plugins.items);for(let r=0;r<i.length;r++)n.push(ui.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Fz(t,e){return!e&&t===!1?null:t===!0?{}:t}function Uz(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=Fz(i[l],s);c!==null&&r.push({plugin:a,options:Bz(t.config,{plugin:a,local:n[l]},c,o)})}return r}function Bz(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Bg(t,e){const n=gt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function Vz(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function $z(t,e){return t===e?"_index_":"_value_"}function cw(t){if(t==="x"||t==="y"||t==="r")return t}function zz(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Vg(t,...e){if(cw(t))return t;for(const n of e){const i=n.axis||zz(n.position)||t.length>1&&cw(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function uw(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function Hz(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return uw(t,"x",n[0])||uw(t,"y",n[0])}return{}}function jz(t,e){const n=Pr[t.type]||{scales:{}},i=e.scales||{},s=Bg(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!$e(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Vg(o,a,Hz(o,t),gt.scales[a.type]),c=$z(l,s),u=n.scales||{};r[o]=Za(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Bg(a,e),u=(Pr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=Vz(h,l),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),Za(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Za(a,[gt.scales[a.type],gt.scale])}),r}function Pk(t){const e=t.options||(t.options={});e.plugins=Ae(e.plugins,{}),e.scales=jz(t,e)}function Nk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Wz(t){return t=t||{},t.data=Nk(t.data),Pk(t),t}const hw=new Map,Lk=new Set;function pu(t,e){let n=hw.get(t);return n||(n=e(),hw.set(t,n),Lk.add(n)),n}const Ta=(t,e,n)=>{const i=Bh(e,n);i!==void 0&&t.add(i)};class qz{constructor(e){this._config=Wz(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Nk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Pk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return pu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return pu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return pu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return pu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>Ta(l,e,h))),u.forEach(h=>Ta(l,s,h)),u.forEach(h=>Ta(l,Pr[r]||{},h)),u.forEach(h=>Ta(l,gt,h)),u.forEach(h=>Ta(l,Fg,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Lk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Pr[n]||{},gt.datasets[n]||{},{type:n},gt,Fg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=fw(this._resolverCache,e,s);let l=o;if(Gz(o,n)){r.$shared=!1,i=js(i)?i():i;const c=this.createResolver(e,i,a);l=jo(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=fw(this._resolverCache,e,i);return $e(n)?jo(r,n,void 0,s):r}}function fw(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Ly(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const Kz=t=>$e(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||js(t[n]),!1);function Gz(t,e){const{isScriptable:n,isIndexable:i}=yk(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(js(a)||Kz(a))||o&&dt(a))return!0}return!1}var Yz="4.3.0";const Xz=["top","bottom","left","right","chartArea"];function dw(t,e){return t==="top"||t==="bottom"||Xz.indexOf(t)===-1&&e==="x"}function pw(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function gw(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Ze(n&&n.onComplete,[t],e)}function Qz(t){const e=t.chart,n=e.options.animation;Ze(n&&n.onProgress,[t],e)}function Fk(t){return Tk()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Fu={},mw=t=>{const e=Fk(t);return Object.values(Fu).filter(n=>n.canvas===e).pop()};function Jz(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function Zz(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function eH(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var hs;let od=(hs=class{static register(...e){ui.add(...e),_w()}static unregister(...e){ui.remove(...e),_w()}constructor(e,n){const i=this.config=new qz(n),s=Fk(e),r=mw(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||_z(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=aV(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Nz,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=CV(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Fu[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ri.listen(this,"complete",gw),Ri.listen(this,"progress",Qz),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return rt(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ui}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():$b(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ub(this.canvas,this.ctx),this}stop(){return Ri.stop(this),this}resize(e,n){Ri.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,$b(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Ze(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};We(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Vg(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),We(r,o=>{const a=o.options,l=a.id,c=Vg(l,a),u=Ae(a.type,o.dtype);(a.position===void 0||dw(a.position,c)!==dw(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const f=ui.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),We(s,(o,a)=>{o||delete i[a]}),We(i,o=>{$n.configure(this,o,o.options),$n.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(pw("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Bg(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=ui.getController(a),{datasetElementType:c,dataElementType:u}=gt.datasets[a];Object.assign(l,{dataElementType:ui.getElement(u),datasetElementType:c&&ui.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){We(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||We(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(pw("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){We(this.scales,e=>{$n.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!Ab(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;Jz(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!Ab(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;$n.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],We(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,js(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ri.has(this)?this.attached&&!Ri.running(this)&&Ri.start(this):(this.draw(),gw({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=eH(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&Py(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&Ny(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return $i(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=X$.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Xs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Vh(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ri.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Ub(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Fu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};We(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){We(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},We(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Fh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=dV(e),c=Zz(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Ze(r.onHover,[e,a,this],this),l&&Ze(r.onClick,[e,a,this],this));const u=!Fh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ue(hs,"defaults",gt),ue(hs,"instances",Fu),ue(hs,"overrides",Pr),ue(hs,"registry",ui),ue(hs,"version",Yz),ue(hs,"getChart",mw),hs);function _w(){return We(od.instances,t=>t._plugins.invalidate())}function Uk(t,e,n=e){t.lineCap=Ae(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Ae(n.borderDash,e.borderDash)),t.lineDashOffset=Ae(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Ae(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Ae(n.borderWidth,e.borderWidth),t.strokeStyle=Ae(n.borderColor,e.borderColor)}function tH(t,e,n){t.lineTo(n.x,n.y)}function nH(t){return t.stepped?BV:t.tension||t.cubicInterpolationMode==="monotone"?VV:tH}function Bk(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function iH(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Bk(s,n,i),u=nH(r);let{move:h=!0,reverse:f}=i||{},d,p,g;for(d=0;d<=c;++d)p=s[(a+(f?c-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,g,p,f,r.stepped),g=p);return l&&(p=s[(a+(f?c:0))%o],u(t,g,p,f,r.stepped)),!!l}function sH(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Bk(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,f,d,p,g,m,_;const y=b=>(o+(c?a-b:b))%r,w=()=>{g!==m&&(t.lineTo(u,m),t.lineTo(u,g),t.lineTo(u,_))};for(l&&(d=s[y(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[y(f)],d.skip)continue;const b=d.x,T=d.y,S=b|0;S===p?(T<g?g=T:T>m&&(m=T),u=(h*u+b)/++h):(w(),t.lineTo(b,T),p=S,h=0,g=m=T),_=T}w()}function $g(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?sH:iH}function rH(t){return t.stepped?v$:t.tension||t.cubicInterpolationMode==="monotone"?b$:or}function oH(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Uk(t,e.options),t.stroke(s)}function aH(t,e,n,i){const{segments:s,options:r}=e,o=$g(e);for(const a of s)Uk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const lH=typeof Path2D=="function";function cH(t,e,n,i){lH&&!e.options.segment?oH(t,e,n,i):aH(t,e,n,i)}class Na extends Wr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;h$(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=S$(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=C$(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=rH(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:f}=o[c],d=r[h],p=r[f];if(d===p){a.push(d);continue}const g=Math.abs((s-d[n])/(p[n]-d[n])),m=l(d,p,g,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return $g(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=$g(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),cH(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ue(Na,"id","line"),ue(Na,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ue(Na,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ue(Na,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function yw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Uu extends Wr{constructor(n){super();ue(this,"parsed");ue(this,"skip");ue(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return yw(this,n,"x",i)}inYRange(n,i){return yw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!$i(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Ug(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ue(Uu,"id","point"),ue(Uu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ue(Uu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const vw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},uH=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class bw extends Wr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Ze(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=It(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=vw(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||c[c.length-1]+m+2*a>o)&&(h+=u,c[c.length-(g>0?0:1)]=0,d+=u,f++),l[g]={left:0,top:d,row:f,width:m,height:s},c[c.length-1]+=m+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:y,itemHeight:w}=hH(i,n,r,m,s);_>0&&d+w+2*a>u&&(h+=f+a,c.push({width:f,height:d}),p+=f+a,g++,f=d=0),l[_]={left:p,top:d,col:g,width:y,height:w},f=Math.max(f,y),d+=w+a}),h+=f,c.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=Eo(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Kt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Kt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Kt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Kt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Py(e,this),this._draw(),Ny(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=gt.color,l=Eo(e.rtl,this.left,this.width),c=It(o.font),{padding:u}=o,h=c.size,f=h/2;let d;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=vw(o,h),_=function(S,I,x){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const L=Ae(x.lineWidth,1);if(s.fillStyle=Ae(x.fillStyle,a),s.lineCap=Ae(x.lineCap,"butt"),s.lineDashOffset=Ae(x.lineDashOffset,0),s.lineJoin=Ae(x.lineJoin,"miter"),s.lineWidth=L,s.strokeStyle=Ae(x.strokeStyle,a),s.setLineDash(Ae(x.lineDash,[])),o.usePointStyle){const U={radius:g*Math.SQRT2/2,pointStyle:x.pointStyle,rotation:x.rotation,borderWidth:L},B=l.xPlus(S,p/2),Y=I+f;mk(s,U,B,Y,o.pointStyleWidth&&p)}else{const U=I+Math.max((h-g)/2,0),B=l.leftForLtr(S,p),Y=wo(x.borderRadius);s.beginPath(),Object.values(Y).some(Ve=>Ve!==0)?Hh(s,{x:B,y:U,w:p,h:g,radius:Y}):s.rect(B,U,p,g),s.fill(),L!==0&&s.stroke()}s.restore()},y=function(S,I,x){Nr(s,x.text,S,I+m/2,c,{strikethrough:x.hidden,textAlign:l.textAlign(x.textAlign)})},w=this.isHorizontal(),b=this._computeTitleHeight();w?d={x:Kt(r,this.left+u,this.right-i[0]),y:this.top+u+b,line:0}:d={x:this.left+u,y:Kt(r,this.top+b+u,this.bottom-n[0].height),line:0},Ik(this.ctx,e.textDirection);const T=m+u;this.legendItems.forEach((S,I)=>{s.strokeStyle=S.fontColor,s.fillStyle=S.fontColor;const x=s.measureText(S.text).width,L=l.textAlign(S.textAlign||(S.textAlign=o.textAlign)),U=p+f+x;let B=d.x,Y=d.y;l.setWidth(this.width),w?I>0&&B+U+u>this.right&&(Y=d.y+=T,d.line++,B=d.x=Kt(r,this.left+u,this.right-i[d.line])):I>0&&Y+T>this.bottom&&(B=d.x=B+n[d.line].width+u,d.line++,Y=d.y=Kt(r,this.top+b+u,this.bottom-n[d.line].height));const Ve=l.x(B);if(_(Ve,Y,S),B=xV(L,B+p+f,w?B+U:this.right,e.rtl),y(l.x(B),Y,S),w)d.x+=U+u;else if(typeof S.text!="string"){const Ne=c.lineHeight;d.y+=Vk(S,Ne)}else d.y+=T}),Ck(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=It(n.font),s=an(n.padding);if(!n.display)return;const r=Eo(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=Kt(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=c+Kt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=Kt(a,h,h+f);o.textAlign=r.textAlign(Dy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Nr(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=It(e.font),i=an(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Ma(e,this.left,this.right)&&Ma(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Ma(e,s.left,s.left+s.width)&&Ma(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!pH(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=uH(s,i);s&&!r&&Ze(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Ze(n.onHover,[e,i,this],this)}else i&&Ze(n.onClick,[e,i,this],this)}}function hH(t,e,n,i,s){const r=fH(i,t,e,n),o=dH(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function fH(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function dH(t,e,n){let i=t;return typeof e.text!="string"&&(i=Vk(e,n)),i}function Vk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function pH(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var gH={id:"legend",_element:bw,start(t,e,n){const i=t.legend=new bw({ctx:t.ctx,options:n,chart:t});$n.configure(t,i,n),$n.addBox(t,i)},stop(t){$n.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;$n.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=an(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class $k extends Wr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=dt(i.text)?i.text.length:1;this._padding=an(i.padding);const r=s*It(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=Kt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=Kt(a,s,n),l=St*-.5):(u=r-e,h=Kt(a,n,s),l=St*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=It(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Nr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:Dy(n.align),textBaseline:"middle",translation:[o,a]})}}function mH(t,e){const n=new $k({ctx:t.ctx,options:e,chart:t});$n.configure(t,n,e),$n.addBox(t,n),t.titleBlock=n}var _H={id:"title",_element:$k,start(t,e,n){mH(t,n)},stop(t){const e=t.titleBlock;$n.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;$n.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const La={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Lg(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function ci(t,e){return e&&(dt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Di(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function yH(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function ww(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=It(e.bodyFont),c=It(e.titleFont),u=It(e.footerFont),h=r.length,f=s.length,d=i.length,p=an(e.padding);let g=p.height,m=0,_=i.reduce((b,T)=>b+T.before.length+T.lines.length+T.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const b=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=d*b+(_-d)*l.lineHeight+(_-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let y=0;const w=function(b){m=Math.max(m,n.measureText(b).width+y)};return n.save(),n.font=c.string,We(t.title,w),n.font=l.string,We(t.beforeBody.concat(t.afterBody),w),y=e.displayColors?o+2+e.boxPadding:0,We(i,b=>{We(b.before,w),We(b.lines,w),We(b.after,w)}),y=0,n.font=u.string,We(t.footer,w),n.restore(),m+=p.width,{width:m,height:g}}function vH(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function bH(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function wH(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),bH(c,t,e,n)&&(c="center"),c}function Ew(t,e,n){const i=n.yAlign||e.yAlign||vH(t,n);return{xAlign:n.xAlign||e.xAlign||wH(t,e,n,i),yAlign:i}}function EH(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function TH(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function Tw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=wo(o);let p=EH(e,a);const g=TH(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:Vn(p,0,i.width-e.width),y:Vn(g,0,i.height-e.height)}}function gu(t,e,n){const i=an(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Iw(t){return ci([],Di(t))}function IH(t,e,n){return Xs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Cw(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const zk={beforeTitle:Ai,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ai,beforeBody:Ai,beforeLabel:Ai,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return rt(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ai,afterBody:Ai,beforeFooter:Ai,footer:Ai,afterFooter:Ai};function fn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?zk[e].call(n,i):s}class zg extends Wr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new kk(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=IH(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=fn(i,"beforeTitle",this,e),r=fn(i,"title",this,e),o=fn(i,"afterTitle",this,e);let a=[];return a=ci(a,Di(s)),a=ci(a,Di(r)),a=ci(a,Di(o)),a}getBeforeBody(e,n){return Iw(fn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return We(e,r=>{const o={before:[],lines:[],after:[]},a=Cw(i,r);ci(o.before,Di(fn(a,"beforeLabel",this,r))),ci(o.lines,fn(a,"label",this,r)),ci(o.after,Di(fn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return Iw(fn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=fn(i,"beforeFooter",this,e),r=fn(i,"footer",this,e),o=fn(i,"afterFooter",this,e);let a=[];return a=ci(a,Di(s)),a=ci(a,Di(r)),a=ci(a,Di(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(yH(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),We(a,u=>{const h=Cw(e.callbacks,u);s.push(fn(h,"labelColor",this,u)),r.push(fn(h,"labelPointStyle",this,u)),o.push(fn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=La[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=ww(this,i),c=Object.assign({},a,l),u=Ew(this.chart,i,c),h=Tw(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=wo(a),{x:f,y:d}=e,{width:p,height:g}=n;let m,_,y,w,b,T;return r==="center"?(b=d+g/2,s==="left"?(m=f,_=m-o,w=b+o,T=b-o):(m=f+p,_=m+o,w=b-o,T=b+o),y=m):(s==="left"?_=f+Math.max(l,u)+o:s==="right"?_=f+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(w=d,b=w-o,m=_-o,y=_+o):(w=d+g,b=w+o,m=_+o,y=_-o),T=w),{x1:m,x2:_,x3:y,y1:w,y2:b,y3:T}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=Eo(i.rtl,this.x,this.width);for(e.x=gu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=It(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=It(r.bodyFont),h=gu(this,"left",r),f=s.x(h),d=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+d;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(f,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Ug(e,g,m,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Ug(e,g,m,_)}else{e.lineWidth=$e(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(f,c),m=s.leftForLtr(s.xPlus(f,1),c-2),_=wo(o.borderRadius);Object.values(_).some(y=>y!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Hh(e,{x:g,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Hh(e,{x:m,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,p,c,l),e.strokeRect(g,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(m,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=It(i.bodyFont);let f=h.lineHeight,d=0;const p=Eo(i.rtl,this.x,this.width),g=function(x){n.fillText(x,p.x(e.x+d),e.y+f/2),e.y+=f+r},m=p.textAlign(o);let _,y,w,b,T,S,I;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=gu(this,m,i),n.fillStyle=i.bodyColor,We(this.beforeBody,g),d=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,b=0,S=s.length;b<S;++b){for(_=s[b],y=this.labelTextColors[b],n.fillStyle=y,We(_.before,g),w=_.lines,a&&w.length&&(this._drawColorBox(n,e,b,p,i),f=Math.max(h.lineHeight,l)),T=0,I=w.length;T<I;++T)g(w[T]),f=h.lineHeight;We(_.after,g)}d=0,f=h.lineHeight,We(this.afterBody,g),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=Eo(i.rtl,this.x,this.width);for(e.x=gu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=It(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=wo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,l+u),n.quadraticCurveTo(a,l+u,a,l+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=La[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=ww(this,e),l=Object.assign({},o,this._size),c=Ew(n,e,l),u=Tw(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=an(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),Ik(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),Ck(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Fh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Fh(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=La[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ue(zg,"positioners",La);var CH={id:"tooltip",_element:zg,positioners:La,afterInit(t,e,n){n&&(t.tooltip=new zg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:zk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const xH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function kH(t,e,n,i){const s=t.indexOf(e);if(s===-1)return xH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const SH=(t,e)=>t===null?null:Vn(Math.round(t),0,e);function xw(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Hg extends qr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(rt(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:kH(i,e,Ae(n,e),this._addedLabels),SH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return xw.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ue(Hg,"id","category"),ue(Hg,"defaults",{ticks:{callback:xw}});function AH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:g,max:m}=e,_=!rt(o),y=!rt(a),w=!rt(c),b=(m-g)/(h+1);let T=Db((m-g)/p/d)*d,S,I,x,L;if(T<1e-14&&!_&&!y)return[{value:g},{value:m}];L=Math.ceil(m/T)-Math.floor(g/T),L>p&&(T=Db(L*T/p/d)*d),rt(l)||(S=Math.pow(10,l),T=Math.ceil(T*S)/S),s==="ticks"?(I=Math.floor(g/T)*T,x=Math.ceil(m/T)*T):(I=g,x=m),_&&y&&r&&_V((a-o)/r,T/1e3)?(L=Math.round(Math.min((a-o)/T,u)),T=(a-o)/L,I=o,x=a):w?(I=_?o:I,x=y?a:x,L=c-1,T=(x-I)/L):(L=(x-I)/T,el(L,Math.round(L),T/1e3)?L=Math.round(L):L=Math.ceil(L));const U=Math.max(Ob(T),Ob(I));S=Math.pow(10,rt(l)?U:l),I=Math.round(I*S)/S,x=Math.round(x*S)/S;let B=0;for(_&&(f&&I!==o?(n.push({value:o}),I<o&&B++,el(Math.round((I+B*T)*S)/S,o,kw(o,b,t))&&B++):I<o&&B++);B<L;++B){const Y=Math.round((I+B*T)*S)/S;if(y&&Y>a)break;n.push({value:Y})}return y&&f&&x!==a?n.length&&el(n[n.length-1].value,a,kw(a,b,t))?n[n.length-1].value=a:n.push({value:a}):(!y||x===a)&&n.push({value:x}),n}function kw(t,e,{horizontal:n,minRotation:i}){const s=Ts(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class qh extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return rt(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=Ho(s),c=Ho(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=AH(s,r);return e.bounds==="ticks"&&uk(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return My(e,this.chart.options.locale,this.options.ticks.format)}}class jg extends qh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Nt(e)?e:0,this.max=Nt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Ts(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ue(jg,"id","linear"),ue(jg,"defaults",{ticks:{callback:sd.formatters.numeric}});const Vl=t=>Math.floor(Es(t)),nr=(t,e)=>Math.pow(10,Vl(t)+e);function Sw(t){return t/Math.pow(10,Vl(t))===1}function Aw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function RH(t,e){const n=e-t;let i=Vl(n);for(;Aw(t,e,i)>10;)i++;for(;Aw(t,e,i)<10;)i--;return Math.min(i,Vl(t))}function DH(t,{min:e,max:n}){e=In(t.min,e);const i=[],s=Vl(e);let r=RH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),f=In(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:Sw(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((l+u+h*Math.pow(10,r))*o)/o;const d=In(t.max,f);return i.push({value:d,major:Sw(d),significand:h}),i}class Rw extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=qh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Nt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Nt(e)?Math.max(0,e):null,this.max=Nt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Nt(this._userMin)&&(this.min=e===nr(this.min,0)?nr(this.min,-1):nr(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(nr(i,-1)),o(nr(s,1)))),i<=0&&r(nr(s,-1)),s<=0&&o(nr(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=DH(n,this);return e.bounds==="ticks"&&uk(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":My(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Es(e),this._valueRange=Es(this.max)-Es(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Es(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ue(Rw,"id","logarithmic"),ue(Rw,"defaults",{ticks:{callback:sd.formatters.logarithmic,major:{enabled:!0}}});function Wg(t){const e=t.ticks;if(e.display&&t.display){const n=an(e.backdropPadding);return Ae(e.font&&e.font.size,gt.font.size)+n.height}return 0}function OH(t,e,n){return n=dt(n)?n:[n],{w:UV(t,e.string,n),h:n.length*e.lineHeight}}function Dw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function MH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?St/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=It(c.font),f=OH(t.ctx,h,t._pointLabels[l]);i[l]=f;const d=Wn(t.getIndexAngle(l)+a),p=Math.round(Ay(d)),g=Dw(p,u.x,f.w,0,180),m=Dw(p,u.y,f.h,90,270);PH(n,e,d,g,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=FH(t,i,s)}function PH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function NH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(Ay(Wn(l.angle+bn))),u=VH(l.y,a.h,c),h=UH(c),f=BH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function LH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!($i({x:n,y:i},e)||$i({x:n,y:r},e)||$i({x:s,y:i},e)||$i({x:s,y:r},e))}function FH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Wg(r)/2,additionalAngle:o?St/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=NH(t,u,l);i.push(h),a==="auto"&&(h.visible=LH(h,c),h.visible&&(c=h))}return i}function UH(t){return t===0||t===180?"center":t<180?"left":"right"}function BH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function VH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function $H(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!rt(a)){const l=wo(e.borderRadius),c=an(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,f=r-i+c.width,d=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Hh(t,{x:u,y:h,w:f,h:d,radius:l}),t.fill()):t.fillRect(u,h,f,d)}}function zH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));$H(n,o,r);const a=It(o.font),{x:l,y:c,textAlign:u}=r;Nr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Hk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,zn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function HH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Hk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function jH(t,e,n){return Xs(t,{label:n,index:e,type:"pointLabel"})}class mu extends qh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=an(Wg(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Nt(e)&&!isNaN(e)?e:0,this.max=Nt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Wg(this.options))}generateTickLabels(e){qh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Ze(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?MH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=zn/(this._pointLabels.length||1),i=this.options.startAngle||0;return Wn(e*n+Ts(i))}getDistanceFromCenterForValue(e){if(rt(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(rt(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return jH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-bn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Hk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&zH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);HH(this,d,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=It(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=an(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Nr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}ue(mu,"id","radialLinear"),ue(mu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:sd.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ue(mu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ue(mu,"descriptors",{angleLines:{_fallback:"grid"}});const ad={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_n=Object.keys(ad);function WH(t,e){return t-e}function Ow(t,e){if(rt(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Nt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ul(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function Mw(t,e,n,i){const s=_n.length;for(let r=_n.indexOf(t);r<s-1;++r){const o=ad[_n[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return _n[r]}return _n[s-1]}function qH(t,e,n,i,s){for(let r=_n.length-1;r>=_n.indexOf(n);r--){const o=_n[r];if(ad[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return _n[n?_n.indexOf(n):0]}function KH(t){for(let e=_n.indexOf(t)+1,n=_n.length;e<n;++e)if(ad[_n[e]].common)return _n[e]}function Pw(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=Ry(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function GH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function Nw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:GH(t,i,s,n)}class Kh extends qr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new W$._date(e.adapters.date);s.init(n),Za(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Ow(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Nt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Nt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=EV(s,r,o);return this._unit=n.unit||(i.autoSkip?Mw(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):qH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:KH(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),Nw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Vn(n,0,o),i=Vn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Mw(r.minUnit,n,i,this._getLabelCapacity(n)),a=Ae(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ul(l)||l===!0,u={};let h=n,f,d;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)Pw(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&Pw(u,f,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Ze(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],f=i[n],d=c&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=Ts(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,Nw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(Ow(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return IV(e.sort(WH))}}ue(Kh,"id","time"),ue(Kh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function _u(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=_r(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=_r(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class Lw extends Kh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=_u(n,this.min),this._tableRange=_u(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(_u(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return _u(this._table,i*this._tableRange+this._minPos,!0)}}ue(Lw,"id","timeseries"),ue(Lw,"defaults",Kh.defaults);const jk={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},YH={type:{type:String,required:!0},...jk},XH=D2[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Zr(t){return Jh(t)?Ie(t):t}function QH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return Jh(e)?new Proxy(t,{}):t}function JH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Wk(t,e){t.labels=e}function qk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function ZH(t,e){const n={labels:[],datasets:[]};return Wk(n,t.labels),qk(n,t.datasets,e),n}const ej=jl({props:YH,setup(t,e){let{expose:n}=e;const i=at(null),s=Zh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:f}=t,d=ZH(c,f),p=QH(d,c);s.value=new od(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=Ie(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return pm(r),p2(o),xs([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[f,d]=c;const p=Ie(s.value);if(!p)return;let g=!1;if(u){const m=Zr(u),_=Zr(f);m&&m!==_&&(JH(p,m),g=!0)}if(h){const m=Zr(h.labels),_=Zr(d.labels),y=Zr(h.datasets),w=Zr(d.datasets);m!==_&&(Wk(p.config.data,m),g=!0),y&&y!==w&&(qk(p.config.data,y,t.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>ql("canvas",{ref:i})}});function tj(t,e){return od.register(e),jl({props:jk,setup(n,i){let{expose:s}=i;const r=Zh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>ql(ej,XH({ref:o},{type:t,...n}))}})}const nj=tj("line",Nu),ij={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;od.register(Hg,jg,Uu,Na,_H,CH,gH);const n=qi({datasets:e.datasets}),i=qi({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(M(),$t(C(nj),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}},sj={class:"graph"},rj={__name:"StatsScreen",setup(t){const e=jr(),n=qe(()=>e.params.boardUUID||"");let i=Xe(On(ie,"Boards",n.value,"Groups")),s=Xe(On(ie,"Boards",n.value,"Tiles"));const r=Xe(de(ie,"Boards",n.value)),o=qe(()=>{var u;let c=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{c[h.id]=h.points})),c||[]}),a=c=>{let u=[{x:16829424e5,y:0}],h=0;const f=Object.entries(c.collected).sort((d,p)=>d[1].seconds-p[1].seconds);return Object.keys(f).forEach(d=>{h+=o.value[f[d][0]],u.push({y:h,x:new Date(f[d][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},l=qe(()=>{var u;let c=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&c.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),c});return(c,u)=>{var f;const h=Wl("router-link");return M(),$(we,null,[k("div",null,[X(Ic,{destination:{name:"overview",params:{boardUUID:n.value}}},null,8,["destination"]),X(h,{class:"btn",to:{name:"overview",params:{boardUUID:n.value}}},{default:um(()=>[Te(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),k("h1",null,_e((f=C(r))==null?void 0:f.name)+" stats:",1),k("div",sj,[X(ij,{datasets:l.value},null,8,["datasets"])])],64)}}};const ki=t=>(Yo("data-v-826900e5"),t=t(),Xo(),t),oj=ki(()=>k("br",null,null,-1)),aj={class:"tile"},lj=["src"],cj={key:0,class:"sub-tile"},uj=["src"],hj={class:"pen"},fj={class:"pen"},dj={class:"pen"},pj=ki(()=>k("hr",null,null,-1)),gj=ki(()=>k("h3",null,"Background color",-1)),mj=ki(()=>k("hr",null,null,-1)),_j={key:1},yj=["onClick"],vj=["onSubmit"],bj=ki(()=>k("button",{class:"btn"},"Add item",-1)),wj={key:2},Ej=ki(()=>k("option",{disabled:"",value:""},"Please select one",-1)),Tj=ki(()=>k("option",null,"drop",-1)),Ij=ki(()=>k("option",null,"multi-item",-1)),Cj=ki(()=>k("option",null,"null",-1)),xj=ki(()=>k("option",null,"exp",-1)),kj=[Ej,Tj,Ij,Cj,xj],Sj={__name:"editTile",setup(t){const e=rs(),n=h=>{h.target.innerText.trim()!=""?e.selectedTile[h.target.getAttribute("name")]=h.target.getAttribute("name")=="points"?parseInt(h.target.innerText.trim()):h.target.innerText.trim():e.selectedTile[h.target.getAttribute("name")]=h.target.getAttribute("name")=="points"?0:"",bs(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},i=h=>{h.target.value.trim()!=""||[h.target.getAttribute("name")]=="altImg"?e.selectedTile[h.target.getAttribute("name")]=h.target.value.trim():e.selectedTile[h.target.getAttribute("name")]="",Pt(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},s=h=>{document.querySelector(h).focus()},r=h=>{e.selectedTile.items.indexOf(h)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(h),1),Pt(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},o=(h=!1)=>{h&&h.target.blur(),Pt(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{bgColor:e.selectedTile.bgColor})},a=qe((h,f)=>({item:h,count:f})),l=()=>{Pt(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},c=()=>{let h=!0;a.value.item=a.value.item.trim(),u(a.value.item)!==-1&&(e.selectedTile.items[u(a.value.item)].count=a.value.count),u(a.value.item)===-1&&a.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:a.value.item,count:a.value.count})),a.value.item!=""&&h&&bs(de(ie,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile,items:e.selectedTile.items}),a.value.item="",a.value.count=null},u=h=>e.selectedTile.items?e.selectedTile.items.map(function(f){return f.item}).indexOf(h):-1;return(h,f)=>{var p,g,m;const d=Wl("font-awesome-icon");return M(),$("div",null,[Te(" id: "+_e(C(e).selectedTile.id),1),oj,k("div",aj,[k("img",{src:C(e).selectedTile.img,alt:""},null,8,lj),C(e).selectedTile.altImg?(M(),$("div",cj,[k("img",{src:C(e).selectedTile.altImg,alt:""},null,8,uj)])):Re("",!0)]),k("div",null,[Te(" Default img: "),gn(k("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=_=>C(e).selectedTile.img=_),name:"img",id:"addtileimg",onBlur:f[1]||(f[1]=_=>{i(_)}),onKeydown:f[2]||(f[2]=Li(_=>{i(_)},["enter"]))},null,544),[[Fn,C(e).selectedTile.img]])]),Re("",!0),k("h2",{onClick:f[8]||(f[8]=_=>s("#title"))},[k("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:f[6]||(f[6]=Li(Ye(_=>{n(_)},["prevent"]),["enter"])),onBlur:f[7]||(f[7]=Ye(_=>{n(_)},["prevent"])),name:"title",id:"title"},_e(C(e).selectedTile.title),545),k("span",hj,[X(d,{icon:["fas","pen"]})])]),k("p",{onClick:f[11]||(f[11]=_=>s("#points"))},[k("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:f[9]||(f[9]=Li(Ye(_=>{n(_)},["prevent"]),["enter"])),onBlur:f[10]||(f[10]=Ye(_=>{n(_)},["prevent"])),name:"points",id:"points"},_e(C(e).selectedTile.points),545),Te(" point"+_e(C(e).selectedTile.points>1?"s":""),1),k("span",fj,[X(d,{icon:["fas","pen"]})])]),k("p",{onClick:f[13]||(f[13]=_=>s("#description"))},[Te(" description: "),k("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:f[12]||(f[12]=Ye(_=>{n(_)},["prevent"])),name:"description",id:"description"},_e(C(e).selectedTile.description),545),k("span",dj,[X(d,{icon:["fas","pen"]})])]),k("div",null,[pj,gj,gn(k("input",{type:"color","onUpdate:modelValue":f[14]||(f[14]=_=>C(e).selectedTile.bgColor=_),onChange:f[15]||(f[15]=_=>o(h.event)),class:"color-picker"},null,544),[[Fn,C(e).selectedTile.bgColor]]),gn(k("input",{type:"text",onBlur:f[16]||(f[16]=Ye(_=>{o(_)},["prevent"])),onKeydown:f[17]||(f[17]=Li(_=>{o(_)},["enter"])),"onUpdate:modelValue":f[18]||(f[18]=_=>C(e).selectedTile.bgColor=_)},null,544),[[Fn,C(e).selectedTile.bgColor]])]),mj,["any-unique","multi-item"].includes(C(e).selectedTile.type)?(M(),$("ul",_j,[Te(" Eligible items: "),(M(!0),$(we,null,un((p=C(e).selectedTile)==null?void 0:p.items,_=>(M(),$("li",{key:_==null?void 0:_.item},[Te(_e(_.item)+" x"+_e(_.count)+" ",1),k("button",{class:"btn",onClick:Ye(y=>r(_),["prevent"])},"Delete item",8,yj)]))),128)),k("form",{onSubmit:Ye(c,["prevent"])},[Te(" new "),gn(k("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":f[19]||(f[19]=_=>a.value.item=_)},null,512),[[Fn,a.value.item]]),Te(" count: "),gn(k("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":f[20]||(f[20]=_=>a.value.count=_)},null,512),[[Fn,a.value.count]]),bj],40,vj)])):Re("",!0),((g=C(e).selectedTile)==null?void 0:g.hidden)!==void 0?(M(),$("div",wj,[Te(" hidden: "),gn(k("input",{type:"checkbox",class:"toggle","onUpdate:modelValue":f[21]||(f[21]=_=>C(e).selectedTile.hidden=_),ref:"refs.hidden",name:"hidden",id:"addtilehidden",onChange:l},null,544),[[y3,C(e).selectedTile.hidden]])])):Re("",!0),Te(" type: "),((m=C(e).selectedTile)==null?void 0:m.type)!==void 0?gn((M(),$("select",{key:3,"onUpdate:modelValue":f[22]||(f[22]=_=>C(e).selectedTile.type=_),onChange:l},kj,544)),[[v3,C(e).selectedTile.type]]):Re("",!0)])}}},Aj=Mn(Sj,[["__scopeId","data-v-826900e5"]]);const ua=t=>(Yo("data-v-c5a179d1"),t=t(),Xo(),t),Rj={class:"container"},Dj=["onKeydown"],Oj={class:"pen"},Mj={class:"main-section"},Pj={key:0,class:"detail-pane"},Nj={style:{"justify-content":"end",display:"flex"}},Lj={class:"board-settings"},Fj=ua(()=>k("h2",null,"Board Settings",-1)),Uj=ua(()=>k("h3",null,"Rules:",-1)),Bj=ua(()=>k("h3",null,"Moderators:",-1)),Vj={class:"moderators"},$j={class:"UID"},zj=["onClick"],Hj=["onSubmit"],jj=ua(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),Wj=ua(()=>k("h3",null,"Editors:",-1)),qj={class:"Editors"},Kj={class:"UID"},Gj=["onClick"],Yj=["onSubmit"],Xj=ua(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),Qj={key:1},Jj={__name:"EditBoard",async setup(t){var x,L;let e,n;const i=([e,n]=ei(()=>qs()),e=await e,n(),e),s=rs(),r=at(""),o=at(""),a=jr();s.setBoardUUID(a.params.boardUUID),s.setSelectedTile("");const l=s.boardUUID,c=Xe(de(ie,"Users",i.uid)),{data:u}=Xe(On(ie,"Boards",l,"Groups")),{data:h,promise:f}=Xe(de(ie,"Boards",l));[e,n]=ei(()=>f.value),await e,n();const d=(x=h==null?void 0:h.value)==null?void 0:x.moderators,p=(L=h==null?void 0:h.value)==null?void 0:L.editors,g=qe(()=>{var B;let U={};return u&&((B=u==null?void 0:u.value)==null||B.forEach(Y=>{Y.name!="moderator"&&(U[Y.id]={id:Y.id,name:Y.name,member:Y.members,icon:Y.icon,color:Y.color,points:Y.points,flagEnd:Y.flagEnd,collected:Y.collected,verify:Y.verify})})),U||{}}),{data:m}=Xe(On(ie,`Boards/${l}/Tiles`)),_=at(null),y=()=>{_.value.focus()},w=U=>{U.target.blur();let B=U.target.getAttribute("name"),Y=h.value[B];U.target.innerText.trim()!=""?h.value[B]=U.target.innerText:(h.value[B]="<enter text here>",B=="rules"&&(h.value[B]="")),Y!=h.value[B]&&Pt(de(ie,"Boards",l),h.value)},b=U=>{U=U.trim(),d.indexOf(U)!==-1&&(d.splice(d.indexOf(U),1),Pt(de(ie,"Boards",l),{moderators:d}))},T=()=>{r.value=r.value.trim(),d.indexOf(r.value)===-1&&(d.push(r.value),Pt(de(ie,"Boards",l),{moderators:d}))},S=U=>{U=U.trim(),p.indexOf(U)!==-1&&(p.splice(p.indexOf(U),1),Pt(de(ie,"Boards",l),{editors:p}))},I=()=>{o.value=o.value.trim(),p.indexOf(o.value)===-1&&(p.push(o.value),Pt(de(ie,"Boards",l),{editors:p}))};return(U,B)=>{var Y,Ve,Ne,ce;return M(),$("div",Rj,[X(Ic,{destination:{name:"editBoard",params:C(l)}},null,8,["destination"]),C(h)&&C(i)&&(C(i).uid==C(h).ownerID||((Y=C(c))==null?void 0:Y.type)=="admin")||(Ne=(Ve=C(h))==null?void 0:Ve.editors)!=null&&Ne.includes(C(i).uid)?(M(),$(we,{key:0},[k("section",null,[k("h1",{class:"title-wrap",onClick:B[1]||(B[1]=Ye(ne=>y(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:_,contenteditable:"",spellcheck:"false",onKeydown:Li(w,["enter"]),name:"name",onBlur:B[0]||(B[0]=Ye(ne=>{w(ne)},["prevent"]))},_e(C(h).name),41,Dj),k("span",Oj,[X(C(bo),{icon:["fas","pen"]})])])]),k("section",Mj,[(M(),$t(Ey,{boardData:C(h),groupsData:g.value,tilesData:C(m),key:"bingo-board-"+C(s).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),C(s).selectedTile!=""?(M(),$("aside",Pj,[k("div",Nj,[X(ke,{onClick:B[2]||(B[2]=()=>{C(s).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),X(Aj,{tile:C(s).selectedTile},null,8,["tile"])])):Re("",!0)]),k("section",Lj,[Fj,k("div",null,[Uj,k("div",null,[k("p",{class:"rules input",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:B[3]||(B[3]=Ye(ne=>{w(ne)},["prevent"])),onKeydown:B[4]||(B[4]=Li(Ye(()=>{},["prevent"]),["tab"])),name:"rules"},_e((ce=C(h))==null?void 0:ce.rules),33)])]),k("div",null,[Bj,k("div",Vj,[k("ul",null,[(M(!0),$(we,null,un(C(d),ne=>(M(),$("li",{key:ne},[X(C(bo),{icon:["fas","caret-right"]}),k("span",$j,_e(ne),1),k("button",{class:"btn",onClick:Ye(fe=>b(ne),["prevent"])},"remove",8,zj)]))),128)),k("li",null,[k("form",{onSubmit:Ye(T,["prevent"])},[gn(k("input",{type:"text","onUpdate:modelValue":B[5]||(B[5]=ne=>r.value=ne)},null,512),[[Fn,r.value]]),jj],40,Hj)])])])]),k("div",null,[Wj,k("div",qj,[k("ul",null,[(M(!0),$(we,null,un(C(p),ne=>(M(),$("li",{key:ne},[X(C(bo),{icon:["fas","caret-right"]}),k("span",Kj,_e(ne),1),k("button",{class:"btn",onClick:Ye(fe=>S(ne),["prevent"])},"remove",8,Gj)]))),128)),k("li",null,[k("form",{onSubmit:Ye(I,["prevent"])},[gn(k("input",{type:"text","onUpdate:modelValue":B[6]||(B[6]=ne=>o.value=ne)},null,512),[[Fn,o.value]]),Xj],40,Yj)])])])])])],64)):(M(),$("h1",Qj,"Not authenticated"))])}}},Zj=Mn(Jj,[["__scopeId","data-v-c5a179d1"]]),eW=k("h1",null,"Log in",-1),tW={class:"block"},nW={__name:"loginView",setup(t){const e=Zf();return(n,i)=>(M(),$(we,null,[eW,k("div",tW,[k("button",{class:"btn",onClick:i[0]||(i[0]=Ye(s=>C(rk)({name:"userOverview"},C(e)),["prevent"]))}," Log in with Google "),Te(" "+_e(n.users),1)])],64))}};const ha=t=>(Yo("data-v-c0d9f64a"),t=t(),Xo(),t),iW={class:"container"},sW=ha(()=>k("h1",null,"groupview",-1)),rW={key:0,class:"delete-popup"},oW={class:"delete-notification"},aW=ha(()=>k("span",{class:"danger"},"delete",-1)),lW={class:"highlight"},cW=ha(()=>k("br",null,null,-1)),uW=ha(()=>k("span",{class:"danger"},"permanent",-1)),hW=ha(()=>k("br",null,null,-1)),fW=ha(()=>k("span",{class:"danger"},"Delete",-1)),dW={class:"delete-buttons"},pW={key:1},gW=["onKeydown","onBlur"],mW=["onClick"],_W={class:"color-container"},yW=["onUpdate:modelValue","onChange"],vW=["onBlur","onKeydown","onUpdate:modelValue"],bW={class:"members-list"},wW=["onClick"],EW={__name:"groupView",async setup(t){let e,n;const i=jr(),s=([e,n]=ei(()=>qs()),e=await e,n(),e),r=rs();r.setBoardUUID(i.params.boardUUID);const o=Xe(de(ie,"Users",s.uid));r.setSelectedTile("");const{data:a}=Xe(On(ie,"Boards",i.params.boardUUID,"Groups")),l=Xe(de(ie,"Boards",i.params.boardUUID)),c=at(),u=at(""),h=async _=>{await k8(de(ie,"Boards",i.params.boardUUID,"Groups",_.id)).then(()=>{c.value=void 0,u.value=""})},f=(_,y=!1)=>{y&&y.target.blur(),Pt(de(ie,"Boards",i.params.boardUUID,"Groups",_.id),{color:_.color})},d=(_,y)=>{_.target.blur(),_.target.innerText.trim()==""&&(_.target.innerText="<Team Name>"),y.name=_.target.innerText.trim(),Pt(de(ie,"Boards",i.params.boardUUID,"Groups",y.id),{name:y.name})},p=(_,y)=>{Pt(de(ie,"Boards",i.params.boardUUID,"Groups",y.id),{icon:_})},g=async _=>{c.value=_},m=()=>{const _=de(On(ie,"Boards",i.params.boardUUID,"Groups"));bs(de(ie,_.path),{name:"Team name",collected:{},verify:{},icon:"frog",color:"#53FF1b",points:0})};return(_,y)=>{var w,b,T,S;return M(),$("div",iW,[X(Ic,{destination:{name:"groupView"}}),sW,C(l)&&C(s)&&(C(s).uid==C(l).ownerID||((w=C(o))==null?void 0:w.type)=="admin"||(b=C(l).editors)!=null&&b.includes(C(s).uid))?(M(),$(we,{key:0},[((T=c.value)==null?void 0:T.name)!=null?(M(),$("section",rW,[k("p",oW,[Te(" Are you sure you want to "),aW,Te(" the team: "),k("span",lW,_e((S=c.value)==null?void 0:S.name),1),Te("?"),cW,Te(" this is "),uW,Te(" and you will lose all data for that team."),hW,Te(" type the name of the team you want to "),fW,Te(" here to verify ")]),k("div",dW,[k("button",{class:"btn cancel",onClick:y[0]||(y[0]=Ye(()=>{c.value=void 0,u.value=""},["prevent"]))}," Cancel "),gn(k("input",{type:"text",name:"DELETEME","onUpdate:modelValue":y[1]||(y[1]=I=>u.value=I),class:"danger",placeholder:"TEAM NAME"},null,512),[[Fn,u.value]]),k("button",{class:"btn danger",onClick:y[2]||(y[2]=Ye(()=>{u.value==c.value.name&&h(c.value)},["prevent"]))}," DELETE ")])])):Re("",!0),C(a)?(M(),$("section",pW,[(M(!0),$(we,null,un(C(a),I=>(M(),$("div",{class:"group",key:I.name},[k("h2",{name:"name",ref_for:!0,ref:"group.name",contenteditable:"",spellcheck:"false",onKeydown:Li(x=>{d(x,I)},["enter"]),onBlur:Ye(x=>{d(x,I)},["prevent"])},_e(I.name),41,gW),C(a).length!=1?(M(),$("button",{key:0,class:"btn",onClick:Ye(x=>g(I),["prevent"])}," Delete Team - ",8,mW)):Re("",!0),k("div",_W,[gn(k("input",{type:"color","onUpdate:modelValue":x=>I.color=x,onChange:x=>f(I),class:"color-picker"},null,40,yW),[[Fn,I.color]]),gn(k("input",{type:"text",onBlur:Ye(x=>{f(I,x)},["prevent"]),onKeydown:Li(x=>{f(I,x)},["enter"]),"onUpdate:modelValue":x=>I.color=x},null,40,vW),[[Fn,I.color]])]),k("div",{class:"icon-grid",style:Ms({color:I.color})},[X(ke,{onClick:x=>p("rocket",I),groupIcon:I.icon,fasIcon:"rocket"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("spaghetti-monster-flying",I),groupIcon:I.icon,fasIcon:"spaghetti-monster-flying"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("paw",I),groupIcon:I.icon,fasIcon:"paw"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("hippo",I),groupIcon:I.icon,fasIcon:"hippo"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("crow",I),groupIcon:I.icon,fasIcon:"crow"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("frog",I),groupIcon:I.icon,fasIcon:"frog"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("feather-pointed",I),groupIcon:I.icon,fasIcon:"feather-pointed"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("cat",I),groupIcon:I.icon,fasIcon:"cat"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("dove",I),groupIcon:I.icon,fasIcon:"dove"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("spoon",I),groupIcon:I.icon,fasIcon:"spoon"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("ghost",I),groupIcon:I.icon,fasIcon:"ghost"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("heart",I),groupIcon:I.icon,fasIcon:"heart"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("hand-fist",I),groupIcon:I.icon,fasIcon:"hand-fist"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("hat-wizard",I),groupIcon:I.icon,fasIcon:"hat-wizard"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("tree",I),groupIcon:I.icon,fasIcon:"tree"},null,8,["onClick","groupIcon"]),X(ke,{onClick:x=>p("fire",I),groupIcon:I.icon,fasIcon:"fire"},null,8,["onClick","groupIcon"])],4),k("div",bW,[(M(!0),$(we,null,un(I.members,x=>(M(),$("p",{key:x},_e(x),1))),128))])]))),128)),k("button",{class:"btn add-team",onClick:Ye(m,["prevent"])},"Add team +",8,wW)])):Re("",!0)],64)):(M(),$(we,{key:1},[Te("Not Authenticated")],64))])}}},TW=Mn(EW,[["__scopeId","data-v-c0d9f64a"]]),Kk=g9({history:DF(),mode:"hash",routes:[{path:"/",name:"userOverview",props:!0,component:UB},{path:"/login",name:"loginView",component:nW,meta:{}},{path:"/new",name:"newBoard",component:lB},{path:"/e/:boardUUID",name:"editBoard",props:!0,component:Zj},{path:"/g/:boardUUID",name:"groupView",props:!0,component:TW},{path:"/m/:boardUUID",name:"moderator",props:!0,component:XU},{path:"/b/:boardUUID",name:"overview",props:!0,component:$U},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:rj}]});Kk.beforeEach(async(t,e,n)=>{const i=await qs();if(t.name=="overview"){const{data:s,promise:r}=Xe(de(ie,"Boards",t.params.boardUUID));await r.value.then(async o=>{o.settings.public&&n(),i||n({name:"loginView",query:e});const{data:a}=Xe(de(ie,"Users",i.uid));(a==null?void 0:a.type)=="admin"&&n(),(s==null?void 0:s.ownerID)==i.uid&&n()})}!i&&t.name!=="loginView"&&n({name:"loginView"}),n()});var IW={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},CW={prefix:"fas",iconName:"users-rectangle",icon:[640,512,[],"e594","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},xW={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},kW={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},SW={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},AW={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},RW={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},DW={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},OW={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},MW={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},PW={prefix:"fas",iconName:"shapes",icon:[512,512,["triangle-circle-square"],"f61f","M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"]},NW={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},LW={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},FW={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},UW={prefix:"fas",iconName:"eye-low-vision",icon:[640,512,["low-vision"],"f2a8","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]},BW={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},VW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},$W={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},zW={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},HW={prefix:"fas",iconName:"hat-cowboy",icon:[640,512,[],"f8c0","M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"]},jW={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},WW={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},qW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},KW={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},GW={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},YW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},XW={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},QW={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},JW={prefix:"fas",iconName:"users-line",icon:[640,512,[],"e592","M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]},ZW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},eq={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},tq={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},nq={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},iq={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]},sq={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};De.add(LW);De.add(qW);De.add(MW);De.add(WW);De.add(UW);De.add(XW);De.add(NW);De.add(IW);De.add(CW);De.add(RW);De.add(GW);De.add(PW);De.add(JW);De.add(sq);De.add(QW);De.add(SW);De.add(tq);De.add(ZW);De.add(xW);De.add(AW);De.add(nq);De.add(BW);De.add(VW);De.add($W);De.add(eq);De.add(jW);De.add(YW);De.add(kW);De.add(DW);De.add(zW);De.add(iq);De.add(KW);De.add(HW);De.add(OW);De.add(FW);const kc=C3(v9);kc.use(S3());kc.use(fF,{firebaseApp:Cx,modules:[uF()]});kc.use(Kk);kc.component("FontAwesomeIcon",bo);kc.mount("#app");
