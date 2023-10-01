var Wk=Object.defineProperty;var qk=(t,e,n)=>e in t?Wk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ce=(t,e,n)=>(qk(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Wg(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Nr(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=It(i)?Xk(i):Nr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(It(t))return t;if(Ze(t))return t}}const Kk=/;(?![^(]*\))/g,Gk=/:([^]+)/,Yk=/\/\*.*?\*\//gs;function Xk(t){const e={};return t.replace(Yk,"").split(Kk).forEach(n=>{if(n){const i=n.split(Gk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _n(t){let e="";if(It(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const i=_n(t[n]);i&&(e+=i+" ")}else if(Ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jk=Wg(Qk);function Mw(t){return!!t||t===""}function Zk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Hl(t[i],e[i]);return n}function Hl(t,e){if(t===e)return!0;let n=Hy(t),i=Hy(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ol(t),i=ol(e),n||i)return t===e;if(n=le(t),i=le(e),n||i)return n&&i?Zk(t,e):!1;if(n=Ze(t),i=Ze(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Hl(t[o],e[o]))return!1}}return String(t)===String(e)}function qg(t,e){return t.findIndex(n=>Hl(n,e))}const ge=t=>It(t)?t:t==null?"":le(t)||Ze(t)&&(t.toString===Nw||!ye(t.toString))?JSON.stringify(t,Pw,2):String(t),Pw=(t,e)=>e&&e.__v_isRef?Pw(t,e.value):uo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ko(e)?{[`Set(${e.size})`]:[...e.values()]}:Ze(e)&&!le(e)&&!Lw(e)?String(e):e,tt={},co=[],Zn=()=>{},eS=()=>!1,tS=/^on[^a-z]/,Gh=t=>tS.test(t),Kg=t=>t.startsWith("onUpdate:"),un=Object.assign,Gg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nS=Object.prototype.hasOwnProperty,Ue=(t,e)=>nS.call(t,e),le=Array.isArray,uo=t=>jl(t)==="[object Map]",Ko=t=>jl(t)==="[object Set]",Hy=t=>jl(t)==="[object Date]",ye=t=>typeof t=="function",It=t=>typeof t=="string",ol=t=>typeof t=="symbol",Ze=t=>t!==null&&typeof t=="object",Yg=t=>Ze(t)&&ye(t.then)&&ye(t.catch),Nw=Object.prototype.toString,jl=t=>Nw.call(t),iS=t=>jl(t).slice(8,-1),Lw=t=>jl(t)==="[object Object]",Xg=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vu=Wg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sS=/-(\w)/g,bi=Yh(t=>t.replace(sS,(e,n)=>n?n.toUpperCase():"")),rS=/\B([A-Z])/g,Lr=Yh(t=>t.replace(rS,"-$1").toLowerCase()),Xh=Yh(t=>t.charAt(0).toUpperCase()+t.slice(1)),ld=Yh(t=>t?`on${Xh(t)}`:""),al=(t,e)=>!Object.is(t,e),bu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$u=t=>{const e=parseFloat(t);return isNaN(e)?t:e},oS=t=>{const e=It(t)?Number(t):NaN;return isNaN(e)?t:e};let jy;const aS=()=>jy||(jy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let In;class Fw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=In;try{return In=this,e()}finally{In=n}}}on(){In=this}off(){In=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qg(t){return new Fw(t)}function lS(t,e=In){e&&e.active&&e.effects.push(t)}function Jg(){return In}function Uw(t){In&&In.cleanups.push(t)}const Zg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bw=t=>(t.w&Os)>0,$w=t=>(t.n&Os)>0,cS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Os},uS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Bw(s)&&!$w(s)?s.delete(t):e[n++]=s,s.w&=~Os,s.n&=~Os}e.length=n}},Vu=new WeakMap;let Ca=0,Os=1;const rp=30;let qn;const _r=Symbol(""),op=Symbol("");class em{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lS(this,i)}run(){if(!this.active)return this.fn();let e=qn,n=Ts;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qn,qn=this,Ts=!0,Os=1<<++Ca,Ca<=rp?cS(this):Wy(this),this.fn()}finally{Ca<=rp&&uS(this),Os=1<<--Ca,qn=this.parent,Ts=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qn===this?this.deferStop=!0:this.active&&(Wy(this),this.onStop&&this.onStop(),this.active=!1)}}function Wy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ts=!0;const Vw=[];function Go(){Vw.push(Ts),Ts=!1}function Yo(){const t=Vw.pop();Ts=t===void 0?!0:t}function wn(t,e,n){if(Ts&&qn){let i=Vu.get(t);i||Vu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Zg()),zw(s)}}function zw(t,e){let n=!1;Ca<=rp?$w(t)||(t.n|=Os,n=!Bw(t)):n=!t.has(qn),n&&(t.add(qn),qn.deps.push(t))}function ji(t,e,n,i,s,r){const o=Vu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Xg(n)&&a.push(o.get("length")):(a.push(o.get(_r)),uo(t)&&a.push(o.get(op)));break;case"delete":le(t)||(a.push(o.get(_r)),uo(t)&&a.push(o.get(op)));break;case"set":uo(t)&&a.push(o.get(_r));break}if(a.length===1)a[0]&&ap(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ap(Zg(l))}}function ap(t,e){const n=le(t)?t:[...t];for(const i of n)i.computed&&qy(i);for(const i of n)i.computed||qy(i)}function qy(t,e){(t!==qn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function hS(t,e){var n;return(n=Vu.get(t))===null||n===void 0?void 0:n.get(e)}const fS=Wg("__proto__,__v_isRef,__isVue"),Hw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ol)),dS=tm(),pS=tm(!1,!0),gS=tm(!0),Ky=mS();function mS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=xe(this);for(let r=0,o=this.length;r<o;r++)wn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(xe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Go();const i=xe(this)[e].apply(this,n);return Yo(),i}}),t}function _S(t){const e=xe(this);return wn(e,"has",t),e.hasOwnProperty(t)}function tm(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?MS:Gw:e?Kw:qw).get(i))return i;const o=le(i);if(!t){if(o&&Ue(Ky,s))return Reflect.get(Ky,s,r);if(s==="hasOwnProperty")return _S}const a=Reflect.get(i,s,r);return(ol(s)?Hw.has(s):fS(s))||(t||wn(i,"get",s),e)?a:dt(a)?o&&Xg(s)?a:a.value:Ze(a)?t?Yw(a):Wi(a):a}}const yS=jw(),vS=jw(!0);function jw(t=!1){return function(n,i,s,r){let o=n[i];if(Io(o)&&dt(o)&&!dt(s))return!1;if(!t&&(!zu(s)&&!Io(s)&&(o=xe(o),s=xe(s)),!le(n)&&dt(o)&&!dt(s)))return o.value=s,!0;const a=le(n)&&Xg(i)?Number(i)<n.length:Ue(n,i),l=Reflect.set(n,i,s,r);return n===xe(r)&&(a?al(s,o)&&ji(n,"set",i,s):ji(n,"add",i,s)),l}}function bS(t,e){const n=Ue(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&ji(t,"delete",e,void 0),i}function wS(t,e){const n=Reflect.has(t,e);return(!ol(e)||!Hw.has(e))&&wn(t,"has",e),n}function ES(t){return wn(t,"iterate",le(t)?"length":_r),Reflect.ownKeys(t)}const Ww={get:dS,set:yS,deleteProperty:bS,has:wS,ownKeys:ES},TS={get:gS,set(t,e){return!0},deleteProperty(t,e){return!0}},IS=un({},Ww,{get:pS,set:vS}),nm=t=>t,Qh=t=>Reflect.getPrototypeOf(t);function Sc(t,e,n=!1,i=!1){t=t.__v_raw;const s=xe(t),r=xe(e);n||(e!==r&&wn(s,"get",e),wn(s,"get",r));const{has:o}=Qh(s),a=i?nm:n?rm:ll;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ac(t,e=!1){const n=this.__v_raw,i=xe(n),s=xe(t);return e||(t!==s&&wn(i,"has",t),wn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Rc(t,e=!1){return t=t.__v_raw,!e&&wn(xe(t),"iterate",_r),Reflect.get(t,"size",t)}function Gy(t){t=xe(t);const e=xe(this);return Qh(e).has.call(e,t)||(e.add(t),ji(e,"add",t,t)),this}function Yy(t,e){e=xe(e);const n=xe(this),{has:i,get:s}=Qh(n);let r=i.call(n,t);r||(t=xe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?al(e,o)&&ji(n,"set",t,e):ji(n,"add",t,e),this}function Xy(t){const e=xe(this),{has:n,get:i}=Qh(e);let s=n.call(e,t);s||(t=xe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&ji(e,"delete",t,void 0),r}function Qy(){const t=xe(this),e=t.size!==0,n=t.clear();return e&&ji(t,"clear",void 0,void 0),n}function Dc(t,e){return function(i,s){const r=this,o=r.__v_raw,a=xe(o),l=e?nm:t?rm:ll;return!t&&wn(a,"iterate",_r),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Oc(t,e,n){return function(...i){const s=this.__v_raw,r=xe(s),o=uo(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?nm:e?rm:ll;return!e&&wn(r,"iterate",l?op:_r),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function os(t){return function(...e){return t==="delete"?!1:this}}function xS(){const t={get(r){return Sc(this,r)},get size(){return Rc(this)},has:Ac,add:Gy,set:Yy,delete:Xy,clear:Qy,forEach:Dc(!1,!1)},e={get(r){return Sc(this,r,!1,!0)},get size(){return Rc(this)},has:Ac,add:Gy,set:Yy,delete:Xy,clear:Qy,forEach:Dc(!1,!0)},n={get(r){return Sc(this,r,!0)},get size(){return Rc(this,!0)},has(r){return Ac.call(this,r,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Dc(!0,!1)},i={get(r){return Sc(this,r,!0,!0)},get size(){return Rc(this,!0)},has(r){return Ac.call(this,r,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Dc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oc(r,!1,!1),n[r]=Oc(r,!0,!1),e[r]=Oc(r,!1,!0),i[r]=Oc(r,!0,!0)}),[t,n,e,i]}const[CS,kS,SS,AS]=xS();function im(t,e){const n=e?t?AS:SS:t?kS:CS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ue(n,s)&&s in i?n:i,s,r)}const RS={get:im(!1,!1)},DS={get:im(!1,!0)},OS={get:im(!0,!1)},qw=new WeakMap,Kw=new WeakMap,Gw=new WeakMap,MS=new WeakMap;function PS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NS(t){return t.__v_skip||!Object.isExtensible(t)?0:PS(iS(t))}function Wi(t){return Io(t)?t:sm(t,!1,Ww,RS,qw)}function LS(t){return sm(t,!1,IS,DS,Kw)}function Yw(t){return sm(t,!0,TS,OS,Gw)}function sm(t,e,n,i,s){if(!Ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=NS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Vi(t){return Io(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function Io(t){return!!(t&&t.__v_isReadonly)}function zu(t){return!!(t&&t.__v_isShallow)}function Jh(t){return Vi(t)||Io(t)}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function xo(t){return Bu(t,"__v_skip",!0),t}const ll=t=>Ze(t)?Wi(t):t,rm=t=>Ze(t)?Yw(t):t;function Xw(t){Ts&&qn&&(t=xe(t),zw(t.dep||(t.dep=Zg())))}function Qw(t,e){t=xe(t);const n=t.dep;n&&ap(n)}function dt(t){return!!(t&&t.__v_isRef===!0)}function ut(t){return Jw(t,!1)}function Zh(t){return Jw(t,!0)}function Jw(t,e){return dt(t)?t:new FS(t,e)}class FS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:xe(e),this._value=n?e:ll(e)}get value(){return Xw(this),this._value}set value(e){const n=this.__v_isShallow||zu(e)||Io(e);e=n?e:xe(e),al(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ll(e),Qw(this))}}function E(t){return dt(t)?t.value:t}const US={get:(t,e,n)=>E(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return dt(s)&&!dt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Zw(t){return Vi(t)?t:new Proxy(t,US)}function BS(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=e2(t,n);return e}class $S{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hS(xe(this._object),this._key)}}function e2(t,e,n){const i=t[e];return dt(i)?i:new $S(t,e,n)}var t2;class VS{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[t2]=!1,this._dirty=!0,this.effect=new em(e,()=>{this._dirty||(this._dirty=!0,Qw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=xe(this);return Xw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}t2="__v_isReadonly";function zS(t,e,n=!1){let i,s;const r=ye(t);return r?(i=t,s=Zn):(i=t.get,s=t.set),new VS(i,s,r||!s,n)}function Is(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Wl(r,e,n)}return s}function ei(t,e,n,i){if(ye(t)){const r=Is(t,e,n,i);return r&&Yg(r)&&r.catch(o=>{Wl(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(ei(t[r],e,n,i));return s}function Wl(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Is(l,null,10,[t,o,a]);return}}HS(t,n,s,i)}function HS(t,e,n,i=!0){console.error(t)}let cl=!1,lp=!1;const Qt=[];let fi=0;const ho=[];let Oi=null,or=0;const n2=Promise.resolve();let om=null;function am(t){const e=om||n2;return t?e.then(this?t.bind(this):t):e}function jS(t){let e=fi+1,n=Qt.length;for(;e<n;){const i=e+n>>>1;ul(Qt[i])<t?e=i+1:n=i}return e}function lm(t){(!Qt.length||!Qt.includes(t,cl&&t.allowRecurse?fi+1:fi))&&(t.id==null?Qt.push(t):Qt.splice(jS(t.id),0,t),i2())}function i2(){!cl&&!lp&&(lp=!0,om=n2.then(o2))}function WS(t){const e=Qt.indexOf(t);e>fi&&Qt.splice(e,1)}function s2(t){le(t)?ho.push(...t):(!Oi||!Oi.includes(t,t.allowRecurse?or+1:or))&&ho.push(t),i2()}function Jy(t,e=cl?fi+1:0){for(;e<Qt.length;e++){const n=Qt[e];n&&n.pre&&(Qt.splice(e,1),e--,n())}}function r2(t){if(ho.length){const e=[...new Set(ho)];if(ho.length=0,Oi){Oi.push(...e);return}for(Oi=e,Oi.sort((n,i)=>ul(n)-ul(i)),or=0;or<Oi.length;or++)Oi[or]();Oi=null,or=0}}const ul=t=>t.id==null?1/0:t.id,qS=(t,e)=>{const n=ul(t)-ul(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function o2(t){lp=!1,cl=!0,Qt.sort(qS);const e=Zn;try{for(fi=0;fi<Qt.length;fi++){const n=Qt[fi];n&&n.active!==!1&&Is(n,null,14)}}finally{fi=0,Qt.length=0,r2(),cl=!1,om=null,(Qt.length||ho.length)&&o2()}}function KS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||tt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||tt;f&&(s=n.map(d=>It(d)?d.trim():d)),h&&(s=n.map($u))}let a,l=i[a=ld(e)]||i[a=ld(bi(e))];!l&&r&&(l=i[a=ld(Lr(e))]),l&&ei(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ei(c,t,6,s)}}function a2(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ye(t)){const l=c=>{const u=a2(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ze(t)&&i.set(t,null),null):(le(r)?r.forEach(l=>o[l]=null):un(o,r),Ze(t)&&i.set(t,o),o)}function ef(t,e){return!t||!Gh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,Lr(e))||Ue(t,e))}let Cn=null,tf=null;function Hu(t){const e=Cn;return Cn=t,tf=t&&t.type.__scopeId||null,e}function Xo(t){tf=t}function Qo(){tf=null}function cm(t,e=Cn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&lv(-1);const r=Hu(e);let o;try{o=t(...s)}finally{Hu(r),i._d&&lv(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function cd(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let g,_;const y=Hu(t);try{if(n.shapeFlag&4){const T=s||i;g=Wn(u.call(T,T,h,r,d,f,p)),_=l}else{const T=e;g=Wn(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),_=e.props?l:YS(l)}}catch(T){Ba.length=0,Wl(T,t,1),g=Y(qi)}let v=g;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:x}=v;T.length&&x&7&&(o&&T.some(Kg)&&(_=XS(_,o)),v=ko(v,_))}return n.dirs&&(v=ko(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v,Hu(y),g}function GS(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(Wu(i)){if(i.type!==qi||i.children==="v-if"){if(e)return;e=i}}else return}return e}const YS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gh(n))&&((e||(e={}))[n]=t[n]);return e},XS=(t,e)=>{const n={};for(const i in t)(!Kg(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function QS(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zy(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ef(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zy(i,o,c):!0:!!o;return!1}function Zy(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ef(n,r))return!0}return!1}function um({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const JS=t=>t.__isSuspense,ZS={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){t==null?tA(e,n,i,s,r,o,a,l,c):nA(t,e,n,i,s,o,a,l,c)},hydrate:iA,create:hm,normalize:sA},eA=ZS;function hl(t,e){const n=t.props&&t.props[e];ye(n)&&n()}function tA(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=hm(t,s,i,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,i,f,r,o),f.deps>0?(hl(t,"onPending"),hl(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),fo(f,t.ssFallback)):f.resolve()}function nA(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:_}=h;if(m)h.pendingBranch=f,ps(f,m)?(l(m,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():g&&(l(p,d,n,i,s,null,r,o,a),fo(h,d))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=m):c(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),g?(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,i,s,null,r,o,a),fo(h,d))):p&&ps(f,p)?(l(p,f,n,i,s,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&ps(f,p))l(p,f,n,i,s,h,r,o,a),fo(h,f);else if(hl(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:v}=h;y>0?setTimeout(()=>{h.pendingId===v&&h.fallback(d)},y):y===0&&h.fallback(d)}}function hm(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:g}}=c,_=t.props?oS(t.props.timeout):void 0,y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:T,activeBranch:x,pendingBranch:S,pendingId:I,effects:C,parentComponent:B,container:U}=y;if(y.isHydrating)y.isHydrating=!1;else if(!v){const je=x&&S.transition&&S.transition.mode==="out-in";je&&(x.transition.afterLeave=()=>{I===y.pendingId&&f(S,U,$e,0)});let{anchor:$e}=y;x&&($e=p(x),d(x,B,y,!0)),je||f(S,U,$e,0)}fo(y,S),y.pendingBranch=null,y.isInFallback=!1;let $=y.parent,Q=!1;for(;$;){if($.pendingBranch){$.effects.push(...C),Q=!0;break}$=$.parent}Q||s2(C),y.effects=[],hl(T,"onResolve")},fallback(v){if(!y.pendingBranch)return;const{vnode:T,activeBranch:x,parentComponent:S,container:I,isSVG:C}=y;hl(T,"onFallback");const B=p(x),U=()=>{y.isInFallback&&(h(null,v,I,B,S,null,C,a,l),fo(y,v))},$=v.transition&&v.transition.mode==="out-in";$&&(x.transition.afterLeave=U),y.isInFallback=!0,d(x,S,null,!0),$||U()},move(v,T,x){y.activeBranch&&f(y.activeBranch,v,T,x),y.container=v},next(){return y.activeBranch&&p(y.activeBranch)},registerDep(v,T){const x=!!y.pendingBranch;x&&y.deps++;const S=v.vnode.el;v.asyncDep.catch(I=>{Wl(I,v,0)}).then(I=>{if(v.isUnmounted||y.isUnmounted||y.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:C}=v;pp(v,I,!1),S&&(C.el=S);const B=!S&&v.subTree.el;T(v,C,m(S||v.subTree.el),S?null:p(v.subTree),y,o,l),B&&g(B),um(v,C.el),x&&--y.deps===0&&y.resolve()})},unmount(v,T){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,v,T),y.pendingBranch&&d(y.pendingBranch,n,v,T)}};return y}function iA(t,e,n,i,s,r,o,a,l){const c=e.suspense=hm(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function sA(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=ev(i?n.default:n),t.ssFallback=i?ev(n.fallback):Y(qi)}function ev(t){let e;if(ye(t)){const n=Co&&t._c;n&&(t._d=!1,O()),t=t(),n&&(t._d=!0,e=Fn,E2())}return le(t)&&(t=GS(t)),t=Wn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function rA(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):s2(t)}function fo(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,s=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=s,um(i,s))}function wu(t,e){if(yt){let n=yt.provides;const i=yt.parent&&yt.parent.provides;i===n&&(n=yt.provides=Object.create(i)),n[t]=e}}function bn(t,e,n=!1){const i=yt||Cn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(i.proxy):e}}function oA(t,e){return fm(t,null,{flush:"post"})}const Mc={};function xs(t,e,n){return fm(t,e,n)}function fm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=tt){const a=Jg()===(yt==null?void 0:yt.scope)?yt:null;let l,c=!1,u=!1;if(dt(t)?(l=()=>t.value,c=zu(t)):Vi(t)?(l=()=>t,i=!0):le(t)?(u=!0,c=t.some(v=>Vi(v)||zu(v)),l=()=>t.map(v=>{if(dt(v))return v.value;if(Vi(v))return lr(v);if(ye(v))return Is(v,a,2)})):ye(t)?e?l=()=>Is(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ei(t,a,3,[f])}:l=Zn,e&&i){const v=l;l=()=>lr(v())}let h,f=v=>{h=_.onStop=()=>{Is(v,a,4)}},d;if(fl)if(f=Zn,e?n&&ei(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const v=GA();d=v.__watcherHandles||(v.__watcherHandles=[])}else return Zn;let p=u?new Array(t.length).fill(Mc):Mc;const m=()=>{if(_.active)if(e){const v=_.run();(i||c||(u?v.some((T,x)=>al(T,p[x])):al(v,p)))&&(h&&h(),ei(e,a,3,[v,p===Mc?void 0:u&&p[0]===Mc?[]:p,f]),p=v)}else _.run()};m.allowRecurse=!!e;let g;s==="sync"?g=m:s==="post"?g=()=>pn(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),g=()=>lm(m));const _=new em(l,g);e?n?m():p=_.run():s==="post"?pn(_.run.bind(_),a&&a.suspense):_.run();const y=()=>{_.stop(),a&&a.scope&&Gg(a.scope.effects,_)};return d&&d.push(y),y}function aA(t,e,n){const i=this.proxy,s=It(t)?t.includes(".")?l2(i,t):()=>i[t]:t.bind(i,i);let r;ye(e)?r=e:(r=e.handler,n=e);const o=yt;Ms(this);const a=fm(s,r.bind(i),n);return o?Ms(o):Cs(),a}function l2(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function lr(t,e){if(!Ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),dt(t))lr(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)lr(t[n],e);else if(Ko(t)||uo(t))t.forEach(n=>{lr(n,e)});else if(Lw(t))for(const n in t)lr(t[n],e);return t}function Fr(t){return ye(t)?{setup:t,name:t.name}:t}const Eu=t=>!!t.type.__asyncLoader,c2=t=>t.type.__isKeepAlive;function lA(t,e){u2(t,"a",e)}function cA(t,e){u2(t,"da",e)}function u2(t,e,n=yt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(nf(e,i,n),n){let s=n.parent;for(;s&&s.parent;)c2(s.parent.vnode)&&uA(i,e,n,s),s=s.parent}}function uA(t,e,n,i){const s=nf(e,t,i,!0);pm(()=>{Gg(i[e],s)},n)}function nf(t,e,n=yt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Go(),Ms(n);const a=ei(e,n,t,o);return Cs(),Yo(),a});return i?s.unshift(r):s.push(r),r}}const ts=t=>(e,n=yt)=>(!fl||t==="sp")&&nf(t,(...i)=>e(...i),n),hA=ts("bm"),dm=ts("m"),fA=ts("bu"),dA=ts("u"),h2=ts("bum"),pm=ts("um"),f2=ts("sp"),pA=ts("rtg"),gA=ts("rtc");function mA(t,e=yt){nf("ec",t,e)}function xn(t,e){const n=Cn;if(n===null)return t;const i=of(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=tt]=e[r];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&lr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ys(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Go(),ei(l,n,8,[t.el,a,t,e]),Yo())}}const d2="components";function ql(t,e){return yA(d2,t,!0,e)||t}const _A=Symbol();function yA(t,e,n=!0,i=!1){const s=Cn||yt;if(s){const r=s.type;if(t===d2){const a=qA(r,!1);if(a&&(a===e||a===bi(e)||a===Xh(bi(e))))return r}const o=tv(s[t]||r[t],e)||tv(s.appContext[t],e);return!o&&i?r:o}}function tv(t,e){return t&&(t[e]||t[bi(e)]||t[Xh(bi(e))])}function cn(t,e,n,i){let s;const r=n&&n[i];if(le(t)||It(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ze(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const cp=t=>t?x2(t)?of(t)||t.proxy:cp(t.parent):null,Ua=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cp(t.parent),$root:t=>cp(t.root),$emit:t=>t.emit,$options:t=>gm(t),$forceUpdate:t=>t.f||(t.f=()=>lm(t.update)),$nextTick:t=>t.n||(t.n=am.bind(t.proxy)),$watch:t=>aA.bind(t)}),ud=(t,e)=>t!==tt&&!t.__isScriptSetup&&Ue(t,e),vA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ud(i,e))return o[e]=1,i[e];if(s!==tt&&Ue(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ue(c,e))return o[e]=3,r[e];if(n!==tt&&Ue(n,e))return o[e]=4,n[e];up&&(o[e]=0)}}const u=Ua[e];let h,f;if(u)return e==="$attrs"&&wn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==tt&&Ue(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ue(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ud(s,e)?(s[e]=n,!0):i!==tt&&Ue(i,e)?(i[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==tt&&Ue(t,o)||ud(e,o)||(a=r[0])&&Ue(a,o)||Ue(i,o)||Ue(Ua,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let up=!0;function bA(t){const e=gm(t),n=t.proxy,i=t.ctx;up=!1,e.beforeCreate&&nv(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:g,beforeDestroy:_,beforeUnmount:y,destroyed:v,unmounted:T,render:x,renderTracked:S,renderTriggered:I,errorCaptured:C,serverPrefetch:B,expose:U,inheritAttrs:$,components:Q,directives:je,filters:$e}=e;if(c&&wA(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const Le=o[be];ye(Le)&&(i[be]=Le.bind(n))}if(s){const be=s.call(n,n);Ze(be)&&(t.data=Wi(be))}if(up=!0,r)for(const be in r){const Le=r[be],Ht=ye(Le)?Le.bind(n,n):ye(Le.get)?Le.get.bind(n,n):Zn,hn=!ye(Le)&&ye(Le.set)?Le.set.bind(n):Zn,jt=Pe({get:Ht,set:hn});Object.defineProperty(i,be,{enumerable:!0,configurable:!0,get:()=>jt.value,set:_t=>jt.value=_t})}if(a)for(const be in a)p2(a[be],i,n,be);if(l){const be=ye(l)?l.call(n):l;Reflect.ownKeys(be).forEach(Le=>{wu(Le,be[Le])})}u&&nv(u,t,"c");function ne(be,Le){le(Le)?Le.forEach(Ht=>be(Ht.bind(n))):Le&&be(Le.bind(n))}if(ne(hA,h),ne(dm,f),ne(fA,d),ne(dA,p),ne(lA,m),ne(cA,g),ne(mA,C),ne(gA,S),ne(pA,I),ne(h2,y),ne(pm,T),ne(f2,B),le(U))if(U.length){const be=t.exposed||(t.exposed={});U.forEach(Le=>{Object.defineProperty(be,Le,{get:()=>n[Le],set:Ht=>n[Le]=Ht})})}else t.exposed||(t.exposed={});x&&t.render===Zn&&(t.render=x),$!=null&&(t.inheritAttrs=$),Q&&(t.components=Q),je&&(t.directives=je)}function wA(t,e,n=Zn,i=!1){le(t)&&(t=hp(t));for(const s in t){const r=t[s];let o;Ze(r)?"default"in r?o=bn(r.from||s,r.default,!0):o=bn(r.from||s):o=bn(r),dt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function nv(t,e,n){ei(le(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function p2(t,e,n,i){const s=i.includes(".")?l2(n,i):()=>n[i];if(It(t)){const r=e[t];ye(r)&&xs(s,r)}else if(ye(t))xs(s,t.bind(n));else if(Ze(t))if(le(t))t.forEach(r=>p2(r,e,n,i));else{const r=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(r)&&xs(s,r,t)}}function gm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ju(l,c,o,!0)),ju(l,e,o)),Ze(e)&&r.set(e,l),l}function ju(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ju(t,r,n,!0),s&&s.forEach(o=>ju(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=EA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const EA={data:iv,props:tr,emits:tr,methods:tr,computed:tr,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:tr,directives:tr,watch:IA,provide:iv,inject:TA};function iv(t,e){return e?t?function(){return un(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function TA(t,e){return tr(hp(t),hp(e))}function hp(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?un(un(Object.create(null),t),e):e}function IA(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=an(t[i],e[i]);return n}function xA(t,e,n,i=!1){const s={},r={};Bu(r,rf,1),t.propsDefaults=Object.create(null),g2(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:LS(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function CA(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=xe(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ef(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ue(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=bi(f);s[p]=fp(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{g2(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ue(e,h)&&((u=Lr(h))===h||!Ue(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=fp(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ue(e,h))&&(delete r[h],c=!0)}c&&ji(t,"set","$attrs")}function g2(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vu(l))continue;const c=e[l];let u;s&&Ue(s,u=bi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ef(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=xe(n),c=a||tt;for(let u=0;u<r.length;u++){const h=r[u];n[h]=fp(s,l,h,c[h],t,!Ue(c,h))}}return o}function fp(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ue(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ye(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Ms(s),i=c[n]=l.call(null,e),Cs())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}function m2(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ye(t)){const u=h=>{l=!0;const[f,d]=m2(h,e,!0);un(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ze(t)&&i.set(t,co),co;if(le(r))for(let u=0;u<r.length;u++){const h=bi(r[u]);sv(h)&&(o[h]=tt)}else if(r)for(const u in r){const h=bi(u);if(sv(h)){const f=r[u],d=o[h]=le(f)||ye(f)?{type:f}:Object.assign({},f);if(d){const p=av(Boolean,d.type),m=av(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||Ue(d,"default"))&&a.push(h)}}}const c=[o,a];return Ze(t)&&i.set(t,c),c}function sv(t){return t[0]!=="$"}function rv(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ov(t,e){return rv(t)===rv(e)}function av(t,e){return le(e)?e.findIndex(n=>ov(n,t)):ye(e)&&ov(e,t)?0:-1}const _2=t=>t[0]==="_"||t==="$stable",mm=t=>le(t)?t.map(Wn):[Wn(t)],kA=(t,e,n)=>{if(e._n)return e;const i=cm((...s)=>mm(e(...s)),n);return i._c=!1,i},y2=(t,e,n)=>{const i=t._ctx;for(const s in t){if(_2(s))continue;const r=t[s];if(ye(r))e[s]=kA(s,r,i);else if(r!=null){const o=mm(r);e[s]=()=>o}}},v2=(t,e)=>{const n=mm(e);t.slots.default=()=>n},SA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=xe(e),Bu(e,"_",n)):y2(e,t.slots={})}else t.slots={},e&&v2(t,e);Bu(t.slots,rf,1)},AA=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(un(s,e),!n&&a===1&&delete s._):(r=!e.$stable,y2(e,s)),o=e}else e&&(v2(t,e),o={default:1});if(r)for(const a in s)!_2(a)&&!(a in o)&&delete s[a]};function b2(){return{app:null,config:{isNativeTag:eS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function DA(t,e){return function(i,s=null){ye(i)||(i=Object.assign({},i)),s!=null&&!Ze(s)&&(s=null);const r=b2(),o=new Set;let a=!1;const l=r.app={_uid:RA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:S2,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ye(c.install)?(o.add(c),c.install(l,...u)):ye(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Y(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,of(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function dp(t,e,n,i,s=!1){if(le(t)){t.forEach((f,d)=>dp(f,e&&(le(e)?e[d]:e),n,i,s));return}if(Eu(i)&&!s)return;const r=i.shapeFlag&4?of(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(It(c)?(u[c]=null,Ue(h,c)&&(h[c]=null)):dt(c)&&(c.value=null)),ye(l))Is(l,a,12,[o,u]);else{const f=It(l),d=dt(l);if(f||d){const p=()=>{if(t.f){const m=f?Ue(h,l)?h[l]:u[l]:l.value;s?le(m)&&Gg(m,r):le(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Ue(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ue(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,pn(p,n)):p()}}}const pn=rA;function OA(t){return MA(t)}function MA(t,e){const n=aS();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Zn,insertStaticContent:p}=t,m=(b,w,A,R=null,P=null,z=null,K=!1,V=null,H=!!w.dynamicChildren)=>{if(b===w)return;b&&!ps(b,w)&&(R=q(b),_t(b,P,z,!0),b=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:N,ref:oe,shapeFlag:J}=w;switch(N){case sf:g(b,w,A,R);break;case qi:_(b,w,A,R);break;case Tu:b==null&&y(w,A,R,K);break;case Ee:Q(b,w,A,R,P,z,K,V,H);break;default:J&1?x(b,w,A,R,P,z,K,V,H):J&6?je(b,w,A,R,P,z,K,V,H):(J&64||J&128)&&N.process(b,w,A,R,P,z,K,V,H,Fe)}oe!=null&&P&&dp(oe,b&&b.ref,z,w||b,!w)},g=(b,w,A,R)=>{if(b==null)i(w.el=a(w.children),A,R);else{const P=w.el=b.el;w.children!==b.children&&c(P,w.children)}},_=(b,w,A,R)=>{b==null?i(w.el=l(w.children||""),A,R):w.el=b.el},y=(b,w,A,R)=>{[b.el,b.anchor]=p(b.children,w,A,R,b.el,b.anchor)},v=({el:b,anchor:w},A,R)=>{let P;for(;b&&b!==w;)P=f(b),i(b,A,R),b=P;i(w,A,R)},T=({el:b,anchor:w})=>{let A;for(;b&&b!==w;)A=f(b),s(b),b=A;s(w)},x=(b,w,A,R,P,z,K,V,H)=>{K=K||w.type==="svg",b==null?S(w,A,R,P,z,K,V,H):B(b,w,P,z,K,V,H)},S=(b,w,A,R,P,z,K,V)=>{let H,N;const{type:oe,props:J,shapeFlag:ae,transition:de,dirs:Ce}=b;if(H=b.el=o(b.type,z,J&&J.is,J),ae&8?u(H,b.children):ae&16&&C(b.children,H,null,R,P,z&&oe!=="foreignObject",K,V),Ce&&Ys(b,null,R,"created"),I(H,b,b.scopeId,K,R),J){for(const Ke in J)Ke!=="value"&&!vu(Ke)&&r(H,Ke,null,J[Ke],z,b.children,R,P,W);"value"in J&&r(H,"value",null,J.value),(N=J.onVnodeBeforeMount)&&ci(N,R,b)}Ce&&Ys(b,null,R,"beforeMount");const Qe=(!P||P&&!P.pendingBranch)&&de&&!de.persisted;Qe&&de.beforeEnter(H),i(H,w,A),((N=J&&J.onVnodeMounted)||Qe||Ce)&&pn(()=>{N&&ci(N,R,b),Qe&&de.enter(H),Ce&&Ys(b,null,R,"mounted")},P)},I=(b,w,A,R,P)=>{if(A&&d(b,A),R)for(let z=0;z<R.length;z++)d(b,R[z]);if(P){let z=P.subTree;if(w===z){const K=P.vnode;I(b,K,K.scopeId,K.slotScopeIds,P.parent)}}},C=(b,w,A,R,P,z,K,V,H=0)=>{for(let N=H;N<b.length;N++){const oe=b[N]=V?fs(b[N]):Wn(b[N]);m(null,oe,w,A,R,P,z,K,V)}},B=(b,w,A,R,P,z,K)=>{const V=w.el=b.el;let{patchFlag:H,dynamicChildren:N,dirs:oe}=w;H|=b.patchFlag&16;const J=b.props||tt,ae=w.props||tt;let de;A&&Xs(A,!1),(de=ae.onVnodeBeforeUpdate)&&ci(de,A,w,b),oe&&Ys(w,b,A,"beforeUpdate"),A&&Xs(A,!0);const Ce=P&&w.type!=="foreignObject";if(N?U(b.dynamicChildren,N,V,A,R,Ce,z):K||Le(b,w,V,null,A,R,Ce,z,!1),H>0){if(H&16)$(V,w,J,ae,A,R,P);else if(H&2&&J.class!==ae.class&&r(V,"class",null,ae.class,P),H&4&&r(V,"style",J.style,ae.style,P),H&8){const Qe=w.dynamicProps;for(let Ke=0;Ke<Qe.length;Ke++){const vt=Qe[Ke],Hn=J[vt],Yr=ae[vt];(Yr!==Hn||vt==="value")&&r(V,vt,Hn,Yr,P,b.children,A,R,W)}}H&1&&b.children!==w.children&&u(V,w.children)}else!K&&N==null&&$(V,w,J,ae,A,R,P);((de=ae.onVnodeUpdated)||oe)&&pn(()=>{de&&ci(de,A,w,b),oe&&Ys(w,b,A,"updated")},R)},U=(b,w,A,R,P,z,K)=>{for(let V=0;V<w.length;V++){const H=b[V],N=w[V],oe=H.el&&(H.type===Ee||!ps(H,N)||H.shapeFlag&70)?h(H.el):A;m(H,N,oe,null,R,P,z,K,!0)}},$=(b,w,A,R,P,z,K)=>{if(A!==R){if(A!==tt)for(const V in A)!vu(V)&&!(V in R)&&r(b,V,A[V],null,K,w.children,P,z,W);for(const V in R){if(vu(V))continue;const H=R[V],N=A[V];H!==N&&V!=="value"&&r(b,V,N,H,K,w.children,P,z,W)}"value"in R&&r(b,"value",A.value,R.value)}},Q=(b,w,A,R,P,z,K,V,H)=>{const N=w.el=b?b.el:a(""),oe=w.anchor=b?b.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:de}=w;de&&(V=V?V.concat(de):de),b==null?(i(N,A,R),i(oe,A,R),C(w.children,A,oe,P,z,K,V,H)):J>0&&J&64&&ae&&b.dynamicChildren?(U(b.dynamicChildren,ae,A,P,z,K,V),(w.key!=null||P&&w===P.subTree)&&w2(b,w,!0)):Le(b,w,A,oe,P,z,K,V,H)},je=(b,w,A,R,P,z,K,V,H)=>{w.slotScopeIds=V,b==null?w.shapeFlag&512?P.ctx.activate(w,A,R,K,H):$e(w,A,R,P,z,K,H):me(b,w,H)},$e=(b,w,A,R,P,z,K)=>{const V=b.component=VA(b,R,P);if(c2(b)&&(V.ctx.renderer=Fe),zA(V),V.asyncDep){if(P&&P.registerDep(V,ne),!b.el){const H=V.subTree=Y(qi);_(null,H,w,A)}return}ne(V,b,w,A,P,z,K)},me=(b,w,A)=>{const R=w.component=b.component;if(QS(b,w,A))if(R.asyncDep&&!R.asyncResolved){be(R,w,A);return}else R.next=w,WS(R.update),R.update();else w.el=b.el,R.vnode=w},ne=(b,w,A,R,P,z,K)=>{const V=()=>{if(b.isMounted){let{next:oe,bu:J,u:ae,parent:de,vnode:Ce}=b,Qe=oe,Ke;Xs(b,!1),oe?(oe.el=Ce.el,be(b,oe,K)):oe=Ce,J&&bu(J),(Ke=oe.props&&oe.props.onVnodeBeforeUpdate)&&ci(Ke,de,oe,Ce),Xs(b,!0);const vt=cd(b),Hn=b.subTree;b.subTree=vt,m(Hn,vt,h(Hn.el),q(Hn),b,P,z),oe.el=vt.el,Qe===null&&um(b,vt.el),ae&&pn(ae,P),(Ke=oe.props&&oe.props.onVnodeUpdated)&&pn(()=>ci(Ke,de,oe,Ce),P)}else{let oe;const{el:J,props:ae}=w,{bm:de,m:Ce,parent:Qe}=b,Ke=Eu(w);if(Xs(b,!1),de&&bu(de),!Ke&&(oe=ae&&ae.onVnodeBeforeMount)&&ci(oe,Qe,w),Xs(b,!0),J&&Ie){const vt=()=>{b.subTree=cd(b),Ie(J,b.subTree,b,P,null)};Ke?w.type.__asyncLoader().then(()=>!b.isUnmounted&&vt()):vt()}else{const vt=b.subTree=cd(b);m(null,vt,A,R,b,P,z),w.el=vt.el}if(Ce&&pn(Ce,P),!Ke&&(oe=ae&&ae.onVnodeMounted)){const vt=w;pn(()=>ci(oe,Qe,vt),P)}(w.shapeFlag&256||Qe&&Eu(Qe.vnode)&&Qe.vnode.shapeFlag&256)&&b.a&&pn(b.a,P),b.isMounted=!0,w=A=R=null}},H=b.effect=new em(V,()=>lm(N),b.scope),N=b.update=()=>H.run();N.id=b.uid,Xs(b,!0),N()},be=(b,w,A)=>{w.component=b;const R=b.vnode.props;b.vnode=w,b.next=null,CA(b,w.props,R,A),AA(b,w.children,A),Go(),Jy(),Yo()},Le=(b,w,A,R,P,z,K,V,H=!1)=>{const N=b&&b.children,oe=b?b.shapeFlag:0,J=w.children,{patchFlag:ae,shapeFlag:de}=w;if(ae>0){if(ae&128){hn(N,J,A,R,P,z,K,V,H);return}else if(ae&256){Ht(N,J,A,R,P,z,K,V,H);return}}de&8?(oe&16&&W(N,P,z),J!==N&&u(A,J)):oe&16?de&16?hn(N,J,A,R,P,z,K,V,H):W(N,P,z,!0):(oe&8&&u(A,""),de&16&&C(J,A,R,P,z,K,V,H))},Ht=(b,w,A,R,P,z,K,V,H)=>{b=b||co,w=w||co;const N=b.length,oe=w.length,J=Math.min(N,oe);let ae;for(ae=0;ae<J;ae++){const de=w[ae]=H?fs(w[ae]):Wn(w[ae]);m(b[ae],de,A,null,P,z,K,V,H)}N>oe?W(b,P,z,!0,!1,J):C(w,A,R,P,z,K,V,H,J)},hn=(b,w,A,R,P,z,K,V,H)=>{let N=0;const oe=w.length;let J=b.length-1,ae=oe-1;for(;N<=J&&N<=ae;){const de=b[N],Ce=w[N]=H?fs(w[N]):Wn(w[N]);if(ps(de,Ce))m(de,Ce,A,null,P,z,K,V,H);else break;N++}for(;N<=J&&N<=ae;){const de=b[J],Ce=w[ae]=H?fs(w[ae]):Wn(w[ae]);if(ps(de,Ce))m(de,Ce,A,null,P,z,K,V,H);else break;J--,ae--}if(N>J){if(N<=ae){const de=ae+1,Ce=de<oe?w[de].el:R;for(;N<=ae;)m(null,w[N]=H?fs(w[N]):Wn(w[N]),A,Ce,P,z,K,V,H),N++}}else if(N>ae)for(;N<=J;)_t(b[N],P,z,!0),N++;else{const de=N,Ce=N,Qe=new Map;for(N=Ce;N<=ae;N++){const En=w[N]=H?fs(w[N]):Wn(w[N]);En.key!=null&&Qe.set(En.key,N)}let Ke,vt=0;const Hn=ae-Ce+1;let Yr=!1,$y=0;const pa=new Array(Hn);for(N=0;N<Hn;N++)pa[N]=0;for(N=de;N<=J;N++){const En=b[N];if(vt>=Hn){_t(En,P,z,!0);continue}let li;if(En.key!=null)li=Qe.get(En.key);else for(Ke=Ce;Ke<=ae;Ke++)if(pa[Ke-Ce]===0&&ps(En,w[Ke])){li=Ke;break}li===void 0?_t(En,P,z,!0):(pa[li-Ce]=N+1,li>=$y?$y=li:Yr=!0,m(En,w[li],A,null,P,z,K,V,H),vt++)}const Vy=Yr?PA(pa):co;for(Ke=Vy.length-1,N=Hn-1;N>=0;N--){const En=Ce+N,li=w[En],zy=En+1<oe?w[En+1].el:R;pa[N]===0?m(null,li,A,zy,P,z,K,V,H):Yr&&(Ke<0||N!==Vy[Ke]?jt(li,A,zy,2):Ke--)}}},jt=(b,w,A,R,P=null)=>{const{el:z,type:K,transition:V,children:H,shapeFlag:N}=b;if(N&6){jt(b.component.subTree,w,A,R);return}if(N&128){b.suspense.move(w,A,R);return}if(N&64){K.move(b,w,A,Fe);return}if(K===Ee){i(z,w,A);for(let J=0;J<H.length;J++)jt(H[J],w,A,R);i(b.anchor,w,A);return}if(K===Tu){v(b,w,A);return}if(R!==2&&N&1&&V)if(R===0)V.beforeEnter(z),i(z,w,A),pn(()=>V.enter(z),P);else{const{leave:J,delayLeave:ae,afterLeave:de}=V,Ce=()=>i(z,w,A),Qe=()=>{J(z,()=>{Ce(),de&&de()})};ae?ae(z,Ce,Qe):Qe()}else i(z,w,A)},_t=(b,w,A,R=!1,P=!1)=>{const{type:z,props:K,ref:V,children:H,dynamicChildren:N,shapeFlag:oe,patchFlag:J,dirs:ae}=b;if(V!=null&&dp(V,null,A,b,!0),oe&256){w.ctx.deactivate(b);return}const de=oe&1&&ae,Ce=!Eu(b);let Qe;if(Ce&&(Qe=K&&K.onVnodeBeforeUnmount)&&ci(Qe,w,b),oe&6)D(b.component,A,R);else{if(oe&128){b.suspense.unmount(A,R);return}de&&Ys(b,null,w,"beforeUnmount"),oe&64?b.type.remove(b,w,A,P,Fe,R):N&&(z!==Ee||J>0&&J&64)?W(N,w,A,!1,!0):(z===Ee&&J&384||!P&&oe&16)&&W(H,w,A),R&&Nn(b)}(Ce&&(Qe=K&&K.onVnodeUnmounted)||de)&&pn(()=>{Qe&&ci(Qe,w,b),de&&Ys(b,null,w,"unmounted")},A)},Nn=b=>{const{type:w,el:A,anchor:R,transition:P}=b;if(w===Ee){ai(A,R);return}if(w===Tu){T(b);return}const z=()=>{s(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(b.shapeFlag&1&&P&&!P.persisted){const{leave:K,delayLeave:V}=P,H=()=>K(A,z);V?V(b.el,z,H):H()}else z()},ai=(b,w)=>{let A;for(;b!==w;)A=f(b),s(b),b=A;s(w)},D=(b,w,A)=>{const{bum:R,scope:P,update:z,subTree:K,um:V}=b;R&&bu(R),P.stop(),z&&(z.active=!1,_t(K,b,w,A)),V&&pn(V,w),pn(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},W=(b,w,A,R=!1,P=!1,z=0)=>{for(let K=z;K<b.length;K++)_t(b[K],w,A,R,P)},q=b=>b.shapeFlag&6?q(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),ie=(b,w,A)=>{b==null?w._vnode&&_t(w._vnode,null,null,!0):m(w._vnode||null,b,w,null,null,null,A),Jy(),r2(),w._vnode=b},Fe={p:m,um:_t,m:jt,r:Nn,mt:$e,mc:C,pc:Le,pbc:U,n:q,o:t};let ht,Ie;return e&&([ht,Ie]=e(Fe)),{render:ie,hydrate:ht,createApp:DA(ie,ht)}}function Xs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function w2(t,e,n=!1){const i=t.children,s=e.children;if(le(i)&&le(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fs(s[r]),a.el=o.el),n||w2(o,a)),a.type===sf&&(a.el=o.el)}}function PA(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const NA=t=>t.__isTeleport,Ee=Symbol(void 0),sf=Symbol(void 0),qi=Symbol(void 0),Tu=Symbol(void 0),Ba=[];let Fn=null;function O(t=!1){Ba.push(Fn=t?null:[])}function E2(){Ba.pop(),Fn=Ba[Ba.length-1]||null}let Co=1;function lv(t){Co+=t}function T2(t){return t.dynamicChildren=Co>0?Fn||co:null,E2(),Co>0&&Fn&&Fn.push(t),t}function F(t,e,n,i,s,r){return T2(k(t,e,n,i,s,r,!0))}function $t(t,e,n,i,s){return T2(Y(t,e,n,i,s,!0))}function Wu(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const rf="__vInternal",I2=({key:t})=>t??null,Iu=({ref:t,ref_key:e,ref_for:n})=>t!=null?It(t)||dt(t)||ye(t)?{i:Cn,r:t,k:e,f:!!n}:t:null;function k(t,e=null,n=null,i=0,s=null,r=t===Ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&I2(e),ref:e&&Iu(e),scopeId:tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Cn};return a?(_m(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=It(n)?8:16),Co>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Y=LA;function LA(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===_A)&&(t=qi),Wu(t)){const a=ko(t,e,!0);return n&&_m(a,n),Co>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(t)]=a:Fn.push(a)),a.patchFlag|=-2,a}if(KA(t)&&(t=t.__vccOpts),e){e=FA(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=_n(a)),Ze(l)&&(Jh(l)&&!le(l)&&(l=un({},l)),e.style=Nr(l))}const o=It(t)?1:JS(t)?128:NA(t)?64:Ze(t)?4:ye(t)?2:0;return k(t,e,n,i,s,o,r,!0)}function FA(t){return t?Jh(t)||rf in t?un({},t):t:null}function ko(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?UA(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&I2(a),ref:e&&e.ref?n&&s?le(s)?s.concat(Iu(e)):[s,Iu(e)]:Iu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ee?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ko(t.ssContent),ssFallback:t.ssFallback&&ko(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Te(t=" ",e=0){return Y(sf,null,t,e)}function we(t="",e=!1){return e?(O(),$t(qi,null,t)):Y(qi,null,t)}function Wn(t){return t==null||typeof t=="boolean"?Y(qi):le(t)?Y(Ee,null,t.slice()):typeof t=="object"?fs(t):Y(sf,null,String(t))}function fs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ko(t)}function _m(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),_m(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(rf in e)?e._ctx=Cn:s===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[Te(e)]):n=8);t.children=e,t.shapeFlag|=n}function UA(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=_n([e.class,i.class]));else if(s==="style")e.style=Nr([e.style,i.style]);else if(Gh(s)){const r=e[s],o=i[s];o&&r!==o&&!(le(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ci(t,e,n,i=null){ei(t,e,7,[n,i])}const BA=b2();let $A=0;function VA(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||BA,r={uid:$A++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:m2(i,s),emitsOptions:a2(i,s),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=KS.bind(null,r),t.ce&&t.ce(r),r}let yt=null;const Jo=()=>yt||Cn,Ms=t=>{yt=t,t.scope.on()},Cs=()=>{yt&&yt.scope.off(),yt=null};function x2(t){return t.vnode.shapeFlag&4}let fl=!1;function zA(t,e=!1){fl=e;const{props:n,children:i}=t.vnode,s=x2(t);xA(t,n,s,e),SA(t,i);const r=s?HA(t,e):void 0;return fl=!1,r}function HA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xo(new Proxy(t.ctx,vA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?WA(t):null;Ms(t),Go();const r=Is(i,t,0,[t.props,s]);if(Yo(),Cs(),Yg(r)){if(r.then(Cs,Cs),e)return r.then(o=>{pp(t,o,e)}).catch(o=>{Wl(o,t,0)});t.asyncDep=r}else pp(t,r,e)}else C2(t,e)}function pp(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ze(e)&&(t.setupState=Zw(e)),C2(t,n)}let cv;function C2(t,e,n){const i=t.type;if(!t.render){if(!e&&cv&&!i.render){const s=i.template||gm(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=un(un({isCustomElement:r,delimiters:a},o),l);i.render=cv(s,c)}}t.render=i.render||Zn}Ms(t),Go(),bA(t),Yo(),Cs()}function jA(t){return new Proxy(t.attrs,{get(e,n){return wn(t,"get","$attrs"),e[n]}})}function WA(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=jA(t))},slots:t.slots,emit:t.emit,expose:e}}function of(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zw(xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ua)return Ua[n](t)},has(e,n){return n in e||n in Ua}}))}function qA(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function KA(t){return ye(t)&&"__vccOpts"in t}const Pe=(t,e)=>zS(t,e,fl);function ti(t){const e=Jo();let n=t();return Cs(),Yg(n)&&(n=n.catch(i=>{throw Ms(e),i})),[n,()=>Ms(e)]}function Zo(t,e,n){const i=arguments.length;return i===2?Ze(e)&&!le(e)?Wu(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Wu(n)&&(n=[n]),Y(t,e,n))}const k2=Symbol(""),GA=()=>bn(k2),S2="3.2.47",YA="http://www.w3.org/2000/svg",ar=typeof document<"u"?document:null,uv=ar&&ar.createElement("template"),XA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ar.createElementNS(YA,t):ar.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{uv.innerHTML=i?`<svg>${t}</svg>`:t;const a=uv.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function QA(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function JA(t,e,n){const i=t.style,s=It(n);if(n&&!s){if(e&&!It(e))for(const r in e)n[r]==null&&gp(i,r,"");for(const r in n)gp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const hv=/\s*!important$/;function gp(t,e,n){if(le(n))n.forEach(i=>gp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ZA(t,e);hv.test(n)?t.setProperty(Lr(i),n.replace(hv,""),"important"):t[i]=n}}const fv=["Webkit","Moz","ms"],hd={};function ZA(t,e){const n=hd[e];if(n)return n;let i=bi(e);if(i!=="filter"&&i in t)return hd[e]=i;i=Xh(i);for(let s=0;s<fv.length;s++){const r=fv[s]+i;if(r in t)return hd[e]=r}return e}const dv="http://www.w3.org/1999/xlink";function e3(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dv,e.slice(6,e.length)):t.setAttributeNS(dv,e,n);else{const r=Jk(e);n==null||r&&!Mw(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function t3(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mw(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gs(t,e,n,i){t.addEventListener(e,n,i)}function n3(t,e,n,i){t.removeEventListener(e,n,i)}function i3(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=s3(e);if(i){const c=r[e]=a3(i,s);gs(t,a,c,l)}else o&&(n3(t,a,o,l),r[e]=void 0)}}const pv=/(?:Once|Passive|Capture)$/;function s3(t){let e;if(pv.test(t)){e={};let i;for(;i=t.match(pv);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let fd=0;const r3=Promise.resolve(),o3=()=>fd||(r3.then(()=>fd=0),fd=Date.now());function a3(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ei(l3(i,n.value),e,5,[i])};return n.value=t,n.attached=o3(),n}function l3(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const gv=/^on[a-z]/,c3=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?QA(t,i,s):e==="style"?JA(t,n,i):Gh(e)?Kg(e)||i3(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u3(t,e,i,s))?t3(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),e3(t,e,i,s))};function u3(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&gv.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gv.test(e)&&It(n)?!1:e in t}function h3(t){const e=Jo();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>_p(r,s))},i=()=>{const s=t(e.proxy);mp(e.subTree,s),n(s)};oA(i),dm(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),pm(()=>s.disconnect())})}function mp(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{mp(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)_p(t.el,e);else if(t.type===Ee)t.children.forEach(n=>mp(n,e));else if(t.type===Tu){let{el:n,anchor:i}=t;for(;n&&(_p(n,e),n!==i);)n=n.nextSibling}}function _p(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const So=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>bu(e,n):e};function f3(t){t.target.composing=!0}function mv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=So(s);const r=i||s.props&&s.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=$u(a)),t._assign(a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",f3),gs(t,"compositionend",mv),gs(t,"change",mv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=So(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&$u(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},d3={deep:!0,created(t,e,n){t._assign=So(n),gs(t,"change",()=>{const i=t._modelValue,s=dl(t),r=t.checked,o=t._assign;if(le(i)){const a=qg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ko(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(A2(t,r))})},mounted:_v,beforeUpdate(t,e,n){t._assign=So(n),_v(t,e,n)}};function _v(t,{value:e,oldValue:n},i){t._modelValue=e,le(e)?t.checked=qg(e,i.props.value)>-1:Ko(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Hl(e,A2(t,!0)))}const p3={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ko(e);gs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$u(dl(o)):dl(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=So(i)},mounted(t,{value:e}){yv(t,e)},beforeUpdate(t,e,n){t._assign=So(n)},updated(t,{value:e}){yv(t,e)}};function yv(t,e){const n=t.multiple;if(!(n&&!le(e)&&!Ko(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=dl(r);if(n)le(e)?r.selected=qg(e,o)>-1:r.selected=e.has(o);else if(Hl(dl(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function dl(t){return"_value"in t?t._value:t.value}function A2(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const g3=["ctrl","shift","alt","meta"],m3={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>g3.some(n=>t[`${n}Key`]&&!e.includes(n))},Ye=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=m3[e[s]];if(r&&r(n,e))return}return t(n,...i)},_3={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ni=(t,e)=>n=>{if(!("key"in n))return;const i=Lr(n.key);if(e.some(s=>s===i||_3[s]===i))return t(n)},y3=un({patchProp:c3},XA);let vv;function v3(){return vv||(vv=OA(y3))}const b3=(...t)=>{const e=v3().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=w3(i);if(!s)return;const r=e._component;!ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function w3(t){return It(t)?document.querySelector(t):t}var E3=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let R2;const af=t=>R2=t,D2=Symbol();function yp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $a;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($a||($a={}));function T3(){const t=Qg(!0),e=t.run(()=>ut({}));let n=[],i=[];const s=xo({install(r){af(s),s._a=r,r.provide(D2,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!E3?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const O2=()=>{};function bv(t,e,n,i=O2){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Jg()&&Uw(s),s}function Xr(t,...e){t.slice().forEach(n=>{n(...e)})}function vp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];yp(s)&&yp(i)&&t.hasOwnProperty(n)&&!dt(i)&&!Vi(i)?t[n]=vp(s,i):t[n]=i}return t}const I3=Symbol();function x3(t){return!yp(t)||!t.hasOwnProperty(I3)}const{assign:hs}=Object;function C3(t){return!!(dt(t)&&t.effect)}function k3(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=BS(n.state.value[t]);return hs(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=xo(Pe(()=>{af(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=M2(t,c,e,n,i,!0),l}function M2(t,e,n={},i,s,r){let o;const a=hs({actions:{}},n),l={deep:!0};let c,u,h=xo([]),f=xo([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),ut({});let m;function g(I){let C;c=u=!1,typeof I=="function"?(I(i.state.value[t]),C={type:$a.patchFunction,storeId:t,events:d}):(vp(i.state.value[t],I),C={type:$a.patchObject,payload:I,storeId:t,events:d});const B=m=Symbol();am().then(()=>{m===B&&(c=!0)}),u=!0,Xr(h,C,i.state.value[t])}const _=r?function(){const{state:C}=n,B=C?C():{};this.$patch(U=>{hs(U,B)})}:O2;function y(){o.stop(),h=[],f=[],i._s.delete(t)}function v(I,C){return function(){af(i);const B=Array.from(arguments),U=[],$=[];function Q(me){U.push(me)}function je(me){$.push(me)}Xr(f,{args:B,name:I,store:x,after:Q,onError:je});let $e;try{$e=C.apply(this&&this.$id===t?this:x,B)}catch(me){throw Xr($,me),me}return $e instanceof Promise?$e.then(me=>(Xr(U,me),me)).catch(me=>(Xr($,me),Promise.reject(me))):(Xr(U,$e),$e)}}const T={_p:i,$id:t,$onAction:bv.bind(null,f),$patch:g,$reset:_,$subscribe(I,C={}){const B=bv(h,I,C.detached,()=>U()),U=o.run(()=>xs(()=>i.state.value[t],$=>{(C.flush==="sync"?u:c)&&I({storeId:t,type:$a.direct,events:d},$)},hs({},l,C)));return B},$dispose:y},x=Wi(T);i._s.set(t,x);const S=i._e.run(()=>(o=Qg(),o.run(()=>e())));for(const I in S){const C=S[I];if(dt(C)&&!C3(C)||Vi(C))r||(p&&x3(C)&&(dt(C)?C.value=p[I]:vp(C,p[I])),i.state.value[t][I]=C);else if(typeof C=="function"){const B=v(I,C);S[I]=B,a.actions[I]=C}}return hs(x,S),hs(xe(x),S),Object.defineProperty(x,"$state",{get:()=>i.state.value[t],set:I=>{g(C=>{hs(C,I)})}}),i._p.forEach(I=>{hs(x,o.run(()=>I({store:x,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(x.$state,p),c=!0,u=!0,x}function ym(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Jo();return a=a||c&&bn(D2,null),a&&af(a),a=R2,a._s.has(i)||(r?M2(i,e,s,a):k3(i,s,a)),a._s.get(i)}return o.$id=i,o}function S3(t){{t=xe(t);const e={};for(const n in t){const i=t[n];(dt(i)||Vi(i))&&(e[n]=e2(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw ea(e)},ea=function(t){return new Error("Firebase Database ("+P2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},A3=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new R3;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L2=function(t){const e=N2(t);return lf.encodeByteArray(e,!0)},qu=function(t){return L2(t).replace(/\./g,"")},Ku=function(t){try{return lf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(t){return F2(void 0,t)}function F2(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!O3(n)||(t[n]=F2(t[n],e[n]));return t}function O3(t){return t!=="__proto__"}/**
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
 */function M3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P3=()=>M3().__FIREBASE_DEFAULTS__,N3=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ku(t[1]);return e&&JSON.parse(e)},vm=()=>{try{return P3()||N3()||L3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U2=t=>{var e,n;return(n=(e=vm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F3=t=>{const e=U2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},U3=()=>{var t;return(t=vm())===null||t===void 0?void 0:t.config},B2=t=>{var e;return(e=vm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function B3(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qu(JSON.stringify(n)),qu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function $3(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V3(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V2(){return P2.NODE_ADMIN===!0}function z2(){try{return typeof indexedDB=="object"}catch{return!1}}function z3(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3="FirebaseError";class Ci extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=H3,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?j3(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ci(s,a,i)}}function j3(t,e){return t.replace(W3,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const W3=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return JSON.parse(t)}function Ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=gl(Ku(r[0])||""),n=gl(Ku(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},q3=function(t){const e=H2(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K3=function(t){const e=H2(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ao(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Yu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(wv(r)&&wv(o)){if(!Yu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function wv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Y3(t,e){const n=new X3(t,e);return n.subscribe.bind(n)}class X3{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Q3(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=dd),s.error===void 0&&(s.error=dd),s.complete===void 0&&(s.complete=dd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q3(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dd(){}function J3(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,j(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cf=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class eR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new pl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nR(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:tR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tR(t){return t===nr?void 0:t}function nR(t){return t.instantiationMode==="EAGER"}/**
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
 */class iR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Be||(Be={}));const sR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},rR=Be.INFO,oR={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=oR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const lR=(t,e)=>e.some(n=>t instanceof n);let Ev,Tv;function cR(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uR(){return Tv||(Tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j2=new WeakMap,wp=new WeakMap,W2=new WeakMap,pd=new WeakMap,wm=new WeakMap;function hR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ks(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j2.set(n,t)}).catch(()=>{}),wm.set(e,t),e}function fR(t){if(wp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wp.set(t,e)}let Ep={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ks(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dR(t){Ep=t(Ep)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(gd(this),e,...n);return W2.set(i,e.sort?e.sort():[e]),ks(i)}:uR().includes(t)?function(...e){return t.apply(gd(this),e),ks(j2.get(this))}:function(...e){return ks(t.apply(gd(this),e))}}function gR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&fR(t),lR(t,cR())?new Proxy(t,Ep):t)}function ks(t){if(t instanceof IDBRequest)return hR(t);if(pd.has(t))return pd.get(t);const e=gR(t);return e!==t&&(pd.set(t,e),wm.set(e,t)),e}const gd=t=>wm.get(t);function mR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ks(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ks(o.result),l.oldVersion,l.newVersion,ks(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const _R=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],md=new Map;function Iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=yR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||_R.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return md.set(e,r),r}dR(t=>({...t,get:(e,n,i)=>Iv(e,n)||t.get(e,n,i),has:(e,n)=>!!Iv(e,n)||t.has(e,n)}));/**
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
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tp="@firebase/app",xv="0.9.8";/**
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
 */const Tr=new Kl("@firebase/app"),wR="@firebase/app-compat",ER="@firebase/analytics-compat",TR="@firebase/analytics",IR="@firebase/app-check-compat",xR="@firebase/app-check",CR="@firebase/auth",kR="@firebase/auth-compat",SR="@firebase/database",AR="@firebase/database-compat",RR="@firebase/functions",DR="@firebase/functions-compat",OR="@firebase/installations",MR="@firebase/installations-compat",PR="@firebase/messaging",NR="@firebase/messaging-compat",LR="@firebase/performance",FR="@firebase/performance-compat",UR="@firebase/remote-config",BR="@firebase/remote-config-compat",$R="@firebase/storage",VR="@firebase/storage-compat",zR="@firebase/firestore",HR="@firebase/firestore-compat",jR="firebase",WR="9.20.0";/**
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
 */const Ip="[DEFAULT]",qR={[Tp]:"fire-core",[wR]:"fire-core-compat",[TR]:"fire-analytics",[ER]:"fire-analytics-compat",[xR]:"fire-app-check",[IR]:"fire-app-check-compat",[CR]:"fire-auth",[kR]:"fire-auth-compat",[SR]:"fire-rtdb",[AR]:"fire-rtdb-compat",[RR]:"fire-fn",[DR]:"fire-fn-compat",[OR]:"fire-iid",[MR]:"fire-iid-compat",[PR]:"fire-fcm",[NR]:"fire-fcm-compat",[LR]:"fire-perf",[FR]:"fire-perf-compat",[UR]:"fire-rc",[BR]:"fire-rc-compat",[$R]:"fire-gcs",[VR]:"fire-gcs-compat",[zR]:"fire-fst",[HR]:"fire-fst-compat","fire-js":"fire-js",[jR]:"fire-js-all"};/**
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
 */const Xu=new Map,xp=new Map;function KR(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(xp.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,t);for(const n of Xu.values())KR(n,t);return!0}function Em(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const GR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ss=new ta("app","Firebase",GR);/**
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
 */class YR{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=WR;function q2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ip,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ss.create("bad-app-name",{appName:String(s)});if(n||(n=U3()),!n)throw Ss.create("no-options");const r=Xu.get(s);if(r){if(Yu(n,r.options)&&Yu(i,r.config))return r;throw Ss.create("duplicate-app",{appName:s})}const o=new iR(s);for(const l of xp.values())o.addComponent(l);const a=new YR(n,i,o);return Xu.set(s,a),a}function Tm(t=Ip){const e=Xu.get(t);if(!e&&t===Ip)return q2();if(!e)throw Ss.create("no-app",{appName:t});return e}function Sn(t,e,n){var i;let s=(i=qR[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}wi(new si(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",QR=1,ml="firebase-heartbeat-store";let _d=null;function K2(){return _d||(_d=mR(XR,QR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ml)}}}).catch(t=>{throw Ss.create("idb-open",{originalErrorMessage:t.message})})),_d}async function JR(t){try{return(await K2()).transaction(ml).objectStore(ml).get(G2(t))}catch(e){if(e instanceof Ci)Tr.warn(e.message);else{const n=Ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function Cv(t,e){try{const i=(await K2()).transaction(ml,"readwrite");return await i.objectStore(ml).put(e,G2(t)),i.done}catch(n){if(n instanceof Ci)Tr.warn(n.message);else{const i=Ss.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(i.message)}}}function G2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZR=1024,eD=30*24*60*60*1e3;class tD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=eD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kv(),{heartbeatsToSend:n,unsentEntries:i}=nD(this._heartbeatsCache.heartbeats),s=qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kv(){return new Date().toISOString().substring(0,10)}function nD(t,e=ZR){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Sv(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class iD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z2()?z3().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return qu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sD(t){wi(new si("platform-logger",e=>new vR(e),"PRIVATE")),wi(new si("heartbeat",e=>new tD(e),"PRIVATE")),Sn(Tp,xv,t),Sn(Tp,xv,"esm2017"),Sn("fire-js","")}sD("");function Im(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Y2(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rD=Y2,X2=new ta("auth","Firebase",Y2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Kl("@firebase/auth");function oD(t,...e){Qu.logLevel<=Be.WARN&&Qu.warn(`Auth (${Hs}): ${t}`,...e)}function xu(t,...e){Qu.logLevel<=Be.ERROR&&Qu.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,...e){throw xm(t,...e)}function _i(t,...e){return xm(t,...e)}function Q2(t,e,n){const i=Object.assign(Object.assign({},rD()),{[e]:n});return new ta("auth","Firebase",i).create(e,{appName:t.name})}function aD(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ei(t,"argument-error"),Q2(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return X2.create(t,...e)}function he(t,e,...n){if(!t)throw xm(e,...n)}function Li(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function Ki(t,e){t||Li(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lD(){return Av()==="http:"||Av()==="https:"}function Av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lD()||$3()||"connection"in navigator)?navigator.onLine:!0}function uD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ki(n>e,"Short delay should be less than long delay!"),this.isMobile=bm()||$2()}get(){return cD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){Ki(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=new Gl(3e4,6e4);function Z2(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yl(t,e,n,i,s={}){return eE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),J2.fetch()(tE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function eE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},hD),e);try{const s=new pD(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pc(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Q2(t,u,c);Ei(t,u)}}catch(s){if(s instanceof Ci)throw s;Ei(t,"network-request-failed",{message:String(s)})}}async function dD(t,e,n,i,s={}){const r=await Yl(t,e,n,i,s);return"mfaPendingCredential"in r&&Ei(t,"multi-factor-auth-required",{_serverResponse:r}),r}function tE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Cm(t.config,s):`${t.config.apiScheme}://${s}`}class pD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_i(this.auth,"network-request-failed")),fD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=_i(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){return Yl(t,"POST","/v1/accounts:delete",e)}async function mD(t,e){return Yl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _D(t,e=!1){const n=Nt(t),i=await n.getIdToken(e),s=km(i);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Va(yd(s.auth_time)),issuedAtTime:Va(yd(s.iat)),expirationTime:Va(yd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yd(t){return Number(t)*1e3}function km(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ku(n);return s?JSON.parse(s):(xu("Failed to decode base64 JWT payload"),null)}catch(s){return xu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yD(t){const e=km(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ci&&vD(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function vD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(t){var e;const n=t.auth,i=await t.getIdToken(),s=await _l(t,mD(n,{idToken:i}));he(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?TD(r.providerUserInfo):[],a=ED(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function wD(t){const e=Nt(t);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ED(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function TD(t){return t.map(e=>{var{providerId:n}=e,i=Im(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(t,e){const n=await eE(t,{},async()=>{const i=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=tE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",J2.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return he(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await ID(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new yl;return i&&(he(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(he(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yl,this.toJSON())}_performRefresh(){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Im(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _l(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _D(this,e)}reload(){return wD(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ju(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _l(this,gD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:T,isAnonymous:x,providerData:S,stsTokenManager:I}=n;he(v&&I,e,"internal-error");const C=yl.fromJSON(this.name,I);he(typeof v=="string",e,"internal-error"),as(h,e.name),as(f,e.name),he(typeof T=="boolean",e,"internal-error"),he(typeof x=="boolean",e,"internal-error"),as(d,e.name),as(p,e.name),as(m,e.name),as(g,e.name),as(_,e.name),as(y,e.name);const B=new yr({uid:v,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:C,createdAt:_,lastLoginAt:y});return S&&Array.isArray(S)&&(B.providerData=S.map(U=>Object.assign({},U))),g&&(B._redirectEventId=g),B}static async _fromIdTokenResponse(e,n,i=!1){const s=new yl;s.updateFromServerResponse(n);const r=new yr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ju(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;function Fi(t){Ki(t instanceof Function,"Expected a class definition");let e=Rv.get(t);return e?(Ki(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rv.set(t,e),e)}/**
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
 */class iE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iE.type="NONE";const Dv=iE;/**
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
 */function Cu(t,e,n){return`firebase:${t}:${e}:${n}`}class po{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Cu(this.userKey,s.apiKey,r),this.fullPersistenceKey=Cu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new po(Fi(Dv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Fi(Dv);const o=Cu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=yr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new po(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new po(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lE(e))return"Blackberry";if(cE(e))return"Webos";if(Sm(e))return"Safari";if((e.includes("chrome/")||rE(e))&&!e.includes("edge/"))return"Chrome";if(aE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sE(t=sn()){return/firefox\//i.test(t)}function Sm(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rE(t=sn()){return/crios\//i.test(t)}function oE(t=sn()){return/iemobile/i.test(t)}function aE(t=sn()){return/android/i.test(t)}function lE(t=sn()){return/blackberry/i.test(t)}function cE(t=sn()){return/webos/i.test(t)}function uf(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xD(t=sn()){var e;return uf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CD(){return V3()&&document.documentMode===10}function uE(t=sn()){return uf(t)||aE(t)||cE(t)||lE(t)||/windows phone/i.test(t)||oE(t)}function kD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e=[]){let n;switch(t){case"Browser":n=Ov(sn());break;case"Worker":n=`${Ov(sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${i}`}async function fE(t,e){return Yl(t,"GET","/v2/recaptchaConfig",Z2(t,e))}function Mv(t){return t!==void 0&&t.enterprise!==void 0}class dE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=_i("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",SD().appendChild(i)})}function AD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RD="https://www.google.com/recaptcha/enterprise.js?render=",DD="recaptcha-enterprise";class OD{constructor(e){this.type=DD,this.auth=Xl(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{fE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Mv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Mv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pE(RD+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class MD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pv(this),this.idTokenSubscription=new Pv(this),this.beforeStateQueue=new MD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(e))})}async initializeRecaptchaConfig(){const e=await fE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new dE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new OD(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fi(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return he(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xl(t){return Nt(t)}class Pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y3(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){const n=Em(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Yu(r,e??{}))return s;Ei(s,"already-initialized")}return n.initialize({options:e})}function LD(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function FD(t,e,n){const i=Xl(t);he(i._canInitEmulator,i,"emulator-config-failed"),he(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=gE(e),{host:o,port:a}=UD(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||BD()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UD(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Nv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Nv(o)}}}function Nv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Li("not implemented")}_getIdTokenResponse(e){return Li("not implemented")}_linkToIdToken(e,n){return Li("not implemented")}_getReauthenticationResolver(e){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e){return dD(t,"POST","/v1/accounts:signInWithIdp",Z2(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="http://localhost";class Ir extends mE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ei("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Im(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ir(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return go(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,go(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,go(e,n)}buildRequest(){const e={requestUri:$D,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends Am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Ql{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";ms.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pi.credential(n,i)}catch{return null}}}Pi.GOOGLE_SIGN_IN_METHOD="google.com";Pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Ql{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Ql{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ys.credential(n,i)}catch{return null}}}ys.TWITTER_SIGN_IN_METHOD="twitter.com";ys.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await yr._fromIdTokenResponse(e,i,s),o=Lv(i);return new Ro({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Lv(i);return new Ro({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Ci{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Zu(e,n,i,s)}}function _E(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,r,e,i):r})}async function VD(t,e,n=!1){const i=await _l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ro._forOperation(t,"link",i)}/**
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
 */async function zD(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await _l(t,_E(i,s,e,t),n);he(r.idToken,i,"internal-error");const o=km(r.idToken);he(o,i,"internal-error");const{sub:a}=o;return he(t.uid===a,i,"user-mismatch"),Ro._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ei(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e,n=!1){const i="signIn",s=await _E(t,i,e),r=await Ro._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function yE(t,e,n,i){return Nt(t).onIdTokenChanged(e,n,i)}function jD(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function WD(t){return Nt(t).signOut()}const eh="__sak";/**
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
 */class vE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eh,"1"),this.storage.removeItem(eh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){const t=sn();return Sm(t)||uf(t)}const KD=1e3,GD=10;class bE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qD()&&kD(),this.fallbackToPolling=uE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);CD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GD):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},KD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bE.type="LOCAL";const YD=bE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wE.type="SESSION";const EE=wE;/**
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
 */function XD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new hf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await XD(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Rm("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return window}function JD(t){yi().location.href=t}/**
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
 */function TE(){return typeof yi().WorkerGlobalScope<"u"&&typeof yi().importScripts=="function"}async function ZD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tO(){return TE()?self:null}/**
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
 */const IE="firebaseLocalStorageDb",nO=1,th="firebaseLocalStorage",xE="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ff(t,e){return t.transaction([th],e?"readwrite":"readonly").objectStore(th)}function iO(){const t=indexedDB.deleteDatabase(IE);return new Jl(t).toPromise()}function kp(){const t=indexedDB.open(IE,nO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(th,{keyPath:xE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(th)?e(i):(i.close(),await iO(),e(await kp()))})})}async function Fv(t,e,n){const i=ff(t,!0).put({[xE]:e,value:n});return new Jl(i).toPromise()}async function sO(t,e){const n=ff(t,!1).get(e),i=await new Jl(n).toPromise();return i===void 0?null:i.value}function Uv(t,e){const n=ff(t,!0).delete(e);return new Jl(n).toPromise()}const rO=800,oO=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>oO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hf._getInstance(tO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZD(),!this.activeServiceWorker)return;this.sender=new QD(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kp();return await Fv(e,eh,"1"),await Uv(e,eh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>sO(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ff(s,!1).getAll();return new Jl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const aO=CE;new Gl(3e4,6e4);/**
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
 */function kE(t,e){return e?Fi(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dm extends mE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,n){return go(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lO(t){return HD(t.auth,new Dm(t),t.bypassAuthState)}function cO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),zD(n,new Dm(t),t.bypassAuthState)}async function uO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),VD(n,new Dm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lO;case"linkViaPopup":case"linkViaRedirect":return uO;case"reauthViaPopup":case"reauthViaRedirect":return cO;default:Ei(this.auth,"internal-error")}}resolve(e){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=new Gl(2e3,1e4);async function fO(t,e,n){const i=Xl(t);aD(t,e,Am);const s=kE(i,n);return new cr(i,"signInViaPopup",e,s).executeNotNull()}class cr extends SE{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_i(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_i(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_i(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hO.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="pendingRedirect",ku=new Map;class pO extends SE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const i=await gO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gO(t,e){const n=yO(e),i=_O(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function mO(t,e){ku.set(t._key(),e)}function _O(t){return Fi(t._redirectPersistence)}function yO(t){return Cu(dO,t.config.apiKey,t.name)}async function vO(t,e,n=!1){const i=Xl(t),s=kE(i,e),o=await new pO(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=10*60*1e3;class wO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!AE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(_i(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e={}){return Yl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xO=/^https?/;async function CO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TO(t);for(const n of e)try{if(kO(n))return}catch{}Ei(t,"unauthorized-domain")}function kO(t){const e=Cp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!xO.test(n))return!1;if(IO.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const SO=new Gl(3e4,6e4);function $v(){const t=yi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AO(t){return new Promise((e,n)=>{var i,s,r;function o(){$v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$v(),n(_i(t,"network-request-failed"))},timeout:SO.get()})}if(!((s=(i=yi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=yi().gapi)===null||r===void 0)&&r.load)o();else{const a=AD("iframefcb");return yi()[a]=()=>{gapi.load?o():n(_i(t,"network-request-failed"))},pE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Su=null,e})}let Su=null;function RO(t){return Su=Su||AO(t),Su}/**
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
 */const DO=new Gl(5e3,15e3),OO="__/auth/iframe",MO="emulator/auth/iframe",PO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LO(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cm(e,MO):`https://${t.config.authDomain}/${OO}`,i={apiKey:e.apiKey,appName:t.name,v:Hs},s=NO.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${na(i).slice(1)}`}async function FO(t){const e=await RO(t),n=yi().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:LO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=_i(t,"network-request-failed"),a=yi().setTimeout(()=>{r(o)},DO.get());function l(){yi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const UO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BO=500,$O=600,VO="_blank",zO="http://localhost";class Vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HO(t,e,n,i=BO,s=$O){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UO),{width:i.toString(),height:s.toString(),top:r,left:o}),c=sn().toLowerCase();n&&(a=rE(c)?VO:n),sE(c)&&(e=e||zO,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(xD(c)&&a!=="_self")return jO(e||"",a),new Vv(null);const h=window.open(e||"",a,u);he(h,t,"popup-blocked");try{h.focus()}catch{}return new Vv(h)}function jO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const WO="__/auth/handler",qO="emulator/auth/handler",KO=encodeURIComponent("fac");async function zv(t,e,n,i,s,r){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Hs,eventId:s};if(e instanceof Am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ql){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${KO}=${encodeURIComponent(l)}`:"";return`${GO(t)}?${na(a).slice(1)}${c}`}function GO({config:t}){return t.emulator?Cm(t,qO):`https://${t.authDomain}/${WO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="webStorageSupport";class YO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EE,this._completeRedirectFn=vO,this._overrideRedirectResult=mO}async _openPopup(e,n,i,s){var r;Ki((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await zv(e,n,i,Cp(),s);return HO(e,o,Rm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await zv(e,n,i,Cp(),s);return JD(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ki(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await FO(e),i=new wO(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vd,{type:vd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[vd];o!==void 0&&n(!!o),Ei(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uE()||Sm()||uf()}}const XO=YO;var Hv="@firebase/auth",jv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZO(t){wi(new si("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),he(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hE(t)},c=new PD(i,s,r,l);return LD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),wi(new si("auth-internal",e=>{const n=Xl(e.getProvider("auth").getImmediate());return(i=>new QO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Hv,jv,JO(t)),Sn(Hv,jv,"esm2017")}/**
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
 */const e4=5*60,t4=B2("authIdTokenMaxAge")||e4;let Wv=null;const n4=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>t4)return;const s=n==null?void 0:n.token;Wv!==s&&(Wv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RE(t=Tm()){const e=Em(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ND(t,{popupRedirectResolver:XO,persistence:[aO,YD,EE]}),i=B2("authTokenSyncURL");if(i){const r=n4(i);jD(n,r,()=>r(n.currentUser)),yE(n,o=>r(o))}const s=U2("auth");return s&&FD(n,`http://${s}`),n}ZO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=new Map,s4={activated:!1,tokenObservers:[]};function Ti(t){return i4.get(t)||Object.assign({},s4)}const qv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new pl,await o4(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new pl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function o4(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},nh=new ta("appCheck","AppCheck",a4);function l4(t){if(!Ti(t).activated)throw nh.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4="firebase-app-check-database",u4=1,Sp="firebase-app-check-store";let Nc=null;function h4(){return Nc||(Nc=new Promise((t,e)=>{try{const n=indexedDB.open(c4,u4);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(nh.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Sp,{keyPath:"compositeKey"})}}}catch(n){e(nh.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Nc)}function f4(t,e){return d4(p4(t),e)}async function d4(t,e){const i=(await h4()).transaction(Sp,"readwrite"),r=i.objectStore(Sp).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(nh.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function p4(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new Kl("@firebase/app-check");function Kv(t,e){return z2()?f4(t,e).catch(n=>{Ap.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={error:"UNKNOWN_ERROR"};function m4(t){return lf.encodeString(JSON.stringify(t),!1)}async function Rp(t,e=!1){const n=t.app;l4(n);const i=Ti(n);let s=i.token,r;if(s&&!ka(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(ka(l)?s=l:await Kv(n,void 0))}if(!e&&s&&ka(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ti(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ap.warn(l.message):Ap.error(l),r=l}let a;return s?r?ka(s)?a={token:s.token,internalError:r}:a=Yv(r):(a={token:s.token},i.token=s,await Kv(n,s)):a=Yv(r),o&&v4(n,a),a}function _4(t,e,n,i){const{app:s}=t,r=Ti(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ka(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Gv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Gv(t))}function DE(t,e){const n=Ti(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Gv(t){const{app:e}=t,n=Ti(e);let i=n.tokenRefresher;i||(i=y4(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function y4(t){const{app:e}=t;return new r4(async()=>{const n=Ti(e);let i;if(n.token?i=await Rp(t,!0):i=await Rp(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ti(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},qv.RETRIAL_MIN_WAIT,qv.RETRIAL_MAX_WAIT)}function v4(t,e){const n=Ti(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ka(t){return t.expireTimeMillis-Date.now()>0}function Yv(t){return{token:m4(g4),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ti(this.app);for(const n of e)DE(this.app,n.next);return Promise.resolve()}}function w4(t,e){return new b4(t,e)}function E4(t){return{getToken:e=>Rp(t,e),addTokenListener:e=>_4(t,"INTERNAL",e),removeTokenListener:e=>DE(t.app,e)}}const T4="@firebase/app-check",I4="0.6.5",x4="app-check",Xv="app-check-internal";function C4(){wi(new si(x4,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return w4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Xv).initialize()})),wi(new si(Xv,t=>{const e=t.getProvider("app-check").getImmediate();return E4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Sn(T4,I4)}C4();var k4="firebase",S4="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(k4,S4,"app");const OE=Symbol("firebaseApp");function df(t){return Jo()&&bn(OE,null)||Tm(t)}const pi=()=>{},A4=typeof window<"u";function Om(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function R4(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Ur(t){return!!t&&typeof t=="object"}const D4=Object.prototype;function O4(t){return Ur(t)&&Object.getPrototypeOf(t)===D4}function Mm(t){return Ur(t)&&t.type==="document"}function ME(t){return Ur(t)&&t.type==="collection"}function M4(t){return Mm(t)||ME(t)}function P4(t){return Ur(t)&&t.type==="query"}function N4(t){return Ur(t)&&"ref"in t}function L4(t){return Ur(t)&&typeof t.bucket=="string"}function F4(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function U4(){return!!(Jo()&&bn(k2,null))}const Lc=new WeakMap;function B4(t,e){if(!Lc.has(t)){const n=Qg(!0);Lc.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Lc.delete(t)}}return Lc.get(t)}const $4=new WeakMap,Fc=new WeakMap;function PE(t){const e=df(t);if(!Fc.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{Fc.set(e,r),n(r.value)}];Fc.set(e,s)}return Fc.get(e)}function js(t){const e=PE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function V4(t,e){const n=RE(e);yE(n,i=>{const s=PE();t.value=i,Array.isArray(s)&&s[1](t)})}const Qv="@firebase/database",Jv="0.14.4";/**
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
 */let NE="";function z4(t){NE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new H4(e)}}catch{}return new j4},ur=LE("localStorage"),Dp=LE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Kl("@firebase/database"),W4=function(){let t=1;return function(){return t++}}(),FE=function(t){const e=Z3(t),n=new G3;n.update(e);const i=n.digest();return lf.encodeByteArray(i)},Zl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Zl.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let vr=null,Zv=!0;const q4=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mo.logLevel=Be.VERBOSE,vr=mo.log.bind(mo),e&&Dp.set("logging_enabled",!0)):typeof t=="function"?vr=t:(vr=null,Dp.remove("logging_enabled"))},Gt=function(...t){if(Zv===!0&&(Zv=!1,vr===null&&Dp.get("logging_enabled")===!0&&q4(!0)),vr){const e=Zl.apply(null,t);vr(e)}},ec=function(t){return function(...e){Gt(t,...e)}},Op=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zl(...t);mo.error(e)},xr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zl(...t)}`;throw mo.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Zl(...t);mo.warn(e)},K4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},UE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Do="[MIN_NAME]",Cr="[MAX_NAME]",ia=function(t,e){if(t===e)return 0;if(t===Do||e===Cr)return-1;if(e===Do||t===Cr)return 1;{const n=e0(t),i=e0(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Y4=function(t,e){return t===e?0:t<e?-1:1},ga=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ut(e))},Pm=function(t){if(typeof t!="object"||t===null)return Ut(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ut(e[i]),n+=":",n+=Pm(t[e[i]]);return n+="}",n},BE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function zn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $E=function(t){j(!UE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},X4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},J4=new RegExp("^-?(0*)\\d{1,10}$"),Z4=-2147483648,eM=2147483647,e0=function(t){if(J4.test(t)){const e=Number(t);if(e>=Z4&&e<=eM)return e}return null},tc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},tM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},za=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Mp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="5",VE="v",zE="s",HE="r",jE="f",WE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qE="ls",KE="p",Pp="ac",GE="websocket",YE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function XE(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let i;if(e===GE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===YE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rM(t)&&(n.ns=t.namespace);const s=[];return zn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this.counters_={}}incrementCounter(e,n=1){ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return D3(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={},wd={};function Lm(t){const e=t.toString();return bd[e]||(bd[e]=new oM),bd[e]}function aM(t,e){const n=t.toString();return wd[n]||(wd[n]=e()),wd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&tc(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="start",cM="close",uM="pLPCommand",hM="pRTLPCB",QE="id",JE="pw",ZE="ser",fM="cb",dM="seg",pM="ts",gM="d",mM="dframe",eT=1870,tT=30,_M=eT-tT,yM=25e3,vM=3e4;class so{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ec(e),this.stats_=Lm(n),this.urlFn=l=>(this.appCheckToken&&(l[Pp]=this.appCheckToken),XE(n,YE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vM)),G4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===t0)this.id=a,this.password=l;else if(o===cM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[t0]="t",i[ZE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[fM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[VE]=Nm,this.transportSessionId&&(i[zE]=this.transportSessionId),this.lastSessionId&&(i[qE]=this.lastSessionId),this.applicationId&&(i[KE]=this.applicationId),this.appCheckToken&&(i[Pp]=this.appCheckToken),typeof location<"u"&&location.hostname&&WE.test(location.hostname)&&(i[HE]=jE);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){so.forceAllow_=!0}static forceDisallow(){so.forceDisallow_=!0}static isAvailable(){return so.forceAllow_?!0:!so.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X4()&&!Q4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=L2(n),s=BE(i,_M);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[mM]="t",i[QE]=e,i[JE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=W4(),window[uM+this.uniqueCallbackIdentifier]=e,window[hM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Gt("frame writing exception"),a.stack&&Gt(a.stack),Gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[QE]=this.myID,e[JE]=this.myPW,e[ZE]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tT+i.length<=eT;){const o=this.pendingSegs.shift();i=i+"&"+dM+s+"="+o.seg+"&"+pM+s+"="+o.ts+"&"+gM+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(yM)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=16384,wM=45e3;let ih=null;typeof MozWebSocket<"u"?ih=MozWebSocket:typeof WebSocket<"u"&&(ih=WebSocket);class Kn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ec(this.connId),this.stats_=Lm(n),this.connURL=Kn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[VE]=Nm,typeof location<"u"&&location.hostname&&WE.test(location.hostname)&&(o[HE]=jE),n&&(o[zE]=n),i&&(o[qE]=i),s&&(o[Pp]=s),r&&(o[KE]=r),XE(e,GE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ur.set("previous_websocket_failure",!0);try{let i;V2(),this.mySock=new ih(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ih!==null&&!Kn.forceDisallow_}static previouslyFailed(){return ur.isInMemoryStorage||ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=gl(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=BE(n,bM);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[so,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kn&&Kn.isAvailable();let i=n&&!Kn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Kn];else{const s=this.transports_=[];for(const r of vl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);vl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=6e4,TM=5e3,IM=10*1024,xM=100*1024,Ed="t",n0="d",CM="s",i0="r",kM="e",s0="o",r0="a",o0="n",a0="p",SM="h";class AM{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ec("c:"+this.id+":"),this.transportManager_=new vl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=za(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ed in e){const n=e[Ed];n===r0?this.upgradeIfSecondaryHealthy_():n===i0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===s0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ga("t",e),i=ga("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:a0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:r0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:o0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ga("t",e),i=ga("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ga(Ed,e);if(n0 in e){const i=e[n0];if(n===SM){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===o0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CM?this.onConnectionShutdown_(i):n===i0?this.onReset_(i):n===kM?Op("Server Error: "+i):n===s0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nm!==i&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),za(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):za(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:a0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends iT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sh}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=32,c0=768;class lt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ge(){return new lt("")}function Me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ps(t){return t.pieces_.length-t.pieceNum_}function nt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new lt(t.pieces_,e)}function sT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function oT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new lt(e,0)}function Mt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof lt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new lt(n,0)}function Ae(t){return t.pieceNum_>=t.pieces_.length}function Un(t,e){const n=Me(t),i=Me(e);if(n===null)return e;if(n===i)return Un(nt(t),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function aT(t,e){if(Ps(t)!==Ps(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ps(t)>Ps(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class DM{constructor(e,n){this.errorPrefix_=n,this.parts_=rT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=cf(this.parts_[i]);lT(this)}}function OM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cf(e),lT(t)}function MM(t){const e=t.parts_.pop();t.byteLength_-=cf(e),t.parts_.length>0&&(t.byteLength_-=1)}function lT(t){if(t.byteLength_>c0)throw new Error(t.errorPrefix_+"has a key path longer than "+c0+" bytes ("+t.byteLength_+").");if(t.parts_.length>l0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+l0+") or object contains a cycle "+ir(t))}function ir(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends iT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Um}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=1e3,PM=60*5*1e3,u0=30*1e3,NM=1.3,LM=3e4,FM="server_kill",h0=3;class zi extends nT{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zi.nextPersistentConnectionId_++,this.log_=ec("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ma,this.maxReconnectDelay_=PM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!V2())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Um.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ut(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new pl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;zi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ns(e,"w")){const i=Ao(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K3(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=u0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=q3(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Op("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LM&&(this.reconnectDelay_=ma),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+zi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Gt("getToken() completed but was canceled"):(Gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new AM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{An(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(FM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&An(h),l())}}}interrupt(e){Gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bp(this.interruptReasons_)&&(this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Pm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new lt(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=h0&&(this.reconnectDelay_=u0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=h0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NE.replace(/\./g,"-")]=1,bm()?e["framework.cordova"]=1:$2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sh.getInstance().currentlyOnline();return bp(this.interruptReasons_)&&e}}zi.nextPersistentConnectionId_=0;zi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Ne(Do,e),s=new Ne(Do,n);return this.compare(i,s)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;class cT extends pf{static get __EMPTY_NODE(){return Uc}static set __EMPTY_NODE(e){Uc=e}compare(e,n){return ia(e.name,n.name)}isDefinedOn(e){throw ea("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(Cr,Uc)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,Uc)}toString(){return".key"}}const _o=new cT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ot{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ot.RED,this.left=s??yn.EMPTY_NODE,this.right=r??yn.EMPTY_NODE}copy(e,n,i,s,r){return new Ot(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return yn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return yn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ot.RED=!0;Ot.BLACK=!1;class UM{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yn{constructor(e,n=yn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ot.BLACK,null,null))}remove(e){return new yn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ot.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Bc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Bc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Bc(this.root_,null,this.comparator_,!0,e)}}yn.EMPTY_NODE=new UM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t,e){return ia(t.name,e.name)}function Bm(t,e){return ia(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Np;function $M(t){Np=t}const uT=function(t){return typeof t=="number"?"number:"+$E(t):"string:"+t},hT=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ns(e,".sv"),"Priority must be a string or number.")}else j(t===Np||t.isEmpty(),"priority of unexpected type.");j(t===Np||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0;class Rt{constructor(e,n=Rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hT(this.priorityNode_)}static set __childrenNodeConstructor(e){f0=e}static get __childrenNodeConstructor(){return f0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ae(e)?this:Me(e)===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Me(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(j(i!==".priority"||Ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$E(this.value_):e+=this.value_,this.lazyHash_=FE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Rt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Rt.VALUE_TYPE_ORDER.indexOf(n),r=Rt.VALUE_TYPE_ORDER.indexOf(i);return j(s>=0,"Unknown leaf type: "+n),j(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fT,dT;function VM(t){fT=t}function zM(t){dT=t}class HM extends pf{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ia(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(Cr,new Rt("[PRIORITY-POST]",dT))}makePost(e,n){const i=fT(e);return new Ne(n,new Rt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Zt=new HM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=Math.log(2);class WM{constructor(e){const n=r=>parseInt(Math.log(r)/jM,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rh=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ot(f,h.node,Ot.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),m=s(d+1,c);return h=t[d],f=n?n(h):h,new Ot(f,h.node,Ot.BLACK,p,m)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const g=h-p,_=h;h-=p;const y=s(g+1,_),v=t[g],T=n?n(v):v;d(new Ot(T,v.node,m,null,y))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));m?f(g,Ot.BLACK):(f(g,Ot.BLACK),f(g,Ot.RED))}return u},o=new WM(t.length),a=r(o);return new yn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;const Qr={};class Ui{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Qr&&Zt,"ChildrenNode.ts has not been loaded"),Td=Td||new Ui({".priority":Qr},{".priority":Zt}),Td}get(e){const n=Ao(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yn?n:null}hasIndex(e){return ns(this.indexSet_,e.toString())}addIndex(e,n){j(e!==_o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Ne.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=rh(i,e.getCompare()):a=Qr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ui(u,c)}addToIndexes(e,n){const i=Gu(this.indexes_,(s,r)=>{const o=Ao(this.indexSet_,r);if(j(o,"Missing index implementation for "+r),s===Qr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),rh(a,o.getCompare())}else return Qr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ne(e.name,a))),l.insert(e,e.node)}});return new Ui(i,this.indexSet_)}removeFromIndexes(e,n){const i=Gu(this.indexes_,s=>{if(s===Qr)return s;{const r=n.get(e.name);return r?s.remove(new Ne(e.name,r)):s}});return new Ui(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class He{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&hT(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _a||(_a=new He(new yn(Bm),null,Ui.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_a}updatePriority(e){return this.children_.isEmpty()?this:new He(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_a:n}}getChild(e){const n=Me(e);return n===null?this:this.getImmediateChild(n).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Ne(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?_a:this.priorityNode_;return new He(s,o,r)}}updateChild(e,n){const i=Me(e);if(i===null)return n;{j(Me(e)!==".priority"||Ps(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(nt(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Zt,(o,a)=>{n[o]=a.val(e),i++,r&&He.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uT(this.getPriority().val())+":"),this.forEachChild(Zt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":FE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ne(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ne.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nc?-1:0}withIndex(e){if(e===_o||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new He(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_o||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Zt),s=n.getIterator(Zt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_o?null:this.indexMap_.get(e.toString())}}He.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qM extends He{constructor(){super(new yn(Bm),He.EMPTY_NODE,Ui.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return He.EMPTY_NODE}isEmpty(){return!1}}const nc=new qM;Object.defineProperties(Ne,{MIN:{value:new Ne(Do,He.EMPTY_NODE)},MAX:{value:new Ne(Cr,nc)}});cT.__EMPTY_NODE=He.EMPTY_NODE;Rt.__childrenNodeConstructor=He;$M(nc);zM(nc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=!0;function Yt(t,e=null){if(t===null)return He.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Rt(n,Yt(e))}if(!(t instanceof Array)&&KM){const n=[];let i=!1;if(zn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Yt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Ne(o,l)))}}),n.length===0)return He.EMPTY_NODE;const r=rh(n,BM,o=>o.name,Bm);if(i){const o=rh(n,Zt.getCompare());return new He(r,Yt(e),new Ui({".priority":o},{".priority":Zt}))}else return new He(r,Yt(e),Ui.Default)}else{let n=He.EMPTY_NODE;return zn(t,(i,s)=>{if(ns(t,i)&&i.substring(0,1)!=="."){const r=Yt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Yt(e))}}VM(Yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM extends pf{constructor(e){super(),this.indexPath_=e,j(!Ae(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ia(e.name,n.name):r}makePost(e,n){const i=Yt(e),s=He.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ne(n,s)}maxPost(){const e=He.EMPTY_NODE.updateChild(this.indexPath_,nc);return new Ne(Cr,e)}toString(){return rT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM extends pf{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ia(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,n){const i=Yt(e);return new Ne(n,i)}toString(){return".value"}}const XM=new YM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){return{type:"value",snapshotNode:t}}function JM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ZM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function d0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Do}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zt}copy(){const e=new $m;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function p0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Zt?n="$priority":t.index_===XM?n="$value":t.index_===_o?n="$key":(j(t.index_ instanceof GM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ut(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ut(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ut(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function g0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Zt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends nT{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ec("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=oh.getListenId_(e,i),a={};this.listens_[o]=a;const l=p0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ao(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=oh.getListenId_(e,n);delete this.listens_[i]}get(e){const n=p0(e._queryParams),i=e._path.toString(),s=new pl;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+na(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=gl(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.rootNode_=He.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(){return{value:null,children:new Map}}function pT(t,e,n){if(Ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Me(e);t.children.has(i)||t.children.set(i,ah());const s=t.children.get(i);e=nt(e),pT(s,e,n)}}function Lp(t,e,n){t.value!==null?n(e,t.value):nP(t,(i,s)=>{const r=new lt(e.toString()+"/"+i);Lp(s,r,n)})}function nP(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=10*1e3,sP=30*1e3,rP=5*60*1e3;class oP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iP(e);const i=m0+(sP-m0)*Math.random();za(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;zn(e,(s,r)=>{r>0&&ns(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),za(this.reportStats_.bind(this),Math.floor(Math.random()*2*rP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gi||(gi={}));function gT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _T(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=gi.ACK_USER_WRITE,this.source=gT()}operationForChild(e){if(Ae(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new lt(e));return new lh(Ge(),n,this.revert)}}else return j(Me(this.path)===e,"operationForChild called for unrelated child."),new lh(nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=gi.OVERWRITE}operationForChild(e){return Ae(this.path)?new kr(this.source,Ge(),this.snap.getImmediateChild(e)):new kr(this.source,nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=gi.MERGE}operationForChild(e){if(Ae(this.path)){const n=this.children.subtree(new lt(e));return n.isEmpty()?null:n.value?new kr(this.source,Ge(),n.value):new bl(this.source,Ge(),n)}else return j(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bl(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=Me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function aP(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(eP(o.childName,o.snapshotNode))}),ya(t,s,"child_removed",e,i,n),ya(t,s,"child_added",e,i,n),ya(t,s,"child_moved",r,i,n),ya(t,s,"child_changed",e,i,n),ya(t,s,"value",e,i,n),s}function ya(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>cP(t,a,l)),o.forEach(a=>{const l=lP(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function lP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cP(t,e,n){if(e.childName==null||n.childName==null)throw ea("Should only compare child_ events.");const i=new Ne(e.childName,e.snapshotNode),s=new Ne(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){return{eventCache:t,serverCache:e}}function Ha(t,e,n,i){return yT(new Vm(e,n,i),t.serverCache)}function vT(t,e,n,i){return yT(t.eventCache,new Vm(e,n,i))}function Fp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;const uP=()=>(Id||(Id=new yn(Y4)),Id);class et{constructor(e,n=uP()){this.value=e,this.children=n}static fromObject(e){let n=new et(null);return zn(e,(i,s)=>{n=n.set(new lt(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ge(),value:this.value};if(Ae(e))return null;{const i=Me(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(nt(e),n);return r!=null?{path:Mt(new lt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ae(e))return this;{const n=Me(e),i=this.children.get(n);return i!==null?i.subtree(nt(e)):new et(null)}}set(e,n){if(Ae(e))return new et(n,this.children);{const i=Me(e),r=(this.children.get(i)||new et(null)).set(nt(e),n),o=this.children.insert(i,r);return new et(this.value,o)}}remove(e){if(Ae(e))return this.children.isEmpty()?new et(null):new et(null,this.children);{const n=Me(e),i=this.children.get(n);if(i){const s=i.remove(nt(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new et(null):new et(this.value,r)}else return this}}get(e){if(Ae(e))return this.value;{const n=Me(e),i=this.children.get(n);return i?i.get(nt(e)):null}}setTree(e,n){if(Ae(e))return n;{const i=Me(e),r=(this.children.get(i)||new et(null)).setTree(nt(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new et(this.value,o)}}fold(e){return this.fold_(Ge(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Mt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ge(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Ae(e))return null;{const r=Me(e),o=this.children.get(r);return o?o.findOnPath_(nt(e),Mt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ge(),n)}foreachOnPath_(e,n,i){if(Ae(e))return this;{this.value&&i(n,this.value);const s=Me(e),r=this.children.get(s);return r?r.foreachOnPath_(nt(e),Mt(n,s),i):new et(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Mt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.writeTree_=e}static empty(){return new ni(new et(null))}}function ja(t,e,n){if(Ae(e))return new ni(new et(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Un(s,e);return r=r.updateChild(o,n),new ni(t.writeTree_.set(s,r))}else{const s=new et(n),r=t.writeTree_.setTree(e,s);return new ni(r)}}}function _0(t,e,n){let i=t;return zn(n,(s,r)=>{i=ja(i,Mt(e,s),r)}),i}function y0(t,e){if(Ae(e))return ni.empty();{const n=t.writeTree_.setTree(e,new et(null));return new ni(n)}}function Up(t,e){return Br(t,e)!=null}function Br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Un(n.path,e)):null}function v0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Zt,(i,s)=>{e.push(new Ne(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ne(i,s.value))}),e}function As(t,e){if(Ae(e))return t;{const n=Br(t,e);return n!=null?new ni(new et(n)):new ni(t.writeTree_.subtree(e))}}function Bp(t){return t.writeTree_.isEmpty()}function Oo(t,e){return bT(Ge(),t.writeTree_,e)}function bT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(j(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=bT(Mt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Mt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){return CT(e,t)}function hP(t,e,n,i,s){j(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=ja(t.visibleWrites,e,n)),t.lastWriteId=i}function fP(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function dP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pP(a,i.path)?s=!1:Xn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return gP(t),!0;if(i.snap)t.visibleWrites=y0(t.visibleWrites,i.path);else{const a=i.children;zn(a,l=>{t.visibleWrites=y0(t.visibleWrites,Mt(i.path,l))})}return!0}else return!1}function pP(t,e){if(t.snap)return Xn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xn(Mt(t.path,n),e))return!0;return!1}function gP(t){t.visibleWrites=ET(t.allWrites,mP,Ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mP(t){return t.visible}function ET(t,e,n){let i=ni.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Xn(n,o)?(a=Un(n,o),i=ja(i,a,r.snap)):Xn(o,n)&&(a=Un(o,n),i=ja(i,Ge(),r.snap.getChild(a)));else if(r.children){if(Xn(n,o))a=Un(n,o),i=_0(i,a,r.children);else if(Xn(o,n))if(a=Un(o,n),Ae(a))i=_0(i,Ge(),r.children);else{const l=Ao(r.children,Me(a));if(l){const c=l.getChild(nt(a));i=ja(i,Ge(),c)}}}else throw ea("WriteRecord should have .snap or .children")}}return i}function TT(t,e,n,i,s){if(!i&&!s){const r=Br(t.visibleWrites,e);if(r!=null)return r;{const o=As(t.visibleWrites,e);if(Bp(o))return n;if(n==null&&!Up(o,Ge()))return null;{const a=n||He.EMPTY_NODE;return Oo(o,a)}}}else{const r=As(t.visibleWrites,e);if(!s&&Bp(r))return n;if(!s&&n==null&&!Up(r,Ge()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Xn(c.path,e)||Xn(e,c.path))},a=ET(t.allWrites,o,e),l=n||He.EMPTY_NODE;return Oo(a,l)}}}function _P(t,e,n){let i=He.EMPTY_NODE;const s=Br(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Zt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=As(t.visibleWrites,e);return n.forEachChild(Zt,(o,a)=>{const l=Oo(As(r,new lt(o)),a);i=i.updateImmediateChild(o,l)}),v0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=As(t.visibleWrites,e);return v0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yP(t,e,n,i,s){j(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Mt(e,n);if(Up(t.visibleWrites,r))return null;{const o=As(t.visibleWrites,r);return Bp(o)?s.getChild(n):Oo(o,s.getChild(n))}}function vP(t,e,n,i){const s=Mt(e,n),r=Br(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=As(t.visibleWrites,s);return Oo(o,i.getNode().getImmediateChild(n))}else return null}function bP(t,e){return Br(t.visibleWrites,e)}function wP(t,e,n,i,s,r,o){let a;const l=As(t.visibleWrites,e),c=Br(l,Ge());if(c!=null)a=c;else if(n!=null)a=Oo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function EP(){return{visibleWrites:ni.empty(),allWrites:[],lastWriteId:-1}}function $p(t,e,n,i){return TT(t.writeTree,t.treePath,e,n,i)}function IT(t,e){return _P(t.writeTree,t.treePath,e)}function b0(t,e,n,i){return yP(t.writeTree,t.treePath,e,n,i)}function ch(t,e){return bP(t.writeTree,Mt(t.treePath,e))}function TP(t,e,n,i,s,r){return wP(t.writeTree,t.treePath,e,n,i,s,r)}function zm(t,e,n){return vP(t.writeTree,t.treePath,e,n)}function xT(t,e){return CT(Mt(t.treePath,e),t.writeTree)}function CT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,d0(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ZM(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,JM(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,d0(i,e.snapshotNode,s.oldSnap));else throw ea("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const kT=new xP;class Hm{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),r=TP(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function CP(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kP(t,e,n,i,s){const r=new IP;let o,a;if(n.type===gi.OVERWRITE){const c=n;c.source.fromUser?o=Vp(t,e,c.path,c.snap,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ae(c.path),o=uh(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===gi.MERGE){const c=n;c.source.fromUser?o=AP(t,e,c.path,c.children,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=zp(t,e,c.path,c.children,i,s,a,r))}else if(n.type===gi.ACK_USER_WRITE){const c=n;c.revert?o=OP(t,e,c.path,i,s,r):o=RP(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===gi.LISTEN_COMPLETE)o=DP(t,e,n.path,i,r);else throw ea("Unknown operation type: "+n.type);const l=r.getChanges();return SP(e,o,l),{viewCache:o,changes:l}}function SP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Fp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(QM(Fp(e)))}}function ST(t,e,n,i,s,r){const o=e.eventCache;if(ch(i,n)!=null)return e;{let a,l;if(Ae(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Sr(e),u=c instanceof He?c:He.EMPTY_NODE,h=IT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=$p(i,Sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Me(n);if(c===".priority"){j(Ps(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=b0(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=nt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=b0(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zm(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ha(e,a,o.isFullyInitialized()||Ae(n),t.filter.filtersNodes())}}function uh(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Ae(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Me(n);if(!l.isCompleteForPath(n)&&Ps(n)>1)return e;const p=nt(n),g=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),d,g,p,kT,null)}const h=vT(e,c,l.isFullyInitialized()||Ae(n),u.filtersNodes()),f=new Hm(s,h,r);return ST(t,h,n,s,f,a)}function Vp(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Hm(s,e,r);if(Ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ha(e,c,!0,t.filter.filtersNodes());else{const h=Me(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ha(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=nt(n),d=a.getNode().getImmediateChild(h);let p;if(Ae(f))p=i;else{const m=u.getCompleteChild(h);m!=null?sT(f)===".priority"&&m.getChild(oT(f)).isEmpty()?p=m:p=m.updateChild(f,i):p=He.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Ha(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function w0(t,e){return t.eventCache.isCompleteForChild(e)}function AP(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Mt(n,l);w0(e,Me(u))&&(a=Vp(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Mt(n,l);w0(e,Me(u))||(a=Vp(t,a,u,c,s,r,o))}),a}function E0(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function zp(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ae(n)?c=i:c=new et(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=E0(t,d,f);l=uh(t,l,new lt(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=E0(t,p,f);l=uh(t,l,new lt(h),m,s,r,o,a)}}),l}function RP(t,e,n,i,s,r,o){if(ch(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return uh(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Ae(n)){let c=new et(null);return l.getNode().forEachChild(_o,(u,h)=>{c=c.set(new lt(u),h)}),zp(t,e,n,c,s,r,a,o)}else return e}else{let c=new et(null);return i.foreach((u,h)=>{const f=Mt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),zp(t,e,n,c,s,r,a,o)}}function DP(t,e,n,i,s){const r=e.serverCache,o=vT(e,r.getNode(),r.isFullyInitialized()||Ae(n),r.isFiltered());return ST(t,o,n,i,kT,s)}function OP(t,e,n,i,s,r){let o;if(ch(i,n)!=null)return e;{const a=new Hm(i,e,s),l=e.eventCache.getNode();let c;if(Ae(n)||Me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$p(i,Sr(e));else{const h=e.serverCache.getNode();j(h instanceof He,"serverChildren would be complete if leaf node"),u=IT(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Me(n);let h=zm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,nt(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,He.EMPTY_NODE,nt(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$p(i,Sr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ch(i,Ge())!=null,Ha(e,c,o,t.filter.filtersNodes())}}function MP(t,e){const n=Sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ae(e)&&!n.getImmediateChild(Me(e)).isEmpty())?n.getChild(e):null}function T0(t,e,n,i){e.type===gi.MERGE&&e.source.queryId!==null&&(j(Sr(t.viewCache_),"We should always have a full cache before handling merges"),j(Fp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=kP(t.processor_,s,e,n,i);return CP(t.processor_,r.viewCache),j(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,PP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function PP(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return aP(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I0;function NP(t){j(!I0,"__referenceConstructor has already been defined"),I0=t}function jm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return j(r!=null,"SyncTree gave us an op for an invalid query."),T0(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(T0(o,e,n,i));return r}}function Wm(t,e){let n=null;for(const i of t.views.values())n=n||MP(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;function LP(t){j(!x0,"__referenceConstructor has already been defined"),x0=t}class C0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new et(null),this.pendingWriteTree_=EP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FP(t,e,n,i,s){return hP(t.pendingWriteTree_,e,n,i,s),s?mf(t,new kr(gT(),e,n)):[]}function ro(t,e,n=!1){const i=fP(t.pendingWriteTree_,e);if(dP(t.pendingWriteTree_,e)){let r=new et(null);return i.snap!=null?r=r.set(Ge(),!0):zn(i.children,o=>{r=r.set(new lt(o),!0)}),mf(t,new lh(i.path,r,n))}else return[]}function gf(t,e,n){return mf(t,new kr(mT(),e,n))}function UP(t,e,n){const i=et.fromObject(n);return mf(t,new bl(mT(),e,i))}function BP(t,e,n,i){const s=OT(t,i);if(s!=null){const r=MT(s),o=r.path,a=r.queryId,l=Un(o,e),c=new kr(_T(a),l,n);return PT(t,o,c)}else return[]}function $P(t,e,n,i){const s=OT(t,i);if(s){const r=MT(s),o=r.path,a=r.queryId,l=Un(o,e),c=et.fromObject(n),u=new bl(_T(a),l,c);return PT(t,o,u)}else return[]}function AT(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Un(o,e),c=Wm(a,l);if(c)return c});return TT(s,e,r,n,!0)}function mf(t,e){return RT(e,t.syncPointTree_,null,wT(t.pendingWriteTree_,Ge()))}function RT(t,e,n,i){if(Ae(t.path))return DT(t,e,n,i);{const s=e.get(Ge());n==null&&s!=null&&(n=Wm(s,Ge()));let r=[];const o=Me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=xT(i,o);r=r.concat(RT(a,l,c,u))}return s&&(r=r.concat(jm(s,t,i,n))),r}}function DT(t,e,n,i){const s=e.get(Ge());n==null&&s!=null&&(n=Wm(s,Ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=xT(i,o),u=t.operationForChild(o);u&&(r=r.concat(DT(u,a,l,c)))}),s&&(r=r.concat(jm(s,t,i,n))),r}function OT(t,e){return t.tagToQueryMap.get(e)}function MT(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new lt(t.substr(0,e))}}function PT(t,e,n){const i=t.syncPointTree_.get(e);j(i,"Missing sync point for query tag that we're tracking");const s=wT(t.pendingWriteTree_,e);return jm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qm(n)}node(){return this.node_}}class Km{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Mt(this.path_,e);return new Km(this.syncTree_,n)}node(){return AT(this.syncTree_,this.path_)}}const VP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},k0=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HP(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},HP=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&j(!1,"Unexpected increment value: "+i);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},jP=function(t,e,n,i){return Gm(e,new Km(n,t),i)},WP=function(t,e,n){return Gm(t,new qm(e),n)};function Gm(t,e,n){const i=t.getPriority().val(),s=k0(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=k0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Rt(a,Yt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Rt(s))),o.forEachChild(Zt,(a,l)=>{const c=Gm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Xm(t,e){let n=e instanceof lt?e:new lt(e),i=t,s=Me(n);for(;s!==null;){const r=Ao(i.node.children,s)||{children:{},childCount:0};i=new Ym(s,i,r),n=nt(n),s=Me(n)}return i}function sa(t){return t.node.value}function NT(t,e){t.node.value=e,Hp(t)}function LT(t){return t.node.childCount>0}function qP(t){return sa(t)===void 0&&!LT(t)}function _f(t,e){zn(t.node.children,(n,i)=>{e(new Ym(n,t,i))})}function FT(t,e,n,i){n&&!i&&e(t),_f(t,s=>{FT(s,e,!0,i)}),n&&i&&e(t)}function KP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ic(t){return new lt(t.parent===null?t.name:ic(t.parent)+"/"+t.name)}function Hp(t){t.parent!==null&&GP(t.parent,t.name,t)}function GP(t,e,n){const i=qP(n),s=ns(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Hp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Hp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/[\[\].#$\/\u0000-\u001F\u007F]/,XP=/[\[\].#$\u0000-\u001F\u007F]/,xd=10*1024*1024,UT=function(t){return typeof t=="string"&&t.length!==0&&!YP.test(t)},QP=function(t){return typeof t=="string"&&t.length!==0&&!XP.test(t)},JP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QP(t)},BT=function(t,e,n){const i=n instanceof lt?new DM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ir(i));if(typeof e=="function")throw new Error(t+"contains a function "+ir(i)+" with contents = "+e.toString());if(UE(e))throw new Error(t+"contains "+e.toString()+" "+ir(i));if(typeof e=="string"&&e.length>xd/3&&cf(e)>xd)throw new Error(t+"contains a string greater than "+xd+" utf8 bytes "+ir(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(zn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!UT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ir(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OM(i,o),BT(t,a,i),MM(i)}),s&&r)throw new Error(t+' contains ".value" child '+ir(i)+" in addition to actual children.")}},ZP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!UT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JP(n))throw new Error(J3(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tN(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!aT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function $r(t,e,n){tN(t,n),nN(t,i=>Xn(i,e)||Xn(e,i))}function nN(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(iN(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();vr&&Gt("event: "+n.toString()),tc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="repo_interrupt",rN=25;class oN{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ah(),this.transactionQueueTree_=new Ym,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aN(t,e,n){if(t.stats_=Lm(t.repoInfo_),t.forceRestClient_||tM())t.server_=new oh(t.repoInfo_,(i,s,r,o)=>{S0(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>A0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new zi(t.repoInfo_,e,(i,s,r,o)=>{S0(t,i,s,r,o)},i=>{A0(t,i)},i=>{cN(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=aM(t.repoInfo_,()=>new oP(t.stats_,t.server_)),t.infoData_=new tP,t.infoSyncTree_=new C0({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=gf(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qm(t,"connected",!1),t.serverSyncTree_=new C0({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);$r(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function lN(t){const n=t.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $T(t){return VP({timestamp:lN(t)})}function S0(t,e,n,i,s){t.dataUpdateCount++;const r=new lt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Gu(n,c=>Yt(c));o=$P(t.serverSyncTree_,r,l,s)}else{const l=Yt(n);o=BP(t.serverSyncTree_,r,l,s)}else if(i){const l=Gu(n,c=>Yt(c));o=UP(t.serverSyncTree_,r,l)}else{const l=Yt(n);o=gf(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Zm(t,r)),$r(t.eventQueue_,a,o)}function A0(t,e){Qm(t,"connected",e),e===!1&&hN(t)}function cN(t,e){zn(e,(n,i)=>{Qm(t,n,i)})}function Qm(t,e,n){const i=new lt("/.info/"+e),s=Yt(n);t.infoData_.updateSnapshot(i,s);const r=gf(t.infoSyncTree_,i,s);$r(t.eventQueue_,i,r)}function uN(t){return t.nextWriteId_++}function hN(t){VT(t,"onDisconnectEvents");const e=$T(t),n=ah();Lp(t.onDisconnect_,Ge(),(s,r)=>{const o=jP(s,r,t.serverSyncTree_,e);pT(n,s,o)});let i=[];Lp(n,Ge(),(s,r)=>{i=i.concat(gf(t.serverSyncTree_,s,r));const o=gN(t,s);Zm(t,o)}),t.onDisconnect_=ah(),$r(t.eventQueue_,Ge(),i)}function fN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sN)}function VT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Gt(n,...e)}function zT(t,e,n){return AT(t.serverSyncTree_,e,n)||He.EMPTY_NODE}function Jm(t,e=t.transactionQueueTree_){if(e||yf(t,e),sa(e)){const n=jT(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&dN(t,ic(e),n)}else LT(e)&&_f(e,n=>{Jm(t,n)})}function dN(t,e,n){const i=n.map(c=>c.currentWriteId),s=zT(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];j(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Un(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{VT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ro(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yf(t,Xm(t.transactionQueueTree_,e)),Jm(t,t.transactionQueueTree_),$r(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)tc(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zm(t,e)}},o)}function Zm(t,e){const n=HT(t,e),i=ic(n),s=jT(t,n);return pN(t,s,i),i}function pN(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Un(n,l.path);let u=!1,h;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(ro(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rN)u=!0,h="maxretry",s=s.concat(ro(t.serverSyncTree_,l.currentWriteId,!0));else{const f=zT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){BT("transaction failed: Data returned ",d,l.path);let p=Yt(d);typeof d=="object"&&d!=null&&ns(d,".priority")||(p=p.updatePriority(f.getPriority()));const g=l.currentWriteId,_=$T(t),y=WP(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=uN(t),o.splice(o.indexOf(g),1),s=s.concat(FP(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(ro(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(ro(t.serverSyncTree_,l.currentWriteId,!0))}$r(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}yf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)tc(i[a]);Jm(t,t.transactionQueueTree_)}function HT(t,e){let n,i=t.transactionQueueTree_;for(n=Me(e);n!==null&&sa(i)===void 0;)i=Xm(i,n),e=nt(e),n=Me(e);return i}function jT(t,e){const n=[];return WT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function WT(t,e,n){const i=sa(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);_f(e,s=>{WT(t,s,n)})}function yf(t,e){const n=sa(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,NT(e,n.length>0?n:void 0)}_f(e,i=>{yf(t,i)})}function gN(t,e){const n=ic(HT(t,e)),i=Xm(t.transactionQueueTree_,e);return KP(i,s=>{Cd(t,s)}),Cd(t,i),FT(i,s=>{Cd(t,s)}),n}function Cd(t,e){const n=sa(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ro(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?NT(e,void 0):n.length=r+1,$r(t.eventQueue_,ic(e),s);for(let o=0;o<i.length;o++)tc(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _N(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const R0=function(t,e){const n=yN(t),i=n.namespace;n.domain==="firebase.com"&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K4();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sM(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new lt(n.pathString)}},yN=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=mN(t.substring(u,h)));const f=_N(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Ae(this._path)?null:sT(this._path)}get ref(){return new ra(this._repo,this._path)}get _queryIdentifier(){const e=g0(this._queryParams),n=Pm(e);return n==="{}"?"default":n}get _queryObject(){return g0(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof e_))return!1;const n=this._repo===e._repo,i=aT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+RM(this._path)}}class ra extends e_{constructor(e,n){super(e,n,new $m,!1)}get parent(){const e=oT(this._path);return e===null?null:new ra(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}NP(ra);LP(ra);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="FIREBASE_DATABASE_EMULATOR_HOST",jp={};let bN=!1;function wN(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=R0(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[vN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=R0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Mp(Mp.OWNER):new iM(t.name,t.options,e);ZP("Invalid Firebase Database URL",o),Ae(o.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=TN(a,t,u,new nM(t.name,n));return new IN(h,t)}function EN(t,e){const n=jp[e];(!n||n[t.key]!==t)&&xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fN(t),delete n[t.key]}function TN(t,e,n,i){let s=jp[e.name];s||(s={},jp[e.name]=s);let r=s[t.toURLString()];return r&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oN(t,bN,n,i),s[t.toURLString()]=r,r}class IN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ra(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function xN(t){z4(Hs),wi(new si("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wN(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Sn(Qv,Jv,t),Sn(Qv,Jv,"esm2017")}zi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xN();var CN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee,t_=t_||{},fe=CN||self;function hh(){}function vf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function sc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kN(t){return Object.prototype.hasOwnProperty.call(t,kd)&&t[kd]||(t[kd]=++SN)}var kd="closure_uid_"+(1e9*Math.random()>>>0),SN=0;function AN(t,e,n){return t.call.apply(t.bind,arguments)}function RN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function en(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=AN:en=RN,en.apply(null,arguments)}function $c(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ws(){this.s=this.s,this.o=this.o}var DN=0;Ws.prototype.s=!1;Ws.prototype.na=function(){!this.s&&(this.s=!0,this.M(),DN!=0)&&kN(this)};Ws.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function n_(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function D0(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(vf(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};var ON=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fe.addEventListener("test",hh,e),fe.removeEventListener("test",hh,e)}catch{}return t}();function fh(t){return/^[\s\xa0]*$/.test(t)}var O0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sd(t,e){return t<e?-1:t>e?1:0}function bf(){var t=fe.navigator;return t&&(t=t.userAgent)?t:""}function di(t){return bf().indexOf(t)!=-1}function i_(t){return i_[" "](t),t}i_[" "]=hh;function MN(t){var e=LN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var PN=di("Opera"),Mo=di("Trident")||di("MSIE"),KT=di("Edge"),Wp=KT||Mo,GT=di("Gecko")&&!(bf().toLowerCase().indexOf("webkit")!=-1&&!di("Edge"))&&!(di("Trident")||di("MSIE"))&&!di("Edge"),NN=bf().toLowerCase().indexOf("webkit")!=-1&&!di("Edge");function YT(){var t=fe.document;return t?t.documentMode:void 0}var dh;e:{var Ad="",Rd=function(){var t=bf();if(GT)return/rv:([^\);]+)(\)|;)/.exec(t);if(KT)return/Edge\/([\d\.]+)/.exec(t);if(Mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NN)return/WebKit\/(\S+)/.exec(t);if(PN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rd&&(Ad=Rd?Rd[1]:""),Mo){var Dd=YT();if(Dd!=null&&Dd>parseFloat(Ad)){dh=String(Dd);break e}}dh=Ad}var LN={};function FN(){return MN(function(){let t=0;const e=O0(String(dh)).split("."),n=O0("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Sd(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Sd(s[2].length==0,r[2].length==0)||Sd(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var qp;if(fe.document&&Mo){var M0=YT();qp=M0||parseInt(dh,10)||void 0}else qp=void 0;var UN=qp;function wl(t,e){if(tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(GT){e:{try{i_(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wl.X.h.call(this)}}zt(wl,tn);var BN={2:"touch",3:"pen",4:"mouse"};wl.prototype.h=function(){wl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var rc="closure_listenable_"+(1e6*Math.random()|0),$N=0;function VN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++$N,this.ba=this.ea=!1}function wf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function s_(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function XT(t){const e={};for(const n in t)e[n]=t[n];return e}const P0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function QT(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<P0.length;r++)n=P0[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ef(t){this.src=t,this.g={},this.h=0}Ef.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Gp(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VN(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Kp(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=qT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(wf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gp(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var r_="closure_lm_"+(1e6*Math.random()|0),Od={};function JT(t,e,n,i,s){if(i&&i.once)return eI(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)JT(t,e[r],n,i,s);return null}return n=l_(n),t&&t[rc]?t.N(e,n,sc(i)?!!i.capture:!!i,s):ZT(t,e,n,!1,i,s)}function ZT(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=sc(s)?!!s.capture:!!s,a=a_(t);if(a||(t[r_]=a=new Ef(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=zN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ON||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(nI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zN(){function t(n){return e.call(t.src,t.listener,n)}const e=HN;return t}function eI(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)eI(t,e[r],n,i,s);return null}return n=l_(n),t&&t[rc]?t.O(e,n,sc(i)?!!i.capture:!!i,s):ZT(t,e,n,!0,i,s)}function tI(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)tI(t,e[r],n,i,s);else i=sc(i)?!!i.capture:!!i,n=l_(n),t&&t[rc]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Gp(r,n,i,s),-1<n&&(wf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=a_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gp(e,n,i,s)),(n=-1<t?e[t]:null)&&o_(n))}function o_(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[rc])Kp(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(nI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=a_(e))?(Kp(n,t),n.h==0&&(n.src=null,e[r_]=null)):wf(t)}}}function nI(t){return t in Od?Od[t]:Od[t]="on"+t}function HN(t,e){if(t.ba)t=!0;else{e=new wl(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&o_(t),t=n.call(i,e)}return t}function a_(t){return t=t[r_],t instanceof Ef?t:null}var Md="__closure_events_fn_"+(1e9*Math.random()>>>0);function l_(t){return typeof t=="function"?t:(t[Md]||(t[Md]=function(e){return t.handleEvent(e)}),t[Md])}function Lt(){Ws.call(this),this.i=new Ef(this),this.P=this,this.I=null}zt(Lt,Ws);Lt.prototype[rc]=!0;Lt.prototype.removeEventListener=function(t,e,n,i){tI(this,t,e,n,i)};function Vt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new tn(e,t);else if(e instanceof tn)e.target=e.target||t;else{var s=e;e=new tn(i,t),QT(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Vc(o,i,!0,e)&&s}if(o=e.g=t,s=Vc(o,i,!0,e)&&s,s=Vc(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Vc(o,i,!1,e)&&s}Lt.prototype.M=function(){if(Lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)wf(n[i]);delete t.g[e],t.h--}}this.I=null};Lt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Lt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Vc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Kp(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var c_=fe.JSON.stringify;function jN(){var t=rI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WN{constructor(){this.h=this.g=null}add(e,n){const i=iI.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var iI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qN,t=>t.reset());class qN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KN(t){fe.setTimeout(()=>{throw t},0)}function sI(t,e){Yp||GN(),Xp||(Yp(),Xp=!0),rI.add(t,e)}var Yp;function GN(){var t=fe.Promise.resolve(void 0);Yp=function(){t.then(YN)}}var Xp=!1,rI=new WN;function YN(){for(var t;t=jN();){try{t.h.call(t.g)}catch(n){KN(n)}var e=iI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xp=!1}function Tf(t,e){Lt.call(this),this.h=t||1,this.g=e||fe,this.j=en(this.lb,this),this.l=Date.now()}zt(Tf,Lt);ee=Tf.prototype;ee.ca=!1;ee.R=null;ee.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Vt(this,"tick"),this.ca&&(u_(this),this.start()))}};ee.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function u_(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ee.M=function(){Tf.X.M.call(this),u_(this),delete this.g};function h_(t,e,n){if(typeof t=="function")n&&(t=en(t,n));else if(t&&typeof t.handleEvent=="function")t=en(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(t,e||0)}function oI(t){t.g=h_(()=>{t.g=null,t.i&&(t.i=!1,oI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XN extends Ws{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oI(this)}M(){super.M(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function El(t){Ws.call(this),this.h=t,this.g={}}zt(El,Ws);var N0=[];function aI(t,e,n,i){Array.isArray(n)||(n&&(N0[0]=n.toString()),n=N0);for(var s=0;s<n.length;s++){var r=JT(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function lI(t){s_(t.g,function(e,n){this.g.hasOwnProperty(n)&&o_(e)},t),t.g={}}El.prototype.M=function(){El.X.M.call(this),lI(this)};El.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function If(){this.g=!0}If.prototype.Aa=function(){this.g=!1};function QN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function JN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function oo(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+e6(t,n)+(i?" "+i:"")})}function ZN(t,e){t.info(function(){return"TIMEOUT: "+e})}If.prototype.info=function(){};function e6(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return c_(n)}catch{return e}}var Vr={},L0=null;function xf(){return L0=L0||new Lt}Vr.Pa="serverreachability";function cI(t){tn.call(this,Vr.Pa,t)}zt(cI,tn);function Tl(t){const e=xf();Vt(e,new cI(e))}Vr.STAT_EVENT="statevent";function uI(t,e){tn.call(this,Vr.STAT_EVENT,t),this.stat=e}zt(uI,tn);function ln(t){const e=xf();Vt(e,new uI(e,t))}Vr.Qa="timingevent";function hI(t,e){tn.call(this,Vr.Qa,t),this.size=e}zt(hI,tn);function oc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){t()},e)}var Cf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function f_(){}f_.prototype.h=null;function F0(t){return t.h||(t.h=t.i())}function dI(){}var ac={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function d_(){tn.call(this,"d")}zt(d_,tn);function p_(){tn.call(this,"c")}zt(p_,tn);var Qp;function kf(){}zt(kf,f_);kf.prototype.g=function(){return new XMLHttpRequest};kf.prototype.i=function(){return{}};Qp=new kf;function lc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new El(this),this.O=t6,t=Wp?125:void 0,this.T=new Tf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pI}function pI(){this.i=null,this.g="",this.h=!1}var t6=45e3,Jp={},ph={};ee=lc.prototype;ee.setTimeout=function(t){this.O=t};function Zp(t,e,n){t.K=1,t.v=Af(Gi(e)),t.s=n,t.P=!0,gI(t,null)}function gI(t,e){t.F=Date.now(),cc(t),t.A=Gi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),TI(n.i,"t",i),t.C=0,n=t.l.H,t.h=new pI,t.g=jI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new XN(en(t.La,t,t.g),t.N)),aI(t.S,t.g,"readystatechange",t.ib),e=t.H?XT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Tl(),QN(t.j,t.u,t.A,t.m,t.U,t.s)}ee.ib=function(t){t=t.target;const e=this.L;e&&Bi(t)==3?e.l():this.La(t)};ee.La=function(t){try{if(t==this.g)e:{const u=Bi(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Wp||this.g&&(this.h.h||this.g.fa()||V0(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Tl(3):Tl(2)),Sf(this);var n=this.g.aa();this.Y=n;t:if(mI(this)){var i=V0(this.g);t="";var s=i.length,r=Bi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),Wa(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,JN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fh(a)){var c=a;break t}}c=null}if(n=c)oo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eg(this,n);else{this.i=!1,this.o=3,ln(12),hr(this),Wa(this);break e}}this.P?(_I(this,u,o),Wp&&this.i&&u==3&&(aI(this.S,this.T,"tick",this.hb),this.T.start())):(oo(this.j,this.m,o,null),eg(this,o)),u==4&&hr(this),this.i&&!this.I&&(u==4?$I(this.l,this):(this.i=!1,cc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ln(12)):(this.o=0,ln(13)),hr(this),Wa(this)}}}catch{}finally{}};function mI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _I(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=n6(t,n),s==ph){e==4&&(t.o=4,ln(14),i=!1),oo(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Jp){t.o=4,ln(15),oo(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else oo(t.j,t.m,s,null),eg(t,s);mI(t)&&s!=ph&&s!=Jp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ln(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),w_(e),e.K=!0,ln(11))):(oo(t.j,t.m,n,"[Invalid Chunked Response]"),hr(t),Wa(t))}ee.hb=function(){if(this.g){var t=Bi(this.g),e=this.g.fa();this.C<e.length&&(Sf(this),_I(this,t,e),this.i&&t!=4&&cc(this))}};function n6(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ph:(n=Number(e.substring(n,i)),isNaN(n)?Jp:(i+=1,i+n>e.length?ph:(e=e.substr(i,n),t.C=i+n,e)))}ee.cancel=function(){this.I=!0,hr(this)};function cc(t){t.V=Date.now()+t.O,yI(t,t.O)}function yI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=oc(en(t.gb,t),e)}function Sf(t){t.B&&(fe.clearTimeout(t.B),t.B=null)}ee.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ZN(this.j,this.A),this.K!=2&&(Tl(),ln(17)),hr(this),this.o=2,Wa(this)):yI(this,this.V-t)};function Wa(t){t.l.G==0||t.I||$I(t.l,t)}function hr(t){Sf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,u_(t.T),lI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function eg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tg(n.h,t))){if(!t.J&&tg(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_h(n),Of(n);else break e;b_(n),ln(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=oc(en(n.cb,n),6e3));if(1>=CI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else fr(n,11)}else if((t.J||n.g==t)&&_h(n),!fh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(g_(r,r.h),r.h=null))}if(i.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.za=m,ct(i.F,i.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=HI(i,i.H?i.ka:null,i.V),o.J){kI(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Sf(a),cc(a)),i.g=o}else UI(i);0<n.i.length&&Mf(n)}else c[0]!="stop"&&c[0]!="close"||fr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?fr(n,7):v_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Tl(4)}catch{}}function i6(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vf(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function s6(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function vI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s6(t),i=i6(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var bI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r6(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function br(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof br){this.h=e!==void 0?e:t.h,gh(this,t.j),this.s=t.s,this.g=t.g,mh(this,t.m),this.l=t.l,e=t.i;var n=new Il;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),U0(this,n),this.o=t.o}else t&&(n=String(t).match(bI))?(this.h=!!e,gh(this,n[1]||"",!0),this.s=Sa(n[2]||""),this.g=Sa(n[3]||"",!0),mh(this,n[4]),this.l=Sa(n[5]||"",!0),U0(this,n[6]||"",!0),this.o=Sa(n[7]||"")):(this.h=!!e,this.i=new Il(null,this.h))}br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Aa(e,B0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Aa(e,B0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Aa(n,n.charAt(0)=="/"?l6:a6,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Aa(n,u6)),t.join("")};function Gi(t){return new br(t)}function gh(t,e,n){t.j=n?Sa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function U0(t,e,n){e instanceof Il?(t.i=e,h6(t.i,t.h)):(n||(e=Aa(e,c6)),t.i=new Il(e,t.h))}function ct(t,e,n){t.i.set(e,n)}function Af(t){return ct(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Aa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,o6),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function o6(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var B0=/[#\/\?@]/g,a6=/[#\?:]/g,l6=/[#\?]/g,c6=/[#\?@]/g,u6=/#/g;function Il(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qs(t){t.g||(t.g=new Map,t.h=0,t.i&&r6(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ee=Il.prototype;ee.add=function(t,e){qs(this),this.i=null,t=oa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wI(t,e){qs(t),e=oa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function EI(t,e){return qs(t),e=oa(t,e),t.g.has(e)}ee.forEach=function(t,e){qs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};ee.oa=function(){qs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};ee.W=function(t){qs(this);let e=[];if(typeof t=="string")EI(this,t)&&(e=e.concat(this.g.get(oa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ee.set=function(t,e){return qs(this),this.i=null,t=oa(this,t),EI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ee.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function TI(t,e,n){wI(t,e),0<n.length&&(t.i=null,t.g.set(oa(t,e),n_(n)),t.h+=n.length)}ee.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function oa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function h6(t,e){e&&!t.j&&(qs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(wI(this,i),TI(this,s,n))},t)),t.j=e}var f6=class{constructor(e,n){this.h=e,this.g=n}};function II(t){this.l=t||d6,fe.PerformanceNavigationTiming?(t=fe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(fe.g&&fe.g.Ga&&fe.g.Ga()&&fe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var d6=10;function xI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CI(t){return t.h?1:t.g?t.g.size:0}function tg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function g_(t,e){t.g?t.g.add(e):t.h=e}function kI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}II.prototype.cancel=function(){if(this.i=SI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function SI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return n_(t.i)}function m_(){}m_.prototype.stringify=function(t){return fe.JSON.stringify(t,void 0)};m_.prototype.parse=function(t){return fe.JSON.parse(t,void 0)};function p6(){this.g=new m_}function g6(t,e,n){const i=n||"";try{vI(t,function(s,r){let o=s;sc(s)&&(o=c_(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function m6(t,e){const n=new If;if(fe.Image){const i=new Image;i.onload=$c(zc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=$c(zc,n,i,"TestLoadImage: error",!1,e),i.onabort=$c(zc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=$c(zc,n,i,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function zc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function uc(t){this.l=t.ac||null,this.j=t.jb||!1}zt(uc,f_);uc.prototype.g=function(){return new Rf(this.l,this.j)};uc.prototype.i=function(t){return function(){return t}}({});function Rf(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=__,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(Rf,Lt);var __=0;ee=Rf.prototype;ee.open=function(t,e){if(this.readyState!=__)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xl(this)};ee.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||fe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ee.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hc(this)),this.readyState=__};ee.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xl(this)),this.g&&(this.readyState=3,xl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof fe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;AI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function AI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ee.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hc(this):xl(this),this.readyState==3&&AI(this)}};ee.Va=function(t){this.g&&(this.response=this.responseText=t,hc(this))};ee.Ua=function(t){this.g&&(this.response=t,hc(this))};ee.ga=function(){this.g&&hc(this)};function hc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xl(t)}ee.setRequestHeader=function(t,e){this.v.append(t,e)};ee.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ee.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _6=fe.JSON.parse;function mt(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=RI,this.K=this.L=!1}zt(mt,Lt);var RI="",y6=/^https?$/i,v6=["POST","PUT"];ee=mt.prototype;ee.Ka=function(t){this.L=t};ee.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qp.g(),this.C=this.u?F0(this.u):F0(Qp),this.g.onreadystatechange=en(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){$0(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=fe.FormData&&t instanceof fe.FormData,!(0<=qT(v6,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{MI(this),0<this.B&&((this.K=b6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.qa,this)):this.A=h_(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){$0(this,r)}};function b6(t){return Mo&&FN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ee.qa=function(){typeof t_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Vt(this,"timeout"),this.abort(8))};function $0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DI(t),Df(t)}function DI(t){t.D||(t.D=!0,Vt(t,"complete"),Vt(t,"error"))}ee.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Vt(this,"complete"),Vt(this,"abort"),Df(this))};ee.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Df(this,!0)),mt.X.M.call(this)};ee.Ha=function(){this.s||(this.F||this.v||this.l?OI(this):this.fb())};ee.fb=function(){OI(this)};function OI(t){if(t.h&&typeof t_<"u"&&(!t.C[1]||Bi(t)!=4||t.aa()!=2)){if(t.v&&Bi(t)==4)h_(t.Ha,0,t);else if(Vt(t,"readystatechange"),Bi(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(bI)[1]||null;if(!s&&fe.self&&fe.self.location){var r=fe.self.location.protocol;s=r.substr(0,r.length-1)}i=!y6.test(s?s.toLowerCase():"")}n=i}if(n)Vt(t,"complete"),Vt(t,"success");else{t.m=6;try{var o=2<Bi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",DI(t)}}finally{Df(t)}}}}function Df(t,e){if(t.g){MI(t);const n=t.g,i=t.C[0]?hh:null;t.g=null,t.C=null,e||Vt(t,"ready");try{n.onreadystatechange=i}catch{}}}function MI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(fe.clearTimeout(t.A),t.A=null)}function Bi(t){return t.g?t.g.readyState:0}ee.aa=function(){try{return 2<Bi(this)?this.g.status:-1}catch{return-1}};ee.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ee.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_6(e)}};function V0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case RI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ee.Ea=function(){return this.m};ee.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function PI(t){let e="";return s_(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function y_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=PI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ct(t,e,n))}function va(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NI(t){this.Ca=0,this.i=[],this.j=new If,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=va("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=va("baseRetryDelayMs",5e3,t),this.bb=va("retryDelaySeedMs",1e4,t),this.$a=va("forwardChannelMaxRetries",2,t),this.ta=va("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new II(t&&t.concurrentRequestLimit),this.Fa=new p6,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ee=NI.prototype;ee.ma=8;ee.G=1;function v_(t){if(LI(t),t.G==3){var e=t.U++,n=Gi(t.F);ct(n,"SID",t.I),ct(n,"RID",e),ct(n,"TYPE","terminate"),fc(t,n),e=new lc(t,t.j,e,void 0),e.K=2,e.v=Af(Gi(n)),n=!1,fe.navigator&&fe.navigator.sendBeacon&&(n=fe.navigator.sendBeacon(e.v.toString(),"")),!n&&fe.Image&&(new Image().src=e.v,n=!0),n||(e.g=jI(e.l,null),e.g.da(e.v)),e.F=Date.now(),cc(e)}zI(t)}function Of(t){t.g&&(w_(t),t.g.cancel(),t.g=null)}function LI(t){Of(t),t.u&&(fe.clearTimeout(t.u),t.u=null),_h(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&fe.clearTimeout(t.m),t.m=null)}function Mf(t){xI(t.h)||t.m||(t.m=!0,sI(t.Ja,t),t.C=0)}function w6(t,e){return CI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=oc(en(t.Ja,t,e),VI(t,t.C)),t.C++,!0)}ee.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new lc(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=XT(r),QT(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=FI(this,s,e),n=Gi(this.F),ct(n,"RID",t),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),fc(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(PI(r)))+"&"+e:this.o&&y_(n,this.o,r)),g_(this.h,s),this.Ya&&ct(n,"TYPE","init"),this.O?(ct(n,"$req",e),ct(n,"SID","null"),s.Z=!0,Zp(s,n,null)):Zp(s,n,e),this.G=2}}else this.G==3&&(t?z0(this,t):this.i.length==0||xI(this.h)||z0(this))};function z0(t,e){var n;e?n=e.m:n=t.U++;const i=Gi(t.F);ct(i,"SID",t.I),ct(i,"RID",n),ct(i,"AID",t.T),fc(t,i),t.o&&t.s&&y_(i,t.o,t.s),n=new lc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=FI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),g_(t.h,n),Zp(n,i,e)}function fc(t,e){t.ia&&s_(t.ia,function(n,i){ct(e,i,n)}),t.l&&vI({},function(n,i){ct(e,i,n)})}function FI(t,e,n){n=Math.min(t.i.length,n);var i=t.l?en(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{g6(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function UI(t){t.g||t.u||(t.Z=1,sI(t.Ia,t),t.A=0)}function b_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=oc(en(t.Ia,t),VI(t,t.A)),t.A++,!0)}ee.Ia=function(){if(this.u=null,BI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=oc(en(this.eb,this),t)}};ee.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ln(10),Of(this),BI(this))};function w_(t){t.B!=null&&(fe.clearTimeout(t.B),t.B=null)}function BI(t){t.g=new lc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Gi(t.sa);ct(e,"RID","rpc"),ct(e,"SID",t.I),ct(e,"CI",t.L?"0":"1"),ct(e,"AID",t.T),ct(e,"TYPE","xmlhttp"),fc(t,e),t.o&&t.s&&y_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Af(Gi(e)),n.s=null,n.P=!0,gI(n,t)}ee.cb=function(){this.v!=null&&(this.v=null,Of(this),b_(this),ln(19))};function _h(t){t.v!=null&&(fe.clearTimeout(t.v),t.v=null)}function $I(t,e){var n=null;if(t.g==e){_h(t),w_(t),t.g=null;var i=2}else if(tg(t.h,e))n=e.D,kI(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=xf(),Vt(i,new hI(i,n)),Mf(t)}else UI(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&w6(t,e)||i==2&&b_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:fr(t,5);break;case 4:fr(t,10);break;case 3:fr(t,6);break;default:fr(t,2)}}}function VI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function fr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=en(t.kb,t);n||(n=new br("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||gh(n,"https"),Af(n)),m6(n.toString(),i)}else ln(2);t.G=0,t.l&&t.l.va(e),zI(t),LI(t)}ee.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function zI(t){if(t.G=0,t.la=[],t.l){const e=SI(t.h);(e.length!=0||t.i.length!=0)&&(D0(t.la,e),D0(t.la,t.i),t.h.i.length=0,n_(t.i),t.i.length=0),t.l.ua()}}function HI(t,e,n){var i=n instanceof br?Gi(n):new br(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),mh(i,i.m);else{var s=fe.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new br(null,void 0);i&&gh(r,i),e&&(r.g=e),s&&mh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&ct(i,n,e),ct(i,"VER",t.ma),fc(t,i),i}function jI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new mt(new uc({jb:!0})):new mt(t.ra),e.Ka(t.H),e}function WI(){}ee=WI.prototype;ee.xa=function(){};ee.wa=function(){};ee.va=function(){};ee.ua=function(){};ee.Ra=function(){};function yh(){if(Mo&&!(10<=Number(UN)))throw Error("Environmental error: no available transport.")}yh.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){Lt.call(this),this.g=new NI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!fh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new aa(this)}zt(Dn,Lt);Dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ln(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=HI(t,null,t.V),Mf(t)};Dn.prototype.close=function(){v_(this.g)};Dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=c_(t),t=n);e.i.push(new f6(e.ab++,t)),e.G==3&&Mf(e)};Dn.prototype.M=function(){this.g.l=null,delete this.j,v_(this.g),delete this.g,Dn.X.M.call(this)};function qI(t){d_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(qI,d_);function KI(){p_.call(this),this.status=1}zt(KI,p_);function aa(t){this.g=t}zt(aa,WI);aa.prototype.xa=function(){Vt(this.g,"a")};aa.prototype.wa=function(t){Vt(this.g,new qI(t))};aa.prototype.va=function(t){Vt(this.g,new KI)};aa.prototype.ua=function(){Vt(this.g,"b")};yh.prototype.createWebChannel=yh.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;Cf.NO_ERROR=0;Cf.TIMEOUT=8;Cf.HTTP_ERROR=6;fI.COMPLETE="complete";dI.EventType=ac;ac.OPEN="a";ac.CLOSE="b";ac.ERROR="c";ac.MESSAGE="d";Lt.prototype.listen=Lt.prototype.N;mt.prototype.listenOnce=mt.prototype.O;mt.prototype.getLastError=mt.prototype.Oa;mt.prototype.getLastErrorCode=mt.prototype.Ea;mt.prototype.getStatus=mt.prototype.aa;mt.prototype.getResponseJson=mt.prototype.Sa;mt.prototype.getResponseText=mt.prototype.fa;mt.prototype.send=mt.prototype.da;mt.prototype.setWithCredentials=mt.prototype.Ka;var E6=function(){return new yh},T6=function(){return xf()},Pd=Cf,I6=fI,x6=Vr,H0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},C6=uc,Hc=dI,k6=mt;const j0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Kl("@firebase/firestore");function W0(){return Ar.logLevel}function te(t,...e){if(Ar.logLevel<=Be.DEBUG){const n=e.map(E_);Ar.debug(`Firestore (${la}): ${t}`,...n)}}function Yi(t,...e){if(Ar.logLevel<=Be.ERROR){const n=e.map(E_);Ar.error(`Firestore (${la}): ${t}`,...n)}}function vh(t,...e){if(Ar.logLevel<=Be.WARN){const n=e.map(E_);Ar.warn(`Firestore (${la}): ${t}`,...n)}}function E_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${la}) INTERNAL ASSERTION FAILED: `+t;throw Yi(e),new Error(e)}function at(t,e){t||ue()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class A6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R6{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(at(typeof i.accessToken=="string"),new GI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return at(e===null||typeof e=="string"),new Kt(e)}}class D6{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class O6{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new D6(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(at(typeof n.token=="string"),this.T=n.token,new M6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=N6(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ze(t,e){return t<e?-1:t>e?1:0}function Po(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Tt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Tt(0,0))}static max(){return new _e(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,i){n===void 0?n=0:n>e.length&&ue(),i===void 0?i=e.length-n:i>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Cl{construct(e,n,i){return new st(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const L6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends Cl{construct(e,n,i){return new Jt(e,n,i)}static isValidIdentifier(e){return L6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Jt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(n)}static emptyPath(){return new Jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(st.fromString(e))}static fromName(e){return new re(st.fromString(e).popFirst(5))}static empty(){return new re(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new st(e.slice()))}}function F6(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(i===1e9?new Tt(n+1,0):new Tt(n,i));return new Ns(s,re.empty(),e)}function U6(t){return new Ns(t.readTime,t.key,-1)}class Ns{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ns(_e.min(),re.empty(),-1)}static max(){return new Ns(_e.max(),re.empty(),-1)}}function B6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ze(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==$6)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,i)=>{n(e)})}static reject(e){return new L((n,i)=>{i(e)})}static waitFor(e){return new L((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new L((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new L((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function pc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class T_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}T_.ct=-1;function Pf(t){return t==null}function bh(t){return t===0&&1/t==-1/0}function z6(t){return typeof t=="number"&&Number.isInteger(t)&&!bh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new kt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jc(this.root,e,this.comparator,!0)}}class jc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ft.RED,this.left=s??Ft.EMPTY,this.right=r??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Ft(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new K0(this.data.getIterator())}getIteratorFrom(e){return new K0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class K0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Jt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new Ct(Jt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class H6 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new H6("Invalid base64 string: "+s):s}}(e);return new rn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const j6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(t){if(at(!!t),typeof t=="string"){let e=0;const n=j6.exec(t);if(at(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function No(t){return typeof t=="string"?rn.fromBase64String(t):rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function JI(t){const e=t.mapValue.fields.__previous_value__;return QI(e)?JI(e):e}function kl(t){const e=Ls(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?QI(t)?4:q6(t)?9007199254740991:10:ue()}function Ii(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kl(t).isEqual(kl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ls(i.timestampValue),o=Ls(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return No(i.bytesValue).isEqual(No(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return wt(i.geoPointValue.latitude)===wt(s.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return wt(i.integerValue)===wt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=wt(i.doubleValue),o=wt(s.doubleValue);return r===o?bh(r)===bh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Po(t.arrayValue.values||[],e.arrayValue.values||[],Ii);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(q0(r)!==q0(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ii(r[a],o[a])))return!1;return!0}(t,e);default:return ue()}}function Al(t,e){return(t.values||[]).find(n=>Ii(n,e))!==void 0}function Lo(t,e){if(t===e)return 0;const n=Rr(t),i=Rr(e);if(n!==i)return ze(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=wt(s.integerValue||s.doubleValue),a=wt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return G0(t.timestampValue,e.timestampValue);case 4:return G0(kl(t),kl(e));case 5:return ze(t.stringValue,e.stringValue);case 6:return function(s,r){const o=No(s),a=No(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ze(o[l],a[l]);if(c!==0)return c}return ze(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=ze(wt(s.latitude),wt(r.latitude));return o!==0?o:ze(wt(s.longitude),wt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Lo(o[l],a[l]);if(c)return c}return ze(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Wc.mapValue&&r===Wc.mapValue)return 0;if(s===Wc.mapValue)return 1;if(r===Wc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ze(a[u],c[u]);if(h!==0)return h;const f=Lo(o[a[u]],l[c[u]]);if(f!==0)return f}return ze(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ue()}}function G0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=Ls(t),i=Ls(e),s=ze(n.seconds,i.seconds);return s!==0?s:ze(n.nanos,i.nanos)}function Fo(t){return ng(t)}function ng(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ls(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?No(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,re.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=ng(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ng(i.fields[a])}`;return r+"}"}(t.mapValue):ue();var e,n}function Y0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ig(t){return!!t&&"integerValue"in t}function I_(t){return!!t&&"arrayValue"in t}function X0(t){return!!t&&"nullValue"in t}function Q0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Au(t){return!!t&&"mapValue"in t}function qa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=qa(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qa(n)}setAll(e){let n=Jt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=qa(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ii(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Au(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){zr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new gn(qa(this.value))}}function ZI(t){const e=[];return zr(t.fields,(n,i)=>{const s=new Jt([n]);if(Au(i)){const r=ZI(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xt(e,0,_e.min(),_e.min(),_e.min(),gn.empty(),0)}static newFoundDocument(e,n,i,s){return new Xt(e,1,n,_e.min(),i,s,0)}static newNoDocument(e,n){return new Xt(e,2,n,_e.min(),_e.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,_e.min(),_e.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wh{constructor(e,n){this.position=e,this.inclusive=n}}function J0(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=re.comparator(re.fromName(o.referenceValue),n.key):i=Lo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ii(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function K6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ex{}class Et extends ex{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Y6(e,n,i):n==="array-contains"?new J6(e,i):n==="in"?new Z6(e,i):n==="not-in"?new eL(e,i):n==="array-contains-any"?new tL(e,i):new Et(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new X6(e,i):new Q6(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lo(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ri extends ex{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ri(e,n)}matches(e){return tx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function tx(t){return t.op==="and"}function nx(t){return G6(t)&&tx(t)}function G6(t){for(const e of t.filters)if(e instanceof ri)return!1;return!0}function sg(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+Fo(t.value);if(nx(t))return t.filters.map(e=>sg(e)).join(",");{const e=t.filters.map(n=>sg(n)).join(",");return`${t.op}(${e})`}}function ix(t,e){return t instanceof Et?function(n,i){return i instanceof Et&&n.op===i.op&&n.field.isEqual(i.field)&&Ii(n.value,i.value)}(t,e):t instanceof ri?function(n,i){return i instanceof ri&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&ix(r,i.filters[o]),!0):!1}(t,e):void ue()}function sx(t){return t instanceof Et?function(e){return`${e.field.canonicalString()} ${e.op} ${Fo(e.value)}`}(t):t instanceof ri?function(e){return e.op.toString()+" {"+e.getFilters().map(sx).join(" ,")+"}"}(t):"Filter"}class Y6 extends Et{constructor(e,n,i){super(e,n,i),this.key=re.fromName(i.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class X6 extends Et{constructor(e,n){super(e,"in",n),this.keys=rx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Q6 extends Et{constructor(e,n){super(e,"not-in",n),this.keys=rx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>re.fromName(i.referenceValue))}class J6 extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return I_(n)&&Al(n.arrayValue,this.value)}}class Z6 extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Al(this.value.arrayValue,n)}}class eL extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Al(this.value.arrayValue,n)}}class tL extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!I_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Al(this.value.arrayValue,i))}}/**
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
 */class nL{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function e1(t,e=null,n=[],i=[],s=null,r=null,o=null){return new nL(t,e,n,i,s,r,o)}function x_(t){const e=ve(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>sg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Pf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Fo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Fo(i)).join(",")),e.ft=n}return e.ft}function C_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!K6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ix(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Z0(t.startAt,e.startAt)&&Z0(t.endAt,e.endAt)}function rg(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function iL(t,e,n,i,s,r,o,a){return new gc(t,e,n,i,s,r,o,a)}function Nf(t){return new gc(t)}function t1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ox(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function k_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ax(t){return t.collectionGroup!==null}function yo(t){const e=ve(t);if(e.dt===null){e.dt=[];const n=k_(e),i=ox(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Ka(n)),e.dt.push(new Ka(Jt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ka(Jt.keyField(),r))}}}return e.dt}function Xi(t){const e=ve(t);if(!e.wt)if(e.limitType==="F")e.wt=e1(e.path,e.collectionGroup,yo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of yo(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ka(r.field,o))}const i=e.endAt?new wh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new wh(e.startAt.position,e.startAt.inclusive):null;e.wt=e1(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function og(t,e){e.getFirstInequalityField(),k_(t);const n=t.filters.concat([e]);return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ag(t,e,n){return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lf(t,e){return C_(Xi(t),Xi(e))&&t.limitType===e.limitType}function lx(t){return`${x_(Xi(t))}|lt:${t.limitType}`}function lg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>sx(i)).join(", ")}]`),Pf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Fo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Fo(i)).join(",")),`Target(${n})`}(Xi(t))}; limitType=${t.limitType})`}function Ff(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):re.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of yo(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=J0(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,yo(n),i)||n.endAt&&!function(s,r,o){const a=J0(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,yo(n),i))}(t,e)}function sL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cx(t){return(e,n)=>{let i=!1;for(const s of yo(t)){const r=rL(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function rL(t,e,n){const i=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Lo(a,l):ue()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return XI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=new kt(re.comparator);function Qi(){return oL}const ux=new kt(re.comparator);function Ra(...t){let e=ux;for(const n of t)e=e.insert(n.key,n);return e}function hx(t){let e=ux;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function dr(){return Ga()}function fx(){return Ga()}function Ga(){return new ca(t=>t.toString(),(t,e)=>t.isEqual(e))}const aL=new kt(re.comparator),lL=new Ct(re.comparator);function ke(...t){let e=lL;for(const n of t)e=e.add(n);return e}const cL=new Ct(ze);function dx(){return cL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bh(e)?"-0":e}}function gx(t){return{integerValue:""+t}}function uL(t,e){return z6(e)?gx(e):px(t,e)}/**
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
 */class Uf{constructor(){this._=void 0}}function hL(t,e,n){return t instanceof Eh?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Rl?_x(t,e):t instanceof Dl?yx(t,e):function(i,s){const r=mx(i,s),o=n1(r)+n1(i._t);return ig(r)&&ig(i._t)?gx(o):px(i.serializer,o)}(t,e)}function fL(t,e,n){return t instanceof Rl?_x(t,e):t instanceof Dl?yx(t,e):n}function mx(t,e){return t instanceof Th?ig(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Eh extends Uf{}class Rl extends Uf{constructor(e){super(),this.elements=e}}function _x(t,e){const n=vx(e);for(const i of t.elements)n.some(s=>Ii(s,i))||n.push(i);return{arrayValue:{values:n}}}class Dl extends Uf{constructor(e){super(),this.elements=e}}function yx(t,e){let n=vx(e);for(const i of t.elements)n=n.filter(s=>!Ii(s,i));return{arrayValue:{values:n}}}class Th extends Uf{constructor(e,n){super(),this.serializer=e,this._t=n}}function n1(t){return wt(t.integerValue||t.doubleValue)}function vx(t){return I_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dL(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Rl&&i instanceof Rl||n instanceof Dl&&i instanceof Dl?Po(n.elements,i.elements,Ii):n instanceof Th&&i instanceof Th?Ii(n._t,i._t):n instanceof Eh&&i instanceof Eh}(t.transform,e.transform)}class pL{constructor(e,n){this.version=e,this.transformResults=n}}class ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bf{}function bx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S_(t.key,ii.none()):new mc(t.key,t.data,ii.none());{const n=t.data,i=gn.empty();let s=new Ct(Jt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ks(t.key,i,new kn(s.toArray()),ii.none())}}function gL(t,e,n){t instanceof mc?function(i,s,r){const o=i.value.clone(),a=s1(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ks?function(i,s,r){if(!Ru(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=s1(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(wx(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Ya(t,e,n,i){return t instanceof mc?function(s,r,o,a){if(!Ru(s.precondition,r))return o;const l=s.value.clone(),c=r1(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ks?function(s,r,o,a){if(!Ru(s.precondition,r))return o;const l=r1(s.fieldTransforms,a,r),c=r.data;return c.setAll(wx(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Ru(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function mL(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=mx(i.transform,s||null);r!=null&&(n===null&&(n=gn.empty()),n.set(i.field,r))}return n||null}function i1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Po(n,i,(s,r)=>dL(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mc extends Bf{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ks extends Bf{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function s1(t,e,n){const i=new Map;at(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,fL(o,a,n[s]))}return i}function r1(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,hL(r,o,e))}return i}class S_ extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _L extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&gL(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ya(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ya(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=fx();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=bx(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,(n,i)=>i1(n,i))&&Po(this.baseMutations,e.baseMutations,(n,i)=>i1(n,i))}}class A_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){at(e.mutations.length===i.length);let s=aL;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new A_(e,n,i,s)}}/**
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
 */class vL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Oe;function wL(t){switch(t){default:return ue();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Ex(t){if(t===void 0)return Yi("GRPC error has no .code"),M.UNKNOWN;switch(t){case bt.OK:return M.OK;case bt.CANCELLED:return M.CANCELLED;case bt.UNKNOWN:return M.UNKNOWN;case bt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case bt.INTERNAL:return M.INTERNAL;case bt.UNAVAILABLE:return M.UNAVAILABLE;case bt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case bt.NOT_FOUND:return M.NOT_FOUND;case bt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case bt.ABORTED:return M.ABORTED;case bt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case bt.DATA_LOSS:return M.DATA_LOSS;default:return ue()}}(Oe=bt||(bt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class R_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return qc}static getOrCreateInstance(){return qc===null&&(qc=new R_),qc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let qc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,_c.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new $f(_e.min(),s,dx(),Qi(),ke())}}class _c{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new _c(i,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class Tx{constructor(e,n){this.targetId=e,this.Et=n}}class Ix{constructor(e,n,i=rn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class o1{constructor(){this.At=0,this.Rt=l1(),this.vt=rn.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ke(),n=ke(),i=ke();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ue()}}),new _c(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=l1()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class EL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Qi(),this.qt=a1(),this.Ut=new Ct(ze)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(rg(o))if(s===0){const a=new re(o.path);this.Qt(i,a,Xt.newNoDocument(a,_e.min()))}else at(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=R_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&rg(a.target)){const l=new re(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Xt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=ke();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new $f(e,n,this.Ut,this.Lt,i);return this.Lt=Qi(),this.qt=a1(),this.Ut=new Ct(ze),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new o1,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ct(ze),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new o1),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function a1(){return new kt(re.comparator)}function l1(){return new kt(re.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xL=(()=>({and:"AND",or:"OR"}))();class CL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kL(t,e){return Ih(t,e.toTimestamp())}function vi(t){return at(!!t),_e.fromTimestamp(function(e){const n=Ls(e);return new Tt(n.seconds,n.nanos)}(t))}function D_(t,e){return function(n){return new st(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cx(t){const e=st.fromString(t);return at(Rx(e)),e}function cg(t,e){return D_(t.databaseId,e.path)}function Nd(t,e){const n=Cx(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(kx(n))}function ug(t,e){return D_(t.databaseId,e)}function SL(t){const e=Cx(t);return e.length===4?st.emptyPath():kx(e)}function hg(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kx(t){return at(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function c1(t,e,n){return{name:cg(t,e),fields:n.value.mapValue.fields}}function AL(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(at(c===void 0||typeof c=="string"),rn.fromBase64String(c||"")):(at(c===void 0||c instanceof Uint8Array),rn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?M.UNKNOWN:Ex(l.code);return new X(c,l.message||"")}(o);n=new Ix(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Nd(t,i.document.name),r=vi(i.document.updateTime),o=i.document.createTime?vi(i.document.createTime):_e.min(),a=new gn({mapValue:{fields:i.document.fields}}),l=Xt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Du(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Nd(t,i.document),r=i.readTime?vi(i.readTime):_e.min(),o=Xt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Nd(t,i.document),r=i.removedTargetIds||[];n=new Du([],r,s,null)}else{if(!("filter"in e))return ue();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new bL(s),o=i.targetId;n=new Tx(o,r)}}return n}function RL(t,e){let n;if(e instanceof mc)n={update:c1(t,e.key,e.value)};else if(e instanceof S_)n={delete:cg(t,e.key)};else if(e instanceof Ks)n={update:c1(t,e.key,e.data),updateMask:BL(e.fieldMask)};else{if(!(e instanceof _L))return ue();n={verify:cg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Eh)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rl)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Dl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Th)return{fieldPath:r.field.canonicalString(),increment:o._t};throw ue()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function DL(t,e){return t&&t.length>0?(at(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?vi(i.updateTime):vi(s);return r.isEqual(_e.min())&&(r=vi(s)),new pL(r,i.transformResults||[])}(n,e))):[]}function OL(t,e){return{documents:[ug(t,e.path)]}}function ML(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=ug(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ug(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return Ax(ri.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:to(u.field),direction:LL(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Pf(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function PL(t){let e=SL(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){at(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Sx(u);return h instanceof ri&&nx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ka(no(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new wh(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new wh(f,h)}(n.endAt)),iL(e,s,o,r,a,"F",l,c)}function NL(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ue()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sx(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=no(e.unaryFilter.field);return Et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=no(e.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(e.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=no(e.unaryFilter.field);return Et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(e){return Et.create(no(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ri.create(e.compositeFilter.filters.map(n=>Sx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ue()}}(e.compositeFilter.op))}(t):ue()}function LL(t){return TL[t]}function FL(t){return IL[t]}function UL(t){return xL[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return Jt.fromServerFormat(t.fieldPath)}function Ax(t){return t instanceof Et?function(e){if(e.op==="=="){if(Q0(e.value))return{unaryFilter:{field:to(e.field),op:"IS_NAN"}};if(X0(e.value))return{unaryFilter:{field:to(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Q0(e.value))return{unaryFilter:{field:to(e.field),op:"IS_NOT_NAN"}};if(X0(e.value))return{unaryFilter:{field:to(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(e.field),op:FL(e.op),value:e.value}}}(t):t instanceof ri?function(e){const n=e.getFilters().map(i=>Ax(i));return n.length===1?n[0]:{compositeFilter:{op:UL(e.op),filters:n}}}(t):ue()}function BL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,i,s,r=_e.min(),o=_e.min(),a=rn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.se=e}}function VL(t){const e=PL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ag(e,e.limit,"L"):e}/**
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
 */class zL{constructor(){this.He=new HL}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ns.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ns.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class HL{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ct(st.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ct(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Uo(0)}static bn(){return new Uo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.changes=new ca(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Ya(i.mutation,s,kn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ke()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Ra();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ke()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Qi();const o=Ga(),a=Ga();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ks)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ya(u.mutation,c,u.mutation.getFieldMask(),Tt.now())):o.set(c.key,kn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new WL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ga();let s=new kt((o,a)=>o-a),r=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||kn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||ke()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=fx();u.forEach(f=>{if(!r.has(f)){const d=bx(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ax(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):L.resolve(dr());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ke())).next(u=>({batchId:a,changes:hx(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(i=>{let s=Ra();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Ra();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(c,u){return new gc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Xt.newInvalidDocument(c)))});let o=Ra();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ya(c.mutation,l,kn.empty(),Tt.now()),Ff(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:vi(i.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:VL(i.bundledQuery),readTime:vi(i.readTime)}}(n)),L.resolve()}}/**
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
 */class GL{constructor(){this.overlays=new kt(re.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=dr();return L.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=dr(),r=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new kt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=dr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=dr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return L.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new vL(n,i));let r=this.ts.get(n);r===void 0&&(r=ke(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.es=new Ct(Dt.ns),this.ss=new Ct(Dt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new Dt(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new Dt(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new re(new st([])),i=new Dt(n,e),s=new Dt(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new re(new st([])),i=new Dt(n,e),s=new Dt(n,e+1);let r=ke();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Dt(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Dt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return re.comparator(e.key,n.key)||ze(e.ds,n.ds)}static rs(e,n){return ze(e.ds,n.ds)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ct(Dt.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yL(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Dt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Dt(n,0),s=new Dt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ct(ze);return n.forEach(s=>{const r=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),L.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;re.isDocumentKey(r)||(r=r.child(""));const o=new Dt(new re(r),0);let a=new Ct(ze);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){at(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return L.forEach(n.mutations,s=>{const r=new Dt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new Dt(n,0),s=this._s.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.Ts=e,this.docs=new kt(re.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let i=Qi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Xt.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Qi();const o=n.path,a=new re(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||B6(U6(u),i)<=0||(s.has(u.key)||Ff(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ue()}Es(e,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new QL(this)}getSize(e){return L.resolve(this.size)}}class QL extends jL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e){this.persistence=e,this.As=new ca(n=>x_(n),C_),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Rs=0,this.vs=new O_,this.targetCount=0,this.bs=Uo.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Uo(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new T_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new JL(this),this.indexManager=new zL,this.remoteDocumentCache=function(i){return new XL(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new $L(n),this.xs=new KL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new YL(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){te("MemoryPersistence","Starting transaction:",e);const s=new e5(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class e5 extends V6{constructor(e){super(),this.currentSequenceNumber=e}}class M_{constructor(e){this.persistence=e,this.$s=new O_,this.Ms=null}static Fs(e){return new M_(e)}get Bs(){if(this.Ms)return this.Ms;throw ue()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,i=>{const s=re.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,_e.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=ke(),s=ke();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new P_(e,n.fromCache,i,s)}}/**
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
 */class t5{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(t1(n))return L.resolve(null);let i=Xi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ag(n,null,"F"),i=Xi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ke(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,ag(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return t1(n)||s.isEqual(_e.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(W0()<=Be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lg(n)),this.Fi(e,o,n,F6(s,-1)))})}$i(e,n){let i=new Ct(cx(e));return n.forEach((s,r)=>{Ff(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return W0()<=Be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",lg(n)),this.xi.getDocumentsMatchingQuery(e,n,Ns.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new kt(ze),this.qi=new ca(r=>x_(r),C_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function i5(t,e,n,i){return new n5(t,e,n,i)}async function Dx(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ke();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function s5(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=L.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);at(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ke();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function Ox(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function r5(t,e){const n=ve(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(rn.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=Qi(),c=ke();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(o5(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(_e.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function o5(t,e,n){let i=ke(),s=ke();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Qi();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function a5(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function l5(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,L.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new wr(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function fg(t,e,n){const i=ve(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pc(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function u1(t,e,n){const i=ve(t);let s=_e.min(),r=ke();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ve(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Xi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?r:ke())).next(a=>(c5(i,sL(e),a),{documents:a,Wi:r})))}function c5(t,e,n){let i=t.Ui.get(e)||_e.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class h1{constructor(){this.activeTargetIds=dx()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u5{constructor(){this.Br=new h1,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new h1,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class h5{qr(e){}shutdown(){}}/**
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
 */class f1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const f5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class p5 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Ld(),a=this.ao(e,n);te("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(te("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw vh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+la,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=f5[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Ld();return new Promise((o,a)=>{const l=new k6;l.setWithCredentials(!0),l.listenOnce(I6.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pd.NO_ERROR:const u=l.getResponseJson();te(Wt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Pd.TIMEOUT:te(Wt,`RPC '${e}' ${r} timed out`),a(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case Pd.HTTP_ERROR:const h=l.getStatus();if(te(Wt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(g)>=0?g:M.UNKNOWN}(d.status);a(new X(p,d.message))}else a(new X(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(M.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{te(Wt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);te(Wt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Ld(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E6(),a=T6(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new C6({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");te(Wt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new d5({Wr:m=>{f?te(Wt,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(te(Wt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),te(Wt,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,g,_)=>{m.listen(g,y=>{try{_(y)}catch(v){setTimeout(()=>{throw v},0)}})};return p(u,Hc.EventType.OPEN,()=>{f||te(Wt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Hc.EventType.CLOSE,()=>{f||(f=!0,te(Wt,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Hc.EventType.ERROR,m=>{f||(f=!0,vh(Wt,`RPC '${e}' stream ${s} transport errored:`,m),d.so(new X(M.UNAVAILABLE,"The operation could not be completed")))}),p(u,Hc.EventType.MESSAGE,m=>{var g;if(!f){const _=m.data[0];at(!!_);const y=_,v=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(v){te(Wt,`RPC '${e}' stream ${s} received error:`,v);const T=v.status;let x=function(I){const C=bt[I];if(C!==void 0)return Ex(C)}(T),S=v.message;x===void 0&&(x=M.INTERNAL,S="Unknown error status: "+T+" with message "+v.message),f=!0,d.so(new X(x,S)),u.close()}else te(Wt,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,x6.STAT_EVENT,m=>{m.stat===H0.PROXY?te(Wt,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===H0.NOPROXY&&te(Wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){return new CL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Mx(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new X(M.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g5 extends Px{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=AL(this.serializer,e),i=function(s){if(!("targetChange"in s))return _e.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?_e.min():r.readTime?vi(r.readTime):_e.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=hg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=rg(a)?{documents:OL(s,a)}:{query:ML(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=xx(s,r.resumeToken):r.snapshotVersion.compareTo(_e.min())>0&&(o.readTime=Ih(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=NL(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=hg(this.serializer),n.removeTarget=e,this.Fo(n)}}class m5 extends Px{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(at(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=DL(e.writeResults,e.commitTime),i=vi(e.commitTime);return this.listener.Zo(i,n)}return at(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=hg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>RL(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(M.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(M.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class y5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Yi(n),this.ru=!1):te("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v5{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{Hr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ve(a);l.du.add(4),await yc(l),l.mu.set("Unknown"),l.du.delete(4),await zf(l)}(this))})}),this.mu=new y5(i,s)}}async function zf(t){if(Hr(t))for(const e of t.wu)await e(!0)}async function yc(t){for(const e of t.wu)await e(!1)}function Nx(t,e){const n=ve(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),F_(n)?L_(n):ua(n).No()&&N_(n,e))}function Lx(t,e){const n=ve(t),i=ua(n);n.fu.delete(e),i.No()&&Fx(n,e),n.fu.size===0&&(i.No()?i.$o():Hr(n)&&n.mu.set("Unknown"))}function N_(t,e){t.gu.Ot(e.targetId),ua(t).jo(e)}function Fx(t,e){t.gu.Ot(e),ua(t).Wo(e)}function L_(t){t.gu=new EL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ua(t).start(),t.mu.ou()}function F_(t){return Hr(t)&&!ua(t).xo()&&t.fu.size>0}function Hr(t){return ve(t).du.size===0}function Ux(t){t.gu=void 0}async function b5(t){t.fu.forEach((e,n)=>{N_(t,e)})}async function w5(t,e){Ux(t),F_(t)?(t.mu.au(e),L_(t)):t.mu.set("Unknown")}async function E5(t,e,n){if(t.mu.set("Online"),e instanceof Ix&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await xh(t,i)}else if(e instanceof Du?t.gu.Kt(e):e instanceof Tx?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(_e.min()))try{const i=await Ox(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(rn.EMPTY_BYTE_STRING,l.snapshotVersion)),Fx(s,a);const c=new wr(l.target,a,1,l.sequenceNumber);N_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){te("RemoteStore","Failed to raise snapshot:",i),await xh(t,i)}}async function xh(t,e,n){if(!pc(e))throw e;t.du.add(1),await yc(t),t.mu.set("Offline"),n||(n=()=>Ox(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await zf(t)})}function Bx(t,e){return e().catch(n=>xh(t,n,e))}async function Hf(t){const e=ve(t),n=Fs(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;T5(e);)try{const s=await a5(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,I5(e,s)}catch(s){await xh(e,s)}$x(e)&&Vx(e)}function T5(t){return Hr(t)&&t.lu.length<10}function I5(t,e){t.lu.push(e);const n=Fs(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function $x(t){return Hr(t)&&!Fs(t).xo()&&t.lu.length>0}function Vx(t){Fs(t).start()}async function x5(t){Fs(t).tu()}async function C5(t){const e=Fs(t);for(const n of t.lu)e.Yo(n.mutations)}async function k5(t,e,n){const i=t.lu.shift(),s=A_.from(i,e,n);await Bx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hf(t)}async function S5(t,e){e&&Fs(t).Jo&&await async function(n,i){if(s=i.code,wL(s)&&s!==M.ABORTED){const r=n.lu.shift();Fs(n).Oo(),await Bx(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Hf(n)}var s}(t,e),$x(t)&&Vx(t)}async function d1(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const i=Hr(n);n.du.add(3),await yc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await zf(n)}async function A5(t,e){const n=ve(t);e?(n.du.delete(2),await zf(n)):e||(n.du.add(2),await yc(n),n.mu.set("Unknown"))}function ua(t){return t.yu||(t.yu=function(e,n,i){const s=ve(e);return s.nu(),new g5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:b5.bind(null,t),Zr:w5.bind(null,t),zo:E5.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),F_(t)?L_(t):t.mu.set("Unknown")):(await t.yu.stop(),Ux(t))})),t.yu}function Fs(t){return t.pu||(t.pu=function(e,n,i){const s=ve(e);return s.nu(),new m5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:x5.bind(null,t),Zr:S5.bind(null,t),Xo:C5.bind(null,t),Zo:k5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Hf(t)):(await t.pu.stop(),t.lu.length>0&&(te("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new U_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B_(t,e){if(Yi("AsyncQueue",`${e}: ${t}`),pc(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||re.comparator(n.key,i.key):(n,i)=>re.comparator(n.key,i.key),this.keyedMap=Ra(),this.sortedSet=new kt(this.comparator)}static emptySet(e){return new vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Iu=new kt(re.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):ue():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Bo{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bo(e,n,vo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(){this.Eu=void 0,this.listeners=[]}}class D5{constructor(){this.queries=new ca(e=>lx(e),Lf),this.onlineState="Unknown",this.Au=new Set}}async function $_(t,e){const n=ve(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new R5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=B_(o,`Initialization of query '${lg(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&z_(n)}async function V_(t,e){const n=ve(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function O5(t,e){const n=ve(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&z_(n)}function M5(t,e,n){const i=ve(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function z_(t){t.Au.forEach(e=>{e.next()})}class H_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.key=e}}class Hx{constructor(e){this.key=e}}class P5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ke(),this.mutatedKeys=ke(),this.Ku=cx(e),this.Gu=new vo(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new p1,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Ff(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(i.track({type:3,doc:d}),g=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),g=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),g=!0):f&&!d&&(i.track({type:1,doc:f}),g=!0,(l||c)&&(a=!0)),g&&(d?(o=o.add(d),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Bo(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new p1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ke(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new Hx(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new zx(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ke();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Bo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class N5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class L5{constructor(e){this.key=e,this.ec=!1}}class F5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ca(a=>lx(a),Lf),this.ic=new Map,this.rc=new Set,this.oc=new kt(re.comparator),this.uc=new Map,this.cc=new O_,this.ac={},this.hc=new Map,this.lc=Uo.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function U5(t,e){const n=G5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await l5(n.localStore,Xi(e));n.isPrimaryClient&&Nx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await B5(n,e,i,a==="current",o.resumeToken)}return s}async function B5(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,m,g,_){let y=m.view.zu(g);y.Mi&&(y=await u1(p.localStore,m.query,!1).then(({documents:x})=>m.view.zu(x,y)));const v=_&&_.targetChanges.get(m.targetId),T=m.view.applyChanges(y,p.isPrimaryClient,v);return m1(p,m.targetId,T.Yu),T.snapshot}(t,h,f,d);const r=await u1(t.localStore,e,!0),o=new P5(e,r.Wi),a=o.zu(r.documents),l=_c.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);m1(t,n,c.Yu);const u=new N5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function $5(t,e){const n=ve(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Lf(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await fg(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Lx(n.remoteStore,i.targetId),dg(n,i.targetId)}).catch(dc)):(dg(n,i.targetId),await fg(n.localStore,i.targetId,!0))}async function V5(t,e,n){const i=Y5(t);try{const s=await function(r,o){const a=ve(r),l=Tt.now(),c=o.reduce((f,d)=>f.add(d.key),ke());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Qi(),p=ke();return a.Ki.getEntries(f,c).next(m=>{d=m,d.forEach((g,_)=>{_.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const g=[];for(const _ of o){const y=mL(_,u.get(_.key).overlayedDocument);y!=null&&g.push(new Ks(_.key,y,ZI(y.value.mapValue),ii.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:hx(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new kt(ze)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await vc(i,s.changes),await Hf(i.remoteStore)}catch(s){const r=B_(s,"Failed to persist write");n.reject(r)}}async function jx(t,e){const n=ve(t);try{const i=await r5(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?at(o.ec):s.removedDocuments.size>0&&(at(o.ec),o.ec=!1))}),await vc(n,i,e)}catch(i){await dc(i)}}function g1(t,e,n){const i=ve(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ve(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&z_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function z5(t,e,n){const i=ve(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new kt(re.comparator);o=o.insert(r,Xt.newNoDocument(r,_e.min()));const a=ke().add(r),l=new $f(_e.min(),new Map,new Ct(ze),o,a);await jx(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),j_(i)}else await fg(i.localStore,e,!1).then(()=>dg(i,e,n)).catch(dc)}async function H5(t,e){const n=ve(t),i=e.batch.batchId;try{const s=await s5(n.localStore,e);qx(n,i,null),Wx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await vc(n,s)}catch(s){await dc(s)}}async function j5(t,e,n){const i=ve(t);try{const s=await function(r,o){const a=ve(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(at(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);qx(i,e,n),Wx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await vc(i,s)}catch(s){await dc(s)}}function Wx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function qx(t,e,n){const i=ve(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function dg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||Kx(t,i)})}function Kx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Lx(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),j_(t))}function m1(t,e,n){for(const i of n)i instanceof zx?(t.cc.addReference(i.key,e),W5(t,i)):i instanceof Hx?(te("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||Kx(t,i.key)):ue()}function W5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(te("SyncEngine","New document in limbo: "+n),t.rc.add(i),j_(t))}function j_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new re(st.fromString(e)),i=t.lc.next();t.uc.set(i,new L5(n)),t.oc=t.oc.insert(n,i),Nx(t.remoteStore,new wr(Xi(Nf(n.path)),i,2,T_.ct))}}async function vc(t,e,n){const i=ve(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=P_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=ve(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!pc(u))throw u;te("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function q5(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const i=await Dx(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new X(M.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vc(n,i.Qi)}}function K5(t,e){const n=ve(t),i=n.uc.get(e);if(i&&i.ec)return ke().add(i.key);{let s=ke();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function G5(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=z5.bind(null,e),e.nc.zo=O5.bind(null,e.eventManager),e.nc.wc=M5.bind(null,e.eventManager),e}function Y5(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j5.bind(null,e),e}class _1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return i5(this.persistence,new t5,e.initialUser,this.serializer)}createPersistence(e){return new ZL(M_.Fs,this.serializer)}createSharedClientState(e){return new u5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class X5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>g1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=q5.bind(null,this.syncEngine),await A5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new D5}createDatastore(e){const n=Vf(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new p5(s));var s;return function(r,o,a,l){return new _5(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>g1(this.syncEngine,a,0),o=f1.D()?new f1:new h5,new v5(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new F5(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);te("RemoteStore","RemoteStore shutting down."),n.du.add(5),await yc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class W_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Yi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=YI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=B_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Dx(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function y1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z5(t);te("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>d1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>d1(e.remoteStore,r)),t._onlineComponents=e}function J5(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Z5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!J5(n))throw n;vh("Error using user provided cache. Falling back to memory cache: "+n),await Ud(t,new _1)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Ud(t,new _1);return t._offlineComponents}async function Gx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await y1(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await y1(t,new X5))),t._onlineComponents}function e8(t){return Gx(t).then(e=>e.syncEngine)}async function Ch(t){const e=await Gx(t),n=e.eventManager;return n.onListen=U5.bind(null,e.syncEngine),n.onUnlisten=$5.bind(null,e.syncEngine),n}function t8(t,e,n={}){const i=new Hi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new W_({next:h=>{r.enqueueAndForget(()=>V_(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new H_(Nf(o.path),c,{includeMetadataChanges:!0,xu:!0});return $_(s,u)}(await Ch(t),t.asyncQueue,e,n,i)),i.promise}function n8(t,e,n={}){const i=new Hi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new W_({next:h=>{r.enqueueAndForget(()=>V_(s,u)),h.fromCache&&a.source==="server"?l.reject(new X(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new H_(o,c,{includeMetadataChanges:!0,xu:!0});return $_(s,u)}(await Ch(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i8(t,e,n,i){if(e===!0&&i===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function b1(t){if(!re.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function w1(t){if(re.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jf(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,i8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new E1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new E1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new S6;switch(n.type){case"firstParty":return new O6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=v1.get(e);n&&(te("ComponentProvider","Removing Datastore"),v1.delete(e),n.terminate())}(this),Promise.resolve()}}function s8(t,e,n,i={}){var s;const r=(t=Rn(t,Wf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&vh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Kt.MOCK_USER;else{o=B3(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new A6(new GI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class jr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Rs extends jr{constructor(e,n,i){super(e,n,Nf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new re(e))}withConverter(e){return new Rs(this.firestore,e,this._path)}}function On(t,e,...n){if(t=Nt(t),Yx("collection","path",e),t instanceof Wf){const i=st.fromString(e,...n);return w1(i),new Rs(t,null,i)}{if(!(t instanceof nn||t instanceof Rs))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(st.fromString(e,...n));return w1(i),new Rs(t.firestore,null,i)}}function pe(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=YI.A()),Yx("doc","path",e),t instanceof Wf){const i=st.fromString(e,...n);return b1(i),new nn(t,null,new re(i))}{if(!(t instanceof nn||t instanceof Rs))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(st.fromString(e,...n));return b1(i),new nn(t.firestore,t instanceof Rs?t.converter:null,new re(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Mx(this,"async_queue_retry"),this.qc=()=>{const n=Fd();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Hi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!pc(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Yi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=U_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&ue()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function T1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Us extends Wf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new r8,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xx(this),this._firestoreClient.terminate()}}function o8(t,e){const n=typeof t=="object"?t:Tm(),i=typeof t=="string"?t:e||"(default)",s=Em(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=F3("firestore");r&&s8(s,...r)}return s}function qf(t){return t._firestoreClient||Xx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xx(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new W6(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Q5(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(rn.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $o(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a8=/^__.*__$/;class l8{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new mc(e,this.data,n,this.fieldTransforms)}}class Qx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ks(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class K_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new K_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return kh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Jx(this.Yc)&&a8.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class c8{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Vf(e)}ua(e,n,i,s=!1){return new K_({Yc:e,methodName:n,oa:i,path:Jt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function G_(t){const e=t._freezeSettings(),n=Vf(t._databaseId);return new c8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u8(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);Y_("Data must be an object, but it was:",o,i);const a=Zx(i,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=pg(e,h,n);if(!o.contains(f))throw new X(M.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);tC(u,f)||u.push(f)}l=new kn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new l8(new gn(a),l,c)}class Yf extends q_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yf}}function h8(t,e,n,i){const s=t.ua(1,e,n);Y_("Data must be an object, but it was:",s,i);const r=[],o=gn.empty();zr(i,(l,c)=>{const u=X_(e,l,n);c=Nt(c);const h=s.na(u);if(c instanceof Yf)r.push(u);else{const f=bc(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new kn(r);return new Qx(o,a,s.fieldTransforms)}function f8(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[pg(e,i,n)],l=[s];if(r.length%2!=0)throw new X(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(pg(e,r[f])),l.push(r[f+1]);const c=[],u=gn.empty();for(let f=a.length-1;f>=0;--f)if(!tC(c,a[f])){const d=a[f];let p=l[f];p=Nt(p);const m=o.na(d);if(p instanceof Yf)c.push(d);else{const g=bc(p,m);g!=null&&(c.push(d),u.set(d,g))}}const h=new kn(c);return new Qx(u,h,o.fieldTransforms)}function d8(t,e,n,i=!1){return bc(n,t.ua(i?4:3,e))}function bc(t,e){if(eC(t=Nt(t)))return Y_("Unsupported field value:",e,t),Zx(t,e);if(t instanceof q_)return function(n,i){if(!Jx(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=bc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uL(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Tt.fromDate(n);return{timestampValue:Ih(i.serializer,s)}}if(n instanceof Tt){const s=new Tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ih(i.serializer,s)}}if(n instanceof Gf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $o)return{bytesValue:xx(i.serializer,n._byteString)};if(n instanceof nn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:D_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${jf(n)}`)}(t,e)}function Zx(t,e){const n={};return XI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(i,s)=>{const r=bc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function eC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof Gf||t instanceof $o||t instanceof nn||t instanceof q_)}function Y_(t,e,n){if(!eC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=jf(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function pg(t,e,n){if((e=Nt(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return X_(t,e);throw kh("Field path arguments must be of type string or ",t,!1,void 0,n)}const p8=new RegExp("[~\\*/\\[\\]]");function X_(t,e,n){if(e.search(p8)>=0)throw kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kf(...e.split("."))._internalPath}catch{throw kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new X(M.INVALID_ARGUMENT,a+t+l)}function tC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new g8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Q_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class g8 extends nC{data(){return super.data()}}function Q_(t,e){return typeof e=="string"?X_(t,e):e instanceof Kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class J_{}class m8 extends J_{}function Bd(t,e,...n){let i=[];e instanceof J_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof Z_).length,o=s.filter(a=>a instanceof Xf).length;if(r>1||r>0&&o>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Xf extends m8{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Xf(e,n,i)}_apply(e){const n=this._parse(e);return sC(e._query,n),new jr(e.firestore,e.converter,og(e._query,n))}_parse(e){const n=G_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){x1(u,c);const f=[];for(const d of u)f.push(I1(a,s,d));h={arrayValue:{values:f}}}else h=I1(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||x1(u,c),h=d8(o,r,u,c==="in"||c==="not-in");return Et.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $d(t,e,n){const i=e,s=Q_("where",t);return Xf._create(s,i,n)}class Z_ extends J_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Z_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ri.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)sC(r,a),r=og(r,a)}(e._query,n),new jr(e.firestore,e.converter,og(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function I1(t,e,n){if(typeof(n=Nt(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ax(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(st.fromString(n));if(!re.isDocumentKey(i))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Y0(t,new re(i))}if(n instanceof nn)return Y0(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jf(n)}.`)}function x1(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sC(t,e){if(e.isInequality()){const i=k_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new X(M.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=ox(t);r!==null&&_8(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _8(t,e,n){if(!n.isEqual(e))throw new X(M.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class y8{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(No(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){const i={};return zr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Gf(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=JI(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const n=Ls(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=st.fromString(e);at(Rx(i));const s=new Sl(i.get(1),i.get(3)),r=new re(i.popFirst(5));return s.isEqual(n)||Yi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v8(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rC extends nC{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Q_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ou extends rC{data(e={}){return super.data(e)}}class oC{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Da(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ou(this._firestore,this._userDataWriter,i.key,i,new Da(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Ou(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Da(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ou(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Da(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:b8(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function b8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){t=Rn(t,nn);const e=Rn(t.firestore,Us);return t8(qf(e),t._key).then(n=>aC(e,t,n))}class ty extends y8{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function w8(t){t=Rn(t,jr);const e=Rn(t.firestore,Us),n=qf(e),i=new ty(e);return iC(t._query),n8(n,t._query).then(s=>new oC(e,i,t,s))}function vs(t,e,n){t=Rn(t,nn);const i=Rn(t.firestore,Us),s=v8(t.converter,e,n);return iy(i,[u8(G_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ii.none())])}function Bt(t,e,n,...i){t=Rn(t,nn);const s=Rn(t.firestore,Us),r=G_(s);let o;return o=typeof(e=Nt(e))=="string"||e instanceof Kf?f8(r,"updateDoc",t._key,e,n,i):h8(r,"updateDoc",t._key,e),iy(s,[o.toMutation(t._key,ii.exists(!0))])}function E8(t){return iy(Rn(t.firestore,Us),[new S_(t._key,ii.none())])}function ny(t,...e){var n,i,s;t=Nt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||T1(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(T1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof nn)c=Rn(t.firestore,Us),u=Nf(t._key.path),l={next:h=>{e[o]&&e[o](aC(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rn(t,jr);c=Rn(h.firestore,Us),u=h._query;const f=new ty(c);l={next:d=>{e[o]&&e[o](new oC(c,f,h,d))},error:e[o+1],complete:e[o+2]},iC(t._query)}return function(h,f,d,p){const m=new W_(p),g=new H_(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>$_(await Ch(h),g)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>V_(await Ch(h),g))}}(qf(c),u,a,l)}function iy(t,e){return function(n,i){const s=new Hi;return n.asyncQueue.enqueueAndForget(async()=>V5(await e8(n),i,s)),s.promise}(qf(t),e)}function aC(t,e,n){const i=n.docs.get(e._key),s=new ty(t);return new rC(t,s,e._key,i,new Da(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){la=n})(Hs),wi(new si("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Us(new R6(n.getProvider("auth-internal")),new P6(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Sn(j0,"3.10.1",t),Sn(j0,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="firebasestorage.googleapis.com",T8="storageBucket",I8=2*60*1e3,x8=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Ci{constructor(e,n,i=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ki.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xi;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xi||(xi={}));function Vd(t){return"storage/"+t}function C8(){const t="An unknown error occurred, please check the error payload for server response.";return new ki(xi.UNKNOWN,t)}function k8(){return new ki(xi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S8(){return new ki(xi.CANCELED,"User canceled the upload/download.")}function A8(t){return new ki(xi.INVALID_URL,"Invalid URL '"+t+"'.")}function R8(t){return new ki(xi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function C1(t){return new ki(xi.INVALID_ARGUMENT,t)}function cC(){return new ki(xi.APP_DELETED,"The Firebase app was deleted.")}function D8(t){return new ki(xi.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Qn.makeFromUrl(e,n)}catch{return new Qn(e,"")}if(i.path==="")return i;throw R8(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},m=n===lC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp(`^https?://${m}/${s}/${g}`,"i"),v=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<v.length;T++){const x=v[T],S=x.regex.exec(e);if(S){const I=S[x.indices.bucket];let C=S[x.indices.path];C||(C=""),i=new Qn(I,C),x.postModify(i);break}}if(i==null)throw A8(e);return i}}class O8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M8(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,t(d,l())},g)}function f(){r&&clearTimeout(r)}function d(g,..._){if(c){f();return}if(g){f(),u.call(null,g,..._);return}if(l()||o){f(),u.call(null,g,..._);return}i<64&&(i*=2);let v;a===1?(a=2,v=0):v=(i+Math.random())*1e3,h(v)}let p=!1;function m(g){p||(p=!0,f(),!c&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function P8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N8(t){return t!==void 0}function k1(t,e,n,i){if(i<e)throw C1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw C1(`Invalid value for '${t}'. Expected ${n} or less.`)}function L8(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sh||(Sh={}));/**
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
 */function F8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Gc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Sh.NO_ERROR,l=r.getStatus();if(!a||F8(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Sh.ABORT;i(!1,new Gc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Gc(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());N8(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=C8();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?cC():S8();o(l)}else{const l=k8();o(l)}};this.canceled_?n(!1,new Gc(!1,null,!0)):this.backoffId_=M8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function B8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function z8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function H8(t,e,n,i,s,r,o=!0){const a=L8(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return V8(c,e),B8(c,n),$8(c,r),z8(c,i),new U8(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function W8(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ah{constructor(e,n){this._service=e,n instanceof Qn?this._location=n:this._location=Qn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ah(e,n)}get root(){const e=new Qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W8(this._location.path)}get storage(){return this._service}get parent(){const e=j8(this._location.path);if(e===null)return null;const n=new Qn(this._location.bucket,e);return new Ah(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw D8(e)}}function S1(t,e){const n=e==null?void 0:e[T8];return n==null?null:Qn.makeFromBucketSpec(n,t)}class q8{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=lC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I8,this._maxUploadRetryTime=x8,this._requests=new Set,s!=null?this._bucket=Qn.makeFromBucketSpec(s,this._host):this._bucket=S1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qn.makeFromBucketSpec(this._url,e):this._bucket=S1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){k1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){k1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ah(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new O8(cC());{const o=H8(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const A1="@firebase/storage",R1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K8="storage";function G8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new q8(n,i,s,e,Hs)}function Y8(){wi(new si(K8,G8,"PUBLIC").setMultipleInstances(!0)),Sn(A1,R1,""),Sn(A1,R1,"esm2017")}Y8();const zd=new WeakMap;function uC(t,e){return zd.has(e)||zd.set(e,t||{f:{},r:{},s:{},u:{}}),zd.get(e)}function X8(t,e,n,i){if(!t)return n;const[s,r]=hC(t);if(!s)return n;const o=uC(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function Q8(t,e,n,i){if(!t)return;const[s,r]=hC(t);if(!s)return;const o=uC(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(pi),a}function hC(t){return M4(t)||P4(t)?["f",t.path]:N4(t)?["r",t.toString()]:L4(t)?["s",t.toString()]:[]}const Hd=new WeakMap;function J8(t,e,n){const i=df();Hd.has(i)||Hd.set(i,new Map);const s=Hd.get(i),r=Q8(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):pi}const Z8={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function gg(t,e,n,i){if(!O4(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof Tt||p instanceof Gf)h[d]=p;else if(Mm(p)){const m=c+d;h[d]=m in n?l[d]:p.path,f[m]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let m=0;m<p.length;m++){const g=p[m];g&&g.path in r&&(h[d][m]=r[g.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else Ur(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const sy={reset:!1,wait:!0,maxRefDepth:2,converter:Z8,snapshotOptions:{serverTimestamps:"estimate"}};function Rh(t){for(const e in t)t[e].unsub()}function mg(t,e,n,i,s,r,o,a,l){const[c,u]=gg(i.data(t.snapshotOptions),Om(e,n),s,t);r.set(e,n,c),_g(t,e,n,s,u,r,o,a,l)}function eF({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=pi;return a.once?ey(t).then(u=>{u.exists()?mg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=ny(t,u=>{u.exists()?mg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Rh(l)}}function _g(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(m=>c.indexOf(m)<0).forEach(m=>{i[m].unsub(),delete i[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(m){m in d&&++h>=f&&a(n)}c.forEach(m=>{const g=i[m],_=s[m],y=`${n}.${m}`;if(d[y]=!0,g)if(g.path!==_.path)g.unsub();else return;i[m]={data:()=>Om(e,y),unsub:eF({ref:_,target:e,path:y,depth:o,ops:r,resolve:p.bind(null,y),reject:l},t),path:_.path}})}function tF(t,e,n,i,s,r){const o=Object.assign({},sy,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=ut(c?[]:t.value);c||n.set(t,h,[]);const d=i;let p,m=pi;const g=[],_={added:({newIndex:v,doc:T})=>{g.splice(v,0,Object.create(null));const x=g[v],[S,I]=gg(T.data(l),void 0,x,o);n.add(E(f),v,S),_g(o,f,`${h}.${v}`,x,I,n,0,i.bind(null,T),s)},modified:({oldIndex:v,newIndex:T,doc:x})=>{const S=E(f),I=g[v],C=S[v],[B,U]=gg(x.data(l),C,I,o);g.splice(T,0,I),n.remove(S,v),n.add(S,T,B),_g(o,f,`${h}.${T}`,I,U,n,0,i,s)},removed:({oldIndex:v})=>{const T=E(f);n.remove(T,v),Rh(g.splice(v,1)[0])}};function y(v){const T=v.docChanges(a);if(!p&&T.length){p=!0;let x=0;const S=T.length,I=Object.create(null);for(let C=0;C<S;C++)I[T[C].doc.id]=!0;i=C=>{C&&C.id in I&&++x>=S&&(c&&(n.set(t,h,E(f)),f=t),d(E(f)),i=pi)}}T.forEach(x=>{_[x.type](x)}),T.length||(c&&(n.set(t,h,E(f)),f=t),i(E(f)))}return u?w8(e).then(y).catch(s):m=ny(e,y,s),v=>{if(m(),v){const T=typeof v=="function"?v():[];n.set(t,h,T)}g.forEach(Rh)}}function nF(t,e,n,i,s,r){const o=Object.assign({},sy,r),a="value",l=Object.create(null);i=F4(i,()=>Om(t,a));let c=pi;function u(h){h.exists()?mg(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?ey(e).then(u).catch(s):c=ny(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Rh(l)}}function iF(t,e){let n=pi;const i=Object.assign({},sy,e),s=E(t),r=i.target||ut();U4()&&(i.once=!0);const o=X8(s,i.ssrKey,r.value,df());r.value=o;let l=!(ME(s)?(o||[]).length>0:o!==void 0);const c=ut(!1),u=ut(),h=Zh(),f=Jg();let d=pi;function p(){let _=E(t);const y=new Promise((v,T)=>{if(n(i.reset),!_)return n=pi,v(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(Mm(_)?nF:tF)(r,_,sF,v,T,i)}).catch(v=>(h.value===y&&(u.value=v),Promise.reject(v))).finally(()=>{h.value===y&&(c.value=!1)});h.value=y}let m=pi;dt(t)&&(m=xs(t,p)),p(),s&&(d=J8(h.value,s,i.ssrKey)),Jo()&&f2(()=>h.value),f&&Uw(g);function g(_=i.reset){m(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>g}})}const sF={set:(t,e,n)=>R4(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Xe(t,e){return iF(t,e)}function rF(t){return(e,n)=>{const i=B4(e,n).run(()=>ut(t));$4.set(e,i),V4(i,e)}}function oF(t){return A4?RE(df(t)):null}function aF(t,{firebaseApp:e,modules:n=[]}){t.provide(OE,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const io=typeof window<"u";function lF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const We=Object.assign;function jd(t,e){const n={};for(const i in e){const s=e[i];n[i]=oi(s)?s.map(t):t(s)}return n}const Xa=()=>{},oi=Array.isArray,cF=/\/$/,uF=t=>t.replace(cF,"");function Wd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pF(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function hF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function D1(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fF(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Vo(e.matched[i],n.matched[s])&&fC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dF(t[n],e[n]))return!1;return!0}function dF(t,e){return oi(t)?O1(t,e):oi(e)?O1(e,t):t===e}function O1(t,e){return oi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function pF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Ol;(function(t){t.pop="pop",t.push="push"})(Ol||(Ol={}));var Qa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qa||(Qa={}));function gF(t){if(!t)if(io){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uF(t)}const mF=/^[^#]+#/;function _F(t,e){return t.replace(mF,"#")+e}function yF(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Qf=()=>({left:window.pageXOffset,top:window.pageYOffset});function vF(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yF(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function M1(t,e){return(history.state?history.state.position-e:-1)+t}const yg=new Map;function bF(t,e){yg.set(t,e)}function wF(t){const e=yg.get(t);return yg.delete(t),e}let EF=()=>location.protocol+"//"+location.host;function dC(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),D1(l,"")}return D1(n,t)+i+s}function TF(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=dC(t,location),p=n.value,m=e.value;let g=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}g=m?f.position-m.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:g,type:Ol.pop,direction:g?g>0?Qa.forward:Qa.back:Qa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(We({},f.state,{scroll:Qf()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function P1(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Qf():null}}function IF(t){const{history:e,location:n}=window,i={value:dC(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:EF()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=We({},e.state,P1(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=We({},s.value,e.state,{forward:l,scroll:Qf()});r(u.current,u,!0);const h=We({},P1(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function xF(t){t=gF(t);const e=IF(t),n=TF(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=We({location:"",base:t,go:i,createHref:_F.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CF(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),xF(t)}function kF(t){return typeof t=="string"||t&&typeof t=="object"}function pC(t){return typeof t=="string"||typeof t=="symbol"}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gC=Symbol("");var N1;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(N1||(N1={}));function zo(t,e){return We(new Error,{type:t,[gC]:!0},e)}function Si(t,e){return t instanceof Error&&gC in t&&(e==null||!!(t.type&e))}const L1="[^/]+?",SF={sensitive:!1,strict:!1,start:!0,end:!0},AF=/[.+*?^${}()[\]/\\]/g;function RF(t,e){const n=We({},SF,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(AF,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:g,regexp:_}=f;r.push({name:p,repeatable:m,optional:g});const y=_||L1;if(y!==L1){d+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+T.message)}}let v=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(v=g&&c.length<2?`(?:/${v})`:"/"+v),g&&(v+="?"),s+=v,d+=20,g&&(d+=-8),m&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:g}=d,_=p in c?c[p]:"";if(oi(_)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=oi(_)?_.join("/"):_;if(!y)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function DF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function OF(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=DF(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(F1(i))return 1;if(F1(s))return-1}return s.length-i.length}function F1(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MF={type:0,value:""},PF=/[a-zA-Z0-9_]/;function NF(t){if(!t)return[[]];if(t==="/")return[[MF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:PF.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function LF(t,e,n){const i=RF(NF(t.path),n),s=We(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FF(t,e){const n=[],i=new Map;e=$1({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=UF(u);p.aliasOf=f&&f.record;const m=$1(e,u),g=[p];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of v)g.push(We({},p,{components:f?f.record.components:p.components,path:T,aliasOf:f?f.record:p}))}let _,y;for(const v of g){const{path:T}=v;if(h&&T[0]!=="/"){const x=h.record.path,S=x[x.length-1]==="/"?"":"/";v.path=h.record.path+(T&&S+T)}if(_=LF(v,h,m),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),d&&u.name&&!B1(_)&&o(u.name)),p.children){const x=p.children;for(let S=0;S<x.length;S++)r(x[S],_,f&&f.children[S])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:Xa}function o(u){if(pC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&OF(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!B1(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw zo(1,{location:u});m=f.record.name,d=We(U1(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&U1(u.params,f.keys.map(y=>y.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(y=>y.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw zo(1,{location:u,currentLocation:h});m=f.record.name,d=We({},h.params,u.params),p=f.stringify(d)}const g=[];let _=f;for(;_;)g.unshift(_.record),_=_.parent;return{name:m,path:p,params:d,matched:g,meta:$F(g)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function U1(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function UF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function B1(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $F(t){return t.reduce((e,n)=>We(e,n.meta),{})}function $1(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function mC(t,e){return e.children.some(n=>n===t||mC(t,n))}const _C=/#/g,VF=/&/g,zF=/\//g,HF=/=/g,jF=/\?/g,yC=/\+/g,WF=/%5B/g,qF=/%5D/g,vC=/%5E/g,KF=/%60/g,bC=/%7B/g,GF=/%7C/g,wC=/%7D/g,YF=/%20/g;function ry(t){return encodeURI(""+t).replace(GF,"|").replace(WF,"[").replace(qF,"]")}function XF(t){return ry(t).replace(bC,"{").replace(wC,"}").replace(vC,"^")}function vg(t){return ry(t).replace(yC,"%2B").replace(YF,"+").replace(_C,"%23").replace(VF,"%26").replace(KF,"`").replace(bC,"{").replace(wC,"}").replace(vC,"^")}function QF(t){return vg(t).replace(HF,"%3D")}function JF(t){return ry(t).replace(_C,"%23").replace(jF,"%3F")}function ZF(t){return t==null?"":JF(t).replace(zF,"%2F")}function Dh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function e7(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(yC," "),o=r.indexOf("="),a=Dh(o<0?r:r.slice(0,o)),l=o<0?null:Dh(r.slice(o+1));if(a in e){let c=e[a];oi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function V1(t){let e="";for(let n in t){const i=t[n];if(n=QF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(oi(i)?i.map(r=>r&&vg(r)):[i&&vg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function t7(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=oi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const n7=Symbol(""),z1=Symbol(""),Jf=Symbol(""),oy=Symbol(""),bg=Symbol("");function ba(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ds(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(zo(4,{from:n,to:e})):h instanceof Error?a(h):kF(h)?a(zo(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function qd(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(i7(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ds(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=lF(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ds(f,n,i,r,o)()}))}}return s}function i7(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function H1(t){const e=bn(Jf),n=bn(oy),i=Pe(()=>e.resolve(E(t.to))),s=Pe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Vo.bind(null,u));if(f>-1)return f;const d=j1(l[c-2]);return c>1&&j1(u)===d&&h[h.length-1].path!==d?h.findIndex(Vo.bind(null,l[c-2])):f}),r=Pe(()=>s.value>-1&&a7(n.params,i.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&fC(n.params,i.value.params));function a(l={}){return o7(l)?e[E(t.replace)?"replace":"push"](E(t.to)).catch(Xa):Promise.resolve()}return{route:i,href:Pe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const s7=Fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:H1,setup(t,{slots:e}){const n=Wi(H1(t)),{options:i}=bn(Jf),s=Pe(()=>({[W1(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[W1(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Zo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),r7=s7;function o7(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function a7(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!oi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function j1(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const W1=(t,e,n)=>t??e??n,l7=Fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=bn(bg),s=Pe(()=>t.route||i.value),r=bn(z1,0),o=Pe(()=>{let c=E(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Pe(()=>s.value.matched[o.value]);wu(z1,Pe(()=>o.value+1)),wu(n7,a),wu(bg,s);const l=ut();return xs(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Vo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return q1(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Zo(f,We({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return q1(n.default,{Component:g,route:c})||g}}});function q1(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const c7=l7;function u7(t){const e=FF(t.routes,t),n=t.parseQuery||e7,i=t.stringifyQuery||V1,s=t.history,r=ba(),o=ba(),a=ba(),l=Zh(ls);let c=ls;io&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jd.bind(null,D=>""+D),h=jd.bind(null,ZF),f=jd.bind(null,Dh);function d(D,W){let q,ie;return pC(D)?(q=e.getRecordMatcher(D),ie=W):ie=D,e.addRoute(ie,q)}function p(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function m(){return e.getRoutes().map(D=>D.record)}function g(D){return!!e.getRecordMatcher(D)}function _(D,W){if(W=We({},W||l.value),typeof D=="string"){const b=Wd(n,D,W.path),w=e.resolve({path:b.path},W),A=s.createHref(b.fullPath);return We(b,w,{params:f(w.params),hash:Dh(b.hash),redirectedFrom:void 0,href:A})}let q;if("path"in D)q=We({},D,{path:Wd(n,D.path,W.path).path});else{const b=We({},D.params);for(const w in b)b[w]==null&&delete b[w];q=We({},D,{params:h(D.params)}),W.params=h(W.params)}const ie=e.resolve(q,W),Fe=D.hash||"";ie.params=u(f(ie.params));const ht=hF(i,We({},D,{hash:XF(Fe),path:ie.path})),Ie=s.createHref(ht);return We({fullPath:ht,hash:Fe,query:i===V1?t7(D.query):D.query||{}},ie,{redirectedFrom:void 0,href:Ie})}function y(D){return typeof D=="string"?Wd(n,D,l.value.path):We({},D)}function v(D,W){if(c!==D)return zo(8,{from:W,to:D})}function T(D){return I(D)}function x(D){return T(We(y(D),{replace:!0}))}function S(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let ie=typeof q=="function"?q(D):q;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=y(ie):{path:ie},ie.params={}),We({query:D.query,hash:D.hash,params:"path"in ie?{}:D.params},ie)}}function I(D,W){const q=c=_(D),ie=l.value,Fe=D.state,ht=D.force,Ie=D.replace===!0,b=S(q);if(b)return I(We(y(b),{state:typeof b=="object"?We({},Fe,b.state):Fe,force:ht,replace:Ie}),W||q);const w=q;w.redirectedFrom=W;let A;return!ht&&fF(i,ie,q)&&(A=zo(16,{to:w,from:ie}),hn(ie,ie,!0,!1)),(A?Promise.resolve(A):B(w,ie)).catch(R=>Si(R)?Si(R,2)?R:Ht(R):be(R,w,ie)).then(R=>{if(R){if(Si(R,2))return I(We({replace:Ie},y(R.to),{state:typeof R.to=="object"?We({},Fe,R.to.state):Fe,force:ht}),W||w)}else R=$(w,ie,!0,Ie,Fe);return U(w,ie,R),R})}function C(D,W){const q=v(D,W);return q?Promise.reject(q):Promise.resolve()}function B(D,W){let q;const[ie,Fe,ht]=h7(D,W);q=qd(ie.reverse(),"beforeRouteLeave",D,W);for(const b of ie)b.leaveGuards.forEach(w=>{q.push(ds(w,D,W))});const Ie=C.bind(null,D,W);return q.push(Ie),Jr(q).then(()=>{q=[];for(const b of r.list())q.push(ds(b,D,W));return q.push(Ie),Jr(q)}).then(()=>{q=qd(Fe,"beforeRouteUpdate",D,W);for(const b of Fe)b.updateGuards.forEach(w=>{q.push(ds(w,D,W))});return q.push(Ie),Jr(q)}).then(()=>{q=[];for(const b of D.matched)if(b.beforeEnter&&!W.matched.includes(b))if(oi(b.beforeEnter))for(const w of b.beforeEnter)q.push(ds(w,D,W));else q.push(ds(b.beforeEnter,D,W));return q.push(Ie),Jr(q)}).then(()=>(D.matched.forEach(b=>b.enterCallbacks={}),q=qd(ht,"beforeRouteEnter",D,W),q.push(Ie),Jr(q))).then(()=>{q=[];for(const b of o.list())q.push(ds(b,D,W));return q.push(Ie),Jr(q)}).catch(b=>Si(b,8)?b:Promise.reject(b))}function U(D,W,q){for(const ie of a.list())ie(D,W,q)}function $(D,W,q,ie,Fe){const ht=v(D,W);if(ht)return ht;const Ie=W===ls,b=io?history.state:{};q&&(ie||Ie?s.replace(D.fullPath,We({scroll:Ie&&b&&b.scroll},Fe)):s.push(D.fullPath,Fe)),l.value=D,hn(D,W,q,Ie),Ht()}let Q;function je(){Q||(Q=s.listen((D,W,q)=>{if(!ai.listening)return;const ie=_(D),Fe=S(ie);if(Fe){I(We(Fe,{replace:!0}),ie).catch(Xa);return}c=ie;const ht=l.value;io&&bF(M1(ht.fullPath,q.delta),Qf()),B(ie,ht).catch(Ie=>Si(Ie,12)?Ie:Si(Ie,2)?(I(Ie.to,ie).then(b=>{Si(b,20)&&!q.delta&&q.type===Ol.pop&&s.go(-1,!1)}).catch(Xa),Promise.reject()):(q.delta&&s.go(-q.delta,!1),be(Ie,ie,ht))).then(Ie=>{Ie=Ie||$(ie,ht,!1),Ie&&(q.delta&&!Si(Ie,8)?s.go(-q.delta,!1):q.type===Ol.pop&&Si(Ie,20)&&s.go(-1,!1)),U(ie,ht,Ie)}).catch(Xa)}))}let $e=ba(),me=ba(),ne;function be(D,W,q){Ht(D);const ie=me.list();return ie.length?ie.forEach(Fe=>Fe(D,W,q)):console.error(D),Promise.reject(D)}function Le(){return ne&&l.value!==ls?Promise.resolve():new Promise((D,W)=>{$e.add([D,W])})}function Ht(D){return ne||(ne=!D,je(),$e.list().forEach(([W,q])=>D?q(D):W()),$e.reset()),D}function hn(D,W,q,ie){const{scrollBehavior:Fe}=t;if(!io||!Fe)return Promise.resolve();const ht=!q&&wF(M1(D.fullPath,0))||(ie||!q)&&history.state&&history.state.scroll||null;return am().then(()=>Fe(D,W,ht)).then(Ie=>Ie&&vF(Ie)).catch(Ie=>be(Ie,D,W))}const jt=D=>s.go(D);let _t;const Nn=new Set,ai={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:g,getRoutes:m,resolve:_,options:t,push:T,replace:x,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:Le,install(D){const W=this;D.component("RouterLink",r7),D.component("RouterView",c7),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>E(l)}),io&&!_t&&l.value===ls&&(_t=!0,T(s.location).catch(Fe=>{}));const q={};for(const Fe in ls)q[Fe]=Pe(()=>l.value[Fe]);D.provide(Jf,W),D.provide(oy,Wi(q)),D.provide(bg,l);const ie=D.unmount;Nn.add(D),D.unmount=function(){Nn.delete(D),Nn.size<1&&(c=ls,Q&&Q(),Q=null,l.value=ls,_t=!1,ne=!1),ie()}}};return ai}function Jr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function h7(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vo(c,l))||s.push(l))}return[n,i,s]}function Zf(){return bn(Jf)}function Wr(){return bn(oy)}const Mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},f7={class:"container"},d7={__name:"App",setup(t){const e=Wr();return(n,i)=>{const s=ql("RouterView");return O(),F("div",f7,[(O(),$t(eA,null,{default:cm(()=>[(O(),$t(s,{key:E(e).fullPath}))]),_:1}))])}}},p7=Mn(d7,[["__scopeId","data-v-eaa77c1f"]]),EC=q2({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"auth.odinn.nl",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),se=o8(EC);function K1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K1(Object(n),!0).forEach(function(i){St(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Oh(t){return Oh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oh(t)}function g7(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G1(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function m7(t,e,n){return e&&G1(t.prototype,e),n&&G1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ay(t,e){return y7(t)||b7(t,e)||TC(t,e)||E7()}function wc(t){return _7(t)||v7(t)||TC(t)||w7()}function _7(t){if(Array.isArray(t))return wg(t)}function y7(t){if(Array.isArray(t))return t}function v7(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function b7(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function TC(t,e){if(t){if(typeof t=="string")return wg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wg(t,e)}}function wg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Y1=function(){},ly={},IC={},xC=null,CC={mark:Y1,measure:Y1};try{typeof window<"u"&&(ly=window),typeof document<"u"&&(IC=document),typeof MutationObserver<"u"&&(xC=MutationObserver),typeof performance<"u"&&(CC=performance)}catch{}var T7=ly.navigator||{},X1=T7.userAgent,Q1=X1===void 0?"":X1,Bs=ly,ot=IC,J1=xC,Yc=CC;Bs.document;var is=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",kC=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),Xc,Qc,Jc,Zc,eu,Ji="___FONT_AWESOME___",Eg=16,SC="fa",AC="svg-inline--fa",Dr="data-fa-i2svg",Tg="data-fa-pseudo-element",I7="data-fa-pseudo-element-pending",cy="data-prefix",uy="data-icon",Z1="fontawesome-i2svg",x7="async",C7=["HTML","HEAD","STYLE","SCRIPT"],RC=function(){try{return!0}catch{return!1}}(),it="classic",pt="sharp",hy=[it,pt];function Ec(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[it]}})}var Ml=Ec((Xc={},St(Xc,it,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),St(Xc,pt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Xc)),Pl=Ec((Qc={},St(Qc,it,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),St(Qc,pt,{solid:"fass",regular:"fasr",light:"fasl"}),Qc)),Nl=Ec((Jc={},St(Jc,it,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),St(Jc,pt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Jc)),k7=Ec((Zc={},St(Zc,it,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),St(Zc,pt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Zc)),S7=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,DC="fa-layers-text",A7=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,R7=Ec((eu={},St(eu,it,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),St(eu,pt,{900:"fass",400:"fasr",300:"fasl"}),eu)),OC=[1,2,3,4,5,6,7,8,9,10],D7=OC.concat([11,12,13,14,15,16,17,18,19,20]),O7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ll=new Set;Object.keys(Pl[it]).map(Ll.add.bind(Ll));Object.keys(Pl[pt]).map(Ll.add.bind(Ll));var M7=[].concat(hy,wc(Ll),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pr.GROUP,pr.SWAP_OPACITY,pr.PRIMARY,pr.SECONDARY]).concat(OC.map(function(t){return"".concat(t,"x")})).concat(D7.map(function(t){return"w-".concat(t)})),Ja=Bs.FontAwesomeConfig||{};function P7(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function N7(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ot&&typeof ot.querySelector=="function"){var L7=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];L7.forEach(function(t){var e=ay(t,2),n=e[0],i=e[1],s=N7(P7(n));s!=null&&(Ja[i]=s)})}var MC={styleDefault:"solid",familyDefault:"classic",cssPrefix:SC,replacementClass:AC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ja.familyPrefix&&(Ja.cssPrefix=Ja.familyPrefix);var Ho=G(G({},MC),Ja);Ho.autoReplaceSvg||(Ho.observeMutations=!1);var Z={};Object.keys(MC).forEach(function(t){Object.defineProperty(Z,t,{enumerable:!0,set:function(n){Ho[t]=n,Za.forEach(function(i){return i(Z)})},get:function(){return Ho[t]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(e){Ho.cssPrefix=e,Za.forEach(function(n){return n(Z)})},get:function(){return Ho.cssPrefix}});Bs.FontAwesomeConfig=Z;var Za=[];function F7(t){return Za.push(t),function(){Za.splice(Za.indexOf(t),1)}}var cs=Eg,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function U7(t){if(!(!t||!is)){var e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ot.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return ot.head.insertBefore(e,i),t}}var B7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fl(){for(var t=12,e="";t-- >0;)e+=B7[Math.random()*62|0];return e}function ha(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fy(t){return t.classList?ha(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function PC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $7(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(PC(t[n]),'" ')},"").trim()}function ed(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function dy(t){return t.size!==mi.size||t.x!==mi.x||t.y!==mi.y||t.rotate!==mi.rotate||t.flipX||t.flipY}function V7(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function z7(t){var e=t.transform,n=t.width,i=n===void 0?Eg:n,s=t.height,r=s===void 0?Eg:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&kC?l+="translate(".concat(e.x/cs-i/2,"em, ").concat(e.y/cs-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/cs,"em), calc(-50% + ").concat(e.y/cs,"em)) "):l+="translate(".concat(e.x/cs,"em, ").concat(e.y/cs,"em) "),l+="scale(".concat(e.size/cs*(e.flipX?-1:1),", ").concat(e.size/cs*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var H7=`:root, :host {
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
}`;function NC(){var t=SC,e=AC,n=Z.cssPrefix,i=Z.replacementClass,s=H7;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var eb=!1;function Kd(){Z.autoAddCss&&!eb&&(U7(NC()),eb=!0)}var j7={mixout:function(){return{dom:{css:NC,insertCss:Kd}}},hooks:function(){return{beforeDOMElementCreation:function(){Kd()},beforeI2svg:function(){Kd()}}}},Zi=Bs||{};Zi[Ji]||(Zi[Ji]={});Zi[Ji].styles||(Zi[Ji].styles={});Zi[Ji].hooks||(Zi[Ji].hooks={});Zi[Ji].shims||(Zi[Ji].shims=[]);var Jn=Zi[Ji],LC=[],W7=function t(){ot.removeEventListener("DOMContentLoaded",t),Mh=1,LC.map(function(e){return e()})},Mh=!1;is&&(Mh=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),Mh||ot.addEventListener("DOMContentLoaded",W7));function q7(t){is&&(Mh?setTimeout(t,0):LC.push(t))}function Tc(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?PC(t):"<".concat(e," ").concat($7(i),">").concat(r.map(Tc).join(""),"</").concat(e,">")}function tb(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var K7=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},Gd=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?K7(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function G7(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ig(t){var e=G7(t);return e.length===1?e[0].toString(16):null}function Y7(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function nb(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function xg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=nb(e);typeof Jn.hooks.addPack=="function"&&!s?Jn.hooks.addPack(t,nb(e)):Jn.styles[t]=G(G({},Jn.styles[t]||{}),r),t==="fas"&&xg("fa",e)}var tu,nu,iu,ao=Jn.styles,X7=Jn.shims,Q7=(tu={},St(tu,it,Object.values(Nl[it])),St(tu,pt,Object.values(Nl[pt])),tu),py=null,FC={},UC={},BC={},$C={},VC={},J7=(nu={},St(nu,it,Object.keys(Ml[it])),St(nu,pt,Object.keys(Ml[pt])),nu);function Z7(t){return~M7.indexOf(t)}function e9(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!Z7(s)?s:null}var zC=function(){var e=function(r){return Gd(ao,function(o,a,l){return o[l]=Gd(a,r,{}),o},{})};FC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),UC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),VC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in ao||Z.autoFetchSvg,i=Gd(X7,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});BC=i.names,$C=i.unicodes,py=td(Z.styleDefault,{family:Z.familyDefault})};F7(function(t){py=td(t.styleDefault,{family:Z.familyDefault})});zC();function gy(t,e){return(FC[t]||{})[e]}function t9(t,e){return(UC[t]||{})[e]}function gr(t,e){return(VC[t]||{})[e]}function HC(t){return BC[t]||{prefix:null,iconName:null}}function n9(t){var e=$C[t],n=gy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $s(){return py}var my=function(){return{prefix:null,iconName:null,rest:[]}};function td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?it:n,s=Ml[i][t],r=Pl[i][t]||Pl[i][s],o=t in Jn.styles?t:null;return r||o||null}var ib=(iu={},St(iu,it,Object.keys(Nl[it])),St(iu,pt,Object.keys(Nl[pt])),iu);function nd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},St(e,it,"".concat(Z.cssPrefix,"-").concat(it)),St(e,pt,"".concat(Z.cssPrefix,"-").concat(pt)),e),o=null,a=it;(t.includes(r[it])||t.some(function(c){return ib[it].includes(c)}))&&(a=it),(t.includes(r[pt])||t.some(function(c){return ib[pt].includes(c)}))&&(a=pt);var l=t.reduce(function(c,u){var h=e9(Z.cssPrefix,u);if(ao[u]?(u=Q7[a].includes(u)?k7[a][u]:u,o=u,c.prefix=u):J7[a].indexOf(u)>-1?(o=u,c.prefix=td(u,{family:a})):h?c.iconName=h:u!==Z.replacementClass&&u!==r[it]&&u!==r[pt]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?HC(c.iconName):{},d=gr(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ao.far&&ao.fas&&!Z.autoFetchSvg&&(c.prefix="fas")}return c},my());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===pt&&(ao.fass||Z.autoFetchSvg)&&(l.prefix="fass",l.iconName=gr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=$s()||"fas"),l}var i9=function(){function t(){g7(this,t),this.definitions={}}return m7(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=G(G({},n.definitions[a]||{}),o[a]),xg(a,o[a]);var l=Nl[it][a];l&&xg(l,o[a]),zC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),sb=[],lo={},bo={},s9=Object.keys(bo);function r9(t,e){var n=e.mixoutsTo;return sb=t,lo={},Object.keys(bo).forEach(function(i){s9.indexOf(i)===-1&&delete bo[i]}),sb.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Oh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){lo[o]||(lo[o]=[]),lo[o].push(r[o])})}i.provides&&i.provides(bo)}),n}function Cg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=lo[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Or(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=lo[t]||[];s.forEach(function(r){r.apply(null,n)})}function es(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return bo[t]?bo[t].apply(null,e):void 0}function kg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||$s();if(e)return e=gr(n,e)||e,tb(jC.definitions,n,e)||tb(Jn.styles,n,e)}var jC=new i9,o9=function(){Z.autoReplaceSvg=!1,Z.observeMutations=!1,Or("noAuto")},a9={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return is?(Or("beforeI2svg",e),es("pseudoElements2svg",e),es("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,q7(function(){c9({autoReplaceSvgRoot:n}),Or("watch",e)})}},l9={icon:function(e){if(e===null)return null;if(Oh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=td(e[0]);return{prefix:i,iconName:gr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Z.cssPrefix,"-"))>-1||e.match(S7))){var s=nd(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||$s(),iconName:gr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=$s();return{prefix:r,iconName:gr(r,e)||e}}}},Pn={noAuto:o9,config:Z,dom:a9,parse:l9,library:jC,findIconDefinition:kg,toHtml:Tc},c9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ot:n;(Object.keys(Jn.styles).length>0||Z.autoFetchSvg)&&is&&Z.autoReplaceSvg&&Pn.dom.i2svg({node:i})};function id(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Tc(i)})}}),Object.defineProperty(t,"node",{get:function(){if(is){var i=ot.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function u9(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(dy(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=ed(G(G({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function h9(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(Z.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:G(G({},s),{},{id:o}),children:i}]}]}function _y(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,m=p.width,g=p.height,_=s==="fak",y=[Z.replacementClass,r?"".concat(Z.cssPrefix,"-").concat(r):""].filter(function(B){return h.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(h.classes).join(" "),v={children:[],attributes:G(G({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},T=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(v.attributes[Dr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||Fl())},children:[l]}),delete v.attributes.title);var x=G(G({},v),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:G(G({},T),h.styles)}),S=i.found&&n.found?es("generateAbstractMask",x)||{children:[],attributes:{}}:es("generateAbstractIcon",x)||{children:[],attributes:{}},I=S.children,C=S.attributes;return x.children=I,x.attributes=C,a?h9(x):u9(x)}function rb(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=G(G(G({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Dr]="");var u=G({},o.styles);dy(s)&&(u.transform=z7({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=ed(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function f9(t){var e=t.content,n=t.title,i=t.extra,s=G(G(G({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=ed(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yd=Jn.styles;function Sg(t){var e=t[0],n=t[1],i=t.slice(4),s=ay(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(pr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(pr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(pr.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var d9={found:!1,width:512,height:512};function p9(t,e){!RC&&!Z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ag(t,e){var n=e;return e==="fa"&&Z.styleDefault!==null&&(e=$s()),new Promise(function(i,s){if(es("missingIconAbstract"),n==="fa"){var r=HC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Yd[e]&&Yd[e][t]){var o=Yd[e][t];return i(Sg(o))}p9(t,e),i(G(G({},d9),{},{icon:Z.showMissingIcons&&t?es("missingIconAbstract")||{}:{}}))})}var ob=function(){},Rg=Z.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:ob,measure:ob},Oa='FA "6.4.0"',g9=function(e){return Rg.mark("".concat(Oa," ").concat(e," begins")),function(){return WC(e)}},WC=function(e){Rg.mark("".concat(Oa," ").concat(e," ends")),Rg.measure("".concat(Oa," ").concat(e),"".concat(Oa," ").concat(e," begins"),"".concat(Oa," ").concat(e," ends"))},yy={begin:g9,end:WC},Mu=function(){};function ab(t){var e=t.getAttribute?t.getAttribute(Dr):null;return typeof e=="string"}function m9(t){var e=t.getAttribute?t.getAttribute(cy):null,n=t.getAttribute?t.getAttribute(uy):null;return e&&n}function _9(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Z.replacementClass)}function y9(){if(Z.autoReplaceSvg===!0)return Pu.replace;var t=Pu[Z.autoReplaceSvg];return t||Pu.replace}function v9(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function b9(t){return ot.createElement(t)}function qC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?v9:b9:n;if(typeof t=="string")return ot.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(qC(o,{ceFn:i}))}),s}function w9(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(qC(s),n)}),n.getAttribute(Dr)===null&&Z.keepOriginalSource){var i=ot.createComment(w9(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~fy(n).indexOf(Z.replacementClass))return Pu.replace(e);var s=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===Z.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return Tc(a)}).join(`
`);n.setAttribute(Dr,""),n.innerHTML=o}};function lb(t){t()}function KC(t,e){var n=typeof e=="function"?e:Mu;if(t.length===0)n();else{var i=lb;Z.mutateApproach===x7&&(i=Bs.requestAnimationFrame||lb),i(function(){var s=y9(),r=yy.begin("mutate");t.map(s),r(),n()})}}var vy=!1;function GC(){vy=!0}function Dg(){vy=!1}var Ph=null;function cb(t){if(J1&&Z.observeMutations){var e=t.treeCallback,n=e===void 0?Mu:e,i=t.nodeCallback,s=i===void 0?Mu:i,r=t.pseudoElementsCallback,o=r===void 0?Mu:r,a=t.observeMutationsRoot,l=a===void 0?ot:a;Ph=new J1(function(c){if(!vy){var u=$s();ha(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ab(h.addedNodes[0])&&(Z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&ab(h.target)&&~O7.indexOf(h.attributeName))if(h.attributeName==="class"&&m9(h.target)){var f=nd(fy(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(cy,d||u),p&&h.target.setAttribute(uy,p)}else _9(h.target)&&s(h.target)})}}),is&&Ph.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E9(){Ph&&Ph.disconnect()}function T9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function I9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=nd(fy(t));return s.prefix||(s.prefix=$s()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=t9(s.prefix,t.innerText)||gy(s.prefix,Ig(t.innerText))),!s.iconName&&Z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function x9(t){var e=ha(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Z.autoA11y&&(n?e["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(i||Fl()):(e["aria-hidden"]="true",e.focusable="false")),e}function C9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ub(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=I9(t),i=n.iconName,s=n.prefix,r=n.rest,o=x9(t),a=Cg("parseNodeAttributes",{},t),l=e.styleParser?T9(t):[];return G({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var k9=Jn.styles;function YC(t){var e=Z.autoReplaceSvg==="nest"?ub(t,{styleParser:!1}):ub(t);return~e.extra.classes.indexOf(DC)?es("generateLayersText",t,e):es("generateSvgReplacementMutation",t,e)}var Vs=new Set;hy.map(function(t){Vs.add("fa-".concat(t))});Object.keys(Ml[it]).map(Vs.add.bind(Vs));Object.keys(Ml[pt]).map(Vs.add.bind(Vs));Vs=wc(Vs);function hb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!is)return Promise.resolve();var n=ot.documentElement.classList,i=function(h){return n.add("".concat(Z1,"-").concat(h))},s=function(h){return n.remove("".concat(Z1,"-").concat(h))},r=Z.autoFetchSvg?Vs:hy.map(function(u){return"fa-".concat(u)}).concat(Object.keys(k9));r.includes("fa")||r.push("fa");var o=[".".concat(DC,":not([").concat(Dr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Dr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ha(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=yy.begin("onTree"),c=a.reduce(function(u,h){try{var f=YC(h);f&&u.push(f)}catch(d){RC||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){KC(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function S9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;YC(t).then(function(n){n&&KC([n],e)})}function A9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:kg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:kg(s||{})),t(i,G(G({},n),{},{mask:s}))}}var R9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?mi:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,m=n.classes,g=m===void 0?[]:m,_=n.attributes,y=_===void 0?{}:_,v=n.styles,T=v===void 0?{}:v;if(e){var x=e.prefix,S=e.iconName,I=e.icon;return id(G({type:"icon"},e),function(){return Or("beforeDOMElementCreation",{iconDefinition:e,params:n}),Z.autoA11y&&(f?y["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(p||Fl()):(y["aria-hidden"]="true",y.focusable="false")),_y({icons:{main:Sg(I),mask:l?Sg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:G(G({},mi),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:y,styles:T,classes:g}})})}},D9={mixout:function(){return{icon:A9(R9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hb,n.nodeCallback=S9,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?ot:i,r=n.callback,o=r===void 0?function(){}:r;return hb(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([Ag(s,a),u.iconName?Ag(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var g=ay(m,2),_=g[0],y=g[1];d([n,_y({icons:{main:_,mask:y},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=ed(a);l.length>0&&(s.style=l);var c;return dy(o)&&(c=es("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},O9={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return id({type:"layer"},function(){Or("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers")].concat(wc(r)).join(" ")},children:o}]})}}}},M9={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return id({type:"counter",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),f9({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(Z.cssPrefix,"-layers-counter")].concat(wc(a))}})})}}}},P9={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?mi:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return id({type:"text",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),rb({content:n,transform:G(G({},mi),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(Z.cssPrefix,"-layers-text")].concat(wc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(kC){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return Z.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,rb({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},N9=new RegExp('"',"ug"),fb=[1105920,1112319];function L9(t){var e=t.replace(N9,""),n=Y7(e,0),i=n>=fb[0]&&n<=fb[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ig(s?e[0]:e),isSecondary:i||s}}function db(t,e){var n="".concat(I7).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=ha(t.children),o=r.filter(function(I){return I.getAttribute(Tg)===e})[0],a=Bs.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(A7),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?pt:it,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pl[f][l[2].toLowerCase()]:R7[f][c],p=L9(h),m=p.value,g=p.isSecondary,_=l[0].startsWith("FontAwesome"),y=gy(d,m),v=y;if(_){var T=n9(m);T.iconName&&T.prefix&&(y=T.iconName,d=T.prefix)}if(y&&!g&&(!o||o.getAttribute(cy)!==d||o.getAttribute(uy)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var x=C9(),S=x.extra;S.attributes[Tg]=e,Ag(y,d).then(function(I){var C=_y(G(G({},x),{},{icons:{main:I,mask:my()},prefix:d,iconName:v,extra:S,watchable:!0})),B=ot.createElement("svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=C.map(function(U){return Tc(U)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function F9(t){return Promise.all([db(t,"::before"),db(t,"::after")])}function U9(t){return t.parentNode!==document.head&&!~C7.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function pb(t){if(is)return new Promise(function(e,n){var i=ha(t.querySelectorAll("*")).filter(U9).map(F9),s=yy.begin("searchPseudoElements");GC(),Promise.all(i).then(function(){s(),Dg(),e()}).catch(function(){s(),Dg(),n()})})}var B9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pb,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?ot:i;Z.searchPseudoElements&&pb(s)}}},gb=!1,$9={mixout:function(){return{dom:{unwatch:function(){GC(),gb=!0}}}},hooks:function(){return{bootstrap:function(){cb(Cg("mutationObserverCallbacks",{}))},noAuto:function(){E9()},watch:function(n){var i=n.observeMutationsRoot;gb?Dg():cb(Cg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},mb=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},V9={mixout:function(){return{parse:{transform:function(n){return mb(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=mb(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:G({},d.outer),children:[{tag:"g",attributes:G({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:G(G({},i.icon.attributes),d.path)}]}]}}}},Xd={x:0,y:0,width:"100%",height:"100%"};function _b(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function z9(t){return t.tag==="g"?t.children:[t]}var H9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?nd(s.split(" ").map(function(o){return o.trim()})):my();return r.prefix||(r.prefix=$s()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=V7({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:G(G({},Xd),{},{fill:"white"})},m=u.children?{children:u.children.map(_b)}:{},g={tag:"g",attributes:G({},d.inner),children:[_b(G({tag:u.tag,attributes:G(G({},u.attributes),d.path)},m))]},_={tag:"g",attributes:G({},d.outer),children:[g]},y="mask-".concat(a||Fl()),v="clip-".concat(a||Fl()),T={tag:"mask",attributes:G(G({},Xd),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:z9(f)},T]};return i.push(x,{tag:"rect",attributes:G({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Xd)}),{children:i,attributes:s}}}},j9={provides:function(e){var n=!1;Bs.matchMedia&&(n=Bs.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:G(G({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=G(G({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:G(G({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:G(G({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:G(G({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:G(G({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:G(G({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:G(G({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:G(G({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},W9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},q9=[j7,D9,O9,M9,P9,B9,$9,V9,H9,j9,W9];r9(q9,{mixoutsTo:Pn});Pn.noAuto;var XC=Pn.config,De=Pn.library;Pn.dom;var Nh=Pn.parse;Pn.findIconDefinition;Pn.toHtml;var K9=Pn.icon;Pn.layer;var G9=Pn.text;Pn.counter;function yb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yb(Object(n),!0).forEach(function(i){dn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yb(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Lh(t){return Lh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lh(t)}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y9(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function X9(t,e){if(t==null)return{};var n=Y9(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Og(t){return Q9(t)||J9(t)||Z9(t)||eU()}function Q9(t){if(Array.isArray(t))return Mg(t)}function J9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Z9(t,e){if(t){if(typeof t=="string")return Mg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mg(t,e)}}function Mg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function eU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},QC={exports:{}};(function(t){(function(e){var n=function(_,y,v){if(!c(y)||h(y)||f(y)||d(y)||l(y))return y;var T,x=0,S=0;if(u(y))for(T=[],S=y.length;x<S;x++)T.push(n(_,y[x],v));else{T={};for(var I in y)Object.prototype.hasOwnProperty.call(y,I)&&(T[_(I,v)]=n(_,y[I],v))}return T},i=function(_,y){y=y||{};var v=y.separator||"_",T=y.split||/(?=[A-Z])/;return _.split(T).join(v)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,v){return v?v.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var y=s(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return i(_,y).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},m=function(_,y){var v=y&&"process"in y?y.process:y;return typeof v!="function"?_:function(T,x){return v(T,_,x)}},g={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,y){return n(m(s,y),_)},decamelizeKeys:function(_,y){return n(m(o,y),_,y)},pascalizeKeys:function(_,y){return n(m(r,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:e.humps=g})(tU)})(QC);var nU=QC.exports,iU=["class","style"];function sU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=nU.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function rU(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function by(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return by(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=rU(u);break;case"style":l.style=sU(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=X9(n,iU);return Zo(t.tag,Gn(Gn(Gn({},e),{},{class:s.class,style:Gn(Gn({},s.style),o)},s.attrs),a),i)}var JC=!1;try{JC=!0}catch{}function oU(){if(!JC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function el(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dn({},t,e):{}}function aU(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dn(e,"fa-".concat(t.size),t.size!==null),dn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dn(e,"fa-pull-".concat(t.pull),t.pull!==null),dn(e,"fa-swap-opacity",t.swapOpacity),dn(e,"fa-bounce",t.bounce),dn(e,"fa-shake",t.shake),dn(e,"fa-beat",t.beat),dn(e,"fa-fade",t.fade),dn(e,"fa-beat-fade",t.beatFade),dn(e,"fa-flash",t.flash),dn(e,"fa-spin-pulse",t.spinPulse),dn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function vb(t){if(t&&Lh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Nh.icon)return Nh.icon(t);if(t===null)return null;if(Lh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var wo=Fr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Pe(function(){return vb(e.icon)}),r=Pe(function(){return el("classes",aU(e))}),o=Pe(function(){return el("transform",typeof e.transform=="string"?Nh.transform(e.transform):e.transform)}),a=Pe(function(){return el("mask",vb(e.mask))}),l=Pe(function(){return K9(s.value,Gn(Gn(Gn(Gn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});xs(l,function(u){if(!u)return oU("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Pe(function(){return l.value?by(l.value.abstract[0],{},i):null});return function(){return c.value}}});Fr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=XC.familyPrefix,r=Pe(function(){return["".concat(s,"-layers")].concat(Og(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Zo("div",{class:r.value},i.default?i.default():[])}}});Fr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=XC.familyPrefix,r=Pe(function(){return el("classes",[].concat(Og(e.counter?["".concat(s,"-layers-counter")]:[]),Og(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Pe(function(){return el("transform",typeof e.transform=="string"?Nh.transform(e.transform):e.transform)}),a=Pe(function(){var c=G9(e.value.toString(),Gn(Gn({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Pe(function(){return by(a.value,{},i)});return function(){return l.value}}});const lU={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(O(),F("div",{class:_n(["flag",{inverted:e.inverted}]),style:Nr({backgroundColor:e.color})},[Y(E(wo),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},ZC=Mn(lU,[["__scopeId","data-v-6db28dbb"]]),ss=ym("board",()=>{const t=ut(""),e=ut(""),n=ut("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const cU={key:0,class:"hidden-indicator"},uU=["src"],hU={class:"boardTileFlags"},fU={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=ss(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u,h,f;return O(),F("div",{class:_n(["tile",{isSelected:E(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(l=(a=e.teamData)==null?void 0:a.verify)==null?void 0:l.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((c=e.tileData)==null?void 0:c.hidden)==!0||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=d=>i({id:e.tileData.id,...e.tileData}))},[(e==null?void 0:e.isEditor)==!0&&((h=e.tileData)==null?void 0:h.hidden)==!0?(O(),F("div",cU,[Y(E(wo),{class:"icon",icon:["fas","eye-low-vision"]})])):we("",!0),!e.tileData.hidden||e.isEditor?(O(),F("img",{key:1,src:e.teamData&&!e.tileData.hidden&&e.tileData.altImg&&((f=e.teamData)!=null&&f.collected.hasOwnProperty(e.tileData.id))?e.tileData.altImg:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,uU)):we("",!0),k("div",hU,[e.groupsData?(O(!0),F(Ee,{key:0},cn(e.groupsData,d=>(O(),$t(ZC,{key:"tile-flag-"+d.name+"-"+e.tileData.id,class:_n(["tileFlag","flag-end-"+d.flagEnd]),icon:d.icon,color:"none",inverted:!0,style:Nr({opacity:(d==null?void 0:d.collected)!=null&&(d!=null&&d.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","style"]))),128)):we("",!0)])],2)}}},ek=Mn(fU,[["__scopeId","data-v-9c76cc8b"]]);const dU={key:0,class:"bingo-board"},pU={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;h3(s=>({"6e24fd9e":t.boardData.settings.width,"3af3ab1c":t.boardData.settings.height}));const n=ss(),i=S3(n.selectedTile);return(s,r)=>e.boardData?(O(),F("main",dU,[(O(!0),F(Ee,null,cn(e.tilesData,o=>(O(),$t(ek,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:E(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):we("",!0)}},wy=Mn(pU,[["__scopeId","data-v-fed113b6"]]);const gU={__name:"iconButton",props:{groupIcon:{required:!1,type:String},fasIcon:{required:!0,type:String},label:{required:!1,type:String}},setup(t){const e=t;return(n,i)=>{const s=ql("font-awesome-icon");return O(),F("button",{class:_n(["icon-button btn",{outline:e.fasIcon==e.groupIcon}])},[Te(ge(e.label)+" ",1),Y(s,{class:_n({outline:e.fasIcon==e.groupIcon}),icon:["fa",e.fasIcon]},null,8,["class","icon"])],2)}}},Se=Mn(gU,[["__scopeId","data-v-04be184b"]]);const Ey=t=>(Xo("data-v-aa2fd71b"),t=t(),Qo(),t),mU={key:0},_U=Ey(()=>k("br",null,null,-1)),yU={key:0},vU=Ey(()=>k("br",null,null,-1)),bU=Ey(()=>k("br",null,null,-1)),wU={key:0,class:"rules"},EU={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=ss(),i=Wi([]),s=r=>{i.includes(r)?i.splice(i.indexOf(r),1):i.push(r)};return(r,o)=>{var a;return O(),F("div",null,[e.groupsData?(O(),F("ul",mU,[(O(!0),F(Ee,null,cn(e.groupsData,(l,c)=>(O(),F("li",{key:c+l.id,class:"tooltip"},[Y(ZC,{color:l.color,class:_n(["tileFlag","flag-end-"+l.flagEnd]),icon:l.icon,style:Nr({"--groupColor":l.color,"--width":l.points/25*100*1.5+"px"})},null,8,["color","class","icon","style"]),Te(" "+ge(l.name),1),_U,Y(Se,{class:"iconBtn",label:"view members",onClick:u=>s(l.name),fasIcon:"eye"},null,8,["onClick"]),i.includes(l.name)?(O(),F("ul",yU,[(O(!0),F(Ee,null,cn(l.members,u=>(O(),F("li",{key:u},ge(u),1))),128))])):we("",!0),Te(" score: "+ge(l.points?l.points:"0"),1),vU,bU]))),128)),((a=E(n))==null?void 0:a.rules)!=null?(O(),F("li",wU,ge(E(n).rules),1)):we("",!0)])):we("",!0)])}}},TU=Mn(EU,[["__scopeId","data-v-aa2fd71b"]]);const IU={key:0},xU={key:1,class:"items"},CU={__name:"sidePannel",setup(t){const e=ss();return(n,i)=>(O(),F(Ee,null,[k("h2",null,ge(E(e).selectedTile.title)+ge(E(e).selectedTile.points!=0?`, ${E(e).selectedTile.points} points`:""),1),(O(),$t(ek,{class:"board-tile",tileData:E(e).selectedTile,key:"side-pannel-tile-"+E(e).selectedTile},null,8,["tileData"])),E(e).selectedTile.description?(O(),F("p",IU,ge(E(e).selectedTile.description),1)):we("",!0),E(e).selectedTile.items?(O(),F("p",xU,[Te(" Eligible items: "),(O(!0),F(Ee,null,cn(E(e).selectedTile.items,(s,r)=>(O(),F(Ee,null,[Te(ge(s.item)+" "+ge(s.count>1?"x"+s.count:"")+" "+ge(r!==E(e).selectedTile.items.length-1?",":""),1)],64))),256))])):we("",!0)],64))}},kU=Mn(CU,[["__scopeId","data-v-3ee9f1f5"]]),SU=ym("userStateStore",()=>{const t=ut({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}}),AU=new Pi,tk=oF(),nk=async(t,e)=>{fO(tk,AU).then(async n=>{const i=n.user;(await ey(pe(se,"Users",i.uid))).exists()||vs(pe(se,"Users",i.uid),{count:0}),e.push(t)}).catch(n=>{const i=n.code,s=n.message;console.error(n,i,s)})},RU=async t=>{WD(tk).then(()=>t.push({path:"/"}))};const DU={class:"dashboard"},OU={__name:"loginButton",props:{destination:{type:Object,required:!0}},async setup(t){let e,n;const i=t,s=Wr(),r=s.params.boardUUID,o=SU();let a;const l=([e,n]=ti(()=>js()),e=await e,n(),e);l&&(a=Xe(pe(se,"Users",l.uid)));const c=Zf(),u=Xe(pe(se,"Boards",s.params.boardUUID)),h=(f,d)=>{d?c.push({name:f,params:{boardUUID:d}}):c.push({name:f})};return(f,d)=>{var p,m,g,_,y,v,T,x,S,I,C,B;return O(),F("div",DU,[E(l)?(O(),F(Ee,{key:1},[Y(Se,{class:"iconBtn",label:"Dashboard",onClick:d[1]||(d[1]=U=>h("userOverview")),fasIcon:"list-ul"}),E(u)&&E(o).user&&E(l)&&(E(l).uid==((p=E(u))==null?void 0:p.ownerID)||((m=E(a))==null?void 0:m.type)=="admin"||(_=(g=E(u))==null?void 0:g.editors)!=null&&_.includes(E(l).uid))?(O(),$t(Se,{key:0,class:_n([{"current-page":E(s).name=="editBoard"},"iconBtn"]),label:"Edit board",onClick:d[2]||(d[2]=U=>h("editBoard",E(r))),fasIcon:"pen-to-square"},null,8,["class"])):we("",!0),(O(),$t(Se,{key:1,class:_n(["iconBtn",{"current-page":E(s).name=="overview"}]),label:"Preview board",onClick:d[3]||(d[3]=U=>h("overview",E(r))),fasIcon:"eye"},null,8,["class"])),E(u)&&E(o).user&&E(l)&&(E(l).uid==((y=E(u))==null?void 0:y.ownerID)||((v=E(a))==null?void 0:v.type)=="admin"||(x=(T=E(u))==null?void 0:T.moderators)!=null&&x.includes(E(l).uid)||(I=(S=E(u))==null?void 0:S.editors)!=null&&I.includes(E(l).uid))?(O(),$t(Se,{key:2,class:_n([{"current-page":E(s).name=="moderator"},"iconBtn"]),label:"Verify tiles",onClick:d[4]||(d[4]=U=>h("moderator",E(r))),fasIcon:"square-check"},null,8,["class"])):we("",!0),E(l)&&E(l)&&(E(l).uid==((C=E(u))==null?void 0:C.ownerID)||((B=E(a))==null?void 0:B.type)=="admin")?(O(),F(Ee,{key:3},[Y(Se,{class:_n([{"current-page":E(s).name=="groupView"},"iconBtn"]),label:"Magage groups",onClick:d[5]||(d[5]=U=>h("groupView",E(r))),fasIcon:"users-gear"},null,8,["class"]),Y(Se,{class:"iconBtn",onClick:d[6]||(d[6]=U=>E(RU)(E(c))),fasIcon:"right-from-bracket",label:"Log out"})],64)):we("",!0)],64)):(O(),$t(Se,{key:0,class:"iconBtn",onClick:d[0]||(d[0]=U=>E(nk)(i.destination,E(c))),fasIcon:"right-to-bracket"}))])}}},Ic=Mn(OU,[["__scopeId","data-v-0911feee"]]);const Ty=t=>(Xo("data-v-8f7153da"),t=t(),Qo(),t),MU={class:"container"},PU={class:"main-section"},NU={key:1,class:"detail-pane"},LU={style:{"justify-content":"end",display:"flex"}},FU=Ty(()=>k("h1",null,"Not authenticated",-1)),UU=Ty(()=>k("p",null,"you do not need to log in to view a published board.",-1)),BU=Ty(()=>k("p",null," if the board you are looking for is private, you need to be the owner, a moderator, or editor to view this board. ",-1)),$U={__name:"BoardView",async setup(t){var d;let e,n;const i=ss();let s;const r=([e,n]=ti(()=>js()),e=await e,n(),e);r&&(s=Xe(pe(se,"Users",r.uid)));const o=Wr();i.setBoardUUID(o.params.boardUUID),i.setSelectedTile("");const a=i.boardUUID,l=ut(!1),{data:c}=Xe(On(se,"Boards",a,"Groups")),u=Xe(pe(se,"Boards",a));i.setRules((d=u.value)==null?void 0:d.rules);const h=Pe(()=>{var m;let p={};return c&&((m=c==null?void 0:c.value)==null||m.forEach(async g=>{p[g.id]={...g}})),p||{}}),{data:f}=Xe(On(se,`Boards/${a}/Tiles`));return(p,m)=>{var g,_;return O(),F("div",MU,[Y(Ic,{destination:{name:"overview",params:{boardUUID:E(a)}}},null,8,["destination"]),E(u)&&E(f)&&(E(u).settings.public||((g=E(r))==null?void 0:g.uid)==E(u).ownerID||((_=E(s))==null?void 0:_.type)=="admin")?(O(),F(Ee,{key:0},[k("section",null,[k("h1",null,ge(E(u).name),1)]),k("section",PU,[l.value==l.value?(O(),F(Ee,{key:0},[E(h)?(O(),$t(TU,{key:0,class:"score-card",groupsData:E(h)},null,8,["groupsData"])):we("",!0)],64)):we("",!0),(O(),$t(wy,{class:"bingo-board",boardData:E(u),groupsData:E(h),tilesData:E(f),key:"bingo-board-"+E(i).boardUUID},null,8,["boardData","groupsData","tilesData"])),E(i).selectedTile!=""?(O(),F("aside",NU,[k("div",LU,[Y(Se,{onClick:m[0]||(m[0]=()=>{E(i).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),E(i).selectedTile!=""?(O(),$t(kU,{key:0})):we("",!0)])):we("",!0)])],64)):(O(),F(Ee,{key:1},[FU,UU,BU],64))])}}},VU=Mn($U,[["__scopeId","data-v-8f7153da"]]),zU=["for"],HU=k("br",null,null,-1),jU=["id","checked","onClick"],WU={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=Pe(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],Bt(pe(se,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Bt(pe(se,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,Bt(pe(se,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Bt(pe(se,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&Bt(pe(se,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(O(),F("div",{key:e.tileData.id},[k("h2",null,"{ "+ge(e.tileData.id.split("")[0])+" , "+ge(e.tileData.id.split("")[1])+" }",1),k("ul",null,[(O(!0),F(Ee,null,cn(e.groupsData,o=>(O(),F("li",{key:o.id+E(n).id,class:_n({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[k("label",{for:o.id+E(n).id},[Te(ge(o.name)+" : "+ge(o.verify.hasOwnProperty(e.tileData.id)),1),HU,Te(" collected: "),(O(),F("input",{id:o.id+E(n).id,type:"checkbox",class:"toggle",key:o.id+E(n).id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:Ye(a=>i({tile:E(n),group:o}),["prevent"])},null,8,jU))],8,zU)],2))),128))])])):we("",!0)}},qU={class:"container"},KU={key:0},GU={key:0},YU={key:1},XU={__name:"ModeratorView",async setup(t){let e,n;const i=ss(),s=([e,n]=ti(()=>js()),e=await e,n(),e),r=Wr(),o=Pe(()=>r.params.boardUUID),{data:a}=Xe(On(se,"Boards",o.value,"Groups")),{data:l,promise:c}=Xe(pe(se,"Users",`${s.uid}`));[e,n]=ti(()=>c.value),await e,n();const{data:u,promise:h}=Xe(pe(se,"Boards",o.value));[e,n]=ti(()=>h.value.then(p=>{p.moderators||(p.moderators=[]),p.editors||(p.editors=[])})),await e,n();const f=Pe(()=>{var m;let p={};return a&&((m=a==null?void 0:a.value)==null||m.forEach(g=>{g.name!="moderator"&&(p[g.id]={id:g.id,name:g.name,member:g.members,icon:g.icon,color:g.color,points:g.points,flagEnd:g.flagEnd,collected:g.collected,verify:g.verify})})),p||{}}),{data:d}=Xe(On(se,`Boards/${o.value}/Tiles`));return(p,m)=>{var g,_,y,v,T;return O(),F("div",qU,[Y(Ic,{destination:{name:"moderator",params:E(o)}},null,8,["destination"]),k("section",null,[((g=E(u))==null?void 0:g.name)!=null?(O(),F("h1",KU,ge(E(u).name),1)):we("",!0)]),E(s)&&(E(s).uid==((_=E(u))==null?void 0:_.ownerID)||((y=E(l))==null?void 0:y.type)=="admin"||(v=E(u))!=null&&v.moderators.includes(E(s).uid)||(T=E(u))!=null&&T.editors.includes(E(s).uid))?(O(),F("section",GU,[Y(wy,{boardData:E(u),groupsData:E(f),tilesData:E(d)},null,8,["boardData","groupsData","tilesData"]),k("aside",null,[(O(),$t(WU,{tileData:E(i).selectedTile,key:E(i).selectedTile.id,boardUUID:E(o),groupsData:E(f),boardData:E(u)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(O(),F("section",YU,"please log in or return to the [board]"))])}}},QU={class:"tile"},JU={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(O(),F("div",QU,ge(e.tile.coordinates),1))}},ZU=ym("boardCreate",()=>{const t=ut({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}}),eB=["onKeydown"],tB={class:"pen"},nB=k("br",null,null,-1),iB=k("br",null,null,-1),sB={key:0,class:"bingo-board"},rB=["onClick"],oB={key:1},aB={key:2},lB={__name:"newBoard",async setup(t){let e,n;const i=ZU(),s=([e,n]=ti(()=>js()),e=await e,n(),e),r=Zf(),o=ut({name:"<name of bingo board>",settings:{width:1,height:1,public:!1}}),a=Xe(pe(se,"Users",s.uid)),l=ut(null),c=()=>{l.value.focus()},u=d=>{d.target.blur(),l.value.innerText.trim()==""?(o.value.name="Enter title here",l.value.innerText="Enter title here"):o.value.name=l.value.innerText.trim()},h=Pe(()=>{let d=[];for(let p=0;p<=parseInt(o.value.settings.width)*o.value.settings.height-1;p++){let m=(Math.floor(p/parseInt(o.value.settings.width))+1)*100+(p%parseInt(o.value.settings.width)+1);d.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:m,img:" "})}return d}),f=async()=>{const d=pe(On(se,"Boards")),p=pe(On(se,"Boards",d.id,"Groups"));await vs(d,{...o.value,ownerID:s.uid}).then(()=>{h.value.forEach(m=>{vs(pe(se,"Boards",d.id,"Tiles",`${m.coordinates}`),{...m})})}).then(()=>{vs(pe(se,p.path),{name:"all",collected:{},verify:{},icon:"frog",color:"#8a038f",points:0}),vs(pe(se,"Users",s.uid),{count:a.value.count+1}),i.setSelectedTile(""),r.push({name:"editBoard",params:{boardUUID:d.id}})})};return s||r.push({name:"loginView"}),(d,p)=>{var g,_;const m=ql("font-awesome-icon");return O(),F(Ee,null,[E(s)&&((g=E(a))==null?void 0:g.count)<5?(O(),F(Ee,{key:0},[k("h1",{class:"title-wrap",onClick:p[0]||(p[0]=Ye(y=>c(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:l,contenteditable:"",spellcheck:"false",onKeydown:Ni(u,["enter"]),onBlur:u},ge(o.value.name),41,eB),k("span",tB,[Y(m,{icon:["fas","pen"]})])]),k("div",null,[Te(" name: width: "),xn(k("input",{min:"1",max:"9",name:"width",type:"range","onUpdate:modelValue":p[1]||(p[1]=y=>o.value.settings.width=y)},null,512),[[Yn,o.value.settings.width]]),Te(ge(o.value.settings.width),1),nB,Te(" height: "),xn(k("input",{min:"1",max:"9",name:"height",type:"range","onUpdate:modelValue":p[2]||(p[2]=y=>o.value.settings.height=y)},null,512),[[Yn,o.value.settings.height]]),Te(ge(o.value.settings.height),1),iB,Te(" total tiles: "+ge(o.value.settings.width*o.value.settings.height),1)]),E(h)?(O(),F("main",sB,[(O(!0),F(Ee,null,cn(E(h),y=>(O(),$t(JU,{key:y.coordinates,tile:y},null,8,["tile"]))),128))])):we("",!0),k("button",{class:"btn",onClick:Ye(f,["prevent"])},"Save Settings",8,rB)],64)):we("",!0),E(s).loggedIn?we("",!0):(O(),F("h1",oB,"not authenticated")),((_=E(a))==null?void 0:_.count)>=6?(O(),F("h1",aB,"You've exceded the 5 board limit")):we("",!0)],64)}}};const rs=t=>(Xo("data-v-0db54fdc"),t=t(),Qo(),t),cB=rs(()=>k("h1",null,"User Settings and overview",-1)),uB={class:"user-details"},hB=rs(()=>k("h2",null,"User details",-1)),fB=rs(()=>k("br",null,null,-1)),dB={class:"highlight UID"},pB=rs(()=>k("br",null,null,-1)),gB=rs(()=>k("h2",null,"Your boards",-1)),mB={class:"board-list"},_B={class:"highlight UID"},yB=["onClick"],vB=["onClick"],bB=["onClick"],wB=["onClick"],EB=["checked","onClick"],TB={class:"_item"},IB=rs(()=>k("h3",null,"New Board",-1)),xB=rs(()=>k("p",null,"Create a new Bingo event",-1)),CB=rs(()=>k("h2",null,"Boards you can edit",-1)),kB={key:0,class:"board-list"},SB=["onClick"],AB=["onClick"],RB=["onClick"],DB={key:1},OB=rs(()=>k("h2",null,"Boards you can moderate",-1)),MB={class:"board-list"},PB=["onClick"],NB=["onClick"],LB={key:1},FB={__name:"UserOverview",async setup(t){let e,n;const i=([e,n]=ti(()=>js()),e=await e,n(),e);i||f.push({name:"loginView"});const s=On(se,"Boards"),r=ut(i.uid),o=ut("=="),{data:a,promise:l}=Xe(pe(se,"Users",i.uid));[e,n]=ti(()=>l.value.then(()=>{a.value.type=="admin"&&(o.value="!="),a.value.type=="admin"&&(r.value="0")}).catch(g=>{console.error(g.error)})),await e,n();const c=Xe(Bd(s,$d("ownerID",o.value,r.value))),u=Xe(Bd(s,$d("moderators","array-contains",i.uid))),h=Xe(Bd(s,$d("editors","array-contains",i.uid))),f=Zf(),d=(g,_)=>{f.push({name:g,params:{boardUUID:_}})},p=g=>{let _={...g};_.settings.public=!g.settings.public,Bt(pe(se,"Boards",g.id),_)},m=g=>{for(var _ in g)if(Object.prototype.hasOwnProperty.call(g,_))return!1;return!0};return(g,_)=>{var y;return E(i)?(O(),F(Ee,{key:0},[cB,k("section",uB,[hB,k("p",null,[Te(" Total boards: "+ge((y=E(a))!=null&&y.count?E(a).count:0),1),fB,Te(" User ID: "),k("span",dB,ge(E(i).uid),1),pB,Te(" Share your user ID with people to have them add you as moderator and-or editor. ")])]),k("section",null,[gB,k("div",mB,[(O(!0),F(Ee,null,cn(E(c),v=>(O(),F("div",{class:"_item",key:v.id+v.name},[k("h3",null,ge(v.name),1),k("p",null,[Te(" Board id: "),k("span",_B,ge(v.id),1)]),k("p",{onClick:T=>d("editBoard",v.id)},[Y(Se,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,yB),k("p",{onClick:T=>d("overview",v.id)},[Y(Se,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,vB),k("p",{onClick:T=>d("moderator",v.id)},[Y(Se,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,bB),k("p",{onClick:T=>d("groupView",v.id)},[Y(Se,{class:"iconBtn",label:"Manage groups: ",fasIcon:"users-gear"})],8,wB),k("p",null,[Te(" Public: "),k("input",{class:"toggle",type:"checkbox",checked:v.settings.public,onClick:T=>p(v)},null,8,EB)])]))),128)),k("div",TB,[IB,xB,!E(a)||E(a).count<6?(O(),F("button",{key:0,class:"btn highlight new-board",onClick:_[0]||(_[0]=Ye(v=>E(f).push({name:"newBoard"}),["prevent"]))}," Create new board ")):we("",!0)])])]),m(E(h))?we("",!0):(O(),F("section",{key:E(h)},[CB,E(h)?(O(),F("div",kB,[(O(!0),F(Ee,null,cn(E(h),v=>(O(),F("div",{class:"_item",key:v},[k("h3",null,ge(v.name),1),k("p",{onClick:T=>d("editBoard",v.id)},[Y(Se,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,SB),k("p",{onClick:T=>d("overview",v.id)},[Y(Se,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,AB),k("p",{onClick:T=>d("moderator",v.id)},[Y(Se,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,RB)]))),128))])):we("",!0)])),m(E(u))?we("",!0):(O(),F("section",DB,[OB,k("div",MB,[(O(!0),F(Ee,null,cn(E(u),v=>(O(),F("div",{class:"_item",key:v},[k("h3",null,ge(v.name),1),k("p",{onClick:T=>d("overview",v.id)},[Y(Se,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,PB),k("p",{onClick:T=>d("moderator",v.id)},[Y(Se,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,NB)]))),128))])]))],64)):(O(),F("h1",LB,"Not Authenticated"))}}},UB=Mn(FB,[["__scopeId","data-v-0db54fdc"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function xc(t){return t+.5|0}const bs=(t,e,n)=>Math.max(Math.min(t,n),e);function Ma(t){return bs(xc(t*2.55),0,255)}function Ds(t){return bs(xc(t*255),0,255)}function Mi(t){return bs(xc(t/2.55)/100,0,1)}function bb(t){return bs(xc(t*100),0,100)}const Ln={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pg=[..."0123456789ABCDEF"],BB=t=>Pg[t&15],$B=t=>Pg[(t&240)>>4]+Pg[t&15],su=t=>(t&240)>>4===(t&15),VB=t=>su(t.r)&&su(t.g)&&su(t.b)&&su(t.a);function zB(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Ln[t[1]]*17,g:255&Ln[t[2]]*17,b:255&Ln[t[3]]*17,a:e===5?Ln[t[4]]*17:255}:(e===7||e===9)&&(n={r:Ln[t[1]]<<4|Ln[t[2]],g:Ln[t[3]]<<4|Ln[t[4]],b:Ln[t[5]]<<4|Ln[t[6]],a:e===9?Ln[t[7]]<<4|Ln[t[8]]:255})),n}const HB=(t,e)=>t<255?e(t):"";function jB(t){var e=VB(t)?BB:$B;return t?"#"+e(t.r)+e(t.g)+e(t.b)+HB(t.a,e):void 0}const WB=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ik(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function qB(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function KB(t,e,n){const i=ik(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function GB(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function Iy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=GB(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function xy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(Ds)}function Cy(t,e,n){return xy(ik,t,e,n)}function YB(t,e,n){return xy(KB,t,e,n)}function XB(t,e,n){return xy(qB,t,e,n)}function sk(t){return(t%360+360)%360}function QB(t){const e=WB.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Ma(+e[5]):Ds(+e[5]));const s=sk(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=YB(s,r,o):e[1]==="hsv"?i=XB(s,r,o):i=Cy(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function JB(t,e){var n=Iy(t);n[0]=sk(n[0]+e),n=Cy(n),t.r=n[0],t.g=n[1],t.b=n[2]}function ZB(t){if(!t)return;const e=Iy(t),n=e[0],i=bb(e[1]),s=bb(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Mi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const wb={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Eb={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function e$(){const t={},e=Object.keys(Eb),n=Object.keys(wb);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,wb[r]);r=parseInt(Eb[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let ru;function t$(t){ru||(ru=e$(),ru.transparent=[0,0,0,0]);const e=ru[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const n$=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function i$(t){const e=n$.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?Ma(o):bs(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?Ma(i):bs(i,0,255)),s=255&(e[4]?Ma(s):bs(s,0,255)),r=255&(e[6]?Ma(r):bs(r,0,255)),{r:i,g:s,b:r,a:n}}}function s$(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Mi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Qd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Zr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function r$(t,e,n){const i=Zr(Mi(t.r)),s=Zr(Mi(t.g)),r=Zr(Mi(t.b));return{r:Ds(Qd(i+n*(Zr(Mi(e.r))-i))),g:Ds(Qd(s+n*(Zr(Mi(e.g))-s))),b:Ds(Qd(r+n*(Zr(Mi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function ou(t,e,n){if(t){let i=Iy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Cy(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function rk(t,e){return t&&Object.assign(e||{},t)}function Tb(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Ds(t[3]))):(e=rk(t,{r:0,g:0,b:0,a:1}),e.a=Ds(e.a)),e}function o$(t){return t.charAt(0)==="r"?i$(t):QB(t)}class Ul{constructor(e){if(e instanceof Ul)return e;const n=typeof e;let i;n==="object"?i=Tb(e):n==="string"&&(i=zB(e)||t$(e)||o$(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=rk(this._rgb);return e&&(e.a=Mi(e.a)),e}set rgb(e){this._rgb=Tb(e)}rgbString(){return this._valid?s$(this._rgb):void 0}hexString(){return this._valid?jB(this._rgb):void 0}hslString(){return this._valid?ZB(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=r$(this._rgb,e._rgb,n)),this}clone(){return new Ul(this.rgb)}alpha(e){return this._rgb.a=Ds(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=xc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ou(this._rgb,2,e),this}darken(e){return ou(this._rgb,2,-e),this}saturate(e){return ou(this._rgb,1,e),this}desaturate(e){return ou(this._rgb,1,-e),this}rotate(e){return JB(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Ai(){}const a$=(()=>{let t=0;return()=>t++})();function rt(t){return t===null||typeof t>"u"}function ft(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ve(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Pt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Tn(t,e){return Pt(t)?t:e}function Re(t,e){return typeof t>"u"?e:t}const l$=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Je(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function qe(t,e,n,i){let s,r,o;if(ft(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(Ve(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Fh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Uh(t){if(ft(t))return t.map(Uh);if(Ve(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Uh(t[n[s]]);return e}return t}function ok(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function c$(t,e,n,i){if(!ok(t))return;const s=e[t],r=n[t];Ve(s)&&Ve(r)?Bl(s,r,i):e[t]=Uh(r)}function Bl(t,e,n){const i=ft(e)?e:[e],s=i.length;if(!Ve(t))return t;n=n||{};const r=n.merger||c$;let o;for(let a=0;a<s;++a){if(o=i[a],!Ve(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function tl(t,e){return Bl(t,e,{merger:u$})}function u$(t,e,n){if(!ok(t))return;const i=e[t],s=n[t];Ve(i)&&Ve(s)?tl(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Uh(s))}const Ib={"":t=>t,x:t=>t.x,y:t=>t.y};function h$(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function f$(t){const e=h$(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Bh(t,e){return(Ib[e]||(Ib[e]=f$(e)))(t)}function ky(t){return t.charAt(0).toUpperCase()+t.slice(1)}const $h=t=>typeof t<"u",zs=t=>typeof t=="function",xb=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function d$(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const At=Math.PI,Vn=2*At,p$=Vn+At,Vh=Number.POSITIVE_INFINITY,g$=At/180,vn=At/2,Qs=At/4,Cb=At*2/3,ws=Math.log10,jo=Math.sign;function nl(t,e,n){return Math.abs(t-e)<n}function kb(t){const e=Math.round(t);t=nl(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(ws(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function m$(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function $l(t){return!isNaN(parseFloat(t))&&isFinite(t)}function _$(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function ak(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Es(t){return t*(At/180)}function Sy(t){return t*(180/At)}function Sb(t){if(!Pt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function y$(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*At&&(r+=Vn),{angle:r,distance:s}}function Ng(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function v$(t,e){return(t-e+p$)%Vn-At}function jn(t){return(t%Vn+Vn)%Vn}function lk(t,e,n,i){const s=jn(t),r=jn(e),o=jn(n),a=jn(r-s),l=jn(o-s),c=jn(s-r),u=jn(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function Bn(t,e,n){return Math.max(e,Math.min(n,t))}function b$(t){return Bn(t,-32768,32767)}function Pa(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Ay(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const mr=(t,e,n,i)=>Ay(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),w$=(t,e,n)=>Ay(t,n,i=>t[i][e]>=n);function E$(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const ck=["push","pop","shift","splice","unshift"];function T$(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ck.forEach(n=>{const i="_onData"+ky(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Ab(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(ck.forEach(r=>{delete t[r]}),delete t._chartjs)}function I$(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const uk=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function hk(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,uk.call(window,()=>{i=!1,t.apply(e,n)}))}}function x$(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Ry=t=>t==="start"?"left":t==="end"?"right":"center",qt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,C$=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function k$(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=Bn(Math.min(mr(a,o.axis,c).lo,n?i:mr(e,l,o.getPixelForValue(c)).lo),0,i-1)),f?r=Bn(Math.max(mr(a,o.axis,u,!0).hi+1,n?0:mr(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function S$(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const au=t=>t===0||t===1,Rb=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Vn/n)),Db=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Vn/n)+1,il={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*vn)+1,easeOutSine:t=>Math.sin(t*vn),easeInOutSine:t=>-.5*(Math.cos(At*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>au(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>au(t)?t:Rb(t,.075,.3),easeOutElastic:t=>au(t)?t:Db(t,.075,.3),easeInOutElastic(t){return au(t)?t:t<.5?.5*Rb(t*2,.1125,.45):.5+.5*Db(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-il.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?il.easeInBounce(t*2)*.5:il.easeOutBounce(t*2-1)*.5+.5};function Dy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Ob(t){return Dy(t)?t:new Ul(t)}function Jd(t){return Dy(t)?t:new Ul(t).saturate(.5).darken(.1).hexString()}const A$=["x","y","borderWidth","radius","tension"],R$=["color","borderColor","backgroundColor"];function D$(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:R$},numbers:{type:"number",properties:A$}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function O$(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Mb=new Map;function M$(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Mb.get(n);return i||(i=new Intl.NumberFormat(t,e),Mb.set(n,i)),i}function Oy(t,e,n){return M$(e,n).format(t)}const fk={values(t){return ft(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=P$(t,n)}const o=ws(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Oy(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(ws(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?fk.numeric.call(this,t,e,n):""}};function P$(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var sd={formatters:fk};function N$(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:sd.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Mr=Object.create(null),Lg=Object.create(null);function sl(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Zd(t,e,n){return typeof e=="string"?Bl(sl(t,e),n):Bl(sl(t,""),e)}class L${constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Jd(s.backgroundColor),this.hoverBorderColor=(i,s)=>Jd(s.borderColor),this.hoverColor=(i,s)=>Jd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Zd(this,e,n)}get(e){return sl(this,e)}describe(e,n){return Zd(Lg,e,n)}override(e,n){return Zd(Mr,e,n)}route(e,n,i,s){const r=sl(this,e),o=sl(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return Ve(l)?Object.assign({},c,l):Re(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var gt=new L$({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[D$,O$,N$]);function F$(t){return!t||rt(t.size)||rt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function zh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function U$(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,f;for(l=0;l<a;l++)if(h=n[l],h!=null&&!ft(h))o=zh(t,s,r,o,h);else if(ft(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!ft(f)&&(o=zh(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(l=0;l<d;l++)delete s[r[l]];r.splice(0,d)}return o}function Js(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function Pb(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Fg(t,e,n,i){dk(t,e,n,i,null)}function dk(t,e,n,i,s){let r,o,a,l,c,u,h,f;const d=e.pointStyle,p=e.rotation,m=e.radius;let g=(p||0)*g$;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(g),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(m)||m<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,m,0,0,Vn):t.arc(n,i,m,0,Vn),t.closePath();break;case"triangle":u=s?s/2:m,t.moveTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=Cb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=Cb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),t.closePath();break;case"rectRounded":c=m*.516,l=m-c,o=Math.cos(g+Qs)*l,h=Math.cos(g+Qs)*(s?s/2-c:l),a=Math.sin(g+Qs)*l,f=Math.sin(g+Qs)*(s?s/2-c:l),t.arc(n-h,i-a,c,g-At,g-vn),t.arc(n+f,i-o,c,g-vn,g),t.arc(n+h,i+a,c,g,g+vn),t.arc(n-f,i+o,c,g+vn,g+At),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*m,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}g+=Qs;case"rectRot":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":g+=Qs;case"cross":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),g+=Qs,h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(g)*m,a=Math.sin(g)*m,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(g)*(s?s/2:m),i+Math.sin(g)*m);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function $i(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function My(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Py(t){t.restore()}function B$(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function $$(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function V$(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),rt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function z$(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function H$(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Pr(t,e,n,i,s,r={}){const o=ft(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,V$(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&H$(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),rt(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),z$(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Hh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-vn,At,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,At,vn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,vn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-vn,!0),t.lineTo(n+o.topLeft,i)}const j$=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,W$=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function q$(t,e){const n=(""+t).match(j$);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const K$=t=>+t||0;function pk(t,e){const n={},i=Ve(e),s=i?Object.keys(e):e,r=Ve(t)?i?o=>Re(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=K$(r(o));return n}function G$(t){return pk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Eo(t){return pk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function on(t){const e=G$(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function xt(t,e){t=t||{},e=e||gt.font;let n=Re(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Re(t.style,e.style);i&&!(""+i).match(W$)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Re(t.family,e.family),lineHeight:q$(Re(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Re(t.weight,e.weight),string:""};return s.string=F$(s),s}function lu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&ft(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function Y$(t,e,n){const{min:i,max:s}=t,r=l$(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Gs(t,e){return Object.assign(Object.create(t),e)}function Ny(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=yk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ny([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return mk(a,l,()=>iV(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return Lb(a).includes(l)},ownKeys(a){return Lb(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function Wo(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:gk(t,i),setContext:r=>Wo(t,r,n,i),override:r=>Wo(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return mk(r,o,()=>Q$(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function gk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:zs(n)?n:()=>n,isIndexable:zs(i)?i:()=>i}}const X$=(t,e)=>t?t+ky(e):e,Ly=(t,e)=>Ve(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function mk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function Q$(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return zs(a)&&o.isScriptable(e)&&(a=J$(e,a,t,n)),ft(a)&&a.length&&(a=Z$(e,a,t,o.isIndexable)),Ly(e,a)&&(a=Wo(a,s,r&&r[e],o)),a}function J$(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),Ly(t,l)&&(l=Fy(s._scopes,s,t,l)),l}function Z$(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(Ve(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=Fy(c,s,t,u);e.push(Wo(h,r,o&&o[t],a))}}return e}function _k(t,e,n){return zs(t)?t(e,n):t}const eV=(t,e)=>t===!0?e:typeof t=="string"?Bh(e,t):void 0;function tV(t,e,n,i,s){for(const r of e){const o=eV(n,r);if(o){t.add(o);const a=_k(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Fy(t,e,n,i){const s=e._rootScopes,r=_k(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=Nb(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=Nb(a,o,r,l,i),l===null)?!1:Ny(Array.from(a),[""],s,r,()=>nV(e,n,i))}function Nb(t,e,n,i,s){for(;n;)n=tV(t,e,n,i,s);return n}function nV(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return ft(s)&&Ve(n)?n:s||{}}function iV(t,e,n,i){let s;for(const r of e)if(s=yk(X$(r,t),n),typeof s<"u")return Ly(t,s)?Fy(n,i,t,s):s}function yk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Lb(t){let e=t._keys;return e||(e=t._keys=sV(t._scopes)),e}function sV(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const rV=Number.EPSILON||1e-14,qo=(t,e)=>e<t.length&&!t[e].skip&&t[e],vk=t=>t==="x"?"y":"x";function oV(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Ng(r,s),l=Ng(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function aV(t,e,n){const i=t.length;let s,r,o,a,l,c=qo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=qo(t,u+1),!(!l||!c)){if(nl(e[u],0,rV)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function lV(t,e,n="x"){const i=vk(n),s=t.length;let r,o,a,l=qo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=qo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function cV(t,e="x"){const n=vk(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=qo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=qo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?jo(s[o-1])!==jo(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}aV(t,s,r),lV(t,r,e)}function cu(t,e,n){return Math.max(Math.min(t,n),e)}function uV(t,e){let n,i,s,r,o,a=$i(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&$i(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=cu(s.cp1x,e.left,e.right),s.cp1y=cu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=cu(s.cp2x,e.left,e.right),s.cp2y=cu(s.cp2y,e.top,e.bottom)))}function hV(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")cV(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=oV(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&uV(t,n)}function bk(){return typeof window<"u"&&typeof document<"u"}function Uy(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function jh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const rd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function fV(t,e){return rd(t).getPropertyValue(e)}const dV=["top","right","bottom","left"];function Er(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=dV[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const pV=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function gV(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(pV(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function sr(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=rd(n),r=s.boxSizing==="border-box",o=Er(s,"padding"),a=Er(s,"border","width"),{x:l,y:c,box:u}=gV(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/d*n.width/i),y:Math.round((c-f)/p*n.height/i)}}function mV(t,e,n){let i,s;if(e===void 0||n===void 0){const r=Uy(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=rd(r),l=Er(a,"border","width"),c=Er(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=jh(a.maxWidth,r,"clientWidth"),s=jh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Vh,maxHeight:s||Vh}}const uu=t=>Math.round(t*10)/10;function _V(t,e,n,i){const s=rd(t),r=Er(s,"margin"),o=jh(s.maxWidth,t,"clientWidth")||Vh,a=jh(s.maxHeight,t,"clientHeight")||Vh,l=mV(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const f=Er(s,"border","width"),d=Er(s,"padding");c-=d.width+f.width,u-=d.height+f.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=uu(Math.min(c,o,l.maxWidth)),u=uu(Math.min(u,a,l.maxHeight)),c&&!u&&(u=uu(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=uu(Math.floor(u*i))),{width:c,height:u}}function Fb(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const yV=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function Ub(t,e){const n=fV(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function rr(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function vV(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function bV(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=rr(t,s,n),a=rr(s,r,n),l=rr(r,e,n),c=rr(o,a,n),u=rr(a,l,n);return rr(c,u,n)}const wV=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},EV=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function To(t,e,n){return t?wV(e,n):EV()}function wk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Ek(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Tk(t){return t==="angle"?{between:lk,compare:v$,normalize:jn}:{between:Pa,compare:(e,n)=>e-n,normalize:e=>e}}function Bb({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function TV(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=Tk(i),l=e.length;let{start:c,end:u,loop:h}=t,f,d;if(h){for(c+=l,u+=l,f=0,d=l;f<d&&o(a(e[c%l][i]),s,r);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function IV(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=Tk(i),{start:u,end:h,loop:f,style:d}=TV(t,e,n),p=[];let m=!1,g=null,_,y,v;const T=()=>l(s,v,_)&&a(s,v)!==0,x=()=>a(r,_)===0||l(r,v,_),S=()=>m||T(),I=()=>!m||x();for(let C=u,B=u;C<=h;++C)y=e[C%o],!y.skip&&(_=c(y[i]),_!==v&&(m=l(_,s,r),g===null&&S()&&(g=a(_,s)===0?C:B),g!==null&&I()&&(p.push(Bb({start:g,end:C,loop:f,count:o,style:d})),g=null),B=C,v=_));return g!==null&&p.push(Bb({start:g,end:h,loop:f,count:o,style:d})),p}function xV(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=IV(i[s],t.points,e);r.length&&n.push(...r)}return n}function CV(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function kV(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function SV(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=CV(n,s,r,i);if(i===!0)return $b(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return $b(t,kV(n,o,l,c),n,e)}function $b(t,e,n,i){return!i||!i.setContext||!n?e:AV(t,e,n,i)}function AV(t,e,n,i){const s=t._chart.getContext(),r=Vb(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,f=h;function d(p,m,g,_){const y=a?-1:1;if(p!==m){for(p+=l;n[p%l].skip;)p-=y;for(;n[m%l].skip;)m+=y;p%l!==m%l&&(c.push({start:p%l,end:m%l,loop:g,style:_}),u=_,h=m%l)}}for(const p of e){h=a?h:p.start;let m=n[h%l],g;for(f=h+1;f<=p.end;f++){const _=n[f%l];g=Vb(i.setContext(Gs(s,{type:"segment",p0:m,p1:_,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),RV(g,u)&&d(h,f-1,p.loop,u),m=_,u=g}h<f-1&&d(h,f-1,p.loop,u)}return c}function Vb(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function RV(t,e){if(!e)return!1;const n=[],i=function(s,r){return Dy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class DV{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=uk.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ri=new DV;const zb="transparent",OV={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Ob(t||zb),s=i.valid&&Ob(e||zb);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class MV{constructor(e,n,i,s){const r=n[i];s=lu([e.to,s,r,e.from]);const o=lu([e.from,r,s]);this._active=!0,this._fn=e.fn||OV[e.type||typeof o],this._easing=il[e.easing]||il.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=lu([e.to,n,s,e.from]),this._from=lu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class Ik{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Ve(e))return;const n=Object.keys(gt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Ve(r))return;const o={};for(const a of n)o[a]=r[a];(ft(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=NV(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&PV(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[c]=u;continue}r[c]=h=new MV(f,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ri.add(this._chart,i),!0}}function PV(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function NV(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Hb(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function LV(t,e,n){if(n===!1)return!1;const i=Hb(t,n),s=Hb(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function FV(t){let e,n,i,s;return Ve(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function xk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function jb(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],Pt(c)&&(r||e===0||jo(e)===jo(c))&&(e+=c)}return e}}function UV(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Wb(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function BV(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function $V(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function VV(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function qb(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Kb(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=BV(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[l]:m,[c]:g}=p,_=p._stacks||(p._stacks={});f=_[c]=VV(s,u,m),f[a]=g,f._top=qb(f,o,!0,i.type),f._bottom=qb(f,o,!1,i.type);const y=f._visualValues||(f._visualValues={});y[a]=g}}function ep(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function zV(t,e){return Gs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function HV(t,e,n){return Gs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function wa(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const tp=t=>t==="reset"||t==="none",Gb=(t,e)=>e?t:Object.assign({},t),jV=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:xk(n,!0),values:null};class rl{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Wb(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&wa(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=Re(i.xAxisID,ep(e,"x")),o=n.yAxisID=Re(i.yAxisID,ep(e,"y")),a=n.rAxisID=Re(i.rAxisID,ep(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Ab(this._data,this),e._stacked&&wa(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Ve(n))this._data=UV(n);else if(i!==n){if(i){Ab(i,this);const s=this._cachedMeta;wa(s),s._parsed=[]}n&&Object.isExtensible(n)&&T$(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Wb(n.vScale,n),n.stack!==i.stack&&(s=!0,wa(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Kb(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{ft(s[e])?f=this.parseArrayData(i,s,e,n):Ve(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],l&&(d()&&(l=!1),c=h);i._sorted=l}o&&Kb(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],c[u]={x:r.parse(Bh(d,a),f),y:o.parse(Bh(d,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:xk(s,!0),values:n._stacks[e.axis]._visualValues};return jb(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=jb(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=jV(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=$V(a);let f,d;function p(){d=s[f];const m=d[a.axis];return!Pt(d[e.axis])||u>m||h<m}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,e,d,l),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,e,d,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Pt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=FV(Re(this.options.clip,LV(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=HV(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=zV(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&$h(i);if(a)return Gb(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),u),d=Object.keys(gt.elements[e]),p=()=>this.getContext(i,s,n),m=c.resolveNamedOptions(f,d,p,h);return m.$shared&&(m.$shared=l,r[o]=Object.freeze(Gb(m,l))),m}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(e,i,n))}const c=new Ik(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||tp(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){tp(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!tp(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&wa(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ce(rl,"defaults",{}),ce(rl,"datasetElementType",null),ce(rl,"dataElementType",null);class Nu extends rl{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=k$(n,s,o);this._drawStart=a,this._drawCount=l,S$(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:m}=this.options,g=$l(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",y=n+i,v=e.length;let T=n>0&&this.getParsed(n-1);for(let x=0;x<v;++x){const S=e[x],I=_?S:{};if(x<n||x>=y){I.skip=!0;continue}const C=this.getParsed(x),B=rt(C[d]),U=I[f]=o.getPixelForValue(C[f],x),$=I[d]=r||B?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[d],x);I.skip=isNaN(U)||isNaN($)||B,I.stop=x>0&&Math.abs(C[f]-T[f])>g,m&&(I.parsed=C,I.raw=c.data[x]),h&&(I.options=u||this.resolveDataElementOptions(x,S.active?"active":s)),_||this.updateElement(S,x,I,s),T=C}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ce(Nu,"id","line"),ce(Nu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ce(Nu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Zs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class By{constructor(e){ce(this,"options");this.options=e||{}}static override(e){Object.assign(By.prototype,e)}init(){}formats(){return Zs()}parse(){return Zs()}format(){return Zs()}add(){return Zs()}diff(){return Zs()}startOf(){return Zs()}endOf(){return Zs()}}var WV={_date:By};function qV(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?w$:mr;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),f=l(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function Cc(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:f}=qV(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,c,d)}}}function KV(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function np(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||Cc(t,n,e,function(a,l,c){!s&&!$i(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function GV(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=y$(o,{x:e.x,y:e.y});lk(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return Cc(t,n,e,r),s}function YV(t,e,n,i,s,r){let o=[];const a=KV(n);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const g=a(e,p);g<l?(o=[{element:u,datasetIndex:h,index:f}],l=g):g===l&&o.push({element:u,datasetIndex:h,index:f})}return Cc(t,n,e,c),o}function ip(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?GV(t,e,n,s):YV(t,e,n,i,s,r)}function Yb(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return Cc(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var XV={evaluateInteractionItems:Cc,modes:{index(t,e,n,i){const s=sr(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?np(t,s,r,i,o):ip(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=sr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?np(t,s,r,i,o):ip(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=sr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return np(t,s,r,i,o)},nearest(t,e,n,i){const s=sr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return ip(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=sr(e,t);return Yb(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=sr(e,t);return Yb(t,s,"y",n.intersect,i)}}};const Ck=["left","top","right","bottom"];function Ea(t,e){return t.filter(n=>n.pos===e)}function Xb(t,e){return t.filter(n=>Ck.indexOf(n.pos)===-1&&n.box.axis===e)}function Ta(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function QV(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function JV(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!Ck.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function ZV(t,e){const n=JV(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function ez(t){const e=QV(t),n=Ta(e.filter(c=>c.box.fullSize),!0),i=Ta(Ea(e,"left"),!0),s=Ta(Ea(e,"right")),r=Ta(Ea(e,"top"),!0),o=Ta(Ea(e,"bottom")),a=Xb(e,"x"),l=Xb(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Ea(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Qb(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function kk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function tz(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!Ve(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&kk(o,r.getPadding());const a=Math.max(0,e.outerWidth-Qb(o,t,"left","right")),l=Math.max(0,e.outerHeight-Qb(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function nz(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function iz(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Na(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,iz(a.horizontal,e));const{same:h,other:f}=tz(e,n,a,i);c|=h&&s.length,u=u||f,l.fullSize||s.push(a)}return c&&Na(s,e,n,i)||u}function hu(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function Jb(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,f=c.size||l.height;$h(c.start)&&(o=c.start),l.fullSize?hu(l,s.left,o,n.outerWidth-s.right-s.left,f):hu(l,e.left+c.placed,o,h,f),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,f=c.size||l.width;$h(c.start)&&(r=c.start),l.fullSize?hu(l,r,s.top,f,n.outerHeight-s.bottom-s.top):hu(l,r,e.top+c.placed,f,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var $n={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=on(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=ez(t.boxes),l=a.vertical,c=a.horizontal;qe(t.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const u=l.reduce((m,g)=>g.box.options&&g.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);kk(f,on(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=ZV(l.concat(c),h);Na(a.fullSize,d,h,p),Na(l,d,h,p),Na(c,d,h,p)&&Na(l,d,h,p),nz(d),Jb(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,Jb(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},qe(a.chartArea,m=>{const g=m.box;Object.assign(g,t.chartArea),g.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class Sk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class sz extends Sk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Lu="$chartjs",rz={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Zb=t=>t===null||t==="";function oz(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Lu]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Zb(s)){const r=Ub(t,"width");r!==void 0&&(t.width=r)}if(Zb(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=Ub(t,"height");r!==void 0&&(t.height=r)}return t}const Ak=yV?{passive:!0}:!1;function az(t,e,n){t.addEventListener(e,n,Ak)}function lz(t,e,n){t.canvas.removeEventListener(e,n,Ak)}function cz(t,e){const n=rz[t.type]||t.type,{x:i,y:s}=sr(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Wh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function uz(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Wh(a.addedNodes,i),o=o&&!Wh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function hz(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Wh(a.removedNodes,i),o=o&&!Wh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Vl=new Map;let ew=0;function Rk(){const t=window.devicePixelRatio;t!==ew&&(ew=t,Vl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function fz(t,e){Vl.size||window.addEventListener("resize",Rk),Vl.set(t,e)}function dz(t){Vl.delete(t),Vl.size||window.removeEventListener("resize",Rk)}function pz(t,e,n){const i=t.canvas,s=i&&Uy(i);if(!s)return;const r=hk((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),fz(t,r),o}function sp(t,e,n){n&&n.disconnect(),e==="resize"&&dz(t)}function gz(t,e,n){const i=t.canvas,s=hk(r=>{t.ctx!==null&&n(cz(r,t))},t);return az(i,e,s),s}class mz extends Sk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(oz(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Lu])return!1;const i=n[Lu].initial;["height","width"].forEach(r=>{const o=i[r];rt(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Lu],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:uz,detach:hz,resize:pz}[n]||gz;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:sp,detach:sp,resize:sp}[n]||lz)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return _V(e,n,i,s)}isAttached(e){const n=Uy(e);return!!(n&&n.isConnected)}}function _z(t){return!bk()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?sz:mz}var yu;let qr=(yu=class{constructor(){ce(this,"x");ce(this,"y");ce(this,"active",!1);ce(this,"options");ce(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return $l(this.x)&&$l(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ce(yu,"defaults",{}),ce(yu,"defaultRoutes"),yu);function yz(t,e){const n=t.options.ticks,i=vz(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?wz(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Ez(e,c,r,o/s),c;const u=bz(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((l-a)/(o-1)):null;for(fu(e,c,u,rt(d)?0:a-d,a),h=0,f=o-1;h<f;h++)fu(e,c,u,r[h],r[h+1]);return fu(e,c,u,l,rt(d)?e.length:l+d),c}return fu(e,c,u),c}function vz(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function bz(t,e,n){const i=Tz(t),s=e.length/n;if(!i)return Math.max(s,1);const r=m$(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function wz(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Ez(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function fu(t,e,n,i,s){const r=Re(i,0),o=Math.min(Re(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function Tz(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const Iz=t=>t==="left"?"right":t==="right"?"left":t,tw=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,nw=(t,e)=>Math.min(e||t,t);function iw(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function xz(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function Cz(t,e){qe(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function Ia(t){return t.drawTicks?t.tickLength:0}function sw(t,e){if(!t.display)return 0;const n=xt(t.font,e),i=on(t.padding);return(ft(t.text)?t.text.length:1)*n.lineHeight+i.height}function kz(t,e){return Gs(t,{scale:e,type:"scale"})}function Sz(t,e,n){return Gs(t,{tick:n,index:e,type:"tick"})}function Az(t,e,n){let i=Ry(t);return(n&&e!=="right"||!n&&e==="right")&&(i=Iz(i)),i}function Rz(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,f,d,p;const m=o-s,g=a-r;if(t.isHorizontal()){if(d=qt(i,r,a),Ve(n)){const _=Object.keys(n)[0],y=n[_];p=u[_].getPixelForValue(y)+m-e}else n==="center"?p=(c.bottom+c.top)/2+m-e:p=tw(t,n,e);f=a-r}else{if(Ve(n)){const _=Object.keys(n)[0],y=n[_];d=u[_].getPixelForValue(y)-g+e}else n==="center"?d=(c.left+c.right)/2-g+e:d=tw(t,n,e);p=qt(i,o,s),h=n==="left"?-vn:vn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class Kr extends qr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=Tn(e,Number.POSITIVE_INFINITY),n=Tn(n,Number.NEGATIVE_INFINITY),i=Tn(i,Number.POSITIVE_INFINITY),s=Tn(s,Number.NEGATIVE_INFINITY),{min:Tn(e,i),max:Tn(n,s),minDefined:Pt(e),maxDefined:Pt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:Tn(n,Tn(i,n)),max:Tn(i,Tn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Je(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Y$(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?iw(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=yz(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Je(this.options.afterUpdate,[this])}beforeSetDimensions(){Je(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Je(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Je(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Je(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Je(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Je(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Je(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=nw(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=Bn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),l=this.maxHeight-Ia(e.grid)-n.padding-sw(e.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),o=Sy(Math.min(Math.asin(Bn((u.highest.height+6)/a,-1,1)),Math.asin(Bn(l/c,-1,1))-Math.asin(Bn(f/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Je(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Je(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=sw(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=Ia(r)+l):(e.height=this.maxHeight,e.width=Ia(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=Es(this.labelRotation),m=Math.cos(p),g=Math.sin(p);if(a){const _=i.mirror?0:g*h.width+m*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:m*h.width+g*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(c,u,g,m)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;l?c?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Je(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)rt(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=iw(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/nw(n,i));let c=0,u=0,h,f,d,p,m,g,_,y,v,T,x;for(h=0;h<n;h+=l){if(p=e[h].label,m=this._resolveTickFontOptions(h),s.font=g=m.string,_=r[g]=r[g]||{data:{},gc:[]},y=m.lineHeight,v=T=0,!rt(p)&&!ft(p))v=zh(s,_.data,_.gc,v,p),T=y;else if(ft(p))for(f=0,d=p.length;f<d;++f)x=p[f],!rt(x)&&!ft(x)&&(v=zh(s,_.data,_.gc,v,x),T+=y);o.push(v),a.push(T),c=Math.max(v,c),u=Math.max(T,u)}Cz(r,n);const S=o.indexOf(c),I=a.indexOf(u),C=B=>({width:o[B]||0,height:a[B]||0});return{first:C(0),last:C(n-1),widest:C(S),highest:C(I),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return b$(this._alignToPixels?Js(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=Sz(this.getContext(),e,i))}return this.$context||(this.$context=kz(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Es(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=Ia(r),d=[],p=a.setContext(this.getContext()),m=p.display?p.width:0,g=m/2,_=function(ne){return Js(i,ne,m)};let y,v,T,x,S,I,C,B,U,$,Q,je;if(o==="top")y=_(this.bottom),I=this.bottom-f,B=y-g,$=_(e.top)+g,je=e.bottom;else if(o==="bottom")y=_(this.top),$=e.top,je=_(e.bottom)-g,I=y+g,B=this.top+f;else if(o==="left")y=_(this.right),S=this.right-f,C=y-g,U=_(e.left)+g,Q=e.right;else if(o==="right")y=_(this.left),U=e.left,Q=_(e.right)-g,S=y+g,C=this.left+f;else if(n==="x"){if(o==="center")y=_((e.top+e.bottom)/2+.5);else if(Ve(o)){const ne=Object.keys(o)[0],be=o[ne];y=_(this.chart.scales[ne].getPixelForValue(be))}$=e.top,je=e.bottom,I=y+g,B=I+f}else if(n==="y"){if(o==="center")y=_((e.left+e.right)/2);else if(Ve(o)){const ne=Object.keys(o)[0],be=o[ne];y=_(this.chart.scales[ne].getPixelForValue(be))}S=y-g,C=S-f,U=e.left,Q=e.right}const $e=Re(s.ticks.maxTicksLimit,h),me=Math.max(1,Math.ceil(h/$e));for(v=0;v<h;v+=me){const ne=this.getContext(v),be=r.setContext(ne),Le=a.setContext(ne),Ht=be.lineWidth,hn=be.color,jt=Le.dash||[],_t=Le.dashOffset,Nn=be.tickWidth,ai=be.tickColor,D=be.tickBorderDash||[],W=be.tickBorderDashOffset;T=xz(this,v,l),T!==void 0&&(x=Js(i,T,Ht),c?S=C=U=Q=x:I=B=$=je=x,d.push({tx1:S,ty1:I,tx2:C,ty2:B,x1:U,y1:$,x2:Q,y2:je,width:Ht,color:hn,borderDash:jt,borderDashOffset:_t,tickWidth:Nn,tickColor:ai,tickBorderDash:D,tickBorderDashOffset:W}))}return this._ticksLength=h,this._borderValue=y,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,f=Ia(i.grid),d=f+u,p=h?-u:d,m=-Es(this.labelRotation),g=[];let _,y,v,T,x,S,I,C,B,U,$,Q,je="middle";if(s==="top")S=this.bottom-p,I=this._getXAxisLabelAlignment();else if(s==="bottom")S=this.top+p,I=this._getXAxisLabelAlignment();else if(s==="left"){const me=this._getYAxisLabelAlignment(f);I=me.textAlign,x=me.x}else if(s==="right"){const me=this._getYAxisLabelAlignment(f);I=me.textAlign,x=me.x}else if(n==="x"){if(s==="center")S=(e.top+e.bottom)/2+d;else if(Ve(s)){const me=Object.keys(s)[0],ne=s[me];S=this.chart.scales[me].getPixelForValue(ne)+d}I=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")x=(e.left+e.right)/2-d;else if(Ve(s)){const me=Object.keys(s)[0],ne=s[me];x=this.chart.scales[me].getPixelForValue(ne)}I=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?je="top":l==="end"&&(je="bottom"));const $e=this._getLabelSizes();for(_=0,y=a.length;_<y;++_){v=a[_],T=v.label;const me=r.setContext(this.getContext(_));C=this.getPixelForTick(_)+r.labelOffset,B=this._resolveTickFontOptions(_),U=B.lineHeight,$=ft(T)?T.length:1;const ne=$/2,be=me.color,Le=me.textStrokeColor,Ht=me.textStrokeWidth;let hn=I;o?(x=C,I==="inner"&&(_===y-1?hn=this.options.reverse?"left":"right":_===0?hn=this.options.reverse?"right":"left":hn="center"),s==="top"?c==="near"||m!==0?Q=-$*U+U/2:c==="center"?Q=-$e.highest.height/2-ne*U+U:Q=-$e.highest.height+U/2:c==="near"||m!==0?Q=U/2:c==="center"?Q=$e.highest.height/2-ne*U:Q=$e.highest.height-$*U,h&&(Q*=-1),m!==0&&!me.showLabelBackdrop&&(x+=U/2*Math.sin(m))):(S=C,Q=(1-$)*U/2);let jt;if(me.showLabelBackdrop){const _t=on(me.backdropPadding),Nn=$e.heights[_],ai=$e.widths[_];let D=Q-_t.top,W=0-_t.left;switch(je){case"middle":D-=Nn/2;break;case"bottom":D-=Nn;break}switch(I){case"center":W-=ai/2;break;case"right":W-=ai;break}jt={left:W,top:D,width:ai+_t.width,height:Nn+_t.height,color:me.backdropColor}}g.push({label:T,font:B,textOffset:Q,options:{rotation:m,color:be,strokeColor:Le,strokeWidth:Ht,textAlign:hn,textBaseline:je,translation:[x,S],backdrop:jt}})}return g}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Es(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=Js(e,this.left,o)-o/2,u=Js(e,this.right,a)+a/2,h=f=l):(h=Js(e,this.top,o)-o/2,f=Js(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&My(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Pr(i,c,0,u,l,a)}s&&Py(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=xt(i.font),o=on(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||Ve(n)?(l+=o.bottom,ft(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=Rz(this,l,n,a);Pr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:Az(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Re(e.grid&&e.grid.z,-1),s=Re(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Kr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return xt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class du{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;Mz(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,Dz(e,o,i),this.override&&gt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in gt[s]&&(delete gt[s][i],this.override&&delete Mr[i])}}function Dz(t,e,n){const i=Bl(Object.create(null),[n?gt.get(n):{},gt.get(e),t.defaults]);gt.set(e,i),t.defaultRoutes&&Oz(e,t.defaultRoutes),t.descriptors&&gt.describe(e,t.descriptors)}function Oz(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");gt.route(r,s,l,a)})}function Mz(t){return"id"in t&&"defaults"in t}class Pz{constructor(){this.controllers=new du(rl,"datasets",!0),this.elements=new du(qr,"elements"),this.plugins=new du(Object,"plugins"),this.scales=new du(Kr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):qe(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=ky(e);Je(i["before"+s],[],i),n[e](i),Je(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var hi=new Pz;class Nz{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Je(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){rt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=Re(i.options&&i.options.plugins,{}),r=Lz(i);return s===!1&&!n?[]:Uz(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function Lz(t){const e={},n=[],i=Object.keys(hi.plugins.items);for(let r=0;r<i.length;r++)n.push(hi.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Fz(t,e){return!e&&t===!1?null:t===!0?{}:t}function Uz(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=Fz(i[l],s);c!==null&&r.push({plugin:a,options:Bz(t.config,{plugin:a,local:n[l]},c,o)})}return r}function Bz(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ug(t,e){const n=gt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function $z(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function Vz(t,e){return t===e?"_index_":"_value_"}function rw(t){if(t==="x"||t==="y"||t==="r")return t}function zz(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Bg(t,...e){if(rw(t))return t;for(const n of e){const i=n.axis||zz(n.position)||t.length>1&&rw(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function ow(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function Hz(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return ow(t,"x",n[0])||ow(t,"y",n[0])}return{}}function jz(t,e){const n=Mr[t.type]||{scales:{}},i=e.scales||{},s=Ug(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Ve(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Bg(o,a,Hz(o,t),gt.scales[a.type]),c=Vz(l,s),u=n.scales||{};r[o]=tl(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Ug(a,e),u=(Mr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=$z(h,l),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),tl(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];tl(a,[gt.scales[a.type],gt.scale])}),r}function Dk(t){const e=t.options||(t.options={});e.plugins=Re(e.plugins,{}),e.scales=jz(t,e)}function Ok(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Wz(t){return t=t||{},t.data=Ok(t.data),Dk(t),t}const aw=new Map,Mk=new Set;function pu(t,e){let n=aw.get(t);return n||(n=e(),aw.set(t,n),Mk.add(n)),n}const xa=(t,e,n)=>{const i=Bh(e,n);i!==void 0&&t.add(i)};class qz{constructor(e){this._config=Wz(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Ok(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Dk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return pu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return pu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return pu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return pu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>xa(l,e,h))),u.forEach(h=>xa(l,s,h)),u.forEach(h=>xa(l,Mr[r]||{},h)),u.forEach(h=>xa(l,gt,h)),u.forEach(h=>xa(l,Lg,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Mk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Mr[n]||{},gt.datasets[n]||{},{type:n},gt,Lg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=lw(this._resolverCache,e,s);let l=o;if(Gz(o,n)){r.$shared=!1,i=zs(i)?i():i;const c=this.createResolver(e,i,a);l=Wo(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=lw(this._resolverCache,e,i);return Ve(n)?Wo(r,n,void 0,s):r}}function lw(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Ny(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const Kz=t=>Ve(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||zs(t[n]),!1);function Gz(t,e){const{isScriptable:n,isIndexable:i}=gk(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(zs(a)||Kz(a))||o&&ft(a))return!0}return!1}var Yz="4.3.0";const Xz=["top","bottom","left","right","chartArea"];function cw(t,e){return t==="top"||t==="bottom"||Xz.indexOf(t)===-1&&e==="x"}function uw(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function hw(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Je(n&&n.onComplete,[t],e)}function Qz(t){const e=t.chart,n=e.options.animation;Je(n&&n.onProgress,[t],e)}function Pk(t){return bk()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Fu={},fw=t=>{const e=Pk(t);return Object.values(Fu).filter(n=>n.canvas===e).pop()};function Jz(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function Zz(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function eH(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var us;let od=(us=class{static register(...e){hi.add(...e),dw()}static unregister(...e){hi.remove(...e),dw()}constructor(e,n){const i=this.config=new qz(n),s=Pk(e),r=fw(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||_z(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=a$(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Nz,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=x$(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Fu[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ri.listen(this,"complete",hw),Ri.listen(this,"progress",Qz),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return rt(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return hi}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Fb(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Pb(this.canvas,this.ctx),this}stop(){return Ri.stop(this),this}resize(e,n){Ri.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Fb(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Je(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};qe(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Bg(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),qe(r,o=>{const a=o.options,l=a.id,c=Bg(l,a),u=Re(a.type,o.dtype);(a.position===void 0||cw(a.position,c)!==cw(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const f=hi.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),qe(s,(o,a)=>{o||delete i[a]}),qe(i,o=>{$n.configure(this,o,o.options),$n.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(uw("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Ug(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=hi.getController(a),{datasetElementType:c,dataElementType:u}=gt.datasets[a];Object.assign(l,{dataElementType:hi.getElement(u),datasetElementType:c&&hi.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){qe(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||qe(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(uw("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){qe(this.scales,e=>{$n.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!xb(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;Jz(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!xb(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;$n.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],qe(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,zs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ri.has(this)?this.attached&&!Ri.running(this)&&Ri.start(this):(this.draw(),hw({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=eH(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&My(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&Py(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return $i(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=XV.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Gs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);$h(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ri.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Pb(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Fu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};qe(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){qe(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},qe(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Fh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=d$(e),c=Zz(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Je(r.onHover,[e,a,this],this),l&&Je(r.onClick,[e,a,this],this));const u=!Fh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ce(us,"defaults",gt),ce(us,"instances",Fu),ce(us,"overrides",Mr),ce(us,"registry",hi),ce(us,"version",Yz),ce(us,"getChart",fw),us);function dw(){return qe(od.instances,t=>t._plugins.invalidate())}function Nk(t,e,n=e){t.lineCap=Re(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Re(n.borderDash,e.borderDash)),t.lineDashOffset=Re(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Re(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Re(n.borderWidth,e.borderWidth),t.strokeStyle=Re(n.borderColor,e.borderColor)}function tH(t,e,n){t.lineTo(n.x,n.y)}function nH(t){return t.stepped?B$:t.tension||t.cubicInterpolationMode==="monotone"?$$:tH}function Lk(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function iH(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Lk(s,n,i),u=nH(r);let{move:h=!0,reverse:f}=i||{},d,p,m;for(d=0;d<=c;++d)p=s[(a+(f?c-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,m,p,f,r.stepped),m=p);return l&&(p=s[(a+(f?c:0))%o],u(t,m,p,f,r.stepped)),!!l}function sH(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Lk(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,f,d,p,m,g,_;const y=T=>(o+(c?a-T:T))%r,v=()=>{m!==g&&(t.lineTo(u,g),t.lineTo(u,m),t.lineTo(u,_))};for(l&&(d=s[y(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[y(f)],d.skip)continue;const T=d.x,x=d.y,S=T|0;S===p?(x<m?m=x:x>g&&(g=x),u=(h*u+T)/++h):(v(),t.lineTo(T,x),p=S,h=0,m=g=x),_=x}v()}function $g(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?sH:iH}function rH(t){return t.stepped?vV:t.tension||t.cubicInterpolationMode==="monotone"?bV:rr}function oH(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Nk(t,e.options),t.stroke(s)}function aH(t,e,n,i){const{segments:s,options:r}=e,o=$g(e);for(const a of s)Nk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const lH=typeof Path2D=="function";function cH(t,e,n,i){lH&&!e.options.segment?oH(t,e,n,i):aH(t,e,n,i)}class La extends qr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;hV(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=SV(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=xV(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=rH(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:f}=o[c],d=r[h],p=r[f];if(d===p){a.push(d);continue}const m=Math.abs((s-d[n])/(p[n]-d[n])),g=l(d,p,m,i.stepped);g[n]=e[n],a.push(g)}return a.length===1?a[0]:a}pathSegment(e,n,i){return $g(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=$g(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),cH(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ce(La,"id","line"),ce(La,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ce(La,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ce(La,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function pw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Uu extends qr{constructor(n){super();ce(this,"parsed");ce(this,"skip");ce(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return pw(this,n,"x",i)}inYRange(n,i){return pw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!$i(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Fg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ce(Uu,"id","point"),ce(Uu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ce(Uu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const gw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},uH=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class mw extends qr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Je(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=xt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=gw(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,m)=>{const g=i+n/2+r.measureText(p.text).width;(m===0||c[c.length-1]+g+2*a>o)&&(h+=u,c[c.length-(m>0?0:1)]=0,d+=u,f++),l[m]={left:0,top:d,row:f,width:g,height:s},c[c.length-1]+=g+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,m=0;return this.legendItems.forEach((g,_)=>{const{itemWidth:y,itemHeight:v}=hH(i,n,r,g,s);_>0&&d+v+2*a>u&&(h+=f+a,c.push({width:f,height:d}),p+=f+a,m++,f=d=0),l[_]={left:p,top:d,col:m,width:y,height:v},f=Math.max(f,y),d+=v+a}),h+=f,c.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=To(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=qt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=qt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=qt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=qt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;My(e,this),this._draw(),Py(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=gt.color,l=To(e.rtl,this.left,this.width),c=xt(o.font),{padding:u}=o,h=c.size,f=h/2;let d;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=gw(o,h),_=function(S,I,C){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;s.save();const B=Re(C.lineWidth,1);if(s.fillStyle=Re(C.fillStyle,a),s.lineCap=Re(C.lineCap,"butt"),s.lineDashOffset=Re(C.lineDashOffset,0),s.lineJoin=Re(C.lineJoin,"miter"),s.lineWidth=B,s.strokeStyle=Re(C.strokeStyle,a),s.setLineDash(Re(C.lineDash,[])),o.usePointStyle){const U={radius:m*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:B},$=l.xPlus(S,p/2),Q=I+f;dk(s,U,$,Q,o.pointStyleWidth&&p)}else{const U=I+Math.max((h-m)/2,0),$=l.leftForLtr(S,p),Q=Eo(C.borderRadius);s.beginPath(),Object.values(Q).some(je=>je!==0)?Hh(s,{x:$,y:U,w:p,h:m,radius:Q}):s.rect($,U,p,m),s.fill(),B!==0&&s.stroke()}s.restore()},y=function(S,I,C){Pr(s,C.text,S,I+g/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},v=this.isHorizontal(),T=this._computeTitleHeight();v?d={x:qt(r,this.left+u,this.right-i[0]),y:this.top+u+T,line:0}:d={x:this.left+u,y:qt(r,this.top+T+u,this.bottom-n[0].height),line:0},wk(this.ctx,e.textDirection);const x=g+u;this.legendItems.forEach((S,I)=>{s.strokeStyle=S.fontColor,s.fillStyle=S.fontColor;const C=s.measureText(S.text).width,B=l.textAlign(S.textAlign||(S.textAlign=o.textAlign)),U=p+f+C;let $=d.x,Q=d.y;l.setWidth(this.width),v?I>0&&$+U+u>this.right&&(Q=d.y+=x,d.line++,$=d.x=qt(r,this.left+u,this.right-i[d.line])):I>0&&Q+x>this.bottom&&($=d.x=$+n[d.line].width+u,d.line++,Q=d.y=qt(r,this.top+T+u,this.bottom-n[d.line].height));const je=l.x($);if(_(je,Q,S),$=C$(B,$+p+f,v?$+U:this.right,e.rtl),y(l.x($),Q,S),v)d.x+=U+u;else if(typeof S.text!="string"){const $e=c.lineHeight;d.y+=Fk(S,$e)}else d.y+=x}),Ek(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=xt(n.font),s=on(n.padding);if(!n.display)return;const r=To(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=qt(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((m,g)=>Math.max(m,g.height),0);u=c+qt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=qt(a,h,h+f);o.textAlign=r.textAlign(Ry(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Pr(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=xt(e.font),i=on(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Pa(e,this.left,this.right)&&Pa(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Pa(e,s.left,s.left+s.width)&&Pa(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!pH(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=uH(s,i);s&&!r&&Je(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Je(n.onHover,[e,i,this],this)}else i&&Je(n.onClick,[e,i,this],this)}}function hH(t,e,n,i,s){const r=fH(i,t,e,n),o=dH(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function fH(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function dH(t,e,n){let i=t;return typeof e.text!="string"&&(i=Fk(e,n)),i}function Fk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function pH(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var gH={id:"legend",_element:mw,start(t,e,n){const i=t.legend=new mw({ctx:t.ctx,options:n,chart:t});$n.configure(t,i,n),$n.addBox(t,i)},stop(t){$n.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;$n.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=on(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Uk extends qr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=ft(i.text)?i.text.length:1;this._padding=on(i.padding);const r=s*xt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=qt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=qt(a,s,n),l=At*-.5):(u=r-e,h=qt(a,n,s),l=At*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=xt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Pr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:Ry(n.align),textBaseline:"middle",translation:[o,a]})}}function mH(t,e){const n=new Uk({ctx:t.ctx,options:e,chart:t});$n.configure(t,n,e),$n.addBox(t,n),t.titleBlock=n}var _H={id:"title",_element:Uk,start(t,e,n){mH(t,n)},stop(t){const e=t.titleBlock;$n.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;$n.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fa={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Ng(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function ui(t,e){return e&&(ft(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Di(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function yH(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function _w(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=xt(e.bodyFont),c=xt(e.titleFont),u=xt(e.footerFont),h=r.length,f=s.length,d=i.length,p=on(e.padding);let m=p.height,g=0,_=i.reduce((T,x)=>T+x.before.length+x.lines.length+x.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const T=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=d*T+(_-d)*l.lineHeight+(_-1)*e.bodySpacing}f&&(m+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let y=0;const v=function(T){g=Math.max(g,n.measureText(T).width+y)};return n.save(),n.font=c.string,qe(t.title,v),n.font=l.string,qe(t.beforeBody.concat(t.afterBody),v),y=e.displayColors?o+2+e.boxPadding:0,qe(i,T=>{qe(T.before,v),qe(T.lines,v),qe(T.after,v)}),y=0,n.font=u.string,qe(t.footer,v),n.restore(),g+=p.width,{width:g,height:m}}function vH(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function bH(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function wH(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),bH(c,t,e,n)&&(c="center"),c}function yw(t,e,n){const i=n.yAlign||e.yAlign||vH(t,n);return{xAlign:n.xAlign||e.xAlign||wH(t,e,n,i),yAlign:i}}function EH(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function TH(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function vw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=Eo(o);let p=EH(e,a);const m=TH(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:Bn(p,0,i.width-e.width),y:Bn(m,0,i.height-e.height)}}function gu(t,e,n){const i=on(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function bw(t){return ui([],Di(t))}function IH(t,e,n){return Gs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function ww(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Bk={beforeTitle:Ai,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ai,beforeBody:Ai,beforeLabel:Ai,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return rt(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ai,afterBody:Ai,beforeFooter:Ai,footer:Ai,afterFooter:Ai};function fn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?Bk[e].call(n,i):s}class Vg extends qr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new Ik(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=IH(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=fn(i,"beforeTitle",this,e),r=fn(i,"title",this,e),o=fn(i,"afterTitle",this,e);let a=[];return a=ui(a,Di(s)),a=ui(a,Di(r)),a=ui(a,Di(o)),a}getBeforeBody(e,n){return bw(fn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return qe(e,r=>{const o={before:[],lines:[],after:[]},a=ww(i,r);ui(o.before,Di(fn(a,"beforeLabel",this,r))),ui(o.lines,fn(a,"label",this,r)),ui(o.after,Di(fn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return bw(fn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=fn(i,"beforeFooter",this,e),r=fn(i,"footer",this,e),o=fn(i,"afterFooter",this,e);let a=[];return a=ui(a,Di(s)),a=ui(a,Di(r)),a=ui(a,Di(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(yH(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),qe(a,u=>{const h=ww(e.callbacks,u);s.push(fn(h,"labelColor",this,u)),r.push(fn(h,"labelPointStyle",this,u)),o.push(fn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Fa[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=_w(this,i),c=Object.assign({},a,l),u=yw(this.chart,i,c),h=vw(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=Eo(a),{x:f,y:d}=e,{width:p,height:m}=n;let g,_,y,v,T,x;return r==="center"?(T=d+m/2,s==="left"?(g=f,_=g-o,v=T+o,x=T-o):(g=f+p,_=g+o,v=T-o,x=T+o),y=g):(s==="left"?_=f+Math.max(l,u)+o:s==="right"?_=f+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(v=d,T=v-o,g=_-o,y=_+o):(v=d+m,T=v+o,g=_+o,y=_-o),x=v),{x1:g,x2:_,x3:y,y1:v,y2:T,y3:x}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=To(i.rtl,this.x,this.width);for(e.x=gu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=xt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=xt(r.bodyFont),h=gu(this,"left",r),f=s.x(h),d=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+d;if(r.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},g=s.leftForLtr(f,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Fg(e,m,g,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Fg(e,m,g,_)}else{e.lineWidth=Ve(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const m=s.leftForLtr(f,c),g=s.leftForLtr(s.xPlus(f,1),c-2),_=Eo(o.borderRadius);Object.values(_).some(y=>y!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Hh(e,{x:m,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Hh(e,{x:g,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(m,p,c,l),e.strokeRect(m,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(g,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=xt(i.bodyFont);let f=h.lineHeight,d=0;const p=To(i.rtl,this.x,this.width),m=function(C){n.fillText(C,p.x(e.x+d),e.y+f/2),e.y+=f+r},g=p.textAlign(o);let _,y,v,T,x,S,I;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=gu(this,g,i),n.fillStyle=i.bodyColor,qe(this.beforeBody,m),d=a&&g!=="right"?o==="center"?c/2+u:c+2+u:0,T=0,S=s.length;T<S;++T){for(_=s[T],y=this.labelTextColors[T],n.fillStyle=y,qe(_.before,m),v=_.lines,a&&v.length&&(this._drawColorBox(n,e,T,p,i),f=Math.max(h.lineHeight,l)),x=0,I=v.length;x<I;++x)m(v[x]),f=h.lineHeight;qe(_.after,m)}d=0,f=h.lineHeight,qe(this.afterBody,m),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=To(i.rtl,this.x,this.width);for(e.x=gu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=xt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=Eo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,l+u),n.quadraticCurveTo(a,l+u,a,l+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Fa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=_w(this,e),l=Object.assign({},o,this._size),c=yw(n,e,l),u=vw(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=on(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),wk(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),Ek(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Fh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Fh(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Fa[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ce(Vg,"positioners",Fa);var xH={id:"tooltip",_element:Vg,positioners:Fa,afterInit(t,e,n){n&&(t.tooltip=new Vg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Bk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const CH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function kH(t,e,n,i){const s=t.indexOf(e);if(s===-1)return CH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const SH=(t,e)=>t===null?null:Bn(Math.round(t),0,e);function Ew(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class zg extends Kr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(rt(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:kH(i,e,Re(n,e),this._addedLabels),SH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return Ew.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ce(zg,"id","category"),ce(zg,"defaults",{ticks:{callback:Ew}});function AH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:m,max:g}=e,_=!rt(o),y=!rt(a),v=!rt(c),T=(g-m)/(h+1);let x=kb((g-m)/p/d)*d,S,I,C,B;if(x<1e-14&&!_&&!y)return[{value:m},{value:g}];B=Math.ceil(g/x)-Math.floor(m/x),B>p&&(x=kb(B*x/p/d)*d),rt(l)||(S=Math.pow(10,l),x=Math.ceil(x*S)/S),s==="ticks"?(I=Math.floor(m/x)*x,C=Math.ceil(g/x)*x):(I=m,C=g),_&&y&&r&&_$((a-o)/r,x/1e3)?(B=Math.round(Math.min((a-o)/x,u)),x=(a-o)/B,I=o,C=a):v?(I=_?o:I,C=y?a:C,B=c-1,x=(C-I)/B):(B=(C-I)/x,nl(B,Math.round(B),x/1e3)?B=Math.round(B):B=Math.ceil(B));const U=Math.max(Sb(x),Sb(I));S=Math.pow(10,rt(l)?U:l),I=Math.round(I*S)/S,C=Math.round(C*S)/S;let $=0;for(_&&(f&&I!==o?(n.push({value:o}),I<o&&$++,nl(Math.round((I+$*x)*S)/S,o,Tw(o,T,t))&&$++):I<o&&$++);$<B;++$){const Q=Math.round((I+$*x)*S)/S;if(y&&Q>a)break;n.push({value:Q})}return y&&f&&C!==a?n.length&&nl(n[n.length-1].value,a,Tw(a,T,t))?n[n.length-1].value=a:n.push({value:a}):(!y||C===a)&&n.push({value:C}),n}function Tw(t,e,{horizontal:n,minRotation:i}){const s=Es(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class qh extends Kr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return rt(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=jo(s),c=jo(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=AH(s,r);return e.bounds==="ticks"&&ak(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Oy(e,this.chart.options.locale,this.options.ticks.format)}}class Hg extends qh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?e:0,this.max=Pt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Es(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ce(Hg,"id","linear"),ce(Hg,"defaults",{ticks:{callback:sd.formatters.numeric}});const zl=t=>Math.floor(ws(t)),er=(t,e)=>Math.pow(10,zl(t)+e);function Iw(t){return t/Math.pow(10,zl(t))===1}function xw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function RH(t,e){const n=e-t;let i=zl(n);for(;xw(t,e,i)>10;)i++;for(;xw(t,e,i)<10;)i--;return Math.min(i,zl(t))}function DH(t,{min:e,max:n}){e=Tn(t.min,e);const i=[],s=zl(e);let r=RH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),f=Tn(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:Iw(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((l+u+h*Math.pow(10,r))*o)/o;const d=Tn(t.max,f);return i.push({value:d,major:Iw(d),significand:h}),i}class Cw extends Kr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=qh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Pt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?Math.max(0,e):null,this.max=Pt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Pt(this._userMin)&&(this.min=e===er(this.min,0)?er(this.min,-1):er(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(er(i,-1)),o(er(s,1)))),i<=0&&r(er(s,-1)),s<=0&&o(er(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=DH(n,this);return e.bounds==="ticks"&&ak(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":Oy(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=ws(e),this._valueRange=ws(this.max)-ws(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(ws(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ce(Cw,"id","logarithmic"),ce(Cw,"defaults",{ticks:{callback:sd.formatters.logarithmic,major:{enabled:!0}}});function jg(t){const e=t.ticks;if(e.display&&t.display){const n=on(e.backdropPadding);return Re(e.font&&e.font.size,gt.font.size)+n.height}return 0}function OH(t,e,n){return n=ft(n)?n:[n],{w:U$(t,e.string,n),h:n.length*e.lineHeight}}function kw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function MH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?At/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=xt(c.font),f=OH(t.ctx,h,t._pointLabels[l]);i[l]=f;const d=jn(t.getIndexAngle(l)+a),p=Math.round(Sy(d)),m=kw(p,u.x,f.w,0,180),g=kw(p,u.y,f.h,90,270);PH(n,e,d,m,g)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=FH(t,i,s)}function PH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function NH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(Sy(jn(l.angle+vn))),u=$H(l.y,a.h,c),h=UH(c),f=BH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function LH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!($i({x:n,y:i},e)||$i({x:n,y:r},e)||$i({x:s,y:i},e)||$i({x:s,y:r},e))}function FH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:jg(r)/2,additionalAngle:o?At/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=NH(t,u,l);i.push(h),a==="auto"&&(h.visible=LH(h,c),h.visible&&(c=h))}return i}function UH(t){return t===0||t===180?"center":t<180?"left":"right"}function BH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function $H(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function VH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!rt(a)){const l=Eo(e.borderRadius),c=on(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,f=r-i+c.width,d=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Hh(t,{x:u,y:h,w:f,h:d,radius:l}),t.fill()):t.fillRect(u,h,f,d)}}function zH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));VH(n,o,r);const a=xt(o.font),{x:l,y:c,textAlign:u}=r;Pr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function $k(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Vn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function HH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),$k(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function jH(t,e,n){return Gs(t,{label:n,index:e,type:"pointLabel"})}class mu extends qh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=on(jg(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Pt(e)&&!isNaN(e)?e:0,this.max=Pt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/jg(this.options))}generateTickLabels(e){qh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Je(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?MH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Vn/(this._pointLabels.length||1),i=this.options.startAngle||0;return jn(e*n+Es(i))}getDistanceFromCenterForValue(e){if(rt(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(rt(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return jH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-vn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),$k(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&zH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);HH(this,d,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=xt(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=on(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Pr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}ce(mu,"id","radialLinear"),ce(mu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:sd.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ce(mu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ce(mu,"descriptors",{angleLines:{_fallback:"grid"}});const ad={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},mn=Object.keys(ad);function WH(t,e){return t-e}function Sw(t,e){if(rt(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Pt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&($l(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function Aw(t,e,n,i){const s=mn.length;for(let r=mn.indexOf(t);r<s-1;++r){const o=ad[mn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return mn[r]}return mn[s-1]}function qH(t,e,n,i,s){for(let r=mn.length-1;r>=mn.indexOf(n);r--){const o=mn[r];if(ad[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return mn[n?mn.indexOf(n):0]}function KH(t){for(let e=mn.indexOf(t)+1,n=mn.length;e<n;++e)if(ad[mn[e]].common)return mn[e]}function Rw(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=Ay(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function GH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function Dw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:GH(t,i,s,n)}class Kh extends Kr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new WV._date(e.adapters.date);s.init(n),tl(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Sw(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Pt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Pt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=E$(s,r,o);return this._unit=n.unit||(i.autoSkip?Aw(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):qH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:KH(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),Dw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Bn(n,0,o),i=Bn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Aw(r.minUnit,n,i,this._getLabelCapacity(n)),a=Re(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=$l(l)||l===!0,u={};let h=n,f,d;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)Rw(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&Rw(u,f,p),Object.keys(u).sort((m,g)=>m-g).map(m=>+m)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Je(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],f=i[n],d=c&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=Es(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,Dw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(Sw(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return I$(e.sort(WH))}}ce(Kh,"id","time"),ce(Kh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function _u(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=mr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=mr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class Ow extends Kh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=_u(n,this.min),this._tableRange=_u(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(_u(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return _u(this._table,i*this._tableRange+this._minPos,!0)}}ce(Ow,"id","timeseries"),ce(Ow,"defaults",Kh.defaults);const Vk={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},YH={type:{type:String,required:!0},...Vk},XH=S2[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function eo(t){return Jh(t)?xe(t):t}function QH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return Jh(e)?new Proxy(t,{}):t}function JH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function zk(t,e){t.labels=e}function Hk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function ZH(t,e){const n={labels:[],datasets:[]};return zk(n,t.labels),Hk(n,t.datasets,e),n}const ej=Fr({props:YH,setup(t,e){let{expose:n}=e;const i=ut(null),s=Zh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:f}=t,d=ZH(c,f),p=QH(d,c);s.value=new od(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=xe(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return dm(r),h2(o),xs([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[f,d]=c;const p=xe(s.value);if(!p)return;let m=!1;if(u){const g=eo(u),_=eo(f);g&&g!==_&&(JH(p,g),m=!0)}if(h){const g=eo(h.labels),_=eo(d.labels),y=eo(h.datasets),v=eo(d.datasets);g!==_&&(zk(p.config.data,g),m=!0),y&&y!==v&&(Hk(p.config.data,y,t.datasetIdKey),m=!0)}m&&a(p)},{deep:!0}),()=>Zo("canvas",{ref:i})}});function tj(t,e){return od.register(e),Fr({props:Vk,setup(n,i){let{expose:s}=i;const r=Zh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>Zo(ej,XH({ref:o},{type:t,...n}))}})}const nj=tj("line",Nu),ij={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;od.register(zg,Hg,Uu,La,_H,xH,gH);const n=Wi({datasets:e.datasets}),i=Wi({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(O(),$t(E(nj),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}},sj={class:"graph"},rj={__name:"StatsScreen",setup(t){const e=Wr(),n=Pe(()=>e.params.boardUUID||"");let i=Xe(On(se,"Boards",n.value,"Groups")),s=Xe(On(se,"Boards",n.value,"Tiles"));const r=Xe(pe(se,"Boards",n.value)),o=Pe(()=>{var u;let c=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{c[h.id]=h.points})),c||[]}),a=c=>{let u=[{x:16829424e5,y:0}],h=0;const f=Object.entries(c.collected).sort((d,p)=>d[1].seconds-p[1].seconds);return Object.keys(f).forEach(d=>{h+=o.value[f[d][0]],u.push({y:h,x:new Date(f[d][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},l=Pe(()=>{var u;let c=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&c.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),c});return(c,u)=>{var f;const h=ql("router-link");return O(),F(Ee,null,[k("div",null,[Y(Ic,{destination:{name:"overview",params:{boardUUID:E(n)}}},null,8,["destination"]),Y(h,{class:"btn",to:{name:"overview",params:{boardUUID:E(n)}}},{default:cm(()=>[Te(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),k("h1",null,ge((f=E(r))==null?void 0:f.name)+" stats:",1),k("div",sj,[Y(ij,{datasets:E(l)},null,8,["datasets"])])],64)}}};const Gr=t=>(Xo("data-v-e6a492d6"),t=t(),Qo(),t),oj=Gr(()=>k("br",null,null,-1)),aj={key:0,class:"tile"},lj=["src"],cj={key:0,class:"sub-tile"},uj=["src"],hj={key:1},fj={key:2},dj={class:"pen"},pj={class:"pen"},gj={class:"pen"},mj={key:6},_j=["onClick"],yj=["onSubmit"],vj=Gr(()=>k("button",{class:"btn"},"Add item",-1)),bj={key:7},wj=Gr(()=>k("option",{disabled:"",value:""},"Please select one",-1)),Ej=Gr(()=>k("option",null,"drop",-1)),Tj=Gr(()=>k("option",null,"multi-item",-1)),Ij=Gr(()=>k("option",null,"null",-1)),xj=Gr(()=>k("option",null,"exp",-1)),Cj=[wj,Ej,Tj,Ij,xj],kj={__name:"editTile",setup(t){const e=ss(),n=u=>{u.target.innerText.trim()!=""?e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?parseInt(u.target.innerText.trim()):u.target.innerText.trim():e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?0:"",vs(pe(se,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},i=u=>{u.target.value.trim()!=""||[u.target.getAttribute("name")]=="altImg"?e.selectedTile[u.target.getAttribute("name")]=u.target.value.trim():e.selectedTile[u.target.getAttribute("name")]="",Bt(pe(se,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},s=u=>{document.querySelector(u).focus()},r=u=>{e.selectedTile.items.indexOf(u)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(u),1),Bt(pe(se,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},o=Pe((u,h)=>({item:u,count:h})),a=()=>{Bt(pe(se,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},l=()=>{let u=!0;o.value.item=o.value.item.trim(),c(o.value.item)!==-1&&(e.selectedTile.items[c(o.value.item)].count=o.value.count),c(o.value.item)===-1&&o.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:o.value.item,count:o.value.count})),o.value.item!=""&&u&&vs(pe(se,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile,items:e.selectedTile.items}),o.value.item="",o.value.count=null},c=u=>e.selectedTile.items?e.selectedTile.items.map(function(h){return h.item}).indexOf(u):-1;return(u,h)=>{var d,p,m;const f=ql("font-awesome-icon");return O(),F("div",null,[Te(" id: "+ge(E(e).selectedTile.id),1),oj,E(e).selectedTile.type!="null"?(O(),F("div",aj,[k("img",{src:E(e).selectedTile.img,alt:""},null,8,lj),E(e).selectedTile.altImg?(O(),F("div",cj,[k("img",{src:E(e).selectedTile.altImg,alt:""},null,8,uj)])):we("",!0)])):we("",!0),E(e).selectedTile.type!="null"?(O(),F("div",hj,[Te(" Default img: "),xn(k("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=g=>E(e).selectedTile.img=g),name:"img",id:"addtileimg",onBlur:h[1]||(h[1]=g=>{i(g)}),onKeydown:h[2]||(h[2]=Ni(g=>{i(g)},["enter"]))},null,544),[[Yn,E(e).selectedTile.img]])])):we("",!0),E(e).selectedTile.type!="null"?(O(),F("div",fj,[Te(" Image on completed tile: "),xn(k("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=g=>E(e).selectedTile.altImg=g),name:"altImg",id:"addtileimg",onBlur:h[4]||(h[4]=Ye(g=>{i(g)},["prevent"])),onKeydown:h[5]||(h[5]=Ni(g=>{i(g)},["enter"]))},null,544),[[Yn,E(e).selectedTile.altImg]])])):we("",!0),E(e).selectedTile.type!="null"?(O(),F("h2",{key:3,onClick:h[8]||(h[8]=g=>s("#title"))},[k("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[6]||(h[6]=Ni(Ye(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[7]||(h[7]=Ye(g=>{n(g)},["prevent"])),name:"title",id:"title"},ge(E(e).selectedTile.title),545),k("span",dj,[Y(f,{icon:["fas","pen"]})])])):we("",!0),E(e).selectedTile.type!="null"?(O(),F("p",{key:4,onClick:h[11]||(h[11]=g=>s("#points"))},[k("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[9]||(h[9]=Ni(Ye(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[10]||(h[10]=Ye(g=>{n(g)},["prevent"])),name:"points",id:"points"},ge(E(e).selectedTile.points),545),Te(" point"+ge(E(e).selectedTile.points>1?"s":""),1),k("span",pj,[Y(f,{icon:["fas","pen"]})])])):we("",!0),E(e).selectedTile.type!="null"?(O(),F("p",{key:5,onClick:h[13]||(h[13]=g=>s("#description"))},[Te(" description: "),k("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:h[12]||(h[12]=Ye(g=>{n(g)},["prevent"])),name:"description",id:"description"},ge(E(e).selectedTile.description),545),k("span",gj,[Y(f,{icon:["fas","pen"]})])])):we("",!0),["any-unique","multi-item"].includes(E(e).selectedTile.type)?(O(),F("ul",mj,[Te(" Eligible items: "),(O(!0),F(Ee,null,cn((d=E(e).selectedTile)==null?void 0:d.items,g=>(O(),F("li",{key:g==null?void 0:g.item},[Te(ge(g.item)+" x"+ge(g.count)+" ",1),k("button",{class:"btn",onClick:Ye(_=>r(g),["prevent"])},"Delete item",8,_j)]))),128)),k("form",{onSubmit:Ye(l,["prevent"])},[Te(" new "),xn(k("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":h[14]||(h[14]=g=>E(o).item=g)},null,512),[[Yn,E(o).item]]),Te(" count: "),xn(k("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":h[15]||(h[15]=g=>E(o).count=g)},null,512),[[Yn,E(o).count]]),vj],40,yj)])):we("",!0),((p=E(e).selectedTile)==null?void 0:p.hidden)!==void 0&&E(e).selectedTile.type!="null"?(O(),F("div",bj,[Te(" hidden: "),xn(k("input",{type:"checkbox",class:"toggle","onUpdate:modelValue":h[16]||(h[16]=g=>E(e).selectedTile.hidden=g),ref:"refs.hidden",name:"hidden",id:"addtilehidden",onChange:a},null,544),[[d3,E(e).selectedTile.hidden]])])):we("",!0),Te(" type: "),((m=E(e).selectedTile)==null?void 0:m.type)!==void 0?xn((O(),F("select",{key:8,"onUpdate:modelValue":h[17]||(h[17]=g=>E(e).selectedTile.type=g),onChange:a},Cj,544)),[[p3,E(e).selectedTile.type]]):we("",!0)])}}},Sj=Mn(kj,[["__scopeId","data-v-e6a492d6"]]);const fa=t=>(Xo("data-v-eaa8f140"),t=t(),Qo(),t),Aj={class:"container"},Rj=["onKeydown"],Dj={class:"pen"},Oj={class:"main-section"},Mj={key:0,class:"detail-pane"},Pj={style:{"justify-content":"end",display:"flex"}},Nj={class:"board-settings"},Lj=fa(()=>k("h2",null,"Board Settings",-1)),Fj=fa(()=>k("h3",null,"Rules:",-1)),Uj=fa(()=>k("h3",null,"Moderators:",-1)),Bj={class:"moderators"},$j={class:"UID"},Vj=["onClick"],zj=["onSubmit"],Hj=fa(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),jj=fa(()=>k("h3",null,"Editors:",-1)),Wj={class:"Editors"},qj={class:"UID"},Kj=["onClick"],Gj=["onSubmit"],Yj=fa(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),Xj={key:1},Qj={__name:"EditBoard",async setup(t){var C,B;let e,n;const i=([e,n]=ti(()=>js()),e=await e,n(),e),s=ss(),r=ut(""),o=ut(""),a=Wr();s.setBoardUUID(a.params.boardUUID),s.setSelectedTile("");const l=s.boardUUID,c=Xe(pe(se,"Users",i.uid)),{data:u}=Xe(On(se,"Boards",l,"Groups")),{data:h,promise:f}=Xe(pe(se,"Boards",l));[e,n]=ti(()=>f.value),await e,n();const d=(C=h==null?void 0:h.value)==null?void 0:C.moderators,p=(B=h==null?void 0:h.value)==null?void 0:B.editors,m=Pe(()=>{var $;let U={};return u&&(($=u==null?void 0:u.value)==null||$.forEach(Q=>{Q.name!="moderator"&&(U[Q.id]={id:Q.id,name:Q.name,member:Q.members,icon:Q.icon,color:Q.color,points:Q.points,flagEnd:Q.flagEnd,collected:Q.collected,verify:Q.verify})})),U||{}}),{data:g}=Xe(On(se,`Boards/${l}/Tiles`)),_=ut(null),y=()=>{_.value.focus()},v=U=>{U.target.blur();let $=U.target.getAttribute("name"),Q=h.value[$];U.target.innerText.trim()!=""?h.value[$]=U.target.innerText:(h.value[$]="<enter text here>",$=="rules"&&(h.value[$]="")),Q!=h.value[$]&&Bt(pe(se,"Boards",l),h.value)},T=U=>{U=U.trim(),d.indexOf(U)!==-1&&(d.splice(d.indexOf(U),1),Bt(pe(se,"Boards",l),{moderators:d}))},x=()=>{r.value=r.value.trim(),d.indexOf(r.value)===-1&&(d.push(r.value),Bt(pe(se,"Boards",l),{moderators:d}))},S=U=>{U=U.trim(),p.indexOf(U)!==-1&&(p.splice(p.indexOf(U),1),Bt(pe(se,"Boards",l),{editors:p}))},I=()=>{o.value=o.value.trim(),p.indexOf(o.value)===-1&&(p.push(o.value),Bt(pe(se,"Boards",l),{editors:p}))};return(U,$)=>{var Q,je,$e,me;return O(),F("div",Aj,[Y(Ic,{destination:{name:"editBoard",params:E(l)}},null,8,["destination"]),E(h)&&E(i)&&(E(i).uid==E(h).ownerID||((Q=E(c))==null?void 0:Q.type)=="admin")||($e=(je=E(h))==null?void 0:je.editors)!=null&&$e.includes(E(i).uid)?(O(),F(Ee,{key:0},[k("section",null,[k("h1",{class:"title-wrap",onClick:$[1]||($[1]=Ye(ne=>y(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:_,contenteditable:"",spellcheck:"false",onKeydown:Ni(v,["enter"]),name:"name",onBlur:$[0]||($[0]=Ye(ne=>{v(ne)},["prevent"]))},ge(E(h).name),41,Rj),k("span",Dj,[Y(E(wo),{icon:["fas","pen"]})])])]),k("section",Oj,[(O(),$t(wy,{boardData:E(h),groupsData:E(m),tilesData:E(g),key:"bingo-board-"+E(s).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),E(s).selectedTile!=""?(O(),F("aside",Mj,[k("div",Pj,[Y(Se,{onClick:$[2]||($[2]=()=>{E(s).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),Y(Sj,{tile:E(s).selectedTile},null,8,["tile"])])):we("",!0)]),k("section",Nj,[Lj,k("div",null,[Fj,k("div",null,[k("p",{class:"rules input",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:$[3]||($[3]=Ye(ne=>{v(ne)},["prevent"])),onKeydown:$[4]||($[4]=Ni(Ye(()=>{},["prevent"]),["tab"])),name:"rules"},ge((me=E(h))==null?void 0:me.rules),33)])]),k("div",null,[Uj,k("div",Bj,[k("ul",null,[(O(!0),F(Ee,null,cn(E(d),ne=>(O(),F("li",{key:ne},[Y(E(wo),{icon:["fas","caret-right"]}),k("span",$j,ge(ne),1),k("button",{class:"btn",onClick:Ye(be=>T(ne),["prevent"])},"-",8,Vj)]))),128)),k("li",null,[k("form",{onSubmit:Ye(x,["prevent"])},[xn(k("input",{type:"text","onUpdate:modelValue":$[5]||($[5]=ne=>r.value=ne)},null,512),[[Yn,r.value]]),Hj],40,zj)])])])]),k("div",null,[jj,k("div",Wj,[k("ul",null,[(O(!0),F(Ee,null,cn(E(p),ne=>(O(),F("li",{key:ne},[Y(E(wo),{icon:["fas","caret-right"]}),k("span",qj,ge(ne),1),k("button",{class:"btn",onClick:Ye(be=>S(ne),["prevent"])},"remove",8,Kj)]))),128)),k("li",null,[k("form",{onSubmit:Ye(I,["prevent"])},[xn(k("input",{type:"text","onUpdate:modelValue":$[6]||($[6]=ne=>o.value=ne)},null,512),[[Yn,o.value]]),Yj],40,Gj)])])])])])],64)):(O(),F("h1",Xj,"Not authenticated"))])}}},Jj=Mn(Qj,[["__scopeId","data-v-eaa8f140"]]),Zj=k("h1",null,"Log in",-1),eW={class:"block"},tW={__name:"loginView",setup(t){const e=Zf();return(n,i)=>(O(),F(Ee,null,[Zj,k("div",eW,[k("button",{class:"btn",onClick:i[0]||(i[0]=Ye(s=>E(nk)({name:"userOverview"},E(e)),["prevent"]))}," Log in with Google "),Te(" "+ge(n.users),1)])],64))}};const da=t=>(Xo("data-v-c0d9f64a"),t=t(),Qo(),t),nW={class:"container"},iW=da(()=>k("h1",null,"groupview",-1)),sW={key:0,class:"delete-popup"},rW={class:"delete-notification"},oW=da(()=>k("span",{class:"danger"},"delete",-1)),aW={class:"highlight"},lW=da(()=>k("br",null,null,-1)),cW=da(()=>k("span",{class:"danger"},"permanent",-1)),uW=da(()=>k("br",null,null,-1)),hW=da(()=>k("span",{class:"danger"},"Delete",-1)),fW={class:"delete-buttons"},dW={key:1},pW=["onKeydown","onBlur"],gW=["onClick"],mW={class:"color-container"},_W=["onUpdate:modelValue","onChange"],yW=["onBlur","onKeydown","onUpdate:modelValue"],vW={class:"members-list"},bW=["onClick"],wW={__name:"groupView",async setup(t){let e,n;const i=Wr(),s=([e,n]=ti(()=>js()),e=await e,n(),e),r=ss();r.setBoardUUID(i.params.boardUUID);const o=Xe(pe(se,"Users",s.uid));r.setSelectedTile("");const{data:a}=Xe(On(se,"Boards",i.params.boardUUID,"Groups")),l=Xe(pe(se,"Boards",i.params.boardUUID)),c=ut(),u=ut(""),h=async _=>{await E8(pe(se,"Boards",i.params.boardUUID,"Groups",_.id)).then(()=>{c.value=void 0,u.value=""})},f=(_,y=!1)=>{y&&y.target.blur(),Bt(pe(se,"Boards",i.params.boardUUID,"Groups",_.id),{color:_.color})},d=(_,y)=>{_.target.blur(),_.target.innerText.trim()==""&&(_.target.innerText="<Team Name>"),y.name=_.target.innerText.trim(),Bt(pe(se,"Boards",i.params.boardUUID,"Groups",y.id),{name:y.name})},p=(_,y)=>{Bt(pe(se,"Boards",i.params.boardUUID,"Groups",y.id),{icon:_})},m=async _=>{c.value=_},g=()=>{const _=pe(On(se,"Boards",i.params.boardUUID,"Groups"));vs(pe(se,_.path),{name:"Team name",collected:{},verify:{},icon:"frog",color:"#53FF1b",points:0})};return(_,y)=>{var v,T,x,S;return O(),F("div",nW,[Y(Ic,{destination:{name:"groupView"}}),iW,E(l)&&E(s)&&(E(s).uid==E(l).ownerID||((v=E(o))==null?void 0:v.type)=="admin"||(T=E(l).editors)!=null&&T.includes(E(s).uid))?(O(),F(Ee,{key:0},[((x=c.value)==null?void 0:x.name)!=null?(O(),F("section",sW,[k("p",rW,[Te(" Are you sure you want to "),oW,Te(" the team: "),k("span",aW,ge((S=c.value)==null?void 0:S.name),1),Te("?"),lW,Te(" this is "),cW,Te(" and you will lose all data for that team."),uW,Te(" type the name of the team you want to "),hW,Te(" here to verify ")]),k("div",fW,[k("button",{class:"btn cancel",onClick:y[0]||(y[0]=Ye(()=>{c.value=void 0,u.value=""},["prevent"]))}," Cancel "),xn(k("input",{type:"text",name:"DELETEME","onUpdate:modelValue":y[1]||(y[1]=I=>u.value=I),class:"danger",placeholder:"TEAM NAME"},null,512),[[Yn,u.value]]),k("button",{class:"btn danger",onClick:y[2]||(y[2]=Ye(()=>{u.value==c.value.name&&h(c.value)},["prevent"]))}," DELETE ")])])):we("",!0),E(a)?(O(),F("section",dW,[(O(!0),F(Ee,null,cn(E(a),I=>(O(),F("div",{class:"group",key:I.name},[k("h2",{name:"name",ref_for:!0,ref:"group.name",contenteditable:"",spellcheck:"false",onKeydown:Ni(C=>{d(C,I)},["enter"]),onBlur:Ye(C=>{d(C,I)},["prevent"])},ge(I.name),41,pW),E(a).length!=1?(O(),F("button",{key:0,class:"btn",onClick:Ye(C=>m(I),["prevent"])}," Delete Team - ",8,gW)):we("",!0),k("div",mW,[xn(k("input",{type:"color","onUpdate:modelValue":C=>I.color=C,onChange:C=>f(I),class:"color-picker"},null,40,_W),[[Yn,I.color]]),xn(k("input",{type:"text",onBlur:Ye(C=>{f(I,C)},["prevent"]),onKeydown:Ni(C=>{f(I,C)},["enter"]),"onUpdate:modelValue":C=>I.color=C},null,40,yW),[[Yn,I.color]])]),k("div",{class:"icon-grid",style:Nr({color:I.color})},[Y(Se,{onClick:C=>p("rocket",I),groupIcon:I.icon,fasIcon:"rocket"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("spaghetti-monster-flying",I),groupIcon:I.icon,fasIcon:"spaghetti-monster-flying"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("paw",I),groupIcon:I.icon,fasIcon:"paw"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("hippo",I),groupIcon:I.icon,fasIcon:"hippo"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("crow",I),groupIcon:I.icon,fasIcon:"crow"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("frog",I),groupIcon:I.icon,fasIcon:"frog"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("feather-pointed",I),groupIcon:I.icon,fasIcon:"feather-pointed"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("cat",I),groupIcon:I.icon,fasIcon:"cat"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("dove",I),groupIcon:I.icon,fasIcon:"dove"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("spoon",I),groupIcon:I.icon,fasIcon:"spoon"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("ghost",I),groupIcon:I.icon,fasIcon:"ghost"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("heart",I),groupIcon:I.icon,fasIcon:"heart"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("hand-fist",I),groupIcon:I.icon,fasIcon:"hand-fist"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("hat-wizard",I),groupIcon:I.icon,fasIcon:"hat-wizard"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("tree",I),groupIcon:I.icon,fasIcon:"tree"},null,8,["onClick","groupIcon"]),Y(Se,{onClick:C=>p("fire",I),groupIcon:I.icon,fasIcon:"fire"},null,8,["onClick","groupIcon"])],4),k("div",vW,[(O(!0),F(Ee,null,cn(I.members,C=>(O(),F("p",{key:C},ge(C),1))),128))])]))),128)),k("button",{class:"btn add-team",onClick:Ye(g,["prevent"])},"Add team +",8,bW)])):we("",!0)],64)):(O(),F(Ee,{key:1},[Te("Not Authenticated")],64))])}}},EW=Mn(wW,[["__scopeId","data-v-c0d9f64a"]]),jk=u7({history:CF(),mode:"hash",routes:[{path:"/",name:"userOverview",props:!0,component:UB},{path:"/login",name:"loginView",component:tW,meta:{}},{path:"/new",name:"newBoard",component:lB},{path:"/e/:boardUUID",name:"editBoard",props:!0,component:Jj},{path:"/g/:boardUUID",name:"groupView",props:!0,component:EW},{path:"/m/:boardUUID",name:"moderator",props:!0,component:XU},{path:"/b/:boardUUID",name:"overview",props:!0,component:VU},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:rj}]});jk.beforeEach(async(t,e,n)=>{const i=await js();if(t.name=="overview"){const{data:s,promise:r}=Xe(pe(se,"Boards",t.params.boardUUID));await r.value.then(async o=>{o.settings.public&&n(),i||n({name:"loginView",query:e});const{data:a}=Xe(pe(se,"Users",i.uid));(a==null?void 0:a.type)=="admin"&&n(),(s==null?void 0:s.ownerID)==i.uid&&n()})}!i&&t.name!=="loginView"&&n({name:"loginView"}),n()});var TW={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},IW={prefix:"fas",iconName:"users-rectangle",icon:[640,512,[],"e594","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},xW={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},CW={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},kW={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},SW={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},AW={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},RW={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},DW={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},OW={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},MW={prefix:"fas",iconName:"shapes",icon:[512,512,["triangle-circle-square"],"f61f","M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"]},PW={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},NW={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},LW={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},FW={prefix:"fas",iconName:"eye-low-vision",icon:[640,512,["low-vision"],"f2a8","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]},UW={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},BW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},$W={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},VW={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},zW={prefix:"fas",iconName:"hat-cowboy",icon:[640,512,[],"f8c0","M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"]},HW={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},jW={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},WW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},qW={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},KW={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},GW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},YW={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},XW={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},QW={prefix:"fas",iconName:"users-line",icon:[640,512,[],"e592","M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]},JW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},ZW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},eq={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},tq={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},nq={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]},iq={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};De.add(NW);De.add(WW);De.add(OW);De.add(jW);De.add(FW);De.add(YW);De.add(PW);De.add(TW);De.add(IW);De.add(AW);De.add(KW);De.add(MW);De.add(QW);De.add(iq);De.add(XW);De.add(kW);De.add(eq);De.add(JW);De.add(xW);De.add(SW);De.add(tq);De.add(UW);De.add(BW);De.add($W);De.add(ZW);De.add(HW);De.add(GW);De.add(CW);De.add(RW);De.add(VW);De.add(nq);De.add(qW);De.add(zW);De.add(DW);De.add(LW);const kc=b3(p7);kc.use(T3());kc.use(aF,{firebaseApp:EC,modules:[rF()]});kc.use(jk);kc.component("FontAwesomeIcon",wo);kc.mount("#app");
