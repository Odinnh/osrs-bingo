var kk=Object.defineProperty;var Ak=(t,e,n)=>e in t?kk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>(Ak(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Og(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Oo(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=bt(i)?Pk(i):Oo(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(bt(t))return t;if(Je(t))return t}}const Rk=/;(?![^(]*\))/g,Dk=/:([^]+)/,Ok=/\/\*.*?\*\//gs;function Pk(t){const e={};return t.replace(Ok,"").split(Rk).forEach(n=>{if(n){const i=n.split(Dk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function gs(t){let e="";if(bt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const i=gs(t[n]);i&&(e+=i+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nk=Og(Mk);function d1(t){return!!t||t===""}const nt=t=>bt(t)?t:t==null?"":le(t)||Je(t)&&(t.toString===_1||!de(t.toString))?JSON.stringify(t,p1,2):String(t),p1=(t,e)=>e&&e.__v_isRef?p1(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:g1(e)?{[`Set(${e.size})`]:[...e.values()]}:Je(e)&&!le(e)&&!y1(e)?String(e):e,ze={},Gr=[],jn=()=>{},Lk=()=>!1,Fk=/^on[^a-z]/,Oh=t=>Fk.test(t),Pg=t=>t.startsWith("onUpdate:"),en=Object.assign,Mg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uk=Object.prototype.hasOwnProperty,Ae=(t,e)=>Uk.call(t,e),le=Array.isArray,Yr=t=>Ph(t)==="[object Map]",g1=t=>Ph(t)==="[object Set]",de=t=>typeof t=="function",bt=t=>typeof t=="string",Ng=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",m1=t=>Je(t)&&de(t.then)&&de(t.catch),_1=Object.prototype.toString,Ph=t=>_1.call(t),Vk=t=>Ph(t).slice(8,-1),y1=t=>Ph(t)==="[object Object]",Lg=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ru=Og(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bk=/-(\w)/g,ui=Mh(t=>t.replace(Bk,(e,n)=>n?n.toUpperCase():"")),$k=/\B([A-Z])/g,wr=Mh(t=>t.replace($k,"-$1").toLowerCase()),Nh=Mh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yf=Mh(t=>t?`on${Nh(t)}`:""),Ga=(t,e)=>!Object.is(t,e),ou=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Su=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Iy;const zk=()=>Iy||(Iy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mn;class v1{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function b1(t){return new v1(t)}function jk(t,e=mn){e&&e.active&&e.effects.push(t)}function Fg(){return mn}function w1(t){mn&&mn.cleanups.push(t)}const Ug=t=>{const e=new Set(t);return e.w=0,e.n=0,e},E1=t=>(t.w&ms)>0,I1=t=>(t.n&ms)>0,Hk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ms},Wk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];E1(s)&&!I1(s)?s.delete(t):e[n++]=s,s.w&=~ms,s.n&=~ms}e.length=n}},xu=new WeakMap;let fa=0,ms=1;const qd=30;let Ln;const Zs=Symbol(""),Kd=Symbol("");class Vg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jk(this,i)}run(){if(!this.active)return this.fn();let e=Ln,n=as;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ln,Ln=this,as=!0,ms=1<<++fa,fa<=qd?Hk(this):Ty(this),this.fn()}finally{fa<=qd&&Wk(this),ms=1<<--fa,Ln=this.parent,as=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(Ty(this),this.onStop&&this.onStop(),this.active=!1)}}function Ty(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let as=!0;const T1=[];function Po(){T1.push(as),as=!1}function Mo(){const t=T1.pop();as=t===void 0?!0:t}function dn(t,e,n){if(as&&Ln){let i=xu.get(t);i||xu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Ug()),S1(s)}}function S1(t,e){let n=!1;fa<=qd?I1(t)||(t.n|=ms,n=!E1(t)):n=!t.has(Ln),n&&(t.add(Ln),Ln.deps.push(t))}function Pi(t,e,n,i,s,r){const o=xu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Lg(n)&&a.push(o.get("length")):(a.push(o.get(Zs)),Yr(t)&&a.push(o.get(Kd)));break;case"delete":le(t)||(a.push(o.get(Zs)),Yr(t)&&a.push(o.get(Kd)));break;case"set":Yr(t)&&a.push(o.get(Zs));break}if(a.length===1)a[0]&&Gd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Gd(Ug(c))}}function Gd(t,e){const n=le(t)?t:[...t];for(const i of n)i.computed&&Sy(i);for(const i of n)i.computed||Sy(i)}function Sy(t,e){(t!==Ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function qk(t,e){var n;return(n=xu.get(t))===null||n===void 0?void 0:n.get(e)}const Kk=Og("__proto__,__v_isRef,__isVue"),x1=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ng)),Gk=Bg(),Yk=Bg(!1,!0),Qk=Bg(!0),xy=Xk();function Xk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ye(this);for(let r=0,o=this.length;r<o;r++)dn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Po();const i=ye(this)[e].apply(this,n);return Mo(),i}}),t}function Jk(t){const e=ye(this);return dn(e,"has",t),e.hasOwnProperty(t)}function Bg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?pA:D1:e?R1:A1).get(i))return i;const o=le(i);if(!t){if(o&&Ae(xy,s))return Reflect.get(xy,s,r);if(s==="hasOwnProperty")return Jk}const a=Reflect.get(i,s,r);return(Ng(s)?x1.has(s):Kk(s))||(t||dn(i,"get",s),e)?a:st(a)?o&&Lg(s)?a:a.value:Je(a)?t?O1(a):_s(a):a}}const Zk=C1(),eA=C1(!0);function C1(t=!1){return function(n,i,s,r){let o=n[i];if(oo(o)&&st(o)&&!st(s))return!1;if(!t&&(!Cu(s)&&!oo(s)&&(o=ye(o),s=ye(s)),!le(n)&&st(o)&&!st(s)))return o.value=s,!0;const a=le(n)&&Lg(i)?Number(i)<n.length:Ae(n,i),c=Reflect.set(n,i,s,r);return n===ye(r)&&(a?Ga(s,o)&&Pi(n,"set",i,s):Pi(n,"add",i,s)),c}}function tA(t,e){const n=Ae(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Pi(t,"delete",e,void 0),i}function nA(t,e){const n=Reflect.has(t,e);return(!Ng(e)||!x1.has(e))&&dn(t,"has",e),n}function iA(t){return dn(t,"iterate",le(t)?"length":Zs),Reflect.ownKeys(t)}const k1={get:Gk,set:Zk,deleteProperty:tA,has:nA,ownKeys:iA},sA={get:Qk,set(t,e){return!0},deleteProperty(t,e){return!0}},rA=en({},k1,{get:Yk,set:eA}),$g=t=>t,Lh=t=>Reflect.getPrototypeOf(t);function ml(t,e,n=!1,i=!1){t=t.__v_raw;const s=ye(t),r=ye(e);n||(e!==r&&dn(s,"get",e),dn(s,"get",r));const{has:o}=Lh(s),a=i?$g:n?Hg:Ya;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function _l(t,e=!1){const n=this.__v_raw,i=ye(n),s=ye(t);return e||(t!==s&&dn(i,"has",t),dn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function yl(t,e=!1){return t=t.__v_raw,!e&&dn(ye(t),"iterate",Zs),Reflect.get(t,"size",t)}function Cy(t){t=ye(t);const e=ye(this);return Lh(e).has.call(e,t)||(e.add(t),Pi(e,"add",t,t)),this}function ky(t,e){e=ye(e);const n=ye(this),{has:i,get:s}=Lh(n);let r=i.call(n,t);r||(t=ye(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Ga(e,o)&&Pi(n,"set",t,e):Pi(n,"add",t,e),this}function Ay(t){const e=ye(this),{has:n,get:i}=Lh(e);let s=n.call(e,t);s||(t=ye(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Pi(e,"delete",t,void 0),r}function Ry(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Pi(t,"clear",void 0,void 0),n}function vl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ye(o),c=e?$g:t?Hg:Ya;return!t&&dn(a,"iterate",Zs),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function bl(t,e,n){return function(...i){const s=this.__v_raw,r=ye(s),o=Yr(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?$g:e?Hg:Ya;return!e&&dn(r,"iterate",c?Kd:Zs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ki(t){return function(...e){return t==="delete"?!1:this}}function oA(){const t={get(r){return ml(this,r)},get size(){return yl(this)},has:_l,add:Cy,set:ky,delete:Ay,clear:Ry,forEach:vl(!1,!1)},e={get(r){return ml(this,r,!1,!0)},get size(){return yl(this)},has:_l,add:Cy,set:ky,delete:Ay,clear:Ry,forEach:vl(!1,!0)},n={get(r){return ml(this,r,!0)},get size(){return yl(this,!0)},has(r){return _l.call(this,r,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:vl(!0,!1)},i={get(r){return ml(this,r,!0,!0)},get size(){return yl(this,!0)},has(r){return _l.call(this,r,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:vl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bl(r,!1,!1),n[r]=bl(r,!0,!1),e[r]=bl(r,!1,!0),i[r]=bl(r,!0,!0)}),[t,n,e,i]}const[aA,cA,lA,uA]=oA();function zg(t,e){const n=e?t?uA:lA:t?cA:aA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ae(n,s)&&s in i?n:i,s,r)}const hA={get:zg(!1,!1)},fA={get:zg(!1,!0)},dA={get:zg(!0,!1)},A1=new WeakMap,R1=new WeakMap,D1=new WeakMap,pA=new WeakMap;function gA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mA(t){return t.__v_skip||!Object.isExtensible(t)?0:gA(Vk(t))}function _s(t){return oo(t)?t:jg(t,!1,k1,hA,A1)}function _A(t){return jg(t,!1,rA,fA,R1)}function O1(t){return jg(t,!0,sA,dA,D1)}function jg(t,e,n,i,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=mA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ri(t){return oo(t)?Ri(t.__v_raw):!!(t&&t.__v_isReactive)}function oo(t){return!!(t&&t.__v_isReadonly)}function Cu(t){return!!(t&&t.__v_isShallow)}function Fh(t){return Ri(t)||oo(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function ao(t){return Su(t,"__v_skip",!0),t}const Ya=t=>Je(t)?_s(t):t,Hg=t=>Je(t)?O1(t):t;function P1(t){as&&Ln&&(t=ye(t),S1(t.dep||(t.dep=Ug())))}function M1(t,e){t=ye(t);const n=t.dep;n&&Gd(n)}function st(t){return!!(t&&t.__v_isRef===!0)}function rt(t){return N1(t,!1)}function Uh(t){return N1(t,!0)}function N1(t,e){return st(t)?t:new yA(t,e)}class yA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Ya(e)}get value(){return P1(this),this._value}set value(e){const n=this.__v_isShallow||Cu(e)||oo(e);e=n?e:ye(e),Ga(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ya(e),M1(this))}}function O(t){return st(t)?t.value:t}const vA={get:(t,e,n)=>O(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function L1(t){return Ri(t)?t:new Proxy(t,vA)}function bA(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=F1(t,n);return e}class wA{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qk(ye(this._object),this._key)}}function F1(t,e,n){const i=t[e];return st(i)?i:new wA(t,e,n)}var U1;class EA{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[U1]=!1,this._dirty=!0,this.effect=new Vg(e,()=>{this._dirty||(this._dirty=!0,M1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ye(this);return P1(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}U1="__v_isReadonly";function IA(t,e,n=!1){let i,s;const r=de(t);return r?(i=t,s=jn):(i=t.get,s=t.set),new EA(i,s,r||!s,n)}function cs(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Vh(r,e,n)}return s}function Hn(t,e,n,i){if(de(t)){const r=cs(t,e,n,i);return r&&m1(r)&&r.catch(o=>{Vh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Hn(t[r],e,n,i));return s}function Vh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){cs(c,null,10,[t,o,a]);return}}TA(t,n,s,i)}function TA(t,e,n,i=!0){console.error(t)}let Qa=!1,Yd=!1;const jt=[];let ti=0;const Qr=[];let Ei=null,zs=0;const V1=Promise.resolve();let Wg=null;function qg(t){const e=Wg||V1;return t?e.then(this?t.bind(this):t):e}function SA(t){let e=ti+1,n=jt.length;for(;e<n;){const i=e+n>>>1;Xa(jt[i])<t?e=i+1:n=i}return e}function Kg(t){(!jt.length||!jt.includes(t,Qa&&t.allowRecurse?ti+1:ti))&&(t.id==null?jt.push(t):jt.splice(SA(t.id),0,t),B1())}function B1(){!Qa&&!Yd&&(Yd=!0,Wg=V1.then(z1))}function xA(t){const e=jt.indexOf(t);e>ti&&jt.splice(e,1)}function CA(t){le(t)?Qr.push(...t):(!Ei||!Ei.includes(t,t.allowRecurse?zs+1:zs))&&Qr.push(t),B1()}function Dy(t,e=Qa?ti+1:0){for(;e<jt.length;e++){const n=jt[e];n&&n.pre&&(jt.splice(e,1),e--,n())}}function $1(t){if(Qr.length){const e=[...new Set(Qr)];if(Qr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ei.sort((n,i)=>Xa(n)-Xa(i)),zs=0;zs<Ei.length;zs++)Ei[zs]();Ei=null,zs=0}}const Xa=t=>t.id==null?1/0:t.id,kA=(t,e)=>{const n=Xa(t)-Xa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function z1(t){Yd=!1,Qa=!0,jt.sort(kA);const e=jn;try{for(ti=0;ti<jt.length;ti++){const n=jt[ti];n&&n.active!==!1&&cs(n,null,14)}}finally{ti=0,jt.length=0,$1(),Qa=!1,Wg=null,(jt.length||Qr.length)&&z1()}}function AA(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ze;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ze;f&&(s=n.map(d=>bt(d)?d.trim():d)),h&&(s=n.map(Wd))}let a,c=i[a=Yf(e)]||i[a=Yf(ui(e))];!c&&r&&(c=i[a=Yf(wr(e))]),c&&Hn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hn(l,t,6,s)}}function j1(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!de(t)){const c=l=>{const u=j1(l,e,!0);u&&(a=!0,en(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Je(t)&&i.set(t,null),null):(le(r)?r.forEach(c=>o[c]=null):en(o,r),Je(t)&&i.set(t,o),o)}function Bh(t,e){return!t||!Oh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,wr(e))||Ae(t,e))}let yn=null,$h=null;function ku(t){const e=yn;return yn=t,$h=t&&t.type.__scopeId||null,e}function Rc(t){$h=t}function Dc(){$h=null}function zh(t,e=yn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&By(-1);const r=ku(e);let o;try{o=t(...s)}finally{ku(r),i._d&&By(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qf(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=t;let m,_;const v=ku(t);try{if(n.shapeFlag&4){const E=s||i;m=ei(u.call(E,E,h,r,d,f,p)),_=c}else{const E=e;m=ei(E.length>1?E(r,{attrs:c,slots:a,emit:l}):E(r,null)),_=e.props?c:RA(c)}}catch(E){Ca.length=0,Vh(E,t,1),m=mt(ar)}let b=m;if(_&&g!==!1){const E=Object.keys(_),{shapeFlag:I}=b;E.length&&I&7&&(o&&E.some(Pg)&&(_=DA(_,o)),b=lo(b,_))}return n.dirs&&(b=lo(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),m=b,ku(v),m}const RA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oh(n))&&((e||(e={}))[n]=t[n]);return e},DA=(t,e)=>{const n={};for(const i in t)(!Pg(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function OA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Oy(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Bh(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Oy(i,o,l):!0:!!o;return!1}function Oy(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Bh(n,r))return!0}return!1}function PA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const MA=t=>t.__isSuspense;function NA(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):CA(t)}function au(t,e){if(ut){let n=ut.provides;const i=ut.parent&&ut.parent.provides;i===n&&(n=ut.provides=Object.create(i)),n[t]=e}}function hn(t,e,n=!1){const i=ut||yn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(i.proxy):e}}function LA(t,e){return Gg(t,null,{flush:"post"})}const wl={};function ls(t,e,n){return Gg(t,e,n)}function Gg(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ze){const a=Fg()===(ut==null?void 0:ut.scope)?ut:null;let c,l=!1,u=!1;if(st(t)?(c=()=>t.value,l=Cu(t)):Ri(t)?(c=()=>t,i=!0):le(t)?(u=!0,l=t.some(b=>Ri(b)||Cu(b)),c=()=>t.map(b=>{if(st(b))return b.value;if(Ri(b))return Hs(b);if(de(b))return cs(b,a,2)})):de(t)?e?c=()=>cs(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Hn(t,a,3,[f])}:c=jn,e&&i){const b=c;c=()=>Hs(b())}let h,f=b=>{h=_.onStop=()=>{cs(b,a,4)}},d;if(Za)if(f=jn,e?n&&Hn(e,a,3,[c(),u?[]:void 0,f]):c(),s==="sync"){const b=SR();d=b.__watcherHandles||(b.__watcherHandles=[])}else return jn;let p=u?new Array(t.length).fill(wl):wl;const g=()=>{if(_.active)if(e){const b=_.run();(i||l||(u?b.some((E,I)=>Ga(E,p[I])):Ga(b,p)))&&(h&&h(),Hn(e,a,3,[b,p===wl?void 0:u&&p[0]===wl?[]:p,f]),p=b)}else _.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>rn(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Kg(g));const _=new Vg(c,m);e?n?g():p=_.run():s==="post"?rn(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&Mg(a.scope.effects,_)};return d&&d.push(v),v}function FA(t,e,n){const i=this.proxy,s=bt(t)?t.includes(".")?H1(i,t):()=>i[t]:t.bind(i,i);let r;de(e)?r=e:(r=e.handler,n=e);const o=ut;uo(this);const a=Gg(s,r.bind(i),n);return o?uo(o):er(),a}function H1(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Hs(t,e){if(!Je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))Hs(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)Hs(t[n],e);else if(g1(t)||Yr(t))t.forEach(n=>{Hs(n,e)});else if(y1(t))for(const n in t)Hs(t[n],e);return t}function Er(t){return de(t)?{setup:t,name:t.name}:t}const cu=t=>!!t.type.__asyncLoader,W1=t=>t.type.__isKeepAlive;function UA(t,e){q1(t,"a",e)}function VA(t,e){q1(t,"da",e)}function q1(t,e,n=ut){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)W1(s.parent.vnode)&&BA(i,e,n,s),s=s.parent}}function BA(t,e,n,i){const s=jh(e,t,i,!0);Qg(()=>{Mg(i[e],s)},n)}function jh(t,e,n=ut,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Po(),uo(n);const a=Hn(e,n,t,o);return er(),Mo(),a});return i?s.unshift(r):s.push(r),r}}const ji=t=>(e,n=ut)=>(!Za||t==="sp")&&jh(t,(...i)=>e(...i),n),$A=ji("bm"),Yg=ji("m"),zA=ji("bu"),jA=ji("u"),K1=ji("bum"),Qg=ji("um"),G1=ji("sp"),HA=ji("rtg"),WA=ji("rtc");function qA(t,e=ut){jh("ec",t,e)}function co(t,e){const n=yn;if(n===null)return t;const i=qh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=ze]=e[r];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Hs(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ds(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Po(),Hn(c,n,8,[t.el,a,t,e]),Mo())}}const Y1="components";function Oc(t,e){return GA(Y1,t,!0,e)||t}const KA=Symbol();function GA(t,e,n=!0,i=!1){const s=yn||ut;if(s){const r=s.type;if(t===Y1){const a=IR(r,!1);if(a&&(a===e||a===ui(e)||a===Nh(ui(e))))return r}const o=Py(s[t]||r[t],e)||Py(s.appContext[t],e);return!o&&i?r:o}}function Py(t,e){return t&&(t[e]||t[ui(e)]||t[Nh(ui(e))])}function or(t,e,n,i){let s;const r=n&&n[i];if(le(t)||bt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Qd=t=>t?oE(t)?qh(t)||t.proxy:Qd(t.parent):null,xa=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qd(t.parent),$root:t=>Qd(t.root),$emit:t=>t.emit,$options:t=>Xg(t),$forceUpdate:t=>t.f||(t.f=()=>Kg(t.update)),$nextTick:t=>t.n||(t.n=qg.bind(t.proxy)),$watch:t=>FA.bind(t)}),Xf=(t,e)=>t!==ze&&!t.__isScriptSetup&&Ae(t,e),YA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Xf(i,e))return o[e]=1,i[e];if(s!==ze&&Ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Ae(l,e))return o[e]=3,r[e];if(n!==ze&&Ae(n,e))return o[e]=4,n[e];Xd&&(o[e]=0)}}const u=xa[e];let h,f;if(u)return e==="$attrs"&&dn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ze&&Ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Ae(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Xf(s,e)?(s[e]=n,!0):i!==ze&&Ae(i,e)?(i[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==ze&&Ae(t,o)||Xf(e,o)||(a=r[0])&&Ae(a,o)||Ae(i,o)||Ae(xa,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xd=!0;function QA(t){const e=Xg(t),n=t.proxy,i=t.ctx;Xd=!1,e.beforeCreate&&My(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:v,destroyed:b,unmounted:E,render:I,renderTracked:A,renderTriggered:x,errorCaptured:S,serverPrefetch:U,expose:Q,inheritAttrs:te,components:ue,directives:Ze,filters:Qe}=e;if(l&&XA(l,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const Ce=o[ge];de(Ce)&&(i[ge]=Ce.bind(n))}if(s){const ge=s.call(n,n);Je(ge)&&(t.data=_s(ge))}if(Xd=!0,r)for(const ge in r){const Ce=r[ge],Nt=de(Ce)?Ce.bind(n,n):de(Ce.get)?Ce.get.bind(n,n):jn,tn=!de(Ce)&&de(Ce.set)?Ce.set.bind(n):jn,Lt=Ie({get:Nt,set:tn});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:lt=>Lt.value=lt})}if(a)for(const ge in a)Q1(a[ge],i,n,ge);if(c){const ge=de(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(Ce=>{au(Ce,ge[Ce])})}u&&My(u,t,"c");function me(ge,Ce){le(Ce)?Ce.forEach(Nt=>ge(Nt.bind(n))):Ce&&ge(Ce.bind(n))}if(me($A,h),me(Yg,f),me(zA,d),me(jA,p),me(UA,g),me(VA,m),me(qA,S),me(WA,A),me(HA,x),me(K1,v),me(Qg,E),me(G1,U),le(Q))if(Q.length){const ge=t.exposed||(t.exposed={});Q.forEach(Ce=>{Object.defineProperty(ge,Ce,{get:()=>n[Ce],set:Nt=>n[Ce]=Nt})})}else t.exposed||(t.exposed={});I&&t.render===jn&&(t.render=I),te!=null&&(t.inheritAttrs=te),ue&&(t.components=ue),Ze&&(t.directives=Ze)}function XA(t,e,n=jn,i=!1){le(t)&&(t=Jd(t));for(const s in t){const r=t[s];let o;Je(r)?"default"in r?o=hn(r.from||s,r.default,!0):o=hn(r.from||s):o=hn(r),st(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function My(t,e,n){Hn(le(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Q1(t,e,n,i){const s=i.includes(".")?H1(n,i):()=>n[i];if(bt(t)){const r=e[t];de(r)&&ls(s,r)}else if(de(t))ls(s,t.bind(n));else if(Je(t))if(le(t))t.forEach(r=>Q1(r,e,n,i));else{const r=de(t.handler)?t.handler.bind(n):e[t.handler];de(r)&&ls(s,r,t)}}function Xg(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Au(c,l,o,!0)),Au(c,e,o)),Je(e)&&r.set(e,c),c}function Au(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Au(t,r,n,!0),s&&s.forEach(o=>Au(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=JA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const JA={data:Ny,props:Fs,emits:Fs,methods:Fs,computed:Fs,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Fs,directives:Fs,watch:eR,provide:Ny,inject:ZA};function Ny(t,e){return e?t?function(){return en(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function ZA(t,e){return Fs(Jd(t),Jd(e))}function Jd(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?en(en(Object.create(null),t),e):e}function eR(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=Jt(t[i],e[i]);return n}function tR(t,e,n,i=!1){const s={},r={};Su(r,Wh,1),t.propsDefaults=Object.create(null),X1(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:_A(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function nR(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ye(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Bh(t.emitsOptions,f))continue;const d=e[f];if(c)if(Ae(r,f))d!==r[f]&&(r[f]=d,l=!0);else{const p=ui(f);s[p]=Zd(c,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,l=!0)}}}else{X1(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=wr(h))===h||!Ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Zd(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ae(e,h))&&(delete r[h],l=!0)}l&&Pi(t,"set","$attrs")}function X1(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ru(c))continue;const l=e[c];let u;s&&Ae(s,u=ui(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bh(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=ye(n),l=a||ze;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zd(s,c,h,l[h],t,!Ae(l,h))}}return o}function Zd(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&de(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(uo(s),i=l[n]=c.call(null,e),er())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===wr(n))&&(i=!0))}return i}function J1(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!de(t)){const u=h=>{c=!0;const[f,d]=J1(h,e,!0);en(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Je(t)&&i.set(t,Gr),Gr;if(le(r))for(let u=0;u<r.length;u++){const h=ui(r[u]);Ly(h)&&(o[h]=ze)}else if(r)for(const u in r){const h=ui(u);if(Ly(h)){const f=r[u],d=o[h]=le(f)||de(f)?{type:f}:Object.assign({},f);if(d){const p=Vy(Boolean,d.type),g=Vy(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||Ae(d,"default"))&&a.push(h)}}}const l=[o,a];return Je(t)&&i.set(t,l),l}function Ly(t){return t[0]!=="$"}function Fy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Uy(t,e){return Fy(t)===Fy(e)}function Vy(t,e){return le(e)?e.findIndex(n=>Uy(n,t)):de(e)&&Uy(e,t)?0:-1}const Z1=t=>t[0]==="_"||t==="$stable",Jg=t=>le(t)?t.map(ei):[ei(t)],iR=(t,e,n)=>{if(e._n)return e;const i=zh((...s)=>Jg(e(...s)),n);return i._c=!1,i},eE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Z1(s))continue;const r=t[s];if(de(r))e[s]=iR(s,r,i);else if(r!=null){const o=Jg(r);e[s]=()=>o}}},tE=(t,e)=>{const n=Jg(e);t.slots.default=()=>n},sR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Su(e,"_",n)):eE(e,t.slots={})}else t.slots={},e&&tE(t,e);Su(t.slots,Wh,1)},rR=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(en(s,e),!n&&a===1&&delete s._):(r=!e.$stable,eE(e,s)),o=e}else e&&(tE(t,e),o={default:1});if(r)for(const a in s)!Z1(a)&&!(a in o)&&delete s[a]};function nE(){return{app:null,config:{isNativeTag:Lk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oR=0;function aR(t,e){return function(i,s=null){de(i)||(i=Object.assign({},i)),s!=null&&!Je(s)&&(s=null);const r=nE(),o=new Set;let a=!1;const c=r.app={_uid:oR++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:lE,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&de(l.install)?(o.add(l),l.install(c,...u)):de(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=mt(i,s);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,qh(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function ep(t,e,n,i,s=!1){if(le(t)){t.forEach((f,d)=>ep(f,e&&(le(e)?e[d]:e),n,i,s));return}if(cu(i)&&!s)return;const r=i.shapeFlag&4?qh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ze?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(bt(l)?(u[l]=null,Ae(h,l)&&(h[l]=null)):st(l)&&(l.value=null)),de(c))cs(c,a,12,[o,u]);else{const f=bt(c),d=st(c);if(f||d){const p=()=>{if(t.f){const g=f?Ae(h,c)?h[c]:u[c]:c.value;s?le(g)&&Mg(g,r):le(g)?g.includes(r)||g.push(r):f?(u[c]=[r],Ae(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Ae(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,rn(p,n)):p()}}}const rn=NA;function cR(t){return lR(t)}function lR(t,e){const n=zk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=jn,insertStaticContent:p}=t,g=(y,w,T,C=null,D=null,L=null,z=!1,N=null,F=!!w.dynamicChildren)=>{if(y===w)return;y&&!Zo(y,w)&&(C=$(y),lt(y,D,L,!0),y=null),w.patchFlag===-2&&(F=!1,w.dynamicChildren=null);const{type:P,ref:Z,shapeFlag:W}=w;switch(P){case Hh:m(y,w,T,C);break;case ar:_(y,w,T,C);break;case lu:y==null&&v(w,T,C,z);break;case Ue:ue(y,w,T,C,D,L,z,N,F);break;default:W&1?I(y,w,T,C,D,L,z,N,F):W&6?Ze(y,w,T,C,D,L,z,N,F):(W&64||W&128)&&P.process(y,w,T,C,D,L,z,N,F,ke)}Z!=null&&D&&ep(Z,y&&y.ref,L,w||y,!w)},m=(y,w,T,C)=>{if(y==null)i(w.el=a(w.children),T,C);else{const D=w.el=y.el;w.children!==y.children&&l(D,w.children)}},_=(y,w,T,C)=>{y==null?i(w.el=c(w.children||""),T,C):w.el=y.el},v=(y,w,T,C)=>{[y.el,y.anchor]=p(y.children,w,T,C,y.el,y.anchor)},b=({el:y,anchor:w},T,C)=>{let D;for(;y&&y!==w;)D=f(y),i(y,T,C),y=D;i(w,T,C)},E=({el:y,anchor:w})=>{let T;for(;y&&y!==w;)T=f(y),s(y),y=T;s(w)},I=(y,w,T,C,D,L,z,N,F)=>{z=z||w.type==="svg",y==null?A(w,T,C,D,L,z,N,F):U(y,w,D,L,z,N,F)},A=(y,w,T,C,D,L,z,N)=>{let F,P;const{type:Z,props:W,shapeFlag:ee,transition:ae,dirs:ve}=y;if(F=y.el=o(y.type,L,W&&W.is,W),ee&8?u(F,y.children):ee&16&&S(y.children,F,null,C,D,L&&Z!=="foreignObject",z,N),ve&&Ds(y,null,C,"created"),x(F,y,y.scopeId,z,C),W){for(const Le in W)Le!=="value"&&!ru(Le)&&r(F,Le,null,W[Le],L,y.children,C,D,B);"value"in W&&r(F,"value",null,W.value),(P=W.onVnodeBeforeMount)&&Xn(P,C,y)}ve&&Ds(y,null,C,"beforeMount");const Ve=(!D||D&&!D.pendingBranch)&&ae&&!ae.persisted;Ve&&ae.beforeEnter(F),i(F,w,T),((P=W&&W.onVnodeMounted)||Ve||ve)&&rn(()=>{P&&Xn(P,C,y),Ve&&ae.enter(F),ve&&Ds(y,null,C,"mounted")},D)},x=(y,w,T,C,D)=>{if(T&&d(y,T),C)for(let L=0;L<C.length;L++)d(y,C[L]);if(D){let L=D.subTree;if(w===L){const z=D.vnode;x(y,z,z.scopeId,z.slotScopeIds,D.parent)}}},S=(y,w,T,C,D,L,z,N,F=0)=>{for(let P=F;P<y.length;P++){const Z=y[P]=N?Zi(y[P]):ei(y[P]);g(null,Z,w,T,C,D,L,z,N)}},U=(y,w,T,C,D,L,z)=>{const N=w.el=y.el;let{patchFlag:F,dynamicChildren:P,dirs:Z}=w;F|=y.patchFlag&16;const W=y.props||ze,ee=w.props||ze;let ae;T&&Os(T,!1),(ae=ee.onVnodeBeforeUpdate)&&Xn(ae,T,w,y),Z&&Ds(w,y,T,"beforeUpdate"),T&&Os(T,!0);const ve=D&&w.type!=="foreignObject";if(P?Q(y.dynamicChildren,P,N,T,C,ve,L):z||Ce(y,w,N,null,T,C,ve,L,!1),F>0){if(F&16)te(N,w,W,ee,T,C,D);else if(F&2&&W.class!==ee.class&&r(N,"class",null,ee.class,D),F&4&&r(N,"style",W.style,ee.style,D),F&8){const Ve=w.dynamicProps;for(let Le=0;Le<Ve.length;Le++){const ht=Ve[Le],Mn=W[ht],Pr=ee[ht];(Pr!==Mn||ht==="value")&&r(N,ht,Mn,Pr,D,y.children,T,C,B)}}F&1&&y.children!==w.children&&u(N,w.children)}else!z&&P==null&&te(N,w,W,ee,T,C,D);((ae=ee.onVnodeUpdated)||Z)&&rn(()=>{ae&&Xn(ae,T,w,y),Z&&Ds(w,y,T,"updated")},C)},Q=(y,w,T,C,D,L,z)=>{for(let N=0;N<w.length;N++){const F=y[N],P=w[N],Z=F.el&&(F.type===Ue||!Zo(F,P)||F.shapeFlag&70)?h(F.el):T;g(F,P,Z,null,C,D,L,z,!0)}},te=(y,w,T,C,D,L,z)=>{if(T!==C){if(T!==ze)for(const N in T)!ru(N)&&!(N in C)&&r(y,N,T[N],null,z,w.children,D,L,B);for(const N in C){if(ru(N))continue;const F=C[N],P=T[N];F!==P&&N!=="value"&&r(y,N,P,F,z,w.children,D,L,B)}"value"in C&&r(y,"value",T.value,C.value)}},ue=(y,w,T,C,D,L,z,N,F)=>{const P=w.el=y?y.el:a(""),Z=w.anchor=y?y.anchor:a("");let{patchFlag:W,dynamicChildren:ee,slotScopeIds:ae}=w;ae&&(N=N?N.concat(ae):ae),y==null?(i(P,T,C),i(Z,T,C),S(w.children,T,Z,D,L,z,N,F)):W>0&&W&64&&ee&&y.dynamicChildren?(Q(y.dynamicChildren,ee,T,D,L,z,N),(w.key!=null||D&&w===D.subTree)&&iE(y,w,!0)):Ce(y,w,T,Z,D,L,z,N,F)},Ze=(y,w,T,C,D,L,z,N,F)=>{w.slotScopeIds=N,y==null?w.shapeFlag&512?D.ctx.activate(w,T,C,z,F):Qe(w,T,C,D,L,z,F):pe(y,w,F)},Qe=(y,w,T,C,D,L,z)=>{const N=y.component=yR(y,C,D);if(W1(y)&&(N.ctx.renderer=ke),vR(N),N.asyncDep){if(D&&D.registerDep(N,me),!y.el){const F=N.subTree=mt(ar);_(null,F,w,T)}return}me(N,y,w,T,D,L,z)},pe=(y,w,T)=>{const C=w.component=y.component;if(OA(y,w,T))if(C.asyncDep&&!C.asyncResolved){ge(C,w,T);return}else C.next=w,xA(C.update),C.update();else w.el=y.el,C.vnode=w},me=(y,w,T,C,D,L,z)=>{const N=()=>{if(y.isMounted){let{next:Z,bu:W,u:ee,parent:ae,vnode:ve}=y,Ve=Z,Le;Os(y,!1),Z?(Z.el=ve.el,ge(y,Z,z)):Z=ve,W&&ou(W),(Le=Z.props&&Z.props.onVnodeBeforeUpdate)&&Xn(Le,ae,Z,ve),Os(y,!0);const ht=Qf(y),Mn=y.subTree;y.subTree=ht,g(Mn,ht,h(Mn.el),$(Mn),y,D,L),Z.el=ht.el,Ve===null&&PA(y,ht.el),ee&&rn(ee,D),(Le=Z.props&&Z.props.onVnodeUpdated)&&rn(()=>Xn(Le,ae,Z,ve),D)}else{let Z;const{el:W,props:ee}=w,{bm:ae,m:ve,parent:Ve}=y,Le=cu(w);if(Os(y,!1),ae&&ou(ae),!Le&&(Z=ee&&ee.onVnodeBeforeMount)&&Xn(Z,Ve,w),Os(y,!0),W&&_e){const ht=()=>{y.subTree=Qf(y),_e(W,y.subTree,y,D,null)};Le?w.type.__asyncLoader().then(()=>!y.isUnmounted&&ht()):ht()}else{const ht=y.subTree=Qf(y);g(null,ht,T,C,y,D,L),w.el=ht.el}if(ve&&rn(ve,D),!Le&&(Z=ee&&ee.onVnodeMounted)){const ht=w;rn(()=>Xn(Z,Ve,ht),D)}(w.shapeFlag&256||Ve&&cu(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&y.a&&rn(y.a,D),y.isMounted=!0,w=T=C=null}},F=y.effect=new Vg(N,()=>Kg(P),y.scope),P=y.update=()=>F.run();P.id=y.uid,Os(y,!0),P()},ge=(y,w,T)=>{w.component=y;const C=y.vnode.props;y.vnode=w,y.next=null,nR(y,w.props,C,T),rR(y,w.children,T),Po(),Dy(),Mo()},Ce=(y,w,T,C,D,L,z,N,F=!1)=>{const P=y&&y.children,Z=y?y.shapeFlag:0,W=w.children,{patchFlag:ee,shapeFlag:ae}=w;if(ee>0){if(ee&128){tn(P,W,T,C,D,L,z,N,F);return}else if(ee&256){Nt(P,W,T,C,D,L,z,N,F);return}}ae&8?(Z&16&&B(P,D,L),W!==P&&u(T,W)):Z&16?ae&16?tn(P,W,T,C,D,L,z,N,F):B(P,D,L,!0):(Z&8&&u(T,""),ae&16&&S(W,T,C,D,L,z,N,F))},Nt=(y,w,T,C,D,L,z,N,F)=>{y=y||Gr,w=w||Gr;const P=y.length,Z=w.length,W=Math.min(P,Z);let ee;for(ee=0;ee<W;ee++){const ae=w[ee]=F?Zi(w[ee]):ei(w[ee]);g(y[ee],ae,T,null,D,L,z,N,F)}P>Z?B(y,D,L,!0,!1,W):S(w,T,C,D,L,z,N,F,W)},tn=(y,w,T,C,D,L,z,N,F)=>{let P=0;const Z=w.length;let W=y.length-1,ee=Z-1;for(;P<=W&&P<=ee;){const ae=y[P],ve=w[P]=F?Zi(w[P]):ei(w[P]);if(Zo(ae,ve))g(ae,ve,T,null,D,L,z,N,F);else break;P++}for(;P<=W&&P<=ee;){const ae=y[W],ve=w[ee]=F?Zi(w[ee]):ei(w[ee]);if(Zo(ae,ve))g(ae,ve,T,null,D,L,z,N,F);else break;W--,ee--}if(P>W){if(P<=ee){const ae=ee+1,ve=ae<Z?w[ae].el:C;for(;P<=ee;)g(null,w[P]=F?Zi(w[P]):ei(w[P]),T,ve,D,L,z,N,F),P++}}else if(P>ee)for(;P<=W;)lt(y[P],D,L,!0),P++;else{const ae=P,ve=P,Ve=new Map;for(P=ve;P<=ee;P++){const pn=w[P]=F?Zi(w[P]):ei(w[P]);pn.key!=null&&Ve.set(pn.key,P)}let Le,ht=0;const Mn=ee-ve+1;let Pr=!1,by=0;const Jo=new Array(Mn);for(P=0;P<Mn;P++)Jo[P]=0;for(P=ae;P<=W;P++){const pn=y[P];if(ht>=Mn){lt(pn,D,L,!0);continue}let Qn;if(pn.key!=null)Qn=Ve.get(pn.key);else for(Le=ve;Le<=ee;Le++)if(Jo[Le-ve]===0&&Zo(pn,w[Le])){Qn=Le;break}Qn===void 0?lt(pn,D,L,!0):(Jo[Qn-ve]=P+1,Qn>=by?by=Qn:Pr=!0,g(pn,w[Qn],T,null,D,L,z,N,F),ht++)}const wy=Pr?uR(Jo):Gr;for(Le=wy.length-1,P=Mn-1;P>=0;P--){const pn=ve+P,Qn=w[pn],Ey=pn+1<Z?w[pn+1].el:C;Jo[P]===0?g(null,Qn,T,Ey,D,L,z,N,F):Pr&&(Le<0||P!==wy[Le]?Lt(Qn,T,Ey,2):Le--)}}},Lt=(y,w,T,C,D=null)=>{const{el:L,type:z,transition:N,children:F,shapeFlag:P}=y;if(P&6){Lt(y.component.subTree,w,T,C);return}if(P&128){y.suspense.move(w,T,C);return}if(P&64){z.move(y,w,T,ke);return}if(z===Ue){i(L,w,T);for(let W=0;W<F.length;W++)Lt(F[W],w,T,C);i(y.anchor,w,T);return}if(z===lu){b(y,w,T);return}if(C!==2&&P&1&&N)if(C===0)N.beforeEnter(L),i(L,w,T),rn(()=>N.enter(L),D);else{const{leave:W,delayLeave:ee,afterLeave:ae}=N,ve=()=>i(L,w,T),Ve=()=>{W(L,()=>{ve(),ae&&ae()})};ee?ee(L,ve,Ve):Ve()}else i(L,w,T)},lt=(y,w,T,C=!1,D=!1)=>{const{type:L,props:z,ref:N,children:F,dynamicChildren:P,shapeFlag:Z,patchFlag:W,dirs:ee}=y;if(N!=null&&ep(N,null,T,y,!0),Z&256){w.ctx.deactivate(y);return}const ae=Z&1&&ee,ve=!cu(y);let Ve;if(ve&&(Ve=z&&z.onVnodeBeforeUnmount)&&Xn(Ve,w,y),Z&6)k(y.component,T,C);else{if(Z&128){y.suspense.unmount(T,C);return}ae&&Ds(y,null,w,"beforeUnmount"),Z&64?y.type.remove(y,w,T,D,ke,C):P&&(L!==Ue||W>0&&W&64)?B(P,w,T,!1,!0):(L===Ue&&W&384||!D&&Z&16)&&B(F,w,T),C&&Tn(y)}(ve&&(Ve=z&&z.onVnodeUnmounted)||ae)&&rn(()=>{Ve&&Xn(Ve,w,y),ae&&Ds(y,null,w,"unmounted")},T)},Tn=y=>{const{type:w,el:T,anchor:C,transition:D}=y;if(w===Ue){Yn(T,C);return}if(w===lu){E(y);return}const L=()=>{s(T),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:z,delayLeave:N}=D,F=()=>z(T,L);N?N(y.el,L,F):F()}else L()},Yn=(y,w)=>{let T;for(;y!==w;)T=f(y),s(y),y=T;s(w)},k=(y,w,T)=>{const{bum:C,scope:D,update:L,subTree:z,um:N}=y;C&&ou(C),D.stop(),L&&(L.active=!1,lt(z,y,w,T)),N&&rn(N,w),rn(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},B=(y,w,T,C=!1,D=!1,L=0)=>{for(let z=L;z<y.length;z++)lt(y[z],w,T,C,D)},$=y=>y.shapeFlag&6?$(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),X=(y,w,T)=>{y==null?w._vnode&&lt(w._vnode,null,null,!0):g(w._vnode||null,y,w,null,null,null,T),Dy(),$1(),w._vnode=y},ke={p:g,um:lt,m:Lt,r:Tn,mt:Qe,mc:S,pc:Ce,pbc:Q,n:$,o:t};let et,_e;return e&&([et,_e]=e(ke)),{render:X,hydrate:et,createApp:aR(X,et)}}function Os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function iE(t,e,n=!1){const i=t.children,s=e.children;if(le(i)&&le(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Zi(s[r]),a.el=o.el),n||iE(o,a)),a.type===Hh&&(a.el=o.el)}}function uR(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const hR=t=>t.__isTeleport,Ue=Symbol(void 0),Hh=Symbol(void 0),ar=Symbol(void 0),lu=Symbol(void 0),Ca=[];let Vn=null;function Y(t=!1){Ca.push(Vn=t?null:[])}function fR(){Ca.pop(),Vn=Ca[Ca.length-1]||null}let Ja=1;function By(t){Ja+=t}function sE(t){return t.dynamicChildren=Ja>0?Vn||Gr:null,fR(),Ja>0&&Vn&&Vn.push(t),t}function ce(t,e,n,i,s,r){return sE(re(t,e,n,i,s,r,!0))}function fn(t,e,n,i,s){return sE(mt(t,e,n,i,s,!0))}function tp(t){return t?t.__v_isVNode===!0:!1}function Zo(t,e){return t.type===e.type&&t.key===e.key}const Wh="__vInternal",rE=({key:t})=>t??null,uu=({ref:t,ref_key:e,ref_for:n})=>t!=null?bt(t)||st(t)||de(t)?{i:yn,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,i=0,s=null,r=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rE(e),ref:e&&uu(e),scopeId:$h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return a?(Zg(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),Ja>0&&!o&&Vn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Vn.push(c),c}const mt=dR;function dR(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===KA)&&(t=ar),tp(t)){const a=lo(t,e,!0);return n&&Zg(a,n),Ja>0&&!r&&Vn&&(a.shapeFlag&6?Vn[Vn.indexOf(t)]=a:Vn.push(a)),a.patchFlag|=-2,a}if(TR(t)&&(t=t.__vccOpts),e){e=pR(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=gs(a)),Je(c)&&(Fh(c)&&!le(c)&&(c=en({},c)),e.style=Oo(c))}const o=bt(t)?1:MA(t)?128:hR(t)?64:Je(t)?4:de(t)?2:0;return re(t,e,n,i,s,o,r,!0)}function pR(t){return t?Fh(t)||Wh in t?en({},t):t:null}function lo(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?gR(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rE(a),ref:e&&e.ref?n&&s?le(s)?s.concat(uu(e)):[s,uu(e)]:uu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lo(t.ssContent),ssFallback:t.ssFallback&&lo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pt(t=" ",e=0){return mt(Hh,null,t,e)}function tt(t="",e=!1){return e?(Y(),fn(ar,null,t)):mt(ar,null,t)}function ei(t){return t==null||typeof t=="boolean"?mt(ar):le(t)?mt(Ue,null,t.slice()):typeof t=="object"?Zi(t):mt(Hh,null,String(t))}function Zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lo(t)}function Zg(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Zg(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Wh in e)?e._ctx=yn:s===3&&yn&&(yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:yn},n=32):(e=String(e),i&64?(n=16,e=[pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function gR(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=gs([e.class,i.class]));else if(s==="style")e.style=Oo([e.style,i.style]);else if(Oh(s)){const r=e[s],o=i[s];o&&r!==o&&!(le(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Xn(t,e,n,i=null){Hn(t,e,7,[n,i])}const mR=nE();let _R=0;function yR(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||mR,r={uid:_R++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new v1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J1(i,s),emitsOptions:j1(i,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:i.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=AA.bind(null,r),t.ce&&t.ce(r),r}let ut=null;const Pc=()=>ut||yn,uo=t=>{ut=t,t.scope.on()},er=()=>{ut&&ut.scope.off(),ut=null};function oE(t){return t.vnode.shapeFlag&4}let Za=!1;function vR(t,e=!1){Za=e;const{props:n,children:i}=t.vnode,s=oE(t);tR(t,n,s,e),sR(t,i);const r=s?bR(t,e):void 0;return Za=!1,r}function bR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ao(new Proxy(t.ctx,YA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?ER(t):null;uo(t),Po();const r=cs(i,t,0,[t.props,s]);if(Mo(),er(),m1(r)){if(r.then(er,er),e)return r.then(o=>{$y(t,o,e)}).catch(o=>{Vh(o,t,0)});t.asyncDep=r}else $y(t,r,e)}else aE(t,e)}function $y(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=L1(e)),aE(t,n)}let zy;function aE(t,e,n){const i=t.type;if(!t.render){if(!e&&zy&&!i.render){const s=i.template||Xg(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=en(en({isCustomElement:r,delimiters:a},o),c);i.render=zy(s,l)}}t.render=i.render||jn}uo(t),Po(),QA(t),Mo(),er()}function wR(t){return new Proxy(t.attrs,{get(e,n){return dn(t,"get","$attrs"),e[n]}})}function ER(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=wR(t))},slots:t.slots,emit:t.emit,expose:e}}function qh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(L1(ao(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xa)return xa[n](t)},has(e,n){return n in e||n in xa}}))}function IR(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function TR(t){return de(t)&&"__vccOpts"in t}const Ie=(t,e)=>IA(t,e,Za);function No(t,e,n){const i=arguments.length;return i===2?Je(e)&&!le(e)?tp(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&tp(n)&&(n=[n]),mt(t,e,n))}const cE=Symbol(""),SR=()=>hn(cE),lE="3.2.47",xR="http://www.w3.org/2000/svg",js=typeof document<"u"?document:null,jy=js&&js.createElement("template"),CR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?js.createElementNS(xR,t):js.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>js.createTextNode(t),createComment:t=>js.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>js.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{jy.innerHTML=i?`<svg>${t}</svg>`:t;const a=jy.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kR(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function AR(t,e,n){const i=t.style,s=bt(n);if(n&&!s){if(e&&!bt(e))for(const r in e)n[r]==null&&np(i,r,"");for(const r in n)np(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Hy=/\s*!important$/;function np(t,e,n){if(le(n))n.forEach(i=>np(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=RR(t,e);Hy.test(n)?t.setProperty(wr(i),n.replace(Hy,""),"important"):t[i]=n}}const Wy=["Webkit","Moz","ms"],Jf={};function RR(t,e){const n=Jf[e];if(n)return n;let i=ui(e);if(i!=="filter"&&i in t)return Jf[e]=i;i=Nh(i);for(let s=0;s<Wy.length;s++){const r=Wy[s]+i;if(r in t)return Jf[e]=r}return e}const qy="http://www.w3.org/1999/xlink";function DR(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qy,e.slice(6,e.length)):t.setAttributeNS(qy,e,n);else{const r=Nk(e);n==null||r&&!d1(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function OR(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=d1(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Vr(t,e,n,i){t.addEventListener(e,n,i)}function PR(t,e,n,i){t.removeEventListener(e,n,i)}function MR(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=NR(e);if(i){const l=r[e]=UR(i,s);Vr(t,a,l,c)}else o&&(PR(t,a,o,c),r[e]=void 0)}}const Ky=/(?:Once|Passive|Capture)$/;function NR(t){let e;if(Ky.test(t)){e={};let i;for(;i=t.match(Ky);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let Zf=0;const LR=Promise.resolve(),FR=()=>Zf||(LR.then(()=>Zf=0),Zf=Date.now());function UR(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hn(VR(i,n.value),e,5,[i])};return n.value=t,n.attached=FR(),n}function VR(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Gy=/^on[a-z]/,BR=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?kR(t,i,s):e==="style"?AR(t,n,i):Oh(e)?Pg(e)||MR(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$R(t,e,i,s))?OR(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),DR(t,e,i,s))};function $R(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Gy.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Gy.test(e)&&bt(n)?!1:e in t}function uE(t){const e=Pc();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>sp(r,s))},i=()=>{const s=t(e.proxy);ip(e.subTree,s),n(s)};LA(i),Yg(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Qg(()=>s.disconnect())})}function ip(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ip(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)sp(t.el,e);else if(t.type===Ue)t.children.forEach(n=>ip(n,e));else if(t.type===lu){let{el:n,anchor:i}=t;for(;n&&(sp(n,e),n!==i);)n=n.nextSibling}}function sp(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Yy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ou(e,n):e};function zR(t){t.target.composing=!0}function Qy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ho={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Yy(s);const r=i||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Wd(a)),t._assign(a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",zR),Vr(t,"compositionend",Qy),Vr(t,"change",Qy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=Yy(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Wd(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jR=["ctrl","shift","alt","meta"],HR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jR.some(n=>t[`${n}Key`]&&!e.includes(n))},fo=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=HR[e[s]];if(r&&r(n,e))return}return t(n,...i)},WR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qR=(t,e)=>n=>{if(!("key"in n))return;const i=wr(n.key);if(e.some(s=>s===i||WR[s]===i))return t(n)},KR=en({patchProp:BR},CR);let Xy;function GR(){return Xy||(Xy=cR(KR))}const YR=(...t)=>{const e=GR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=QR(i);if(!s)return;const r=e._component;!de(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function QR(t){return bt(t)?document.querySelector(t):t}var XR=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let hE;const Kh=t=>hE=t,fE=Symbol();function rp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ka;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ka||(ka={}));function JR(){const t=b1(!0),e=t.run(()=>rt({}));let n=[],i=[];const s=ao({install(r){Kh(s),s._a=r,r.provide(fE,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!XR?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dE=()=>{};function Jy(t,e,n,i=dE){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Fg()&&w1(s),s}function Mr(t,...e){t.slice().forEach(n=>{n(...e)})}function op(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];rp(s)&&rp(i)&&t.hasOwnProperty(n)&&!st(i)&&!Ri(i)?t[n]=op(s,i):t[n]=i}return t}const ZR=Symbol();function eD(t){return!rp(t)||!t.hasOwnProperty(ZR)}const{assign:Ji}=Object;function tD(t){return!!(st(t)&&t.effect)}function nD(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=bA(n.state.value[t]);return Ji(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=ao(Ie(()=>{Kh(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=pE(t,l,e,n,i,!0),c}function pE(t,e,n={},i,s,r){let o;const a=Ji({actions:{}},n),c={deep:!0};let l,u,h=ao([]),f=ao([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),rt({});let g;function m(x){let S;l=u=!1,typeof x=="function"?(x(i.state.value[t]),S={type:ka.patchFunction,storeId:t,events:d}):(op(i.state.value[t],x),S={type:ka.patchObject,payload:x,storeId:t,events:d});const U=g=Symbol();qg().then(()=>{g===U&&(l=!0)}),u=!0,Mr(h,S,i.state.value[t])}const _=r?function(){const{state:S}=n,U=S?S():{};this.$patch(Q=>{Ji(Q,U)})}:dE;function v(){o.stop(),h=[],f=[],i._s.delete(t)}function b(x,S){return function(){Kh(i);const U=Array.from(arguments),Q=[],te=[];function ue(pe){Q.push(pe)}function Ze(pe){te.push(pe)}Mr(f,{args:U,name:x,store:I,after:ue,onError:Ze});let Qe;try{Qe=S.apply(this&&this.$id===t?this:I,U)}catch(pe){throw Mr(te,pe),pe}return Qe instanceof Promise?Qe.then(pe=>(Mr(Q,pe),pe)).catch(pe=>(Mr(te,pe),Promise.reject(pe))):(Mr(Q,Qe),Qe)}}const E={_p:i,$id:t,$onAction:Jy.bind(null,f),$patch:m,$reset:_,$subscribe(x,S={}){const U=Jy(h,x,S.detached,()=>Q()),Q=o.run(()=>ls(()=>i.state.value[t],te=>{(S.flush==="sync"?u:l)&&x({storeId:t,type:ka.direct,events:d},te)},Ji({},c,S)));return U},$dispose:v},I=_s(E);i._s.set(t,I);const A=i._e.run(()=>(o=b1(),o.run(()=>e())));for(const x in A){const S=A[x];if(st(S)&&!tD(S)||Ri(S))r||(p&&eD(S)&&(st(S)?S.value=p[x]:op(S,p[x])),i.state.value[t][x]=S);else if(typeof S=="function"){const U=b(x,S);A[x]=U,a.actions[x]=S}}return Ji(I,A),Ji(ye(I),A),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:x=>{m(S=>{Ji(S,x)})}}),i._p.forEach(x=>{Ji(I,o.run(()=>x({store:I,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(I.$state,p),l=!0,u=!0,I}function em(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=Pc();return a=a||l&&hn(fE,null),a&&Kh(a),a=hE,a._s.has(i)||(r?pE(i,e,s,a):nD(i,s,a)),a._s.get(i)}return o.$id=i,o}function iD(t){{t=ye(t);const e={};for(const n in t){const i=t[n];(st(i)||Ri(i))&&(e[n]=F1(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw Lo(e)},Lo=function(t){return new Error("Firebase Database ("+gE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new rD;const f=r<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const p=l<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(t){const e=mE(t);return Gh.encodeByteArray(e,!0)},Ru=function(t){return _E(t).replace(/\./g,"")},Du=function(t){try{return Gh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){return yE(void 0,t)}function yE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aD(n)||(t[n]=yE(t[n],e[n]));return t}function aD(t){return t!=="__proto__"}/**
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
 */function cD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lD=()=>cD().__FIREBASE_DEFAULTS__,uD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Du(t[1]);return e&&JSON.parse(e)},tm=()=>{try{return lD()||uD()||hD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vE=t=>{var e,n;return(n=(e=tm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fD=t=>{const e=vE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},dD=()=>{var t;return(t=tm())===null||t===void 0?void 0:t.config},bE=t=>{var e;return(e=tm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function pD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ru(JSON.stringify(n)),Ru(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function gD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mD(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return gE.NODE_ADMIN===!0}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function _D(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="FirebaseError";class gi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=yD,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vD(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gi(s,a,i)}}function vD(t,e){return t.replace(bD,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const bD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return JSON.parse(t)}function Ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=tc(Du(r[0])||""),n=tc(Du(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},wD=function(t){const e=TE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ED=function(t){const e=TE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function po(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ou(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Pu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Zy(r)&&Zy(o)){if(!Pu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Zy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function TD(t,e){const n=new SD(t,e);return n.subscribe.bind(n)}class SD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");xD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ed),s.error===void 0&&(s.error=ed),s.complete===void 0&&(s.complete=ed);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ed(){}function CD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,V(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yh=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Us="[DEFAULT]";/**
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
 */class AD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ec;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DD(e))try{this.getOrInitializeService({instanceIdentifier:Us})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Us){return this.instances.has(e)}getOptions(e=Us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Us){return this.component?this.component.multipleInstances?e:Us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RD(t){return t===Us?void 0:t}function DD(t){return t.instantiationMode==="EAGER"}/**
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
 */class OD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const PD={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},MD=Re.INFO,ND={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},LD=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ND[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=MD,this._logHandler=LD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const FD=(t,e)=>e.some(n=>t instanceof n);let ev,tv;function UD(){return ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VD(){return tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,cp=new WeakMap,xE=new WeakMap,td=new WeakMap,im=new WeakMap;function BD(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(us(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),im.set(e,t),e}function $D(t){if(cp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zD(t){lp=t(lp)}function jD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(nd(this),e,...n);return xE.set(i,e.sort?e.sort():[e]),us(i)}:VD().includes(t)?function(...e){return t.apply(nd(this),e),us(SE.get(this))}:function(...e){return us(t.apply(nd(this),e))}}function HD(t){return typeof t=="function"?jD(t):(t instanceof IDBTransaction&&$D(t),FD(t,UD())?new Proxy(t,lp):t)}function us(t){if(t instanceof IDBRequest)return BD(t);if(td.has(t))return td.get(t);const e=HD(t);return e!==t&&(td.set(t,e),im.set(e,t)),e}const nd=t=>im.get(t);function WD(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=us(o);return i&&o.addEventListener("upgradeneeded",c=>{i(us(o.result),c.oldVersion,c.newVersion,us(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const qD=["get","getKey","getAll","getAllKeys","count"],KD=["put","add","delete","clear"],id=new Map;function nv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=KD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||qD.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return id.set(e,r),r}zD(t=>({...t,get:(e,n,i)=>nv(e,n)||t.get(e,n,i),has:(e,n)=>!!nv(e,n)||t.has(e,n)}));/**
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
 */class GD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function YD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const up="@firebase/app",iv="0.9.8";/**
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
 */const cr=new Mc("@firebase/app"),QD="@firebase/app-compat",XD="@firebase/analytics-compat",JD="@firebase/analytics",ZD="@firebase/app-check-compat",eO="@firebase/app-check",tO="@firebase/auth",nO="@firebase/auth-compat",iO="@firebase/database",sO="@firebase/database-compat",rO="@firebase/functions",oO="@firebase/functions-compat",aO="@firebase/installations",cO="@firebase/installations-compat",lO="@firebase/messaging",uO="@firebase/messaging-compat",hO="@firebase/performance",fO="@firebase/performance-compat",dO="@firebase/remote-config",pO="@firebase/remote-config-compat",gO="@firebase/storage",mO="@firebase/storage-compat",_O="@firebase/firestore",yO="@firebase/firestore-compat",vO="firebase",bO="9.20.0";/**
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
 */const hp="[DEFAULT]",wO={[up]:"fire-core",[QD]:"fire-core-compat",[JD]:"fire-analytics",[XD]:"fire-analytics-compat",[eO]:"fire-app-check",[ZD]:"fire-app-check-compat",[tO]:"fire-auth",[nO]:"fire-auth-compat",[iO]:"fire-rtdb",[sO]:"fire-rtdb-compat",[rO]:"fire-fn",[oO]:"fire-fn-compat",[aO]:"fire-iid",[cO]:"fire-iid-compat",[lO]:"fire-fcm",[uO]:"fire-fcm-compat",[hO]:"fire-perf",[fO]:"fire-perf-compat",[dO]:"fire-rc",[pO]:"fire-rc-compat",[gO]:"fire-gcs",[mO]:"fire-gcs-compat",[_O]:"fire-fst",[yO]:"fire-fst-compat","fire-js":"fire-js",[vO]:"fire-js-all"};/**
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
 */const Mu=new Map,fp=new Map;function EO(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(fp.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;fp.set(e,t);for(const n of Mu.values())EO(n,t);return!0}function sm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const IO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hs=new Fo("app","Firebase",IO);/**
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
 */class TO{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=bO;function CE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw hs.create("bad-app-name",{appName:String(s)});if(n||(n=dD()),!n)throw hs.create("no-options");const r=Mu.get(s);if(r){if(Pu(n,r.options)&&Pu(i,r.config))return r;throw hs.create("duplicate-app",{appName:s})}const o=new OD(s);for(const c of fp.values())o.addComponent(c);const a=new TO(n,i,o);return Mu.set(s,a),a}function rm(t=hp){const e=Mu.get(t);if(!e&&t===hp)return CE();if(!e)throw hs.create("no-app",{appName:t});return e}function bn(t,e,n){var i;let s=(i=wO[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}hi(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const SO="firebase-heartbeat-database",xO=1,nc="firebase-heartbeat-store";let sd=null;function kE(){return sd||(sd=WD(SO,xO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nc)}}}).catch(t=>{throw hs.create("idb-open",{originalErrorMessage:t.message})})),sd}async function CO(t){try{return(await kE()).transaction(nc).objectStore(nc).get(AE(t))}catch(e){if(e instanceof gi)cr.warn(e.message);else{const n=hs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function sv(t,e){try{const i=(await kE()).transaction(nc,"readwrite");return await i.objectStore(nc).put(e,AE(t)),i.done}catch(n){if(n instanceof gi)cr.warn(n.message);else{const i=hs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(i.message)}}}function AE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kO=1024,AO=30*24*60*60*1e3;class RO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=AO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rv(),{heartbeatsToSend:n,unsentEntries:i}=DO(this._heartbeatsCache.heartbeats),s=Ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function rv(){return new Date().toISOString().substring(0,10)}function DO(t,e=kO){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ov(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ov(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class OO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?_D().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ov(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PO(t){hi(new qn("platform-logger",e=>new GD(e),"PRIVATE")),hi(new qn("heartbeat",e=>new RO(e),"PRIVATE")),bn(up,iv,t),bn(up,iv,"esm2017"),bn("fire-js","")}PO("");function om(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function RE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MO=RE,DE=new Fo("auth","Firebase",RE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Mc("@firebase/auth");function NO(t,...e){Nu.logLevel<=Re.WARN&&Nu.warn(`Auth (${xs}): ${t}`,...e)}function hu(t,...e){Nu.logLevel<=Re.ERROR&&Nu.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,...e){throw am(t,...e)}function oi(t,...e){return am(t,...e)}function OE(t,e,n){const i=Object.assign(Object.assign({},MO()),{[e]:n});return new Fo("auth","Firebase",i).create(e,{appName:t.name})}function LO(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Dn(t,"argument-error"),OE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function am(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return DE.create(t,...e)}function ne(t,e,...n){if(!t)throw am(e,...n)}function Si(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hu(e),new Error(e)}function Mi(t,e){t||Si(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FO(){return av()==="http:"||av()==="https:"}function av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FO()||gD()||"connection"in navigator)?navigator.onLine:!0}function VO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mi(n>e,"Short delay should be less than long delay!"),this.isMobile=nm()||wE()}get(){return UO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e){Mi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new Nc(3e4,6e4);function Lc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vo(t,e,n,i,s={}){return ME(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),PE.fetch()(NE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ME(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},BO),e);try{const s=new zO(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw El(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw OE(t,u,l);Dn(t,u)}}catch(s){if(s instanceof gi)throw s;Dn(t,"network-request-failed",{message:String(s)})}}async function Qh(t,e,n,i,s={}){const r=await Vo(t,e,n,i,s);return"mfaPendingCredential"in r&&Dn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function NE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?cm(t.config,s):`${t.config.apiScheme}://${s}`}class zO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(oi(this.auth,"network-request-failed")),$O.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=oi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e){return Vo(t,"POST","/v1/accounts:delete",e)}async function HO(t,e){return Vo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WO(t,e=!1){const n=At(t),i=await n.getIdToken(e),s=lm(i);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Aa(rd(s.auth_time)),issuedAtTime:Aa(rd(s.iat)),expirationTime:Aa(rd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function rd(t){return Number(t)*1e3}function lm(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Du(n);return s?JSON.parse(s):(hu("Failed to decode base64 JWT payload"),null)}catch(s){return hu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qO(t){const e=lm(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof gi&&KO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function KO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lu(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ic(t,HO(n,{idToken:i}));ne(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?XO(r.providerUserInfo):[],a=QO(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new LE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YO(t){const e=At(t);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QO(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function XO(t){return t.map(e=>{var{providerId:n}=e,i=om(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){const n=await ME(t,{},async()=>{const i=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=NE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await JO(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new sc;return i&&(ne(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sc,this.toJSON())}_performRefresh(){return Si("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=om(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new LE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ic(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WO(this,e)}reload(){return YO(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Lu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ic(this,jO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:E,isAnonymous:I,providerData:A,stsTokenManager:x}=n;ne(b&&x,e,"internal-error");const S=sc.fromJSON(this.name,x);ne(typeof b=="string",e,"internal-error"),Gi(h,e.name),Gi(f,e.name),ne(typeof E=="boolean",e,"internal-error"),ne(typeof I=="boolean",e,"internal-error"),Gi(d,e.name),Gi(p,e.name),Gi(g,e.name),Gi(m,e.name),Gi(_,e.name),Gi(v,e.name);const U=new tr({uid:b,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:S,createdAt:_,lastLoginAt:v});return A&&Array.isArray(A)&&(U.providerData=A.map(Q=>Object.assign({},Q))),m&&(U._redirectEventId=m),U}static async _fromIdTokenResponse(e,n,i=!1){const s=new sc;s.updateFromServerResponse(n);const r=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Lu(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function xi(t){Mi(t instanceof Function,"Expected a class definition");let e=cv.get(t);return e?(Mi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cv.set(t,e),e)}/**
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
 */class FE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FE.type="NONE";const lv=FE;/**
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
 */function fu(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=fu(this.userKey,s.apiKey,r),this.fullPersistenceKey=fu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Xr(xi(lv),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||xi(lv);const o=fu(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=tr._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Xr(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Xr(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zE(e))return"Blackberry";if(jE(e))return"Webos";if(um(e))return"Safari";if((e.includes("chrome/")||VE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function UE(t=Yt()){return/firefox\//i.test(t)}function um(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VE(t=Yt()){return/crios\//i.test(t)}function BE(t=Yt()){return/iemobile/i.test(t)}function $E(t=Yt()){return/android/i.test(t)}function zE(t=Yt()){return/blackberry/i.test(t)}function jE(t=Yt()){return/webos/i.test(t)}function Xh(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZO(t=Yt()){var e;return Xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eP(){return mD()&&document.documentMode===10}function HE(t=Yt()){return Xh(t)||$E(t)||jE(t)||zE(t)||/windows phone/i.test(t)||BE(t)}function tP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e=[]){let n;switch(t){case"Browser":n=uv(Yt());break;case"Worker":n=`${uv(Yt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${i}`}async function qE(t,e){return Vo(t,"GET","/v2/recaptchaConfig",Lc(t,e))}function hv(t){return t!==void 0&&t.enterprise!==void 0}class KE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=oi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",nP().appendChild(i)})}function iP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sP="https://www.google.com/recaptcha/enterprise.js?render=",rP="recaptcha-enterprise";class YE{constructor(e){this.type=rP,this.auth=Bo(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{qE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new KE(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;hv(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&hv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}GE(sP+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function fv(t,e,n,i=!1){const s=new YE(t);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class oP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dv(this),this.idTokenSubscription=new dv(this),this.beforeStateQueue=new oP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?At(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xi(e))})}async initializeRecaptchaConfig(){const e=await qE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new KE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new YE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xi(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[xi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bo(t){return At(t)}class dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=TD(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e){const n=sm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Pu(r,e??{}))return s;Dn(s,"already-initialized")}return n.initialize({options:e})}function lP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(xi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function uP(t,e,n){const i=Bo(t);ne(i._canInitEmulator,i,"emulator-config-failed"),ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=QE(e),{host:o,port:a}=hP(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fP()}function QE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hP(t){const e=QE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:pv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:pv(o)}}}function pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Si("not implemented")}_getIdTokenResponse(e){return Si("not implemented")}_linkToIdToken(e,n){return Si("not implemented")}_getReauthenticationResolver(e){return Si("not implemented")}}async function dP(t,e){return Vo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e){return Qh(t,"POST","/v1/accounts:signInWithPassword",Lc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e){return Qh(t,"POST","/v1/accounts:signInWithEmailLink",Lc(t,e))}async function gP(t,e){return Qh(t,"POST","/v1/accounts:signInWithEmailLink",Lc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends hm{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new rc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new rc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await fv(e,i,"signInWithPassword");return od(e,s)}else return od(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await fv(e,i,"signInWithPassword");return od(e,r)}else return Promise.reject(s)});case"emailLink":return pP(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gP(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return Qh(t,"POST","/v1/accounts:signInWithIdp",Lc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="http://localhost";class lr extends hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=om(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new lr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Jr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:mP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yP(t){const e=da(pa(t)).link,n=e?da(pa(e)).deep_link_id:null,i=da(pa(t)).deep_link_id;return(i?da(pa(i)).link:null)||i||n||e||t}class fm{constructor(e){var n,i,s,r,o,a;const c=da(pa(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=_P((s=c.mode)!==null&&s!==void 0?s:null);ne(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yP(e);try{return new fm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return rc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=fm.parseLink(n);return ne(i,"argument-error"),rc._fromEmailAndCode(e,i.code,i.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fc extends dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Fc{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Fc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ti.credential(n,i)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Fc{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Fc{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return is.credential(n,i)}catch{return null}}}is.TWITTER_SIGN_IN_METHOD="twitter.com";is.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await tr._fromIdTokenResponse(e,i,s),o=gv(i);return new go({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=gv(i);return new go({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends gi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Fu(e,n,i,s)}}function XE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(t,r,e,i):r})}async function vP(t,e,n=!1){const i=await ic(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return go._forOperation(t,"link",i)}/**
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
 */async function bP(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ic(t,XE(i,s,e,t),n);ne(r.idToken,i,"internal-error");const o=lm(r.idToken);ne(o,i,"internal-error");const{sub:a}=o;return ne(t.uid===a,i,"user-mismatch"),go._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t,e,n=!1){const i="signIn",s=await XE(t,i,e),r=await go._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function wP(t,e){return JE(Bo(t),e)}function EP(t,e,n){return wP(At(t),$o.credential(e,n))}function IP(t,e,n,i){return At(t).onIdTokenChanged(e,n,i)}function TP(t,e,n){return At(t).beforeAuthStateChanged(e,n)}const Uu="__sak";/**
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
 */class ZE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){const t=Yt();return um(t)||Xh(t)}const xP=1e3,CP=10;class eI extends ZE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SP()&&tP(),this.fallbackToPolling=HE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);eP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CP):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eI.type="LOCAL";const kP=eI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends ZE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tI.type="SESSION";const nI=tI;/**
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
 */function AP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Jh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await AP(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=pm("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return window}function DP(t){ai().location.href=t}/**
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
 */function iI(){return typeof ai().WorkerGlobalScope<"u"&&typeof ai().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MP(){return iI()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",NP=1,Vu="firebaseLocalStorage",rI="fbase_key";class Uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zh(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function LP(){const t=indexedDB.deleteDatabase(sI);return new Uc(t).toPromise()}function pp(){const t=indexedDB.open(sI,NP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Vu,{keyPath:rI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Vu)?e(i):(i.close(),await LP(),e(await pp()))})})}async function mv(t,e,n){const i=Zh(t,!0).put({[rI]:e,value:n});return new Uc(i).toPromise()}async function FP(t,e){const n=Zh(t,!1).get(e),i=await new Uc(n).toPromise();return i===void 0?null:i.value}function _v(t,e){const n=Zh(t,!0).delete(e);return new Uc(n).toPromise()}const UP=800,VP=3;class oI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>VP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jh._getInstance(MP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pp();return await mv(e,Uu,"1"),await _v(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>mv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>FP(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_v(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Zh(s,!1).getAll();return new Uc(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oI.type="LOCAL";const BP=oI;new Nc(3e4,6e4);/**
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
 */function aI(t,e){return e?xi(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gm extends hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $P(t){return JE(t.auth,new gm(t),t.bypassAuthState)}function zP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),bP(n,new gm(t),t.bypassAuthState)}async function jP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),vP(n,new gm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $P;case"linkViaPopup":case"linkViaRedirect":return jP;case"reauthViaPopup":case"reauthViaRedirect":return zP;default:Dn(this.auth,"internal-error")}}resolve(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Nc(2e3,1e4);async function WP(t,e,n){const i=Bo(t);LO(t,e,dm);const s=aI(i,n);return new Ws(i,"signInViaPopup",e,s).executeNotNull()}class Ws extends cI{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Mi(this.filter.length===1,"Popup operations only handle one event");const e=pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HP.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="pendingRedirect",du=new Map;class KP extends cI{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const i=await GP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GP(t,e){const n=XP(e),i=QP(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function YP(t,e){du.set(t._key(),e)}function QP(t){return xi(t._redirectPersistence)}function XP(t){return fu(qP,t.config.apiKey,t.name)}async function JP(t,e,n=!1){const i=Bo(t),s=aI(i,e),o=await new KP(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=10*60*1e3;class eM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!lI(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(oi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZP&&this.cachedEventUids.clear(),this.cachedEventUids.has(yv(e))}saveEventToCache(e){this.cachedEventUids.add(yv(e)),this.lastProcessedEventTime=Date.now()}}function yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(t,e={}){return Vo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sM=/^https?/;async function rM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nM(t);for(const n of e)try{if(oM(n))return}catch{}Dn(t,"unauthorized-domain")}function oM(t){const e=dp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!sM.test(n))return!1;if(iM.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aM=new Nc(3e4,6e4);function vv(){const t=ai().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cM(t){return new Promise((e,n)=>{var i,s,r;function o(){vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(oi(t,"network-request-failed"))},timeout:aM.get()})}if(!((s=(i=ai().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ai().gapi)===null||r===void 0)&&r.load)o();else{const a=iP("iframefcb");return ai()[a]=()=>{gapi.load?o():n(oi(t,"network-request-failed"))},GE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pu=null,e})}let pu=null;function lM(t){return pu=pu||cM(t),pu}/**
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
 */const uM=new Nc(5e3,15e3),hM="__/auth/iframe",fM="emulator/auth/iframe",dM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gM(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cm(e,fM):`https://${t.config.authDomain}/${hM}`,i={apiKey:e.apiKey,appName:t.name,v:xs},s=pM.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Uo(i).slice(1)}`}async function mM(t){const e=await lM(t),n=ai().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:gM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dM,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=oi(t,"network-request-failed"),a=ai().setTimeout(()=>{r(o)},uM.get());function c(){ai().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const _M={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yM=500,vM=600,bM="_blank",wM="http://localhost";class bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EM(t,e,n,i=yM,s=vM){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_M),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Yt().toLowerCase();n&&(a=VE(l)?bM:n),UE(l)&&(e=e||wM,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(ZO(l)&&a!=="_self")return IM(e||"",a),new bv(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new bv(h)}function IM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const TM="__/auth/handler",SM="emulator/auth/handler",xM=encodeURIComponent("fac");async function wv(t,e,n,i,s,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:xs,eventId:s};if(e instanceof dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ap(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Fc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${xM}=${encodeURIComponent(c)}`:"";return`${CM(t)}?${Uo(a).slice(1)}${l}`}function CM({config:t}){return t.emulator?cm(t,SM):`https://${t.authDomain}/${TM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class kM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nI,this._completeRedirectFn=JP,this._overrideRedirectResult=YP}async _openPopup(e,n,i,s){var r;Mi((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await wv(e,n,i,dp(),s);return EM(e,o,pm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await wv(e,n,i,dp(),s);return DP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Mi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await mM(e),i=new eM(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ad,{type:ad},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ad];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HE()||um()||Xh()}}const AM=kM;var Ev="@firebase/auth",Iv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OM(t){hi(new qn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ne(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WE(t)},l=new aP(i,s,r,c);return lP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),hi(new qn("auth-internal",e=>{const n=Bo(e.getProvider("auth").getImmediate());return(i=>new RM(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Ev,Iv,DM(t)),bn(Ev,Iv,"esm2017")}/**
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
 */const PM=5*60,MM=bE("authIdTokenMaxAge")||PM;let Tv=null;const NM=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>MM)return;const s=n==null?void 0:n.token;Tv!==s&&(Tv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LM(t=rm()){const e=sm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cP(t,{popupRedirectResolver:AM,persistence:[BP,kP,nI]}),i=bE("authTokenSyncURL");if(i){const r=NM(i);TP(n,r,()=>r(n.currentUser)),IP(n,o=>r(o))}const s=vE("auth");return s&&uP(n,`http://${s}`),n}OM("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=new Map,UM={activated:!1,tokenObservers:[]};function fi(t){return FM.get(t)||Object.assign({},UM)}const Sv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ec,await BM(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ec,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BM(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bu=new Fo("appCheck","AppCheck",$M);function zM(t){if(!fi(t).activated)throw Bu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM="firebase-app-check-database",HM=1,gp="firebase-app-check-store";let Il=null;function WM(){return Il||(Il=new Promise((t,e)=>{try{const n=indexedDB.open(jM,HM);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Bu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(gp,{keyPath:"compositeKey"})}}}catch(n){e(Bu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Il)}function qM(t,e){return KM(GM(t),e)}async function KM(t,e){const i=(await WM()).transaction(gp,"readwrite"),r=i.objectStore(gp).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(Bu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function GM(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Mc("@firebase/app-check");function xv(t,e){return IE()?qM(t,e).catch(n=>{mp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM={error:"UNKNOWN_ERROR"};function QM(t){return Gh.encodeString(JSON.stringify(t),!1)}async function _p(t,e=!1){const n=t.app;zM(n);const i=fi(n);let s=i.token,r;if(s&&!ga(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(ga(c)?s=c:await xv(n,void 0))}if(!e&&s&&ga(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await fi(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?mp.warn(c.message):mp.error(c),r=c}let a;return s?r?ga(s)?a={token:s.token,internalError:r}:a=kv(r):(a={token:s.token},i.token=s,await xv(n,s)):a=kv(r),o&&ZM(n,a),a}function XM(t,e,n,i){const{app:s}=t,r=fi(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ga(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Cv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Cv(t))}function uI(t,e){const n=fi(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Cv(t){const{app:e}=t,n=fi(e);let i=n.tokenRefresher;i||(i=JM(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function JM(t){const{app:e}=t;return new VM(async()=>{const n=fi(e);let i;if(n.token?i=await _p(t,!0):i=await _p(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=fi(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Sv.RETRIAL_MIN_WAIT,Sv.RETRIAL_MAX_WAIT)}function ZM(t,e){const n=fi(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ga(t){return t.expireTimeMillis-Date.now()>0}function kv(t){return{token:QM(YM),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=fi(this.app);for(const n of e)uI(this.app,n.next);return Promise.resolve()}}function tN(t,e){return new eN(t,e)}function nN(t){return{getToken:e=>_p(t,e),addTokenListener:e=>XM(t,"INTERNAL",e),removeTokenListener:e=>uI(t.app,e)}}const iN="@firebase/app-check",sN="0.6.5",rN="app-check",Av="app-check-internal";function oN(){hi(new qn(rN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return tN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Av).initialize()})),hi(new qn(Av,t=>{const e=t.getProvider("app-check").getImmediate();return nN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),bn(iN,sN)}oN();var aN="firebase",cN="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(aN,cN,"app");const hI=Symbol("firebaseApp");function mm(t){return Pc()&&hn(hI,null)||rm(t)}const ii=()=>{};function _m(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function lN(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Ir(t){return!!t&&typeof t=="object"}const uN=Object.prototype;function hN(t){return Ir(t)&&Object.getPrototypeOf(t)===uN}function ym(t){return Ir(t)&&t.type==="document"}function fI(t){return Ir(t)&&t.type==="collection"}function fN(t){return ym(t)||fI(t)}function dN(t){return Ir(t)&&t.type==="query"}function pN(t){return Ir(t)&&"ref"in t}function gN(t){return Ir(t)&&typeof t.bucket=="string"}function mN(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function _N(){return!!(Pc()&&hn(cE,null))}const Rv="@firebase/database",Dv="0.14.4";/**
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
 */let dI="";function yN(t){dI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:tc(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vN(e)}}catch{}return new bN},qs=pI("localStorage"),yp=pI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Mc("@firebase/database"),wN=function(){let t=1;return function(){return t++}}(),gI=function(t){const e=kD(t),n=new ID;n.update(e);const i=n.digest();return Gh.encodeByteArray(i)},Vc=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vc.apply(null,i):typeof i=="object"?e+=Ot(i):e+=i,e+=" "}return e};let nr=null,Ov=!0;const EN=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zr.logLevel=Re.VERBOSE,nr=Zr.log.bind(Zr),e&&yp.set("logging_enabled",!0)):typeof t=="function"?nr=t:(nr=null,yp.remove("logging_enabled"))},Bt=function(...t){if(Ov===!0&&(Ov=!1,nr===null&&yp.get("logging_enabled")===!0&&EN(!0)),nr){const e=Vc.apply(null,t);nr(e)}},Bc=function(t){return function(...e){Bt(t,...e)}},vp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vc(...t);Zr.error(e)},ur=function(...t){const e=`FIREBASE FATAL ERROR: ${Vc(...t)}`;throw Zr.error(e),new Error(e)},wn=function(...t){const e="FIREBASE WARNING: "+Vc(...t);Zr.warn(e)},IN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mo="[MIN_NAME]",hr="[MAX_NAME]",zo=function(t,e){if(t===e)return 0;if(t===mo||e===hr)return-1;if(e===mo||t===hr)return 1;{const n=Pv(t),i=Pv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},SN=function(t,e){return t===e?0:t<e?-1:1},ea=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ot(e))},vm=function(t){if(typeof t!="object"||t===null)return Ot(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ot(e[i]),n+=":",n+=vm(t[e[i]]);return n+="}",n},_I=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function On(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yI=function(t){V(!mI(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},xN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kN=new RegExp("^-?(0*)\\d{1,10}$"),AN=-2147483648,RN=2147483647,Pv=function(t){if(kN.test(t)){const e=Number(t);if(e>=AN&&e<=RN)return e}return null},$c=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wn("Exception was thrown by user callback.",n),e},Math.floor(0))}},DN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ra=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ON{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){wn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wn(e)}}class bp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="5",vI="v",bI="s",wI="r",EI="f",II=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TI="ls",SI="p",wp="ac",xI="websocket",CI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kI(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let i;if(e===xI)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===CI)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NN(t)&&(n.ns=t.namespace);const s=[];return On(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.counters_={}}incrementCounter(e,n=1){Hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={},ld={};function wm(t){const e=t.toString();return cd[e]||(cd[e]=new LN),cd[e]}function FN(t,e){const n=t.toString();return ld[n]||(ld[n]=e()),ld[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&$c(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="start",VN="close",BN="pLPCommand",$N="pRTLPCB",AI="id",RI="pw",DI="ser",zN="cb",jN="seg",HN="ts",WN="d",qN="dframe",OI=1870,PI=30,KN=OI-PI,GN=25e3,YN=3e4;class jr{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bc(e),this.stats_=wm(n),this.urlFn=c=>(this.appCheckToken&&(c[wp]=this.appCheckToken),kI(n,CI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YN)),TN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Em((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mv)this.id=a,this.password=c;else if(o===VN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Mv]="t",i[DI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[zN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[vI]=bm,this.transportSessionId&&(i[bI]=this.transportSessionId),this.lastSessionId&&(i[TI]=this.lastSessionId),this.applicationId&&(i[SI]=this.applicationId),this.appCheckToken&&(i[wp]=this.appCheckToken),typeof location<"u"&&location.hostname&&II.test(location.hostname)&&(i[wI]=EI);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xN()&&!CN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_E(n),s=_I(i,KN);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[qN]="t",i[AI]=e,i[RI]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Em{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wN(),window[BN+this.uniqueCallbackIdentifier]=e,window[$N+this.uniqueCallbackIdentifier]=n,this.myIFrame=Em.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Bt("frame writing exception"),a.stack&&Bt(a.stack),Bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Bt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AI]=this.myID,e[RI]=this.myPW,e[DI]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+PI+i.length<=OI;){const o=this.pendingSegs.shift();i=i+"&"+jN+s+"="+o.seg+"&"+HN+s+"="+o.ts+"&"+WN+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(GN)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=16384,XN=45e3;let $u=null;typeof MozWebSocket<"u"?$u=MozWebSocket:typeof WebSocket<"u"&&($u=WebSocket);class Fn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bc(this.connId),this.stats_=wm(n),this.connURL=Fn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[vI]=bm,typeof location<"u"&&location.hostname&&II.test(location.hostname)&&(o[wI]=EI),n&&(o[bI]=n),i&&(o[TI]=i),s&&(o[wp]=s),r&&(o[SI]=r),kI(e,xI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qs.set("previous_websocket_failure",!0);try{let i;EE(),this.mySock=new $u(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&$u!==null&&!Fn.forceDisallow_}static previouslyFailed(){return qs.isInMemoryStorage||qs.get("previous_websocket_failure")===!0}markConnectionHealthy(){qs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=tc(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_I(n,QN);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fn.responsesRequiredToBeHealthy=2;Fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jr,Fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Fn&&Fn.isAvailable();let i=n&&!Fn.previouslyFailed();if(e.webSocketOnly&&(n||wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Fn];else{const s=this.transports_=[];for(const r of oc.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);oc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=6e4,ZN=5e3,e2=10*1024,t2=100*1024,ud="t",Nv="d",n2="s",Lv="r",i2="e",Fv="o",Uv="a",Vv="n",Bv="p",s2="h";class r2{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bc("c:"+this.id+":"),this.transportManager_=new oc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>t2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>e2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ud in e){const n=e[ud];n===Uv?this.upgradeIfSecondaryHealthy_():n===Lv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ea("t",e),i=ea("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ea("t",e),i=ea("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ea(ud,e);if(Nv in e){const i=e[Nv];if(n===s2){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Vv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===n2?this.onConnectionShutdown_(i):n===Lv?this.onReset_(i):n===i2?vp("Server Error: "+i):n===Fv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bm!==i&&wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends NI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zu}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=32,zv=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Fe(){return new Ye("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ys(t){return t.pieces_.length-t.pieceNum_}function je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function LI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function o2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function FI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function Ct(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ye)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Ye(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function xn(t,e){const n=Se(t),i=Se(e);if(n===null)return e;if(n===i)return xn(je(t),je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function VI(t,e){if(ys(t)!==ys(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Bn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ys(t)>ys(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class a2{constructor(e,n){this.errorPrefix_=n,this.parts_=FI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Yh(this.parts_[i]);BI(this)}}function c2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yh(e),BI(t)}function l2(t){const e=t.parts_.pop();t.byteLength_-=Yh(e),t.parts_.length>0&&(t.byteLength_-=1)}function BI(t){if(t.byteLength_>zv)throw new Error(t.errorPrefix_+"has a key path longer than "+zv+" bytes ("+t.byteLength_+").");if(t.parts_.length>$v)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$v+") or object contains a cycle "+Vs(t))}function Vs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends NI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Im}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=1e3,u2=60*5*1e3,jv=30*1e3,h2=1.3,f2=3e4,d2="server_kill",Hv=3;class Di extends MI{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Di.nextPersistentConnectionId_++,this.log_=Bc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ta,this.maxReconnectDelay_=u2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!EE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ot(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ec,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Di.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hi(e,"w")){const i=po(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ED(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wD(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ot(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vp("Unrecognized action received from server: "+Ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>f2&&(this.reconnectDelay_=ta),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*h2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Di.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Bt("getToken() completed but was canceled"):(Bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new r2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{wn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(d2)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&wn(h),c())}}}interrupt(e){Bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ap(this.interruptReasons_)&&(this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>vm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Ye(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hv&&(this.reconnectDelay_=jv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dI.replace(/\./g,"-")]=1,nm()?e["framework.cordova"]=1:wE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zu.getInstance().currentlyOnline();return ap(this.interruptReasons_)&&e}}Di.nextPersistentConnectionId_=0;Di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new xe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new xe(mo,e),s=new xe(mo,n);return this.compare(i,s)!==0}minPost(){return xe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class $I extends ef{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return zo(e.name,n.name)}isDefinedOn(e){throw Lo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return xe.MIN}maxPost(){return new xe(hr,Tl)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new xe(e,Tl)}toString(){return".key"}}const eo=new $I;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??xt.RED,this.left=s??ln.EMPTY_NODE,this.right=r??ln.EMPTY_NODE}copy(e,n,i,s,r){return new xt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ln.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xt.RED=!0;xt.BLACK=!1;class p2{copy(e,n,i,s,r){return this}insert(e,n,i){return new xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ln{constructor(e,n=ln.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ln(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new ln(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}ln.EMPTY_NODE=new p2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e){return zo(t.name,e.name)}function Tm(t,e){return zo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ep;function m2(t){Ep=t}const zI=function(t){return typeof t=="number"?"number:"+yI(t):"string:"+t},jI=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hi(e,".sv"),"Priority must be a string or number.")}else V(t===Ep||t.isEmpty(),"priority of unexpected type.");V(t===Ep||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wv;class Tt{constructor(e,n=Tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jI(this.priorityNode_)}static set __childrenNodeConstructor(e){Wv=e}static get __childrenNodeConstructor(){return Wv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Se(e)===".priority"?this.priorityNode_:Tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Se(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||ys(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yI(this.value_):e+=this.value_,this.lazyHash_=gI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Tt.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Tt.VALUE_TYPE_ORDER.indexOf(n),r=Tt.VALUE_TYPE_ORDER.indexOf(i);return V(s>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HI,WI;function _2(t){HI=t}function y2(t){WI=t}class v2 extends ef{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?zo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return xe.MIN}maxPost(){return new xe(hr,new Tt("[PRIORITY-POST]",WI))}makePost(e,n){const i=HI(e);return new xe(n,new Tt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Wt=new v2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=Math.log(2);class w2{constructor(e){const n=r=>parseInt(Math.log(r)/b2,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ju=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new xt(f,h.node,xt.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=s(c,d),g=s(d+1,l);return h=t[d],f=n?n(h):h,new xt(f,h.node,xt.BLACK,p,g)}},r=function(c){let l=null,u=null,h=t.length;const f=function(p,g){const m=h-p,_=h;h-=p;const v=s(m+1,_),b=t[m],E=n?n(b):b;d(new xt(E,b.node,g,null,v))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(p+1));g?f(m,xt.BLACK):(f(m,xt.BLACK),f(m,xt.RED))}return u},o=new w2(t.length),a=r(o);return new ln(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;const Nr={};class Ci{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(Nr&&Wt,"ChildrenNode.ts has not been loaded"),hd=hd||new Ci({".priority":Nr},{".priority":Wt}),hd}get(e){const n=po(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ln?n:null}hasIndex(e){return Hi(this.indexSet_,e.toString())}addIndex(e,n){V(e!==eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(xe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ju(i,e.getCompare()):a=Nr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ci(u,l)}addToIndexes(e,n){const i=Ou(this.indexes_,(s,r)=>{const o=po(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),s===Nr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(xe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ju(a,o.getCompare())}else return Nr;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new xe(e.name,a))),c.insert(e,e.node)}});return new Ci(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ou(this.indexes_,s=>{if(s===Nr)return s;{const r=n.get(e.name);return r?s.remove(new xe(e.name,r)):s}});return new Ci(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class Pe{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jI(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return na||(na=new Pe(new ln(Tm),null,Ci.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||na}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?na:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new xe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?na:this.priorityNode_;return new Pe(s,o,r)}}updateChild(e,n){const i=Se(e);if(i===null)return n;{V(Se(e)!==".priority"||ys(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(je(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Wt,(o,a)=>{n[o]=a.val(e),i++,r&&Pe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zI(this.getPriority().val())+":"),this.forEachChild(Wt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":gI(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new xe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new xe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new xe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,xe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,xe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zc?-1:0}withIndex(e){if(e===eo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===eo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Wt),s=n.getIterator(Wt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===eo?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class E2 extends Pe{constructor(){super(new ln(Tm),Pe.EMPTY_NODE,Ci.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const zc=new E2;Object.defineProperties(xe,{MIN:{value:new xe(mo,Pe.EMPTY_NODE)},MAX:{value:new xe(hr,zc)}});$I.__EMPTY_NODE=Pe.EMPTY_NODE;Tt.__childrenNodeConstructor=Pe;m2(zc);y2(zc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=!0;function $t(t,e=null){if(t===null)return Pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Tt(n,$t(e))}if(!(t instanceof Array)&&I2){const n=[];let i=!1;if(On(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=$t(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new xe(o,c)))}}),n.length===0)return Pe.EMPTY_NODE;const r=ju(n,g2,o=>o.name,Tm);if(i){const o=ju(n,Wt.getCompare());return new Pe(r,$t(e),new Ci({".priority":o},{".priority":Wt}))}else return new Pe(r,$t(e),Ci.Default)}else{let n=Pe.EMPTY_NODE;return On(t,(i,s)=>{if(Hi(t,i)&&i.substring(0,1)!=="."){const r=$t(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority($t(e))}}_2($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2 extends ef{constructor(e){super(),this.indexPath_=e,V(!we(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?zo(e.name,n.name):r}makePost(e,n){const i=$t(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,i);return new xe(n,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,zc);return new xe(hr,e)}toString(){return FI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2 extends ef{compare(e,n){const i=e.node.compareTo(n.node);return i===0?zo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return xe.MIN}maxPost(){return xe.MAX}makePost(e,n){const i=$t(e);return new xe(n,i)}toString(){return".value"}}const x2=new S2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t){return{type:"value",snapshotNode:t}}function k2(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function A2(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function R2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mo}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wt}copy(){const e=new Sm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Wt?n="$priority":t.index_===x2?n="$value":t.index_===eo?n="$key":(V(t.index_ instanceof T2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ot(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ot(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ot(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ot(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Wt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends MI{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Bc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hu.getListenId_(e,i),a={};this.listens_[o]=a;const c=Kv(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),po(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",s(f,null)}})}unlisten(e,n){const i=Hu.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Kv(e._queryParams),i=e._path.toString(),s=new ec;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Uo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=tc(a.responseText)}catch{wn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&wn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return{value:null,children:new Map}}function qI(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Se(e);t.children.has(i)||t.children.set(i,Wu());const s=t.children.get(i);e=je(e),qI(s,e,n)}}function Ip(t,e,n){t.value!==null?n(e,t.value):O2(t,(i,s)=>{const r=new Ye(e.toString()+"/"+i);Ip(s,r,n)})}function O2(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&On(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=10*1e3,M2=30*1e3,N2=5*60*1e3;class L2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new P2(e);const i=Yv+(M2-Yv)*Math.random();Ra(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;On(e,(s,r)=>{r>0&&Hi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*N2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var si;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(si||(si={}));function KI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function GI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function YI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=si.ACK_USER_WRITE,this.source=KI()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new qu(Fe(),n,this.revert)}}else return V(Se(this.path)===e,"operationForChild called for unrelated child."),new qu(je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=si.OVERWRITE}operationForChild(e){return we(this.path)?new fr(this.source,Fe(),this.snap.getImmediateChild(e)):new fr(this.source,je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=si.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new fr(this.source,Fe(),n.value):new ac(this.source,Fe(),n)}else return V(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ac(this.source,je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function F2(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(R2(o.childName,o.snapshotNode))}),ia(t,s,"child_removed",e,i,n),ia(t,s,"child_added",e,i,n),ia(t,s,"child_moved",r,i,n),ia(t,s,"child_changed",e,i,n),ia(t,s,"value",e,i,n),s}function ia(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>V2(t,a,c)),o.forEach(a=>{const c=U2(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function U2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function V2(t,e,n){if(e.childName==null||n.childName==null)throw Lo("Should only compare child_ events.");const i=new xe(e.childName,e.snapshotNode),s=new xe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){return{eventCache:t,serverCache:e}}function Da(t,e,n,i){return QI(new xm(e,n,i),t.serverCache)}function XI(t,e,n,i){return QI(t.eventCache,new xm(e,n,i))}function Tp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;const B2=()=>(fd||(fd=new ln(SN)),fd);class $e{constructor(e,n=B2()){this.value=e,this.children=n}static fromObject(e){let n=new $e(null);return On(e,(i,s)=>{n=n.set(new Ye(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Fe(),value:this.value};if(we(e))return null;{const i=Se(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(je(e),n);return r!=null?{path:Ct(new Ye(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Se(e),i=this.children.get(n);return i!==null?i.subtree(je(e)):new $e(null)}}set(e,n){if(we(e))return new $e(n,this.children);{const i=Se(e),r=(this.children.get(i)||new $e(null)).set(je(e),n),o=this.children.insert(i,r);return new $e(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=Se(e),i=this.children.get(n);if(i){const s=i.remove(je(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new $e(null):new $e(this.value,r)}else return this}}get(e){if(we(e))return this.value;{const n=Se(e),i=this.children.get(n);return i?i.get(je(e)):null}}setTree(e,n){if(we(e))return n;{const i=Se(e),r=(this.children.get(i)||new $e(null)).setTree(je(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $e(this.value,o)}}fold(e){return this.fold_(Fe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ct(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Fe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(we(e))return null;{const r=Se(e),o=this.children.get(r);return o?o.findOnPath_(je(e),Ct(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Fe(),n)}foreachOnPath_(e,n,i){if(we(e))return this;{this.value&&i(n,this.value);const s=Se(e),r=this.children.get(s);return r?r.foreachOnPath_(je(e),Ct(n,s),i):new $e(null)}}foreach(e){this.foreach_(Fe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ct(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.writeTree_=e}static empty(){return new Wn(new $e(null))}}function Oa(t,e,n){if(we(e))return new Wn(new $e(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=xn(s,e);return r=r.updateChild(o,n),new Wn(t.writeTree_.set(s,r))}else{const s=new $e(n),r=t.writeTree_.setTree(e,s);return new Wn(r)}}}function Qv(t,e,n){let i=t;return On(n,(s,r)=>{i=Oa(i,Ct(e,s),r)}),i}function Xv(t,e){if(we(e))return Wn.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new Wn(n)}}function Sp(t,e){return Tr(t,e)!=null}function Tr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xn(n.path,e)):null}function Jv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Wt,(i,s)=>{e.push(new xe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new xe(i,s.value))}),e}function fs(t,e){if(we(e))return t;{const n=Tr(t,e);return n!=null?new Wn(new $e(n)):new Wn(t.writeTree_.subtree(e))}}function xp(t){return t.writeTree_.isEmpty()}function _o(t,e){return JI(Fe(),t.writeTree_,e)}function JI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=JI(Ct(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ct(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){return sT(e,t)}function $2(t,e,n,i,s){V(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Oa(t.visibleWrites,e,n)),t.lastWriteId=i}function z2(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function j2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&H2(a,i.path)?s=!1:Bn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return W2(t),!0;if(i.snap)t.visibleWrites=Xv(t.visibleWrites,i.path);else{const a=i.children;On(a,c=>{t.visibleWrites=Xv(t.visibleWrites,Ct(i.path,c))})}return!0}else return!1}function H2(t,e){if(t.snap)return Bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bn(Ct(t.path,n),e))return!0;return!1}function W2(t){t.visibleWrites=eT(t.allWrites,q2,Fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function q2(t){return t.visible}function eT(t,e,n){let i=Wn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Bn(n,o)?(a=xn(n,o),i=Oa(i,a,r.snap)):Bn(o,n)&&(a=xn(o,n),i=Oa(i,Fe(),r.snap.getChild(a)));else if(r.children){if(Bn(n,o))a=xn(n,o),i=Qv(i,a,r.children);else if(Bn(o,n))if(a=xn(o,n),we(a))i=Qv(i,Fe(),r.children);else{const c=po(r.children,Se(a));if(c){const l=c.getChild(je(a));i=Oa(i,Fe(),l)}}}else throw Lo("WriteRecord should have .snap or .children")}}return i}function tT(t,e,n,i,s){if(!i&&!s){const r=Tr(t.visibleWrites,e);if(r!=null)return r;{const o=fs(t.visibleWrites,e);if(xp(o))return n;if(n==null&&!Sp(o,Fe()))return null;{const a=n||Pe.EMPTY_NODE;return _o(o,a)}}}else{const r=fs(t.visibleWrites,e);if(!s&&xp(r))return n;if(!s&&n==null&&!Sp(r,Fe()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Bn(l.path,e)||Bn(e,l.path))},a=eT(t.allWrites,o,e),c=n||Pe.EMPTY_NODE;return _o(a,c)}}}function K2(t,e,n){let i=Pe.EMPTY_NODE;const s=Tr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Wt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=fs(t.visibleWrites,e);return n.forEachChild(Wt,(o,a)=>{const c=_o(fs(r,new Ye(o)),a);i=i.updateImmediateChild(o,c)}),Jv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=fs(t.visibleWrites,e);return Jv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function G2(t,e,n,i,s){V(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ct(e,n);if(Sp(t.visibleWrites,r))return null;{const o=fs(t.visibleWrites,r);return xp(o)?s.getChild(n):_o(o,s.getChild(n))}}function Y2(t,e,n,i){const s=Ct(e,n),r=Tr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=fs(t.visibleWrites,s);return _o(o,i.getNode().getImmediateChild(n))}else return null}function Q2(t,e){return Tr(t.visibleWrites,e)}function X2(t,e,n,i,s,r,o){let a;const c=fs(t.visibleWrites,e),l=Tr(c,Fe());if(l!=null)a=l;else if(n!=null)a=_o(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function J2(){return{visibleWrites:Wn.empty(),allWrites:[],lastWriteId:-1}}function Cp(t,e,n,i){return tT(t.writeTree,t.treePath,e,n,i)}function nT(t,e){return K2(t.writeTree,t.treePath,e)}function Zv(t,e,n,i){return G2(t.writeTree,t.treePath,e,n,i)}function Ku(t,e){return Q2(t.writeTree,Ct(t.treePath,e))}function Z2(t,e,n,i,s,r){return X2(t.writeTree,t.treePath,e,n,i,s,r)}function Cm(t,e,n){return Y2(t.writeTree,t.treePath,e,n)}function iT(t,e){return sT(Ct(t.treePath,e),t.writeTree)}function sT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,qv(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,A2(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,k2(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,qv(i,e.snapshotNode,s.oldSnap));else throw Lo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const rT=new tL;class km{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new xm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dr(this.viewCache_),r=Z2(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function nL(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iL(t,e,n,i,s){const r=new eL;let o,a;if(n.type===si.OVERWRITE){const l=n;l.source.fromUser?o=kp(t,e,l.path,l.snap,i,s,r):(V(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!we(l.path),o=Gu(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===si.MERGE){const l=n;l.source.fromUser?o=rL(t,e,l.path,l.children,i,s,r):(V(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ap(t,e,l.path,l.children,i,s,a,r))}else if(n.type===si.ACK_USER_WRITE){const l=n;l.revert?o=cL(t,e,l.path,i,s,r):o=oL(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===si.LISTEN_COMPLETE)o=aL(t,e,n.path,i,r);else throw Lo("Unknown operation type: "+n.type);const c=r.getChanges();return sL(e,o,c),{viewCache:o,changes:c}}function sL(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Tp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(C2(Tp(e)))}}function oT(t,e,n,i,s,r){const o=e.eventCache;if(Ku(i,n)!=null)return e;{let a,c;if(we(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=dr(e),u=l instanceof Pe?l:Pe.EMPTY_NODE,h=nT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Cp(i,dr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=Se(n);if(l===".priority"){V(ys(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Zv(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=je(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Zv(i,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Cm(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return Da(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function Gu(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(we(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),d,null)}else{const d=Se(n);if(!c.isCompleteForPath(n)&&ys(n)>1)return e;const p=je(n),m=c.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?l=u.updatePriority(c.getNode(),m):l=u.updateChild(c.getNode(),d,m,p,rT,null)}const h=XI(e,l,c.isFullyInitialized()||we(n),u.filtersNodes()),f=new km(s,h,r);return oT(t,h,n,s,f,a)}function kp(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new km(s,e,r);if(we(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Da(e,l,!0,t.filter.filtersNodes());else{const h=Se(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Da(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=je(n),d=a.getNode().getImmediateChild(h);let p;if(we(f))p=i;else{const g=u.getCompleteChild(h);g!=null?LI(f)===".priority"&&g.getChild(UI(f)).isEmpty()?p=g:p=g.updateChild(f,i):p=Pe.EMPTY_NODE}if(d.equals(p))c=e;else{const g=t.filter.updateChild(a.getNode(),h,p,f,u,o);c=Da(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function eb(t,e){return t.eventCache.isCompleteForChild(e)}function rL(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Ct(n,c);eb(e,Se(u))&&(a=kp(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Ct(n,c);eb(e,Se(u))||(a=kp(t,a,u,l,s,r,o))}),a}function tb(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ap(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;we(n)?l=i:l=new $e(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=tb(t,d,f);c=Gu(t,c,new Ye(h),p,s,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),g=tb(t,p,f);c=Gu(t,c,new Ye(h),g,s,r,o,a)}}),c}function oL(t,e,n,i,s,r,o){if(Ku(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(we(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gu(t,e,n,c.getNode().getChild(n),s,r,a,o);if(we(n)){let l=new $e(null);return c.getNode().forEachChild(eo,(u,h)=>{l=l.set(new Ye(u),h)}),Ap(t,e,n,l,s,r,a,o)}else return e}else{let l=new $e(null);return i.foreach((u,h)=>{const f=Ct(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Ap(t,e,n,l,s,r,a,o)}}function aL(t,e,n,i,s){const r=e.serverCache,o=XI(e,r.getNode(),r.isFullyInitialized()||we(n),r.isFiltered());return oT(t,o,n,i,rT,s)}function cL(t,e,n,i,s,r){let o;if(Ku(i,n)!=null)return e;{const a=new km(i,e,s),c=e.eventCache.getNode();let l;if(we(n)||Se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cp(i,dr(e));else{const h=e.serverCache.getNode();V(h instanceof Pe,"serverChildren would be complete if leaf node"),u=nT(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=Se(n);let h=Cm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,je(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Pe.EMPTY_NODE,je(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cp(i,dr(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ku(i,Fe())!=null,Da(e,l,o,t.filter.filtersNodes())}}function lL(t,e){const n=dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function nb(t,e,n,i){e.type===si.MERGE&&e.source.queryId!==null&&(V(dr(t.viewCache_),"We should always have a full cache before handling merges"),V(Tp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=iL(t.processor_,s,e,n,i);return nL(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uL(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return F2(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ib;function hL(t){V(!ib,"__referenceConstructor has already been defined"),ib=t}function Am(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return V(r!=null,"SyncTree gave us an op for an invalid query."),nb(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(nb(o,e,n,i));return r}}function Rm(t,e){let n=null;for(const i of t.views.values())n=n||lL(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sb;function fL(t){V(!sb,"__referenceConstructor has already been defined"),sb=t}class rb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=J2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dL(t,e,n,i,s){return $2(t.pendingWriteTree_,e,n,i,s),s?nf(t,new fr(KI(),e,n)):[]}function Hr(t,e,n=!1){const i=z2(t.pendingWriteTree_,e);if(j2(t.pendingWriteTree_,e)){let r=new $e(null);return i.snap!=null?r=r.set(Fe(),!0):On(i.children,o=>{r=r.set(new Ye(o),!0)}),nf(t,new qu(i.path,r,n))}else return[]}function tf(t,e,n){return nf(t,new fr(GI(),e,n))}function pL(t,e,n){const i=$e.fromObject(n);return nf(t,new ac(GI(),e,i))}function gL(t,e,n,i){const s=uT(t,i);if(s!=null){const r=hT(s),o=r.path,a=r.queryId,c=xn(o,e),l=new fr(YI(a),c,n);return fT(t,o,l)}else return[]}function mL(t,e,n,i){const s=uT(t,i);if(s){const r=hT(s),o=r.path,a=r.queryId,c=xn(o,e),l=$e.fromObject(n),u=new ac(YI(a),c,l);return fT(t,o,u)}else return[]}function aT(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=xn(o,e),l=Rm(a,c);if(l)return l});return tT(s,e,r,n,!0)}function nf(t,e){return cT(e,t.syncPointTree_,null,ZI(t.pendingWriteTree_,Fe()))}function cT(t,e,n,i){if(we(t.path))return lT(t,e,n,i);{const s=e.get(Fe());n==null&&s!=null&&(n=Rm(s,Fe()));let r=[];const o=Se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=iT(i,o);r=r.concat(cT(a,c,l,u))}return s&&(r=r.concat(Am(s,t,i,n))),r}}function lT(t,e,n,i){const s=e.get(Fe());n==null&&s!=null&&(n=Rm(s,Fe()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=iT(i,o),u=t.operationForChild(o);u&&(r=r.concat(lT(u,a,c,l)))}),s&&(r=r.concat(Am(s,t,i,n))),r}function uT(t,e){return t.tagToQueryMap.get(e)}function hT(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function fT(t,e,n){const i=t.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const s=ZI(t.pendingWriteTree_,e);return Am(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dm(n)}node(){return this.node_}}class Om{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ct(this.path_,e);return new Om(this.syncTree_,n)}node(){return aT(this.syncTree_,this.path_)}}const _L=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ob=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vL(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},vL=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bL=function(t,e,n,i){return Pm(e,new Om(n,t),i)},wL=function(t,e,n){return Pm(t,new Dm(e),n)};function Pm(t,e,n){const i=t.getPriority().val(),s=ob(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ob(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Tt(a,$t(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Tt(s))),o.forEachChild(Wt,(a,c)=>{const l=Pm(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Nm(t,e){let n=e instanceof Ye?e:new Ye(e),i=t,s=Se(n);for(;s!==null;){const r=po(i.node.children,s)||{children:{},childCount:0};i=new Mm(s,i,r),n=je(n),s=Se(n)}return i}function jo(t){return t.node.value}function dT(t,e){t.node.value=e,Rp(t)}function pT(t){return t.node.childCount>0}function EL(t){return jo(t)===void 0&&!pT(t)}function sf(t,e){On(t.node.children,(n,i)=>{e(new Mm(n,t,i))})}function gT(t,e,n,i){n&&!i&&e(t),sf(t,s=>{gT(s,e,!0,i)}),n&&i&&e(t)}function IL(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jc(t){return new Ye(t.parent===null?t.name:jc(t.parent)+"/"+t.name)}function Rp(t){t.parent!==null&&TL(t.parent,t.name,t)}function TL(t,e,n){const i=EL(n),s=Hi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Rp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Rp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=/[\[\].#$\/\u0000-\u001F\u007F]/,xL=/[\[\].#$\u0000-\u001F\u007F]/,dd=10*1024*1024,mT=function(t){return typeof t=="string"&&t.length!==0&&!SL.test(t)},CL=function(t){return typeof t=="string"&&t.length!==0&&!xL.test(t)},kL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CL(t)},_T=function(t,e,n){const i=n instanceof Ye?new a2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vs(i));if(typeof e=="function")throw new Error(t+"contains a function "+Vs(i)+" with contents = "+e.toString());if(mI(e))throw new Error(t+"contains "+e.toString()+" "+Vs(i));if(typeof e=="string"&&e.length>dd/3&&Yh(e)>dd)throw new Error(t+"contains a string greater than "+dd+" utf8 bytes "+Vs(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(On(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);c2(i,o),_T(t,a,i),l2(i)}),s&&r)throw new Error(t+' contains ".value" child '+Vs(i)+" in addition to actual children.")}},AL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kL(n))throw new Error(CD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DL(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!VI(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Sr(t,e,n){DL(t,n),OL(t,i=>Bn(i,e)||Bn(e,i))}function OL(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(PL(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();nr&&Bt("event: "+n.toString()),$c(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML="repo_interrupt",NL=25;class LL{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wu(),this.transactionQueueTree_=new Mm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FL(t,e,n){if(t.stats_=wm(t.repoInfo_),t.forceRestClient_||DN())t.server_=new Hu(t.repoInfo_,(i,s,r,o)=>{ab(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cb(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ot(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Di(t.repoInfo_,e,(i,s,r,o)=>{ab(t,i,s,r,o)},i=>{cb(t,i)},i=>{VL(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=FN(t.repoInfo_,()=>new L2(t.stats_,t.server_)),t.infoData_=new D2,t.infoSyncTree_=new rb({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=tf(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lm(t,"connected",!1),t.serverSyncTree_=new rb({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Sr(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function UL(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yT(t){return _L({timestamp:UL(t)})}function ab(t,e,n,i,s){t.dataUpdateCount++;const r=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=Ou(n,l=>$t(l));o=mL(t.serverSyncTree_,r,c,s)}else{const c=$t(n);o=gL(t.serverSyncTree_,r,c,s)}else if(i){const c=Ou(n,l=>$t(l));o=pL(t.serverSyncTree_,r,c)}else{const c=$t(n);o=tf(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Um(t,r)),Sr(t.eventQueue_,a,o)}function cb(t,e){Lm(t,"connected",e),e===!1&&$L(t)}function VL(t,e){On(e,(n,i)=>{Lm(t,n,i)})}function Lm(t,e,n){const i=new Ye("/.info/"+e),s=$t(n);t.infoData_.updateSnapshot(i,s);const r=tf(t.infoSyncTree_,i,s);Sr(t.eventQueue_,i,r)}function BL(t){return t.nextWriteId_++}function $L(t){vT(t,"onDisconnectEvents");const e=yT(t),n=Wu();Ip(t.onDisconnect_,Fe(),(s,r)=>{const o=bL(s,r,t.serverSyncTree_,e);qI(n,s,o)});let i=[];Ip(n,Fe(),(s,r)=>{i=i.concat(tf(t.serverSyncTree_,s,r));const o=WL(t,s);Um(t,o)}),t.onDisconnect_=Wu(),Sr(t.eventQueue_,Fe(),i)}function zL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ML)}function vT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Bt(n,...e)}function bT(t,e,n){return aT(t.serverSyncTree_,e,n)||Pe.EMPTY_NODE}function Fm(t,e=t.transactionQueueTree_){if(e||rf(t,e),jo(e)){const n=ET(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&jL(t,jc(e),n)}else pT(e)&&sf(e,n=>{Fm(t,n)})}function jL(t,e,n){const i=n.map(l=>l.currentWriteId),s=bT(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{vT(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Hr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rf(t,Nm(t.transactionQueueTree_,e)),Fm(t,t.transactionQueueTree_),Sr(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)$c(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{wn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Um(t,e)}},o)}function Um(t,e){const n=wT(t,e),i=jc(n),s=ET(t,n);return HL(t,s,i),i}function HL(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=xn(n,c.path);let u=!1,h;if(V(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Hr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=NL)u=!0,h="maxretry",s=s.concat(Hr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=bT(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){_T("transaction failed: Data returned ",d,c.path);let p=$t(d);typeof d=="object"&&d!=null&&Hi(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=c.currentWriteId,_=yT(t),v=wL(p,f,_);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=v,c.currentWriteId=BL(t),o.splice(o.indexOf(m),1),s=s.concat(dL(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(Hr(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Hr(t.serverSyncTree_,c.currentWriteId,!0))}Sr(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}rf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)$c(i[a]);Fm(t,t.transactionQueueTree_)}function wT(t,e){let n,i=t.transactionQueueTree_;for(n=Se(e);n!==null&&jo(i)===void 0;)i=Nm(i,n),e=je(e),n=Se(e);return i}function ET(t,e){const n=[];return IT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function IT(t,e,n){const i=jo(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);sf(e,s=>{IT(t,s,n)})}function rf(t,e){const n=jo(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,dT(e,n.length>0?n:void 0)}sf(e,i=>{rf(t,i)})}function WL(t,e){const n=jc(wT(t,e)),i=Nm(t.transactionQueueTree_,e);return IL(i,s=>{pd(t,s)}),pd(t,i),gT(i,s=>{pd(t,s)}),n}function pd(t,e){const n=jo(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dT(e,void 0):n.length=r+1,Sr(t.eventQueue_,jc(e),s);for(let o=0;o<i.length;o++)$c(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function KL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wn(`Invalid query segment '${n}' in query '${t}'`)}return e}const lb=function(t,e){const n=GL(t),i=n.namespace;n.domain==="firebase.com"&&ur(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ur("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MN(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Ye(n.pathString)}},GL=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=qL(t.substring(u,h)));const f=KL(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return we(this._path)?null:LI(this._path)}get ref(){return new Ho(this._repo,this._path)}get _queryIdentifier(){const e=Gv(this._queryParams),n=vm(e);return n==="{}"?"default":n}get _queryObject(){return Gv(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof Vm))return!1;const n=this._repo===e._repo,i=VI(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+o2(this._path)}}class Ho extends Vm{constructor(e,n){super(e,n,new Sm,!1)}get parent(){const e=UI(this._path);return e===null?null:new Ho(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}hL(Ho);fL(Ho);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="FIREBASE_DATABASE_EMULATOR_HOST",Dp={};let QL=!1;function XL(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ur("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lb(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[YL]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=lb(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new bp(bp.OWNER):new PN(t.name,t.options,e);AL("Invalid Firebase Database URL",o),we(o.path)||ur("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ZL(a,t,u,new ON(t.name,n));return new eF(h,t)}function JL(t,e){const n=Dp[e];(!n||n[t.key]!==t)&&ur(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zL(t),delete n[t.key]}function ZL(t,e,n,i){let s=Dp[e.name];s||(s={},Dp[e.name]=s);let r=s[t.toURLString()];return r&&ur("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new LL(t,QL,n,i),s[t.toURLString()]=r,r}class eF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ho(this._repo,Fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ur("Cannot call "+e+" on a deleted database.")}}/**
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
 */function tF(t){yN(xs),hi(new qn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return XL(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),bn(Rv,Dv,t),bn(Rv,Dv,"esm2017")}Di.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Di.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tF();var nF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,Bm=Bm||{},oe=nF||self;function Yu(){}function of(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iF(t){return Object.prototype.hasOwnProperty.call(t,gd)&&t[gd]||(t[gd]=++sF)}var gd="closure_uid_"+(1e9*Math.random()>>>0),sF=0;function rF(t,e,n){return t.call.apply(t.bind,arguments)}function oF(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function qt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qt=rF:qt=oF,qt.apply(null,arguments)}function xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Mt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Cs(){this.s=this.s,this.o=this.o}var aF=0;Cs.prototype.s=!1;Cs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aF!=0)&&iF(this)};Cs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const TT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $m(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ub(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(of(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var cF=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",Yu,e),oe.removeEventListener("test",Yu,e)}catch{}return t}();function Qu(t){return/^[\s\xa0]*$/.test(t)}var hb=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function md(t,e){return t<e?-1:t>e?1:0}function af(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function ni(t){return af().indexOf(t)!=-1}function zm(t){return zm[" "](t),t}zm[" "]=Yu;function lF(t){var e=fF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uF=ni("Opera"),yo=ni("Trident")||ni("MSIE"),ST=ni("Edge"),Op=ST||yo,xT=ni("Gecko")&&!(af().toLowerCase().indexOf("webkit")!=-1&&!ni("Edge"))&&!(ni("Trident")||ni("MSIE"))&&!ni("Edge"),hF=af().toLowerCase().indexOf("webkit")!=-1&&!ni("Edge");function CT(){var t=oe.document;return t?t.documentMode:void 0}var Xu;e:{var _d="",yd=function(){var t=af();if(xT)return/rv:([^\);]+)(\)|;)/.exec(t);if(ST)return/Edge\/([\d\.]+)/.exec(t);if(yo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hF)return/WebKit\/(\S+)/.exec(t);if(uF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yd&&(_d=yd?yd[1]:""),yo){var vd=CT();if(vd!=null&&vd>parseFloat(_d)){Xu=String(vd);break e}}Xu=_d}var fF={};function dF(){return lF(function(){let t=0;const e=hb(String(Xu)).split("."),n=hb("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=md(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||md(s[2].length==0,r[2].length==0)||md(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Pp;if(oe.document&&yo){var fb=CT();Pp=fb||parseInt(Xu,10)||void 0}else Pp=void 0;var pF=Pp;function cc(t,e){if(Kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xT){e:{try{zm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cc.X.h.call(this)}}Mt(cc,Kt);var gF={2:"touch",3:"pen",4:"mouse"};cc.prototype.h=function(){cc.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wc="closure_listenable_"+(1e6*Math.random()|0),mF=0;function _F(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++mF,this.ba=this.ea=!1}function cf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jm(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function kT(t){const e={};for(const n in t)e[n]=t[n];return e}const db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function AT(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<db.length;r++)n=db[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function lf(t){this.src=t,this.g={},this.h=0}lf.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Np(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _F(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Mp(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=TT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(cf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Np(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Hm="closure_lm_"+(1e6*Math.random()|0),bd={};function RT(t,e,n,i,s){if(i&&i.once)return OT(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)RT(t,e[r],n,i,s);return null}return n=Km(n),t&&t[Wc]?t.N(e,n,Hc(i)?!!i.capture:!!i,s):DT(t,e,n,!1,i,s)}function DT(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Hc(s)?!!s.capture:!!s,a=qm(t);if(a||(t[Hm]=a=new lf(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=yF(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)cF||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(MT(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yF(){function t(n){return e.call(t.src,t.listener,n)}const e=vF;return t}function OT(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)OT(t,e[r],n,i,s);return null}return n=Km(n),t&&t[Wc]?t.O(e,n,Hc(i)?!!i.capture:!!i,s):DT(t,e,n,!0,i,s)}function PT(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)PT(t,e[r],n,i,s);else i=Hc(i)?!!i.capture:!!i,n=Km(n),t&&t[Wc]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Np(r,n,i,s),-1<n&&(cf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Np(e,n,i,s)),(n=-1<t?e[t]:null)&&Wm(n))}function Wm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wc])Mp(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(MT(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=qm(e))?(Mp(n,t),n.h==0&&(n.src=null,e[Hm]=null)):cf(t)}}}function MT(t){return t in bd?bd[t]:bd[t]="on"+t}function vF(t,e){if(t.ba)t=!0;else{e=new cc(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Wm(t),t=n.call(i,e)}return t}function qm(t){return t=t[Hm],t instanceof lf?t:null}var wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Km(t){return typeof t=="function"?t:(t[wd]||(t[wd]=function(e){return t.handleEvent(e)}),t[wd])}function Rt(){Cs.call(this),this.i=new lf(this),this.P=this,this.I=null}Mt(Rt,Cs);Rt.prototype[Wc]=!0;Rt.prototype.removeEventListener=function(t,e,n,i){PT(this,t,e,n,i)};function Pt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Kt(e,t);else if(e instanceof Kt)e.target=e.target||t;else{var s=e;e=new Kt(i,t),AT(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Cl(o,i,!0,e)&&s}if(o=e.g=t,s=Cl(o,i,!0,e)&&s,s=Cl(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Cl(o,i,!1,e)&&s}Rt.prototype.M=function(){if(Rt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)cf(n[i]);delete t.g[e],t.h--}}this.I=null};Rt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Rt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Cl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Mp(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Gm=oe.JSON.stringify;function bF(){var t=FT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wF{constructor(){this.h=this.g=null}add(e,n){const i=NT.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var NT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new EF,t=>t.reset());class EF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IF(t){oe.setTimeout(()=>{throw t},0)}function LT(t,e){Lp||TF(),Fp||(Lp(),Fp=!0),FT.add(t,e)}var Lp;function TF(){var t=oe.Promise.resolve(void 0);Lp=function(){t.then(SF)}}var Fp=!1,FT=new wF;function SF(){for(var t;t=bF();){try{t.h.call(t.g)}catch(n){IF(n)}var e=NT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fp=!1}function uf(t,e){Rt.call(this),this.h=t||1,this.g=e||oe,this.j=qt(this.lb,this),this.l=Date.now()}Mt(uf,Rt);K=uf.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pt(this,"tick"),this.ca&&(Ym(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ym(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){uf.X.M.call(this),Ym(this),delete this.g};function Qm(t,e,n){if(typeof t=="function")n&&(t=qt(t,n));else if(t&&typeof t.handleEvent=="function")t=qt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function UT(t){t.g=Qm(()=>{t.g=null,t.i&&(t.i=!1,UT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xF extends Cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:UT(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lc(t){Cs.call(this),this.h=t,this.g={}}Mt(lc,Cs);var pb=[];function VT(t,e,n,i){Array.isArray(n)||(n&&(pb[0]=n.toString()),n=pb);for(var s=0;s<n.length;s++){var r=RT(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function BT(t){jm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wm(e)},t),t.g={}}lc.prototype.M=function(){lc.X.M.call(this),BT(this)};lc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hf(){this.g=!0}hf.prototype.Aa=function(){this.g=!1};function CF(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function kF(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Wr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RF(t,n)+(i?" "+i:"")})}function AF(t,e){t.info(function(){return"TIMEOUT: "+e})}hf.prototype.info=function(){};function RF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Gm(n)}catch{return e}}var xr={},gb=null;function ff(){return gb=gb||new Rt}xr.Pa="serverreachability";function $T(t){Kt.call(this,xr.Pa,t)}Mt($T,Kt);function uc(t){const e=ff();Pt(e,new $T(e))}xr.STAT_EVENT="statevent";function zT(t,e){Kt.call(this,xr.STAT_EVENT,t),this.stat=e}Mt(zT,Kt);function Zt(t){const e=ff();Pt(e,new zT(e,t))}xr.Qa="timingevent";function jT(t,e){Kt.call(this,xr.Qa,t),this.size=e}Mt(jT,Kt);function qc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var df={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},HT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xm(){}Xm.prototype.h=null;function mb(t){return t.h||(t.h=t.i())}function WT(){}var Kc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jm(){Kt.call(this,"d")}Mt(Jm,Kt);function Zm(){Kt.call(this,"c")}Mt(Zm,Kt);var Up;function pf(){}Mt(pf,Xm);pf.prototype.g=function(){return new XMLHttpRequest};pf.prototype.i=function(){return{}};Up=new pf;function Gc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new lc(this),this.O=DF,t=Op?125:void 0,this.T=new uf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qT}function qT(){this.i=null,this.g="",this.h=!1}var DF=45e3,Vp={},Ju={};K=Gc.prototype;K.setTimeout=function(t){this.O=t};function Bp(t,e,n){t.K=1,t.v=mf(Ni(e)),t.s=n,t.P=!0,KT(t,null)}function KT(t,e){t.F=Date.now(),Yc(t),t.A=Ni(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),tS(n.i,"t",i),t.C=0,n=t.l.H,t.h=new qT,t.g=ES(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xF(qt(t.La,t,t.g),t.N)),VT(t.S,t.g,"readystatechange",t.ib),e=t.H?kT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),uc(),CF(t.j,t.u,t.A,t.m,t.U,t.s)}K.ib=function(t){t=t.target;const e=this.L;e&&ki(t)==3?e.l():this.La(t)};K.La=function(t){try{if(t==this.g)e:{const u=ki(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Op||this.g&&(this.h.h||this.g.fa()||bb(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?uc(3):uc(2)),gf(this);var n=this.g.aa();this.Y=n;t:if(GT(this)){var i=bb(this.g);t="";var s=i.length,r=ki(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ks(this),Pa(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kF(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qu(a)){var l=a;break t}}l=null}if(n=l)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$p(this,n);else{this.i=!1,this.o=3,Zt(12),Ks(this),Pa(this);break e}}this.P?(YT(this,u,o),Op&&this.i&&u==3&&(VT(this.S,this.T,"tick",this.hb),this.T.start())):(Wr(this.j,this.m,o,null),$p(this,o)),u==4&&Ks(this),this.i&&!this.I&&(u==4?yS(this.l,this):(this.i=!1,Yc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),Ks(this),Pa(this)}}}catch{}finally{}};function GT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function YT(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=OF(t,n),s==Ju){e==4&&(t.o=4,Zt(14),i=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vp){t.o=4,Zt(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Wr(t.j,t.m,s,null),$p(t,s);GT(t)&&s!=Ju&&s!=Vp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Zt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),o_(e),e.K=!0,Zt(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),Ks(t),Pa(t))}K.hb=function(){if(this.g){var t=ki(this.g),e=this.g.fa();this.C<e.length&&(gf(this),YT(this,t,e),this.i&&t!=4&&Yc(this))}};function OF(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ju:(n=Number(e.substring(n,i)),isNaN(n)?Vp:(i+=1,i+n>e.length?Ju:(e=e.substr(i,n),t.C=i+n,e)))}K.cancel=function(){this.I=!0,Ks(this)};function Yc(t){t.V=Date.now()+t.O,QT(t,t.O)}function QT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qc(qt(t.gb,t),e)}function gf(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}K.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(AF(this.j,this.A),this.K!=2&&(uc(),Zt(17)),Ks(this),this.o=2,Pa(this)):QT(this,this.V-t)};function Pa(t){t.l.G==0||t.I||yS(t.l,t)}function Ks(t){gf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ym(t.T),BT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $p(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||zp(n.h,t))){if(!t.J&&zp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)th(n),vf(n);else break e;r_(n),Zt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=qc(qt(n.cb,n),6e3));if(1>=sS(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gs(n,11)}else if((t.J||n.g==t)&&th(n),!Qu(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(e_(r,r.h),r.h=null))}if(i.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,Xe(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=wS(i,i.H?i.ka:null,i.V),o.J){rS(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(gf(a),Yc(a)),i.g=o}else mS(i);0<n.i.length&&bf(n)}else l[0]!="stop"&&l[0]!="close"||Gs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gs(n,7):s_(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}uc(4)}catch{}}function PF(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(of(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function MF(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(of(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function XT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(of(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MF(t),i=PF(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var JT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ir(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ir){this.h=e!==void 0?e:t.h,Zu(this,t.j),this.s=t.s,this.g=t.g,eh(this,t.m),this.l=t.l,e=t.i;var n=new hc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_b(this,n),this.o=t.o}else t&&(n=String(t).match(JT))?(this.h=!!e,Zu(this,n[1]||"",!0),this.s=ma(n[2]||""),this.g=ma(n[3]||"",!0),eh(this,n[4]),this.l=ma(n[5]||"",!0),_b(this,n[6]||"",!0),this.o=ma(n[7]||"")):(this.h=!!e,this.i=new hc(null,this.h))}ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_a(e,yb,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_a(e,yb,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_a(n,n.charAt(0)=="/"?UF:FF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_a(n,BF)),t.join("")};function Ni(t){return new ir(t)}function Zu(t,e,n){t.j=n?ma(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _b(t,e,n){e instanceof hc?(t.i=e,$F(t.i,t.h)):(n||(e=_a(e,VF)),t.i=new hc(e,t.h))}function Xe(t,e,n){t.i.set(e,n)}function mf(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ma(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _a(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yb=/[#\/\?@]/g,FF=/[#\?:]/g,UF=/[#\?]/g,VF=/[#\?@]/g,BF=/#/g;function hc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ks(t){t.g||(t.g=new Map,t.h=0,t.i&&NF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=hc.prototype;K.add=function(t,e){ks(this),this.i=null,t=Wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ZT(t,e){ks(t),e=Wo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eS(t,e){return ks(t),e=Wo(t,e),t.g.has(e)}K.forEach=function(t,e){ks(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};K.oa=function(){ks(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};K.W=function(t){ks(this);let e=[];if(typeof t=="string")eS(this,t)&&(e=e.concat(this.g.get(Wo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return ks(this),this.i=null,t=Wo(this,t),eS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tS(t,e,n){ZT(t,e),0<n.length&&(t.i=null,t.g.set(Wo(t,e),$m(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $F(t,e){e&&!t.j&&(ks(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(ZT(this,i),tS(this,s,n))},t)),t.j=e}var zF=class{constructor(e,n){this.h=e,this.g=n}};function nS(t){this.l=t||jF,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ga&&oe.g.Ga()&&oe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jF=10;function iS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sS(t){return t.h?1:t.g?t.g.size:0}function zp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function e_(t,e){t.g?t.g.add(e):t.h=e}function rS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nS.prototype.cancel=function(){if(this.i=oS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $m(t.i)}function t_(){}t_.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};t_.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function HF(){this.g=new t_}function WF(t,e,n){const i=n||"";try{XT(t,function(s,r){let o=s;Hc(s)&&(o=Gm(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function qF(t,e){const n=new hf;if(oe.Image){const i=new Image;i.onload=xl(kl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xl(kl,n,i,"TestLoadImage: error",!1,e),i.onabort=xl(kl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xl(kl,n,i,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function kl(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Qc(t){this.l=t.ac||null,this.j=t.jb||!1}Mt(Qc,Xm);Qc.prototype.g=function(){return new _f(this.l,this.j)};Qc.prototype.i=function(t){return function(){return t}}({});function _f(t,e){Rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=n_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(_f,Rt);var n_=0;K=_f.prototype;K.open=function(t,e){if(this.readyState!=n_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fc(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xc(this)),this.readyState=n_};K.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fc(this)),this.g&&(this.readyState=3,fc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aS(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function aS(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}K.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xc(this):fc(this),this.readyState==3&&aS(this)}};K.Va=function(t){this.g&&(this.response=this.responseText=t,Xc(this))};K.Ua=function(t){this.g&&(this.response=t,Xc(this))};K.ga=function(){this.g&&Xc(this)};function Xc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fc(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_f.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KF=oe.JSON.parse;function ct(t){Rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cS,this.K=this.L=!1}Mt(ct,Rt);var cS="",GF=/^https?$/i,YF=["POST","PUT"];K=ct.prototype;K.Ka=function(t){this.L=t};K.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Up.g(),this.C=this.u?mb(this.u):mb(Up),this.g.onreadystatechange=qt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){vb(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=oe.FormData&&t instanceof oe.FormData,!(0<=TT(YF,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hS(this),0<this.B&&((this.K=QF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qt(this.qa,this)):this.A=Qm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){vb(this,r)}};function QF(t){return yo&&dF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof Bm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function vb(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lS(t),yf(t)}function lS(t){t.D||(t.D=!0,Pt(t,"complete"),Pt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),yf(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yf(this,!0)),ct.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?uS(this):this.fb())};K.fb=function(){uS(this)};function uS(t){if(t.h&&typeof Bm<"u"&&(!t.C[1]||ki(t)!=4||t.aa()!=2)){if(t.v&&ki(t)==4)Qm(t.Ha,0,t);else if(Pt(t,"readystatechange"),ki(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(JT)[1]||null;if(!s&&oe.self&&oe.self.location){var r=oe.self.location.protocol;s=r.substr(0,r.length-1)}i=!GF.test(s?s.toLowerCase():"")}n=i}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var o=2<ki(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lS(t)}}finally{yf(t)}}}}function yf(t,e){if(t.g){hS(t);const n=t.g,i=t.C[0]?Yu:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=i}catch{}}}function hS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function ki(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<ki(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KF(e)}};function bb(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fS(t){let e="";return jm(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function i_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=fS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Xe(t,e,n))}function sa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dS(t){this.Ca=0,this.i=[],this.j=new hf,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=sa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=sa("baseRetryDelayMs",5e3,t),this.bb=sa("retryDelaySeedMs",1e4,t),this.$a=sa("forwardChannelMaxRetries",2,t),this.ta=sa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new nS(t&&t.concurrentRequestLimit),this.Fa=new HF,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=dS.prototype;K.ma=8;K.G=1;function s_(t){if(pS(t),t.G==3){var e=t.U++,n=Ni(t.F);Xe(n,"SID",t.I),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),Jc(t,n),e=new Gc(t,t.j,e,void 0),e.K=2,e.v=mf(Ni(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=ES(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yc(e)}bS(t)}function vf(t){t.g&&(o_(t),t.g.cancel(),t.g=null)}function pS(t){vf(t),t.u&&(oe.clearTimeout(t.u),t.u=null),th(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function bf(t){iS(t.h)||t.m||(t.m=!0,LT(t.Ja,t),t.C=0)}function XF(t,e){return sS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qc(qt(t.Ja,t,e),vS(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Gc(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=kT(r),AT(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gS(this,s,e),n=Ni(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),Jc(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(fS(r)))+"&"+e:this.o&&i_(n,this.o,r)),e_(this.h,s),this.Ya&&Xe(n,"TYPE","init"),this.O?(Xe(n,"$req",e),Xe(n,"SID","null"),s.Z=!0,Bp(s,n,null)):Bp(s,n,e),this.G=2}}else this.G==3&&(t?wb(this,t):this.i.length==0||iS(this.h)||wb(this))};function wb(t,e){var n;e?n=e.m:n=t.U++;const i=Ni(t.F);Xe(i,"SID",t.I),Xe(i,"RID",n),Xe(i,"AID",t.T),Jc(t,i),t.o&&t.s&&i_(i,t.o,t.s),n=new Gc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gS(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),e_(t.h,n),Bp(n,i,e)}function Jc(t,e){t.ia&&jm(t.ia,function(n,i){Xe(e,i,n)}),t.l&&XT({},function(n,i){Xe(e,i,n)})}function gS(t,e,n){n=Math.min(t.i.length,n);var i=t.l?qt(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{WF(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function mS(t){t.g||t.u||(t.Z=1,LT(t.Ia,t),t.A=0)}function r_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qc(qt(t.Ia,t),vS(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,_S(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qc(qt(this.eb,this),t)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Zt(10),vf(this),_S(this))};function o_(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function _S(t){t.g=new Gc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ni(t.sa);Xe(e,"RID","rpc"),Xe(e,"SID",t.I),Xe(e,"CI",t.L?"0":"1"),Xe(e,"AID",t.T),Xe(e,"TYPE","xmlhttp"),Jc(t,e),t.o&&t.s&&i_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=mf(Ni(e)),n.s=null,n.P=!0,KT(n,t)}K.cb=function(){this.v!=null&&(this.v=null,vf(this),r_(this),Zt(19))};function th(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function yS(t,e){var n=null;if(t.g==e){th(t),o_(t),t.g=null;var i=2}else if(zp(t.h,e))n=e.D,rS(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=ff(),Pt(i,new jT(i,n)),bf(t)}else mS(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&XF(t,e)||i==2&&r_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Gs(t,5);break;case 4:Gs(t,10);break;case 3:Gs(t,6);break;default:Gs(t,2)}}}function vS(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=qt(t.kb,t);n||(n=new ir("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||Zu(n,"https"),mf(n)),qF(n.toString(),i)}else Zt(2);t.G=0,t.l&&t.l.va(e),bS(t),pS(t)}K.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Zt(2)):(this.j.info("Failed to ping google.com"),Zt(1))};function bS(t){if(t.G=0,t.la=[],t.l){const e=oS(t.h);(e.length!=0||t.i.length!=0)&&(ub(t.la,e),ub(t.la,t.i),t.h.i.length=0,$m(t.i),t.i.length=0),t.l.ua()}}function wS(t,e,n){var i=n instanceof ir?Ni(n):new ir(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),eh(i,i.m);else{var s=oe.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ir(null,void 0);i&&Zu(r,i),e&&(r.g=e),s&&eh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Xe(i,n,e),Xe(i,"VER",t.ma),Jc(t,i),i}function ES(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ct(new Qc({jb:!0})):new ct(t.ra),e.Ka(t.H),e}function IS(){}K=IS.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function nh(){if(yo&&!(10<=Number(pF)))throw Error("Environmental error: no available transport.")}nh.prototype.g=function(t,e){return new En(t,e)};function En(t,e){Rt.call(this),this.g=new dS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Qu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qo(this)}Mt(En,Rt);En.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Zt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wS(t,null,t.V),bf(t)};En.prototype.close=function(){s_(this.g)};En.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gm(t),t=n);e.i.push(new zF(e.ab++,t)),e.G==3&&bf(e)};En.prototype.M=function(){this.g.l=null,delete this.j,s_(this.g),delete this.g,En.X.M.call(this)};function TS(t){Jm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Mt(TS,Jm);function SS(){Zm.call(this),this.status=1}Mt(SS,Zm);function qo(t){this.g=t}Mt(qo,IS);qo.prototype.xa=function(){Pt(this.g,"a")};qo.prototype.wa=function(t){Pt(this.g,new TS(t))};qo.prototype.va=function(t){Pt(this.g,new SS)};qo.prototype.ua=function(){Pt(this.g,"b")};nh.prototype.createWebChannel=nh.prototype.g;En.prototype.send=En.prototype.u;En.prototype.open=En.prototype.m;En.prototype.close=En.prototype.close;df.NO_ERROR=0;df.TIMEOUT=8;df.HTTP_ERROR=6;HT.COMPLETE="complete";WT.EventType=Kc;Kc.OPEN="a";Kc.CLOSE="b";Kc.ERROR="c";Kc.MESSAGE="d";Rt.prototype.listen=Rt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.Oa;ct.prototype.getLastErrorCode=ct.prototype.Ea;ct.prototype.getStatus=ct.prototype.aa;ct.prototype.getResponseJson=ct.prototype.Sa;ct.prototype.getResponseText=ct.prototype.fa;ct.prototype.send=ct.prototype.da;ct.prototype.setWithCredentials=ct.prototype.Ka;var JF=function(){return new nh},ZF=function(){return ff()},Ed=df,e4=HT,t4=xr,Eb={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},n4=Qc,Al=WT,i4=ct;const Ib="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Mc("@firebase/firestore");function Tb(){return pr.logLevel}function G(t,...e){if(pr.logLevel<=Re.DEBUG){const n=e.map(a_);pr.debug(`Firestore (${Ko}): ${t}`,...n)}}function Li(t,...e){if(pr.logLevel<=Re.ERROR){const n=e.map(a_);pr.error(`Firestore (${Ko}): ${t}`,...n)}}function ih(t,...e){if(pr.logLevel<=Re.WARN){const n=e.map(a_);pr.warn(`Firestore (${Ko}): ${t}`,...n)}}function a_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: `+t;throw Li(e),new Error(e)}function Ge(t,e){t||se()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends gi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class r4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o4{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Oi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Oi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ge(typeof i.accessToken=="string"),new xS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Vt(e)}}class a4{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class c4{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new a4(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u4{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.T=n.token,new l4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=h4(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Oe(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new _t(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dc{constructor(e,n,i){n===void 0?n=0:n>e.length&&se(),i===void 0?i=e.length-n:i>e.length-n&&se(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return dc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dc?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends dc{construct(e,n,i){return new We(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const f4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends dc{construct(e,n,i){return new Ht(e,n,i)}static isValidIdentifier(e){return f4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(We.fromString(e))}static fromName(e){return new J(We.fromString(e).popFirst(5))}static empty(){return new J(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new We(e.slice()))}}function d4(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(i===1e9?new _t(n+1,0):new _t(n,i));return new vs(s,J.empty(),e)}function p4(t){return new vs(t.readTime,t.key,-1)}class vs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new vs(he.min(),J.empty(),-1)}static max(){return new vs(he.max(),J.empty(),-1)}}function g4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==m4)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,i)=>{n(e)})}static reject(e){return new M((n,i)=>{i(e)})}static waitFor(e){return new M((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=M.resolve(!1);for(const i of e)n=n.next(s=>s?M.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new M((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new M((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function el(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class c_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}c_.ct=-1;function wf(t){return t==null}function sh(t){return t===0&&1/t==-1/0}function y4(t){return typeof t=="number"&&Number.isInteger(t)&&!sh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.comparator=e,this.root=n||Dt.EMPTY}insert(e,n){return new wt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new wt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rl(this.root,e,this.comparator,!0)}}class Rl{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Dt.RED,this.left=s??Dt.EMPTY,this.right=r??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Dt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new wt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xb(this.data.getIterator())}getIteratorFrom(e){return new xb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class xb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new vn([])}unionWith(e){let n=new vt(Ht.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class v4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new v4("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const b4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=b4.exec(t);if(Ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bo(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function RS(t){const e=t.mapValue.fields.__previous_value__;return AS(e)?RS(e):e}function pc(t){const e=bs(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,i,s,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?AS(t)?4:E4(t)?9007199254740991:10:se()}function di(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pc(t).isEqual(pc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=bs(i.timestampValue),o=bs(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bo(i.bytesValue).isEqual(bo(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return dt(i.geoPointValue.latitude)===dt(s.geoPointValue.latitude)&&dt(i.geoPointValue.longitude)===dt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return dt(i.integerValue)===dt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=dt(i.doubleValue),o=dt(s.doubleValue);return r===o?sh(r)===sh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],di);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Sb(r)!==Sb(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!di(r[a],o[a])))return!1;return!0}(t,e);default:return se()}}function mc(t,e){return(t.values||[]).find(n=>di(n,e))!==void 0}function wo(t,e){if(t===e)return 0;const n=gr(t),i=gr(e);if(n!==i)return Oe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=dt(s.integerValue||s.doubleValue),a=dt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cb(t.timestampValue,e.timestampValue);case 4:return Cb(pc(t),pc(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(s,r){const o=bo(s),a=bo(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Oe(o[c],a[c]);if(l!==0)return l}return Oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=Oe(dt(s.latitude),dt(r.latitude));return o!==0?o:Oe(dt(s.longitude),dt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=wo(o[c],a[c]);if(l)return l}return Oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Dl.mapValue&&r===Dl.mapValue)return 0;if(s===Dl.mapValue)return 1;if(r===Dl.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Oe(a[u],l[u]);if(h!==0)return h;const f=wo(o[a[u]],c[l[u]]);if(f!==0)return f}return Oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw se()}}function Cb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=bs(t),i=bs(e),s=Oe(n.seconds,i.seconds);return s!==0?s:Oe(n.nanos,i.nanos)}function Eo(t){return jp(t)}function jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=bs(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=jp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${jp(i.fields[a])}`;return r+"}"}(t.mapValue):se();var e,n}function kb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hp(t){return!!t&&"integerValue"in t}function l_(t){return!!t&&"arrayValue"in t}function Ab(t){return!!t&&"nullValue"in t}function Rb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ma(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=Ht.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ma(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return di(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];gu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Cr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new on(Ma(this.value))}}function DS(t){const e=[];return Cr(t.fields,(n,i)=>{const s=new Ht([n]);if(gu(i)){const r=DS(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,he.min(),he.min(),he.min(),on.empty(),0)}static newFoundDocument(e,n,i,s){return new zt(e,1,n,he.min(),i,s,0)}static newNoDocument(e,n){return new zt(e,2,n,he.min(),he.min(),on.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,he.min(),he.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rh{constructor(e,n){this.position=e,this.inclusive=n}}function Db(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=J.comparator(J.fromName(o.referenceValue),n.key):i=wo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ob(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!di(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Na{constructor(e,n="asc"){this.field=e,this.dir=n}}function I4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OS{}class gt extends OS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new S4(e,n,i):n==="array-contains"?new k4(e,i):n==="in"?new A4(e,i):n==="not-in"?new R4(e,i):n==="array-contains-any"?new D4(e,i):new gt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new x4(e,i):new C4(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wo(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kn extends OS{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Kn(e,n)}matches(e){return PS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function PS(t){return t.op==="and"}function MS(t){return T4(t)&&PS(t)}function T4(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function Wp(t){if(t instanceof gt)return t.field.canonicalString()+t.op.toString()+Eo(t.value);if(MS(t))return t.filters.map(e=>Wp(e)).join(",");{const e=t.filters.map(n=>Wp(n)).join(",");return`${t.op}(${e})`}}function NS(t,e){return t instanceof gt?function(n,i){return i instanceof gt&&n.op===i.op&&n.field.isEqual(i.field)&&di(n.value,i.value)}(t,e):t instanceof Kn?function(n,i){return i instanceof Kn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&NS(r,i.filters[o]),!0):!1}(t,e):void se()}function LS(t){return t instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Eo(e.value)}`}(t):t instanceof Kn?function(e){return e.op.toString()+" {"+e.getFilters().map(LS).join(" ,")+"}"}(t):"Filter"}class S4 extends gt{constructor(e,n,i){super(e,n,i),this.key=J.fromName(i.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class x4 extends gt{constructor(e,n){super(e,"in",n),this.keys=FS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class C4 extends gt{constructor(e,n){super(e,"not-in",n),this.keys=FS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>J.fromName(i.referenceValue))}class k4 extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return l_(n)&&mc(n.arrayValue,this.value)}}class A4 extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mc(this.value.arrayValue,n)}}class R4 extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mc(this.value.arrayValue,n)}}class D4 extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!l_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>mc(this.value.arrayValue,i))}}/**
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
 */class O4{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Pb(t,e=null,n=[],i=[],s=null,r=null,o=null){return new O4(t,e,n,i,s,r,o)}function u_(t){const e=fe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Wp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),wf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Eo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Eo(i)).join(",")),e.ft=n}return e.ft}function h_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ob(t.startAt,e.startAt)&&Ob(t.endAt,e.endAt)}function qp(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function P4(t,e,n,i,s,r,o,a){return new tl(t,e,n,i,s,r,o,a)}function Ef(t){return new tl(t)}function Mb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function US(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function f_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function VS(t){return t.collectionGroup!==null}function to(t){const e=fe(t);if(e.dt===null){e.dt=[];const n=f_(e),i=US(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Na(n)),e.dt.push(new Na(Ht.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Na(Ht.keyField(),r))}}}return e.dt}function Fi(t){const e=fe(t);if(!e.wt)if(e.limitType==="F")e.wt=Pb(e.path,e.collectionGroup,to(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of to(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Na(r.field,o))}const i=e.endAt?new rh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new rh(e.startAt.position,e.startAt.inclusive):null;e.wt=Pb(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function Kp(t,e){e.getFirstInequalityField(),f_(t);const n=t.filters.concat([e]);return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gp(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function If(t,e){return h_(Fi(t),Fi(e))&&t.limitType===e.limitType}function BS(t){return`${u_(Fi(t))}|lt:${t.limitType}`}function Yp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>LS(i)).join(", ")}]`),wf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Eo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Eo(i)).join(",")),`Target(${n})`}(Fi(t))}; limitType=${t.limitType})`}function Tf(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):J.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of to(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Db(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,to(n),i)||n.endAt&&!function(s,r,o){const a=Db(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,to(n),i))}(t,e)}function M4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $S(t){return(e,n)=>{let i=!1;for(const s of to(t)){const r=N4(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function N4(t,e,n){const i=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?wo(a,c):se()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return kS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=new wt(J.comparator);function Ui(){return L4}const zS=new wt(J.comparator);function ya(...t){let e=zS;for(const n of t)e=e.insert(n.key,n);return e}function jS(t){let e=zS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ys(){return La()}function HS(){return La()}function La(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const F4=new wt(J.comparator),U4=new vt(J.comparator);function be(...t){let e=U4;for(const n of t)e=e.add(n);return e}const V4=new vt(Oe);function WS(){return V4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sh(e)?"-0":e}}function KS(t){return{integerValue:""+t}}function B4(t,e){return y4(e)?KS(e):qS(t,e)}/**
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
 */class Sf{constructor(){this._=void 0}}function $4(t,e,n){return t instanceof oh?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof _c?YS(t,e):t instanceof yc?QS(t,e):function(i,s){const r=GS(i,s),o=Nb(r)+Nb(i._t);return Hp(r)&&Hp(i._t)?KS(o):qS(i.serializer,o)}(t,e)}function z4(t,e,n){return t instanceof _c?YS(t,e):t instanceof yc?QS(t,e):n}function GS(t,e){return t instanceof ah?Hp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class oh extends Sf{}class _c extends Sf{constructor(e){super(),this.elements=e}}function YS(t,e){const n=XS(e);for(const i of t.elements)n.some(s=>di(s,i))||n.push(i);return{arrayValue:{values:n}}}class yc extends Sf{constructor(e){super(),this.elements=e}}function QS(t,e){let n=XS(e);for(const i of t.elements)n=n.filter(s=>!di(s,i));return{arrayValue:{values:n}}}class ah extends Sf{constructor(e,n){super(),this.serializer=e,this._t=n}}function Nb(t){return dt(t.integerValue||t.doubleValue)}function XS(t){return l_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function j4(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof _c&&i instanceof _c||n instanceof yc&&i instanceof yc?vo(n.elements,i.elements,di):n instanceof ah&&i instanceof ah?di(n._t,i._t):n instanceof oh&&i instanceof oh}(t.transform,e.transform)}class H4{constructor(e,n){this.version=e,this.transformResults=n}}class ci{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ci}static exists(e){return new ci(void 0,e)}static updateTime(e){return new ci(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xf{}function JS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ex(t.key,ci.none()):new nl(t.key,t.data,ci.none());{const n=t.data,i=on.empty();let s=new vt(Ht.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new As(t.key,i,new vn(s.toArray()),ci.none())}}function W4(t,e,n){t instanceof nl?function(i,s,r){const o=i.value.clone(),a=Fb(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof As?function(i,s,r){if(!mu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Fb(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ZS(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,i){return t instanceof nl?function(s,r,o,a){if(!mu(s.precondition,r))return o;const c=s.value.clone(),l=Ub(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof As?function(s,r,o,a){if(!mu(s.precondition,r))return o;const c=Ub(s.fieldTransforms,a,r),l=r.data;return l.setAll(ZS(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return mu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function q4(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=GS(i.transform,s||null);r!=null&&(n===null&&(n=on.empty()),n.set(i.field,r))}return n||null}function Lb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&vo(n,i,(s,r)=>j4(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nl extends xf{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class As extends xf{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ZS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Fb(t,e,n){const i=new Map;Ge(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,z4(o,a,n[s]))}return i}function Ub(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,$4(r,o,e))}return i}class ex extends xf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K4 extends xf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&W4(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Fa(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Fa(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=HS();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=JS(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,i)=>Lb(n,i))&&vo(this.baseMutations,e.baseMutations,(n,i)=>Lb(n,i))}}class d_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ge(e.mutations.length===i.length);let s=F4;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new d_(e,n,i,s)}}/**
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
 */class Y4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Q4{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Te;function X4(t){switch(t){default:return se();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function tx(t){if(t===void 0)return Li("GRPC error has no .code"),R.UNKNOWN;switch(t){case ft.OK:return R.OK;case ft.CANCELLED:return R.CANCELLED;case ft.UNKNOWN:return R.UNKNOWN;case ft.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ft.INTERNAL:return R.INTERNAL;case ft.UNAVAILABLE:return R.UNAVAILABLE;case ft.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ft.NOT_FOUND:return R.NOT_FOUND;case ft.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ft.ABORTED:return R.ABORTED;case ft.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ft.DATA_LOSS:return R.DATA_LOSS;default:return se()}}(Te=ft||(ft={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class p_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ol}static getOrCreateInstance(){return Ol===null&&(Ol=new p_),Ol}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ol=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,il.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Cf(he.min(),s,WS(),Ui(),be())}}class il{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new il(i,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class nx{constructor(e,n){this.targetId=e,this.Et=n}}class ix{constructor(e,n,i=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Vb{constructor(){this.At=0,this.Rt=$b(),this.vt=Qt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=be(),n=be(),i=be();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:se()}}),new il(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=$b()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class J4{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ui(),this.qt=Bb(),this.Ut=new vt(Oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(qp(o))if(s===0){const a=new J(o.path);this.Qt(i,a,zt.newNoDocument(a,he.min()))}else Ge(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=p_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&qp(a.target)){const c=new J(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,zt.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=be();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Cf(e,n,this.Ut,this.Lt,i);return this.Lt=Ui(),this.qt=Bb(),this.Ut=new vt(Oe),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Vb,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new vt(Oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Vb),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Bb(){return new wt(J.comparator)}function $b(){return new wt(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),t3=(()=>({and:"AND",or:"OR"}))();class n3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ch(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function i3(t,e){return ch(t,e.toTimestamp())}function li(t){return Ge(!!t),he.fromTimestamp(function(e){const n=bs(e);return new _t(n.seconds,n.nanos)}(t))}function g_(t,e){return function(n){return new We(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rx(t){const e=We.fromString(t);return Ge(lx(e)),e}function Qp(t,e){return g_(t.databaseId,e.path)}function Id(t,e){const n=rx(e);if(n.get(1)!==t.databaseId.projectId)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(ox(n))}function Xp(t,e){return g_(t.databaseId,e)}function s3(t){const e=rx(t);return e.length===4?We.emptyPath():ox(e)}function Jp(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ox(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zb(t,e,n){return{name:Qp(t,e),fields:n.value.mapValue.fields}}function r3(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(Ge(l===void 0||typeof l=="string"),Qt.fromBase64String(l||"")):(Ge(l===void 0||l instanceof Uint8Array),Qt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?R.UNKNOWN:tx(c.code);return new H(l,c.message||"")}(o);n=new ix(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Id(t,i.document.name),r=li(i.document.updateTime),o=i.document.createTime?li(i.document.createTime):he.min(),a=new on({mapValue:{fields:i.document.fields}}),c=zt.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new _u(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Id(t,i.document),r=i.readTime?li(i.readTime):he.min(),o=zt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new _u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Id(t,i.document),r=i.removedTargetIds||[];n=new _u([],r,s,null)}else{if(!("filter"in e))return se();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Q4(s),o=i.targetId;n=new nx(o,r)}}return n}function o3(t,e){let n;if(e instanceof nl)n={update:zb(t,e.key,e.value)};else if(e instanceof ex)n={delete:Qp(t,e.key)};else if(e instanceof As)n={update:zb(t,e.key,e.data),updateMask:g3(e.fieldMask)};else{if(!(e instanceof K4))return se();n={verify:Qp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof oh)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _c)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yc)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ah)return{fieldPath:r.field.canonicalString(),increment:o._t};throw se()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:i3(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function a3(t,e){return t&&t.length>0?(Ge(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?li(i.updateTime):li(s);return r.isEqual(he.min())&&(r=li(s)),new H4(r,i.transformResults||[])}(n,e))):[]}function c3(t,e){return{documents:[Xp(t,e.path)]}}function l3(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Xp(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xp(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return cx(Kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Br(u.field),direction:f3(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.useProto3Json||wf(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function u3(t){let e=s3(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ge(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ax(u);return h instanceof Kn&&MS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Na($r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,wf(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new rh(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new rh(f,h)}(n.endAt)),P4(e,s,o,r,a,"F",c,l)}function h3(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ax(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$r(e.unaryFilter.field);return gt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=$r(e.unaryFilter.field);return gt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$r(e.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$r(e.unaryFilter.field);return gt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(e){return gt.create($r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Kn.create(e.compositeFilter.filters.map(n=>ax(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return se()}}(e.compositeFilter.op))}(t):se()}function f3(t){return Z4[t]}function d3(t){return e3[t]}function p3(t){return t3[t]}function Br(t){return{fieldPath:t.canonicalString()}}function $r(t){return Ht.fromServerFormat(t.fieldPath)}function cx(t){return t instanceof gt?function(e){if(e.op==="=="){if(Rb(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NAN"}};if(Ab(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rb(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NAN"}};if(Ab(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(e.field),op:d3(e.op),value:e.value}}}(t):t instanceof Kn?function(e){const n=e.getFilters().map(i=>cx(i));return n.length===1?n[0]:{compositeFilter:{op:p3(e.op),filters:n}}}(t):se()}function g3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,i,s,r=he.min(),o=he.min(),a=Qt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.se=e}}function _3(t){const e=u3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gp(e,e.limit,"L"):e}/**
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
 */class y3{constructor(){this.He=new v3}addToCollectionParentIndex(e,n){return this.He.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(vs.min())}updateCollectionGroup(e,n,i){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class v3{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new vt(We.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new vt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Io(0)}static bn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?M.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class w3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Fa(i.mutation,s,vn.empty(),_t.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,be()).next(()=>i))}getLocalViewOfDocuments(e,n,i=be()){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=ya();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Ys();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,be()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ui();const o=La(),a=La();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof As)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fa(u.mutation,l,u.mutation.getFieldMask(),_t.now())):o.set(l.key,vn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new w3(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=La();let s=new wt((o,a)=>o-a),r=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||vn.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||be()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=HS();u.forEach(f=>{if(!r.has(f)){const d=JS(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return M.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):VS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):M.resolve(Ys());let a=-1,c=r;return o.next(l=>M.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?M.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,be())).next(u=>({batchId:a,changes:jS(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(i=>{let s=ya();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=ya();return this.indexManager.getCollectionParents(e,s).next(o=>M.forEach(o,a=>{const c=function(l,u){return new tl(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,zt.newInvalidDocument(l)))});let o=ya();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Fa(l.mutation,c,vn.empty(),_t.now()),Tf(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return M.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:li(i.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:_3(i.bundledQuery),readTime:li(i.readTime)}}(n)),M.resolve()}}/**
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
 */class T3{constructor(){this.overlays=new wt(J.comparator),this.ts=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ys();return M.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),M.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),M.resolve()}getOverlaysForCollection(e,n,i){const s=Ys(),r=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new wt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Ys(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ys(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return M.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Y4(n,i));let r=this.ts.get(n);r===void 0&&(r=be(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.es=new vt(St.ns),this.ss=new vt(St.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new St(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new St(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new J(new We([])),i=new St(n,e),s=new St(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new J(new We([])),i=new St(n,e),s=new St(n,e+1);let r=be();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new St(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return J.comparator(e.key,n.key)||Oe(e.ds,n.ds)}static rs(e,n){return Oe(e.ds,n.ds)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new vt(St.ns)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G4(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new St(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return M.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new St(n,0),s=new St(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),M.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new vt(Oe);return n.forEach(s=>{const r=new St(s,0),o=new St(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),M.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;J.isDocumentKey(r)||(r=r.child(""));const o=new St(new J(r),0);let a=new vt(Oe);return this._s.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ds)),!0)},o),M.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ge(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return M.forEach(n.mutations,s=>{const r=new St(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new St(n,0),s=this._s.firstAfterOrEqual(i);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{constructor(e){this.Ts=e,this.docs=new wt(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return M.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let i=Ui();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():zt.newInvalidDocument(s))}),M.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ui();const o=n.path,a=new J(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||g4(p4(u),i)<=0||(s.has(u.key)||Tf(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,i,s){se()}Es(e,n){return M.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new C3(this)}getSize(e){return M.resolve(this.size)}}class C3 extends b3{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),M.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e){this.persistence=e,this.As=new Go(n=>u_(n),h_),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Rs=0,this.vs=new m_,this.targetCount=0,this.bs=Io.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),M.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Sn(n),M.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),M.waitFor(r).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return M.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),M.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),M.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return M.resolve(i)}containsKey(e,n){return M.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new c_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new k3(this),this.indexManager=new y3,this.remoteDocumentCache=function(i){return new x3(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new m3(n),this.xs=new I3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new S3(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){G("MemoryPersistence","Starting transaction:",e);const s=new R3(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return M.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class R3 extends _4{constructor(e){super(),this.currentSequenceNumber=e}}class __{constructor(e){this.persistence=e,this.$s=new m_,this.Ms=null}static Fs(e){return new __(e)}get Bs(){if(this.Ms)return this.Ms;throw se()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),M.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),M.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Bs,i=>{const s=J.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,he.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return M.or([()=>M.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=be(),s=be();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new y_(e,n.fromCache,i,s)}}/**
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
 */class D3{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Mb(n))return M.resolve(null);let i=Fi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gp(n,null,"F"),i=Fi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=be(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Gp(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,i,s){return Mb(n)||s.isEqual(he.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(Tb()<=Re.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yp(n)),this.Fi(e,o,n,d4(s,-1)))})}$i(e,n){let i=new vt($S(e));return n.forEach((s,r)=>{Tf(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Tb()<=Re.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Yp(n)),this.xi.getDocumentsMatchingQuery(e,n,vs.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new wt(Oe),this.qi=new Go(r=>u_(r),h_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E3(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function P3(t,e,n,i){return new O3(t,e,n,i)}async function ux(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=be();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function M3(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=M.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(p=>{const g=c.docVersions.get(d);Ge(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=be();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function hx(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function N3(t,e){const n=fe(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Qt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let c=Ui(),l=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(L3(r,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!i.isEqual(he.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return M.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Li=s,r))}function L3(t,e,n){let i=be(),s=be();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ui();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:s}})}function F3(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function U3(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,M.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new sr(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Zp(t,e,n){const i=fe(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!el(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function jb(t,e,n){const i=fe(t);let s=he.min(),r=be();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=fe(a),h=u.qi.get(l);return h!==void 0?M.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(i,o,Fi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?r:be())).next(a=>(V3(i,M4(e),a),{documents:a,Wi:r})))}function V3(t,e,n){let i=t.Ui.get(e)||he.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class Hb{constructor(){this.activeTargetIds=WS()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B3{constructor(){this.Br=new Hb,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Hb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $3{qr(e){}shutdown(){}}/**
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
 */class Wb{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pl=null;function Td(){return Pl===null?Pl=268435456+Math.round(2147483648*Math.random()):Pl++,"0x"+Pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class H3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Td(),a=this.ao(e,n);G("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.ho(c,s,r),this.lo(e,a,c,i).then(l=>(G("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ih("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ko,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=z3[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Td();return new Promise((o,a)=>{const c=new i4;c.setWithCredentials(!0),c.listenOnce(e4.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ed.NO_ERROR:const u=c.getResponseJson();G(Ft,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Ed.TIMEOUT:G(Ft,`RPC '${e}' ${r} timed out`),a(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ed.HTTP_ERROR:const h=c.getStatus();if(G(Ft,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(m)>=0?m:R.UNKNOWN}(d.status);a(new H(p,d.message))}else a(new H(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(R.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{G(Ft,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);G(Ft,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}wo(e,n,i){const s=Td(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JF(),a=ZF(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new n4({})),this.ho(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=r.join("");G(Ft,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new j3({Wr:g=>{f?G(Ft,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(h||(G(Ft,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),G(Ft,`RPC '${e}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,v=>{try{_(v)}catch(b){setTimeout(()=>{throw b},0)}})};return p(u,Al.EventType.OPEN,()=>{f||G(Ft,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Al.EventType.CLOSE,()=>{f||(f=!0,G(Ft,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Al.EventType.ERROR,g=>{f||(f=!0,ih(Ft,`RPC '${e}' stream ${s} transport errored:`,g),d.so(new H(R.UNAVAILABLE,"The operation could not be completed")))}),p(u,Al.EventType.MESSAGE,g=>{var m;if(!f){const _=g.data[0];Ge(!!_);const v=_,b=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(b){G(Ft,`RPC '${e}' stream ${s} received error:`,b);const E=b.status;let I=function(x){const S=ft[x];if(S!==void 0)return tx(S)}(E),A=b.message;I===void 0&&(I=R.INTERNAL,A="Unknown error status: "+E+" with message "+b.message),f=!0,d.so(new H(I,A)),u.close()}else G(Ft,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,t4.STAT_EVENT,g=>{g.stat===Eb.PROXY?G(Ft,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===Eb.NOPROXY&&G(Ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){return new n3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,i,s,r,o,a,c){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fx(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Li(n.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new H(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W3 extends dx{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=r3(this.serializer,e),i=function(s){if(!("targetChange"in s))return he.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?he.min():r.readTime?li(r.readTime):he.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=Jp(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=qp(a)?{documents:c3(s,a)}:{query:l3(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=sx(s,r.resumeToken):r.snapshotVersion.compareTo(he.min())>0&&(o.readTime=ch(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=h3(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=Jp(this.serializer),n.removeTarget=e,this.Fo(n)}}class q3 extends dx{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=a3(e.writeResults,e.commitTime),i=li(e.commitTime);return this.listener.Zo(i,n)}return Ge(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Jp(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>o3(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(R.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(R.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class G3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Li(n),this.ru=!1):G("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{kr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=fe(a);c.du.add(4),await sl(c),c.mu.set("Unknown"),c.du.delete(4),await Af(c)}(this))})}),this.mu=new G3(i,s)}}async function Af(t){if(kr(t))for(const e of t.wu)await e(!0)}async function sl(t){for(const e of t.wu)await e(!1)}function px(t,e){const n=fe(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),w_(n)?b_(n):Yo(n).No()&&v_(n,e))}function gx(t,e){const n=fe(t),i=Yo(n);n.fu.delete(e),i.No()&&mx(n,e),n.fu.size===0&&(i.No()?i.$o():kr(n)&&n.mu.set("Unknown"))}function v_(t,e){t.gu.Ot(e.targetId),Yo(t).jo(e)}function mx(t,e){t.gu.Ot(e),Yo(t).Wo(e)}function b_(t){t.gu=new J4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Yo(t).start(),t.mu.ou()}function w_(t){return kr(t)&&!Yo(t).xo()&&t.fu.size>0}function kr(t){return fe(t).du.size===0}function _x(t){t.gu=void 0}async function Q3(t){t.fu.forEach((e,n)=>{v_(t,e)})}async function X3(t,e){_x(t),w_(t)?(t.mu.au(e),b_(t)):t.mu.set("Unknown")}async function J3(t,e,n){if(t.mu.set("Online"),e instanceof ix&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await lh(t,i)}else if(e instanceof _u?t.gu.Kt(e):e instanceof nx?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(he.min()))try{const i=await hx(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.fu.get(c);l&&s.fu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(Qt.EMPTY_BYTE_STRING,c.snapshotVersion)),mx(s,a);const l=new sr(c.target,a,1,c.sequenceNumber);v_(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){G("RemoteStore","Failed to raise snapshot:",i),await lh(t,i)}}async function lh(t,e,n){if(!el(e))throw e;t.du.add(1),await sl(t),t.mu.set("Offline"),n||(n=()=>hx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Af(t)})}function yx(t,e){return e().catch(n=>lh(t,n,e))}async function Rf(t){const e=fe(t),n=ws(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Z3(e);)try{const s=await F3(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,eU(e,s)}catch(s){await lh(e,s)}vx(e)&&bx(e)}function Z3(t){return kr(t)&&t.lu.length<10}function eU(t,e){t.lu.push(e);const n=ws(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function vx(t){return kr(t)&&!ws(t).xo()&&t.lu.length>0}function bx(t){ws(t).start()}async function tU(t){ws(t).tu()}async function nU(t){const e=ws(t);for(const n of t.lu)e.Yo(n.mutations)}async function iU(t,e,n){const i=t.lu.shift(),s=d_.from(i,e,n);await yx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Rf(t)}async function sU(t,e){e&&ws(t).Jo&&await async function(n,i){if(s=i.code,X4(s)&&s!==R.ABORTED){const r=n.lu.shift();ws(n).Oo(),await yx(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Rf(n)}var s}(t,e),vx(t)&&bx(t)}async function qb(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const i=kr(n);n.du.add(3),await sl(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Af(n)}async function rU(t,e){const n=fe(t);e?(n.du.delete(2),await Af(n)):e||(n.du.add(2),await sl(n),n.mu.set("Unknown"))}function Yo(t){return t.yu||(t.yu=function(e,n,i){const s=fe(e);return s.nu(),new W3(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:Q3.bind(null,t),Zr:X3.bind(null,t),zo:J3.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),w_(t)?b_(t):t.mu.set("Unknown")):(await t.yu.stop(),_x(t))})),t.yu}function ws(t){return t.pu||(t.pu=function(e,n,i){const s=fe(e);return s.nu(),new q3(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:tU.bind(null,t),Zr:sU.bind(null,t),Xo:nU.bind(null,t),Zo:iU.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Rf(t)):(await t.pu.stop(),t.lu.length>0&&(G("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new E_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(t,e){if(Li("AsyncQueue",`${e}: ${t}`),el(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.comparator=e?(n,i)=>e(n,i)||J.comparator(n.key,i.key):(n,i)=>J.comparator(n.key,i.key),this.keyedMap=ya(),this.sortedSet=new wt(this.comparator)}static emptySet(e){return new no(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new no;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.Iu=new wt(J.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):se():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class To{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new To(e,n,no.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&If(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this.Eu=void 0,this.listeners=[]}}class aU{constructor(){this.queries=new Go(e=>BS(e),If),this.onlineState="Unknown",this.Au=new Set}}async function T_(t,e){const n=fe(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new oU),s)try{r.Eu=await n.onListen(i)}catch(o){const a=I_(o,`Initialization of query '${Yp(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&x_(n)}async function S_(t,e){const n=fe(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function cU(t,e){const n=fe(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&x_(n)}function lU(t,e,n){const i=fe(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function x_(t){t.Au.forEach(e=>{e.next()})}class C_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new To(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.key=e}}class Ex{constructor(e){this.key=e}}class uU{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=be(),this.mutatedKeys=be(),this.Ku=$S(e),this.Gu=new no(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Kb,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Tf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(i.track({type:3,doc:d}),m=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),m=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),m=!0):f&&!d&&(i.track({type:1,doc:f}),m=!0,(c||l)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((l,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new To(this.query,e.Gu,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Kb,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=be(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new Ex(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new wx(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=be();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return To.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class hU{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class fU{constructor(e){this.key=e,this.ec=!1}}class dU{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Go(a=>BS(a),If),this.ic=new Map,this.rc=new Set,this.oc=new wt(J.comparator),this.uc=new Map,this.cc=new m_,this.ac={},this.hc=new Map,this.lc=Io.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function pU(t,e){const n=TU(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await U3(n.localStore,Fi(e));n.isPrimaryClient&&px(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await gU(n,e,i,a==="current",o.resumeToken)}return s}async function gU(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,g,m,_){let v=g.view.zu(m);v.Mi&&(v=await jb(p.localStore,g.query,!1).then(({documents:I})=>g.view.zu(I,v)));const b=_&&_.targetChanges.get(g.targetId),E=g.view.applyChanges(v,p.isPrimaryClient,b);return Yb(p,g.targetId,E.Yu),E.snapshot}(t,h,f,d);const r=await jb(t.localStore,e,!0),o=new uU(e,r.Wi),a=o.zu(r.documents),c=il.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Yb(t,n,l.Yu);const u=new hU(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function mU(t,e){const n=fe(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!If(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Zp(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),gx(n.remoteStore,i.targetId),eg(n,i.targetId)}).catch(Zc)):(eg(n,i.targetId),await Zp(n.localStore,i.targetId,!0))}async function _U(t,e,n){const i=SU(t);try{const s=await function(r,o){const a=fe(r),c=_t.now(),l=o.reduce((f,d)=>f.add(d.key),be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ui(),p=be();return a.Ki.getEntries(f,l).next(g=>{d=g,d.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{u=g;const m=[];for(const _ of o){const v=q4(_,u.get(_.key).overlayedDocument);v!=null&&m.push(new As(_.key,v,DS(v.value.mapValue),ci.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:jS(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new wt(Oe)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(i,s.batchId,n),await rl(i,s.changes),await Rf(i.remoteStore)}catch(s){const r=I_(s,"Failed to persist write");n.reject(r)}}async function Ix(t,e){const n=fe(t);try{const i=await N3(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(Ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?Ge(o.ec):s.removedDocuments.size>0&&(Ge(o.ec),o.ec=!1))}),await rl(n,i,e)}catch(i){await Zc(i)}}function Gb(t,e,n){const i=fe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=fe(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&x_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function yU(t,e,n){const i=fe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new wt(J.comparator);o=o.insert(r,zt.newNoDocument(r,he.min()));const a=be().add(r),c=new Cf(he.min(),new Map,new vt(Oe),o,a);await Ix(i,c),i.oc=i.oc.remove(r),i.uc.delete(e),k_(i)}else await Zp(i.localStore,e,!1).then(()=>eg(i,e,n)).catch(Zc)}async function vU(t,e){const n=fe(t),i=e.batch.batchId;try{const s=await M3(n.localStore,e);Sx(n,i,null),Tx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await rl(n,s)}catch(s){await Zc(s)}}async function bU(t,e,n){const i=fe(t);try{const s=await function(r,o){const a=fe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ge(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);Sx(i,e,n),Tx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await rl(i,s)}catch(s){await Zc(s)}}function Tx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Sx(t,e,n){const i=fe(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function eg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||xx(t,i)})}function xx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(gx(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),k_(t))}function Yb(t,e,n){for(const i of n)i instanceof wx?(t.cc.addReference(i.key,e),wU(t,i)):i instanceof Ex?(G("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||xx(t,i.key)):se()}function wU(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(G("SyncEngine","New document in limbo: "+n),t.rc.add(i),k_(t))}function k_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new J(We.fromString(e)),i=t.lc.next();t.uc.set(i,new fU(n)),t.oc=t.oc.insert(n,i),px(t.remoteStore,new sr(Fi(Ef(n.path)),i,2,c_.ct))}}async function rl(t,e,n){const i=fe(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,c)=>{o.push(i.dc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=y_.Di(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,c){const l=fe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>M.forEach(c,h=>M.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>M.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!el(u))throw u;G("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,p)}}}(i.localStore,r))}async function EU(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const i=await ux(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new H(R.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await rl(n,i.Qi)}}function IU(t,e){const n=fe(t),i=n.uc.get(e);if(i&&i.ec)return be().add(i.key);{let s=be();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function TU(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yU.bind(null,e),e.nc.zo=cU.bind(null,e.eventManager),e.nc.wc=lU.bind(null,e.eventManager),e}function SU(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bU.bind(null,e),e}class Qb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P3(this.persistence,new D3,e.initialUser,this.serializer)}createPersistence(e){return new A3(__.Fs,this.serializer)}createSharedClientState(e){return new B3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Gb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=EU.bind(null,this.syncEngine),await rU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aU}createDatastore(e){const n=kf(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new H3(s));var s;return function(r,o,a,c){return new K3(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Gb(this.syncEngine,a,0),o=Wb.D()?new Wb:new $3,new Y3(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,c,l){const u=new dU(i,s,r,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);G("RemoteStore","RemoteStore shutting down."),n.du.add(5),await sl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class A_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Li("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=CS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{G("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(G("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=I_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function xd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await ux(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AU(t);G("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>qb(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>qb(e.remoteStore,r)),t._onlineComponents=e}function kU(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kU(n))throw n;ih("Error using user provided cache. Falling back to memory cache: "+n),await xd(t,new Qb)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await xd(t,new Qb);return t._offlineComponents}async function Cx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Xb(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Xb(t,new xU))),t._onlineComponents}function RU(t){return Cx(t).then(e=>e.syncEngine)}async function uh(t){const e=await Cx(t),n=e.eventManager;return n.onListen=pU.bind(null,e.syncEngine),n.onUnlisten=mU.bind(null,e.syncEngine),n}function DU(t,e,n={}){const i=new Oi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new A_({next:h=>{r.enqueueAndForget(()=>S_(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new H(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new H(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new C_(Ef(o.path),l,{includeMetadataChanges:!0,xu:!0});return T_(s,u)}(await uh(t),t.asyncQueue,e,n,i)),i.promise}function OU(t,e,n={}){const i=new Oi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new A_({next:h=>{r.enqueueAndForget(()=>S_(s,u)),h.fromCache&&a.source==="server"?c.reject(new H(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new C_(o,l,{includeMetadataChanges:!0,xu:!0});return T_(s,u)}(await uh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PU(t,e,n,i){if(e===!0&&i===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zb(t){if(!J.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e0(t){if(J.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,PU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s4;switch(n.type){case"firstParty":return new c4(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jb.get(e);n&&(G("ComponentProvider","Removing Datastore"),Jb.delete(e),n.terminate())}(this),Promise.resolve()}}function MU(t,e,n,i={}){var s;const r=(t=An(t,Of))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ih("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Vt.MOCK_USER;else{o=pD(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Vt(c)}t._authCredentials=new r4(new xS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class Ar{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class ds extends Ar{constructor(e,n,i){super(e,n,Ef(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new J(e))}withConverter(e){return new ds(this.firestore,e,this._path)}}function Vi(t,e,...n){if(t=At(t),kx("collection","path",e),t instanceof Of){const i=We.fromString(e,...n);return e0(i),new ds(t,null,i)}{if(!(t instanceof Gt||t instanceof ds))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return e0(i),new ds(t.firestore,null,i)}}function _n(t,e,...n){if(t=At(t),arguments.length===1&&(e=CS.A()),kx("doc","path",e),t instanceof Of){const i=We.fromString(e,...n);return Zb(i),new Gt(t,null,new J(i))}{if(!(t instanceof Gt||t instanceof ds))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(We.fromString(e,...n));return Zb(i),new Gt(t.firestore,t instanceof ds?t.converter:null,new J(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fx(this,"async_queue_retry"),this.qc=()=>{const n=Sd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Sd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Oi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!el(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Li("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=E_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&se()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function n0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mr extends Of{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new NU,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rx(this),this._firestoreClient.terminate()}}function Ax(t,e){const n=typeof t=="object"?t:rm(),i=typeof t=="string"?t:e||"(default)",s=sm(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=fD("firestore");r&&MU(s,...r)}return s}function Pf(t){return t._firestoreClient||Rx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rx(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,c,l){return new w4(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CU(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this._byteString=e}static fromBase64String(e){try{return new So(Qt.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new So(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU=/^__.*__$/;class FU{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new nl(e,this.data,n,this.fieldTransforms)}}class Dx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new As(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ox(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class D_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new D_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return hh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Ox(this.Yc)&&LU.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class UU{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||kf(e)}ua(e,n,i,s=!1){return new D_({Yc:e,methodName:n,oa:i,path:Ht.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function O_(t){const e=t._freezeSettings(),n=kf(t._databaseId);return new UU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VU(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);P_("Data must be an object, but it was:",o,i);const a=Px(i,o);let c,l;if(r.merge)c=new vn(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=tg(e,h,n);if(!o.contains(f))throw new H(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Nx(u,f)||u.push(f)}c=new vn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new FU(new on(a),c,l)}class Lf extends R_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lf}}function BU(t,e,n,i){const s=t.ua(1,e,n);P_("Data must be an object, but it was:",s,i);const r=[],o=on.empty();Cr(i,(c,l)=>{const u=M_(e,c,n);l=At(l);const h=s.na(u);if(l instanceof Lf)r.push(u);else{const f=ol(l,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new vn(r);return new Dx(o,a,s.fieldTransforms)}function $U(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[tg(e,i,n)],c=[s];if(r.length%2!=0)throw new H(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(tg(e,r[f])),c.push(r[f+1]);const l=[],u=on.empty();for(let f=a.length-1;f>=0;--f)if(!Nx(l,a[f])){const d=a[f];let p=c[f];p=At(p);const g=o.na(d);if(p instanceof Lf)l.push(d);else{const m=ol(p,g);m!=null&&(l.push(d),u.set(d,m))}}const h=new vn(l);return new Dx(u,h,o.fieldTransforms)}function zU(t,e,n,i=!1){return ol(n,t.ua(i?4:3,e))}function ol(t,e){if(Mx(t=At(t)))return P_("Unsupported field value:",e,t),Px(t,e);if(t instanceof R_)return function(n,i){if(!Ox(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=ol(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=At(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return B4(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_t.fromDate(n);return{timestampValue:ch(i.serializer,s)}}if(n instanceof _t){const s=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ch(i.serializer,s)}}if(n instanceof Nf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof So)return{bytesValue:sx(i.serializer,n._byteString)};if(n instanceof Gt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:g_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Df(n)}`)}(t,e)}function Px(t,e){const n={};return kS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(i,s)=>{const r=ol(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Mx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof Nf||t instanceof So||t instanceof Gt||t instanceof R_)}function P_(t,e,n){if(!Mx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Df(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function tg(t,e,n){if((e=At(e))instanceof Mf)return e._internalPath;if(typeof e=="string")return M_(t,e);throw hh("Field path arguments must be of type string or ",t,!1,void 0,n)}const jU=new RegExp("[~\\*/\\[\\]]");function M_(t,e,n){if(e.search(jU)>=0)throw hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch{throw hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new H(R.INVALID_ARGUMENT,a+t+c)}function Nx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(N_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HU extends Lx{data(){return super.data()}}function N_(t,e){return typeof e=="string"?M_(t,e):e instanceof Mf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class L_{}class WU extends L_{}function qU(t,e,...n){let i=[];e instanceof L_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof F_).length,o=s.filter(a=>a instanceof Ff).length;if(r>1||r>0&&o>0)throw new H(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Ff extends WU{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Ff(e,n,i)}_apply(e){const n=this._parse(e);return Ux(e._query,n),new Ar(e.firestore,e.converter,Kp(e._query,n))}_parse(e){const n=O_(e.firestore);return function(s,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new H(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){s0(u,l);const f=[];for(const d of u)f.push(i0(a,s,d));h={arrayValue:{values:f}}}else h=i0(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||s0(u,l),h=zU(o,r,u,l==="in"||l==="not-in");return gt.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function KU(t,e,n){const i=e,s=N_("where",t);return Ff._create(s,i,n)}class F_ extends L_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new F_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)Ux(r,a),r=Kp(r,a)}(e._query,n),new Ar(e.firestore,e.converter,Kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function i0(t,e,n){if(typeof(n=At(n))=="string"){if(n==="")throw new H(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!VS(e)&&n.indexOf("/")!==-1)throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(We.fromString(n));if(!J.isDocumentKey(i))throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return kb(t,new J(i))}if(n instanceof Gt)return kb(t,n._key);throw new H(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Df(n)}.`)}function s0(t,e){if(!Array.isArray(t)||t.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ux(t,e){if(e.isInequality()){const i=f_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new H(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=US(t);r!==null&&GU(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function GU(t,e,n){if(!n.isEqual(e))throw new H(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class YU{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const i={};return Cr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Nf(dt(e.latitude),dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=RS(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(pc(e));default:return null}}convertTimestamp(e){const n=bs(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=We.fromString(e);Ge(lx(i));const s=new gc(i.get(1),i.get(3)),r=new J(i.popFirst(5));return s.isEqual(n)||Li(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vx extends Lx{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(N_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class yu extends Vx{data(e={}){return super.data(e)}}class Bx{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new va(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new yu(this._firestore,this._userDataWriter,i.key,i,new va(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new yu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new va(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new yu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new va(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:XU(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){t=An(t,Gt);const e=An(t.firestore,mr);return DU(Pf(e),t._key).then(n=>jx(e,t,n))}class U_ extends YU{constructor(e){super(),this.firestore=e}convertBytes(e){return new So(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function JU(t){t=An(t,Ar);const e=An(t.firestore,mr),n=Pf(e),i=new U_(e);return Fx(t._query),OU(n,t._query).then(s=>new Bx(e,i,t,s))}function ZU(t,e,n){t=An(t,Gt);const i=An(t.firestore,mr),s=QU(t.converter,e,n);return zx(i,[VU(O_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ci.none())])}function ra(t,e,n,...i){t=An(t,Gt);const s=An(t.firestore,mr),r=O_(s);let o;return o=typeof(e=At(e))=="string"||e instanceof Mf?$U(r,"updateDoc",t._key,e,n,i):BU(r,"updateDoc",t._key,e),zx(s,[o.toMutation(t._key,ci.exists(!0))])}function V_(t,...e){var n,i,s;t=At(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||n0(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(n0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Gt)l=An(t.firestore,mr),u=Ef(t._key.path),c={next:h=>{e[o]&&e[o](jx(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=An(t,Ar);l=An(h.firestore,mr),u=h._query;const f=new U_(l);c={next:d=>{e[o]&&e[o](new Bx(l,f,h,d))},error:e[o+1],complete:e[o+2]},Fx(t._query)}return function(h,f,d,p){const g=new A_(p),m=new C_(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>T_(await uh(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>S_(await uh(h),m))}}(Pf(l),u,a,c)}function zx(t,e){return function(n,i){const s=new Oi;return n.asyncQueue.enqueueAndForget(async()=>_U(await RU(n),i,s)),s.promise}(Pf(t),e)}function jx(t,e,n){const i=n.docs.get(e._key),s=new U_(t);return new Vx(t,s,e._key,i,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ko=n})(xs),hi(new qn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new mr(new o4(n.getProvider("auth-internal")),new u4(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gc(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),bn(Ib,"3.10.1",t),bn(Ib,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="firebasestorage.googleapis.com",e6="storageBucket",t6=2*60*1e3,n6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends gi{constructor(e,n,i=0){super(Cd(e),`Firebase Storage: ${n} (${Cd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pi;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pi||(pi={}));function Cd(t){return"storage/"+t}function i6(){const t="An unknown error occurred, please check the error payload for server response.";return new mi(pi.UNKNOWN,t)}function s6(){return new mi(pi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function r6(){return new mi(pi.CANCELED,"User canceled the upload/download.")}function o6(t){return new mi(pi.INVALID_URL,"Invalid URL '"+t+"'.")}function a6(t){return new mi(pi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function r0(t){return new mi(pi.INVALID_ARGUMENT,t)}function Wx(){return new mi(pi.APP_DELETED,"The Firebase app was deleted.")}function c6(t){return new mi(pi.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(i.path==="")return i;throw a6(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},g=n===Hx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),b=[{regex:a,indices:c,postModify:r},{regex:d,indices:p,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<b.length;E++){const I=b[E],A=I.regex.exec(e);if(A){const x=A[I.indices.bucket];let S=A[I.indices.path];S||(S=""),i=new $n(x,S),I.postModify(i);break}}if(i==null)throw o6(e);return i}}class l6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u6(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...m){l||(l=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(d,c())},m)}function f(){r&&clearTimeout(r)}function d(m,..._){if(l){f();return}if(m){f(),u.call(null,m,..._);return}if(c()||o){f(),u.call(null,m,..._);return}i<64&&(i*=2);let b;a===1?(a=2,b=0):b=(i+Math.random())*1e3,h(b)}let p=!1;function g(m){p||(p=!0,f(),!l&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function h6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f6(t){return t!==void 0}function o0(t,e,n,i){if(i<e)throw r0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw r0(`Invalid value for '${t}'. Expected ${n} or less.`)}function d6(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fh||(fh={}));/**
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
 */function p6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n,i,s,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ml(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===fh.NO_ERROR,c=r.getStatus();if(!a||p6(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===fh.ABORT;i(!1,new Ml(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ml(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());f6(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=i6();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Wx():r6();o(c)}else{const c=s6();o(c)}};this.canceled_?n(!1,new Ml(!1,null,!0)):this.backoffId_=u6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&h6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ml{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function m6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function y6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function v6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b6(t,e,n,i,s,r,o=!0){const a=d6(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return y6(l,e),m6(l,n),_6(l,r),v6(l,i),new g6(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class dh{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dh(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return E6(this._location.path)}get storage(){return this._service}get parent(){const e=w6(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new dh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw c6(e)}}function a0(t,e){const n=e==null?void 0:e[e6];return n==null?null:$n.makeFromBucketSpec(n,t)}class I6{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=t6,this._maxUploadRetryTime=n6,this._requests=new Set,s!=null?this._bucket=$n.makeFromBucketSpec(s,this._host):this._bucket=a0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=a0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new l6(Wx());{const o=b6(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const c0="@firebase/storage",l0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6="storage";function S6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new I6(n,i,s,e,xs)}function x6(){hi(new qn(T6,S6,"PUBLIC").setMultipleInstances(!0)),bn(c0,l0,""),bn(c0,l0,"esm2017")}x6();const kd=new WeakMap;function qx(t,e){return kd.has(e)||kd.set(e,t||{f:{},r:{},s:{},u:{}}),kd.get(e)}function C6(t,e,n,i){if(!t)return n;const[s,r]=Kx(t);if(!s)return n;const o=qx(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function k6(t,e,n,i){if(!t)return;const[s,r]=Kx(t);if(!s)return;const o=qx(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(ii),a}function Kx(t){return fN(t)||dN(t)?["f",t.path]:pN(t)?["r",t.toString()]:gN(t)?["s",t.toString()]:[]}const Ad=new WeakMap;function A6(t,e,n){const i=mm();Ad.has(i)||Ad.set(i,new Map);const s=Ad.get(i),r=k6(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):ii}const R6={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function ng(t,e,n,i){if(!hN(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof _t||p instanceof Nf)h[d]=p;else if(ym(p)){const g=l+d;h[d]=g in n?c[d]:p.path,f[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[d][g]=r[m.path])}o(p,c[d]||h[d],l+d+".",[h[d],f])}else Ir(p)?(h[d]={},o(p,c[d],l+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const B_={reset:!1,wait:!0,maxRefDepth:2,converter:R6,snapshotOptions:{serverTimestamps:"estimate"}};function ph(t){for(const e in t)t[e].unsub()}function ig(t,e,n,i,s,r,o,a,c){const[l,u]=ng(i.data(t.snapshotOptions),_m(e,n),s,t);r.set(e,n,l),sg(t,e,n,s,u,r,o,a,c)}function D6({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=ii;return a.once?$x(t).then(u=>{u.exists()?ig(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=V_(t,u=>{u.exists()?ig(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),ph(c)}}function sg(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(g=>l.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function p(g){g in d&&++h>=f&&a(n)}l.forEach(g=>{const m=i[g],_=s[g],v=`${n}.${g}`;if(d[v]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>_m(e,v),unsub:D6({ref:_,target:e,path:v,depth:o,ops:r,resolve:p.bind(null,v),reject:c},t),path:_.path}})}function O6(t,e,n,i,s,r){const o=Object.assign({},B_,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=rt(l?[]:t.value);l||n.set(t,h,[]);const d=i;let p,g=ii;const m=[],_={added:({newIndex:b,doc:E})=>{m.splice(b,0,Object.create(null));const I=m[b],[A,x]=ng(E.data(c),void 0,I,o);n.add(O(f),b,A),sg(o,f,`${h}.${b}`,I,x,n,0,i.bind(null,E),s)},modified:({oldIndex:b,newIndex:E,doc:I})=>{const A=O(f),x=m[b],S=A[b],[U,Q]=ng(I.data(c),S,x,o);m.splice(E,0,x),n.remove(A,b),n.add(A,E,U),sg(o,f,`${h}.${E}`,x,Q,n,0,i,s)},removed:({oldIndex:b})=>{const E=O(f);n.remove(E,b),ph(m.splice(b,1)[0])}};function v(b){const E=b.docChanges(a);if(!p&&E.length){p=!0;let I=0;const A=E.length,x=Object.create(null);for(let S=0;S<A;S++)x[E[S].doc.id]=!0;i=S=>{S&&S.id in x&&++I>=A&&(l&&(n.set(t,h,O(f)),f=t),d(O(f)),i=ii)}}E.forEach(I=>{_[I.type](I)}),E.length||(l&&(n.set(t,h,O(f)),f=t),i(O(f)))}return u?JU(e).then(v).catch(s):g=V_(e,v,s),b=>{if(g(),b){const E=typeof b=="function"?b():[];n.set(t,h,E)}m.forEach(ph)}}function P6(t,e,n,i,s,r){const o=Object.assign({},B_,r),a="value",c=Object.create(null);i=mN(i,()=>_m(t,a));let l=ii;function u(h){h.exists()?ig(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?$x(e).then(u).catch(s):l=V_(e,u,s),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}ph(c)}}function M6(t,e){let n=ii;const i=Object.assign({},B_,e),s=O(t),r=i.target||rt();_N()&&(i.once=!0);const o=C6(s,i.ssrKey,r.value,mm());r.value=o;let c=!(fI(s)?(o||[]).length>0:o!==void 0);const l=rt(!1),u=rt(),h=Uh(),f=Fg();let d=ii;function p(){let _=O(t);const v=new Promise((b,E)=>{if(n(i.reset),!_)return n=ii,b(null);l.value=c,c=!0,_.converter||(_=_.withConverter(i.converter)),n=(ym(_)?P6:O6)(r,_,N6,b,E,i)}).catch(b=>(h.value===v&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===v&&(l.value=!1)});h.value=v}let g=ii;st(t)&&(g=ls(t,p)),p(),s&&(d=A6(h.value,s,i.ssrKey)),Pc()&&G1(()=>h.value),f&&w1(m);function m(_=i.reset){g(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>m}})}const N6={set:(t,e,n)=>lN(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function an(t,e){return M6(t,e)}function Rr(t){return Ax(mm(t))}function L6(t,{firebaseApp:e,modules:n=[]}){t.provide(hI,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof window<"u";function F6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Me=Object.assign;function Rd(t,e){const n={};for(const i in e){const s=e[i];n[i]=Gn(s)?s.map(t):t(s)}return n}const Ua=()=>{},Gn=Array.isArray,U6=/\/$/,V6=t=>t.replace(U6,"");function Dd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=j6(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function B6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function u0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $6(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&xo(e.matched[i],n.matched[s])&&Gx(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gx(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z6(t[n],e[n]))return!1;return!0}function z6(t,e){return Gn(t)?h0(t,e):Gn(e)?h0(e,t):t===e}function h0(t,e){return Gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function j6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var vc;(function(t){t.pop="pop",t.push="push"})(vc||(vc={}));var Va;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Va||(Va={}));function H6(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),V6(t)}const W6=/^[^#]+#/;function q6(t,e){return t.replace(W6,"#")+e}function K6(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Uf=()=>({left:window.pageXOffset,top:window.pageYOffset});function G6(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=K6(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function f0(t,e){return(history.state?history.state.position-e:-1)+t}const rg=new Map;function Y6(t,e){rg.set(t,e)}function Q6(t){const e=rg.get(t);return rg.delete(t),e}let X6=()=>location.protocol+"//"+location.host;function Yx(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),u0(c,"")}return u0(n,t)+i+s}function J6(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Yx(t,location),p=n.value,g=e.value;let m=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}m=g?f.position-g.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:m,type:vc.pop,direction:m?m>0?Va.forward:Va.back:Va.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Me({},f.state,{scroll:Uf()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function d0(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Uf():null}}function Z6(t){const{history:e,location:n}=window,i={value:Yx(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:X6()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Me({},e.state,d0(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=Me({},s.value,e.state,{forward:c,scroll:Uf()});r(u.current,u,!0);const h=Me({},d0(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function e5(t){t=H6(t);const e=Z6(t),n=J6(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Me({location:"",base:t,go:i,createHref:q6.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function t5(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),e5(t)}function n5(t){return typeof t=="string"||t&&typeof t=="object"}function Qx(t){return typeof t=="string"||typeof t=="symbol"}const Yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xx=Symbol("");var p0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(p0||(p0={}));function Co(t,e){return Me(new Error,{type:t,[Xx]:!0},e)}function yi(t,e){return t instanceof Error&&Xx in t&&(e==null||!!(t.type&e))}const g0="[^/]+?",i5={sensitive:!1,strict:!1,start:!0,end:!0},s5=/[.+*?^${}()[\]/\\]/g;function r5(t,e){const n=Me({},i5,e),i=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(s5,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=f;r.push({name:p,repeatable:g,optional:m});const v=_||g0;if(v!==g0){d+=10;try{new RegExp(`(${v})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+E.message)}}let b=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(b=m&&l.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),g&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:m}=d,_=p in l?l[p]:"";if(Gn(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Gn(_)?_.join("/"):_;if(!v)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function o5(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a5(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=o5(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(m0(i))return 1;if(m0(s))return-1}return s.length-i.length}function m0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const c5={type:0,value:""},l5=/[a-zA-Z0-9_]/;function u5(t){if(!t)return[[]];if(t==="/")return[[c5]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:c==="("?n=2:l5.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function h5(t,e,n){const i=r5(u5(t.path),n),s=Me(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function f5(t,e){const n=[],i=new Map;e=v0({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=d5(u);p.aliasOf=f&&f.record;const g=v0(e,u),m=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of b)m.push(Me({},p,{components:f?f.record.components:p.components,path:E,aliasOf:f?f.record:p}))}let _,v;for(const b of m){const{path:E}=b;if(h&&E[0]!=="/"){const I=h.record.path,A=I[I.length-1]==="/"?"":"/";b.path=h.record.path+(E&&A+E)}if(_=h5(b,h,g),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!y0(_)&&o(u.name)),p.children){const I=p.children;for(let A=0;A<I.length;A++)r(I[A],_,f&&f.children[A])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Ua}function o(u){if(Qx(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&a5(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jx(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!y0(u)&&i.set(u.record.name,u)}function l(u,h){let f,d={},p,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Co(1,{location:u});g=f.record.name,d=Me(_0(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&_0(u.params,f.keys.map(v=>v.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(v=>v.re.test(p)),f&&(d=f.parse(p),g=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw Co(1,{location:u,currentLocation:h});g=f.record.name,d=Me({},h.params,u.params),p=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:d,matched:m,meta:g5(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _0(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function d5(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:p5(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function p5(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function y0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function g5(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function v0(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Jx(t,e){return e.children.some(n=>n===t||Jx(t,n))}const Zx=/#/g,m5=/&/g,_5=/\//g,y5=/=/g,v5=/\?/g,eC=/\+/g,b5=/%5B/g,w5=/%5D/g,tC=/%5E/g,E5=/%60/g,nC=/%7B/g,I5=/%7C/g,iC=/%7D/g,T5=/%20/g;function $_(t){return encodeURI(""+t).replace(I5,"|").replace(b5,"[").replace(w5,"]")}function S5(t){return $_(t).replace(nC,"{").replace(iC,"}").replace(tC,"^")}function og(t){return $_(t).replace(eC,"%2B").replace(T5,"+").replace(Zx,"%23").replace(m5,"%26").replace(E5,"`").replace(nC,"{").replace(iC,"}").replace(tC,"^")}function x5(t){return og(t).replace(y5,"%3D")}function C5(t){return $_(t).replace(Zx,"%23").replace(v5,"%3F")}function k5(t){return t==null?"":C5(t).replace(_5,"%2F")}function gh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function A5(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(eC," "),o=r.indexOf("="),a=gh(o<0?r:r.slice(0,o)),c=o<0?null:gh(r.slice(o+1));if(a in e){let l=e[a];Gn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function b0(t){let e="";for(let n in t){const i=t[n];if(n=x5(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gn(i)?i.map(r=>r&&og(r)):[i&&og(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function R5(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const D5=Symbol(""),w0=Symbol(""),Vf=Symbol(""),z_=Symbol(""),ag=Symbol("");function oa(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function es(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Co(4,{from:n,to:e})):h instanceof Error?a(h):n5(h)?a(Co(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(i&&i.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Od(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(O5(a)){const l=(a.__vccOpts||a)[e];l&&s.push(es(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=F6(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&es(f,n,i,r,o)()}))}}return s}function O5(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function E0(t){const e=hn(Vf),n=hn(z_),i=Ie(()=>e.resolve(O(t.to))),s=Ie(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(xo.bind(null,u));if(f>-1)return f;const d=I0(c[l-2]);return l>1&&I0(u)===d&&h[h.length-1].path!==d?h.findIndex(xo.bind(null,c[l-2])):f}),r=Ie(()=>s.value>-1&&L5(n.params,i.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&Gx(n.params,i.value.params));function a(c={}){return N5(c)?e[O(t.replace)?"replace":"push"](O(t.to)).catch(Ua):Promise.resolve()}return{route:i,href:Ie(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const P5=Er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:E0,setup(t,{slots:e}){const n=_s(E0(t)),{options:i}=hn(Vf),s=Ie(()=>({[T0(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[T0(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:No("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),M5=P5;function N5(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L5(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Gn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function I0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const T0=(t,e,n)=>t??e??n,F5=Er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=hn(ag),s=Ie(()=>t.route||i.value),r=hn(w0,0),o=Ie(()=>{let l=O(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ie(()=>s.value.matched[o.value]);au(w0,Ie(()=>o.value+1)),au(D5,a),au(ag,s);const c=rt();return ls(()=>[c.value,a.value,t.name],([l,u,h],[f,d,p])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!xo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return S0(n.default,{Component:f,route:l});const d=h.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,m=No(f,Me({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return S0(n.default,{Component:m,route:l})||m}}});function S0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sC=F5;function U5(t){const e=f5(t.routes,t),n=t.parseQuery||A5,i=t.stringifyQuery||b0,s=t.history,r=oa(),o=oa(),a=oa(),c=Uh(Yi);let l=Yi;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rd.bind(null,k=>""+k),h=Rd.bind(null,k5),f=Rd.bind(null,gh);function d(k,B){let $,X;return Qx(k)?($=e.getRecordMatcher(k),X=B):X=k,e.addRoute(X,$)}function p(k){const B=e.getRecordMatcher(k);B&&e.removeRoute(B)}function g(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function _(k,B){if(B=Me({},B||c.value),typeof k=="string"){const y=Dd(n,k,B.path),w=e.resolve({path:y.path},B),T=s.createHref(y.fullPath);return Me(y,w,{params:f(w.params),hash:gh(y.hash),redirectedFrom:void 0,href:T})}let $;if("path"in k)$=Me({},k,{path:Dd(n,k.path,B.path).path});else{const y=Me({},k.params);for(const w in y)y[w]==null&&delete y[w];$=Me({},k,{params:h(k.params)}),B.params=h(B.params)}const X=e.resolve($,B),ke=k.hash||"";X.params=u(f(X.params));const et=B6(i,Me({},k,{hash:S5(ke),path:X.path})),_e=s.createHref(et);return Me({fullPath:et,hash:ke,query:i===b0?R5(k.query):k.query||{}},X,{redirectedFrom:void 0,href:_e})}function v(k){return typeof k=="string"?Dd(n,k,c.value.path):Me({},k)}function b(k,B){if(l!==k)return Co(8,{from:B,to:k})}function E(k){return x(k)}function I(k){return E(Me(v(k),{replace:!0}))}function A(k){const B=k.matched[k.matched.length-1];if(B&&B.redirect){const{redirect:$}=B;let X=typeof $=="function"?$(k):$;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=v(X):{path:X},X.params={}),Me({query:k.query,hash:k.hash,params:"path"in X?{}:k.params},X)}}function x(k,B){const $=l=_(k),X=c.value,ke=k.state,et=k.force,_e=k.replace===!0,y=A($);if(y)return x(Me(v(y),{state:typeof y=="object"?Me({},ke,y.state):ke,force:et,replace:_e}),B||$);const w=$;w.redirectedFrom=B;let T;return!et&&$6(i,X,$)&&(T=Co(16,{to:w,from:X}),tn(X,X,!0,!1)),(T?Promise.resolve(T):U(w,X)).catch(C=>yi(C)?yi(C,2)?C:Nt(C):ge(C,w,X)).then(C=>{if(C){if(yi(C,2))return x(Me({replace:_e},v(C.to),{state:typeof C.to=="object"?Me({},ke,C.to.state):ke,force:et}),B||w)}else C=te(w,X,!0,_e,ke);return Q(w,X,C),C})}function S(k,B){const $=b(k,B);return $?Promise.reject($):Promise.resolve()}function U(k,B){let $;const[X,ke,et]=V5(k,B);$=Od(X.reverse(),"beforeRouteLeave",k,B);for(const y of X)y.leaveGuards.forEach(w=>{$.push(es(w,k,B))});const _e=S.bind(null,k,B);return $.push(_e),Lr($).then(()=>{$=[];for(const y of r.list())$.push(es(y,k,B));return $.push(_e),Lr($)}).then(()=>{$=Od(ke,"beforeRouteUpdate",k,B);for(const y of ke)y.updateGuards.forEach(w=>{$.push(es(w,k,B))});return $.push(_e),Lr($)}).then(()=>{$=[];for(const y of k.matched)if(y.beforeEnter&&!B.matched.includes(y))if(Gn(y.beforeEnter))for(const w of y.beforeEnter)$.push(es(w,k,B));else $.push(es(y.beforeEnter,k,B));return $.push(_e),Lr($)}).then(()=>(k.matched.forEach(y=>y.enterCallbacks={}),$=Od(et,"beforeRouteEnter",k,B),$.push(_e),Lr($))).then(()=>{$=[];for(const y of o.list())$.push(es(y,k,B));return $.push(_e),Lr($)}).catch(y=>yi(y,8)?y:Promise.reject(y))}function Q(k,B,$){for(const X of a.list())X(k,B,$)}function te(k,B,$,X,ke){const et=b(k,B);if(et)return et;const _e=B===Yi,y=zr?history.state:{};$&&(X||_e?s.replace(k.fullPath,Me({scroll:_e&&y&&y.scroll},ke)):s.push(k.fullPath,ke)),c.value=k,tn(k,B,$,_e),Nt()}let ue;function Ze(){ue||(ue=s.listen((k,B,$)=>{if(!Yn.listening)return;const X=_(k),ke=A(X);if(ke){x(Me(ke,{replace:!0}),X).catch(Ua);return}l=X;const et=c.value;zr&&Y6(f0(et.fullPath,$.delta),Uf()),U(X,et).catch(_e=>yi(_e,12)?_e:yi(_e,2)?(x(_e.to,X).then(y=>{yi(y,20)&&!$.delta&&$.type===vc.pop&&s.go(-1,!1)}).catch(Ua),Promise.reject()):($.delta&&s.go(-$.delta,!1),ge(_e,X,et))).then(_e=>{_e=_e||te(X,et,!1),_e&&($.delta&&!yi(_e,8)?s.go(-$.delta,!1):$.type===vc.pop&&yi(_e,20)&&s.go(-1,!1)),Q(X,et,_e)}).catch(Ua)}))}let Qe=oa(),pe=oa(),me;function ge(k,B,$){Nt(k);const X=pe.list();return X.length?X.forEach(ke=>ke(k,B,$)):console.error(k),Promise.reject(k)}function Ce(){return me&&c.value!==Yi?Promise.resolve():new Promise((k,B)=>{Qe.add([k,B])})}function Nt(k){return me||(me=!k,Ze(),Qe.list().forEach(([B,$])=>k?$(k):B()),Qe.reset()),k}function tn(k,B,$,X){const{scrollBehavior:ke}=t;if(!zr||!ke)return Promise.resolve();const et=!$&&Q6(f0(k.fullPath,0))||(X||!$)&&history.state&&history.state.scroll||null;return qg().then(()=>ke(k,B,et)).then(_e=>_e&&G6(_e)).catch(_e=>ge(_e,k,B))}const Lt=k=>s.go(k);let lt;const Tn=new Set,Yn={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:E,replace:I,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Ce,install(k){const B=this;k.component("RouterLink",M5),k.component("RouterView",sC),k.config.globalProperties.$router=B,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>O(c)}),zr&&!lt&&c.value===Yi&&(lt=!0,E(s.location).catch(ke=>{}));const $={};for(const ke in Yi)$[ke]=Ie(()=>c.value[ke]);k.provide(Vf,B),k.provide(z_,_s($)),k.provide(ag,c);const X=k.unmount;Tn.add(k),k.unmount=function(){Tn.delete(k),Tn.size<1&&(l=Yi,ue&&ue(),ue=null,c.value=Yi,lt=!1,me=!1),X()}}};return Yn}function Lr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V5(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>xo(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>xo(l,c))||s.push(c))}return[n,i,s]}function al(){return hn(Vf)}function cl(){return hn(z_)}const B5={class:"container"},$5={__name:"App",setup(t){const e=cl();return(n,i)=>{const s=Oc("RouterView");return Y(),ce("div",B5,[(Y(),fn(s,{key:O(e).fullPath}))])}}},Wi=CE({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),z5=Ax(Wi);Vi(z5,"todos");function x0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x0(Object(n),!0).forEach(function(i){Et(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function mh(t){return mh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mh(t)}function j5(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C0(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function H5(t,e,n){return e&&C0(t.prototype,e),n&&C0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j_(t,e){return q5(t)||G5(t,e)||rC(t,e)||Q5()}function ll(t){return W5(t)||K5(t)||rC(t)||Y5()}function W5(t){if(Array.isArray(t))return cg(t)}function q5(t){if(Array.isArray(t))return t}function K5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G5(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(c){r=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function rC(t,e){if(t){if(typeof t=="string")return cg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cg(t,e)}}function cg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Y5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var k0=function(){},H_={},oC={},aC=null,cC={mark:k0,measure:k0};try{typeof window<"u"&&(H_=window),typeof document<"u"&&(oC=document),typeof MutationObserver<"u"&&(aC=MutationObserver),typeof performance<"u"&&(cC=performance)}catch{}var X5=H_.navigator||{},A0=X5.userAgent,R0=A0===void 0?"":A0,Es=H_,Ke=oC,D0=aC,Nl=cC;Es.document;var qi=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function",lC=~R0.indexOf("MSIE")||~R0.indexOf("Trident/"),Ll,Fl,Ul,Vl,Bl,Bi="___FONT_AWESOME___",lg=16,uC="fa",hC="svg-inline--fa",_r="data-fa-i2svg",ug="data-fa-pseudo-element",J5="data-fa-pseudo-element-pending",W_="data-prefix",q_="data-icon",O0="fontawesome-i2svg",Z5="async",eV=["HTML","HEAD","STYLE","SCRIPT"],fC=function(){try{return!0}catch{return!1}}(),He="classic",ot="sharp",K_=[He,ot];function ul(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[He]}})}var bc=ul((Ll={},Et(Ll,He,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Et(Ll,ot,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ll)),wc=ul((Fl={},Et(Fl,He,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Et(Fl,ot,{solid:"fass",regular:"fasr",light:"fasl"}),Fl)),Ec=ul((Ul={},Et(Ul,He,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Et(Ul,ot,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ul)),tV=ul((Vl={},Et(Vl,He,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Et(Vl,ot,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Vl)),nV=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,dC="fa-layers-text",iV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sV=ul((Bl={},Et(Bl,He,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Et(Bl,ot,{900:"fass",400:"fasr",300:"fasl"}),Bl)),pC=[1,2,3,4,5,6,7,8,9,10],rV=pC.concat([11,12,13,14,15,16,17,18,19,20]),oV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ic=new Set;Object.keys(wc[He]).map(Ic.add.bind(Ic));Object.keys(wc[ot]).map(Ic.add.bind(Ic));var aV=[].concat(K_,ll(Ic),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qs.GROUP,Qs.SWAP_OPACITY,Qs.PRIMARY,Qs.SECONDARY]).concat(pC.map(function(t){return"".concat(t,"x")})).concat(rV.map(function(t){return"w-".concat(t)})),Ba=Es.FontAwesomeConfig||{};function cV(t){var e=Ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ke&&typeof Ke.querySelector=="function"){var uV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uV.forEach(function(t){var e=j_(t,2),n=e[0],i=e[1],s=lV(cV(n));s!=null&&(Ba[i]=s)})}var gC={styleDefault:"solid",familyDefault:"classic",cssPrefix:uC,replacementClass:hC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ba.familyPrefix&&(Ba.cssPrefix=Ba.familyPrefix);var ko=j(j({},gC),Ba);ko.autoReplaceSvg||(ko.observeMutations=!1);var q={};Object.keys(gC).forEach(function(t){Object.defineProperty(q,t,{enumerable:!0,set:function(n){ko[t]=n,$a.forEach(function(i){return i(q)})},get:function(){return ko[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){ko.cssPrefix=e,$a.forEach(function(n){return n(q)})},get:function(){return ko.cssPrefix}});Es.FontAwesomeConfig=q;var $a=[];function hV(t){return $a.push(t),function(){$a.splice($a.indexOf(t),1)}}var Qi=lg,ri={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fV(t){if(!(!t||!qi)){var e=Ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ke.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Ke.head.insertBefore(e,i),t}}var dV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tc(){for(var t=12,e="";t-- >0;)e+=dV[Math.random()*62|0];return e}function Qo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function G_(t){return t.classList?Qo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(mC(t[n]),'" ')},"").trim()}function Bf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Y_(t){return t.size!==ri.size||t.x!==ri.x||t.y!==ri.y||t.rotate!==ri.rotate||t.flipX||t.flipY}function gV(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:c,path:l}}function mV(t){var e=t.transform,n=t.width,i=n===void 0?lg:n,s=t.height,r=s===void 0?lg:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&lC?c+="translate(".concat(e.x/Qi-i/2,"em, ").concat(e.y/Qi-r/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Qi,"em), calc(-50% + ").concat(e.y/Qi,"em)) "):c+="translate(".concat(e.x/Qi,"em, ").concat(e.y/Qi,"em) "),c+="scale(".concat(e.size/Qi*(e.flipX?-1:1),", ").concat(e.size/Qi*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var _V=`:root, :host {
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
}`;function _C(){var t=uC,e=hC,n=q.cssPrefix,i=q.replacementClass,s=_V;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var P0=!1;function Pd(){q.autoAddCss&&!P0&&(fV(_C()),P0=!0)}var yV={mixout:function(){return{dom:{css:_C,insertCss:Pd}}},hooks:function(){return{beforeDOMElementCreation:function(){Pd()},beforeI2svg:function(){Pd()}}}},$i=Es||{};$i[Bi]||($i[Bi]={});$i[Bi].styles||($i[Bi].styles={});$i[Bi].hooks||($i[Bi].hooks={});$i[Bi].shims||($i[Bi].shims=[]);var zn=$i[Bi],yC=[],vV=function t(){Ke.removeEventListener("DOMContentLoaded",t),_h=1,yC.map(function(e){return e()})},_h=!1;qi&&(_h=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),_h||Ke.addEventListener("DOMContentLoaded",vV));function bV(t){qi&&(_h?setTimeout(t,0):yC.push(t))}function hl(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?mC(t):"<".concat(e," ").concat(pV(i),">").concat(r.map(hl).join(""),"</").concat(e,">")}function M0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wV=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},Md=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?wV(n,s):n,c,l,u;for(i===void 0?(c=1,u=e[r[0]]):(c=0,u=i);c<o;c++)l=r[c],u=a(u,e[l],l,e);return u};function EV(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function hg(t){var e=EV(t);return e.length===1?e[0].toString(16):null}function IV(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function N0(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function fg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=N0(e);typeof zn.hooks.addPack=="function"&&!s?zn.hooks.addPack(t,N0(e)):zn.styles[t]=j(j({},zn.styles[t]||{}),r),t==="fas"&&fg("fa",e)}var $l,zl,jl,qr=zn.styles,TV=zn.shims,SV=($l={},Et($l,He,Object.values(Ec[He])),Et($l,ot,Object.values(Ec[ot])),$l),Q_=null,vC={},bC={},wC={},EC={},IC={},xV=(zl={},Et(zl,He,Object.keys(bc[He])),Et(zl,ot,Object.keys(bc[ot])),zl);function CV(t){return~aV.indexOf(t)}function kV(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!CV(s)?s:null}var TC=function(){var e=function(r){return Md(qr,function(o,a,c){return o[c]=Md(a,r,{}),o},{})};vC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),bC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),IC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in qr||q.autoFetchSvg,i=Md(TV,function(s,r){var o=r[0],a=r[1],c=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});wC=i.names,EC=i.unicodes,Q_=$f(q.styleDefault,{family:q.familyDefault})};hV(function(t){Q_=$f(t.styleDefault,{family:q.familyDefault})});TC();function X_(t,e){return(vC[t]||{})[e]}function AV(t,e){return(bC[t]||{})[e]}function Xs(t,e){return(IC[t]||{})[e]}function SC(t){return wC[t]||{prefix:null,iconName:null}}function RV(t){var e=EC[t],n=X_("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Is(){return Q_}var J_=function(){return{prefix:null,iconName:null,rest:[]}};function $f(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?He:n,s=bc[i][t],r=wc[i][t]||wc[i][s],o=t in zn.styles?t:null;return r||o||null}var L0=(jl={},Et(jl,He,Object.keys(Ec[He])),Et(jl,ot,Object.keys(Ec[ot])),jl);function zf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},Et(e,He,"".concat(q.cssPrefix,"-").concat(He)),Et(e,ot,"".concat(q.cssPrefix,"-").concat(ot)),e),o=null,a=He;(t.includes(r[He])||t.some(function(l){return L0[He].includes(l)}))&&(a=He),(t.includes(r[ot])||t.some(function(l){return L0[ot].includes(l)}))&&(a=ot);var c=t.reduce(function(l,u){var h=kV(q.cssPrefix,u);if(qr[u]?(u=SV[a].includes(u)?tV[a][u]:u,o=u,l.prefix=u):xV[a].indexOf(u)>-1?(o=u,l.prefix=$f(u,{family:a})):h?l.iconName=h:u!==q.replacementClass&&u!==r[He]&&u!==r[ot]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?SC(l.iconName):{},d=Xs(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!qr.far&&qr.fas&&!q.autoFetchSvg&&(l.prefix="fas")}return l},J_());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===ot&&(qr.fass||q.autoFetchSvg)&&(c.prefix="fass",c.iconName=Xs(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Is()||"fas"),c}var DV=function(){function t(){j5(this,t),this.definitions={}}return H5(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),fg(a,o[a]);var c=Ec[He][a];c&&fg(c,o[a]),TC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),F0=[],Kr={},io={},OV=Object.keys(io);function PV(t,e){var n=e.mixoutsTo;return F0=t,Kr={},Object.keys(io).forEach(function(i){OV.indexOf(i)===-1&&delete io[i]}),F0.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),mh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){Kr[o]||(Kr[o]=[]),Kr[o].push(r[o])})}i.provides&&i.provides(io)}),n}function dg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=Kr[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function yr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=Kr[t]||[];s.forEach(function(r){r.apply(null,n)})}function zi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return io[t]?io[t].apply(null,e):void 0}function pg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Is();if(e)return e=Xs(n,e)||e,M0(xC.definitions,n,e)||M0(zn.styles,n,e)}var xC=new DV,MV=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,yr("noAuto")},NV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qi?(yr("beforeI2svg",e),zi("pseudoElements2svg",e),zi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,bV(function(){FV({autoReplaceSvgRoot:n}),yr("watch",e)})}},LV={icon:function(e){if(e===null)return null;if(mh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=$f(e[0]);return{prefix:i,iconName:Xs(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(q.cssPrefix,"-"))>-1||e.match(nV))){var s=zf(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Is(),iconName:Xs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Is();return{prefix:r,iconName:Xs(r,e)||e}}}},In={noAuto:MV,config:q,dom:NV,parse:LV,library:xC,findIconDefinition:pg,toHtml:hl},FV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Ke:n;(Object.keys(zn.styles).length>0||q.autoFetchSvg)&&qi&&q.autoReplaceSvg&&In.dom.i2svg({node:i})};function jf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return hl(i)})}}),Object.defineProperty(t,"node",{get:function(){if(qi){var i=Ke.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function UV(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(Y_(o)&&n.found&&!i.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=Bf(j(j({},r),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function VV(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},s),{},{id:o}),children:i}]}]}function Z_(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",v=[q.replacementClass,r?"".concat(q.cssPrefix,"-").concat(r):""].filter(function(U){return h.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(h.classes).join(" "),b={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},E=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(b.attributes[_r]=""),c&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Tc())},children:[c]}),delete b.attributes.title);var I=j(j({},b),{},{prefix:s,iconName:r,main:n,mask:i,maskId:l,transform:o,symbol:a,styles:j(j({},E),h.styles)}),A=i.found&&n.found?zi("generateAbstractMask",I)||{children:[],attributes:{}}:zi("generateAbstractIcon",I)||{children:[],attributes:{}},x=A.children,S=A.attributes;return I.children=x,I.attributes=S,a?VV(I):UV(I)}function U0(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=j(j(j({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});c&&(l[_r]="");var u=j({},o.styles);Y_(s)&&(u.transform=mV({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Bf(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function BV(t){var e=t.content,n=t.title,i=t.extra,s=j(j(j({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Bf(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Nd=zn.styles;function gg(t){var e=t[0],n=t[1],i=t.slice(4),s=j_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Qs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Qs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Qs.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var $V={found:!1,width:512,height:512};function zV(t,e){!fC&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mg(t,e){var n=e;return e==="fa"&&q.styleDefault!==null&&(e=Is()),new Promise(function(i,s){if(zi("missingIconAbstract"),n==="fa"){var r=SC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Nd[e]&&Nd[e][t]){var o=Nd[e][t];return i(gg(o))}zV(t,e),i(j(j({},$V),{},{icon:q.showMissingIcons&&t?zi("missingIconAbstract")||{}:{}}))})}var V0=function(){},_g=q.measurePerformance&&Nl&&Nl.mark&&Nl.measure?Nl:{mark:V0,measure:V0},ba='FA "6.4.0"',jV=function(e){return _g.mark("".concat(ba," ").concat(e," begins")),function(){return CC(e)}},CC=function(e){_g.mark("".concat(ba," ").concat(e," ends")),_g.measure("".concat(ba," ").concat(e),"".concat(ba," ").concat(e," begins"),"".concat(ba," ").concat(e," ends"))},ey={begin:jV,end:CC},vu=function(){};function B0(t){var e=t.getAttribute?t.getAttribute(_r):null;return typeof e=="string"}function HV(t){var e=t.getAttribute?t.getAttribute(W_):null,n=t.getAttribute?t.getAttribute(q_):null;return e&&n}function WV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function qV(){if(q.autoReplaceSvg===!0)return bu.replace;var t=bu[q.autoReplaceSvg];return t||bu.replace}function KV(t){return Ke.createElementNS("http://www.w3.org/2000/svg",t)}function GV(t){return Ke.createElement(t)}function kC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?KV:GV:n;if(typeof t=="string")return Ke.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(kC(o,{ceFn:i}))}),s}function YV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var bu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(kC(s),n)}),n.getAttribute(_r)===null&&q.keepOriginalSource){var i=Ke.createComment(YV(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~G_(n).indexOf(q.replacementClass))return bu.replace(e);var s=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,c){return c===q.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return hl(a)}).join(`
`);n.setAttribute(_r,""),n.innerHTML=o}};function $0(t){t()}function AC(t,e){var n=typeof e=="function"?e:vu;if(t.length===0)n();else{var i=$0;q.mutateApproach===Z5&&(i=Es.requestAnimationFrame||$0),i(function(){var s=qV(),r=ey.begin("mutate");t.map(s),r(),n()})}}var ty=!1;function RC(){ty=!0}function yg(){ty=!1}var yh=null;function z0(t){if(D0&&q.observeMutations){var e=t.treeCallback,n=e===void 0?vu:e,i=t.nodeCallback,s=i===void 0?vu:i,r=t.pseudoElementsCallback,o=r===void 0?vu:r,a=t.observeMutationsRoot,c=a===void 0?Ke:a;yh=new D0(function(l){if(!ty){var u=Is();Qo(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!B0(h.addedNodes[0])&&(q.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&q.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&B0(h.target)&&~oV.indexOf(h.attributeName))if(h.attributeName==="class"&&HV(h.target)){var f=zf(G_(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(W_,d||u),p&&h.target.setAttribute(q_,p)}else WV(h.target)&&s(h.target)})}}),qi&&yh.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QV(){yh&&yh.disconnect()}function XV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function JV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=zf(G_(t));return s.prefix||(s.prefix=Is()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=AV(s.prefix,t.innerText)||X_(s.prefix,hg(t.innerText))),!s.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function ZV(t){var e=Qo(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(i||Tc()):(e["aria-hidden"]="true",e.focusable="false")),e}function eB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ri,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=JV(t),i=n.iconName,s=n.prefix,r=n.rest,o=ZV(t),a=dg("parseNodeAttributes",{},t),c=e.styleParser?XV(t):[];return j({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:ri,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:o}},a)}var tB=zn.styles;function DC(t){var e=q.autoReplaceSvg==="nest"?j0(t,{styleParser:!1}):j0(t);return~e.extra.classes.indexOf(dC)?zi("generateLayersText",t,e):zi("generateSvgReplacementMutation",t,e)}var Ts=new Set;K_.map(function(t){Ts.add("fa-".concat(t))});Object.keys(bc[He]).map(Ts.add.bind(Ts));Object.keys(bc[ot]).map(Ts.add.bind(Ts));Ts=ll(Ts);function H0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qi)return Promise.resolve();var n=Ke.documentElement.classList,i=function(h){return n.add("".concat(O0,"-").concat(h))},s=function(h){return n.remove("".concat(O0,"-").concat(h))},r=q.autoFetchSvg?Ts:K_.map(function(u){return"fa-".concat(u)}).concat(Object.keys(tB));r.includes("fa")||r.push("fa");var o=[".".concat(dC,":not([").concat(_r,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(_r,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Qo(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var c=ey.begin("onTree"),l=a.reduce(function(u,h){try{var f=DC(h);f&&u.push(f)}catch(d){fC||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){AC(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function nB(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;DC(t).then(function(n){n&&AC([n],e)})}function iB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:pg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:pg(s||{})),t(i,j(j({},n),{},{mask:s}))}}var sB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?ri:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,g=n.classes,m=g===void 0?[]:g,_=n.attributes,v=_===void 0?{}:_,b=n.styles,E=b===void 0?{}:b;if(e){var I=e.prefix,A=e.iconName,x=e.icon;return jf(j({type:"icon"},e),function(){return yr("beforeDOMElementCreation",{iconDefinition:e,params:n}),q.autoA11y&&(f?v["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(p||Tc()):(v["aria-hidden"]="true",v.focusable="false")),Z_({icons:{main:gg(x),mask:c?gg(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:A,transform:j(j({},ri),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:v,styles:E,classes:m}})})}},rB={mixout:function(){return{icon:iB(sB)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=H0,n.nodeCallback=nB,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?Ke:i,r=n.callback,o=r===void 0?function(){}:r;return H0(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([mg(s,a),u.iconName?mg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=j_(g,2),_=m[0],v=m[1];d([n,Z_({icons:{main:_,mask:v},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,c=Bf(a);c.length>0&&(s.style=c);var l;return Y_(o)&&(l=zi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(l||r.icon),{children:i,attributes:s}}}},oB={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return jf({type:"layer"},function(){yr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(ll(r)).join(" ")},children:o}]})}}}},aB={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,h=u===void 0?{}:u;return jf({type:"counter",content:n},function(){return yr("beforeDOMElementCreation",{content:n,params:i}),BV({content:n.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(ll(a))}})})}}}},cB={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?ri:s,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return jf({type:"text",content:n},function(){return yr("beforeDOMElementCreation",{content:n,params:i}),U0({content:n,transform:j(j({},ri),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(q.cssPrefix,"-layers-text")].concat(ll(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,c=null;if(lC){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return q.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,U0({content:n.innerHTML,width:a,height:c,transform:r,title:s,extra:o,watchable:!0})])}}},lB=new RegExp('"',"ug"),W0=[1105920,1112319];function uB(t){var e=t.replace(lB,""),n=IV(e,0),i=n>=W0[0]&&n<=W0[1],s=e.length===2?e[0]===e[1]:!1;return{value:hg(s?e[0]:e),isSecondary:i||s}}function q0(t,e){var n="".concat(J5).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=Qo(t.children),o=r.filter(function(x){return x.getAttribute(ug)===e})[0],a=Es.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(iV),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?ot:He,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?wc[f][c[2].toLowerCase()]:sV[f][l],p=uB(h),g=p.value,m=p.isSecondary,_=c[0].startsWith("FontAwesome"),v=X_(d,g),b=v;if(_){var E=RV(g);E.iconName&&E.prefix&&(v=E.iconName,d=E.prefix)}if(v&&!m&&(!o||o.getAttribute(W_)!==d||o.getAttribute(q_)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var I=eB(),A=I.extra;A.attributes[ug]=e,mg(v,d).then(function(x){var S=Z_(j(j({},I),{},{icons:{main:x,mask:J_()},prefix:d,iconName:b,extra:A,watchable:!0})),U=Ke.createElement("svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=S.map(function(Q){return hl(Q)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function hB(t){return Promise.all([q0(t,"::before"),q0(t,"::after")])}function fB(t){return t.parentNode!==document.head&&!~eV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ug)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function K0(t){if(qi)return new Promise(function(e,n){var i=Qo(t.querySelectorAll("*")).filter(fB).map(hB),s=ey.begin("searchPseudoElements");RC(),Promise.all(i).then(function(){s(),yg(),e()}).catch(function(){s(),yg(),n()})})}var dB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=K0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?Ke:i;q.searchPseudoElements&&K0(s)}}},G0=!1,pB={mixout:function(){return{dom:{unwatch:function(){RC(),G0=!0}}}},hooks:function(){return{bootstrap:function(){z0(dg("mutationObserverCallbacks",{}))},noAuto:function(){QV()},watch:function(n){var i=n.observeMutationsRoot;G0?yg():z0(dg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Y0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},gB={mixout:function(){return{parse:{transform:function(n){return Y0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=Y0(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:j({},d.outer),children:[{tag:"g",attributes:j({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:j(j({},i.icon.attributes),d.path)}]}]}}}},Ld={x:0,y:0,width:"100%",height:"100%"};function Q0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mB(t){return t.tag==="g"?t.children:[t]}var _B={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?zf(s.split(" ").map(function(o){return o.trim()})):J_();return r.prefix||(r.prefix=Is()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,c=n.transform,l=r.width,u=r.icon,h=o.width,f=o.icon,d=gV({transform:c,containerWidth:h,iconWidth:l}),p={tag:"rect",attributes:j(j({},Ld),{},{fill:"white"})},g=u.children?{children:u.children.map(Q0)}:{},m={tag:"g",attributes:j({},d.inner),children:[Q0(j({tag:u.tag,attributes:j(j({},u.attributes),d.path)},g))]},_={tag:"g",attributes:j({},d.outer),children:[m]},v="mask-".concat(a||Tc()),b="clip-".concat(a||Tc()),E={tag:"mask",attributes:j(j({},Ld),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:mB(f)},E]};return i.push(I,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},Ld)}),{children:i,attributes:s}}}},yB={provides:function(e){var n=!1;Es.matchMedia&&(n=Es.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:j(j({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:j(j({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:j(j({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},vB={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},bB=[yV,rB,oB,aB,cB,dB,pB,gB,_B,yB,vB];PV(bB,{mixoutsTo:In});In.noAuto;var OC=In.config,_i=In.library;In.dom;var vh=In.parse;In.findIconDefinition;In.toHtml;var wB=In.icon;In.layer;var EB=In.text;In.counter;function X0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X0(Object(n),!0).forEach(function(i){sn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function bh(t){return bh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bh(t)}function sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IB(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function TB(t,e){if(t==null)return{};var n=IB(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function vg(t){return SB(t)||xB(t)||CB(t)||kB()}function SB(t){if(Array.isArray(t))return bg(t)}function xB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CB(t,e){if(t){if(typeof t=="string")return bg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bg(t,e)}}function bg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function kB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var AB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},PC={exports:{}};(function(t){(function(e){var n=function(_,v,b){if(!l(v)||h(v)||f(v)||d(v)||c(v))return v;var E,I=0,A=0;if(u(v))for(E=[],A=v.length;I<A;I++)E.push(n(_,v[I],b));else{E={};for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&(E[_(x,b)]=n(_,v[x],b))}return E},i=function(_,v){v=v||{};var b=v.separator||"_",E=v.split||/(?=[A-Z])/;return _.split(E).join(b)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,b){return b?b.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var v=s(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,v){var b=v&&"process"in v?v.process:v;return typeof b!="function"?_:function(E,I){return b(E,_,I)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,v){return n(g(s,v),_)},decamelizeKeys:function(_,v){return n(g(o,v),_,v)},pascalizeKeys:function(_,v){return n(g(r,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(AB)})(PC);var RB=PC.exports,DB=["class","style"];function OB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=RB.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function PB(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ny(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return ny(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=PB(u);break;case"style":c.style=OB(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=TB(n,DB);return No(t.tag,Un(Un(Un({},e),{},{class:s.class,style:Un(Un({},s.style),o)},s.attrs),a),i)}var MC=!1;try{MC=!0}catch{}function MB(){if(!MC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function za(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?sn({},t,e):{}}function NB(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},sn(e,"fa-".concat(t.size),t.size!==null),sn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),sn(e,"fa-pull-".concat(t.pull),t.pull!==null),sn(e,"fa-swap-opacity",t.swapOpacity),sn(e,"fa-bounce",t.bounce),sn(e,"fa-shake",t.shake),sn(e,"fa-beat",t.beat),sn(e,"fa-fade",t.fade),sn(e,"fa-beat-fade",t.beatFade),sn(e,"fa-flash",t.flash),sn(e,"fa-spin-pulse",t.spinPulse),sn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function J0(t){if(t&&bh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vh.icon)return vh.icon(t);if(t===null)return null;if(bh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var NC=Er({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Ie(function(){return J0(e.icon)}),r=Ie(function(){return za("classes",NB(e))}),o=Ie(function(){return za("transform",typeof e.transform=="string"?vh.transform(e.transform):e.transform)}),a=Ie(function(){return za("mask",J0(e.mask))}),c=Ie(function(){return wB(s.value,Un(Un(Un(Un({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ls(c,function(u){if(!u)return MB("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Ie(function(){return c.value?ny(c.value.abstract[0],{},i):null});return function(){return l.value}}});Er({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=OC.familyPrefix,r=Ie(function(){return["".concat(s,"-layers")].concat(vg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return No("div",{class:r.value},i.default?i.default():[])}}});Er({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=OC.familyPrefix,r=Ie(function(){return za("classes",[].concat(vg(e.counter?["".concat(s,"-layers-counter")]:[]),vg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Ie(function(){return za("transform",typeof e.transform=="string"?vh.transform(e.transform):e.transform)}),a=Ie(function(){var l=EB(e.value.toString(),Un(Un({},o.value),r.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Ie(function(){return ny(a.value,{},i)});return function(){return c.value}}});const Pn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},LB={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(Y(),ce("div",{class:gs(["flag",{inverted:e.inverted}]),style:Oo({backgroundColor:e.color})},[mt(O(NC),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},LC=Pn(LB,[["__scopeId","data-v-0a69adc5"]]),Xo=em("board",()=>{const t=rt(""),e=rt("");function n(s){t.value=s}function i(s){e.value=s}return{selectedTile:t,setSelectedTile:n,boardUUID:e,setBoardUUID:i}});const FB=["src"],UB={class:"boardTileFlags"},VB={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1}},setup(t){const e=t,n=Xo(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,c;return Y(),ce("div",{class:gs(["tile",{isSelected:O(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(c=(a=e.teamData)==null?void 0:a.verify)==null?void 0:c.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData}]),onClick:r[0]||(r[0]=l=>i({id:e.tileData.id,...e.tileData}))},[re("img",{src:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,FB),re("div",UB,[e.groupsData?(Y(!0),ce(Ue,{key:0},or(e.groupsData,l=>(Y(),fn(LC,{key:"tile-flag-"+l.name+"-"+e.tileData.id,class:gs(["tileFlag","flag-end-"+l.flagEnd]),icon:l.icon,color:"none",inverted:!0,style:Oo({opacity:l.collected.hasOwnProperty(e.tileData.id)?1:0})},null,8,["class","icon","style"]))),128)):tt("",!0)])],2)}}},FC=Pn(VB,[["__scopeId","data-v-96fb724a"]]);const BB={key:0,class:"bingo-board"},$B={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all"})},tilesData:{type:Object,required:!0,default:()=>{}}},setup(t){const e=t;uE(s=>({"703e7d6d":e.boardData.settings.width,"7dc23660":e.boardData.settings.height}));const n=Xo(),i=iD(n.selectedTile);return(s,r)=>e.boardData?(Y(),ce("main",BB,[(Y(!0),ce(Ue,null,or(e.tilesData,o=>(Y(),fn(FC,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:O(i)==o.id},null,8,["tileData","groupsData","teamData","selected"]))),128))])):tt("",!0)}},UC=Pn($B,[["__scopeId","data-v-7b72f05e"]]);const Hf=t=>(Rc("data-v-d558536f"),t=t(),Dc(),t),zB={key:0},jB=Hf(()=>re("br",null,null,-1)),HB={class:"tooltiptext"},WB=Hf(()=>re("br",null,null,-1)),qB=Hf(()=>re("br",null,null,-1)),KB=Hf(()=>re("br",null,null,-1)),GB={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,i=Xo().boardUUID;return(s,r)=>{const o=Oc("router-link");return Y(),ce("div",null,[e.groupsData?(Y(),ce("ul",zB,[(Y(!0),ce(Ue,null,or(e.groupsData,(a,c)=>(Y(),ce("li",{key:c+a.id,class:"tooltip"},[mt(LC,{color:a.color,class:gs(["tileFlag","flag-end-"+a.flagEnd]),inverted:a.name=="Ahka's Cum Balls",icon:a.icon,style:Oo({"--groupColor":a.color,"--width":a.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),pt(" "+nt(a.name),1),jB,re("span",HB,[(Y(!0),ce(Ue,null,or(a.member,l=>(Y(),ce("span",{key:l},[pt(nt(l),1),WB]))),128))]),pt(" score: "+nt(a.points),1),qB,KB]))),128)),re("li",null,[mt(o,{class:"btn",to:{name:"stats-graph",params:{boardUUID:O(i)}}},{default:zh(()=>[pt("Go To Graph")]),_:1},8,["to"])])])):tt("",!0)])}}},YB=Pn(GB,[["__scopeId","data-v-d558536f"]]),QB={__name:"sidePannel",setup(t){const e=Xo();return(n,i)=>(Y(),ce(Ue,null,[(Y(),fn(FC,{tileData:O(e).selectedTile,key:"side-pannel-tile-"+O(e).selectedTile},null,8,["tileData"])),re("h2",null,nt(O(e).selectedTile.id.split("")[0])+", "+nt(O(e).selectedTile.id.split("")[1]),1),re("h1",null,nt(O(e).selectedTile.title),1),re("p",null,nt(O(e).selectedTile.description),1)],64))}},fl=em("userStateStore",()=>{const t=rt({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}});const VC=t=>(Rc("data-v-aa4fb0f6"),t=t(),Dc(),t),XB=VC(()=>re("section",null,null,-1)),JB={class:"main-section"},ZB={key:2},e$={key:3},t$={style:{"justify-content":"end",display:"flex"}},n$={key:0},i$=["onSubmit"],s$=VC(()=>re("section",null,null,-1)),r$={__name:"BoardView",setup(t){const e=rt("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=Xo(),s=fl().user,r=cl(),o=al();n.setBoardUUID(r.params.boardUUID);const a=n.boardUUID,c=rt(r.params.teamCode||"all"),l=async()=>{var v;if(c.value!==""){let b={name:"private-board",params:{boardUUID:a,teamCode:c.value}};const{data:E}=an(_n(u,"Boards",a,"Groups",c.value));E&&((v=E==null?void 0:E.value)==null?void 0:v.name)=="moderator"&&(b.name="moderator"),o.push(b)}},u=Rr(Wi),{data:h}=an(Vi(u,"Boards",a,"Groups")),f=an(_n(u,"Boards",a)),{data:d}=an(_n(u,`Boards/${a}/Groups/${c.value}/`)),p=Ie(()=>{var b;let v={};return h&&((b=h==null?void 0:h.value)==null||b.forEach(E=>{E.name!="moderator"&&(v[E.id]={id:E.id,name:E.name,member:E.members,icon:E.icon,color:E.color,points:E.points,flagEnd:E.flagEnd,collected:E.collected,verify:E.verify})})),v||{}}),{data:g}=an(Vi(u,`Boards/${a}/Tiles`)),m=rt(""),_=rt(!1);return(v,b)=>{var I,A,x,S;const E=Oc("fontAwesomeIcon");return Y(),ce(Ue,null,[XB,re("section",JB,[O(p)?(Y(),fn(YB,{key:0,class:"scoreCard",groupsData:O(p)},null,8,["groupsData"])):tt("",!0),O(f)&&O(g)&&(O(f).settings.public||O(s).data.uid==O(f).ownerID||O(s).data.uid==e.value)?(Y(),fn(UC,{boardData:O(f),groupsData:O(p),teamData:O(d),tilesData:O(g),key:"bingo-board-"+O(a)},null,8,["boardData","groupsData","teamData","tilesData"])):tt("",!0),!O(f).public&&(O(f).ownerID==O(s).data.uid||O(s).data.uid==e.value)?(Y(),ce("h1",ZB," Not authenticated ")):tt("",!0),((A=(I=O(f))==null?void 0:I.settings)==null?void 0:A.mode)=="teams"||_.value?(Y(),ce("aside",e$,[re("div",t$,[_.value?(Y(),ce("button",{key:0,class:"btn close",onClick:b[0]||(b[0]=()=>{_.value=!_.value,m.value=""})}," ╳ ")):tt("",!0)]),((S=(x=O(f))==null?void 0:x.settings)==null?void 0:S.mode)=="teams"?(Y(),ce(Ue,{key:0},[O(d)?(Y(),ce("p",n$,[mt(E,{class:"icon",icon:["fas",O(d).icon]},null,8,["icon"]),pt(" "+nt(O(d).name),1)])):tt("",!0),O(d)?tt("",!0):(Y(),ce("form",{key:1,onSubmit:fo(l,["prevent"])},[pt(" team code: "),co(re("input",{type:"text",name:"teamId","onUpdate:modelValue":b[1]||(b[1]=U=>c.value=U)},null,512),[[ho,c.value]])],40,i$))],64)):tt("",!0),O(n).selectedTile!=""?(Y(),fn(QB,{key:1})):tt("",!0)])):tt("",!0)]),s$],64)}}},Z0=Pn(r$,[["__scopeId","data-v-aa4fb0f6"]]);const o$=t=>(Rc("data-v-392bbe03"),t=t(),Dc(),t),a$=["for"],c$=o$(()=>re("br",null,null,-1)),l$=["id","checked","onClick"],u$={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=Rr(Wi),i=Ie(()=>e.tileData),s=({tile:r,group:o})=>{if(Object.hasOwn(o.collected,r.id)){let a={...o.collected};delete a[r.id],ra(_n(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),ra(_n(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points-r.points})}else{let a={...o.collected};a[r.id]=new Date,ra(_n(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),ra(_n(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points+r.points}),o.verify.includes(r.id)&&ra(_n(n,"Boards",e.boardUUID,"Groups",o.id),{verify:o.verify.filter(c=>c!=r.id)})}};return(r,o)=>e.tileData?(Y(),ce("div",{key:e.tileData.id},[re("h2",null,"{ "+nt(e.tileData.id.split("")[0])+" , "+nt(e.tileData.id.split("")[1])+" }",1),re("ul",null,[(Y(!0),ce(Ue,null,or(e.groupsData,a=>(Y(),ce("li",{key:a.id+O(i).id,class:gs({checkThis:a.verify.includes(O(i).id)})},[re("label",{for:a.id+O(i).id},[pt(nt(a.name)+" : "+nt(a.verify.includes(O(i).id)),1),c$,pt(" collected: "),(Y(),ce("input",{id:a.id+O(i).id,type:"checkbox",key:a.id+O(i).id,checked:a.collected.hasOwnProperty(e.tileData.id),onClick:fo(c=>s({tile:O(i),group:a}),["prevent"])},null,8,l$))],8,a$)],2))),128))])])):tt("",!0)}},h$=Pn(u$,[["__scopeId","data-v-392bbe03"]]);const f$={key:0},d$={__name:"ModeratorView",setup(t){const e=Xo(),n=cl(),i=Ie(()=>n.params.teamCode),s=Ie(()=>n.params.boardUUID),r=Rr(Wi),{data:o}=an(Vi(r,"Boards",s.value,"Groups")),a=an(_n(r,"Boards",s.value)),{data:c}=an(_n(r,`Boards/${s.value}/Groups/${i.value}/`)),l=Ie(()=>{var f;let h={};return o&&((f=o==null?void 0:o.value)==null||f.forEach(d=>{d.name!="moderator"&&(h[d.id]={id:d.id,name:d.name,member:d.members,icon:d.icon,color:d.color,points:d.points,flagEnd:d.flagEnd,collected:d.collected,verify:d.verify})})),h||{}}),{data:u}=an(Vi(r,`Boards/${s.value}/Tiles`));return(h,f)=>(Y(),ce("section",null,[O(c)&&O(c).name=="moderator"?(Y(),fn(UC,{key:0,boardData:O(a),groupsData:O(l),teamData:O(c),tilesData:O(u)},null,8,["boardData","groupsData","teamData","tilesData"])):tt("",!0),re("aside",null,[O(c)?(Y(),ce("p",f$,nt(O(c).name),1)):tt("",!0),(Y(),fn(h$,{tileData:O(e).selectedTile,key:O(e).selectedTile.id,boardUUID:O(s),groupsData:O(l),boardData:O(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])]))}},p$=Pn(d$,[["__scopeId","data-v-4f4abe5e"]]);const g$=["onSubmit"],m$=["disabled"],_$={__name:"HomeView",setup(t){const e=cl(),n=al(),i=rt(""),s=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(r,o)=>(Y(),ce(Ue,null,[re("form",{onSubmit:fo(s,["prevent"])},[pt(" Enter your bingo key: "),co(re("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[ho,i.value]]),re("button",{class:"btn",disabled:i.value==""},"Open Board",8,m$)],40,g$),(Y(),fn(O(sC),{key:O(e).fullPath}))],64))}},y$=Pn(_$,[["__scopeId","data-v-f046e3a4"]]),iy=em("boardCreate",()=>{const t=rt({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const v$={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t,n=iy(),i=()=>{n.selectedTile={coordinates:e.tile.coordinates}};return(s,r)=>(Y(),ce("div",{class:"tile",onClick:r[0]||(r[0]=o=>i())},nt(e.tile.coordinates),1))}},b$=Pn(v$,[["__scopeId","data-v-1563bd64"]]),w$={__name:"editTileSidePanel",setup(t){const e=iy();return(n,i)=>(Y(),ce("section",null,nt(O(e)),1))}};const BC=t=>(Rc("data-v-7a872bdd"),t=t(),Dc(),t),E$=["onKeydown"],I$=BC(()=>re("br",null,null,-1)),T$=BC(()=>re("br",null,null,-1)),S$={key:0,class:"bingo-board"},x$=["onClick"],C$={key:1},k$={__name:"newBoard",setup(t){uE(h=>({b297529c:r.value.settings.width,"160785bb":r.value.settings.height}));const e=Rr(Wi),n=iy(),i=fl(),s=al(),r=rt({name:"<name of bingo board>",settings:{width:8,height:11,public:!1}}),o=i.user,a=rt(null),c=h=>{h.target.blur(),r.value.name=a.value.innerText.trim()},l=Ie(()=>{let h={};for(let f=0;f<=parseInt(r.value.settings.width)*r.value.settings.height-1;f++){let d=(f%parseInt(r.value.settings.width)+1)*100+(Math.floor(f/parseInt(r.value.settings.width))+1);h[d]={coordinates:d}}return h}),u=async()=>{const h=_n(Vi(e,"Boards"));await ZU(h,{...r.value,ownerID:o.data.uid}).then(()=>{s.push({name:"editBoard",params:{boardUUID:h.id}})})};return(h,f)=>(Y(),ce(Ue,null,[O(o).loggedIn&&O(o).data.uid!=0?(Y(),ce(Ue,{key:0},[re("h1",{class:"board-title",ref_key:"titleElement",ref:a,contenteditable:"",spellcheck:"false",onKeydown:qR(c,["enter"]),onBlur:c},nt(r.value.name),41,E$),re("div",null,[pt(" name: width: "),co(re("input",{min:"2",max:"9",name:"width",type:"range","onUpdate:modelValue":f[0]||(f[0]=d=>r.value.settings.width=d)},null,512),[[ho,r.value.settings.width]]),pt(nt(r.value.settings.width),1),I$,pt(" height: "),co(re("input",{min:"2",max:"9",name:"height",type:"range","onUpdate:modelValue":f[1]||(f[1]=d=>r.value.settings.height=d)},null,512),[[ho,r.value.settings.height]]),pt(nt(r.value.settings.height),1),T$,pt(" total tiles: "+nt(r.value.settings.width*r.value.settings.height),1)]),O(l)?(Y(),ce("main",S$,[(Y(!0),ce(Ue,null,or(O(l),d=>(Y(),fn(b$,{key:d.coordinates,tile:d},null,8,["tile"]))),128))])):tt("",!0),re("aside",null,[pt(nt(O(n).selectedTile.hasOwnProperty("coordinates"))+" ",1),O(n).selectedTile.hasOwnProperty("coordinates")?(Y(),fn(w$,{key:0})):tt("",!0)]),re("button",{class:"btn",onClick:fo(u,["prevent"])},"Save Settings",8,x$)],64)):tt("",!0),O(o).loggedIn?tt("",!0):(Y(),ce("h1",C$,"not authenticated"))],64))}},A$=Pn(k$,[["__scopeId","data-v-7a872bdd"]]);const R$=t=>(Rc("data-v-f6e7aedf"),t=t(),Dc(),t),D$=R$(()=>re("h1",null,"boardList:",-1)),O$=["onClick"],P$={key:1},M$={__name:"BoardList",setup(t){const e=rt("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),i=fl().user,s=Rr(Wi),r=Vi(s,"Boards"),o=Ie(()=>{let h="==";return i.data.uid==e.value&&(h="!="),h}),a=Ie(()=>{let h="==";return i.data.uid==e.value?h="0":h=i.data.uid,h}),c=an(qU(r,KU("ownerID",o.value,a.value))),l=al(),u=h=>{l.push({name:"overview",params:{boardUUID:h}})};return(h,f)=>{const d=Oc("router-link");return Y(),ce(Ue,null,[O(i).loggedIn?(Y(),ce(Ue,{key:0},[D$,re("ul",null,[(Y(!0),ce(Ue,null,or(O(c),p=>(Y(),ce("li",{key:p,onClick:g=>u(p.id)},nt(p.name),9,O$))),128)),mt(d,{to:{name:"newBoard"},class:"btn"},{default:zh(()=>[pt("+ create board")]),_:1})])],64)):tt("",!0),O(i).loggedIn?tt("",!0):(Y(),ce("h1",P$,"Not Authenticated"))],64)}}},N$=Pn(M$,[["__scopeId","data-v-f6e7aedf"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function dl(t){return t+.5|0}const ss=(t,e,n)=>Math.max(Math.min(t,n),e);function wa(t){return ss(dl(t*2.55),0,255)}function ps(t){return ss(dl(t*255),0,255)}function Ii(t){return ss(dl(t/2.55)/100,0,1)}function ew(t){return ss(dl(t*100),0,100)}const Sn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wg=[..."0123456789ABCDEF"],L$=t=>wg[t&15],F$=t=>wg[(t&240)>>4]+wg[t&15],Hl=t=>(t&240)>>4===(t&15),U$=t=>Hl(t.r)&&Hl(t.g)&&Hl(t.b)&&Hl(t.a);function V$(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Sn[t[1]]*17,g:255&Sn[t[2]]*17,b:255&Sn[t[3]]*17,a:e===5?Sn[t[4]]*17:255}:(e===7||e===9)&&(n={r:Sn[t[1]]<<4|Sn[t[2]],g:Sn[t[3]]<<4|Sn[t[4]],b:Sn[t[5]]<<4|Sn[t[6]],a:e===9?Sn[t[7]]<<4|Sn[t[8]]:255})),n}const B$=(t,e)=>t<255?e(t):"";function $$(t){var e=U$(t)?L$:F$;return t?"#"+e(t.r)+e(t.g)+e(t.b)+B$(t.a,e):void 0}const z$=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function $C(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function j$(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function H$(t,e,n){const i=$C(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function W$(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function sy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let c,l,u;return r!==o&&(u=r-o,l=a>.5?u/(2-r-o):u/(r+o),c=W$(n,i,s,u,r),c=c*60+.5),[c|0,l||0,a]}function ry(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ps)}function oy(t,e,n){return ry($C,t,e,n)}function q$(t,e,n){return ry(H$,t,e,n)}function K$(t,e,n){return ry(j$,t,e,n)}function zC(t){return(t%360+360)%360}function G$(t){const e=z$.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?wa(+e[5]):ps(+e[5]));const s=zC(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=q$(s,r,o):e[1]==="hsv"?i=K$(s,r,o):i=oy(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function Y$(t,e){var n=sy(t);n[0]=zC(n[0]+e),n=oy(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Q$(t){if(!t)return;const e=sy(t),n=e[0],i=ew(e[1]),s=ew(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Ii(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const tw={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},nw={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function X$(){const t={},e=Object.keys(nw),n=Object.keys(tw);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,tw[r]);r=parseInt(nw[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Wl;function J$(t){Wl||(Wl=X$(),Wl.transparent=[0,0,0,0]);const e=Wl[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Z$=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function e8(t){const e=Z$.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?wa(o):ss(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?wa(i):ss(i,0,255)),s=255&(e[4]?wa(s):ss(s,0,255)),r=255&(e[6]?wa(r):ss(r,0,255)),{r:i,g:s,b:r,a:n}}}function t8(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ii(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Fd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Fr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function n8(t,e,n){const i=Fr(Ii(t.r)),s=Fr(Ii(t.g)),r=Fr(Ii(t.b));return{r:ps(Fd(i+n*(Fr(Ii(e.r))-i))),g:ps(Fd(s+n*(Fr(Ii(e.g))-s))),b:ps(Fd(r+n*(Fr(Ii(e.b))-r))),a:t.a+n*(e.a-t.a)}}function ql(t,e,n){if(t){let i=sy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=oy(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function jC(t,e){return t&&Object.assign(e||{},t)}function iw(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ps(t[3]))):(e=jC(t,{r:0,g:0,b:0,a:1}),e.a=ps(e.a)),e}function i8(t){return t.charAt(0)==="r"?e8(t):G$(t)}class Sc{constructor(e){if(e instanceof Sc)return e;const n=typeof e;let i;n==="object"?i=iw(e):n==="string"&&(i=V$(e)||J$(e)||i8(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=jC(this._rgb);return e&&(e.a=Ii(e.a)),e}set rgb(e){this._rgb=iw(e)}rgbString(){return this._valid?t8(this._rgb):void 0}hexString(){return this._valid?$$(this._rgb):void 0}hslString(){return this._valid?Q$(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=n8(this._rgb,e._rgb,n)),this}clone(){return new Sc(this.rgb)}alpha(e){return this._rgb.a=ps(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=dl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ql(this._rgb,2,e),this}darken(e){return ql(this._rgb,2,-e),this}saturate(e){return ql(this._rgb,1,e),this}desaturate(e){return ql(this._rgb,1,-e),this}rotate(e){return Y$(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function vi(){}const s8=(()=>{let t=0;return()=>t++})();function qe(t){return t===null||typeof t>"u"}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function De(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function kt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function gn(t,e){return kt(t)?t:e}function Ee(t,e){return typeof t>"u"?e:t}const r8=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Be(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Ne(t,e,n,i){let s,r,o;if(it(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(De(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function wh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Eh(t){if(it(t))return t.map(Eh);if(De(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Eh(t[n[s]]);return e}return t}function HC(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function o8(t,e,n,i){if(!HC(t))return;const s=e[t],r=n[t];De(s)&&De(r)?xc(s,r,i):e[t]=Eh(r)}function xc(t,e,n){const i=it(e)?e:[e],s=i.length;if(!De(t))return t;n=n||{};const r=n.merger||o8;let o;for(let a=0;a<s;++a){if(o=i[a],!De(o))continue;const c=Object.keys(o);for(let l=0,u=c.length;l<u;++l)r(c[l],t,o,n)}return t}function ja(t,e){return xc(t,e,{merger:a8})}function a8(t,e,n){if(!HC(t))return;const i=e[t],s=n[t];De(i)&&De(s)?ja(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Eh(s))}const sw={"":t=>t,x:t=>t.x,y:t=>t.y};function c8(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function l8(t){const e=c8(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Ih(t,e){return(sw[e]||(sw[e]=l8(e)))(t)}function ay(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Th=t=>typeof t<"u",Ss=t=>typeof t=="function",rw=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function u8(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const It=Math.PI,Rn=2*It,h8=Rn+It,Sh=Number.POSITIVE_INFINITY,f8=It/180,un=It/2,Ps=It/4,ow=It*2/3,rs=Math.log10,Ao=Math.sign;function Ha(t,e,n){return Math.abs(t-e)<n}function aw(t){const e=Math.round(t);t=Ha(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(rs(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function d8(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Cc(t){return!isNaN(parseFloat(t))&&isFinite(t)}function p8(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function WC(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function os(t){return t*(It/180)}function cy(t){return t*(180/It)}function cw(t){if(!kt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function g8(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*It&&(r+=Rn),{angle:r,distance:s}}function Eg(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function m8(t,e){return(t-e+h8)%Rn-It}function Nn(t){return(t%Rn+Rn)%Rn}function qC(t,e,n,i){const s=Nn(t),r=Nn(e),o=Nn(n),a=Nn(r-s),c=Nn(o-s),l=Nn(s-r),u=Nn(s-o);return s===r||s===o||i&&r===o||a>c&&l<u}function Cn(t,e,n){return Math.max(e,Math.min(n,t))}function _8(t){return Cn(t,-32768,32767)}function Ea(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function ly(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const Js=(t,e,n,i)=>ly(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),y8=(t,e,n)=>ly(t,n,i=>t[i][e]>=n);function v8(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const KC=["push","pop","shift","splice","unshift"];function b8(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),KC.forEach(n=>{const i="_onData"+ay(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function lw(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(KC.forEach(r=>{delete t[r]}),delete t._chartjs)}function w8(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const GC=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function YC(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,GC.call(window,()=>{i=!1,t.apply(e,n)}))}}function E8(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const uy=t=>t==="start"?"left":t==="end"?"right":"center",Ut=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,I8=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function T8(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=Cn(Math.min(Js(a,o.axis,l).lo,n?i:Js(e,c,o.getPixelForValue(l)).lo),0,i-1)),f?r=Cn(Math.max(Js(a,o.axis,u,!0).hi+1,n?0:Js(e,c,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function S8(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const Kl=t=>t===0||t===1,uw=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Rn/n)),hw=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Rn/n)+1,Wa={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*un)+1,easeOutSine:t=>Math.sin(t*un),easeInOutSine:t=>-.5*(Math.cos(It*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Kl(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Kl(t)?t:uw(t,.075,.3),easeOutElastic:t=>Kl(t)?t:hw(t,.075,.3),easeInOutElastic(t){return Kl(t)?t:t<.5?.5*uw(t*2,.1125,.45):.5+.5*hw(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Wa.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Wa.easeInBounce(t*2)*.5:Wa.easeOutBounce(t*2-1)*.5+.5};function hy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function fw(t){return hy(t)?t:new Sc(t)}function Ud(t){return hy(t)?t:new Sc(t).saturate(.5).darken(.1).hexString()}const x8=["x","y","borderWidth","radius","tension"],C8=["color","borderColor","backgroundColor"];function k8(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:C8},numbers:{type:"number",properties:x8}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function A8(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const dw=new Map;function R8(t,e){e=e||{};const n=t+JSON.stringify(e);let i=dw.get(n);return i||(i=new Intl.NumberFormat(t,e),dw.set(n,i)),i}function fy(t,e,n){return R8(e,n).format(t)}const QC={values(t){return it(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const l=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=D8(t,n)}const o=rs(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),fy(t,i,c)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(rs(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?QC.numeric.call(this,t,e,n):""}};function D8(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Wf={formatters:QC};function O8(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Wf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const vr=Object.create(null),Ig=Object.create(null);function qa(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Vd(t,e,n){return typeof e=="string"?xc(qa(t,e),n):xc(qa(t,""),e)}class P8{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Ud(s.backgroundColor),this.hoverBorderColor=(i,s)=>Ud(s.borderColor),this.hoverColor=(i,s)=>Ud(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Vd(this,e,n)}get(e){return qa(this,e)}describe(e,n){return Vd(Ig,e,n)}override(e,n){return Vd(vr,e,n)}route(e,n,i,s){const r=qa(this,e),o=qa(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[a],l=o[s];return De(c)?Object.assign({},l,c):Ee(c,l)},set(c){this[a]=c}}})}apply(e){e.forEach(n=>n(this))}}var at=new P8({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[k8,A8,O8]);function M8(t){return!t||qe(t.size)||qe(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function xh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function N8(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let c,l,u,h,f;for(c=0;c<a;c++)if(h=n[c],h!=null&&!it(h))o=xh(t,s,r,o,h);else if(it(h))for(l=0,u=h.length;l<u;l++)f=h[l],f!=null&&!it(f)&&(o=xh(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(c=0;c<d;c++)delete s[r[c]];r.splice(0,d)}return o}function Ms(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function pw(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Tg(t,e,n,i){XC(t,e,n,i,null)}function XC(t,e,n,i,s){let r,o,a,c,l,u,h,f;const d=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*f8;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,g,0,0,Rn):t.arc(n,i,g,0,Rn),t.closePath();break;case"triangle":u=s?s/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=ow,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=ow,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":l=g*.516,c=g-l,o=Math.cos(m+Ps)*c,h=Math.cos(m+Ps)*(s?s/2-l:c),a=Math.sin(m+Ps)*c,f=Math.sin(m+Ps)*(s?s/2-l:c),t.arc(n-h,i-a,l,m-It,m-un),t.arc(n+f,i-o,l,m-un,m),t.arc(n+h,i+a,l,m,m+un),t.arc(n-f,i+o,l,m+un,m+It),t.closePath();break;case"rect":if(!p){c=Math.SQRT1_2*g,u=s?s/2:c,t.rect(n-u,i-c,2*u,2*c);break}m+=Ps;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":m+=Ps;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),m+=Ps,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Ai(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function dy(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function py(t){t.restore()}function L8(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function F8(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function U8(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),qe(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function V8(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,c=n-r.actualBoundingBoxAscent,l=n+r.actualBoundingBoxDescent,u=s.strikethrough?(c+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function B8(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function br(t,e,n,i,s,r={}){const o=it(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(t.save(),t.font=s.string,U8(t,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&B8(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),qe(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(l,n,i,r.maxWidth)),t.fillText(l,n,i,r.maxWidth),V8(t,n,i,l,r),i+=Number(s.lineHeight);t.restore()}function Ch(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-un,It,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,It,un,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,un,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-un,!0),t.lineTo(n+o.topLeft,i)}const $8=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,z8=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function j8(t,e){const n=(""+t).match($8);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const H8=t=>+t||0;function JC(t,e){const n={},i=De(e),s=i?Object.keys(e):e,r=De(t)?i?o=>Ee(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=H8(r(o));return n}function W8(t){return JC(t,{top:"y",right:"x",bottom:"y",left:"x"})}function so(t){return JC(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Xt(t){const e=W8(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function yt(t,e){t=t||{},e=e||at.font;let n=Ee(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Ee(t.style,e.style);i&&!(""+i).match(z8)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Ee(t.family,e.family),lineHeight:j8(Ee(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Ee(t.weight,e.weight),string:""};return s.string=M8(s),s}function Gl(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&it(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function q8(t,e,n){const{min:i,max:s}=t,r=r8(e,(s-i)/2),o=(a,c)=>n&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Rs(t,e){return Object.assign(Object.create(t),e)}function gy(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=nk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>gy([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete t[0][c],!0},get(a,c){return ek(a,c,()=>ez(c,e,t,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,c){return mw(a).includes(c)},ownKeys(a){return mw(a)},set(a,c,l){const u=a._storage||(a._storage=s());return a[c]=u[c]=l,delete a._keys,!0}})}function Ro(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:ZC(t,i),setContext:r=>Ro(t,r,n,i),override:r=>Ro(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return ek(r,o,()=>G8(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function ZC(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Ss(n)?n:()=>n,isIndexable:Ss(i)?i:()=>i}}const K8=(t,e)=>t?t+ay(e):e,my=(t,e)=>De(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function ek(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function G8(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Ss(a)&&o.isScriptable(e)&&(a=Y8(e,a,t,n)),it(a)&&a.length&&(a=Q8(e,a,t,o.isIndexable)),my(e,a)&&(a=Ro(a,s,r&&r[e],o)),a}function Y8(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let c=e(r,o||i);return a.delete(t),my(t,c)&&(c=_y(s._scopes,s,t,c)),c}function Q8(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(De(e[0])){const c=e,l=s._scopes.filter(u=>u!==c);e=[];for(const u of c){const h=_y(l,s,t,u);e.push(Ro(h,r,o&&o[t],a))}}return e}function tk(t,e,n){return Ss(t)?t(e,n):t}const X8=(t,e)=>t===!0?e:typeof t=="string"?Ih(e,t):void 0;function J8(t,e,n,i,s){for(const r of e){const o=X8(n,r);if(o){t.add(o);const a=tk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function _y(t,e,n,i){const s=e._rootScopes,r=tk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let c=gw(a,o,n,r||n,i);return c===null||typeof r<"u"&&r!==n&&(c=gw(a,o,r,c,i),c===null)?!1:gy(Array.from(a),[""],s,r,()=>Z8(e,n,i))}function gw(t,e,n,i,s){for(;n;)n=J8(t,e,n,i,s);return n}function Z8(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return it(s)&&De(n)?n:s||{}}function ez(t,e,n,i){let s;for(const r of e)if(s=nk(K8(r,t),n),typeof s<"u")return my(t,s)?_y(n,i,t,s):s}function nk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function mw(t){let e=t._keys;return e||(e=t._keys=tz(t._scopes)),e}function tz(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const nz=Number.EPSILON||1e-14,Do=(t,e)=>e<t.length&&!t[e].skip&&t[e],ik=t=>t==="x"?"y":"x";function iz(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Eg(r,s),c=Eg(o,r);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function sz(t,e,n){const i=t.length;let s,r,o,a,c,l=Do(t,0);for(let u=0;u<i-1;++u)if(c=l,l=Do(t,u+1),!(!c||!l)){if(Ha(e[u],0,nz)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function rz(t,e,n="x"){const i=ik(n),s=t.length;let r,o,a,c=Do(t,0);for(let l=0;l<s;++l){if(o=a,a=c,c=Do(t,l+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[l]),c&&(r=(c[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[l])}}function oz(t,e="x"){const n=ik(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=Do(t,0);for(o=0;o<i;++o)if(a=c,c=l,l=Do(t,o+1),!!c){if(l){const u=l[e]-c[e];s[o]=u!==0?(l[n]-c[n])/u:0}r[o]=a?l?Ao(s[o-1])!==Ao(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}sz(t,s,r),rz(t,r,e)}function Yl(t,e,n){return Math.max(Math.min(t,n),e)}function az(t,e){let n,i,s,r,o,a=Ai(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Ai(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=Yl(s.cp1x,e.left,e.right),s.cp1y=Yl(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Yl(s.cp2x,e.left,e.right),s.cp2y=Yl(s.cp2y,e.top,e.bottom)))}function cz(t,e,n,i,s){let r,o,a,c;if(e.spanGaps&&(t=t.filter(l=>!l.skip)),e.cubicInterpolationMode==="monotone")oz(t,s);else{let l=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],c=iz(l,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}e.capBezierPoints&&az(t,n)}function sk(){return typeof window<"u"&&typeof document<"u"}function yy(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function kh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const qf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function lz(t,e){return qf(t).getPropertyValue(e)}const uz=["top","right","bottom","left"];function rr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=uz[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const hz=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function fz(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(hz(s,r,t.target))a=s,c=r;else{const l=e.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Bs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=qf(n),r=s.boxSizing==="border-box",o=rr(s,"padding"),a=rr(s,"border","width"),{x:c,y:l,box:u}=fz(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((c-h)/d*n.width/i),y:Math.round((l-f)/p*n.height/i)}}function dz(t,e,n){let i,s;if(e===void 0||n===void 0){const r=yy(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=qf(r),c=rr(a,"border","width"),l=rr(a,"padding");e=o.width-l.width-c.width,n=o.height-l.height-c.height,i=kh(a.maxWidth,r,"clientWidth"),s=kh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Sh,maxHeight:s||Sh}}const Ql=t=>Math.round(t*10)/10;function pz(t,e,n,i){const s=qf(t),r=rr(s,"margin"),o=kh(s.maxWidth,t,"clientWidth")||Sh,a=kh(s.maxHeight,t,"clientHeight")||Sh,c=dz(t,e,n);let{width:l,height:u}=c;if(s.boxSizing==="content-box"){const f=rr(s,"border","width"),d=rr(s,"padding");l-=d.width+f.width,u-=d.height+f.height}return l=Math.max(0,l-r.width),u=Math.max(0,i?l/i:u-r.height),l=Ql(Math.min(l,o,c.maxWidth)),u=Ql(Math.min(u,a,c.maxHeight)),l&&!u&&(u=Ql(l/2)),(e!==void 0||n!==void 0)&&i&&c.height&&u>c.height&&(u=c.height,l=Ql(Math.floor(u*i))),{width:l,height:u}}function _w(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const gz=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function yw(t,e){const n=lz(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function $s(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function mz(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function _z(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=$s(t,s,n),a=$s(s,r,n),c=$s(r,e,n),l=$s(o,a,n),u=$s(a,c,n);return $s(l,u,n)}const yz=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},vz=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function ro(t,e,n){return t?yz(e,n):vz()}function rk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function ok(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ak(t){return t==="angle"?{between:qC,compare:m8,normalize:Nn}:{between:Ea,compare:(e,n)=>e-n,normalize:e=>e}}function vw({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function bz(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=ak(i),c=e.length;let{start:l,end:u,loop:h}=t,f,d;if(h){for(l+=c,u+=c,f=0,d=c;f<d&&o(a(e[l%c][i]),s,r);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:h,style:t.style}}function wz(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:c,normalize:l}=ak(i),{start:u,end:h,loop:f,style:d}=bz(t,e,n),p=[];let g=!1,m=null,_,v,b;const E=()=>c(s,b,_)&&a(s,b)!==0,I=()=>a(r,_)===0||c(r,b,_),A=()=>g||E(),x=()=>!g||I();for(let S=u,U=u;S<=h;++S)v=e[S%o],!v.skip&&(_=l(v[i]),_!==b&&(g=c(_,s,r),m===null&&A()&&(m=a(_,s)===0?S:U),m!==null&&x()&&(p.push(vw({start:m,end:S,loop:f,count:o,style:d})),m=null),U=S,b=_));return m!==null&&p.push(vw({start:m,end:h,loop:f,count:o,style:d})),p}function Ez(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=wz(i[s],t.points,e);r.length&&n.push(...r)}return n}function Iz(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function Tz(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],c;for(c=e+1;c<=n;++c){const l=t[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:e%s,end:(c-1)%s,loop:i}),e=o=l.stop?c:null):(o=c,a.skip&&(e=c)),a=l}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function Sz(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=Iz(n,s,r,i);if(i===!0)return bw(t,[{start:o,end:a,loop:r}],n,e);const c=a<o?a+s:a,l=!!t._fullLoop&&o===0&&a===s-1;return bw(t,Tz(n,o,c,l),n,e)}function bw(t,e,n,i){return!i||!i.setContext||!n?e:xz(t,e,n,i)}function xz(t,e,n,i){const s=t._chart.getContext(),r=ww(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,c=n.length,l=[];let u=r,h=e[0].start,f=h;function d(p,g,m,_){const v=a?-1:1;if(p!==g){for(p+=c;n[p%c].skip;)p-=v;for(;n[g%c].skip;)g+=v;p%c!==g%c&&(l.push({start:p%c,end:g%c,loop:m,style:_}),u=_,h=g%c)}}for(const p of e){h=a?h:p.start;let g=n[h%c],m;for(f=h+1;f<=p.end;f++){const _=n[f%c];m=ww(i.setContext(Rs(s,{type:"segment",p0:g,p1:_,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Cz(m,u)&&d(h,f-1,p.loop,u),g=_,u=m}h<f-1&&d(h,f-1,p.loop,u)}return l}function ww(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Cz(t,e){if(!e)return!1;const n=[],i=function(s,r){return hy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class kz{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=GC.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var bi=new kz;const Ew="transparent",Az={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=fw(t||Ew),s=i.valid&&fw(e||Ew);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Rz{constructor(e,n,i,s){const r=n[i];s=Gl([e.to,s,r,e.from]);const o=Gl([e.from,r,s]);this._active=!0,this._fn=e.fn||Az[e.type||typeof o],this._easing=Wa[e.easing]||Wa.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=Gl([e.to,n,s,e.from]),this._from=Gl([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}c=n/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class ck{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!De(e))return;const n=Object.keys(at.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!De(r))return;const o={};for(const a of n)o[a]=r[a];(it(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=Oz(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&Dz(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[l]=u;continue}r[l]=h=new Rz(f,e,l,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return bi.add(this._chart,i),!0}}function Dz(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function Oz(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Iw(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function Pz(t,e,n){if(n===!1)return!1;const i=Iw(t,n),s=Iw(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Mz(t){let e,n,i,s;return De(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function lk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Tw(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,c,l;if(e!==null){for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===n){if(i.all)continue;break}l=t.values[c],kt(l)&&(r||e===0||Ao(e)===Ao(l))&&(e+=l)}return e}}function Nz(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Sw(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Lz(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Fz(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function Uz(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function xw(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Cw(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,u=Lz(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[c]:g,[l]:m}=p,_=p._stacks||(p._stacks={});f=_[l]=Uz(s,u,g),f[a]=m,f._top=xw(f,o,!0,i.type),f._bottom=xw(f,o,!1,i.type);const v=f._visualValues||(f._visualValues={});v[a]=m}}function Bd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Vz(t,e){return Rs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Bz(t,e,n){return Rs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function aa(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const $d=t=>t==="reset"||t==="none",kw=(t,e)=>e?t:Object.assign({},t),$z=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:lk(n,!0),values:null};class Ka{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Sw(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&aa(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=Ee(i.xAxisID,Bd(e,"x")),o=n.yAxisID=Ee(i.yAxisID,Bd(e,"y")),a=n.rAxisID=Ee(i.rAxisID,Bd(e,"r")),c=n.indexAxis,l=n.iAxisID=s(c,r,o,a),u=n.vAxisID=s(c,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(l),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&lw(this._data,this),e._stacked&&aa(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(De(n))this._data=Nz(n);else if(i!==n){if(i){lw(i,this);const s=this._cachedMeta;aa(s),s._parsed=[]}n&&Object.isExtensible(n)&&b8(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Sw(n.vScale,n),n.stack!==i.stack&&(s=!0,aa(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Cw(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=e===0&&n===s.length?!0:i._sorted,l=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{it(s[e])?f=this.parseArrayData(i,s,e,n):De(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||l&&h[a]<l[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],c&&(d()&&(c=!1),l=h);i._sorted=c}o&&Cw(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,c=o.axis,l=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(l[p],p),[c]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let c,l,u,h;for(c=0,l=s;c<l;++c)u=c+i,h=n[u],a[c]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],l[u]={x:r.parse(Ih(d,a),f),y:o.parse(Ih(d,c),f)};return l}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:lk(s,!0),values:n._stacks[e.axis]._visualValues};return Tw(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=Tw(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),c=$z(n,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=Fz(a);let f,d;function p(){d=s[f];const g=d[a.axis];return!kt(d[e.axis])||u>g||h<g}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(l,e,d,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(l,e,d,c);break}}return l}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],kt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Mz(Ee(this.options.clip,Pz(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,c),u=a;u<a+c;++u){const h=s[u];h.hidden||(h.active&&l?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=Bz(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=Vz(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],c=this.enableOptionSharing&&Th(i);if(a)return kw(a,c);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=l.getOptionScopes(this.getDataset(),u),d=Object.keys(at.elements[e]),p=()=>this.getContext(i,s,n),g=l.resolveNamedOptions(f,d,p,h);return g.$shared&&(g.$shared=c,r[o]=Object.freeze(kw(g,c))),g}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(f,this.getContext(e,i,n))}const l=new ck(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||$d(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){$d(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!$d(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const c=l=>{for(l.length+=n,a=l.length-1;a>=o;a--)l[a]=l[a-n]};for(c(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&aa(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ie(Ka,"defaults",{}),ie(Ka,"datasetElementType",null),ie(Ka,"dataElementType",null);class wu extends Ka{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:c}=T8(n,s,o);this._drawStart=a,this._drawCount=c,S8(n)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(e);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},e),this.updateElements(s,a,c,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:g}=this.options,m=Cc(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",v=n+i,b=e.length;let E=n>0&&this.getParsed(n-1);for(let I=0;I<b;++I){const A=e[I],x=_?A:{};if(I<n||I>=v){x.skip=!0;continue}const S=this.getParsed(I),U=qe(S[d]),Q=x[f]=o.getPixelForValue(S[f],I),te=x[d]=r||U?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,S,c):S[d],I);x.skip=isNaN(Q)||isNaN(te)||U,x.stop=I>0&&Math.abs(S[f]-E[f])>m,g&&(x.parsed=S,x.raw=l.data[I]),h&&(x.options=u||this.resolveDataElementOptions(I,A.active?"active":s)),_||this.updateElement(A,I,x,s),E=S}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ie(wu,"id","line"),ie(wu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ie(wu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Ns(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class vy{constructor(e){ie(this,"options");this.options=e||{}}static override(e){Object.assign(vy.prototype,e)}init(){}formats(){return Ns()}parse(){return Ns()}format(){return Ns()}add(){return Ns()}diff(){return Ns()}startOf(){return Ns()}endOf(){return Ns()}}var zz={_date:vy};function jz(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const c=a._reversePixels?y8:Js;if(i){if(s._sharedOptions){const l=r[0],u=typeof l.getRange=="function"&&l.getRange(e);if(u){const h=c(r,e,n-u),f=c(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return c(r,e,n)}return{lo:0,hi:r.length-1}}function pl(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,c=r.length;a<c;++a){const{index:l,data:u}=r[a],{lo:h,hi:f}=jz(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,l,d)}}}function Hz(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function zd(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||pl(t,n,e,function(a,c,l){!s&&!Ai(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function Wz(t,e,n,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=g8(o,{x:e.x,y:e.y});qC(h,l,u)&&s.push({element:o,datasetIndex:a,index:c})}return pl(t,n,e,r),s}function qz(t,e,n,i,s,r){let o=[];const a=Hz(n);let c=Number.POSITIVE_INFINITY;function l(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const m=a(e,p);m<c?(o=[{element:u,datasetIndex:h,index:f}],c=m):m===c&&o.push({element:u,datasetIndex:h,index:f})}return pl(t,n,e,l),o}function jd(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?Wz(t,e,n,s):qz(t,e,n,i,s,r)}function Aw(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return pl(t,n,e,(c,l,u)=>{c[o](e[n],s)&&(r.push({element:c,datasetIndex:l,index:u}),a=a||c.inRange(e.x,e.y,s))}),i&&!a?[]:r}var Kz={evaluateInteractionItems:pl,modes:{index(t,e,n,i){const s=Bs(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?zd(t,s,r,i,o):jd(t,s,r,!1,i,o),c=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(l=>{const u=a[0].index,h=l.data[u];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:u})}),c):[]},dataset(t,e,n,i){const s=Bs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?zd(t,s,r,i,o):jd(t,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=t.getDatasetMeta(c).data;a=[];for(let u=0;u<l.length;++u)a.push({element:l[u],datasetIndex:c,index:u})}return a},point(t,e,n,i){const s=Bs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return zd(t,s,r,i,o)},nearest(t,e,n,i){const s=Bs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return jd(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=Bs(e,t);return Aw(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=Bs(e,t);return Aw(t,s,"y",n.intersect,i)}}};const uk=["left","top","right","bottom"];function ca(t,e){return t.filter(n=>n.pos===e)}function Rw(t,e){return t.filter(n=>uk.indexOf(n.pos)===-1&&n.box.axis===e)}function la(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function Gz(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function Yz(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!uk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function Qz(t,e){const n=Yz(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:c}=a.box,l=n[a.stack],u=l&&a.stackWeight/l.weight;a.horizontal?(a.width=u?u*i:c&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:c&&e.availableHeight)}return n}function Xz(t){const e=Gz(t),n=la(e.filter(l=>l.box.fullSize),!0),i=la(ca(e,"left"),!0),s=la(ca(e,"right")),r=la(ca(e,"top"),!0),o=la(ca(e,"bottom")),a=Rw(e,"x"),c=Rw(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:ca(e,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Dw(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function hk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Jz(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!De(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&hk(o,r.getPadding());const a=Math.max(0,e.outerWidth-Dw(o,t,"left","right")),c=Math.max(0,e.outerHeight-Dw(o,t,"top","bottom")),l=a!==t.w,u=c!==t.h;return t.w=a,t.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function Zz(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function ej(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Ia(t,e,n,i){const s=[];let r,o,a,c,l,u;for(r=0,o=t.length,l=0;r<o;++r){a=t[r],c=a.box,c.update(a.width||e.w,a.height||e.h,ej(a.horizontal,e));const{same:h,other:f}=Jz(e,n,a,i);l|=h&&s.length,u=u||f,c.fullSize||s.push(a)}return l&&Ia(s,e,n,i)||u}function Xl(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function Ow(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const c=a.box,l=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/l.weight||1;if(a.horizontal){const h=e.w*u,f=l.size||c.height;Th(l.start)&&(o=l.start),c.fullSize?Xl(c,s.left,o,n.outerWidth-s.right-s.left,f):Xl(c,e.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=e.h*u,f=l.size||c.width;Th(l.start)&&(r=l.start),c.fullSize?Xl(c,r,s.top,f,n.outerHeight-s.bottom-s.top):Xl(c,r,e.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}e.x=r,e.y=o}var kn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=Xt(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=Xz(t.boxes),c=a.vertical,l=a.horizontal;Ne(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=c.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);hk(f,Xt(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=Qz(c.concat(l),h);Ia(a.fullSize,d,h,p),Ia(c,d,h,p),Ia(l,d,h,p)&&Ia(c,d,h,p),Zz(d),Ow(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,Ow(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},Ne(a.chartArea,g=>{const m=g.box;Object.assign(m,t.chartArea),m.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class fk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class tj extends fk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Eu="$chartjs",nj={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Pw=t=>t===null||t==="";function ij(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Eu]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Pw(s)){const r=yw(t,"width");r!==void 0&&(t.width=r)}if(Pw(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=yw(t,"height");r!==void 0&&(t.height=r)}return t}const dk=gz?{passive:!0}:!1;function sj(t,e,n){t.addEventListener(e,n,dk)}function rj(t,e,n){t.canvas.removeEventListener(e,n,dk)}function oj(t,e){const n=nj[t.type]||t.type,{x:i,y:s}=Bs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Ah(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function aj(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ah(a.addedNodes,i),o=o&&!Ah(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function cj(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ah(a.removedNodes,i),o=o&&!Ah(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const kc=new Map;let Mw=0;function pk(){const t=window.devicePixelRatio;t!==Mw&&(Mw=t,kc.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function lj(t,e){kc.size||window.addEventListener("resize",pk),kc.set(t,e)}function uj(t){kc.delete(t),kc.size||window.removeEventListener("resize",pk)}function hj(t,e,n){const i=t.canvas,s=i&&yy(i);if(!s)return;const r=YC((a,c)=>{const l=s.clientWidth;n(a,c),l<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,u=c.contentRect.height;l===0&&u===0||r(l,u)});return o.observe(s),lj(t,r),o}function Hd(t,e,n){n&&n.disconnect(),e==="resize"&&uj(t)}function fj(t,e,n){const i=t.canvas,s=YC(r=>{t.ctx!==null&&n(oj(r,t))},t);return sj(i,e,s),s}class dj extends fk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(ij(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Eu])return!1;const i=n[Eu].initial;["height","width"].forEach(r=>{const o=i[r];qe(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Eu],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:aj,detach:cj,resize:hj}[n]||fj;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Hd,detach:Hd,resize:Hd}[n]||rj)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return pz(e,n,i,s)}isAttached(e){const n=yy(e);return!!(n&&n.isConnected)}}function pj(t){return!sk()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?tj:dj}var su;let Dr=(su=class{constructor(){ie(this,"x");ie(this,"y");ie(this,"active",!1);ie(this,"options");ie(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Cc(this.x)&&Cc(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ie(su,"defaults",{}),ie(su,"defaultRoutes"),su);function gj(t,e){const n=t.options.ticks,i=mj(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?yj(e):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return vj(e,l,r,o/s),l;const u=_j(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((c-a)/(o-1)):null;for(Jl(e,l,u,qe(d)?0:a-d,a),h=0,f=o-1;h<f;h++)Jl(e,l,u,r[h],r[h+1]);return Jl(e,l,u,c,qe(d)?e.length:c+d),l}return Jl(e,l,u),l}function mj(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function _j(t,e,n){const i=bj(t),s=e.length/n;if(!i)return Math.max(s,1);const r=d8(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function yj(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function vj(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function Jl(t,e,n,i,s){const r=Ee(i,0),o=Math.min(Ee(s,t.length),t.length);let a=0,c,l,u;for(n=Math.ceil(n),s&&(c=s-i,n=c/Math.floor(c/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(l=Math.max(r,0);l<o;l++)l===u&&(e.push(t[l]),a++,u=Math.round(r+a*n))}function bj(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const wj=t=>t==="left"?"right":t==="right"?"left":t,Nw=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,Lw=(t,e)=>Math.min(e||t,t);function Fw(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Ej(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let c=t.getPixelForTick(s),l;if(!(n&&(i===1?l=Math.max(c-r,o-c):e===0?l=(t.getPixelForTick(1)-c)/2:l=(c-t.getPixelForTick(s-1))/2,c+=s<e?l:-l,c<r-a||c>o+a)))return c}function Ij(t,e){Ne(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function ua(t){return t.drawTicks?t.tickLength:0}function Uw(t,e){if(!t.display)return 0;const n=yt(t.font,e),i=Xt(t.padding);return(it(t.text)?t.text.length:1)*n.lineHeight+i.height}function Tj(t,e){return Rs(t,{scale:e,type:"scale"})}function Sj(t,e,n){return Rs(t,{tick:n,index:e,type:"tick"})}function xj(t,e,n){let i=uy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=wj(i)),i}function Cj(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:c}=t,{chartArea:l,scales:u}=c;let h=0,f,d,p;const g=o-s,m=a-r;if(t.isHorizontal()){if(d=Ut(i,r,a),De(n)){const _=Object.keys(n)[0],v=n[_];p=u[_].getPixelForValue(v)+g-e}else n==="center"?p=(l.bottom+l.top)/2+g-e:p=Nw(t,n,e);f=a-r}else{if(De(n)){const _=Object.keys(n)[0],v=n[_];d=u[_].getPixelForValue(v)-m+e}else n==="center"?d=(l.left+l.right)/2-m+e:d=Nw(t,n,e);p=Ut(i,o,s),h=n==="left"?-un:un}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class Or extends Dr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=gn(e,Number.POSITIVE_INFINITY),n=gn(n,Number.NEGATIVE_INFINITY),i=gn(i,Number.POSITIVE_INFINITY),s=gn(s,Number.NEGATIVE_INFINITY),{min:gn(e,i),max:gn(n,s),minDefined:kt(e),maxDefined:kt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:gn(n,gn(i,n)),max:gn(i,gn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Be(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=q8(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?Fw(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=gj(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Be(this.options.afterUpdate,[this])}beforeSetDimensions(){Be(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Be(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Be(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Be(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Be(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Be(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Be(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=Lw(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=Cn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),c=this.maxHeight-ua(e.grid)-n.padding-Uw(e.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=cy(Math.min(Math.asin(Cn((u.highest.height+6)/a,-1,1)),Math.asin(Cn(c/l,-1,1))-Math.asin(Cn(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Be(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Be(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Uw(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=ua(r)+c):(e.height=this.maxHeight,e.width=ua(r)+c),i.display&&this.ticks.length){const{first:l,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=os(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:g*h.width+m*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(l,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;c?l?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Be(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)qe(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=Fw(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(n/Lw(n,i));let l=0,u=0,h,f,d,p,g,m,_,v,b,E,I;for(h=0;h<n;h+=c){if(p=e[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},v=g.lineHeight,b=E=0,!qe(p)&&!it(p))b=xh(s,_.data,_.gc,b,p),E=v;else if(it(p))for(f=0,d=p.length;f<d;++f)I=p[f],!qe(I)&&!it(I)&&(b=xh(s,_.data,_.gc,b,I),E+=v);o.push(b),a.push(E),l=Math.max(b,l),u=Math.max(E,u)}Ij(r,n);const A=o.indexOf(l),x=a.indexOf(u),S=U=>({width:o[U]||0,height:a[U]||0});return{first:S(0),last:S(n-1),widest:S(A),highest:S(x),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return _8(this._alignToPixels?Ms(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=Sj(this.getContext(),e,i))}return this.$context||(this.$context=Tj(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=os(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=ua(r),d=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(me){return Ms(i,me,g)};let v,b,E,I,A,x,S,U,Q,te,ue,Ze;if(o==="top")v=_(this.bottom),x=this.bottom-f,U=v-m,te=_(e.top)+m,Ze=e.bottom;else if(o==="bottom")v=_(this.top),te=e.top,Ze=_(e.bottom)-m,x=v+m,U=this.top+f;else if(o==="left")v=_(this.right),A=this.right-f,S=v-m,Q=_(e.left)+m,ue=e.right;else if(o==="right")v=_(this.left),Q=e.left,ue=_(e.right)-m,A=v+m,S=this.left+f;else if(n==="x"){if(o==="center")v=_((e.top+e.bottom)/2+.5);else if(De(o)){const me=Object.keys(o)[0],ge=o[me];v=_(this.chart.scales[me].getPixelForValue(ge))}te=e.top,Ze=e.bottom,x=v+m,U=x+f}else if(n==="y"){if(o==="center")v=_((e.left+e.right)/2);else if(De(o)){const me=Object.keys(o)[0],ge=o[me];v=_(this.chart.scales[me].getPixelForValue(ge))}A=v-m,S=A-f,Q=e.left,ue=e.right}const Qe=Ee(s.ticks.maxTicksLimit,h),pe=Math.max(1,Math.ceil(h/Qe));for(b=0;b<h;b+=pe){const me=this.getContext(b),ge=r.setContext(me),Ce=a.setContext(me),Nt=ge.lineWidth,tn=ge.color,Lt=Ce.dash||[],lt=Ce.dashOffset,Tn=ge.tickWidth,Yn=ge.tickColor,k=ge.tickBorderDash||[],B=ge.tickBorderDashOffset;E=Ej(this,b,c),E!==void 0&&(I=Ms(i,E,Nt),l?A=S=Q=ue=I:x=U=te=Ze=I,d.push({tx1:A,ty1:x,tx2:S,ty2:U,x1:Q,y1:te,x2:ue,y2:Ze,width:Nt,color:tn,borderDash:Lt,borderDashOffset:lt,tickWidth:Tn,tickColor:Yn,tickBorderDash:k,tickBorderDashOffset:B}))}return this._ticksLength=h,this._borderValue=v,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=r,f=ua(i.grid),d=f+u,p=h?-u:d,g=-os(this.labelRotation),m=[];let _,v,b,E,I,A,x,S,U,Q,te,ue,Ze="middle";if(s==="top")A=this.bottom-p,x=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+p,x=this._getXAxisLabelAlignment();else if(s==="left"){const pe=this._getYAxisLabelAlignment(f);x=pe.textAlign,I=pe.x}else if(s==="right"){const pe=this._getYAxisLabelAlignment(f);x=pe.textAlign,I=pe.x}else if(n==="x"){if(s==="center")A=(e.top+e.bottom)/2+d;else if(De(s)){const pe=Object.keys(s)[0],me=s[pe];A=this.chart.scales[pe].getPixelForValue(me)+d}x=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")I=(e.left+e.right)/2-d;else if(De(s)){const pe=Object.keys(s)[0],me=s[pe];I=this.chart.scales[pe].getPixelForValue(me)}x=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(c==="start"?Ze="top":c==="end"&&(Ze="bottom"));const Qe=this._getLabelSizes();for(_=0,v=a.length;_<v;++_){b=a[_],E=b.label;const pe=r.setContext(this.getContext(_));S=this.getPixelForTick(_)+r.labelOffset,U=this._resolveTickFontOptions(_),Q=U.lineHeight,te=it(E)?E.length:1;const me=te/2,ge=pe.color,Ce=pe.textStrokeColor,Nt=pe.textStrokeWidth;let tn=x;o?(I=S,x==="inner"&&(_===v-1?tn=this.options.reverse?"left":"right":_===0?tn=this.options.reverse?"right":"left":tn="center"),s==="top"?l==="near"||g!==0?ue=-te*Q+Q/2:l==="center"?ue=-Qe.highest.height/2-me*Q+Q:ue=-Qe.highest.height+Q/2:l==="near"||g!==0?ue=Q/2:l==="center"?ue=Qe.highest.height/2-me*Q:ue=Qe.highest.height-te*Q,h&&(ue*=-1),g!==0&&!pe.showLabelBackdrop&&(I+=Q/2*Math.sin(g))):(A=S,ue=(1-te)*Q/2);let Lt;if(pe.showLabelBackdrop){const lt=Xt(pe.backdropPadding),Tn=Qe.heights[_],Yn=Qe.widths[_];let k=ue-lt.top,B=0-lt.left;switch(Ze){case"middle":k-=Tn/2;break;case"bottom":k-=Tn;break}switch(x){case"center":B-=Yn/2;break;case"right":B-=Yn;break}Lt={left:B,top:k,width:Yn+lt.width,height:Tn+lt.height,color:pe.backdropColor}}m.push({label:E,font:U,textOffset:ue,options:{rotation:g,color:ge,strokeColor:Ce,strokeWidth:Nt,textAlign:tn,textBaseline:Ze,translation:[I,A],backdrop:Lt}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-os(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,c=o.widest.width;let l,u;return n==="left"?s?(u=this.right+r,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u+=c)):(u=this.right-a,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u-=c)):(u=this.left+a,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u=this.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(c,l,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const c=s[r];n.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,u,h,f;this.isHorizontal()?(l=Ms(e,this.left,o)-o/2,u=Ms(e,this.right,a)+a/2,h=f=c):(h=Ms(e,this.top,o)-o/2,f=Ms(e,this.bottom,a)+a/2,l=u=c),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(l,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&dy(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,c=o.font,l=o.label,u=o.textOffset;br(i,l,0,u,c,a)}s&&py(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=yt(i.font),o=Xt(i.padding),a=i.align;let c=r.lineHeight/2;n==="bottom"||n==="center"||De(n)?(c+=o.bottom,it(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:u,maxWidth:h,rotation:f}=Cj(this,c,n,a);br(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:xj(a,n,s),textBaseline:"middle",translation:[l,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Ee(e.grid&&e.grid.z,-1),s=Ee(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Or.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return yt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Zl{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;Rj(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,kj(e,o,i),this.override&&at.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in at[s]&&(delete at[s][i],this.override&&delete vr[i])}}function kj(t,e,n){const i=xc(Object.create(null),[n?at.get(n):{},at.get(e),t.defaults]);at.set(e,i),t.defaultRoutes&&Aj(e,t.defaultRoutes),t.descriptors&&at.describe(e,t.descriptors)}function Aj(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),c=o.join(".");at.route(r,s,c,a)})}function Rj(t){return"id"in t&&"defaults"in t}class Dj{constructor(){this.controllers=new Zl(Ka,"datasets",!0),this.elements=new Zl(Dr,"elements"),this.plugins=new Zl(Object,"plugins"),this.scales=new Zl(Or,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):Ne(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=ay(e);Be(i["before"+s],[],i),n[e](i),Be(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var Zn=new Dj;class Oj{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],c=[n,s,r.options];if(Be(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){qe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=Ee(i.options&&i.options.plugins,{}),r=Pj(i);return s===!1&&!n?[]:Nj(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function Pj(t){const e={},n=[],i=Object.keys(Zn.plugins.items);for(let r=0;r<i.length;r++)n.push(Zn.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Mj(t,e){return!e&&t===!1?null:t===!0?{}:t}function Nj(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const c=a.id,l=Mj(i[c],s);l!==null&&r.push({plugin:a,options:Lj(t.config,{plugin:a,local:n[c]},l,o)})}return r}function Lj(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Sg(t,e){const n=at.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function Fj(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function Uj(t,e){return t===e?"_index_":"_value_"}function Vw(t){if(t==="x"||t==="y"||t==="r")return t}function Vj(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function xg(t,...e){if(Vw(t))return t;for(const n of e){const i=n.axis||Vj(n.position)||t.length>1&&Vw(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Bw(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function Bj(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return Bw(t,"x",n[0])||Bw(t,"y",n[0])}return{}}function $j(t,e){const n=vr[t.type]||{scales:{}},i=e.scales||{},s=Sg(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!De(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=xg(o,a,Bj(o,t),at.scales[a.type]),l=Uj(c,s),u=n.scales||{};r[o]=ja(Object.create(null),[{axis:c},a,u[c],u[l]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,c=o.indexAxis||Sg(a,e),u=(vr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=Fj(h,c),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),ja(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];ja(a,[at.scales[a.type],at.scale])}),r}function gk(t){const e=t.options||(t.options={});e.plugins=Ee(e.plugins,{}),e.scales=$j(t,e)}function mk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function zj(t){return t=t||{},t.data=mk(t.data),gk(t),t}const $w=new Map,_k=new Set;function eu(t,e){let n=$w.get(t);return n||(n=e(),$w.set(t,n),_k.add(n)),n}const ha=(t,e,n)=>{const i=Ih(e,n);i!==void 0&&t.add(i)};class jj{constructor(e){this._config=zj(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=mk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),gk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return eu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return eu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return eu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return eu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const c=new Set;n.forEach(u=>{e&&(c.add(e),u.forEach(h=>ha(c,e,h))),u.forEach(h=>ha(c,s,h)),u.forEach(h=>ha(c,vr[r]||{},h)),u.forEach(h=>ha(c,at,h)),u.forEach(h=>ha(c,Ig,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),_k.has(n)&&o.set(n,l),l}chartOptionScopes(){const{options:e,type:n}=this;return[e,vr[n]||{},at.datasets[n]||{},{type:n},at,Ig]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=zw(this._resolverCache,e,s);let c=o;if(Wj(o,n)){r.$shared=!1,i=Ss(i)?i():i;const l=this.createResolver(e,i,a);c=Ro(o,i,l)}for(const l of n)r[l]=c[l];return r}createResolver(e,n,i=[""],s){const{resolver:r}=zw(this._resolverCache,e,i);return De(n)?Ro(r,n,void 0,s):r}}function zw(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:gy(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const Hj=t=>De(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Ss(t[n]),!1);function Wj(t,e){const{isScriptable:n,isIndexable:i}=ZC(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Ss(a)||Hj(a))||o&&it(a))return!0}return!1}var qj="4.3.0";const Kj=["top","bottom","left","right","chartArea"];function jw(t,e){return t==="top"||t==="bottom"||Kj.indexOf(t)===-1&&e==="x"}function Hw(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Ww(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Be(n&&n.onComplete,[t],e)}function Gj(t){const e=t.chart,n=e.options.animation;Be(n&&n.onProgress,[t],e)}function yk(t){return sk()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Iu={},qw=t=>{const e=yk(t);return Object.values(Iu).filter(n=>n.canvas===e).pop()};function Yj(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function Qj(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Xj(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var Xi;let Kf=(Xi=class{static register(...e){Zn.add(...e),Kw()}static unregister(...e){Zn.remove(...e),Kw()}constructor(e,n){const i=this.config=new jj(n),s=yk(e),r=qw(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||pj(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,u=c&&c.width;if(this.id=s8(),this.ctx=a,this.canvas=c,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Oj,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=E8(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Iu[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}bi.listen(this,"complete",Ww),bi.listen(this,"progress",Gj),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return qe(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Zn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():_w(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return pw(this.canvas,this.ctx),this}stop(){return bi.stop(this),this}resize(e,n){bi.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,_w(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Be(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Ne(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],c=xg(o,a),l=c==="r",u=c==="x";return{options:a,dposition:l?"chartArea":u?"bottom":"left",dtype:l?"radialLinear":u?"category":"linear"}}))),Ne(r,o=>{const a=o.options,c=a.id,l=xg(c,a),u=Ee(a.type,o.dtype);(a.position===void 0||jw(a.position,l)!==jw(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===u)h=i[c];else{const f=Zn.getScale(u);h=new f({id:c,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),Ne(s,(o,a)=>{o||delete i[a]}),Ne(i,o=>{kn.configure(this,o,o.options),kn.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(Hw("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Sg(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=Zn.getController(a),{datasetElementType:l,dataElementType:u}=at.datasets[a];Object.assign(c,{dataElementType:Zn.getElement(u),datasetElementType:l&&Zn.getElement(l)}),o.controller=new c(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){Ne(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,u=this.data.datasets.length;l<u;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||Ne(r,l=>{l.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Hw("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Ne(this.scales,e=>{kn.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!rw(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;Yj(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!rw(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;kn.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Ne(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Ss(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(bi.has(this)?this.attached&&!bi.running(this)&&bi.start(this):(this.draw(),Ww({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=Xj(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&dy(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&py(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Ai(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=Kz.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Rs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Th(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),bi.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),pw(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Iu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Ne(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(c,l)=>{n.addEventListener(this,c,l),e[c]=l},s=(c,l)=>{e[c]&&(n.removeEventListener(this,c,l),delete e[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Ne(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Ne(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,c;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=e.length;a<c;++a){o=e[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!wh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(c,l)=>c.filter(u=>!l.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),c=u8(e),l=Qj(e,this._lastEvent,i,c);i&&(this._lastEvent=null,Be(r.onHover,[e,a,this],this),c&&Be(r.onClick,[e,a,this],this));const u=!wh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=l,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ie(Xi,"defaults",at),ie(Xi,"instances",Iu),ie(Xi,"overrides",vr),ie(Xi,"registry",Zn),ie(Xi,"version",qj),ie(Xi,"getChart",qw),Xi);function Kw(){return Ne(Kf.instances,t=>t._plugins.invalidate())}function vk(t,e,n=e){t.lineCap=Ee(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Ee(n.borderDash,e.borderDash)),t.lineDashOffset=Ee(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Ee(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Ee(n.borderWidth,e.borderWidth),t.strokeStyle=Ee(n.borderColor,e.borderColor)}function Jj(t,e,n){t.lineTo(n.x,n.y)}function Zj(t){return t.stepped?L8:t.tension||t.cubicInterpolationMode==="monotone"?F8:Jj}function bk(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,c=Math.max(s,o),l=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:e.loop,ilen:l<c&&!u?i+l-c:l-c}}function eH(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:c,ilen:l}=bk(s,n,i),u=Zj(r);let{move:h=!0,reverse:f}=i||{},d,p,g;for(d=0;d<=l;++d)p=s[(a+(f?l-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,g,p,f,r.stepped),g=p);return c&&(p=s[(a+(f?l:0))%o],u(t,g,p,f,r.stepped)),!!c}function tH(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=bk(s,n,i),{move:c=!0,reverse:l}=i||{};let u=0,h=0,f,d,p,g,m,_;const v=E=>(o+(l?a-E:E))%r,b=()=>{g!==m&&(t.lineTo(u,m),t.lineTo(u,g),t.lineTo(u,_))};for(c&&(d=s[v(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[v(f)],d.skip)continue;const E=d.x,I=d.y,A=E|0;A===p?(I<g?g=I:I>m&&(m=I),u=(h*u+E)/++h):(b(),t.lineTo(E,I),p=A,h=0,g=m=I),_=I}b()}function Cg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?tH:eH}function nH(t){return t.stepped?mz:t.tension||t.cubicInterpolationMode==="monotone"?_z:$s}function iH(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),vk(t,e.options),t.stroke(s)}function sH(t,e,n,i){const{segments:s,options:r}=e,o=Cg(e);for(const a of s)vk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const rH=typeof Path2D=="function";function oH(t,e,n,i){rH&&!e.options.segment?iH(t,e,n,i):sH(t,e,n,i)}class Ta extends Dr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;cz(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Sz(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=Ez(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],c=nH(i);let l,u;for(l=0,u=o.length;l<u;++l){const{start:h,end:f}=o[l],d=r[h],p=r[f];if(d===p){a.push(d);continue}const g=Math.abs((s-d[n])/(p[n]-d[n])),m=c(d,p,g,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Cg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Cg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),oH(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ie(Ta,"id","line"),ie(Ta,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ie(Ta,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ie(Ta,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Gw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Tu extends Dr{constructor(n){super();ie(this,"parsed");ie(this,"skip");ie(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return Gw(this,n,"x",i)}inYRange(n,i){return Gw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Ai(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Tg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ie(Tu,"id","point"),ie(Tu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ie(Tu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Yw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},aH=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Qw extends Dr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Be(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=yt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Yw(i,r);let l,u;n.font=s.string,this.isHorizontal()?(l=this.maxWidth,u=this._fitRows(o,r,a,c)+10):(u=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||l[l.length-1]+m+2*a>o)&&(h+=u,l[l.length-(g>0?0:1)]=0,d+=u,f++),c[g]={left:0,top:d,row:f,width:m,height:s},l[l.length-1]+=m+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:v,itemHeight:b}=cH(i,n,r,m,s);_>0&&d+b+2*a>u&&(h+=f+a,l.push({width:f,height:d}),p+=f+a,g++,f=d=0),c[_]={left:p,top:d,col:g,width:v,height:b},f=Math.max(f,v),d+=b+a}),h+=f,l.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=ro(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Ut(i,this.left+s,this.right-this.lineWidths[a]);for(const l of n)a!==l.row&&(a=l.row,c=Ut(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+e+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=Ut(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const l of n)l.col!==a&&(a=l.col,c=Ut(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;dy(e,this),this._draw(),py(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=at.color,c=ro(e.rtl,this.left,this.width),l=yt(o.font),{padding:u}=o,h=l.size,f=h/2;let d;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=Yw(o,h),_=function(A,x,S){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const U=Ee(S.lineWidth,1);if(s.fillStyle=Ee(S.fillStyle,a),s.lineCap=Ee(S.lineCap,"butt"),s.lineDashOffset=Ee(S.lineDashOffset,0),s.lineJoin=Ee(S.lineJoin,"miter"),s.lineWidth=U,s.strokeStyle=Ee(S.strokeStyle,a),s.setLineDash(Ee(S.lineDash,[])),o.usePointStyle){const Q={radius:g*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:U},te=c.xPlus(A,p/2),ue=x+f;XC(s,Q,te,ue,o.pointStyleWidth&&p)}else{const Q=x+Math.max((h-g)/2,0),te=c.leftForLtr(A,p),ue=so(S.borderRadius);s.beginPath(),Object.values(ue).some(Ze=>Ze!==0)?Ch(s,{x:te,y:Q,w:p,h:g,radius:ue}):s.rect(te,Q,p,g),s.fill(),U!==0&&s.stroke()}s.restore()},v=function(A,x,S){br(s,S.text,A,x+m/2,l,{strikethrough:S.hidden,textAlign:c.textAlign(S.textAlign)})},b=this.isHorizontal(),E=this._computeTitleHeight();b?d={x:Ut(r,this.left+u,this.right-i[0]),y:this.top+u+E,line:0}:d={x:this.left+u,y:Ut(r,this.top+E+u,this.bottom-n[0].height),line:0},rk(this.ctx,e.textDirection);const I=m+u;this.legendItems.forEach((A,x)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const S=s.measureText(A.text).width,U=c.textAlign(A.textAlign||(A.textAlign=o.textAlign)),Q=p+f+S;let te=d.x,ue=d.y;c.setWidth(this.width),b?x>0&&te+Q+u>this.right&&(ue=d.y+=I,d.line++,te=d.x=Ut(r,this.left+u,this.right-i[d.line])):x>0&&ue+I>this.bottom&&(te=d.x=te+n[d.line].width+u,d.line++,ue=d.y=Ut(r,this.top+E+u,this.bottom-n[d.line].height));const Ze=c.x(te);if(_(Ze,ue,A),te=I8(U,te+p+f,b?te+Q:this.right,e.rtl),v(c.x(te),ue,A),b)d.x+=Q+u;else if(typeof A.text!="string"){const Qe=l.lineHeight;d.y+=wk(A,Qe)}else d.y+=I}),ok(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=yt(n.font),s=Xt(n.padding);if(!n.display)return;const r=ro(e.rtl,this.left,this.width),o=this.ctx,a=n.position,c=i.size/2,l=s.top+c;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+l,h=Ut(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=l+Ut(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=Ut(a,h,h+f);o.textAlign=r.textAlign(uy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,br(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=yt(e.font),i=Xt(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Ea(e,this.left,this.right)&&Ea(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Ea(e,s.left,s.left+s.width)&&Ea(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!hH(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=aH(s,i);s&&!r&&Be(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Be(n.onHover,[e,i,this],this)}else i&&Be(n.onClick,[e,i,this],this)}}function cH(t,e,n,i,s){const r=lH(i,t,e,n),o=uH(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function lH(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function uH(t,e,n){let i=t;return typeof e.text!="string"&&(i=wk(e,n)),i}function wk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function hH(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var fH={id:"legend",_element:Qw,start(t,e,n){const i=t.legend=new Qw({ctx:t.ctx,options:n,chart:t});kn.configure(t,i,n),kn.addBox(t,i)},stop(t){kn.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;kn.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(n?0:void 0),u=Xt(l.borderWidth);return{text:e[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Ek extends Dr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=it(i.text)?i.text.length:1;this._padding=Xt(i.padding);const r=s*yt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,u,h;return this.isHorizontal()?(u=Ut(a,i,r),h=n+e,l=r-i):(o.position==="left"?(u=i+e,h=Ut(a,s,n),c=It*-.5):(u=r-e,h=Ut(a,n,s),c=It*.5),l=s-n),{titleX:u,titleY:h,maxWidth:l,rotation:c}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=yt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);br(e,n.text,0,0,i,{color:n.color,maxWidth:c,rotation:l,textAlign:uy(n.align),textBaseline:"middle",translation:[o,a]})}}function dH(t,e){const n=new Ek({ctx:t.ctx,options:e,chart:t});kn.configure(t,n,e),kn.addBox(t,n),t.titleBlock=n}var pH={id:"title",_element:Ek,start(t,e,n){dH(t,n)},stop(t){const e=t.titleBlock;kn.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;kn.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Sa={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const c=t[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),u=Eg(e,l);u<s&&(s=u,a=c)}}if(a){const c=a.tooltipPosition();n=c.x,i=c.y}return{x:n,y:i}}};function Jn(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function wi(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function gH(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function Xw(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,c=yt(e.bodyFont),l=yt(e.titleFont),u=yt(e.footerFont),h=r.length,f=s.length,d=i.length,p=Xt(e.padding);let g=p.height,m=0,_=i.reduce((E,I)=>E+I.before.length+I.lines.length+I.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*l.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const E=e.displayColors?Math.max(a,c.lineHeight):c.lineHeight;g+=d*E+(_-d)*c.lineHeight+(_-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let v=0;const b=function(E){m=Math.max(m,n.measureText(E).width+v)};return n.save(),n.font=l.string,Ne(t.title,b),n.font=c.string,Ne(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?o+2+e.boxPadding:0,Ne(i,E=>{Ne(E.before,b),Ne(E.lines,b),Ne(E.after,b)}),v=0,n.font=u.string,Ne(t.footer,b),n.restore(),m+=p.width,{width:m,height:g}}function mH(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function _H(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function yH(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:c}}=t;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),_H(l,t,e,n)&&(l="center"),l}function Jw(t,e,n){const i=n.yAlign||e.yAlign||mH(t,n);return{xAlign:n.xAlign||e.xAlign||yH(t,e,n,i),yAlign:i}}function vH(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function bH(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function Zw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:c}=n,l=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=so(o);let p=vH(e,a);const g=bH(e,c,l);return c==="center"?a==="left"?p+=l:a==="right"&&(p-=l):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:Cn(p,0,i.width-e.width),y:Cn(g,0,i.height-e.height)}}function tu(t,e,n){const i=Xt(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function e1(t){return Jn([],wi(t))}function wH(t,e,n){return Rs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function t1(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Ik={beforeTitle:vi,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:vi,beforeBody:vi,beforeLabel:vi,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return qe(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:vi,afterBody:vi,beforeFooter:vi,footer:vi,afterFooter:vi};function nn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?Ik[e].call(n,i):s}class kg extends Dr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new ck(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=wH(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=nn(i,"beforeTitle",this,e),r=nn(i,"title",this,e),o=nn(i,"afterTitle",this,e);let a=[];return a=Jn(a,wi(s)),a=Jn(a,wi(r)),a=Jn(a,wi(o)),a}getBeforeBody(e,n){return e1(nn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return Ne(e,r=>{const o={before:[],lines:[],after:[]},a=t1(i,r);Jn(o.before,wi(nn(a,"beforeLabel",this,r))),Jn(o.lines,nn(a,"label",this,r)),Jn(o.after,wi(nn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return e1(nn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=nn(i,"beforeFooter",this,e),r=nn(i,"footer",this,e),o=nn(i,"afterFooter",this,e);let a=[];return a=Jn(a,wi(s)),a=Jn(a,wi(r)),a=Jn(a,wi(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=n.length;c<l;++c)a.push(gH(this.chart,n[c]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),Ne(a,u=>{const h=t1(e.callbacks,u);s.push(nn(h,"labelColor",this,u)),r.push(nn(h,"labelPointStyle",this,u)),o.push(nn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Sa[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Xw(this,i),l=Object.assign({},a,c),u=Jw(this.chart,i,l),h=Zw(i,l,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:u,bottomRight:h}=so(a),{x:f,y:d}=e,{width:p,height:g}=n;let m,_,v,b,E,I;return r==="center"?(E=d+g/2,s==="left"?(m=f,_=m-o,b=E+o,I=E-o):(m=f+p,_=m+o,b=E-o,I=E+o),v=m):(s==="left"?_=f+Math.max(c,u)+o:s==="right"?_=f+p-Math.max(l,h)-o:_=this.caretX,r==="top"?(b=d,E=b-o,m=_-o,v=_+o):(b=d+g,E=b+o,m=_+o,v=_-o),I=b),{x1:m,x2:_,x3:v,y1:b,y2:E,y3:I}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=ro(i.rtl,this.x,this.width);for(e.x=tu(this,i.titleAlign,i),n.textAlign=l.textAlign(i.titleAlign),n.textBaseline="middle",o=yt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,c=0;c<r;++c)n.fillText(s[c],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,c+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,u=yt(r.bodyFont),h=tu(this,"left",r),f=s.x(h),d=c<u.lineHeight?(u.lineHeight-c)/2:0,p=n.y+d;if(r.usePointStyle){const g={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(f,l)+l/2,_=p+c/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Tg(e,g,m,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Tg(e,g,m,_)}else{e.lineWidth=De(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(f,l),m=s.leftForLtr(s.xPlus(f,1),l-2),_=so(o.borderRadius);Object.values(_).some(v=>v!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Ch(e,{x:g,y:p,w:l,h:c,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Ch(e,{x:m,y:p+1,w:l-2,h:c-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,p,l,c),e.strokeRect(g,p,l,c),e.fillStyle=o.backgroundColor,e.fillRect(m,p+1,l-2,c-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:u}=i,h=yt(i.bodyFont);let f=h.lineHeight,d=0;const p=ro(i.rtl,this.x,this.width),g=function(S){n.fillText(S,p.x(e.x+d),e.y+f/2),e.y+=f+r},m=p.textAlign(o);let _,v,b,E,I,A,x;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=tu(this,m,i),n.fillStyle=i.bodyColor,Ne(this.beforeBody,g),d=a&&m!=="right"?o==="center"?l/2+u:l+2+u:0,E=0,A=s.length;E<A;++E){for(_=s[E],v=this.labelTextColors[E],n.fillStyle=v,Ne(_.before,g),b=_.lines,a&&b.length&&(this._drawColorBox(n,e,E,p,i),f=Math.max(h.lineHeight,c)),I=0,x=b.length;I<x;++I)g(b[I]),f=h.lineHeight;Ne(_.after,g)}d=0,f=h.lineHeight,Ne(this.afterBody,g),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const c=ro(i.rtl,this.x,this.width);for(e.x=tu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=c.textAlign(i.footerAlign),n.textBaseline="middle",o=yt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=e,{width:l,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=so(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,c),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+l-f,c),n.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+l,c+u-p),n.quadraticCurveTo(a+l,c+u,a+l-p,c+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,c+u),n.quadraticCurveTo(a,c+u,a,c+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,c+h),n.quadraticCurveTo(a,c,a+h,c),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Sa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Xw(this,e),c=Object.assign({},o,this._size),l=Jw(n,e,c),u=Zw(e,c,l,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Xt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),rk(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),ok(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!wh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),c=n||!wh(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),c}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Sa[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ie(kg,"positioners",Sa);var EH={id:"tooltip",_element:kg,positioners:Sa,afterInit(t,e,n){n&&(t.tooltip=new kg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ik},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const IH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function TH(t,e,n,i){const s=t.indexOf(e);if(s===-1)return IH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const SH=(t,e)=>t===null?null:Cn(Math.round(t),0,e);function n1(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Ag extends Or{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(qe(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:TH(i,e,Ee(n,e),this._addedLabels),SH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return n1.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ie(Ag,"id","category"),ie(Ag,"defaults",{ticks:{callback:n1}});function xH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:g,max:m}=e,_=!qe(o),v=!qe(a),b=!qe(l),E=(m-g)/(h+1);let I=aw((m-g)/p/d)*d,A,x,S,U;if(I<1e-14&&!_&&!v)return[{value:g},{value:m}];U=Math.ceil(m/I)-Math.floor(g/I),U>p&&(I=aw(U*I/p/d)*d),qe(c)||(A=Math.pow(10,c),I=Math.ceil(I*A)/A),s==="ticks"?(x=Math.floor(g/I)*I,S=Math.ceil(m/I)*I):(x=g,S=m),_&&v&&r&&p8((a-o)/r,I/1e3)?(U=Math.round(Math.min((a-o)/I,u)),I=(a-o)/U,x=o,S=a):b?(x=_?o:x,S=v?a:S,U=l-1,I=(S-x)/U):(U=(S-x)/I,Ha(U,Math.round(U),I/1e3)?U=Math.round(U):U=Math.ceil(U));const Q=Math.max(cw(I),cw(x));A=Math.pow(10,qe(c)?Q:c),x=Math.round(x*A)/A,S=Math.round(S*A)/A;let te=0;for(_&&(f&&x!==o?(n.push({value:o}),x<o&&te++,Ha(Math.round((x+te*I)*A)/A,o,i1(o,E,t))&&te++):x<o&&te++);te<U;++te){const ue=Math.round((x+te*I)*A)/A;if(v&&ue>a)break;n.push({value:ue})}return v&&f&&S!==a?n.length&&Ha(n[n.length-1].value,a,i1(a,E,t))?n[n.length-1].value=a:n.push({value:a}):(!v||S===a)&&n.push({value:S}),n}function i1(t,e,{horizontal:n,minRotation:i}){const s=os(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Rh extends Or{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return qe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=n?s:c,a=c=>r=i?r:c;if(e){const c=Ao(s),l=Ao(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),e||o(s-c)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=xH(s,r);return e.bounds==="ticks"&&WC(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return fy(e,this.chart.options.locale,this.options.ticks.format)}}class Rg extends Rh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=kt(e)?e:0,this.max=kt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=os(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ie(Rg,"id","linear"),ie(Rg,"defaults",{ticks:{callback:Wf.formatters.numeric}});const Ac=t=>Math.floor(rs(t)),Ls=(t,e)=>Math.pow(10,Ac(t)+e);function s1(t){return t/Math.pow(10,Ac(t))===1}function r1(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function CH(t,e){const n=e-t;let i=Ac(n);for(;r1(t,e,i)>10;)i++;for(;r1(t,e,i)<10;)i--;return Math.min(i,Ac(t))}function kH(t,{min:e,max:n}){e=gn(t.min,e);const i=[],s=Ac(e);let r=CH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((e-c)*o)/o,u=Math.floor((e-c)/a/10)*a*10;let h=Math.floor((l-u)/Math.pow(10,r)),f=gn(t.min,Math.round((c+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:s1(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+u+h*Math.pow(10,r))*o)/o;const d=gn(t.max,f);return i.push({value:d,major:s1(d),significand:h}),i}class o1 extends Or{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Rh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return kt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=kt(e)?Math.max(0,e):null,this.max=kt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!kt(this._userMin)&&(this.min=e===Ls(this.min,0)?Ls(this.min,-1):Ls(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ls(i,-1)),o(Ls(s,1)))),i<=0&&r(Ls(s,-1)),s<=0&&o(Ls(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=kH(n,this);return e.bounds==="ticks"&&WC(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":fy(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=rs(e),this._valueRange=rs(this.max)-rs(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(rs(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ie(o1,"id","logarithmic"),ie(o1,"defaults",{ticks:{callback:Wf.formatters.logarithmic,major:{enabled:!0}}});function Dg(t){const e=t.ticks;if(e.display&&t.display){const n=Xt(e.backdropPadding);return Ee(e.font&&e.font.size,at.font.size)+n.height}return 0}function AH(t,e,n){return n=it(n)?n:[n],{w:N8(t,e.string,n),h:n.length*e.lineHeight}}function a1(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function RH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?It/r:0;for(let c=0;c<r;c++){const l=o.setContext(t.getPointLabelContext(c));s[c]=l.padding;const u=t.getPointPosition(c,t.drawingArea+s[c],a),h=yt(l.font),f=AH(t.ctx,h,t._pointLabels[c]);i[c]=f;const d=Nn(t.getIndexAngle(c)+a),p=Math.round(cy(d)),g=a1(p,u.x,f.w,0,180),m=a1(p,u.y,f.h,90,270);DH(n,e,d,g,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=MH(t,i,s)}function DH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,c=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(c=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-c)):s.end>e.b&&(c=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+c))}function OH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,c=t.getPointPosition(e,i+s+o,r),l=Math.round(cy(Nn(c.angle+un))),u=FH(c.y,a.h,l),h=NH(l),f=LH(c.x,a.w,h);return{visible:!0,x:c.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function PH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Ai({x:n,y:i},e)||Ai({x:n,y:r},e)||Ai({x:s,y:i},e)||Ai({x:s,y:r},e))}function MH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Dg(r)/2,additionalAngle:o?It/s:0};let l;for(let u=0;u<s;u++){c.padding=n[u],c.size=e[u];const h=OH(t,u,c);i.push(h),a==="auto"&&(h.visible=PH(h,l),h.visible&&(l=h))}return i}function NH(t){return t===0||t===180?"center":t<180?"left":"right"}function LH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function FH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function UH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!qe(a)){const c=so(e.borderRadius),l=Xt(e.backdropPadding);t.fillStyle=a;const u=i-l.left,h=s-l.top,f=r-i+l.width,d=o-s+l.height;Object.values(c).some(p=>p!==0)?(t.beginPath(),Ch(t,{x:u,y:h,w:f,h:d,radius:c}),t.fill()):t.fillRect(u,h,f,d)}}function VH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));UH(n,o,r);const a=yt(o.font),{x:c,y:l,textAlign:u}=r;br(n,t._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Tk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Rn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function BH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:c}=e;!o&&!i||!a||!c||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Tk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function $H(t,e,n){return Rs(t,{label:n,index:e,type:"pointLabel"})}class nu extends Rh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=Xt(Dg(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=kt(e)&&!isNaN(e)?e:0,this.max=kt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Dg(this.options))}generateTickLabels(e){Rh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Be(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?RH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Rn/(this._pointLabels.length||1),i=this.options.startAngle||0;return Nn(e*n+os(i))}getDistanceFromCenterForValue(e){if(qe(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(qe(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return $H(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-un+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Tk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,c,l;if(n.pointLabels.display&&VH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){c=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);BH(this,d,c,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,c=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),l=this.getPointPosition(a,c),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(l.x,l.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&!n.reverse)return;const l=i.setContext(this.getContext(c)),u=yt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=l.backdropColor;const h=Xt(l.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}br(e,a.label,0,-r,u,{color:l.color})}),e.restore()}drawTitle(){}}ie(nu,"id","radialLinear"),ie(nu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Wf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ie(nu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ie(nu,"descriptors",{angleLines:{_fallback:"grid"}});const Gf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},cn=Object.keys(Gf);function zH(t,e){return t-e}function c1(t,e){if(qe(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),kt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Cc(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function l1(t,e,n,i){const s=cn.length;for(let r=cn.indexOf(t);r<s-1;++r){const o=Gf[cn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return cn[r]}return cn[s-1]}function jH(t,e,n,i,s){for(let r=cn.length-1;r>=cn.indexOf(n);r--){const o=cn[r];if(Gf[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return cn[n?cn.indexOf(n):0]}function HH(t){for(let e=cn.indexOf(t)+1,n=cn.length;e<n;++e)if(Gf[cn[e]].common)return cn[e]}function u1(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=ly(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function WH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=n[a],c>=0&&(e[c].major=!0);return e}function h1(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:WH(t,i,s,n)}class Dh extends Or{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new zz._date(e.adapters.date);s.init(n),ja(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:c1(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=kt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=kt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=v8(s,r,o);return this._unit=n.unit||(i.autoSkip?l1(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):jH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:HH(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),h1(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Cn(n,0,o),i=Cn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||l1(r.minUnit,n,i,this._getLabelCapacity(n)),a=Ee(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Cc(c)||c===!0,u={};let h=n,f,d;if(l&&(h=+e.startOf(h,"isoWeek",c)),h=+e.startOf(h,l?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)u1(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&u1(u,f,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Be(o,[e,n,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,u=c&&a[c],h=l&&a[l],f=i[n],d=l&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=os(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,h1(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(c1(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return w8(e.sort(zH))}}ie(Dh,"id","time"),ie(Dh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function iu(t,e,n){let i=0,s=t.length-1,r,o,a,c;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=Js(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:c}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=Js(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:c}=t[s]);const l=o-r;return l?a+(c-a)*(e-r)/l:a}class f1 extends Dh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=iu(n,this.min),this._tableRange=iu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,c,l,u;for(o=0,a=e.length;o<a;++o)l=e[o],l>=n&&l<=i&&s.push(l);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],c=s[o-1],l=s[o],Math.round((u+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(iu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return iu(this._table,i*this._tableRange+this._minPos,!0)}}ie(f1,"id","timeseries"),ie(f1,"defaults",Dh.defaults);const Sk={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},qH={type:{type:String,required:!0},...Sk},KH=lE[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Ur(t){return Fh(t)?ye(t):t}function GH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return Fh(e)?new Proxy(t,{}):t}function YH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function xk(t,e){t.labels=e}function Ck(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function QH(t,e){const n={labels:[],datasets:[]};return xk(n,t.labels),Ck(n,t.datasets,e),n}const XH=Er({props:qH,setup(t,e){let{expose:n}=e;const i=rt(null),s=Uh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:c,data:l,options:u,plugins:h,datasetIdKey:f}=t,d=QH(l,f),p=GH(d,l);s.value=new Kf(i.value,{type:c,data:p,options:{...u},plugins:h})},o=()=>{const c=ye(s.value);c&&(c.destroy(),s.value=null)},a=c=>{c.update(t.updateMode)};return Yg(r),K1(o),ls([()=>t.options,()=>t.data],(c,l)=>{let[u,h]=c,[f,d]=l;const p=ye(s.value);if(!p)return;let g=!1;if(u){const m=Ur(u),_=Ur(f);m&&m!==_&&(YH(p,m),g=!0)}if(h){const m=Ur(h.labels),_=Ur(d.labels),v=Ur(h.datasets),b=Ur(d.datasets);m!==_&&(xk(p.config.data,m),g=!0),v&&v!==b&&(Ck(p.config.data,v,t.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>No("canvas",{ref:i})}});function JH(t,e){return Kf.register(e),Er({props:Sk,setup(n,i){let{expose:s}=i;const r=Uh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>No(XH,KH({ref:o},{type:t,...n}))}})}const ZH=JH("line",wu),eW={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;Kf.register(Ag,Rg,Tu,Ta,pH,EH,fH);const n=_s({datasets:e.datasets}),i=_s({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(Y(),fn(O(ZH),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const tW={class:"graph"},nW={__name:"StatsScreen",setup(t){const e=cl(),n=Ie(()=>e.params.boardUUID||""),i=Rr(Wi);let s=an(Vi(i,"Boards",n.value,"Groups")),r=an(Vi(i,"Boards",n.value,"Tiles"));const o=an(_n(i,"Boards",n.value)),a=Ie(()=>{var h;let u=[];return r&&((h=r==null?void 0:r.value)==null||h.forEach(f=>{u[f.id]=f.points})),u||[]}),c=u=>{let h=[{x:16829424e5,y:0}],f=0;const d=Object.entries(u.collected).sort((p,g)=>p[1].seconds-g[1].seconds);return Object.keys(d).forEach(p=>{f+=a.value[d[p][0]],h.push({y:f,x:new Date(d[p][1].seconds*1e3)})}),h.push({x:Date.now(),y:f}),h},l=Ie(()=>{var h;let u=[];return s!=null&&s.value&&((h=s==null?void 0:s.value)==null||h.forEach(f=>{f.name!="moderator"&&u.push({label:f.name,borderColor:f.color,backgroundColor:f.color,data:c(f)})})),u});return(u,h)=>{var d;const f=Oc("router-link");return Y(),ce(Ue,null,[re("div",null,[mt(f,{class:"btn",to:{name:"overview",params:{boardUUID:O(n)}}},{default:zh(()=>[pt(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),re("h1",null,nt((d=O(o))==null?void 0:d.name)+" stats:",1),re("div",tW,[mt(eW,{datasets:O(l)},null,8,["datasets"])])],64)}}},iW={key:0},sW={key:1},rW={__name:"EditBoard",props:["boardUUID"],setup(t){const e=t,i=fl().user,s=rt("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),r=Rr(Wi),o=an(_n(r,"Boards",e.boardUUID));return(a,c)=>(Y(),ce(Ue,null,[O(o)&&O(i).loggedIn&&(O(o).ownerID==O(i).data.uid||O(i).data.uid==s.value)?(Y(),ce("h1",iW,nt({id:O(o).id,...O(o)}),1)):tt("",!0),O(o).ownerID==O(i).data.uid||O(i).data.uid==s.value?tt("",!0):(Y(),ce("h1",sW,"Not authenticated"))],64))}};const oW={class:"block"},aW={for:"email"},cW={for:"pasword"},lW=["onClick"],uW=["onClick"],hW={__name:"loginView",setup(t){const e=new Ti,n=fl(),i=rt(""),s=rt(""),r=LM(),o=al(),a=async()=>{await EP(r,i.value,s.value).then(l=>{n.setUser({loggedIn:!0,data:l.user}),o.push({name:"boardOverview"})}).catch(l=>{const u=l.code,h=l.message;console.error(u,h)})},c=()=>{WP(r,e).then(l=>{n.setUser({loggedIn:!0,data:l.user}),o.push({name:"boardOverview"})}).catch(l=>{const u=l.code,h=l.message;console.error(u,h)})};return(l,u)=>(Y(),ce("div",oW,[re("label",aW,[pt("email: "),co(re("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":u[0]||(u[0]=h=>i.value=h)},null,512),[[ho,i.value]])]),re("label",cW,[pt(" password: "),co(re("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":u[1]||(u[1]=h=>s.value=h)},null,512),[[ho,s.value]])]),re("button",{class:"btn",onClick:fo(a,["prevent"])},"Log in",8,lW),re("button",{class:"btn",onClick:fo(c,["prevent"])},"Log in with Google",8,uW)]))}},fW=Pn(hW,[["__scopeId","data-v-d824d87d"]]),dW=U5({history:t5(),mode:"hash",routes:[{path:"/",name:"Home",component:y$},{path:"/new",name:"newBoard",component:A$},{path:"/login",name:"loginView",component:fW},{path:"/edit/:boardUUID",name:"editBoard",props:!0,component:rW},{path:"/b/:boardUUID",name:"overview",props:!0,component:Z0},{path:"/boards/",name:"boardOverview",props:!0,component:N$},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",props:!0,component:Z0},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:nW},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",props:!0,component:p$}]});var pW={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},gW={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},mW={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},_W={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},yW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},vW={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},bW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},wW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},EW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},IW={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};_i.add(wW);_i.add(pW);_i.add(mW);_i.add(IW);_i.add(_W);_i.add(yW);_i.add(vW);_i.add(EW);_i.add(bW);_i.add(gW);const gl=YR($5);gl.use(JR());gl.use(dW);gl.use(L6,{firebaseApp:Wi});gl.component("FontAwesomeIcon",NC);gl.mount("#app");
