var Dk=Object.defineProperty;var Ok=(t,e,n)=>e in t?Dk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ae=(t,e,n)=>(Ok(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Vg(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Nr(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=xt(i)?Lk(i):Nr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(xt(t))return t;if(Xe(t))return t}}const Mk=/;(?![^(]*\))/g,Pk=/:([^]+)/,Nk=/\/\*.*?\*\//gs;function Lk(t){const e={};return t.replace(Nk,"").split(Mk).forEach(n=>{if(n){const i=n.split(Pk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Hi(t){let e="";if(xt(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const i=Hi(t[n]);i&&(e+=i+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uk=Vg(Fk);function ww(t){return!!t||t===""}function Vk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ul(t[i],e[i]);return n}function Ul(t,e){if(t===e)return!0;let n=Dy(t),i=Dy(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=tl(t),i=tl(e),n||i)return t===e;if(n=re(t),i=re(e),n||i)return n&&i?Vk(t,e):!1;if(n=Xe(t),i=Xe(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ul(t[o],e[o]))return!1}}return String(t)===String(e)}function Bg(t,e){return t.findIndex(n=>Ul(n,e))}const de=t=>xt(t)?t:t==null?"":re(t)||Xe(t)&&(t.toString===Tw||!_e(t.toString))?JSON.stringify(t,Ew,2):String(t),Ew=(t,e)=>e&&e.__v_isRef?Ew(t,e.value):lo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()]}:Xe(e)&&!re(e)&&!xw(e)?String(e):e,Ze={},ao=[],Xn=()=>{},Bk=()=>!1,$k=/^on[^a-z]/,Bh=t=>$k.test(t),$g=t=>t.startsWith("onUpdate:"),un=Object.assign,zg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zk=Object.prototype.hasOwnProperty,Fe=(t,e)=>zk.call(t,e),re=Array.isArray,lo=t=>Vl(t)==="[object Map]",Ho=t=>Vl(t)==="[object Set]",Dy=t=>Vl(t)==="[object Date]",_e=t=>typeof t=="function",xt=t=>typeof t=="string",tl=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",Iw=t=>Xe(t)&&_e(t.then)&&_e(t.catch),Tw=Object.prototype.toString,Vl=t=>Tw.call(t),Hk=t=>Vl(t).slice(8,-1),xw=t=>Vl(t)==="[object Object]",Hg=t=>xt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fu=Vg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$h=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jk=/-(\w)/g,yi=$h(t=>t.replace(jk,(e,n)=>n?n.toUpperCase():"")),Wk=/\B([A-Z])/g,Lr=$h(t=>t.replace(Wk,"-$1").toLowerCase()),zh=$h(t=>t.charAt(0).toUpperCase()+t.slice(1)),nd=$h(t=>t?`on${zh(t)}`:""),nl=(t,e)=>!Object.is(t,e),du=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ou=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oy;const qk=()=>Oy||(Oy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tn;class Cw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tn;try{return Tn=this,e()}finally{Tn=n}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sw(t){return new Cw(t)}function Kk(t,e=Tn){e&&e.active&&e.effects.push(t)}function jg(){return Tn}function kw(t){Tn&&Tn.cleanups.push(t)}const Wg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Aw=t=>(t.w&As)>0,Rw=t=>(t.n&As)>0,Gk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=As},Yk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Aw(s)&&!Rw(s)?s.delete(t):e[n++]=s,s.w&=~As,s.n&=~As}e.length=n}},Pu=new WeakMap;let wa=0,As=1;const Zd=30;let Hn;const gr=Symbol(""),ep=Symbol("");class qg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kk(this,i)}run(){if(!this.active)return this.fn();let e=Hn,n=ws;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Hn,Hn=this,ws=!0,As=1<<++wa,wa<=Zd?Gk(this):My(this),this.fn()}finally{wa<=Zd&&Yk(this),As=1<<--wa,Hn=this.parent,ws=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hn===this?this.deferStop=!0:this.active&&(My(this),this.onStop&&this.onStop(),this.active=!1)}}function My(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ws=!0;const Dw=[];function jo(){Dw.push(ws),ws=!1}function Wo(){const t=Dw.pop();ws=t===void 0?!0:t}function wn(t,e,n){if(ws&&Hn){let i=Pu.get(t);i||Pu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Wg()),Ow(s)}}function Ow(t,e){let n=!1;wa<=Zd?Rw(t)||(t.n|=As,n=!Aw(t)):n=!t.has(Hn),n&&(t.add(Hn),Hn.deps.push(t))}function ji(t,e,n,i,s,r){const o=Pu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?Hg(n)&&a.push(o.get("length")):(a.push(o.get(gr)),lo(t)&&a.push(o.get(ep)));break;case"delete":re(t)||(a.push(o.get(gr)),lo(t)&&a.push(o.get(ep)));break;case"set":lo(t)&&a.push(o.get(gr));break}if(a.length===1)a[0]&&tp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);tp(Wg(l))}}function tp(t,e){const n=re(t)?t:[...t];for(const i of n)i.computed&&Py(i);for(const i of n)i.computed||Py(i)}function Py(t,e){(t!==Hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Qk(t,e){var n;return(n=Pu.get(t))===null||n===void 0?void 0:n.get(e)}const Xk=Vg("__proto__,__v_isRef,__isVue"),Mw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tl)),Jk=Kg(),Zk=Kg(!1,!0),e2=Kg(!0),Ny=t2();function t2(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=xe(this);for(let r=0,o=this.length;r<o;r++)wn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(xe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jo();const i=xe(this)[e].apply(this,n);return Wo(),i}}),t}function n2(t){const e=xe(this);return wn(e,"has",t),e.hasOwnProperty(t)}function Kg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?y2:Uw:e?Fw:Lw).get(i))return i;const o=re(i);if(!t){if(o&&Fe(Ny,s))return Reflect.get(Ny,s,r);if(s==="hasOwnProperty")return n2}const a=Reflect.get(i,s,r);return(tl(s)?Mw.has(s):Xk(s))||(t||wn(i,"get",s),e)?a:ht(a)?o&&Hg(s)?a:a.value:Xe(a)?t?Vw(a):Rs(a):a}}const i2=Pw(),s2=Pw(!0);function Pw(t=!1){return function(n,i,s,r){let o=n[i];if(bo(o)&&ht(o)&&!ht(s))return!1;if(!t&&(!Nu(s)&&!bo(s)&&(o=xe(o),s=xe(s)),!re(n)&&ht(o)&&!ht(s)))return o.value=s,!0;const a=re(n)&&Hg(i)?Number(i)<n.length:Fe(n,i),l=Reflect.set(n,i,s,r);return n===xe(r)&&(a?nl(s,o)&&ji(n,"set",i,s):ji(n,"add",i,s)),l}}function r2(t,e){const n=Fe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&ji(t,"delete",e,void 0),i}function o2(t,e){const n=Reflect.has(t,e);return(!tl(e)||!Mw.has(e))&&wn(t,"has",e),n}function a2(t){return wn(t,"iterate",re(t)?"length":gr),Reflect.ownKeys(t)}const Nw={get:Jk,set:i2,deleteProperty:r2,has:o2,ownKeys:a2},l2={get:e2,set(t,e){return!0},deleteProperty(t,e){return!0}},c2=un({},Nw,{get:Zk,set:s2}),Gg=t=>t,Hh=t=>Reflect.getPrototypeOf(t);function Ic(t,e,n=!1,i=!1){t=t.__v_raw;const s=xe(t),r=xe(e);n||(e!==r&&wn(s,"get",e),wn(s,"get",r));const{has:o}=Hh(s),a=i?Gg:n?Xg:il;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Tc(t,e=!1){const n=this.__v_raw,i=xe(n),s=xe(t);return e||(t!==s&&wn(i,"has",t),wn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xc(t,e=!1){return t=t.__v_raw,!e&&wn(xe(t),"iterate",gr),Reflect.get(t,"size",t)}function Ly(t){t=xe(t);const e=xe(this);return Hh(e).has.call(e,t)||(e.add(t),ji(e,"add",t,t)),this}function Fy(t,e){e=xe(e);const n=xe(this),{has:i,get:s}=Hh(n);let r=i.call(n,t);r||(t=xe(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?nl(e,o)&&ji(n,"set",t,e):ji(n,"add",t,e),this}function Uy(t){const e=xe(this),{has:n,get:i}=Hh(e);let s=n.call(e,t);s||(t=xe(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&ji(e,"delete",t,void 0),r}function Vy(){const t=xe(this),e=t.size!==0,n=t.clear();return e&&ji(t,"clear",void 0,void 0),n}function Cc(t,e){return function(i,s){const r=this,o=r.__v_raw,a=xe(o),l=e?Gg:t?Xg:il;return!t&&wn(a,"iterate",gr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Sc(t,e,n){return function(...i){const s=this.__v_raw,r=xe(s),o=lo(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Gg:e?Xg:il;return!e&&wn(r,"iterate",l?ep:gr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function os(t){return function(...e){return t==="delete"?!1:this}}function u2(){const t={get(r){return Ic(this,r)},get size(){return xc(this)},has:Tc,add:Ly,set:Fy,delete:Uy,clear:Vy,forEach:Cc(!1,!1)},e={get(r){return Ic(this,r,!1,!0)},get size(){return xc(this)},has:Tc,add:Ly,set:Fy,delete:Uy,clear:Vy,forEach:Cc(!1,!0)},n={get(r){return Ic(this,r,!0)},get size(){return xc(this,!0)},has(r){return Tc.call(this,r,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Cc(!0,!1)},i={get(r){return Ic(this,r,!0,!0)},get size(){return xc(this,!0)},has(r){return Tc.call(this,r,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Cc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sc(r,!1,!1),n[r]=Sc(r,!0,!1),e[r]=Sc(r,!1,!0),i[r]=Sc(r,!0,!0)}),[t,n,e,i]}const[h2,f2,d2,p2]=u2();function Yg(t,e){const n=e?t?p2:d2:t?f2:h2;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Fe(n,s)&&s in i?n:i,s,r)}const g2={get:Yg(!1,!1)},m2={get:Yg(!1,!0)},_2={get:Yg(!0,!1)},Lw=new WeakMap,Fw=new WeakMap,Uw=new WeakMap,y2=new WeakMap;function v2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b2(t){return t.__v_skip||!Object.isExtensible(t)?0:v2(Hk(t))}function Rs(t){return bo(t)?t:Qg(t,!1,Nw,g2,Lw)}function w2(t){return Qg(t,!1,c2,m2,Fw)}function Vw(t){return Qg(t,!0,l2,_2,Uw)}function Qg(t,e,n,i,s){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=b2(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Bi(t){return bo(t)?Bi(t.__v_raw):!!(t&&t.__v_isReactive)}function bo(t){return!!(t&&t.__v_isReadonly)}function Nu(t){return!!(t&&t.__v_isShallow)}function jh(t){return Bi(t)||bo(t)}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function wo(t){return Ou(t,"__v_skip",!0),t}const il=t=>Xe(t)?Rs(t):t,Xg=t=>Xe(t)?Vw(t):t;function Bw(t){ws&&Hn&&(t=xe(t),Ow(t.dep||(t.dep=Wg())))}function $w(t,e){t=xe(t);const n=t.dep;n&&tp(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return zw(t,!1)}function Wh(t){return zw(t,!0)}function zw(t,e){return ht(t)?t:new E2(t,e)}class E2{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:xe(e),this._value=n?e:il(e)}get value(){return Bw(this),this._value}set value(e){const n=this.__v_isShallow||Nu(e)||bo(e);e=n?e:xe(e),nl(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:il(e),$w(this))}}function T(t){return ht(t)?t.value:t}const I2={get:(t,e,n)=>T(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Hw(t){return Bi(t)?t:new Proxy(t,I2)}function T2(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=jw(t,n);return e}class x2{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qk(xe(this._object),this._key)}}function jw(t,e,n){const i=t[e];return ht(i)?i:new x2(t,e,n)}var Ww;class C2{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ww]=!1,this._dirty=!0,this.effect=new qg(e,()=>{this._dirty||(this._dirty=!0,$w(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=xe(this);return Bw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ww="__v_isReadonly";function S2(t,e,n=!1){let i,s;const r=_e(t);return r?(i=t,s=Xn):(i=t.get,s=t.set),new C2(i,s,r||!s,n)}function Es(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){qh(r,e,n)}return s}function Jn(t,e,n,i){if(_e(t)){const r=Es(t,e,n,i);return r&&Iw(r)&&r.catch(o=>{qh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Jn(t[r],e,n,i));return s}function qh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Es(l,null,10,[t,o,a]);return}}k2(t,n,s,i)}function k2(t,e,n,i=!0){console.error(t)}let sl=!1,np=!1;const Qt=[];let ui=0;const co=[];let Di=null,ir=0;const qw=Promise.resolve();let Jg=null;function Zg(t){const e=Jg||qw;return t?e.then(this?t.bind(this):t):e}function A2(t){let e=ui+1,n=Qt.length;for(;e<n;){const i=e+n>>>1;rl(Qt[i])<t?e=i+1:n=i}return e}function em(t){(!Qt.length||!Qt.includes(t,sl&&t.allowRecurse?ui+1:ui))&&(t.id==null?Qt.push(t):Qt.splice(A2(t.id),0,t),Kw())}function Kw(){!sl&&!np&&(np=!0,Jg=qw.then(Yw))}function R2(t){const e=Qt.indexOf(t);e>ui&&Qt.splice(e,1)}function D2(t){re(t)?co.push(...t):(!Di||!Di.includes(t,t.allowRecurse?ir+1:ir))&&co.push(t),Kw()}function By(t,e=sl?ui+1:0){for(;e<Qt.length;e++){const n=Qt[e];n&&n.pre&&(Qt.splice(e,1),e--,n())}}function Gw(t){if(co.length){const e=[...new Set(co)];if(co.length=0,Di){Di.push(...e);return}for(Di=e,Di.sort((n,i)=>rl(n)-rl(i)),ir=0;ir<Di.length;ir++)Di[ir]();Di=null,ir=0}}const rl=t=>t.id==null?1/0:t.id,O2=(t,e)=>{const n=rl(t)-rl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yw(t){np=!1,sl=!0,Qt.sort(O2);const e=Xn;try{for(ui=0;ui<Qt.length;ui++){const n=Qt[ui];n&&n.active!==!1&&Es(n,null,14)}}finally{ui=0,Qt.length=0,Gw(),sl=!1,Jg=null,(Qt.length||co.length)&&Yw()}}function M2(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ze;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ze;f&&(s=n.map(d=>xt(d)?d.trim():d)),h&&(s=n.map(Mu))}let a,l=i[a=nd(e)]||i[a=nd(yi(e))];!l&&r&&(l=i[a=nd(Lr(e))]),l&&Jn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(c,t,6,s)}}function Qw(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!_e(t)){const l=c=>{const u=Qw(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Xe(t)&&i.set(t,null),null):(re(r)?r.forEach(l=>o[l]=null):un(o,r),Xe(t)&&i.set(t,o),o)}function Kh(t,e){return!t||!Bh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Lr(e))||Fe(t,e))}let Cn=null,Gh=null;function Lu(t){const e=Cn;return Cn=t,Gh=t&&t.type.__scopeId||null,e}function es(t){Gh=t}function ts(){Gh=null}function Yh(t,e=Cn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Yy(-1);const r=Lu(e);let o;try{o=t(...s)}finally{Lu(r),i._d&&Yy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function id(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=t;let m,_;const y=Lu(t);try{if(n.shapeFlag&4){const w=s||i;m=ci(u.call(w,w,h,r,d,f,p)),_=l}else{const w=e;m=ci(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),_=e.props?l:P2(l)}}catch(w){Pa.length=0,qh(w,t,1),m=Z(Er)}let b=m;if(_&&g!==!1){const w=Object.keys(_),{shapeFlag:I}=b;w.length&&I&7&&(o&&w.some($g)&&(_=N2(_,o)),b=Eo(b,_))}return n.dirs&&(b=Eo(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),m=b,Lu(y),m}const P2=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bh(n))&&((e||(e={}))[n]=t[n]);return e},N2=(t,e)=>{const n={};for(const i in t)(!$g(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function L2(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?$y(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Kh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$y(i,o,c):!0:!!o;return!1}function $y(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Kh(n,r))return!0}return!1}function F2({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const U2=t=>t.__isSuspense;function V2(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):D2(t)}function pu(t,e){if(mt){let n=mt.provides;const i=mt.parent&&mt.parent.provides;i===n&&(n=mt.provides=Object.create(i)),n[t]=e}}function vn(t,e,n=!1){const i=mt||Cn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(i.proxy):e}}function B2(t,e){return tm(t,null,{flush:"post"})}const kc={};function Is(t,e,n){return tm(t,e,n)}function tm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ze){const a=jg()===(mt==null?void 0:mt.scope)?mt:null;let l,c=!1,u=!1;if(ht(t)?(l=()=>t.value,c=Nu(t)):Bi(t)?(l=()=>t,i=!0):re(t)?(u=!0,c=t.some(b=>Bi(b)||Nu(b)),l=()=>t.map(b=>{if(ht(b))return b.value;if(Bi(b))return rr(b);if(_e(b))return Es(b,a,2)})):_e(t)?e?l=()=>Es(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Jn(t,a,3,[f])}:l=Xn,e&&i){const b=l;l=()=>rr(b())}let h,f=b=>{h=_.onStop=()=>{Es(b,a,4)}},d;if(al)if(f=Xn,e?n&&Jn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const b=AA();d=b.__watcherHandles||(b.__watcherHandles=[])}else return Xn;let p=u?new Array(t.length).fill(kc):kc;const g=()=>{if(_.active)if(e){const b=_.run();(i||c||(u?b.some((w,I)=>nl(w,p[I])):nl(b,p)))&&(h&&h(),Jn(e,a,3,[b,p===kc?void 0:u&&p[0]===kc?[]:p,f]),p=b)}else _.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>pn(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>em(g));const _=new qg(l,m);e?n?g():p=_.run():s==="post"?pn(_.run.bind(_),a&&a.suspense):_.run();const y=()=>{_.stop(),a&&a.scope&&zg(a.scope.effects,_)};return d&&d.push(y),y}function $2(t,e,n){const i=this.proxy,s=xt(t)?t.includes(".")?Xw(i,t):()=>i[t]:t.bind(i,i);let r;_e(e)?r=e:(r=e.handler,n=e);const o=mt;Io(this);const a=tm(s,r.bind(i),n);return o?Io(o):mr(),a}function Xw(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function rr(t,e){if(!Xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))rr(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)rr(t[n],e);else if(Ho(t)||lo(t))t.forEach(n=>{rr(n,e)});else if(xw(t))for(const n in t)rr(t[n],e);return t}function Fr(t){return _e(t)?{setup:t,name:t.name}:t}const gu=t=>!!t.type.__asyncLoader,Jw=t=>t.type.__isKeepAlive;function z2(t,e){Zw(t,"a",e)}function H2(t,e){Zw(t,"da",e)}function Zw(t,e,n=mt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Jw(s.parent.vnode)&&j2(i,e,n,s),s=s.parent}}function j2(t,e,n,i){const s=Qh(e,t,i,!0);im(()=>{zg(i[e],s)},n)}function Qh(t,e,n=mt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jo(),Io(n);const a=Jn(e,n,t,o);return mr(),Wo(),a});return i?s.unshift(r):s.push(r),r}}const ns=t=>(e,n=mt)=>(!al||t==="sp")&&Qh(t,(...i)=>e(...i),n),W2=ns("bm"),nm=ns("m"),q2=ns("bu"),K2=ns("u"),eE=ns("bum"),im=ns("um"),tE=ns("sp"),G2=ns("rtg"),Y2=ns("rtc");function Q2(t,e=mt){Qh("ec",t,e)}function xn(t,e){const n=Cn;if(n===null)return t;const i=Zh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ze]=e[r];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&rr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function qs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(jo(),Jn(l,n,8,[t.el,a,t,e]),Wo())}}const nE="components";function Wi(t,e){return J2(nE,t,!0,e)||t}const X2=Symbol();function J2(t,e,n=!0,i=!1){const s=Cn||mt;if(s){const r=s.type;if(t===nE){const a=SA(r,!1);if(a&&(a===e||a===yi(e)||a===zh(yi(e))))return r}const o=zy(s[t]||r[t],e)||zy(s.appContext[t],e);return!o&&i?r:o}}function zy(t,e){return t&&(t[e]||t[yi(e)]||t[zh(yi(e))])}function cn(t,e,n,i){let s;const r=n&&n[i];if(re(t)||xt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const ip=t=>t?dE(t)?Zh(t)||t.proxy:ip(t.parent):null,Ma=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ip(t.parent),$root:t=>ip(t.root),$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>em(t.update)),$nextTick:t=>t.n||(t.n=Zg.bind(t.proxy)),$watch:t=>$2.bind(t)}),sd=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Fe(t,e),Z2={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(sd(i,e))return o[e]=1,i[e];if(s!==Ze&&Fe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Fe(c,e))return o[e]=3,r[e];if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];sp&&(o[e]=0)}}const u=Ma[e];let h,f;if(u)return e==="$attrs"&&wn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Fe(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return sd(s,e)?(s[e]=n,!0):i!==Ze&&Fe(i,e)?(i[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ze&&Fe(t,o)||sd(e,o)||(a=r[0])&&Fe(a,o)||Fe(i,o)||Fe(Ma,o)||Fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let sp=!0;function eA(t){const e=sm(t),n=t.proxy,i=t.ctx;sp=!1,e.beforeCreate&&Hy(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:b,unmounted:w,render:I,renderTracked:D,renderTriggered:C,errorCaptured:x,serverPrefetch:F,expose:J,inheritAttrs:ee,components:oe,directives:ye,filters:Ke}=e;if(c&&tA(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const Ne=o[be];_e(Ne)&&(i[be]=Ne.bind(n))}if(s){const be=s.call(n,n);Xe(be)&&(t.data=Rs(be))}if(sp=!0,r)for(const be in r){const Ne=r[be],$t=_e(Ne)?Ne.bind(n,n):_e(Ne.get)?Ne.get.bind(n,n):Xn,hn=!_e(Ne)&&_e(Ne.set)?Ne.set.bind(n):Xn,zt=ke({get:$t,set:hn});Object.defineProperty(i,be,{enumerable:!0,configurable:!0,get:()=>zt.value,set:gt=>zt.value=gt})}if(a)for(const be in a)iE(a[be],i,n,be);if(l){const be=_e(l)?l.call(n):l;Reflect.ownKeys(be).forEach(Ne=>{pu(Ne,be[Ne])})}u&&Hy(u,t,"c");function we(be,Ne){re(Ne)?Ne.forEach($t=>be($t.bind(n))):Ne&&be(Ne.bind(n))}if(we(W2,h),we(nm,f),we(q2,d),we(K2,p),we(z2,g),we(H2,m),we(Q2,x),we(Y2,D),we(G2,C),we(eE,y),we(im,w),we(tE,F),re(J))if(J.length){const be=t.exposed||(t.exposed={});J.forEach(Ne=>{Object.defineProperty(be,Ne,{get:()=>n[Ne],set:$t=>n[Ne]=$t})})}else t.exposed||(t.exposed={});I&&t.render===Xn&&(t.render=I),ee!=null&&(t.inheritAttrs=ee),oe&&(t.components=oe),ye&&(t.directives=ye)}function tA(t,e,n=Xn,i=!1){re(t)&&(t=rp(t));for(const s in t){const r=t[s];let o;Xe(r)?"default"in r?o=vn(r.from||s,r.default,!0):o=vn(r.from||s):o=vn(r),ht(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Hy(t,e,n){Jn(re(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function iE(t,e,n,i){const s=i.includes(".")?Xw(n,i):()=>n[i];if(xt(t)){const r=e[t];_e(r)&&Is(s,r)}else if(_e(t))Is(s,t.bind(n));else if(Xe(t))if(re(t))t.forEach(r=>iE(r,e,n,i));else{const r=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(r)&&Is(s,r,t)}}function sm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Fu(l,c,o,!0)),Fu(l,e,o)),Xe(e)&&r.set(e,l),l}function Fu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Fu(t,r,n,!0),s&&s.forEach(o=>Fu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=nA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nA={data:jy,props:Js,emits:Js,methods:Js,computed:Js,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Js,directives:Js,watch:sA,provide:jy,inject:iA};function jy(t,e){return e?t?function(){return un(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function iA(t,e){return Js(rp(t),rp(e))}function rp(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?un(un(Object.create(null),t),e):e}function sA(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=an(t[i],e[i]);return n}function rA(t,e,n,i=!1){const s={},r={};Ou(r,Jh,1),t.propsDefaults=Object.create(null),sE(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:w2(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function oA(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=xe(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Kh(t.emitsOptions,f))continue;const d=e[f];if(l)if(Fe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=yi(f);s[p]=op(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{sE(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Fe(e,h)&&((u=Lr(h))===h||!Fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=op(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Fe(e,h))&&(delete r[h],c=!0)}c&&ji(t,"set","$attrs")}function sE(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fu(l))continue;const c=e[l];let u;s&&Fe(s,u=yi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Kh(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=xe(n),c=a||Ze;for(let u=0;u<r.length;u++){const h=r[u];n[h]=op(s,l,h,c[h],t,!Fe(c,h))}}return o}function op(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Fe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&_e(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Io(s),i=c[n]=l.call(null,e),mr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}function rE(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!_e(t)){const u=h=>{l=!0;const[f,d]=rE(h,e,!0);un(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Xe(t)&&i.set(t,ao),ao;if(re(r))for(let u=0;u<r.length;u++){const h=yi(r[u]);Wy(h)&&(o[h]=Ze)}else if(r)for(const u in r){const h=yi(u);if(Wy(h)){const f=r[u],d=o[h]=re(f)||_e(f)?{type:f}:Object.assign({},f);if(d){const p=Gy(Boolean,d.type),g=Gy(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||Fe(d,"default"))&&a.push(h)}}}const c=[o,a];return Xe(t)&&i.set(t,c),c}function Wy(t){return t[0]!=="$"}function qy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ky(t,e){return qy(t)===qy(e)}function Gy(t,e){return re(e)?e.findIndex(n=>Ky(n,t)):_e(e)&&Ky(e,t)?0:-1}const oE=t=>t[0]==="_"||t==="$stable",rm=t=>re(t)?t.map(ci):[ci(t)],aA=(t,e,n)=>{if(e._n)return e;const i=Yh((...s)=>rm(e(...s)),n);return i._c=!1,i},aE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(oE(s))continue;const r=t[s];if(_e(r))e[s]=aA(s,r,i);else if(r!=null){const o=rm(r);e[s]=()=>o}}},lE=(t,e)=>{const n=rm(e);t.slots.default=()=>n},lA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=xe(e),Ou(e,"_",n)):aE(e,t.slots={})}else t.slots={},e&&lE(t,e);Ou(t.slots,Jh,1)},cA=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(un(s,e),!n&&a===1&&delete s._):(r=!e.$stable,aE(e,s)),o=e}else e&&(lE(t,e),o={default:1});if(r)for(const a in s)!oE(a)&&!(a in o)&&delete s[a]};function cE(){return{app:null,config:{isNativeTag:Bk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uA=0;function hA(t,e){return function(i,s=null){_e(i)||(i=Object.assign({},i)),s!=null&&!Xe(s)&&(s=null);const r=cE(),o=new Set;let a=!1;const l=r.app={_uid:uA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:mE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&_e(c.install)?(o.add(c),c.install(l,...u)):_e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Z(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Zh(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ap(t,e,n,i,s=!1){if(re(t)){t.forEach((f,d)=>ap(f,e&&(re(e)?e[d]:e),n,i,s));return}if(gu(i)&&!s)return;const r=i.shapeFlag&4?Zh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(xt(c)?(u[c]=null,Fe(h,c)&&(h[c]=null)):ht(c)&&(c.value=null)),_e(l))Es(l,a,12,[o,u]);else{const f=xt(l),d=ht(l);if(f||d){const p=()=>{if(t.f){const g=f?Fe(h,l)?h[l]:u[l]:l.value;s?re(g)&&zg(g,r):re(g)?g.includes(r)||g.push(r):f?(u[l]=[r],Fe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Fe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,pn(p,n)):p()}}}const pn=V2;function fA(t){return dA(t)}function dA(t,e){const n=qk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Xn,insertStaticContent:p}=t,g=(v,E,S,A=null,P=null,B=null,W=!1,V=null,$=!!E.dynamicChildren)=>{if(v===E)return;v&&!ca(v,E)&&(A=j(v),gt(v,P,B,!0),v=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:N,ref:ie,shapeFlag:G}=E;switch(N){case Xh:m(v,E,S,A);break;case Er:_(v,E,S,A);break;case mu:v==null&&y(E,S,A,W);break;case Te:oe(v,E,S,A,P,B,W,V,$);break;default:G&1?I(v,E,S,A,P,B,W,V,$):G&6?ye(v,E,S,A,P,B,W,V,$):(G&64||G&128)&&N.process(v,E,S,A,P,B,W,V,$,Le)}ie!=null&&P&&ap(ie,v&&v.ref,B,E||v,!E)},m=(v,E,S,A)=>{if(v==null)i(E.el=a(E.children),S,A);else{const P=E.el=v.el;E.children!==v.children&&c(P,E.children)}},_=(v,E,S,A)=>{v==null?i(E.el=l(E.children||""),S,A):E.el=v.el},y=(v,E,S,A)=>{[v.el,v.anchor]=p(v.children,E,S,A,v.el,v.anchor)},b=({el:v,anchor:E},S,A)=>{let P;for(;v&&v!==E;)P=f(v),i(v,S,A),v=P;i(E,S,A)},w=({el:v,anchor:E})=>{let S;for(;v&&v!==E;)S=f(v),s(v),v=S;s(E)},I=(v,E,S,A,P,B,W,V,$)=>{W=W||E.type==="svg",v==null?D(E,S,A,P,B,W,V,$):F(v,E,P,B,W,V,$)},D=(v,E,S,A,P,B,W,V)=>{let $,N;const{type:ie,props:G,shapeFlag:se,transition:fe,dirs:Ce}=v;if($=v.el=o(v.type,B,G&&G.is,G),se&8?u($,v.children):se&16&&x(v.children,$,null,A,P,B&&ie!=="foreignObject",W,V),Ce&&qs(v,null,A,"created"),C($,v,v.scopeId,W,A),G){for(const We in G)We!=="value"&&!fu(We)&&r($,We,null,G[We],B,v.children,A,P,H);"value"in G&&r($,"value",null,G.value),(N=G.onVnodeBeforeMount)&&oi(N,A,v)}Ce&&qs(v,null,A,"beforeMount");const Ge=(!P||P&&!P.pendingBranch)&&fe&&!fe.persisted;Ge&&fe.beforeEnter($),i($,E,S),((N=G&&G.onVnodeMounted)||Ge||Ce)&&pn(()=>{N&&oi(N,A,v),Ge&&fe.enter($),Ce&&qs(v,null,A,"mounted")},P)},C=(v,E,S,A,P)=>{if(S&&d(v,S),A)for(let B=0;B<A.length;B++)d(v,A[B]);if(P){let B=P.subTree;if(E===B){const W=P.vnode;C(v,W,W.scopeId,W.slotScopeIds,P.parent)}}},x=(v,E,S,A,P,B,W,V,$=0)=>{for(let N=$;N<v.length;N++){const ie=v[N]=V?fs(v[N]):ci(v[N]);g(null,ie,E,S,A,P,B,W,V)}},F=(v,E,S,A,P,B,W)=>{const V=E.el=v.el;let{patchFlag:$,dynamicChildren:N,dirs:ie}=E;$|=v.patchFlag&16;const G=v.props||Ze,se=E.props||Ze;let fe;S&&Ks(S,!1),(fe=se.onVnodeBeforeUpdate)&&oi(fe,S,E,v),ie&&qs(E,v,S,"beforeUpdate"),S&&Ks(S,!0);const Ce=P&&E.type!=="foreignObject";if(N?J(v.dynamicChildren,N,V,S,A,Ce,B):W||Ne(v,E,V,null,S,A,Ce,B,!1),$>0){if($&16)ee(V,E,G,se,S,A,P);else if($&2&&G.class!==se.class&&r(V,"class",null,se.class,P),$&4&&r(V,"style",G.style,se.style,P),$&8){const Ge=E.dynamicProps;for(let We=0;We<Ge.length;We++){const _t=Ge[We],$n=G[_t],Kr=se[_t];(Kr!==$n||_t==="value")&&r(V,_t,$n,Kr,P,v.children,S,A,H)}}$&1&&v.children!==E.children&&u(V,E.children)}else!W&&N==null&&ee(V,E,G,se,S,A,P);((fe=se.onVnodeUpdated)||ie)&&pn(()=>{fe&&oi(fe,S,E,v),ie&&qs(E,v,S,"updated")},A)},J=(v,E,S,A,P,B,W)=>{for(let V=0;V<E.length;V++){const $=v[V],N=E[V],ie=$.el&&($.type===Te||!ca($,N)||$.shapeFlag&70)?h($.el):S;g($,N,ie,null,A,P,B,W,!0)}},ee=(v,E,S,A,P,B,W)=>{if(S!==A){if(S!==Ze)for(const V in S)!fu(V)&&!(V in A)&&r(v,V,S[V],null,W,E.children,P,B,H);for(const V in A){if(fu(V))continue;const $=A[V],N=S[V];$!==N&&V!=="value"&&r(v,V,N,$,W,E.children,P,B,H)}"value"in A&&r(v,"value",S.value,A.value)}},oe=(v,E,S,A,P,B,W,V,$)=>{const N=E.el=v?v.el:a(""),ie=E.anchor=v?v.anchor:a("");let{patchFlag:G,dynamicChildren:se,slotScopeIds:fe}=E;fe&&(V=V?V.concat(fe):fe),v==null?(i(N,S,A),i(ie,S,A),x(E.children,S,ie,P,B,W,V,$)):G>0&&G&64&&se&&v.dynamicChildren?(J(v.dynamicChildren,se,S,P,B,W,V),(E.key!=null||P&&E===P.subTree)&&uE(v,E,!0)):Ne(v,E,S,ie,P,B,W,V,$)},ye=(v,E,S,A,P,B,W,V,$)=>{E.slotScopeIds=V,v==null?E.shapeFlag&512?P.ctx.activate(E,S,A,W,$):Ke(E,S,A,P,B,W,$):ve(v,E,$)},Ke=(v,E,S,A,P,B,W)=>{const V=v.component=EA(v,A,P);if(Jw(v)&&(V.ctx.renderer=Le),IA(V),V.asyncDep){if(P&&P.registerDep(V,we),!v.el){const $=V.subTree=Z(Er);_(null,$,E,S)}return}we(V,v,E,S,P,B,W)},ve=(v,E,S)=>{const A=E.component=v.component;if(L2(v,E,S))if(A.asyncDep&&!A.asyncResolved){be(A,E,S);return}else A.next=E,R2(A.update),A.update();else E.el=v.el,A.vnode=E},we=(v,E,S,A,P,B,W)=>{const V=()=>{if(v.isMounted){let{next:ie,bu:G,u:se,parent:fe,vnode:Ce}=v,Ge=ie,We;Ks(v,!1),ie?(ie.el=Ce.el,be(v,ie,W)):ie=Ce,G&&du(G),(We=ie.props&&ie.props.onVnodeBeforeUpdate)&&oi(We,fe,ie,Ce),Ks(v,!0);const _t=id(v),$n=v.subTree;v.subTree=_t,g($n,_t,h($n.el),j($n),v,P,B),ie.el=_t.el,Ge===null&&F2(v,_t.el),se&&pn(se,P),(We=ie.props&&ie.props.onVnodeUpdated)&&pn(()=>oi(We,fe,ie,Ce),P)}else{let ie;const{el:G,props:se}=E,{bm:fe,m:Ce,parent:Ge}=v,We=gu(E);if(Ks(v,!1),fe&&du(fe),!We&&(ie=se&&se.onVnodeBeforeMount)&&oi(ie,Ge,E),Ks(v,!0),G&&Ee){const _t=()=>{v.subTree=id(v),Ee(G,v.subTree,v,P,null)};We?E.type.__asyncLoader().then(()=>!v.isUnmounted&&_t()):_t()}else{const _t=v.subTree=id(v);g(null,_t,S,A,v,P,B),E.el=_t.el}if(Ce&&pn(Ce,P),!We&&(ie=se&&se.onVnodeMounted)){const _t=E;pn(()=>oi(ie,Ge,_t),P)}(E.shapeFlag&256||Ge&&gu(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&v.a&&pn(v.a,P),v.isMounted=!0,E=S=A=null}},$=v.effect=new qg(V,()=>em(N),v.scope),N=v.update=()=>$.run();N.id=v.uid,Ks(v,!0),N()},be=(v,E,S)=>{E.component=v;const A=v.vnode.props;v.vnode=E,v.next=null,oA(v,E.props,A,S),cA(v,E.children,S),jo(),By(),Wo()},Ne=(v,E,S,A,P,B,W,V,$=!1)=>{const N=v&&v.children,ie=v?v.shapeFlag:0,G=E.children,{patchFlag:se,shapeFlag:fe}=E;if(se>0){if(se&128){hn(N,G,S,A,P,B,W,V,$);return}else if(se&256){$t(N,G,S,A,P,B,W,V,$);return}}fe&8?(ie&16&&H(N,P,B),G!==N&&u(S,G)):ie&16?fe&16?hn(N,G,S,A,P,B,W,V,$):H(N,P,B,!0):(ie&8&&u(S,""),fe&16&&x(G,S,A,P,B,W,V,$))},$t=(v,E,S,A,P,B,W,V,$)=>{v=v||ao,E=E||ao;const N=v.length,ie=E.length,G=Math.min(N,ie);let se;for(se=0;se<G;se++){const fe=E[se]=$?fs(E[se]):ci(E[se]);g(v[se],fe,S,null,P,B,W,V,$)}N>ie?H(v,P,B,!0,!1,G):x(E,S,A,P,B,W,V,$,G)},hn=(v,E,S,A,P,B,W,V,$)=>{let N=0;const ie=E.length;let G=v.length-1,se=ie-1;for(;N<=G&&N<=se;){const fe=v[N],Ce=E[N]=$?fs(E[N]):ci(E[N]);if(ca(fe,Ce))g(fe,Ce,S,null,P,B,W,V,$);else break;N++}for(;N<=G&&N<=se;){const fe=v[G],Ce=E[se]=$?fs(E[se]):ci(E[se]);if(ca(fe,Ce))g(fe,Ce,S,null,P,B,W,V,$);else break;G--,se--}if(N>G){if(N<=se){const fe=se+1,Ce=fe<ie?E[fe].el:A;for(;N<=se;)g(null,E[N]=$?fs(E[N]):ci(E[N]),S,Ce,P,B,W,V,$),N++}}else if(N>se)for(;N<=G;)gt(v[N],P,B,!0),N++;else{const fe=N,Ce=N,Ge=new Map;for(N=Ce;N<=se;N++){const En=E[N]=$?fs(E[N]):ci(E[N]);En.key!=null&&Ge.set(En.key,N)}let We,_t=0;const $n=se-Ce+1;let Kr=!1,ky=0;const la=new Array($n);for(N=0;N<$n;N++)la[N]=0;for(N=fe;N<=G;N++){const En=v[N];if(_t>=$n){gt(En,P,B,!0);continue}let ri;if(En.key!=null)ri=Ge.get(En.key);else for(We=Ce;We<=se;We++)if(la[We-Ce]===0&&ca(En,E[We])){ri=We;break}ri===void 0?gt(En,P,B,!0):(la[ri-Ce]=N+1,ri>=ky?ky=ri:Kr=!0,g(En,E[ri],S,null,P,B,W,V,$),_t++)}const Ay=Kr?pA(la):ao;for(We=Ay.length-1,N=$n-1;N>=0;N--){const En=Ce+N,ri=E[En],Ry=En+1<ie?E[En+1].el:A;la[N]===0?g(null,ri,S,Ry,P,B,W,V,$):Kr&&(We<0||N!==Ay[We]?zt(ri,S,Ry,2):We--)}}},zt=(v,E,S,A,P=null)=>{const{el:B,type:W,transition:V,children:$,shapeFlag:N}=v;if(N&6){zt(v.component.subTree,E,S,A);return}if(N&128){v.suspense.move(E,S,A);return}if(N&64){W.move(v,E,S,Le);return}if(W===Te){i(B,E,S);for(let G=0;G<$.length;G++)zt($[G],E,S,A);i(v.anchor,E,S);return}if(W===mu){b(v,E,S);return}if(A!==2&&N&1&&V)if(A===0)V.beforeEnter(B),i(B,E,S),pn(()=>V.enter(B),P);else{const{leave:G,delayLeave:se,afterLeave:fe}=V,Ce=()=>i(B,E,S),Ge=()=>{G(B,()=>{Ce(),fe&&fe()})};se?se(B,Ce,Ge):Ge()}else i(B,E,S)},gt=(v,E,S,A=!1,P=!1)=>{const{type:B,props:W,ref:V,children:$,dynamicChildren:N,shapeFlag:ie,patchFlag:G,dirs:se}=v;if(V!=null&&ap(V,null,S,v,!0),ie&256){E.ctx.deactivate(v);return}const fe=ie&1&&se,Ce=!gu(v);let Ge;if(Ce&&(Ge=W&&W.onVnodeBeforeUnmount)&&oi(Ge,E,v),ie&6)R(v.component,S,A);else{if(ie&128){v.suspense.unmount(S,A);return}fe&&qs(v,null,E,"beforeUnmount"),ie&64?v.type.remove(v,E,S,P,Le,A):N&&(B!==Te||G>0&&G&64)?H(N,E,S,!1,!0):(B===Te&&G&384||!P&&ie&16)&&H($,E,S),A&&Pn(v)}(Ce&&(Ge=W&&W.onVnodeUnmounted)||fe)&&pn(()=>{Ge&&oi(Ge,E,v),fe&&qs(v,null,E,"unmounted")},S)},Pn=v=>{const{type:E,el:S,anchor:A,transition:P}=v;if(E===Te){si(S,A);return}if(E===mu){w(v);return}const B=()=>{s(S),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(v.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:V}=P,$=()=>W(S,B);V?V(v.el,B,$):$()}else B()},si=(v,E)=>{let S;for(;v!==E;)S=f(v),s(v),v=S;s(E)},R=(v,E,S)=>{const{bum:A,scope:P,update:B,subTree:W,um:V}=v;A&&du(A),P.stop(),B&&(B.active=!1,gt(W,v,E,S)),V&&pn(V,E),pn(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},H=(v,E,S,A=!1,P=!1,B=0)=>{for(let W=B;W<v.length;W++)gt(v[W],E,S,A,P)},j=v=>v.shapeFlag&6?j(v.component.subTree):v.shapeFlag&128?v.suspense.next():f(v.anchor||v.el),te=(v,E,S)=>{v==null?E._vnode&&gt(E._vnode,null,null,!0):g(E._vnode||null,v,E,null,null,null,S),By(),Gw(),E._vnode=v},Le={p:g,um:gt,m:zt,r:Pn,mt:Ke,mc:x,pc:Ne,pbc:J,n:j,o:t};let ct,Ee;return e&&([ct,Ee]=e(Le)),{render:te,hydrate:ct,createApp:hA(te,ct)}}function Ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function uE(t,e,n=!1){const i=t.children,s=e.children;if(re(i)&&re(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fs(s[r]),a.el=o.el),n||uE(o,a)),a.type===Xh&&(a.el=o.el)}}function pA(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gA=t=>t.__isTeleport,Te=Symbol(void 0),Xh=Symbol(void 0),Er=Symbol(void 0),mu=Symbol(void 0),Pa=[];let qn=null;function M(t=!1){Pa.push(qn=t?null:[])}function mA(){Pa.pop(),qn=Pa[Pa.length-1]||null}let ol=1;function Yy(t){ol+=t}function hE(t){return t.dynamicChildren=ol>0?qn||ao:null,mA(),ol>0&&qn&&qn.push(t),t}function U(t,e,n,i,s,r){return hE(k(t,e,n,i,s,r,!0))}function bn(t,e,n,i,s){return hE(Z(t,e,n,i,s,!0))}function lp(t){return t?t.__v_isVNode===!0:!1}function ca(t,e){return t.type===e.type&&t.key===e.key}const Jh="__vInternal",fE=({key:t})=>t??null,_u=({ref:t,ref_key:e,ref_for:n})=>t!=null?xt(t)||ht(t)||_e(t)?{i:Cn,r:t,k:e,f:!!n}:t:null;function k(t,e=null,n=null,i=0,s=null,r=t===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fE(e),ref:e&&_u(e),scopeId:Gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Cn};return a?(om(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=xt(n)?8:16),ol>0&&!o&&qn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qn.push(l),l}const Z=_A;function _A(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===X2)&&(t=Er),lp(t)){const a=Eo(t,e,!0);return n&&om(a,n),ol>0&&!r&&qn&&(a.shapeFlag&6?qn[qn.indexOf(t)]=a:qn.push(a)),a.patchFlag|=-2,a}if(kA(t)&&(t=t.__vccOpts),e){e=yA(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Hi(a)),Xe(l)&&(jh(l)&&!re(l)&&(l=un({},l)),e.style=Nr(l))}const o=xt(t)?1:U2(t)?128:gA(t)?64:Xe(t)?4:_e(t)?2:0;return k(t,e,n,i,s,o,r,!0)}function yA(t){return t?jh(t)||Jh in t?un({},t):t:null}function Eo(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?vA(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fE(a),ref:e&&e.ref?n&&s?re(s)?s.concat(_u(e)):[s,_u(e)]:_u(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Eo(t.ssContent),ssFallback:t.ssFallback&&Eo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ge(t=" ",e=0){return Z(Xh,null,t,e)}function Ie(t="",e=!1){return e?(M(),bn(Er,null,t)):Z(Er,null,t)}function ci(t){return t==null||typeof t=="boolean"?Z(Er):re(t)?Z(Te,null,t.slice()):typeof t=="object"?fs(t):Z(Xh,null,String(t))}function fs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Eo(t)}function om(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),om(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Jh in e)?e._ctx=Cn:s===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function vA(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Hi([e.class,i.class]));else if(s==="style")e.style=Nr([e.style,i.style]);else if(Bh(s)){const r=e[s],o=i[s];o&&r!==o&&!(re(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function oi(t,e,n,i=null){Jn(t,e,7,[n,i])}const bA=cE();let wA=0;function EA(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||bA,r={uid:wA++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rE(i,s),emitsOptions:Qw(i,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=M2.bind(null,r),t.ce&&t.ce(r),r}let mt=null;const Bl=()=>mt||Cn,Io=t=>{mt=t,t.scope.on()},mr=()=>{mt&&mt.scope.off(),mt=null};function dE(t){return t.vnode.shapeFlag&4}let al=!1;function IA(t,e=!1){al=e;const{props:n,children:i}=t.vnode,s=dE(t);rA(t,n,s,e),lA(t,i);const r=s?TA(t,e):void 0;return al=!1,r}function TA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wo(new Proxy(t.ctx,Z2));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?CA(t):null;Io(t),jo();const r=Es(i,t,0,[t.props,s]);if(Wo(),mr(),Iw(r)){if(r.then(mr,mr),e)return r.then(o=>{Qy(t,o,e)}).catch(o=>{qh(o,t,0)});t.asyncDep=r}else Qy(t,r,e)}else pE(t,e)}function Qy(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=Hw(e)),pE(t,n)}let Xy;function pE(t,e,n){const i=t.type;if(!t.render){if(!e&&Xy&&!i.render){const s=i.template||sm(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=un(un({isCustomElement:r,delimiters:a},o),l);i.render=Xy(s,c)}}t.render=i.render||Xn}Io(t),jo(),eA(t),Wo(),mr()}function xA(t){return new Proxy(t.attrs,{get(e,n){return wn(t,"get","$attrs"),e[n]}})}function CA(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=xA(t))},slots:t.slots,emit:t.emit,expose:e}}function Zh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hw(wo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ma)return Ma[n](t)},has(e,n){return n in e||n in Ma}}))}function SA(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function kA(t){return _e(t)&&"__vccOpts"in t}const ke=(t,e)=>S2(t,e,al);function qo(t,e,n){const i=arguments.length;return i===2?Xe(e)&&!re(e)?lp(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&lp(n)&&(n=[n]),Z(t,e,n))}const gE=Symbol(""),AA=()=>vn(gE),mE="3.2.47",RA="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,Jy=sr&&sr.createElement("template"),DA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?sr.createElementNS(RA,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Jy.innerHTML=i?`<svg>${t}</svg>`:t;const a=Jy.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function OA(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function MA(t,e,n){const i=t.style,s=xt(n);if(n&&!s){if(e&&!xt(e))for(const r in e)n[r]==null&&cp(i,r,"");for(const r in n)cp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Zy=/\s*!important$/;function cp(t,e,n){if(re(n))n.forEach(i=>cp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=PA(t,e);Zy.test(n)?t.setProperty(Lr(i),n.replace(Zy,""),"important"):t[i]=n}}const ev=["Webkit","Moz","ms"],rd={};function PA(t,e){const n=rd[e];if(n)return n;let i=yi(e);if(i!=="filter"&&i in t)return rd[e]=i;i=zh(i);for(let s=0;s<ev.length;s++){const r=ev[s]+i;if(r in t)return rd[e]=r}return e}const tv="http://www.w3.org/1999/xlink";function NA(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tv,e.slice(6,e.length)):t.setAttributeNS(tv,e,n);else{const r=Uk(e);n==null||r&&!ww(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function LA(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ww(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ps(t,e,n,i){t.addEventListener(e,n,i)}function FA(t,e,n,i){t.removeEventListener(e,n,i)}function UA(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=VA(e);if(i){const c=r[e]=zA(i,s);ps(t,a,c,l)}else o&&(FA(t,a,o,l),r[e]=void 0)}}const nv=/(?:Once|Passive|Capture)$/;function VA(t){let e;if(nv.test(t)){e={};let i;for(;i=t.match(nv);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let od=0;const BA=Promise.resolve(),$A=()=>od||(BA.then(()=>od=0),od=Date.now());function zA(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(HA(i,n.value),e,5,[i])};return n.value=t,n.attached=$A(),n}function HA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const iv=/^on[a-z]/,jA=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?OA(t,i,s):e==="style"?MA(t,n,i):Bh(e)?$g(e)||UA(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WA(t,e,i,s))?LA(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),NA(t,e,i,s))};function WA(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&iv.test(e)&&_e(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||iv.test(e)&&xt(n)?!1:e in t}function _E(t){const e=Bl();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>hp(r,s))},i=()=>{const s=t(e.proxy);up(e.subTree,s),n(s)};B2(i),nm(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),im(()=>s.disconnect())})}function up(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{up(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)hp(t.el,e);else if(t.type===Te)t.children.forEach(n=>up(n,e));else if(t.type===mu){let{el:n,anchor:i}=t;for(;n&&(hp(n,e),n!==i);)n=n.nextSibling}}function hp(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>du(e,n):e};function qA(t){t.target.composing=!0}function sv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=To(s);const r=i||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Mu(a)),t._assign(a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",qA),ps(t,"compositionend",sv),ps(t,"change",sv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=To(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Mu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},KA={deep:!0,created(t,e,n){t._assign=To(n),ps(t,"change",()=>{const i=t._modelValue,s=ll(t),r=t.checked,o=t._assign;if(re(i)){const a=Bg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ho(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(yE(t,r))})},mounted:rv,beforeUpdate(t,e,n){t._assign=To(n),rv(t,e,n)}};function rv(t,{value:e,oldValue:n},i){t._modelValue=e,re(e)?t.checked=Bg(e,i.props.value)>-1:Ho(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Ul(e,yE(t,!0)))}const GA={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ho(e);ps(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mu(ll(o)):ll(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=To(i)},mounted(t,{value:e}){ov(t,e)},beforeUpdate(t,e,n){t._assign=To(n)},updated(t,{value:e}){ov(t,e)}};function ov(t,e){const n=t.multiple;if(!(n&&!re(e)&&!Ho(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=ll(r);if(n)re(e)?r.selected=Bg(e,o)>-1:r.selected=e.has(o);else if(Ul(ll(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ll(t){return"_value"in t?t._value:t.value}function yE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const YA=["ctrl","shift","alt","meta"],QA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YA.some(n=>t[`${n}Key`]&&!e.includes(n))},Ve=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=QA[e[s]];if(r&&r(n,e))return}return t(n,...i)},XA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pi=(t,e)=>n=>{if(!("key"in n))return;const i=Lr(n.key);if(e.some(s=>s===i||XA[s]===i))return t(n)},JA=un({patchProp:jA},DA);let av;function ZA(){return av||(av=fA(JA))}const eR=(...t)=>{const e=ZA().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=tR(i);if(!s)return;const r=e._component;!_e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tR(t){return xt(t)?document.querySelector(t):t}var nR=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let vE;const ef=t=>vE=t,bE=Symbol();function fp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Na;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Na||(Na={}));function iR(){const t=Sw(!0),e=t.run(()=>Qe({}));let n=[],i=[];const s=wo({install(r){ef(s),s._a=r,r.provide(bE,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!nR?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const wE=()=>{};function lv(t,e,n,i=wE){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&jg()&&kw(s),s}function Gr(t,...e){t.slice().forEach(n=>{n(...e)})}function dp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];fp(s)&&fp(i)&&t.hasOwnProperty(n)&&!ht(i)&&!Bi(i)?t[n]=dp(s,i):t[n]=i}return t}const sR=Symbol();function rR(t){return!fp(t)||!t.hasOwnProperty(sR)}const{assign:hs}=Object;function oR(t){return!!(ht(t)&&t.effect)}function aR(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=T2(n.state.value[t]);return hs(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=wo(ke(()=>{ef(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=EE(t,c,e,n,i,!0),l}function EE(t,e,n={},i,s,r){let o;const a=hs({actions:{}},n),l={deep:!0};let c,u,h=wo([]),f=wo([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),Qe({});let g;function m(C){let x;c=u=!1,typeof C=="function"?(C(i.state.value[t]),x={type:Na.patchFunction,storeId:t,events:d}):(dp(i.state.value[t],C),x={type:Na.patchObject,payload:C,storeId:t,events:d});const F=g=Symbol();Zg().then(()=>{g===F&&(c=!0)}),u=!0,Gr(h,x,i.state.value[t])}const _=r?function(){const{state:x}=n,F=x?x():{};this.$patch(J=>{hs(J,F)})}:wE;function y(){o.stop(),h=[],f=[],i._s.delete(t)}function b(C,x){return function(){ef(i);const F=Array.from(arguments),J=[],ee=[];function oe(ve){J.push(ve)}function ye(ve){ee.push(ve)}Gr(f,{args:F,name:C,store:I,after:oe,onError:ye});let Ke;try{Ke=x.apply(this&&this.$id===t?this:I,F)}catch(ve){throw Gr(ee,ve),ve}return Ke instanceof Promise?Ke.then(ve=>(Gr(J,ve),ve)).catch(ve=>(Gr(ee,ve),Promise.reject(ve))):(Gr(J,Ke),Ke)}}const w={_p:i,$id:t,$onAction:lv.bind(null,f),$patch:m,$reset:_,$subscribe(C,x={}){const F=lv(h,C,x.detached,()=>J()),J=o.run(()=>Is(()=>i.state.value[t],ee=>{(x.flush==="sync"?u:c)&&C({storeId:t,type:Na.direct,events:d},ee)},hs({},l,x)));return F},$dispose:y},I=Rs(w);i._s.set(t,I);const D=i._e.run(()=>(o=Sw(),o.run(()=>e())));for(const C in D){const x=D[C];if(ht(x)&&!oR(x)||Bi(x))r||(p&&rR(x)&&(ht(x)?x.value=p[C]:dp(x,p[C])),i.state.value[t][C]=x);else if(typeof x=="function"){const F=b(C,x);D[C]=F,a.actions[C]=x}}return hs(I,D),hs(xe(I),D),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:C=>{m(x=>{hs(x,C)})}}),i._p.forEach(C=>{hs(I,o.run(()=>C({store:I,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(I.$state,p),c=!0,u=!0,I}function am(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Bl();return a=a||c&&vn(bE,null),a&&ef(a),a=vE,a._s.has(i)||(r?EE(i,e,s,a):aR(i,s,a)),a._s.get(i)}return o.$id=i,o}function lR(t){{t=xe(t);const e={};for(const n in t){const i=t[n];(ht(i)||Bi(i))&&(e[n]=jw(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw Ko(e)},Ko=function(t){return new Error("Firebase Database ("+IE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new uR;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xE=function(t){const e=TE(t);return tf.encodeByteArray(e,!0)},Uu=function(t){return xE(t).replace(/\./g,"")},Vu=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return CE(void 0,t)}function CE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fR(n)||(t[n]=CE(t[n],e[n]));return t}function fR(t){return t!=="__proto__"}/**
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
 */function dR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pR=()=>dR().__FIREBASE_DEFAULTS__,gR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vu(t[1]);return e&&JSON.parse(e)},lm=()=>{try{return pR()||gR()||mR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SE=t=>{var e,n;return(n=(e=lm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_R=t=>{const e=SE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},yR=()=>{var t;return(t=lm())===null||t===void 0?void 0:t.config},kE=t=>{var e;return(e=lm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function vR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function bR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wR(){const t=nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RE(){return IE.NODE_ADMIN===!0}function DE(){try{return typeof indexedDB=="object"}catch{return!1}}function ER(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="FirebaseError";class Ti extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=IR,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?TR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ti(s,a,i)}}function TR(t,e){return t.replace(xR,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const xR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){return JSON.parse(t)}function Ft(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ul(Vu(r[0])||""),n=ul(Vu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},CR=function(t){const e=OE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SR=function(t){const e=OE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(cv(r)&&cv(o)){if(!$u(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function cv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function AR(t,e){const n=new RR(t,e);return n.subscribe.bind(n)}class RR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");DR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ad),s.error===void 0&&(s.error=ad),s.complete===void 0&&(s.complete=ad);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ad(){}function OR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,z(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nf=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class ti{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zs="[DEFAULT]";/**
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
 */class PR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new cl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LR(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:NR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NR(t){return t===Zs?void 0:t}function LR(t){return t.instantiationMode==="EAGER"}/**
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
 */class FR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const UR={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},VR=Ue.INFO,BR={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},$R=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=BR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=VR,this._logHandler=$R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const zR=(t,e)=>e.some(n=>t instanceof n);let uv,hv;function HR(){return uv||(uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jR(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ME=new WeakMap,gp=new WeakMap,PE=new WeakMap,ld=new WeakMap,um=new WeakMap;function WR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ts(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ME.set(n,t)}).catch(()=>{}),um.set(e,t),e}function qR(t){if(gp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KR(t){mp=t(mp)}function GR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(cd(this),e,...n);return PE.set(i,e.sort?e.sort():[e]),Ts(i)}:jR().includes(t)?function(...e){return t.apply(cd(this),e),Ts(ME.get(this))}:function(...e){return Ts(t.apply(cd(this),e))}}function YR(t){return typeof t=="function"?GR(t):(t instanceof IDBTransaction&&qR(t),zR(t,HR())?new Proxy(t,mp):t)}function Ts(t){if(t instanceof IDBRequest)return WR(t);if(ld.has(t))return ld.get(t);const e=YR(t);return e!==t&&(ld.set(t,e),um.set(e,t)),e}const cd=t=>um.get(t);function QR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ts(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ts(o.result),l.oldVersion,l.newVersion,Ts(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const XR=["get","getKey","getAll","getAllKeys","count"],JR=["put","add","delete","clear"],ud=new Map;function fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=JR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||XR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ud.set(e,r),r}KR(t=>({...t,get:(e,n,i)=>fv(e,n)||t.get(e,n,i),has:(e,n)=>!!fv(e,n)||t.has(e,n)}));/**
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
 */class ZR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function eD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",dv="0.9.8";/**
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
 */const Ir=new $l("@firebase/app"),tD="@firebase/app-compat",nD="@firebase/analytics-compat",iD="@firebase/analytics",sD="@firebase/app-check-compat",rD="@firebase/app-check",oD="@firebase/auth",aD="@firebase/auth-compat",lD="@firebase/database",cD="@firebase/database-compat",uD="@firebase/functions",hD="@firebase/functions-compat",fD="@firebase/installations",dD="@firebase/installations-compat",pD="@firebase/messaging",gD="@firebase/messaging-compat",mD="@firebase/performance",_D="@firebase/performance-compat",yD="@firebase/remote-config",vD="@firebase/remote-config-compat",bD="@firebase/storage",wD="@firebase/storage-compat",ED="@firebase/firestore",ID="@firebase/firestore-compat",TD="firebase",xD="9.20.0";/**
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
 */const yp="[DEFAULT]",CD={[_p]:"fire-core",[tD]:"fire-core-compat",[iD]:"fire-analytics",[nD]:"fire-analytics-compat",[rD]:"fire-app-check",[sD]:"fire-app-check-compat",[oD]:"fire-auth",[aD]:"fire-auth-compat",[lD]:"fire-rtdb",[cD]:"fire-rtdb-compat",[uD]:"fire-fn",[hD]:"fire-fn-compat",[fD]:"fire-iid",[dD]:"fire-iid-compat",[pD]:"fire-fcm",[gD]:"fire-fcm-compat",[mD]:"fire-perf",[_D]:"fire-perf-compat",[yD]:"fire-rc",[vD]:"fire-rc-compat",[bD]:"fire-gcs",[wD]:"fire-gcs-compat",[ED]:"fire-fst",[ID]:"fire-fst-compat","fire-js":"fire-js",[TD]:"fire-js-all"};/**
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
 */const zu=new Map,vp=new Map;function SD(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(vp.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,t);for(const n of zu.values())SD(n,t);return!0}function hm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xs=new Go("app","Firebase",kD);/**
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
 */class AD{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xs.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=xD;function NE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw xs.create("bad-app-name",{appName:String(s)});if(n||(n=yR()),!n)throw xs.create("no-options");const r=zu.get(s);if(r){if($u(n,r.options)&&$u(i,r.config))return r;throw xs.create("duplicate-app",{appName:s})}const o=new FR(s);for(const l of vp.values())o.addComponent(l);const a=new AD(n,i,o);return zu.set(s,a),a}function fm(t=yp){const e=zu.get(t);if(!e&&t===yp)return NE();if(!e)throw xs.create("no-app",{appName:t});return e}function kn(t,e,n){var i;let s=(i=CD[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}vi(new ti(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RD="firebase-heartbeat-database",DD=1,hl="firebase-heartbeat-store";let hd=null;function LE(){return hd||(hd=QR(RD,DD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hl)}}}).catch(t=>{throw xs.create("idb-open",{originalErrorMessage:t.message})})),hd}async function OD(t){try{return(await LE()).transaction(hl).objectStore(hl).get(FE(t))}catch(e){if(e instanceof Ti)Ir.warn(e.message);else{const n=xs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function pv(t,e){try{const i=(await LE()).transaction(hl,"readwrite");return await i.objectStore(hl).put(e,FE(t)),i.done}catch(n){if(n instanceof Ti)Ir.warn(n.message);else{const i=xs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(i.message)}}}function FE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MD=1024,PD=30*24*60*60*1e3;class ND{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=PD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gv(),{heartbeatsToSend:n,unsentEntries:i}=LD(this._heartbeatsCache.heartbeats),s=Uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gv(){return new Date().toISOString().substring(0,10)}function LD(t,e=MD){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),mv(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class FD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?ER().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mv(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UD(t){vi(new ti("platform-logger",e=>new ZR(e),"PRIVATE")),vi(new ti("heartbeat",e=>new ND(e),"PRIVATE")),kn(_p,dv,t),kn(_p,dv,"esm2017"),kn("fire-js","")}UD("");function dm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function UE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VD=UE,VE=new Go("auth","Firebase",UE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new $l("@firebase/auth");function BD(t,...e){Hu.logLevel<=Ue.WARN&&Hu.warn(`Auth (${Bs}): ${t}`,...e)}function yu(t,...e){Hu.logLevel<=Ue.ERROR&&Hu.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,...e){throw pm(t,...e)}function gi(t,...e){return pm(t,...e)}function BE(t,e,n){const i=Object.assign(Object.assign({},VD()),{[e]:n});return new Go("auth","Firebase",i).create(e,{appName:t.name})}function $D(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&bi(t,"argument-error"),BE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return VE.create(t,...e)}function ue(t,e,...n){if(!t)throw pm(e,...n)}function Ni(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yu(e),new Error(e)}function qi(t,e){t||Ni(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zD(){return _v()==="http:"||_v()==="https:"}function _v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zD()||bR()||"connection"in navigator)?navigator.onLine:!0}function jD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,qi(n>e,"Short delay should be less than long delay!"),this.isMobile=cm()||AE()}get(){return HD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){qi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=new zl(3e4,6e4);function zE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hl(t,e,n,i,s={}){return HE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$E.fetch()(jE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function HE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},WD),e);try{const s=new GD(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ac(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ac(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ac(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ac(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw BE(t,u,c);bi(t,u)}}catch(s){if(s instanceof Ti)throw s;bi(t,"network-request-failed",{message:String(s)})}}async function KD(t,e,n,i,s={}){const r=await Hl(t,e,n,i,s);return"mfaPendingCredential"in r&&bi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function jE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?gm(t.config,s):`${t.config.apiScheme}://${s}`}class GD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(gi(this.auth,"network-request-failed")),qD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ac(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=gi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t,e){return Hl(t,"POST","/v1/accounts:delete",e)}async function QD(t,e){return Hl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XD(t,e=!1){const n=Vt(t),i=await n.getIdToken(e),s=mm(i);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:La(fd(s.auth_time)),issuedAtTime:La(fd(s.iat)),expirationTime:La(fd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fd(t){return Number(t)*1e3}function mm(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vu(n);return s?JSON.parse(s):(yu("Failed to decode base64 JWT payload"),null)}catch(s){return yu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function JD(t){const e=mm(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ti&&ZD(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ZD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(t){var e;const n=t.auth,i=await t.getIdToken(),s=await fl(t,QD(n,{idToken:i}));ue(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?iO(r.providerUserInfo):[],a=nO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new WE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tO(t){const e=Vt(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nO(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function iO(t){return t.map(e=>{var{providerId:n}=e,i=dm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t,e){const n=await HE(t,{},async()=>{const i=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=jE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$E.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await sO(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new dl;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dl,this.toJSON())}_performRefresh(){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new WE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fl(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XD(this,e)}reload(){return tO(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fl(this,YD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:w,isAnonymous:I,providerData:D,stsTokenManager:C}=n;ue(b&&C,e,"internal-error");const x=dl.fromJSON(this.name,C);ue(typeof b=="string",e,"internal-error"),as(h,e.name),as(f,e.name),ue(typeof w=="boolean",e,"internal-error"),ue(typeof I=="boolean",e,"internal-error"),as(d,e.name),as(p,e.name),as(g,e.name),as(m,e.name),as(_,e.name),as(y,e.name);const F=new _r({uid:b,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:x,createdAt:_,lastLoginAt:y});return D&&Array.isArray(D)&&(F.providerData=D.map(J=>Object.assign({},J))),m&&(F._redirectEventId=m),F}static async _fromIdTokenResponse(e,n,i=!1){const s=new dl;s.updateFromServerResponse(n);const r=new _r({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ju(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Map;function Li(t){qi(t instanceof Function,"Expected a class definition");let e=yv.get(t);return e?(qi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yv.set(t,e),e)}/**
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
 */class qE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qE.type="NONE";const vv=qE;/**
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
 */function vu(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vu(this.userKey,s.apiKey,r),this.fullPersistenceKey=vu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new uo(Li(vv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Li(vv);const o=vu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_r._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new uo(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new uo(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XE(e))return"Blackberry";if(JE(e))return"Webos";if(_m(e))return"Safari";if((e.includes("chrome/")||GE(e))&&!e.includes("edge/"))return"Chrome";if(QE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function KE(t=nn()){return/firefox\//i.test(t)}function _m(t=nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GE(t=nn()){return/crios\//i.test(t)}function YE(t=nn()){return/iemobile/i.test(t)}function QE(t=nn()){return/android/i.test(t)}function XE(t=nn()){return/blackberry/i.test(t)}function JE(t=nn()){return/webos/i.test(t)}function sf(t=nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rO(t=nn()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oO(){return wR()&&document.documentMode===10}function ZE(t=nn()){return sf(t)||QE(t)||JE(t)||XE(t)||/windows phone/i.test(t)||YE(t)}function aO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e=[]){let n;switch(t){case"Browser":n=bv(nn());break;case"Worker":n=`${bv(nn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${i}`}async function tI(t,e){return Hl(t,"GET","/v2/recaptchaConfig",zE(t,e))}function wv(t){return t!==void 0&&t.enterprise!==void 0}class nI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iI(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=gi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",lO().appendChild(i)})}function cO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uO="https://www.google.com/recaptcha/enterprise.js?render=",hO="recaptcha-enterprise";class fO{constructor(e){this.type=hO,this.auth=jl(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{tI(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nI(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;wv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&wv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}iI(uO+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class dO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new dO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Li(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}async initializeRecaptchaConfig(){const e=await tI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fO(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Li(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jl(t){return Vt(t)}class Ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=AR(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){const n=hm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($u(r,e??{}))return s;bi(s,"already-initialized")}return n.initialize({options:e})}function mO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Li);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _O(t,e,n){const i=jl(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=sI(e),{host:o,port:a}=yO(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||vO()}function sI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yO(t){const e=sI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Iv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Iv(o)}}}function Iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ni("not implemented")}_getIdTokenResponse(e){return Ni("not implemented")}_linkToIdToken(e,n){return Ni("not implemented")}_getReauthenticationResolver(e){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e){return KD(t,"POST","/v1/accounts:signInWithIdp",zE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="http://localhost";class Tr extends rI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=dm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Tr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ho(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ho(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ho(e,n)}buildRequest(){const e={requestUri:bO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wl extends ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Wl{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.FACEBOOK_SIGN_IN_METHOD="facebook.com";gs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Wl{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Wl{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return _s.credential(n,i)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com";_s.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await _r._fromIdTokenResponse(e,i,s),o=Tv(i);return new Co({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Tv(i);return new Co({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Ti{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Wu(e,n,i,s)}}function oI(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,r,e,i):r})}async function wO(t,e,n=!1){const i=await fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Co._forOperation(t,"link",i)}/**
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
 */async function EO(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await fl(t,oI(i,s,e,t),n);ue(r.idToken,i,"internal-error");const o=mm(r.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),Co._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&bi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(t,e,n=!1){const i="signIn",s=await oI(t,i,e),r=await Co._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function TO(t,e,n,i){return Vt(t).onIdTokenChanged(e,n,i)}function xO(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}const qu="__sak";/**
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
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(){const t=nn();return _m(t)||sf(t)}const SO=1e3,kO=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CO()&&aO(),this.fallbackToPolling=ZE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);oO()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kO):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},SO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const AO=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cI.type="SESSION";const uI=cI;/**
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
 */function RO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new rf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await RO(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=vm("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}function OO(t){mi().location.href=t}/**
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
 */function hI(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function MO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NO(){return hI()?self:null}/**
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
 */const fI="firebaseLocalStorageDb",LO=1,Ku="firebaseLocalStorage",dI="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function of(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function FO(){const t=indexedDB.deleteDatabase(fI);return new ql(t).toPromise()}function wp(){const t=indexedDB.open(fI,LO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ku,{keyPath:dI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ku)?e(i):(i.close(),await FO(),e(await wp()))})})}async function xv(t,e,n){const i=of(t,!0).put({[dI]:e,value:n});return new ql(i).toPromise()}async function UO(t,e){const n=of(t,!1).get(e),i=await new ql(n).toPromise();return i===void 0?null:i.value}function Cv(t,e){const n=of(t,!0).delete(e);return new ql(n).toPromise()}const VO=800,BO=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>BO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rf._getInstance(NO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MO(),!this.activeServiceWorker)return;this.sender=new DO(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await xv(e,qu,"1"),await Cv(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>xv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>UO(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=of(s,!1).getAll();return new ql(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const $O=pI;new zl(3e4,6e4);/**
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
 */function gI(t,e){return e?Li(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bm extends rI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ho(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zO(t){return IO(t.auth,new bm(t),t.bypassAuthState)}function HO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),EO(n,new bm(t),t.bypassAuthState)}async function jO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),wO(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zO;case"linkViaPopup":case"linkViaRedirect":return jO;case"reauthViaPopup":case"reauthViaRedirect":return HO;default:bi(this.auth,"internal-error")}}resolve(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=new zl(2e3,1e4);async function qO(t,e,n){const i=jl(t);$D(t,e,ym);const s=gI(i,n);return new or(i,"signInViaPopup",e,s).executeNotNull()}class or extends mI{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){qi(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,WO.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="pendingRedirect",bu=new Map;class GO extends mI{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const i=await YO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YO(t,e){const n=JO(e),i=XO(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function QO(t,e){bu.set(t._key(),e)}function XO(t){return Li(t._redirectPersistence)}function JO(t){return vu(KO,t.config.apiKey,t.name)}async function ZO(t,e,n=!1){const i=jl(t),s=gI(i,e),o=await new GO(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=10*60*1e3;class tM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!_I(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(gi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sv(e))}saveEventToCache(e){this.cachedEventUids.add(Sv(e)),this.lastProcessedEventTime=Date.now()}}function Sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e={}){return Hl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rM=/^https?/;async function oM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iM(t);for(const n of e)try{if(aM(n))return}catch{}bi(t,"unauthorized-domain")}function aM(t){const e=bp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!rM.test(n))return!1;if(sM.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const lM=new zl(3e4,6e4);function kv(){const t=mi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cM(t){return new Promise((e,n)=>{var i,s,r;function o(){kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kv(),n(gi(t,"network-request-failed"))},timeout:lM.get()})}if(!((s=(i=mi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=mi().gapi)===null||r===void 0)&&r.load)o();else{const a=cO("iframefcb");return mi()[a]=()=>{gapi.load?o():n(gi(t,"network-request-failed"))},iI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wu=null,e})}let wu=null;function uM(t){return wu=wu||cM(t),wu}/**
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
 */const hM=new zl(5e3,15e3),fM="__/auth/iframe",dM="emulator/auth/iframe",pM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mM(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gm(e,dM):`https://${t.config.authDomain}/${fM}`,i={apiKey:e.apiKey,appName:t.name,v:Bs},s=gM.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Yo(i).slice(1)}`}async function _M(t){const e=await uM(t),n=mi().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:mM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pM,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=gi(t,"network-request-failed"),a=mi().setTimeout(()=>{r(o)},hM.get());function l(){mi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const yM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vM=500,bM=600,wM="_blank",EM="http://localhost";class Av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IM(t,e,n,i=vM,s=bM){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yM),{width:i.toString(),height:s.toString(),top:r,left:o}),c=nn().toLowerCase();n&&(a=GE(c)?wM:n),KE(c)&&(e=e||EM,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(rO(c)&&a!=="_self")return TM(e||"",a),new Av(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new Av(h)}function TM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const xM="__/auth/handler",CM="emulator/auth/handler",SM=encodeURIComponent("fac");async function Rv(t,e,n,i,s,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Bs,eventId:s};if(e instanceof ym){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Wl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${SM}=${encodeURIComponent(l)}`:"";return`${kM(t)}?${Yo(a).slice(1)}${c}`}function kM({config:t}){return t.emulator?gm(t,CM):`https://${t.authDomain}/${xM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="webStorageSupport";class AM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uI,this._completeRedirectFn=ZO,this._overrideRedirectResult=QO}async _openPopup(e,n,i,s){var r;qi((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Rv(e,n,i,bp(),s);return IM(e,o,vm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Rv(e,n,i,bp(),s);return OO(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(qi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await _M(e),i=new tM(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[dd];o!==void 0&&n(!!o),bi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZE()||_m()||sf()}}const RM=AM;var Dv="@firebase/auth",Ov="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MM(t){vi(new ti("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ue(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eI(t)},c=new pO(i,s,r,l);return mO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),vi(new ti("auth-internal",e=>{const n=jl(e.getProvider("auth").getImmediate());return(i=>new DM(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Dv,Ov,OM(t)),kn(Dv,Ov,"esm2017")}/**
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
 */const PM=5*60,NM=kE("authIdTokenMaxAge")||PM;let Mv=null;const LM=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>NM)return;const s=n==null?void 0:n.token;Mv!==s&&(Mv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FM(t=fm()){const e=hm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gO(t,{popupRedirectResolver:RM,persistence:[$O,AO,uI]}),i=kE("authTokenSyncURL");if(i){const r=LM(i);xO(n,r,()=>r(n.currentUser)),TO(n,o=>r(o))}const s=SE("auth");return s&&_O(n,`http://${s}`),n}MM("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=new Map,VM={activated:!1,tokenObservers:[]};function wi(t){return UM.get(t)||Object.assign({},VM)}const Pv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new cl,await $M(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new cl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function $M(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gu=new Go("appCheck","AppCheck",zM);function HM(t){if(!wi(t).activated)throw Gu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM="firebase-app-check-database",WM=1,Ep="firebase-app-check-store";let Rc=null;function qM(){return Rc||(Rc=new Promise((t,e)=>{try{const n=indexedDB.open(jM,WM);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Gu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ep,{keyPath:"compositeKey"})}}}catch(n){e(Gu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Rc)}function KM(t,e){return GM(YM(t),e)}async function GM(t,e){const i=(await qM()).transaction(Ep,"readwrite"),r=i.objectStore(Ep).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Gu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function YM(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new $l("@firebase/app-check");function Nv(t,e){return DE()?KM(t,e).catch(n=>{Ip.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM={error:"UNKNOWN_ERROR"};function XM(t){return tf.encodeString(JSON.stringify(t),!1)}async function Tp(t,e=!1){const n=t.app;HM(n);const i=wi(n);let s=i.token,r;if(s&&!Ea(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Ea(l)?s=l:await Nv(n,void 0))}if(!e&&s&&Ea(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await wi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ip.warn(l.message):Ip.error(l),r=l}let a;return s?r?Ea(s)?a={token:s.token,internalError:r}:a=Fv(r):(a={token:s.token},i.token=s,await Nv(n,s)):a=Fv(r),o&&eP(n,a),a}function JM(t,e,n,i){const{app:s}=t,r=wi(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ea(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Lv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Lv(t))}function yI(t,e){const n=wi(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Lv(t){const{app:e}=t,n=wi(e);let i=n.tokenRefresher;i||(i=ZM(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function ZM(t){const{app:e}=t;return new BM(async()=>{const n=wi(e);let i;if(n.token?i=await Tp(t,!0):i=await Tp(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=wi(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Pv.RETRIAL_MIN_WAIT,Pv.RETRIAL_MAX_WAIT)}function eP(t,e){const n=wi(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ea(t){return t.expireTimeMillis-Date.now()>0}function Fv(t){return{token:XM(QM),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=wi(this.app);for(const n of e)yI(this.app,n.next);return Promise.resolve()}}function nP(t,e){return new tP(t,e)}function iP(t){return{getToken:e=>Tp(t,e),addTokenListener:e=>JM(t,"INTERNAL",e),removeTokenListener:e=>yI(t.app,e)}}const sP="@firebase/app-check",rP="0.6.5",oP="app-check",Uv="app-check-internal";function aP(){vi(new ti(oP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return nP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Uv).initialize()})),vi(new ti(Uv,t=>{const e=t.getProvider("app-check").getImmediate();return iP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),kn(sP,rP)}aP();var lP="firebase",cP="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(lP,cP,"app");const vI=Symbol("firebaseApp");function bI(t){return Bl()&&vn(vI,null)||fm(t)}const fi=()=>{};function wm(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function uP(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Ur(t){return!!t&&typeof t=="object"}const hP=Object.prototype;function fP(t){return Ur(t)&&Object.getPrototypeOf(t)===hP}function Em(t){return Ur(t)&&t.type==="document"}function wI(t){return Ur(t)&&t.type==="collection"}function dP(t){return Em(t)||wI(t)}function pP(t){return Ur(t)&&t.type==="query"}function gP(t){return Ur(t)&&"ref"in t}function mP(t){return Ur(t)&&typeof t.bucket=="string"}function _P(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function yP(){return!!(Bl()&&vn(gE,null))}const Vv="@firebase/database",Bv="0.14.4";/**
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
 */let EI="";function vP(t){EI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ul(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return is(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bP(e)}}catch{}return new wP},ar=II("localStorage"),xp=II("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new $l("@firebase/database"),EP=function(){let t=1;return function(){return t++}}(),TI=function(t){const e=MR(t),n=new kR;n.update(e);const i=n.digest();return tf.encodeByteArray(i)},Kl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Kl.apply(null,i):typeof i=="object"?e+=Ft(i):e+=i,e+=" "}return e};let yr=null,$v=!0;const IP=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fo.logLevel=Ue.VERBOSE,yr=fo.log.bind(fo),e&&xp.set("logging_enabled",!0)):typeof t=="function"?yr=t:(yr=null,xp.remove("logging_enabled"))},Kt=function(...t){if($v===!0&&($v=!1,yr===null&&xp.get("logging_enabled")===!0&&IP(!0)),yr){const e=Kl.apply(null,t);yr(e)}},Gl=function(t){return function(...e){Kt(t,...e)}},Cp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kl(...t);fo.error(e)},xr=function(...t){const e=`FIREBASE FATAL ERROR: ${Kl(...t)}`;throw fo.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Kl(...t);fo.warn(e)},TP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},So="[MIN_NAME]",Cr="[MAX_NAME]",Qo=function(t,e){if(t===e)return 0;if(t===So||e===Cr)return-1;if(e===So||t===Cr)return 1;{const n=zv(t),i=zv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},CP=function(t,e){return t===e?0:t<e?-1:1},ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ft(e))},Im=function(t){if(typeof t!="object"||t===null)return Ft(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ft(e[i]),n+=":",n+=Im(t[e[i]]);return n+="}",n},CI=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Bn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const SI=function(t){z(!xI(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},SP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AP=new RegExp("^-?(0*)\\d{1,10}$"),RP=-2147483648,DP=2147483647,zv=function(t){if(AP.test(t)){const e=Number(t);if(e>=RP&&e<=DP)return e}return null},Yl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},OP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class MP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Sp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="5",kI="v",AI="s",RI="r",DI="f",OI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MI="ls",PI="p",kp="ac",NI="websocket",LI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function FI(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let i;if(e===NI)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===LI)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LP(t)&&(n.ns=t.namespace);const s=[];return Bn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.counters_={}}incrementCounter(e,n=1){is(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={},gd={};function xm(t){const e=t.toString();return pd[e]||(pd[e]=new FP),pd[e]}function UP(t,e){const n=t.toString();return gd[n]||(gd[n]=e()),gd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yl(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="start",BP="close",$P="pLPCommand",zP="pRTLPCB",UI="id",VI="pw",BI="ser",HP="cb",jP="seg",WP="ts",qP="d",KP="dframe",$I=1870,zI=30,GP=$I-zI,YP=25e3,QP=3e4;class no{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gl(e),this.stats_=xm(n),this.urlFn=l=>(this.appCheckToken&&(l[kp]=this.appCheckToken),FI(n,LI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QP)),xP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hv)this.id=a,this.password=l;else if(o===BP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Hv]="t",i[BI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[HP]=this.scriptTagHolder.uniqueCallbackIdentifier),i[kI]=Tm,this.transportSessionId&&(i[AI]=this.transportSessionId),this.lastSessionId&&(i[MI]=this.lastSessionId),this.applicationId&&(i[PI]=this.applicationId),this.appCheckToken&&(i[kp]=this.appCheckToken),typeof location<"u"&&location.hostname&&OI.test(location.hostname)&&(i[RI]=DI);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){no.forceAllow_=!0}static forceDisallow(){no.forceDisallow_=!0}static isAvailable(){return no.forceAllow_?!0:!no.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SP()&&!kP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xE(n),s=CI(i,GP);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[KP]="t",i[UI]=e,i[VI]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EP(),window[$P+this.uniqueCallbackIdentifier]=e,window[zP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[UI]=this.myID,e[VI]=this.myPW,e[BI]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zI+i.length<=$I;){const o=this.pendingSegs.shift();i=i+"&"+jP+s+"="+o.seg+"&"+WP+s+"="+o.ts+"&"+qP+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(YP)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=16384,JP=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class jn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gl(this.connId),this.stats_=xm(n),this.connURL=jn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[kI]=Tm,typeof location<"u"&&location.hostname&&OI.test(location.hostname)&&(o[RI]=DI),n&&(o[AI]=n),i&&(o[MI]=i),s&&(o[kp]=s),r&&(o[PI]=r),FI(e,NI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ar.set("previous_websocket_failure",!0);try{let i;RE(),this.mySock=new Yu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!jn.forceDisallow_}static previouslyFailed(){return ar.isInMemoryStorage||ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ul(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=CI(n,XP);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[no,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=jn&&jn.isAvailable();let i=n&&!jn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[jn];else{const s=this.transports_=[];for(const r of pl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);pl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=6e4,eN=5e3,tN=10*1024,nN=100*1024,md="t",jv="d",iN="s",Wv="r",sN="e",qv="o",Kv="a",Gv="n",Yv="p",rN="h";class oN{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gl("c:"+this.id+":"),this.transportManager_=new pl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Fa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(md in e){const n=e[md];n===Kv?this.upgradeIfSecondaryHealthy_():n===Wv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ua("t",e),i=ua("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ua("t",e),i=ua("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ua(md,e);if(jv in e){const i=e[jv];if(n===rN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Gv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iN?this.onConnectionShutdown_(i):n===Wv?this.onReset_(i):n===sN?Cp("Server Error: "+i):n===qv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tm!==i&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Fa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends jI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qu}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=32,Xv=768;class ot{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function qe(){return new ot("")}function Me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ds(t){return t.pieces_.length-t.pieceNum_}function et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ot(t.pieces_,e)}function WI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ot(e,0)}function Ot(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ot)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ot(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Ln(t,e){const n=Me(t),i=Me(e);if(n===null)return e;if(n===i)return Ln(et(t),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GI(t,e){if(Ds(t)!==Ds(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Gn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ds(t)>Ds(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class lN{constructor(e,n){this.errorPrefix_=n,this.parts_=qI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nf(this.parts_[i]);YI(this)}}function cN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nf(e),YI(t)}function uN(t){const e=t.parts_.pop();t.byteLength_-=nf(e),t.parts_.length>0&&(t.byteLength_-=1)}function YI(t){if(t.byteLength_>Xv)throw new Error(t.errorPrefix_+"has a key path longer than "+Xv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qv+") or object contains a cycle "+er(t))}function er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends jI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Sm}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=1e3,hN=60*5*1e3,Jv=30*1e3,fN=1.3,dN=3e4,pN="server_kill",Zv=3;class $i extends HI{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$i.nextPersistentConnectionId_++,this.log_=Gl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ha,this.maxReconnectDelay_=hN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!RE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ft(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new cl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$i.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&is(e,"w")){const i=xo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ft(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cp("Unrecognized action received from server: "+Ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dN&&(this.reconnectDelay_=ha),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$i.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new oN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{An(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(pN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&An(h),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pp(this.interruptReasons_)&&(this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Im(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ot(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zv&&(this.reconnectDelay_=Jv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+EI.replace(/\./g,"-")]=1,cm()?e["framework.cordova"]=1:AE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qu.getInstance().currentlyOnline();return pp(this.interruptReasons_)&&e}}$i.nextPersistentConnectionId_=0;$i.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class af{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Pe(So,e),s=new Pe(So,n);return this.compare(i,s)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc;class QI extends af{static get __EMPTY_NODE(){return Dc}static set __EMPTY_NODE(e){Dc=e}compare(e,n){return Qo(e.name,n.name)}isDefinedOn(e){throw Ko("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,Dc)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Dc)}toString(){return".key"}}const po=new QI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Dt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Dt.RED,this.left=s??_n.EMPTY_NODE,this.right=r??_n.EMPTY_NODE}copy(e,n,i,s,r){return new Dt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _n.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Dt.RED=!0;Dt.BLACK=!1;class gN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(e,n=_n.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _n(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new _n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oc(this.root_,null,this.comparator_,!0,e)}}_n.EMPTY_NODE=new gN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t,e){return Qo(t.name,e.name)}function km(t,e){return Qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;function _N(t){Ap=t}const XI=function(t){return typeof t=="number"?"number:"+SI(t):"string:"+t},JI=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&is(e,".sv"),"Priority must be a string or number.")}else z(t===Ap||t.isEmpty(),"priority of unexpected type.");z(t===Ap||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e0;class At{constructor(e,n=At.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),JI(this.priorityNode_)}static set __childrenNodeConstructor(e){e0=e}static get __childrenNodeConstructor(){return e0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new At(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:Me(e)===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:At.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Me(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(z(i!==".priority"||Ds(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,At.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=SI(this.value_):e+=this.value_,this.lazyHash_=TI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===At.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof At.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=At.VALUE_TYPE_ORDER.indexOf(n),r=At.VALUE_TYPE_ORDER.indexOf(i);return z(s>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}At.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZI,eT;function yN(t){ZI=t}function vN(t){eT=t}class bN extends af{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Qo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,new At("[PRIORITY-POST]",eT))}makePost(e,n){const i=ZI(e);return new Pe(n,new At("[PRIORITY-POST]",i))}toString(){return".priority"}}const Jt=new bN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=Math.log(2);class EN{constructor(e){const n=r=>parseInt(Math.log(r)/wN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xu=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),g=s(d+1,c);return h=t[d],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,p,g)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,g){const m=h-p,_=h;h-=p;const y=s(m+1,_),b=t[m],w=n?n(b):b;d(new Dt(w,b.node,g,null,y))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?f(m,Dt.BLACK):(f(m,Dt.BLACK),f(m,Dt.RED))}return u},o=new EN(t.length),a=r(o);return new _n(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;const Yr={};class Fi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Yr&&Jt,"ChildrenNode.ts has not been loaded"),_d=_d||new Fi({".priority":Yr},{".priority":Jt}),_d}get(e){const n=xo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _n?n:null}hasIndex(e){return is(this.indexSet_,e.toString())}addIndex(e,n){z(e!==po,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Pe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xu(i,e.getCompare()):a=Yr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Fi(u,c)}addToIndexes(e,n){const i=Bu(this.indexes_,(s,r)=>{const o=xo(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),s===Yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xu(a,o.getCompare())}else return Yr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new Fi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Bu(this.indexes_,s=>{if(s===Yr)return s;{const r=n.get(e.name);return r?s.remove(new Pe(e.name,r)):s}});return new Fi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class ze{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&JI(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fa||(fa=new ze(new _n(km),null,Fi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fa}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fa:n}}getChild(e){const n=Me(e);return n===null?this:this.getImmediateChild(n).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Pe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?fa:this.priorityNode_;return new ze(s,o,r)}}updateChild(e,n){const i=Me(e);if(i===null)return n;{z(Me(e)!==".priority"||Ds(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(et(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Jt,(o,a)=>{n[o]=a.val(e),i++,r&&ze.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XI(this.getPriority().val())+":"),this.forEachChild(Jt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":TI(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ql?-1:0}withIndex(e){if(e===po||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===po||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Jt),s=n.getIterator(Jt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===po?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IN extends ze{constructor(){super(new _n(km),ze.EMPTY_NODE,Fi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const Ql=new IN;Object.defineProperties(Pe,{MIN:{value:new Pe(So,ze.EMPTY_NODE)},MAX:{value:new Pe(Cr,Ql)}});QI.__EMPTY_NODE=ze.EMPTY_NODE;At.__childrenNodeConstructor=ze;_N(Ql);vN(Ql);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=!0;function Gt(t,e=null){if(t===null)return ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new At(n,Gt(e))}if(!(t instanceof Array)&&TN){const n=[];let i=!1;if(Bn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Gt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Pe(o,l)))}}),n.length===0)return ze.EMPTY_NODE;const r=Xu(n,mN,o=>o.name,km);if(i){const o=Xu(n,Jt.getCompare());return new ze(r,Gt(e),new Fi({".priority":o},{".priority":Jt}))}else return new ze(r,Gt(e),Fi.Default)}else{let n=ze.EMPTY_NODE;return Bn(t,(i,s)=>{if(is(t,i)&&i.substring(0,1)!=="."){const r=Gt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Gt(e))}}yN(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN extends af{constructor(e){super(),this.indexPath_=e,z(!Re(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Qo(e.name,n.name):r}makePost(e,n){const i=Gt(e),s=ze.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(n,s)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,Ql);return new Pe(Cr,e)}toString(){return qI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN extends af{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Qo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const i=Gt(e);return new Pe(n,i)}toString(){return".value"}}const SN=new CN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){return{type:"value",snapshotNode:t}}function AN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function RN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function t0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Jt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:So}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Jt}copy(){const e=new Am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Jt?n="$priority":t.index_===SN?n="$value":t.index_===po?n="$key":(z(t.index_ instanceof xN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ft(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ft(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ft(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ft(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function i0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Jt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends HI{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Gl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ju.getListenId_(e,i),a={};this.listens_[o]=a;const l=n0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),xo(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=Ju.getListenId_(e,n);delete this.listens_[i]}get(e){const n=n0(e._queryParams),i=e._path.toString(),s=new cl;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ul(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function tT(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Me(e);t.children.has(i)||t.children.set(i,Zu());const s=t.children.get(i);e=et(e),tT(s,e,n)}}function Rp(t,e,n){t.value!==null?n(e,t.value):MN(t,(i,s)=>{const r=new ot(e.toString()+"/"+i);Rp(s,r,n)})}function MN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=10*1e3,NN=30*1e3,LN=5*60*1e3;class FN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PN(e);const i=s0+(NN-s0)*Math.random();Fa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Bn(e,(s,r)=>{r>0&&is(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Fa(this.reportStats_.bind(this),Math.floor(Math.random()*2*LN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function nT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=di.ACK_USER_WRITE,this.source=nT()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ot(e));return new eh(qe(),n,this.revert)}}else return z(Me(this.path)===e,"operationForChild called for unrelated child."),new eh(et(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=di.OVERWRITE}operationForChild(e){return Re(this.path)?new Sr(this.source,qe(),this.snap.getImmediateChild(e)):new Sr(this.source,et(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=di.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new ot(e));return n.isEmpty()?null:n.value?new Sr(this.source,qe(),n.value):new gl(this.source,qe(),n)}else return z(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gl(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function UN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(DN(o.childName,o.snapshotNode))}),da(t,s,"child_removed",e,i,n),da(t,s,"child_added",e,i,n),da(t,s,"child_moved",r,i,n),da(t,s,"child_changed",e,i,n),da(t,s,"value",e,i,n),s}function da(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>BN(t,a,l)),o.forEach(a=>{const l=VN(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BN(t,e,n){if(e.childName==null||n.childName==null)throw Ko("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),s=new Pe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){return{eventCache:t,serverCache:e}}function Ua(t,e,n,i){return rT(new Rm(e,n,i),t.serverCache)}function oT(t,e,n,i){return rT(t.eventCache,new Rm(e,n,i))}function Dp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;const $N=()=>(yd||(yd=new _n(CP)),yd);class Je{constructor(e,n=$N()){this.value=e,this.children=n}static fromObject(e){let n=new Je(null);return Bn(e,(i,s)=>{n=n.set(new ot(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:qe(),value:this.value};if(Re(e))return null;{const i=Me(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(et(e),n);return r!=null?{path:Ot(new ot(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=Me(e),i=this.children.get(n);return i!==null?i.subtree(et(e)):new Je(null)}}set(e,n){if(Re(e))return new Je(n,this.children);{const i=Me(e),r=(this.children.get(i)||new Je(null)).set(et(e),n),o=this.children.insert(i,r);return new Je(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Je(null):new Je(null,this.children);{const n=Me(e),i=this.children.get(n);if(i){const s=i.remove(et(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Je(null):new Je(this.value,r)}else return this}}get(e){if(Re(e))return this.value;{const n=Me(e),i=this.children.get(n);return i?i.get(et(e)):null}}setTree(e,n){if(Re(e))return n;{const i=Me(e),r=(this.children.get(i)||new Je(null)).setTree(et(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Je(this.value,o)}}fold(e){return this.fold_(qe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ot(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,qe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Re(e))return null;{const r=Me(e),o=this.children.get(r);return o?o.findOnPath_(et(e),Ot(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,qe(),n)}foreachOnPath_(e,n,i){if(Re(e))return this;{this.value&&i(n,this.value);const s=Me(e),r=this.children.get(s);return r?r.foreachOnPath_(et(e),Ot(n,s),i):new Je(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ot(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new Je(null))}}function Va(t,e,n){if(Re(e))return new Zn(new Je(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ln(s,e);return r=r.updateChild(o,n),new Zn(t.writeTree_.set(s,r))}else{const s=new Je(n),r=t.writeTree_.setTree(e,s);return new Zn(r)}}}function r0(t,e,n){let i=t;return Bn(n,(s,r)=>{i=Va(i,Ot(e,s),r)}),i}function o0(t,e){if(Re(e))return Zn.empty();{const n=t.writeTree_.setTree(e,new Je(null));return new Zn(n)}}function Op(t,e){return Vr(t,e)!=null}function Vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ln(n.path,e)):null}function a0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Jt,(i,s)=>{e.push(new Pe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Pe(i,s.value))}),e}function Cs(t,e){if(Re(e))return t;{const n=Vr(t,e);return n!=null?new Zn(new Je(n)):new Zn(t.writeTree_.subtree(e))}}function Mp(t){return t.writeTree_.isEmpty()}function ko(t,e){return aT(qe(),t.writeTree_,e)}function aT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=aT(Ot(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ot(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e){return dT(e,t)}function zN(t,e,n,i,s){z(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Va(t.visibleWrites,e,n)),t.lastWriteId=i}function HN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function jN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WN(a,i.path)?s=!1:Gn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return qN(t),!0;if(i.snap)t.visibleWrites=o0(t.visibleWrites,i.path);else{const a=i.children;Bn(a,l=>{t.visibleWrites=o0(t.visibleWrites,Ot(i.path,l))})}return!0}else return!1}function WN(t,e){if(t.snap)return Gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gn(Ot(t.path,n),e))return!0;return!1}function qN(t){t.visibleWrites=cT(t.allWrites,KN,qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KN(t){return t.visible}function cT(t,e,n){let i=Zn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Gn(n,o)?(a=Ln(n,o),i=Va(i,a,r.snap)):Gn(o,n)&&(a=Ln(o,n),i=Va(i,qe(),r.snap.getChild(a)));else if(r.children){if(Gn(n,o))a=Ln(n,o),i=r0(i,a,r.children);else if(Gn(o,n))if(a=Ln(o,n),Re(a))i=r0(i,qe(),r.children);else{const l=xo(r.children,Me(a));if(l){const c=l.getChild(et(a));i=Va(i,qe(),c)}}}else throw Ko("WriteRecord should have .snap or .children")}}return i}function uT(t,e,n,i,s){if(!i&&!s){const r=Vr(t.visibleWrites,e);if(r!=null)return r;{const o=Cs(t.visibleWrites,e);if(Mp(o))return n;if(n==null&&!Op(o,qe()))return null;{const a=n||ze.EMPTY_NODE;return ko(o,a)}}}else{const r=Cs(t.visibleWrites,e);if(!s&&Mp(r))return n;if(!s&&n==null&&!Op(r,qe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Gn(c.path,e)||Gn(e,c.path))},a=cT(t.allWrites,o,e),l=n||ze.EMPTY_NODE;return ko(a,l)}}}function GN(t,e,n){let i=ze.EMPTY_NODE;const s=Vr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Jt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Cs(t.visibleWrites,e);return n.forEachChild(Jt,(o,a)=>{const l=ko(Cs(r,new ot(o)),a);i=i.updateImmediateChild(o,l)}),a0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Cs(t.visibleWrites,e);return a0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function YN(t,e,n,i,s){z(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ot(e,n);if(Op(t.visibleWrites,r))return null;{const o=Cs(t.visibleWrites,r);return Mp(o)?s.getChild(n):ko(o,s.getChild(n))}}function QN(t,e,n,i){const s=Ot(e,n),r=Vr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Cs(t.visibleWrites,s);return ko(o,i.getNode().getImmediateChild(n))}else return null}function XN(t,e){return Vr(t.visibleWrites,e)}function JN(t,e,n,i,s,r,o){let a;const l=Cs(t.visibleWrites,e),c=Vr(l,qe());if(c!=null)a=c;else if(n!=null)a=ko(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function ZN(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Pp(t,e,n,i){return uT(t.writeTree,t.treePath,e,n,i)}function hT(t,e){return GN(t.writeTree,t.treePath,e)}function l0(t,e,n,i){return YN(t.writeTree,t.treePath,e,n,i)}function th(t,e){return XN(t.writeTree,Ot(t.treePath,e))}function e3(t,e,n,i,s,r){return JN(t.writeTree,t.treePath,e,n,i,s,r)}function Dm(t,e,n){return QN(t.writeTree,t.treePath,e,n)}function fT(t,e){return dT(Ot(t.treePath,e),t.writeTree)}function dT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,t0(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,RN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,AN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,t0(i,e.snapshotNode,s.oldSnap));else throw Ko("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const pT=new n3;class Om{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Rm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),r=e3(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function i3(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function s3(t,e,n,i,s){const r=new t3;let o,a;if(n.type===di.OVERWRITE){const c=n;c.source.fromUser?o=Np(t,e,c.path,c.snap,i,s,r):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Re(c.path),o=nh(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===di.MERGE){const c=n;c.source.fromUser?o=o3(t,e,c.path,c.children,i,s,r):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lp(t,e,c.path,c.children,i,s,a,r))}else if(n.type===di.ACK_USER_WRITE){const c=n;c.revert?o=c3(t,e,c.path,i,s,r):o=a3(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===di.LISTEN_COMPLETE)o=l3(t,e,n.path,i,r);else throw Ko("Unknown operation type: "+n.type);const l=r.getChanges();return r3(e,o,l),{viewCache:o,changes:l}}function r3(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Dp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(kN(Dp(e)))}}function gT(t,e,n,i,s,r){const o=e.eventCache;if(th(i,n)!=null)return e;{let a,l;if(Re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kr(e),u=c instanceof ze?c:ze.EMPTY_NODE,h=hT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Pp(i,kr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Me(n);if(c===".priority"){z(Ds(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=l0(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=et(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=l0(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Dm(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ua(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function nh(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Re(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Me(n);if(!l.isCompleteForPath(n)&&Ds(n)>1)return e;const p=et(n),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,p,pT,null)}const h=oT(e,c,l.isFullyInitialized()||Re(n),u.filtersNodes()),f=new Om(s,h,r);return gT(t,h,n,s,f,a)}function Np(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Om(s,e,r);if(Re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ua(e,c,!0,t.filter.filtersNodes());else{const h=Me(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ua(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=et(n),d=a.getNode().getImmediateChild(h);let p;if(Re(f))p=i;else{const g=u.getCompleteChild(h);g!=null?WI(f)===".priority"&&g.getChild(KI(f)).isEmpty()?p=g:p=g.updateChild(f,i):p=ze.EMPTY_NODE}if(d.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Ua(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function c0(t,e){return t.eventCache.isCompleteForChild(e)}function o3(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Ot(n,l);c0(e,Me(u))&&(a=Np(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Ot(n,l);c0(e,Me(u))||(a=Np(t,a,u,c,s,r,o))}),a}function u0(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Lp(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Re(n)?c=i:c=new Je(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=u0(t,d,f);l=nh(t,l,new ot(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),g=u0(t,p,f);l=nh(t,l,new ot(h),g,s,r,o,a)}}),l}function a3(t,e,n,i,s,r,o){if(th(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nh(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Re(n)){let c=new Je(null);return l.getNode().forEachChild(po,(u,h)=>{c=c.set(new ot(u),h)}),Lp(t,e,n,c,s,r,a,o)}else return e}else{let c=new Je(null);return i.foreach((u,h)=>{const f=Ot(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Lp(t,e,n,c,s,r,a,o)}}function l3(t,e,n,i,s){const r=e.serverCache,o=oT(e,r.getNode(),r.isFullyInitialized()||Re(n),r.isFiltered());return gT(t,o,n,i,pT,s)}function c3(t,e,n,i,s,r){let o;if(th(i,n)!=null)return e;{const a=new Om(i,e,s),l=e.eventCache.getNode();let c;if(Re(n)||Me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pp(i,kr(e));else{const h=e.serverCache.getNode();z(h instanceof ze,"serverChildren would be complete if leaf node"),u=hT(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Me(n);let h=Dm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,et(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ze.EMPTY_NODE,et(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pp(i,kr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||th(i,qe())!=null,Ua(e,c,o,t.filter.filtersNodes())}}function u3(t,e){const n=kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(Me(e)).isEmpty())?n.getChild(e):null}function h0(t,e,n,i){e.type===di.MERGE&&e.source.queryId!==null&&(z(kr(t.viewCache_),"We should always have a full cache before handling merges"),z(Dp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=s3(t.processor_,s,e,n,i);return i3(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,h3(t,r.changes,r.viewCache.eventCache.getNode(),null)}function h3(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return UN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0;function f3(t){z(!f0,"__referenceConstructor has already been defined"),f0=t}function Mm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return z(r!=null,"SyncTree gave us an op for an invalid query."),h0(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(h0(o,e,n,i));return r}}function Pm(t,e){let n=null;for(const i of t.views.values())n=n||u3(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0;function d3(t){z(!d0,"__referenceConstructor has already been defined"),d0=t}class p0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Je(null),this.pendingWriteTree_=ZN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function p3(t,e,n,i,s){return zN(t.pendingWriteTree_,e,n,i,s),s?cf(t,new Sr(nT(),e,n)):[]}function io(t,e,n=!1){const i=HN(t.pendingWriteTree_,e);if(jN(t.pendingWriteTree_,e)){let r=new Je(null);return i.snap!=null?r=r.set(qe(),!0):Bn(i.children,o=>{r=r.set(new ot(o),!0)}),cf(t,new eh(i.path,r,n))}else return[]}function lf(t,e,n){return cf(t,new Sr(iT(),e,n))}function g3(t,e,n){const i=Je.fromObject(n);return cf(t,new gl(iT(),e,i))}function m3(t,e,n,i){const s=vT(t,i);if(s!=null){const r=bT(s),o=r.path,a=r.queryId,l=Ln(o,e),c=new Sr(sT(a),l,n);return wT(t,o,c)}else return[]}function _3(t,e,n,i){const s=vT(t,i);if(s){const r=bT(s),o=r.path,a=r.queryId,l=Ln(o,e),c=Je.fromObject(n),u=new gl(sT(a),l,c);return wT(t,o,u)}else return[]}function mT(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ln(o,e),c=Pm(a,l);if(c)return c});return uT(s,e,r,n,!0)}function cf(t,e){return _T(e,t.syncPointTree_,null,lT(t.pendingWriteTree_,qe()))}function _T(t,e,n,i){if(Re(t.path))return yT(t,e,n,i);{const s=e.get(qe());n==null&&s!=null&&(n=Pm(s,qe()));let r=[];const o=Me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fT(i,o);r=r.concat(_T(a,l,c,u))}return s&&(r=r.concat(Mm(s,t,i,n))),r}}function yT(t,e,n,i){const s=e.get(qe());n==null&&s!=null&&(n=Pm(s,qe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fT(i,o),u=t.operationForChild(o);u&&(r=r.concat(yT(u,a,l,c)))}),s&&(r=r.concat(Mm(s,t,i,n))),r}function vT(t,e){return t.tagToQueryMap.get(e)}function bT(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ot(t.substr(0,e))}}function wT(t,e,n){const i=t.syncPointTree_.get(e);z(i,"Missing sync point for query tag that we're tracking");const s=lT(t.pendingWriteTree_,e);return Mm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nm(n)}node(){return this.node_}}class Lm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ot(this.path_,e);return new Lm(this.syncTree_,n)}node(){return mT(this.syncTree_,this.path_)}}const y3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},g0=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return v3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return b3(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},v3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},b3=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&z(!1,"Unexpected increment value: "+i);const s=e.node();if(z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},w3=function(t,e,n,i){return Fm(e,new Lm(n,t),i)},E3=function(t,e,n){return Fm(t,new Nm(e),n)};function Fm(t,e,n){const i=t.getPriority().val(),s=g0(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=g0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new At(a,Gt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new At(s))),o.forEachChild(Jt,(a,l)=>{const c=Fm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Vm(t,e){let n=e instanceof ot?e:new ot(e),i=t,s=Me(n);for(;s!==null;){const r=xo(i.node.children,s)||{children:{},childCount:0};i=new Um(s,i,r),n=et(n),s=Me(n)}return i}function Xo(t){return t.node.value}function ET(t,e){t.node.value=e,Fp(t)}function IT(t){return t.node.childCount>0}function I3(t){return Xo(t)===void 0&&!IT(t)}function uf(t,e){Bn(t.node.children,(n,i)=>{e(new Um(n,t,i))})}function TT(t,e,n,i){n&&!i&&e(t),uf(t,s=>{TT(s,e,!0,i)}),n&&i&&e(t)}function T3(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Xl(t){return new ot(t.parent===null?t.name:Xl(t.parent)+"/"+t.name)}function Fp(t){t.parent!==null&&x3(t.parent,t.name,t)}function x3(t,e,n){const i=I3(n),s=is(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Fp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Fp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C3=/[\[\].#$\/\u0000-\u001F\u007F]/,S3=/[\[\].#$\u0000-\u001F\u007F]/,vd=10*1024*1024,xT=function(t){return typeof t=="string"&&t.length!==0&&!C3.test(t)},k3=function(t){return typeof t=="string"&&t.length!==0&&!S3.test(t)},A3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),k3(t)},CT=function(t,e,n){const i=n instanceof ot?new lN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+er(i));if(typeof e=="function")throw new Error(t+"contains a function "+er(i)+" with contents = "+e.toString());if(xI(e))throw new Error(t+"contains "+e.toString()+" "+er(i));if(typeof e=="string"&&e.length>vd/3&&nf(e)>vd)throw new Error(t+"contains a string greater than "+vd+" utf8 bytes "+er(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Bn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xT(o)))throw new Error(t+" contains an invalid key ("+o+") "+er(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cN(i,o),CT(t,a,i),uN(i)}),s&&r)throw new Error(t+' contains ".value" child '+er(i)+" in addition to actual children.")}},R3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!A3(n))throw new Error(OR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function O3(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!GI(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Br(t,e,n){O3(t,n),M3(t,i=>Gn(i,e)||Gn(e,i))}function M3(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(P3(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function P3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();yr&&Kt("event: "+n.toString()),Yl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3="repo_interrupt",L3=25;class F3{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new Um,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U3(t,e,n){if(t.stats_=xm(t.repoInfo_),t.forceRestClient_||OP())t.server_=new Ju(t.repoInfo_,(i,s,r,o)=>{m0(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ft(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $i(t.repoInfo_,e,(i,s,r,o)=>{m0(t,i,s,r,o)},i=>{_0(t,i)},i=>{B3(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=UP(t.repoInfo_,()=>new FN(t.stats_,t.server_)),t.infoData_=new ON,t.infoSyncTree_=new p0({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=lf(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bm(t,"connected",!1),t.serverSyncTree_=new p0({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Br(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function V3(t){const n=t.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ST(t){return y3({timestamp:V3(t)})}function m0(t,e,n,i,s){t.dataUpdateCount++;const r=new ot(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Bu(n,c=>Gt(c));o=_3(t.serverSyncTree_,r,l,s)}else{const l=Gt(n);o=m3(t.serverSyncTree_,r,l,s)}else if(i){const l=Bu(n,c=>Gt(c));o=g3(t.serverSyncTree_,r,l)}else{const l=Gt(n);o=lf(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zm(t,r)),Br(t.eventQueue_,a,o)}function _0(t,e){Bm(t,"connected",e),e===!1&&z3(t)}function B3(t,e){Bn(e,(n,i)=>{Bm(t,n,i)})}function Bm(t,e,n){const i=new ot("/.info/"+e),s=Gt(n);t.infoData_.updateSnapshot(i,s);const r=lf(t.infoSyncTree_,i,s);Br(t.eventQueue_,i,r)}function $3(t){return t.nextWriteId_++}function z3(t){kT(t,"onDisconnectEvents");const e=ST(t),n=Zu();Rp(t.onDisconnect_,qe(),(s,r)=>{const o=w3(s,r,t.serverSyncTree_,e);tT(n,s,o)});let i=[];Rp(n,qe(),(s,r)=>{i=i.concat(lf(t.serverSyncTree_,s,r));const o=q3(t,s);zm(t,o)}),t.onDisconnect_=Zu(),Br(t.eventQueue_,qe(),i)}function H3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(N3)}function kT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function AT(t,e,n){return mT(t.serverSyncTree_,e,n)||ze.EMPTY_NODE}function $m(t,e=t.transactionQueueTree_){if(e||hf(t,e),Xo(e)){const n=DT(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&j3(t,Xl(e),n)}else IT(e)&&uf(e,n=>{$m(t,n)})}function j3(t,e,n){const i=n.map(c=>c.currentWriteId),s=AT(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];z(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ln(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{kT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(io(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hf(t,Vm(t.transactionQueueTree_,e)),$m(t,t.transactionQueueTree_),Br(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Yl(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}zm(t,e)}},o)}function zm(t,e){const n=RT(t,e),i=Xl(n),s=DT(t,n);return W3(t,s,i),i}function W3(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ln(n,l.path);let u=!1,h;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=L3)u=!0,h="maxretry",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else{const f=AT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){CT("transaction failed: Data returned ",d,l.path);let p=Gt(d);typeof d=="object"&&d!=null&&is(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=l.currentWriteId,_=ST(t),y=E3(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=$3(t),o.splice(o.indexOf(m),1),s=s.concat(p3(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(io(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0))}Br(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}hf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Yl(i[a]);$m(t,t.transactionQueueTree_)}function RT(t,e){let n,i=t.transactionQueueTree_;for(n=Me(e);n!==null&&Xo(i)===void 0;)i=Vm(i,n),e=et(e),n=Me(e);return i}function DT(t,e){const n=[];return OT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function OT(t,e,n){const i=Xo(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);uf(e,s=>{OT(t,s,n)})}function hf(t,e){const n=Xo(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ET(e,n.length>0?n:void 0)}uf(e,i=>{hf(t,i)})}function q3(t,e){const n=Xl(RT(t,e)),i=Vm(t.transactionQueueTree_,e);return T3(i,s=>{bd(t,s)}),bd(t,i),TT(i,s=>{bd(t,s)}),n}function bd(t,e){const n=Xo(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(io(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ET(e,void 0):n.length=r+1,Br(t.eventQueue_,Xl(e),s);for(let o=0;o<i.length;o++)Yl(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K3(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function G3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const y0=function(t,e){const n=Y3(t),i=n.namespace;n.domain==="firebase.com"&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TP();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new NP(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ot(n.pathString)}},Y3=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=K3(t.substring(u,h)));const f=G3(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Re(this._path)?null:WI(this._path)}get ref(){return new Jo(this._repo,this._path)}get _queryIdentifier(){const e=i0(this._queryParams),n=Im(e);return n==="{}"?"default":n}get _queryObject(){return i0(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof Hm))return!1;const n=this._repo===e._repo,i=GI(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+aN(this._path)}}class Jo extends Hm{constructor(e,n){super(e,n,new Am,!1)}get parent(){const e=KI(this._path);return e===null?null:new Jo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}f3(Jo);d3(Jo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3="FIREBASE_DATABASE_EMULATOR_HOST",Up={};let X3=!1;function J3(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=y0(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Q3]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=y0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Sp(Sp.OWNER):new PP(t.name,t.options,e);R3("Invalid Firebase Database URL",o),Re(o.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=e4(a,t,u,new MP(t.name,n));return new t4(h,t)}function Z3(t,e){const n=Up[e];(!n||n[t.key]!==t)&&xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),H3(t),delete n[t.key]}function e4(t,e,n,i){let s=Up[e.name];s||(s={},Up[e.name]=s);let r=s[t.toURLString()];return r&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new F3(t,X3,n,i),s[t.toURLString()]=r,r}class t4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jo(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function n4(t){vP(Bs),vi(new ti("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return J3(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),kn(Vv,Bv,t),kn(Vv,Bv,"esm2017")}$i.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$i.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};n4();var i4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,jm=jm||{},he=i4||self;function ih(){}function ff(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function s4(t){return Object.prototype.hasOwnProperty.call(t,wd)&&t[wd]||(t[wd]=++r4)}var wd="closure_uid_"+(1e9*Math.random()>>>0),r4=0;function o4(t,e,n){return t.call.apply(t.bind,arguments)}function a4(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Zt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Zt=o4:Zt=a4,Zt.apply(null,arguments)}function Mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Bt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function $s(){this.s=this.s,this.o=this.o}var l4=0;$s.prototype.s=!1;$s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),l4!=0)&&s4(this)};$s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const MT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wm(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function v0(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ff(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function en(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}en.prototype.h=function(){this.defaultPrevented=!0};var c4=function(){if(!he.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{he.addEventListener("test",ih,e),he.removeEventListener("test",ih,e)}catch{}return t}();function sh(t){return/^[\s\xa0]*$/.test(t)}var b0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ed(t,e){return t<e?-1:t>e?1:0}function df(){var t=he.navigator;return t&&(t=t.userAgent)?t:""}function hi(t){return df().indexOf(t)!=-1}function qm(t){return qm[" "](t),t}qm[" "]=ih;function u4(t){var e=d4;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var h4=hi("Opera"),Ao=hi("Trident")||hi("MSIE"),PT=hi("Edge"),Vp=PT||Ao,NT=hi("Gecko")&&!(df().toLowerCase().indexOf("webkit")!=-1&&!hi("Edge"))&&!(hi("Trident")||hi("MSIE"))&&!hi("Edge"),f4=df().toLowerCase().indexOf("webkit")!=-1&&!hi("Edge");function LT(){var t=he.document;return t?t.documentMode:void 0}var rh;e:{var Id="",Td=function(){var t=df();if(NT)return/rv:([^\);]+)(\)|;)/.exec(t);if(PT)return/Edge\/([\d\.]+)/.exec(t);if(Ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(f4)return/WebKit\/(\S+)/.exec(t);if(h4)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Td&&(Id=Td?Td[1]:""),Ao){var xd=LT();if(xd!=null&&xd>parseFloat(Id)){rh=String(xd);break e}}rh=Id}var d4={};function p4(){return u4(function(){let t=0;const e=b0(String(rh)).split("."),n=b0("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ed(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ed(s[2].length==0,r[2].length==0)||Ed(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Bp;if(he.document&&Ao){var w0=LT();Bp=w0||parseInt(rh,10)||void 0}else Bp=void 0;var g4=Bp;function ml(t,e){if(en.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(NT){e:{try{qm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:m4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ml.X.h.call(this)}}Bt(ml,en);var m4={2:"touch",3:"pen",4:"mouse"};ml.prototype.h=function(){ml.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zl="closure_listenable_"+(1e6*Math.random()|0),_4=0;function y4(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++_4,this.ba=this.ea=!1}function pf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Km(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function FT(t){const e={};for(const n in t)e[n]=t[n];return e}const E0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function UT(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<E0.length;r++)n=E0[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gf(t){this.src=t,this.g={},this.h=0}gf.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=zp(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new y4(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function $p(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=MT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zp(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Gm="closure_lm_"+(1e6*Math.random()|0),Cd={};function VT(t,e,n,i,s){if(i&&i.once)return $T(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)VT(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[Zl]?t.N(e,n,Jl(i)?!!i.capture:!!i,s):BT(t,e,n,!1,i,s)}function BT(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Jl(s)?!!s.capture:!!s,a=Qm(t);if(a||(t[Gm]=a=new gf(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=v4(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)c4||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(HT(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function v4(){function t(n){return e.call(t.src,t.listener,n)}const e=b4;return t}function $T(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$T(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[Zl]?t.O(e,n,Jl(i)?!!i.capture:!!i,s):BT(t,e,n,!0,i,s)}function zT(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)zT(t,e[r],n,i,s);else i=Jl(i)?!!i.capture:!!i,n=Xm(n),t&&t[Zl]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=zp(r,n,i,s),-1<n&&(pf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zp(e,n,i,s)),(n=-1<t?e[t]:null)&&Ym(n))}function Ym(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Zl])$p(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(HT(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qm(e))?($p(n,t),n.h==0&&(n.src=null,e[Gm]=null)):pf(t)}}}function HT(t){return t in Cd?Cd[t]:Cd[t]="on"+t}function b4(t,e){if(t.ba)t=!0;else{e=new ml(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ym(t),t=n.call(i,e)}return t}function Qm(t){return t=t[Gm],t instanceof gf?t:null}var Sd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xm(t){return typeof t=="function"?t:(t[Sd]||(t[Sd]=function(e){return t.handleEvent(e)}),t[Sd])}function Nt(){$s.call(this),this.i=new gf(this),this.P=this,this.I=null}Bt(Nt,$s);Nt.prototype[Zl]=!0;Nt.prototype.removeEventListener=function(t,e,n,i){zT(this,t,e,n,i)};function Ut(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new en(e,t);else if(e instanceof en)e.target=e.target||t;else{var s=e;e=new en(i,t),UT(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Pc(o,i,!0,e)&&s}if(o=e.g=t,s=Pc(o,i,!0,e)&&s,s=Pc(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Pc(o,i,!1,e)&&s}Nt.prototype.M=function(){if(Nt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pf(n[i]);delete t.g[e],t.h--}}this.I=null};Nt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Nt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$p(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Jm=he.JSON.stringify;function w4(){var t=qT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class E4{constructor(){this.h=this.g=null}add(e,n){const i=jT.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var jT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new I4,t=>t.reset());class I4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function T4(t){he.setTimeout(()=>{throw t},0)}function WT(t,e){Hp||x4(),jp||(Hp(),jp=!0),qT.add(t,e)}var Hp;function x4(){var t=he.Promise.resolve(void 0);Hp=function(){t.then(C4)}}var jp=!1,qT=new E4;function C4(){for(var t;t=w4();){try{t.h.call(t.g)}catch(n){T4(n)}var e=jT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jp=!1}function mf(t,e){Nt.call(this),this.h=t||1,this.g=e||he,this.j=Zt(this.lb,this),this.l=Date.now()}Bt(mf,Nt);Q=mf.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ut(this,"tick"),this.ca&&(Zm(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){mf.X.M.call(this),Zm(this),delete this.g};function e_(t,e,n){if(typeof t=="function")n&&(t=Zt(t,n));else if(t&&typeof t.handleEvent=="function")t=Zt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:he.setTimeout(t,e||0)}function KT(t){t.g=e_(()=>{t.g=null,t.i&&(t.i=!1,KT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class S4 extends $s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KT(this)}M(){super.M(),this.g&&(he.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _l(t){$s.call(this),this.h=t,this.g={}}Bt(_l,$s);var I0=[];function GT(t,e,n,i){Array.isArray(n)||(n&&(I0[0]=n.toString()),n=I0);for(var s=0;s<n.length;s++){var r=VT(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function YT(t){Km(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ym(e)},t),t.g={}}_l.prototype.M=function(){_l.X.M.call(this),YT(this)};_l.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _f(){this.g=!0}_f.prototype.Aa=function(){this.g=!1};function k4(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function A4(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function so(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+D4(t,n)+(i?" "+i:"")})}function R4(t,e){t.info(function(){return"TIMEOUT: "+e})}_f.prototype.info=function(){};function D4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Jm(n)}catch{return e}}var $r={},T0=null;function yf(){return T0=T0||new Nt}$r.Pa="serverreachability";function QT(t){en.call(this,$r.Pa,t)}Bt(QT,en);function yl(t){const e=yf();Ut(e,new QT(e))}$r.STAT_EVENT="statevent";function XT(t,e){en.call(this,$r.STAT_EVENT,t),this.stat=e}Bt(XT,en);function ln(t){const e=yf();Ut(e,new XT(e,t))}$r.Qa="timingevent";function JT(t,e){en.call(this,$r.Qa,t),this.size=e}Bt(JT,en);function ec(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return he.setTimeout(function(){t()},e)}var vf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ZT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function t_(){}t_.prototype.h=null;function x0(t){return t.h||(t.h=t.i())}function ex(){}var tc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function n_(){en.call(this,"d")}Bt(n_,en);function i_(){en.call(this,"c")}Bt(i_,en);var Wp;function bf(){}Bt(bf,t_);bf.prototype.g=function(){return new XMLHttpRequest};bf.prototype.i=function(){return{}};Wp=new bf;function nc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new _l(this),this.O=O4,t=Vp?125:void 0,this.T=new mf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tx}function tx(){this.i=null,this.g="",this.h=!1}var O4=45e3,qp={},oh={};Q=nc.prototype;Q.setTimeout=function(t){this.O=t};function Kp(t,e,n){t.K=1,t.v=Ef(Ki(e)),t.s=n,t.P=!0,nx(t,null)}function nx(t,e){t.F=Date.now(),ic(t),t.A=Ki(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ux(n.i,"t",i),t.C=0,n=t.l.H,t.h=new tx,t.g=Dx(t.l,n?e:null,!t.s),0<t.N&&(t.L=new S4(Zt(t.La,t,t.g),t.N)),GT(t.S,t.g,"readystatechange",t.ib),e=t.H?FT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yl(),k4(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&Ui(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const u=Ui(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vp||this.g&&(this.h.h||this.g.fa()||A0(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?yl(3):yl(2)),wf(this);var n=this.g.aa();this.Y=n;t:if(ix(this)){var i=A0(this.g);t="";var s=i.length,r=Ui(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Ba(this);var o="";break t}this.h.i=new he.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,A4(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sh(a)){var c=a;break t}}c=null}if(n=c)so(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gp(this,n);else{this.i=!1,this.o=3,ln(12),lr(this),Ba(this);break e}}this.P?(sx(this,u,o),Vp&&this.i&&u==3&&(GT(this.S,this.T,"tick",this.hb),this.T.start())):(so(this.j,this.m,o,null),Gp(this,o)),u==4&&lr(this),this.i&&!this.I&&(u==4?Sx(this.l,this):(this.i=!1,ic(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ln(12)):(this.o=0,ln(13)),lr(this),Ba(this)}}}catch{}finally{}};function ix(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function sx(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=M4(t,n),s==oh){e==4&&(t.o=4,ln(14),i=!1),so(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qp){t.o=4,ln(15),so(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else so(t.j,t.m,s,null),Gp(t,s);ix(t)&&s!=oh&&s!=qp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ln(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),u_(e),e.K=!0,ln(11))):(so(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Ba(t))}Q.hb=function(){if(this.g){var t=Ui(this.g),e=this.g.fa();this.C<e.length&&(wf(this),sx(this,t,e),this.i&&t!=4&&ic(this))}};function M4(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?oh:(n=Number(e.substring(n,i)),isNaN(n)?qp:(i+=1,i+n>e.length?oh:(e=e.substr(i,n),t.C=i+n,e)))}Q.cancel=function(){this.I=!0,lr(this)};function ic(t){t.V=Date.now()+t.O,rx(t,t.O)}function rx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ec(Zt(t.gb,t),e)}function wf(t){t.B&&(he.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(R4(this.j,this.A),this.K!=2&&(yl(),ln(17)),lr(this),this.o=2,Ba(this)):rx(this,this.V-t)};function Ba(t){t.l.G==0||t.I||Sx(t.l,t)}function lr(t){wf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zm(t.T),YT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yp(n.h,t))){if(!t.J&&Yp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ch(n),xf(n);else break e;c_(n),ln(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=ec(Zt(n.cb,n),6e3));if(1>=dx(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else cr(n,11)}else if((t.J||n.g==t)&&ch(n),!sh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(s_(r,r.h),r.h=null))}if(i.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,at(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Rx(i,i.H?i.ka:null,i.V),o.J){px(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(wf(a),ic(a)),i.g=o}else xx(i);0<n.i.length&&Cf(n)}else c[0]!="stop"&&c[0]!="close"||cr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?cr(n,7):l_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}yl(4)}catch{}}function P4(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ff(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function N4(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ff(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ox(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ff(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=N4(t),i=P4(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var ax=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function L4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function vr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vr){this.h=e!==void 0?e:t.h,ah(this,t.j),this.s=t.s,this.g=t.g,lh(this,t.m),this.l=t.l,e=t.i;var n=new vl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),C0(this,n),this.o=t.o}else t&&(n=String(t).match(ax))?(this.h=!!e,ah(this,n[1]||"",!0),this.s=Ia(n[2]||""),this.g=Ia(n[3]||"",!0),lh(this,n[4]),this.l=Ia(n[5]||"",!0),C0(this,n[6]||"",!0),this.o=Ia(n[7]||"")):(this.h=!!e,this.i=new vl(null,this.h))}vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ta(e,S0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ta(e,S0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ta(n,n.charAt(0)=="/"?V4:U4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ta(n,$4)),t.join("")};function Ki(t){return new vr(t)}function ah(t,e,n){t.j=n?Ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function C0(t,e,n){e instanceof vl?(t.i=e,z4(t.i,t.h)):(n||(e=Ta(e,B4)),t.i=new vl(e,t.h))}function at(t,e,n){t.i.set(e,n)}function Ef(t){return at(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,F4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function F4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var S0=/[#\/\?@]/g,U4=/[#\?:]/g,V4=/[#\?]/g,B4=/[#\?@]/g,$4=/#/g;function vl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zs(t){t.g||(t.g=new Map,t.h=0,t.i&&L4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=vl.prototype;Q.add=function(t,e){zs(this),this.i=null,t=Zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lx(t,e){zs(t),e=Zo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cx(t,e){return zs(t),e=Zo(t,e),t.g.has(e)}Q.forEach=function(t,e){zs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};Q.oa=function(){zs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};Q.W=function(t){zs(this);let e=[];if(typeof t=="string")cx(this,t)&&(e=e.concat(this.g.get(Zo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return zs(this),this.i=null,t=Zo(this,t),cx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ux(t,e,n){lx(t,e),0<n.length&&(t.i=null,t.g.set(Zo(t,e),Wm(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function z4(t,e){e&&!t.j&&(zs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(lx(this,i),ux(this,s,n))},t)),t.j=e}var H4=class{constructor(e,n){this.h=e,this.g=n}};function hx(t){this.l=t||j4,he.PerformanceNavigationTiming?(t=he.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(he.g&&he.g.Ga&&he.g.Ga()&&he.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var j4=10;function fx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dx(t){return t.h?1:t.g?t.g.size:0}function Yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function s_(t,e){t.g?t.g.add(e):t.h=e}function px(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hx.prototype.cancel=function(){if(this.i=gx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gx(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wm(t.i)}function r_(){}r_.prototype.stringify=function(t){return he.JSON.stringify(t,void 0)};r_.prototype.parse=function(t){return he.JSON.parse(t,void 0)};function W4(){this.g=new r_}function q4(t,e,n){const i=n||"";try{ox(t,function(s,r){let o=s;Jl(s)&&(o=Jm(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function K4(t,e){const n=new _f;if(he.Image){const i=new Image;i.onload=Mc(Nc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Mc(Nc,n,i,"TestLoadImage: error",!1,e),i.onabort=Mc(Nc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Mc(Nc,n,i,"TestLoadImage: timeout",!1,e),he.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Nc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function sc(t){this.l=t.ac||null,this.j=t.jb||!1}Bt(sc,t_);sc.prototype.g=function(){return new If(this.l,this.j)};sc.prototype.i=function(t){return function(){return t}}({});function If(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=o_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bt(If,Nt);var o_=0;Q=If.prototype;Q.open=function(t,e){if(this.readyState!=o_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bl(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||he).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=o_};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bl(this)),this.g&&(this.readyState=3,bl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof he.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mx(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mx(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rc(this):bl(this),this.readyState==3&&mx(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,rc(this))};Q.Ua=function(t){this.g&&(this.response=t,rc(this))};Q.ga=function(){this.g&&rc(this)};function rc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bl(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(If.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var G4=he.JSON.parse;function pt(t){Nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_x,this.K=this.L=!1}Bt(pt,Nt);var _x="",Y4=/^https?$/i,Q4=["POST","PUT"];Q=pt.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wp.g(),this.C=this.u?x0(this.u):x0(Wp),this.g.onreadystatechange=Zt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){k0(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=he.FormData&&t instanceof he.FormData,!(0<=MT(Q4,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bx(this),0<this.B&&((this.K=X4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zt(this.qa,this)):this.A=e_(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){k0(this,r)}};function X4(t){return Ao&&p4()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof jm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function k0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yx(t),Tf(t)}function yx(t){t.D||(t.D=!0,Ut(t,"complete"),Ut(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ut(this,"complete"),Ut(this,"abort"),Tf(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tf(this,!0)),pt.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?vx(this):this.fb())};Q.fb=function(){vx(this)};function vx(t){if(t.h&&typeof jm<"u"&&(!t.C[1]||Ui(t)!=4||t.aa()!=2)){if(t.v&&Ui(t)==4)e_(t.Ha,0,t);else if(Ut(t,"readystatechange"),Ui(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(ax)[1]||null;if(!s&&he.self&&he.self.location){var r=he.self.location.protocol;s=r.substr(0,r.length-1)}i=!Y4.test(s?s.toLowerCase():"")}n=i}if(n)Ut(t,"complete"),Ut(t,"success");else{t.m=6;try{var o=2<Ui(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",yx(t)}}finally{Tf(t)}}}}function Tf(t,e){if(t.g){bx(t);const n=t.g,i=t.C[0]?ih:null;t.g=null,t.C=null,e||Ut(t,"ready");try{n.onreadystatechange=i}catch{}}}function bx(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(he.clearTimeout(t.A),t.A=null)}function Ui(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<Ui(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),G4(e)}};function A0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _x:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wx(t){let e="";return Km(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function a_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=wx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):at(t,e,n))}function pa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ex(t){this.Ca=0,this.i=[],this.j=new _f,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pa("baseRetryDelayMs",5e3,t),this.bb=pa("retryDelaySeedMs",1e4,t),this.$a=pa("forwardChannelMaxRetries",2,t),this.ta=pa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hx(t&&t.concurrentRequestLimit),this.Fa=new W4,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=Ex.prototype;Q.ma=8;Q.G=1;function l_(t){if(Ix(t),t.G==3){var e=t.U++,n=Ki(t.F);at(n,"SID",t.I),at(n,"RID",e),at(n,"TYPE","terminate"),oc(t,n),e=new nc(t,t.j,e,void 0),e.K=2,e.v=Ef(Ki(n)),n=!1,he.navigator&&he.navigator.sendBeacon&&(n=he.navigator.sendBeacon(e.v.toString(),"")),!n&&he.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dx(e.l,null),e.g.da(e.v)),e.F=Date.now(),ic(e)}Ax(t)}function xf(t){t.g&&(u_(t),t.g.cancel(),t.g=null)}function Ix(t){xf(t),t.u&&(he.clearTimeout(t.u),t.u=null),ch(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&he.clearTimeout(t.m),t.m=null)}function Cf(t){fx(t.h)||t.m||(t.m=!0,WT(t.Ja,t),t.C=0)}function J4(t,e){return dx(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ec(Zt(t.Ja,t,e),kx(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new nc(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=FT(r),UT(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Tx(this,s,e),n=Ki(this.F),at(n,"RID",t),at(n,"CVER",22),this.D&&at(n,"X-HTTP-Session-Id",this.D),oc(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(wx(r)))+"&"+e:this.o&&a_(n,this.o,r)),s_(this.h,s),this.Ya&&at(n,"TYPE","init"),this.O?(at(n,"$req",e),at(n,"SID","null"),s.Z=!0,Kp(s,n,null)):Kp(s,n,e),this.G=2}}else this.G==3&&(t?R0(this,t):this.i.length==0||fx(this.h)||R0(this))};function R0(t,e){var n;e?n=e.m:n=t.U++;const i=Ki(t.F);at(i,"SID",t.I),at(i,"RID",n),at(i,"AID",t.T),oc(t,i),t.o&&t.s&&a_(i,t.o,t.s),n=new nc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Tx(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),s_(t.h,n),Kp(n,i,e)}function oc(t,e){t.ia&&Km(t.ia,function(n,i){at(e,i,n)}),t.l&&ox({},function(n,i){at(e,i,n)})}function Tx(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Zt(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{q4(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function xx(t){t.g||t.u||(t.Z=1,WT(t.Ia,t),t.A=0)}function c_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ec(Zt(t.Ia,t),kx(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,Cx(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ec(Zt(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ln(10),xf(this),Cx(this))};function u_(t){t.B!=null&&(he.clearTimeout(t.B),t.B=null)}function Cx(t){t.g=new nc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ki(t.sa);at(e,"RID","rpc"),at(e,"SID",t.I),at(e,"CI",t.L?"0":"1"),at(e,"AID",t.T),at(e,"TYPE","xmlhttp"),oc(t,e),t.o&&t.s&&a_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ef(Ki(e)),n.s=null,n.P=!0,nx(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,xf(this),c_(this),ln(19))};function ch(t){t.v!=null&&(he.clearTimeout(t.v),t.v=null)}function Sx(t,e){var n=null;if(t.g==e){ch(t),u_(t),t.g=null;var i=2}else if(Yp(t.h,e))n=e.D,px(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=yf(),Ut(i,new JT(i,n)),Cf(t)}else xx(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&J4(t,e)||i==2&&c_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function kx(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Zt(t.kb,t);n||(n=new vr("//www.google.com/images/cleardot.gif"),he.location&&he.location.protocol=="http"||ah(n,"https"),Ef(n)),K4(n.toString(),i)}else ln(2);t.G=0,t.l&&t.l.va(e),Ax(t),Ix(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function Ax(t){if(t.G=0,t.la=[],t.l){const e=gx(t.h);(e.length!=0||t.i.length!=0)&&(v0(t.la,e),v0(t.la,t.i),t.h.i.length=0,Wm(t.i),t.i.length=0),t.l.ua()}}function Rx(t,e,n){var i=n instanceof vr?Ki(n):new vr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),lh(i,i.m);else{var s=he.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new vr(null,void 0);i&&ah(r,i),e&&(r.g=e),s&&lh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&at(i,n,e),at(i,"VER",t.ma),oc(t,i),i}function Dx(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new pt(new sc({jb:!0})):new pt(t.ra),e.Ka(t.H),e}function Ox(){}Q=Ox.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function uh(){if(Ao&&!(10<=Number(g4)))throw Error("Environmental error: no available transport.")}uh.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){Nt.call(this),this.g=new Ex(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!sh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ea(this)}Bt(Dn,Nt);Dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ln(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Rx(t,null,t.V),Cf(t)};Dn.prototype.close=function(){l_(this.g)};Dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jm(t),t=n);e.i.push(new H4(e.ab++,t)),e.G==3&&Cf(e)};Dn.prototype.M=function(){this.g.l=null,delete this.j,l_(this.g),delete this.g,Dn.X.M.call(this)};function Mx(t){n_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Bt(Mx,n_);function Px(){i_.call(this),this.status=1}Bt(Px,i_);function ea(t){this.g=t}Bt(ea,Ox);ea.prototype.xa=function(){Ut(this.g,"a")};ea.prototype.wa=function(t){Ut(this.g,new Mx(t))};ea.prototype.va=function(t){Ut(this.g,new Px)};ea.prototype.ua=function(){Ut(this.g,"b")};uh.prototype.createWebChannel=uh.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;vf.NO_ERROR=0;vf.TIMEOUT=8;vf.HTTP_ERROR=6;ZT.COMPLETE="complete";ex.EventType=tc;tc.OPEN="a";tc.CLOSE="b";tc.ERROR="c";tc.MESSAGE="d";Nt.prototype.listen=Nt.prototype.N;pt.prototype.listenOnce=pt.prototype.O;pt.prototype.getLastError=pt.prototype.Oa;pt.prototype.getLastErrorCode=pt.prototype.Ea;pt.prototype.getStatus=pt.prototype.aa;pt.prototype.getResponseJson=pt.prototype.Sa;pt.prototype.getResponseText=pt.prototype.fa;pt.prototype.send=pt.prototype.da;pt.prototype.setWithCredentials=pt.prototype.Ka;var Z4=function(){return new uh},eL=function(){return yf()},kd=vf,tL=ZT,nL=$r,D0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},iL=sc,Lc=ex,sL=pt;const O0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new $l("@firebase/firestore");function M0(){return Ar.logLevel}function X(t,...e){if(Ar.logLevel<=Ue.DEBUG){const n=e.map(h_);Ar.debug(`Firestore (${ta}): ${t}`,...n)}}function Gi(t,...e){if(Ar.logLevel<=Ue.ERROR){const n=e.map(h_);Ar.error(`Firestore (${ta}): ${t}`,...n)}}function hh(t,...e){if(Ar.logLevel<=Ue.WARN){const n=e.map(h_);Ar.warn(`Firestore (${ta}): ${t}`,...n)}}function h_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+t;throw Gi(e),new Error(e)}function rt(t,e){t||ce()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class oL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aL{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(rt(typeof i.accessToken=="string"),new Nx(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new qt(e)}}class lL{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class cL{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new lL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string"),this.T=n.token,new uL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=fL(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function $e(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new wt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new wt(0,0))}static max(){return new pe(new wt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,i){n===void 0?n=0:n>e.length&&ce(),i===void 0?i=e.length-n:i>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends wl{construct(e,n,i){return new nt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const dL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends wl{construct(e,n,i){return new Xt(e,n,i)}static isValidIdentifier(e){return dL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(n)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(nt.fromString(e))}static fromName(e){return new ne(nt.fromString(e).popFirst(5))}static empty(){return new ne(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new nt(e.slice()))}}function pL(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(i===1e9?new wt(n+1,0):new wt(n,i));return new Os(s,ne.empty(),e)}function gL(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Os(pe.min(),ne.empty(),-1)}static max(){return new Os(pe.max(),ne.empty(),-1)}}function mL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==_L)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,i)=>{n(e)})}static reject(e){return new L((n,i)=>{i(e)})}static waitFor(e){return new L((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new L((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new L((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function lc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class f_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}f_.ct=-1;function Sf(t){return t==null}function fh(t){return t===0&&1/t==-1/0}function vL(t){return typeof t=="number"&&Number.isInteger(t)&&!fh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new Ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Lt.RED,this.left=s??Lt.EMPTY,this.right=r??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Lt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new N0(this.data.getIterator())}getIteratorFrom(e){return new N0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class N0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Tt(Xt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class bL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bL("Invalid base64 string: "+s):s}}(e);return new sn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const wL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(t){if(rt(!!t),typeof t=="string"){let e=0;const n=wL.exec(t);if(rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Do(t){return typeof t=="string"?sn.fromBase64String(t):sn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vx(t){const e=t.mapValue.fields.__previous_value__;return Ux(e)?Vx(e):e}function El(t){const e=Ms(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Il{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ux(t)?4:IL(t)?9007199254740991:10:ce()}function Ei(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return El(t).isEqual(El(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ms(i.timestampValue),o=Ms(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Do(i.bytesValue).isEqual(Do(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return vt(i.geoPointValue.latitude)===vt(s.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return vt(i.integerValue)===vt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=vt(i.doubleValue),o=vt(s.doubleValue);return r===o?fh(r)===fh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],Ei);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(P0(r)!==P0(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ei(r[a],o[a])))return!1;return!0}(t,e);default:return ce()}}function Tl(t,e){return(t.values||[]).find(n=>Ei(n,e))!==void 0}function Oo(t,e){if(t===e)return 0;const n=Rr(t),i=Rr(e);if(n!==i)return $e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=vt(s.integerValue||s.doubleValue),a=vt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return L0(t.timestampValue,e.timestampValue);case 4:return L0(El(t),El(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Do(s),a=Do(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=$e(o[l],a[l]);if(c!==0)return c}return $e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=$e(vt(s.latitude),vt(r.latitude));return o!==0?o:$e(vt(s.longitude),vt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Oo(o[l],a[l]);if(c)return c}return $e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Uc.mapValue&&r===Uc.mapValue)return 0;if(s===Uc.mapValue)return 1;if(r===Uc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=$e(a[u],c[u]);if(h!==0)return h;const f=Oo(o[a[u]],l[c[u]]);if(f!==0)return f}return $e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ce()}}function L0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=Ms(t),i=Ms(e),s=$e(n.seconds,i.seconds);return s!==0?s:$e(n.nanos,i.nanos)}function Mo(t){return Qp(t)}function Qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ms(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Do(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Qp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Qp(i.fields[a])}`;return r+"}"}(t.mapValue):ce();var e,n}function F0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xp(t){return!!t&&"integerValue"in t}function d_(t){return!!t&&"arrayValue"in t}function U0(t){return!!t&&"nullValue"in t}function V0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eu(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=$a(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=Xt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=$a(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Eu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){zr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new gn($a(this.value))}}function Bx(t){const e=[];return zr(t.fields,(n,i)=>{const s=new Xt([n]);if(Eu(i)){const r=Bx(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Yt(e,0,pe.min(),pe.min(),pe.min(),gn.empty(),0)}static newFoundDocument(e,n,i,s){return new Yt(e,1,n,pe.min(),i,s,0)}static newNoDocument(e,n){return new Yt(e,2,n,pe.min(),pe.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,pe.min(),pe.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dh{constructor(e,n){this.position=e,this.inclusive=n}}function B0(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),n.key):i=Oo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function $0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ei(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class za{constructor(e,n="asc"){this.field=e,this.dir=n}}function TL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $x{}class bt extends $x{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new CL(e,n,i):n==="array-contains"?new AL(e,i):n==="in"?new RL(e,i):n==="not-in"?new DL(e,i):n==="array-contains-any"?new OL(e,i):new bt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new SL(e,i):new kL(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oo(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ni extends $x{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ni(e,n)}matches(e){return zx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zx(t){return t.op==="and"}function Hx(t){return xL(t)&&zx(t)}function xL(t){for(const e of t.filters)if(e instanceof ni)return!1;return!0}function Jp(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+Mo(t.value);if(Hx(t))return t.filters.map(e=>Jp(e)).join(",");{const e=t.filters.map(n=>Jp(n)).join(",");return`${t.op}(${e})`}}function jx(t,e){return t instanceof bt?function(n,i){return i instanceof bt&&n.op===i.op&&n.field.isEqual(i.field)&&Ei(n.value,i.value)}(t,e):t instanceof ni?function(n,i){return i instanceof ni&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&jx(r,i.filters[o]),!0):!1}(t,e):void ce()}function Wx(t){return t instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Mo(e.value)}`}(t):t instanceof ni?function(e){return e.op.toString()+" {"+e.getFilters().map(Wx).join(" ,")+"}"}(t):"Filter"}class CL extends bt{constructor(e,n,i){super(e,n,i),this.key=ne.fromName(i.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class SL extends bt{constructor(e,n){super(e,"in",n),this.keys=qx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kL extends bt{constructor(e,n){super(e,"not-in",n),this.keys=qx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ne.fromName(i.referenceValue))}class AL extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return d_(n)&&Tl(n.arrayValue,this.value)}}class RL extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tl(this.value.arrayValue,n)}}class DL extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tl(this.value.arrayValue,n)}}class OL extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!d_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Tl(this.value.arrayValue,i))}}/**
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
 */class ML{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function z0(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ML(t,e,n,i,s,r,o)}function p_(t){const e=me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Jp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Sf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),e.ft=n}return e.ft}function g_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$0(t.startAt,e.startAt)&&$0(t.endAt,e.endAt)}function Zp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function PL(t,e,n,i,s,r,o,a){return new cc(t,e,n,i,s,r,o,a)}function kf(t){return new cc(t)}function H0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function m_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gx(t){return t.collectionGroup!==null}function go(t){const e=me(t);if(e.dt===null){e.dt=[];const n=m_(e),i=Kx(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new za(n)),e.dt.push(new za(Xt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new za(Xt.keyField(),r))}}}return e.dt}function Yi(t){const e=me(t);if(!e.wt)if(e.limitType==="F")e.wt=z0(e.path,e.collectionGroup,go(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of go(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new za(r.field,o))}const i=e.endAt?new dh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new dh(e.startAt.position,e.startAt.inclusive):null;e.wt=z0(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function eg(t,e){e.getFirstInequalityField(),m_(t);const n=t.filters.concat([e]);return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tg(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Af(t,e){return g_(Yi(t),Yi(e))&&t.limitType===e.limitType}function Yx(t){return`${p_(Yi(t))}|lt:${t.limitType}`}function ng(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Wx(i)).join(", ")}]`),Sf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),`Target(${n})`}(Yi(t))}; limitType=${t.limitType})`}function Rf(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ne.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of go(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=B0(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,go(n),i)||n.endAt&&!function(s,r,o){const a=B0(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,go(n),i))}(t,e)}function NL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qx(t){return(e,n)=>{let i=!1;for(const s of go(t)){const r=LL(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function LL(t,e,n){const i=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Oo(a,l):ce()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Fx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=new Ct(ne.comparator);function Qi(){return FL}const Xx=new Ct(ne.comparator);function xa(...t){let e=Xx;for(const n of t)e=e.insert(n.key,n);return e}function Jx(t){let e=Xx;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ur(){return Ha()}function Zx(){return Ha()}function Ha(){return new na(t=>t.toString(),(t,e)=>t.isEqual(e))}const UL=new Ct(ne.comparator),VL=new Tt(ne.comparator);function Ae(...t){let e=VL;for(const n of t)e=e.add(n);return e}const BL=new Tt($e);function eC(){return BL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function nC(t){return{integerValue:""+t}}function $L(t,e){return vL(e)?nC(e):tC(t,e)}/**
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
 */class Df{constructor(){this._=void 0}}function zL(t,e,n){return t instanceof ph?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof xl?sC(t,e):t instanceof Cl?rC(t,e):function(i,s){const r=iC(i,s),o=j0(r)+j0(i._t);return Xp(r)&&Xp(i._t)?nC(o):tC(i.serializer,o)}(t,e)}function HL(t,e,n){return t instanceof xl?sC(t,e):t instanceof Cl?rC(t,e):n}function iC(t,e){return t instanceof gh?Xp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class ph extends Df{}class xl extends Df{constructor(e){super(),this.elements=e}}function sC(t,e){const n=oC(e);for(const i of t.elements)n.some(s=>Ei(s,i))||n.push(i);return{arrayValue:{values:n}}}class Cl extends Df{constructor(e){super(),this.elements=e}}function rC(t,e){let n=oC(e);for(const i of t.elements)n=n.filter(s=>!Ei(s,i));return{arrayValue:{values:n}}}class gh extends Df{constructor(e,n){super(),this.serializer=e,this._t=n}}function j0(t){return vt(t.integerValue||t.doubleValue)}function oC(t){return d_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jL(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof xl&&i instanceof xl||n instanceof Cl&&i instanceof Cl?Ro(n.elements,i.elements,Ei):n instanceof gh&&i instanceof gh?Ei(n._t,i._t):n instanceof ph&&i instanceof ph}(t.transform,e.transform)}class WL{constructor(e,n){this.version=e,this.transformResults=n}}class ei{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ei}static exists(e){return new ei(void 0,e)}static updateTime(e){return new ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Of{}function aC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new __(t.key,ei.none()):new uc(t.key,t.data,ei.none());{const n=t.data,i=gn.empty();let s=new Tt(Xt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Hs(t.key,i,new Sn(s.toArray()),ei.none())}}function qL(t,e,n){t instanceof uc?function(i,s,r){const o=i.value.clone(),a=q0(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(i,s,r){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=q0(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(lC(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,i){return t instanceof uc?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=s.value.clone(),c=K0(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Hs?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=K0(s.fieldTransforms,a,r),c=r.data;return c.setAll(lC(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Iu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function KL(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=iC(i.transform,s||null);r!=null&&(n===null&&(n=gn.empty()),n.set(i.field,r))}return n||null}function W0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ro(n,i,(s,r)=>jL(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uc extends Of{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hs extends Of{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function q0(t,e,n){const i=new Map;rt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,HL(o,a,n[s]))}return i}function K0(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,zL(r,o,e))}return i}class __ extends Of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GL extends Of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&qL(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Zx();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=aC(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,i)=>W0(n,i))&&Ro(this.baseMutations,e.baseMutations,(n,i)=>W0(n,i))}}class y_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){rt(e.mutations.length===i.length);let s=UL;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new y_(e,n,i,s)}}/**
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
 */class QL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Oe;function JL(t){switch(t){default:return ce();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function cC(t){if(t===void 0)return Gi("GRPC error has no .code"),O.UNKNOWN;switch(t){case yt.OK:return O.OK;case yt.CANCELLED:return O.CANCELLED;case yt.UNKNOWN:return O.UNKNOWN;case yt.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case yt.INTERNAL:return O.INTERNAL;case yt.UNAVAILABLE:return O.UNAVAILABLE;case yt.UNAUTHENTICATED:return O.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case yt.NOT_FOUND:return O.NOT_FOUND;case yt.ALREADY_EXISTS:return O.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return O.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case yt.ABORTED:return O.ABORTED;case yt.OUT_OF_RANGE:return O.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return O.UNIMPLEMENTED;case yt.DATA_LOSS:return O.DATA_LOSS;default:return ce()}}(Oe=yt||(yt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class v_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vc}static getOrCreateInstance(){return Vc===null&&(Vc=new v_),Vc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Vc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,hc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Mf(pe.min(),s,eC(),Qi(),Ae())}}class hc{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new hc(i,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class uC{constructor(e,n){this.targetId=e,this.Et=n}}class hC{constructor(e,n,i=sn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class G0{constructor(){this.At=0,this.Rt=Q0(),this.vt=sn.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Ae(),n=Ae(),i=Ae();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ce()}}),new hc(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Q0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ZL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Qi(),this.qt=Y0(),this.Ut=new Tt($e)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(Zp(o))if(s===0){const a=new ne(o.path);this.Qt(i,a,Yt.newNoDocument(a,pe.min()))}else rt(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=v_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Zp(a.target)){const l=new ne(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Yt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=Ae();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Mf(e,n,this.Ut,this.Lt,i);return this.Lt=Qi(),this.qt=Y0(),this.Ut=new Tt($e),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new G0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Tt($e),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new G0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Y0(){return new Ct(ne.comparator)}function Q0(){return new Ct(ne.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),t6=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),n6=(()=>({and:"AND",or:"OR"}))();class i6{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function s6(t,e){return mh(t,e.toTimestamp())}function _i(t){return rt(!!t),pe.fromTimestamp(function(e){const n=Ms(e);return new wt(n.seconds,n.nanos)}(t))}function b_(t,e){return function(n){return new nt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dC(t){const e=nt.fromString(t);return rt(_C(e)),e}function ig(t,e){return b_(t.databaseId,e.path)}function Ad(t,e){const n=dC(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(pC(n))}function sg(t,e){return b_(t.databaseId,e)}function r6(t){const e=dC(t);return e.length===4?nt.emptyPath():pC(e)}function rg(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pC(t){return rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X0(t,e,n){return{name:ig(t,e),fields:n.value.mapValue.fields}}function o6(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(rt(c===void 0||typeof c=="string"),sn.fromBase64String(c||"")):(rt(c===void 0||c instanceof Uint8Array),sn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:cC(l.code);return new K(c,l.message||"")}(o);n=new hC(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ad(t,i.document.name),r=_i(i.document.updateTime),o=i.document.createTime?_i(i.document.createTime):pe.min(),a=new gn({mapValue:{fields:i.document.fields}}),l=Yt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Tu(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ad(t,i.document),r=i.readTime?_i(i.readTime):pe.min(),o=Yt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ad(t,i.document),r=i.removedTargetIds||[];n=new Tu([],r,s,null)}else{if(!("filter"in e))return ce();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new XL(s),o=i.targetId;n=new uC(o,r)}}return n}function a6(t,e){let n;if(e instanceof uc)n={update:X0(t,e.key,e.value)};else if(e instanceof __)n={delete:ig(t,e.key)};else if(e instanceof Hs)n={update:X0(t,e.key,e.data),updateMask:m6(e.fieldMask)};else{if(!(e instanceof GL))return ce();n={verify:ig(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof ph)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xl)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw ce()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:s6(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ce()}(t,e.precondition)),n}function l6(t,e){return t&&t.length>0?(rt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?_i(i.updateTime):_i(s);return r.isEqual(pe.min())&&(r=_i(s)),new WL(r,i.transformResults||[])}(n,e))):[]}function c6(t,e){return{documents:[sg(t,e.path)]}}function u6(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=sg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return mC(ni.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Zr(u.field),direction:d6(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Sf(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function h6(t){let e=r6(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){rt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=gC(u);return h instanceof ni&&Hx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new za(eo(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Sf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new dh(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new dh(f,h)}(n.endAt)),PL(e,s,o,r,a,"F",l,c)}function f6(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ce()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=eo(e.unaryFilter.field);return bt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=eo(e.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=eo(e.unaryFilter.field);return bt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=eo(e.unaryFilter.field);return bt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(e){return bt.create(eo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ni.create(e.compositeFilter.filters.map(n=>gC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ce()}}(e.compositeFilter.op))}(t):ce()}function d6(t){return e6[t]}function p6(t){return t6[t]}function g6(t){return n6[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function eo(t){return Xt.fromServerFormat(t.fieldPath)}function mC(t){return t instanceof bt?function(e){if(e.op==="=="){if(V0(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(U0(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(V0(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(U0(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:p6(e.op),value:e.value}}}(t):t instanceof ni?function(e){const n=e.getFilters().map(i=>mC(i));return n.length===1?n[0]:{compositeFilter:{op:g6(e.op),filters:n}}}(t):ce()}function m6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _C(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,i,s,r=pe.min(),o=pe.min(),a=sn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e){this.se=e}}function y6(t){const e=h6({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tg(e,e.limit,"L"):e}/**
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
 */class v6{constructor(){this.He=new b6}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Os.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class b6{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Tt(nt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Tt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Po(0)}static bn(){return new Po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(){this.changes=new na(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class E6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ja(i.mutation,s,Sn.empty(),wt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ae()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ae()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=xa();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ae()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Qi();const o=Ha(),a=Ha();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ja(u.mutation,c,u.mutation.getFieldMask(),wt.now())):o.set(c.key,Sn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new E6(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ha();let s=new Ct((o,a)=>o-a),r=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Sn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||Ae()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Zx();u.forEach(f=>{if(!r.has(f)){const d=aC(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):L.resolve(ur());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ae())).next(u=>({batchId:a,changes:Jx(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(i=>{let s=xa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=xa();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(c,u){return new cc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Yt.newInvalidDocument(c)))});let o=xa();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&ja(c.mutation,l,Sn.empty(),wt.now()),Rf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:_i(i.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:y6(i.bundledQuery),readTime:_i(i.readTime)}}(n)),L.resolve()}}/**
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
 */class x6{constructor(){this.overlays=new Ct(ne.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ur();return L.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=ur(),r=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=ur(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ur(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return L.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new QL(n,i));let r=this.ts.get(n);r===void 0&&(r=Ae(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.es=new Tt(Rt.ns),this.ss=new Tt(Rt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new Rt(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new Rt(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new ne(new nt([])),i=new Rt(n,e),s=new Rt(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new ne(new nt([])),i=new Rt(n,e),s=new Rt(n,e+1);let r=Ae();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Rt(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return ne.comparator(e.key,n.key)||$e(e.ds,n.ds)}static rs(e,n){return $e(e.ds,n.ds)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Tt(Rt.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YL(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Rt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Rt(n,0),s=new Rt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Tt($e);return n.forEach(s=>{const r=new Rt(s,0),o=new Rt(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),L.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ne.isDocumentKey(r)||(r=r.child(""));const o=new Rt(new ne(r),0);let a=new Tt($e);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){rt(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return L.forEach(n.mutations,s=>{const r=new Rt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new Rt(n,0),s=this._s.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e){this.Ts=e,this.docs=new Ct(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let i=Qi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Yt.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Qi();const o=n.path,a=new ne(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mL(gL(u),i)<=0||(s.has(u.key)||Rf(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ce()}Es(e,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new k6(this)}getSize(e){return L.resolve(this.size)}}class k6 extends w6{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e){this.persistence=e,this.As=new na(n=>p_(n),g_),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Rs=0,this.vs=new w_,this.targetCount=0,this.bs=Po.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Po(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new f_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new A6(this),this.indexManager=new v6,this.remoteDocumentCache=function(i){return new S6(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new _6(n),this.xs=new T6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new C6(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){X("MemoryPersistence","Starting transaction:",e);const s=new D6(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class D6 extends yL{constructor(e){super(),this.currentSequenceNumber=e}}class E_{constructor(e){this.persistence=e,this.$s=new w_,this.Ms=null}static Fs(e){return new E_(e)}get Bs(){if(this.Ms)return this.Ms;throw ce()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,i=>{const s=ne.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,pe.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=Ae(),s=Ae();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new I_(e,n.fromCache,i,s)}}/**
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
 */class O6{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(H0(n))return L.resolve(null);let i=Yi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tg(n,null,"F"),i=Yi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ae(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,tg(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return H0(n)||s.isEqual(pe.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(M0()<=Ue.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ng(n)),this.Fi(e,o,n,pL(s,-1)))})}$i(e,n){let i=new Tt(Qx(e));return n.forEach((s,r)=>{Rf(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return M0()<=Ue.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ng(n)),this.xi.getDocumentsMatchingQuery(e,n,Os.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new Ct($e),this.qi=new na(r=>p_(r),g_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I6(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function P6(t,e,n,i){return new M6(t,e,n,i)}async function yC(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Ae();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function N6(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=L.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const g=l.docVersions.get(d);rt(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Ae();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function vC(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function L6(t,e){const n=me(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(sn.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=Qi(),c=Ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(F6(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(pe.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function F6(t,e,n){let i=Ae(),s=Ae();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Qi();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function U6(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function V6(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,L.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new br(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function og(t,e,n){const i=me(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lc(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function J0(t,e,n){const i=me(t);let s=pe.min(),r=Ae();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=me(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Yi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?r:Ae())).next(a=>(B6(i,NL(e),a),{documents:a,Wi:r})))}function B6(t,e,n){let i=t.Ui.get(e)||pe.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class Z0{constructor(){this.activeTargetIds=eC()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $6{constructor(){this.Br=new Z0,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Z0,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z6{qr(e){}shutdown(){}}/**
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
 */class eb{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bc=null;function Rd(){return Bc===null?Bc=268435456+Math.round(2147483648*Math.random()):Bc++,"0x"+Bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class W6 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Rd(),a=this.ao(e,n);X("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(X("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw hh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ta,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=H6[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Rd();return new Promise((o,a)=>{const l=new sL;l.setWithCredentials(!0),l.listenOnce(tL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case kd.NO_ERROR:const u=l.getResponseJson();X(Ht,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case kd.TIMEOUT:X(Ht,`RPC '${e}' ${r} timed out`),a(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case kd.HTTP_ERROR:const h=l.getStatus();if(X(Ht,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(d.status);a(new K(p,d.message))}else a(new K(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(O.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{X(Ht,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);X(Ht,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Rd(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Z4(),a=eL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new iL({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");X(Ht,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new j6({Wr:g=>{f?X(Ht,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(h||(X(Ht,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),X(Ht,`RPC '${e}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,y=>{try{_(y)}catch(b){setTimeout(()=>{throw b},0)}})};return p(u,Lc.EventType.OPEN,()=>{f||X(Ht,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Lc.EventType.CLOSE,()=>{f||(f=!0,X(Ht,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Lc.EventType.ERROR,g=>{f||(f=!0,hh(Ht,`RPC '${e}' stream ${s} transport errored:`,g),d.so(new K(O.UNAVAILABLE,"The operation could not be completed")))}),p(u,Lc.EventType.MESSAGE,g=>{var m;if(!f){const _=g.data[0];rt(!!_);const y=_,b=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(b){X(Ht,`RPC '${e}' stream ${s} received error:`,b);const w=b.status;let I=function(C){const x=yt[C];if(x!==void 0)return cC(x)}(w),D=b.message;I===void 0&&(I=O.INTERNAL,D="Unknown error status: "+w+" with message "+b.message),f=!0,d.so(new K(I,D)),u.close()}else X(Ht,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,nL.STAT_EVENT,g=>{g.stat===D0.PROXY?X(Ht,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===D0.NOPROXY&&X(Ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){return new i6(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bC(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Gi(n.toString()),Gi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new K(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class q6 extends wC{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=o6(this.serializer,e),i=function(s){if(!("targetChange"in s))return pe.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?pe.min():r.readTime?_i(r.readTime):pe.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=rg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=Zp(a)?{documents:c6(s,a)}:{query:u6(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fC(s,r.resumeToken):r.snapshotVersion.compareTo(pe.min())>0&&(o.readTime=mh(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=f6(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=rg(this.serializer),n.removeTarget=e,this.Fo(n)}}class K6 extends wC{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=l6(e.writeResults,e.commitTime),i=_i(e.commitTime);return this.listener.Zo(i,n)}return rt(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=rg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>a6(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(O.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class Y6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Gi(n),this.ru=!1):X("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q6{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{Hr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l.du.add(4),await fc(l),l.mu.set("Unknown"),l.du.delete(4),await Nf(l)}(this))})}),this.mu=new Y6(i,s)}}async function Nf(t){if(Hr(t))for(const e of t.wu)await e(!0)}async function fc(t){for(const e of t.wu)await e(!1)}function EC(t,e){const n=me(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),C_(n)?x_(n):ia(n).No()&&T_(n,e))}function IC(t,e){const n=me(t),i=ia(n);n.fu.delete(e),i.No()&&TC(n,e),n.fu.size===0&&(i.No()?i.$o():Hr(n)&&n.mu.set("Unknown"))}function T_(t,e){t.gu.Ot(e.targetId),ia(t).jo(e)}function TC(t,e){t.gu.Ot(e),ia(t).Wo(e)}function x_(t){t.gu=new ZL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ia(t).start(),t.mu.ou()}function C_(t){return Hr(t)&&!ia(t).xo()&&t.fu.size>0}function Hr(t){return me(t).du.size===0}function xC(t){t.gu=void 0}async function X6(t){t.fu.forEach((e,n)=>{T_(t,e)})}async function J6(t,e){xC(t),C_(t)?(t.mu.au(e),x_(t)):t.mu.set("Unknown")}async function Z6(t,e,n){if(t.mu.set("Online"),e instanceof hC&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _h(t,i)}else if(e instanceof Tu?t.gu.Kt(e):e instanceof uC?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(pe.min()))try{const i=await vC(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(sn.EMPTY_BYTE_STRING,l.snapshotVersion)),TC(s,a);const c=new br(l.target,a,1,l.sequenceNumber);T_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){X("RemoteStore","Failed to raise snapshot:",i),await _h(t,i)}}async function _h(t,e,n){if(!lc(e))throw e;t.du.add(1),await fc(t),t.mu.set("Offline"),n||(n=()=>vC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Nf(t)})}function CC(t,e){return e().catch(n=>_h(t,n,e))}async function Lf(t){const e=me(t),n=Ps(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;e5(e);)try{const s=await U6(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,t5(e,s)}catch(s){await _h(e,s)}SC(e)&&kC(e)}function e5(t){return Hr(t)&&t.lu.length<10}function t5(t,e){t.lu.push(e);const n=Ps(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function SC(t){return Hr(t)&&!Ps(t).xo()&&t.lu.length>0}function kC(t){Ps(t).start()}async function n5(t){Ps(t).tu()}async function i5(t){const e=Ps(t);for(const n of t.lu)e.Yo(n.mutations)}async function s5(t,e,n){const i=t.lu.shift(),s=y_.from(i,e,n);await CC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Lf(t)}async function r5(t,e){e&&Ps(t).Jo&&await async function(n,i){if(s=i.code,JL(s)&&s!==O.ABORTED){const r=n.lu.shift();Ps(n).Oo(),await CC(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Lf(n)}var s}(t,e),SC(t)&&kC(t)}async function tb(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const i=Hr(n);n.du.add(3),await fc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Nf(n)}async function o5(t,e){const n=me(t);e?(n.du.delete(2),await Nf(n)):e||(n.du.add(2),await fc(n),n.mu.set("Unknown"))}function ia(t){return t.yu||(t.yu=function(e,n,i){const s=me(e);return s.nu(),new q6(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:X6.bind(null,t),Zr:J6.bind(null,t),zo:Z6.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),C_(t)?x_(t):t.mu.set("Unknown")):(await t.yu.stop(),xC(t))})),t.yu}function Ps(t){return t.pu||(t.pu=function(e,n,i){const s=me(e);return s.nu(),new K6(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:n5.bind(null,t),Zr:r5.bind(null,t),Xo:i5.bind(null,t),Zo:s5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Lf(t)):(await t.pu.stop(),t.lu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new S_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k_(t,e){if(Gi("AsyncQueue",`${e}: ${t}`),lc(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ne.comparator(n.key,i.key):(n,i)=>ne.comparator(n.key,i.key),this.keyedMap=xa(),this.sortedSet=new Ct(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.Iu=new Ct(ne.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):ce():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class No{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new No(e,n,mo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.Eu=void 0,this.listeners=[]}}class l5{constructor(){this.queries=new na(e=>Yx(e),Af),this.onlineState="Unknown",this.Au=new Set}}async function A_(t,e){const n=me(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new a5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=k_(o,`Initialization of query '${ng(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&D_(n)}async function R_(t,e){const n=me(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function c5(t,e){const n=me(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&D_(n)}function u5(t,e,n){const i=me(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function D_(t){t.Au.forEach(e=>{e.next()})}class O_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new No(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.key=e}}class RC{constructor(e){this.key=e}}class h5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Ae(),this.mutatedKeys=Ae(),this.Ku=Qx(e),this.Gu=new mo(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new nb,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Rf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(i.track({type:3,doc:d}),m=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),m=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),m=!0):f&&!d&&(i.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new No(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new nb,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Ae(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new RC(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new AC(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=Ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return No.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class f5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class d5{constructor(e){this.key=e,this.ec=!1}}class p5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new na(a=>Yx(a),Af),this.ic=new Map,this.rc=new Set,this.oc=new Ct(ne.comparator),this.uc=new Map,this.cc=new w_,this.ac={},this.hc=new Map,this.lc=Po.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function g5(t,e){const n=x5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await V6(n.localStore,Yi(e));n.isPrimaryClient&&EC(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await m5(n,e,i,a==="current",o.resumeToken)}return s}async function m5(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,g,m,_){let y=g.view.zu(m);y.Mi&&(y=await J0(p.localStore,g.query,!1).then(({documents:I})=>g.view.zu(I,y)));const b=_&&_.targetChanges.get(g.targetId),w=g.view.applyChanges(y,p.isPrimaryClient,b);return sb(p,g.targetId,w.Yu),w.snapshot}(t,h,f,d);const r=await J0(t.localStore,e,!0),o=new h5(e,r.Wi),a=o.zu(r.documents),l=hc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);sb(t,n,c.Yu);const u=new f5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function _5(t,e){const n=me(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Af(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await og(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),IC(n.remoteStore,i.targetId),ag(n,i.targetId)}).catch(ac)):(ag(n,i.targetId),await og(n.localStore,i.targetId,!0))}async function y5(t,e,n){const i=C5(t);try{const s=await function(r,o){const a=me(r),l=wt.now(),c=o.reduce((f,d)=>f.add(d.key),Ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Qi(),p=Ae();return a.Ki.getEntries(f,c).next(g=>{d=g,d.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{u=g;const m=[];for(const _ of o){const y=KL(_,u.get(_.key).overlayedDocument);y!=null&&m.push(new Hs(_.key,y,Bx(y.value.mapValue),ei.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:Jx(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new Ct($e)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await dc(i,s.changes),await Lf(i.remoteStore)}catch(s){const r=k_(s,"Failed to persist write");n.reject(r)}}async function DC(t,e){const n=me(t);try{const i=await L6(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?rt(o.ec):s.removedDocuments.size>0&&(rt(o.ec),o.ec=!1))}),await dc(n,i,e)}catch(i){await ac(i)}}function ib(t,e,n){const i=me(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=me(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&D_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function v5(t,e,n){const i=me(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new Ct(ne.comparator);o=o.insert(r,Yt.newNoDocument(r,pe.min()));const a=Ae().add(r),l=new Mf(pe.min(),new Map,new Tt($e),o,a);await DC(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),M_(i)}else await og(i.localStore,e,!1).then(()=>ag(i,e,n)).catch(ac)}async function b5(t,e){const n=me(t),i=e.batch.batchId;try{const s=await N6(n.localStore,e);MC(n,i,null),OC(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await dc(n,s)}catch(s){await ac(s)}}async function w5(t,e,n){const i=me(t);try{const s=await function(r,o){const a=me(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(rt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);MC(i,e,n),OC(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await dc(i,s)}catch(s){await ac(s)}}function OC(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function MC(t,e,n){const i=me(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function ag(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||PC(t,i)})}function PC(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(IC(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),M_(t))}function sb(t,e,n){for(const i of n)i instanceof AC?(t.cc.addReference(i.key,e),E5(t,i)):i instanceof RC?(X("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||PC(t,i.key)):ce()}function E5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(X("SyncEngine","New document in limbo: "+n),t.rc.add(i),M_(t))}function M_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ne(nt.fromString(e)),i=t.lc.next();t.uc.set(i,new d5(n)),t.oc=t.oc.insert(n,i),EC(t.remoteStore,new br(Yi(kf(n.path)),i,2,f_.ct))}}async function dc(t,e,n){const i=me(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=I_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!lc(u))throw u;X("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function I5(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const i=await yC(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(O.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await dc(n,i.Qi)}}function T5(t,e){const n=me(t),i=n.uc.get(e);if(i&&i.ec)return Ae().add(i.key);{let s=Ae();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function x5(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=v5.bind(null,e),e.nc.zo=c5.bind(null,e.eventManager),e.nc.wc=u5.bind(null,e.eventManager),e}function C5(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w5.bind(null,e),e}class rb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P6(this.persistence,new O6,e.initialUser,this.serializer)}createPersistence(e){return new R6(E_.Fs,this.serializer)}createSharedClientState(e){return new $6}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ib(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=I5.bind(null,this.syncEngine),await o5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new l5}createDatastore(e){const n=Pf(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new W6(s));var s;return function(r,o,a,l){return new G6(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>ib(this.syncEngine,a,0),o=eb.D()?new eb:new z6,new Q6(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new p5(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);X("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Gi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=Lx.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{X("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(X("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=k_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Od(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await yC(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ob(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R5(t);X("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>tb(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>tb(e.remoteStore,r)),t._onlineComponents=e}function A5(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function R5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!A5(n))throw n;hh("Error using user provided cache. Falling back to memory cache: "+n),await Od(t,new rb)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Od(t,new rb);return t._offlineComponents}async function NC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await ob(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await ob(t,new S5))),t._onlineComponents}function D5(t){return NC(t).then(e=>e.syncEngine)}async function yh(t){const e=await NC(t),n=e.eventManager;return n.onListen=g5.bind(null,e.syncEngine),n.onUnlisten=_5.bind(null,e.syncEngine),n}function O5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new P_({next:h=>{r.enqueueAndForget(()=>R_(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new O_(kf(o.path),c,{includeMetadataChanges:!0,xu:!0});return A_(s,u)}(await yh(t),t.asyncQueue,e,n,i)),i.promise}function M5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new P_({next:h=>{r.enqueueAndForget(()=>R_(s,u)),h.fromCache&&a.source==="server"?l.reject(new K(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new O_(o,c,{includeMetadataChanges:!0,xu:!0});return A_(s,u)}(await yh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function P5(t,e,n,i){if(e===!0&&i===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lb(t){if(!ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cb(t){if(ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,P5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ub({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ub(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rL;switch(n.type){case"firstParty":return new cL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ab.get(e);n&&(X("ComponentProvider","Removing Datastore"),ab.delete(e),n.terminate())}(this),Promise.resolve()}}function N5(t,e,n,i={}){var s;const r=(t=Rn(t,Uf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&hh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=qt.MOCK_USER;else{o=vR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qt(l)}t._authCredentials=new oL(new Nx(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class jr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Ss extends jr{constructor(e,n,i){super(e,n,kf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new ne(e))}withConverter(e){return new Ss(this.firestore,e,this._path)}}function On(t,e,...n){if(t=Vt(t),LC("collection","path",e),t instanceof Uf){const i=nt.fromString(e,...n);return cb(i),new Ss(t,null,i)}{if(!(t instanceof tn||t instanceof Ss))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return cb(i),new Ss(t.firestore,null,i)}}function Se(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=Lx.A()),LC("doc","path",e),t instanceof Uf){const i=nt.fromString(e,...n);return lb(i),new tn(t,null,new ne(i))}{if(!(t instanceof tn||t instanceof Ss))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return lb(i),new tn(t.firestore,t instanceof Ss?t.converter:null,new ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bC(this,"async_queue_retry"),this.qc=()=>{const n=Dd();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Dd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new zi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!lc(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Gi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=S_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&ce()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function hb(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ns extends Uf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new L5,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FC(this),this._firestoreClient.terminate()}}function F5(t,e){const n=typeof t=="object"?t:fm(),i=typeof t=="string"?t:e||"(default)",s=hm(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=_R("firestore");r&&N5(s,...r)}return s}function Vf(t){return t._firestoreClient||FC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FC(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new EL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new k5(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(sn.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lo(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5=/^__.*__$/;class V5{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new uc(e,this.data,n,this.fieldTransforms)}}class UC{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class L_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new L_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return vh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(VC(this.Yc)&&U5.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class B5{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Pf(e)}ua(e,n,i,s=!1){return new L_({Yc:e,methodName:n,oa:i,path:Xt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function F_(t){const e=t._freezeSettings(),n=Pf(t._databaseId);return new B5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $5(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);U_("Data must be an object, but it was:",o,i);const a=BC(i,o);let l,c;if(r.merge)l=new Sn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=lg(e,h,n);if(!o.contains(f))throw new K(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);zC(u,f)||u.push(f)}l=new Sn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new V5(new gn(a),l,c)}class zf extends N_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zf}}function z5(t,e,n,i){const s=t.ua(1,e,n);U_("Data must be an object, but it was:",s,i);const r=[],o=gn.empty();zr(i,(l,c)=>{const u=V_(e,l,n);c=Vt(c);const h=s.na(u);if(c instanceof zf)r.push(u);else{const f=pc(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Sn(r);return new UC(o,a,s.fieldTransforms)}function H5(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[lg(e,i,n)],l=[s];if(r.length%2!=0)throw new K(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(lg(e,r[f])),l.push(r[f+1]);const c=[],u=gn.empty();for(let f=a.length-1;f>=0;--f)if(!zC(c,a[f])){const d=a[f];let p=l[f];p=Vt(p);const g=o.na(d);if(p instanceof zf)c.push(d);else{const m=pc(p,g);m!=null&&(c.push(d),u.set(d,m))}}const h=new Sn(c);return new UC(u,h,o.fieldTransforms)}function j5(t,e,n,i=!1){return pc(n,t.ua(i?4:3,e))}function pc(t,e){if($C(t=Vt(t)))return U_("Unsupported field value:",e,t),BC(t,e);if(t instanceof N_)return function(n,i){if(!VC(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=pc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $L(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=wt.fromDate(n);return{timestampValue:mh(i.serializer,s)}}if(n instanceof wt){const s=new wt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mh(i.serializer,s)}}if(n instanceof $f)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lo)return{bytesValue:fC(i.serializer,n._byteString)};if(n instanceof tn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:b_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Ff(n)}`)}(t,e)}function BC(t,e){const n={};return Fx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(i,s)=>{const r=pc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function $C(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof $f||t instanceof Lo||t instanceof tn||t instanceof N_)}function U_(t,e,n){if(!$C(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ff(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function lg(t,e,n){if((e=Vt(e))instanceof Bf)return e._internalPath;if(typeof e=="string")return V_(t,e);throw vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const W5=new RegExp("[~\\*/\\[\\]]");function V_(t,e,n){if(e.search(W5)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bf(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new K(O.INVALID_ARGUMENT,a+t+l)}function zC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new q5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(B_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class q5 extends HC{data(){return super.data()}}function B_(t,e){return typeof e=="string"?V_(t,e):e instanceof Bf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $_{}class K5 extends $_{}function Md(t,e,...n){let i=[];e instanceof $_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof z_).length,o=s.filter(a=>a instanceof Hf).length;if(r>1||r>0&&o>0)throw new K(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Hf extends K5{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Hf(e,n,i)}_apply(e){const n=this._parse(e);return WC(e._query,n),new jr(e.firestore,e.converter,eg(e._query,n))}_parse(e){const n=F_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new K(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){db(u,c);const f=[];for(const d of u)f.push(fb(a,s,d));h={arrayValue:{values:f}}}else h=fb(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||db(u,c),h=j5(o,r,u,c==="in"||c==="not-in");return bt.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Pd(t,e,n){const i=e,s=B_("where",t);return Hf._create(s,i,n)}class z_ extends $_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new z_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ni.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)WC(r,a),r=eg(r,a)}(e._query,n),new jr(e.firestore,e.converter,eg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fb(t,e,n){if(typeof(n=Vt(n))=="string"){if(n==="")throw new K(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gx(e)&&n.indexOf("/")!==-1)throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(nt.fromString(n));if(!ne.isDocumentKey(i))throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return F0(t,new ne(i))}if(n instanceof tn)return F0(t,n._key);throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ff(n)}.`)}function db(t,e){if(!Array.isArray(t)||t.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WC(t,e){if(e.isInequality()){const i=m_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new K(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=Kx(t);r!==null&&G5(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function G5(t,e,n){if(!n.isEqual(e))throw new K(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Y5{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Do(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){const i={};return zr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new $f(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Vx(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(El(e));default:return null}}convertTimestamp(e){const n=Ms(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=nt.fromString(e);rt(_C(i));const s=new Il(i.get(1),i.get(3)),r=new ne(i.popFirst(5));return s.isEqual(n)||Gi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qC extends HC{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(B_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class xu extends qC{data(e={}){return super.data(e)}}class KC{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ca(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new xu(this._firestore,this._userDataWriter,i.key,i,new Ca(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new xu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ca(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new xu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ca(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:X5(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function X5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){t=Rn(t,tn);const e=Rn(t.firestore,Ns);return O5(Vf(e),t._key).then(n=>GC(e,t,n))}class j_ extends Y5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function J5(t){t=Rn(t,jr);const e=Rn(t.firestore,Ns),n=Vf(e),i=new j_(e);return jC(t._query),M5(n,t._query).then(s=>new KC(e,i,t,s))}function hr(t,e,n){t=Rn(t,tn);const i=Rn(t.firestore,Ns),s=Q5(t.converter,e,n);return q_(i,[$5(F_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ei.none())])}function Mt(t,e,n,...i){t=Rn(t,tn);const s=Rn(t.firestore,Ns),r=F_(s);let o;return o=typeof(e=Vt(e))=="string"||e instanceof Bf?H5(r,"updateDoc",t._key,e,n,i):z5(r,"updateDoc",t._key,e),q_(s,[o.toMutation(t._key,ei.exists(!0))])}function Z5(t){return q_(Rn(t.firestore,Ns),[new __(t._key,ei.none())])}function W_(t,...e){var n,i,s;t=Vt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hb(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(hb(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof tn)c=Rn(t.firestore,Ns),u=kf(t._key.path),l={next:h=>{e[o]&&e[o](GC(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rn(t,jr);c=Rn(h.firestore,Ns),u=h._query;const f=new j_(c);l={next:d=>{e[o]&&e[o](new KC(c,f,h,d))},error:e[o+1],complete:e[o+2]},jC(t._query)}return function(h,f,d,p){const g=new P_(p),m=new O_(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>A_(await yh(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>R_(await yh(h),m))}}(Vf(c),u,a,l)}function q_(t,e){return function(n,i){const s=new zi;return n.asyncQueue.enqueueAndForget(async()=>y5(await D5(n),i,s)),s.promise}(Vf(t),e)}function GC(t,e,n){const i=n.docs.get(e._key),s=new j_(t);return new qC(t,s,e._key,i,new Ca(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ta=n})(Bs),vi(new ti("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ns(new aL(n.getProvider("auth-internal")),new hL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Il(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),kn(O0,"3.10.1",t),kn(O0,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="firebasestorage.googleapis.com",eF="storageBucket",tF=2*60*1e3,nF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Ti{constructor(e,n,i=0){super(Nd(e),`Firebase Storage: ${n} (${Nd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ii;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ii||(Ii={}));function Nd(t){return"storage/"+t}function iF(){const t="An unknown error occurred, please check the error payload for server response.";return new xi(Ii.UNKNOWN,t)}function sF(){return new xi(Ii.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rF(){return new xi(Ii.CANCELED,"User canceled the upload/download.")}function oF(t){return new xi(Ii.INVALID_URL,"Invalid URL '"+t+"'.")}function aF(t){return new xi(Ii.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pb(t){return new xi(Ii.INVALID_ARGUMENT,t)}function QC(){return new xi(Ii.APP_DELETED,"The Firebase app was deleted.")}function lF(t){return new xi(Ii.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Yn.makeFromUrl(e,n)}catch{return new Yn(e,"")}if(i.path==="")return i;throw aF(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},g=n===YC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<b.length;w++){const I=b[w],D=I.regex.exec(e);if(D){const C=D[I.indices.bucket];let x=D[I.indices.path];x||(x=""),i=new Yn(C,x),I.postModify(i);break}}if(i==null)throw oF(e);return i}}class cF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uF(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(d,l())},m)}function f(){r&&clearTimeout(r)}function d(m,..._){if(c){f();return}if(m){f(),u.call(null,m,..._);return}if(l()||o){f(),u.call(null,m,..._);return}i<64&&(i*=2);let b;a===1?(a=2,b=0):b=(i+Math.random())*1e3,h(b)}let p=!1;function g(m){p||(p=!0,f(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function hF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(t){return t!==void 0}function gb(t,e,n,i){if(i<e)throw pb(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw pb(`Invalid value for '${t}'. Expected ${n} or less.`)}function dF(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bh||(bh={}));/**
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
 */function pF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new $c(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===bh.NO_ERROR,l=r.getStatus();if(!a||pF(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===bh.ABORT;i(!1,new $c(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new $c(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fF(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=iF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?QC():rF();o(l)}else{const l=sF();o(l)}};this.canceled_?n(!1,new $c(!1,null,!0)):this.backoffId_=uF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $c{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function mF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _F(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bF(t,e,n,i,s,r,o=!0){const a=dF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yF(c,e),mF(c,n),_F(c,r),vF(c,i),new gF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function EF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wh{constructor(e,n){this._service=e,n instanceof Yn?this._location=n:this._location=Yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wh(e,n)}get root(){const e=new Yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EF(this._location.path)}get storage(){return this._service}get parent(){const e=wF(this._location.path);if(e===null)return null;const n=new Yn(this._location.bucket,e);return new wh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lF(e)}}function mb(t,e){const n=e==null?void 0:e[eF];return n==null?null:Yn.makeFromBucketSpec(n,t)}class IF{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=YC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tF,this._maxUploadRetryTime=nF,this._requests=new Set,s!=null?this._bucket=Yn.makeFromBucketSpec(s,this._host):this._bucket=mb(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yn.makeFromBucketSpec(this._url,e):this._bucket=mb(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gb("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gb("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new cF(QC());{const o=bF(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const _b="@firebase/storage",yb="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF="storage";function xF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new IF(n,i,s,e,Bs)}function CF(){vi(new ti(TF,xF,"PUBLIC").setMultipleInstances(!0)),kn(_b,yb,""),kn(_b,yb,"esm2017")}CF();const Ld=new WeakMap;function XC(t,e){return Ld.has(e)||Ld.set(e,t||{f:{},r:{},s:{},u:{}}),Ld.get(e)}function SF(t,e,n,i){if(!t)return n;const[s,r]=JC(t);if(!s)return n;const o=XC(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function kF(t,e,n,i){if(!t)return;const[s,r]=JC(t);if(!s)return;const o=XC(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(fi),a}function JC(t){return dP(t)||pP(t)?["f",t.path]:gP(t)?["r",t.toString()]:mP(t)?["s",t.toString()]:[]}const Fd=new WeakMap;function AF(t,e,n){const i=bI();Fd.has(i)||Fd.set(i,new Map);const s=Fd.get(i),r=kF(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):fi}const RF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function cg(t,e,n,i){if(!fP(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof wt||p instanceof $f)h[d]=p;else if(Em(p)){const g=c+d;h[d]=g in n?l[d]:p.path,f[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[d][g]=r[m.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else Ur(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const K_={reset:!1,wait:!0,maxRefDepth:2,converter:RF,snapshotOptions:{serverTimestamps:"estimate"}};function Eh(t){for(const e in t)t[e].unsub()}function ug(t,e,n,i,s,r,o,a,l){const[c,u]=cg(i.data(t.snapshotOptions),wm(e,n),s,t);r.set(e,n,c),hg(t,e,n,s,u,r,o,a,l)}function DF({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=fi;return a.once?H_(t).then(u=>{u.exists()?ug(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=W_(t,u=>{u.exists()?ug(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Eh(l)}}function hg(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(g=>c.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(g){g in d&&++h>=f&&a(n)}c.forEach(g=>{const m=i[g],_=s[g],y=`${n}.${g}`;if(d[y]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>wm(e,y),unsub:DF({ref:_,target:e,path:y,depth:o,ops:r,resolve:p.bind(null,y),reject:l},t),path:_.path}})}function OF(t,e,n,i,s,r){const o=Object.assign({},K_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Qe(c?[]:t.value);c||n.set(t,h,[]);const d=i;let p,g=fi;const m=[],_={added:({newIndex:b,doc:w})=>{m.splice(b,0,Object.create(null));const I=m[b],[D,C]=cg(w.data(l),void 0,I,o);n.add(T(f),b,D),hg(o,f,`${h}.${b}`,I,C,n,0,i.bind(null,w),s)},modified:({oldIndex:b,newIndex:w,doc:I})=>{const D=T(f),C=m[b],x=D[b],[F,J]=cg(I.data(l),x,C,o);m.splice(w,0,C),n.remove(D,b),n.add(D,w,F),hg(o,f,`${h}.${w}`,C,J,n,0,i,s)},removed:({oldIndex:b})=>{const w=T(f);n.remove(w,b),Eh(m.splice(b,1)[0])}};function y(b){const w=b.docChanges(a);if(!p&&w.length){p=!0;let I=0;const D=w.length,C=Object.create(null);for(let x=0;x<D;x++)C[w[x].doc.id]=!0;i=x=>{x&&x.id in C&&++I>=D&&(c&&(n.set(t,h,T(f)),f=t),d(T(f)),i=fi)}}w.forEach(I=>{_[I.type](I)}),w.length||(c&&(n.set(t,h,T(f)),f=t),i(T(f)))}return u?J5(e).then(y).catch(s):g=W_(e,y,s),b=>{if(g(),b){const w=typeof b=="function"?b():[];n.set(t,h,w)}m.forEach(Eh)}}function MF(t,e,n,i,s,r){const o=Object.assign({},K_,r),a="value",l=Object.create(null);i=_P(i,()=>wm(t,a));let c=fi;function u(h){h.exists()?ug(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?H_(e).then(u).catch(s):c=W_(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Eh(l)}}function PF(t,e){let n=fi;const i=Object.assign({},K_,e),s=T(t),r=i.target||Qe();yP()&&(i.once=!0);const o=SF(s,i.ssrKey,r.value,bI());r.value=o;let l=!(wI(s)?(o||[]).length>0:o!==void 0);const c=Qe(!1),u=Qe(),h=Wh(),f=jg();let d=fi;function p(){let _=T(t);const y=new Promise((b,w)=>{if(n(i.reset),!_)return n=fi,b(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(Em(_)?MF:OF)(r,_,NF,b,w,i)}).catch(b=>(h.value===y&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===y&&(c.value=!1)});h.value=y}let g=fi;ht(t)&&(g=Is(t,p)),p(),s&&(d=AF(h.value,s,i.ssrKey)),Bl()&&tE(()=>h.value),f&&kw(m);function m(_=i.reset){g(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>m}})}const NF={set:(t,e,n)=>uP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Et(t,e){return PF(t,e)}function LF(t,{firebaseApp:e,modules:n=[]}){t.provide(vI,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const to=typeof window<"u";function FF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function Ud(t,e){const n={};for(const i in e){const s=e[i];n[i]=ii(s)?s.map(t):t(s)}return n}const Wa=()=>{},ii=Array.isArray,UF=/\/$/,VF=t=>t.replace(UF,"");function Vd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=HF(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function BF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vb(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $F(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Fo(e.matched[i],n.matched[s])&&ZC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ZC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zF(t[n],e[n]))return!1;return!0}function zF(t,e){return ii(t)?bb(t,e):ii(e)?bb(e,t):t===e}function bb(t,e){return ii(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function HF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Sl;(function(t){t.pop="pop",t.push="push"})(Sl||(Sl={}));var qa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qa||(qa={}));function jF(t){if(!t)if(to){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VF(t)}const WF=/^[^#]+#/;function qF(t,e){return t.replace(WF,"#")+e}function KF(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const jf=()=>({left:window.pageXOffset,top:window.pageYOffset});function GF(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=KF(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wb(t,e){return(history.state?history.state.position-e:-1)+t}const fg=new Map;function YF(t,e){fg.set(t,e)}function QF(t){const e=fg.get(t);return fg.delete(t),e}let XF=()=>location.protocol+"//"+location.host;function eS(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),vb(l,"")}return vb(n,t)+i+s}function JF(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=eS(t,location),p=n.value,g=e.value;let m=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}m=g?f.position-g.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:m,type:Sl.pop,direction:m?m>0?qa.forward:qa.back:qa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(He({},f.state,{scroll:jf()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Eb(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?jf():null}}function ZF(t){const{history:e,location:n}=window,i={value:eS(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:XF()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=He({},e.state,Eb(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=He({},s.value,e.state,{forward:l,scroll:jf()});r(u.current,u,!0);const h=He({},Eb(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function e8(t){t=jF(t);const e=ZF(t),n=JF(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=He({location:"",base:t,go:i,createHref:qF.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function t8(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),e8(t)}function n8(t){return typeof t=="string"||t&&typeof t=="object"}function tS(t){return typeof t=="string"||typeof t=="symbol"}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nS=Symbol("");var Ib;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ib||(Ib={}));function Uo(t,e){return He(new Error,{type:t,[nS]:!0},e)}function Si(t,e){return t instanceof Error&&nS in t&&(e==null||!!(t.type&e))}const Tb="[^/]+?",i8={sensitive:!1,strict:!1,start:!0,end:!0},s8=/[.+*?^${}()[\]/\\]/g;function r8(t,e){const n=He({},i8,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(s8,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=f;r.push({name:p,repeatable:g,optional:m});const y=_||Tb;if(y!==Tb){d+=10;try{new RegExp(`(${y})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+w.message)}}let b=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),g&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:m}=d,_=p in c?c[p]:"";if(ii(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=ii(_)?_.join("/"):_;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function o8(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a8(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=o8(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(xb(i))return 1;if(xb(s))return-1}return s.length-i.length}function xb(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const l8={type:0,value:""},c8=/[a-zA-Z0-9_]/;function u8(t){if(!t)return[[]];if(t==="/")return[[l8]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:c8.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function h8(t,e,n){const i=r8(u8(t.path),n),s=He(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function f8(t,e){const n=[],i=new Map;e=kb({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=d8(u);p.aliasOf=f&&f.record;const g=kb(e,u),m=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of b)m.push(He({},p,{components:f?f.record.components:p.components,path:w,aliasOf:f?f.record:p}))}let _,y;for(const b of m){const{path:w}=b;if(h&&w[0]!=="/"){const I=h.record.path,D=I[I.length-1]==="/"?"":"/";b.path=h.record.path+(w&&D+w)}if(_=h8(b,h,g),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),d&&u.name&&!Sb(_)&&o(u.name)),p.children){const I=p.children;for(let D=0;D<I.length;D++)r(I[D],_,f&&f.children[D])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:Wa}function o(u){if(tS(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&a8(u,n[h])>=0&&(u.record.path!==n[h].record.path||!iS(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sb(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Uo(1,{location:u});g=f.record.name,d=He(Cb(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Cb(u.params,f.keys.map(y=>y.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(y=>y.re.test(p)),f&&(d=f.parse(p),g=f.record.name);else{if(f=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw Uo(1,{location:u,currentLocation:h});g=f.record.name,d=He({},h.params,u.params),p=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:d,matched:m,meta:g8(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Cb(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function d8(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:p8(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function p8(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Sb(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function g8(t){return t.reduce((e,n)=>He(e,n.meta),{})}function kb(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function iS(t,e){return e.children.some(n=>n===t||iS(t,n))}const sS=/#/g,m8=/&/g,_8=/\//g,y8=/=/g,v8=/\?/g,rS=/\+/g,b8=/%5B/g,w8=/%5D/g,oS=/%5E/g,E8=/%60/g,aS=/%7B/g,I8=/%7C/g,lS=/%7D/g,T8=/%20/g;function G_(t){return encodeURI(""+t).replace(I8,"|").replace(b8,"[").replace(w8,"]")}function x8(t){return G_(t).replace(aS,"{").replace(lS,"}").replace(oS,"^")}function dg(t){return G_(t).replace(rS,"%2B").replace(T8,"+").replace(sS,"%23").replace(m8,"%26").replace(E8,"`").replace(aS,"{").replace(lS,"}").replace(oS,"^")}function C8(t){return dg(t).replace(y8,"%3D")}function S8(t){return G_(t).replace(sS,"%23").replace(v8,"%3F")}function k8(t){return t==null?"":S8(t).replace(_8,"%2F")}function Ih(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function A8(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(rS," "),o=r.indexOf("="),a=Ih(o<0?r:r.slice(0,o)),l=o<0?null:Ih(r.slice(o+1));if(a in e){let c=e[a];ii(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ab(t){let e="";for(let n in t){const i=t[n];if(n=C8(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ii(i)?i.map(r=>r&&dg(r)):[i&&dg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function R8(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ii(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const D8=Symbol(""),Rb=Symbol(""),Wf=Symbol(""),Y_=Symbol(""),pg=Symbol("");function ga(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ds(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Uo(4,{from:n,to:e})):h instanceof Error?a(h):n8(h)?a(Uo(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bd(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(O8(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ds(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=FF(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ds(f,n,i,r,o)()}))}}return s}function O8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Db(t){const e=vn(Wf),n=vn(Y_),i=ke(()=>e.resolve(T(t.to))),s=ke(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Fo.bind(null,u));if(f>-1)return f;const d=Ob(l[c-2]);return c>1&&Ob(u)===d&&h[h.length-1].path!==d?h.findIndex(Fo.bind(null,l[c-2])):f}),r=ke(()=>s.value>-1&&L8(n.params,i.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&ZC(n.params,i.value.params));function a(l={}){return N8(l)?e[T(t.replace)?"replace":"push"](T(t.to)).catch(Wa):Promise.resolve()}return{route:i,href:ke(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const M8=Fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Db,setup(t,{slots:e}){const n=Rs(Db(t)),{options:i}=vn(Wf),s=ke(()=>({[Mb(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Mb(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:qo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),P8=M8;function N8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L8(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ii(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ob(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mb=(t,e,n)=>t??e??n,F8=Fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=vn(pg),s=ke(()=>t.route||i.value),r=vn(Rb,0),o=ke(()=>{let c=T(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ke(()=>s.value.matched[o.value]);pu(Rb,ke(()=>o.value+1)),pu(D8,a),pu(pg,s);const l=Qe();return Is(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Fo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Pb(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=qo(f,He({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pb(n.default,{Component:m,route:c})||m}}});function Pb(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const U8=F8;function V8(t){const e=f8(t.routes,t),n=t.parseQuery||A8,i=t.stringifyQuery||Ab,s=t.history,r=ga(),o=ga(),a=ga(),l=Wh(ls);let c=ls;to&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ud.bind(null,R=>""+R),h=Ud.bind(null,k8),f=Ud.bind(null,Ih);function d(R,H){let j,te;return tS(R)?(j=e.getRecordMatcher(R),te=H):te=R,e.addRoute(te,j)}function p(R){const H=e.getRecordMatcher(R);H&&e.removeRoute(H)}function g(){return e.getRoutes().map(R=>R.record)}function m(R){return!!e.getRecordMatcher(R)}function _(R,H){if(H=He({},H||l.value),typeof R=="string"){const v=Vd(n,R,H.path),E=e.resolve({path:v.path},H),S=s.createHref(v.fullPath);return He(v,E,{params:f(E.params),hash:Ih(v.hash),redirectedFrom:void 0,href:S})}let j;if("path"in R)j=He({},R,{path:Vd(n,R.path,H.path).path});else{const v=He({},R.params);for(const E in v)v[E]==null&&delete v[E];j=He({},R,{params:h(R.params)}),H.params=h(H.params)}const te=e.resolve(j,H),Le=R.hash||"";te.params=u(f(te.params));const ct=BF(i,He({},R,{hash:x8(Le),path:te.path})),Ee=s.createHref(ct);return He({fullPath:ct,hash:Le,query:i===Ab?R8(R.query):R.query||{}},te,{redirectedFrom:void 0,href:Ee})}function y(R){return typeof R=="string"?Vd(n,R,l.value.path):He({},R)}function b(R,H){if(c!==R)return Uo(8,{from:H,to:R})}function w(R){return C(R)}function I(R){return w(He(y(R),{replace:!0}))}function D(R){const H=R.matched[R.matched.length-1];if(H&&H.redirect){const{redirect:j}=H;let te=typeof j=="function"?j(R):j;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=y(te):{path:te},te.params={}),He({query:R.query,hash:R.hash,params:"path"in te?{}:R.params},te)}}function C(R,H){const j=c=_(R),te=l.value,Le=R.state,ct=R.force,Ee=R.replace===!0,v=D(j);if(v)return C(He(y(v),{state:typeof v=="object"?He({},Le,v.state):Le,force:ct,replace:Ee}),H||j);const E=j;E.redirectedFrom=H;let S;return!ct&&$F(i,te,j)&&(S=Uo(16,{to:E,from:te}),hn(te,te,!0,!1)),(S?Promise.resolve(S):F(E,te)).catch(A=>Si(A)?Si(A,2)?A:$t(A):be(A,E,te)).then(A=>{if(A){if(Si(A,2))return C(He({replace:Ee},y(A.to),{state:typeof A.to=="object"?He({},Le,A.to.state):Le,force:ct}),H||E)}else A=ee(E,te,!0,Ee,Le);return J(E,te,A),A})}function x(R,H){const j=b(R,H);return j?Promise.reject(j):Promise.resolve()}function F(R,H){let j;const[te,Le,ct]=B8(R,H);j=Bd(te.reverse(),"beforeRouteLeave",R,H);for(const v of te)v.leaveGuards.forEach(E=>{j.push(ds(E,R,H))});const Ee=x.bind(null,R,H);return j.push(Ee),Qr(j).then(()=>{j=[];for(const v of r.list())j.push(ds(v,R,H));return j.push(Ee),Qr(j)}).then(()=>{j=Bd(Le,"beforeRouteUpdate",R,H);for(const v of Le)v.updateGuards.forEach(E=>{j.push(ds(E,R,H))});return j.push(Ee),Qr(j)}).then(()=>{j=[];for(const v of R.matched)if(v.beforeEnter&&!H.matched.includes(v))if(ii(v.beforeEnter))for(const E of v.beforeEnter)j.push(ds(E,R,H));else j.push(ds(v.beforeEnter,R,H));return j.push(Ee),Qr(j)}).then(()=>(R.matched.forEach(v=>v.enterCallbacks={}),j=Bd(ct,"beforeRouteEnter",R,H),j.push(Ee),Qr(j))).then(()=>{j=[];for(const v of o.list())j.push(ds(v,R,H));return j.push(Ee),Qr(j)}).catch(v=>Si(v,8)?v:Promise.reject(v))}function J(R,H,j){for(const te of a.list())te(R,H,j)}function ee(R,H,j,te,Le){const ct=b(R,H);if(ct)return ct;const Ee=H===ls,v=to?history.state:{};j&&(te||Ee?s.replace(R.fullPath,He({scroll:Ee&&v&&v.scroll},Le)):s.push(R.fullPath,Le)),l.value=R,hn(R,H,j,Ee),$t()}let oe;function ye(){oe||(oe=s.listen((R,H,j)=>{if(!si.listening)return;const te=_(R),Le=D(te);if(Le){C(He(Le,{replace:!0}),te).catch(Wa);return}c=te;const ct=l.value;to&&YF(wb(ct.fullPath,j.delta),jf()),F(te,ct).catch(Ee=>Si(Ee,12)?Ee:Si(Ee,2)?(C(Ee.to,te).then(v=>{Si(v,20)&&!j.delta&&j.type===Sl.pop&&s.go(-1,!1)}).catch(Wa),Promise.reject()):(j.delta&&s.go(-j.delta,!1),be(Ee,te,ct))).then(Ee=>{Ee=Ee||ee(te,ct,!1),Ee&&(j.delta&&!Si(Ee,8)?s.go(-j.delta,!1):j.type===Sl.pop&&Si(Ee,20)&&s.go(-1,!1)),J(te,ct,Ee)}).catch(Wa)}))}let Ke=ga(),ve=ga(),we;function be(R,H,j){$t(R);const te=ve.list();return te.length?te.forEach(Le=>Le(R,H,j)):console.error(R),Promise.reject(R)}function Ne(){return we&&l.value!==ls?Promise.resolve():new Promise((R,H)=>{Ke.add([R,H])})}function $t(R){return we||(we=!R,ye(),Ke.list().forEach(([H,j])=>R?j(R):H()),Ke.reset()),R}function hn(R,H,j,te){const{scrollBehavior:Le}=t;if(!to||!Le)return Promise.resolve();const ct=!j&&QF(wb(R.fullPath,0))||(te||!j)&&history.state&&history.state.scroll||null;return Zg().then(()=>Le(R,H,ct)).then(Ee=>Ee&&GF(Ee)).catch(Ee=>be(Ee,R,H))}const zt=R=>s.go(R);let gt;const Pn=new Set,si={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:w,replace:I,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:Ne,install(R){const H=this;R.component("RouterLink",P8),R.component("RouterView",U8),R.config.globalProperties.$router=H,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>T(l)}),to&&!gt&&l.value===ls&&(gt=!0,w(s.location).catch(Le=>{}));const j={};for(const Le in ls)j[Le]=ke(()=>l.value[Le]);R.provide(Wf,H),R.provide(Y_,Rs(j)),R.provide(pg,l);const te=R.unmount;Pn.add(R),R.unmount=function(){Pn.delete(R),Pn.size<1&&(c=ls,oe&&oe(),oe=null,l.value=ls,gt=!1,we=!1),te()}}};return si}function Qr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function B8(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Fo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Fo(c,l))||s.push(l))}return[n,i,s]}function qf(){return vn(Wf)}function sa(){return vn(Y_)}const $8={class:"container"},z8={__name:"App",setup(t){const e=sa();return(n,i)=>{const s=Wi("RouterView");return M(),U("div",$8,[(M(),bn(s,{key:T(e).fullPath}))])}}},cS=NE({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),le=F5(cS);function Nb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nb(Object(n),!0).forEach(function(i){St(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nb(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Th(t){return Th=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Th(t)}function H8(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lb(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function j8(t,e,n){return e&&Lb(t.prototype,e),n&&Lb(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q_(t,e){return q8(t)||G8(t,e)||uS(t,e)||Q8()}function gc(t){return W8(t)||K8(t)||uS(t)||Y8()}function W8(t){if(Array.isArray(t))return gg(t)}function q8(t){if(Array.isArray(t))return t}function K8(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G8(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function uS(t,e){if(t){if(typeof t=="string")return gg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gg(t,e)}}function gg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Y8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fb=function(){},X_={},hS={},fS=null,dS={mark:Fb,measure:Fb};try{typeof window<"u"&&(X_=window),typeof document<"u"&&(hS=document),typeof MutationObserver<"u"&&(fS=MutationObserver),typeof performance<"u"&&(dS=performance)}catch{}var X8=X_.navigator||{},Ub=X8.userAgent,Vb=Ub===void 0?"":Ub,Ls=X_,st=hS,Bb=fS,zc=dS;Ls.document;var ss=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",pS=~Vb.indexOf("MSIE")||~Vb.indexOf("Trident/"),Hc,jc,Wc,qc,Kc,Xi="___FONT_AWESOME___",mg=16,gS="fa",mS="svg-inline--fa",Dr="data-fa-i2svg",_g="data-fa-pseudo-element",J8="data-fa-pseudo-element-pending",J_="data-prefix",Z_="data-icon",$b="fontawesome-i2svg",Z8="async",eU=["HTML","HEAD","STYLE","SCRIPT"],_S=function(){try{return!0}catch{return!1}}(),tt="classic",ft="sharp",ey=[tt,ft];function mc(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[tt]}})}var kl=mc((Hc={},St(Hc,tt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),St(Hc,ft,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Hc)),Al=mc((jc={},St(jc,tt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),St(jc,ft,{solid:"fass",regular:"fasr",light:"fasl"}),jc)),Rl=mc((Wc={},St(Wc,tt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),St(Wc,ft,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Wc)),tU=mc((qc={},St(qc,tt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),St(qc,ft,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qc)),nU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yS="fa-layers-text",iU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sU=mc((Kc={},St(Kc,tt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),St(Kc,ft,{900:"fass",400:"fasr",300:"fasl"}),Kc)),vS=[1,2,3,4,5,6,7,8,9,10],rU=vS.concat([11,12,13,14,15,16,17,18,19,20]),oU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dl=new Set;Object.keys(Al[tt]).map(Dl.add.bind(Dl));Object.keys(Al[ft]).map(Dl.add.bind(Dl));var aU=[].concat(ey,gc(Dl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fr.GROUP,fr.SWAP_OPACITY,fr.PRIMARY,fr.SECONDARY]).concat(vS.map(function(t){return"".concat(t,"x")})).concat(rU.map(function(t){return"w-".concat(t)})),Ka=Ls.FontAwesomeConfig||{};function lU(t){var e=st.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(st&&typeof st.querySelector=="function"){var uU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uU.forEach(function(t){var e=Q_(t,2),n=e[0],i=e[1],s=cU(lU(n));s!=null&&(Ka[i]=s)})}var bS={styleDefault:"solid",familyDefault:"classic",cssPrefix:gS,replacementClass:mS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ka.familyPrefix&&(Ka.cssPrefix=Ka.familyPrefix);var Vo=q(q({},bS),Ka);Vo.autoReplaceSvg||(Vo.observeMutations=!1);var Y={};Object.keys(bS).forEach(function(t){Object.defineProperty(Y,t,{enumerable:!0,set:function(n){Vo[t]=n,Ga.forEach(function(i){return i(Y)})},get:function(){return Vo[t]}})});Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(e){Vo.cssPrefix=e,Ga.forEach(function(n){return n(Y)})},get:function(){return Vo.cssPrefix}});Ls.FontAwesomeConfig=Y;var Ga=[];function hU(t){return Ga.push(t),function(){Ga.splice(Ga.indexOf(t),1)}}var cs=mg,pi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fU(t){if(!(!t||!ss)){var e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=st.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return st.head.insertBefore(e,i),t}}var dU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ol(){for(var t=12,e="";t-- >0;)e+=dU[Math.random()*62|0];return e}function ra(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ty(t){return t.classList?ra(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wS(t[n]),'" ')},"").trim()}function Kf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ny(t){return t.size!==pi.size||t.x!==pi.x||t.y!==pi.y||t.rotate!==pi.rotate||t.flipX||t.flipY}function gU(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function mU(t){var e=t.transform,n=t.width,i=n===void 0?mg:n,s=t.height,r=s===void 0?mg:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&pS?l+="translate(".concat(e.x/cs-i/2,"em, ").concat(e.y/cs-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/cs,"em), calc(-50% + ").concat(e.y/cs,"em)) "):l+="translate(".concat(e.x/cs,"em, ").concat(e.y/cs,"em) "),l+="scale(".concat(e.size/cs*(e.flipX?-1:1),", ").concat(e.size/cs*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _U=`:root, :host {
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
}`;function ES(){var t=gS,e=mS,n=Y.cssPrefix,i=Y.replacementClass,s=_U;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var zb=!1;function $d(){Y.autoAddCss&&!zb&&(fU(ES()),zb=!0)}var yU={mixout:function(){return{dom:{css:ES,insertCss:$d}}},hooks:function(){return{beforeDOMElementCreation:function(){$d()},beforeI2svg:function(){$d()}}}},Ji=Ls||{};Ji[Xi]||(Ji[Xi]={});Ji[Xi].styles||(Ji[Xi].styles={});Ji[Xi].hooks||(Ji[Xi].hooks={});Ji[Xi].shims||(Ji[Xi].shims=[]);var Qn=Ji[Xi],IS=[],vU=function t(){st.removeEventListener("DOMContentLoaded",t),xh=1,IS.map(function(e){return e()})},xh=!1;ss&&(xh=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),xh||st.addEventListener("DOMContentLoaded",vU));function bU(t){ss&&(xh?setTimeout(t,0):IS.push(t))}function _c(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?wS(t):"<".concat(e," ").concat(pU(i),">").concat(r.map(_c).join(""),"</").concat(e,">")}function Hb(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wU=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},zd=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?wU(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function EU(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yg(t){var e=EU(t);return e.length===1?e[0].toString(16):null}function IU(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function jb(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function vg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=jb(e);typeof Qn.hooks.addPack=="function"&&!s?Qn.hooks.addPack(t,jb(e)):Qn.styles[t]=q(q({},Qn.styles[t]||{}),r),t==="fas"&&vg("fa",e)}var Gc,Yc,Qc,ro=Qn.styles,TU=Qn.shims,xU=(Gc={},St(Gc,tt,Object.values(Rl[tt])),St(Gc,ft,Object.values(Rl[ft])),Gc),iy=null,TS={},xS={},CS={},SS={},kS={},CU=(Yc={},St(Yc,tt,Object.keys(kl[tt])),St(Yc,ft,Object.keys(kl[ft])),Yc);function SU(t){return~aU.indexOf(t)}function kU(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!SU(s)?s:null}var AS=function(){var e=function(r){return zd(ro,function(o,a,l){return o[l]=zd(a,r,{}),o},{})};TS=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),xS=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),kS=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in ro||Y.autoFetchSvg,i=zd(TU,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});CS=i.names,SS=i.unicodes,iy=Gf(Y.styleDefault,{family:Y.familyDefault})};hU(function(t){iy=Gf(t.styleDefault,{family:Y.familyDefault})});AS();function sy(t,e){return(TS[t]||{})[e]}function AU(t,e){return(xS[t]||{})[e]}function dr(t,e){return(kS[t]||{})[e]}function RS(t){return CS[t]||{prefix:null,iconName:null}}function RU(t){var e=SS[t],n=sy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fs(){return iy}var ry=function(){return{prefix:null,iconName:null,rest:[]}};function Gf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?tt:n,s=kl[i][t],r=Al[i][t]||Al[i][s],o=t in Qn.styles?t:null;return r||o||null}var Wb=(Qc={},St(Qc,tt,Object.keys(Rl[tt])),St(Qc,ft,Object.keys(Rl[ft])),Qc);function Yf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},St(e,tt,"".concat(Y.cssPrefix,"-").concat(tt)),St(e,ft,"".concat(Y.cssPrefix,"-").concat(ft)),e),o=null,a=tt;(t.includes(r[tt])||t.some(function(c){return Wb[tt].includes(c)}))&&(a=tt),(t.includes(r[ft])||t.some(function(c){return Wb[ft].includes(c)}))&&(a=ft);var l=t.reduce(function(c,u){var h=kU(Y.cssPrefix,u);if(ro[u]?(u=xU[a].includes(u)?tU[a][u]:u,o=u,c.prefix=u):CU[a].indexOf(u)>-1?(o=u,c.prefix=Gf(u,{family:a})):h?c.iconName=h:u!==Y.replacementClass&&u!==r[tt]&&u!==r[ft]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?RS(c.iconName):{},d=dr(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ro.far&&ro.fas&&!Y.autoFetchSvg&&(c.prefix="fas")}return c},ry());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ft&&(ro.fass||Y.autoFetchSvg)&&(l.prefix="fass",l.iconName=dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Fs()||"fas"),l}var DU=function(){function t(){H8(this,t),this.definitions={}}return j8(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),vg(a,o[a]);var l=Rl[tt][a];l&&vg(l,o[a]),AS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),qb=[],oo={},_o={},OU=Object.keys(_o);function MU(t,e){var n=e.mixoutsTo;return qb=t,oo={},Object.keys(_o).forEach(function(i){OU.indexOf(i)===-1&&delete _o[i]}),qb.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Th(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){oo[o]||(oo[o]=[]),oo[o].push(r[o])})}i.provides&&i.provides(_o)}),n}function bg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=oo[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Or(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=oo[t]||[];s.forEach(function(r){r.apply(null,n)})}function Zi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _o[t]?_o[t].apply(null,e):void 0}function wg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fs();if(e)return e=dr(n,e)||e,Hb(DS.definitions,n,e)||Hb(Qn.styles,n,e)}var DS=new DU,PU=function(){Y.autoReplaceSvg=!1,Y.observeMutations=!1,Or("noAuto")},NU={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ss?(Or("beforeI2svg",e),Zi("pseudoElements2svg",e),Zi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,bU(function(){FU({autoReplaceSvgRoot:n}),Or("watch",e)})}},LU={icon:function(e){if(e===null)return null;if(Th(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:dr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Gf(e[0]);return{prefix:i,iconName:dr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Y.cssPrefix,"-"))>-1||e.match(nU))){var s=Yf(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Fs(),iconName:dr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Fs();return{prefix:r,iconName:dr(r,e)||e}}}},Mn={noAuto:PU,config:Y,dom:NU,parse:LU,library:DS,findIconDefinition:wg,toHtml:_c},FU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?st:n;(Object.keys(Qn.styles).length>0||Y.autoFetchSvg)&&ss&&Y.autoReplaceSvg&&Mn.dom.i2svg({node:i})};function Qf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return _c(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ss){var i=st.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function UU(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(ny(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=Kf(q(q({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function VU(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(Y.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},s),{},{id:o}),children:i}]}]}function oy(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",y=[Y.replacementClass,r?"".concat(Y.cssPrefix,"-").concat(r):""].filter(function(F){return h.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(h.classes).join(" "),b={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},w=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(b.attributes[Dr]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Ol())},children:[l]}),delete b.attributes.title);var I=q(q({},b),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:q(q({},w),h.styles)}),D=i.found&&n.found?Zi("generateAbstractMask",I)||{children:[],attributes:{}}:Zi("generateAbstractIcon",I)||{children:[],attributes:{}},C=D.children,x=D.attributes;return I.children=C,I.attributes=x,a?VU(I):UU(I)}function Kb(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=q(q(q({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Dr]="");var u=q({},o.styles);ny(s)&&(u.transform=mU({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Kf(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function BU(t){var e=t.content,n=t.title,i=t.extra,s=q(q(q({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Kf(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hd=Qn.styles;function Eg(t){var e=t[0],n=t[1],i=t.slice(4),s=Q_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var $U={found:!1,width:512,height:512};function zU(t,e){!_S&&!Y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ig(t,e){var n=e;return e==="fa"&&Y.styleDefault!==null&&(e=Fs()),new Promise(function(i,s){if(Zi("missingIconAbstract"),n==="fa"){var r=RS(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Hd[e]&&Hd[e][t]){var o=Hd[e][t];return i(Eg(o))}zU(t,e),i(q(q({},$U),{},{icon:Y.showMissingIcons&&t?Zi("missingIconAbstract")||{}:{}}))})}var Gb=function(){},Tg=Y.measurePerformance&&zc&&zc.mark&&zc.measure?zc:{mark:Gb,measure:Gb},Sa='FA "6.4.0"',HU=function(e){return Tg.mark("".concat(Sa," ").concat(e," begins")),function(){return OS(e)}},OS=function(e){Tg.mark("".concat(Sa," ").concat(e," ends")),Tg.measure("".concat(Sa," ").concat(e),"".concat(Sa," ").concat(e," begins"),"".concat(Sa," ").concat(e," ends"))},ay={begin:HU,end:OS},Cu=function(){};function Yb(t){var e=t.getAttribute?t.getAttribute(Dr):null;return typeof e=="string"}function jU(t){var e=t.getAttribute?t.getAttribute(J_):null,n=t.getAttribute?t.getAttribute(Z_):null;return e&&n}function WU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Y.replacementClass)}function qU(){if(Y.autoReplaceSvg===!0)return Su.replace;var t=Su[Y.autoReplaceSvg];return t||Su.replace}function KU(t){return st.createElementNS("http://www.w3.org/2000/svg",t)}function GU(t){return st.createElement(t)}function MS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?KU:GU:n;if(typeof t=="string")return st.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(MS(o,{ceFn:i}))}),s}function YU(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(MS(s),n)}),n.getAttribute(Dr)===null&&Y.keepOriginalSource){var i=st.createComment(YU(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ty(n).indexOf(Y.replacementClass))return Su.replace(e);var s=new RegExp("".concat(Y.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===Y.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return _c(a)}).join(`
`);n.setAttribute(Dr,""),n.innerHTML=o}};function Qb(t){t()}function PS(t,e){var n=typeof e=="function"?e:Cu;if(t.length===0)n();else{var i=Qb;Y.mutateApproach===Z8&&(i=Ls.requestAnimationFrame||Qb),i(function(){var s=qU(),r=ay.begin("mutate");t.map(s),r(),n()})}}var ly=!1;function NS(){ly=!0}function xg(){ly=!1}var Ch=null;function Xb(t){if(Bb&&Y.observeMutations){var e=t.treeCallback,n=e===void 0?Cu:e,i=t.nodeCallback,s=i===void 0?Cu:i,r=t.pseudoElementsCallback,o=r===void 0?Cu:r,a=t.observeMutationsRoot,l=a===void 0?st:a;Ch=new Bb(function(c){if(!ly){var u=Fs();ra(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Yb(h.addedNodes[0])&&(Y.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Y.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Yb(h.target)&&~oU.indexOf(h.attributeName))if(h.attributeName==="class"&&jU(h.target)){var f=Yf(ty(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(J_,d||u),p&&h.target.setAttribute(Z_,p)}else WU(h.target)&&s(h.target)})}}),ss&&Ch.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QU(){Ch&&Ch.disconnect()}function XU(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function JU(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Yf(ty(t));return s.prefix||(s.prefix=Fs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=AU(s.prefix,t.innerText)||sy(s.prefix,yg(t.innerText))),!s.iconName&&Y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function ZU(t){var e=ra(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Y.autoA11y&&(n?e["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(i||Ol()):(e["aria-hidden"]="true",e.focusable="false")),e}function eV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=JU(t),i=n.iconName,s=n.prefix,r=n.rest,o=ZU(t),a=bg("parseNodeAttributes",{},t),l=e.styleParser?XU(t):[];return q({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:pi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var tV=Qn.styles;function LS(t){var e=Y.autoReplaceSvg==="nest"?Jb(t,{styleParser:!1}):Jb(t);return~e.extra.classes.indexOf(yS)?Zi("generateLayersText",t,e):Zi("generateSvgReplacementMutation",t,e)}var Us=new Set;ey.map(function(t){Us.add("fa-".concat(t))});Object.keys(kl[tt]).map(Us.add.bind(Us));Object.keys(kl[ft]).map(Us.add.bind(Us));Us=gc(Us);function Zb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ss)return Promise.resolve();var n=st.documentElement.classList,i=function(h){return n.add("".concat($b,"-").concat(h))},s=function(h){return n.remove("".concat($b,"-").concat(h))},r=Y.autoFetchSvg?Us:ey.map(function(u){return"fa-".concat(u)}).concat(Object.keys(tV));r.includes("fa")||r.push("fa");var o=[".".concat(yS,":not([").concat(Dr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Dr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ra(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=ay.begin("onTree"),c=a.reduce(function(u,h){try{var f=LS(h);f&&u.push(f)}catch(d){_S||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){PS(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function nV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;LS(t).then(function(n){n&&PS([n],e)})}function iV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:wg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:wg(s||{})),t(i,q(q({},n),{},{mask:s}))}}var sV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?pi:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,g=n.classes,m=g===void 0?[]:g,_=n.attributes,y=_===void 0?{}:_,b=n.styles,w=b===void 0?{}:b;if(e){var I=e.prefix,D=e.iconName,C=e.icon;return Qf(q({type:"icon"},e),function(){return Or("beforeDOMElementCreation",{iconDefinition:e,params:n}),Y.autoA11y&&(f?y["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(p||Ol()):(y["aria-hidden"]="true",y.focusable="false")),oy({icons:{main:Eg(C),mask:l?Eg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:D,transform:q(q({},pi),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:y,styles:w,classes:m}})})}},rV={mixout:function(){return{icon:iV(sV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zb,n.nodeCallback=nV,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?st:i,r=n.callback,o=r===void 0?function(){}:r;return Zb(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([Ig(s,a),u.iconName?Ig(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=Q_(g,2),_=m[0],y=m[1];d([n,oy({icons:{main:_,mask:y},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=Kf(a);l.length>0&&(s.style=l);var c;return ny(o)&&(c=Zi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},oV={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return Qf({type:"layer"},function(){Or("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Y.cssPrefix,"-layers")].concat(gc(r)).join(" ")},children:o}]})}}}},aV={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Qf({type:"counter",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),BU({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(Y.cssPrefix,"-layers-counter")].concat(gc(a))}})})}}}},lV={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?pi:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Qf({type:"text",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),Kb({content:n,transform:q(q({},pi),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(Y.cssPrefix,"-layers-text")].concat(gc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(pS){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return Y.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Kb({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},cV=new RegExp('"',"ug"),e1=[1105920,1112319];function uV(t){var e=t.replace(cV,""),n=IU(e,0),i=n>=e1[0]&&n<=e1[1],s=e.length===2?e[0]===e[1]:!1;return{value:yg(s?e[0]:e),isSecondary:i||s}}function t1(t,e){var n="".concat(J8).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=ra(t.children),o=r.filter(function(C){return C.getAttribute(_g)===e})[0],a=Ls.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(iU),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ft:tt,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Al[f][l[2].toLowerCase()]:sU[f][c],p=uV(h),g=p.value,m=p.isSecondary,_=l[0].startsWith("FontAwesome"),y=sy(d,g),b=y;if(_){var w=RU(g);w.iconName&&w.prefix&&(y=w.iconName,d=w.prefix)}if(y&&!m&&(!o||o.getAttribute(J_)!==d||o.getAttribute(Z_)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var I=eV(),D=I.extra;D.attributes[_g]=e,Ig(y,d).then(function(C){var x=oy(q(q({},I),{},{icons:{main:C,mask:ry()},prefix:d,iconName:b,extra:D,watchable:!0})),F=st.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=x.map(function(J){return _c(J)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function hV(t){return Promise.all([t1(t,"::before"),t1(t,"::after")])}function fV(t){return t.parentNode!==document.head&&!~eU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_g)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function n1(t){if(ss)return new Promise(function(e,n){var i=ra(t.querySelectorAll("*")).filter(fV).map(hV),s=ay.begin("searchPseudoElements");NS(),Promise.all(i).then(function(){s(),xg(),e()}).catch(function(){s(),xg(),n()})})}var dV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=n1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?st:i;Y.searchPseudoElements&&n1(s)}}},i1=!1,pV={mixout:function(){return{dom:{unwatch:function(){NS(),i1=!0}}}},hooks:function(){return{bootstrap:function(){Xb(bg("mutationObserverCallbacks",{}))},noAuto:function(){QU()},watch:function(n){var i=n.observeMutationsRoot;i1?xg():Xb(bg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},s1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},gV={mixout:function(){return{parse:{transform:function(n){return s1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=s1(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:q({},d.outer),children:[{tag:"g",attributes:q({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:q(q({},i.icon.attributes),d.path)}]}]}}}},jd={x:0,y:0,width:"100%",height:"100%"};function r1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mV(t){return t.tag==="g"?t.children:[t]}var _V={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Yf(s.split(" ").map(function(o){return o.trim()})):ry();return r.prefix||(r.prefix=Fs()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=gU({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:q(q({},jd),{},{fill:"white"})},g=u.children?{children:u.children.map(r1)}:{},m={tag:"g",attributes:q({},d.inner),children:[r1(q({tag:u.tag,attributes:q(q({},u.attributes),d.path)},g))]},_={tag:"g",attributes:q({},d.outer),children:[m]},y="mask-".concat(a||Ol()),b="clip-".concat(a||Ol()),w={tag:"mask",attributes:q(q({},jd),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:mV(f)},w]};return i.push(I,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},jd)}),{children:i,attributes:s}}}},yV={provides:function(e){var n=!1;Ls.matchMedia&&(n=Ls.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:q(q({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:q(q({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:q(q({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},vV={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},bV=[yU,rV,oV,aV,lV,dV,pV,gV,_V,yV,vV];MU(bV,{mixoutsTo:Mn});Mn.noAuto;var FS=Mn.config,lt=Mn.library;Mn.dom;var Sh=Mn.parse;Mn.findIconDefinition;Mn.toHtml;var wV=Mn.icon;Mn.layer;var EV=Mn.text;Mn.counter;function o1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Wn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o1(Object(n),!0).forEach(function(i){dn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function kh(t){return kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kh(t)}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IV(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function TV(t,e){if(t==null)return{};var n=IV(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Cg(t){return xV(t)||CV(t)||SV(t)||kV()}function xV(t){if(Array.isArray(t))return Sg(t)}function CV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function SV(t,e){if(t){if(typeof t=="string")return Sg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sg(t,e)}}function Sg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function kV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var AV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},US={exports:{}};(function(t){(function(e){var n=function(_,y,b){if(!c(y)||h(y)||f(y)||d(y)||l(y))return y;var w,I=0,D=0;if(u(y))for(w=[],D=y.length;I<D;I++)w.push(n(_,y[I],b));else{w={};for(var C in y)Object.prototype.hasOwnProperty.call(y,C)&&(w[_(C,b)]=n(_,y[C],b))}return w},i=function(_,y){y=y||{};var b=y.separator||"_",w=y.split||/(?=[A-Z])/;return _.split(w).join(b)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,b){return b?b.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var y=s(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return i(_,y).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,y){var b=y&&"process"in y?y.process:y;return typeof b!="function"?_:function(w,I){return b(w,_,I)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,y){return n(g(s,y),_)},decamelizeKeys:function(_,y){return n(g(o,y),_,y)},pascalizeKeys:function(_,y){return n(g(r,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(AV)})(US);var RV=US.exports,DV=["class","style"];function OV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=RV.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function MV(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function cy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return cy(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=MV(u);break;case"style":l.style=OV(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=TV(n,DV);return qo(t.tag,Wn(Wn(Wn({},e),{},{class:s.class,style:Wn(Wn({},s.style),o)},s.attrs),a),i)}var VS=!1;try{VS=!0}catch{}function PV(){if(!VS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ya(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dn({},t,e):{}}function NV(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dn(e,"fa-".concat(t.size),t.size!==null),dn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dn(e,"fa-pull-".concat(t.pull),t.pull!==null),dn(e,"fa-swap-opacity",t.swapOpacity),dn(e,"fa-bounce",t.bounce),dn(e,"fa-shake",t.shake),dn(e,"fa-beat",t.beat),dn(e,"fa-fade",t.fade),dn(e,"fa-beat-fade",t.beatFade),dn(e,"fa-flash",t.flash),dn(e,"fa-spin-pulse",t.spinPulse),dn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function a1(t){if(t&&kh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if(kh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var uy=Fr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=ke(function(){return a1(e.icon)}),r=ke(function(){return Ya("classes",NV(e))}),o=ke(function(){return Ya("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),a=ke(function(){return Ya("mask",a1(e.mask))}),l=ke(function(){return wV(s.value,Wn(Wn(Wn(Wn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Is(l,function(u){if(!u)return PV("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=ke(function(){return l.value?cy(l.value.abstract[0],{},i):null});return function(){return c.value}}});Fr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=FS.familyPrefix,r=ke(function(){return["".concat(s,"-layers")].concat(Cg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return qo("div",{class:r.value},i.default?i.default():[])}}});Fr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=FS.familyPrefix,r=ke(function(){return Ya("classes",[].concat(Cg(e.counter?["".concat(s,"-layers-counter")]:[]),Cg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=ke(function(){return Ya("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),a=ke(function(){var c=EV(e.value.toString(),Wn(Wn({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ke(function(){return cy(a.value,{},i)});return function(){return l.value}}});const on=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},LV={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(M(),U("div",{class:Hi(["flag",{inverted:e.inverted}]),style:Nr({backgroundColor:e.color})},[Z(T(uy),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},BS=on(LV,[["__scopeId","data-v-6db28dbb"]]),rs=am("board",()=>{const t=Qe(""),e=Qe(""),n=Qe("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const FV={key:0,class:"hidden-indicator"},UV=["src"],VV={class:"boardTileFlags"},BV={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=rs(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u,h,f;return M(),U("div",{class:Hi(["tile",{isSelected:T(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(l=(a=e.teamData)==null?void 0:a.verify)==null?void 0:l.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((c=e.tileData)==null?void 0:c.hidden)==!0||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=d=>i({id:e.tileData.id,...e.tileData}))},[(e==null?void 0:e.isEditor)==!0&&((h=e.tileData)==null?void 0:h.hidden)==!0?(M(),U("div",FV,[Z(T(uy),{class:"icon",icon:["fas","eye-low-vision"]})])):Ie("",!0),e.tileData.type!="null"?(M(),U("img",{key:1,src:e.teamData&&e.tileData.altImg&&((f=e.teamData)!=null&&f.collected.hasOwnProperty(e.tileData.id))?e.tileData.altImg:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,UV)):Ie("",!0),k("div",VV,[e.groupsData?(M(!0),U(Te,{key:0},cn(e.groupsData,d=>(M(),bn(BS,{key:"tile-flag-"+d.name+"-"+e.tileData.id,class:Hi(["tileFlag","flag-end-"+d.flagEnd]),icon:d.icon,color:"none",inverted:!0,style:Nr({opacity:(d==null?void 0:d.collected)!=null&&(d!=null&&d.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","style"]))),128)):Ie("",!0)])],2)}}},$S=on(BV,[["__scopeId","data-v-4bd3176d"]]);const $V={key:0,class:"bingo-board"},zV={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;_E(s=>({"64aaa7a8":e.boardData.settings.width,"644840fe":e.boardData.settings.height}));const n=rs(),i=lR(n.selectedTile);return(s,r)=>e.boardData?(M(),U("main",$V,[(M(!0),U(Te,null,cn(e.tilesData,o=>(M(),bn($S,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:T(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):Ie("",!0)}},hy=on(zV,[["__scopeId","data-v-87e12eab"]]);const Xf=t=>(es("data-v-2257b54e"),t=t(),ts(),t),HV={key:0},jV=Xf(()=>k("br",null,null,-1)),WV={class:"tooltiptext"},qV=Xf(()=>k("br",null,null,-1)),KV=Xf(()=>k("br",null,null,-1)),GV=Xf(()=>k("br",null,null,-1)),YV={key:0,class:"rules"},QV={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=rs(),i=n.boardUUID;return(s,r)=>{const o=Wi("router-link");return M(),U("div",null,[e.groupsData?(M(),U("ul",HV,[(M(!0),U(Te,null,cn(e.groupsData,(a,l)=>(M(),U("li",{key:l+a.id,class:"tooltip"},[Z(BS,{color:a.color,class:Hi(["tileFlag","flag-end-"+a.flagEnd]),inverted:a.name=="Ahka's Cum Balls",icon:a.icon,style:Nr({"--groupColor":a.color,"--width":a.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),ge(" "+de(a.name),1),jV,k("span",WV,[(M(!0),U(Te,null,cn(a.member,c=>(M(),U("span",{key:c},[ge(de(c),1),qV]))),128))]),ge(" score: "+de(a.points),1),KV,GV]))),128)),k("li",null,[Z(o,{class:"btn",to:{name:"stats-graph",params:{boardUUID:T(i)}}},{default:Yh(()=>[ge("Go To Graph")]),_:1},8,["to"])]),T(n).rules!=null?(M(),U("li",YV,de(T(n).rules),1)):Ie("",!0)])):Ie("",!0)])}}},XV=on(QV,[["__scopeId","data-v-2257b54e"]]);const JV={key:0},ZV={key:1,class:"items"},eB={__name:"sidePannel",setup(t){const e=rs();return(n,i)=>(M(),U(Te,null,[(M(),bn($S,{tileData:T(e).selectedTile,key:"side-pannel-tile-"+T(e).selectedTile},null,8,["tileData"])),k("h2",null,"{ "+de(T(e).selectedTile.id)+" }",1),k("h1",null,de(T(e).selectedTile.title)+de(T(e).selectedTile.points!=0?`, ${T(e).selectedTile.points} points`:""),1),T(e).selectedTile.description?(M(),U("p",JV,de(T(e).selectedTile.description),1)):Ie("",!0),T(e).selectedTile.items?(M(),U("p",ZV,[ge(" ellegible items: "),(M(!0),U(Te,null,cn(T(e).selectedTile.items,(s,r)=>(M(),U(Te,null,[ge(de(s.item)+" : "+de(s.count)+de(r!==T(e).selectedTile.items.length-1?",":""),1)],64))),256))])):Ie("",!0)],64))}},tB=on(eB,[["__scopeId","data-v-f5abb94f"]]),js=am("userStateStore",()=>{const t=Qe({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}}),nB=new Mi,iB=FM(),zS=async(t,e,n)=>{qO(iB,nB).then(i=>{n.setUser({loggedIn:!0,data:i.user})}).then(async()=>{(await H_(Se(le,"Users",n.user.data.uid))).exists()||hr(Se(le,"Users",n.user.data.uid),{count:0}),e.push(t)}).catch(i=>{const s=i.code,r=i.message;console.error(i,s,r)})},oa={__name:"loginButton",props:{destination:{type:Object,required:!0}},setup(t){const e=t,n=js(),i=qf();return(s,r)=>T(n).user&&T(n).user.data.uid!=0?(M(),U("button",{key:0,class:"btn dashboard",onClick:r[0]||(r[0]=Ve(o=>T(i).push({name:"userOverview"}),["prevent"]))}," To Dashboard ")):(M(),U("button",{key:1,class:"btn dashboard",onClick:r[1]||(r[1]=Ve(o=>T(zS)(e.destination,T(i),T(n)),["prevent"]))}," login "))}};const sB=t=>(es("data-v-25293789"),t=t(),ts(),t),rB={class:"container"},oB={class:"main-section"},aB={key:1},lB={style:{"justify-content":"end",display:"flex"}},cB=sB(()=>k("section",null,null,-1)),uB={key:1},hB={__name:"BoardView",setup(t){var h;const e=Qe("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=rs(),i=js(),s=sa();n.setBoardUUID(s.params.boardUUID),n.setSelectedTile("");const r=n.boardUUID,o=Qe(!1),{data:a}=Et(On(le,"Boards",r,"Groups")),l=Et(Se(le,"Boards",r));n.setRules((h=l.value)==null?void 0:h.rules);const c=ke(()=>{var d;let f={};return a&&((d=a==null?void 0:a.value)==null||d.forEach(async p=>{f[p.id]={...p}})),f||{}}),{data:u}=Et(On(le,`Boards/${r}/Tiles`));return(f,d)=>(M(),U("div",rB,[Z(oa,{destination:{name:"overview",params:{boardUUID:T(r)}}},null,8,["destination"]),T(l)&&T(u)&&(T(l).settings.public||T(i).user.data.uid==T(l).ownerID||T(i).user.data.uid==e.value)?(M(),U(Te,{key:0},[k("section",null,[k("h1",null,de(T(l).name),1)]),k("section",oB,[o.value?(M(),U(Te,{key:0},[T(c)?(M(),bn(XV,{key:0,class:"scoreCard",groupsData:T(c)},null,8,["groupsData"])):Ie("",!0)],64)):Ie("",!0),k("button",{class:"btn info",onClick:d[0]||(d[0]=()=>{o.value=!o.value})}," i "),(M(),bn(hy,{boardData:T(l),groupsData:T(c),tilesData:T(u),key:"bingo-board-"+T(n).boardUUID},null,8,["boardData","groupsData","tilesData"])),T(n).selectedTile!=""?(M(),U("aside",aB,[k("div",lB,[k("button",{class:"btn close",onClick:d[1]||(d[1]=()=>{T(n).setSelectedTile("")})}," ╳ ")]),T(n).selectedTile!=""?(M(),bn(tB,{key:0})):Ie("",!0)])):Ie("",!0)]),cB],64)):(M(),U("h1",uB,"Not authenticated"))]))}},fB=on(hB,[["__scopeId","data-v-25293789"]]);const dB=t=>(es("data-v-409f2e33"),t=t(),ts(),t),pB=["for"],gB=dB(()=>k("br",null,null,-1)),mB=["id","checked","onClick"],_B={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=ke(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],Mt(Se(le,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Mt(Se(le,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,Mt(Se(le,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Mt(Se(le,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&Mt(Se(le,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(M(),U("div",{key:e.tileData.id},[k("h2",null,"{ "+de(e.tileData.id.split("")[0])+" , "+de(e.tileData.id.split("")[1])+" }",1),k("ul",null,[(M(!0),U(Te,null,cn(e.groupsData,o=>(M(),U("li",{key:o.id+T(n).id,class:Hi({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[k("label",{for:o.id+T(n).id},[ge(de(o.name)+" : "+de(o.verify.hasOwnProperty(e.tileData.id)),1),gB,ge(" collected: "),(M(),U("input",{id:o.id+T(n).id,type:"checkbox",class:"toggle",key:o.id+T(n).id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:Ve(a=>i({tile:T(n),group:o}),["prevent"])},null,8,mB))],8,pB)],2))),128))])])):Ie("",!0)}},yB=on(_B,[["__scopeId","data-v-409f2e33"]]);const vB={class:"container"},bB={key:0},wB={key:0},EB={key:1},IB={__name:"ModeratorView",setup(t){const e=rs(),n=js(),i=Qe("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),s=sa(),r=ke(()=>s.params.boardUUID),{data:o}=Et(On(le,"Boards",r.value,"Groups")),a=Et(Se(le,"Boards",r.value)),l=ke(()=>{var h;let u={};return o&&((h=o==null?void 0:o.value)==null||h.forEach(f=>{f.name!="moderator"&&(u[f.id]={id:f.id,name:f.name,member:f.members,icon:f.icon,color:f.color,points:f.points,flagEnd:f.flagEnd,collected:f.collected,verify:f.verify})})),u||{}}),{data:c}=Et(On(le,`Boards/${r.value}/Tiles`));return(u,h)=>{var f;return M(),U("div",vB,[Z(oa,{destination:{name:"moderator",params:T(r)}},null,8,["destination"]),k("section",null,[((f=T(a))==null?void 0:f.name)!=null?(M(),U("h1",bB,de(T(a).name),1)):Ie("",!0)]),T(n).user&&T(n).user.data.uid!=0&&(T(n).user.data.uid==T(a).ownerID||T(n).user.data.uid==i.value||T(a).moderators.includes(T(n).user.data.uid)||T(a).editors.includes(T(n).user.data.uid))?(M(),U("section",wB,[Z(hy,{boardData:T(a),groupsData:T(l),tilesData:T(c)},null,8,["boardData","groupsData","tilesData"]),k("aside",null,[(M(),bn(yB,{tileData:T(e).selectedTile,key:T(e).selectedTile.id,boardUUID:T(r),groupsData:T(l),boardData:T(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(M(),U("section",EB,"please log in or return to the [board]"))])}}},TB=on(IB,[["__scopeId","data-v-0e806451"]]);const xB={class:"tile"},CB={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(M(),U("div",xB,de(e.tile.coordinates),1))}},SB=on(CB,[["__scopeId","data-v-7a1ae405"]]),kB=am("boardCreate",()=>{const t=Qe({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const HS=t=>(es("data-v-f6da9688"),t=t(),ts(),t),AB=["onKeydown"],RB={class:"pen"},DB=HS(()=>k("br",null,null,-1)),OB=HS(()=>k("br",null,null,-1)),MB={key:0,class:"bingo-board"},PB=["onClick"],NB={key:1},LB={key:2},FB={__name:"NewBoard",setup(t){_E(h=>({"17fc17a3":s.value.settings.width,"64903a2c":s.value.settings.height}));const e=kB(),n=js(),i=qf(),s=Qe({name:"<name of bingo board>",settings:{width:2,height:2,public:!1}}),r=Et(Se(le,"Users",`${n.user.data.uid}`)),o=Qe(null),a=()=>{o.value.focus()},l=h=>{h.target.blur(),o.value.innerText.trim()==""?(s.value.name="Enter title here",o.value.innerText="Enter title here"):s.value.name=o.value.innerText.trim()},c=ke(()=>{let h=[];for(let f=0;f<=parseInt(s.value.settings.width)*s.value.settings.height-1;f++){let d=(Math.floor(f/parseInt(s.value.settings.width))+1)*100+(f%parseInt(s.value.settings.width)+1);h.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:d,img:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"})}return h}),u=async()=>{const h=Se(On(le,"Boards")),f=Se(On(le,"Boards",h.id,"Groups"));await hr(h,{...s.value,ownerID:n.user.data.uid}).then(()=>{c.value.forEach(d=>{hr(Se(le,"Boards",h.id,"Tiles",`${d.coordinates}`),{...d})})}).then(()=>{hr(Se(le,f.path),{name:"all",collected:{},verify:{},icon:"frog",color:"#8a038f"}),hr(Se(le,"Users",`${n.user.data.uid}`),{count:r.value.count+1}),e.setSelectedTile(""),i.push({name:"editBoard",params:{boardUUID:h.id}})})};return(h,f)=>{var p,g;const d=Wi("font-awesome-icon");return M(),U(Te,null,[Z(oa,{destination:{name:"userOverview"}}),T(n).user.loggedIn&&T(n).user.data.uid!=0&&((p=T(r))==null?void 0:p.count)<5?(M(),U(Te,{key:0},[k("h1",{class:"title-wrap",onClick:f[0]||(f[0]=Ve(m=>a(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:o,contenteditable:"",spellcheck:"false",onKeydown:Pi(l,["enter"]),onBlur:l},de(s.value.name),41,AB),k("span",RB,[Z(d,{icon:["fas","pen"]})])]),k("div",null,[ge(" name: width: "),xn(k("input",{min:"2",max:"9",name:"width",type:"range","onUpdate:modelValue":f[1]||(f[1]=m=>s.value.settings.width=m)},null,512),[[Kn,s.value.settings.width]]),ge(de(s.value.settings.width),1),DB,ge(" height: "),xn(k("input",{min:"2",max:"9",name:"height",type:"range","onUpdate:modelValue":f[2]||(f[2]=m=>s.value.settings.height=m)},null,512),[[Kn,s.value.settings.height]]),ge(de(s.value.settings.height),1),OB,ge(" total tiles: "+de(s.value.settings.width*s.value.settings.height),1)]),T(c)?(M(),U("main",MB,[(M(!0),U(Te,null,cn(T(c),m=>(M(),bn(SB,{key:m.coordinates,tile:m},null,8,["tile"]))),128))])):Ie("",!0),k("button",{class:"btn",onClick:Ve(u,["prevent"])},"Save Settings",8,PB)],64)):Ie("",!0),T(n).user.loggedIn?Ie("",!0):(M(),U("h1",NB,"not authenticated")),((g=T(r))==null?void 0:g.count)>=5?(M(),U("h1",LB,"You've exceded the 5 board limit")):Ie("",!0)],64)}}},UB=on(FB,[["__scopeId","data-v-f6da9688"]]);const yc=t=>(es("data-v-5ac81ce0"),t=t(),ts(),t),VB=yc(()=>k("h2",null,"User:",-1)),BB=yc(()=>k("br",null,null,-1)),$B={class:"UID"},zB=yc(()=>k("br",null,null,-1)),HB=yc(()=>k("h2",null,"your boards:",-1)),jB={key:0},WB={class:"iconSpan"},qB=yc(()=>k("br",null,null,-1)),KB=["checked","onClick"],GB={key:1},YB={key:2},QB={class:"iconSpan"},XB={key:3},JB={key:4},ZB={class:"iconSpan"},e7={key:1},t7={__name:"UserOverview",setup(t){const e=js(),n=Qe("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),i=Et(Se(le,"Users",`${e.user.data.uid}`)),s=On(le,"Boards"),r=ke(()=>{let d="==";return e.user.data.uid==n.value&&(d="!="),d}),o=ke(()=>{let d="==";return e.user.data.uid==n.value?d="0":d=e.user.data.uid,d}),a=Et(Md(s,Pd("ownerID",r.value,o.value))),l=Et(Md(s,Pd("moderators","array-contains",e.user.data.uid))),c=Et(Md(s,Pd("editors","array-contains",e.user.data.uid))),u=qf(),h=(d,p)=>{u.push({name:d,params:{boardUUID:p}})},f=d=>{let p={...d};p.settings.public=!d.settings.public,Mt(Se(le,"Boards",d.id),p)};return e.user.loggedIn||u.push({name:"loginView"}),(d,p)=>{var _;const g=Wi("font-awesome-icon"),m=Wi("router-link");return T(e).user.loggedIn&&T(e).user&&T(e).user.data.uid!="0"?(M(),U(Te,{key:0},[VB,ge(" Total boards: "+de((_=T(i))!=null&&_.count?T(i).count:0),1),BB,ge(" user ID: "),k("span",$B,de(T(e).user.data.uid),1),zB,ge(" share your user ID with people to have them add you as moderator / editor. "),HB,T(a)?(M(),U("ul",jB,[(M(!0),U(Te,null,cn(T(a),y=>(M(),U("li",{key:y},[k("span",null,de(y.name),1),k("span",WB,[Z(g,{onClick:b=>h("editBoard",y.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Z(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"]),Z(g,{onClick:b=>h("groupView",y.id),class:"ico",icon:["fas","user-group"]},null,8,["onClick"]),qB,ge(" Public: "),k("input",{class:"toggle",type:"checkbox",checked:y.settings.public,onClick:Ve(b=>f(y),["prevent"])},null,8,KB)])]))),128)),!T(i)||T(i).count<5?(M(),bn(m,{key:0,to:{name:"newBoard"},class:"btn"},{default:Yh(()=>[ge("+ create board")]),_:1})):Ie("",!0)])):Ie("",!0),T(c)?(M(),U("h2",GB,"boards you can edit:")):Ie("",!0),T(c)?(M(),U("ul",YB,[(M(!0),U(Te,null,cn(T(c),y=>(M(),U("li",{key:y},[k("span",null,de(y.name),1),k("span",QB,[Z(g,{onClick:b=>h("editBoard",y.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Z(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):Ie("",!0),T(l)?(M(),U("h2",XB,"boards you can moderate:")):Ie("",!0),T(l)?(M(),U("ul",JB,[(M(!0),U(Te,null,cn(T(l),y=>(M(),U("li",{key:y},[k("span",null,de(y.name),1),k("span",ZB,[Z(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):Ie("",!0)],64)):(M(),U("h1",e7,"Not Authenticated"))}}},n7=on(t7,[["__scopeId","data-v-5ac81ce0"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function vc(t){return t+.5|0}const ys=(t,e,n)=>Math.max(Math.min(t,n),e);function ka(t){return ys(vc(t*2.55),0,255)}function ks(t){return ys(vc(t*255),0,255)}function Oi(t){return ys(vc(t/2.55)/100,0,1)}function l1(t){return ys(vc(t*100),0,100)}const Nn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},kg=[..."0123456789ABCDEF"],i7=t=>kg[t&15],s7=t=>kg[(t&240)>>4]+kg[t&15],Xc=t=>(t&240)>>4===(t&15),r7=t=>Xc(t.r)&&Xc(t.g)&&Xc(t.b)&&Xc(t.a);function o7(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Nn[t[1]]*17,g:255&Nn[t[2]]*17,b:255&Nn[t[3]]*17,a:e===5?Nn[t[4]]*17:255}:(e===7||e===9)&&(n={r:Nn[t[1]]<<4|Nn[t[2]],g:Nn[t[3]]<<4|Nn[t[4]],b:Nn[t[5]]<<4|Nn[t[6]],a:e===9?Nn[t[7]]<<4|Nn[t[8]]:255})),n}const a7=(t,e)=>t<255?e(t):"";function l7(t){var e=r7(t)?i7:s7;return t?"#"+e(t.r)+e(t.g)+e(t.b)+a7(t.a,e):void 0}const c7=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function jS(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function u7(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function h7(t,e,n){const i=jS(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function f7(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function fy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=f7(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function dy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ks)}function py(t,e,n){return dy(jS,t,e,n)}function d7(t,e,n){return dy(h7,t,e,n)}function p7(t,e,n){return dy(u7,t,e,n)}function WS(t){return(t%360+360)%360}function g7(t){const e=c7.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?ka(+e[5]):ks(+e[5]));const s=WS(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=d7(s,r,o):e[1]==="hsv"?i=p7(s,r,o):i=py(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function m7(t,e){var n=fy(t);n[0]=WS(n[0]+e),n=py(n),t.r=n[0],t.g=n[1],t.b=n[2]}function _7(t){if(!t)return;const e=fy(t),n=e[0],i=l1(e[1]),s=l1(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Oi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const c1={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},u1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function y7(){const t={},e=Object.keys(u1),n=Object.keys(c1);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,c1[r]);r=parseInt(u1[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Jc;function v7(t){Jc||(Jc=y7(),Jc.transparent=[0,0,0,0]);const e=Jc[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const b7=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function w7(t){const e=b7.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?ka(o):ys(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?ka(i):ys(i,0,255)),s=255&(e[4]?ka(s):ys(s,0,255)),r=255&(e[6]?ka(r):ys(r,0,255)),{r:i,g:s,b:r,a:n}}}function E7(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Oi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Wd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Xr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function I7(t,e,n){const i=Xr(Oi(t.r)),s=Xr(Oi(t.g)),r=Xr(Oi(t.b));return{r:ks(Wd(i+n*(Xr(Oi(e.r))-i))),g:ks(Wd(s+n*(Xr(Oi(e.g))-s))),b:ks(Wd(r+n*(Xr(Oi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Zc(t,e,n){if(t){let i=fy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=py(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function qS(t,e){return t&&Object.assign(e||{},t)}function h1(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ks(t[3]))):(e=qS(t,{r:0,g:0,b:0,a:1}),e.a=ks(e.a)),e}function T7(t){return t.charAt(0)==="r"?w7(t):g7(t)}class Ml{constructor(e){if(e instanceof Ml)return e;const n=typeof e;let i;n==="object"?i=h1(e):n==="string"&&(i=o7(e)||v7(e)||T7(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=qS(this._rgb);return e&&(e.a=Oi(e.a)),e}set rgb(e){this._rgb=h1(e)}rgbString(){return this._valid?E7(this._rgb):void 0}hexString(){return this._valid?l7(this._rgb):void 0}hslString(){return this._valid?_7(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=I7(this._rgb,e._rgb,n)),this}clone(){return new Ml(this.rgb)}alpha(e){return this._rgb.a=ks(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=vc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Zc(this._rgb,2,e),this}darken(e){return Zc(this._rgb,2,-e),this}saturate(e){return Zc(this._rgb,1,e),this}desaturate(e){return Zc(this._rgb,1,-e),this}rotate(e){return m7(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function ki(){}const x7=(()=>{let t=0;return()=>t++})();function it(t){return t===null||typeof t>"u"}function ut(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Be(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Pt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function In(t,e){return Pt(t)?t:e}function De(t,e){return typeof t>"u"?e:t}const C7=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ye(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function je(t,e,n,i){let s,r,o;if(ut(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(Be(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Ah(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Rh(t){if(ut(t))return t.map(Rh);if(Be(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Rh(t[n[s]]);return e}return t}function KS(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function S7(t,e,n,i){if(!KS(t))return;const s=e[t],r=n[t];Be(s)&&Be(r)?Pl(s,r,i):e[t]=Rh(r)}function Pl(t,e,n){const i=ut(e)?e:[e],s=i.length;if(!Be(t))return t;n=n||{};const r=n.merger||S7;let o;for(let a=0;a<s;++a){if(o=i[a],!Be(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function Qa(t,e){return Pl(t,e,{merger:k7})}function k7(t,e,n){if(!KS(t))return;const i=e[t],s=n[t];Be(i)&&Be(s)?Qa(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Rh(s))}const f1={"":t=>t,x:t=>t.x,y:t=>t.y};function A7(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function R7(t){const e=A7(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Dh(t,e){return(f1[e]||(f1[e]=R7(e)))(t)}function gy(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Oh=t=>typeof t<"u",Vs=t=>typeof t=="function",d1=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function D7(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const kt=Math.PI,Vn=2*kt,O7=Vn+kt,Mh=Number.POSITIVE_INFINITY,M7=kt/180,yn=kt/2,Gs=kt/4,p1=kt*2/3,vs=Math.log10,Bo=Math.sign;function Xa(t,e,n){return Math.abs(t-e)<n}function g1(t){const e=Math.round(t);t=Xa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(vs(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function P7(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Nl(t){return!isNaN(parseFloat(t))&&isFinite(t)}function N7(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function GS(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function bs(t){return t*(kt/180)}function my(t){return t*(180/kt)}function m1(t){if(!Pt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function L7(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*kt&&(r+=Vn),{angle:r,distance:s}}function Ag(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function F7(t,e){return(t-e+O7)%Vn-kt}function zn(t){return(t%Vn+Vn)%Vn}function YS(t,e,n,i){const s=zn(t),r=zn(e),o=zn(n),a=zn(r-s),l=zn(o-s),c=zn(s-r),u=zn(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function U7(t){return Fn(t,-32768,32767)}function Aa(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function _y(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const pr=(t,e,n,i)=>_y(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),V7=(t,e,n)=>_y(t,n,i=>t[i][e]>=n);function B7(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const QS=["push","pop","shift","splice","unshift"];function $7(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),QS.forEach(n=>{const i="_onData"+gy(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function _1(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(QS.forEach(r=>{delete t[r]}),delete t._chartjs)}function z7(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const XS=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function JS(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,XS.call(window,()=>{i=!1,t.apply(e,n)}))}}function H7(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const yy=t=>t==="start"?"left":t==="end"?"right":"center",Wt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,j7=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function W7(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=Fn(Math.min(pr(a,o.axis,c).lo,n?i:pr(e,l,o.getPixelForValue(c)).lo),0,i-1)),f?r=Fn(Math.max(pr(a,o.axis,u,!0).hi+1,n?0:pr(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function q7(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const eu=t=>t===0||t===1,y1=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Vn/n)),v1=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Vn/n)+1,Ja={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*yn)+1,easeOutSine:t=>Math.sin(t*yn),easeInOutSine:t=>-.5*(Math.cos(kt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>eu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>eu(t)?t:y1(t,.075,.3),easeOutElastic:t=>eu(t)?t:v1(t,.075,.3),easeInOutElastic(t){return eu(t)?t:t<.5?.5*y1(t*2,.1125,.45):.5+.5*v1(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ja.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ja.easeInBounce(t*2)*.5:Ja.easeOutBounce(t*2-1)*.5+.5};function vy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function b1(t){return vy(t)?t:new Ml(t)}function qd(t){return vy(t)?t:new Ml(t).saturate(.5).darken(.1).hexString()}const K7=["x","y","borderWidth","radius","tension"],G7=["color","borderColor","backgroundColor"];function Y7(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:G7},numbers:{type:"number",properties:K7}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function Q7(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const w1=new Map;function X7(t,e){e=e||{};const n=t+JSON.stringify(e);let i=w1.get(n);return i||(i=new Intl.NumberFormat(t,e),w1.set(n,i)),i}function by(t,e,n){return X7(e,n).format(t)}const ZS={values(t){return ut(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=J7(t,n)}const o=vs(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),by(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(vs(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?ZS.numeric.call(this,t,e,n):""}};function J7(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Jf={formatters:ZS};function Z7(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Jf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Mr=Object.create(null),Rg=Object.create(null);function Za(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Kd(t,e,n){return typeof e=="string"?Pl(Za(t,e),n):Pl(Za(t,""),e)}class e${constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>qd(s.backgroundColor),this.hoverBorderColor=(i,s)=>qd(s.borderColor),this.hoverColor=(i,s)=>qd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Kd(this,e,n)}get(e){return Za(this,e)}describe(e,n){return Kd(Rg,e,n)}override(e,n){return Kd(Mr,e,n)}route(e,n,i,s){const r=Za(this,e),o=Za(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return Be(l)?Object.assign({},c,l):De(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var dt=new e$({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Y7,Q7,Z7]);function t$(t){return!t||it(t.size)||it(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ph(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function n$(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,f;for(l=0;l<a;l++)if(h=n[l],h!=null&&!ut(h))o=Ph(t,s,r,o,h);else if(ut(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!ut(f)&&(o=Ph(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(l=0;l<d;l++)delete s[r[l]];r.splice(0,d)}return o}function Ys(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function E1(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Dg(t,e,n,i){ek(t,e,n,i,null)}function ek(t,e,n,i,s){let r,o,a,l,c,u,h,f;const d=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*M7;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,g,0,0,Vn):t.arc(n,i,g,0,Vn),t.closePath();break;case"triangle":u=s?s/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=p1,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=p1,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(m+Gs)*l,h=Math.cos(m+Gs)*(s?s/2-c:l),a=Math.sin(m+Gs)*l,f=Math.sin(m+Gs)*(s?s/2-c:l),t.arc(n-h,i-a,c,m-kt,m-yn),t.arc(n+f,i-o,c,m-yn,m),t.arc(n+h,i+a,c,m,m+yn),t.arc(n-f,i+o,c,m+yn,m+kt),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}m+=Gs;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":m+=Gs;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),m+=Gs,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Vi(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function wy(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Ey(t){t.restore()}function i$(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function s$(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function r$(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),it(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function o$(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function a$(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Pr(t,e,n,i,s,r={}){const o=ut(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,r$(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&a$(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),it(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),o$(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Nh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-yn,kt,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,kt,yn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,yn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-yn,!0),t.lineTo(n+o.topLeft,i)}const l$=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,c$=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function u$(t,e){const n=(""+t).match(l$);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const h$=t=>+t||0;function tk(t,e){const n={},i=Be(e),s=i?Object.keys(e):e,r=Be(t)?i?o=>De(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=h$(r(o));return n}function f$(t){return tk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function yo(t){return tk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function rn(t){const e=f$(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function It(t,e){t=t||{},e=e||dt.font;let n=De(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=De(t.style,e.style);i&&!(""+i).match(c$)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:De(t.family,e.family),lineHeight:u$(De(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:De(t.weight,e.weight),string:""};return s.string=t$(s),s}function tu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&ut(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function d$(t,e,n){const{min:i,max:s}=t,r=C7(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Ws(t,e){return Object.assign(Object.create(t),e)}function Iy(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=rk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Iy([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return ik(a,l,()=>w$(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return T1(a).includes(l)},ownKeys(a){return T1(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function $o(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:nk(t,i),setContext:r=>$o(t,r,n,i),override:r=>$o(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return ik(r,o,()=>g$(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function nk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Vs(n)?n:()=>n,isIndexable:Vs(i)?i:()=>i}}const p$=(t,e)=>t?t+gy(e):e,Ty=(t,e)=>Be(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function ik(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function g$(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Vs(a)&&o.isScriptable(e)&&(a=m$(e,a,t,n)),ut(a)&&a.length&&(a=_$(e,a,t,o.isIndexable)),Ty(e,a)&&(a=$o(a,s,r&&r[e],o)),a}function m$(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),Ty(t,l)&&(l=xy(s._scopes,s,t,l)),l}function _$(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(Be(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=xy(c,s,t,u);e.push($o(h,r,o&&o[t],a))}}return e}function sk(t,e,n){return Vs(t)?t(e,n):t}const y$=(t,e)=>t===!0?e:typeof t=="string"?Dh(e,t):void 0;function v$(t,e,n,i,s){for(const r of e){const o=y$(n,r);if(o){t.add(o);const a=sk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function xy(t,e,n,i){const s=e._rootScopes,r=sk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=I1(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=I1(a,o,r,l,i),l===null)?!1:Iy(Array.from(a),[""],s,r,()=>b$(e,n,i))}function I1(t,e,n,i,s){for(;n;)n=v$(t,e,n,i,s);return n}function b$(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return ut(s)&&Be(n)?n:s||{}}function w$(t,e,n,i){let s;for(const r of e)if(s=rk(p$(r,t),n),typeof s<"u")return Ty(t,s)?xy(n,i,t,s):s}function rk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function T1(t){let e=t._keys;return e||(e=t._keys=E$(t._scopes)),e}function E$(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const I$=Number.EPSILON||1e-14,zo=(t,e)=>e<t.length&&!t[e].skip&&t[e],ok=t=>t==="x"?"y":"x";function T$(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Ag(r,s),l=Ag(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function x$(t,e,n){const i=t.length;let s,r,o,a,l,c=zo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=zo(t,u+1),!(!l||!c)){if(Xa(e[u],0,I$)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function C$(t,e,n="x"){const i=ok(n),s=t.length;let r,o,a,l=zo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=zo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function S$(t,e="x"){const n=ok(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=zo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=zo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?Bo(s[o-1])!==Bo(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}x$(t,s,r),C$(t,r,e)}function nu(t,e,n){return Math.max(Math.min(t,n),e)}function k$(t,e){let n,i,s,r,o,a=Vi(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Vi(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=nu(s.cp1x,e.left,e.right),s.cp1y=nu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=nu(s.cp2x,e.left,e.right),s.cp2y=nu(s.cp2y,e.top,e.bottom)))}function A$(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")S$(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=T$(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&k$(t,n)}function ak(){return typeof window<"u"&&typeof document<"u"}function Cy(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Lh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Zf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function R$(t,e){return Zf(t).getPropertyValue(e)}const D$=["top","right","bottom","left"];function wr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=D$[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const O$=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function M$(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(O$(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function tr(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Zf(n),r=s.boxSizing==="border-box",o=wr(s,"padding"),a=wr(s,"border","width"),{x:l,y:c,box:u}=M$(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/d*n.width/i),y:Math.round((c-f)/p*n.height/i)}}function P$(t,e,n){let i,s;if(e===void 0||n===void 0){const r=Cy(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=Zf(r),l=wr(a,"border","width"),c=wr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=Lh(a.maxWidth,r,"clientWidth"),s=Lh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Mh,maxHeight:s||Mh}}const iu=t=>Math.round(t*10)/10;function N$(t,e,n,i){const s=Zf(t),r=wr(s,"margin"),o=Lh(s.maxWidth,t,"clientWidth")||Mh,a=Lh(s.maxHeight,t,"clientHeight")||Mh,l=P$(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const f=wr(s,"border","width"),d=wr(s,"padding");c-=d.width+f.width,u-=d.height+f.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=iu(Math.min(c,o,l.maxWidth)),u=iu(Math.min(u,a,l.maxHeight)),c&&!u&&(u=iu(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=iu(Math.floor(u*i))),{width:c,height:u}}function x1(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const L$=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function C1(t,e){const n=R$(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function nr(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function F$(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function U$(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=nr(t,s,n),a=nr(s,r,n),l=nr(r,e,n),c=nr(o,a,n),u=nr(a,l,n);return nr(c,u,n)}const V$=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},B$=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function vo(t,e,n){return t?V$(e,n):B$()}function lk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function ck(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function uk(t){return t==="angle"?{between:YS,compare:F7,normalize:zn}:{between:Aa,compare:(e,n)=>e-n,normalize:e=>e}}function S1({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function $$(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=uk(i),l=e.length;let{start:c,end:u,loop:h}=t,f,d;if(h){for(c+=l,u+=l,f=0,d=l;f<d&&o(a(e[c%l][i]),s,r);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function z$(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=uk(i),{start:u,end:h,loop:f,style:d}=$$(t,e,n),p=[];let g=!1,m=null,_,y,b;const w=()=>l(s,b,_)&&a(s,b)!==0,I=()=>a(r,_)===0||l(r,b,_),D=()=>g||w(),C=()=>!g||I();for(let x=u,F=u;x<=h;++x)y=e[x%o],!y.skip&&(_=c(y[i]),_!==b&&(g=l(_,s,r),m===null&&D()&&(m=a(_,s)===0?x:F),m!==null&&C()&&(p.push(S1({start:m,end:x,loop:f,count:o,style:d})),m=null),F=x,b=_));return m!==null&&p.push(S1({start:m,end:h,loop:f,count:o,style:d})),p}function H$(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=z$(i[s],t.points,e);r.length&&n.push(...r)}return n}function j$(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function W$(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function q$(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=j$(n,s,r,i);if(i===!0)return k1(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return k1(t,W$(n,o,l,c),n,e)}function k1(t,e,n,i){return!i||!i.setContext||!n?e:K$(t,e,n,i)}function K$(t,e,n,i){const s=t._chart.getContext(),r=A1(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,f=h;function d(p,g,m,_){const y=a?-1:1;if(p!==g){for(p+=l;n[p%l].skip;)p-=y;for(;n[g%l].skip;)g+=y;p%l!==g%l&&(c.push({start:p%l,end:g%l,loop:m,style:_}),u=_,h=g%l)}}for(const p of e){h=a?h:p.start;let g=n[h%l],m;for(f=h+1;f<=p.end;f++){const _=n[f%l];m=A1(i.setContext(Ws(s,{type:"segment",p0:g,p1:_,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),G$(m,u)&&d(h,f-1,p.loop,u),g=_,u=m}h<f-1&&d(h,f-1,p.loop,u)}return c}function A1(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function G$(t,e){if(!e)return!1;const n=[],i=function(s,r){return vy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Y${constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=XS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ai=new Y$;const R1="transparent",Q$={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=b1(t||R1),s=i.valid&&b1(e||R1);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class X${constructor(e,n,i,s){const r=n[i];s=tu([e.to,s,r,e.from]);const o=tu([e.from,r,s]);this._active=!0,this._fn=e.fn||Q$[e.type||typeof o],this._easing=Ja[e.easing]||Ja.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=tu([e.to,n,s,e.from]),this._from=tu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class hk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Be(e))return;const n=Object.keys(dt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Be(r))return;const o={};for(const a of n)o[a]=r[a];(ut(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=Z$(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&J$(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[c]=u;continue}r[c]=h=new X$(f,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ai.add(this._chart,i),!0}}function J$(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function Z$(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function D1(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function e9(t,e,n){if(n===!1)return!1;const i=D1(t,n),s=D1(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function t9(t){let e,n,i,s;return Be(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function fk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function O1(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],Pt(c)&&(r||e===0||Bo(e)===Bo(c))&&(e+=c)}return e}}function n9(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function M1(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function i9(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function s9(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function r9(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function P1(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function N1(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=i9(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[l]:g,[c]:m}=p,_=p._stacks||(p._stacks={});f=_[c]=r9(s,u,g),f[a]=m,f._top=P1(f,o,!0,i.type),f._bottom=P1(f,o,!1,i.type);const y=f._visualValues||(f._visualValues={});y[a]=m}}function Gd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function o9(t,e){return Ws(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function a9(t,e,n){return Ws(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function ma(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Yd=t=>t==="reset"||t==="none",L1=(t,e)=>e?t:Object.assign({},t),l9=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:fk(n,!0),values:null};class el{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=M1(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ma(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=De(i.xAxisID,Gd(e,"x")),o=n.yAxisID=De(i.yAxisID,Gd(e,"y")),a=n.rAxisID=De(i.rAxisID,Gd(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&_1(this._data,this),e._stacked&&ma(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Be(n))this._data=n9(n);else if(i!==n){if(i){_1(i,this);const s=this._cachedMeta;ma(s),s._parsed=[]}n&&Object.isExtensible(n)&&$7(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=M1(n.vScale,n),n.stack!==i.stack&&(s=!0,ma(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&N1(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{ut(s[e])?f=this.parseArrayData(i,s,e,n):Be(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],l&&(d()&&(l=!1),c=h);i._sorted=l}o&&N1(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],c[u]={x:r.parse(Dh(d,a),f),y:o.parse(Dh(d,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:fk(s,!0),values:n._stacks[e.axis]._visualValues};return O1(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=O1(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=l9(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=s9(a);let f,d;function p(){d=s[f];const g=d[a.axis];return!Pt(d[e.axis])||u>g||h<g}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,e,d,l),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,e,d,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Pt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=t9(De(this.options.clip,e9(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=a9(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=o9(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&Oh(i);if(a)return L1(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),u),d=Object.keys(dt.elements[e]),p=()=>this.getContext(i,s,n),g=c.resolveNamedOptions(f,d,p,h);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(L1(g,l))),g}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(e,i,n))}const c=new hk(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Yd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Yd(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Yd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&ma(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ae(el,"defaults",{}),ae(el,"datasetElementType",null),ae(el,"dataElementType",null);class ku extends el{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=W7(n,s,o);this._drawStart=a,this._drawCount=l,q7(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:g}=this.options,m=Nl(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",y=n+i,b=e.length;let w=n>0&&this.getParsed(n-1);for(let I=0;I<b;++I){const D=e[I],C=_?D:{};if(I<n||I>=y){C.skip=!0;continue}const x=this.getParsed(I),F=it(x[d]),J=C[f]=o.getPixelForValue(x[f],I),ee=C[d]=r||F?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,x,l):x[d],I);C.skip=isNaN(J)||isNaN(ee)||F,C.stop=I>0&&Math.abs(x[f]-w[f])>m,g&&(C.parsed=x,C.raw=c.data[I]),h&&(C.options=u||this.resolveDataElementOptions(I,D.active?"active":s)),_||this.updateElement(D,I,C,s),w=x}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ae(ku,"id","line"),ae(ku,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ae(ku,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Qs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Sy{constructor(e){ae(this,"options");this.options=e||{}}static override(e){Object.assign(Sy.prototype,e)}init(){}formats(){return Qs()}parse(){return Qs()}format(){return Qs()}add(){return Qs()}diff(){return Qs()}startOf(){return Qs()}endOf(){return Qs()}}var c9={_date:Sy};function u9(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?V7:pr;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),f=l(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function bc(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:f}=u9(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,c,d)}}}function h9(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Qd(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||bc(t,n,e,function(a,l,c){!s&&!Vi(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function f9(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=L7(o,{x:e.x,y:e.y});YS(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return bc(t,n,e,r),s}function d9(t,e,n,i,s,r){let o=[];const a=h9(n);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const m=a(e,p);m<l?(o=[{element:u,datasetIndex:h,index:f}],l=m):m===l&&o.push({element:u,datasetIndex:h,index:f})}return bc(t,n,e,c),o}function Xd(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?f9(t,e,n,s):d9(t,e,n,i,s,r)}function F1(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return bc(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var p9={evaluateInteractionItems:bc,modes:{index(t,e,n,i){const s=tr(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Qd(t,s,r,i,o):Xd(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=tr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Qd(t,s,r,i,o):Xd(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=tr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Qd(t,s,r,i,o)},nearest(t,e,n,i){const s=tr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Xd(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=tr(e,t);return F1(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=tr(e,t);return F1(t,s,"y",n.intersect,i)}}};const dk=["left","top","right","bottom"];function _a(t,e){return t.filter(n=>n.pos===e)}function U1(t,e){return t.filter(n=>dk.indexOf(n.pos)===-1&&n.box.axis===e)}function ya(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function g9(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function m9(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!dk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function _9(t,e){const n=m9(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function y9(t){const e=g9(t),n=ya(e.filter(c=>c.box.fullSize),!0),i=ya(_a(e,"left"),!0),s=ya(_a(e,"right")),r=ya(_a(e,"top"),!0),o=ya(_a(e,"bottom")),a=U1(e,"x"),l=U1(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:_a(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function V1(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function pk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function v9(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!Be(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&pk(o,r.getPadding());const a=Math.max(0,e.outerWidth-V1(o,t,"left","right")),l=Math.max(0,e.outerHeight-V1(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function b9(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function w9(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Ra(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,w9(a.horizontal,e));const{same:h,other:f}=v9(e,n,a,i);c|=h&&s.length,u=u||f,l.fullSize||s.push(a)}return c&&Ra(s,e,n,i)||u}function su(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function B1(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,f=c.size||l.height;Oh(c.start)&&(o=c.start),l.fullSize?su(l,s.left,o,n.outerWidth-s.right-s.left,f):su(l,e.left+c.placed,o,h,f),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,f=c.size||l.width;Oh(c.start)&&(r=c.start),l.fullSize?su(l,r,s.top,f,n.outerHeight-s.bottom-s.top):su(l,r,e.top+c.placed,f,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var Un={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=rn(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=y9(t.boxes),l=a.vertical,c=a.horizontal;je(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=l.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);pk(f,rn(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=_9(l.concat(c),h);Ra(a.fullSize,d,h,p),Ra(l,d,h,p),Ra(c,d,h,p)&&Ra(l,d,h,p),b9(d),B1(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,B1(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},je(a.chartArea,g=>{const m=g.box;Object.assign(m,t.chartArea),m.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class gk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class E9 extends gk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Au="$chartjs",I9={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},$1=t=>t===null||t==="";function T9(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Au]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",$1(s)){const r=C1(t,"width");r!==void 0&&(t.width=r)}if($1(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=C1(t,"height");r!==void 0&&(t.height=r)}return t}const mk=L$?{passive:!0}:!1;function x9(t,e,n){t.addEventListener(e,n,mk)}function C9(t,e,n){t.canvas.removeEventListener(e,n,mk)}function S9(t,e){const n=I9[t.type]||t.type,{x:i,y:s}=tr(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Fh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function k9(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fh(a.addedNodes,i),o=o&&!Fh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function A9(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fh(a.removedNodes,i),o=o&&!Fh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Ll=new Map;let z1=0;function _k(){const t=window.devicePixelRatio;t!==z1&&(z1=t,Ll.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function R9(t,e){Ll.size||window.addEventListener("resize",_k),Ll.set(t,e)}function D9(t){Ll.delete(t),Ll.size||window.removeEventListener("resize",_k)}function O9(t,e,n){const i=t.canvas,s=i&&Cy(i);if(!s)return;const r=JS((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),R9(t,r),o}function Jd(t,e,n){n&&n.disconnect(),e==="resize"&&D9(t)}function M9(t,e,n){const i=t.canvas,s=JS(r=>{t.ctx!==null&&n(S9(r,t))},t);return x9(i,e,s),s}class P9 extends gk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(T9(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Au])return!1;const i=n[Au].initial;["height","width"].forEach(r=>{const o=i[r];it(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Au],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:k9,detach:A9,resize:O9}[n]||M9;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Jd,detach:Jd,resize:Jd}[n]||C9)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return N$(e,n,i,s)}isAttached(e){const n=Cy(e);return!!(n&&n.isConnected)}}function N9(t){return!ak()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?E9:P9}var hu;let Wr=(hu=class{constructor(){ae(this,"x");ae(this,"y");ae(this,"active",!1);ae(this,"options");ae(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Nl(this.x)&&Nl(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ae(hu,"defaults",{}),ae(hu,"defaultRoutes"),hu);function L9(t,e){const n=t.options.ticks,i=F9(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?V9(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return B9(e,c,r,o/s),c;const u=U9(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((l-a)/(o-1)):null;for(ru(e,c,u,it(d)?0:a-d,a),h=0,f=o-1;h<f;h++)ru(e,c,u,r[h],r[h+1]);return ru(e,c,u,l,it(d)?e.length:l+d),c}return ru(e,c,u),c}function F9(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function U9(t,e,n){const i=$9(t),s=e.length/n;if(!i)return Math.max(s,1);const r=P7(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function V9(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function B9(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function ru(t,e,n,i,s){const r=De(i,0),o=Math.min(De(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function $9(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const z9=t=>t==="left"?"right":t==="right"?"left":t,H1=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,j1=(t,e)=>Math.min(e||t,t);function W1(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function H9(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function j9(t,e){je(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function va(t){return t.drawTicks?t.tickLength:0}function q1(t,e){if(!t.display)return 0;const n=It(t.font,e),i=rn(t.padding);return(ut(t.text)?t.text.length:1)*n.lineHeight+i.height}function W9(t,e){return Ws(t,{scale:e,type:"scale"})}function q9(t,e,n){return Ws(t,{tick:n,index:e,type:"tick"})}function K9(t,e,n){let i=yy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=z9(i)),i}function G9(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,f,d,p;const g=o-s,m=a-r;if(t.isHorizontal()){if(d=Wt(i,r,a),Be(n)){const _=Object.keys(n)[0],y=n[_];p=u[_].getPixelForValue(y)+g-e}else n==="center"?p=(c.bottom+c.top)/2+g-e:p=H1(t,n,e);f=a-r}else{if(Be(n)){const _=Object.keys(n)[0],y=n[_];d=u[_].getPixelForValue(y)-m+e}else n==="center"?d=(c.left+c.right)/2-m+e:d=H1(t,n,e);p=Wt(i,o,s),h=n==="left"?-yn:yn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class qr extends Wr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=In(e,Number.POSITIVE_INFINITY),n=In(n,Number.NEGATIVE_INFINITY),i=In(i,Number.POSITIVE_INFINITY),s=In(s,Number.NEGATIVE_INFINITY),{min:In(e,i),max:In(n,s),minDefined:Pt(e),maxDefined:Pt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:In(n,In(i,n)),max:In(i,In(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ye(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=d$(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?W1(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=L9(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ye(this.options.afterUpdate,[this])}beforeSetDimensions(){Ye(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ye(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Ye(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ye(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Ye(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Ye(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ye(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=j1(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=Fn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),l=this.maxHeight-va(e.grid)-n.padding-q1(e.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),o=my(Math.min(Math.asin(Fn((u.highest.height+6)/a,-1,1)),Math.asin(Fn(l/c,-1,1))-Math.asin(Fn(f/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Ye(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ye(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=q1(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=va(r)+l):(e.height=this.maxHeight,e.width=va(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=bs(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:g*h.width+m*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(c,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;l?c?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ye(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)it(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=W1(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/j1(n,i));let c=0,u=0,h,f,d,p,g,m,_,y,b,w,I;for(h=0;h<n;h+=l){if(p=e[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},y=g.lineHeight,b=w=0,!it(p)&&!ut(p))b=Ph(s,_.data,_.gc,b,p),w=y;else if(ut(p))for(f=0,d=p.length;f<d;++f)I=p[f],!it(I)&&!ut(I)&&(b=Ph(s,_.data,_.gc,b,I),w+=y);o.push(b),a.push(w),c=Math.max(b,c),u=Math.max(w,u)}j9(r,n);const D=o.indexOf(c),C=a.indexOf(u),x=F=>({width:o[F]||0,height:a[F]||0});return{first:x(0),last:x(n-1),widest:x(D),highest:x(C),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return U7(this._alignToPixels?Ys(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=q9(this.getContext(),e,i))}return this.$context||(this.$context=W9(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=bs(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=va(r),d=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(we){return Ys(i,we,g)};let y,b,w,I,D,C,x,F,J,ee,oe,ye;if(o==="top")y=_(this.bottom),C=this.bottom-f,F=y-m,ee=_(e.top)+m,ye=e.bottom;else if(o==="bottom")y=_(this.top),ee=e.top,ye=_(e.bottom)-m,C=y+m,F=this.top+f;else if(o==="left")y=_(this.right),D=this.right-f,x=y-m,J=_(e.left)+m,oe=e.right;else if(o==="right")y=_(this.left),J=e.left,oe=_(e.right)-m,D=y+m,x=this.left+f;else if(n==="x"){if(o==="center")y=_((e.top+e.bottom)/2+.5);else if(Be(o)){const we=Object.keys(o)[0],be=o[we];y=_(this.chart.scales[we].getPixelForValue(be))}ee=e.top,ye=e.bottom,C=y+m,F=C+f}else if(n==="y"){if(o==="center")y=_((e.left+e.right)/2);else if(Be(o)){const we=Object.keys(o)[0],be=o[we];y=_(this.chart.scales[we].getPixelForValue(be))}D=y-m,x=D-f,J=e.left,oe=e.right}const Ke=De(s.ticks.maxTicksLimit,h),ve=Math.max(1,Math.ceil(h/Ke));for(b=0;b<h;b+=ve){const we=this.getContext(b),be=r.setContext(we),Ne=a.setContext(we),$t=be.lineWidth,hn=be.color,zt=Ne.dash||[],gt=Ne.dashOffset,Pn=be.tickWidth,si=be.tickColor,R=be.tickBorderDash||[],H=be.tickBorderDashOffset;w=H9(this,b,l),w!==void 0&&(I=Ys(i,w,$t),c?D=x=J=oe=I:C=F=ee=ye=I,d.push({tx1:D,ty1:C,tx2:x,ty2:F,x1:J,y1:ee,x2:oe,y2:ye,width:$t,color:hn,borderDash:zt,borderDashOffset:gt,tickWidth:Pn,tickColor:si,tickBorderDash:R,tickBorderDashOffset:H}))}return this._ticksLength=h,this._borderValue=y,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,f=va(i.grid),d=f+u,p=h?-u:d,g=-bs(this.labelRotation),m=[];let _,y,b,w,I,D,C,x,F,J,ee,oe,ye="middle";if(s==="top")D=this.bottom-p,C=this._getXAxisLabelAlignment();else if(s==="bottom")D=this.top+p,C=this._getXAxisLabelAlignment();else if(s==="left"){const ve=this._getYAxisLabelAlignment(f);C=ve.textAlign,I=ve.x}else if(s==="right"){const ve=this._getYAxisLabelAlignment(f);C=ve.textAlign,I=ve.x}else if(n==="x"){if(s==="center")D=(e.top+e.bottom)/2+d;else if(Be(s)){const ve=Object.keys(s)[0],we=s[ve];D=this.chart.scales[ve].getPixelForValue(we)+d}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")I=(e.left+e.right)/2-d;else if(Be(s)){const ve=Object.keys(s)[0],we=s[ve];I=this.chart.scales[ve].getPixelForValue(we)}C=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?ye="top":l==="end"&&(ye="bottom"));const Ke=this._getLabelSizes();for(_=0,y=a.length;_<y;++_){b=a[_],w=b.label;const ve=r.setContext(this.getContext(_));x=this.getPixelForTick(_)+r.labelOffset,F=this._resolveTickFontOptions(_),J=F.lineHeight,ee=ut(w)?w.length:1;const we=ee/2,be=ve.color,Ne=ve.textStrokeColor,$t=ve.textStrokeWidth;let hn=C;o?(I=x,C==="inner"&&(_===y-1?hn=this.options.reverse?"left":"right":_===0?hn=this.options.reverse?"right":"left":hn="center"),s==="top"?c==="near"||g!==0?oe=-ee*J+J/2:c==="center"?oe=-Ke.highest.height/2-we*J+J:oe=-Ke.highest.height+J/2:c==="near"||g!==0?oe=J/2:c==="center"?oe=Ke.highest.height/2-we*J:oe=Ke.highest.height-ee*J,h&&(oe*=-1),g!==0&&!ve.showLabelBackdrop&&(I+=J/2*Math.sin(g))):(D=x,oe=(1-ee)*J/2);let zt;if(ve.showLabelBackdrop){const gt=rn(ve.backdropPadding),Pn=Ke.heights[_],si=Ke.widths[_];let R=oe-gt.top,H=0-gt.left;switch(ye){case"middle":R-=Pn/2;break;case"bottom":R-=Pn;break}switch(C){case"center":H-=si/2;break;case"right":H-=si;break}zt={left:H,top:R,width:si+gt.width,height:Pn+gt.height,color:ve.backdropColor}}m.push({label:w,font:F,textOffset:oe,options:{rotation:g,color:be,strokeColor:Ne,strokeWidth:$t,textAlign:hn,textBaseline:ye,translation:[I,D],backdrop:zt}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-bs(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=Ys(e,this.left,o)-o/2,u=Ys(e,this.right,a)+a/2,h=f=l):(h=Ys(e,this.top,o)-o/2,f=Ys(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&wy(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Pr(i,c,0,u,l,a)}s&&Ey(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=It(i.font),o=rn(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||Be(n)?(l+=o.bottom,ut(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=G9(this,l,n,a);Pr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:K9(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=De(e.grid&&e.grid.z,-1),s=De(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==qr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return It(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class ou{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;X9(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,Y9(e,o,i),this.override&&dt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in dt[s]&&(delete dt[s][i],this.override&&delete Mr[i])}}function Y9(t,e,n){const i=Pl(Object.create(null),[n?dt.get(n):{},dt.get(e),t.defaults]);dt.set(e,i),t.defaultRoutes&&Q9(e,t.defaultRoutes),t.descriptors&&dt.describe(e,t.descriptors)}function Q9(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");dt.route(r,s,l,a)})}function X9(t){return"id"in t&&"defaults"in t}class J9{constructor(){this.controllers=new ou(el,"datasets",!0),this.elements=new ou(Wr,"elements"),this.plugins=new ou(Object,"plugins"),this.scales=new ou(qr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):je(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=gy(e);Ye(i["before"+s],[],i),n[e](i),Ye(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var li=new J9;class Z9{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Ye(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){it(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=De(i.options&&i.options.plugins,{}),r=ez(i);return s===!1&&!n?[]:nz(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function ez(t){const e={},n=[],i=Object.keys(li.plugins.items);for(let r=0;r<i.length;r++)n.push(li.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function tz(t,e){return!e&&t===!1?null:t===!0?{}:t}function nz(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=tz(i[l],s);c!==null&&r.push({plugin:a,options:iz(t.config,{plugin:a,local:n[l]},c,o)})}return r}function iz(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Og(t,e){const n=dt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function sz(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function rz(t,e){return t===e?"_index_":"_value_"}function K1(t){if(t==="x"||t==="y"||t==="r")return t}function oz(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Mg(t,...e){if(K1(t))return t;for(const n of e){const i=n.axis||oz(n.position)||t.length>1&&K1(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function G1(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function az(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return G1(t,"x",n[0])||G1(t,"y",n[0])}return{}}function lz(t,e){const n=Mr[t.type]||{scales:{}},i=e.scales||{},s=Og(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Be(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Mg(o,a,az(o,t),dt.scales[a.type]),c=rz(l,s),u=n.scales||{};r[o]=Qa(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Og(a,e),u=(Mr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=sz(h,l),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),Qa(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Qa(a,[dt.scales[a.type],dt.scale])}),r}function yk(t){const e=t.options||(t.options={});e.plugins=De(e.plugins,{}),e.scales=lz(t,e)}function vk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function cz(t){return t=t||{},t.data=vk(t.data),yk(t),t}const Y1=new Map,bk=new Set;function au(t,e){let n=Y1.get(t);return n||(n=e(),Y1.set(t,n),bk.add(n)),n}const ba=(t,e,n)=>{const i=Dh(e,n);i!==void 0&&t.add(i)};class uz{constructor(e){this._config=cz(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=vk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),yk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return au(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return au(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return au(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return au(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>ba(l,e,h))),u.forEach(h=>ba(l,s,h)),u.forEach(h=>ba(l,Mr[r]||{},h)),u.forEach(h=>ba(l,dt,h)),u.forEach(h=>ba(l,Rg,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),bk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Mr[n]||{},dt.datasets[n]||{},{type:n},dt,Rg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Q1(this._resolverCache,e,s);let l=o;if(fz(o,n)){r.$shared=!1,i=Vs(i)?i():i;const c=this.createResolver(e,i,a);l=$o(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=Q1(this._resolverCache,e,i);return Be(n)?$o(r,n,void 0,s):r}}function Q1(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Iy(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const hz=t=>Be(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Vs(t[n]),!1);function fz(t,e){const{isScriptable:n,isIndexable:i}=nk(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Vs(a)||hz(a))||o&&ut(a))return!0}return!1}var dz="4.3.0";const pz=["top","bottom","left","right","chartArea"];function X1(t,e){return t==="top"||t==="bottom"||pz.indexOf(t)===-1&&e==="x"}function J1(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Z1(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Ye(n&&n.onComplete,[t],e)}function gz(t){const e=t.chart,n=e.options.animation;Ye(n&&n.onProgress,[t],e)}function wk(t){return ak()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ru={},ew=t=>{const e=wk(t);return Object.values(Ru).filter(n=>n.canvas===e).pop()};function mz(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function _z(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function yz(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var us;let ed=(us=class{static register(...e){li.add(...e),tw()}static unregister(...e){li.remove(...e),tw()}constructor(e,n){const i=this.config=new uz(n),s=wk(e),r=ew(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||N9(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=x7(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Z9,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=H7(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ru[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ai.listen(this,"complete",Z1),Ai.listen(this,"progress",gz),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return it(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return li}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():x1(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return E1(this.canvas,this.ctx),this}stop(){return Ai.stop(this),this}resize(e,n){Ai.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,x1(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Ye(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};je(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Mg(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),je(r,o=>{const a=o.options,l=a.id,c=Mg(l,a),u=De(a.type,o.dtype);(a.position===void 0||X1(a.position,c)!==X1(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const f=li.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),je(s,(o,a)=>{o||delete i[a]}),je(i,o=>{Un.configure(this,o,o.options),Un.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(J1("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Og(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=li.getController(a),{datasetElementType:c,dataElementType:u}=dt.datasets[a];Object.assign(l,{dataElementType:li.getElement(u),datasetElementType:c&&li.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){je(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||je(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(J1("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){je(this.scales,e=>{Un.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!d1(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;mz(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!d1(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Un.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],je(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Vs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ai.has(this)?this.attached&&!Ai.running(this)&&Ai.start(this):(this.draw(),Z1({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=yz(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&wy(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&Ey(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Vi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=p9.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ws(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Oh(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ai.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),E1(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Ru[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};je(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){je(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},je(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Ah(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=D7(e),c=_z(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Ye(r.onHover,[e,a,this],this),l&&Ye(r.onClick,[e,a,this],this));const u=!Ah(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ae(us,"defaults",dt),ae(us,"instances",Ru),ae(us,"overrides",Mr),ae(us,"registry",li),ae(us,"version",dz),ae(us,"getChart",ew),us);function tw(){return je(ed.instances,t=>t._plugins.invalidate())}function Ek(t,e,n=e){t.lineCap=De(n.borderCapStyle,e.borderCapStyle),t.setLineDash(De(n.borderDash,e.borderDash)),t.lineDashOffset=De(n.borderDashOffset,e.borderDashOffset),t.lineJoin=De(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=De(n.borderWidth,e.borderWidth),t.strokeStyle=De(n.borderColor,e.borderColor)}function vz(t,e,n){t.lineTo(n.x,n.y)}function bz(t){return t.stepped?i$:t.tension||t.cubicInterpolationMode==="monotone"?s$:vz}function Ik(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function wz(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Ik(s,n,i),u=bz(r);let{move:h=!0,reverse:f}=i||{},d,p,g;for(d=0;d<=c;++d)p=s[(a+(f?c-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,g,p,f,r.stepped),g=p);return l&&(p=s[(a+(f?c:0))%o],u(t,g,p,f,r.stepped)),!!l}function Ez(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Ik(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,f,d,p,g,m,_;const y=w=>(o+(c?a-w:w))%r,b=()=>{g!==m&&(t.lineTo(u,m),t.lineTo(u,g),t.lineTo(u,_))};for(l&&(d=s[y(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[y(f)],d.skip)continue;const w=d.x,I=d.y,D=w|0;D===p?(I<g?g=I:I>m&&(m=I),u=(h*u+w)/++h):(b(),t.lineTo(w,I),p=D,h=0,g=m=I),_=I}b()}function Pg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?Ez:wz}function Iz(t){return t.stepped?F$:t.tension||t.cubicInterpolationMode==="monotone"?U$:nr}function Tz(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Ek(t,e.options),t.stroke(s)}function xz(t,e,n,i){const{segments:s,options:r}=e,o=Pg(e);for(const a of s)Ek(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const Cz=typeof Path2D=="function";function Sz(t,e,n,i){Cz&&!e.options.segment?Tz(t,e,n,i):xz(t,e,n,i)}class Da extends Wr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;A$(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=q$(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=H$(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=Iz(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:f}=o[c],d=r[h],p=r[f];if(d===p){a.push(d);continue}const g=Math.abs((s-d[n])/(p[n]-d[n])),m=l(d,p,g,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Pg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Pg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),Sz(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ae(Da,"id","line"),ae(Da,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ae(Da,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ae(Da,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function nw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Du extends Wr{constructor(n){super();ae(this,"parsed");ae(this,"skip");ae(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return nw(this,n,"x",i)}inYRange(n,i){return nw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Vi(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Dg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ae(Du,"id","point"),ae(Du,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ae(Du,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const iw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},kz=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class sw extends Wr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Ye(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=It(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=iw(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||c[c.length-1]+m+2*a>o)&&(h+=u,c[c.length-(g>0?0:1)]=0,d+=u,f++),l[g]={left:0,top:d,row:f,width:m,height:s},c[c.length-1]+=m+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:y,itemHeight:b}=Az(i,n,r,m,s);_>0&&d+b+2*a>u&&(h+=f+a,c.push({width:f,height:d}),p+=f+a,g++,f=d=0),l[_]={left:p,top:d,col:g,width:y,height:b},f=Math.max(f,y),d+=b+a}),h+=f,c.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=vo(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Wt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Wt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Wt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Wt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;wy(e,this),this._draw(),Ey(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=dt.color,l=vo(e.rtl,this.left,this.width),c=It(o.font),{padding:u}=o,h=c.size,f=h/2;let d;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=iw(o,h),_=function(D,C,x){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const F=De(x.lineWidth,1);if(s.fillStyle=De(x.fillStyle,a),s.lineCap=De(x.lineCap,"butt"),s.lineDashOffset=De(x.lineDashOffset,0),s.lineJoin=De(x.lineJoin,"miter"),s.lineWidth=F,s.strokeStyle=De(x.strokeStyle,a),s.setLineDash(De(x.lineDash,[])),o.usePointStyle){const J={radius:g*Math.SQRT2/2,pointStyle:x.pointStyle,rotation:x.rotation,borderWidth:F},ee=l.xPlus(D,p/2),oe=C+f;ek(s,J,ee,oe,o.pointStyleWidth&&p)}else{const J=C+Math.max((h-g)/2,0),ee=l.leftForLtr(D,p),oe=yo(x.borderRadius);s.beginPath(),Object.values(oe).some(ye=>ye!==0)?Nh(s,{x:ee,y:J,w:p,h:g,radius:oe}):s.rect(ee,J,p,g),s.fill(),F!==0&&s.stroke()}s.restore()},y=function(D,C,x){Pr(s,x.text,D,C+m/2,c,{strikethrough:x.hidden,textAlign:l.textAlign(x.textAlign)})},b=this.isHorizontal(),w=this._computeTitleHeight();b?d={x:Wt(r,this.left+u,this.right-i[0]),y:this.top+u+w,line:0}:d={x:this.left+u,y:Wt(r,this.top+w+u,this.bottom-n[0].height),line:0},lk(this.ctx,e.textDirection);const I=m+u;this.legendItems.forEach((D,C)=>{s.strokeStyle=D.fontColor,s.fillStyle=D.fontColor;const x=s.measureText(D.text).width,F=l.textAlign(D.textAlign||(D.textAlign=o.textAlign)),J=p+f+x;let ee=d.x,oe=d.y;l.setWidth(this.width),b?C>0&&ee+J+u>this.right&&(oe=d.y+=I,d.line++,ee=d.x=Wt(r,this.left+u,this.right-i[d.line])):C>0&&oe+I>this.bottom&&(ee=d.x=ee+n[d.line].width+u,d.line++,oe=d.y=Wt(r,this.top+w+u,this.bottom-n[d.line].height));const ye=l.x(ee);if(_(ye,oe,D),ee=j7(F,ee+p+f,b?ee+J:this.right,e.rtl),y(l.x(ee),oe,D),b)d.x+=J+u;else if(typeof D.text!="string"){const Ke=c.lineHeight;d.y+=Tk(D,Ke)}else d.y+=I}),ck(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=It(n.font),s=rn(n.padding);if(!n.display)return;const r=vo(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=Wt(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=c+Wt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=Wt(a,h,h+f);o.textAlign=r.textAlign(yy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Pr(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=It(e.font),i=rn(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Aa(e,this.left,this.right)&&Aa(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Aa(e,s.left,s.left+s.width)&&Aa(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Oz(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=kz(s,i);s&&!r&&Ye(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Ye(n.onHover,[e,i,this],this)}else i&&Ye(n.onClick,[e,i,this],this)}}function Az(t,e,n,i,s){const r=Rz(i,t,e,n),o=Dz(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function Rz(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function Dz(t,e,n){let i=t;return typeof e.text!="string"&&(i=Tk(e,n)),i}function Tk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function Oz(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Mz={id:"legend",_element:sw,start(t,e,n){const i=t.legend=new sw({ctx:t.ctx,options:n,chart:t});Un.configure(t,i,n),Un.addBox(t,i)},stop(t){Un.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Un.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=rn(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class xk extends Wr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=ut(i.text)?i.text.length:1;this._padding=rn(i.padding);const r=s*It(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=Wt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=Wt(a,s,n),l=kt*-.5):(u=r-e,h=Wt(a,n,s),l=kt*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=It(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Pr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:yy(n.align),textBaseline:"middle",translation:[o,a]})}}function Pz(t,e){const n=new xk({ctx:t.ctx,options:e,chart:t});Un.configure(t,n,e),Un.addBox(t,n),t.titleBlock=n}var Nz={id:"title",_element:xk,start(t,e,n){Pz(t,n)},stop(t){const e=t.titleBlock;Un.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Un.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Oa={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Ag(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function ai(t,e){return e&&(ut(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ri(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function Lz(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function rw(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=It(e.bodyFont),c=It(e.titleFont),u=It(e.footerFont),h=r.length,f=s.length,d=i.length,p=rn(e.padding);let g=p.height,m=0,_=i.reduce((w,I)=>w+I.before.length+I.lines.length+I.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const w=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=d*w+(_-d)*l.lineHeight+(_-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let y=0;const b=function(w){m=Math.max(m,n.measureText(w).width+y)};return n.save(),n.font=c.string,je(t.title,b),n.font=l.string,je(t.beforeBody.concat(t.afterBody),b),y=e.displayColors?o+2+e.boxPadding:0,je(i,w=>{je(w.before,b),je(w.lines,b),je(w.after,b)}),y=0,n.font=u.string,je(t.footer,b),n.restore(),m+=p.width,{width:m,height:g}}function Fz(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function Uz(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function Vz(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),Uz(c,t,e,n)&&(c="center"),c}function ow(t,e,n){const i=n.yAlign||e.yAlign||Fz(t,n);return{xAlign:n.xAlign||e.xAlign||Vz(t,e,n,i),yAlign:i}}function Bz(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function $z(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function aw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=yo(o);let p=Bz(e,a);const g=$z(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:Fn(p,0,i.width-e.width),y:Fn(g,0,i.height-e.height)}}function lu(t,e,n){const i=rn(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function lw(t){return ai([],Ri(t))}function zz(t,e,n){return Ws(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function cw(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Ck={beforeTitle:ki,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:ki,beforeBody:ki,beforeLabel:ki,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return it(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:ki,afterBody:ki,beforeFooter:ki,footer:ki,afterFooter:ki};function fn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?Ck[e].call(n,i):s}class Ng extends Wr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new hk(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=zz(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=fn(i,"beforeTitle",this,e),r=fn(i,"title",this,e),o=fn(i,"afterTitle",this,e);let a=[];return a=ai(a,Ri(s)),a=ai(a,Ri(r)),a=ai(a,Ri(o)),a}getBeforeBody(e,n){return lw(fn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return je(e,r=>{const o={before:[],lines:[],after:[]},a=cw(i,r);ai(o.before,Ri(fn(a,"beforeLabel",this,r))),ai(o.lines,fn(a,"label",this,r)),ai(o.after,Ri(fn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return lw(fn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=fn(i,"beforeFooter",this,e),r=fn(i,"footer",this,e),o=fn(i,"afterFooter",this,e);let a=[];return a=ai(a,Ri(s)),a=ai(a,Ri(r)),a=ai(a,Ri(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(Lz(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),je(a,u=>{const h=cw(e.callbacks,u);s.push(fn(h,"labelColor",this,u)),r.push(fn(h,"labelPointStyle",this,u)),o.push(fn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Oa[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=rw(this,i),c=Object.assign({},a,l),u=ow(this.chart,i,c),h=aw(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=yo(a),{x:f,y:d}=e,{width:p,height:g}=n;let m,_,y,b,w,I;return r==="center"?(w=d+g/2,s==="left"?(m=f,_=m-o,b=w+o,I=w-o):(m=f+p,_=m+o,b=w-o,I=w+o),y=m):(s==="left"?_=f+Math.max(l,u)+o:s==="right"?_=f+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(b=d,w=b-o,m=_-o,y=_+o):(b=d+g,w=b+o,m=_+o,y=_-o),I=b),{x1:m,x2:_,x3:y,y1:b,y2:w,y3:I}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=vo(i.rtl,this.x,this.width);for(e.x=lu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=It(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=It(r.bodyFont),h=lu(this,"left",r),f=s.x(h),d=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+d;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(f,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Dg(e,g,m,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Dg(e,g,m,_)}else{e.lineWidth=Be(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(f,c),m=s.leftForLtr(s.xPlus(f,1),c-2),_=yo(o.borderRadius);Object.values(_).some(y=>y!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Nh(e,{x:g,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Nh(e,{x:m,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,p,c,l),e.strokeRect(g,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(m,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=It(i.bodyFont);let f=h.lineHeight,d=0;const p=vo(i.rtl,this.x,this.width),g=function(x){n.fillText(x,p.x(e.x+d),e.y+f/2),e.y+=f+r},m=p.textAlign(o);let _,y,b,w,I,D,C;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=lu(this,m,i),n.fillStyle=i.bodyColor,je(this.beforeBody,g),d=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,w=0,D=s.length;w<D;++w){for(_=s[w],y=this.labelTextColors[w],n.fillStyle=y,je(_.before,g),b=_.lines,a&&b.length&&(this._drawColorBox(n,e,w,p,i),f=Math.max(h.lineHeight,l)),I=0,C=b.length;I<C;++I)g(b[I]),f=h.lineHeight;je(_.after,g)}d=0,f=h.lineHeight,je(this.afterBody,g),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=vo(i.rtl,this.x,this.width);for(e.x=lu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=It(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=yo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,l+u),n.quadraticCurveTo(a,l+u,a,l+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Oa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=rw(this,e),l=Object.assign({},o,this._size),c=ow(n,e,l),u=aw(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=rn(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),lk(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),ck(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Ah(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Ah(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Oa[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ae(Ng,"positioners",Oa);var Hz={id:"tooltip",_element:Ng,positioners:Oa,afterInit(t,e,n){n&&(t.tooltip=new Ng({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ck},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const jz=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Wz(t,e,n,i){const s=t.indexOf(e);if(s===-1)return jz(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const qz=(t,e)=>t===null?null:Fn(Math.round(t),0,e);function uw(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Lg extends qr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(it(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:Wz(i,e,De(n,e),this._addedLabels),qz(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return uw.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ae(Lg,"id","category"),ae(Lg,"defaults",{ticks:{callback:uw}});function Kz(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:g,max:m}=e,_=!it(o),y=!it(a),b=!it(c),w=(m-g)/(h+1);let I=g1((m-g)/p/d)*d,D,C,x,F;if(I<1e-14&&!_&&!y)return[{value:g},{value:m}];F=Math.ceil(m/I)-Math.floor(g/I),F>p&&(I=g1(F*I/p/d)*d),it(l)||(D=Math.pow(10,l),I=Math.ceil(I*D)/D),s==="ticks"?(C=Math.floor(g/I)*I,x=Math.ceil(m/I)*I):(C=g,x=m),_&&y&&r&&N7((a-o)/r,I/1e3)?(F=Math.round(Math.min((a-o)/I,u)),I=(a-o)/F,C=o,x=a):b?(C=_?o:C,x=y?a:x,F=c-1,I=(x-C)/F):(F=(x-C)/I,Xa(F,Math.round(F),I/1e3)?F=Math.round(F):F=Math.ceil(F));const J=Math.max(m1(I),m1(C));D=Math.pow(10,it(l)?J:l),C=Math.round(C*D)/D,x=Math.round(x*D)/D;let ee=0;for(_&&(f&&C!==o?(n.push({value:o}),C<o&&ee++,Xa(Math.round((C+ee*I)*D)/D,o,hw(o,w,t))&&ee++):C<o&&ee++);ee<F;++ee){const oe=Math.round((C+ee*I)*D)/D;if(y&&oe>a)break;n.push({value:oe})}return y&&f&&x!==a?n.length&&Xa(n[n.length-1].value,a,hw(a,w,t))?n[n.length-1].value=a:n.push({value:a}):(!y||x===a)&&n.push({value:x}),n}function hw(t,e,{horizontal:n,minRotation:i}){const s=bs(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Uh extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return it(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=Bo(s),c=Bo(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=Kz(s,r);return e.bounds==="ticks"&&GS(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return by(e,this.chart.options.locale,this.options.ticks.format)}}class Fg extends Uh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?e:0,this.max=Pt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=bs(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ae(Fg,"id","linear"),ae(Fg,"defaults",{ticks:{callback:Jf.formatters.numeric}});const Fl=t=>Math.floor(vs(t)),Xs=(t,e)=>Math.pow(10,Fl(t)+e);function fw(t){return t/Math.pow(10,Fl(t))===1}function dw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function Gz(t,e){const n=e-t;let i=Fl(n);for(;dw(t,e,i)>10;)i++;for(;dw(t,e,i)<10;)i--;return Math.min(i,Fl(t))}function Yz(t,{min:e,max:n}){e=In(t.min,e);const i=[],s=Fl(e);let r=Gz(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),f=In(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:fw(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((l+u+h*Math.pow(10,r))*o)/o;const d=In(t.max,f);return i.push({value:d,major:fw(d),significand:h}),i}class pw extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Uh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Pt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?Math.max(0,e):null,this.max=Pt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Pt(this._userMin)&&(this.min=e===Xs(this.min,0)?Xs(this.min,-1):Xs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Xs(i,-1)),o(Xs(s,1)))),i<=0&&r(Xs(s,-1)),s<=0&&o(Xs(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=Yz(n,this);return e.bounds==="ticks"&&GS(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":by(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=vs(e),this._valueRange=vs(this.max)-vs(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(vs(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ae(pw,"id","logarithmic"),ae(pw,"defaults",{ticks:{callback:Jf.formatters.logarithmic,major:{enabled:!0}}});function Ug(t){const e=t.ticks;if(e.display&&t.display){const n=rn(e.backdropPadding);return De(e.font&&e.font.size,dt.font.size)+n.height}return 0}function Qz(t,e,n){return n=ut(n)?n:[n],{w:n$(t,e.string,n),h:n.length*e.lineHeight}}function gw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function Xz(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?kt/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=It(c.font),f=Qz(t.ctx,h,t._pointLabels[l]);i[l]=f;const d=zn(t.getIndexAngle(l)+a),p=Math.round(my(d)),g=gw(p,u.x,f.w,0,180),m=gw(p,u.y,f.h,90,270);Jz(n,e,d,g,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=tH(t,i,s)}function Jz(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function Zz(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(my(zn(l.angle+yn))),u=sH(l.y,a.h,c),h=nH(c),f=iH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function eH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Vi({x:n,y:i},e)||Vi({x:n,y:r},e)||Vi({x:s,y:i},e)||Vi({x:s,y:r},e))}function tH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Ug(r)/2,additionalAngle:o?kt/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=Zz(t,u,l);i.push(h),a==="auto"&&(h.visible=eH(h,c),h.visible&&(c=h))}return i}function nH(t){return t===0||t===180?"center":t<180?"left":"right"}function iH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function sH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function rH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!it(a)){const l=yo(e.borderRadius),c=rn(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,f=r-i+c.width,d=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Nh(t,{x:u,y:h,w:f,h:d,radius:l}),t.fill()):t.fillRect(u,h,f,d)}}function oH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));rH(n,o,r);const a=It(o.font),{x:l,y:c,textAlign:u}=r;Pr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Sk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Vn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function aH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Sk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function lH(t,e,n){return Ws(t,{label:n,index:e,type:"pointLabel"})}class cu extends Uh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=rn(Ug(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Pt(e)&&!isNaN(e)?e:0,this.max=Pt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ug(this.options))}generateTickLabels(e){Uh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Ye(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?Xz(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Vn/(this._pointLabels.length||1),i=this.options.startAngle||0;return zn(e*n+bs(i))}getDistanceFromCenterForValue(e){if(it(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(it(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return lH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-yn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Sk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&oH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);aH(this,d,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=It(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=rn(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Pr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}ae(cu,"id","radialLinear"),ae(cu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Jf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ae(cu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ae(cu,"descriptors",{angleLines:{_fallback:"grid"}});const td={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},mn=Object.keys(td);function cH(t,e){return t-e}function mw(t,e){if(it(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Pt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Nl(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function _w(t,e,n,i){const s=mn.length;for(let r=mn.indexOf(t);r<s-1;++r){const o=td[mn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return mn[r]}return mn[s-1]}function uH(t,e,n,i,s){for(let r=mn.length-1;r>=mn.indexOf(n);r--){const o=mn[r];if(td[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return mn[n?mn.indexOf(n):0]}function hH(t){for(let e=mn.indexOf(t)+1,n=mn.length;e<n;++e)if(td[mn[e]].common)return mn[e]}function yw(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=_y(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function fH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function vw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:fH(t,i,s,n)}class Vh extends qr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new c9._date(e.adapters.date);s.init(n),Qa(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:mw(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Pt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Pt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=B7(s,r,o);return this._unit=n.unit||(i.autoSkip?_w(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):uH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:hH(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),vw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Fn(n,0,o),i=Fn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||_w(r.minUnit,n,i,this._getLabelCapacity(n)),a=De(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Nl(l)||l===!0,u={};let h=n,f,d;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)yw(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&yw(u,f,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Ye(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],f=i[n],d=c&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=bs(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,vw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(mw(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return z7(e.sort(cH))}}ae(Vh,"id","time"),ae(Vh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function uu(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=pr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=pr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class bw extends Vh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=uu(n,this.min),this._tableRange=uu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(uu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return uu(this._table,i*this._tableRange+this._minPos,!0)}}ae(bw,"id","timeseries"),ae(bw,"defaults",Vh.defaults);const kk={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},dH={type:{type:String,required:!0},...kk},pH=mE[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Jr(t){return jh(t)?xe(t):t}function gH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return jh(e)?new Proxy(t,{}):t}function mH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Ak(t,e){t.labels=e}function Rk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function _H(t,e){const n={labels:[],datasets:[]};return Ak(n,t.labels),Rk(n,t.datasets,e),n}const yH=Fr({props:dH,setup(t,e){let{expose:n}=e;const i=Qe(null),s=Wh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:f}=t,d=_H(c,f),p=gH(d,c);s.value=new ed(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=xe(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return nm(r),eE(o),Is([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[f,d]=c;const p=xe(s.value);if(!p)return;let g=!1;if(u){const m=Jr(u),_=Jr(f);m&&m!==_&&(mH(p,m),g=!0)}if(h){const m=Jr(h.labels),_=Jr(d.labels),y=Jr(h.datasets),b=Jr(d.datasets);m!==_&&(Ak(p.config.data,m),g=!0),y&&y!==b&&(Rk(p.config.data,y,t.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>qo("canvas",{ref:i})}});function vH(t,e){return ed.register(e),Fr({props:kk,setup(n,i){let{expose:s}=i;const r=Wh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>qo(yH,pH({ref:o},{type:t,...n}))}})}const bH=vH("line",ku),wH={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;ed.register(Lg,Fg,Du,Da,Nz,Hz,Mz);const n=Rs({datasets:e.datasets}),i=Rs({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(M(),bn(T(bH),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const EH={class:"graph"},IH={__name:"StatsScreen",setup(t){const e=sa(),n=ke(()=>e.params.boardUUID||"");let i=Et(On(le,"Boards",n.value,"Groups")),s=Et(On(le,"Boards",n.value,"Tiles"));const r=Et(Se(le,"Boards",n.value)),o=ke(()=>{var u;let c=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{c[h.id]=h.points})),c||[]}),a=c=>{let u=[{x:16829424e5,y:0}],h=0;const f=Object.entries(c.collected).sort((d,p)=>d[1].seconds-p[1].seconds);return Object.keys(f).forEach(d=>{h+=o.value[f[d][0]],u.push({y:h,x:new Date(f[d][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},l=ke(()=>{var u;let c=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&c.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),c});return(c,u)=>{var f;const h=Wi("router-link");return M(),U(Te,null,[k("div",null,[Z(oa,{destination:{name:"overview",params:{boardUUID:T(n)}}},null,8,["destination"]),Z(h,{class:"btn",to:{name:"overview",params:{boardUUID:T(n)}}},{default:Yh(()=>[ge(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),k("h1",null,de((f=T(r))==null?void 0:f.name)+" stats:",1),k("div",EH,[Z(wH,{datasets:T(l)},null,8,["datasets"])])],64)}}};const Ci=t=>(es("data-v-d9ca657d"),t=t(),ts(),t),TH=Ci(()=>k("br",null,null,-1)),xH={key:0,class:"tile"},CH=["src"],SH={key:0,class:"sub-tile"},kH=["src"],AH=["onSubmit"],RH={class:"input"},DH={class:"input"},OH={class:"pen"},MH={class:"pen"},PH={class:"pen"},NH={key:3},LH=["onClick"],FH=["onSubmit"],UH=Ci(()=>k("button",{class:"btn"},"Add item",-1)),VH=Ci(()=>k("br",null,null,-1)),BH=Ci(()=>k("br",null,null,-1)),$H=Ci(()=>k("option",{disabled:"",value:""},"Please select one",-1)),zH=Ci(()=>k("option",null,"drop",-1)),HH=Ci(()=>k("option",null,"multi-item",-1)),jH=Ci(()=>k("option",null,"null",-1)),WH=Ci(()=>k("option",null,"exp",-1)),qH=[$H,zH,HH,jH,WH],KH=Ci(()=>k("button",{type:"submit"},"Update Tile",-1)),GH={__name:"editTile",setup(t){const e=rs(),n=async()=>{let u=e.selectedTile;e.setSelectedTile(""),await hr(Se(le,"Boards",e.boardUUID,"Tiles",u.id),{description:u.description,altImg:u.altImg?u.altImg:"",img:u.img,title:u.title,points:parseInt(u.points),hidden:(u==null?void 0:u.hidden)!==void 0?u.hidden:!1,type:(u==null?void 0:u.type)!==void 0?u.type:"drop"}),e.setSelectedTile(u)},i=u=>{u.target.innerText.trim()!=""?e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?parseInt(u.target.innerText.trim()):u.target.innerText.trim():e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?0:"",u.target.innerText.trim()!=e.selectedTile[u.target.getAttribute("name")]&&Mt(Se(le,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),e.selectedTile)},s=u=>{u.target.value.trim()!=""||[u.target.getAttribute("name")]=="altImg"?e.selectedTile[u.target.getAttribute("name")]=u.target.value.trim():e.selectedTile[u.target.getAttribute("name")]="https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e",u.target.value.trim()!=e.selectedTile[u.target.getAttribute("name")]&&(Mt(Se(le,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),e.selectedTile),console.log("written"))},r=u=>{document.querySelector(u).focus()},o=u=>{e.selectedTile.items.indexOf(u)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(u),1),Mt(Se(le,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},a=ke((u,h)=>({item:u,count:h})),l=()=>{let u=!0;a.value.item=a.value.item.trim(),c(a.value.item)!==-1&&(e.selectedTile.items[c(a.value.item)].count=a.value.count),c(a.value.item)===-1&&a.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:a.value.item,count:a.value.count})),a.value.item!=""&&u&&Mt(Se(le,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items})},c=u=>e.selectedTile.items?e.selectedTile.items.map(function(h){return h.item}).indexOf(u):-1;return(u,h)=>{var d,p,g,m,_;const f=Wi("font-awesome-icon");return M(),U("div",null,[ge(" id: "+de(T(e).selectedTile.id),1),TH,T(e).selectedTile.type!="null"?(M(),U("div",xH,[k("img",{src:T(e).selectedTile.img,alt:""},null,8,CH),T(e).selectedTile.altImg?(M(),U("div",SH,[k("img",{src:T(e).selectedTile.altImg,alt:""},null,8,kH)])):Ie("",!0)])):Ie("",!0),k("form",{onSubmit:Ve(n,["prevent"])},[k("div",RH,[ge(" img: "),T(e).selectedTile.type!="null"?xn((M(),U("input",{key:0,type:"text","onUpdate:modelValue":h[0]||(h[0]=y=>T(e).selectedTile.img=y),name:"img",id:"addtileimg",onBlur:h[1]||(h[1]=Ve(y=>{s(y)},["prevent"])),onKeydown:h[2]||(h[2]=Pi(y=>{s(y)},["enter"]))},null,544)),[[Kn,T(e).selectedTile.img]]):Ie("",!0)]),k("div",DH,[ge(" alt: "),T(e).selectedTile.type!="null"?xn((M(),U("input",{key:0,type:"text","onUpdate:modelValue":h[3]||(h[3]=y=>T(e).selectedTile.altImg=y),name:"altImg",id:"addtileimg",onBlur:h[4]||(h[4]=Ve(y=>{s(y)},["prevent"])),onKeydown:h[5]||(h[5]=Pi(y=>{s(y)},["enter"]))},null,544)),[[Kn,T(e).selectedTile.altImg]]):Ie("",!0)]),T(e).selectedTile.type!="null"?(M(),U("h2",{key:0,onClick:h[8]||(h[8]=y=>r("#title"))},[k("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[6]||(h[6]=Pi(Ve(y=>{i(y)},["prevent"]),["enter"])),onBlur:h[7]||(h[7]=Ve(y=>{i(y)},["prevent"])),name:"title",id:"title"},de(T(e).selectedTile.title),545),k("span",OH,[Z(f,{icon:["fas","pen"]})])])):Ie("",!0),T(e).selectedTile.type!="null"?(M(),U("p",{key:1,onClick:h[11]||(h[11]=y=>r("#points"))},[k("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[9]||(h[9]=Pi(Ve(y=>{i(y)},["prevent"]),["enter"])),onBlur:h[10]||(h[10]=Ve(y=>{i(y)},["prevent"])),name:"points",id:"points"},de(T(e).selectedTile.points),545),ge(" point"+de(T(e).selectedTile.points>1?"s":""),1),k("span",MH,[Z(f,{icon:["fas","pen"]})])])):Ie("",!0),T(e).selectedTile.type!="null"?(M(),U("p",{key:2,onClick:h[13]||(h[13]=y=>r("#description"))},[ge(" description: "),k("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:h[12]||(h[12]=Ve(y=>{i(y)},["prevent"])),name:"description",id:"description"},de(T(e).selectedTile.description),545),k("span",PH,[Z(f,{icon:["fas","pen"]})])])):Ie("",!0),["any-unique","multi-item"].includes(T(e).selectedTile.type)?(M(),U("ul",NH,[ge(" Ellegible items: "),(M(!0),U(Te,null,cn((d=T(e).selectedTile)==null?void 0:d.items,y=>(M(),U("li",{key:y==null?void 0:y.item},[ge(de(y.item)+" | "+de(y.count)+" ",1),k("button",{class:"btn",onClick:Ve(b=>o(y),["prevent"])},"-",8,LH)]))),128)),k("form",{onSubmit:Ve(l,["prevent"])},[ge(" new "),xn(k("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":h[14]||(h[14]=y=>T(a).item=y)},null,512),[[Kn,T(a).item]]),ge(" count: "),xn(k("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":h[15]||(h[15]=y=>T(a).count=y)},null,512),[[Kn,T(a).count]]),UH],40,FH)])):Ie("",!0),ge(" hidden: "),((p=T(e).selectedTile)==null?void 0:p.hidden)!==void 0&&T(e).selectedTile.type!="null"?xn((M(),U("input",{key:4,type:"checkbox",class:"toggle","onUpdate:modelValue":h[16]||(h[16]=y=>T(e).selectedTile.hidden=y),ref:"refs.hidden",name:"hidden",id:"addtilehidden"},null,512)),[[KA,T(e).selectedTile.hidden]]):Ie("",!0),VH,ge(" type: "+de((m=(g=T(e))==null?void 0:g.selectedTile)==null?void 0:m.type),1),BH,((_=T(e).selectedTile)==null?void 0:_.type)!==void 0?xn((M(),U("select",{key:5,"onUpdate:modelValue":h[17]||(h[17]=y=>T(e).selectedTile.type=y)},qH,512)),[[GA,T(e).selectedTile.type]]):Ie("",!0),KH],40,AH)])}}},YH=on(GH,[["__scopeId","data-v-d9ca657d"]]);const wc=t=>(es("data-v-e696dfe4"),t=t(),ts(),t),QH={class:"container"},XH=["onKeydown"],JH={class:"pen"},ZH={class:"main-section"},ej={key:0},tj={style:{"justify-content":"end",display:"flex"}},nj=wc(()=>k("h2",null,"Rules:",-1)),ij=wc(()=>k("h2",null,"Moderators:",-1)),sj={class:"moderators"},rj=["onClick"],oj=["onSubmit"],aj=wc(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),lj=wc(()=>k("h2",null,"Editors:",-1)),cj={class:"Editors"},uj=["onClick"],hj=["onSubmit"],fj=wc(()=>k("button",{class:"btn",type:"submit"},"Add",-1)),dj={key:1},pj={__name:"EditBoard",setup(t){var I,D;const e=Qe("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=rs(),i=Qe(""),s=Qe("");let r=js();const o=sa();n.setBoardUUID(o.params.boardUUID),n.setSelectedTile("");const a=n.boardUUID,{data:l}=Et(On(le,"Boards",a,"Groups")),c=Et(Se(le,"Boards",a)),u=(I=c==null?void 0:c.value)==null?void 0:I.moderators,h=(D=c==null?void 0:c.value)==null?void 0:D.editors,f=ke(()=>{var x;let C={};return l&&((x=l==null?void 0:l.value)==null||x.forEach(F=>{F.name!="moderator"&&(C[F.id]={id:F.id,name:F.name,member:F.members,icon:F.icon,color:F.color,points:F.points,flagEnd:F.flagEnd,collected:F.collected,verify:F.verify})})),C||{}}),{data:d}=Et(On(le,`Boards/${a}/Tiles`)),p=Qe(null),g=()=>{p.value.focus()},m=C=>{C.target.blur();let x=C.target.getAttribute("name"),F=c.value[x];C.target.innerText.trim()!=""?c.value[x]=C.target.innerText:(c.value[x]="<enter text here>",x=="rules"&&(c.value[x]="")),F!=c.value[x]&&Mt(Se(le,"Boards",a),c.value)},_=C=>{C=C.trim(),u.indexOf(C)!==-1&&(u.splice(u.indexOf(C),1),Mt(Se(le,"Boards",a),{moderators:u}))},y=()=>{i.value=i.value.trim(),u.indexOf(i.value)===-1&&(u.push(i.value),Mt(Se(le,"Boards",a),{moderators:u}))},b=C=>{C=C.trim(),h.indexOf(C)!==-1&&(h.splice(h.indexOf(C),1),Mt(Se(le,"Boards",a),{editors:h}))},w=()=>{s.value=s.value.trim(),h.indexOf(s.value)===-1&&(h.push(s.value),Mt(Se(le,"Boards",a),{editors:h}))};return(C,x)=>{var J,ee,oe;const F=Wi("font-awesome-icon");return M(),U("div",QH,[Z(oa,{destination:{name:"editBoard",params:T(a)}},null,8,["destination"]),T(c)&&T(r).user.data.ui!=0&&(T(r).user.data.uid==T(c).ownerID||T(r).user.data.uid==e.value||(ee=(J=T(c))==null?void 0:J.editors)!=null&&ee.includes(T(r).user.data.uid))?(M(),U(Te,{key:0},[k("section",null,[k("h1",{class:"title-wrap",onClick:x[1]||(x[1]=Ve(ye=>g(),["prevent"]))},[k("span",{class:"board-title",ref_key:"titleElement",ref:p,contenteditable:"",spellcheck:"false",onKeydown:Pi(m,["enter"]),name:"name",onBlur:x[0]||(x[0]=Ve(ye=>{m(ye)},["prevent"]))},de(T(c).name),41,XH),k("span",JH,[Z(F,{icon:["fas","pen"]})])])]),k("section",ZH,[(M(),bn(hy,{boardData:T(c),groupsData:T(f),tilesData:T(d),key:"bingo-board-"+T(n).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),T(n).selectedTile!=""?(M(),U("aside",ej,[k("div",tj,[k("button",{class:"btn close",onClick:x[2]||(x[2]=()=>{T(n).setSelectedTile("")})}," ╳ ")]),Z(YH,{tile:T(n).selectedTile},null,8,["tile"])])):Ie("",!0)]),k("section",null,[k("div",null,[nj,k("div",null,[k("p",{class:"rules",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:x[3]||(x[3]=Ve(ye=>{m(ye)},["prevent"])),onKeydown:x[4]||(x[4]=Pi(Ve(()=>{},["prevent"]),["tab"])),name:"rules"},de((oe=T(c))==null?void 0:oe.rules),33)])]),k("div",null,[ij,k("div",sj,[k("ul",null,[(M(!0),U(Te,null,cn(T(u),ye=>(M(),U("li",{key:ye},[ge(de(ye)+" ",1),k("button",{class:"btn",onClick:Ve(Ke=>_(ye),["prevent"])},"-",8,rj)]))),128)),k("li",null,[k("form",{onSubmit:Ve(y,["prevent"])},[xn(k("input",{type:"text","onUpdate:modelValue":x[5]||(x[5]=ye=>i.value=ye)},null,512),[[Kn,i.value]]),aj],40,oj)])])])]),k("div",null,[lj,k("div",cj,[k("ul",null,[(M(!0),U(Te,null,cn(T(h),ye=>(M(),U("li",{key:ye},[ge(de(ye)+" ",1),k("button",{style:{"margin-left":"15px"},class:"btn",onClick:Ve(Ke=>b(ye),["prevent"])}," - ",8,uj)]))),128)),k("li",null,[k("form",{onSubmit:Ve(w,["prevent"])},[xn(k("input",{type:"text","onUpdate:modelValue":x[6]||(x[6]=ye=>s.value=ye)},null,512),[[Kn,s.value]]),fj],40,hj)])])])])])],64)):(M(),U("h1",dj,"Not authenticated"))])}}},gj=on(pj,[["__scopeId","data-v-e696dfe4"]]);const mj=t=>(es("data-v-89666dab"),t=t(),ts(),t),_j=mj(()=>k("h1",null,"Log in",-1)),yj={class:"block"},vj={__name:"LoginView",setup(t){const e=js(),n=qf();return(i,s)=>(M(),U(Te,null,[_j,k("div",yj,[k("button",{class:"btn",onClick:s[0]||(s[0]=Ve(r=>T(zS)({name:"userOverview"},T(n),T(e)),["prevent"]))}," Log in with Google "),ge(" "+de(i.users),1)])],64))}},bj=on(vj,[["__scopeId","data-v-89666dab"]]);const wj={__name:"iconButton",props:{groupIcon:{required:!0,type:String},fasIcon:{required:!0,type:String}},setup(t){const e=t;return(n,i)=>{const s=Wi("font-awesome-icon");return M(),bn(s,{class:Hi(["icon-button",{outline:e.fasIcon==e.groupIcon}]),icon:["fa",e.fasIcon]},null,8,["class","icon"])}}},jt=on(wj,[["__scopeId","data-v-aed808cc"]]);const aa=t=>(es("data-v-979ad052"),t=t(),ts(),t),Ej={class:"container"},Ij=aa(()=>k("h1",null,"groupview",-1)),Tj={key:0,class:"delete-popup"},xj={class:"delete-notification"},Cj=aa(()=>k("span",{class:"danger"},"delete",-1)),Sj={class:"highlight"},kj=aa(()=>k("br",null,null,-1)),Aj=aa(()=>k("span",{class:"danger"},"permanent",-1)),Rj=aa(()=>k("br",null,null,-1)),Dj=aa(()=>k("span",{class:"danger"},"Delete",-1)),Oj={class:"delete-buttons"},Mj={key:1},Pj=["onKeydown","onBlur"],Nj=["onClick"],Lj={class:"color-container"},Fj=["onUpdate:modelValue","onChange"],Uj=["onBlur","onKeydown","onUpdate:modelValue"],Vj={class:"members-list"},Bj=["onClick"],$j={__name:"GroupView",setup(t){const e=Qe("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=sa(),i=js(),s=rs();s.setBoardUUID(n.params.boardUUID),s.setSelectedTile("");const{data:r}=Et(On(le,"Boards",n.params.boardUUID,"Groups")),o=Et(Se(le,"Boards",n.params.boardUUID)),a=Qe(),l=Qe(""),c=async g=>{await Z5(Se(le,"Boards",n.params.boardUUID,"Groups",g.id)).then(()=>{a.value=void 0,l.value=""})},u=(g,m=!1)=>{m&&m.target.blur(),Mt(Se(le,"Boards",n.params.boardUUID,"Groups",g.id),{color:g.color})},h=(g,m)=>{g.target.blur(),g.target.innerText.trim()==""&&(g.target.innerText="<Team Name>"),m.name=g.target.innerText.trim(),Mt(Se(le,"Boards",n.params.boardUUID,"Groups",m.id),{name:m.name})},f=(g,m)=>{Mt(Se(le,"Boards",n.params.boardUUID,"Groups",m.id),{icon:g})},d=async g=>{a.value=g},p=()=>{const g=Se(On(le,"Boards",n.params.boardUUID,"Groups"));hr(Se(le,g.path),{name:"Team name",collected:{},verify:{},icon:"frog",color:"#53FF1b"})};return(g,m)=>{var _,y,b;return M(),U("div",Ej,[Z(oa,{destination:{name:"groupView"}}),Ij,T(o)&&T(i).user.data.ui!=0&&(T(i).user.data.uid==T(o).ownerID||T(i).user.data.uid==e.value||(_=T(o).editors)!=null&&_.includes(T(i).user.data.uid))?(M(),U(Te,{key:0},[((y=a.value)==null?void 0:y.name)!=null?(M(),U("section",Tj,[k("p",xj,[ge(" Are you sure you want to "),Cj,ge(" the team: "),k("span",Sj,de((b=a.value)==null?void 0:b.name),1),ge("?"),kj,ge(" this is "),Aj,ge(" and you will lose all data for that team."),Rj,ge(" type the name of the team you want to "),Dj,ge(" here to verify ")]),k("div",Oj,[k("button",{class:"btn cancel",onClick:m[0]||(m[0]=Ve(()=>{a.value=void 0,l.value=""},["prevent"]))}," Cancel "),xn(k("input",{type:"text",name:"DELETEME","onUpdate:modelValue":m[1]||(m[1]=w=>l.value=w),class:"danger",placeholder:"TEAM NAME"},null,512),[[Kn,l.value]]),k("button",{class:"btn danger",onClick:m[2]||(m[2]=Ve(()=>{l.value==a.value.name&&c(a.value)},["prevent"]))}," DELETE ")])])):Ie("",!0),T(r)?(M(),U("section",Mj,[(M(!0),U(Te,null,cn(T(r),w=>(M(),U("div",{class:"group",key:w.name},[k("h2",{name:"name",ref_for:!0,ref:"group.name",contenteditable:"",spellcheck:"false",onKeydown:Pi(I=>{h(I,w)},["enter"]),onBlur:Ve(I=>{h(I,w)},["prevent"])},de(w.name),41,Pj),T(r).length!=1?(M(),U("button",{key:0,class:"btn",onClick:Ve(I=>d(w),["prevent"])}," Delete Team - ",8,Nj)):Ie("",!0),k("div",Lj,[xn(k("input",{type:"color","onUpdate:modelValue":I=>w.color=I,onChange:I=>u(w),class:"color-picker"},null,40,Fj),[[Kn,w.color]]),xn(k("input",{type:"text",onBlur:Ve(I=>{u(w,I)},["prevent"]),onKeydown:Pi(I=>{u(w,I)},["enter"]),"onUpdate:modelValue":I=>w.color=I},null,40,Uj),[[Kn,w.color]])]),k("div",{class:"icon-grid",style:Nr({color:w.color})},[Z(jt,{onClick:I=>f("rocket",w),groupIcon:w.icon,fasIcon:"rocket"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("spaghetti-monster-flying",w),groupIcon:w.icon,fasIcon:"spaghetti-monster-flying"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("paw",w),groupIcon:w.icon,fasIcon:"paw"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("hippo",w),groupIcon:w.icon,fasIcon:"hippo"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("crow",w),groupIcon:w.icon,fasIcon:"crow"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("frog",w),groupIcon:w.icon,fasIcon:"frog"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("feather-pointed",w),groupIcon:w.icon,fasIcon:"feather-pointed"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("cat",w),groupIcon:w.icon,fasIcon:"cat"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("dove",w),groupIcon:w.icon,fasIcon:"dove"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("spoon",w),groupIcon:w.icon,fasIcon:"spoon"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("ghost",w),groupIcon:w.icon,fasIcon:"ghost"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("heart",w),groupIcon:w.icon,fasIcon:"heart"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("hand-fist",w),groupIcon:w.icon,fasIcon:"hand-fist"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("hat-wizard",w),groupIcon:w.icon,fasIcon:"hat-wizard"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("tree",w),groupIcon:w.icon,fasIcon:"tree"},null,8,["onClick","groupIcon"]),Z(jt,{onClick:I=>f("fire",w),groupIcon:w.icon,fasIcon:"fire"},null,8,["onClick","groupIcon"])],4),k("div",Vj,[(M(!0),U(Te,null,cn(w.members,I=>(M(),U("p",{key:I},de(I),1))),128))])]))),128)),k("button",{class:"btn add-team",onClick:Ve(p,["prevent"])},"Add team +",8,Bj)])):Ie("",!0)],64)):(M(),U(Te,{key:1},[ge("Not Authenticated")],64))])}}},zj=on($j,[["__scopeId","data-v-979ad052"]]),Hj=V8({history:t8(),mode:"hash",routes:[{path:"/",name:"userOverview",props:!0,component:n7},{path:"/new",name:"newBoard",component:UB},{path:"/login",name:"loginView",component:bj},{path:"/e/:boardUUID",name:"editBoard",props:!0,component:gj},{path:"/g/:boardUUID",name:"groupView",props:!0,component:zj},{path:"/m/:boardUUID",name:"moderator",props:!0,component:TB},{path:"/b/:boardUUID",name:"overview",props:!0,component:fB},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:IH}]});var jj={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},Wj={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},qj={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},Kj={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Gj={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},Yj={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Qj={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},Xj={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},Jj={prefix:"fas",iconName:"eye-low-vision",icon:[640,512,["low-vision"],"f2a8","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]},Zj={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},eW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},tW={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},nW={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},iW={prefix:"fas",iconName:"hat-cowboy",icon:[640,512,[],"f8c0","M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"]},sW={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},rW={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},oW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},aW={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},lW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},cW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},uW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},hW={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},fW={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},dW={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]};lt.add(Qj);lt.add(oW);lt.add(Yj);lt.add(rW);lt.add(Jj);lt.add(hW);lt.add(cW);lt.add(jj);lt.add(qj);lt.add(fW);lt.add(Zj);lt.add(eW);lt.add(tW);lt.add(uW);lt.add(sW);lt.add(lW);lt.add(Wj);lt.add(Kj);lt.add(nW);lt.add(dW);lt.add(aW);lt.add(iW);lt.add(Gj);lt.add(Xj);const Ec=eR(z8);Ec.use(iR());Ec.use(Hj);Ec.use(LF,{firebaseApp:cS});Ec.component("FontAwesomeIcon",uy);Ec.mount("#app");
