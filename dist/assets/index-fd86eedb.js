var Rk=Object.defineProperty;var Dk=(t,e,n)=>e in t?Rk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>(Dk(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ng(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Uo(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=wt(i)?Nk(i):Uo(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(wt(t))return t;if(He(t))return t}}const Ok=/;(?![^(]*\))/g,Pk=/:([^]+)/,Mk=/\/\*.*?\*\//gs;function Nk(t){const e={};return t.replace(Mk,"").split(Ok).forEach(n=>{if(n){const i=n.split(Pk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bs(t){let e="";if(wt(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const i=bs(t[n]);i&&(e+=i+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fk=Ng(Lk);function g1(t){return!!t||t===""}function Uk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Nl(t[i],e[i]);return n}function Nl(t,e){if(t===e)return!0;let n=Iy(t),i=Iy(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ja(t),i=Ja(e),n||i)return t===e;if(n=se(t),i=se(e),n||i)return n&&i?Uk(t,e):!1;if(n=He(t),i=He(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Nl(t[o],e[o]))return!1}}return String(t)===String(e)}function Lg(t,e){return t.findIndex(n=>Nl(n,e))}const Ve=t=>wt(t)?t:t==null?"":se(t)||He(t)&&(t.toString===y1||!de(t.toString))?JSON.stringify(t,m1,2):String(t),m1=(t,e)=>e&&e.__v_isRef?m1(t,e.value):io(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Vo(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!se(e)&&!v1(e)?String(e):e,qe={},no=[],Hn=()=>{},Vk=()=>!1,Bk=/^on[^a-z]/,Fh=t=>Bk.test(t),Fg=t=>t.startsWith("onUpdate:"),sn=Object.assign,Ug=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$k=Object.prototype.hasOwnProperty,Ae=(t,e)=>$k.call(t,e),se=Array.isArray,io=t=>Ll(t)==="[object Map]",Vo=t=>Ll(t)==="[object Set]",Iy=t=>Ll(t)==="[object Date]",de=t=>typeof t=="function",wt=t=>typeof t=="string",Ja=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",_1=t=>He(t)&&de(t.then)&&de(t.catch),y1=Object.prototype.toString,Ll=t=>y1.call(t),zk=t=>Ll(t).slice(8,-1),v1=t=>Ll(t)==="[object Object]",Vg=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lu=Ng(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jk=/-(\w)/g,di=Uh(t=>t.replace(jk,(e,n)=>n?n.toUpperCase():"")),Hk=/\B([A-Z])/g,Dr=Uh(t=>t.replace(Hk,"-$1").toLowerCase()),Vh=Uh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jf=Uh(t=>t?`on${Vh(t)}`:""),Za=(t,e)=>!Object.is(t,e),cu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Au=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ru=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xy;const Wk=()=>xy||(xy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vn;class b1{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vn;try{return vn=this,e()}finally{vn=n}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function w1(t){return new b1(t)}function qk(t,e=vn){e&&e.active&&e.effects.push(t)}function Bg(){return vn}function E1(t){vn&&vn.cleanups.push(t)}const $g=t=>{const e=new Set(t);return e.w=0,e.n=0,e},T1=t=>(t.w&ws)>0,I1=t=>(t.n&ws)>0,Kk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ws},Gk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];T1(s)&&!I1(s)?s.delete(t):e[n++]=s,s.w&=~ws,s.n&=~ws}e.length=n}},Du=new WeakMap;let ya=0,ws=1;const Yd=30;let Fn;const ur=Symbol(""),Qd=Symbol("");class zg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qk(this,i)}run(){if(!this.active)return this.fn();let e=Fn,n=fs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Fn,Fn=this,fs=!0,ws=1<<++ya,ya<=Yd?Kk(this):Sy(this),this.fn()}finally{ya<=Yd&&Gk(this),ws=1<<--ya,Fn=this.parent,fs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fn===this?this.deferStop=!0:this.active&&(Sy(this),this.onStop&&this.onStop(),this.active=!1)}}function Sy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fs=!0;const x1=[];function Bo(){x1.push(fs),fs=!1}function $o(){const t=x1.pop();fs=t===void 0?!0:t}function pn(t,e,n){if(fs&&Fn){let i=Du.get(t);i||Du.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=$g()),S1(s)}}function S1(t,e){let n=!1;ya<=Yd?I1(t)||(t.n|=ws,n=!T1(t)):n=!t.has(Fn),n&&(t.add(Fn),Fn.deps.push(t))}function Ui(t,e,n,i,s,r){const o=Du.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?Vg(n)&&a.push(o.get("length")):(a.push(o.get(ur)),io(t)&&a.push(o.get(Qd)));break;case"delete":se(t)||(a.push(o.get(ur)),io(t)&&a.push(o.get(Qd)));break;case"set":io(t)&&a.push(o.get(ur));break}if(a.length===1)a[0]&&Xd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xd($g(l))}}function Xd(t,e){const n=se(t)?t:[...t];for(const i of n)i.computed&&Cy(i);for(const i of n)i.computed||Cy(i)}function Cy(t,e){(t!==Fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Yk(t,e){var n;return(n=Du.get(t))===null||n===void 0?void 0:n.get(e)}const Qk=Ng("__proto__,__v_isRef,__isVue"),C1=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ja)),Xk=jg(),Jk=jg(!1,!0),Zk=jg(!0),ky=eA();function eA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ye(this);for(let r=0,o=this.length;r<o;r++)pn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bo();const i=ye(this)[e].apply(this,n);return $o(),i}}),t}function tA(t){const e=ye(this);return pn(e,"has",t),e.hasOwnProperty(t)}function jg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?_A:O1:e?D1:R1).get(i))return i;const o=se(i);if(!t){if(o&&Ae(ky,s))return Reflect.get(ky,s,r);if(s==="hasOwnProperty")return tA}const a=Reflect.get(i,s,r);return(Ja(s)?C1.has(s):Qk(s))||(t||pn(i,"get",s),e)?a:rt(a)?o&&Vg(s)?a:a.value:He(a)?t?P1(a):Es(a):a}}const nA=k1(),iA=k1(!0);function k1(t=!1){return function(n,i,s,r){let o=n[i];if(go(o)&&rt(o)&&!rt(s))return!1;if(!t&&(!Ou(s)&&!go(s)&&(o=ye(o),s=ye(s)),!se(n)&&rt(o)&&!rt(s)))return o.value=s,!0;const a=se(n)&&Vg(i)?Number(i)<n.length:Ae(n,i),l=Reflect.set(n,i,s,r);return n===ye(r)&&(a?Za(s,o)&&Ui(n,"set",i,s):Ui(n,"add",i,s)),l}}function sA(t,e){const n=Ae(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ui(t,"delete",e,void 0),i}function rA(t,e){const n=Reflect.has(t,e);return(!Ja(e)||!C1.has(e))&&pn(t,"has",e),n}function oA(t){return pn(t,"iterate",se(t)?"length":ur),Reflect.ownKeys(t)}const A1={get:Xk,set:nA,deleteProperty:sA,has:rA,ownKeys:oA},aA={get:Zk,set(t,e){return!0},deleteProperty(t,e){return!0}},lA=sn({},A1,{get:Jk,set:iA}),Hg=t=>t,Bh=t=>Reflect.getPrototypeOf(t);function vc(t,e,n=!1,i=!1){t=t.__v_raw;const s=ye(t),r=ye(e);n||(e!==r&&pn(s,"get",e),pn(s,"get",r));const{has:o}=Bh(s),a=i?Hg:n?Kg:el;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function bc(t,e=!1){const n=this.__v_raw,i=ye(n),s=ye(t);return e||(t!==s&&pn(i,"has",t),pn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wc(t,e=!1){return t=t.__v_raw,!e&&pn(ye(t),"iterate",ur),Reflect.get(t,"size",t)}function Ay(t){t=ye(t);const e=ye(this);return Bh(e).has.call(e,t)||(e.add(t),Ui(e,"add",t,t)),this}function Ry(t,e){e=ye(e);const n=ye(this),{has:i,get:s}=Bh(n);let r=i.call(n,t);r||(t=ye(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Za(e,o)&&Ui(n,"set",t,e):Ui(n,"add",t,e),this}function Dy(t){const e=ye(this),{has:n,get:i}=Bh(e);let s=n.call(e,t);s||(t=ye(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ui(e,"delete",t,void 0),r}function Oy(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Ui(t,"clear",void 0,void 0),n}function Ec(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ye(o),l=e?Hg:t?Kg:el;return!t&&pn(a,"iterate",ur),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Tc(t,e,n){return function(...i){const s=this.__v_raw,r=ye(s),o=io(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Hg:e?Kg:el;return!e&&pn(r,"iterate",l?Qd:ur),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Qi(t){return function(...e){return t==="delete"?!1:this}}function cA(){const t={get(r){return vc(this,r)},get size(){return wc(this)},has:bc,add:Ay,set:Ry,delete:Dy,clear:Oy,forEach:Ec(!1,!1)},e={get(r){return vc(this,r,!1,!0)},get size(){return wc(this)},has:bc,add:Ay,set:Ry,delete:Dy,clear:Oy,forEach:Ec(!1,!0)},n={get(r){return vc(this,r,!0)},get size(){return wc(this,!0)},has(r){return bc.call(this,r,!0)},add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear"),forEach:Ec(!0,!1)},i={get(r){return vc(this,r,!0,!0)},get size(){return wc(this,!0)},has(r){return bc.call(this,r,!0)},add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear"),forEach:Ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Tc(r,!1,!1),n[r]=Tc(r,!0,!1),e[r]=Tc(r,!1,!0),i[r]=Tc(r,!0,!0)}),[t,n,e,i]}const[uA,hA,fA,dA]=cA();function Wg(t,e){const n=e?t?dA:fA:t?hA:uA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ae(n,s)&&s in i?n:i,s,r)}const pA={get:Wg(!1,!1)},gA={get:Wg(!1,!0)},mA={get:Wg(!0,!1)},R1=new WeakMap,D1=new WeakMap,O1=new WeakMap,_A=new WeakMap;function yA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vA(t){return t.__v_skip||!Object.isExtensible(t)?0:yA(zk(t))}function Es(t){return go(t)?t:qg(t,!1,A1,pA,R1)}function bA(t){return qg(t,!1,lA,gA,D1)}function P1(t){return qg(t,!0,aA,mA,O1)}function qg(t,e,n,i,s){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=vA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Mi(t){return go(t)?Mi(t.__v_raw):!!(t&&t.__v_isReactive)}function go(t){return!!(t&&t.__v_isReadonly)}function Ou(t){return!!(t&&t.__v_isShallow)}function $h(t){return Mi(t)||go(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function mo(t){return Au(t,"__v_skip",!0),t}const el=t=>He(t)?Es(t):t,Kg=t=>He(t)?P1(t):t;function M1(t){fs&&Fn&&(t=ye(t),S1(t.dep||(t.dep=$g())))}function N1(t,e){t=ye(t);const n=t.dep;n&&Xd(n)}function rt(t){return!!(t&&t.__v_isRef===!0)}function ft(t){return L1(t,!1)}function zh(t){return L1(t,!0)}function L1(t,e){return rt(t)?t:new wA(t,e)}class wA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:el(e)}get value(){return M1(this),this._value}set value(e){const n=this.__v_isShallow||Ou(e)||go(e);e=n?e:ye(e),Za(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:el(e),N1(this))}}function x(t){return rt(t)?t.value:t}const EA={get:(t,e,n)=>x(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function F1(t){return Mi(t)?t:new Proxy(t,EA)}function TA(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=U1(t,n);return e}class IA{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yk(ye(this._object),this._key)}}function U1(t,e,n){const i=t[e];return rt(i)?i:new IA(t,e,n)}var V1;class xA{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[V1]=!1,this._dirty=!0,this.effect=new zg(e,()=>{this._dirty||(this._dirty=!0,N1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ye(this);return M1(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}V1="__v_isReadonly";function SA(t,e,n=!1){let i,s;const r=de(t);return r?(i=t,s=Hn):(i=t.get,s=t.set),new xA(i,s,r||!s,n)}function ds(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){jh(r,e,n)}return s}function Wn(t,e,n,i){if(de(t)){const r=ds(t,e,n,i);return r&&_1(r)&&r.catch(o=>{jh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Wn(t[r],e,n,i));return s}function jh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ds(l,null,10,[t,o,a]);return}}CA(t,n,s,i)}function CA(t,e,n,i=!0){console.error(t)}let tl=!1,Jd=!1;const Wt=[];let si=0;const so=[];let Si=null,Zs=0;const B1=Promise.resolve();let Gg=null;function Yg(t){const e=Gg||B1;return t?e.then(this?t.bind(this):t):e}function kA(t){let e=si+1,n=Wt.length;for(;e<n;){const i=e+n>>>1;nl(Wt[i])<t?e=i+1:n=i}return e}function Qg(t){(!Wt.length||!Wt.includes(t,tl&&t.allowRecurse?si+1:si))&&(t.id==null?Wt.push(t):Wt.splice(kA(t.id),0,t),$1())}function $1(){!tl&&!Jd&&(Jd=!0,Gg=B1.then(j1))}function AA(t){const e=Wt.indexOf(t);e>si&&Wt.splice(e,1)}function RA(t){se(t)?so.push(...t):(!Si||!Si.includes(t,t.allowRecurse?Zs+1:Zs))&&so.push(t),$1()}function Py(t,e=tl?si+1:0){for(;e<Wt.length;e++){const n=Wt[e];n&&n.pre&&(Wt.splice(e,1),e--,n())}}function z1(t){if(so.length){const e=[...new Set(so)];if(so.length=0,Si){Si.push(...e);return}for(Si=e,Si.sort((n,i)=>nl(n)-nl(i)),Zs=0;Zs<Si.length;Zs++)Si[Zs]();Si=null,Zs=0}}const nl=t=>t.id==null?1/0:t.id,DA=(t,e)=>{const n=nl(t)-nl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function j1(t){Jd=!1,tl=!0,Wt.sort(DA);const e=Hn;try{for(si=0;si<Wt.length;si++){const n=Wt[si];n&&n.active!==!1&&ds(n,null,14)}}finally{si=0,Wt.length=0,z1(),tl=!1,Gg=null,(Wt.length||so.length)&&j1()}}function OA(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||qe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||qe;f&&(s=n.map(d=>wt(d)?d.trim():d)),h&&(s=n.map(Ru))}let a,l=i[a=Jf(e)]||i[a=Jf(di(e))];!l&&r&&(l=i[a=Jf(Dr(e))]),l&&Wn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wn(c,t,6,s)}}function H1(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!de(t)){const l=c=>{const u=H1(c,e,!0);u&&(a=!0,sn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(He(t)&&i.set(t,null),null):(se(r)?r.forEach(l=>o[l]=null):sn(o,r),He(t)&&i.set(t,o),o)}function Hh(t,e){return!t||!Fh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Dr(e))||Ae(t,e))}let bn=null,Wh=null;function Pu(t){const e=bn;return bn=t,Wh=t&&t.type.__scopeId||null,e}function Ps(t){Wh=t}function Ms(){Wh=null}function qh(t,e=bn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&zy(-1);const r=Pu(e);let o;try{o=t(...s)}finally{Pu(r),i._d&&zy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zf(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=t;let m,_;const v=Pu(t);try{if(n.shapeFlag&4){const T=s||i;m=ii(u.call(T,T,h,r,d,f,p)),_=l}else{const T=e;m=ii(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),_=e.props?l:PA(l)}}catch(T){Da.length=0,jh(T,t,1),m=De(_r)}let b=m;if(_&&g!==!1){const T=Object.keys(_),{shapeFlag:E}=b;T.length&&E&7&&(o&&T.some(Fg)&&(_=MA(_,o)),b=_o(b,_))}return n.dirs&&(b=_o(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),m=b,Pu(v),m}const PA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fh(n))&&((e||(e={}))[n]=t[n]);return e},MA=(t,e)=>{const n={};for(const i in t)(!Fg(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function NA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?My(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Hh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?My(i,o,c):!0:!!o;return!1}function My(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Hh(n,r))return!0}return!1}function LA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const FA=t=>t.__isSuspense;function UA(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):RA(t)}function uu(t,e){if(ht){let n=ht.provides;const i=ht.parent&&ht.parent.provides;i===n&&(n=ht.provides=Object.create(i)),n[t]=e}}function dn(t,e,n=!1){const i=ht||bn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(i.proxy):e}}function VA(t,e){return Xg(t,null,{flush:"post"})}const Ic={};function ps(t,e,n){return Xg(t,e,n)}function Xg(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=qe){const a=Bg()===(ht==null?void 0:ht.scope)?ht:null;let l,c=!1,u=!1;if(rt(t)?(l=()=>t.value,c=Ou(t)):Mi(t)?(l=()=>t,i=!0):se(t)?(u=!0,c=t.some(b=>Mi(b)||Ou(b)),l=()=>t.map(b=>{if(rt(b))return b.value;if(Mi(b))return tr(b);if(de(b))return ds(b,a,2)})):de(t)?e?l=()=>ds(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Wn(t,a,3,[f])}:l=Hn,e&&i){const b=l;l=()=>tr(b())}let h,f=b=>{h=_.onStop=()=>{ds(b,a,4)}},d;if(sl)if(f=Hn,e?n&&Wn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const b=kR();d=b.__watcherHandles||(b.__watcherHandles=[])}else return Hn;let p=u?new Array(t.length).fill(Ic):Ic;const g=()=>{if(_.active)if(e){const b=_.run();(i||c||(u?b.some((T,E)=>Za(T,p[E])):Za(b,p)))&&(h&&h(),Wn(e,a,3,[b,p===Ic?void 0:u&&p[0]===Ic?[]:p,f]),p=b)}else _.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>ln(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Qg(g));const _=new zg(l,m);e?n?g():p=_.run():s==="post"?ln(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&Ug(a.scope.effects,_)};return d&&d.push(v),v}function BA(t,e,n){const i=this.proxy,s=wt(t)?t.includes(".")?W1(i,t):()=>i[t]:t.bind(i,i);let r;de(e)?r=e:(r=e.handler,n=e);const o=ht;yo(this);const a=Xg(s,r.bind(i),n);return o?yo(o):hr(),a}function W1(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function tr(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))tr(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)tr(t[n],e);else if(Vo(t)||io(t))t.forEach(n=>{tr(n,e)});else if(v1(t))for(const n in t)tr(t[n],e);return t}function Or(t){return de(t)?{setup:t,name:t.name}:t}const hu=t=>!!t.type.__asyncLoader,q1=t=>t.type.__isKeepAlive;function $A(t,e){K1(t,"a",e)}function zA(t,e){K1(t,"da",e)}function K1(t,e,n=ht){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)q1(s.parent.vnode)&&jA(i,e,n,s),s=s.parent}}function jA(t,e,n,i){const s=Kh(e,t,i,!0);Zg(()=>{Ug(i[e],s)},n)}function Kh(t,e,n=ht,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bo(),yo(n);const a=Wn(e,n,t,o);return hr(),$o(),a});return i?s.unshift(r):s.push(r),r}}const Ki=t=>(e,n=ht)=>(!sl||t==="sp")&&Kh(t,(...i)=>e(...i),n),HA=Ki("bm"),Jg=Ki("m"),WA=Ki("bu"),qA=Ki("u"),G1=Ki("bum"),Zg=Ki("um"),Y1=Ki("sp"),KA=Ki("rtg"),GA=Ki("rtc");function YA(t,e=ht){Kh("ec",t,e)}function ni(t,e){const n=bn;if(n===null)return t;const i=Qh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=qe]=e[r];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&tr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function zs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Bo(),Wn(l,n,8,[t.el,a,t,e]),$o())}}const Q1="components";function Ts(t,e){return XA(Q1,t,!0,e)||t}const QA=Symbol();function XA(t,e,n=!0,i=!1){const s=bn||ht;if(s){const r=s.type;if(t===Q1){const a=SR(r,!1);if(a&&(a===e||a===di(e)||a===Vh(di(e))))return r}const o=Ny(s[t]||r[t],e)||Ny(s.appContext[t],e);return!o&&i?r:o}}function Ny(t,e){return t&&(t[e]||t[di(e)]||t[Vh(di(e))])}function Ni(t,e,n,i){let s;const r=n&&n[i];if(se(t)||wt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(He(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Zd=t=>t?aE(t)?Qh(t)||t.proxy:Zd(t.parent):null,Ra=sn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zd(t.parent),$root:t=>Zd(t.root),$emit:t=>t.emit,$options:t=>em(t),$forceUpdate:t=>t.f||(t.f=()=>Qg(t.update)),$nextTick:t=>t.n||(t.n=Yg.bind(t.proxy)),$watch:t=>BA.bind(t)}),ed=(t,e)=>t!==qe&&!t.__isScriptSetup&&Ae(t,e),JA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ed(i,e))return o[e]=1,i[e];if(s!==qe&&Ae(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ae(c,e))return o[e]=3,r[e];if(n!==qe&&Ae(n,e))return o[e]=4,n[e];ep&&(o[e]=0)}}const u=Ra[e];let h,f;if(u)return e==="$attrs"&&pn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==qe&&Ae(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ae(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ed(s,e)?(s[e]=n,!0):i!==qe&&Ae(i,e)?(i[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==qe&&Ae(t,o)||ed(e,o)||(a=r[0])&&Ae(a,o)||Ae(i,o)||Ae(Ra,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ep=!0;function ZA(t){const e=em(t),n=t.proxy,i=t.ctx;ep=!1,e.beforeCreate&&Ly(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:v,destroyed:b,unmounted:T,render:E,renderTracked:A,renderTriggered:C,errorCaptured:S,serverPrefetch:B,expose:X,inheritAttrs:ie,components:ue,directives:nt,filters:et}=e;if(c&&eR(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const Ce=o[ge];de(Ce)&&(i[ge]=Ce.bind(n))}if(s){const ge=s.call(n,n);He(ge)&&(t.data=Es(ge))}if(ep=!0,r)for(const ge in r){const Ce=r[ge],Ft=de(Ce)?Ce.bind(n,n):de(Ce.get)?Ce.get.bind(n,n):Hn,rn=!de(Ce)&&de(Ce.set)?Ce.set.bind(n):Hn,Ut=Te({get:Ft,set:rn});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:ut=>Ut.value=ut})}if(a)for(const ge in a)X1(a[ge],i,n,ge);if(l){const ge=de(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(Ce=>{uu(Ce,ge[Ce])})}u&&Ly(u,t,"c");function me(ge,Ce){se(Ce)?Ce.forEach(Ft=>ge(Ft.bind(n))):Ce&&ge(Ce.bind(n))}if(me(HA,h),me(Jg,f),me(WA,d),me(qA,p),me($A,g),me(zA,m),me(YA,S),me(GA,A),me(KA,C),me(G1,v),me(Zg,T),me(Y1,B),se(X))if(X.length){const ge=t.exposed||(t.exposed={});X.forEach(Ce=>{Object.defineProperty(ge,Ce,{get:()=>n[Ce],set:Ft=>n[Ce]=Ft})})}else t.exposed||(t.exposed={});E&&t.render===Hn&&(t.render=E),ie!=null&&(t.inheritAttrs=ie),ue&&(t.components=ue),nt&&(t.directives=nt)}function eR(t,e,n=Hn,i=!1){se(t)&&(t=tp(t));for(const s in t){const r=t[s];let o;He(r)?"default"in r?o=dn(r.from||s,r.default,!0):o=dn(r.from||s):o=dn(r),rt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ly(t,e,n){Wn(se(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function X1(t,e,n,i){const s=i.includes(".")?W1(n,i):()=>n[i];if(wt(t)){const r=e[t];de(r)&&ps(s,r)}else if(de(t))ps(s,t.bind(n));else if(He(t))if(se(t))t.forEach(r=>X1(r,e,n,i));else{const r=de(t.handler)?t.handler.bind(n):e[t.handler];de(r)&&ps(s,r,t)}}function em(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Mu(l,c,o,!0)),Mu(l,e,o)),He(e)&&r.set(e,l),l}function Mu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Mu(t,r,n,!0),s&&s.forEach(o=>Mu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=tR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tR={data:Fy,props:Gs,emits:Gs,methods:Gs,computed:Gs,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Gs,directives:Gs,watch:iR,provide:Fy,inject:nR};function Fy(t,e){return e?t?function(){return sn(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function nR(t,e){return Gs(tp(t),tp(e))}function tp(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?sn(sn(Object.create(null),t),e):e}function iR(t,e){if(!t)return e;if(!e)return t;const n=sn(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function sR(t,e,n,i=!1){const s={},r={};Au(r,Yh,1),t.propsDefaults=Object.create(null),J1(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:bA(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function rR(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ye(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Hh(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ae(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=di(f);s[p]=np(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{J1(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=Dr(h))===h||!Ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=np(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ae(e,h))&&(delete r[h],c=!0)}c&&Ui(t,"set","$attrs")}function J1(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(lu(l))continue;const c=e[l];let u;s&&Ae(s,u=di(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hh(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ye(n),c=a||qe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=np(s,l,h,c[h],t,!Ae(c,h))}}return o}function np(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&de(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(yo(s),i=c[n]=l.call(null,e),hr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Dr(n))&&(i=!0))}return i}function Z1(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!de(t)){const u=h=>{l=!0;const[f,d]=Z1(h,e,!0);sn(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return He(t)&&i.set(t,no),no;if(se(r))for(let u=0;u<r.length;u++){const h=di(r[u]);Uy(h)&&(o[h]=qe)}else if(r)for(const u in r){const h=di(u);if(Uy(h)){const f=r[u],d=o[h]=se(f)||de(f)?{type:f}:Object.assign({},f);if(d){const p=$y(Boolean,d.type),g=$y(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||Ae(d,"default"))&&a.push(h)}}}const c=[o,a];return He(t)&&i.set(t,c),c}function Uy(t){return t[0]!=="$"}function Vy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function By(t,e){return Vy(t)===Vy(e)}function $y(t,e){return se(e)?e.findIndex(n=>By(n,t)):de(e)&&By(e,t)?0:-1}const eE=t=>t[0]==="_"||t==="$stable",tm=t=>se(t)?t.map(ii):[ii(t)],oR=(t,e,n)=>{if(e._n)return e;const i=qh((...s)=>tm(e(...s)),n);return i._c=!1,i},tE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(eE(s))continue;const r=t[s];if(de(r))e[s]=oR(s,r,i);else if(r!=null){const o=tm(r);e[s]=()=>o}}},nE=(t,e)=>{const n=tm(e);t.slots.default=()=>n},aR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Au(e,"_",n)):tE(e,t.slots={})}else t.slots={},e&&nE(t,e);Au(t.slots,Yh,1)},lR=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=qe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(sn(s,e),!n&&a===1&&delete s._):(r=!e.$stable,tE(e,s)),o=e}else e&&(nE(t,e),o={default:1});if(r)for(const a in s)!eE(a)&&!(a in o)&&delete s[a]};function iE(){return{app:null,config:{isNativeTag:Vk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cR=0;function uR(t,e){return function(i,s=null){de(i)||(i=Object.assign({},i)),s!=null&&!He(s)&&(s=null);const r=iE(),o=new Set;let a=!1;const l=r.app={_uid:cR++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:uE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&de(c.install)?(o.add(c),c.install(l,...u)):de(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=De(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Qh(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ip(t,e,n,i,s=!1){if(se(t)){t.forEach((f,d)=>ip(f,e&&(se(e)?e[d]:e),n,i,s));return}if(hu(i)&&!s)return;const r=i.shapeFlag&4?Qh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===qe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(wt(c)?(u[c]=null,Ae(h,c)&&(h[c]=null)):rt(c)&&(c.value=null)),de(l))ds(l,a,12,[o,u]);else{const f=wt(l),d=rt(l);if(f||d){const p=()=>{if(t.f){const g=f?Ae(h,l)?h[l]:u[l]:l.value;s?se(g)&&Ug(g,r):se(g)?g.includes(r)||g.push(r):f?(u[l]=[r],Ae(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ae(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,ln(p,n)):p()}}}const ln=UA;function hR(t){return fR(t)}function fR(t,e){const n=Wk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Hn,insertStaticContent:p}=t,g=(y,w,I,k=null,O=null,F=null,j=!1,L=null,U=!!w.dynamicChildren)=>{if(y===w)return;y&&!ra(y,w)&&(k=z(y),ut(y,O,F,!0),y=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:P,ref:ee,shapeFlag:K}=w;switch(P){case Gh:m(y,w,I,k);break;case _r:_(y,w,I,k);break;case fu:y==null&&v(w,I,k,j);break;case Me:ue(y,w,I,k,O,F,j,L,U);break;default:K&1?E(y,w,I,k,O,F,j,L,U):K&6?nt(y,w,I,k,O,F,j,L,U):(K&64||K&128)&&P.process(y,w,I,k,O,F,j,L,U,ke)}ee!=null&&O&&ip(ee,y&&y.ref,F,w||y,!w)},m=(y,w,I,k)=>{if(y==null)i(w.el=a(w.children),I,k);else{const O=w.el=y.el;w.children!==y.children&&c(O,w.children)}},_=(y,w,I,k)=>{y==null?i(w.el=l(w.children||""),I,k):w.el=y.el},v=(y,w,I,k)=>{[y.el,y.anchor]=p(y.children,w,I,k,y.el,y.anchor)},b=({el:y,anchor:w},I,k)=>{let O;for(;y&&y!==w;)O=f(y),i(y,I,k),y=O;i(w,I,k)},T=({el:y,anchor:w})=>{let I;for(;y&&y!==w;)I=f(y),s(y),y=I;s(w)},E=(y,w,I,k,O,F,j,L,U)=>{j=j||w.type==="svg",y==null?A(w,I,k,O,F,j,L,U):B(y,w,O,F,j,L,U)},A=(y,w,I,k,O,F,j,L)=>{let U,P;const{type:ee,props:K,shapeFlag:te,transition:ce,dirs:ve}=y;if(U=y.el=o(y.type,F,K&&K.is,K),te&8?u(U,y.children):te&16&&S(y.children,U,null,k,O,F&&ee!=="foreignObject",j,L),ve&&zs(y,null,k,"created"),C(U,y,y.scopeId,j,k),K){for(const Ue in K)Ue!=="value"&&!lu(Ue)&&r(U,Ue,null,K[Ue],F,y.children,k,O,$);"value"in K&&r(U,"value",null,K.value),(P=K.onVnodeBeforeMount)&&Zn(P,k,y)}ve&&zs(y,null,k,"beforeMount");const ze=(!O||O&&!O.pendingBranch)&&ce&&!ce.persisted;ze&&ce.beforeEnter(U),i(U,w,I),((P=K&&K.onVnodeMounted)||ze||ve)&&ln(()=>{P&&Zn(P,k,y),ze&&ce.enter(U),ve&&zs(y,null,k,"mounted")},O)},C=(y,w,I,k,O)=>{if(I&&d(y,I),k)for(let F=0;F<k.length;F++)d(y,k[F]);if(O){let F=O.subTree;if(w===F){const j=O.vnode;C(y,j,j.scopeId,j.slotScopeIds,O.parent)}}},S=(y,w,I,k,O,F,j,L,U=0)=>{for(let P=U;P<y.length;P++){const ee=y[P]=L?ns(y[P]):ii(y[P]);g(null,ee,w,I,k,O,F,j,L)}},B=(y,w,I,k,O,F,j)=>{const L=w.el=y.el;let{patchFlag:U,dynamicChildren:P,dirs:ee}=w;U|=y.patchFlag&16;const K=y.props||qe,te=w.props||qe;let ce;I&&js(I,!1),(ce=te.onVnodeBeforeUpdate)&&Zn(ce,I,w,y),ee&&zs(w,y,I,"beforeUpdate"),I&&js(I,!0);const ve=O&&w.type!=="foreignObject";if(P?X(y.dynamicChildren,P,L,I,k,ve,F):j||Ce(y,w,L,null,I,k,ve,F,!1),U>0){if(U&16)ie(L,w,K,te,I,k,O);else if(U&2&&K.class!==te.class&&r(L,"class",null,te.class,O),U&4&&r(L,"style",K.style,te.style,O),U&8){const ze=w.dynamicProps;for(let Ue=0;Ue<ze.length;Ue++){const dt=ze[Ue],Nn=K[dt],zr=te[dt];(zr!==Nn||dt==="value")&&r(L,dt,Nn,zr,O,y.children,I,k,$)}}U&1&&y.children!==w.children&&u(L,w.children)}else!j&&P==null&&ie(L,w,K,te,I,k,O);((ce=te.onVnodeUpdated)||ee)&&ln(()=>{ce&&Zn(ce,I,w,y),ee&&zs(w,y,I,"updated")},k)},X=(y,w,I,k,O,F,j)=>{for(let L=0;L<w.length;L++){const U=y[L],P=w[L],ee=U.el&&(U.type===Me||!ra(U,P)||U.shapeFlag&70)?h(U.el):I;g(U,P,ee,null,k,O,F,j,!0)}},ie=(y,w,I,k,O,F,j)=>{if(I!==k){if(I!==qe)for(const L in I)!lu(L)&&!(L in k)&&r(y,L,I[L],null,j,w.children,O,F,$);for(const L in k){if(lu(L))continue;const U=k[L],P=I[L];U!==P&&L!=="value"&&r(y,L,P,U,j,w.children,O,F,$)}"value"in k&&r(y,"value",I.value,k.value)}},ue=(y,w,I,k,O,F,j,L,U)=>{const P=w.el=y?y.el:a(""),ee=w.anchor=y?y.anchor:a("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ce}=w;ce&&(L=L?L.concat(ce):ce),y==null?(i(P,I,k),i(ee,I,k),S(w.children,I,ee,O,F,j,L,U)):K>0&&K&64&&te&&y.dynamicChildren?(X(y.dynamicChildren,te,I,O,F,j,L),(w.key!=null||O&&w===O.subTree)&&sE(y,w,!0)):Ce(y,w,I,ee,O,F,j,L,U)},nt=(y,w,I,k,O,F,j,L,U)=>{w.slotScopeIds=L,y==null?w.shapeFlag&512?O.ctx.activate(w,I,k,j,U):et(w,I,k,O,F,j,U):pe(y,w,U)},et=(y,w,I,k,O,F,j)=>{const L=y.component=wR(y,k,O);if(q1(y)&&(L.ctx.renderer=ke),ER(L),L.asyncDep){if(O&&O.registerDep(L,me),!y.el){const U=L.subTree=De(_r);_(null,U,w,I)}return}me(L,y,w,I,O,F,j)},pe=(y,w,I)=>{const k=w.component=y.component;if(NA(y,w,I))if(k.asyncDep&&!k.asyncResolved){ge(k,w,I);return}else k.next=w,AA(k.update),k.update();else w.el=y.el,k.vnode=w},me=(y,w,I,k,O,F,j)=>{const L=()=>{if(y.isMounted){let{next:ee,bu:K,u:te,parent:ce,vnode:ve}=y,ze=ee,Ue;js(y,!1),ee?(ee.el=ve.el,ge(y,ee,j)):ee=ve,K&&cu(K),(Ue=ee.props&&ee.props.onVnodeBeforeUpdate)&&Zn(Ue,ce,ee,ve),js(y,!0);const dt=Zf(y),Nn=y.subTree;y.subTree=dt,g(Nn,dt,h(Nn.el),z(Nn),y,O,F),ee.el=dt.el,ze===null&&LA(y,dt.el),te&&ln(te,O),(Ue=ee.props&&ee.props.onVnodeUpdated)&&ln(()=>Zn(Ue,ce,ee,ve),O)}else{let ee;const{el:K,props:te}=w,{bm:ce,m:ve,parent:ze}=y,Ue=hu(w);if(js(y,!1),ce&&cu(ce),!Ue&&(ee=te&&te.onVnodeBeforeMount)&&Zn(ee,ze,w),js(y,!0),K&&_e){const dt=()=>{y.subTree=Zf(y),_e(K,y.subTree,y,O,null)};Ue?w.type.__asyncLoader().then(()=>!y.isUnmounted&&dt()):dt()}else{const dt=y.subTree=Zf(y);g(null,dt,I,k,y,O,F),w.el=dt.el}if(ve&&ln(ve,O),!Ue&&(ee=te&&te.onVnodeMounted)){const dt=w;ln(()=>Zn(ee,ze,dt),O)}(w.shapeFlag&256||ze&&hu(ze.vnode)&&ze.vnode.shapeFlag&256)&&y.a&&ln(y.a,O),y.isMounted=!0,w=I=k=null}},U=y.effect=new zg(L,()=>Qg(P),y.scope),P=y.update=()=>U.run();P.id=y.uid,js(y,!0),P()},ge=(y,w,I)=>{w.component=y;const k=y.vnode.props;y.vnode=w,y.next=null,rR(y,w.props,k,I),lR(y,w.children,I),Bo(),Py(),$o()},Ce=(y,w,I,k,O,F,j,L,U=!1)=>{const P=y&&y.children,ee=y?y.shapeFlag:0,K=w.children,{patchFlag:te,shapeFlag:ce}=w;if(te>0){if(te&128){rn(P,K,I,k,O,F,j,L,U);return}else if(te&256){Ft(P,K,I,k,O,F,j,L,U);return}}ce&8?(ee&16&&$(P,O,F),K!==P&&u(I,K)):ee&16?ce&16?rn(P,K,I,k,O,F,j,L,U):$(P,O,F,!0):(ee&8&&u(I,""),ce&16&&S(K,I,k,O,F,j,L,U))},Ft=(y,w,I,k,O,F,j,L,U)=>{y=y||no,w=w||no;const P=y.length,ee=w.length,K=Math.min(P,ee);let te;for(te=0;te<K;te++){const ce=w[te]=U?ns(w[te]):ii(w[te]);g(y[te],ce,I,null,O,F,j,L,U)}P>ee?$(y,O,F,!0,!1,K):S(w,I,k,O,F,j,L,U,K)},rn=(y,w,I,k,O,F,j,L,U)=>{let P=0;const ee=w.length;let K=y.length-1,te=ee-1;for(;P<=K&&P<=te;){const ce=y[P],ve=w[P]=U?ns(w[P]):ii(w[P]);if(ra(ce,ve))g(ce,ve,I,null,O,F,j,L,U);else break;P++}for(;P<=K&&P<=te;){const ce=y[K],ve=w[te]=U?ns(w[te]):ii(w[te]);if(ra(ce,ve))g(ce,ve,I,null,O,F,j,L,U);else break;K--,te--}if(P>K){if(P<=te){const ce=te+1,ve=ce<ee?w[ce].el:k;for(;P<=te;)g(null,w[P]=U?ns(w[P]):ii(w[P]),I,ve,O,F,j,L,U),P++}}else if(P>te)for(;P<=K;)ut(y[P],O,F,!0),P++;else{const ce=P,ve=P,ze=new Map;for(P=ve;P<=te;P++){const _n=w[P]=U?ns(w[P]):ii(w[P]);_n.key!=null&&ze.set(_n.key,P)}let Ue,dt=0;const Nn=te-ve+1;let zr=!1,wy=0;const sa=new Array(Nn);for(P=0;P<Nn;P++)sa[P]=0;for(P=ce;P<=K;P++){const _n=y[P];if(dt>=Nn){ut(_n,O,F,!0);continue}let Jn;if(_n.key!=null)Jn=ze.get(_n.key);else for(Ue=ve;Ue<=te;Ue++)if(sa[Ue-ve]===0&&ra(_n,w[Ue])){Jn=Ue;break}Jn===void 0?ut(_n,O,F,!0):(sa[Jn-ve]=P+1,Jn>=wy?wy=Jn:zr=!0,g(_n,w[Jn],I,null,O,F,j,L,U),dt++)}const Ey=zr?dR(sa):no;for(Ue=Ey.length-1,P=Nn-1;P>=0;P--){const _n=ve+P,Jn=w[_n],Ty=_n+1<ee?w[_n+1].el:k;sa[P]===0?g(null,Jn,I,Ty,O,F,j,L,U):zr&&(Ue<0||P!==Ey[Ue]?Ut(Jn,I,Ty,2):Ue--)}}},Ut=(y,w,I,k,O=null)=>{const{el:F,type:j,transition:L,children:U,shapeFlag:P}=y;if(P&6){Ut(y.component.subTree,w,I,k);return}if(P&128){y.suspense.move(w,I,k);return}if(P&64){j.move(y,w,I,ke);return}if(j===Me){i(F,w,I);for(let K=0;K<U.length;K++)Ut(U[K],w,I,k);i(y.anchor,w,I);return}if(j===fu){b(y,w,I);return}if(k!==2&&P&1&&L)if(k===0)L.beforeEnter(F),i(F,w,I),ln(()=>L.enter(F),O);else{const{leave:K,delayLeave:te,afterLeave:ce}=L,ve=()=>i(F,w,I),ze=()=>{K(F,()=>{ve(),ce&&ce()})};te?te(F,ve,ze):ze()}else i(F,w,I)},ut=(y,w,I,k=!1,O=!1)=>{const{type:F,props:j,ref:L,children:U,dynamicChildren:P,shapeFlag:ee,patchFlag:K,dirs:te}=y;if(L!=null&&ip(L,null,I,y,!0),ee&256){w.ctx.deactivate(y);return}const ce=ee&1&&te,ve=!hu(y);let ze;if(ve&&(ze=j&&j.onVnodeBeforeUnmount)&&Zn(ze,w,y),ee&6)R(y.component,I,k);else{if(ee&128){y.suspense.unmount(I,k);return}ce&&zs(y,null,w,"beforeUnmount"),ee&64?y.type.remove(y,w,I,O,ke,k):P&&(F!==Me||K>0&&K&64)?$(P,w,I,!1,!0):(F===Me&&K&384||!O&&ee&16)&&$(U,w,I),k&&Sn(y)}(ve&&(ze=j&&j.onVnodeUnmounted)||ce)&&ln(()=>{ze&&Zn(ze,w,y),ce&&zs(y,null,w,"unmounted")},I)},Sn=y=>{const{type:w,el:I,anchor:k,transition:O}=y;if(w===Me){Xn(I,k);return}if(w===fu){T(y);return}const F=()=>{s(I),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:j,delayLeave:L}=O,U=()=>j(I,F);L?L(y.el,F,U):U()}else F()},Xn=(y,w)=>{let I;for(;y!==w;)I=f(y),s(y),y=I;s(w)},R=(y,w,I)=>{const{bum:k,scope:O,update:F,subTree:j,um:L}=y;k&&cu(k),O.stop(),F&&(F.active=!1,ut(j,y,w,I)),L&&ln(L,w),ln(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},$=(y,w,I,k=!1,O=!1,F=0)=>{for(let j=F;j<y.length;j++)ut(y[j],w,I,k,O)},z=y=>y.shapeFlag&6?z(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),J=(y,w,I)=>{y==null?w._vnode&&ut(w._vnode,null,null,!0):g(w._vnode||null,y,w,null,null,null,I),Py(),z1(),w._vnode=y},ke={p:g,um:ut,m:Ut,r:Sn,mt:et,mc:S,pc:Ce,pbc:X,n:z,o:t};let it,_e;return e&&([it,_e]=e(ke)),{render:J,hydrate:it,createApp:uR(J,it)}}function js({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sE(t,e,n=!1){const i=t.children,s=e.children;if(se(i)&&se(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ns(s[r]),a.el=o.el),n||sE(o,a)),a.type===Gh&&(a.el=o.el)}}function dR(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const pR=t=>t.__isTeleport,Me=Symbol(void 0),Gh=Symbol(void 0),_r=Symbol(void 0),fu=Symbol(void 0),Da=[];let Bn=null;function H(t=!1){Da.push(Bn=t?null:[])}function gR(){Da.pop(),Bn=Da[Da.length-1]||null}let il=1;function zy(t){il+=t}function rE(t){return t.dynamicChildren=il>0?Bn||no:null,gR(),il>0&&Bn&&Bn.push(t),t}function ne(t,e,n,i,s,r){return rE(M(t,e,n,i,s,r,!0))}function nn(t,e,n,i,s){return rE(De(t,e,n,i,s,!0))}function sp(t){return t?t.__v_isVNode===!0:!1}function ra(t,e){return t.type===e.type&&t.key===e.key}const Yh="__vInternal",oE=({key:t})=>t??null,du=({ref:t,ref_key:e,ref_for:n})=>t!=null?wt(t)||rt(t)||de(t)?{i:bn,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,i=0,s=null,r=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oE(e),ref:e&&du(e),scopeId:Wh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(nm(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),il>0&&!o&&Bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Bn.push(l),l}const De=mR;function mR(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===QA)&&(t=_r),sp(t)){const a=_o(t,e,!0);return n&&nm(a,n),il>0&&!r&&Bn&&(a.shapeFlag&6?Bn[Bn.indexOf(t)]=a:Bn.push(a)),a.patchFlag|=-2,a}if(CR(t)&&(t=t.__vccOpts),e){e=_R(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=bs(a)),He(l)&&($h(l)&&!se(l)&&(l=sn({},l)),e.style=Uo(l))}const o=wt(t)?1:FA(t)?128:pR(t)?64:He(t)?4:de(t)?2:0;return M(t,e,n,i,s,o,r,!0)}function _R(t){return t?$h(t)||Yh in t?sn({},t):t:null}function _o(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?yR(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&oE(a),ref:e&&e.ref?n&&s?se(s)?s.concat(du(e)):[s,du(e)]:du(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_o(t.ssContent),ssFallback:t.ssFallback&&_o(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $e(t=" ",e=0){return De(Gh,null,t,e)}function at(t="",e=!1){return e?(H(),nn(_r,null,t)):De(_r,null,t)}function ii(t){return t==null||typeof t=="boolean"?De(_r):se(t)?De(Me,null,t.slice()):typeof t=="object"?ns(t):De(Gh,null,String(t))}function ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_o(t)}function nm(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),nm(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yh in e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:bn},n=32):(e=String(e),i&64?(n=16,e=[$e(e)]):n=8);t.children=e,t.shapeFlag|=n}function yR(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=bs([e.class,i.class]));else if(s==="style")e.style=Uo([e.style,i.style]);else if(Fh(s)){const r=e[s],o=i[s];o&&r!==o&&!(se(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Zn(t,e,n,i=null){Wn(t,e,7,[n,i])}const vR=iE();let bR=0;function wR(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||vR,r={uid:bR++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new b1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Z1(i,s),emitsOptions:H1(i,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=OA.bind(null,r),t.ce&&t.ce(r),r}let ht=null;const Fl=()=>ht||bn,yo=t=>{ht=t,t.scope.on()},hr=()=>{ht&&ht.scope.off(),ht=null};function aE(t){return t.vnode.shapeFlag&4}let sl=!1;function ER(t,e=!1){sl=e;const{props:n,children:i}=t.vnode,s=aE(t);sR(t,n,s,e),aR(t,i);const r=s?TR(t,e):void 0;return sl=!1,r}function TR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mo(new Proxy(t.ctx,JA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?xR(t):null;yo(t),Bo();const r=ds(i,t,0,[t.props,s]);if($o(),hr(),_1(r)){if(r.then(hr,hr),e)return r.then(o=>{jy(t,o,e)}).catch(o=>{jh(o,t,0)});t.asyncDep=r}else jy(t,r,e)}else lE(t,e)}function jy(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=F1(e)),lE(t,n)}let Hy;function lE(t,e,n){const i=t.type;if(!t.render){if(!e&&Hy&&!i.render){const s=i.template||em(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=sn(sn({isCustomElement:r,delimiters:a},o),l);i.render=Hy(s,c)}}t.render=i.render||Hn}yo(t),Bo(),ZA(t),$o(),hr()}function IR(t){return new Proxy(t.attrs,{get(e,n){return pn(t,"get","$attrs"),e[n]}})}function xR(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=IR(t))},slots:t.slots,emit:t.emit,expose:e}}function Qh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(F1(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ra)return Ra[n](t)},has(e,n){return n in e||n in Ra}}))}function SR(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function CR(t){return de(t)&&"__vccOpts"in t}const Te=(t,e)=>SA(t,e,sl);function zo(t,e,n){const i=arguments.length;return i===2?He(e)&&!se(e)?sp(e)?De(t,null,[e]):De(t,e):De(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sp(n)&&(n=[n]),De(t,e,n))}const cE=Symbol(""),kR=()=>dn(cE),uE="3.2.47",AR="http://www.w3.org/2000/svg",er=typeof document<"u"?document:null,Wy=er&&er.createElement("template"),RR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?er.createElementNS(AR,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Wy.innerHTML=i?`<svg>${t}</svg>`:t;const a=Wy.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function DR(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function OR(t,e,n){const i=t.style,s=wt(n);if(n&&!s){if(e&&!wt(e))for(const r in e)n[r]==null&&rp(i,r,"");for(const r in n)rp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const qy=/\s*!important$/;function rp(t,e,n){if(se(n))n.forEach(i=>rp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=PR(t,e);qy.test(n)?t.setProperty(Dr(i),n.replace(qy,""),"important"):t[i]=n}}const Ky=["Webkit","Moz","ms"],td={};function PR(t,e){const n=td[e];if(n)return n;let i=di(e);if(i!=="filter"&&i in t)return td[e]=i;i=Vh(i);for(let s=0;s<Ky.length;s++){const r=Ky[s]+i;if(r in t)return td[e]=r}return e}const Gy="http://www.w3.org/1999/xlink";function MR(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gy,e.slice(6,e.length)):t.setAttributeNS(Gy,e,n);else{const r=Fk(e);n==null||r&&!g1(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function NR(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=g1(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ss(t,e,n,i){t.addEventListener(e,n,i)}function LR(t,e,n,i){t.removeEventListener(e,n,i)}function FR(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=UR(e);if(i){const c=r[e]=$R(i,s);ss(t,a,c,l)}else o&&(LR(t,a,o,l),r[e]=void 0)}}const Yy=/(?:Once|Passive|Capture)$/;function UR(t){let e;if(Yy.test(t)){e={};let i;for(;i=t.match(Yy);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let nd=0;const VR=Promise.resolve(),BR=()=>nd||(VR.then(()=>nd=0),nd=Date.now());function $R(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Wn(zR(i,n.value),e,5,[i])};return n.value=t,n.attached=BR(),n}function zR(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Qy=/^on[a-z]/,jR=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?DR(t,i,s):e==="style"?OR(t,n,i):Fh(e)?Fg(e)||FR(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HR(t,e,i,s))?NR(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),MR(t,e,i,s))};function HR(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Qy.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qy.test(e)&&wt(n)?!1:e in t}function hE(t){const e=Fl();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ap(r,s))},i=()=>{const s=t(e.proxy);op(e.subTree,s),n(s)};VA(i),Jg(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Zg(()=>s.disconnect())})}function op(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{op(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ap(t.el,e);else if(t.type===Me)t.children.forEach(n=>op(n,e));else if(t.type===fu){let{el:n,anchor:i}=t;for(;n&&(ap(n,e),n!==i);)n=n.nextSibling}}function ap(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>cu(e,n):e};function WR(t){t.target.composing=!0}function Xy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ls={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=vo(s);const r=i||s.props&&s.props.type==="number";ss(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ru(a)),t._assign(a)}),n&&ss(t,"change",()=>{t.value=t.value.trim()}),e||(ss(t,"compositionstart",WR),ss(t,"compositionend",Xy),ss(t,"change",Xy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=vo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Ru(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qR={deep:!0,created(t,e,n){t._assign=vo(n),ss(t,"change",()=>{const i=t._modelValue,s=rl(t),r=t.checked,o=t._assign;if(se(i)){const a=Lg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Vo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(fE(t,r))})},mounted:Jy,beforeUpdate(t,e,n){t._assign=vo(n),Jy(t,e,n)}};function Jy(t,{value:e,oldValue:n},i){t._modelValue=e,se(e)?t.checked=Lg(e,i.props.value)>-1:Vo(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Nl(e,fE(t,!0)))}const KR={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Vo(e);ss(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ru(rl(o)):rl(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=vo(i)},mounted(t,{value:e}){Zy(t,e)},beforeUpdate(t,e,n){t._assign=vo(n)},updated(t,{value:e}){Zy(t,e)}};function Zy(t,e){const n=t.multiple;if(!(n&&!se(e)&&!Vo(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=rl(r);if(n)se(e)?r.selected=Lg(e,o)>-1:r.selected=e.has(o);else if(Nl(rl(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function rl(t){return"_value"in t?t._value:t.value}function fE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const GR=["ctrl","shift","alt","meta"],YR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GR.some(n=>t[`${n}Key`]&&!e.includes(n))},Is=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=YR[e[s]];if(r&&r(n,e))return}return t(n,...i)},QR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dE=(t,e)=>n=>{if(!("key"in n))return;const i=Dr(n.key);if(e.some(s=>s===i||QR[s]===i))return t(n)},XR=sn({patchProp:jR},RR);let ev;function JR(){return ev||(ev=hR(XR))}const ZR=(...t)=>{const e=JR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=eD(i);if(!s)return;const r=e._component;!de(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eD(t){return wt(t)?document.querySelector(t):t}var tD=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let pE;const Xh=t=>pE=t,gE=Symbol();function lp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Oa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oa||(Oa={}));function nD(){const t=w1(!0),e=t.run(()=>ft({}));let n=[],i=[];const s=mo({install(r){Xh(s),s._a=r,r.provide(gE,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!tD?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mE=()=>{};function tv(t,e,n,i=mE){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Bg()&&E1(s),s}function jr(t,...e){t.slice().forEach(n=>{n(...e)})}function cp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];lp(s)&&lp(i)&&t.hasOwnProperty(n)&&!rt(i)&&!Mi(i)?t[n]=cp(s,i):t[n]=i}return t}const iD=Symbol();function sD(t){return!lp(t)||!t.hasOwnProperty(iD)}const{assign:ts}=Object;function rD(t){return!!(rt(t)&&t.effect)}function oD(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=TA(n.state.value[t]);return ts(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=mo(Te(()=>{Xh(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=_E(t,c,e,n,i,!0),l}function _E(t,e,n={},i,s,r){let o;const a=ts({actions:{}},n),l={deep:!0};let c,u,h=mo([]),f=mo([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),ft({});let g;function m(C){let S;c=u=!1,typeof C=="function"?(C(i.state.value[t]),S={type:Oa.patchFunction,storeId:t,events:d}):(cp(i.state.value[t],C),S={type:Oa.patchObject,payload:C,storeId:t,events:d});const B=g=Symbol();Yg().then(()=>{g===B&&(c=!0)}),u=!0,jr(h,S,i.state.value[t])}const _=r?function(){const{state:S}=n,B=S?S():{};this.$patch(X=>{ts(X,B)})}:mE;function v(){o.stop(),h=[],f=[],i._s.delete(t)}function b(C,S){return function(){Xh(i);const B=Array.from(arguments),X=[],ie=[];function ue(pe){X.push(pe)}function nt(pe){ie.push(pe)}jr(f,{args:B,name:C,store:E,after:ue,onError:nt});let et;try{et=S.apply(this&&this.$id===t?this:E,B)}catch(pe){throw jr(ie,pe),pe}return et instanceof Promise?et.then(pe=>(jr(X,pe),pe)).catch(pe=>(jr(ie,pe),Promise.reject(pe))):(jr(X,et),et)}}const T={_p:i,$id:t,$onAction:tv.bind(null,f),$patch:m,$reset:_,$subscribe(C,S={}){const B=tv(h,C,S.detached,()=>X()),X=o.run(()=>ps(()=>i.state.value[t],ie=>{(S.flush==="sync"?u:c)&&C({storeId:t,type:Oa.direct,events:d},ie)},ts({},l,S)));return B},$dispose:v},E=Es(T);i._s.set(t,E);const A=i._e.run(()=>(o=w1(),o.run(()=>e())));for(const C in A){const S=A[C];if(rt(S)&&!rD(S)||Mi(S))r||(p&&sD(S)&&(rt(S)?S.value=p[C]:cp(S,p[C])),i.state.value[t][C]=S);else if(typeof S=="function"){const B=b(C,S);A[C]=B,a.actions[C]=S}}return ts(E,A),ts(ye(E),A),Object.defineProperty(E,"$state",{get:()=>i.state.value[t],set:C=>{m(S=>{ts(S,C)})}}),i._p.forEach(C=>{ts(E,o.run(()=>C({store:E,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(E.$state,p),c=!0,u=!0,E}function im(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Fl();return a=a||c&&dn(gE,null),a&&Xh(a),a=pE,a._s.has(i)||(r?_E(i,e,s,a):oD(i,s,a)),a._s.get(i)}return o.$id=i,o}function aD(t){{t=ye(t);const e={};for(const n in t){const i=t[n];(rt(i)||Mi(i))&&(e[n]=U1(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw jo(e)},jo=function(t){return new Error("Firebase Database ("+yE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new cD;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bE=function(t){const e=vE(t);return Jh.encodeByteArray(e,!0)},Nu=function(t){return bE(t).replace(/\./g,"")},Lu=function(t){try{return Jh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){return wE(void 0,t)}function wE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hD(n)||(t[n]=wE(t[n],e[n]));return t}function hD(t){return t!=="__proto__"}/**
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
 */function fD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dD=()=>fD().__FIREBASE_DEFAULTS__,pD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lu(t[1]);return e&&JSON.parse(e)},sm=()=>{try{return dD()||pD()||gD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=sm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mD=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_D=()=>{var t;return(t=sm())===null||t===void 0?void 0:t.config},TE=t=>{var e;return(e=sm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function yD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function vD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bD(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xE(){return yE.NODE_ADMIN===!0}function SE(){try{return typeof indexedDB=="object"}catch{return!1}}function wD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="FirebaseError";class vi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ED,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?TD(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vi(s,a,i)}}function TD(t,e){return t.replace(ID,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ID=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return JSON.parse(t)}function Ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=al(Lu(r[0])||""),n=al(Lu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},xD=function(t){const e=CE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SD=function(t){const e=CE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Uu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(nv(r)&&nv(o)){if(!Uu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function nv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function kD(t,e){const n=new AD(t,e);return n.subscribe.bind(n)}class AD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");RD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=id),s.error===void 0&&(s.error=id),s.complete===void 0&&(s.complete=id);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}function DD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,V(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zh=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ys="[DEFAULT]";/**
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
 */class PD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ol;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ND(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:MD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MD(t){return t===Ys?void 0:t}function ND(t){return t.instantiationMode==="EAGER"}/**
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
 */class LD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const FD={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},UD=Re.INFO,VD={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},BD=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=VD[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=UD,this._logHandler=BD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const $D=(t,e)=>e.some(n=>t instanceof n);let iv,sv;function zD(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jD(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kE=new WeakMap,hp=new WeakMap,AE=new WeakMap,sd=new WeakMap,om=new WeakMap;function HD(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gs(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kE.set(n,t)}).catch(()=>{}),om.set(e,t),e}function WD(t){if(hp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hp.set(t,e)}let fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qD(t){fp=t(fp)}function KD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(rd(this),e,...n);return AE.set(i,e.sort?e.sort():[e]),gs(i)}:jD().includes(t)?function(...e){return t.apply(rd(this),e),gs(kE.get(this))}:function(...e){return gs(t.apply(rd(this),e))}}function GD(t){return typeof t=="function"?KD(t):(t instanceof IDBTransaction&&WD(t),$D(t,zD())?new Proxy(t,fp):t)}function gs(t){if(t instanceof IDBRequest)return HD(t);if(sd.has(t))return sd.get(t);const e=GD(t);return e!==t&&(sd.set(t,e),om.set(e,t)),e}const rd=t=>om.get(t);function YD(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=gs(o);return i&&o.addEventListener("upgradeneeded",l=>{i(gs(o.result),l.oldVersion,l.newVersion,gs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const QD=["get","getKey","getAll","getAllKeys","count"],XD=["put","add","delete","clear"],od=new Map;function rv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=XD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||QD.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return od.set(e,r),r}qD(t=>({...t,get:(e,n,i)=>rv(e,n)||t.get(e,n,i),has:(e,n)=>!!rv(e,n)||t.has(e,n)}));/**
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
 */class JD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ZD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dp="@firebase/app",ov="0.9.8";/**
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
 */const yr=new Ul("@firebase/app"),eO="@firebase/app-compat",tO="@firebase/analytics-compat",nO="@firebase/analytics",iO="@firebase/app-check-compat",sO="@firebase/app-check",rO="@firebase/auth",oO="@firebase/auth-compat",aO="@firebase/database",lO="@firebase/database-compat",cO="@firebase/functions",uO="@firebase/functions-compat",hO="@firebase/installations",fO="@firebase/installations-compat",dO="@firebase/messaging",pO="@firebase/messaging-compat",gO="@firebase/performance",mO="@firebase/performance-compat",_O="@firebase/remote-config",yO="@firebase/remote-config-compat",vO="@firebase/storage",bO="@firebase/storage-compat",wO="@firebase/firestore",EO="@firebase/firestore-compat",TO="firebase",IO="9.20.0";/**
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
 */const pp="[DEFAULT]",xO={[dp]:"fire-core",[eO]:"fire-core-compat",[nO]:"fire-analytics",[tO]:"fire-analytics-compat",[sO]:"fire-app-check",[iO]:"fire-app-check-compat",[rO]:"fire-auth",[oO]:"fire-auth-compat",[aO]:"fire-rtdb",[lO]:"fire-rtdb-compat",[cO]:"fire-fn",[uO]:"fire-fn-compat",[hO]:"fire-iid",[fO]:"fire-iid-compat",[dO]:"fire-fcm",[pO]:"fire-fcm-compat",[gO]:"fire-perf",[mO]:"fire-perf-compat",[_O]:"fire-rc",[yO]:"fire-rc-compat",[vO]:"fire-gcs",[bO]:"fire-gcs-compat",[wO]:"fire-fst",[EO]:"fire-fst-compat","fire-js":"fire-js",[TO]:"fire-js-all"};/**
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
 */const Vu=new Map,gp=new Map;function SO(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(gp.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,t);for(const n of Vu.values())SO(n,t);return!0}function am(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new Ho("app","Firebase",CO);/**
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
 */class kO{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=IO;function RE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ms.create("bad-app-name",{appName:String(s)});if(n||(n=_D()),!n)throw ms.create("no-options");const r=Vu.get(s);if(r){if(Uu(n,r.options)&&Uu(i,r.config))return r;throw ms.create("duplicate-app",{appName:s})}const o=new LD(s);for(const l of gp.values())o.addComponent(l);const a=new kO(n,i,o);return Vu.set(s,a),a}function lm(t=pp){const e=Vu.get(t);if(!e&&t===pp)return RE();if(!e)throw ms.create("no-app",{appName:t});return e}function En(t,e,n){var i;let s=(i=xO[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}pi(new Kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const AO="firebase-heartbeat-database",RO=1,ll="firebase-heartbeat-store";let ad=null;function DE(){return ad||(ad=YD(AO,RO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ll)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),ad}async function DO(t){try{return(await DE()).transaction(ll).objectStore(ll).get(OE(t))}catch(e){if(e instanceof vi)yr.warn(e.message);else{const n=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function av(t,e){try{const i=(await DE()).transaction(ll,"readwrite");return await i.objectStore(ll).put(e,OE(t)),i.done}catch(n){if(n instanceof vi)yr.warn(n.message);else{const i=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(i.message)}}}function OE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OO=1024,PO=30*24*60*60*1e3;class MO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=PO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lv(),{heartbeatsToSend:n,unsentEntries:i}=NO(this._heartbeatsCache.heartbeats),s=Nu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lv(){return new Date().toISOString().substring(0,10)}function NO(t,e=OO){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),cv(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class LO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SE()?wD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cv(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FO(t){pi(new Kn("platform-logger",e=>new JD(e),"PRIVATE")),pi(new Kn("heartbeat",e=>new MO(e),"PRIVATE")),En(dp,ov,t),En(dp,ov,"esm2017"),En("fire-js","")}FO("");function cm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function PE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UO=PE,ME=new Ho("auth","Firebase",PE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Ul("@firebase/auth");function VO(t,...e){Bu.logLevel<=Re.WARN&&Bu.warn(`Auth (${Ns}): ${t}`,...e)}function pu(t,...e){Bu.logLevel<=Re.ERROR&&Bu.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,...e){throw um(t,...e)}function ci(t,...e){return um(t,...e)}function NE(t,e,n){const i=Object.assign(Object.assign({},UO()),{[e]:n});return new Ho("auth","Firebase",i).create(e,{appName:t.name})}function BO(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&gi(t,"argument-error"),NE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function um(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ME.create(t,...e)}function ae(t,e,...n){if(!t)throw um(e,...n)}function Ai(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pu(e),new Error(e)}function Vi(t,e){t||Ai(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $O(){return uv()==="http:"||uv()==="https:"}function uv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($O()||vD()||"connection"in navigator)?navigator.onLine:!0}function jO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vi(n>e,"Short delay should be less than long delay!"),this.isMobile=rm()||IE()}get(){return zO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e){Vi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=new Vl(3e4,6e4);function FE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bl(t,e,n,i,s={}){return UE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LE.fetch()(VE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function UE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},HO),e);try{const s=new KO(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xc(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw NE(t,u,c);gi(t,u)}}catch(s){if(s instanceof vi)throw s;gi(t,"network-request-failed",{message:String(s)})}}async function qO(t,e,n,i,s={}){const r=await Bl(t,e,n,i,s);return"mfaPendingCredential"in r&&gi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function VE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?hm(t.config,s):`${t.config.apiScheme}://${s}`}class KO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ci(this.auth,"network-request-failed")),WO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ci(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){return Bl(t,"POST","/v1/accounts:delete",e)}async function YO(t,e){return Bl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QO(t,e=!1){const n=Nt(t),i=await n.getIdToken(e),s=fm(i);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Pa(ld(s.auth_time)),issuedAtTime:Pa(ld(s.iat)),expirationTime:Pa(ld(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ld(t){return Number(t)*1e3}function fm(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lu(n);return s?JSON.parse(s):(pu("Failed to decode base64 JWT payload"),null)}catch(s){return pu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function XO(t){const e=fm(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof vi&&JO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function JO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(t){var e;const n=t.auth,i=await t.getIdToken(),s=await cl(t,YO(n,{idToken:i}));ae(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?n2(r.providerUserInfo):[],a=t2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new BE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function e2(t){const e=Nt(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function n2(t){return t.map(e=>{var{providerId:n}=e,i=cm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){const n=await UE(t,{},async()=>{const i=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=VE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await i2(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ul;return i&&(ae(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ae(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ul,this.toJSON())}_performRefresh(){return Ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new BE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await cl(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QO(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cl(this,GO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:T,isAnonymous:E,providerData:A,stsTokenManager:C}=n;ae(b&&C,e,"internal-error");const S=ul.fromJSON(this.name,C);ae(typeof b=="string",e,"internal-error"),Xi(h,e.name),Xi(f,e.name),ae(typeof T=="boolean",e,"internal-error"),ae(typeof E=="boolean",e,"internal-error"),Xi(d,e.name),Xi(p,e.name),Xi(g,e.name),Xi(m,e.name),Xi(_,e.name),Xi(v,e.name);const B=new fr({uid:b,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:E,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:S,createdAt:_,lastLoginAt:v});return A&&Array.isArray(A)&&(B.providerData=A.map(X=>Object.assign({},X))),m&&(B._redirectEventId=m),B}static async _fromIdTokenResponse(e,n,i=!1){const s=new ul;s.updateFromServerResponse(n);const r=new fr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await $u(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;function Ri(t){Vi(t instanceof Function,"Expected a class definition");let e=hv.get(t);return e?(Vi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hv.set(t,e),e)}/**
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
 */class $E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$E.type="NONE";const fv=$E;/**
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
 */function gu(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=gu(this.userKey,s.apiKey,r),this.fullPersistenceKey=gu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ro(Ri(fv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ri(fv);const o=gu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ro(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ro(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qE(e))return"Blackberry";if(KE(e))return"Webos";if(dm(e))return"Safari";if((e.includes("chrome/")||jE(e))&&!e.includes("edge/"))return"Chrome";if(WE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function zE(t=Xt()){return/firefox\//i.test(t)}function dm(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jE(t=Xt()){return/crios\//i.test(t)}function HE(t=Xt()){return/iemobile/i.test(t)}function WE(t=Xt()){return/android/i.test(t)}function qE(t=Xt()){return/blackberry/i.test(t)}function KE(t=Xt()){return/webos/i.test(t)}function ef(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function s2(t=Xt()){var e;return ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function r2(){return bD()&&document.documentMode===10}function GE(t=Xt()){return ef(t)||WE(t)||KE(t)||qE(t)||/windows phone/i.test(t)||HE(t)}function o2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t,e=[]){let n;switch(t){case"Browser":n=dv(Xt());break;case"Worker":n=`${dv(Xt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${i}`}async function QE(t,e){return Bl(t,"GET","/v2/recaptchaConfig",FE(t,e))}function pv(t){return t!==void 0&&t.enterprise!==void 0}class XE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function JE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=ci("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",a2().appendChild(i)})}function l2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const c2="https://www.google.com/recaptcha/enterprise.js?render=",u2="recaptcha-enterprise";class h2{constructor(e){this.type=u2,this.auth=$l(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{QE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new XE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;pv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&pv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}JE(c2+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class f2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new f2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ME,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}async initializeRecaptchaConfig(){const e=await QE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new XE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new h2(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ri(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $l(t){return Nt(t)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=kD(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t,e){const n=am(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Uu(r,e??{}))return s;gi(s,"already-initialized")}return n.initialize({options:e})}function g2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function m2(t,e,n){const i=$l(t);ae(i._canInitEmulator,i,"emulator-config-failed"),ae(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=ZE(e),{host:o,port:a}=_2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||y2()}function ZE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _2(t){const e=ZE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:mv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:mv(o)}}}function mv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function y2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ai("not implemented")}_getIdTokenResponse(e){return Ai("not implemented")}_linkToIdToken(e,n){return Ai("not implemented")}_getReauthenticationResolver(e){return Ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return qO(t,"POST","/v1/accounts:signInWithIdp",FE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="http://localhost";class vr extends eT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=cm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new vr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:v2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zl extends pm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends zl{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends zl{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends zl{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return as.credential(n,i)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await fr._fromIdTokenResponse(e,i,s),o=_v(i);return new wo({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=_v(i);return new wo({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function _v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends vi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new zu(e,n,i,s)}}function tT(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(t,r,e,i):r})}async function b2(t,e,n=!1){const i=await cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wo._forOperation(t,"link",i)}/**
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
 */async function w2(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await cl(t,tT(i,s,e,t),n);ae(r.idToken,i,"internal-error");const o=fm(r.idToken);ae(o,i,"internal-error");const{sub:a}=o;return ae(t.uid===a,i,"user-mismatch"),wo._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t,e,n=!1){const i="signIn",s=await tT(t,i,e),r=await wo._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function T2(t,e,n,i){return Nt(t).onIdTokenChanged(e,n,i)}function I2(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}const ju="__sak";/**
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
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(){const t=Xt();return dm(t)||ef(t)}const S2=1e3,C2=10;class iT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=x2()&&o2(),this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);r2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,C2):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},S2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iT.type="LOCAL";const k2=iT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT extends nT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sT.type="SESSION";const rT=sT;/**
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
 */function A2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new tf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await A2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class R2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=gm("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function D2(t){ui().location.href=t}/**
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
 */function oT(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function O2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M2(){return oT()?self:null}/**
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
 */const aT="firebaseLocalStorageDb",N2=1,Hu="firebaseLocalStorage",lT="fbase_key";class jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nf(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function L2(){const t=indexedDB.deleteDatabase(aT);return new jl(t).toPromise()}function _p(){const t=indexedDB.open(aT,N2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Hu,{keyPath:lT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Hu)?e(i):(i.close(),await L2(),e(await _p()))})})}async function yv(t,e,n){const i=nf(t,!0).put({[lT]:e,value:n});return new jl(i).toPromise()}async function F2(t,e){const n=nf(t,!1).get(e),i=await new jl(n).toPromise();return i===void 0?null:i.value}function vv(t,e){const n=nf(t,!0).delete(e);return new jl(n).toPromise()}const U2=800,V2=3;class cT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>V2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tf._getInstance(M2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O2(),!this.activeServiceWorker)return;this.sender=new R2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _p();return await yv(e,ju,"1"),await vv(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>F2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=nf(s,!1).getAll();return new jl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cT.type="LOCAL";const B2=cT;new Vl(3e4,6e4);/**
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
 */function uT(t,e){return e?Ri(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mm extends eT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $2(t){return E2(t.auth,new mm(t),t.bypassAuthState)}function z2(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),w2(n,new mm(t),t.bypassAuthState)}async function j2(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),b2(n,new mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $2;case"linkViaPopup":case"linkViaRedirect":return j2;case"reauthViaPopup":case"reauthViaRedirect":return z2;default:gi(this.auth,"internal-error")}}resolve(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new Vl(2e3,1e4);async function W2(t,e,n){const i=$l(t);BO(t,e,pm);const s=uT(i,n);return new nr(i,"signInViaPopup",e,s).executeNotNull()}class nr extends hT{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Vi(this.filter.length===1,"Popup operations only handle one event");const e=gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,H2.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="pendingRedirect",mu=new Map;class K2 extends hT{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const i=await G2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G2(t,e){const n=X2(e),i=Q2(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Y2(t,e){mu.set(t._key(),e)}function Q2(t){return Ri(t._redirectPersistence)}function X2(t){return gu(q2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){const i=$l(t),s=uT(i,e),o=await new K2(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=10*60*1e3;class eP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!fT(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ci(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z2&&this.cachedEventUids.clear(),this.cachedEventUids.has(bv(e))}saveEventToCache(e){this.cachedEventUids.add(bv(e)),this.lastProcessedEventTime=Date.now()}}function bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e={}){return Bl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sP=/^https?/;async function rP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nP(t);for(const n of e)try{if(oP(n))return}catch{}gi(t,"unauthorized-domain")}function oP(t){const e=mp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!sP.test(n))return!1;if(iP.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aP=new Vl(3e4,6e4);function wv(){const t=ui().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lP(t){return new Promise((e,n)=>{var i,s,r;function o(){wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wv(),n(ci(t,"network-request-failed"))},timeout:aP.get()})}if(!((s=(i=ui().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ui().gapi)===null||r===void 0)&&r.load)o();else{const a=l2("iframefcb");return ui()[a]=()=>{gapi.load?o():n(ci(t,"network-request-failed"))},JE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _u=null,e})}let _u=null;function cP(t){return _u=_u||lP(t),_u}/**
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
 */const uP=new Vl(5e3,15e3),hP="__/auth/iframe",fP="emulator/auth/iframe",dP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gP(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hm(e,fP):`https://${t.config.authDomain}/${hP}`,i={apiKey:e.apiKey,appName:t.name,v:Ns},s=pP.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Wo(i).slice(1)}`}async function mP(t){const e=await cP(t),n=ui().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:gP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dP,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ci(t,"network-request-failed"),a=ui().setTimeout(()=>{r(o)},uP.get());function l(){ui().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const _P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yP=500,vP=600,bP="_blank",wP="http://localhost";class Ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EP(t,e,n,i=yP,s=vP){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_P),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Xt().toLowerCase();n&&(a=jE(c)?bP:n),zE(c)&&(e=e||wP,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(s2(c)&&a!=="_self")return TP(e||"",a),new Ev(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new Ev(h)}function TP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const IP="__/auth/handler",xP="emulator/auth/handler",SP=encodeURIComponent("fac");async function Tv(t,e,n,i,s,r){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ns,eventId:s};if(e instanceof pm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",up(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof zl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${SP}=${encodeURIComponent(l)}`:"";return`${CP(t)}?${Wo(a).slice(1)}${c}`}function CP({config:t}){return t.emulator?hm(t,xP):`https://${t.authDomain}/${IP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="webStorageSupport";class kP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rT,this._completeRedirectFn=J2,this._overrideRedirectResult=Y2}async _openPopup(e,n,i,s){var r;Vi((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Tv(e,n,i,mp(),s);return EP(e,o,gm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Tv(e,n,i,mp(),s);return D2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Vi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await mP(e),i=new eP(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cd,{type:cd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[cd];o!==void 0&&n(!!o),gi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||dm()||ef()}}const AP=kP;var Iv="@firebase/auth",xv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OP(t){pi(new Kn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ae(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YE(t)},c=new d2(i,s,r,l);return g2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),pi(new Kn("auth-internal",e=>{const n=$l(e.getProvider("auth").getImmediate());return(i=>new RP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Iv,xv,DP(t)),En(Iv,xv,"esm2017")}/**
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
 */const PP=5*60,MP=TE("authIdTokenMaxAge")||PP;let Sv=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>MP)return;const s=n==null?void 0:n.token;Sv!==s&&(Sv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LP(t=lm()){const e=am(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p2(t,{popupRedirectResolver:AP,persistence:[B2,k2,rT]}),i=TE("authTokenSyncURL");if(i){const r=NP(i);I2(n,r,()=>r(n.currentUser)),T2(n,o=>r(o))}const s=EE("auth");return s&&m2(n,`http://${s}`),n}OP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=new Map,UP={activated:!1,tokenObservers:[]};function mi(t){return FP.get(t)||Object.assign({},UP)}const Cv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ol,await BP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ol,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Wu=new Ho("appCheck","AppCheck",$P);function zP(t){if(!mi(t).activated)throw Wu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="firebase-app-check-database",HP=1,yp="firebase-app-check-store";let Sc=null;function WP(){return Sc||(Sc=new Promise((t,e)=>{try{const n=indexedDB.open(jP,HP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Wu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(yp,{keyPath:"compositeKey"})}}}catch(n){e(Wu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Sc)}function qP(t,e){return KP(GP(t),e)}async function KP(t,e){const i=(await WP()).transaction(yp,"readwrite"),r=i.objectStore(yp).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Wu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function GP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new Ul("@firebase/app-check");function kv(t,e){return SE()?qP(t,e).catch(n=>{vp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={error:"UNKNOWN_ERROR"};function QP(t){return Jh.encodeString(JSON.stringify(t),!1)}async function bp(t,e=!1){const n=t.app;zP(n);const i=mi(n);let s=i.token,r;if(s&&!va(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(va(l)?s=l:await kv(n,void 0))}if(!e&&s&&va(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await mi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?vp.warn(l.message):vp.error(l),r=l}let a;return s?r?va(s)?a={token:s.token,internalError:r}:a=Rv(r):(a={token:s.token},i.token=s,await kv(n,s)):a=Rv(r),o&&ZP(n,a),a}function XP(t,e,n,i){const{app:s}=t,r=mi(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&va(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Av(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Av(t))}function dT(t,e){const n=mi(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Av(t){const{app:e}=t,n=mi(e);let i=n.tokenRefresher;i||(i=JP(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function JP(t){const{app:e}=t;return new VP(async()=>{const n=mi(e);let i;if(n.token?i=await bp(t,!0):i=await bp(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=mi(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Cv.RETRIAL_MIN_WAIT,Cv.RETRIAL_MAX_WAIT)}function ZP(t,e){const n=mi(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function va(t){return t.expireTimeMillis-Date.now()>0}function Rv(t){return{token:QP(YP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=mi(this.app);for(const n of e)dT(this.app,n.next);return Promise.resolve()}}function tM(t,e){return new eM(t,e)}function nM(t){return{getToken:e=>bp(t,e),addTokenListener:e=>XP(t,"INTERNAL",e),removeTokenListener:e=>dT(t.app,e)}}const iM="@firebase/app-check",sM="0.6.5",rM="app-check",Dv="app-check-internal";function oM(){pi(new Kn(rM,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return tM(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Dv).initialize()})),pi(new Kn(Dv,t=>{const e=t.getProvider("app-check").getImmediate();return nM(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),En(iM,sM)}oM();var aM="firebase",lM="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(aM,lM,"app");const pT=Symbol("firebaseApp");function _m(t){return Fl()&&dn(pT,null)||lm(t)}const oi=()=>{};function ym(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function cM(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Pr(t){return!!t&&typeof t=="object"}const uM=Object.prototype;function hM(t){return Pr(t)&&Object.getPrototypeOf(t)===uM}function vm(t){return Pr(t)&&t.type==="document"}function gT(t){return Pr(t)&&t.type==="collection"}function fM(t){return vm(t)||gT(t)}function dM(t){return Pr(t)&&t.type==="query"}function pM(t){return Pr(t)&&"ref"in t}function gM(t){return Pr(t)&&typeof t.bucket=="string"}function mM(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function _M(){return!!(Fl()&&dn(cE,null))}const Ov="@firebase/database",Pv="0.14.4";/**
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
 */let mT="";function yM(t){mT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:al(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vM(e)}}catch{}return new bM},ir=_T("localStorage"),wp=_T("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Ul("@firebase/database"),wM=function(){let t=1;return function(){return t++}}(),yT=function(t){const e=OD(t),n=new CD;n.update(e);const i=n.digest();return Jh.encodeByteArray(i)},Hl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hl.apply(null,i):typeof i=="object"?e+=Ot(i):e+=i,e+=" "}return e};let dr=null,Mv=!0;const EM=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ao.logLevel=Re.VERBOSE,dr=ao.log.bind(ao),e&&wp.set("logging_enabled",!0)):typeof t=="function"?dr=t:(dr=null,wp.remove("logging_enabled"))},zt=function(...t){if(Mv===!0&&(Mv=!1,dr===null&&wp.get("logging_enabled")===!0&&EM(!0)),dr){const e=Hl.apply(null,t);dr(e)}},Wl=function(t){return function(...e){zt(t,...e)}},Ep=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hl(...t);ao.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${Hl(...t)}`;throw ao.error(e),new Error(e)},Tn=function(...t){const e="FIREBASE WARNING: "+Hl(...t);ao.warn(e)},TM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Eo="[MIN_NAME]",wr="[MAX_NAME]",qo=function(t,e){if(t===e)return 0;if(t===Eo||e===wr)return-1;if(e===Eo||t===wr)return 1;{const n=Nv(t),i=Nv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},xM=function(t,e){return t===e?0:t<e?-1:1},oa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ot(e))},bm=function(t){if(typeof t!="object"||t===null)return Ot(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ot(e[i]),n+=":",n+=bm(t[e[i]]);return n+="}",n},bT=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Pn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wT=function(t){V(!vT(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},SM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kM=new RegExp("^-?(0*)\\d{1,10}$"),AM=-2147483648,RM=2147483647,Nv=function(t){if(kM.test(t)){const e=Number(t);if(e>=AM&&e<=RM)return e}return null},ql=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},DM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ma=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class OM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tn(e)}}class Tp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="5",ET="v",TT="s",IT="r",xT="f",ST=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,CT="ls",kT="p",Ip="ac",AT="websocket",RT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DT(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let i;if(e===AT)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===RT)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NM(t)&&(n.ns=t.namespace);const s=[];return Pn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.counters_={}}incrementCounter(e,n=1){Gi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={},hd={};function Em(t){const e=t.toString();return ud[e]||(ud[e]=new LM),ud[e]}function FM(t,e){const n=t.toString();return hd[n]||(hd[n]=e()),hd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ql(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="start",VM="close",BM="pLPCommand",$M="pRTLPCB",OT="id",PT="pw",MT="ser",zM="cb",jM="seg",HM="ts",WM="d",qM="dframe",NT=1870,LT=30,KM=NT-LT,GM=25e3,YM=3e4;class Xr{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wl(e),this.stats_=Em(n),this.urlFn=l=>(this.appCheckToken&&(l[Ip]=this.appCheckToken),DT(n,RT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YM)),IM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lv)this.id=a,this.password=l;else if(o===VM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Lv]="t",i[MT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[zM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ET]=wm,this.transportSessionId&&(i[TT]=this.transportSessionId),this.lastSessionId&&(i[CT]=this.lastSessionId),this.applicationId&&(i[kT]=this.applicationId),this.appCheckToken&&(i[Ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&ST.test(location.hostname)&&(i[IT]=xT);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xr.forceAllow_=!0}static forceDisallow(){Xr.forceDisallow_=!0}static isAvailable(){return Xr.forceAllow_?!0:!Xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SM()&&!CM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=bE(n),s=bT(i,KM);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[qM]="t",i[OT]=e,i[PT]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wM(),window[BM+this.uniqueCallbackIdentifier]=e,window[$M+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){zt("frame writing exception"),a.stack&&zt(a.stack),zt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||zt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OT]=this.myID,e[PT]=this.myPW,e[MT]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+LT+i.length<=NT;){const o=this.pendingSegs.shift();i=i+"&"+jM+s+"="+o.seg+"&"+HM+s+"="+o.ts+"&"+WM+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(GM)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=16384,XM=45e3;let qu=null;typeof MozWebSocket<"u"?qu=MozWebSocket:typeof WebSocket<"u"&&(qu=WebSocket);class Un{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wl(this.connId),this.stats_=Em(n),this.connURL=Un.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[ET]=wm,typeof location<"u"&&location.hostname&&ST.test(location.hostname)&&(o[IT]=xT),n&&(o[TT]=n),i&&(o[CT]=i),s&&(o[Ip]=s),r&&(o[kT]=r),DT(e,AT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ir.set("previous_websocket_failure",!0);try{let i;xE(),this.mySock=new qu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&qu!==null&&!Un.forceDisallow_}static previouslyFailed(){return ir.isInMemoryStorage||ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=al(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=bT(n,QM);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Un.responsesRequiredToBeHealthy=2;Un.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xr,Un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Un&&Un.isAvailable();let i=n&&!Un.previouslyFailed();if(e.webSocketOnly&&(n||Tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Un];else{const s=this.transports_=[];for(const r of hl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);hl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=6e4,ZM=5e3,eN=10*1024,tN=100*1024,fd="t",Fv="d",nN="s",Uv="r",iN="e",Vv="o",Bv="a",$v="n",zv="p",sN="h";class rN{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wl("c:"+this.id+":"),this.transportManager_=new hl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fd in e){const n=e[fd];n===Bv?this.upgradeIfSecondaryHealthy_():n===Uv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oa("t",e),i=oa("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$v,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oa("t",e),i=oa("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oa(fd,e);if(Fv in e){const i=e[Fv];if(n===sN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===$v){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nN?this.onConnectionShutdown_(i):n===Uv?this.onReset_(i):n===iN?Ep("Server Error: "+i):n===Vv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ep("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wm!==i&&Tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends UT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ku}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=32,Hv=768;class Ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Be(){return new Ze("")}function xe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xs(t){return t.pieces_.length-t.pieceNum_}function Ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ze(t.pieces_,e)}function VT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function BT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $T(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ze(e,0)}function kt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Ze(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function kn(t,e){const n=xe(t),i=xe(e);if(n===null)return e;if(n===i)return kn(Ke(t),Ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zT(t,e){if(xs(t)!==xs(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function $n(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(xs(t)>xs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class aN{constructor(e,n){this.errorPrefix_=n,this.parts_=BT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Zh(this.parts_[i]);jT(this)}}function lN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zh(e),jT(t)}function cN(t){const e=t.parts_.pop();t.byteLength_-=Zh(e),t.parts_.length>0&&(t.byteLength_-=1)}function jT(t){if(t.byteLength_>Hv)throw new Error(t.errorPrefix_+"has a key path longer than "+Hv+" bytes ("+t.byteLength_+").");if(t.parts_.length>jv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jv+") or object contains a cycle "+Qs(t))}function Qs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends UT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Im}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=1e3,uN=60*5*1e3,Wv=30*1e3,hN=1.3,fN=3e4,dN="server_kill",qv=3;class Li extends FT{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Li.nextPersistentConnectionId_++,this.log_=Wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=aa,this.maxReconnectDelay_=uN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!xE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ku.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ot(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ol,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Li.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gi(e,"w")){const i=bo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xD(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ot(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ep("Unrecognized action received from server: "+Ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fN&&(this.reconnectDelay_=aa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Li.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?zt("getToken() completed but was canceled"):(zt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new rN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Tn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(dN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Tn(h),l())}}}interrupt(e){zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],up(this.interruptReasons_)&&(this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>bm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Ze(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){zt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qv&&(this.reconnectDelay_=Wv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){zt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mT.replace(/\./g,"-")]=1,rm()?e["framework.cordova"]=1:IE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ku.getInstance().currentlyOnline();return up(this.interruptReasons_)&&e}}Li.nextPersistentConnectionId_=0;Li.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Se(Eo,e),s=new Se(Eo,n);return this.compare(i,s)!==0}minPost(){return Se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;class HT extends sf{static get __EMPTY_NODE(){return Cc}static set __EMPTY_NODE(e){Cc=e}compare(e,n){return qo(e.name,n.name)}isDefinedOn(e){throw jo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Se.MIN}maxPost(){return new Se(wr,Cc)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Cc)}toString(){return".key"}}const lo=new HT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ct{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ct.RED,this.left=s??hn.EMPTY_NODE,this.right=r??hn.EMPTY_NODE}copy(e,n,i,s,r){return new Ct(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return hn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ct.RED=!0;Ct.BLACK=!1;class pN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class hn{constructor(e,n=hn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new hn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kc(this.root_,null,this.comparator_,!0,e)}}hn.EMPTY_NODE=new pN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t,e){return qo(t.name,e.name)}function xm(t,e){return qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp;function mN(t){xp=t}const WT=function(t){return typeof t=="number"?"number:"+wT(t):"string:"+t},qT=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gi(e,".sv"),"Priority must be a string or number.")}else V(t===xp||t.isEmpty(),"priority of unexpected type.");V(t===xp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kv;class xt{constructor(e,n=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qT(this.priorityNode_)}static set __childrenNodeConstructor(e){Kv=e}static get __childrenNodeConstructor(){return Kv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:xe(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=xe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+WT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wT(this.value_):e+=this.value_,this.lazyHash_=yT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=xt.VALUE_TYPE_ORDER.indexOf(n),r=xt.VALUE_TYPE_ORDER.indexOf(i);return V(s>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KT,GT;function _N(t){KT=t}function yN(t){GT=t}class vN extends sf{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?qo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(wr,new xt("[PRIORITY-POST]",GT))}makePost(e,n){const i=KT(e);return new Se(n,new xt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Kt=new vN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=Math.log(2);class wN{constructor(e){const n=r=>parseInt(Math.log(r)/bN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gu=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ct(f,h.node,Ct.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),g=s(d+1,c);return h=t[d],f=n?n(h):h,new Ct(f,h.node,Ct.BLACK,p,g)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,g){const m=h-p,_=h;h-=p;const v=s(m+1,_),b=t[m],T=n?n(b):b;d(new Ct(T,b.node,g,null,v))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?f(m,Ct.BLACK):(f(m,Ct.BLACK),f(m,Ct.RED))}return u},o=new wN(t.length),a=r(o);return new hn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;const Hr={};class Di{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(Hr&&Kt,"ChildrenNode.ts has not been loaded"),dd=dd||new Di({".priority":Hr},{".priority":Kt}),dd}get(e){const n=bo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return Gi(this.indexSet_,e.toString())}addIndex(e,n){V(e!==lo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Gu(i,e.getCompare()):a=Hr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Di(u,c)}addToIndexes(e,n){const i=Fu(this.indexes_,(s,r)=>{const o=bo(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),s===Hr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Gu(a,o.getCompare())}else return Hr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Se(e.name,a))),l.insert(e,e.node)}});return new Di(i,this.indexSet_)}removeFromIndexes(e,n){const i=Fu(this.indexes_,s=>{if(s===Hr)return s;{const r=n.get(e.name);return r?s.remove(new Se(e.name,r)):s}});return new Di(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class Ne{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&qT(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return la||(la=new Ne(new hn(xm),null,Di.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||la}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?la:n}}getChild(e){const n=xe(e);return n===null?this:this.getImmediateChild(n).getChild(Ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Se(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?la:this.priorityNode_;return new Ne(s,o,r)}}updateChild(e,n){const i=xe(e);if(i===null)return n;{V(xe(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ke(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Kt,(o,a)=>{n[o]=a.val(e),i++,r&&Ne.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+WT(this.getPriority().val())+":"),this.forEachChild(Kt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":yT(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Se(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Se(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kl?-1:0}withIndex(e){if(e===lo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===lo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Kt),s=n.getIterator(Kt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lo?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EN extends Ne{constructor(){super(new hn(xm),Ne.EMPTY_NODE,Di.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Kl=new EN;Object.defineProperties(Se,{MIN:{value:new Se(Eo,Ne.EMPTY_NODE)},MAX:{value:new Se(wr,Kl)}});HT.__EMPTY_NODE=Ne.EMPTY_NODE;xt.__childrenNodeConstructor=Ne;mN(Kl);yN(Kl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=!0;function jt(t,e=null){if(t===null)return Ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xt(n,jt(e))}if(!(t instanceof Array)&&TN){const n=[];let i=!1;if(Pn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=jt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Se(o,l)))}}),n.length===0)return Ne.EMPTY_NODE;const r=Gu(n,gN,o=>o.name,xm);if(i){const o=Gu(n,Kt.getCompare());return new Ne(r,jt(e),new Di({".priority":o},{".priority":Kt}))}else return new Ne(r,jt(e),Di.Default)}else{let n=Ne.EMPTY_NODE;return Pn(t,(i,s)=>{if(Gi(t,i)&&i.substring(0,1)!=="."){const r=jt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(jt(e))}}_N(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN extends sf{constructor(e){super(),this.indexPath_=e,V(!we(e)&&xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?qo(e.name,n.name):r}makePost(e,n){const i=jt(e),s=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Se(n,s)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,Kl);return new Se(wr,e)}toString(){return BT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN extends sf{compare(e,n){const i=e.node.compareTo(n.node);return i===0?qo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,n){const i=jt(e);return new Se(n,i)}toString(){return".value"}}const SN=new xN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){return{type:"value",snapshotNode:t}}function kN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function AN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Eo}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kt}copy(){const e=new Sm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Kt?n="$priority":t.index_===SN?n="$value":t.index_===lo?n="$key":(V(t.index_ instanceof IN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ot(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ot(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ot(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ot(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Kt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends FT{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yu.getListenId_(e,i),a={};this.listens_[o]=a;const l=Yv(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),bo(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=Yu.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Yv(e._queryParams),i=e._path.toString(),s=new ol;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=al(a.responseText)}catch{Tn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Tn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return{value:null,children:new Map}}function YT(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=xe(e);t.children.has(i)||t.children.set(i,Qu());const s=t.children.get(i);e=Ke(e),YT(s,e,n)}}function Sp(t,e,n){t.value!==null?n(e,t.value):ON(t,(i,s)=>{const r=new Ze(e.toString()+"/"+i);Sp(s,r,n)})}function ON(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=10*1e3,MN=30*1e3,NN=5*60*1e3;class LN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PN(e);const i=Xv+(MN-Xv)*Math.random();Ma(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Pn(e,(s,r)=>{r>0&&Gi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*NN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ai||(ai={}));function QT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function XT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function JT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ai.ACK_USER_WRITE,this.source=QT()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ze(e));return new Xu(Be(),n,this.revert)}}else return V(xe(this.path)===e,"operationForChild called for unrelated child."),new Xu(Ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ai.OVERWRITE}operationForChild(e){return we(this.path)?new Er(this.source,Be(),this.snap.getImmediateChild(e)):new Er(this.source,Ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ai.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Ze(e));return n.isEmpty()?null:n.value?new Er(this.source,Be(),n.value):new fl(this.source,Be(),n)}else return V(xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fl(this.source,Ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=xe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function FN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(RN(o.childName,o.snapshotNode))}),ca(t,s,"child_removed",e,i,n),ca(t,s,"child_added",e,i,n),ca(t,s,"child_moved",r,i,n),ca(t,s,"child_changed",e,i,n),ca(t,s,"value",e,i,n),s}function ca(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>VN(t,a,l)),o.forEach(a=>{const l=UN(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function UN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VN(t,e,n){if(e.childName==null||n.childName==null)throw jo("Should only compare child_ events.");const i=new Se(e.childName,e.snapshotNode),s=new Se(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){return{eventCache:t,serverCache:e}}function Na(t,e,n,i){return ZT(new Cm(e,n,i),t.serverCache)}function eI(t,e,n,i){return ZT(t.eventCache,new Cm(e,n,i))}function Cp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;const BN=()=>(pd||(pd=new hn(xM)),pd);class We{constructor(e,n=BN()){this.value=e,this.children=n}static fromObject(e){let n=new We(null);return Pn(e,(i,s)=>{n=n.set(new Ze(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Be(),value:this.value};if(we(e))return null;{const i=xe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ke(e),n);return r!=null?{path:kt(new Ze(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=xe(e),i=this.children.get(n);return i!==null?i.subtree(Ke(e)):new We(null)}}set(e,n){if(we(e))return new We(n,this.children);{const i=xe(e),r=(this.children.get(i)||new We(null)).set(Ke(e),n),o=this.children.insert(i,r);return new We(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=xe(e),i=this.children.get(n);if(i){const s=i.remove(Ke(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new We(null):new We(this.value,r)}else return this}}get(e){if(we(e))return this.value;{const n=xe(e),i=this.children.get(n);return i?i.get(Ke(e)):null}}setTree(e,n){if(we(e))return n;{const i=xe(e),r=(this.children.get(i)||new We(null)).setTree(Ke(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new We(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(kt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Be(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(we(e))return null;{const r=xe(e),o=this.children.get(r);return o?o.findOnPath_(Ke(e),kt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Be(),n)}foreachOnPath_(e,n,i){if(we(e))return this;{this.value&&i(n,this.value);const s=xe(e),r=this.children.get(s);return r?r.foreachOnPath_(Ke(e),kt(n,s),i):new We(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(kt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new We(null))}}function La(t,e,n){if(we(e))return new qn(new We(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=kn(s,e);return r=r.updateChild(o,n),new qn(t.writeTree_.set(s,r))}else{const s=new We(n),r=t.writeTree_.setTree(e,s);return new qn(r)}}}function Jv(t,e,n){let i=t;return Pn(n,(s,r)=>{i=La(i,kt(e,s),r)}),i}function Zv(t,e){if(we(e))return qn.empty();{const n=t.writeTree_.setTree(e,new We(null));return new qn(n)}}function kp(t,e){return Mr(t,e)!=null}function Mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kn(n.path,e)):null}function eb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Kt,(i,s)=>{e.push(new Se(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Se(i,s.value))}),e}function _s(t,e){if(we(e))return t;{const n=Mr(t,e);return n!=null?new qn(new We(n)):new qn(t.writeTree_.subtree(e))}}function Ap(t){return t.writeTree_.isEmpty()}function To(t,e){return tI(Be(),t.writeTree_,e)}function tI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=tI(kt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(kt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){return aI(e,t)}function $N(t,e,n,i,s){V(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=La(t.visibleWrites,e,n)),t.lastWriteId=i}function zN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function jN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HN(a,i.path)?s=!1:$n(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return WN(t),!0;if(i.snap)t.visibleWrites=Zv(t.visibleWrites,i.path);else{const a=i.children;Pn(a,l=>{t.visibleWrites=Zv(t.visibleWrites,kt(i.path,l))})}return!0}else return!1}function HN(t,e){if(t.snap)return $n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$n(kt(t.path,n),e))return!0;return!1}function WN(t){t.visibleWrites=iI(t.allWrites,qN,Be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qN(t){return t.visible}function iI(t,e,n){let i=qn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)$n(n,o)?(a=kn(n,o),i=La(i,a,r.snap)):$n(o,n)&&(a=kn(o,n),i=La(i,Be(),r.snap.getChild(a)));else if(r.children){if($n(n,o))a=kn(n,o),i=Jv(i,a,r.children);else if($n(o,n))if(a=kn(o,n),we(a))i=Jv(i,Be(),r.children);else{const l=bo(r.children,xe(a));if(l){const c=l.getChild(Ke(a));i=La(i,Be(),c)}}}else throw jo("WriteRecord should have .snap or .children")}}return i}function sI(t,e,n,i,s){if(!i&&!s){const r=Mr(t.visibleWrites,e);if(r!=null)return r;{const o=_s(t.visibleWrites,e);if(Ap(o))return n;if(n==null&&!kp(o,Be()))return null;{const a=n||Ne.EMPTY_NODE;return To(o,a)}}}else{const r=_s(t.visibleWrites,e);if(!s&&Ap(r))return n;if(!s&&n==null&&!kp(r,Be()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&($n(c.path,e)||$n(e,c.path))},a=iI(t.allWrites,o,e),l=n||Ne.EMPTY_NODE;return To(a,l)}}}function KN(t,e,n){let i=Ne.EMPTY_NODE;const s=Mr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Kt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=_s(t.visibleWrites,e);return n.forEachChild(Kt,(o,a)=>{const l=To(_s(r,new Ze(o)),a);i=i.updateImmediateChild(o,l)}),eb(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=_s(t.visibleWrites,e);return eb(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function GN(t,e,n,i,s){V(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=kt(e,n);if(kp(t.visibleWrites,r))return null;{const o=_s(t.visibleWrites,r);return Ap(o)?s.getChild(n):To(o,s.getChild(n))}}function YN(t,e,n,i){const s=kt(e,n),r=Mr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=_s(t.visibleWrites,s);return To(o,i.getNode().getImmediateChild(n))}else return null}function QN(t,e){return Mr(t.visibleWrites,e)}function XN(t,e,n,i,s,r,o){let a;const l=_s(t.visibleWrites,e),c=Mr(l,Be());if(c!=null)a=c;else if(n!=null)a=To(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function JN(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function Rp(t,e,n,i){return sI(t.writeTree,t.treePath,e,n,i)}function rI(t,e){return KN(t.writeTree,t.treePath,e)}function tb(t,e,n,i){return GN(t.writeTree,t.treePath,e,n,i)}function Ju(t,e){return QN(t.writeTree,kt(t.treePath,e))}function ZN(t,e,n,i,s,r){return XN(t.writeTree,t.treePath,e,n,i,s,r)}function km(t,e,n){return YN(t.writeTree,t.treePath,e,n)}function oI(t,e){return aI(kt(t.treePath,e),t.writeTree)}function aI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Gv(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,AN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,kN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Gv(i,e.snapshotNode,s.oldSnap));else throw jo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const lI=new tL;class Am{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Cm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return km(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tr(this.viewCache_),r=ZN(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function nL(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iL(t,e,n,i,s){const r=new eL;let o,a;if(n.type===ai.OVERWRITE){const c=n;c.source.fromUser?o=Dp(t,e,c.path,c.snap,i,s,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!we(c.path),o=Zu(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===ai.MERGE){const c=n;c.source.fromUser?o=rL(t,e,c.path,c.children,i,s,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Op(t,e,c.path,c.children,i,s,a,r))}else if(n.type===ai.ACK_USER_WRITE){const c=n;c.revert?o=lL(t,e,c.path,i,s,r):o=oL(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ai.LISTEN_COMPLETE)o=aL(t,e,n.path,i,r);else throw jo("Unknown operation type: "+n.type);const l=r.getChanges();return sL(e,o,l),{viewCache:o,changes:l}}function sL(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Cp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(CN(Cp(e)))}}function cI(t,e,n,i,s,r){const o=e.eventCache;if(Ju(i,n)!=null)return e;{let a,l;if(we(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Tr(e),u=c instanceof Ne?c:Ne.EMPTY_NODE,h=rI(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Rp(i,Tr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=xe(n);if(c===".priority"){V(xs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=tb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ke(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=tb(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=km(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Na(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function Zu(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(we(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=xe(n);if(!l.isCompleteForPath(n)&&xs(n)>1)return e;const p=Ke(n),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,p,lI,null)}const h=eI(e,c,l.isFullyInitialized()||we(n),u.filtersNodes()),f=new Am(s,h,r);return cI(t,h,n,s,f,a)}function Dp(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Am(s,e,r);if(we(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Na(e,c,!0,t.filter.filtersNodes());else{const h=xe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Na(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ke(n),d=a.getNode().getImmediateChild(h);let p;if(we(f))p=i;else{const g=u.getCompleteChild(h);g!=null?VT(f)===".priority"&&g.getChild($T(f)).isEmpty()?p=g:p=g.updateChild(f,i):p=Ne.EMPTY_NODE}if(d.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Na(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nb(t,e){return t.eventCache.isCompleteForChild(e)}function rL(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=kt(n,l);nb(e,xe(u))&&(a=Dp(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=kt(n,l);nb(e,xe(u))||(a=Dp(t,a,u,c,s,r,o))}),a}function ib(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Op(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;we(n)?c=i:c=new We(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=ib(t,d,f);l=Zu(t,l,new Ze(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),g=ib(t,p,f);l=Zu(t,l,new Ze(h),g,s,r,o,a)}}),l}function oL(t,e,n,i,s,r,o){if(Ju(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(we(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zu(t,e,n,l.getNode().getChild(n),s,r,a,o);if(we(n)){let c=new We(null);return l.getNode().forEachChild(lo,(u,h)=>{c=c.set(new Ze(u),h)}),Op(t,e,n,c,s,r,a,o)}else return e}else{let c=new We(null);return i.foreach((u,h)=>{const f=kt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Op(t,e,n,c,s,r,a,o)}}function aL(t,e,n,i,s){const r=e.serverCache,o=eI(e,r.getNode(),r.isFullyInitialized()||we(n),r.isFiltered());return cI(t,o,n,i,lI,s)}function lL(t,e,n,i,s,r){let o;if(Ju(i,n)!=null)return e;{const a=new Am(i,e,s),l=e.eventCache.getNode();let c;if(we(n)||xe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rp(i,Tr(e));else{const h=e.serverCache.getNode();V(h instanceof Ne,"serverChildren would be complete if leaf node"),u=rI(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=xe(n);let h=km(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ke(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ne.EMPTY_NODE,Ke(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rp(i,Tr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ju(i,Be())!=null,Na(e,c,o,t.filter.filtersNodes())}}function cL(t,e){const n=Tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(xe(e)).isEmpty())?n.getChild(e):null}function sb(t,e,n,i){e.type===ai.MERGE&&e.source.queryId!==null&&(V(Tr(t.viewCache_),"We should always have a full cache before handling merges"),V(Cp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=iL(t.processor_,s,e,n,i);return nL(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uL(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return FN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rb;function hL(t){V(!rb,"__referenceConstructor has already been defined"),rb=t}function Rm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return V(r!=null,"SyncTree gave us an op for an invalid query."),sb(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(sb(o,e,n,i));return r}}function Dm(t,e){let n=null;for(const i of t.views.values())n=n||cL(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ob;function fL(t){V(!ob,"__referenceConstructor has already been defined"),ob=t}class ab{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=JN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dL(t,e,n,i,s){return $N(t.pendingWriteTree_,e,n,i,s),s?of(t,new Er(QT(),e,n)):[]}function Jr(t,e,n=!1){const i=zN(t.pendingWriteTree_,e);if(jN(t.pendingWriteTree_,e)){let r=new We(null);return i.snap!=null?r=r.set(Be(),!0):Pn(i.children,o=>{r=r.set(new Ze(o),!0)}),of(t,new Xu(i.path,r,n))}else return[]}function rf(t,e,n){return of(t,new Er(XT(),e,n))}function pL(t,e,n){const i=We.fromObject(n);return of(t,new fl(XT(),e,i))}function gL(t,e,n,i){const s=dI(t,i);if(s!=null){const r=pI(s),o=r.path,a=r.queryId,l=kn(o,e),c=new Er(JT(a),l,n);return gI(t,o,c)}else return[]}function mL(t,e,n,i){const s=dI(t,i);if(s){const r=pI(s),o=r.path,a=r.queryId,l=kn(o,e),c=We.fromObject(n),u=new fl(JT(a),l,c);return gI(t,o,u)}else return[]}function uI(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=kn(o,e),c=Dm(a,l);if(c)return c});return sI(s,e,r,n,!0)}function of(t,e){return hI(e,t.syncPointTree_,null,nI(t.pendingWriteTree_,Be()))}function hI(t,e,n,i){if(we(t.path))return fI(t,e,n,i);{const s=e.get(Be());n==null&&s!=null&&(n=Dm(s,Be()));let r=[];const o=xe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=oI(i,o);r=r.concat(hI(a,l,c,u))}return s&&(r=r.concat(Rm(s,t,i,n))),r}}function fI(t,e,n,i){const s=e.get(Be());n==null&&s!=null&&(n=Dm(s,Be()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=oI(i,o),u=t.operationForChild(o);u&&(r=r.concat(fI(u,a,l,c)))}),s&&(r=r.concat(Rm(s,t,i,n))),r}function dI(t,e){return t.tagToQueryMap.get(e)}function pI(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ze(t.substr(0,e))}}function gI(t,e,n){const i=t.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const s=nI(t.pendingWriteTree_,e);return Rm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Om(n)}node(){return this.node_}}class Pm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=kt(this.path_,e);return new Pm(this.syncTree_,n)}node(){return uI(this.syncTree_,this.path_)}}const _L=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lb=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vL(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},vL=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bL=function(t,e,n,i){return Mm(e,new Pm(n,t),i)},wL=function(t,e,n){return Mm(t,new Om(e),n)};function Mm(t,e,n){const i=t.getPriority().val(),s=lb(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=lb(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new xt(a,jt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new xt(s))),o.forEachChild(Kt,(a,l)=>{const c=Mm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Lm(t,e){let n=e instanceof Ze?e:new Ze(e),i=t,s=xe(n);for(;s!==null;){const r=bo(i.node.children,s)||{children:{},childCount:0};i=new Nm(s,i,r),n=Ke(n),s=xe(n)}return i}function Ko(t){return t.node.value}function mI(t,e){t.node.value=e,Pp(t)}function _I(t){return t.node.childCount>0}function EL(t){return Ko(t)===void 0&&!_I(t)}function af(t,e){Pn(t.node.children,(n,i)=>{e(new Nm(n,t,i))})}function yI(t,e,n,i){n&&!i&&e(t),af(t,s=>{yI(s,e,!0,i)}),n&&i&&e(t)}function TL(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Gl(t){return new Ze(t.parent===null?t.name:Gl(t.parent)+"/"+t.name)}function Pp(t){t.parent!==null&&IL(t.parent,t.name,t)}function IL(t,e,n){const i=EL(n),s=Gi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Pp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Pp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=/[\[\].#$\/\u0000-\u001F\u007F]/,SL=/[\[\].#$\u0000-\u001F\u007F]/,gd=10*1024*1024,vI=function(t){return typeof t=="string"&&t.length!==0&&!xL.test(t)},CL=function(t){return typeof t=="string"&&t.length!==0&&!SL.test(t)},kL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CL(t)},bI=function(t,e,n){const i=n instanceof Ze?new aN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qs(i));if(typeof e=="function")throw new Error(t+"contains a function "+Qs(i)+" with contents = "+e.toString());if(vT(e))throw new Error(t+"contains "+e.toString()+" "+Qs(i));if(typeof e=="string"&&e.length>gd/3&&Zh(e)>gd)throw new Error(t+"contains a string greater than "+gd+" utf8 bytes "+Qs(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Pn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lN(i,o),bI(t,a,i),cN(i)}),s&&r)throw new Error(t+' contains ".value" child '+Qs(i)+" in addition to actual children.")}},AL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kL(n))throw new Error(DD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DL(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!zT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Nr(t,e,n){DL(t,n),OL(t,i=>$n(i,e)||$n(e,i))}function OL(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(PL(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();dr&&zt("event: "+n.toString()),ql(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML="repo_interrupt",NL=25;class LL{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qu(),this.transactionQueueTree_=new Nm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FL(t,e,n){if(t.stats_=Em(t.repoInfo_),t.forceRestClient_||DM())t.server_=new Yu(t.repoInfo_,(i,s,r,o)=>{cb(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ub(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ot(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Li(t.repoInfo_,e,(i,s,r,o)=>{cb(t,i,s,r,o)},i=>{ub(t,i)},i=>{VL(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=FM(t.repoInfo_,()=>new LN(t.stats_,t.server_)),t.infoData_=new DN,t.infoSyncTree_=new ab({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=rf(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fm(t,"connected",!1),t.serverSyncTree_=new ab({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Nr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function UL(t){const n=t.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wI(t){return _L({timestamp:UL(t)})}function cb(t,e,n,i,s){t.dataUpdateCount++;const r=new Ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Fu(n,c=>jt(c));o=mL(t.serverSyncTree_,r,l,s)}else{const l=jt(n);o=gL(t.serverSyncTree_,r,l,s)}else if(i){const l=Fu(n,c=>jt(c));o=pL(t.serverSyncTree_,r,l)}else{const l=jt(n);o=rf(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Vm(t,r)),Nr(t.eventQueue_,a,o)}function ub(t,e){Fm(t,"connected",e),e===!1&&$L(t)}function VL(t,e){Pn(e,(n,i)=>{Fm(t,n,i)})}function Fm(t,e,n){const i=new Ze("/.info/"+e),s=jt(n);t.infoData_.updateSnapshot(i,s);const r=rf(t.infoSyncTree_,i,s);Nr(t.eventQueue_,i,r)}function BL(t){return t.nextWriteId_++}function $L(t){EI(t,"onDisconnectEvents");const e=wI(t),n=Qu();Sp(t.onDisconnect_,Be(),(s,r)=>{const o=bL(s,r,t.serverSyncTree_,e);YT(n,s,o)});let i=[];Sp(n,Be(),(s,r)=>{i=i.concat(rf(t.serverSyncTree_,s,r));const o=WL(t,s);Vm(t,o)}),t.onDisconnect_=Qu(),Nr(t.eventQueue_,Be(),i)}function zL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ML)}function EI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),zt(n,...e)}function TI(t,e,n){return uI(t.serverSyncTree_,e,n)||Ne.EMPTY_NODE}function Um(t,e=t.transactionQueueTree_){if(e||lf(t,e),Ko(e)){const n=xI(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&jL(t,Gl(e),n)}else _I(e)&&af(e,n=>{Um(t,n)})}function jL(t,e,n){const i=n.map(c=>c.currentWriteId),s=TI(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=kn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{EI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Jr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();lf(t,Lm(t.transactionQueueTree_,e)),Um(t,t.transactionQueueTree_),Nr(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ql(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Tn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vm(t,e)}},o)}function Vm(t,e){const n=II(t,e),i=Gl(n),s=xI(t,n);return HL(t,s,i),i}function HL(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=kn(n,l.path);let u=!1,h;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Jr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NL)u=!0,h="maxretry",s=s.concat(Jr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=TI(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){bI("transaction failed: Data returned ",d,l.path);let p=jt(d);typeof d=="object"&&d!=null&&Gi(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=l.currentWriteId,_=wI(t),v=wL(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=v,l.currentWriteId=BL(t),o.splice(o.indexOf(m),1),s=s.concat(dL(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),s=s.concat(Jr(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Jr(t.serverSyncTree_,l.currentWriteId,!0))}Nr(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}lf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)ql(i[a]);Um(t,t.transactionQueueTree_)}function II(t,e){let n,i=t.transactionQueueTree_;for(n=xe(e);n!==null&&Ko(i)===void 0;)i=Lm(i,n),e=Ke(e),n=xe(e);return i}function xI(t,e){const n=[];return SI(t,e,n),n.sort((i,s)=>i.order-s.order),n}function SI(t,e,n){const i=Ko(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);af(e,s=>{SI(t,s,n)})}function lf(t,e){const n=Ko(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,mI(e,n.length>0?n:void 0)}af(e,i=>{lf(t,i)})}function WL(t,e){const n=Gl(II(t,e)),i=Lm(t.transactionQueueTree_,e);return TL(i,s=>{md(t,s)}),md(t,i),yI(i,s=>{md(t,s)}),n}function md(t,e){const n=Ko(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Jr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mI(e,void 0):n.length=r+1,Nr(t.eventQueue_,Gl(e),s);for(let o=0;o<i.length;o++)ql(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function KL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const hb=function(t,e){const n=GL(t),i=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MM(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Ze(n.pathString)}},GL=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=qL(t.substring(u,h)));const f=KL(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return we(this._path)?null:VT(this._path)}get ref(){return new Go(this._repo,this._path)}get _queryIdentifier(){const e=Qv(this._queryParams),n=bm(e);return n==="{}"?"default":n}get _queryObject(){return Qv(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof Bm))return!1;const n=this._repo===e._repo,i=zT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+oN(this._path)}}class Go extends Bm{constructor(e,n){super(e,n,new Sm,!1)}get parent(){const e=$T(this._path);return e===null?null:new Go(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}hL(Go);fL(Go);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="FIREBASE_DATABASE_EMULATOR_HOST",Mp={};let QL=!1;function XL(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hb(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[YL]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=hb(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Tp(Tp.OWNER):new PM(t.name,t.options,e);AL("Invalid Firebase Database URL",o),we(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ZL(a,t,u,new OM(t.name,n));return new eF(h,t)}function JL(t,e){const n=Mp[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zL(t),delete n[t.key]}function ZL(t,e,n,i){let s=Mp[e.name];s||(s={},Mp[e.name]=s);let r=s[t.toURLString()];return r&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new LL(t,QL,n,i),s[t.toURLString()]=r,r}class eF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Go(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}/**
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
 */function tF(t){yM(Ns),pi(new Kn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return XL(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),En(Ov,Pv,t),En(Ov,Pv,"esm2017")}Li.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Li.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tF();var nF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,$m=$m||{},le=nF||self;function eh(){}function cf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iF(t){return Object.prototype.hasOwnProperty.call(t,_d)&&t[_d]||(t[_d]=++sF)}var _d="closure_uid_"+(1e9*Math.random()>>>0),sF=0;function rF(t,e,n){return t.call.apply(t.bind,arguments)}function oF(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=rF:Gt=oF,Gt.apply(null,arguments)}function Ac(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ls(){this.s=this.s,this.o=this.o}var aF=0;Ls.prototype.s=!1;Ls.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aF!=0)&&iF(this)};Ls.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const CI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zm(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function fb(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(cf(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var lF=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",eh,e),le.removeEventListener("test",eh,e)}catch{}return t}();function th(t){return/^[\s\xa0]*$/.test(t)}var db=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yd(t,e){return t<e?-1:t>e?1:0}function uf(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function ri(t){return uf().indexOf(t)!=-1}function jm(t){return jm[" "](t),t}jm[" "]=eh;function cF(t){var e=fF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uF=ri("Opera"),Io=ri("Trident")||ri("MSIE"),kI=ri("Edge"),Np=kI||Io,AI=ri("Gecko")&&!(uf().toLowerCase().indexOf("webkit")!=-1&&!ri("Edge"))&&!(ri("Trident")||ri("MSIE"))&&!ri("Edge"),hF=uf().toLowerCase().indexOf("webkit")!=-1&&!ri("Edge");function RI(){var t=le.document;return t?t.documentMode:void 0}var nh;e:{var vd="",bd=function(){var t=uf();if(AI)return/rv:([^\);]+)(\)|;)/.exec(t);if(kI)return/Edge\/([\d\.]+)/.exec(t);if(Io)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hF)return/WebKit\/(\S+)/.exec(t);if(uF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bd&&(vd=bd?bd[1]:""),Io){var wd=RI();if(wd!=null&&wd>parseFloat(vd)){nh=String(wd);break e}}nh=vd}var fF={};function dF(){return cF(function(){let t=0;const e=db(String(nh)).split("."),n=db("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=yd(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||yd(s[2].length==0,r[2].length==0)||yd(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Lp;if(le.document&&Io){var pb=RI();Lp=pb||parseInt(nh,10)||void 0}else Lp=void 0;var pF=Lp;function dl(t,e){if(Yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AI){e:{try{jm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dl.X.h.call(this)}}Lt(dl,Yt);var gF={2:"touch",3:"pen",4:"mouse"};dl.prototype.h=function(){dl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ql="closure_listenable_"+(1e6*Math.random()|0),mF=0;function _F(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++mF,this.ba=this.ea=!1}function hf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Hm(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function DI(t){const e={};for(const n in t)e[n]=t[n];return e}const gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function OI(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<gb.length;r++)n=gb[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ff(t){this.src=t,this.g={},this.h=0}ff.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Up(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _F(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Fp(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=CI(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(hf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Up(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Wm="closure_lm_"+(1e6*Math.random()|0),Ed={};function PI(t,e,n,i,s){if(i&&i.once)return NI(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)PI(t,e[r],n,i,s);return null}return n=Gm(n),t&&t[Ql]?t.N(e,n,Yl(i)?!!i.capture:!!i,s):MI(t,e,n,!1,i,s)}function MI(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Yl(s)?!!s.capture:!!s,a=Km(t);if(a||(t[Wm]=a=new ff(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=yF(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)lF||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(FI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yF(){function t(n){return e.call(t.src,t.listener,n)}const e=vF;return t}function NI(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)NI(t,e[r],n,i,s);return null}return n=Gm(n),t&&t[Ql]?t.O(e,n,Yl(i)?!!i.capture:!!i,s):MI(t,e,n,!0,i,s)}function LI(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)LI(t,e[r],n,i,s);else i=Yl(i)?!!i.capture:!!i,n=Gm(n),t&&t[Ql]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Up(r,n,i,s),-1<n&&(hf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Km(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Up(e,n,i,s)),(n=-1<t?e[t]:null)&&qm(n))}function qm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ql])Fp(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(FI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Km(e))?(Fp(n,t),n.h==0&&(n.src=null,e[Wm]=null)):hf(t)}}}function FI(t){return t in Ed?Ed[t]:Ed[t]="on"+t}function vF(t,e){if(t.ba)t=!0;else{e=new dl(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&qm(t),t=n.call(i,e)}return t}function Km(t){return t=t[Wm],t instanceof ff?t:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gm(t){return typeof t=="function"?t:(t[Td]||(t[Td]=function(e){return t.handleEvent(e)}),t[Td])}function Rt(){Ls.call(this),this.i=new ff(this),this.P=this,this.I=null}Lt(Rt,Ls);Rt.prototype[Ql]=!0;Rt.prototype.removeEventListener=function(t,e,n,i){LI(this,t,e,n,i)};function Mt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Yt(e,t);else if(e instanceof Yt)e.target=e.target||t;else{var s=e;e=new Yt(i,t),OI(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Rc(o,i,!0,e)&&s}if(o=e.g=t,s=Rc(o,i,!0,e)&&s,s=Rc(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Rc(o,i,!1,e)&&s}Rt.prototype.M=function(){if(Rt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)hf(n[i]);delete t.g[e],t.h--}}this.I=null};Rt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Rt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Rc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Fp(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ym=le.JSON.stringify;function bF(){var t=BI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wF{constructor(){this.h=this.g=null}add(e,n){const i=UI.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var UI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new EF,t=>t.reset());class EF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TF(t){le.setTimeout(()=>{throw t},0)}function VI(t,e){Vp||IF(),Bp||(Vp(),Bp=!0),BI.add(t,e)}var Vp;function IF(){var t=le.Promise.resolve(void 0);Vp=function(){t.then(xF)}}var Bp=!1,BI=new wF;function xF(){for(var t;t=bF();){try{t.h.call(t.g)}catch(n){TF(n)}var e=UI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bp=!1}function df(t,e){Rt.call(this),this.h=t||1,this.g=e||le,this.j=Gt(this.lb,this),this.l=Date.now()}Lt(df,Rt);Y=df.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Mt(this,"tick"),this.ca&&(Qm(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){df.X.M.call(this),Qm(this),delete this.g};function Xm(t,e,n){if(typeof t=="function")n&&(t=Gt(t,n));else if(t&&typeof t.handleEvent=="function")t=Gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function $I(t){t.g=Xm(()=>{t.g=null,t.i&&(t.i=!1,$I(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SF extends Ls{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$I(this)}M(){super.M(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pl(t){Ls.call(this),this.h=t,this.g={}}Lt(pl,Ls);var mb=[];function zI(t,e,n,i){Array.isArray(n)||(n&&(mb[0]=n.toString()),n=mb);for(var s=0;s<n.length;s++){var r=PI(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function jI(t){Hm(t.g,function(e,n){this.g.hasOwnProperty(n)&&qm(e)},t),t.g={}}pl.prototype.M=function(){pl.X.M.call(this),jI(this)};pl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pf(){this.g=!0}pf.prototype.Aa=function(){this.g=!1};function CF(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function kF(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Zr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RF(t,n)+(i?" "+i:"")})}function AF(t,e){t.info(function(){return"TIMEOUT: "+e})}pf.prototype.info=function(){};function RF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ym(n)}catch{return e}}var Lr={},_b=null;function gf(){return _b=_b||new Rt}Lr.Pa="serverreachability";function HI(t){Yt.call(this,Lr.Pa,t)}Lt(HI,Yt);function gl(t){const e=gf();Mt(e,new HI(e))}Lr.STAT_EVENT="statevent";function WI(t,e){Yt.call(this,Lr.STAT_EVENT,t),this.stat=e}Lt(WI,Yt);function tn(t){const e=gf();Mt(e,new WI(e,t))}Lr.Qa="timingevent";function qI(t,e){Yt.call(this,Lr.Qa,t),this.size=e}Lt(qI,Yt);function Xl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var mf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},KI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jm(){}Jm.prototype.h=null;function yb(t){return t.h||(t.h=t.i())}function GI(){}var Jl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zm(){Yt.call(this,"d")}Lt(Zm,Yt);function e_(){Yt.call(this,"c")}Lt(e_,Yt);var $p;function _f(){}Lt(_f,Jm);_f.prototype.g=function(){return new XMLHttpRequest};_f.prototype.i=function(){return{}};$p=new _f;function Zl(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new pl(this),this.O=DF,t=Np?125:void 0,this.T=new df(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new YI}function YI(){this.i=null,this.g="",this.h=!1}var DF=45e3,zp={},ih={};Y=Zl.prototype;Y.setTimeout=function(t){this.O=t};function jp(t,e,n){t.K=1,t.v=vf(Bi(e)),t.s=n,t.P=!0,QI(t,null)}function QI(t,e){t.F=Date.now(),ec(t),t.A=Bi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),sx(n.i,"t",i),t.C=0,n=t.l.H,t.h=new YI,t.g=xx(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SF(Gt(t.La,t,t.g),t.N)),zI(t.S,t.g,"readystatechange",t.ib),e=t.H?DI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),gl(),CF(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&Oi(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const u=Oi(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Np||this.g&&(this.h.h||this.g.fa()||Eb(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?gl(3):gl(2)),yf(this);var n=this.g.aa();this.Y=n;t:if(XI(this)){var i=Eb(this.g);t="";var s=i.length,r=Oi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Fa(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kF(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!th(a)){var c=a;break t}}c=null}if(n=c)Zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hp(this,n);else{this.i=!1,this.o=3,tn(12),sr(this),Fa(this);break e}}this.P?(JI(this,u,o),Np&&this.i&&u==3&&(zI(this.S,this.T,"tick",this.hb),this.T.start())):(Zr(this.j,this.m,o,null),Hp(this,o)),u==4&&sr(this),this.i&&!this.I&&(u==4?wx(this.l,this):(this.i=!1,ec(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),sr(this),Fa(this)}}}catch{}finally{}};function XI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function JI(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=OF(t,n),s==ih){e==4&&(t.o=4,tn(14),i=!1),Zr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==zp){t.o=4,tn(15),Zr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Zr(t.j,t.m,s,null),Hp(t,s);XI(t)&&s!=ih&&s!=zp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),a_(e),e.K=!0,tn(11))):(Zr(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),Fa(t))}Y.hb=function(){if(this.g){var t=Oi(this.g),e=this.g.fa();this.C<e.length&&(yf(this),JI(this,t,e),this.i&&t!=4&&ec(this))}};function OF(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ih:(n=Number(e.substring(n,i)),isNaN(n)?zp:(i+=1,i+n>e.length?ih:(e=e.substr(i,n),t.C=i+n,e)))}Y.cancel=function(){this.I=!0,sr(this)};function ec(t){t.V=Date.now()+t.O,ZI(t,t.O)}function ZI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xl(Gt(t.gb,t),e)}function yf(t){t.B&&(le.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(AF(this.j,this.A),this.K!=2&&(gl(),tn(17)),sr(this),this.o=2,Fa(this)):ZI(this,this.V-t)};function Fa(t){t.l.G==0||t.I||wx(t.l,t)}function sr(t){yf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qm(t.T),jI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wp(n.h,t))){if(!t.J&&Wp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)oh(n),Ef(n);else break e;o_(n),tn(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xl(Gt(n.cb,n),6e3));if(1>=ax(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else rr(n,11)}else if((t.J||n.g==t)&&oh(n),!th(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(t_(r,r.h),r.h=null))}if(i.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,tt(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Ix(i,i.H?i.ka:null,i.V),o.J){lx(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(yf(a),ec(a)),i.g=o}else vx(i);0<n.i.length&&Tf(n)}else c[0]!="stop"&&c[0]!="close"||rr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?rr(n,7):r_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}gl(4)}catch{}}function PF(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cf(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function MF(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ex(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MF(t),i=PF(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var tx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pr){this.h=e!==void 0?e:t.h,sh(this,t.j),this.s=t.s,this.g=t.g,rh(this,t.m),this.l=t.l,e=t.i;var n=new ml;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vb(this,n),this.o=t.o}else t&&(n=String(t).match(tx))?(this.h=!!e,sh(this,n[1]||"",!0),this.s=ba(n[2]||""),this.g=ba(n[3]||"",!0),rh(this,n[4]),this.l=ba(n[5]||"",!0),vb(this,n[6]||"",!0),this.o=ba(n[7]||"")):(this.h=!!e,this.i=new ml(null,this.h))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wa(e,bb,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wa(e,bb,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wa(n,n.charAt(0)=="/"?UF:FF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wa(n,BF)),t.join("")};function Bi(t){return new pr(t)}function sh(t,e,n){t.j=n?ba(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vb(t,e,n){e instanceof ml?(t.i=e,$F(t.i,t.h)):(n||(e=wa(e,VF)),t.i=new ml(e,t.h))}function tt(t,e,n){t.i.set(e,n)}function vf(t){return tt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ba(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bb=/[#\/\?@]/g,FF=/[#\?:]/g,UF=/[#\?]/g,VF=/[#\?@]/g,BF=/#/g;function ml(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fs(t){t.g||(t.g=new Map,t.h=0,t.i&&NF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=ml.prototype;Y.add=function(t,e){Fs(this),this.i=null,t=Yo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nx(t,e){Fs(t),e=Yo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ix(t,e){return Fs(t),e=Yo(t,e),t.g.has(e)}Y.forEach=function(t,e){Fs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};Y.oa=function(){Fs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};Y.W=function(t){Fs(this);let e=[];if(typeof t=="string")ix(this,t)&&(e=e.concat(this.g.get(Yo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return Fs(this),this.i=null,t=Yo(this,t),ix(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function sx(t,e,n){nx(t,e),0<n.length&&(t.i=null,t.g.set(Yo(t,e),zm(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Yo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $F(t,e){e&&!t.j&&(Fs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(nx(this,i),sx(this,s,n))},t)),t.j=e}var zF=class{constructor(e,n){this.h=e,this.g=n}};function rx(t){this.l=t||jF,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ga&&le.g.Ga()&&le.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jF=10;function ox(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ax(t){return t.h?1:t.g?t.g.size:0}function Wp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function t_(t,e){t.g?t.g.add(e):t.h=e}function lx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rx.prototype.cancel=function(){if(this.i=cx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cx(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zm(t.i)}function n_(){}n_.prototype.stringify=function(t){return le.JSON.stringify(t,void 0)};n_.prototype.parse=function(t){return le.JSON.parse(t,void 0)};function HF(){this.g=new n_}function WF(t,e,n){const i=n||"";try{ex(t,function(s,r){let o=s;Yl(s)&&(o=Ym(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function qF(t,e){const n=new pf;if(le.Image){const i=new Image;i.onload=Ac(Dc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ac(Dc,n,i,"TestLoadImage: error",!1,e),i.onabort=Ac(Dc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ac(Dc,n,i,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Dc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function tc(t){this.l=t.ac||null,this.j=t.jb||!1}Lt(tc,Jm);tc.prototype.g=function(){return new bf(this.l,this.j)};tc.prototype.i=function(t){return function(){return t}}({});function bf(t,e){Rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=i_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lt(bf,Rt);var i_=0;Y=bf.prototype;Y.open=function(t,e){if(this.readyState!=i_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_l(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||le).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nc(this)),this.readyState=i_};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_l(this)),this.g&&(this.readyState=3,_l(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ux(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ux(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nc(this):_l(this),this.readyState==3&&ux(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,nc(this))};Y.Ua=function(t){this.g&&(this.response=t,nc(this))};Y.ga=function(){this.g&&nc(this)};function nc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_l(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _l(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KF=le.JSON.parse;function ct(t){Rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hx,this.K=this.L=!1}Lt(ct,Rt);var hx="",GF=/^https?$/i,YF=["POST","PUT"];Y=ct.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$p.g(),this.C=this.u?yb(this.u):yb($p),this.g.onreadystatechange=Gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wb(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=le.FormData&&t instanceof le.FormData,!(0<=CI(YF,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{px(this),0<this.B&&((this.K=QF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.qa,this)):this.A=Xm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wb(this,r)}};function QF(t){return Io&&dF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof $m<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Mt(this,"timeout"),this.abort(8))};function wb(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fx(t),wf(t)}function fx(t){t.D||(t.D=!0,Mt(t,"complete"),Mt(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Mt(this,"complete"),Mt(this,"abort"),wf(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wf(this,!0)),ct.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?dx(this):this.fb())};Y.fb=function(){dx(this)};function dx(t){if(t.h&&typeof $m<"u"&&(!t.C[1]||Oi(t)!=4||t.aa()!=2)){if(t.v&&Oi(t)==4)Xm(t.Ha,0,t);else if(Mt(t,"readystatechange"),Oi(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(tx)[1]||null;if(!s&&le.self&&le.self.location){var r=le.self.location.protocol;s=r.substr(0,r.length-1)}i=!GF.test(s?s.toLowerCase():"")}n=i}if(n)Mt(t,"complete"),Mt(t,"success");else{t.m=6;try{var o=2<Oi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fx(t)}}finally{wf(t)}}}}function wf(t,e){if(t.g){px(t);const n=t.g,i=t.C[0]?eh:null;t.g=null,t.C=null,e||Mt(t,"ready");try{n.onreadystatechange=i}catch{}}}function px(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}function Oi(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<Oi(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KF(e)}};function Eb(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gx(t){let e="";return Hm(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function s_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=gx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):tt(t,e,n))}function ua(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mx(t){this.Ca=0,this.i=[],this.j=new pf,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ua("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ua("baseRetryDelayMs",5e3,t),this.bb=ua("retryDelaySeedMs",1e4,t),this.$a=ua("forwardChannelMaxRetries",2,t),this.ta=ua("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new rx(t&&t.concurrentRequestLimit),this.Fa=new HF,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=mx.prototype;Y.ma=8;Y.G=1;function r_(t){if(_x(t),t.G==3){var e=t.U++,n=Bi(t.F);tt(n,"SID",t.I),tt(n,"RID",e),tt(n,"TYPE","terminate"),ic(t,n),e=new Zl(t,t.j,e,void 0),e.K=2,e.v=vf(Bi(n)),n=!1,le.navigator&&le.navigator.sendBeacon&&(n=le.navigator.sendBeacon(e.v.toString(),"")),!n&&le.Image&&(new Image().src=e.v,n=!0),n||(e.g=xx(e.l,null),e.g.da(e.v)),e.F=Date.now(),ec(e)}Tx(t)}function Ef(t){t.g&&(a_(t),t.g.cancel(),t.g=null)}function _x(t){Ef(t),t.u&&(le.clearTimeout(t.u),t.u=null),oh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Tf(t){ox(t.h)||t.m||(t.m=!0,VI(t.Ja,t),t.C=0)}function XF(t,e){return ax(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xl(Gt(t.Ja,t,e),Ex(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Zl(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=DI(r),OI(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yx(this,s,e),n=Bi(this.F),tt(n,"RID",t),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),ic(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(gx(r)))+"&"+e:this.o&&s_(n,this.o,r)),t_(this.h,s),this.Ya&&tt(n,"TYPE","init"),this.O?(tt(n,"$req",e),tt(n,"SID","null"),s.Z=!0,jp(s,n,null)):jp(s,n,e),this.G=2}}else this.G==3&&(t?Tb(this,t):this.i.length==0||ox(this.h)||Tb(this))};function Tb(t,e){var n;e?n=e.m:n=t.U++;const i=Bi(t.F);tt(i,"SID",t.I),tt(i,"RID",n),tt(i,"AID",t.T),ic(t,i),t.o&&t.s&&s_(i,t.o,t.s),n=new Zl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=yx(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),t_(t.h,n),jp(n,i,e)}function ic(t,e){t.ia&&Hm(t.ia,function(n,i){tt(e,i,n)}),t.l&&ex({},function(n,i){tt(e,i,n)})}function yx(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Gt(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{WF(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function vx(t){t.g||t.u||(t.Z=1,VI(t.Ia,t),t.A=0)}function o_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xl(Gt(t.Ia,t),Ex(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,bx(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xl(Gt(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tn(10),Ef(this),bx(this))};function a_(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function bx(t){t.g=new Zl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Bi(t.sa);tt(e,"RID","rpc"),tt(e,"SID",t.I),tt(e,"CI",t.L?"0":"1"),tt(e,"AID",t.T),tt(e,"TYPE","xmlhttp"),ic(t,e),t.o&&t.s&&s_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vf(Bi(e)),n.s=null,n.P=!0,QI(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,Ef(this),o_(this),tn(19))};function oh(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function wx(t,e){var n=null;if(t.g==e){oh(t),a_(t),t.g=null;var i=2}else if(Wp(t.h,e))n=e.D,lx(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=gf(),Mt(i,new qI(i,n)),Tf(t)}else vx(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&XF(t,e)||i==2&&o_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:rr(t,5);break;case 4:rr(t,10);break;case 3:rr(t,6);break;default:rr(t,2)}}}function Ex(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function rr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Gt(t.kb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||sh(n,"https"),vf(n)),qF(n.toString(),i)}else tn(2);t.G=0,t.l&&t.l.va(e),Tx(t),_x(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tn(2)):(this.j.info("Failed to ping google.com"),tn(1))};function Tx(t){if(t.G=0,t.la=[],t.l){const e=cx(t.h);(e.length!=0||t.i.length!=0)&&(fb(t.la,e),fb(t.la,t.i),t.h.i.length=0,zm(t.i),t.i.length=0),t.l.ua()}}function Ix(t,e,n){var i=n instanceof pr?Bi(n):new pr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),rh(i,i.m);else{var s=le.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new pr(null,void 0);i&&sh(r,i),e&&(r.g=e),s&&rh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&tt(i,n,e),tt(i,"VER",t.ma),ic(t,i),i}function xx(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ct(new tc({jb:!0})):new ct(t.ra),e.Ka(t.H),e}function Sx(){}Y=Sx.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function ah(){if(Io&&!(10<=Number(pF)))throw Error("Environmental error: no available transport.")}ah.prototype.g=function(t,e){return new In(t,e)};function In(t,e){Rt.call(this),this.g=new mx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!th(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!th(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qo(this)}Lt(In,Rt);In.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ix(t,null,t.V),Tf(t)};In.prototype.close=function(){r_(this.g)};In.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ym(t),t=n);e.i.push(new zF(e.ab++,t)),e.G==3&&Tf(e)};In.prototype.M=function(){this.g.l=null,delete this.j,r_(this.g),delete this.g,In.X.M.call(this)};function Cx(t){Zm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Lt(Cx,Zm);function kx(){e_.call(this),this.status=1}Lt(kx,e_);function Qo(t){this.g=t}Lt(Qo,Sx);Qo.prototype.xa=function(){Mt(this.g,"a")};Qo.prototype.wa=function(t){Mt(this.g,new Cx(t))};Qo.prototype.va=function(t){Mt(this.g,new kx)};Qo.prototype.ua=function(){Mt(this.g,"b")};ah.prototype.createWebChannel=ah.prototype.g;In.prototype.send=In.prototype.u;In.prototype.open=In.prototype.m;In.prototype.close=In.prototype.close;mf.NO_ERROR=0;mf.TIMEOUT=8;mf.HTTP_ERROR=6;KI.COMPLETE="complete";GI.EventType=Jl;Jl.OPEN="a";Jl.CLOSE="b";Jl.ERROR="c";Jl.MESSAGE="d";Rt.prototype.listen=Rt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.Oa;ct.prototype.getLastErrorCode=ct.prototype.Ea;ct.prototype.getStatus=ct.prototype.aa;ct.prototype.getResponseJson=ct.prototype.Sa;ct.prototype.getResponseText=ct.prototype.fa;ct.prototype.send=ct.prototype.da;ct.prototype.setWithCredentials=ct.prototype.Ka;var JF=function(){return new ah},ZF=function(){return gf()},Id=mf,e3=KI,t3=Lr,Ib={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},n3=tc,Oc=GI,i3=ct;const xb="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Ul("@firebase/firestore");function Sb(){return Ir.logLevel}function Q(t,...e){if(Ir.logLevel<=Re.DEBUG){const n=e.map(l_);Ir.debug(`Firestore (${Xo}): ${t}`,...n)}}function $i(t,...e){if(Ir.logLevel<=Re.ERROR){const n=e.map(l_);Ir.error(`Firestore (${Xo}): ${t}`,...n)}}function lh(t,...e){if(Ir.logLevel<=Re.WARN){const n=e.map(l_);Ir.warn(`Firestore (${Xo}): ${t}`,...n)}}function l_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: `+t;throw $i(e),new Error(e)}function Je(t,e){t||oe()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends vi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class r3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o3{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Je(typeof i.accessToken=="string"),new Ax(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new $t(e)}}class a3{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class l3{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new a3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.T=n.token,new c3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=h3(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Pe(t,e){return t<e?-1:t>e?1:0}function xo(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new _t(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new _t(0,0))}static max(){return new he(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,i){n===void 0?n=0:n>e.length&&oe(),i===void 0?i=e.length-n:i>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ye extends yl{construct(e,n,i){return new Ye(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ye(n)}static emptyPath(){return new Ye([])}}const f3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends yl{construct(e,n,i){return new qt(e,n,i)}static isValidIdentifier(e){return f3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ye.fromString(e))}static fromName(e){return new Z(Ye.fromString(e).popFirst(5))}static empty(){return new Z(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ye(e.slice()))}}function d3(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(i===1e9?new _t(n+1,0):new _t(n,i));return new Ss(s,Z.empty(),e)}function p3(t){return new Ss(t.readTime,t.key,-1)}class Ss{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ss(he.min(),Z.empty(),-1)}static max(){return new Ss(he.max(),Z.empty(),-1)}}function g3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==m3)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,i)=>{n(e)})}static reject(e){return new N((n,i)=>{i(e)})}static waitFor(e){return new N((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=N.resolve(!1);for(const i of e)n=n.next(s=>s?N.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new N((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new N((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function rc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class c_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}c_.ct=-1;function If(t){return t==null}function ch(t){return t===0&&1/t==-1/0}function y3(t){return typeof t=="number"&&Number.isInteger(t)&&!ch(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.comparator=e,this.root=n||Dt.EMPTY}insert(e,n){return new Et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pc(this.root,e,this.comparator,!0)}}class Pc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Dt.RED,this.left=s??Dt.EMPTY,this.right=r??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Dt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kb(this.data.getIterator())}getIteratorFrom(e){return new kb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class kb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new bt(qt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class v3 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new v3("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const b3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(Je(!!t),typeof t=="string"){let e=0;const n=b3.exec(t);if(Je(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:gt(t.seconds),nanos:gt(t.nanos)}}function gt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function So(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Px(t){const e=t.mapValue.fields.__previous_value__;return Ox(e)?Px(e):e}function vl(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class bl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ox(t)?4:E3(t)?9007199254740991:10:oe()}function _i(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Cs(i.timestampValue),o=Cs(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return So(i.bytesValue).isEqual(So(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return gt(i.geoPointValue.latitude)===gt(s.geoPointValue.latitude)&&gt(i.geoPointValue.longitude)===gt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return gt(i.integerValue)===gt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=gt(i.doubleValue),o=gt(s.doubleValue);return r===o?ch(r)===ch(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return xo(t.arrayValue.values||[],e.arrayValue.values||[],_i);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Cb(r)!==Cb(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_i(r[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function wl(t,e){return(t.values||[]).find(n=>_i(n,e))!==void 0}function Co(t,e){if(t===e)return 0;const n=xr(t),i=xr(e);if(n!==i)return Pe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=gt(s.integerValue||s.doubleValue),a=gt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ab(t.timestampValue,e.timestampValue);case 4:return Ab(vl(t),vl(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,r){const o=So(s),a=So(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Pe(o[l],a[l]);if(c!==0)return c}return Pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=Pe(gt(s.latitude),gt(r.latitude));return o!==0?o:Pe(gt(s.longitude),gt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Co(o[l],a[l]);if(c)return c}return Pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Mc.mapValue&&r===Mc.mapValue)return 0;if(s===Mc.mapValue)return 1;if(r===Mc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Pe(a[u],c[u]);if(h!==0)return h;const f=Co(o[a[u]],l[c[u]]);if(f!==0)return f}return Pe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Ab(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Cs(t),i=Cs(e),s=Pe(n.seconds,i.seconds);return s!==0?s:Pe(n.nanos,i.nanos)}function ko(t){return qp(t)}function qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Cs(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?So(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=qp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${qp(i.fields[a])}`;return r+"}"}(t.mapValue):oe();var e,n}function Rb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kp(t){return!!t&&"integerValue"in t}function u_(t){return!!t&&"arrayValue"in t}function Db(t){return!!t&&"nullValue"in t}function Ob(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yu(t){return!!t&&"mapValue"in t}function Ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ua(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(n)}setAll(e){let n=qt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ua(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _i(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];yu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Fr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new cn(Ua(this.value))}}function Mx(t){const e=[];return Fr(t.fields,(n,i)=>{const s=new qt([n]);if(yu(i)){const r=Mx(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,he.min(),he.min(),he.min(),cn.empty(),0)}static newFoundDocument(e,n,i,s){return new Ht(e,1,n,he.min(),i,s,0)}static newNoDocument(e,n){return new Ht(e,2,n,he.min(),he.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,he.min(),he.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uh{constructor(e,n){this.position=e,this.inclusive=n}}function Pb(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=Z.comparator(Z.fromName(o.referenceValue),n.key):i=Co(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Mb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_i(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Va{constructor(e,n="asc"){this.field=e,this.dir=n}}function T3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Nx{}class mt extends Nx{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new x3(e,n,i):n==="array-contains"?new k3(e,i):n==="in"?new A3(e,i):n==="not-in"?new R3(e,i):n==="array-contains-any"?new D3(e,i):new mt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new S3(e,i):new C3(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Co(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(Co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Gn extends Nx{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Gn(e,n)}matches(e){return Lx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Lx(t){return t.op==="and"}function Fx(t){return I3(t)&&Lx(t)}function I3(t){for(const e of t.filters)if(e instanceof Gn)return!1;return!0}function Gp(t){if(t instanceof mt)return t.field.canonicalString()+t.op.toString()+ko(t.value);if(Fx(t))return t.filters.map(e=>Gp(e)).join(",");{const e=t.filters.map(n=>Gp(n)).join(",");return`${t.op}(${e})`}}function Ux(t,e){return t instanceof mt?function(n,i){return i instanceof mt&&n.op===i.op&&n.field.isEqual(i.field)&&_i(n.value,i.value)}(t,e):t instanceof Gn?function(n,i){return i instanceof Gn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Ux(r,i.filters[o]),!0):!1}(t,e):void oe()}function Vx(t){return t instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${ko(e.value)}`}(t):t instanceof Gn?function(e){return e.op.toString()+" {"+e.getFilters().map(Vx).join(" ,")+"}"}(t):"Filter"}class x3 extends mt{constructor(e,n,i){super(e,n,i),this.key=Z.fromName(i.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class S3 extends mt{constructor(e,n){super(e,"in",n),this.keys=Bx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class C3 extends mt{constructor(e,n){super(e,"not-in",n),this.keys=Bx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Z.fromName(i.referenceValue))}class k3 extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return u_(n)&&wl(n.arrayValue,this.value)}}class A3 extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class R3 extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class D3 extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!u_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>wl(this.value.arrayValue,i))}}/**
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
 */class O3{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Nb(t,e=null,n=[],i=[],s=null,r=null,o=null){return new O3(t,e,n,i,s,r,o)}function h_(t){const e=fe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Gp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),If(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ko(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ko(i)).join(",")),e.ft=n}return e.ft}function f_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!T3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ux(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mb(t.startAt,e.startAt)&&Mb(t.endAt,e.endAt)}function Yp(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function P3(t,e,n,i,s,r,o,a){return new oc(t,e,n,i,s,r,o,a)}function xf(t){return new oc(t)}function Lb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $x(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function d_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zx(t){return t.collectionGroup!==null}function co(t){const e=fe(t);if(e.dt===null){e.dt=[];const n=d_(e),i=$x(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Va(n)),e.dt.push(new Va(qt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Va(qt.keyField(),r))}}}return e.dt}function zi(t){const e=fe(t);if(!e.wt)if(e.limitType==="F")e.wt=Nb(e.path,e.collectionGroup,co(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of co(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Va(r.field,o))}const i=e.endAt?new uh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new uh(e.startAt.position,e.startAt.inclusive):null;e.wt=Nb(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function Qp(t,e){e.getFirstInequalityField(),d_(t);const n=t.filters.concat([e]);return new oc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xp(t,e,n){return new oc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sf(t,e){return f_(zi(t),zi(e))&&t.limitType===e.limitType}function jx(t){return`${h_(zi(t))}|lt:${t.limitType}`}function Jp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Vx(i)).join(", ")}]`),If(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ko(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ko(i)).join(",")),`Target(${n})`}(zi(t))}; limitType=${t.limitType})`}function Cf(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of co(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Pb(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,co(n),i)||n.endAt&&!function(s,r,o){const a=Pb(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,co(n),i))}(t,e)}function M3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hx(t){return(e,n)=>{let i=!1;for(const s of co(t)){const r=N3(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function N3(t,e,n){const i=t.field.isKeyField()?Z.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Co(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Dx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3=new Et(Z.comparator);function ji(){return L3}const Wx=new Et(Z.comparator);function Ea(...t){let e=Wx;for(const n of t)e=e.insert(n.key,n);return e}function qx(t){let e=Wx;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function or(){return Ba()}function Kx(){return Ba()}function Ba(){return new Jo(t=>t.toString(),(t,e)=>t.isEqual(e))}const F3=new Et(Z.comparator),U3=new bt(Z.comparator);function be(...t){let e=U3;for(const n of t)e=e.add(n);return e}const V3=new bt(Pe);function Gx(){return V3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ch(e)?"-0":e}}function Qx(t){return{integerValue:""+t}}function B3(t,e){return y3(e)?Qx(e):Yx(t,e)}/**
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
 */class kf{constructor(){this._=void 0}}function $3(t,e,n){return t instanceof hh?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof El?Jx(t,e):t instanceof Tl?Zx(t,e):function(i,s){const r=Xx(i,s),o=Fb(r)+Fb(i._t);return Kp(r)&&Kp(i._t)?Qx(o):Yx(i.serializer,o)}(t,e)}function z3(t,e,n){return t instanceof El?Jx(t,e):t instanceof Tl?Zx(t,e):n}function Xx(t,e){return t instanceof fh?Kp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class hh extends kf{}class El extends kf{constructor(e){super(),this.elements=e}}function Jx(t,e){const n=eS(e);for(const i of t.elements)n.some(s=>_i(s,i))||n.push(i);return{arrayValue:{values:n}}}class Tl extends kf{constructor(e){super(),this.elements=e}}function Zx(t,e){let n=eS(e);for(const i of t.elements)n=n.filter(s=>!_i(s,i));return{arrayValue:{values:n}}}class fh extends kf{constructor(e,n){super(),this.serializer=e,this._t=n}}function Fb(t){return gt(t.integerValue||t.doubleValue)}function eS(t){return u_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function j3(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof El&&i instanceof El||n instanceof Tl&&i instanceof Tl?xo(n.elements,i.elements,_i):n instanceof fh&&i instanceof fh?_i(n._t,i._t):n instanceof hh&&i instanceof hh}(t.transform,e.transform)}class H3{constructor(e,n){this.version=e,this.transformResults=n}}class hi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Af{}function tS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iS(t.key,hi.none()):new ac(t.key,t.data,hi.none());{const n=t.data,i=cn.empty();let s=new bt(qt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Us(t.key,i,new wn(s.toArray()),hi.none())}}function W3(t,e,n){t instanceof ac?function(i,s,r){const o=i.value.clone(),a=Vb(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Us?function(i,s,r){if(!vu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Vb(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(nS(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,i){return t instanceof ac?function(s,r,o,a){if(!vu(s.precondition,r))return o;const l=s.value.clone(),c=Bb(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Us?function(s,r,o,a){if(!vu(s.precondition,r))return o;const l=Bb(s.fieldTransforms,a,r),c=r.data;return c.setAll(nS(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return vu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function q3(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Xx(i.transform,s||null);r!=null&&(n===null&&(n=cn.empty()),n.set(i.field,r))}return n||null}function Ub(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&xo(n,i,(s,r)=>j3(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ac extends Af{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Us extends Af{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Vb(t,e,n){const i=new Map;Je(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,z3(o,a,n[s]))}return i}function Bb(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,$3(r,o,e))}return i}class iS extends Af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K3 extends Af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&W3(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=$a(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=$a(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Kx();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=tS(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(n,i)=>Ub(n,i))&&xo(this.baseMutations,e.baseMutations,(n,i)=>Ub(n,i))}}class p_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Je(e.mutations.length===i.length);let s=F3;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new p_(e,n,i,s)}}/**
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
 */class Y3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Q3{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Ie;function X3(t){switch(t){default:return oe();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function sS(t){if(t===void 0)return $i("GRPC error has no .code"),D.UNKNOWN;switch(t){case pt.OK:return D.OK;case pt.CANCELLED:return D.CANCELLED;case pt.UNKNOWN:return D.UNKNOWN;case pt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case pt.INTERNAL:return D.INTERNAL;case pt.UNAVAILABLE:return D.UNAVAILABLE;case pt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case pt.NOT_FOUND:return D.NOT_FOUND;case pt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case pt.ABORTED:return D.ABORTED;case pt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case pt.DATA_LOSS:return D.DATA_LOSS;default:return oe()}}(Ie=pt||(pt={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class g_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Nc}static getOrCreateInstance(){return Nc===null&&(Nc=new g_),Nc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Nc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Rf(he.min(),s,Gx(),ji(),be())}}class lc{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new lc(i,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class rS{constructor(e,n){this.targetId=e,this.Et=n}}class oS{constructor(e,n,i=Jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class $b{constructor(){this.At=0,this.Rt=jb(),this.vt=Jt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=be(),n=be(),i=be();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:oe()}}),new lc(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=jb()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class J3{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ji(),this.qt=zb(),this.Ut=new bt(Pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(Yp(o))if(s===0){const a=new Z(o.path);this.Qt(i,a,Ht.newNoDocument(a,he.min()))}else Je(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=g_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Yp(a.target)){const l=new Z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Ht.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=be();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Rf(e,n,this.Ut,this.Lt,i);return this.Lt=ji(),this.qt=zb(),this.Ut=new bt(Pe),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new $b,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new bt(Pe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new $b),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function zb(){return new Et(Z.comparator)}function jb(){return new Et(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),t4=(()=>({and:"AND",or:"OR"}))();class n4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function i4(t,e){return dh(t,e.toTimestamp())}function fi(t){return Je(!!t),he.fromTimestamp(function(e){const n=Cs(e);return new _t(n.seconds,n.nanos)}(t))}function m_(t,e){return function(n){return new Ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lS(t){const e=Ye.fromString(t);return Je(fS(e)),e}function Zp(t,e){return m_(t.databaseId,e.path)}function xd(t,e){const n=lS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(cS(n))}function eg(t,e){return m_(t.databaseId,e)}function s4(t){const e=lS(t);return e.length===4?Ye.emptyPath():cS(e)}function tg(t){return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cS(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hb(t,e,n){return{name:Zp(t,e),fields:n.value.mapValue.fields}}function r4(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Je(c===void 0||typeof c=="string"),Jt.fromBase64String(c||"")):(Je(c===void 0||c instanceof Uint8Array),Jt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:sS(l.code);return new q(c,l.message||"")}(o);n=new oS(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=xd(t,i.document.name),r=fi(i.document.updateTime),o=i.document.createTime?fi(i.document.createTime):he.min(),a=new cn({mapValue:{fields:i.document.fields}}),l=Ht.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new bu(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=xd(t,i.document),r=i.readTime?fi(i.readTime):he.min(),o=Ht.newNoDocument(s,r),a=i.removedTargetIds||[];n=new bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=xd(t,i.document),r=i.removedTargetIds||[];n=new bu([],r,s,null)}else{if(!("filter"in e))return oe();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Q3(s),o=i.targetId;n=new rS(o,r)}}return n}function o4(t,e){let n;if(e instanceof ac)n={update:Hb(t,e.key,e.value)};else if(e instanceof iS)n={delete:Zp(t,e.key)};else if(e instanceof Us)n={update:Hb(t,e.key,e.data),updateMask:g4(e.fieldMask)};else{if(!(e instanceof K3))return oe();n={verify:Zp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof hh)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof El)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw oe()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:i4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function a4(t,e){return t&&t.length>0?(Je(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?fi(i.updateTime):fi(s);return r.isEqual(he.min())&&(r=fi(s)),new H3(r,i.transformResults||[])}(n,e))):[]}function l4(t,e){return{documents:[eg(t,e.path)]}}function c4(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=eg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return hS(Gn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Gr(u.field),direction:f4(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||If(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function u4(t){let e=s4(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Je(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=uS(u);return h instanceof Gn&&Fx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Va(Yr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,If(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new uh(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new uh(f,h)}(n.endAt)),P3(e,s,o,r,a,"F",l,c)}function h4(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function uS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Yr(e.unaryFilter.field);return mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Yr(e.unaryFilter.field);return mt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(e.unaryFilter.field);return mt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yr(e.unaryFilter.field);return mt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(e){return mt.create(Yr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Gn.create(e.compositeFilter.filters.map(n=>uS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return oe()}}(e.compositeFilter.op))}(t):oe()}function f4(t){return Z3[t]}function d4(t){return e4[t]}function p4(t){return t4[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return qt.fromServerFormat(t.fieldPath)}function hS(t){return t instanceof mt?function(e){if(e.op==="=="){if(Ob(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NAN"}};if(Db(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ob(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NOT_NAN"}};if(Db(e.value))return{unaryFilter:{field:Gr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(e.field),op:d4(e.op),value:e.value}}}(t):t instanceof Gn?function(e){const n=e.getFilters().map(i=>hS(i));return n.length===1?n[0]:{compositeFilter:{op:p4(e.op),filters:n}}}(t):oe()}function g4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,i,s,r=he.min(),o=he.min(),a=Jt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.se=e}}function _4(t){const e=u4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xp(e,e.limit,"L"):e}/**
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
 */class y4{constructor(){this.He=new v4}addToCollectionParentIndex(e,n){return this.He.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ss.min())}updateCollectionGroup(e,n,i){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class v4{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new bt(Ye.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new bt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ao(0)}static bn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.changes=new Jo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?N.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class w4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&$a(i.mutation,s,wn.empty(),_t.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,be()).next(()=>i))}getLocalViewOfDocuments(e,n,i=be()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Ea();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,be()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=ji();const o=Ba(),a=Ba();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Us)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),$a(u.mutation,c,u.mutation.getFieldMask(),_t.now())):o.set(c.key,wn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new w4(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ba();let s=new Et((o,a)=>o-a),r=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||wn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||be()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Kx();u.forEach(f=>{if(!r.has(f)){const d=tS(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):N.resolve(or());let a=-1,l=r;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,be())).next(u=>({batchId:a,changes:qx(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(i=>{let s=Ea();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Ea();return this.indexManager.getCollectionParents(e,s).next(o=>N.forEach(o,a=>{const l=function(c,u){return new oc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ht.newInvalidDocument(c)))});let o=Ea();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&$a(c.mutation,l,wn.empty(),_t.now()),Cf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:fi(i.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:_4(i.bundledQuery),readTime:fi(i.readTime)}}(n)),N.resolve()}}/**
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
 */class I4{constructor(){this.overlays=new Et(Z.comparator),this.ts=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const i=or();return N.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),N.resolve()}getOverlaysForCollection(e,n,i){const s=or(),r=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=or(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=or(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Y3(n,i));let r=this.ts.get(n);r===void 0&&(r=be(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.es=new bt(St.ns),this.ss=new bt(St.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new St(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new St(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new Z(new Ye([])),i=new St(n,e),s=new St(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new Z(new Ye([])),i=new St(n,e),s=new St(n,e+1);let r=be();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new St(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return Z.comparator(e.key,n.key)||Pe(e.ds,n.ds)}static rs(e,n){return Pe(e.ds,n.ds)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new bt(St.ns)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G3(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new St(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new St(n,0),s=new St(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new bt(Pe);return n.forEach(s=>{const r=new St(s,0),o=new St(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),N.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Z.isDocumentKey(r)||(r=r.child(""));const o=new St(new Z(r),0);let a=new bt(Pe);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),N.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Je(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return N.forEach(n.mutations,s=>{const r=new St(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new St(n,0),s=this._s.firstAfterOrEqual(i);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.Ts=e,this.docs=new Et(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return N.resolve(i?i.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let i=ji();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ht.newInvalidDocument(s))}),N.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=ji();const o=n.path,a=new Z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||g3(p3(u),i)<=0||(s.has(u.key)||Cf(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,n,i,s){oe()}Es(e,n){return N.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new C4(this)}getSize(e){return N.resolve(this.size)}}class C4 extends b4{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),N.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.persistence=e,this.As=new Jo(n=>h_(n),f_),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Rs=0,this.vs=new __,this.targetCount=0,this.bs=Ao.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),N.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Sn(n),N.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(r).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return N.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),N.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),N.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return N.resolve(i)}containsKey(e,n){return N.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new c_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new k4(this),this.indexManager=new y4,this.remoteDocumentCache=function(i){return new S4(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new m4(n),this.xs=new T4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new x4(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){Q("MemoryPersistence","Starting transaction:",e);const s=new R4(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return N.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class R4 extends _3{constructor(e){super(),this.currentSequenceNumber=e}}class y_{constructor(e){this.persistence=e,this.$s=new __,this.Ms=null}static Fs(e){return new y_(e)}get Bs(){if(this.Ms)return this.Ms;throw oe()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),N.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),N.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Bs,i=>{const s=Z.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,he.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return N.or([()=>N.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=be(),s=be();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new v_(e,n.fromCache,i,s)}}/**
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
 */class D4{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Lb(n))return N.resolve(null);let i=zi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xp(n,null,"F"),i=zi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=be(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Xp(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return Lb(n)||s.isEqual(he.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(Sb()<=Re.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jp(n)),this.Fi(e,o,n,d3(s,-1)))})}$i(e,n){let i=new bt(Hx(e));return n.forEach((s,r)=>{Cf(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Sb()<=Re.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Jp(n)),this.xi.getDocumentsMatchingQuery(e,n,Ss.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new Et(Pe),this.qi=new Jo(r=>h_(r),f_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E4(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function P4(t,e,n,i){return new O4(t,e,n,i)}async function dS(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=be();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function M4(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=N.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const g=l.docVersions.get(d);Je(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=be();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function pS(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function N4(t,e){const n=fe(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Jt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=ji(),c=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(L4(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(he.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function L4(t,e,n){let i=be(),s=be();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=ji();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function F4(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function U4(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,N.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new gr(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function ng(t,e,n){const i=fe(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!rc(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function Wb(t,e,n){const i=fe(t);let s=he.min(),r=be();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=fe(a),h=u.qi.get(c);return h!==void 0?N.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,zi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?r:be())).next(a=>(V4(i,M3(e),a),{documents:a,Wi:r})))}function V4(t,e,n){let i=t.Ui.get(e)||he.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class qb{constructor(){this.activeTargetIds=Gx()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B4{constructor(){this.Br=new qb,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new qb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $4{qr(e){}shutdown(){}}/**
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
 */class Kb{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lc=null;function Sd(){return Lc===null?Lc=268435456+Math.round(2147483648*Math.random()):Lc++,"0x"+Lc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class H4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Sd(),a=this.ao(e,n);Q("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(Q("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw lh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=z4[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Sd();return new Promise((o,a)=>{const l=new i3;l.setWithCredentials(!0),l.listenOnce(e3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Id.NO_ERROR:const u=l.getResponseJson();Q(Vt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Id.TIMEOUT:Q(Vt,`RPC '${e}' ${r} timed out`),a(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case Id.HTTP_ERROR:const h=l.getStatus();if(Q(Vt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(m)>=0?m:D.UNKNOWN}(d.status);a(new q(p,d.message))}else a(new q(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(D.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Q(Vt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);Q(Vt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Sd(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JF(),a=ZF(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new n3({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");Q(Vt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new j4({Wr:g=>{f?Q(Vt,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(h||(Q(Vt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),Q(Vt,`RPC '${e}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,v=>{try{_(v)}catch(b){setTimeout(()=>{throw b},0)}})};return p(u,Oc.EventType.OPEN,()=>{f||Q(Vt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Oc.EventType.CLOSE,()=>{f||(f=!0,Q(Vt,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Oc.EventType.ERROR,g=>{f||(f=!0,lh(Vt,`RPC '${e}' stream ${s} transport errored:`,g),d.so(new q(D.UNAVAILABLE,"The operation could not be completed")))}),p(u,Oc.EventType.MESSAGE,g=>{var m;if(!f){const _=g.data[0];Je(!!_);const v=_,b=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(b){Q(Vt,`RPC '${e}' stream ${s} received error:`,b);const T=b.status;let E=function(C){const S=pt[C];if(S!==void 0)return sS(S)}(T),A=b.message;E===void 0&&(E=D.INTERNAL,A="Unknown error status: "+T+" with message "+b.message),f=!0,d.so(new q(E,A)),u.close()}else Q(Vt,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,t3.STAT_EVENT,g=>{g.stat===Ib.PROXY?Q(Vt,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===Ib.NOPROXY&&Q(Vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){return new n4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new gS(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===D.RESOURCE_EXHAUSTED?($i(n.toString()),$i("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new q(D.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W4 extends mS{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=r4(this.serializer,e),i=function(s){if(!("targetChange"in s))return he.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?he.min():r.readTime?fi(r.readTime):he.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=tg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=Yp(a)?{documents:l4(s,a)}:{query:c4(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=aS(s,r.resumeToken):r.snapshotVersion.compareTo(he.min())>0&&(o.readTime=dh(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=h4(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=tg(this.serializer),n.removeTarget=e,this.Fo(n)}}class q4 extends mS{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=a4(e.writeResults,e.commitTime),i=fi(e.commitTime);return this.listener.Zo(i,n)}return Je(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=tg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>o4(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(D.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(D.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class G4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?($i(n),this.ru=!1):Q("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{Ur(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=fe(a);l.du.add(4),await cc(l),l.mu.set("Unknown"),l.du.delete(4),await Of(l)}(this))})}),this.mu=new G4(i,s)}}async function Of(t){if(Ur(t))for(const e of t.wu)await e(!0)}async function cc(t){for(const e of t.wu)await e(!1)}function _S(t,e){const n=fe(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),E_(n)?w_(n):Zo(n).No()&&b_(n,e))}function yS(t,e){const n=fe(t),i=Zo(n);n.fu.delete(e),i.No()&&vS(n,e),n.fu.size===0&&(i.No()?i.$o():Ur(n)&&n.mu.set("Unknown"))}function b_(t,e){t.gu.Ot(e.targetId),Zo(t).jo(e)}function vS(t,e){t.gu.Ot(e),Zo(t).Wo(e)}function w_(t){t.gu=new J3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Zo(t).start(),t.mu.ou()}function E_(t){return Ur(t)&&!Zo(t).xo()&&t.fu.size>0}function Ur(t){return fe(t).du.size===0}function bS(t){t.gu=void 0}async function Q4(t){t.fu.forEach((e,n)=>{b_(t,e)})}async function X4(t,e){bS(t),E_(t)?(t.mu.au(e),w_(t)):t.mu.set("Unknown")}async function J4(t,e,n){if(t.mu.set("Online"),e instanceof oS&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ph(t,i)}else if(e instanceof bu?t.gu.Kt(e):e instanceof rS?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(he.min()))try{const i=await pS(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(Jt.EMPTY_BYTE_STRING,l.snapshotVersion)),vS(s,a);const c=new gr(l.target,a,1,l.sequenceNumber);b_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await ph(t,i)}}async function ph(t,e,n){if(!rc(e))throw e;t.du.add(1),await cc(t),t.mu.set("Offline"),n||(n=()=>pS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Of(t)})}function wS(t,e){return e().catch(n=>ph(t,n,e))}async function Pf(t){const e=fe(t),n=ks(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Z4(e);)try{const s=await F4(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,e5(e,s)}catch(s){await ph(e,s)}ES(e)&&TS(e)}function Z4(t){return Ur(t)&&t.lu.length<10}function e5(t,e){t.lu.push(e);const n=ks(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function ES(t){return Ur(t)&&!ks(t).xo()&&t.lu.length>0}function TS(t){ks(t).start()}async function t5(t){ks(t).tu()}async function n5(t){const e=ks(t);for(const n of t.lu)e.Yo(n.mutations)}async function i5(t,e,n){const i=t.lu.shift(),s=p_.from(i,e,n);await wS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pf(t)}async function s5(t,e){e&&ks(t).Jo&&await async function(n,i){if(s=i.code,X3(s)&&s!==D.ABORTED){const r=n.lu.shift();ks(n).Oo(),await wS(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Pf(n)}var s}(t,e),ES(t)&&TS(t)}async function Gb(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=Ur(n);n.du.add(3),await cc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Of(n)}async function r5(t,e){const n=fe(t);e?(n.du.delete(2),await Of(n)):e||(n.du.add(2),await cc(n),n.mu.set("Unknown"))}function Zo(t){return t.yu||(t.yu=function(e,n,i){const s=fe(e);return s.nu(),new W4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:Q4.bind(null,t),Zr:X4.bind(null,t),zo:J4.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),E_(t)?w_(t):t.mu.set("Unknown")):(await t.yu.stop(),bS(t))})),t.yu}function ks(t){return t.pu||(t.pu=function(e,n,i){const s=fe(e);return s.nu(),new q4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:t5.bind(null,t),Zr:s5.bind(null,t),Xo:n5.bind(null,t),Zo:i5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Pf(t)):(await t.pu.stop(),t.lu.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new T_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(t,e){if($i("AsyncQueue",`${e}: ${t}`),rc(t))return new q(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||Z.comparator(n.key,i.key):(n,i)=>Z.comparator(n.key,i.key),this.keyedMap=Ea(),this.sortedSet=new Et(this.comparator)}static emptySet(e){return new uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new uo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.Iu=new Et(Z.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):oe():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ro{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,uo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(){this.Eu=void 0,this.listeners=[]}}class a5{constructor(){this.queries=new Jo(e=>jx(e),Sf),this.onlineState="Unknown",this.Au=new Set}}async function x_(t,e){const n=fe(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new o5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=I_(o,`Initialization of query '${Jp(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&C_(n)}async function S_(t,e){const n=fe(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function l5(t,e){const n=fe(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&C_(n)}function c5(t,e,n){const i=fe(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function C_(t){t.Au.forEach(e=>{e.next()})}class k_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ro(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.key=e}}class xS{constructor(e){this.key=e}}class u5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=be(),this.mutatedKeys=be(),this.Ku=Hx(e),this.Gu=new uo(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Yb,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Cf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(i.track({type:3,doc:d}),m=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),m=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),m=!0):f&&!d&&(i.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Ro(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Yb,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=be(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new xS(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new IS(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=be();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ro.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class h5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class f5{constructor(e){this.key=e,this.ec=!1}}class d5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Jo(a=>jx(a),Sf),this.ic=new Map,this.rc=new Set,this.oc=new Et(Z.comparator),this.uc=new Map,this.cc=new __,this.ac={},this.hc=new Map,this.lc=Ao.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function p5(t,e){const n=I5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await U4(n.localStore,zi(e));n.isPrimaryClient&&_S(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await g5(n,e,i,a==="current",o.resumeToken)}return s}async function g5(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,g,m,_){let v=g.view.zu(m);v.Mi&&(v=await Wb(p.localStore,g.query,!1).then(({documents:E})=>g.view.zu(E,v)));const b=_&&_.targetChanges.get(g.targetId),T=g.view.applyChanges(v,p.isPrimaryClient,b);return Xb(p,g.targetId,T.Yu),T.snapshot}(t,h,f,d);const r=await Wb(t.localStore,e,!0),o=new u5(e,r.Wi),a=o.zu(r.documents),l=lc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Xb(t,n,c.Yu);const u=new h5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function m5(t,e){const n=fe(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Sf(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ng(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),yS(n.remoteStore,i.targetId),ig(n,i.targetId)}).catch(sc)):(ig(n,i.targetId),await ng(n.localStore,i.targetId,!0))}async function _5(t,e,n){const i=x5(t);try{const s=await function(r,o){const a=fe(r),l=_t.now(),c=o.reduce((f,d)=>f.add(d.key),be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ji(),p=be();return a.Ki.getEntries(f,c).next(g=>{d=g,d.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{u=g;const m=[];for(const _ of o){const v=q3(_,u.get(_.key).overlayedDocument);v!=null&&m.push(new Us(_.key,v,Mx(v.value.mapValue),hi.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:qx(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new Et(Pe)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await uc(i,s.changes),await Pf(i.remoteStore)}catch(s){const r=I_(s,"Failed to persist write");n.reject(r)}}async function SS(t,e){const n=fe(t);try{const i=await N4(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(Je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?Je(o.ec):s.removedDocuments.size>0&&(Je(o.ec),o.ec=!1))}),await uc(n,i,e)}catch(i){await sc(i)}}function Qb(t,e,n){const i=fe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=fe(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&C_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function y5(t,e,n){const i=fe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new Et(Z.comparator);o=o.insert(r,Ht.newNoDocument(r,he.min()));const a=be().add(r),l=new Rf(he.min(),new Map,new bt(Pe),o,a);await SS(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),A_(i)}else await ng(i.localStore,e,!1).then(()=>ig(i,e,n)).catch(sc)}async function v5(t,e){const n=fe(t),i=e.batch.batchId;try{const s=await M4(n.localStore,e);kS(n,i,null),CS(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await uc(n,s)}catch(s){await sc(s)}}async function b5(t,e,n){const i=fe(t);try{const s=await function(r,o){const a=fe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Je(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);kS(i,e,n),CS(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await uc(i,s)}catch(s){await sc(s)}}function CS(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function kS(t,e,n){const i=fe(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function ig(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||AS(t,i)})}function AS(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(yS(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),A_(t))}function Xb(t,e,n){for(const i of n)i instanceof IS?(t.cc.addReference(i.key,e),w5(t,i)):i instanceof xS?(Q("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||AS(t,i.key)):oe()}function w5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Q("SyncEngine","New document in limbo: "+n),t.rc.add(i),A_(t))}function A_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Z(Ye.fromString(e)),i=t.lc.next();t.uc.set(i,new f5(n)),t.oc=t.oc.insert(n,i),_S(t.remoteStore,new gr(zi(xf(n.path)),i,2,c_.ct))}}async function uc(t,e,n){const i=fe(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=v_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=fe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(l,h=>N.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>N.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!rc(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function E5(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const i=await dS(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(D.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await uc(n,i.Qi)}}function T5(t,e){const n=fe(t),i=n.uc.get(e);if(i&&i.ec)return be().add(i.key);{let s=be();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function I5(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=SS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y5.bind(null,e),e.nc.zo=l5.bind(null,e.eventManager),e.nc.wc=c5.bind(null,e.eventManager),e}function x5(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b5.bind(null,e),e}class Jb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Df(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P4(this.persistence,new D4,e.initialUser,this.serializer)}createPersistence(e){return new A4(y_.Fs,this.serializer)}createSharedClientState(e){return new B4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=E5.bind(null,this.syncEngine),await r5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a5}createDatastore(e){const n=Df(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new H4(s));var s;return function(r,o,a,l){return new K4(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Qb(this.syncEngine,a,0),o=Kb.D()?new Kb:new $4,new Y4(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new d5(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);Q("RemoteStore","RemoteStore shutting down."),n.du.add(5),await cc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):$i("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=Rx.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=I_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function kd(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await dS(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A5(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Gb(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Gb(e.remoteStore,r)),t._onlineComponents=e}function k5(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function A5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await kd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!k5(n))throw n;lh("Error using user provided cache. Falling back to memory cache: "+n),await kd(t,new Jb)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await kd(t,new Jb);return t._offlineComponents}async function RS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Zb(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Zb(t,new S5))),t._onlineComponents}function R5(t){return RS(t).then(e=>e.syncEngine)}async function gh(t){const e=await RS(t),n=e.eventManager;return n.onListen=p5.bind(null,e.syncEngine),n.onUnlisten=m5.bind(null,e.syncEngine),n}function D5(t,e,n={}){const i=new Fi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new R_({next:h=>{r.enqueueAndForget(()=>S_(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new k_(xf(o.path),c,{includeMetadataChanges:!0,xu:!0});return x_(s,u)}(await gh(t),t.asyncQueue,e,n,i)),i.promise}function O5(t,e,n={}){const i=new Fi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new R_({next:h=>{r.enqueueAndForget(()=>S_(s,u)),h.fromCache&&a.source==="server"?l.reject(new q(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new k_(o,c,{includeMetadataChanges:!0,xu:!0});return x_(s,u)}(await gh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t,e,n){if(!n)throw new q(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function P5(t,e,n,i){if(e===!0&&i===!0)throw new q(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t0(t){if(!Z.isDocumentKey(t))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n0(t){if(Z.isDocumentKey(t))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(t);throw new q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,P5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s3;switch(n.type){case"firstParty":return new l3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=e0.get(e);n&&(Q("ComponentProvider","Removing Datastore"),e0.delete(e),n.terminate())}(this),Promise.resolve()}}function M5(t,e,n,i={}){var s;const r=(t=Dn(t,Nf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&lh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=$t.MOCK_USER;else{o=yD(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $t(l)}t._authCredentials=new r3(new Ax(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Vr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class ys extends Vr{constructor(e,n,i){super(e,n,xf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new Z(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function Yn(t,e,...n){if(t=Nt(t),DS("collection","path",e),t instanceof Nf){const i=Ye.fromString(e,...n);return n0(i),new ys(t,null,i)}{if(!(t instanceof Qt||t instanceof ys))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ye.fromString(e,...n));return n0(i),new ys(t.firestore,null,i)}}function Pt(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=Rx.A()),DS("doc","path",e),t instanceof Nf){const i=Ye.fromString(e,...n);return t0(i),new Qt(t,null,new Z(i))}{if(!(t instanceof Qt||t instanceof ys))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ye.fromString(e,...n));return t0(i),new Qt(t.firestore,t instanceof ys?t.converter:null,new Z(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new gS(this,"async_queue_retry"),this.qc=()=>{const n=Cd();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Cd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Fi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!rc(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw $i("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=T_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&oe()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function s0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Sr extends Nf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new N5,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PS(this),this._firestoreClient.terminate()}}function OS(t,e){const n=typeof t=="object"?t:lm(),i=typeof t=="string"?t:e||"(default)",s=am(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=mD("firestore");r&&M5(s,...r)}return s}function Lf(t){return t._firestoreClient||PS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function PS(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new w3(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new C5(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(Jt.fromBase64String(e))}catch(n){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Do(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5=/^__.*__$/;class F5{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Us(e,this.data,this.fieldMask,n,this.fieldTransforms):new ac(e,this.data,n,this.fieldTransforms)}}class MS{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class O_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new O_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return mh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(NS(this.Yc)&&L5.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class U5{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Df(e)}ua(e,n,i,s=!1){return new O_({Yc:e,methodName:n,oa:i,path:qt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function P_(t){const e=t._freezeSettings(),n=Df(t._databaseId);return new U5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V5(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);M_("Data must be an object, but it was:",o,i);const a=LS(i,o);let l,c;if(r.merge)l=new wn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=sg(e,h,n);if(!o.contains(f))throw new q(D.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);US(u,f)||u.push(f)}l=new wn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new F5(new cn(a),l,c)}class Vf extends D_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vf}}function B5(t,e,n,i){const s=t.ua(1,e,n);M_("Data must be an object, but it was:",s,i);const r=[],o=cn.empty();Fr(i,(l,c)=>{const u=N_(e,l,n);c=Nt(c);const h=s.na(u);if(c instanceof Vf)r.push(u);else{const f=hc(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new wn(r);return new MS(o,a,s.fieldTransforms)}function $5(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[sg(e,i,n)],l=[s];if(r.length%2!=0)throw new q(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(sg(e,r[f])),l.push(r[f+1]);const c=[],u=cn.empty();for(let f=a.length-1;f>=0;--f)if(!US(c,a[f])){const d=a[f];let p=l[f];p=Nt(p);const g=o.na(d);if(p instanceof Vf)c.push(d);else{const m=hc(p,g);m!=null&&(c.push(d),u.set(d,m))}}const h=new wn(c);return new MS(u,h,o.fieldTransforms)}function z5(t,e,n,i=!1){return hc(n,t.ua(i?4:3,e))}function hc(t,e){if(FS(t=Nt(t)))return M_("Unsupported field value:",e,t),LS(t,e);if(t instanceof D_)return function(n,i){if(!NS(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=hc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return B3(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_t.fromDate(n);return{timestampValue:dh(i.serializer,s)}}if(n instanceof _t){const s=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dh(i.serializer,s)}}if(n instanceof Uf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Do)return{bytesValue:aS(i.serializer,n._byteString)};if(n instanceof Qt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:m_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Mf(n)}`)}(t,e)}function LS(t,e){const n={};return Dx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(i,s)=>{const r=hc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function FS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof Uf||t instanceof Do||t instanceof Qt||t instanceof D_)}function M_(t,e,n){if(!FS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Mf(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function sg(t,e,n){if((e=Nt(e))instanceof Ff)return e._internalPath;if(typeof e=="string")return N_(t,e);throw mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const j5=new RegExp("[~\\*/\\[\\]]");function N_(t,e,n){if(e.search(j5)>=0)throw mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ff(...e.split("."))._internalPath}catch{throw mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new q(D.INVALID_ARGUMENT,a+t+l)}function US(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(L_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H5 extends VS{data(){return super.data()}}function L_(t,e){return typeof e=="string"?N_(t,e):e instanceof Ff?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class F_{}class W5 extends F_{}function Ad(t,e,...n){let i=[];e instanceof F_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof U_).length,o=s.filter(a=>a instanceof Bf).length;if(r>1||r>0&&o>0)throw new q(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Bf extends W5{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Bf(e,n,i)}_apply(e){const n=this._parse(e);return $S(e._query,n),new Vr(e.firestore,e.converter,Qp(e._query,n))}_parse(e){const n=P_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new q(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){o0(u,c);const f=[];for(const d of u)f.push(r0(a,s,d));h={arrayValue:{values:f}}}else h=r0(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||o0(u,c),h=z5(o,r,u,c==="in"||c==="not-in");return mt.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Rd(t,e,n){const i=e,s=L_("where",t);return Bf._create(s,i,n)}class U_ extends F_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new U_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)$S(r,a),r=Qp(r,a)}(e._query,n),new Vr(e.firestore,e.converter,Qp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function r0(t,e,n){if(typeof(n=Nt(n))=="string"){if(n==="")throw new q(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zx(e)&&n.indexOf("/")!==-1)throw new q(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Ye.fromString(n));if(!Z.isDocumentKey(i))throw new q(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Rb(t,new Z(i))}if(n instanceof Qt)return Rb(t,n._key);throw new q(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mf(n)}.`)}function o0(t,e){if(!Array.isArray(t)||t.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $S(t,e){if(e.isInequality()){const i=d_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new q(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=$x(t);r!==null&&q5(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function q5(t,e,n){if(!n.isEqual(e))throw new q(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class K5{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(So(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const i={};return Fr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Uf(gt(e.latitude),gt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Px(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ye.fromString(e);Je(fS(i));const s=new bl(i.get(1),i.get(3)),r=new Z(i.popFirst(5));return s.isEqual(n)||$i(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G5(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zS extends VS{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(L_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class wu extends zS{data(e={}){return super.data(e)}}class jS{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ta(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new wu(this._firestore,this._userDataWriter,i.key,i,new Ta(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new wu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ta(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new wu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ta(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Y5(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){t=Dn(t,Qt);const e=Dn(t.firestore,Sr);return D5(Lf(e),t._key).then(n=>qS(e,t,n))}class V_ extends K5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function Q5(t){t=Dn(t,Vr);const e=Dn(t.firestore,Sr),n=Lf(e),i=new V_(e);return BS(t._query),O5(n,t._query).then(s=>new jS(e,i,t,s))}function Eu(t,e,n){t=Dn(t,Qt);const i=Dn(t.firestore,Sr),s=G5(t.converter,e,n);return WS(i,[V5(P_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,hi.none())])}function ha(t,e,n,...i){t=Dn(t,Qt);const s=Dn(t.firestore,Sr),r=P_(s);let o;return o=typeof(e=Nt(e))=="string"||e instanceof Ff?$5(r,"updateDoc",t._key,e,n,i):B5(r,"updateDoc",t._key,e),WS(s,[o.toMutation(t._key,hi.exists(!0))])}function B_(t,...e){var n,i,s;t=Nt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||s0(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(s0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Qt)c=Dn(t.firestore,Sr),u=xf(t._key.path),l={next:h=>{e[o]&&e[o](qS(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dn(t,Vr);c=Dn(h.firestore,Sr),u=h._query;const f=new V_(c);l={next:d=>{e[o]&&e[o](new jS(c,f,h,d))},error:e[o+1],complete:e[o+2]},BS(t._query)}return function(h,f,d,p){const g=new R_(p),m=new k_(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>x_(await gh(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>S_(await gh(h),m))}}(Lf(c),u,a,l)}function WS(t,e){return function(n,i){const s=new Fi;return n.asyncQueue.enqueueAndForget(async()=>_5(await R5(n),i,s)),s.promise}(Lf(t),e)}function qS(t,e,n){const i=n.docs.get(e._key),s=new V_(t);return new zS(t,s,e._key,i,new Ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Xo=n})(Ns),pi(new Kn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Sr(new o3(n.getProvider("auth-internal")),new u3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),En(xb,"3.10.1",t),En(xb,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebasestorage.googleapis.com",X5="storageBucket",J5=2*60*1e3,Z5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends vi{constructor(e,n,i=0){super(Dd(e),`Firebase Storage: ${n} (${Dd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yi;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yi||(yi={}));function Dd(t){return"storage/"+t}function e6(){const t="An unknown error occurred, please check the error payload for server response.";return new bi(yi.UNKNOWN,t)}function t6(){return new bi(yi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n6(){return new bi(yi.CANCELED,"User canceled the upload/download.")}function i6(t){return new bi(yi.INVALID_URL,"Invalid URL '"+t+"'.")}function s6(t){return new bi(yi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function a0(t){return new bi(yi.INVALID_ARGUMENT,t)}function GS(){return new bi(yi.APP_DELETED,"The Firebase app was deleted.")}function r6(t){return new bi(yi.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=zn.makeFromUrl(e,n)}catch{return new zn(e,"")}if(i.path==="")return i;throw s6(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},g=n===KS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<b.length;T++){const E=b[T],A=E.regex.exec(e);if(A){const C=A[E.indices.bucket];let S=A[E.indices.path];S||(S=""),i=new zn(C,S),E.postModify(i);break}}if(i==null)throw i6(e);return i}}class o6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(d,l())},m)}function f(){r&&clearTimeout(r)}function d(m,..._){if(c){f();return}if(m){f(),u.call(null,m,..._);return}if(l()||o){f(),u.call(null,m,..._);return}i<64&&(i*=2);let b;a===1?(a=2,b=0):b=(i+Math.random())*1e3,h(b)}let p=!1;function g(m){p||(p=!0,f(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function l6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(t){return t!==void 0}function l0(t,e,n,i){if(i<e)throw a0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw a0(`Invalid value for '${t}'. Expected ${n} or less.`)}function u6(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _h;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_h||(_h={}));/**
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
 */function h6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Fc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===_h.NO_ERROR,l=r.getStatus();if(!a||h6(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===_h.ABORT;i(!1,new Fc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Fc(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c6(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=e6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?GS():n6();o(l)}else{const l=t6();o(l)}};this.canceled_?n(!1,new Fc(!1,null,!0)):this.backoffId_=a6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function d6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function g6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function m6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _6(t,e,n,i,s,r,o=!0){const a=u6(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return g6(c,e),d6(c,n),p6(c,r),m6(c,i),new f6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class yh{constructor(e,n){this._service=e,n instanceof zn?this._location=n:this._location=zn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yh(e,n)}get root(){const e=new zn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v6(this._location.path)}get storage(){return this._service}get parent(){const e=y6(this._location.path);if(e===null)return null;const n=new zn(this._location.bucket,e);return new yh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw r6(e)}}function c0(t,e){const n=e==null?void 0:e[X5];return n==null?null:zn.makeFromBucketSpec(n,t)}class b6{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=KS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J5,this._maxUploadRetryTime=Z5,this._requests=new Set,s!=null?this._bucket=zn.makeFromBucketSpec(s,this._host):this._bucket=c0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zn.makeFromBucketSpec(this._url,e):this._bucket=c0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new o6(GS());{const o=_6(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const u0="@firebase/storage",h0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6="storage";function E6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new b6(n,i,s,e,Ns)}function T6(){pi(new Kn(w6,E6,"PUBLIC").setMultipleInstances(!0)),En(u0,h0,""),En(u0,h0,"esm2017")}T6();const Od=new WeakMap;function YS(t,e){return Od.has(e)||Od.set(e,t||{f:{},r:{},s:{},u:{}}),Od.get(e)}function I6(t,e,n,i){if(!t)return n;const[s,r]=QS(t);if(!s)return n;const o=YS(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function x6(t,e,n,i){if(!t)return;const[s,r]=QS(t);if(!s)return;const o=YS(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(oi),a}function QS(t){return fM(t)||dM(t)?["f",t.path]:pM(t)?["r",t.toString()]:gM(t)?["s",t.toString()]:[]}const Pd=new WeakMap;function S6(t,e,n){const i=_m();Pd.has(i)||Pd.set(i,new Map);const s=Pd.get(i),r=x6(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):oi}const C6={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function rg(t,e,n,i){if(!hM(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof _t||p instanceof Uf)h[d]=p;else if(vm(p)){const g=c+d;h[d]=g in n?l[d]:p.path,f[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[d][g]=r[m.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else Pr(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const $_={reset:!1,wait:!0,maxRefDepth:2,converter:C6,snapshotOptions:{serverTimestamps:"estimate"}};function vh(t){for(const e in t)t[e].unsub()}function og(t,e,n,i,s,r,o,a,l){const[c,u]=rg(i.data(t.snapshotOptions),ym(e,n),s,t);r.set(e,n,c),ag(t,e,n,s,u,r,o,a,l)}function k6({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=oi;return a.once?HS(t).then(u=>{u.exists()?og(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=B_(t,u=>{u.exists()?og(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),vh(l)}}function ag(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(g=>c.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(g){g in d&&++h>=f&&a(n)}c.forEach(g=>{const m=i[g],_=s[g],v=`${n}.${g}`;if(d[v]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>ym(e,v),unsub:k6({ref:_,target:e,path:v,depth:o,ops:r,resolve:p.bind(null,v),reject:l},t),path:_.path}})}function A6(t,e,n,i,s,r){const o=Object.assign({},$_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=ft(c?[]:t.value);c||n.set(t,h,[]);const d=i;let p,g=oi;const m=[],_={added:({newIndex:b,doc:T})=>{m.splice(b,0,Object.create(null));const E=m[b],[A,C]=rg(T.data(l),void 0,E,o);n.add(x(f),b,A),ag(o,f,`${h}.${b}`,E,C,n,0,i.bind(null,T),s)},modified:({oldIndex:b,newIndex:T,doc:E})=>{const A=x(f),C=m[b],S=A[b],[B,X]=rg(E.data(l),S,C,o);m.splice(T,0,C),n.remove(A,b),n.add(A,T,B),ag(o,f,`${h}.${T}`,C,X,n,0,i,s)},removed:({oldIndex:b})=>{const T=x(f);n.remove(T,b),vh(m.splice(b,1)[0])}};function v(b){const T=b.docChanges(a);if(!p&&T.length){p=!0;let E=0;const A=T.length,C=Object.create(null);for(let S=0;S<A;S++)C[T[S].doc.id]=!0;i=S=>{S&&S.id in C&&++E>=A&&(c&&(n.set(t,h,x(f)),f=t),d(x(f)),i=oi)}}T.forEach(E=>{_[E.type](E)}),T.length||(c&&(n.set(t,h,x(f)),f=t),i(x(f)))}return u?Q5(e).then(v).catch(s):g=B_(e,v,s),b=>{if(g(),b){const T=typeof b=="function"?b():[];n.set(t,h,T)}m.forEach(vh)}}function R6(t,e,n,i,s,r){const o=Object.assign({},$_,r),a="value",l=Object.create(null);i=mM(i,()=>ym(t,a));let c=oi;function u(h){h.exists()?og(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?HS(e).then(u).catch(s):c=B_(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}vh(l)}}function D6(t,e){let n=oi;const i=Object.assign({},$_,e),s=x(t),r=i.target||ft();_M()&&(i.once=!0);const o=I6(s,i.ssrKey,r.value,_m());r.value=o;let l=!(gT(s)?(o||[]).length>0:o!==void 0);const c=ft(!1),u=ft(),h=zh(),f=Bg();let d=oi;function p(){let _=x(t);const v=new Promise((b,T)=>{if(n(i.reset),!_)return n=oi,b(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(vm(_)?R6:A6)(r,_,O6,b,T,i)}).catch(b=>(h.value===v&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===v&&(c.value=!1)});h.value=v}let g=oi;rt(t)&&(g=ps(t,p)),p(),s&&(d=S6(h.value,s,i.ssrKey)),Fl()&&Y1(()=>h.value),f&&E1(m);function m(_=i.reset){g(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>m}})}const O6={set:(t,e,n)=>cM(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function yt(t,e){return D6(t,e)}function Vs(t){return OS(_m(t))}function P6(t,{firebaseApp:e,modules:n=[]}){t.provide(pT,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qr=typeof window<"u";function M6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Md(t,e){const n={};for(const i in e){const s=e[i];n[i]=Qn(s)?s.map(t):t(s)}return n}const za=()=>{},Qn=Array.isArray,N6=/\/$/,L6=t=>t.replace(N6,"");function Nd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=B6(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function F6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function f0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U6(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Oo(e.matched[i],n.matched[s])&&XS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Oo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function XS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!V6(t[n],e[n]))return!1;return!0}function V6(t,e){return Qn(t)?d0(t,e):Qn(e)?d0(e,t):t===e}function d0(t,e){return Qn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function B6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Il;(function(t){t.pop="pop",t.push="push"})(Il||(Il={}));var ja;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ja||(ja={}));function $6(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),L6(t)}const z6=/^[^#]+#/;function j6(t,e){return t.replace(z6,"#")+e}function H6(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const $f=()=>({left:window.pageXOffset,top:window.pageYOffset});function W6(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=H6(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function p0(t,e){return(history.state?history.state.position-e:-1)+t}const lg=new Map;function q6(t,e){lg.set(t,e)}function K6(t){const e=lg.get(t);return lg.delete(t),e}let G6=()=>location.protocol+"//"+location.host;function JS(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),f0(l,"")}return f0(n,t)+i+s}function Y6(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=JS(t,location),p=n.value,g=e.value;let m=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}m=g?f.position-g.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:m,type:Il.pop,direction:m?m>0?ja.forward:ja.back:ja.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Le({},f.state,{scroll:$f()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function g0(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?$f():null}}function Q6(t){const{history:e,location:n}=window,i={value:JS(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:G6()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Le({},e.state,g0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Le({},s.value,e.state,{forward:l,scroll:$f()});r(u.current,u,!0);const h=Le({},g0(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function X6(t){t=$6(t);const e=Q6(t),n=Y6(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Le({location:"",base:t,go:i,createHref:j6.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function J6(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),X6(t)}function Z6(t){return typeof t=="string"||t&&typeof t=="object"}function ZS(t){return typeof t=="string"||typeof t=="symbol"}const Ji={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eC=Symbol("");var m0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(m0||(m0={}));function Po(t,e){return Le(new Error,{type:t,[eC]:!0},e)}function Ei(t,e){return t instanceof Error&&eC in t&&(e==null||!!(t.type&e))}const _0="[^/]+?",eU={sensitive:!1,strict:!1,start:!0,end:!0},tU=/[.+*?^${}()[\]/\\]/g;function nU(t,e){const n=Le({},eU,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(tU,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=f;r.push({name:p,repeatable:g,optional:m});const v=_||_0;if(v!==_0){d+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+T.message)}}let b=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),g&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:m}=d,_=p in c?c[p]:"";if(Qn(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Qn(_)?_.join("/"):_;if(!v)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function iU(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sU(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=iU(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(y0(i))return 1;if(y0(s))return-1}return s.length-i.length}function y0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rU={type:0,value:""},oU=/[a-zA-Z0-9_]/;function aU(t){if(!t)return[[]];if(t==="/")return[[rU]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:oU.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function lU(t,e,n){const i=nU(aU(t.path),n),s=Le(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cU(t,e){const n=[],i=new Map;e=w0({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=uU(u);p.aliasOf=f&&f.record;const g=w0(e,u),m=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of b)m.push(Le({},p,{components:f?f.record.components:p.components,path:T,aliasOf:f?f.record:p}))}let _,v;for(const b of m){const{path:T}=b;if(h&&T[0]!=="/"){const E=h.record.path,A=E[E.length-1]==="/"?"":"/";b.path=h.record.path+(T&&A+T)}if(_=lU(b,h,g),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!b0(_)&&o(u.name)),p.children){const E=p.children;for(let A=0;A<E.length;A++)r(E[A],_,f&&f.children[A])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:za}function o(u){if(ZS(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&sU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!tC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!b0(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Po(1,{location:u});g=f.record.name,d=Le(v0(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&v0(u.params,f.keys.map(v=>v.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(v=>v.re.test(p)),f&&(d=f.parse(p),g=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw Po(1,{location:u,currentLocation:h});g=f.record.name,d=Le({},h.params,u.params),p=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:d,matched:m,meta:fU(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function v0(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function uU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function b0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fU(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function w0(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function tC(t,e){return e.children.some(n=>n===t||tC(t,n))}const nC=/#/g,dU=/&/g,pU=/\//g,gU=/=/g,mU=/\?/g,iC=/\+/g,_U=/%5B/g,yU=/%5D/g,sC=/%5E/g,vU=/%60/g,rC=/%7B/g,bU=/%7C/g,oC=/%7D/g,wU=/%20/g;function z_(t){return encodeURI(""+t).replace(bU,"|").replace(_U,"[").replace(yU,"]")}function EU(t){return z_(t).replace(rC,"{").replace(oC,"}").replace(sC,"^")}function cg(t){return z_(t).replace(iC,"%2B").replace(wU,"+").replace(nC,"%23").replace(dU,"%26").replace(vU,"`").replace(rC,"{").replace(oC,"}").replace(sC,"^")}function TU(t){return cg(t).replace(gU,"%3D")}function IU(t){return z_(t).replace(nC,"%23").replace(mU,"%3F")}function xU(t){return t==null?"":IU(t).replace(pU,"%2F")}function bh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SU(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(iC," "),o=r.indexOf("="),a=bh(o<0?r:r.slice(0,o)),l=o<0?null:bh(r.slice(o+1));if(a in e){let c=e[a];Qn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function E0(t){let e="";for(let n in t){const i=t[n];if(n=TU(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qn(i)?i.map(r=>r&&cg(r)):[i&&cg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function CU(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Qn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const kU=Symbol(""),T0=Symbol(""),zf=Symbol(""),j_=Symbol(""),ug=Symbol("");function fa(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function is(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Po(4,{from:n,to:e})):h instanceof Error?a(h):Z6(h)?a(Po(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ld(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(AU(a)){const c=(a.__vccOpts||a)[e];c&&s.push(is(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=M6(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&is(f,n,i,r,o)()}))}}return s}function AU(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function I0(t){const e=dn(zf),n=dn(j_),i=Te(()=>e.resolve(x(t.to))),s=Te(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Oo.bind(null,u));if(f>-1)return f;const d=x0(l[c-2]);return c>1&&x0(u)===d&&h[h.length-1].path!==d?h.findIndex(Oo.bind(null,l[c-2])):f}),r=Te(()=>s.value>-1&&PU(n.params,i.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&XS(n.params,i.value.params));function a(l={}){return OU(l)?e[x(t.replace)?"replace":"push"](x(t.to)).catch(za):Promise.resolve()}return{route:i,href:Te(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const RU=Or({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:I0,setup(t,{slots:e}){const n=Es(I0(t)),{options:i}=dn(zf),s=Te(()=>({[S0(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[S0(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:zo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),DU=RU;function OU(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PU(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Qn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function x0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const S0=(t,e,n)=>t??e??n,MU=Or({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=dn(ug),s=Te(()=>t.route||i.value),r=dn(T0,0),o=Te(()=>{let c=x(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Te(()=>s.value.matched[o.value]);uu(T0,Te(()=>o.value+1)),uu(kU,a),uu(ug,s);const l=ft();return ps(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Oo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return C0(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=zo(f,Le({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return C0(n.default,{Component:m,route:c})||m}}});function C0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const aC=MU;function NU(t){const e=cU(t.routes,t),n=t.parseQuery||SU,i=t.stringifyQuery||E0,s=t.history,r=fa(),o=fa(),a=fa(),l=zh(Ji);let c=Ji;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Md.bind(null,R=>""+R),h=Md.bind(null,xU),f=Md.bind(null,bh);function d(R,$){let z,J;return ZS(R)?(z=e.getRecordMatcher(R),J=$):J=R,e.addRoute(J,z)}function p(R){const $=e.getRecordMatcher(R);$&&e.removeRoute($)}function g(){return e.getRoutes().map(R=>R.record)}function m(R){return!!e.getRecordMatcher(R)}function _(R,$){if($=Le({},$||l.value),typeof R=="string"){const y=Nd(n,R,$.path),w=e.resolve({path:y.path},$),I=s.createHref(y.fullPath);return Le(y,w,{params:f(w.params),hash:bh(y.hash),redirectedFrom:void 0,href:I})}let z;if("path"in R)z=Le({},R,{path:Nd(n,R.path,$.path).path});else{const y=Le({},R.params);for(const w in y)y[w]==null&&delete y[w];z=Le({},R,{params:h(R.params)}),$.params=h($.params)}const J=e.resolve(z,$),ke=R.hash||"";J.params=u(f(J.params));const it=F6(i,Le({},R,{hash:EU(ke),path:J.path})),_e=s.createHref(it);return Le({fullPath:it,hash:ke,query:i===E0?CU(R.query):R.query||{}},J,{redirectedFrom:void 0,href:_e})}function v(R){return typeof R=="string"?Nd(n,R,l.value.path):Le({},R)}function b(R,$){if(c!==R)return Po(8,{from:$,to:R})}function T(R){return C(R)}function E(R){return T(Le(v(R),{replace:!0}))}function A(R){const $=R.matched[R.matched.length-1];if($&&$.redirect){const{redirect:z}=$;let J=typeof z=="function"?z(R):z;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=v(J):{path:J},J.params={}),Le({query:R.query,hash:R.hash,params:"path"in J?{}:R.params},J)}}function C(R,$){const z=c=_(R),J=l.value,ke=R.state,it=R.force,_e=R.replace===!0,y=A(z);if(y)return C(Le(v(y),{state:typeof y=="object"?Le({},ke,y.state):ke,force:it,replace:_e}),$||z);const w=z;w.redirectedFrom=$;let I;return!it&&U6(i,J,z)&&(I=Po(16,{to:w,from:J}),rn(J,J,!0,!1)),(I?Promise.resolve(I):B(w,J)).catch(k=>Ei(k)?Ei(k,2)?k:Ft(k):ge(k,w,J)).then(k=>{if(k){if(Ei(k,2))return C(Le({replace:_e},v(k.to),{state:typeof k.to=="object"?Le({},ke,k.to.state):ke,force:it}),$||w)}else k=ie(w,J,!0,_e,ke);return X(w,J,k),k})}function S(R,$){const z=b(R,$);return z?Promise.reject(z):Promise.resolve()}function B(R,$){let z;const[J,ke,it]=LU(R,$);z=Ld(J.reverse(),"beforeRouteLeave",R,$);for(const y of J)y.leaveGuards.forEach(w=>{z.push(is(w,R,$))});const _e=S.bind(null,R,$);return z.push(_e),Wr(z).then(()=>{z=[];for(const y of r.list())z.push(is(y,R,$));return z.push(_e),Wr(z)}).then(()=>{z=Ld(ke,"beforeRouteUpdate",R,$);for(const y of ke)y.updateGuards.forEach(w=>{z.push(is(w,R,$))});return z.push(_e),Wr(z)}).then(()=>{z=[];for(const y of R.matched)if(y.beforeEnter&&!$.matched.includes(y))if(Qn(y.beforeEnter))for(const w of y.beforeEnter)z.push(is(w,R,$));else z.push(is(y.beforeEnter,R,$));return z.push(_e),Wr(z)}).then(()=>(R.matched.forEach(y=>y.enterCallbacks={}),z=Ld(it,"beforeRouteEnter",R,$),z.push(_e),Wr(z))).then(()=>{z=[];for(const y of o.list())z.push(is(y,R,$));return z.push(_e),Wr(z)}).catch(y=>Ei(y,8)?y:Promise.reject(y))}function X(R,$,z){for(const J of a.list())J(R,$,z)}function ie(R,$,z,J,ke){const it=b(R,$);if(it)return it;const _e=$===Ji,y=Qr?history.state:{};z&&(J||_e?s.replace(R.fullPath,Le({scroll:_e&&y&&y.scroll},ke)):s.push(R.fullPath,ke)),l.value=R,rn(R,$,z,_e),Ft()}let ue;function nt(){ue||(ue=s.listen((R,$,z)=>{if(!Xn.listening)return;const J=_(R),ke=A(J);if(ke){C(Le(ke,{replace:!0}),J).catch(za);return}c=J;const it=l.value;Qr&&q6(p0(it.fullPath,z.delta),$f()),B(J,it).catch(_e=>Ei(_e,12)?_e:Ei(_e,2)?(C(_e.to,J).then(y=>{Ei(y,20)&&!z.delta&&z.type===Il.pop&&s.go(-1,!1)}).catch(za),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(_e,J,it))).then(_e=>{_e=_e||ie(J,it,!1),_e&&(z.delta&&!Ei(_e,8)?s.go(-z.delta,!1):z.type===Il.pop&&Ei(_e,20)&&s.go(-1,!1)),X(J,it,_e)}).catch(za)}))}let et=fa(),pe=fa(),me;function ge(R,$,z){Ft(R);const J=pe.list();return J.length?J.forEach(ke=>ke(R,$,z)):console.error(R),Promise.reject(R)}function Ce(){return me&&l.value!==Ji?Promise.resolve():new Promise((R,$)=>{et.add([R,$])})}function Ft(R){return me||(me=!R,nt(),et.list().forEach(([$,z])=>R?z(R):$()),et.reset()),R}function rn(R,$,z,J){const{scrollBehavior:ke}=t;if(!Qr||!ke)return Promise.resolve();const it=!z&&K6(p0(R.fullPath,0))||(J||!z)&&history.state&&history.state.scroll||null;return Yg().then(()=>ke(R,$,it)).then(_e=>_e&&W6(_e)).catch(_e=>ge(_e,R,$))}const Ut=R=>s.go(R);let ut;const Sn=new Set,Xn={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:T,replace:E,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Ce,install(R){const $=this;R.component("RouterLink",DU),R.component("RouterView",aC),R.config.globalProperties.$router=$,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>x(l)}),Qr&&!ut&&l.value===Ji&&(ut=!0,T(s.location).catch(ke=>{}));const z={};for(const ke in Ji)z[ke]=Te(()=>l.value[ke]);R.provide(zf,$),R.provide(j_,Es(z)),R.provide(ug,l);const J=R.unmount;Sn.add(R),R.unmount=function(){Sn.delete(R),Sn.size<1&&(c=Ji,ue&&ue(),ue=null,l.value=Ji,ut=!1,me=!1),J()}}};return Xn}function Wr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LU(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Oo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Oo(c,l))||s.push(l))}return[n,i,s]}function fc(){return dn(zf)}function ea(){return dn(j_)}const FU={class:"container"},UU={__name:"App",setup(t){const e=ea();return(n,i)=>{const s=Ts("RouterView");return H(),ne("div",FU,[(H(),nn(s,{key:x(e).fullPath}))])}}},wi=RE({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),VU=OS(wi);Yn(VU,"todos");function k0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k0(Object(n),!0).forEach(function(i){Tt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function wh(t){return wh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wh(t)}function BU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A0(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function $U(t,e,n){return e&&A0(t.prototype,e),n&&A0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H_(t,e){return jU(t)||WU(t,e)||lC(t,e)||KU()}function dc(t){return zU(t)||HU(t)||lC(t)||qU()}function zU(t){if(Array.isArray(t))return hg(t)}function jU(t){if(Array.isArray(t))return t}function HU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function WU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function lC(t,e){if(t){if(typeof t=="string")return hg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hg(t,e)}}function hg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function qU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R0=function(){},W_={},cC={},uC=null,hC={mark:R0,measure:R0};try{typeof window<"u"&&(W_=window),typeof document<"u"&&(cC=document),typeof MutationObserver<"u"&&(uC=MutationObserver),typeof performance<"u"&&(hC=performance)}catch{}var GU=W_.navigator||{},D0=GU.userAgent,O0=D0===void 0?"":D0,As=W_,Xe=cC,P0=uC,Uc=hC;As.document;var Yi=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",fC=~O0.indexOf("MSIE")||~O0.indexOf("Trident/"),Vc,Bc,$c,zc,jc,Hi="___FONT_AWESOME___",fg=16,dC="fa",pC="svg-inline--fa",Cr="data-fa-i2svg",dg="data-fa-pseudo-element",YU="data-fa-pseudo-element-pending",q_="data-prefix",K_="data-icon",M0="fontawesome-i2svg",QU="async",XU=["HTML","HEAD","STYLE","SCRIPT"],gC=function(){try{return!0}catch{return!1}}(),Ge="classic",ot="sharp",G_=[Ge,ot];function pc(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Ge]}})}var xl=pc((Vc={},Tt(Vc,Ge,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Tt(Vc,ot,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Vc)),Sl=pc((Bc={},Tt(Bc,Ge,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Tt(Bc,ot,{solid:"fass",regular:"fasr",light:"fasl"}),Bc)),Cl=pc(($c={},Tt($c,Ge,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Tt($c,ot,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),$c)),JU=pc((zc={},Tt(zc,Ge,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Tt(zc,ot,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),zc)),ZU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,mC="fa-layers-text",eV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tV=pc((jc={},Tt(jc,Ge,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Tt(jc,ot,{900:"fass",400:"fasr",300:"fasl"}),jc)),_C=[1,2,3,4,5,6,7,8,9,10],nV=_C.concat([11,12,13,14,15,16,17,18,19,20]),iV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kl=new Set;Object.keys(Sl[Ge]).map(kl.add.bind(kl));Object.keys(Sl[ot]).map(kl.add.bind(kl));var sV=[].concat(G_,dc(kl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ar.GROUP,ar.SWAP_OPACITY,ar.PRIMARY,ar.SECONDARY]).concat(_C.map(function(t){return"".concat(t,"x")})).concat(nV.map(function(t){return"w-".concat(t)})),Ha=As.FontAwesomeConfig||{};function rV(t){var e=Xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function oV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Xe&&typeof Xe.querySelector=="function"){var aV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];aV.forEach(function(t){var e=H_(t,2),n=e[0],i=e[1],s=oV(rV(n));s!=null&&(Ha[i]=s)})}var yC={styleDefault:"solid",familyDefault:"classic",cssPrefix:dC,replacementClass:pC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ha.familyPrefix&&(Ha.cssPrefix=Ha.familyPrefix);var Mo=W(W({},yC),Ha);Mo.autoReplaceSvg||(Mo.observeMutations=!1);var G={};Object.keys(yC).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Mo[t]=n,Wa.forEach(function(i){return i(G)})},get:function(){return Mo[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Mo.cssPrefix=e,Wa.forEach(function(n){return n(G)})},get:function(){return Mo.cssPrefix}});As.FontAwesomeConfig=G;var Wa=[];function lV(t){return Wa.push(t),function(){Wa.splice(Wa.indexOf(t),1)}}var Zi=fg,li={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cV(t){if(!(!t||!Yi)){var e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Xe.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Xe.head.insertBefore(e,i),t}}var uV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Al(){for(var t=12,e="";t-- >0;)e+=uV[Math.random()*62|0];return e}function ta(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Y_(t){return t.classList?ta(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(vC(t[n]),'" ')},"").trim()}function jf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Q_(t){return t.size!==li.size||t.x!==li.x||t.y!==li.y||t.rotate!==li.rotate||t.flipX||t.flipY}function fV(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function dV(t){var e=t.transform,n=t.width,i=n===void 0?fg:n,s=t.height,r=s===void 0?fg:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&fC?l+="translate(".concat(e.x/Zi-i/2,"em, ").concat(e.y/Zi-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Zi,"em), calc(-50% + ").concat(e.y/Zi,"em)) "):l+="translate(".concat(e.x/Zi,"em, ").concat(e.y/Zi,"em) "),l+="scale(".concat(e.size/Zi*(e.flipX?-1:1),", ").concat(e.size/Zi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var pV=`:root, :host {
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
}`;function bC(){var t=dC,e=pC,n=G.cssPrefix,i=G.replacementClass,s=pV;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var N0=!1;function Fd(){G.autoAddCss&&!N0&&(cV(bC()),N0=!0)}var gV={mixout:function(){return{dom:{css:bC,insertCss:Fd}}},hooks:function(){return{beforeDOMElementCreation:function(){Fd()},beforeI2svg:function(){Fd()}}}},Wi=As||{};Wi[Hi]||(Wi[Hi]={});Wi[Hi].styles||(Wi[Hi].styles={});Wi[Hi].hooks||(Wi[Hi].hooks={});Wi[Hi].shims||(Wi[Hi].shims=[]);var jn=Wi[Hi],wC=[],mV=function t(){Xe.removeEventListener("DOMContentLoaded",t),Eh=1,wC.map(function(e){return e()})},Eh=!1;Yi&&(Eh=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),Eh||Xe.addEventListener("DOMContentLoaded",mV));function _V(t){Yi&&(Eh?setTimeout(t,0):wC.push(t))}function gc(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?vC(t):"<".concat(e," ").concat(hV(i),">").concat(r.map(gc).join(""),"</").concat(e,">")}function L0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yV=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},Ud=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?yV(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function vV(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function pg(t){var e=vV(t);return e.length===1?e[0].toString(16):null}function bV(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function F0(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function gg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=F0(e);typeof jn.hooks.addPack=="function"&&!s?jn.hooks.addPack(t,F0(e)):jn.styles[t]=W(W({},jn.styles[t]||{}),r),t==="fas"&&gg("fa",e)}var Hc,Wc,qc,eo=jn.styles,wV=jn.shims,EV=(Hc={},Tt(Hc,Ge,Object.values(Cl[Ge])),Tt(Hc,ot,Object.values(Cl[ot])),Hc),X_=null,EC={},TC={},IC={},xC={},SC={},TV=(Wc={},Tt(Wc,Ge,Object.keys(xl[Ge])),Tt(Wc,ot,Object.keys(xl[ot])),Wc);function IV(t){return~sV.indexOf(t)}function xV(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!IV(s)?s:null}var CC=function(){var e=function(r){return Ud(eo,function(o,a,l){return o[l]=Ud(a,r,{}),o},{})};EC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),TC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),SC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in eo||G.autoFetchSvg,i=Ud(wV,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});IC=i.names,xC=i.unicodes,X_=Hf(G.styleDefault,{family:G.familyDefault})};lV(function(t){X_=Hf(t.styleDefault,{family:G.familyDefault})});CC();function J_(t,e){return(EC[t]||{})[e]}function SV(t,e){return(TC[t]||{})[e]}function lr(t,e){return(SC[t]||{})[e]}function kC(t){return IC[t]||{prefix:null,iconName:null}}function CV(t){var e=xC[t],n=J_("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rs(){return X_}var Z_=function(){return{prefix:null,iconName:null,rest:[]}};function Hf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Ge:n,s=xl[i][t],r=Sl[i][t]||Sl[i][s],o=t in jn.styles?t:null;return r||o||null}var U0=(qc={},Tt(qc,Ge,Object.keys(Cl[Ge])),Tt(qc,ot,Object.keys(Cl[ot])),qc);function Wf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},Tt(e,Ge,"".concat(G.cssPrefix,"-").concat(Ge)),Tt(e,ot,"".concat(G.cssPrefix,"-").concat(ot)),e),o=null,a=Ge;(t.includes(r[Ge])||t.some(function(c){return U0[Ge].includes(c)}))&&(a=Ge),(t.includes(r[ot])||t.some(function(c){return U0[ot].includes(c)}))&&(a=ot);var l=t.reduce(function(c,u){var h=xV(G.cssPrefix,u);if(eo[u]?(u=EV[a].includes(u)?JU[a][u]:u,o=u,c.prefix=u):TV[a].indexOf(u)>-1?(o=u,c.prefix=Hf(u,{family:a})):h?c.iconName=h:u!==G.replacementClass&&u!==r[Ge]&&u!==r[ot]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?kC(c.iconName):{},d=lr(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!eo.far&&eo.fas&&!G.autoFetchSvg&&(c.prefix="fas")}return c},Z_());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ot&&(eo.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=lr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Rs()||"fas"),l}var kV=function(){function t(){BU(this,t),this.definitions={}}return $U(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),gg(a,o[a]);var l=Cl[Ge][a];l&&gg(l,o[a]),CC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),V0=[],to={},ho={},AV=Object.keys(ho);function RV(t,e){var n=e.mixoutsTo;return V0=t,to={},Object.keys(ho).forEach(function(i){AV.indexOf(i)===-1&&delete ho[i]}),V0.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),wh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){to[o]||(to[o]=[]),to[o].push(r[o])})}i.provides&&i.provides(ho)}),n}function mg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=to[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=to[t]||[];s.forEach(function(r){r.apply(null,n)})}function qi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ho[t]?ho[t].apply(null,e):void 0}function _g(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Rs();if(e)return e=lr(n,e)||e,L0(AC.definitions,n,e)||L0(jn.styles,n,e)}var AC=new kV,DV=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,kr("noAuto")},OV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yi?(kr("beforeI2svg",e),qi("pseudoElements2svg",e),qi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,_V(function(){MV({autoReplaceSvgRoot:n}),kr("watch",e)})}},PV={icon:function(e){if(e===null)return null;if(wh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Hf(e[0]);return{prefix:i,iconName:lr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(ZU))){var s=Wf(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Rs(),iconName:lr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Rs();return{prefix:r,iconName:lr(r,e)||e}}}},xn={noAuto:DV,config:G,dom:OV,parse:PV,library:AC,findIconDefinition:_g,toHtml:gc},MV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Xe:n;(Object.keys(jn.styles).length>0||G.autoFetchSvg)&&Yi&&G.autoReplaceSvg&&xn.dom.i2svg({node:i})};function qf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return gc(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Yi){var i=Xe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function NV(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(Q_(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=jf(W(W({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function LV(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:i}]}]}function ey(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",v=[G.replacementClass,r?"".concat(G.cssPrefix,"-").concat(r):""].filter(function(B){return h.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(h.classes).join(" "),b={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},T=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(b.attributes[Cr]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Al())},children:[l]}),delete b.attributes.title);var E=W(W({},b),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:W(W({},T),h.styles)}),A=i.found&&n.found?qi("generateAbstractMask",E)||{children:[],attributes:{}}:qi("generateAbstractIcon",E)||{children:[],attributes:{}},C=A.children,S=A.attributes;return E.children=C,E.attributes=S,a?LV(E):NV(E)}function B0(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=W(W(W({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Cr]="");var u=W({},o.styles);Q_(s)&&(u.transform=dV({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=jf(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function FV(t){var e=t.content,n=t.title,i=t.extra,s=W(W(W({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=jf(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vd=jn.styles;function yg(t){var e=t[0],n=t[1],i=t.slice(4),s=H_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(ar.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(ar.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var UV={found:!1,width:512,height:512};function VV(t,e){!gC&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function vg(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Rs()),new Promise(function(i,s){if(qi("missingIconAbstract"),n==="fa"){var r=kC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Vd[e]&&Vd[e][t]){var o=Vd[e][t];return i(yg(o))}VV(t,e),i(W(W({},UV),{},{icon:G.showMissingIcons&&t?qi("missingIconAbstract")||{}:{}}))})}var $0=function(){},bg=G.measurePerformance&&Uc&&Uc.mark&&Uc.measure?Uc:{mark:$0,measure:$0},Ia='FA "6.4.0"',BV=function(e){return bg.mark("".concat(Ia," ").concat(e," begins")),function(){return RC(e)}},RC=function(e){bg.mark("".concat(Ia," ").concat(e," ends")),bg.measure("".concat(Ia," ").concat(e),"".concat(Ia," ").concat(e," begins"),"".concat(Ia," ").concat(e," ends"))},ty={begin:BV,end:RC},Tu=function(){};function z0(t){var e=t.getAttribute?t.getAttribute(Cr):null;return typeof e=="string"}function $V(t){var e=t.getAttribute?t.getAttribute(q_):null,n=t.getAttribute?t.getAttribute(K_):null;return e&&n}function zV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function jV(){if(G.autoReplaceSvg===!0)return Iu.replace;var t=Iu[G.autoReplaceSvg];return t||Iu.replace}function HV(t){return Xe.createElementNS("http://www.w3.org/2000/svg",t)}function WV(t){return Xe.createElement(t)}function DC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?HV:WV:n;if(typeof t=="string")return Xe.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(DC(o,{ceFn:i}))}),s}function qV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Iu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(DC(s),n)}),n.getAttribute(Cr)===null&&G.keepOriginalSource){var i=Xe.createComment(qV(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Y_(n).indexOf(G.replacementClass))return Iu.replace(e);var s=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return gc(a)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function j0(t){t()}function OC(t,e){var n=typeof e=="function"?e:Tu;if(t.length===0)n();else{var i=j0;G.mutateApproach===QU&&(i=As.requestAnimationFrame||j0),i(function(){var s=jV(),r=ty.begin("mutate");t.map(s),r(),n()})}}var ny=!1;function PC(){ny=!0}function wg(){ny=!1}var Th=null;function H0(t){if(P0&&G.observeMutations){var e=t.treeCallback,n=e===void 0?Tu:e,i=t.nodeCallback,s=i===void 0?Tu:i,r=t.pseudoElementsCallback,o=r===void 0?Tu:r,a=t.observeMutationsRoot,l=a===void 0?Xe:a;Th=new P0(function(c){if(!ny){var u=Rs();ta(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!z0(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&z0(h.target)&&~iV.indexOf(h.attributeName))if(h.attributeName==="class"&&$V(h.target)){var f=Wf(Y_(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(q_,d||u),p&&h.target.setAttribute(K_,p)}else zV(h.target)&&s(h.target)})}}),Yi&&Th.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function KV(){Th&&Th.disconnect()}function GV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function YV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Wf(Y_(t));return s.prefix||(s.prefix=Rs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=SV(s.prefix,t.innerText)||J_(s.prefix,pg(t.innerText))),!s.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function QV(t){var e=ta(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(i||Al()):(e["aria-hidden"]="true",e.focusable="false")),e}function XV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:li,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function W0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=YV(t),i=n.iconName,s=n.prefix,r=n.rest,o=QV(t),a=mg("parseNodeAttributes",{},t),l=e.styleParser?GV(t):[];return W({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:li,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var JV=jn.styles;function MC(t){var e=G.autoReplaceSvg==="nest"?W0(t,{styleParser:!1}):W0(t);return~e.extra.classes.indexOf(mC)?qi("generateLayersText",t,e):qi("generateSvgReplacementMutation",t,e)}var Ds=new Set;G_.map(function(t){Ds.add("fa-".concat(t))});Object.keys(xl[Ge]).map(Ds.add.bind(Ds));Object.keys(xl[ot]).map(Ds.add.bind(Ds));Ds=dc(Ds);function q0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yi)return Promise.resolve();var n=Xe.documentElement.classList,i=function(h){return n.add("".concat(M0,"-").concat(h))},s=function(h){return n.remove("".concat(M0,"-").concat(h))},r=G.autoFetchSvg?Ds:G_.map(function(u){return"fa-".concat(u)}).concat(Object.keys(JV));r.includes("fa")||r.push("fa");var o=[".".concat(mC,":not([").concat(Cr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ta(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=ty.begin("onTree"),c=a.reduce(function(u,h){try{var f=MC(h);f&&u.push(f)}catch(d){gC||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){OC(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function ZV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;MC(t).then(function(n){n&&OC([n],e)})}function eB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:_g(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:_g(s||{})),t(i,W(W({},n),{},{mask:s}))}}var tB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?li:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,g=n.classes,m=g===void 0?[]:g,_=n.attributes,v=_===void 0?{}:_,b=n.styles,T=b===void 0?{}:b;if(e){var E=e.prefix,A=e.iconName,C=e.icon;return qf(W({type:"icon"},e),function(){return kr("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?v["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(p||Al()):(v["aria-hidden"]="true",v.focusable="false")),ey({icons:{main:yg(C),mask:l?yg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:A,transform:W(W({},li),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:v,styles:T,classes:m}})})}},nB={mixout:function(){return{icon:eB(tB)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=q0,n.nodeCallback=ZV,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?Xe:i,r=n.callback,o=r===void 0?function(){}:r;return q0(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([vg(s,a),u.iconName?vg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=H_(g,2),_=m[0],v=m[1];d([n,ey({icons:{main:_,mask:v},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=jf(a);l.length>0&&(s.style=l);var c;return Q_(o)&&(c=qi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},iB={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return qf({type:"layer"},function(){kr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(dc(r)).join(" ")},children:o}]})}}}},sB={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return qf({type:"counter",content:n},function(){return kr("beforeDOMElementCreation",{content:n,params:i}),FV({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(dc(a))}})})}}}},rB={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?li:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return qf({type:"text",content:n},function(){return kr("beforeDOMElementCreation",{content:n,params:i}),B0({content:n,transform:W(W({},li),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(G.cssPrefix,"-layers-text")].concat(dc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(fC){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return G.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,B0({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},oB=new RegExp('"',"ug"),K0=[1105920,1112319];function aB(t){var e=t.replace(oB,""),n=bV(e,0),i=n>=K0[0]&&n<=K0[1],s=e.length===2?e[0]===e[1]:!1;return{value:pg(s?e[0]:e),isSecondary:i||s}}function G0(t,e){var n="".concat(YU).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=ta(t.children),o=r.filter(function(C){return C.getAttribute(dg)===e})[0],a=As.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(eV),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ot:Ge,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sl[f][l[2].toLowerCase()]:tV[f][c],p=aB(h),g=p.value,m=p.isSecondary,_=l[0].startsWith("FontAwesome"),v=J_(d,g),b=v;if(_){var T=CV(g);T.iconName&&T.prefix&&(v=T.iconName,d=T.prefix)}if(v&&!m&&(!o||o.getAttribute(q_)!==d||o.getAttribute(K_)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var E=XV(),A=E.extra;A.attributes[dg]=e,vg(v,d).then(function(C){var S=ey(W(W({},E),{},{icons:{main:C,mask:Z_()},prefix:d,iconName:b,extra:A,watchable:!0})),B=Xe.createElement("svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=S.map(function(X){return gc(X)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function lB(t){return Promise.all([G0(t,"::before"),G0(t,"::after")])}function cB(t){return t.parentNode!==document.head&&!~XU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Y0(t){if(Yi)return new Promise(function(e,n){var i=ta(t.querySelectorAll("*")).filter(cB).map(lB),s=ty.begin("searchPseudoElements");PC(),Promise.all(i).then(function(){s(),wg(),e()}).catch(function(){s(),wg(),n()})})}var uB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Y0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?Xe:i;G.searchPseudoElements&&Y0(s)}}},Q0=!1,hB={mixout:function(){return{dom:{unwatch:function(){PC(),Q0=!0}}}},hooks:function(){return{bootstrap:function(){H0(mg("mutationObserverCallbacks",{}))},noAuto:function(){KV()},watch:function(n){var i=n.observeMutationsRoot;Q0?wg():H0(mg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},X0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},fB={mixout:function(){return{parse:{transform:function(n){return X0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=X0(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:W({},d.outer),children:[{tag:"g",attributes:W({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:W(W({},i.icon.attributes),d.path)}]}]}}}},Bd={x:0,y:0,width:"100%",height:"100%"};function J0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dB(t){return t.tag==="g"?t.children:[t]}var pB={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Wf(s.split(" ").map(function(o){return o.trim()})):Z_();return r.prefix||(r.prefix=Rs()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=fV({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:W(W({},Bd),{},{fill:"white"})},g=u.children?{children:u.children.map(J0)}:{},m={tag:"g",attributes:W({},d.inner),children:[J0(W({tag:u.tag,attributes:W(W({},u.attributes),d.path)},g))]},_={tag:"g",attributes:W({},d.outer),children:[m]},v="mask-".concat(a||Al()),b="clip-".concat(a||Al()),T={tag:"mask",attributes:W(W({},Bd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:dB(f)},T]};return i.push(E,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},Bd)}),{children:i,attributes:s}}}},gB={provides:function(e){var n=!1;As.matchMedia&&(n=As.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},mB={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},_B=[gV,nB,iB,sB,rB,uB,hB,fB,pB,gB,mB];RV(_B,{mixoutsTo:xn});xn.noAuto;var NC=xn.config,gn=xn.library;xn.dom;var Ih=xn.parse;xn.findIconDefinition;xn.toHtml;var yB=xn.icon;xn.layer;var vB=xn.text;xn.counter;function Z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z0(Object(n),!0).forEach(function(i){an(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xh(t){return xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xh(t)}function an(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bB(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function wB(t,e){if(t==null)return{};var n=bB(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Eg(t){return EB(t)||TB(t)||IB(t)||xB()}function EB(t){if(Array.isArray(t))return Tg(t)}function TB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function IB(t,e){if(t){if(typeof t=="string")return Tg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tg(t,e)}}function Tg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function xB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var SB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},LC={exports:{}};(function(t){(function(e){var n=function(_,v,b){if(!c(v)||h(v)||f(v)||d(v)||l(v))return v;var T,E=0,A=0;if(u(v))for(T=[],A=v.length;E<A;E++)T.push(n(_,v[E],b));else{T={};for(var C in v)Object.prototype.hasOwnProperty.call(v,C)&&(T[_(C,b)]=n(_,v[C],b))}return T},i=function(_,v){v=v||{};var b=v.separator||"_",T=v.split||/(?=[A-Z])/;return _.split(T).join(b)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,b){return b?b.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var v=s(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,v){var b=v&&"process"in v?v.process:v;return typeof b!="function"?_:function(T,E){return b(T,_,E)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,v){return n(g(s,v),_)},decamelizeKeys:function(_,v){return n(g(o,v),_,v)},pascalizeKeys:function(_,v){return n(g(r,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(SB)})(LC);var CB=LC.exports,kB=["class","style"];function AB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=CB.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function RB(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function iy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return iy(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=RB(u);break;case"style":l.style=AB(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=wB(n,kB);return zo(t.tag,Vn(Vn(Vn({},e),{},{class:s.class,style:Vn(Vn({},s.style),o)},s.attrs),a),i)}var FC=!1;try{FC=!0}catch{}function DB(){if(!FC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qa(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?an({},t,e):{}}function OB(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},an(e,"fa-".concat(t.size),t.size!==null),an(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),an(e,"fa-pull-".concat(t.pull),t.pull!==null),an(e,"fa-swap-opacity",t.swapOpacity),an(e,"fa-bounce",t.bounce),an(e,"fa-shake",t.shake),an(e,"fa-beat",t.beat),an(e,"fa-fade",t.fade),an(e,"fa-beat-fade",t.beatFade),an(e,"fa-flash",t.flash),an(e,"fa-spin-pulse",t.spinPulse),an(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function ew(t){if(t&&xh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ih.icon)return Ih.icon(t);if(t===null)return null;if(xh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var UC=Or({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Te(function(){return ew(e.icon)}),r=Te(function(){return qa("classes",OB(e))}),o=Te(function(){return qa("transform",typeof e.transform=="string"?Ih.transform(e.transform):e.transform)}),a=Te(function(){return qa("mask",ew(e.mask))}),l=Te(function(){return yB(s.value,Vn(Vn(Vn(Vn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ps(l,function(u){if(!u)return DB("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Te(function(){return l.value?iy(l.value.abstract[0],{},i):null});return function(){return c.value}}});Or({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=NC.familyPrefix,r=Te(function(){return["".concat(s,"-layers")].concat(Eg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return zo("div",{class:r.value},i.default?i.default():[])}}});Or({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=NC.familyPrefix,r=Te(function(){return qa("classes",[].concat(Eg(e.counter?["".concat(s,"-layers-counter")]:[]),Eg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Te(function(){return qa("transform",typeof e.transform=="string"?Ih.transform(e.transform):e.transform)}),a=Te(function(){var c=vB(e.value.toString(),Vn(Vn({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Te(function(){return iy(a.value,{},i)});return function(){return l.value}}});const mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},PB={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(H(),ne("div",{class:bs(["flag",{inverted:e.inverted}]),style:Uo({backgroundColor:e.color})},[De(x(UC),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},VC=mn(PB,[["__scopeId","data-v-6db28dbb"]]),Bs=im("board",()=>{const t=ft(""),e=ft("");function n(s){t.value=s}function i(s){e.value=s}return{selectedTile:t,setSelectedTile:n,boardUUID:e,setBoardUUID:i}});const MB=["src"],NB={class:"boardTileFlags"},LB={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=Bs(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u;return H(),ne("div",{class:bs(["tile",{isSelected:x(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(l=(a=e.teamData)==null?void 0:a.verify)==null?void 0:l.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((c=e.tileData)==null?void 0:c.hidden)||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=h=>i({id:e.tileData.id,...e.tileData}))},[M("img",{src:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,MB),M("div",NB,[e.groupsData?(H(!0),ne(Me,{key:0},Ni(e.groupsData,h=>(H(),nn(VC,{key:"tile-flag-"+h.name+"-"+e.tileData.id,class:bs(["tileFlag","flag-end-"+h.flagEnd]),icon:h.icon,color:"none",inverted:!0,style:Uo({opacity:h.collected.hasOwnProperty(e.tileData.id)?1:0})},null,8,["class","icon","style"]))),128)):at("",!0)])],2)}}},BC=mn(LB,[["__scopeId","data-v-67ed1448"]]);const FB={key:0,class:"bingo-board"},UB={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;hE(s=>({"64aaa7a8":e.boardData.settings.width,"644840fe":e.boardData.settings.height}));const n=Bs(),i=aD(n.selectedTile);return(s,r)=>e.boardData?(H(),ne("main",FB,[(H(!0),ne(Me,null,Ni(e.tilesData,o=>(H(),nn(BC,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:x(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):at("",!0)}},sy=mn(UB,[["__scopeId","data-v-87e12eab"]]);const Kf=t=>(Ps("data-v-d558536f"),t=t(),Ms(),t),VB={key:0},BB=Kf(()=>M("br",null,null,-1)),$B={class:"tooltiptext"},zB=Kf(()=>M("br",null,null,-1)),jB=Kf(()=>M("br",null,null,-1)),HB=Kf(()=>M("br",null,null,-1)),WB={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,i=Bs().boardUUID;return(s,r)=>{const o=Ts("router-link");return H(),ne("div",null,[e.groupsData?(H(),ne("ul",VB,[(H(!0),ne(Me,null,Ni(e.groupsData,(a,l)=>(H(),ne("li",{key:l+a.id,class:"tooltip"},[De(VC,{color:a.color,class:bs(["tileFlag","flag-end-"+a.flagEnd]),inverted:a.name=="Ahka's Cum Balls",icon:a.icon,style:Uo({"--groupColor":a.color,"--width":a.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),$e(" "+Ve(a.name),1),BB,M("span",$B,[(H(!0),ne(Me,null,Ni(a.member,c=>(H(),ne("span",{key:c},[$e(Ve(c),1),zB]))),128))]),$e(" score: "+Ve(a.points),1),jB,HB]))),128)),M("li",null,[De(o,{class:"btn",to:{name:"stats-graph",params:{boardUUID:x(i)}}},{default:qh(()=>[$e("Go To Graph")]),_:1},8,["to"])])])):at("",!0)])}}},qB=mn(WB,[["__scopeId","data-v-d558536f"]]),$C={__name:"sidePannel",setup(t){const e=Bs();return(n,i)=>(H(),ne(Me,null,[(H(),nn(BC,{tileData:x(e).selectedTile,key:"side-pannel-tile-"+x(e).selectedTile},null,8,["tileData"])),M("h2",null,Ve(x(e).selectedTile.id.split("")[0])+", "+Ve(x(e).selectedTile.id.split("")[1]),1),M("h1",null,Ve(x(e).selectedTile.title),1),M("p",null,Ve(x(e).selectedTile.description),1)],64))}},na=im("userStateStore",()=>{const t=ft({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}});const KB=t=>(Ps("data-v-531582b4"),t=t(),Ms(),t),GB={class:"main-section"},YB={key:1},QB={style:{"justify-content":"end",display:"flex"}},XB={key:0},JB=["onSubmit"],ZB=KB(()=>M("section",null,null,-1)),e8={key:1},t8={__name:"BoardView",setup(t){const e=ft("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=Bs(),s=na().user,r=ea(),o=fc();n.setBoardUUID(r.params.boardUUID),n.setSelectedTile("");const a=n.boardUUID,l=ft(r.params.teamCode||"all"),c=ft(!1),u=async()=>{var _;if(l.value!==""){let v={name:"private-board",params:{boardUUID:a,teamCode:l.value}};const{data:b}=yt(Pt(h,"Boards",a,"Groups",l.value));b&&((_=b==null?void 0:b.value)==null?void 0:_.name)=="moderator"&&(v.name="moderator"),o.push(v)}},h=Vs(wi),{data:f}=yt(Yn(h,"Boards",a,"Groups")),d=yt(Pt(h,"Boards",a)),{data:p}=yt(Pt(h,`Boards/${a}/Groups/${l.value}/`)),g=Te(()=>{var v;let _={};return f&&((v=f==null?void 0:f.value)==null||v.forEach(b=>{b.name!="moderator"&&(_[b.id]={id:b.id,name:b.name,member:b.members,icon:b.icon,color:b.color,points:b.points,flagEnd:b.flagEnd,collected:b.collected,verify:b.verify})})),_||{}}),{data:m}=yt(Yn(h,`Boards/${a}/Tiles`));return(_,v)=>{const b=Ts("fontAwesomeIcon");return x(d)&&x(m)&&(x(d).settings.public||x(s).data.uid==x(d).ownerID||x(s).data.uid==e.value)?(H(),ne(Me,{key:0},[M("section",null,Ve(x(d).name),1),M("section",GB,[c.value?(H(),ne(Me,{key:0},[x(g)?(H(),nn(qB,{key:0,class:"scoreCard",groupsData:x(g)},null,8,["groupsData"])):at("",!0)],64)):at("",!0),M("button",{class:"btn info",onClick:v[0]||(v[0]=()=>{c.value=!c.value})}," i "),(H(),nn(sy,{boardData:x(d),groupsData:x(g),teamData:x(p),tilesData:x(m),key:"bingo-board-"+x(n).boardUUID},null,8,["boardData","groupsData","teamData","tilesData"])),x(n).selectedTile!=""?(H(),ne("aside",YB,[M("div",QB,[M("button",{class:"btn close",onClick:v[1]||(v[1]=()=>{x(n).setSelectedTile("")})}," ╳ ")]),M("template",null,[x(p)?(H(),ne("p",XB,[De(b,{class:"icon",icon:["fas",x(p).icon]},null,8,["icon"]),$e(" "+Ve(x(p).name),1)])):at("",!0),x(p)?at("",!0):(H(),ne("form",{key:1,onSubmit:Is(u,["prevent"])},[$e(" team code: "),ni(M("input",{type:"text",name:"teamId","onUpdate:modelValue":v[2]||(v[2]=T=>l.value=T)},null,512),[[ls,l.value]])],40,JB))]),x(n).selectedTile!=""?(H(),nn($C,{key:0})):at("",!0)])):at("",!0)]),ZB],64)):(H(),ne("h1",e8,"Not authenticated"))}}},tw=mn(t8,[["__scopeId","data-v-531582b4"]]);const n8=t=>(Ps("data-v-392bbe03"),t=t(),Ms(),t),i8=["for"],s8=n8(()=>M("br",null,null,-1)),r8=["id","checked","onClick"],o8={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=Vs(wi),i=Te(()=>e.tileData),s=({tile:r,group:o})=>{if(Object.hasOwn(o.collected,r.id)){let a={...o.collected};delete a[r.id],ha(Pt(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),ha(Pt(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points-r.points})}else{let a={...o.collected};a[r.id]=new Date,ha(Pt(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),ha(Pt(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points+r.points}),o.verify.includes(r.id)&&ha(Pt(n,"Boards",e.boardUUID,"Groups",o.id),{verify:o.verify.filter(l=>l!=r.id)})}};return(r,o)=>e.tileData?(H(),ne("div",{key:e.tileData.id},[M("h2",null,"{ "+Ve(e.tileData.id.split("")[0])+" , "+Ve(e.tileData.id.split("")[1])+" }",1),M("ul",null,[(H(!0),ne(Me,null,Ni(e.groupsData,a=>(H(),ne("li",{key:a.id+x(i).id,class:bs({checkThis:a.verify.includes(x(i).id)})},[M("label",{for:a.id+x(i).id},[$e(Ve(a.name)+" : "+Ve(a.verify.includes(x(i).id)),1),s8,$e(" collected: "),(H(),ne("input",{id:a.id+x(i).id,type:"checkbox",key:a.id+x(i).id,checked:a.collected.hasOwnProperty(e.tileData.id),onClick:Is(l=>s({tile:x(i),group:a}),["prevent"])},null,8,r8))],8,i8)],2))),128))])])):at("",!0)}},a8=mn(o8,[["__scopeId","data-v-392bbe03"]]);const l8={key:0},c8={key:1},u8={__name:"ModeratorView",setup(t){const e=Bs(),i=na().user,s=ea(),r=Te(()=>s.params.boardUUID),o=Vs(wi),{data:a}=yt(Yn(o,"Boards",r.value,"Groups")),l=yt(Pt(o,"Boards",r.value)),c=Te(()=>{var f;let h={};return a&&((f=a==null?void 0:a.value)==null||f.forEach(d=>{d.name!="moderator"&&(h[d.id]={id:d.id,name:d.name,member:d.members,icon:d.icon,color:d.color,points:d.points,flagEnd:d.flagEnd,collected:d.collected,verify:d.verify})})),h||{}}),{data:u}=yt(Yn(o,`Boards/${r.value}/Tiles`));return(h,f)=>(H(),ne(Me,null,[M("section",null,Ve(x(l).name),1),x(i)&&x(i).data.uid!=0&&(x(i).data.uid==x(l).ownerID||x(l).moderators.includes(x(i).data.uid))?(H(),ne("section",l8,[De(sy,{boardData:x(l),groupsData:x(c),tilesData:x(u)},null,8,["boardData","groupsData","tilesData"]),M("aside",null,[(H(),nn(a8,{tileData:x(e).selectedTile,key:x(e).selectedTile.id,boardUUID:x(r),groupsData:x(c),boardData:x(l)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(H(),ne("section",c8,"please log in or return to the [board]"))],64))}},h8=mn(u8,[["__scopeId","data-v-7573a6c5"]]);const f8=["onSubmit"],d8=["disabled"],p8={__name:"HomeView",setup(t){const e=ea(),n=fc(),i=ft(""),s=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(r,o)=>(H(),ne(Me,null,[M("form",{onSubmit:Is(s,["prevent"])},[$e(" Enter your bingo key: "),ni(M("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[ls,i.value]]),M("button",{class:"btn",disabled:i.value==""},"Open Board",8,d8)],40,f8),(H(),nn(x(aC),{key:x(e).fullPath}))],64))}},g8=mn(p8,[["__scopeId","data-v-f046e3a4"]]);const m8={class:"tile"},_8={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(H(),ne("div",m8,Ve(e.tile.coordinates),1))}},y8=mn(_8,[["__scopeId","data-v-7a1ae405"]]),v8=im("boardCreate",()=>{const t=ft({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const zC=t=>(Ps("data-v-5d272819"),t=t(),Ms(),t),b8=["onKeydown"],w8={class:"pen"},E8=zC(()=>M("br",null,null,-1)),T8=zC(()=>M("br",null,null,-1)),I8={key:0,class:"bingo-board"},x8=["onClick"],S8={key:1},C8={key:2},k8={__name:"newBoard",setup(t){hE(d=>({"4f74f87b":r.value.settings.width,f549c5dc:r.value.settings.height}));const e=Vs(wi),n=v8(),i=na(),s=fc(),r=ft({name:"<name of bingo board>",settings:{width:2,height:2,public:!1}}),o=i.user,a=yt(Pt(e,"Users",`${o.data.uid}`)),l=ft(null),c=()=>{l.value.focus()},u=d=>{d.target.blur(),l.value.innerText.trim()==""?(r.value.name="Enter title here",l.value.innerText="Enter title here"):r.value.name=l.value.innerText.trim()},h=Te(()=>{let d=[];for(let p=0;p<=parseInt(r.value.settings.width)*r.value.settings.height-1;p++){let g=(Math.floor(p/parseInt(r.value.settings.width))+1)*10+(p%parseInt(r.value.settings.width)+1);d.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:g,img:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"})}return d}),f=async()=>{const d=Pt(Yn(e,"Boards"));await Eu(d,{...r.value,ownerID:o.data.uid}).then(()=>{h.value.forEach(p=>{Eu(Pt(e,"Boards",d.id,"Tiles",`${p.coordinates}`),{...p})})}).then(()=>{console.log(a.value.count),Eu(Pt(e,"Users",`${o.data.uid}`),{count:a.value.count+1}),n.setSelectedTile(""),s.push({name:"editBoard",params:{boardUUID:d.id}})})};return(d,p)=>{const g=Ts("font-awesome-icon");return H(),ne(Me,null,[x(o).loggedIn&&x(o).data.uid!=0&&x(a).count<5?(H(),ne(Me,{key:0},[M("h1",{class:"title-wrap",onClick:p[0]||(p[0]=Is(m=>c(),["prevent"]))},[M("span",{class:"board-title",ref_key:"titleElement",ref:l,contenteditable:"",spellcheck:"false",onKeydown:dE(u,["enter"]),onBlur:u},Ve(r.value.name),41,b8),M("span",w8,[De(g,{icon:["fas","pen"]})])]),M("div",null,[$e(" name: width: "),ni(M("input",{min:"2",max:"9",name:"width",type:"range","onUpdate:modelValue":p[1]||(p[1]=m=>r.value.settings.width=m)},null,512),[[ls,r.value.settings.width]]),$e(Ve(r.value.settings.width),1),E8,$e(" height: "),ni(M("input",{min:"2",max:"9",name:"height",type:"range","onUpdate:modelValue":p[2]||(p[2]=m=>r.value.settings.height=m)},null,512),[[ls,r.value.settings.height]]),$e(Ve(r.value.settings.height),1),T8,$e(" total tiles: "+Ve(r.value.settings.width*r.value.settings.height),1)]),x(h)?(H(),ne("main",I8,[(H(!0),ne(Me,null,Ni(x(h),m=>(H(),nn(y8,{key:m.coordinates,tile:m},null,8,["tile"]))),128))])):at("",!0),M("button",{class:"btn",onClick:Is(f,["prevent"])},"Save Settings",8,x8)],64)):at("",!0),x(o).loggedIn?at("",!0):(H(),ne("h1",S8,"not authenticated")),x(a).count>=5?(H(),ne("h1",C8,"You've exceded the 5 board limit")):at("",!0)],64)}}},A8=mn(k8,[["__scopeId","data-v-5d272819"]]);const ia=t=>(Ps("data-v-f0b38b39"),t=t(),Ms(),t),R8=ia(()=>M("h2",null,"User:",-1)),D8=ia(()=>M("br",null,null,-1)),O8={class:"UID"},P8=ia(()=>M("br",null,null,-1)),M8=ia(()=>M("h2",null,"your boards:",-1)),N8={key:0},L8={class:"iconSpan"},F8=ia(()=>M("h2",null,"boards you can edit:",-1)),U8={key:1},V8={class:"iconSpan"},B8=ia(()=>M("h2",null,"boards you can moderate:",-1)),$8={key:2},z8={class:"iconSpan"},j8={key:1},H8={__name:"BoardList",setup(t){const e=na(),n=ft("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),i=e.user,s=Vs(wi),{data:r}=yt(Pt(s,"Users",i.data.uid)),o=Yn(s,"Boards"),a=Te(()=>{let p="==";return i.data.uid==n.value&&(p="!="),p}),l=Te(()=>{let p="==";return i.data.uid==n.value?p="0":p=i.data.uid,p}),c=yt(Ad(o,Rd("ownerID",a.value,l.value))),u=yt(Ad(o,Rd("moderators","array-contains",i.data.uid))),h=yt(Ad(o,Rd("editors","array-contains",i.data.uid))),f=fc(),d=(p,g)=>{f.push({name:p,params:{boardUUID:g}})};return(p,g)=>{var v,b,T;const m=Ts("font-awesome-icon"),_=Ts("router-link");return x(i)&&((v=x(i))!=null&&v.loggedIn)&&x(c)?(H(),ne(Me,{key:0},[R8,$e(" Total boards: "+Ve((b=x(r))==null?void 0:b.count),1),D8,$e(" user ID: "),M("span",O8,Ve(x(i).data.uid),1),P8,$e(" share you user ID with people to have them add you as moderator / editor. "),M8,x(c)?(H(),ne("ul",N8,[(H(!0),ne(Me,null,Ni(x(c),E=>(H(),ne("li",{key:E},[M("span",null,Ve(E.name),1),M("span",L8,[De(m,{onClick:A=>d("editBoard",E.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),De(m,{onClick:A=>d("overview",E.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),De(m,{onClick:A=>d("moderator",E.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128)),((T=x(r))==null?void 0:T.count)<5?(H(),nn(_,{key:0,to:{name:"newBoard"},class:"btn"},{default:qh(()=>[$e("+ create board")]),_:1})):at("",!0)])):at("",!0),F8,x(h)?(H(),ne("ul",U8,[(H(!0),ne(Me,null,Ni(x(h),E=>(H(),ne("li",{key:E},[M("span",null,Ve(E.name),1),M("span",V8,[De(m,{onClick:A=>d("editBoard",E.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),De(m,{onClick:A=>d("overview",E.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),De(m,{onClick:A=>d("moderator",E.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):at("",!0),B8,x(u)?(H(),ne("ul",$8,[(H(!0),ne(Me,null,Ni(x(u),E=>(H(),ne("li",{key:E},[M("span",null,Ve(E.name),1),M("span",z8,[De(m,{onClick:A=>d("overview",E.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),De(m,{onClick:A=>d("moderator",E.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):at("",!0)],64)):(H(),ne("h1",j8,"Not Authenticated"))}}},W8=mn(H8,[["__scopeId","data-v-f0b38b39"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function mc(t){return t+.5|0}const cs=(t,e,n)=>Math.max(Math.min(t,n),e);function xa(t){return cs(mc(t*2.55),0,255)}function vs(t){return cs(mc(t*255),0,255)}function Ci(t){return cs(mc(t/2.55)/100,0,1)}function nw(t){return cs(mc(t*100),0,100)}const Cn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ig=[..."0123456789ABCDEF"],q8=t=>Ig[t&15],K8=t=>Ig[(t&240)>>4]+Ig[t&15],Kc=t=>(t&240)>>4===(t&15),G8=t=>Kc(t.r)&&Kc(t.g)&&Kc(t.b)&&Kc(t.a);function Y8(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Cn[t[1]]*17,g:255&Cn[t[2]]*17,b:255&Cn[t[3]]*17,a:e===5?Cn[t[4]]*17:255}:(e===7||e===9)&&(n={r:Cn[t[1]]<<4|Cn[t[2]],g:Cn[t[3]]<<4|Cn[t[4]],b:Cn[t[5]]<<4|Cn[t[6]],a:e===9?Cn[t[7]]<<4|Cn[t[8]]:255})),n}const Q8=(t,e)=>t<255?e(t):"";function X8(t){var e=G8(t)?q8:K8;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Q8(t.a,e):void 0}const J8=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function jC(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Z8(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function e$(t,e,n){const i=jC(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function t$(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function ry(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=t$(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function oy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(vs)}function ay(t,e,n){return oy(jC,t,e,n)}function n$(t,e,n){return oy(e$,t,e,n)}function i$(t,e,n){return oy(Z8,t,e,n)}function HC(t){return(t%360+360)%360}function s$(t){const e=J8.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?xa(+e[5]):vs(+e[5]));const s=HC(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=n$(s,r,o):e[1]==="hsv"?i=i$(s,r,o):i=ay(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function r$(t,e){var n=ry(t);n[0]=HC(n[0]+e),n=ay(n),t.r=n[0],t.g=n[1],t.b=n[2]}function o$(t){if(!t)return;const e=ry(t),n=e[0],i=nw(e[1]),s=nw(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Ci(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const iw={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},sw={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function a$(){const t={},e=Object.keys(sw),n=Object.keys(iw);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,iw[r]);r=parseInt(sw[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Gc;function l$(t){Gc||(Gc=a$(),Gc.transparent=[0,0,0,0]);const e=Gc[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const c$=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function u$(t){const e=c$.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?xa(o):cs(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?xa(i):cs(i,0,255)),s=255&(e[4]?xa(s):cs(s,0,255)),r=255&(e[6]?xa(r):cs(r,0,255)),{r:i,g:s,b:r,a:n}}}function h$(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ci(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const $d=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,qr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function f$(t,e,n){const i=qr(Ci(t.r)),s=qr(Ci(t.g)),r=qr(Ci(t.b));return{r:vs($d(i+n*(qr(Ci(e.r))-i))),g:vs($d(s+n*(qr(Ci(e.g))-s))),b:vs($d(r+n*(qr(Ci(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Yc(t,e,n){if(t){let i=ry(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=ay(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function WC(t,e){return t&&Object.assign(e||{},t)}function rw(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=vs(t[3]))):(e=WC(t,{r:0,g:0,b:0,a:1}),e.a=vs(e.a)),e}function d$(t){return t.charAt(0)==="r"?u$(t):s$(t)}class Rl{constructor(e){if(e instanceof Rl)return e;const n=typeof e;let i;n==="object"?i=rw(e):n==="string"&&(i=Y8(e)||l$(e)||d$(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=WC(this._rgb);return e&&(e.a=Ci(e.a)),e}set rgb(e){this._rgb=rw(e)}rgbString(){return this._valid?h$(this._rgb):void 0}hexString(){return this._valid?X8(this._rgb):void 0}hslString(){return this._valid?o$(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=f$(this._rgb,e._rgb,n)),this}clone(){return new Rl(this.rgb)}alpha(e){return this._rgb.a=vs(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=mc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Yc(this._rgb,2,e),this}darken(e){return Yc(this._rgb,2,-e),this}saturate(e){return Yc(this._rgb,1,e),this}desaturate(e){return Yc(this._rgb,1,-e),this}rotate(e){return r$(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Ti(){}const p$=(()=>{let t=0;return()=>t++})();function Qe(t){return t===null||typeof t>"u"}function st(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Oe(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function At(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function yn(t,e){return At(t)?t:e}function Ee(t,e){return typeof t>"u"?e:t}const g$=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function je(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Fe(t,e,n,i){let s,r,o;if(st(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(Oe(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Sh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Ch(t){if(st(t))return t.map(Ch);if(Oe(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Ch(t[n[s]]);return e}return t}function qC(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function m$(t,e,n,i){if(!qC(t))return;const s=e[t],r=n[t];Oe(s)&&Oe(r)?Dl(s,r,i):e[t]=Ch(r)}function Dl(t,e,n){const i=st(e)?e:[e],s=i.length;if(!Oe(t))return t;n=n||{};const r=n.merger||m$;let o;for(let a=0;a<s;++a){if(o=i[a],!Oe(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function Ka(t,e){return Dl(t,e,{merger:_$})}function _$(t,e,n){if(!qC(t))return;const i=e[t],s=n[t];Oe(i)&&Oe(s)?Ka(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Ch(s))}const ow={"":t=>t,x:t=>t.x,y:t=>t.y};function y$(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function v$(t){const e=y$(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function kh(t,e){return(ow[e]||(ow[e]=v$(e)))(t)}function ly(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ah=t=>typeof t<"u",Os=t=>typeof t=="function",aw=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function b$(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const It=Math.PI,On=2*It,w$=On+It,Rh=Number.POSITIVE_INFINITY,E$=It/180,fn=It/2,Hs=It/4,lw=It*2/3,us=Math.log10,No=Math.sign;function Ga(t,e,n){return Math.abs(t-e)<n}function cw(t){const e=Math.round(t);t=Ga(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(us(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function T$(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Ol(t){return!isNaN(parseFloat(t))&&isFinite(t)}function I$(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function KC(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function hs(t){return t*(It/180)}function cy(t){return t*(180/It)}function uw(t){if(!At(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function x$(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*It&&(r+=On),{angle:r,distance:s}}function xg(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function S$(t,e){return(t-e+w$)%On-It}function Ln(t){return(t%On+On)%On}function GC(t,e,n,i){const s=Ln(t),r=Ln(e),o=Ln(n),a=Ln(r-s),l=Ln(o-s),c=Ln(s-r),u=Ln(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function An(t,e,n){return Math.max(e,Math.min(n,t))}function C$(t){return An(t,-32768,32767)}function Sa(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function uy(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const cr=(t,e,n,i)=>uy(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),k$=(t,e,n)=>uy(t,n,i=>t[i][e]>=n);function A$(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const YC=["push","pop","shift","splice","unshift"];function R$(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),YC.forEach(n=>{const i="_onData"+ly(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function hw(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(YC.forEach(r=>{delete t[r]}),delete t._chartjs)}function D$(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const QC=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function XC(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,QC.call(window,()=>{i=!1,t.apply(e,n)}))}}function O$(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const hy=t=>t==="start"?"left":t==="end"?"right":"center",Bt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,P$=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function M$(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=An(Math.min(cr(a,o.axis,c).lo,n?i:cr(e,l,o.getPixelForValue(c)).lo),0,i-1)),f?r=An(Math.max(cr(a,o.axis,u,!0).hi+1,n?0:cr(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function N$(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const Qc=t=>t===0||t===1,fw=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*On/n)),dw=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*On/n)+1,Ya={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*fn)+1,easeOutSine:t=>Math.sin(t*fn),easeInOutSine:t=>-.5*(Math.cos(It*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Qc(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Qc(t)?t:fw(t,.075,.3),easeOutElastic:t=>Qc(t)?t:dw(t,.075,.3),easeInOutElastic(t){return Qc(t)?t:t<.5?.5*fw(t*2,.1125,.45):.5+.5*dw(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ya.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ya.easeInBounce(t*2)*.5:Ya.easeOutBounce(t*2-1)*.5+.5};function fy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function pw(t){return fy(t)?t:new Rl(t)}function zd(t){return fy(t)?t:new Rl(t).saturate(.5).darken(.1).hexString()}const L$=["x","y","borderWidth","radius","tension"],F$=["color","borderColor","backgroundColor"];function U$(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:F$},numbers:{type:"number",properties:L$}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function V$(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const gw=new Map;function B$(t,e){e=e||{};const n=t+JSON.stringify(e);let i=gw.get(n);return i||(i=new Intl.NumberFormat(t,e),gw.set(n,i)),i}function dy(t,e,n){return B$(e,n).format(t)}const JC={values(t){return st(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=$$(t,n)}const o=us(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),dy(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(us(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?JC.numeric.call(this,t,e,n):""}};function $$(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Gf={formatters:JC};function z$(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Gf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ar=Object.create(null),Sg=Object.create(null);function Qa(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function jd(t,e,n){return typeof e=="string"?Dl(Qa(t,e),n):Dl(Qa(t,""),e)}class j${constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>zd(s.backgroundColor),this.hoverBorderColor=(i,s)=>zd(s.borderColor),this.hoverColor=(i,s)=>zd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return jd(this,e,n)}get(e){return Qa(this,e)}describe(e,n){return jd(Sg,e,n)}override(e,n){return jd(Ar,e,n)}route(e,n,i,s){const r=Qa(this,e),o=Qa(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return Oe(l)?Object.assign({},c,l):Ee(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var lt=new j$({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[U$,V$,z$]);function H$(t){return!t||Qe(t.size)||Qe(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Dh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function W$(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,f;for(l=0;l<a;l++)if(h=n[l],h!=null&&!st(h))o=Dh(t,s,r,o,h);else if(st(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!st(f)&&(o=Dh(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(l=0;l<d;l++)delete s[r[l]];r.splice(0,d)}return o}function Ws(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function mw(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Cg(t,e,n,i){ZC(t,e,n,i,null)}function ZC(t,e,n,i,s){let r,o,a,l,c,u,h,f;const d=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*E$;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,g,0,0,On):t.arc(n,i,g,0,On),t.closePath();break;case"triangle":u=s?s/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=lw,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=lw,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(m+Hs)*l,h=Math.cos(m+Hs)*(s?s/2-c:l),a=Math.sin(m+Hs)*l,f=Math.sin(m+Hs)*(s?s/2-c:l),t.arc(n-h,i-a,c,m-It,m-fn),t.arc(n+f,i-o,c,m-fn,m),t.arc(n+h,i+a,c,m,m+fn),t.arc(n-f,i+o,c,m+fn,m+It),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}m+=Hs;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":m+=Hs;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),m+=Hs,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Pi(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function py(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function gy(t){t.restore()}function q$(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function K$(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function G$(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Qe(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Y$(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function Q$(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Rr(t,e,n,i,s,r={}){const o=st(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,G$(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&Q$(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),Qe(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),Y$(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Oh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-fn,It,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,It,fn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,fn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-fn,!0),t.lineTo(n+o.topLeft,i)}const X$=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,J$=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Z$(t,e){const n=(""+t).match(X$);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const ez=t=>+t||0;function ek(t,e){const n={},i=Oe(e),s=i?Object.keys(e):e,r=Oe(t)?i?o=>Ee(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=ez(r(o));return n}function tz(t){return ek(t,{top:"y",right:"x",bottom:"y",left:"x"})}function fo(t){return ek(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Zt(t){const e=tz(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function vt(t,e){t=t||{},e=e||lt.font;let n=Ee(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Ee(t.style,e.style);i&&!(""+i).match(J$)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Ee(t.family,e.family),lineHeight:Z$(Ee(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Ee(t.weight,e.weight),string:""};return s.string=H$(s),s}function Xc(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&st(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function nz(t,e,n){const{min:i,max:s}=t,r=g$(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function $s(t,e){return Object.assign(Object.create(t),e)}function my(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=sk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>my([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return nk(a,l,()=>uz(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return yw(a).includes(l)},ownKeys(a){return yw(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function Lo(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:tk(t,i),setContext:r=>Lo(t,r,n,i),override:r=>Lo(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return nk(r,o,()=>sz(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function tk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Os(n)?n:()=>n,isIndexable:Os(i)?i:()=>i}}const iz=(t,e)=>t?t+ly(e):e,_y=(t,e)=>Oe(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function nk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function sz(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Os(a)&&o.isScriptable(e)&&(a=rz(e,a,t,n)),st(a)&&a.length&&(a=oz(e,a,t,o.isIndexable)),_y(e,a)&&(a=Lo(a,s,r&&r[e],o)),a}function rz(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),_y(t,l)&&(l=yy(s._scopes,s,t,l)),l}function oz(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(Oe(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=yy(c,s,t,u);e.push(Lo(h,r,o&&o[t],a))}}return e}function ik(t,e,n){return Os(t)?t(e,n):t}const az=(t,e)=>t===!0?e:typeof t=="string"?kh(e,t):void 0;function lz(t,e,n,i,s){for(const r of e){const o=az(n,r);if(o){t.add(o);const a=ik(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function yy(t,e,n,i){const s=e._rootScopes,r=ik(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=_w(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=_w(a,o,r,l,i),l===null)?!1:my(Array.from(a),[""],s,r,()=>cz(e,n,i))}function _w(t,e,n,i,s){for(;n;)n=lz(t,e,n,i,s);return n}function cz(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return st(s)&&Oe(n)?n:s||{}}function uz(t,e,n,i){let s;for(const r of e)if(s=sk(iz(r,t),n),typeof s<"u")return _y(t,s)?yy(n,i,t,s):s}function sk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function yw(t){let e=t._keys;return e||(e=t._keys=hz(t._scopes)),e}function hz(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const fz=Number.EPSILON||1e-14,Fo=(t,e)=>e<t.length&&!t[e].skip&&t[e],rk=t=>t==="x"?"y":"x";function dz(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=xg(r,s),l=xg(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function pz(t,e,n){const i=t.length;let s,r,o,a,l,c=Fo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=Fo(t,u+1),!(!l||!c)){if(Ga(e[u],0,fz)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function gz(t,e,n="x"){const i=rk(n),s=t.length;let r,o,a,l=Fo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Fo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function mz(t,e="x"){const n=rk(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=Fo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=Fo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?No(s[o-1])!==No(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}pz(t,s,r),gz(t,r,e)}function Jc(t,e,n){return Math.max(Math.min(t,n),e)}function _z(t,e){let n,i,s,r,o,a=Pi(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Pi(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=Jc(s.cp1x,e.left,e.right),s.cp1y=Jc(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Jc(s.cp2x,e.left,e.right),s.cp2y=Jc(s.cp2y,e.top,e.bottom)))}function yz(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")mz(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=dz(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&_z(t,n)}function ok(){return typeof window<"u"&&typeof document<"u"}function vy(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Ph(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Yf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function vz(t,e){return Yf(t).getPropertyValue(e)}const bz=["top","right","bottom","left"];function mr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=bz[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const wz=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function Ez(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(wz(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Xs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Yf(n),r=s.boxSizing==="border-box",o=mr(s,"padding"),a=mr(s,"border","width"),{x:l,y:c,box:u}=Ez(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/d*n.width/i),y:Math.round((c-f)/p*n.height/i)}}function Tz(t,e,n){let i,s;if(e===void 0||n===void 0){const r=vy(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=Yf(r),l=mr(a,"border","width"),c=mr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=Ph(a.maxWidth,r,"clientWidth"),s=Ph(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Rh,maxHeight:s||Rh}}const Zc=t=>Math.round(t*10)/10;function Iz(t,e,n,i){const s=Yf(t),r=mr(s,"margin"),o=Ph(s.maxWidth,t,"clientWidth")||Rh,a=Ph(s.maxHeight,t,"clientHeight")||Rh,l=Tz(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const f=mr(s,"border","width"),d=mr(s,"padding");c-=d.width+f.width,u-=d.height+f.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=Zc(Math.min(c,o,l.maxWidth)),u=Zc(Math.min(u,a,l.maxHeight)),c&&!u&&(u=Zc(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=Zc(Math.floor(u*i))),{width:c,height:u}}function vw(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const xz=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function bw(t,e){const n=vz(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Js(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function Sz(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function Cz(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=Js(t,s,n),a=Js(s,r,n),l=Js(r,e,n),c=Js(o,a,n),u=Js(a,l,n);return Js(c,u,n)}const kz=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},Az=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function po(t,e,n){return t?kz(e,n):Az()}function ak(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function lk(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ck(t){return t==="angle"?{between:GC,compare:S$,normalize:Ln}:{between:Sa,compare:(e,n)=>e-n,normalize:e=>e}}function ww({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function Rz(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=ck(i),l=e.length;let{start:c,end:u,loop:h}=t,f,d;if(h){for(c+=l,u+=l,f=0,d=l;f<d&&o(a(e[c%l][i]),s,r);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function Dz(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=ck(i),{start:u,end:h,loop:f,style:d}=Rz(t,e,n),p=[];let g=!1,m=null,_,v,b;const T=()=>l(s,b,_)&&a(s,b)!==0,E=()=>a(r,_)===0||l(r,b,_),A=()=>g||T(),C=()=>!g||E();for(let S=u,B=u;S<=h;++S)v=e[S%o],!v.skip&&(_=c(v[i]),_!==b&&(g=l(_,s,r),m===null&&A()&&(m=a(_,s)===0?S:B),m!==null&&C()&&(p.push(ww({start:m,end:S,loop:f,count:o,style:d})),m=null),B=S,b=_));return m!==null&&p.push(ww({start:m,end:h,loop:f,count:o,style:d})),p}function Oz(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=Dz(i[s],t.points,e);r.length&&n.push(...r)}return n}function Pz(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function Mz(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function Nz(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=Pz(n,s,r,i);if(i===!0)return Ew(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return Ew(t,Mz(n,o,l,c),n,e)}function Ew(t,e,n,i){return!i||!i.setContext||!n?e:Lz(t,e,n,i)}function Lz(t,e,n,i){const s=t._chart.getContext(),r=Tw(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,f=h;function d(p,g,m,_){const v=a?-1:1;if(p!==g){for(p+=l;n[p%l].skip;)p-=v;for(;n[g%l].skip;)g+=v;p%l!==g%l&&(c.push({start:p%l,end:g%l,loop:m,style:_}),u=_,h=g%l)}}for(const p of e){h=a?h:p.start;let g=n[h%l],m;for(f=h+1;f<=p.end;f++){const _=n[f%l];m=Tw(i.setContext($s(s,{type:"segment",p0:g,p1:_,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),Fz(m,u)&&d(h,f-1,p.loop,u),g=_,u=m}h<f-1&&d(h,f-1,p.loop,u)}return c}function Tw(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Fz(t,e){if(!e)return!1;const n=[],i=function(s,r){return fy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Uz{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=QC.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ii=new Uz;const Iw="transparent",Vz={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=pw(t||Iw),s=i.valid&&pw(e||Iw);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Bz{constructor(e,n,i,s){const r=n[i];s=Xc([e.to,s,r,e.from]);const o=Xc([e.from,r,s]);this._active=!0,this._fn=e.fn||Vz[e.type||typeof o],this._easing=Ya[e.easing]||Ya.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=Xc([e.to,n,s,e.from]),this._from=Xc([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class uk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Oe(e))return;const n=Object.keys(lt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Oe(r))return;const o={};for(const a of n)o[a]=r[a];(st(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=zz(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&$z(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[c]=u;continue}r[c]=h=new Bz(f,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ii.add(this._chart,i),!0}}function $z(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function zz(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function xw(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function jz(t,e,n){if(n===!1)return!1;const i=xw(t,n),s=xw(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Hz(t){let e,n,i,s;return Oe(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function hk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Sw(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],At(c)&&(r||e===0||No(e)===No(c))&&(e+=c)}return e}}function Wz(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Cw(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function qz(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Kz(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function Gz(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function kw(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Aw(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=qz(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[l]:g,[c]:m}=p,_=p._stacks||(p._stacks={});f=_[c]=Gz(s,u,g),f[a]=m,f._top=kw(f,o,!0,i.type),f._bottom=kw(f,o,!1,i.type);const v=f._visualValues||(f._visualValues={});v[a]=m}}function Hd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Yz(t,e){return $s(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Qz(t,e,n){return $s(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function da(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Wd=t=>t==="reset"||t==="none",Rw=(t,e)=>e?t:Object.assign({},t),Xz=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:hk(n,!0),values:null};class Xa{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Cw(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&da(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=Ee(i.xAxisID,Hd(e,"x")),o=n.yAxisID=Ee(i.yAxisID,Hd(e,"y")),a=n.rAxisID=Ee(i.rAxisID,Hd(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&hw(this._data,this),e._stacked&&da(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Oe(n))this._data=Wz(n);else if(i!==n){if(i){hw(i,this);const s=this._cachedMeta;da(s),s._parsed=[]}n&&Object.isExtensible(n)&&R$(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Cw(n.vScale,n),n.stack!==i.stack&&(s=!0,da(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Aw(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{st(s[e])?f=this.parseArrayData(i,s,e,n):Oe(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],l&&(d()&&(l=!1),c=h);i._sorted=l}o&&Aw(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],c[u]={x:r.parse(kh(d,a),f),y:o.parse(kh(d,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:hk(s,!0),values:n._stacks[e.axis]._visualValues};return Sw(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=Sw(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=Xz(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=Kz(a);let f,d;function p(){d=s[f];const g=d[a.axis];return!At(d[e.axis])||u>g||h<g}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,e,d,l),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,e,d,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],At(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Hz(Ee(this.options.clip,jz(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=Qz(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=Yz(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&Ah(i);if(a)return Rw(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),u),d=Object.keys(lt.elements[e]),p=()=>this.getContext(i,s,n),g=c.resolveNamedOptions(f,d,p,h);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(Rw(g,l))),g}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(e,i,n))}const c=new uk(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Wd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Wd(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Wd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&da(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}re(Xa,"defaults",{}),re(Xa,"datasetElementType",null),re(Xa,"dataElementType",null);class xu extends Xa{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=M$(n,s,o);this._drawStart=a,this._drawCount=l,N$(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:g}=this.options,m=Ol(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",v=n+i,b=e.length;let T=n>0&&this.getParsed(n-1);for(let E=0;E<b;++E){const A=e[E],C=_?A:{};if(E<n||E>=v){C.skip=!0;continue}const S=this.getParsed(E),B=Qe(S[d]),X=C[f]=o.getPixelForValue(S[f],E),ie=C[d]=r||B?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,S,l):S[d],E);C.skip=isNaN(X)||isNaN(ie)||B,C.stop=E>0&&Math.abs(S[f]-T[f])>m,g&&(C.parsed=S,C.raw=c.data[E]),h&&(C.options=u||this.resolveDataElementOptions(E,A.active?"active":s)),_||this.updateElement(A,E,C,s),T=S}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}re(xu,"id","line"),re(xu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),re(xu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function qs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class by{constructor(e){re(this,"options");this.options=e||{}}static override(e){Object.assign(by.prototype,e)}init(){}formats(){return qs()}parse(){return qs()}format(){return qs()}add(){return qs()}diff(){return qs()}startOf(){return qs()}endOf(){return qs()}}var Jz={_date:by};function Zz(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?k$:cr;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),f=l(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function _c(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:f}=Zz(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,c,d)}}}function ej(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function qd(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||_c(t,n,e,function(a,l,c){!s&&!Pi(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function tj(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=x$(o,{x:e.x,y:e.y});GC(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return _c(t,n,e,r),s}function nj(t,e,n,i,s,r){let o=[];const a=ej(n);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const m=a(e,p);m<l?(o=[{element:u,datasetIndex:h,index:f}],l=m):m===l&&o.push({element:u,datasetIndex:h,index:f})}return _c(t,n,e,c),o}function Kd(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?tj(t,e,n,s):nj(t,e,n,i,s,r)}function Dw(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return _c(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var ij={evaluateInteractionItems:_c,modes:{index(t,e,n,i){const s=Xs(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?qd(t,s,r,i,o):Kd(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=Xs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?qd(t,s,r,i,o):Kd(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=Xs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return qd(t,s,r,i,o)},nearest(t,e,n,i){const s=Xs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Kd(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=Xs(e,t);return Dw(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=Xs(e,t);return Dw(t,s,"y",n.intersect,i)}}};const fk=["left","top","right","bottom"];function pa(t,e){return t.filter(n=>n.pos===e)}function Ow(t,e){return t.filter(n=>fk.indexOf(n.pos)===-1&&n.box.axis===e)}function ga(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function sj(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function rj(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!fk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function oj(t,e){const n=rj(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function aj(t){const e=sj(t),n=ga(e.filter(c=>c.box.fullSize),!0),i=ga(pa(e,"left"),!0),s=ga(pa(e,"right")),r=ga(pa(e,"top"),!0),o=ga(pa(e,"bottom")),a=Ow(e,"x"),l=Ow(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:pa(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Pw(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function dk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function lj(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!Oe(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&dk(o,r.getPadding());const a=Math.max(0,e.outerWidth-Pw(o,t,"left","right")),l=Math.max(0,e.outerHeight-Pw(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function cj(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function uj(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Ca(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,uj(a.horizontal,e));const{same:h,other:f}=lj(e,n,a,i);c|=h&&s.length,u=u||f,l.fullSize||s.push(a)}return c&&Ca(s,e,n,i)||u}function eu(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function Mw(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,f=c.size||l.height;Ah(c.start)&&(o=c.start),l.fullSize?eu(l,s.left,o,n.outerWidth-s.right-s.left,f):eu(l,e.left+c.placed,o,h,f),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,f=c.size||l.width;Ah(c.start)&&(r=c.start),l.fullSize?eu(l,r,s.top,f,n.outerHeight-s.bottom-s.top):eu(l,r,e.top+c.placed,f,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var Rn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=Zt(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=aj(t.boxes),l=a.vertical,c=a.horizontal;Fe(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=l.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);dk(f,Zt(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=oj(l.concat(c),h);Ca(a.fullSize,d,h,p),Ca(l,d,h,p),Ca(c,d,h,p)&&Ca(l,d,h,p),cj(d),Mw(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,Mw(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},Fe(a.chartArea,g=>{const m=g.box;Object.assign(m,t.chartArea),m.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class pk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class hj extends pk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Su="$chartjs",fj={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Nw=t=>t===null||t==="";function dj(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Su]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Nw(s)){const r=bw(t,"width");r!==void 0&&(t.width=r)}if(Nw(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=bw(t,"height");r!==void 0&&(t.height=r)}return t}const gk=xz?{passive:!0}:!1;function pj(t,e,n){t.addEventListener(e,n,gk)}function gj(t,e,n){t.canvas.removeEventListener(e,n,gk)}function mj(t,e){const n=fj[t.type]||t.type,{x:i,y:s}=Xs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Mh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function _j(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Mh(a.addedNodes,i),o=o&&!Mh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function yj(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Mh(a.removedNodes,i),o=o&&!Mh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Pl=new Map;let Lw=0;function mk(){const t=window.devicePixelRatio;t!==Lw&&(Lw=t,Pl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function vj(t,e){Pl.size||window.addEventListener("resize",mk),Pl.set(t,e)}function bj(t){Pl.delete(t),Pl.size||window.removeEventListener("resize",mk)}function wj(t,e,n){const i=t.canvas,s=i&&vy(i);if(!s)return;const r=XC((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),vj(t,r),o}function Gd(t,e,n){n&&n.disconnect(),e==="resize"&&bj(t)}function Ej(t,e,n){const i=t.canvas,s=XC(r=>{t.ctx!==null&&n(mj(r,t))},t);return pj(i,e,s),s}class Tj extends pk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(dj(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Su])return!1;const i=n[Su].initial;["height","width"].forEach(r=>{const o=i[r];Qe(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Su],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:_j,detach:yj,resize:wj}[n]||Ej;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Gd,detach:Gd,resize:Gd}[n]||gj)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return Iz(e,n,i,s)}isAttached(e){const n=vy(e);return!!(n&&n.isConnected)}}function Ij(t){return!ok()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?hj:Tj}var au;let Br=(au=class{constructor(){re(this,"x");re(this,"y");re(this,"active",!1);re(this,"options");re(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ol(this.x)&&Ol(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},re(au,"defaults",{}),re(au,"defaultRoutes"),au);function xj(t,e){const n=t.options.ticks,i=Sj(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?kj(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Aj(e,c,r,o/s),c;const u=Cj(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((l-a)/(o-1)):null;for(tu(e,c,u,Qe(d)?0:a-d,a),h=0,f=o-1;h<f;h++)tu(e,c,u,r[h],r[h+1]);return tu(e,c,u,l,Qe(d)?e.length:l+d),c}return tu(e,c,u),c}function Sj(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function Cj(t,e,n){const i=Rj(t),s=e.length/n;if(!i)return Math.max(s,1);const r=T$(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function kj(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Aj(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function tu(t,e,n,i,s){const r=Ee(i,0),o=Math.min(Ee(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function Rj(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const Dj=t=>t==="left"?"right":t==="right"?"left":t,Fw=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,Uw=(t,e)=>Math.min(e||t,t);function Vw(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Oj(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function Pj(t,e){Fe(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function ma(t){return t.drawTicks?t.tickLength:0}function Bw(t,e){if(!t.display)return 0;const n=vt(t.font,e),i=Zt(t.padding);return(st(t.text)?t.text.length:1)*n.lineHeight+i.height}function Mj(t,e){return $s(t,{scale:e,type:"scale"})}function Nj(t,e,n){return $s(t,{tick:n,index:e,type:"tick"})}function Lj(t,e,n){let i=hy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=Dj(i)),i}function Fj(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,f,d,p;const g=o-s,m=a-r;if(t.isHorizontal()){if(d=Bt(i,r,a),Oe(n)){const _=Object.keys(n)[0],v=n[_];p=u[_].getPixelForValue(v)+g-e}else n==="center"?p=(c.bottom+c.top)/2+g-e:p=Fw(t,n,e);f=a-r}else{if(Oe(n)){const _=Object.keys(n)[0],v=n[_];d=u[_].getPixelForValue(v)-m+e}else n==="center"?d=(c.left+c.right)/2-m+e:d=Fw(t,n,e);p=Bt(i,o,s),h=n==="left"?-fn:fn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class $r extends Br{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=yn(e,Number.POSITIVE_INFINITY),n=yn(n,Number.NEGATIVE_INFINITY),i=yn(i,Number.POSITIVE_INFINITY),s=yn(s,Number.NEGATIVE_INFINITY),{min:yn(e,i),max:yn(n,s),minDefined:At(e),maxDefined:At(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:yn(n,yn(i,n)),max:yn(i,yn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){je(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=nz(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Vw(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=xj(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){je(this.options.afterUpdate,[this])}beforeSetDimensions(){je(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){je(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),je(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){je(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=je(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){je(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){je(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=Uw(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=An(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),l=this.maxHeight-ma(e.grid)-n.padding-Bw(e.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),o=cy(Math.min(Math.asin(An((u.highest.height+6)/a,-1,1)),Math.asin(An(l/c,-1,1))-Math.asin(An(f/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){je(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){je(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Bw(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=ma(r)+l):(e.height=this.maxHeight,e.width=ma(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=hs(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:g*h.width+m*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(c,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;l?c?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){je(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)Qe(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=Vw(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/Uw(n,i));let c=0,u=0,h,f,d,p,g,m,_,v,b,T,E;for(h=0;h<n;h+=l){if(p=e[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},v=g.lineHeight,b=T=0,!Qe(p)&&!st(p))b=Dh(s,_.data,_.gc,b,p),T=v;else if(st(p))for(f=0,d=p.length;f<d;++f)E=p[f],!Qe(E)&&!st(E)&&(b=Dh(s,_.data,_.gc,b,E),T+=v);o.push(b),a.push(T),c=Math.max(b,c),u=Math.max(T,u)}Pj(r,n);const A=o.indexOf(c),C=a.indexOf(u),S=B=>({width:o[B]||0,height:a[B]||0});return{first:S(0),last:S(n-1),widest:S(A),highest:S(C),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return C$(this._alignToPixels?Ws(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=Nj(this.getContext(),e,i))}return this.$context||(this.$context=Mj(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=hs(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=ma(r),d=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(me){return Ws(i,me,g)};let v,b,T,E,A,C,S,B,X,ie,ue,nt;if(o==="top")v=_(this.bottom),C=this.bottom-f,B=v-m,ie=_(e.top)+m,nt=e.bottom;else if(o==="bottom")v=_(this.top),ie=e.top,nt=_(e.bottom)-m,C=v+m,B=this.top+f;else if(o==="left")v=_(this.right),A=this.right-f,S=v-m,X=_(e.left)+m,ue=e.right;else if(o==="right")v=_(this.left),X=e.left,ue=_(e.right)-m,A=v+m,S=this.left+f;else if(n==="x"){if(o==="center")v=_((e.top+e.bottom)/2+.5);else if(Oe(o)){const me=Object.keys(o)[0],ge=o[me];v=_(this.chart.scales[me].getPixelForValue(ge))}ie=e.top,nt=e.bottom,C=v+m,B=C+f}else if(n==="y"){if(o==="center")v=_((e.left+e.right)/2);else if(Oe(o)){const me=Object.keys(o)[0],ge=o[me];v=_(this.chart.scales[me].getPixelForValue(ge))}A=v-m,S=A-f,X=e.left,ue=e.right}const et=Ee(s.ticks.maxTicksLimit,h),pe=Math.max(1,Math.ceil(h/et));for(b=0;b<h;b+=pe){const me=this.getContext(b),ge=r.setContext(me),Ce=a.setContext(me),Ft=ge.lineWidth,rn=ge.color,Ut=Ce.dash||[],ut=Ce.dashOffset,Sn=ge.tickWidth,Xn=ge.tickColor,R=ge.tickBorderDash||[],$=ge.tickBorderDashOffset;T=Oj(this,b,l),T!==void 0&&(E=Ws(i,T,Ft),c?A=S=X=ue=E:C=B=ie=nt=E,d.push({tx1:A,ty1:C,tx2:S,ty2:B,x1:X,y1:ie,x2:ue,y2:nt,width:Ft,color:rn,borderDash:Ut,borderDashOffset:ut,tickWidth:Sn,tickColor:Xn,tickBorderDash:R,tickBorderDashOffset:$}))}return this._ticksLength=h,this._borderValue=v,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,f=ma(i.grid),d=f+u,p=h?-u:d,g=-hs(this.labelRotation),m=[];let _,v,b,T,E,A,C,S,B,X,ie,ue,nt="middle";if(s==="top")A=this.bottom-p,C=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+p,C=this._getXAxisLabelAlignment();else if(s==="left"){const pe=this._getYAxisLabelAlignment(f);C=pe.textAlign,E=pe.x}else if(s==="right"){const pe=this._getYAxisLabelAlignment(f);C=pe.textAlign,E=pe.x}else if(n==="x"){if(s==="center")A=(e.top+e.bottom)/2+d;else if(Oe(s)){const pe=Object.keys(s)[0],me=s[pe];A=this.chart.scales[pe].getPixelForValue(me)+d}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")E=(e.left+e.right)/2-d;else if(Oe(s)){const pe=Object.keys(s)[0],me=s[pe];E=this.chart.scales[pe].getPixelForValue(me)}C=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?nt="top":l==="end"&&(nt="bottom"));const et=this._getLabelSizes();for(_=0,v=a.length;_<v;++_){b=a[_],T=b.label;const pe=r.setContext(this.getContext(_));S=this.getPixelForTick(_)+r.labelOffset,B=this._resolveTickFontOptions(_),X=B.lineHeight,ie=st(T)?T.length:1;const me=ie/2,ge=pe.color,Ce=pe.textStrokeColor,Ft=pe.textStrokeWidth;let rn=C;o?(E=S,C==="inner"&&(_===v-1?rn=this.options.reverse?"left":"right":_===0?rn=this.options.reverse?"right":"left":rn="center"),s==="top"?c==="near"||g!==0?ue=-ie*X+X/2:c==="center"?ue=-et.highest.height/2-me*X+X:ue=-et.highest.height+X/2:c==="near"||g!==0?ue=X/2:c==="center"?ue=et.highest.height/2-me*X:ue=et.highest.height-ie*X,h&&(ue*=-1),g!==0&&!pe.showLabelBackdrop&&(E+=X/2*Math.sin(g))):(A=S,ue=(1-ie)*X/2);let Ut;if(pe.showLabelBackdrop){const ut=Zt(pe.backdropPadding),Sn=et.heights[_],Xn=et.widths[_];let R=ue-ut.top,$=0-ut.left;switch(nt){case"middle":R-=Sn/2;break;case"bottom":R-=Sn;break}switch(C){case"center":$-=Xn/2;break;case"right":$-=Xn;break}Ut={left:$,top:R,width:Xn+ut.width,height:Sn+ut.height,color:pe.backdropColor}}m.push({label:T,font:B,textOffset:ue,options:{rotation:g,color:ge,strokeColor:Ce,strokeWidth:Ft,textAlign:rn,textBaseline:nt,translation:[E,A],backdrop:Ut}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-hs(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=Ws(e,this.left,o)-o/2,u=Ws(e,this.right,a)+a/2,h=f=l):(h=Ws(e,this.top,o)-o/2,f=Ws(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&py(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Rr(i,c,0,u,l,a)}s&&gy(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=vt(i.font),o=Zt(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||Oe(n)?(l+=o.bottom,st(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=Fj(this,l,n,a);Rr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:Lj(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Ee(e.grid&&e.grid.z,-1),s=Ee(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==$r.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return vt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class nu{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;Bj(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,Uj(e,o,i),this.override&&lt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in lt[s]&&(delete lt[s][i],this.override&&delete Ar[i])}}function Uj(t,e,n){const i=Dl(Object.create(null),[n?lt.get(n):{},lt.get(e),t.defaults]);lt.set(e,i),t.defaultRoutes&&Vj(e,t.defaultRoutes),t.descriptors&&lt.describe(e,t.descriptors)}function Vj(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");lt.route(r,s,l,a)})}function Bj(t){return"id"in t&&"defaults"in t}class $j{constructor(){this.controllers=new nu(Xa,"datasets",!0),this.elements=new nu(Br,"elements"),this.plugins=new nu(Object,"plugins"),this.scales=new nu($r,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):Fe(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=ly(e);je(i["before"+s],[],i),n[e](i),je(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var ti=new $j;class zj{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(je(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){Qe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=Ee(i.options&&i.options.plugins,{}),r=jj(i);return s===!1&&!n?[]:Wj(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function jj(t){const e={},n=[],i=Object.keys(ti.plugins.items);for(let r=0;r<i.length;r++)n.push(ti.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Hj(t,e){return!e&&t===!1?null:t===!0?{}:t}function Wj(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=Hj(i[l],s);c!==null&&r.push({plugin:a,options:qj(t.config,{plugin:a,local:n[l]},c,o)})}return r}function qj(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function kg(t,e){const n=lt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function Kj(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function Gj(t,e){return t===e?"_index_":"_value_"}function $w(t){if(t==="x"||t==="y"||t==="r")return t}function Yj(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Ag(t,...e){if($w(t))return t;for(const n of e){const i=n.axis||Yj(n.position)||t.length>1&&$w(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function zw(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function Qj(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return zw(t,"x",n[0])||zw(t,"y",n[0])}return{}}function Xj(t,e){const n=Ar[t.type]||{scales:{}},i=e.scales||{},s=kg(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Oe(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Ag(o,a,Qj(o,t),lt.scales[a.type]),c=Gj(l,s),u=n.scales||{};r[o]=Ka(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||kg(a,e),u=(Ar[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=Kj(h,l),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),Ka(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ka(a,[lt.scales[a.type],lt.scale])}),r}function _k(t){const e=t.options||(t.options={});e.plugins=Ee(e.plugins,{}),e.scales=Xj(t,e)}function yk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Jj(t){return t=t||{},t.data=yk(t.data),_k(t),t}const jw=new Map,vk=new Set;function iu(t,e){let n=jw.get(t);return n||(n=e(),jw.set(t,n),vk.add(n)),n}const _a=(t,e,n)=>{const i=kh(e,n);i!==void 0&&t.add(i)};class Zj{constructor(e){this._config=Jj(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=yk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),_k(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return iu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return iu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return iu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return iu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>_a(l,e,h))),u.forEach(h=>_a(l,s,h)),u.forEach(h=>_a(l,Ar[r]||{},h)),u.forEach(h=>_a(l,lt,h)),u.forEach(h=>_a(l,Sg,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),vk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Ar[n]||{},lt.datasets[n]||{},{type:n},lt,Sg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Hw(this._resolverCache,e,s);let l=o;if(tH(o,n)){r.$shared=!1,i=Os(i)?i():i;const c=this.createResolver(e,i,a);l=Lo(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=Hw(this._resolverCache,e,i);return Oe(n)?Lo(r,n,void 0,s):r}}function Hw(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:my(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const eH=t=>Oe(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Os(t[n]),!1);function tH(t,e){const{isScriptable:n,isIndexable:i}=tk(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Os(a)||eH(a))||o&&st(a))return!0}return!1}var nH="4.3.0";const iH=["top","bottom","left","right","chartArea"];function Ww(t,e){return t==="top"||t==="bottom"||iH.indexOf(t)===-1&&e==="x"}function qw(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Kw(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),je(n&&n.onComplete,[t],e)}function sH(t){const e=t.chart,n=e.options.animation;je(n&&n.onProgress,[t],e)}function bk(t){return ok()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Cu={},Gw=t=>{const e=bk(t);return Object.values(Cu).filter(n=>n.canvas===e).pop()};function rH(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function oH(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function aH(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var es;let Qf=(es=class{static register(...e){ti.add(...e),Yw()}static unregister(...e){ti.remove(...e),Yw()}constructor(e,n){const i=this.config=new Zj(n),s=bk(e),r=Gw(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Ij(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=p$(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new zj,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=O$(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Cu[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ii.listen(this,"complete",Kw),Ii.listen(this,"progress",sH),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return Qe(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ti}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():vw(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return mw(this.canvas,this.ctx),this}stop(){return Ii.stop(this),this}resize(e,n){Ii.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,vw(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),je(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Fe(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Ag(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Fe(r,o=>{const a=o.options,l=a.id,c=Ag(l,a),u=Ee(a.type,o.dtype);(a.position===void 0||Ww(a.position,c)!==Ww(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const f=ti.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),Fe(s,(o,a)=>{o||delete i[a]}),Fe(i,o=>{Rn.configure(this,o,o.options),Rn.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(qw("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||kg(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=ti.getController(a),{datasetElementType:c,dataElementType:u}=lt.datasets[a];Object.assign(l,{dataElementType:ti.getElement(u),datasetElementType:c&&ti.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Fe(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||Fe(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(qw("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Fe(this.scales,e=>{Rn.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!aw(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;rH(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!aw(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Rn.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Fe(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Os(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ii.has(this)?this.attached&&!Ii.running(this)&&Ii.start(this):(this.draw(),Kw({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=aH(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&py(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&gy(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Pi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=ij.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=$s(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Ah(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ii.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),mw(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Cu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Fe(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Fe(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Fe(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Sh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=b$(e),c=oH(e,this._lastEvent,i,l);i&&(this._lastEvent=null,je(r.onHover,[e,a,this],this),l&&je(r.onClick,[e,a,this],this));const u=!Sh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},re(es,"defaults",lt),re(es,"instances",Cu),re(es,"overrides",Ar),re(es,"registry",ti),re(es,"version",nH),re(es,"getChart",Gw),es);function Yw(){return Fe(Qf.instances,t=>t._plugins.invalidate())}function wk(t,e,n=e){t.lineCap=Ee(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Ee(n.borderDash,e.borderDash)),t.lineDashOffset=Ee(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Ee(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Ee(n.borderWidth,e.borderWidth),t.strokeStyle=Ee(n.borderColor,e.borderColor)}function lH(t,e,n){t.lineTo(n.x,n.y)}function cH(t){return t.stepped?q$:t.tension||t.cubicInterpolationMode==="monotone"?K$:lH}function Ek(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function uH(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Ek(s,n,i),u=cH(r);let{move:h=!0,reverse:f}=i||{},d,p,g;for(d=0;d<=c;++d)p=s[(a+(f?c-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,g,p,f,r.stepped),g=p);return l&&(p=s[(a+(f?c:0))%o],u(t,g,p,f,r.stepped)),!!l}function hH(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Ek(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,f,d,p,g,m,_;const v=T=>(o+(c?a-T:T))%r,b=()=>{g!==m&&(t.lineTo(u,m),t.lineTo(u,g),t.lineTo(u,_))};for(l&&(d=s[v(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[v(f)],d.skip)continue;const T=d.x,E=d.y,A=T|0;A===p?(E<g?g=E:E>m&&(m=E),u=(h*u+T)/++h):(b(),t.lineTo(T,E),p=A,h=0,g=m=E),_=E}b()}function Rg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?hH:uH}function fH(t){return t.stepped?Sz:t.tension||t.cubicInterpolationMode==="monotone"?Cz:Js}function dH(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),wk(t,e.options),t.stroke(s)}function pH(t,e,n,i){const{segments:s,options:r}=e,o=Rg(e);for(const a of s)wk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const gH=typeof Path2D=="function";function mH(t,e,n,i){gH&&!e.options.segment?dH(t,e,n,i):pH(t,e,n,i)}class ka extends Br{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;yz(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Nz(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=Oz(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=fH(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:f}=o[c],d=r[h],p=r[f];if(d===p){a.push(d);continue}const g=Math.abs((s-d[n])/(p[n]-d[n])),m=l(d,p,g,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Rg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Rg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),mH(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}re(ka,"id","line"),re(ka,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),re(ka,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),re(ka,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Qw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class ku extends Br{constructor(n){super();re(this,"parsed");re(this,"skip");re(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return Qw(this,n,"x",i)}inYRange(n,i){return Qw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Pi(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Cg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}re(ku,"id","point"),re(ku,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),re(ku,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Xw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},_H=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Jw extends Br{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=je(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=vt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Xw(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||c[c.length-1]+m+2*a>o)&&(h+=u,c[c.length-(g>0?0:1)]=0,d+=u,f++),l[g]={left:0,top:d,row:f,width:m,height:s},c[c.length-1]+=m+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:v,itemHeight:b}=yH(i,n,r,m,s);_>0&&d+b+2*a>u&&(h+=f+a,c.push({width:f,height:d}),p+=f+a,g++,f=d=0),l[_]={left:p,top:d,col:g,width:v,height:b},f=Math.max(f,v),d+=b+a}),h+=f,c.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=po(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Bt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Bt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Bt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Bt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;py(e,this),this._draw(),gy(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=lt.color,l=po(e.rtl,this.left,this.width),c=vt(o.font),{padding:u}=o,h=c.size,f=h/2;let d;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=Xw(o,h),_=function(A,C,S){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const B=Ee(S.lineWidth,1);if(s.fillStyle=Ee(S.fillStyle,a),s.lineCap=Ee(S.lineCap,"butt"),s.lineDashOffset=Ee(S.lineDashOffset,0),s.lineJoin=Ee(S.lineJoin,"miter"),s.lineWidth=B,s.strokeStyle=Ee(S.strokeStyle,a),s.setLineDash(Ee(S.lineDash,[])),o.usePointStyle){const X={radius:g*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:B},ie=l.xPlus(A,p/2),ue=C+f;ZC(s,X,ie,ue,o.pointStyleWidth&&p)}else{const X=C+Math.max((h-g)/2,0),ie=l.leftForLtr(A,p),ue=fo(S.borderRadius);s.beginPath(),Object.values(ue).some(nt=>nt!==0)?Oh(s,{x:ie,y:X,w:p,h:g,radius:ue}):s.rect(ie,X,p,g),s.fill(),B!==0&&s.stroke()}s.restore()},v=function(A,C,S){Rr(s,S.text,A,C+m/2,c,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},b=this.isHorizontal(),T=this._computeTitleHeight();b?d={x:Bt(r,this.left+u,this.right-i[0]),y:this.top+u+T,line:0}:d={x:this.left+u,y:Bt(r,this.top+T+u,this.bottom-n[0].height),line:0},ak(this.ctx,e.textDirection);const E=m+u;this.legendItems.forEach((A,C)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const S=s.measureText(A.text).width,B=l.textAlign(A.textAlign||(A.textAlign=o.textAlign)),X=p+f+S;let ie=d.x,ue=d.y;l.setWidth(this.width),b?C>0&&ie+X+u>this.right&&(ue=d.y+=E,d.line++,ie=d.x=Bt(r,this.left+u,this.right-i[d.line])):C>0&&ue+E>this.bottom&&(ie=d.x=ie+n[d.line].width+u,d.line++,ue=d.y=Bt(r,this.top+T+u,this.bottom-n[d.line].height));const nt=l.x(ie);if(_(nt,ue,A),ie=P$(B,ie+p+f,b?ie+X:this.right,e.rtl),v(l.x(ie),ue,A),b)d.x+=X+u;else if(typeof A.text!="string"){const et=c.lineHeight;d.y+=Tk(A,et)}else d.y+=E}),lk(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=vt(n.font),s=Zt(n.padding);if(!n.display)return;const r=po(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=Bt(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=c+Bt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=Bt(a,h,h+f);o.textAlign=r.textAlign(hy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Rr(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=vt(e.font),i=Zt(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Sa(e,this.left,this.right)&&Sa(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Sa(e,s.left,s.left+s.width)&&Sa(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!wH(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=_H(s,i);s&&!r&&je(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&je(n.onHover,[e,i,this],this)}else i&&je(n.onClick,[e,i,this],this)}}function yH(t,e,n,i,s){const r=vH(i,t,e,n),o=bH(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function vH(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function bH(t,e,n){let i=t;return typeof e.text!="string"&&(i=Tk(e,n)),i}function Tk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function wH(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var EH={id:"legend",_element:Jw,start(t,e,n){const i=t.legend=new Jw({ctx:t.ctx,options:n,chart:t});Rn.configure(t,i,n),Rn.addBox(t,i)},stop(t){Rn.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Rn.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Zt(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Ik extends Br{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=st(i.text)?i.text.length:1;this._padding=Zt(i.padding);const r=s*vt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=Bt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=Bt(a,s,n),l=It*-.5):(u=r-e,h=Bt(a,n,s),l=It*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=vt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Rr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:hy(n.align),textBaseline:"middle",translation:[o,a]})}}function TH(t,e){const n=new Ik({ctx:t.ctx,options:e,chart:t});Rn.configure(t,n,e),Rn.addBox(t,n),t.titleBlock=n}var IH={id:"title",_element:Ik,start(t,e,n){TH(t,n)},stop(t){const e=t.titleBlock;Rn.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Rn.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Aa={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=xg(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function ei(t,e){return e&&(st(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function xi(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function xH(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function Zw(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=vt(e.bodyFont),c=vt(e.titleFont),u=vt(e.footerFont),h=r.length,f=s.length,d=i.length,p=Zt(e.padding);let g=p.height,m=0,_=i.reduce((T,E)=>T+E.before.length+E.lines.length+E.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const T=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=d*T+(_-d)*l.lineHeight+(_-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let v=0;const b=function(T){m=Math.max(m,n.measureText(T).width+v)};return n.save(),n.font=c.string,Fe(t.title,b),n.font=l.string,Fe(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?o+2+e.boxPadding:0,Fe(i,T=>{Fe(T.before,b),Fe(T.lines,b),Fe(T.after,b)}),v=0,n.font=u.string,Fe(t.footer,b),n.restore(),m+=p.width,{width:m,height:g}}function SH(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function CH(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function kH(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),CH(c,t,e,n)&&(c="center"),c}function e1(t,e,n){const i=n.yAlign||e.yAlign||SH(t,n);return{xAlign:n.xAlign||e.xAlign||kH(t,e,n,i),yAlign:i}}function AH(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function RH(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function t1(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=fo(o);let p=AH(e,a);const g=RH(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:An(p,0,i.width-e.width),y:An(g,0,i.height-e.height)}}function su(t,e,n){const i=Zt(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function n1(t){return ei([],xi(t))}function DH(t,e,n){return $s(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function i1(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const xk={beforeTitle:Ti,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ti,beforeBody:Ti,beforeLabel:Ti,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Qe(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ti,afterBody:Ti,beforeFooter:Ti,footer:Ti,afterFooter:Ti};function on(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?xk[e].call(n,i):s}class Dg extends Br{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new uk(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=DH(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=on(i,"beforeTitle",this,e),r=on(i,"title",this,e),o=on(i,"afterTitle",this,e);let a=[];return a=ei(a,xi(s)),a=ei(a,xi(r)),a=ei(a,xi(o)),a}getBeforeBody(e,n){return n1(on(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return Fe(e,r=>{const o={before:[],lines:[],after:[]},a=i1(i,r);ei(o.before,xi(on(a,"beforeLabel",this,r))),ei(o.lines,on(a,"label",this,r)),ei(o.after,xi(on(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return n1(on(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=on(i,"beforeFooter",this,e),r=on(i,"footer",this,e),o=on(i,"afterFooter",this,e);let a=[];return a=ei(a,xi(s)),a=ei(a,xi(r)),a=ei(a,xi(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(xH(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),Fe(a,u=>{const h=i1(e.callbacks,u);s.push(on(h,"labelColor",this,u)),r.push(on(h,"labelPointStyle",this,u)),o.push(on(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Aa[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=Zw(this,i),c=Object.assign({},a,l),u=e1(this.chart,i,c),h=t1(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=fo(a),{x:f,y:d}=e,{width:p,height:g}=n;let m,_,v,b,T,E;return r==="center"?(T=d+g/2,s==="left"?(m=f,_=m-o,b=T+o,E=T-o):(m=f+p,_=m+o,b=T-o,E=T+o),v=m):(s==="left"?_=f+Math.max(l,u)+o:s==="right"?_=f+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(b=d,T=b-o,m=_-o,v=_+o):(b=d+g,T=b+o,m=_+o,v=_-o),E=b),{x1:m,x2:_,x3:v,y1:b,y2:T,y3:E}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=po(i.rtl,this.x,this.width);for(e.x=su(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=vt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=vt(r.bodyFont),h=su(this,"left",r),f=s.x(h),d=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+d;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(f,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Cg(e,g,m,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Cg(e,g,m,_)}else{e.lineWidth=Oe(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(f,c),m=s.leftForLtr(s.xPlus(f,1),c-2),_=fo(o.borderRadius);Object.values(_).some(v=>v!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Oh(e,{x:g,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Oh(e,{x:m,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,p,c,l),e.strokeRect(g,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(m,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=vt(i.bodyFont);let f=h.lineHeight,d=0;const p=po(i.rtl,this.x,this.width),g=function(S){n.fillText(S,p.x(e.x+d),e.y+f/2),e.y+=f+r},m=p.textAlign(o);let _,v,b,T,E,A,C;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=su(this,m,i),n.fillStyle=i.bodyColor,Fe(this.beforeBody,g),d=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,T=0,A=s.length;T<A;++T){for(_=s[T],v=this.labelTextColors[T],n.fillStyle=v,Fe(_.before,g),b=_.lines,a&&b.length&&(this._drawColorBox(n,e,T,p,i),f=Math.max(h.lineHeight,l)),E=0,C=b.length;E<C;++E)g(b[E]),f=h.lineHeight;Fe(_.after,g)}d=0,f=h.lineHeight,Fe(this.afterBody,g),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=po(i.rtl,this.x,this.width);for(e.x=su(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=vt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=fo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,l+u),n.quadraticCurveTo(a,l+u,a,l+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Aa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Zw(this,e),l=Object.assign({},o,this._size),c=e1(n,e,l),u=t1(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Zt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),ak(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),lk(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Sh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Sh(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Aa[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}re(Dg,"positioners",Aa);var OH={id:"tooltip",_element:Dg,positioners:Aa,afterInit(t,e,n){n&&(t.tooltip=new Dg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:xk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const PH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function MH(t,e,n,i){const s=t.indexOf(e);if(s===-1)return PH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const NH=(t,e)=>t===null?null:An(Math.round(t),0,e);function s1(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Og extends $r{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Qe(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:MH(i,e,Ee(n,e),this._addedLabels),NH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return s1.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}re(Og,"id","category"),re(Og,"defaults",{ticks:{callback:s1}});function LH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:g,max:m}=e,_=!Qe(o),v=!Qe(a),b=!Qe(c),T=(m-g)/(h+1);let E=cw((m-g)/p/d)*d,A,C,S,B;if(E<1e-14&&!_&&!v)return[{value:g},{value:m}];B=Math.ceil(m/E)-Math.floor(g/E),B>p&&(E=cw(B*E/p/d)*d),Qe(l)||(A=Math.pow(10,l),E=Math.ceil(E*A)/A),s==="ticks"?(C=Math.floor(g/E)*E,S=Math.ceil(m/E)*E):(C=g,S=m),_&&v&&r&&I$((a-o)/r,E/1e3)?(B=Math.round(Math.min((a-o)/E,u)),E=(a-o)/B,C=o,S=a):b?(C=_?o:C,S=v?a:S,B=c-1,E=(S-C)/B):(B=(S-C)/E,Ga(B,Math.round(B),E/1e3)?B=Math.round(B):B=Math.ceil(B));const X=Math.max(uw(E),uw(C));A=Math.pow(10,Qe(l)?X:l),C=Math.round(C*A)/A,S=Math.round(S*A)/A;let ie=0;for(_&&(f&&C!==o?(n.push({value:o}),C<o&&ie++,Ga(Math.round((C+ie*E)*A)/A,o,r1(o,T,t))&&ie++):C<o&&ie++);ie<B;++ie){const ue=Math.round((C+ie*E)*A)/A;if(v&&ue>a)break;n.push({value:ue})}return v&&f&&S!==a?n.length&&Ga(n[n.length-1].value,a,r1(a,T,t))?n[n.length-1].value=a:n.push({value:a}):(!v||S===a)&&n.push({value:S}),n}function r1(t,e,{horizontal:n,minRotation:i}){const s=hs(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Nh extends $r{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Qe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=No(s),c=No(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=LH(s,r);return e.bounds==="ticks"&&KC(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return dy(e,this.chart.options.locale,this.options.ticks.format)}}class Pg extends Nh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=At(e)?e:0,this.max=At(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=hs(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}re(Pg,"id","linear"),re(Pg,"defaults",{ticks:{callback:Gf.formatters.numeric}});const Ml=t=>Math.floor(us(t)),Ks=(t,e)=>Math.pow(10,Ml(t)+e);function o1(t){return t/Math.pow(10,Ml(t))===1}function a1(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function FH(t,e){const n=e-t;let i=Ml(n);for(;a1(t,e,i)>10;)i++;for(;a1(t,e,i)<10;)i--;return Math.min(i,Ml(t))}function UH(t,{min:e,max:n}){e=yn(t.min,e);const i=[],s=Ml(e);let r=FH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),f=yn(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:o1(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((l+u+h*Math.pow(10,r))*o)/o;const d=yn(t.max,f);return i.push({value:d,major:o1(d),significand:h}),i}class l1 extends $r{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Nh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return At(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=At(e)?Math.max(0,e):null,this.max=At(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!At(this._userMin)&&(this.min=e===Ks(this.min,0)?Ks(this.min,-1):Ks(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ks(i,-1)),o(Ks(s,1)))),i<=0&&r(Ks(s,-1)),s<=0&&o(Ks(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=UH(n,this);return e.bounds==="ticks"&&KC(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":dy(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=us(e),this._valueRange=us(this.max)-us(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(us(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}re(l1,"id","logarithmic"),re(l1,"defaults",{ticks:{callback:Gf.formatters.logarithmic,major:{enabled:!0}}});function Mg(t){const e=t.ticks;if(e.display&&t.display){const n=Zt(e.backdropPadding);return Ee(e.font&&e.font.size,lt.font.size)+n.height}return 0}function VH(t,e,n){return n=st(n)?n:[n],{w:W$(t,e.string,n),h:n.length*e.lineHeight}}function c1(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function BH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?It/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=vt(c.font),f=VH(t.ctx,h,t._pointLabels[l]);i[l]=f;const d=Ln(t.getIndexAngle(l)+a),p=Math.round(cy(d)),g=c1(p,u.x,f.w,0,180),m=c1(p,u.y,f.h,90,270);$H(n,e,d,g,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=HH(t,i,s)}function $H(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function zH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(cy(Ln(l.angle+fn))),u=KH(l.y,a.h,c),h=WH(c),f=qH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function jH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Pi({x:n,y:i},e)||Pi({x:n,y:r},e)||Pi({x:s,y:i},e)||Pi({x:s,y:r},e))}function HH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Mg(r)/2,additionalAngle:o?It/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=zH(t,u,l);i.push(h),a==="auto"&&(h.visible=jH(h,c),h.visible&&(c=h))}return i}function WH(t){return t===0||t===180?"center":t<180?"left":"right"}function qH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function KH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function GH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!Qe(a)){const l=fo(e.borderRadius),c=Zt(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,f=r-i+c.width,d=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Oh(t,{x:u,y:h,w:f,h:d,radius:l}),t.fill()):t.fillRect(u,h,f,d)}}function YH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));GH(n,o,r);const a=vt(o.font),{x:l,y:c,textAlign:u}=r;Rr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Sk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,On);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function QH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Sk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function XH(t,e,n){return $s(t,{label:n,index:e,type:"pointLabel"})}class ru extends Nh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Zt(Mg(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=At(e)&&!isNaN(e)?e:0,this.max=At(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Mg(this.options))}generateTickLabels(e){Nh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=je(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?BH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=On/(this._pointLabels.length||1),i=this.options.startAngle||0;return Ln(e*n+hs(i))}getDistanceFromCenterForValue(e){if(Qe(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(Qe(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return XH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-fn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Sk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&YH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);QH(this,d,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=vt(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=Zt(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Rr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}re(ru,"id","radialLinear"),re(ru,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Gf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),re(ru,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),re(ru,"descriptors",{angleLines:{_fallback:"grid"}});const Xf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},un=Object.keys(Xf);function JH(t,e){return t-e}function u1(t,e){if(Qe(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),At(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ol(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function h1(t,e,n,i){const s=un.length;for(let r=un.indexOf(t);r<s-1;++r){const o=Xf[un[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return un[r]}return un[s-1]}function ZH(t,e,n,i,s){for(let r=un.length-1;r>=un.indexOf(n);r--){const o=un[r];if(Xf[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return un[n?un.indexOf(n):0]}function e7(t){for(let e=un.indexOf(t)+1,n=un.length;e<n;++e)if(Xf[un[e]].common)return un[e]}function f1(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=uy(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function t7(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function d1(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:t7(t,i,s,n)}class Lh extends $r{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new Jz._date(e.adapters.date);s.init(n),Ka(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:u1(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=At(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=At(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=A$(s,r,o);return this._unit=n.unit||(i.autoSkip?h1(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):ZH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:e7(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),d1(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=An(n,0,o),i=An(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||h1(r.minUnit,n,i,this._getLabelCapacity(n)),a=Ee(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ol(l)||l===!0,u={};let h=n,f,d;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)f1(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&f1(u,f,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return je(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],f=i[n],d=c&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=hs(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,d1(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(u1(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return D$(e.sort(JH))}}re(Lh,"id","time"),re(Lh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ou(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=cr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=cr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class p1 extends Lh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=ou(n,this.min),this._tableRange=ou(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(ou(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return ou(this._table,i*this._tableRange+this._minPos,!0)}}re(p1,"id","timeseries"),re(p1,"defaults",Lh.defaults);const Ck={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},n7={type:{type:String,required:!0},...Ck},i7=uE[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Kr(t){return $h(t)?ye(t):t}function s7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return $h(e)?new Proxy(t,{}):t}function r7(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function kk(t,e){t.labels=e}function Ak(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function o7(t,e){const n={labels:[],datasets:[]};return kk(n,t.labels),Ak(n,t.datasets,e),n}const a7=Or({props:n7,setup(t,e){let{expose:n}=e;const i=ft(null),s=zh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:f}=t,d=o7(c,f),p=s7(d,c);s.value=new Qf(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=ye(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return Jg(r),G1(o),ps([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[f,d]=c;const p=ye(s.value);if(!p)return;let g=!1;if(u){const m=Kr(u),_=Kr(f);m&&m!==_&&(r7(p,m),g=!0)}if(h){const m=Kr(h.labels),_=Kr(d.labels),v=Kr(h.datasets),b=Kr(d.datasets);m!==_&&(kk(p.config.data,m),g=!0),v&&v!==b&&(Ak(p.config.data,v,t.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>zo("canvas",{ref:i})}});function l7(t,e){return Qf.register(e),Or({props:Ck,setup(n,i){let{expose:s}=i;const r=zh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>zo(a7,i7({ref:o},{type:t,...n}))}})}const c7=l7("line",xu),u7={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;Qf.register(Og,Pg,ku,ka,IH,OH,EH);const n=Es({datasets:e.datasets}),i=Es({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(H(),nn(x(c7),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const h7={class:"graph"},f7={__name:"StatsScreen",setup(t){const e=ea(),n=Te(()=>e.params.boardUUID||""),i=Vs(wi);let s=yt(Yn(i,"Boards",n.value,"Groups")),r=yt(Yn(i,"Boards",n.value,"Tiles"));const o=yt(Pt(i,"Boards",n.value)),a=Te(()=>{var h;let u=[];return r&&((h=r==null?void 0:r.value)==null||h.forEach(f=>{u[f.id]=f.points})),u||[]}),l=u=>{let h=[{x:16829424e5,y:0}],f=0;const d=Object.entries(u.collected).sort((p,g)=>p[1].seconds-g[1].seconds);return Object.keys(d).forEach(p=>{f+=a.value[d[p][0]],h.push({y:f,x:new Date(d[p][1].seconds*1e3)})}),h.push({x:Date.now(),y:f}),h},c=Te(()=>{var h;let u=[];return s!=null&&s.value&&((h=s==null?void 0:s.value)==null||h.forEach(f=>{f.name!="moderator"&&u.push({label:f.name,borderColor:f.color,backgroundColor:f.color,data:l(f)})})),u});return(u,h)=>{var d;const f=Ts("router-link");return H(),ne(Me,null,[M("div",null,[De(f,{class:"btn",to:{name:"overview",params:{boardUUID:x(n)}}},{default:qh(()=>[$e(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),M("h1",null,Ve((d=x(o))==null?void 0:d.name)+" stats:",1),M("div",h7,[De(u7,{datasets:x(c)},null,8,["datasets"])])],64)}}};const Mn=t=>(Ps("data-v-8c9ca54e"),t=t(),Ms(),t),d7=Mn(()=>M("br",null,null,-1)),p7=["onSubmit"],g7=Mn(()=>M("br",null,null,-1)),m7=Mn(()=>M("br",null,null,-1)),_7=Mn(()=>M("br",null,null,-1)),y7=Mn(()=>M("br",null,null,-1)),v7=Mn(()=>M("br",null,null,-1)),b7=Mn(()=>M("br",null,null,-1)),w7=Mn(()=>M("option",{disabled:"",value:""},"Please select one",-1)),E7=Mn(()=>M("option",null,"drop",-1)),T7=Mn(()=>M("option",null,"null",-1)),I7=Mn(()=>M("option",null,"exp",-1)),x7=[w7,E7,T7,I7],S7=Mn(()=>M("button",{type:"submit"},"Update Tile",-1)),C7={__name:"editTile",setup(t){const e=Vs(wi),n=Bs(),i=async()=>{let s=n.selectedTile;n.setSelectedTile(""),await Eu(Pt(e,"Boards",n.boardUUID,"Tiles",s.id),{description:s.description,img:s.img,title:s.title,points:parseInt(s.points),hidden:(s==null?void 0:s.hidden)!==void 0?s.hidden:!1,type:(s==null?void 0:s.type)!==void 0?s.type:"drop"}),n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c;return H(),ne("div",null,[$e(" id: "+Ve(x(n).selectedTile.id),1),d7,M("form",{onSubmit:Is(i,["prevent"])},[$e(" title: "),ni(M("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=u=>x(n).selectedTile.title=u),name:"title",id:"addtiletitle"},null,512),[[ls,x(n).selectedTile.title]]),g7,$e(" description: "),ni(M("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=u=>x(n).selectedTile.description=u),name:"description",id:"addtiledescription"},null,512),[[ls,x(n).selectedTile.description]]),m7,$e(" points: "),ni(M("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=u=>x(n).selectedTile.points=u),name:"points",id:"addtilepoints"},null,512),[[ls,x(n).selectedTile.points]]),_7,$e(" img: "),ni(M("input",{type:"text","onUpdate:modelValue":r[3]||(r[3]=u=>x(n).selectedTile.img=u),name:"img",id:"addtileimg"},null,512),[[ls,x(n).selectedTile.img]]),y7,$e(" hidden: "),((o=x(n).selectedTile)==null?void 0:o.hidden)!==void 0?ni((H(),ne("input",{key:0,type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=u=>x(n).selectedTile.hidden=u),name:"hidden",id:"addtilehidden"},null,512)),[[qR,x(n).selectedTile.hidden]]):at("",!0),v7,$e(" type: "+Ve((l=(a=x(n))==null?void 0:a.selectedTile)==null?void 0:l.type),1),b7,((c=x(n).selectedTile)==null?void 0:c.type)!==void 0?ni((H(),ne("select",{key:1,"onUpdate:modelValue":r[5]||(r[5]=u=>x(n).selectedTile.type=u)},x7,512)),[[KR,x(n).selectedTile.type]]):at("",!0),S7],40,p7)])}}},k7=mn(C7,[["__scopeId","data-v-8c9ca54e"]]);const A7=t=>(Ps("data-v-55383735"),t=t(),Ms(),t),R7=["onKeydown"],D7={class:"pen"},O7={class:"main-section"},P7={key:0},M7={style:{"justify-content":"end",display:"flex"}},N7=A7(()=>M("section",null,[M("div",null,[M("h2",null,"Moderators:"),M("div",{class:"moderators"},[M("input",{type:"text"})]),M("button",null,"Save")]),M("div",null,[M("h2",null,"Editors:"),M("div",{class:"moderators"},[M("input",{type:"text"})]),M("button",null,"Save")])],-1)),L7={key:1},F7={__name:"EditBoard",setup(t){const e=ft("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=Bs(),s=na().user,r=ea();n.setBoardUUID(r.params.boardUUID);const o=n.boardUUID,a=Vs(wi),{data:l}=yt(Yn(a,"Boards",o,"Groups")),c=yt(Pt(a,"Boards",o)),u=Te(()=>{var m;let g={};return l&&((m=l==null?void 0:l.value)==null||m.forEach(_=>{_.name!="moderator"&&(g[_.id]={id:_.id,name:_.name,member:_.members,icon:_.icon,color:_.color,points:_.points,flagEnd:_.flagEnd,collected:_.collected,verify:_.verify})})),g||{}}),{data:h}=yt(Yn(a,`Boards/${o}/Tiles`)),f=ft(null),d=()=>{f.value.focus()},p=g=>{g.target.blur(),f.value.innerText.trim()==""?(c.value.name="Enter title here",f.value.innerText="Enter title here"):c.value.name=f.value.innerText.trim()};return(g,m)=>{var v;const _=Ts("font-awesome-icon");return x(s).data.ui!=0&&(x(s).data.uid==x(c).ownerID||x(s).data.uid==e.value||(v=x(c))!=null&&v.editors.include(x(s).data.uid))?(H(),ne(Me,{key:0},[M("section",null,[M("h1",{class:"title-wrap",onClick:m[0]||(m[0]=Is(b=>d(),["prevent"]))},[M("span",{class:"board-title",ref_key:"titleElement",ref:f,contenteditable:"",spellcheck:"false",onKeydown:dE(p,["enter"]),onBlur:p},Ve(x(c).name),41,R7),M("span",D7,[De(_,{icon:["fas","pen"]})])])]),M("section",O7,[(H(),nn(sy,{boardData:x(c),groupsData:x(u),tilesData:x(h),key:"bingo-board-"+x(n).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),x(n).selectedTile!=""?(H(),ne("aside",P7,[M("div",M7,[M("button",{class:"btn close",onClick:m[1]||(m[1]=()=>{x(n).setSelectedTile("")})}," ╳ ")]),De(k7,{tile:x(n).selectedTile},null,8,["tile"]),x(n).selectedTile!=""?(H(),nn($C,{key:0})):at("",!0)])):at("",!0)]),N7],64)):(H(),ne("h1",L7,"Not authenticated"))}}},U7=mn(F7,[["__scopeId","data-v-55383735"]]);const V7=t=>(Ps("data-v-44d7ed50"),t=t(),Ms(),t),B7=V7(()=>M("h1",null,"Log in",-1)),$7={class:"block"},z7=["onClick"],j7={__name:"loginView",setup(t){const e=new ki,n=na(),i=LP(),s=fc(),r=()=>{W2(i,e).then(o=>{n.setUser({loggedIn:!0,data:o.user}),s.push({name:"boardOverview"})}).catch(o=>{const a=o.code,l=o.message;console.error(a,l)})};return(o,a)=>(H(),ne(Me,null,[B7,M("div",$7,[M("button",{class:"btn",onClick:Is(r,["prevent"])},"Log in with Google",8,z7)])],64))}},H7=mn(j7,[["__scopeId","data-v-44d7ed50"]]),W7=NU({history:J6(),mode:"hash",routes:[{path:"/",name:"Home",component:g8},{path:"/new",name:"newBoard",component:A8},{path:"/login",name:"loginView",component:H7},{path:"/edit/:boardUUID",name:"editBoard",props:!0,component:U7},{path:"/b/:boardUUID",name:"overview",props:!0,component:tw},{path:"/boards/",name:"boardOverview",props:!0,component:W8},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",props:!0,component:tw},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:f7},{path:"/m/:boardUUID",name:"moderator",props:!0,component:h8}]});var q7={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},K7={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},G7={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},Y7={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Q7={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},X7={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},J7={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},Z7={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},eW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},tW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},nW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},iW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},sW={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},rW={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};gn.add(nW);gn.add(eW);gn.add(sW);gn.add(Y7);gn.add(Z7);gn.add(q7);gn.add(G7);gn.add(rW);gn.add(Q7);gn.add(X7);gn.add(J7);gn.add(iW);gn.add(tW);gn.add(K7);const yc=ZR(UU);yc.use(nD());yc.use(W7);yc.use(P6,{firebaseApp:wi});yc.component("FontAwesomeIcon",UC);yc.mount("#app");
