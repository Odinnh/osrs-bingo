var Ok=Object.defineProperty;var Mk=(t,e,n)=>e in t?Ok(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ce=(t,e,n)=>(Mk(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Vg(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Nr(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=kt(i)?Fk(i):Nr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(kt(t))return t;if(Qe(t))return t}}const Pk=/;(?![^(]*\))/g,Nk=/:([^]+)/,Lk=/\/\*.*?\*\//gs;function Fk(t){const e={};return t.replace(Lk,"").split(Pk).forEach(n=>{if(n){const i=n.split(Nk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cn(t){let e="";if(kt(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const i=Cn(t[n]);i&&(e+=i+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vk=Vg(Uk);function Ew(t){return!!t||t===""}function Bk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Uc(t[i],e[i]);return n}function Uc(t,e){if(t===e)return!0;let n=Oy(t),i=Oy(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=tc(t),i=tc(e),n||i)return t===e;if(n=oe(t),i=oe(e),n||i)return n&&i?Bk(t,e):!1;if(n=Qe(t),i=Qe(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Uc(t[o],e[o]))return!1}}return String(t)===String(e)}function Bg(t,e){return t.findIndex(n=>Uc(n,e))}const me=t=>kt(t)?t:t==null?"":oe(t)||Qe(t)&&(t.toString===xw||!we(t.toString))?JSON.stringify(t,Tw,2):String(t),Tw=(t,e)=>e&&e.__v_isRef?Tw(t,e.value):lo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:jo(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!oe(e)&&!Cw(e)?String(e):e,Ze={},co=[],Jn=()=>{},$k=()=>!1,zk=/^on[^a-z]/,$h=t=>zk.test(t),$g=t=>t.startsWith("onUpdate:"),hn=Object.assign,zg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hk=Object.prototype.hasOwnProperty,Fe=(t,e)=>Hk.call(t,e),oe=Array.isArray,lo=t=>Vc(t)==="[object Map]",jo=t=>Vc(t)==="[object Set]",Oy=t=>Vc(t)==="[object Date]",we=t=>typeof t=="function",kt=t=>typeof t=="string",tc=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",Iw=t=>Qe(t)&&we(t.then)&&we(t.catch),xw=Object.prototype.toString,Vc=t=>xw.call(t),jk=t=>Vc(t).slice(8,-1),Cw=t=>Vc(t)==="[object Object]",Hg=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,du=Vg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wk=/-(\w)/g,vi=zh(t=>t.replace(Wk,(e,n)=>n?n.toUpperCase():"")),qk=/\B([A-Z])/g,Lr=zh(t=>t.replace(qk,"-$1").toLowerCase()),Hh=zh(t=>t.charAt(0).toUpperCase()+t.slice(1)),nd=zh(t=>t?`on${Hh(t)}`:""),nc=(t,e)=>!Object.is(t,e),pu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let My;const Kk=()=>My||(My=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let In;class kw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=In;try{return In=this,e()}finally{In=n}}}on(){In=this}off(){In=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sw(t){return new kw(t)}function Gk(t,e=In){e&&e.active&&e.effects.push(t)}function jg(){return In}function Aw(t){In&&In.cleanups.push(t)}const Wg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rw=t=>(t.w&Ss)>0,Dw=t=>(t.n&Ss)>0,Yk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ss},Xk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Rw(s)&&!Dw(s)?s.delete(t):e[n++]=s,s.w&=~Ss,s.n&=~Ss}e.length=n}},Nu=new WeakMap;let wa=0,Ss=1;const Zd=30;let jn;const gr=Symbol(""),ep=Symbol("");class qg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gk(this,i)}run(){if(!this.active)return this.fn();let e=jn,n=bs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jn,jn=this,bs=!0,Ss=1<<++wa,wa<=Zd?Yk(this):Py(this),this.fn()}finally{wa<=Zd&&Xk(this),Ss=1<<--wa,jn=this.parent,bs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jn===this?this.deferStop=!0:this.active&&(Py(this),this.onStop&&this.onStop(),this.active=!1)}}function Py(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bs=!0;const Ow=[];function Wo(){Ow.push(bs),bs=!1}function qo(){const t=Ow.pop();bs=t===void 0?!0:t}function wn(t,e,n){if(bs&&jn){let i=Nu.get(t);i||Nu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Wg()),Mw(s)}}function Mw(t,e){let n=!1;wa<=Zd?Dw(t)||(t.n|=Ss,n=!Rw(t)):n=!t.has(jn),n&&(t.add(jn),jn.deps.push(t))}function Hi(t,e,n,i,s,r){const o=Nu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?Hg(n)&&a.push(o.get("length")):(a.push(o.get(gr)),lo(t)&&a.push(o.get(ep)));break;case"delete":oe(t)||(a.push(o.get(gr)),lo(t)&&a.push(o.get(ep)));break;case"set":lo(t)&&a.push(o.get(gr));break}if(a.length===1)a[0]&&tp(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);tp(Wg(c))}}function tp(t,e){const n=oe(t)?t:[...t];for(const i of n)i.computed&&Ny(i);for(const i of n)i.computed||Ny(i)}function Ny(t,e){(t!==jn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Qk(t,e){var n;return(n=Nu.get(t))===null||n===void 0?void 0:n.get(e)}const Jk=Vg("__proto__,__v_isRef,__isVue"),Pw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tc)),Zk=Kg(),eS=Kg(!1,!0),tS=Kg(!0),Ly=nS();function nS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ke(this);for(let r=0,o=this.length;r<o;r++)wn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wo();const i=ke(this)[e].apply(this,n);return qo(),i}}),t}function iS(t){const e=ke(this);return wn(e,"has",t),e.hasOwnProperty(t)}function Kg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?vS:Vw:e?Uw:Fw).get(i))return i;const o=oe(i);if(!t){if(o&&Fe(Ly,s))return Reflect.get(Ly,s,r);if(s==="hasOwnProperty")return iS}const a=Reflect.get(i,s,r);return(tc(s)?Pw.has(s):Jk(s))||(t||wn(i,"get",s),e)?a:ht(a)?o&&Hg(s)?a:a.value:Qe(a)?t?Bw(a):As(a):a}}const sS=Nw(),rS=Nw(!0);function Nw(t=!1){return function(n,i,s,r){let o=n[i];if(wo(o)&&ht(o)&&!ht(s))return!1;if(!t&&(!Lu(s)&&!wo(s)&&(o=ke(o),s=ke(s)),!oe(n)&&ht(o)&&!ht(s)))return o.value=s,!0;const a=oe(n)&&Hg(i)?Number(i)<n.length:Fe(n,i),c=Reflect.set(n,i,s,r);return n===ke(r)&&(a?nc(s,o)&&Hi(n,"set",i,s):Hi(n,"add",i,s)),c}}function oS(t,e){const n=Fe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Hi(t,"delete",e,void 0),i}function aS(t,e){const n=Reflect.has(t,e);return(!tc(e)||!Pw.has(e))&&wn(t,"has",e),n}function cS(t){return wn(t,"iterate",oe(t)?"length":gr),Reflect.ownKeys(t)}const Lw={get:Zk,set:sS,deleteProperty:oS,has:aS,ownKeys:cS},lS={get:tS,set(t,e){return!0},deleteProperty(t,e){return!0}},uS=hn({},Lw,{get:eS,set:rS}),Gg=t=>t,jh=t=>Reflect.getPrototypeOf(t);function Il(t,e,n=!1,i=!1){t=t.__v_raw;const s=ke(t),r=ke(e);n||(e!==r&&wn(s,"get",e),wn(s,"get",r));const{has:o}=jh(s),a=i?Gg:n?Qg:ic;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function xl(t,e=!1){const n=this.__v_raw,i=ke(n),s=ke(t);return e||(t!==s&&wn(i,"has",t),wn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Cl(t,e=!1){return t=t.__v_raw,!e&&wn(ke(t),"iterate",gr),Reflect.get(t,"size",t)}function Fy(t){t=ke(t);const e=ke(this);return jh(e).has.call(e,t)||(e.add(t),Hi(e,"add",t,t)),this}function Uy(t,e){e=ke(e);const n=ke(this),{has:i,get:s}=jh(n);let r=i.call(n,t);r||(t=ke(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?nc(e,o)&&Hi(n,"set",t,e):Hi(n,"add",t,e),this}function Vy(t){const e=ke(this),{has:n,get:i}=jh(e);let s=n.call(e,t);s||(t=ke(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Hi(e,"delete",t,void 0),r}function By(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&Hi(t,"clear",void 0,void 0),n}function kl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ke(o),c=e?Gg:t?Qg:ic;return!t&&wn(a,"iterate",gr),o.forEach((l,u)=>i.call(s,c(l),c(u),r))}}function Sl(t,e,n){return function(...i){const s=this.__v_raw,r=ke(s),o=lo(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Gg:e?Qg:ic;return!e&&wn(r,"iterate",c?ep:gr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ss(t){return function(...e){return t==="delete"?!1:this}}function hS(){const t={get(r){return Il(this,r)},get size(){return Cl(this)},has:xl,add:Fy,set:Uy,delete:Vy,clear:By,forEach:kl(!1,!1)},e={get(r){return Il(this,r,!1,!0)},get size(){return Cl(this)},has:xl,add:Fy,set:Uy,delete:Vy,clear:By,forEach:kl(!1,!0)},n={get(r){return Il(this,r,!0)},get size(){return Cl(this,!0)},has(r){return xl.call(this,r,!0)},add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear"),forEach:kl(!0,!1)},i={get(r){return Il(this,r,!0,!0)},get size(){return Cl(this,!0)},has(r){return xl.call(this,r,!0)},add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear"),forEach:kl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sl(r,!1,!1),n[r]=Sl(r,!0,!1),e[r]=Sl(r,!1,!0),i[r]=Sl(r,!0,!0)}),[t,n,e,i]}const[fS,dS,pS,gS]=hS();function Yg(t,e){const n=e?t?gS:pS:t?dS:fS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Fe(n,s)&&s in i?n:i,s,r)}const mS={get:Yg(!1,!1)},_S={get:Yg(!1,!0)},yS={get:Yg(!0,!1)},Fw=new WeakMap,Uw=new WeakMap,Vw=new WeakMap,vS=new WeakMap;function bS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wS(t){return t.__v_skip||!Object.isExtensible(t)?0:bS(jk(t))}function As(t){return wo(t)?t:Xg(t,!1,Lw,mS,Fw)}function ES(t){return Xg(t,!1,uS,_S,Uw)}function Bw(t){return Xg(t,!0,lS,yS,Vw)}function Xg(t,e,n,i,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=wS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Bi(t){return wo(t)?Bi(t.__v_raw):!!(t&&t.__v_isReactive)}function wo(t){return!!(t&&t.__v_isReadonly)}function Lu(t){return!!(t&&t.__v_isShallow)}function Wh(t){return Bi(t)||wo(t)}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function Eo(t){return Mu(t,"__v_skip",!0),t}const ic=t=>Qe(t)?As(t):t,Qg=t=>Qe(t)?Bw(t):t;function $w(t){bs&&jn&&(t=ke(t),Mw(t.dep||(t.dep=Wg())))}function zw(t,e){t=ke(t);const n=t.dep;n&&tp(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return Hw(t,!1)}function qh(t){return Hw(t,!0)}function Hw(t,e){return ht(t)?t:new TS(t,e)}class TS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ke(e),this._value=n?e:ic(e)}get value(){return $w(this),this._value}set value(e){const n=this.__v_isShallow||Lu(e)||wo(e);e=n?e:ke(e),nc(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ic(e),zw(this))}}function T(t){return ht(t)?t.value:t}const IS={get:(t,e,n)=>T(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function jw(t){return Bi(t)?t:new Proxy(t,IS)}function xS(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Ww(t,n);return e}class CS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qk(ke(this._object),this._key)}}function Ww(t,e,n){const i=t[e];return ht(i)?i:new CS(t,e,n)}var qw;class kS{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qw]=!1,this._dirty=!0,this.effect=new qg(e,()=>{this._dirty||(this._dirty=!0,zw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ke(this);return $w(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qw="__v_isReadonly";function SS(t,e,n=!1){let i,s;const r=we(t);return r?(i=t,s=Jn):(i=t.get,s=t.set),new kS(i,s,r||!s,n)}function ws(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Kh(r,e,n)}return s}function Zn(t,e,n,i){if(we(t)){const r=ws(t,e,n,i);return r&&Iw(r)&&r.catch(o=>{Kh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Zn(t[r],e,n,i));return s}function Kh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){ws(c,null,10,[t,o,a]);return}}AS(t,n,s,i)}function AS(t,e,n,i=!0){console.error(t)}let sc=!1,np=!1;const Jt=[];let hi=0;const uo=[];let Di=null,sr=0;const Kw=Promise.resolve();let Jg=null;function Zg(t){const e=Jg||Kw;return t?e.then(this?t.bind(this):t):e}function RS(t){let e=hi+1,n=Jt.length;for(;e<n;){const i=e+n>>>1;rc(Jt[i])<t?e=i+1:n=i}return e}function em(t){(!Jt.length||!Jt.includes(t,sc&&t.allowRecurse?hi+1:hi))&&(t.id==null?Jt.push(t):Jt.splice(RS(t.id),0,t),Gw())}function Gw(){!sc&&!np&&(np=!0,Jg=Kw.then(Xw))}function DS(t){const e=Jt.indexOf(t);e>hi&&Jt.splice(e,1)}function OS(t){oe(t)?uo.push(...t):(!Di||!Di.includes(t,t.allowRecurse?sr+1:sr))&&uo.push(t),Gw()}function $y(t,e=sc?hi+1:0){for(;e<Jt.length;e++){const n=Jt[e];n&&n.pre&&(Jt.splice(e,1),e--,n())}}function Yw(t){if(uo.length){const e=[...new Set(uo)];if(uo.length=0,Di){Di.push(...e);return}for(Di=e,Di.sort((n,i)=>rc(n)-rc(i)),sr=0;sr<Di.length;sr++)Di[sr]();Di=null,sr=0}}const rc=t=>t.id==null?1/0:t.id,MS=(t,e)=>{const n=rc(t)-rc(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xw(t){np=!1,sc=!0,Jt.sort(MS);const e=Jn;try{for(hi=0;hi<Jt.length;hi++){const n=Jt[hi];n&&n.active!==!1&&ws(n,null,14)}}finally{hi=0,Jt.length=0,Yw(),sc=!1,Jg=null,(Jt.length||uo.length)&&Xw()}}function PS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ze;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ze;f&&(s=n.map(d=>kt(d)?d.trim():d)),h&&(s=n.map(Pu))}let a,c=i[a=nd(e)]||i[a=nd(vi(e))];!c&&r&&(c=i[a=nd(Lr(e))]),c&&Zn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Zn(l,t,6,s)}}function Qw(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!we(t)){const c=l=>{const u=Qw(l,e,!0);u&&(a=!0,hn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Qe(t)&&i.set(t,null),null):(oe(r)?r.forEach(c=>o[c]=null):hn(o,r),Qe(t)&&i.set(t,o),o)}function Gh(t,e){return!t||!$h(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Lr(e))||Fe(t,e))}let kn=null,Yh=null;function Fu(t){const e=kn;return kn=t,Yh=t&&t.type.__scopeId||null,e}function Ji(t){Yh=t}function Zi(){Yh=null}function tm(t,e=kn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Xy(-1);const r=Fu(e);let o;try{o=t(...s)}finally{Fu(r),i._d&&Xy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function id(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let g,_;const v=Fu(t);try{if(n.shapeFlag&4){const I=s||i;g=ui(u.call(I,I,h,r,d,f,p)),_=c}else{const I=e;g=ui(I.length>1?I(r,{attrs:c,slots:a,emit:l}):I(r,null)),_=e.props?c:NS(c)}}catch(I){Pa.length=0,Kh(I,t,1),g=Z(Er)}let w=g;if(_&&m!==!1){const I=Object.keys(_),{shapeFlag:b}=w;I.length&&b&7&&(o&&I.some($g)&&(_=LS(_,o)),w=To(w,_))}return n.dirs&&(w=To(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),g=w,Fu(v),g}const NS=t=>{let e;for(const n in t)(n==="class"||n==="style"||$h(n))&&((e||(e={}))[n]=t[n]);return e},LS=(t,e)=>{const n={};for(const i in t)(!$g(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function FS(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?zy(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Gh(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zy(i,o,l):!0:!!o;return!1}function zy(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Gh(n,r))return!0}return!1}function US({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const VS=t=>t.__isSuspense;function BS(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):OS(t)}function gu(t,e){if(_t){let n=_t.provides;const i=_t.parent&&_t.parent.provides;i===n&&(n=_t.provides=Object.create(i)),n[t]=e}}function bn(t,e,n=!1){const i=_t||kn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&we(e)?e.call(i.proxy):e}}function $S(t,e){return nm(t,null,{flush:"post"})}const Al={};function Es(t,e,n){return nm(t,e,n)}function nm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ze){const a=jg()===(_t==null?void 0:_t.scope)?_t:null;let c,l=!1,u=!1;if(ht(t)?(c=()=>t.value,l=Lu(t)):Bi(t)?(c=()=>t,i=!0):oe(t)?(u=!0,l=t.some(w=>Bi(w)||Lu(w)),c=()=>t.map(w=>{if(ht(w))return w.value;if(Bi(w))return or(w);if(we(w))return ws(w,a,2)})):we(t)?e?c=()=>ws(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Zn(t,a,3,[f])}:c=Jn,e&&i){const w=c;c=()=>or(w())}let h,f=w=>{h=_.onStop=()=>{ws(w,a,4)}},d;if(ac)if(f=Jn,e?n&&Zn(e,a,3,[c(),u?[]:void 0,f]):c(),s==="sync"){const w=RA();d=w.__watcherHandles||(w.__watcherHandles=[])}else return Jn;let p=u?new Array(t.length).fill(Al):Al;const m=()=>{if(_.active)if(e){const w=_.run();(i||l||(u?w.some((I,b)=>nc(I,p[b])):nc(w,p)))&&(h&&h(),Zn(e,a,3,[w,p===Al?void 0:u&&p[0]===Al?[]:p,f]),p=w)}else _.run()};m.allowRecurse=!!e;let g;s==="sync"?g=m:s==="post"?g=()=>gn(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),g=()=>em(m));const _=new qg(c,g);e?n?m():p=_.run():s==="post"?gn(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&zg(a.scope.effects,_)};return d&&d.push(v),v}function zS(t,e,n){const i=this.proxy,s=kt(t)?t.includes(".")?Jw(i,t):()=>i[t]:t.bind(i,i);let r;we(e)?r=e:(r=e.handler,n=e);const o=_t;Io(this);const a=nm(s,r.bind(i),n);return o?Io(o):mr(),a}function Jw(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function or(t,e){if(!Qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))or(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)or(t[n],e);else if(jo(t)||lo(t))t.forEach(n=>{or(n,e)});else if(Cw(t))for(const n in t)or(t[n],e);return t}function Fr(t){return we(t)?{setup:t,name:t.name}:t}const mu=t=>!!t.type.__asyncLoader,Zw=t=>t.type.__isKeepAlive;function HS(t,e){eE(t,"a",e)}function jS(t,e){eE(t,"da",e)}function eE(t,e,n=_t){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Zw(s.parent.vnode)&&WS(i,e,n,s),s=s.parent}}function WS(t,e,n,i){const s=Xh(e,t,i,!0);sm(()=>{zg(i[e],s)},n)}function Xh(t,e,n=_t,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wo(),Io(n);const a=Zn(e,n,t,o);return mr(),qo(),a});return i?s.unshift(r):s.push(r),r}}const es=t=>(e,n=_t)=>(!ac||t==="sp")&&Xh(t,(...i)=>e(...i),n),qS=es("bm"),im=es("m"),KS=es("bu"),GS=es("u"),tE=es("bum"),sm=es("um"),nE=es("sp"),YS=es("rtg"),XS=es("rtc");function QS(t,e=_t){Xh("ec",t,e)}function xn(t,e){const n=kn;if(n===null)return t;const i=Zh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ze]=e[r];o&&(we(o)&&(o={mounted:o,updated:o}),o.deep&&or(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ks(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Wo(),Zn(c,n,8,[t.el,a,t,e]),qo())}}const iE="components";function Rs(t,e){return ZS(iE,t,!0,e)||t}const JS=Symbol();function ZS(t,e,n=!0,i=!1){const s=kn||_t;if(s){const r=s.type;if(t===iE){const a=SA(r,!1);if(a&&(a===e||a===vi(e)||a===Hh(vi(e))))return r}const o=Hy(s[t]||r[t],e)||Hy(s.appContext[t],e);return!o&&i?r:o}}function Hy(t,e){return t&&(t[e]||t[vi(e)]||t[Hh(vi(e))])}function un(t,e,n,i){let s;const r=n&&n[i];if(oe(t)||kt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const ip=t=>t?pE(t)?Zh(t)||t.proxy:ip(t.parent):null,Ma=hn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ip(t.parent),$root:t=>ip(t.root),$emit:t=>t.emit,$options:t=>rm(t),$forceUpdate:t=>t.f||(t.f=()=>em(t.update)),$nextTick:t=>t.n||(t.n=Zg.bind(t.proxy)),$watch:t=>zS.bind(t)}),sd=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Fe(t,e),eA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(sd(i,e))return o[e]=1,i[e];if(s!==Ze&&Fe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Fe(l,e))return o[e]=3,r[e];if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];sp&&(o[e]=0)}}const u=Ma[e];let h,f;if(u)return e==="$attrs"&&wn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Fe(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return sd(s,e)?(s[e]=n,!0):i!==Ze&&Fe(i,e)?(i[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ze&&Fe(t,o)||sd(e,o)||(a=r[0])&&Fe(a,o)||Fe(i,o)||Fe(Ma,o)||Fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let sp=!0;function tA(t){const e=rm(t),n=t.proxy,i=t.ctx;sp=!1,e.beforeCreate&&jy(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:w,unmounted:I,render:b,renderTracked:C,renderTriggered:k,errorCaptured:x,serverPrefetch:F,expose:J,inheritAttrs:ee,components:ae,directives:Ge,filters:ye}=e;if(l&&nA(l,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const Ne=o[Ee];we(Ne)&&(i[Ee]=Ne.bind(n))}if(s){const Ee=s.call(n,n);Qe(Ee)&&(t.data=As(Ee))}if(sp=!0,r)for(const Ee in r){const Ne=r[Ee],jt=we(Ne)?Ne.bind(n,n):we(Ne.get)?Ne.get.bind(n,n):Jn,fn=!we(Ne)&&we(Ne.set)?Ne.set.bind(n):Jn,Wt=Ce({get:jt,set:fn});Object.defineProperty(i,Ee,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:mt=>Wt.value=mt})}if(a)for(const Ee in a)sE(a[Ee],i,n,Ee);if(c){const Ee=we(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(Ne=>{gu(Ne,Ee[Ne])})}u&&jy(u,t,"c");function Ie(Ee,Ne){oe(Ne)?Ne.forEach(jt=>Ee(jt.bind(n))):Ne&&Ee(Ne.bind(n))}if(Ie(qS,h),Ie(im,f),Ie(KS,d),Ie(GS,p),Ie(HS,m),Ie(jS,g),Ie(QS,x),Ie(XS,C),Ie(YS,k),Ie(tE,v),Ie(sm,I),Ie(nE,F),oe(J))if(J.length){const Ee=t.exposed||(t.exposed={});J.forEach(Ne=>{Object.defineProperty(Ee,Ne,{get:()=>n[Ne],set:jt=>n[Ne]=jt})})}else t.exposed||(t.exposed={});b&&t.render===Jn&&(t.render=b),ee!=null&&(t.inheritAttrs=ee),ae&&(t.components=ae),Ge&&(t.directives=Ge)}function nA(t,e,n=Jn,i=!1){oe(t)&&(t=rp(t));for(const s in t){const r=t[s];let o;Qe(r)?"default"in r?o=bn(r.from||s,r.default,!0):o=bn(r.from||s):o=bn(r),ht(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function jy(t,e,n){Zn(oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function sE(t,e,n,i){const s=i.includes(".")?Jw(n,i):()=>n[i];if(kt(t)){const r=e[t];we(r)&&Es(s,r)}else if(we(t))Es(s,t.bind(n));else if(Qe(t))if(oe(t))t.forEach(r=>sE(r,e,n,i));else{const r=we(t.handler)?t.handler.bind(n):e[t.handler];we(r)&&Es(s,r,t)}}function rm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Uu(c,l,o,!0)),Uu(c,e,o)),Qe(e)&&r.set(e,c),c}function Uu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Uu(t,r,n,!0),s&&s.forEach(o=>Uu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=iA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iA={data:Wy,props:Zs,emits:Zs,methods:Zs,computed:Zs,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:Zs,directives:Zs,watch:rA,provide:Wy,inject:sA};function Wy(t,e){return e?t?function(){return hn(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function sA(t,e){return Zs(rp(t),rp(e))}function rp(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function cn(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?hn(hn(Object.create(null),t),e):e}function rA(t,e){if(!t)return e;if(!e)return t;const n=hn(Object.create(null),t);for(const i in e)n[i]=cn(t[i],e[i]);return n}function oA(t,e,n,i=!1){const s={},r={};Mu(r,Jh,1),t.propsDefaults=Object.create(null),rE(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:ES(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function aA(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ke(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Gh(t.emitsOptions,f))continue;const d=e[f];if(c)if(Fe(r,f))d!==r[f]&&(r[f]=d,l=!0);else{const p=vi(f);s[p]=op(c,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,l=!0)}}}else{rE(t,e,s,r)&&(l=!0);let u;for(const h in a)(!e||!Fe(e,h)&&((u=Lr(h))===h||!Fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=op(c,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Fe(e,h))&&(delete r[h],l=!0)}l&&Hi(t,"set","$attrs")}function rE(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(du(c))continue;const l=e[c];let u;s&&Fe(s,u=vi(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gh(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=ke(n),l=a||Ze;for(let u=0;u<r.length;u++){const h=r[u];n[h]=op(s,c,h,l[h],t,!Fe(l,h))}}return o}function op(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Fe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&we(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(Io(s),i=l[n]=c.call(null,e),mr())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}function oE(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!we(t)){const u=h=>{c=!0;const[f,d]=oE(h,e,!0);hn(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Qe(t)&&i.set(t,co),co;if(oe(r))for(let u=0;u<r.length;u++){const h=vi(r[u]);qy(h)&&(o[h]=Ze)}else if(r)for(const u in r){const h=vi(u);if(qy(h)){const f=r[u],d=o[h]=oe(f)||we(f)?{type:f}:Object.assign({},f);if(d){const p=Yy(Boolean,d.type),m=Yy(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||Fe(d,"default"))&&a.push(h)}}}const l=[o,a];return Qe(t)&&i.set(t,l),l}function qy(t){return t[0]!=="$"}function Ky(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gy(t,e){return Ky(t)===Ky(e)}function Yy(t,e){return oe(e)?e.findIndex(n=>Gy(n,t)):we(e)&&Gy(e,t)?0:-1}const aE=t=>t[0]==="_"||t==="$stable",om=t=>oe(t)?t.map(ui):[ui(t)],cA=(t,e,n)=>{if(e._n)return e;const i=tm((...s)=>om(e(...s)),n);return i._c=!1,i},cE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(aE(s))continue;const r=t[s];if(we(r))e[s]=cA(s,r,i);else if(r!=null){const o=om(r);e[s]=()=>o}}},lE=(t,e)=>{const n=om(e);t.slots.default=()=>n},lA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ke(e),Mu(e,"_",n)):cE(e,t.slots={})}else t.slots={},e&&lE(t,e);Mu(t.slots,Jh,1)},uA=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(hn(s,e),!n&&a===1&&delete s._):(r=!e.$stable,cE(e,s)),o=e}else e&&(lE(t,e),o={default:1});if(r)for(const a in s)!aE(a)&&!(a in o)&&delete s[a]};function uE(){return{app:null,config:{isNativeTag:$k,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hA=0;function fA(t,e){return function(i,s=null){we(i)||(i=Object.assign({},i)),s!=null&&!Qe(s)&&(s=null);const r=uE(),o=new Set;let a=!1;const c=r.app={_uid:hA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:_E,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&we(l.install)?(o.add(l),l.install(c,...u)):we(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=Z(i,s);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Zh(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function ap(t,e,n,i,s=!1){if(oe(t)){t.forEach((f,d)=>ap(f,e&&(oe(e)?e[d]:e),n,i,s));return}if(mu(i)&&!s)return;const r=i.shapeFlag&4?Zh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(kt(l)?(u[l]=null,Fe(h,l)&&(h[l]=null)):ht(l)&&(l.value=null)),we(c))ws(c,a,12,[o,u]);else{const f=kt(c),d=ht(c);if(f||d){const p=()=>{if(t.f){const m=f?Fe(h,c)?h[c]:u[c]:c.value;s?oe(m)&&zg(m,r):oe(m)?m.includes(r)||m.push(r):f?(u[c]=[r],Fe(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Fe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,gn(p,n)):p()}}}const gn=BS;function dA(t){return pA(t)}function pA(t,e){const n=Kk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Jn,insertStaticContent:p}=t,m=(y,E,S,R=null,P=null,B=null,W=!1,V=null,$=!!E.dynamicChildren)=>{if(y===E)return;y&&!la(y,E)&&(R=j(y),mt(y,P,B,!0),y=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:N,ref:ie,shapeFlag:G}=E;switch(N){case Qh:g(y,E,S,R);break;case Er:_(y,E,S,R);break;case _u:y==null&&v(E,S,R,W);break;case Te:ae(y,E,S,R,P,B,W,V,$);break;default:G&1?b(y,E,S,R,P,B,W,V,$):G&6?Ge(y,E,S,R,P,B,W,V,$):(G&64||G&128)&&N.process(y,E,S,R,P,B,W,V,$,Le)}ie!=null&&P&&ap(ie,y&&y.ref,B,E||y,!E)},g=(y,E,S,R)=>{if(y==null)i(E.el=a(E.children),S,R);else{const P=E.el=y.el;E.children!==y.children&&l(P,E.children)}},_=(y,E,S,R)=>{y==null?i(E.el=c(E.children||""),S,R):E.el=y.el},v=(y,E,S,R)=>{[y.el,y.anchor]=p(y.children,E,S,R,y.el,y.anchor)},w=({el:y,anchor:E},S,R)=>{let P;for(;y&&y!==E;)P=f(y),i(y,S,R),y=P;i(E,S,R)},I=({el:y,anchor:E})=>{let S;for(;y&&y!==E;)S=f(y),s(y),y=S;s(E)},b=(y,E,S,R,P,B,W,V,$)=>{W=W||E.type==="svg",y==null?C(E,S,R,P,B,W,V,$):F(y,E,P,B,W,V,$)},C=(y,E,S,R,P,B,W,V)=>{let $,N;const{type:ie,props:G,shapeFlag:se,transition:fe,dirs:Se}=y;if($=y.el=o(y.type,B,G&&G.is,G),se&8?u($,y.children):se&16&&x(y.children,$,null,R,P,B&&ie!=="foreignObject",W,V),Se&&Ks(y,null,R,"created"),k($,y,y.scopeId,W,R),G){for(const We in G)We!=="value"&&!du(We)&&r($,We,null,G[We],B,y.children,R,P,H);"value"in G&&r($,"value",null,G.value),(N=G.onVnodeBeforeMount)&&ai(N,R,y)}Se&&Ks(y,null,R,"beforeMount");const Ye=(!P||P&&!P.pendingBranch)&&fe&&!fe.persisted;Ye&&fe.beforeEnter($),i($,E,S),((N=G&&G.onVnodeMounted)||Ye||Se)&&gn(()=>{N&&ai(N,R,y),Ye&&fe.enter($),Se&&Ks(y,null,R,"mounted")},P)},k=(y,E,S,R,P)=>{if(S&&d(y,S),R)for(let B=0;B<R.length;B++)d(y,R[B]);if(P){let B=P.subTree;if(E===B){const W=P.vnode;k(y,W,W.scopeId,W.slotScopeIds,P.parent)}}},x=(y,E,S,R,P,B,W,V,$=0)=>{for(let N=$;N<y.length;N++){const ie=y[N]=V?us(y[N]):ui(y[N]);m(null,ie,E,S,R,P,B,W,V)}},F=(y,E,S,R,P,B,W)=>{const V=E.el=y.el;let{patchFlag:$,dynamicChildren:N,dirs:ie}=E;$|=y.patchFlag&16;const G=y.props||Ze,se=E.props||Ze;let fe;S&&Gs(S,!1),(fe=se.onVnodeBeforeUpdate)&&ai(fe,S,E,y),ie&&Ks(E,y,S,"beforeUpdate"),S&&Gs(S,!0);const Se=P&&E.type!=="foreignObject";if(N?J(y.dynamicChildren,N,V,S,R,Se,B):W||Ne(y,E,V,null,S,R,Se,B,!1),$>0){if($&16)ee(V,E,G,se,S,R,P);else if($&2&&G.class!==se.class&&r(V,"class",null,se.class,P),$&4&&r(V,"style",G.style,se.style,P),$&8){const Ye=E.dynamicProps;for(let We=0;We<Ye.length;We++){const vt=Ye[We],zn=G[vt],Gr=se[vt];(Gr!==zn||vt==="value")&&r(V,vt,zn,Gr,P,y.children,S,R,H)}}$&1&&y.children!==E.children&&u(V,E.children)}else!W&&N==null&&ee(V,E,G,se,S,R,P);((fe=se.onVnodeUpdated)||ie)&&gn(()=>{fe&&ai(fe,S,E,y),ie&&Ks(E,y,S,"updated")},R)},J=(y,E,S,R,P,B,W)=>{for(let V=0;V<E.length;V++){const $=y[V],N=E[V],ie=$.el&&($.type===Te||!la($,N)||$.shapeFlag&70)?h($.el):S;m($,N,ie,null,R,P,B,W,!0)}},ee=(y,E,S,R,P,B,W)=>{if(S!==R){if(S!==Ze)for(const V in S)!du(V)&&!(V in R)&&r(y,V,S[V],null,W,E.children,P,B,H);for(const V in R){if(du(V))continue;const $=R[V],N=S[V];$!==N&&V!=="value"&&r(y,V,N,$,W,E.children,P,B,H)}"value"in R&&r(y,"value",S.value,R.value)}},ae=(y,E,S,R,P,B,W,V,$)=>{const N=E.el=y?y.el:a(""),ie=E.anchor=y?y.anchor:a("");let{patchFlag:G,dynamicChildren:se,slotScopeIds:fe}=E;fe&&(V=V?V.concat(fe):fe),y==null?(i(N,S,R),i(ie,S,R),x(E.children,S,ie,P,B,W,V,$)):G>0&&G&64&&se&&y.dynamicChildren?(J(y.dynamicChildren,se,S,P,B,W,V),(E.key!=null||P&&E===P.subTree)&&hE(y,E,!0)):Ne(y,E,S,ie,P,B,W,V,$)},Ge=(y,E,S,R,P,B,W,V,$)=>{E.slotScopeIds=V,y==null?E.shapeFlag&512?P.ctx.activate(E,S,R,W,$):ye(E,S,R,P,B,W,$):pe(y,E,$)},ye=(y,E,S,R,P,B,W)=>{const V=y.component=TA(y,R,P);if(Zw(y)&&(V.ctx.renderer=Le),IA(V),V.asyncDep){if(P&&P.registerDep(V,Ie),!y.el){const $=V.subTree=Z(Er);_(null,$,E,S)}return}Ie(V,y,E,S,P,B,W)},pe=(y,E,S)=>{const R=E.component=y.component;if(FS(y,E,S))if(R.asyncDep&&!R.asyncResolved){Ee(R,E,S);return}else R.next=E,DS(R.update),R.update();else E.el=y.el,R.vnode=E},Ie=(y,E,S,R,P,B,W)=>{const V=()=>{if(y.isMounted){let{next:ie,bu:G,u:se,parent:fe,vnode:Se}=y,Ye=ie,We;Gs(y,!1),ie?(ie.el=Se.el,Ee(y,ie,W)):ie=Se,G&&pu(G),(We=ie.props&&ie.props.onVnodeBeforeUpdate)&&ai(We,fe,ie,Se),Gs(y,!0);const vt=id(y),zn=y.subTree;y.subTree=vt,m(zn,vt,h(zn.el),j(zn),y,P,B),ie.el=vt.el,Ye===null&&US(y,vt.el),se&&gn(se,P),(We=ie.props&&ie.props.onVnodeUpdated)&&gn(()=>ai(We,fe,ie,Se),P)}else{let ie;const{el:G,props:se}=E,{bm:fe,m:Se,parent:Ye}=y,We=mu(E);if(Gs(y,!1),fe&&pu(fe),!We&&(ie=se&&se.onVnodeBeforeMount)&&ai(ie,Ye,E),Gs(y,!0),G&&xe){const vt=()=>{y.subTree=id(y),xe(G,y.subTree,y,P,null)};We?E.type.__asyncLoader().then(()=>!y.isUnmounted&&vt()):vt()}else{const vt=y.subTree=id(y);m(null,vt,S,R,y,P,B),E.el=vt.el}if(Se&&gn(Se,P),!We&&(ie=se&&se.onVnodeMounted)){const vt=E;gn(()=>ai(ie,Ye,vt),P)}(E.shapeFlag&256||Ye&&mu(Ye.vnode)&&Ye.vnode.shapeFlag&256)&&y.a&&gn(y.a,P),y.isMounted=!0,E=S=R=null}},$=y.effect=new qg(V,()=>em(N),y.scope),N=y.update=()=>$.run();N.id=y.uid,Gs(y,!0),N()},Ee=(y,E,S)=>{E.component=y;const R=y.vnode.props;y.vnode=E,y.next=null,aA(y,E.props,R,S),uA(y,E.children,S),Wo(),$y(),qo()},Ne=(y,E,S,R,P,B,W,V,$=!1)=>{const N=y&&y.children,ie=y?y.shapeFlag:0,G=E.children,{patchFlag:se,shapeFlag:fe}=E;if(se>0){if(se&128){fn(N,G,S,R,P,B,W,V,$);return}else if(se&256){jt(N,G,S,R,P,B,W,V,$);return}}fe&8?(ie&16&&H(N,P,B),G!==N&&u(S,G)):ie&16?fe&16?fn(N,G,S,R,P,B,W,V,$):H(N,P,B,!0):(ie&8&&u(S,""),fe&16&&x(G,S,R,P,B,W,V,$))},jt=(y,E,S,R,P,B,W,V,$)=>{y=y||co,E=E||co;const N=y.length,ie=E.length,G=Math.min(N,ie);let se;for(se=0;se<G;se++){const fe=E[se]=$?us(E[se]):ui(E[se]);m(y[se],fe,S,null,P,B,W,V,$)}N>ie?H(y,P,B,!0,!1,G):x(E,S,R,P,B,W,V,$,G)},fn=(y,E,S,R,P,B,W,V,$)=>{let N=0;const ie=E.length;let G=y.length-1,se=ie-1;for(;N<=G&&N<=se;){const fe=y[N],Se=E[N]=$?us(E[N]):ui(E[N]);if(la(fe,Se))m(fe,Se,S,null,P,B,W,V,$);else break;N++}for(;N<=G&&N<=se;){const fe=y[G],Se=E[se]=$?us(E[se]):ui(E[se]);if(la(fe,Se))m(fe,Se,S,null,P,B,W,V,$);else break;G--,se--}if(N>G){if(N<=se){const fe=se+1,Se=fe<ie?E[fe].el:R;for(;N<=se;)m(null,E[N]=$?us(E[N]):ui(E[N]),S,Se,P,B,W,V,$),N++}}else if(N>se)for(;N<=G;)mt(y[N],P,B,!0),N++;else{const fe=N,Se=N,Ye=new Map;for(N=Se;N<=se;N++){const En=E[N]=$?us(E[N]):ui(E[N]);En.key!=null&&Ye.set(En.key,N)}let We,vt=0;const zn=se-Se+1;let Gr=!1,Ay=0;const ca=new Array(zn);for(N=0;N<zn;N++)ca[N]=0;for(N=fe;N<=G;N++){const En=y[N];if(vt>=zn){mt(En,P,B,!0);continue}let oi;if(En.key!=null)oi=Ye.get(En.key);else for(We=Se;We<=se;We++)if(ca[We-Se]===0&&la(En,E[We])){oi=We;break}oi===void 0?mt(En,P,B,!0):(ca[oi-Se]=N+1,oi>=Ay?Ay=oi:Gr=!0,m(En,E[oi],S,null,P,B,W,V,$),vt++)}const Ry=Gr?gA(ca):co;for(We=Ry.length-1,N=zn-1;N>=0;N--){const En=Se+N,oi=E[En],Dy=En+1<ie?E[En+1].el:R;ca[N]===0?m(null,oi,S,Dy,P,B,W,V,$):Gr&&(We<0||N!==Ry[We]?Wt(oi,S,Dy,2):We--)}}},Wt=(y,E,S,R,P=null)=>{const{el:B,type:W,transition:V,children:$,shapeFlag:N}=y;if(N&6){Wt(y.component.subTree,E,S,R);return}if(N&128){y.suspense.move(E,S,R);return}if(N&64){W.move(y,E,S,Le);return}if(W===Te){i(B,E,S);for(let G=0;G<$.length;G++)Wt($[G],E,S,R);i(y.anchor,E,S);return}if(W===_u){w(y,E,S);return}if(R!==2&&N&1&&V)if(R===0)V.beforeEnter(B),i(B,E,S),gn(()=>V.enter(B),P);else{const{leave:G,delayLeave:se,afterLeave:fe}=V,Se=()=>i(B,E,S),Ye=()=>{G(B,()=>{Se(),fe&&fe()})};se?se(B,Se,Ye):Ye()}else i(B,E,S)},mt=(y,E,S,R=!1,P=!1)=>{const{type:B,props:W,ref:V,children:$,dynamicChildren:N,shapeFlag:ie,patchFlag:G,dirs:se}=y;if(V!=null&&ap(V,null,S,y,!0),ie&256){E.ctx.deactivate(y);return}const fe=ie&1&&se,Se=!mu(y);let Ye;if(Se&&(Ye=W&&W.onVnodeBeforeUnmount)&&ai(Ye,E,y),ie&6)D(y.component,S,R);else{if(ie&128){y.suspense.unmount(S,R);return}fe&&Ks(y,null,E,"beforeUnmount"),ie&64?y.type.remove(y,E,S,P,Le,R):N&&(B!==Te||G>0&&G&64)?H(N,E,S,!1,!0):(B===Te&&G&384||!P&&ie&16)&&H($,E,S),R&&Nn(y)}(Se&&(Ye=W&&W.onVnodeUnmounted)||fe)&&gn(()=>{Ye&&ai(Ye,E,y),fe&&Ks(y,null,E,"unmounted")},S)},Nn=y=>{const{type:E,el:S,anchor:R,transition:P}=y;if(E===Te){ri(S,R);return}if(E===_u){I(y);return}const B=()=>{s(S),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(y.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:V}=P,$=()=>W(S,B);V?V(y.el,B,$):$()}else B()},ri=(y,E)=>{let S;for(;y!==E;)S=f(y),s(y),y=S;s(E)},D=(y,E,S)=>{const{bum:R,scope:P,update:B,subTree:W,um:V}=y;R&&pu(R),P.stop(),B&&(B.active=!1,mt(W,y,E,S)),V&&gn(V,E),gn(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},H=(y,E,S,R=!1,P=!1,B=0)=>{for(let W=B;W<y.length;W++)mt(y[W],E,S,R,P)},j=y=>y.shapeFlag&6?j(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),te=(y,E,S)=>{y==null?E._vnode&&mt(E._vnode,null,null,!0):m(E._vnode||null,y,E,null,null,null,S),$y(),Yw(),E._vnode=y},Le={p:m,um:mt,m:Wt,r:Nn,mt:ye,mc:x,pc:Ne,pbc:J,n:j,o:t};let lt,xe;return e&&([lt,xe]=e(Le)),{render:te,hydrate:lt,createApp:fA(te,lt)}}function Gs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hE(t,e,n=!1){const i=t.children,s=e.children;if(oe(i)&&oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=us(s[r]),a.el=o.el),n||hE(o,a)),a.type===Qh&&(a.el=o.el)}}function gA(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const mA=t=>t.__isTeleport,Te=Symbol(void 0),Qh=Symbol(void 0),Er=Symbol(void 0),_u=Symbol(void 0),Pa=[];let Kn=null;function M(t=!1){Pa.push(Kn=t?null:[])}function _A(){Pa.pop(),Kn=Pa[Pa.length-1]||null}let oc=1;function Xy(t){oc+=t}function fE(t){return t.dynamicChildren=oc>0?Kn||co:null,_A(),oc>0&&Kn&&Kn.push(t),t}function U(t,e,n,i,s,r){return fE(A(t,e,n,i,s,r,!0))}function It(t,e,n,i,s){return fE(Z(t,e,n,i,s,!0))}function cp(t){return t?t.__v_isVNode===!0:!1}function la(t,e){return t.type===e.type&&t.key===e.key}const Jh="__vInternal",dE=({key:t})=>t??null,yu=({ref:t,ref_key:e,ref_for:n})=>t!=null?kt(t)||ht(t)||we(t)?{i:kn,r:t,k:e,f:!!n}:t:null;function A(t,e=null,n=null,i=0,s=null,r=t===Te?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dE(e),ref:e&&yu(e),scopeId:Yh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kn};return a?(am(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=kt(n)?8:16),oc>0&&!o&&Kn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Kn.push(c),c}const Z=yA;function yA(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===JS)&&(t=Er),cp(t)){const a=To(t,e,!0);return n&&am(a,n),oc>0&&!r&&Kn&&(a.shapeFlag&6?Kn[Kn.indexOf(t)]=a:Kn.push(a)),a.patchFlag|=-2,a}if(AA(t)&&(t=t.__vccOpts),e){e=vA(e);let{class:a,style:c}=e;a&&!kt(a)&&(e.class=Cn(a)),Qe(c)&&(Wh(c)&&!oe(c)&&(c=hn({},c)),e.style=Nr(c))}const o=kt(t)?1:VS(t)?128:mA(t)?64:Qe(t)?4:we(t)?2:0;return A(t,e,n,i,s,o,r,!0)}function vA(t){return t?Wh(t)||Jh in t?hn({},t):t:null}function To(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?bA(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dE(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(yu(e)):[s,yu(e)]:yu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&To(t.ssContent),ssFallback:t.ssFallback&&To(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ve(t=" ",e=0){return Z(Qh,null,t,e)}function be(t="",e=!1){return e?(M(),It(Er,null,t)):Z(Er,null,t)}function ui(t){return t==null||typeof t=="boolean"?Z(Er):oe(t)?Z(Te,null,t.slice()):typeof t=="object"?us(t):Z(Qh,null,String(t))}function us(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:To(t)}function am(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),am(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Jh in e)?e._ctx=kn:s===3&&kn&&(kn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:kn},n=32):(e=String(e),i&64?(n=16,e=[ve(e)]):n=8);t.children=e,t.shapeFlag|=n}function bA(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Cn([e.class,i.class]));else if(s==="style")e.style=Nr([e.style,i.style]);else if($h(s)){const r=e[s],o=i[s];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ai(t,e,n,i=null){Zn(t,e,7,[n,i])}const wA=uE();let EA=0;function TA(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wA,r={uid:EA++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oE(i,s),emitsOptions:Qw(i,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=PS.bind(null,r),t.ce&&t.ce(r),r}let _t=null;const Bc=()=>_t||kn,Io=t=>{_t=t,t.scope.on()},mr=()=>{_t&&_t.scope.off(),_t=null};function pE(t){return t.vnode.shapeFlag&4}let ac=!1;function IA(t,e=!1){ac=e;const{props:n,children:i}=t.vnode,s=pE(t);oA(t,n,s,e),lA(t,i);const r=s?xA(t,e):void 0;return ac=!1,r}function xA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Eo(new Proxy(t.ctx,eA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?kA(t):null;Io(t),Wo();const r=ws(i,t,0,[t.props,s]);if(qo(),mr(),Iw(r)){if(r.then(mr,mr),e)return r.then(o=>{Qy(t,o,e)}).catch(o=>{Kh(o,t,0)});t.asyncDep=r}else Qy(t,r,e)}else gE(t,e)}function Qy(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=jw(e)),gE(t,n)}let Jy;function gE(t,e,n){const i=t.type;if(!t.render){if(!e&&Jy&&!i.render){const s=i.template||rm(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=hn(hn({isCustomElement:r,delimiters:a},o),c);i.render=Jy(s,l)}}t.render=i.render||Jn}Io(t),Wo(),tA(t),qo(),mr()}function CA(t){return new Proxy(t.attrs,{get(e,n){return wn(t,"get","$attrs"),e[n]}})}function kA(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=CA(t))},slots:t.slots,emit:t.emit,expose:e}}function Zh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jw(Eo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ma)return Ma[n](t)},has(e,n){return n in e||n in Ma}}))}function SA(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function AA(t){return we(t)&&"__vccOpts"in t}const Ce=(t,e)=>SS(t,e,ac);function Ko(t,e,n){const i=arguments.length;return i===2?Qe(e)&&!oe(e)?cp(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&cp(n)&&(n=[n]),Z(t,e,n))}const mE=Symbol(""),RA=()=>bn(mE),_E="3.2.47",DA="http://www.w3.org/2000/svg",rr=typeof document<"u"?document:null,Zy=rr&&rr.createElement("template"),OA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?rr.createElementNS(DA,t):rr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Zy.innerHTML=i?`<svg>${t}</svg>`:t;const a=Zy.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function MA(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function PA(t,e,n){const i=t.style,s=kt(n);if(n&&!s){if(e&&!kt(e))for(const r in e)n[r]==null&&lp(i,r,"");for(const r in n)lp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const ev=/\s*!important$/;function lp(t,e,n){if(oe(n))n.forEach(i=>lp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=NA(t,e);ev.test(n)?t.setProperty(Lr(i),n.replace(ev,""),"important"):t[i]=n}}const tv=["Webkit","Moz","ms"],rd={};function NA(t,e){const n=rd[e];if(n)return n;let i=vi(e);if(i!=="filter"&&i in t)return rd[e]=i;i=Hh(i);for(let s=0;s<tv.length;s++){const r=tv[s]+i;if(r in t)return rd[e]=r}return e}const nv="http://www.w3.org/1999/xlink";function LA(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nv,e.slice(6,e.length)):t.setAttributeNS(nv,e,n);else{const r=Vk(e);n==null||r&&!Ew(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function FA(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ew(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function fs(t,e,n,i){t.addEventListener(e,n,i)}function UA(t,e,n,i){t.removeEventListener(e,n,i)}function VA(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=BA(e);if(i){const l=r[e]=HA(i,s);fs(t,a,l,c)}else o&&(UA(t,a,o,c),r[e]=void 0)}}const iv=/(?:Once|Passive|Capture)$/;function BA(t){let e;if(iv.test(t)){e={};let i;for(;i=t.match(iv);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let od=0;const $A=Promise.resolve(),zA=()=>od||($A.then(()=>od=0),od=Date.now());function HA(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Zn(jA(i,n.value),e,5,[i])};return n.value=t,n.attached=zA(),n}function jA(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const sv=/^on[a-z]/,WA=(t,e,n,i,s=!1,r,o,a,c)=>{e==="class"?MA(t,i,s):e==="style"?PA(t,n,i):$h(e)?$g(e)||VA(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qA(t,e,i,s))?FA(t,e,i,r,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),LA(t,e,i,s))};function qA(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&sv.test(e)&&we(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sv.test(e)&&kt(n)?!1:e in t}function yE(t){const e=Bc();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>hp(r,s))},i=()=>{const s=t(e.proxy);up(e.subTree,s),n(s)};$S(i),im(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),sm(()=>s.disconnect())})}function up(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{up(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)hp(t.el,e);else if(t.type===Te)t.children.forEach(n=>up(n,e));else if(t.type===_u){let{el:n,anchor:i}=t;for(;n&&(hp(n,e),n!==i);)n=n.nextSibling}}function hp(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>pu(e,n):e};function KA(t){t.target.composing=!0}function rv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=xo(s);const r=i||s.props&&s.props.type==="number";fs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Pu(a)),t._assign(a)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",KA),fs(t,"compositionend",rv),fs(t,"change",rv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=xo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Pu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},GA={deep:!0,created(t,e,n){t._assign=xo(n),fs(t,"change",()=>{const i=t._modelValue,s=cc(t),r=t.checked,o=t._assign;if(oe(i)){const a=Bg(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const l=[...i];l.splice(a,1),o(l)}}else if(jo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(vE(t,r))})},mounted:ov,beforeUpdate(t,e,n){t._assign=xo(n),ov(t,e,n)}};function ov(t,{value:e,oldValue:n},i){t._modelValue=e,oe(e)?t.checked=Bg(e,i.props.value)>-1:jo(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Uc(e,vE(t,!0)))}const YA={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=jo(e);fs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pu(cc(o)):cc(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=xo(i)},mounted(t,{value:e}){av(t,e)},beforeUpdate(t,e,n){t._assign=xo(n)},updated(t,{value:e}){av(t,e)}};function av(t,e){const n=t.multiple;if(!(n&&!oe(e)&&!jo(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=cc(r);if(n)oe(e)?r.selected=Bg(e,o)>-1:r.selected=e.has(o);else if(Uc(cc(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function cc(t){return"_value"in t?t._value:t.value}function vE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const XA=["ctrl","shift","alt","meta"],QA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XA.some(n=>t[`${n}Key`]&&!e.includes(n))},qe=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=QA[e[s]];if(r&&r(n,e))return}return t(n,...i)},JA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pi=(t,e)=>n=>{if(!("key"in n))return;const i=Lr(n.key);if(e.some(s=>s===i||JA[s]===i))return t(n)},ZA=hn({patchProp:WA},OA);let cv;function eR(){return cv||(cv=dA(ZA))}const tR=(...t)=>{const e=eR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=nR(i);if(!s)return;const r=e._component;!we(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nR(t){return kt(t)?document.querySelector(t):t}var iR=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let bE;const ef=t=>bE=t,wE=Symbol();function fp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Na;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Na||(Na={}));function sR(){const t=Sw(!0),e=t.run(()=>yt({}));let n=[],i=[];const s=Eo({install(r){ef(s),s._a=r,r.provide(wE,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!iR?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const EE=()=>{};function lv(t,e,n,i=EE){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&jg()&&Aw(s),s}function Yr(t,...e){t.slice().forEach(n=>{n(...e)})}function dp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];fp(s)&&fp(i)&&t.hasOwnProperty(n)&&!ht(i)&&!Bi(i)?t[n]=dp(s,i):t[n]=i}return t}const rR=Symbol();function oR(t){return!fp(t)||!t.hasOwnProperty(rR)}const{assign:ls}=Object;function aR(t){return!!(ht(t)&&t.effect)}function cR(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=xS(n.state.value[t]);return ls(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Eo(Ce(()=>{ef(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=TE(t,l,e,n,i,!0),c}function TE(t,e,n={},i,s,r){let o;const a=ls({actions:{}},n),c={deep:!0};let l,u,h=Eo([]),f=Eo([]),d;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),yt({});let m;function g(k){let x;l=u=!1,typeof k=="function"?(k(i.state.value[t]),x={type:Na.patchFunction,storeId:t,events:d}):(dp(i.state.value[t],k),x={type:Na.patchObject,payload:k,storeId:t,events:d});const F=m=Symbol();Zg().then(()=>{m===F&&(l=!0)}),u=!0,Yr(h,x,i.state.value[t])}const _=r?function(){const{state:x}=n,F=x?x():{};this.$patch(J=>{ls(J,F)})}:EE;function v(){o.stop(),h=[],f=[],i._s.delete(t)}function w(k,x){return function(){ef(i);const F=Array.from(arguments),J=[],ee=[];function ae(pe){J.push(pe)}function Ge(pe){ee.push(pe)}Yr(f,{args:F,name:k,store:b,after:ae,onError:Ge});let ye;try{ye=x.apply(this&&this.$id===t?this:b,F)}catch(pe){throw Yr(ee,pe),pe}return ye instanceof Promise?ye.then(pe=>(Yr(J,pe),pe)).catch(pe=>(Yr(ee,pe),Promise.reject(pe))):(Yr(J,ye),ye)}}const I={_p:i,$id:t,$onAction:lv.bind(null,f),$patch:g,$reset:_,$subscribe(k,x={}){const F=lv(h,k,x.detached,()=>J()),J=o.run(()=>Es(()=>i.state.value[t],ee=>{(x.flush==="sync"?u:l)&&k({storeId:t,type:Na.direct,events:d},ee)},ls({},c,x)));return F},$dispose:v},b=As(I);i._s.set(t,b);const C=i._e.run(()=>(o=Sw(),o.run(()=>e())));for(const k in C){const x=C[k];if(ht(x)&&!aR(x)||Bi(x))r||(p&&oR(x)&&(ht(x)?x.value=p[k]:dp(x,p[k])),i.state.value[t][k]=x);else if(typeof x=="function"){const F=w(k,x);C[k]=F,a.actions[k]=x}}return ls(b,C),ls(ke(b),C),Object.defineProperty(b,"$state",{get:()=>i.state.value[t],set:k=>{g(x=>{ls(x,k)})}}),i._p.forEach(k=>{ls(b,o.run(()=>k({store:b,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(b.$state,p),l=!0,u=!0,b}function cm(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=Bc();return a=a||l&&bn(wE,null),a&&ef(a),a=bE,a._s.has(i)||(r?TE(i,e,s,a):cR(i,s,a)),a._s.get(i)}return o.$id=i,o}function lR(t){{t=ke(t);const e={};for(const n in t){const i=t[n];(ht(i)||Bi(i))&&(e[n]=Ww(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const z=function(t,e){if(!t)throw Go(e)},Go=function(t){return new Error("Firebase Database ("+IE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new hR;const f=r<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const p=l<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CE=function(t){const e=xE(t);return tf.encodeByteArray(e,!0)},Vu=function(t){return CE(t).replace(/\./g,"")},Bu=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return kE(void 0,t)}function kE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dR(n)||(t[n]=kE(t[n],e[n]));return t}function dR(t){return t!=="__proto__"}/**
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
 */function pR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gR=()=>pR().__FIREBASE_DEFAULTS__,mR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bu(t[1]);return e&&JSON.parse(e)},lm=()=>{try{return gR()||mR()||_R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SE=t=>{var e,n;return(n=(e=lm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yR=t=>{const e=SE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},vR=()=>{var t;return(t=lm())===null||t===void 0?void 0:t.config},AE=t=>{var e;return(e=lm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function bR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vu(JSON.stringify(n)),Vu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function wR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ER(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DE(){return IE.NODE_ADMIN===!0}function OE(){try{return typeof indexedDB=="object"}catch{return!1}}function TR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="FirebaseError";class xi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=IR,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?xR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xi(s,a,i)}}function xR(t,e){return t.replace(CR,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const CR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return JSON.parse(t)}function Ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=uc(Bu(r[0])||""),n=uc(Bu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},kR=function(t){const e=ME(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SR=function(t){const e=ME(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Co(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(uv(r)&&uv(o)){if(!zu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function uv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function RR(t,e){const n=new DR(t,e);return n.subscribe.bind(n)}class DR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");OR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ad),s.error===void 0&&(s.error=ad),s.complete===void 0&&(s.complete=ad);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ad(){}function MR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,z(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nf=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class NR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new lc;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FR(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:LR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LR(t){return t===er?void 0:t}function FR(t){return t.instantiationMode==="EAGER"}/**
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
 */class UR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const VR={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},BR=Ue.INFO,$R={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},zR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=$R[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=BR,this._logHandler=zR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const HR=(t,e)=>e.some(n=>t instanceof n);let hv,fv;function jR(){return hv||(hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WR(){return fv||(fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PE=new WeakMap,gp=new WeakMap,NE=new WeakMap,cd=new WeakMap,hm=new WeakMap;function qR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ts(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PE.set(n,t)}).catch(()=>{}),hm.set(e,t),e}function KR(t){if(gp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GR(t){mp=t(mp)}function YR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ld(this),e,...n);return NE.set(i,e.sort?e.sort():[e]),Ts(i)}:WR().includes(t)?function(...e){return t.apply(ld(this),e),Ts(PE.get(this))}:function(...e){return Ts(t.apply(ld(this),e))}}function XR(t){return typeof t=="function"?YR(t):(t instanceof IDBTransaction&&KR(t),HR(t,jR())?new Proxy(t,mp):t)}function Ts(t){if(t instanceof IDBRequest)return qR(t);if(cd.has(t))return cd.get(t);const e=XR(t);return e!==t&&(cd.set(t,e),hm.set(e,t)),e}const ld=t=>hm.get(t);function QR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ts(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ts(o.result),c.oldVersion,c.newVersion,Ts(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const JR=["get","getKey","getAll","getAllKeys","count"],ZR=["put","add","delete","clear"],ud=new Map;function dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ZR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||JR.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ud.set(e,r),r}GR(t=>({...t,get:(e,n,i)=>dv(e,n)||t.get(e,n,i),has:(e,n)=>!!dv(e,n)||t.has(e,n)}));/**
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
 */class e3{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t3(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function t3(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",pv="0.9.8";/**
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
 */const Tr=new $c("@firebase/app"),n3="@firebase/app-compat",i3="@firebase/analytics-compat",s3="@firebase/analytics",r3="@firebase/app-check-compat",o3="@firebase/app-check",a3="@firebase/auth",c3="@firebase/auth-compat",l3="@firebase/database",u3="@firebase/database-compat",h3="@firebase/functions",f3="@firebase/functions-compat",d3="@firebase/installations",p3="@firebase/installations-compat",g3="@firebase/messaging",m3="@firebase/messaging-compat",_3="@firebase/performance",y3="@firebase/performance-compat",v3="@firebase/remote-config",b3="@firebase/remote-config-compat",w3="@firebase/storage",E3="@firebase/storage-compat",T3="@firebase/firestore",I3="@firebase/firestore-compat",x3="firebase",C3="9.20.0";/**
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
 */const yp="[DEFAULT]",k3={[_p]:"fire-core",[n3]:"fire-core-compat",[s3]:"fire-analytics",[i3]:"fire-analytics-compat",[o3]:"fire-app-check",[r3]:"fire-app-check-compat",[a3]:"fire-auth",[c3]:"fire-auth-compat",[l3]:"fire-rtdb",[u3]:"fire-rtdb-compat",[h3]:"fire-fn",[f3]:"fire-fn-compat",[d3]:"fire-iid",[p3]:"fire-iid-compat",[g3]:"fire-fcm",[m3]:"fire-fcm-compat",[_3]:"fire-perf",[y3]:"fire-perf-compat",[v3]:"fire-rc",[b3]:"fire-rc-compat",[w3]:"fire-gcs",[E3]:"fire-gcs-compat",[T3]:"fire-fst",[I3]:"fire-fst-compat","fire-js":"fire-js",[x3]:"fire-js-all"};/**
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
 */const Hu=new Map,vp=new Map;function S3(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(vp.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,t);for(const n of Hu.values())S3(n,t);return!0}function fm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const A3={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Is=new Yo("app","Firebase",A3);/**
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
 */class R3{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=C3;function LE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Is.create("bad-app-name",{appName:String(s)});if(n||(n=vR()),!n)throw Is.create("no-options");const r=Hu.get(s);if(r){if(zu(n,r.options)&&zu(i,r.config))return r;throw Is.create("duplicate-app",{appName:s})}const o=new UR(s);for(const c of vp.values())o.addComponent(c);const a=new R3(n,i,o);return Hu.set(s,a),a}function dm(t=yp){const e=Hu.get(t);if(!e&&t===yp)return LE();if(!e)throw Is.create("no-app",{appName:t});return e}function An(t,e,n){var i;let s=(i=k3[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}bi(new ni(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const D3="firebase-heartbeat-database",O3=1,hc="firebase-heartbeat-store";let hd=null;function FE(){return hd||(hd=QR(D3,O3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hc)}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),hd}async function M3(t){try{return(await FE()).transaction(hc).objectStore(hc).get(UE(t))}catch(e){if(e instanceof xi)Tr.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function gv(t,e){try{const i=(await FE()).transaction(hc,"readwrite");return await i.objectStore(hc).put(e,UE(t)),i.done}catch(n){if(n instanceof xi)Tr.warn(n.message);else{const i=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(i.message)}}}function UE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P3=1024,N3=30*24*60*60*1e3;class L3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U3(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=N3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mv(),{heartbeatsToSend:n,unsentEntries:i}=F3(this._heartbeatsCache.heartbeats),s=Vu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mv(){return new Date().toISOString().substring(0,10)}function F3(t,e=P3){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),_v(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_v(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class U3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OE()?TR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _v(t){return Vu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function V3(t){bi(new ni("platform-logger",e=>new e3(e),"PRIVATE")),bi(new ni("heartbeat",e=>new L3(e),"PRIVATE")),An(_p,pv,t),An(_p,pv,"esm2017"),An("fire-js","")}V3("");function pm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function VE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B3=VE,BE=new Yo("auth","Firebase",VE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new $c("@firebase/auth");function $3(t,...e){ju.logLevel<=Ue.WARN&&ju.warn(`Auth (${Bs}): ${t}`,...e)}function vu(t,...e){ju.logLevel<=Ue.ERROR&&ju.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,...e){throw gm(t,...e)}function mi(t,...e){return gm(t,...e)}function $E(t,e,n){const i=Object.assign(Object.assign({},B3()),{[e]:n});return new Yo("auth","Firebase",i).create(e,{appName:t.name})}function z3(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&wi(t,"argument-error"),$E(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return BE.create(t,...e)}function ue(t,e,...n){if(!t)throw gm(e,...n)}function Ni(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function ji(t,e){t||Ni(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H3(){return yv()==="http:"||yv()==="https:"}function yv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H3()||wR()||"connection"in navigator)?navigator.onLine:!0}function W3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ji(n>e,"Short delay should be less than long delay!"),this.isMobile=um()||RE()}get(){return j3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){ji(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3=new zc(3e4,6e4);function HE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hc(t,e,n,i,s={}){return jE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zE.fetch()(WE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function jE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},q3),e);try{const s=new Y3(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rl(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $E(t,u,l);wi(t,u)}}catch(s){if(s instanceof xi)throw s;wi(t,"network-request-failed",{message:String(s)})}}async function G3(t,e,n,i,s={}){const r=await Hc(t,e,n,i,s);return"mfaPendingCredential"in r&&wi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function WE(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?mm(t.config,s):`${t.config.apiScheme}://${s}`}class Y3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),K3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=mi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X3(t,e){return Hc(t,"POST","/v1/accounts:delete",e)}async function Q3(t,e){return Hc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J3(t,e=!1){const n=$t(t),i=await n.getIdToken(e),s=_m(i);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:La(fd(s.auth_time)),issuedAtTime:La(fd(s.iat)),expirationTime:La(fd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fd(t){return Number(t)*1e3}function _m(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bu(n);return s?JSON.parse(s):(vu("Failed to decode base64 JWT payload"),null)}catch(s){return vu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Z3(t){const e=_m(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof xi&&eD(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function eD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(t){var e;const n=t.auth,i=await t.getIdToken(),s=await fc(t,Q3(n,{idToken:i}));ue(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?sD(r.providerUserInfo):[],a=iD(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nD(t){const e=$t(t);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iD(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function sD(t){return t.map(e=>{var{providerId:n}=e,i=pm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rD(t,e){const n=await jE(t,{},async()=>{const i=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=WE(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await rD(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new dc;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dc,this.toJSON())}_performRefresh(){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fc(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J3(this,e)}reload(){return nD(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Wu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fc(this,X3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:I,isAnonymous:b,providerData:C,stsTokenManager:k}=n;ue(w&&k,e,"internal-error");const x=dc.fromJSON(this.name,k);ue(typeof w=="string",e,"internal-error"),rs(h,e.name),rs(f,e.name),ue(typeof I=="boolean",e,"internal-error"),ue(typeof b=="boolean",e,"internal-error"),rs(d,e.name),rs(p,e.name),rs(m,e.name),rs(g,e.name),rs(_,e.name),rs(v,e.name);const F=new _r({uid:w,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:x,createdAt:_,lastLoginAt:v});return C&&Array.isArray(C)&&(F.providerData=C.map(J=>Object.assign({},J))),g&&(F._redirectEventId=g),F}static async _fromIdTokenResponse(e,n,i=!1){const s=new dc;s.updateFromServerResponse(n);const r=new _r({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wu(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=new Map;function Li(t){ji(t instanceof Function,"Expected a class definition");let e=vv.get(t);return e?(ji(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vv.set(t,e),e)}/**
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
 */class KE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KE.type="NONE";const bv=KE;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=bu(this.userKey,s.apiKey,r),this.fullPersistenceKey=bu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ho(Li(bv),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Li(bv);const o=bu(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_r._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ho(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ho(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JE(e))return"Blackberry";if(ZE(e))return"Webos";if(ym(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(QE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function GE(t=rn()){return/firefox\//i.test(t)}function ym(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=rn()){return/crios\//i.test(t)}function XE(t=rn()){return/iemobile/i.test(t)}function QE(t=rn()){return/android/i.test(t)}function JE(t=rn()){return/blackberry/i.test(t)}function ZE(t=rn()){return/webos/i.test(t)}function sf(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oD(t=rn()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aD(){return ER()&&document.documentMode===10}function e2(t=rn()){return sf(t)||QE(t)||ZE(t)||JE(t)||/windows phone/i.test(t)||XE(t)}function cD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e=[]){let n;switch(t){case"Browser":n=wv(rn());break;case"Worker":n=`${wv(rn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${i}`}async function n2(t,e){return Hc(t,"GET","/v2/recaptchaConfig",HE(t,e))}function Ev(t){return t!==void 0&&t.enterprise!==void 0}class i2{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function s2(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=mi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",lD().appendChild(i)})}function uD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hD="https://www.google.com/recaptcha/enterprise.js?render=",fD="recaptcha-enterprise";class dD{constructor(e){this.type=fD,this.auth=jc(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{n2(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new i2(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Ev(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Ev(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}s2(hD+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class pD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tv(this),this.idTokenSubscription=new Tv(this),this.beforeStateQueue=new pD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Li(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=W3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$t(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}async initializeRecaptchaConfig(){const e=await n2(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new i2(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new dD(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Li(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jc(t){return $t(t)}class Tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=RR(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t,e){const n=fm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(zu(r,e??{}))return s;wi(s,"already-initialized")}return n.initialize({options:e})}function _D(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Li);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yD(t,e,n){const i=jc(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=r2(e),{host:o,port:a}=vD(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bD()}function r2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vD(t){const e=r2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Iv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Iv(o)}}}function Iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ni("not implemented")}_getIdTokenResponse(e){return Ni("not implemented")}_linkToIdToken(e,n){return Ni("not implemented")}_getReauthenticationResolver(e){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return G3(t,"POST","/v1/accounts:signInWithIdp",HE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="http://localhost";class Ir extends o2{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=pm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ir(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,fo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:wD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wc extends vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Wc{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";ds.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Wc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Wc{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ps.credential(e.oauthAccessToken)}catch{return null}}}ps.GITHUB_SIGN_IN_METHOD="github.com";ps.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Wc{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return gs.credential(n,i)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await _r._fromIdTokenResponse(e,i,s),o=xv(i);return new ko({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=xv(i);return new ko({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends xi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new qu(e,n,i,s)}}function a2(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,r,e,i):r})}async function ED(t,e,n=!1){const i=await fc(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ko._forOperation(t,"link",i)}/**
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
 */async function TD(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await fc(t,a2(i,s,e,t),n);ue(r.idToken,i,"internal-error");const o=_m(r.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),ko._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(t,e,n=!1){const i="signIn",s=await a2(t,i,e),r=await ko._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function xD(t,e,n,i){return $t(t).onIdTokenChanged(e,n,i)}function CD(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const Ku="__sak";/**
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
 */class c2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(){const t=rn();return ym(t)||sf(t)}const SD=1e3,AD=10;class l2 extends c2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kD()&&cD(),this.fallbackToPolling=e2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);aD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AD):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},SD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l2.type="LOCAL";const RD=l2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2 extends c2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u2.type="SESSION";const h2=u2;/**
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
 */function DD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new rf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await DD(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=bm("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function MD(t){_i().location.href=t}/**
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
 */function f2(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function PD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ND(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LD(){return f2()?self:null}/**
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
 */const d2="firebaseLocalStorageDb",FD=1,Gu="firebaseLocalStorage",p2="fbase_key";class qc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function of(t,e){return t.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function UD(){const t=indexedDB.deleteDatabase(d2);return new qc(t).toPromise()}function wp(){const t=indexedDB.open(d2,FD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Gu,{keyPath:p2})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Gu)?e(i):(i.close(),await UD(),e(await wp()))})})}async function Cv(t,e,n){const i=of(t,!0).put({[p2]:e,value:n});return new qc(i).toPromise()}async function VD(t,e){const n=of(t,!1).get(e),i=await new qc(n).toPromise();return i===void 0?null:i.value}function kv(t,e){const n=of(t,!0).delete(e);return new qc(n).toPromise()}const BD=800,$D=3;class g2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>$D)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rf._getInstance(LD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PD(),!this.activeServiceWorker)return;this.sender=new OD(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ND()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await Cv(e,Ku,"1"),await kv(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Cv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>VD(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=of(s,!1).getAll();return new qc(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g2.type="LOCAL";const zD=g2;new zc(3e4,6e4);/**
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
 */function m2(t,e){return e?Li(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wm extends o2{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HD(t){return ID(t.auth,new wm(t),t.bypassAuthState)}function jD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),TD(n,new wm(t),t.bypassAuthState)}async function WD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ED(n,new wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HD;case"linkViaPopup":case"linkViaRedirect":return WD;case"reauthViaPopup":case"reauthViaRedirect":return jD;default:wi(this.auth,"internal-error")}}resolve(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=new zc(2e3,1e4);async function KD(t,e,n){const i=jc(t);z3(t,e,vm);const s=m2(i,n);return new ar(i,"signInViaPopup",e,s).executeNotNull()}class ar extends _2{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){ji(this.filter.length===1,"Popup operations only handle one event");const e=bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qD.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="pendingRedirect",wu=new Map;class YD extends _2{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const i=await XD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XD(t,e){const n=ZD(e),i=JD(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function QD(t,e){wu.set(t._key(),e)}function JD(t){return Li(t._redirectPersistence)}function ZD(t){return bu(GD,t.config.apiKey,t.name)}async function eO(t,e,n=!1){const i=jc(t),s=m2(i,e),o=await new YD(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=10*60*1e3;class nO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!y2(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sv(e))}saveEventToCache(e){this.cachedEventUids.add(Sv(e)),this.lastProcessedEventTime=Date.now()}}function Sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t,e={}){return Hc(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oO=/^https?/;async function aO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sO(t);for(const n of e)try{if(cO(n))return}catch{}wi(t,"unauthorized-domain")}function cO(t){const e=bp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!oO.test(n))return!1;if(rO.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const lO=new zc(3e4,6e4);function Av(){const t=_i().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uO(t){return new Promise((e,n)=>{var i,s,r;function o(){Av(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Av(),n(mi(t,"network-request-failed"))},timeout:lO.get()})}if(!((s=(i=_i().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=_i().gapi)===null||r===void 0)&&r.load)o();else{const a=uD("iframefcb");return _i()[a]=()=>{gapi.load?o():n(mi(t,"network-request-failed"))},s2(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function hO(t){return Eu=Eu||uO(t),Eu}/**
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
 */const fO=new zc(5e3,15e3),dO="__/auth/iframe",pO="emulator/auth/iframe",gO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _O(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,pO):`https://${t.config.authDomain}/${dO}`,i={apiKey:e.apiKey,appName:t.name,v:Bs},s=mO.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Xo(i).slice(1)}`}async function yO(t){const e=await hO(t),n=_i().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:_O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=mi(t,"network-request-failed"),a=_i().setTimeout(()=>{r(o)},fO.get());function c(){_i().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const vO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bO=500,wO=600,EO="_blank",TO="http://localhost";class Rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IO(t,e,n,i=bO,s=wO){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vO),{width:i.toString(),height:s.toString(),top:r,left:o}),l=rn().toLowerCase();n&&(a=YE(l)?EO:n),GE(l)&&(e=e||TO,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(oD(l)&&a!=="_self")return xO(e||"",a),new Rv(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new Rv(h)}function xO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const CO="__/auth/handler",kO="emulator/auth/handler",SO=encodeURIComponent("fac");async function Dv(t,e,n,i,s,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Bs,eventId:s};if(e instanceof vm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Wc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${SO}=${encodeURIComponent(c)}`:"";return`${AO(t)}?${Xo(a).slice(1)}${l}`}function AO({config:t}){return t.emulator?mm(t,kO):`https://${t.authDomain}/${CO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="webStorageSupport";class RO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h2,this._completeRedirectFn=eO,this._overrideRedirectResult=QD}async _openPopup(e,n,i,s){var r;ji((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Dv(e,n,i,bp(),s);return IO(e,o,bm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Dv(e,n,i,bp(),s);return MD(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ji(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await yO(e),i=new nO(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[dd];o!==void 0&&n(!!o),wi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e2()||ym()||sf()}}const DO=RO;var Ov="@firebase/auth",Mv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PO(t){bi(new ni("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ue(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t2(t)},l=new gD(i,s,r,c);return _D(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bi(new ni("auth-internal",e=>{const n=jc(e.getProvider("auth").getImmediate());return(i=>new OO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Ov,Mv,MO(t)),An(Ov,Mv,"esm2017")}/**
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
 */const NO=5*60,LO=AE("authIdTokenMaxAge")||NO;let Pv=null;const FO=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>LO)return;const s=n==null?void 0:n.token;Pv!==s&&(Pv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UO(t=dm()){const e=fm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mD(t,{popupRedirectResolver:DO,persistence:[zD,RD,h2]}),i=AE("authTokenSyncURL");if(i){const r=FO(i);CD(n,r,()=>r(n.currentUser)),xD(n,o=>r(o))}const s=SE("auth");return s&&yD(n,`http://${s}`),n}PO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new Map,BO={activated:!1,tokenObservers:[]};function Ei(t){return VO.get(t)||Object.assign({},BO)}const Nv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new lc,await zO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new lc,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function zO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Yu=new Yo("appCheck","AppCheck",HO);function jO(t){if(!Ei(t).activated)throw Yu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="firebase-app-check-database",qO=1,Ep="firebase-app-check-store";let Dl=null;function KO(){return Dl||(Dl=new Promise((t,e)=>{try{const n=indexedDB.open(WO,qO);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Yu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ep,{keyPath:"compositeKey"})}}}catch(n){e(Yu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Dl)}function GO(t,e){return YO(XO(t),e)}async function YO(t,e){const i=(await KO()).transaction(Ep,"readwrite"),r=i.objectStore(Ep).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var l;a(Yu.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function XO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new $c("@firebase/app-check");function Lv(t,e){return OE()?GO(t,e).catch(n=>{Tp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO={error:"UNKNOWN_ERROR"};function JO(t){return tf.encodeString(JSON.stringify(t),!1)}async function Ip(t,e=!1){const n=t.app;jO(n);const i=Ei(n);let s=i.token,r;if(s&&!Ea(s)&&(i.token=void 0,s=void 0),!s){const c=await i.cachedTokenPromise;c&&(Ea(c)?s=c:await Lv(n,void 0))}if(!e&&s&&Ea(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ei(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Tp.warn(c.message):Tp.error(c),r=c}let a;return s?r?Ea(s)?a={token:s.token,internalError:r}:a=Uv(r):(a={token:s.token},i.token=s,await Lv(n,s)):a=Uv(r),o&&t4(n,a),a}function ZO(t,e,n,i){const{app:s}=t,r=Ei(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ea(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Fv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Fv(t))}function v2(t,e){const n=Ei(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Fv(t){const{app:e}=t,n=Ei(e);let i=n.tokenRefresher;i||(i=e4(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function e4(t){const{app:e}=t;return new $O(async()=>{const n=Ei(e);let i;if(n.token?i=await Ip(t,!0):i=await Ip(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ei(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Nv.RETRIAL_MIN_WAIT,Nv.RETRIAL_MAX_WAIT)}function t4(t,e){const n=Ei(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ea(t){return t.expireTimeMillis-Date.now()>0}function Uv(t){return{token:JO(QO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ei(this.app);for(const n of e)v2(this.app,n.next);return Promise.resolve()}}function i4(t,e){return new n4(t,e)}function s4(t){return{getToken:e=>Ip(t,e),addTokenListener:e=>ZO(t,"INTERNAL",e),removeTokenListener:e=>v2(t.app,e)}}const r4="@firebase/app-check",o4="0.6.5",a4="app-check",Vv="app-check-internal";function c4(){bi(new ni(a4,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return i4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Vv).initialize()})),bi(new ni(Vv,t=>{const e=t.getProvider("app-check").getImmediate();return s4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),An(r4,o4)}c4();var l4="firebase",u4="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(l4,u4,"app");const b2=Symbol("firebaseApp");function w2(t){return Bc()&&bn(b2,null)||dm(t)}const di=()=>{};function Em(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function h4(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Ur(t){return!!t&&typeof t=="object"}const f4=Object.prototype;function d4(t){return Ur(t)&&Object.getPrototypeOf(t)===f4}function Tm(t){return Ur(t)&&t.type==="document"}function E2(t){return Ur(t)&&t.type==="collection"}function p4(t){return Tm(t)||E2(t)}function g4(t){return Ur(t)&&t.type==="query"}function m4(t){return Ur(t)&&"ref"in t}function _4(t){return Ur(t)&&typeof t.bucket=="string"}function y4(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function v4(){return!!(Bc()&&bn(mE,null))}const Bv="@firebase/database",$v="0.14.4";/**
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
 */let T2="";function b4(t){T2=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:uc(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w4(e)}}catch{}return new E4},cr=I2("localStorage"),xp=I2("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new $c("@firebase/database"),T4=function(){let t=1;return function(){return t++}}(),x2=function(t){const e=PR(t),n=new AR;n.update(e);const i=n.digest();return tf.encodeByteArray(i)},Kc=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Kc.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let yr=null,zv=!0;const I4=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(po.logLevel=Ue.VERBOSE,yr=po.log.bind(po),e&&xp.set("logging_enabled",!0)):typeof t=="function"?yr=t:(yr=null,xp.remove("logging_enabled"))},Yt=function(...t){if(zv===!0&&(zv=!1,yr===null&&xp.get("logging_enabled")===!0&&I4(!0)),yr){const e=Kc.apply(null,t);yr(e)}},Gc=function(t){return function(...e){Yt(t,...e)}},Cp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kc(...t);po.error(e)},xr=function(...t){const e=`FIREBASE FATAL ERROR: ${Kc(...t)}`;throw po.error(e),new Error(e)},Rn=function(...t){const e="FIREBASE WARNING: "+Kc(...t);po.warn(e)},x4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},C2=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},C4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},So="[MIN_NAME]",Cr="[MAX_NAME]",Qo=function(t,e){if(t===e)return 0;if(t===So||e===Cr)return-1;if(e===So||t===Cr)return 1;{const n=Hv(t),i=Hv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},k4=function(t,e){return t===e?0:t<e?-1:1},ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ut(e))},Im=function(t){if(typeof t!="object"||t===null)return Ut(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ut(e[i]),n+=":",n+=Im(t[e[i]]);return n+="}",n},k2=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function $n(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const S2=function(t){z(!C2(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},S4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},R4=new RegExp("^-?(0*)\\d{1,10}$"),D4=-2147483648,O4=2147483647,Hv=function(t){if(R4.test(t)){const e=Number(t);if(e>=D4&&e<=O4)return e}return null},Yc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Rn("Exception was thrown by user callback.",n),e},Math.floor(0))}},M4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Rn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rn(e)}}class kp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="5",A2="v",R2="s",D2="r",O2="f",M2=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P2="ls",N2="p",Sp="ac",L2="websocket",F2="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function F4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function U2(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let i;if(e===L2)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===F2)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);F4(t)&&(n.ns=t.namespace);const s=[];return $n(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(){this.counters_={}}incrementCounter(e,n=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={},gd={};function Cm(t){const e=t.toString();return pd[e]||(pd[e]=new U4),pd[e]}function V4(t,e){const n=t.toString();return gd[n]||(gd[n]=e()),gd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yc(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="start",$4="close",z4="pLPCommand",H4="pRTLPCB",V2="id",B2="pw",$2="ser",j4="cb",W4="seg",q4="ts",K4="d",G4="dframe",z2=1870,H2=30,Y4=z2-H2,X4=25e3,Q4=3e4;class io{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gc(e),this.stats_=Cm(n),this.urlFn=c=>(this.appCheckToken&&(c[Sp]=this.appCheckToken),U2(n,F2,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new B4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Q4)),C4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new km((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jv)this.id=a,this.password=c;else if(o===$4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[jv]="t",i[$2]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[j4]=this.scriptTagHolder.uniqueCallbackIdentifier),i[A2]=xm,this.transportSessionId&&(i[R2]=this.transportSessionId),this.lastSessionId&&(i[P2]=this.lastSessionId),this.applicationId&&(i[N2]=this.applicationId),this.appCheckToken&&(i[Sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&M2.test(location.hostname)&&(i[D2]=O2);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){io.forceAllow_=!0}static forceDisallow(){io.forceDisallow_=!0}static isAvailable(){return io.forceAllow_?!0:!io.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S4()&&!A4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=CE(n),s=k2(i,Y4);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[G4]="t",i[V2]=e,i[B2]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class km{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T4(),window[z4+this.uniqueCallbackIdentifier]=e,window[H4+this.uniqueCallbackIdentifier]=n,this.myIFrame=km.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Yt("frame writing exception"),a.stack&&Yt(a.stack),Yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Yt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[V2]=this.myID,e[B2]=this.myPW,e[$2]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+H2+i.length<=z2;){const o=this.pendingSegs.shift();i=i+"&"+W4+s+"="+o.seg+"&"+q4+s+"="+o.ts+"&"+K4+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(X4)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=16384,Z4=45e3;let Xu=null;typeof MozWebSocket<"u"?Xu=MozWebSocket:typeof WebSocket<"u"&&(Xu=WebSocket);class Wn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gc(this.connId),this.stats_=Cm(n),this.connURL=Wn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[A2]=xm,typeof location<"u"&&location.hostname&&M2.test(location.hostname)&&(o[D2]=O2),n&&(o[R2]=n),i&&(o[P2]=i),s&&(o[Sp]=s),r&&(o[N2]=r),U2(e,L2,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cr.set("previous_websocket_failure",!0);try{let i;DE(),this.mySock=new Xu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Xu!==null&&!Wn.forceDisallow_}static previouslyFailed(){return cr.isInMemoryStorage||cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=uc(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=k2(n,J4);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wn.responsesRequiredToBeHealthy=2;Wn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[io,Wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Wn&&Wn.isAvailable();let i=n&&!Wn.previouslyFailed();if(e.webSocketOnly&&(n||Rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Wn];else{const s=this.transports_=[];for(const r of pc.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);pc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=6e4,tM=5e3,nM=10*1024,iM=100*1024,md="t",Wv="d",sM="s",qv="r",rM="e",Kv="o",Gv="a",Yv="n",Xv="p",oM="h";class aM{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gc("c:"+this.id+":"),this.transportManager_=new pc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Fa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(md in e){const n=e[md];n===Gv?this.upgradeIfSecondaryHealthy_():n===qv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ua("t",e),i=ua("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ua("t",e),i=ua("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ua(md,e);if(Wv in e){const i=e[Wv];if(n===oM){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Yv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sM?this.onConnectionShutdown_(i):n===qv?this.onReset_(i):n===rM?Cp("Server Error: "+i):n===Kv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xm!==i&&Rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Fa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends W2{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!um()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qu}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=32,Jv=768;class at{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ke(){return new at("")}function Me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ds(t){return t.pieces_.length-t.pieceNum_}function et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new at(t.pieces_,e)}function q2(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function K2(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function G2(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new at(e,0)}function Pt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof at)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new at(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Fn(t,e){const n=Me(t),i=Me(e);if(n===null)return e;if(n===i)return Fn(et(t),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Y2(t,e){if(Ds(t)!==Ds(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Yn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ds(t)>Ds(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class lM{constructor(e,n){this.errorPrefix_=n,this.parts_=K2(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nf(this.parts_[i]);X2(this)}}function uM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nf(e),X2(t)}function hM(t){const e=t.parts_.pop();t.byteLength_-=nf(e),t.parts_.length>0&&(t.byteLength_-=1)}function X2(t){if(t.byteLength_>Jv)throw new Error(t.errorPrefix_+"has a key path longer than "+Jv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qv+") or object contains a cycle "+tr(t))}function tr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends W2{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Sm}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=1e3,fM=60*5*1e3,Zv=30*1e3,dM=1.3,pM=3e4,gM="server_kill",e0=3;class $i extends j2{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=$i.nextPersistentConnectionId_++,this.log_=Gc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ha,this.maxReconnectDelay_=fM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!DE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ut(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new lc,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;$i.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ts(e,"w")){const i=Co(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cp("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pM&&(this.reconnectDelay_=ha),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$i.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Yt("getToken() completed but was canceled"):(Yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new aM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Rn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(gM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Rn(h),c())}}}interrupt(e){Yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pp(this.interruptReasons_)&&(this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Im(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new at(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e0&&(this.reconnectDelay_=Zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+T2.replace(/\./g,"-")]=1,um()?e["framework.cordova"]=1:RE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qu.getInstance().currentlyOnline();return pp(this.interruptReasons_)&&e}}$i.nextPersistentConnectionId_=0;$i.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ol;class Q2 extends af{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return Qo(e.name,n.name)}isDefinedOn(e){throw Go("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,Ol)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Ol)}toString(){return".key"}}const go=new Q2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Mt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Mt.RED,this.left=s??yn.EMPTY_NODE,this.right=r??yn.EMPTY_NODE}copy(e,n,i,s,r){return new Mt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return yn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return yn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Mt.RED=!0;Mt.BLACK=!1;class mM{copy(e,n,i,s,r){return this}insert(e,n,i){return new Mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yn{constructor(e,n=yn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Mt.BLACK,null,null))}remove(e){return new yn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ml(this.root_,null,this.comparator_,!0,e)}}yn.EMPTY_NODE=new mM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t,e){return Qo(t.name,e.name)}function Am(t,e){return Qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;function yM(t){Ap=t}const J2=function(t){return typeof t=="number"?"number:"+S2(t):"string:"+t},Z2=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else z(t===Ap||t.isEmpty(),"priority of unexpected type.");z(t===Ap||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0;class Dt{constructor(e,n=Dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Z2(this.priorityNode_)}static set __childrenNodeConstructor(e){t0=e}static get __childrenNodeConstructor(){return t0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:Me(e)===".priority"?this.priorityNode_:Dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Me(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(z(i!==".priority"||Ds(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+J2(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=S2(this.value_):e+=this.value_,this.lazyHash_=x2(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Dt.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Dt.VALUE_TYPE_ORDER.indexOf(n),r=Dt.VALUE_TYPE_ORDER.indexOf(i);return z(s>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT,tT;function vM(t){eT=t}function bM(t){tT=t}class wM extends af{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Qo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,new Dt("[PRIORITY-POST]",tT))}makePost(e,n){const i=eT(e);return new Pe(n,new Dt("[PRIORITY-POST]",i))}toString(){return".priority"}}const en=new wM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=Math.log(2);class TM{constructor(e){const n=r=>parseInt(Math.log(r)/EM,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ju=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Mt(f,h.node,Mt.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=s(c,d),m=s(d+1,l);return h=t[d],f=n?n(h):h,new Mt(f,h.node,Mt.BLACK,p,m)}},r=function(c){let l=null,u=null,h=t.length;const f=function(p,m){const g=h-p,_=h;h-=p;const v=s(g+1,_),w=t[g],I=n?n(w):w;d(new Mt(I,w.node,m,null,v))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),g=Math.pow(2,c.count-(p+1));m?f(g,Mt.BLACK):(f(g,Mt.BLACK),f(g,Mt.RED))}return u},o=new TM(t.length),a=r(o);return new yn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;const Xr={};class Fi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Xr&&en,"ChildrenNode.ts has not been loaded"),_d=_d||new Fi({".priority":Xr},{".priority":en}),_d}get(e){const n=Co(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yn?n:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,n){z(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Pe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ju(i,e.getCompare()):a=Xr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fi(u,l)}addToIndexes(e,n){const i=$u(this.indexes_,(s,r)=>{const o=Co(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),s===Xr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Pe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ju(a,o.getCompare())}else return Xr;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new Pe(e.name,a))),c.insert(e,e.node)}});return new Fi(i,this.indexSet_)}removeFromIndexes(e,n){const i=$u(this.indexes_,s=>{if(s===Xr)return s;{const r=n.get(e.name);return r?s.remove(new Pe(e.name,r)):s}});return new Fi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class ze{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Z2(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fa||(fa=new ze(new yn(Am),null,Fi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fa}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fa:n}}getChild(e){const n=Me(e);return n===null?this:this.getImmediateChild(n).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Pe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?fa:this.priorityNode_;return new ze(s,o,r)}}updateChild(e,n){const i=Me(e);if(i===null)return n;{z(Me(e)!==".priority"||Ds(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(et(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(en,(o,a)=>{n[o]=a.val(e),i++,r&&ze.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+J2(this.getPriority().val())+":"),this.forEachChild(en,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":x2(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xc?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(en),s=n.getIterator(en);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IM extends ze{constructor(){super(new yn(Am),ze.EMPTY_NODE,Fi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const Xc=new IM;Object.defineProperties(Pe,{MIN:{value:new Pe(So,ze.EMPTY_NODE)},MAX:{value:new Pe(Cr,Xc)}});Q2.__EMPTY_NODE=ze.EMPTY_NODE;Dt.__childrenNodeConstructor=ze;yM(Xc);bM(Xc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=!0;function Xt(t,e=null){if(t===null)return ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Dt(n,Xt(e))}if(!(t instanceof Array)&&xM){const n=[];let i=!1;if($n(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Xt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new Pe(o,c)))}}),n.length===0)return ze.EMPTY_NODE;const r=Ju(n,_M,o=>o.name,Am);if(i){const o=Ju(n,en.getCompare());return new ze(r,Xt(e),new Fi({".priority":o},{".priority":en}))}else return new ze(r,Xt(e),Fi.Default)}else{let n=ze.EMPTY_NODE;return $n(t,(i,s)=>{if(ts(t,i)&&i.substring(0,1)!=="."){const r=Xt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Xt(e))}}vM(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM extends af{constructor(e){super(),this.indexPath_=e,z(!Re(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Qo(e.name,n.name):r}makePost(e,n){const i=Xt(e),s=ze.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(n,s)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,Xc);return new Pe(Cr,e)}toString(){return K2(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM extends af{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Qo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const i=Xt(e);return new Pe(n,i)}toString(){return".value"}}const SM=new kM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t){return{type:"value",snapshotNode:t}}function RM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function DM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function n0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=en}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:So}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===en}copy(){const e=new Rm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===en?n="$priority":t.index_===SM?n="$value":t.index_===go?n="$key":(z(t.index_ instanceof CM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ut(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ut(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ut(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function s0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==en&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends j2{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Gc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zu.getListenId_(e,i),a={};this.listens_[o]=a;const c=i0(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),Co(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",s(f,null)}})}unlisten(e,n){const i=Zu.getListenId_(e,n);delete this.listens_[i]}get(e){const n=i0(e._queryParams),i=e._path.toString(),s=new lc;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=uc(a.responseText)}catch{Rn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Rn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return{value:null,children:new Map}}function nT(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Me(e);t.children.has(i)||t.children.set(i,eh());const s=t.children.get(i);e=et(e),nT(s,e,n)}}function Rp(t,e,n){t.value!==null?n(e,t.value):PM(t,(i,s)=>{const r=new at(e.toString()+"/"+i);Rp(s,r,n)})}function PM(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$n(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=10*1e3,LM=30*1e3,FM=5*60*1e3;class UM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NM(e);const i=r0+(LM-r0)*Math.random();Fa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;$n(e,(s,r)=>{r>0&&ts(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Fa(this.reportStats_.bind(this),Math.floor(Math.random()*2*FM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pi||(pi={}));function iT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pi.ACK_USER_WRITE,this.source=iT()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new at(e));return new th(Ke(),n,this.revert)}}else return z(Me(this.path)===e,"operationForChild called for unrelated child."),new th(et(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pi.OVERWRITE}operationForChild(e){return Re(this.path)?new kr(this.source,Ke(),this.snap.getImmediateChild(e)):new kr(this.source,et(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pi.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new at(e));return n.isEmpty()?null:n.value?new kr(this.source,Ke(),n.value):new gc(this.source,Ke(),n)}else return z(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gc(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function VM(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(OM(o.childName,o.snapshotNode))}),da(t,s,"child_removed",e,i,n),da(t,s,"child_added",e,i,n),da(t,s,"child_moved",r,i,n),da(t,s,"child_changed",e,i,n),da(t,s,"value",e,i,n),s}function da(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>$M(t,a,c)),o.forEach(a=>{const c=BM(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function BM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $M(t,e,n){if(e.childName==null||n.childName==null)throw Go("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),s=new Pe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){return{eventCache:t,serverCache:e}}function Ua(t,e,n,i){return oT(new Dm(e,n,i),t.serverCache)}function aT(t,e,n,i){return oT(t.eventCache,new Dm(e,n,i))}function Dp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;const zM=()=>(yd||(yd=new yn(k4)),yd);class Je{constructor(e,n=zM()){this.value=e,this.children=n}static fromObject(e){let n=new Je(null);return $n(e,(i,s)=>{n=n.set(new at(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Re(e))return null;{const i=Me(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(et(e),n);return r!=null?{path:Pt(new at(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=Me(e),i=this.children.get(n);return i!==null?i.subtree(et(e)):new Je(null)}}set(e,n){if(Re(e))return new Je(n,this.children);{const i=Me(e),r=(this.children.get(i)||new Je(null)).set(et(e),n),o=this.children.insert(i,r);return new Je(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Je(null):new Je(null,this.children);{const n=Me(e),i=this.children.get(n);if(i){const s=i.remove(et(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Je(null):new Je(this.value,r)}else return this}}get(e){if(Re(e))return this.value;{const n=Me(e),i=this.children.get(n);return i?i.get(et(e)):null}}setTree(e,n){if(Re(e))return n;{const i=Me(e),r=(this.children.get(i)||new Je(null)).setTree(et(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Je(this.value,o)}}fold(e){return this.fold_(Ke(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Pt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ke(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Re(e))return null;{const r=Me(e),o=this.children.get(r);return o?o.findOnPath_(et(e),Pt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ke(),n)}foreachOnPath_(e,n,i){if(Re(e))return this;{this.value&&i(n,this.value);const s=Me(e),r=this.children.get(s);return r?r.foreachOnPath_(et(e),Pt(n,s),i):new Je(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Pt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.writeTree_=e}static empty(){return new ei(new Je(null))}}function Va(t,e,n){if(Re(e))return new ei(new Je(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Fn(s,e);return r=r.updateChild(o,n),new ei(t.writeTree_.set(s,r))}else{const s=new Je(n),r=t.writeTree_.setTree(e,s);return new ei(r)}}}function o0(t,e,n){let i=t;return $n(n,(s,r)=>{i=Va(i,Pt(e,s),r)}),i}function a0(t,e){if(Re(e))return ei.empty();{const n=t.writeTree_.setTree(e,new Je(null));return new ei(n)}}function Op(t,e){return Vr(t,e)!=null}function Vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fn(n.path,e)):null}function c0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(en,(i,s)=>{e.push(new Pe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Pe(i,s.value))}),e}function xs(t,e){if(Re(e))return t;{const n=Vr(t,e);return n!=null?new ei(new Je(n)):new ei(t.writeTree_.subtree(e))}}function Mp(t){return t.writeTree_.isEmpty()}function Ao(t,e){return cT(Ke(),t.writeTree_,e)}function cT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=cT(Pt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Pt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e){return pT(e,t)}function HM(t,e,n,i,s){z(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Va(t.visibleWrites,e,n)),t.lastWriteId=i}function jM(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function WM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qM(a,i.path)?s=!1:Yn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return KM(t),!0;if(i.snap)t.visibleWrites=a0(t.visibleWrites,i.path);else{const a=i.children;$n(a,c=>{t.visibleWrites=a0(t.visibleWrites,Pt(i.path,c))})}return!0}else return!1}function qM(t,e){if(t.snap)return Yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yn(Pt(t.path,n),e))return!0;return!1}function KM(t){t.visibleWrites=uT(t.allWrites,GM,Ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GM(t){return t.visible}function uT(t,e,n){let i=ei.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Yn(n,o)?(a=Fn(n,o),i=Va(i,a,r.snap)):Yn(o,n)&&(a=Fn(o,n),i=Va(i,Ke(),r.snap.getChild(a)));else if(r.children){if(Yn(n,o))a=Fn(n,o),i=o0(i,a,r.children);else if(Yn(o,n))if(a=Fn(o,n),Re(a))i=o0(i,Ke(),r.children);else{const c=Co(r.children,Me(a));if(c){const l=c.getChild(et(a));i=Va(i,Ke(),l)}}}else throw Go("WriteRecord should have .snap or .children")}}return i}function hT(t,e,n,i,s){if(!i&&!s){const r=Vr(t.visibleWrites,e);if(r!=null)return r;{const o=xs(t.visibleWrites,e);if(Mp(o))return n;if(n==null&&!Op(o,Ke()))return null;{const a=n||ze.EMPTY_NODE;return Ao(o,a)}}}else{const r=xs(t.visibleWrites,e);if(!s&&Mp(r))return n;if(!s&&n==null&&!Op(r,Ke()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Yn(l.path,e)||Yn(e,l.path))},a=uT(t.allWrites,o,e),c=n||ze.EMPTY_NODE;return Ao(a,c)}}}function YM(t,e,n){let i=ze.EMPTY_NODE;const s=Vr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(en,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=xs(t.visibleWrites,e);return n.forEachChild(en,(o,a)=>{const c=Ao(xs(r,new at(o)),a);i=i.updateImmediateChild(o,c)}),c0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=xs(t.visibleWrites,e);return c0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function XM(t,e,n,i,s){z(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Pt(e,n);if(Op(t.visibleWrites,r))return null;{const o=xs(t.visibleWrites,r);return Mp(o)?s.getChild(n):Ao(o,s.getChild(n))}}function QM(t,e,n,i){const s=Pt(e,n),r=Vr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=xs(t.visibleWrites,s);return Ao(o,i.getNode().getImmediateChild(n))}else return null}function JM(t,e){return Vr(t.visibleWrites,e)}function ZM(t,e,n,i,s,r,o){let a;const c=xs(t.visibleWrites,e),l=Vr(c,Ke());if(l!=null)a=l;else if(n!=null)a=Ao(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function eP(){return{visibleWrites:ei.empty(),allWrites:[],lastWriteId:-1}}function Pp(t,e,n,i){return hT(t.writeTree,t.treePath,e,n,i)}function fT(t,e){return YM(t.writeTree,t.treePath,e)}function l0(t,e,n,i){return XM(t.writeTree,t.treePath,e,n,i)}function nh(t,e){return JM(t.writeTree,Pt(t.treePath,e))}function tP(t,e,n,i,s,r){return ZM(t.writeTree,t.treePath,e,n,i,s,r)}function Om(t,e,n){return QM(t.writeTree,t.treePath,e,n)}function dT(t,e){return pT(Pt(t.treePath,e),t.writeTree)}function pT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,n0(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,DM(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,RM(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,n0(i,e.snapshotNode,s.oldSnap));else throw Go("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const gT=new iP;class Mm{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Dm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Om(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),r=tP(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function sP(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rP(t,e,n,i,s){const r=new nP;let o,a;if(n.type===pi.OVERWRITE){const l=n;l.source.fromUser?o=Np(t,e,l.path,l.snap,i,s,r):(z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Re(l.path),o=ih(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===pi.MERGE){const l=n;l.source.fromUser?o=aP(t,e,l.path,l.children,i,s,r):(z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Lp(t,e,l.path,l.children,i,s,a,r))}else if(n.type===pi.ACK_USER_WRITE){const l=n;l.revert?o=uP(t,e,l.path,i,s,r):o=cP(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===pi.LISTEN_COMPLETE)o=lP(t,e,n.path,i,r);else throw Go("Unknown operation type: "+n.type);const c=r.getChanges();return oP(e,o,c),{viewCache:o,changes:c}}function oP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Dp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(AM(Dp(e)))}}function mT(t,e,n,i,s,r){const o=e.eventCache;if(nh(i,n)!=null)return e;{let a,c;if(Re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Sr(e),u=l instanceof ze?l:ze.EMPTY_NODE,h=fT(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Pp(i,Sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=Me(n);if(l===".priority"){z(Ds(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=l0(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=et(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=l0(i,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Om(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return Ua(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function ih(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(Re(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),d,null)}else{const d=Me(n);if(!c.isCompleteForPath(n)&&Ds(n)>1)return e;const p=et(n),g=c.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?l=u.updatePriority(c.getNode(),g):l=u.updateChild(c.getNode(),d,g,p,gT,null)}const h=aT(e,l,c.isFullyInitialized()||Re(n),u.filtersNodes()),f=new Mm(s,h,r);return mT(t,h,n,s,f,a)}function Np(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new Mm(s,e,r);if(Re(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ua(e,l,!0,t.filter.filtersNodes());else{const h=Me(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ua(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=et(n),d=a.getNode().getImmediateChild(h);let p;if(Re(f))p=i;else{const m=u.getCompleteChild(h);m!=null?q2(f)===".priority"&&m.getChild(G2(f)).isEmpty()?p=m:p=m.updateChild(f,i):p=ze.EMPTY_NODE}if(d.equals(p))c=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);c=Ua(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function u0(t,e){return t.eventCache.isCompleteForChild(e)}function aP(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=Pt(n,c);u0(e,Me(u))&&(a=Np(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=Pt(n,c);u0(e,Me(u))||(a=Np(t,a,u,l,s,r,o))}),a}function h0(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Lp(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Re(n)?l=i:l=new Je(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=h0(t,d,f);c=ih(t,c,new at(h),p,s,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=h0(t,p,f);c=ih(t,c,new at(h),m,s,r,o,a)}}),c}function cP(t,e,n,i,s,r,o){if(nh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(Re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ih(t,e,n,c.getNode().getChild(n),s,r,a,o);if(Re(n)){let l=new Je(null);return c.getNode().forEachChild(go,(u,h)=>{l=l.set(new at(u),h)}),Lp(t,e,n,l,s,r,a,o)}else return e}else{let l=new Je(null);return i.foreach((u,h)=>{const f=Pt(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Lp(t,e,n,l,s,r,a,o)}}function lP(t,e,n,i,s){const r=e.serverCache,o=aT(e,r.getNode(),r.isFullyInitialized()||Re(n),r.isFiltered());return mT(t,o,n,i,gT,s)}function uP(t,e,n,i,s,r){let o;if(nh(i,n)!=null)return e;{const a=new Mm(i,e,s),c=e.eventCache.getNode();let l;if(Re(n)||Me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pp(i,Sr(e));else{const h=e.serverCache.getNode();z(h instanceof ze,"serverChildren would be complete if leaf node"),u=fT(i,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=Me(n);let h=Om(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,et(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ze.EMPTY_NODE,et(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pp(i,Sr(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||nh(i,Ke())!=null,Ua(e,l,o,t.filter.filtersNodes())}}function hP(t,e){const n=Sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(Me(e)).isEmpty())?n.getChild(e):null}function f0(t,e,n,i){e.type===pi.MERGE&&e.source.queryId!==null&&(z(Sr(t.viewCache_),"We should always have a full cache before handling merges"),z(Dp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=rP(t.processor_,s,e,n,i);return sP(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fP(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return VM(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0;function dP(t){z(!d0,"__referenceConstructor has already been defined"),d0=t}function Pm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return z(r!=null,"SyncTree gave us an op for an invalid query."),f0(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(f0(o,e,n,i));return r}}function Nm(t,e){let n=null;for(const i of t.views.values())n=n||hP(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p0;function pP(t){z(!p0,"__referenceConstructor has already been defined"),p0=t}class g0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Je(null),this.pendingWriteTree_=eP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gP(t,e,n,i,s){return HM(t.pendingWriteTree_,e,n,i,s),s?lf(t,new kr(iT(),e,n)):[]}function so(t,e,n=!1){const i=jM(t.pendingWriteTree_,e);if(WM(t.pendingWriteTree_,e)){let r=new Je(null);return i.snap!=null?r=r.set(Ke(),!0):$n(i.children,o=>{r=r.set(new at(o),!0)}),lf(t,new th(i.path,r,n))}else return[]}function cf(t,e,n){return lf(t,new kr(sT(),e,n))}function mP(t,e,n){const i=Je.fromObject(n);return lf(t,new gc(sT(),e,i))}function _P(t,e,n,i){const s=bT(t,i);if(s!=null){const r=wT(s),o=r.path,a=r.queryId,c=Fn(o,e),l=new kr(rT(a),c,n);return ET(t,o,l)}else return[]}function yP(t,e,n,i){const s=bT(t,i);if(s){const r=wT(s),o=r.path,a=r.queryId,c=Fn(o,e),l=Je.fromObject(n),u=new gc(rT(a),c,l);return ET(t,o,u)}else return[]}function _T(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Fn(o,e),l=Nm(a,c);if(l)return l});return hT(s,e,r,n,!0)}function lf(t,e){return yT(e,t.syncPointTree_,null,lT(t.pendingWriteTree_,Ke()))}function yT(t,e,n,i){if(Re(t.path))return vT(t,e,n,i);{const s=e.get(Ke());n==null&&s!=null&&(n=Nm(s,Ke()));let r=[];const o=Me(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=dT(i,o);r=r.concat(yT(a,c,l,u))}return s&&(r=r.concat(Pm(s,t,i,n))),r}}function vT(t,e,n,i){const s=e.get(Ke());n==null&&s!=null&&(n=Nm(s,Ke()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=dT(i,o),u=t.operationForChild(o);u&&(r=r.concat(vT(u,a,c,l)))}),s&&(r=r.concat(Pm(s,t,i,n))),r}function bT(t,e){return t.tagToQueryMap.get(e)}function wT(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new at(t.substr(0,e))}}function ET(t,e,n){const i=t.syncPointTree_.get(e);z(i,"Missing sync point for query tag that we're tracking");const s=lT(t.pendingWriteTree_,e);return Pm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lm(n)}node(){return this.node_}}class Fm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pt(this.path_,e);return new Fm(this.syncTree_,n)}node(){return _T(this.syncTree_,this.path_)}}const vP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m0=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wP(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},wP=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&z(!1,"Unexpected increment value: "+i);const s=e.node();if(z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},EP=function(t,e,n,i){return Um(e,new Fm(n,t),i)},TP=function(t,e,n){return Um(t,new Lm(e),n)};function Um(t,e,n){const i=t.getPriority().val(),s=m0(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=m0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Dt(a,Xt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Dt(s))),o.forEachChild(en,(a,c)=>{const l=Um(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Bm(t,e){let n=e instanceof at?e:new at(e),i=t,s=Me(n);for(;s!==null;){const r=Co(i.node.children,s)||{children:{},childCount:0};i=new Vm(s,i,r),n=et(n),s=Me(n)}return i}function Jo(t){return t.node.value}function TT(t,e){t.node.value=e,Fp(t)}function IT(t){return t.node.childCount>0}function IP(t){return Jo(t)===void 0&&!IT(t)}function uf(t,e){$n(t.node.children,(n,i)=>{e(new Vm(n,t,i))})}function xT(t,e,n,i){n&&!i&&e(t),uf(t,s=>{xT(s,e,!0,i)}),n&&i&&e(t)}function xP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qc(t){return new at(t.parent===null?t.name:Qc(t.parent)+"/"+t.name)}function Fp(t){t.parent!==null&&CP(t.parent,t.name,t)}function CP(t,e,n){const i=IP(n),s=ts(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Fp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Fp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/[\[\].#$\/\u0000-\u001F\u007F]/,SP=/[\[\].#$\u0000-\u001F\u007F]/,vd=10*1024*1024,CT=function(t){return typeof t=="string"&&t.length!==0&&!kP.test(t)},AP=function(t){return typeof t=="string"&&t.length!==0&&!SP.test(t)},RP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AP(t)},kT=function(t,e,n){const i=n instanceof at?new lM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+tr(i));if(typeof e=="function")throw new Error(t+"contains a function "+tr(i)+" with contents = "+e.toString());if(C2(e))throw new Error(t+"contains "+e.toString()+" "+tr(i));if(typeof e=="string"&&e.length>vd/3&&nf(e)>vd)throw new Error(t+"contains a string greater than "+vd+" utf8 bytes "+tr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if($n(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!CT(o)))throw new Error(t+" contains an invalid key ("+o+") "+tr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uM(i,o),kT(t,a,i),hM(i)}),s&&r)throw new Error(t+' contains ".value" child '+tr(i)+" in addition to actual children.")}},DP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!CT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!RP(n))throw new Error(MR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function MP(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Y2(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Br(t,e,n){MP(t,n),PP(t,i=>Yn(i,e)||Yn(e,i))}function PP(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(NP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function NP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();yr&&Yt("event: "+n.toString()),Yc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="repo_interrupt",FP=25;class UP{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eh(),this.transactionQueueTree_=new Vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VP(t,e,n){if(t.stats_=Cm(t.repoInfo_),t.forceRestClient_||M4())t.server_=new Zu(t.repoInfo_,(i,s,r,o)=>{_0(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>y0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $i(t.repoInfo_,e,(i,s,r,o)=>{_0(t,i,s,r,o)},i=>{y0(t,i)},i=>{$P(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=V4(t.repoInfo_,()=>new UM(t.stats_,t.server_)),t.infoData_=new MM,t.infoSyncTree_=new g0({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=cf(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$m(t,"connected",!1),t.serverSyncTree_=new g0({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Br(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function BP(t){const n=t.infoData_.getNode(new at(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ST(t){return vP({timestamp:BP(t)})}function _0(t,e,n,i,s){t.dataUpdateCount++;const r=new at(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=$u(n,l=>Xt(l));o=yP(t.serverSyncTree_,r,c,s)}else{const c=Xt(n);o=_P(t.serverSyncTree_,r,c,s)}else if(i){const c=$u(n,l=>Xt(l));o=mP(t.serverSyncTree_,r,c)}else{const c=Xt(n);o=cf(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Hm(t,r)),Br(t.eventQueue_,a,o)}function y0(t,e){$m(t,"connected",e),e===!1&&HP(t)}function $P(t,e){$n(e,(n,i)=>{$m(t,n,i)})}function $m(t,e,n){const i=new at("/.info/"+e),s=Xt(n);t.infoData_.updateSnapshot(i,s);const r=cf(t.infoSyncTree_,i,s);Br(t.eventQueue_,i,r)}function zP(t){return t.nextWriteId_++}function HP(t){AT(t,"onDisconnectEvents");const e=ST(t),n=eh();Rp(t.onDisconnect_,Ke(),(s,r)=>{const o=EP(s,r,t.serverSyncTree_,e);nT(n,s,o)});let i=[];Rp(n,Ke(),(s,r)=>{i=i.concat(cf(t.serverSyncTree_,s,r));const o=KP(t,s);Hm(t,o)}),t.onDisconnect_=eh(),Br(t.eventQueue_,Ke(),i)}function jP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LP)}function AT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Yt(n,...e)}function RT(t,e,n){return _T(t.serverSyncTree_,e,n)||ze.EMPTY_NODE}function zm(t,e=t.transactionQueueTree_){if(e||hf(t,e),Jo(e)){const n=OT(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&WP(t,Qc(e),n)}else IT(e)&&uf(e,n=>{zm(t,n)})}function WP(t,e,n){const i=n.map(l=>l.currentWriteId),s=RT(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];z(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Fn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{AT(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(so(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hf(t,Bm(t.transactionQueueTree_,e)),zm(t,t.transactionQueueTree_),Br(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Yc(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Rn("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Hm(t,e)}},o)}function Hm(t,e){const n=DT(t,e),i=Qc(n),s=OT(t,n);return qP(t,s,i),i}function qP(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Fn(n,c.path);let u=!1,h;if(z(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(so(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=FP)u=!0,h="maxretry",s=s.concat(so(t.serverSyncTree_,c.currentWriteId,!0));else{const f=RT(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){kT("transaction failed: Data returned ",d,c.path);let p=Xt(d);typeof d=="object"&&d!=null&&ts(d,".priority")||(p=p.updatePriority(f.getPriority()));const g=c.currentWriteId,_=ST(t),v=TP(p,f,_);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=v,c.currentWriteId=zP(t),o.splice(o.indexOf(g),1),s=s.concat(gP(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(so(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(so(t.serverSyncTree_,c.currentWriteId,!0))}Br(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}hf(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Yc(i[a]);zm(t,t.transactionQueueTree_)}function DT(t,e){let n,i=t.transactionQueueTree_;for(n=Me(e);n!==null&&Jo(i)===void 0;)i=Bm(i,n),e=et(e),n=Me(e);return i}function OT(t,e){const n=[];return MT(t,e,n),n.sort((i,s)=>i.order-s.order),n}function MT(t,e,n){const i=Jo(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);uf(e,s=>{MT(t,s,n)})}function hf(t,e){const n=Jo(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,TT(e,n.length>0?n:void 0)}uf(e,i=>{hf(t,i)})}function KP(t,e){const n=Qc(DT(t,e)),i=Bm(t.transactionQueueTree_,e);return xP(i,s=>{bd(t,s)}),bd(t,i),xT(i,s=>{bd(t,s)}),n}function bd(t,e){const n=Jo(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(so(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?TT(e,void 0):n.length=r+1,Br(t.eventQueue_,Qc(e),s);for(let o=0;o<i.length;o++)Yc(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function YP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Rn(`Invalid query segment '${n}' in query '${t}'`)}return e}const v0=function(t,e){const n=XP(t),i=n.namespace;n.domain==="firebase.com"&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x4();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new L4(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new at(n.pathString)}},XP=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=GP(t.substring(u,h)));const f=YP(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Re(this._path)?null:q2(this._path)}get ref(){return new Zo(this._repo,this._path)}get _queryIdentifier(){const e=s0(this._queryParams),n=Im(e);return n==="{}"?"default":n}get _queryObject(){return s0(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof jm))return!1;const n=this._repo===e._repo,i=Y2(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cM(this._path)}}class Zo extends jm{constructor(e,n){super(e,n,new Rm,!1)}get parent(){const e=G2(this._path);return e===null?null:new Zo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}dP(Zo);pP(Zo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="FIREBASE_DATABASE_EMULATOR_HOST",Up={};let JP=!1;function ZP(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Yt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=v0(r,s),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[QP]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=v0(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new kp(kp.OWNER):new N4(t.name,t.options,e);DP("Invalid Firebase Database URL",o),Re(o.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tN(a,t,u,new P4(t.name,n));return new nN(h,t)}function eN(t,e){const n=Up[e];(!n||n[t.key]!==t)&&xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jP(t),delete n[t.key]}function tN(t,e,n,i){let s=Up[e.name];s||(s={},Up[e.name]=s);let r=s[t.toURLString()];return r&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new UP(t,JP,n,i),s[t.toURLString()]=r,r}class nN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zo(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function iN(t){b4(Bs),bi(new ni("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZP(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),An(Bv,$v,t),An(Bv,$v,"esm2017")}$i.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$i.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iN();var sN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X,Wm=Wm||{},he=sN||self;function sh(){}function ff(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rN(t){return Object.prototype.hasOwnProperty.call(t,wd)&&t[wd]||(t[wd]=++oN)}var wd="closure_uid_"+(1e9*Math.random()>>>0),oN=0;function aN(t,e,n){return t.call.apply(t.bind,arguments)}function cN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function tn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tn=aN:tn=cN,tn.apply(null,arguments)}function Pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function $s(){this.s=this.s,this.o=this.o}var lN=0;$s.prototype.s=!1;$s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lN!=0)&&rN(this)};$s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const PT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qm(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function b0(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ff(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function nn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nn.prototype.h=function(){this.defaultPrevented=!0};var uN=function(){if(!he.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{he.addEventListener("test",sh,e),he.removeEventListener("test",sh,e)}catch{}return t}();function rh(t){return/^[\s\xa0]*$/.test(t)}var w0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ed(t,e){return t<e?-1:t>e?1:0}function df(){var t=he.navigator;return t&&(t=t.userAgent)?t:""}function fi(t){return df().indexOf(t)!=-1}function Km(t){return Km[" "](t),t}Km[" "]=sh;function hN(t){var e=pN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fN=fi("Opera"),Ro=fi("Trident")||fi("MSIE"),NT=fi("Edge"),Vp=NT||Ro,LT=fi("Gecko")&&!(df().toLowerCase().indexOf("webkit")!=-1&&!fi("Edge"))&&!(fi("Trident")||fi("MSIE"))&&!fi("Edge"),dN=df().toLowerCase().indexOf("webkit")!=-1&&!fi("Edge");function FT(){var t=he.document;return t?t.documentMode:void 0}var oh;e:{var Td="",Id=function(){var t=df();if(LT)return/rv:([^\);]+)(\)|;)/.exec(t);if(NT)return/Edge\/([\d\.]+)/.exec(t);if(Ro)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dN)return/WebKit\/(\S+)/.exec(t);if(fN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Id&&(Td=Id?Id[1]:""),Ro){var xd=FT();if(xd!=null&&xd>parseFloat(Td)){oh=String(xd);break e}}oh=Td}var pN={};function gN(){return hN(function(){let t=0;const e=w0(String(oh)).split("."),n=w0("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ed(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ed(s[2].length==0,r[2].length==0)||Ed(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Bp;if(he.document&&Ro){var E0=FT();Bp=E0||parseInt(oh,10)||void 0}else Bp=void 0;var mN=Bp;function mc(t,e){if(nn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(LT){e:{try{Km(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_N[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mc.X.h.call(this)}}zt(mc,nn);var _N={2:"touch",3:"pen",4:"mouse"};mc.prototype.h=function(){mc.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zc="closure_listenable_"+(1e6*Math.random()|0),yN=0;function vN(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++yN,this.ba=this.ea=!1}function pf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gm(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function UT(t){const e={};for(const n in t)e[n]=t[n];return e}const T0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function VT(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<T0.length;r++)n=T0[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gf(t){this.src=t,this.g={},this.h=0}gf.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=zp(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vN(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function $p(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=PT(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zp(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Ym="closure_lm_"+(1e6*Math.random()|0),Cd={};function BT(t,e,n,i,s){if(i&&i.once)return zT(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)BT(t,e[r],n,i,s);return null}return n=Jm(n),t&&t[Zc]?t.N(e,n,Jc(i)?!!i.capture:!!i,s):$T(t,e,n,!1,i,s)}function $T(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Jc(s)?!!s.capture:!!s,a=Qm(t);if(a||(t[Ym]=a=new gf(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=bN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)uN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(jT(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bN(){function t(n){return e.call(t.src,t.listener,n)}const e=wN;return t}function zT(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zT(t,e[r],n,i,s);return null}return n=Jm(n),t&&t[Zc]?t.O(e,n,Jc(i)?!!i.capture:!!i,s):$T(t,e,n,!0,i,s)}function HT(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)HT(t,e[r],n,i,s);else i=Jc(i)?!!i.capture:!!i,n=Jm(n),t&&t[Zc]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=zp(r,n,i,s),-1<n&&(pf(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zp(e,n,i,s)),(n=-1<t?e[t]:null)&&Xm(n))}function Xm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Zc])$p(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(jT(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qm(e))?($p(n,t),n.h==0&&(n.src=null,e[Ym]=null)):pf(t)}}}function jT(t){return t in Cd?Cd[t]:Cd[t]="on"+t}function wN(t,e){if(t.ba)t=!0;else{e=new mc(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Xm(t),t=n.call(i,e)}return t}function Qm(t){return t=t[Ym],t instanceof gf?t:null}var kd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jm(t){return typeof t=="function"?t:(t[kd]||(t[kd]=function(e){return t.handleEvent(e)}),t[kd])}function Lt(){$s.call(this),this.i=new gf(this),this.P=this,this.I=null}zt(Lt,$s);Lt.prototype[Zc]=!0;Lt.prototype.removeEventListener=function(t,e,n,i){HT(this,t,e,n,i)};function Bt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new nn(e,t);else if(e instanceof nn)e.target=e.target||t;else{var s=e;e=new nn(i,t),VT(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Nl(o,i,!0,e)&&s}if(o=e.g=t,s=Nl(o,i,!0,e)&&s,s=Nl(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Nl(o,i,!1,e)&&s}Lt.prototype.M=function(){if(Lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pf(n[i]);delete t.g[e],t.h--}}this.I=null};Lt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Lt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Nl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&$p(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Zm=he.JSON.stringify;function EN(){var t=KT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TN{constructor(){this.h=this.g=null}add(e,n){const i=WT.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var WT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IN,t=>t.reset());class IN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xN(t){he.setTimeout(()=>{throw t},0)}function qT(t,e){Hp||CN(),jp||(Hp(),jp=!0),KT.add(t,e)}var Hp;function CN(){var t=he.Promise.resolve(void 0);Hp=function(){t.then(kN)}}var jp=!1,KT=new TN;function kN(){for(var t;t=EN();){try{t.h.call(t.g)}catch(n){xN(n)}var e=WT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jp=!1}function mf(t,e){Lt.call(this),this.h=t||1,this.g=e||he,this.j=tn(this.lb,this),this.l=Date.now()}zt(mf,Lt);X=mf.prototype;X.ca=!1;X.R=null;X.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Bt(this,"tick"),this.ca&&(e_(this),this.start()))}};X.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function e_(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}X.M=function(){mf.X.M.call(this),e_(this),delete this.g};function t_(t,e,n){if(typeof t=="function")n&&(t=tn(t,n));else if(t&&typeof t.handleEvent=="function")t=tn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:he.setTimeout(t,e||0)}function GT(t){t.g=t_(()=>{t.g=null,t.i&&(t.i=!1,GT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SN extends $s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:GT(this)}M(){super.M(),this.g&&(he.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _c(t){$s.call(this),this.h=t,this.g={}}zt(_c,$s);var I0=[];function YT(t,e,n,i){Array.isArray(n)||(n&&(I0[0]=n.toString()),n=I0);for(var s=0;s<n.length;s++){var r=BT(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function XT(t){Gm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xm(e)},t),t.g={}}_c.prototype.M=function(){_c.X.M.call(this),XT(this)};_c.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _f(){this.g=!0}_f.prototype.Aa=function(){this.g=!1};function AN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function RN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ro(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ON(t,n)+(i?" "+i:"")})}function DN(t,e){t.info(function(){return"TIMEOUT: "+e})}_f.prototype.info=function(){};function ON(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Zm(n)}catch{return e}}var $r={},x0=null;function yf(){return x0=x0||new Lt}$r.Pa="serverreachability";function QT(t){nn.call(this,$r.Pa,t)}zt(QT,nn);function yc(t){const e=yf();Bt(e,new QT(e))}$r.STAT_EVENT="statevent";function JT(t,e){nn.call(this,$r.STAT_EVENT,t),this.stat=e}zt(JT,nn);function ln(t){const e=yf();Bt(e,new JT(e,t))}$r.Qa="timingevent";function ZT(t,e){nn.call(this,$r.Qa,t),this.size=e}zt(ZT,nn);function el(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return he.setTimeout(function(){t()},e)}var vf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function n_(){}n_.prototype.h=null;function C0(t){return t.h||(t.h=t.i())}function tI(){}var tl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function i_(){nn.call(this,"d")}zt(i_,nn);function s_(){nn.call(this,"c")}zt(s_,nn);var Wp;function bf(){}zt(bf,n_);bf.prototype.g=function(){return new XMLHttpRequest};bf.prototype.i=function(){return{}};Wp=new bf;function nl(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new _c(this),this.O=MN,t=Vp?125:void 0,this.T=new mf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nI}function nI(){this.i=null,this.g="",this.h=!1}var MN=45e3,qp={},ah={};X=nl.prototype;X.setTimeout=function(t){this.O=t};function Kp(t,e,n){t.K=1,t.v=Ef(Wi(e)),t.s=n,t.P=!0,iI(t,null)}function iI(t,e){t.F=Date.now(),il(t),t.A=Wi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),hI(n.i,"t",i),t.C=0,n=t.l.H,t.h=new nI,t.g=OI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SN(tn(t.La,t,t.g),t.N)),YT(t.S,t.g,"readystatechange",t.ib),e=t.H?UT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yc(),AN(t.j,t.u,t.A,t.m,t.U,t.s)}X.ib=function(t){t=t.target;const e=this.L;e&&Ui(t)==3?e.l():this.La(t)};X.La=function(t){try{if(t==this.g)e:{const u=Ui(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vp||this.g&&(this.h.h||this.g.fa()||R0(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?yc(3):yc(2)),wf(this);var n=this.g.aa();this.Y=n;t:if(sI(this)){var i=R0(this.g);t="";var s=i.length,r=Ui(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Ba(this);var o="";break t}this.h.i=new he.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,RN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rh(a)){var l=a;break t}}l=null}if(n=l)ro(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gp(this,n);else{this.i=!1,this.o=3,ln(12),lr(this),Ba(this);break e}}this.P?(rI(this,u,o),Vp&&this.i&&u==3&&(YT(this.S,this.T,"tick",this.hb),this.T.start())):(ro(this.j,this.m,o,null),Gp(this,o)),u==4&&lr(this),this.i&&!this.I&&(u==4?SI(this.l,this):(this.i=!1,il(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ln(12)):(this.o=0,ln(13)),lr(this),Ba(this)}}}catch{}finally{}};function sI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function rI(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=PN(t,n),s==ah){e==4&&(t.o=4,ln(14),i=!1),ro(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qp){t.o=4,ln(15),ro(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ro(t.j,t.m,s,null),Gp(t,s);sI(t)&&s!=ah&&s!=qp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ln(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),h_(e),e.K=!0,ln(11))):(ro(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Ba(t))}X.hb=function(){if(this.g){var t=Ui(this.g),e=this.g.fa();this.C<e.length&&(wf(this),rI(this,t,e),this.i&&t!=4&&il(this))}};function PN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ah:(n=Number(e.substring(n,i)),isNaN(n)?qp:(i+=1,i+n>e.length?ah:(e=e.substr(i,n),t.C=i+n,e)))}X.cancel=function(){this.I=!0,lr(this)};function il(t){t.V=Date.now()+t.O,oI(t,t.O)}function oI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=el(tn(t.gb,t),e)}function wf(t){t.B&&(he.clearTimeout(t.B),t.B=null)}X.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(DN(this.j,this.A),this.K!=2&&(yc(),ln(17)),lr(this),this.o=2,Ba(this)):oI(this,this.V-t)};function Ba(t){t.l.G==0||t.I||SI(t.l,t)}function lr(t){wf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,e_(t.T),XT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yp(n.h,t))){if(!t.J&&Yp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)uh(n),xf(n);else break e;u_(n),ln(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=el(tn(n.cb,n),6e3));if(1>=pI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&uh(n),!rh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(r_(r,r.h),r.h=null))}if(i.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.za=m,ct(i.F,i.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=DI(i,i.H?i.ka:null,i.V),o.J){gI(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(wf(a),il(a)),i.g=o}else CI(i);0<n.i.length&&Cf(n)}else l[0]!="stop"&&l[0]!="close"||ur(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ur(n,7):l_(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}yc(4)}catch{}}function NN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ff(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function LN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ff(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function aI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ff(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LN(t),i=NN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var cI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function vr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vr){this.h=e!==void 0?e:t.h,ch(this,t.j),this.s=t.s,this.g=t.g,lh(this,t.m),this.l=t.l,e=t.i;var n=new vc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),k0(this,n),this.o=t.o}else t&&(n=String(t).match(cI))?(this.h=!!e,ch(this,n[1]||"",!0),this.s=Ta(n[2]||""),this.g=Ta(n[3]||"",!0),lh(this,n[4]),this.l=Ta(n[5]||"",!0),k0(this,n[6]||"",!0),this.o=Ta(n[7]||"")):(this.h=!!e,this.i=new vc(null,this.h))}vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ia(e,S0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ia(e,S0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ia(n,n.charAt(0)=="/"?BN:VN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ia(n,zN)),t.join("")};function Wi(t){return new vr(t)}function ch(t,e,n){t.j=n?Ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function k0(t,e,n){e instanceof vc?(t.i=e,HN(t.i,t.h)):(n||(e=Ia(e,$N)),t.i=new vc(e,t.h))}function ct(t,e,n){t.i.set(e,n)}function Ef(t){return ct(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var S0=/[#\/\?@]/g,VN=/[#\?:]/g,BN=/[#\?]/g,$N=/[#\?@]/g,zN=/#/g;function vc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zs(t){t.g||(t.g=new Map,t.h=0,t.i&&FN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}X=vc.prototype;X.add=function(t,e){zs(this),this.i=null,t=ea(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lI(t,e){zs(t),e=ea(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uI(t,e){return zs(t),e=ea(t,e),t.g.has(e)}X.forEach=function(t,e){zs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};X.oa=function(){zs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};X.W=function(t){zs(this);let e=[];if(typeof t=="string")uI(this,t)&&(e=e.concat(this.g.get(ea(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};X.set=function(t,e){return zs(this),this.i=null,t=ea(this,t),uI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function hI(t,e,n){lI(t,e),0<n.length&&(t.i=null,t.g.set(ea(t,e),qm(n)),t.h+=n.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ea(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HN(t,e){e&&!t.j&&(zs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(lI(this,i),hI(this,s,n))},t)),t.j=e}var jN=class{constructor(e,n){this.h=e,this.g=n}};function fI(t){this.l=t||WN,he.PerformanceNavigationTiming?(t=he.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(he.g&&he.g.Ga&&he.g.Ga()&&he.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WN=10;function dI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pI(t){return t.h?1:t.g?t.g.size:0}function Yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function r_(t,e){t.g?t.g.add(e):t.h=e}function gI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fI.prototype.cancel=function(){if(this.i=mI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qm(t.i)}function o_(){}o_.prototype.stringify=function(t){return he.JSON.stringify(t,void 0)};o_.prototype.parse=function(t){return he.JSON.parse(t,void 0)};function qN(){this.g=new o_}function KN(t,e,n){const i=n||"";try{aI(t,function(s,r){let o=s;Jc(s)&&(o=Zm(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function GN(t,e){const n=new _f;if(he.Image){const i=new Image;i.onload=Pl(Ll,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Pl(Ll,n,i,"TestLoadImage: error",!1,e),i.onabort=Pl(Ll,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Pl(Ll,n,i,"TestLoadImage: timeout",!1,e),he.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ll(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function sl(t){this.l=t.ac||null,this.j=t.jb||!1}zt(sl,n_);sl.prototype.g=function(){return new Tf(this.l,this.j)};sl.prototype.i=function(t){return function(){return t}}({});function Tf(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=a_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(Tf,Lt);var a_=0;X=Tf.prototype;X.open=function(t,e){if(this.readyState!=a_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bc(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||he).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rl(this)),this.readyState=a_};X.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bc(this)),this.g&&(this.readyState=3,bc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof he.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_I(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function _I(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}X.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rl(this):bc(this),this.readyState==3&&_I(this)}};X.Va=function(t){this.g&&(this.response=this.responseText=t,rl(this))};X.Ua=function(t){this.g&&(this.response=t,rl(this))};X.ga=function(){this.g&&rl(this)};function rl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bc(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var YN=he.JSON.parse;function gt(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yI,this.K=this.L=!1}zt(gt,Lt);var yI="",XN=/^https?$/i,QN=["POST","PUT"];X=gt.prototype;X.Ka=function(t){this.L=t};X.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wp.g(),this.C=this.u?C0(this.u):C0(Wp),this.g.onreadystatechange=tn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){A0(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=he.FormData&&t instanceof he.FormData,!(0<=PT(QN,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wI(this),0<this.B&&((this.K=JN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tn(this.qa,this)):this.A=t_(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){A0(this,r)}};function JN(t){return Ro&&gN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}X.qa=function(){typeof Wm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))};function A0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vI(t),If(t)}function vI(t){t.D||(t.D=!0,Bt(t,"complete"),Bt(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Bt(this,"complete"),Bt(this,"abort"),If(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),If(this,!0)),gt.X.M.call(this)};X.Ha=function(){this.s||(this.F||this.v||this.l?bI(this):this.fb())};X.fb=function(){bI(this)};function bI(t){if(t.h&&typeof Wm<"u"&&(!t.C[1]||Ui(t)!=4||t.aa()!=2)){if(t.v&&Ui(t)==4)t_(t.Ha,0,t);else if(Bt(t,"readystatechange"),Ui(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(cI)[1]||null;if(!s&&he.self&&he.self.location){var r=he.self.location.protocol;s=r.substr(0,r.length-1)}i=!XN.test(s?s.toLowerCase():"")}n=i}if(n)Bt(t,"complete"),Bt(t,"success");else{t.m=6;try{var o=2<Ui(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",vI(t)}}finally{If(t)}}}}function If(t,e){if(t.g){wI(t);const n=t.g,i=t.C[0]?sh:null;t.g=null,t.C=null,e||Bt(t,"ready");try{n.onreadystatechange=i}catch{}}}function wI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(he.clearTimeout(t.A),t.A=null)}function Ui(t){return t.g?t.g.readyState:0}X.aa=function(){try{return 2<Ui(this)?this.g.status:-1}catch{return-1}};X.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),YN(e)}};function R0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case yI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}X.Ea=function(){return this.m};X.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function EI(t){let e="";return Gm(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function c_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=EI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ct(t,e,n))}function pa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function TI(t){this.Ca=0,this.i=[],this.j=new _f,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pa("baseRetryDelayMs",5e3,t),this.bb=pa("retryDelaySeedMs",1e4,t),this.$a=pa("forwardChannelMaxRetries",2,t),this.ta=pa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fI(t&&t.concurrentRequestLimit),this.Fa=new qN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}X=TI.prototype;X.ma=8;X.G=1;function l_(t){if(II(t),t.G==3){var e=t.U++,n=Wi(t.F);ct(n,"SID",t.I),ct(n,"RID",e),ct(n,"TYPE","terminate"),ol(t,n),e=new nl(t,t.j,e,void 0),e.K=2,e.v=Ef(Wi(n)),n=!1,he.navigator&&he.navigator.sendBeacon&&(n=he.navigator.sendBeacon(e.v.toString(),"")),!n&&he.Image&&(new Image().src=e.v,n=!0),n||(e.g=OI(e.l,null),e.g.da(e.v)),e.F=Date.now(),il(e)}RI(t)}function xf(t){t.g&&(h_(t),t.g.cancel(),t.g=null)}function II(t){xf(t),t.u&&(he.clearTimeout(t.u),t.u=null),uh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&he.clearTimeout(t.m),t.m=null)}function Cf(t){dI(t.h)||t.m||(t.m=!0,qT(t.Ja,t),t.C=0)}function ZN(t,e){return pI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=el(tn(t.Ja,t,e),AI(t,t.C)),t.C++,!0)}X.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new nl(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=UT(r),VT(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xI(this,s,e),n=Wi(this.F),ct(n,"RID",t),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),ol(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(EI(r)))+"&"+e:this.o&&c_(n,this.o,r)),r_(this.h,s),this.Ya&&ct(n,"TYPE","init"),this.O?(ct(n,"$req",e),ct(n,"SID","null"),s.Z=!0,Kp(s,n,null)):Kp(s,n,e),this.G=2}}else this.G==3&&(t?D0(this,t):this.i.length==0||dI(this.h)||D0(this))};function D0(t,e){var n;e?n=e.m:n=t.U++;const i=Wi(t.F);ct(i,"SID",t.I),ct(i,"RID",n),ct(i,"AID",t.T),ol(t,i),t.o&&t.s&&c_(i,t.o,t.s),n=new nl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),r_(t.h,n),Kp(n,i,e)}function ol(t,e){t.ia&&Gm(t.ia,function(n,i){ct(e,i,n)}),t.l&&aI({},function(n,i){ct(e,i,n)})}function xI(t,e,n){n=Math.min(t.i.length,n);var i=t.l?tn(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{KN(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function CI(t){t.g||t.u||(t.Z=1,qT(t.Ia,t),t.A=0)}function u_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=el(tn(t.Ia,t),AI(t,t.A)),t.A++,!0)}X.Ia=function(){if(this.u=null,kI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=el(tn(this.eb,this),t)}};X.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ln(10),xf(this),kI(this))};function h_(t){t.B!=null&&(he.clearTimeout(t.B),t.B=null)}function kI(t){t.g=new nl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Wi(t.sa);ct(e,"RID","rpc"),ct(e,"SID",t.I),ct(e,"CI",t.L?"0":"1"),ct(e,"AID",t.T),ct(e,"TYPE","xmlhttp"),ol(t,e),t.o&&t.s&&c_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ef(Wi(e)),n.s=null,n.P=!0,iI(n,t)}X.cb=function(){this.v!=null&&(this.v=null,xf(this),u_(this),ln(19))};function uh(t){t.v!=null&&(he.clearTimeout(t.v),t.v=null)}function SI(t,e){var n=null;if(t.g==e){uh(t),h_(t),t.g=null;var i=2}else if(Yp(t.h,e))n=e.D,gI(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=yf(),Bt(i,new ZT(i,n)),Cf(t)}else CI(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&ZN(t,e)||i==2&&u_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}}function AI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=tn(t.kb,t);n||(n=new vr("//www.google.com/images/cleardot.gif"),he.location&&he.location.protocol=="http"||ch(n,"https"),Ef(n)),GN(n.toString(),i)}else ln(2);t.G=0,t.l&&t.l.va(e),RI(t),II(t)}X.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function RI(t){if(t.G=0,t.la=[],t.l){const e=mI(t.h);(e.length!=0||t.i.length!=0)&&(b0(t.la,e),b0(t.la,t.i),t.h.i.length=0,qm(t.i),t.i.length=0),t.l.ua()}}function DI(t,e,n){var i=n instanceof vr?Wi(n):new vr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),lh(i,i.m);else{var s=he.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new vr(null,void 0);i&&ch(r,i),e&&(r.g=e),s&&lh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&ct(i,n,e),ct(i,"VER",t.ma),ol(t,i),i}function OI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new gt(new sl({jb:!0})):new gt(t.ra),e.Ka(t.H),e}function MI(){}X=MI.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Ra=function(){};function hh(){if(Ro&&!(10<=Number(mN)))throw Error("Environmental error: no available transport.")}hh.prototype.g=function(t,e){return new On(t,e)};function On(t,e){Lt.call(this),this.g=new TI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!rh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ta(this)}zt(On,Lt);On.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ln(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=DI(t,null,t.V),Cf(t)};On.prototype.close=function(){l_(this.g)};On.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zm(t),t=n);e.i.push(new jN(e.ab++,t)),e.G==3&&Cf(e)};On.prototype.M=function(){this.g.l=null,delete this.j,l_(this.g),delete this.g,On.X.M.call(this)};function PI(t){i_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(PI,i_);function NI(){s_.call(this),this.status=1}zt(NI,s_);function ta(t){this.g=t}zt(ta,MI);ta.prototype.xa=function(){Bt(this.g,"a")};ta.prototype.wa=function(t){Bt(this.g,new PI(t))};ta.prototype.va=function(t){Bt(this.g,new NI)};ta.prototype.ua=function(){Bt(this.g,"b")};hh.prototype.createWebChannel=hh.prototype.g;On.prototype.send=On.prototype.u;On.prototype.open=On.prototype.m;On.prototype.close=On.prototype.close;vf.NO_ERROR=0;vf.TIMEOUT=8;vf.HTTP_ERROR=6;eI.COMPLETE="complete";tI.EventType=tl;tl.OPEN="a";tl.CLOSE="b";tl.ERROR="c";tl.MESSAGE="d";Lt.prototype.listen=Lt.prototype.N;gt.prototype.listenOnce=gt.prototype.O;gt.prototype.getLastError=gt.prototype.Oa;gt.prototype.getLastErrorCode=gt.prototype.Ea;gt.prototype.getStatus=gt.prototype.aa;gt.prototype.getResponseJson=gt.prototype.Sa;gt.prototype.getResponseText=gt.prototype.fa;gt.prototype.send=gt.prototype.da;gt.prototype.setWithCredentials=gt.prototype.Ka;var e6=function(){return new hh},t6=function(){return yf()},Sd=vf,n6=eI,i6=$r,O0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},s6=sl,Fl=tI,r6=gt;const M0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let na="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new $c("@firebase/firestore");function P0(){return Ar.logLevel}function Q(t,...e){if(Ar.logLevel<=Ue.DEBUG){const n=e.map(f_);Ar.debug(`Firestore (${na}): ${t}`,...n)}}function qi(t,...e){if(Ar.logLevel<=Ue.ERROR){const n=e.map(f_);Ar.error(`Firestore (${na}): ${t}`,...n)}}function fh(t,...e){if(Ar.logLevel<=Ue.WARN){const n=e.map(f_);Ar.warn(`Firestore (${na}): ${t}`,...n)}}function f_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw qi(e),new Error(e)}function ot(t,e){t||le()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends xi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class a6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c6{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string"),new LI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string"),new Gt(e)}}class l6{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class u6{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new l6(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ot(typeof n.token=="string"),this.T=n.token,new h6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=d6(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function $e(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Tt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Tt(0,0))}static max(){return new de(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,i){n===void 0?n=0:n>e.length&&le(),i===void 0?i=e.length-n:i>e.length-n&&le(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return wc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wc?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends wc{construct(e,n,i){return new nt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const p6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends wc{construct(e,n,i){return new Zt(e,n,i)}static isValidIdentifier(e){return p6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Zt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(n)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(nt.fromString(e))}static fromName(e){return new ne(nt.fromString(e).popFirst(5))}static empty(){return new ne(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new nt(e.slice()))}}function g6(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(i===1e9?new Tt(n+1,0):new Tt(n,i));return new Os(s,ne.empty(),e)}function m6(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Os(de.min(),ne.empty(),-1)}static max(){return new Os(de.max(),ne.empty(),-1)}}function _6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==y6)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,i)=>{n(e)})}static reject(e){return new L((n,i)=>{i(e)})}static waitFor(e){return new L((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new L((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new L((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function cl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class d_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}d_.ct=-1;function kf(t){return t==null}function dh(t){return t===0&&1/t==-1/0}function b6(t){return typeof t=="number"&&Number.isInteger(t)&&!dh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new St(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new St(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}}class Ul{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ft.RED,this.left=s??Ft.EMPTY,this.right=r??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Ft(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L0(this.data.getIterator())}getIteratorFrom(e){return new L0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class L0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Ct(Zt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class w6 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new w6("Invalid base64 string: "+s):s}}(e);return new on(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new on(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const E6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(t){if(ot(!!t),typeof t=="string"){let e=0;const n=E6.exec(t);if(ot(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oo(t){return typeof t=="string"?on.fromBase64String(t):on.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function BI(t){const e=t.mapValue.fields.__previous_value__;return VI(e)?BI(e):e}function Ec(t){const e=Ms(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{constructor(e,n,i,s,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Tc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?VI(t)?4:I6(t)?9007199254740991:10:le()}function Ti(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ec(t).isEqual(Ec(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ms(i.timestampValue),o=Ms(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Oo(i.bytesValue).isEqual(Oo(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return wt(i.geoPointValue.latitude)===wt(s.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return wt(i.integerValue)===wt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=wt(i.doubleValue),o=wt(s.doubleValue);return r===o?dh(r)===dh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],Ti);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(N0(r)!==N0(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ti(r[a],o[a])))return!1;return!0}(t,e);default:return le()}}function Ic(t,e){return(t.values||[]).find(n=>Ti(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=Rr(t),i=Rr(e);if(n!==i)return $e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=wt(s.integerValue||s.doubleValue),a=wt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return F0(t.timestampValue,e.timestampValue);case 4:return F0(Ec(t),Ec(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Oo(s),a=Oo(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=$e(o[c],a[c]);if(l!==0)return l}return $e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=$e(wt(s.latitude),wt(r.latitude));return o!==0?o:$e(wt(s.longitude),wt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Mo(o[c],a[c]);if(l)return l}return $e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Vl.mapValue&&r===Vl.mapValue)return 0;if(s===Vl.mapValue)return 1;if(r===Vl.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=$e(a[u],l[u]);if(h!==0)return h;const f=Mo(o[a[u]],c[l[u]]);if(f!==0)return f}return $e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw le()}}function F0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=Ms(t),i=Ms(e),s=$e(n.seconds,i.seconds);return s!==0?s:$e(n.nanos,i.nanos)}function Po(t){return Xp(t)}function Xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ms(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Xp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Xp(i.fields[a])}`;return r+"}"}(t.mapValue):le();var e,n}function U0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qp(t){return!!t&&"integerValue"in t}function p_(t){return!!t&&"arrayValue"in t}function V0(t){return!!t&&"nullValue"in t}function B0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tu(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=$a(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function I6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=Zt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=$a(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ti(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Tu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){zr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new mn($a(this.value))}}function $I(t){const e=[];return zr(t.fields,(n,i)=>{const s=new Zt([n]);if(Tu(i)){const r=$I(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qt(e,0,de.min(),de.min(),de.min(),mn.empty(),0)}static newFoundDocument(e,n,i,s){return new Qt(e,1,n,de.min(),i,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,de.min(),de.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,de.min(),de.min(),mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ph{constructor(e,n){this.position=e,this.inclusive=n}}function $0(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),n.key):i=Mo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ti(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class za{constructor(e,n="asc"){this.field=e,this.dir=n}}function x6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zI{}class Et extends zI{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new k6(e,n,i):n==="array-contains"?new R6(e,i):n==="in"?new D6(e,i):n==="not-in"?new O6(e,i):n==="array-contains-any"?new M6(e,i):new Et(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new S6(e,i):new A6(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ii extends zI{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ii(e,n)}matches(e){return HI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function HI(t){return t.op==="and"}function jI(t){return C6(t)&&HI(t)}function C6(t){for(const e of t.filters)if(e instanceof ii)return!1;return!0}function Jp(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+Po(t.value);if(jI(t))return t.filters.map(e=>Jp(e)).join(",");{const e=t.filters.map(n=>Jp(n)).join(",");return`${t.op}(${e})`}}function WI(t,e){return t instanceof Et?function(n,i){return i instanceof Et&&n.op===i.op&&n.field.isEqual(i.field)&&Ti(n.value,i.value)}(t,e):t instanceof ii?function(n,i){return i instanceof ii&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&WI(r,i.filters[o]),!0):!1}(t,e):void le()}function qI(t){return t instanceof Et?function(e){return`${e.field.canonicalString()} ${e.op} ${Po(e.value)}`}(t):t instanceof ii?function(e){return e.op.toString()+" {"+e.getFilters().map(qI).join(" ,")+"}"}(t):"Filter"}class k6 extends Et{constructor(e,n,i){super(e,n,i),this.key=ne.fromName(i.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class S6 extends Et{constructor(e,n){super(e,"in",n),this.keys=KI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class A6 extends Et{constructor(e,n){super(e,"not-in",n),this.keys=KI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ne.fromName(i.referenceValue))}class R6 extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return p_(n)&&Ic(n.arrayValue,this.value)}}class D6 extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ic(this.value.arrayValue,n)}}class O6 extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ic(this.value.arrayValue,n)}}class M6 extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!p_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ic(this.value.arrayValue,i))}}/**
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
 */class P6{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function H0(t,e=null,n=[],i=[],s=null,r=null,o=null){return new P6(t,e,n,i,s,r,o)}function g_(t){const e=_e(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Jp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),kf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Po(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Po(i)).join(",")),e.ft=n}return e.ft}function m_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!x6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z0(t.startAt,e.startAt)&&z0(t.endAt,e.endAt)}function Zp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function N6(t,e,n,i,s,r,o,a){return new ll(t,e,n,i,s,r,o,a)}function Sf(t){return new ll(t)}function j0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function __(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function YI(t){return t.collectionGroup!==null}function mo(t){const e=_e(t);if(e.dt===null){e.dt=[];const n=__(e),i=GI(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new za(n)),e.dt.push(new za(Zt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new za(Zt.keyField(),r))}}}return e.dt}function Ki(t){const e=_e(t);if(!e.wt)if(e.limitType==="F")e.wt=H0(e.path,e.collectionGroup,mo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of mo(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new za(r.field,o))}const i=e.endAt?new ph(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ph(e.startAt.position,e.startAt.inclusive):null;e.wt=H0(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function eg(t,e){e.getFirstInequalityField(),__(t);const n=t.filters.concat([e]);return new ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tg(t,e,n){return new ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Af(t,e){return m_(Ki(t),Ki(e))&&t.limitType===e.limitType}function XI(t){return`${g_(Ki(t))}|lt:${t.limitType}`}function ng(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>qI(i)).join(", ")}]`),kf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Po(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Po(i)).join(",")),`Target(${n})`}(Ki(t))}; limitType=${t.limitType})`}function Rf(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ne.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of mo(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=$0(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,mo(n),i)||n.endAt&&!function(s,r,o){const a=$0(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,mo(n),i))}(t,e)}function L6(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QI(t){return(e,n)=>{let i=!1;for(const s of mo(t)){const r=F6(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function F6(t,e,n){const i=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Mo(a,c):le()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return UI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6=new St(ne.comparator);function Gi(){return U6}const JI=new St(ne.comparator);function xa(...t){let e=JI;for(const n of t)e=e.insert(n.key,n);return e}function ZI(t){let e=JI;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function hr(){return Ha()}function ex(){return Ha()}function Ha(){return new ia(t=>t.toString(),(t,e)=>t.isEqual(e))}const V6=new St(ne.comparator),B6=new Ct(ne.comparator);function Ae(...t){let e=B6;for(const n of t)e=e.add(n);return e}const $6=new Ct($e);function tx(){return $6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dh(e)?"-0":e}}function ix(t){return{integerValue:""+t}}function z6(t,e){return b6(e)?ix(e):nx(t,e)}/**
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
 */class Df{constructor(){this._=void 0}}function H6(t,e,n){return t instanceof gh?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof xc?rx(t,e):t instanceof Cc?ox(t,e):function(i,s){const r=sx(i,s),o=W0(r)+W0(i._t);return Qp(r)&&Qp(i._t)?ix(o):nx(i.serializer,o)}(t,e)}function j6(t,e,n){return t instanceof xc?rx(t,e):t instanceof Cc?ox(t,e):n}function sx(t,e){return t instanceof mh?Qp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class gh extends Df{}class xc extends Df{constructor(e){super(),this.elements=e}}function rx(t,e){const n=ax(e);for(const i of t.elements)n.some(s=>Ti(s,i))||n.push(i);return{arrayValue:{values:n}}}class Cc extends Df{constructor(e){super(),this.elements=e}}function ox(t,e){let n=ax(e);for(const i of t.elements)n=n.filter(s=>!Ti(s,i));return{arrayValue:{values:n}}}class mh extends Df{constructor(e,n){super(),this.serializer=e,this._t=n}}function W0(t){return wt(t.integerValue||t.doubleValue)}function ax(t){return p_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function W6(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof xc&&i instanceof xc||n instanceof Cc&&i instanceof Cc?Do(n.elements,i.elements,Ti):n instanceof mh&&i instanceof mh?Ti(n._t,i._t):n instanceof gh&&i instanceof gh}(t.transform,e.transform)}class q6{constructor(e,n){this.version=e,this.transformResults=n}}class ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Of{}function cx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new y_(t.key,ti.none()):new ul(t.key,t.data,ti.none());{const n=t.data,i=mn.empty();let s=new Ct(Zt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Hs(t.key,i,new Sn(s.toArray()),ti.none())}}function K6(t,e,n){t instanceof ul?function(i,s,r){const o=i.value.clone(),a=K0(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hs?function(i,s,r){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=K0(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(lx(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,i){return t instanceof ul?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const c=s.value.clone(),l=G0(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Hs?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const c=G0(s.fieldTransforms,a,r),l=r.data;return l.setAll(lx(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Iu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function G6(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=sx(i.transform,s||null);r!=null&&(n===null&&(n=mn.empty()),n.set(i.field,r))}return n||null}function q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Do(n,i,(s,r)=>W6(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ul extends Of{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hs extends Of{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function K0(t,e,n){const i=new Map;ot(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,j6(o,a,n[s]))}return i}function G0(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,H6(r,o,e))}return i}class y_ extends Of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Y6 extends Of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&K6(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=ex();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=cx(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,i)=>q0(n,i))&&Do(this.baseMutations,e.baseMutations,(n,i)=>q0(n,i))}}class v_{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){ot(e.mutations.length===i.length);let s=V6;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new v_(e,n,i,s)}}/**
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
 */class Q6{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J6{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Oe;function Z6(t){switch(t){default:return le();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function ux(t){if(t===void 0)return qi("GRPC error has no .code"),O.UNKNOWN;switch(t){case bt.OK:return O.OK;case bt.CANCELLED:return O.CANCELLED;case bt.UNKNOWN:return O.UNKNOWN;case bt.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case bt.INTERNAL:return O.INTERNAL;case bt.UNAVAILABLE:return O.UNAVAILABLE;case bt.UNAUTHENTICATED:return O.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case bt.NOT_FOUND:return O.NOT_FOUND;case bt.ALREADY_EXISTS:return O.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return O.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case bt.ABORTED:return O.ABORTED;case bt.OUT_OF_RANGE:return O.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return O.UNIMPLEMENTED;case bt.DATA_LOSS:return O.DATA_LOSS;default:return le()}}(Oe=bt||(bt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class b_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Bl}static getOrCreateInstance(){return Bl===null&&(Bl=new b_),Bl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Bl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Mf(de.min(),s,tx(),Gi(),Ae())}}class hl{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new hl(i,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class hx{constructor(e,n){this.targetId=e,this.Et=n}}class fx{constructor(e,n,i=on.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Y0{constructor(){this.At=0,this.Rt=Q0(),this.vt=on.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Ae(),n=Ae(),i=Ae();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:le()}}),new hl(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Q0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class eL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gi(),this.qt=X0(),this.Ut=new Ct($e)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(Zp(o))if(s===0){const a=new ne(o.path);this.Qt(i,a,Qt.newNoDocument(a,de.min()))}else ot(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=b_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Zp(a.target)){const c=new ne(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Qt.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=Ae();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Mf(e,n,this.Ut,this.Lt,i);return this.Lt=Gi(),this.qt=X0(),this.Ut=new Ct($e),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Y0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ct($e),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Y0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function X0(){return new St(ne.comparator)}function Q0(){return new St(ne.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iL=(()=>({and:"AND",or:"OR"}))();class sL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _h(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rL(t,e){return _h(t,e.toTimestamp())}function yi(t){return ot(!!t),de.fromTimestamp(function(e){const n=Ms(e);return new Tt(n.seconds,n.nanos)}(t))}function w_(t,e){return function(n){return new nt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function px(t){const e=nt.fromString(t);return ot(yx(e)),e}function ig(t,e){return w_(t.databaseId,e.path)}function Ad(t,e){const n=px(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(gx(n))}function sg(t,e){return w_(t.databaseId,e)}function oL(t){const e=px(t);return e.length===4?nt.emptyPath():gx(e)}function rg(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gx(t){return ot(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J0(t,e,n){return{name:ig(t,e),fields:n.value.mapValue.fields}}function aL(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(ot(l===void 0||typeof l=="string"),on.fromBase64String(l||"")):(ot(l===void 0||l instanceof Uint8Array),on.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:ux(c.code);return new K(l,c.message||"")}(o);n=new fx(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ad(t,i.document.name),r=yi(i.document.updateTime),o=i.document.createTime?yi(i.document.createTime):de.min(),a=new mn({mapValue:{fields:i.document.fields}}),c=Qt.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new xu(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ad(t,i.document),r=i.readTime?yi(i.readTime):de.min(),o=Qt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ad(t,i.document),r=i.removedTargetIds||[];n=new xu([],r,s,null)}else{if(!("filter"in e))return le();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new J6(s),o=i.targetId;n=new hx(o,r)}}return n}function cL(t,e){let n;if(e instanceof ul)n={update:J0(t,e.key,e.value)};else if(e instanceof y_)n={delete:ig(t,e.key)};else if(e instanceof Hs)n={update:J0(t,e.key,e.data),updateMask:_L(e.fieldMask)};else{if(!(e instanceof Y6))return le();n={verify:ig(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof gh)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xc)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cc)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw le()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function lL(t,e){return t&&t.length>0?(ot(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?yi(i.updateTime):yi(s);return r.isEqual(de.min())&&(r=yi(s)),new q6(r,i.transformResults||[])}(n,e))):[]}function uL(t,e){return{documents:[sg(t,e.path)]}}function hL(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=sg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(c){if(c.length!==0)return _x(ii.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:eo(u.field),direction:pL(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.useProto3Json||kf(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fL(t){let e=oL(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ot(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=mx(u);return h instanceof ii&&jI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new za(to(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,kf(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ph(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ph(f,h)}(n.endAt)),N6(e,s,o,r,a,"F",c,l)}function dL(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return le()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mx(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=to(e.unaryFilter.field);return Et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=to(e.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(e.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=to(e.unaryFilter.field);return Et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(e){return Et.create(to(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ii.create(e.compositeFilter.filters.map(n=>mx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return le()}}(e.compositeFilter.op))}(t):le()}function pL(t){return tL[t]}function gL(t){return nL[t]}function mL(t){return iL[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return Zt.fromServerFormat(t.fieldPath)}function _x(t){return t instanceof Et?function(e){if(e.op==="=="){if(B0(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NAN"}};if(V0(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(B0(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NOT_NAN"}};if(V0(e.value))return{unaryFilter:{field:eo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(e.field),op:gL(e.op),value:e.value}}}(t):t instanceof ii?function(e){const n=e.getFilters().map(i=>_x(i));return n.length===1?n[0]:{compositeFilter:{op:mL(e.op),filters:n}}}(t):le()}function _L(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,i,s,r=de.min(),o=de.min(),a=on.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.se=e}}function vL(t){const e=fL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tg(e,e.limit,"L"):e}/**
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
 */class bL{constructor(){this.He=new wL}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Os.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class wL{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ct(nt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ct(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new No(0)}static bn(){return new No(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.changes=new ia(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ja(i.mutation,s,Sn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ae()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ae()){const s=hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=xa();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ae()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Gi();const o=Ha(),a=Ha();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Hs)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ja(u.mutation,l,u.mutation.getFieldMask(),Tt.now())):o.set(l.key,Sn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TL(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ha();let s=new St((o,a)=>o-a),r=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||Sn.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||Ae()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ex();u.forEach(f=>{if(!r.has(f)){const d=cx(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return L.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):L.resolve(hr());let a=-1,c=r;return o.next(l=>L.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Ae())).next(u=>({batchId:a,changes:ZI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(i=>{let s=xa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=xa();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const c=function(l,u){return new ll(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Qt.newInvalidDocument(l)))});let o=xa();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&ja(l.mutation,c,Sn.empty(),Tt.now()),Rf(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:yi(i.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:vL(i.bundledQuery),readTime:yi(i.readTime)}}(n)),L.resolve()}}/**
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
 */class CL{constructor(){this.overlays=new St(ne.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=hr();return L.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=hr(),r=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new St((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=hr(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=hr(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return L.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Q6(n,i));let r=this.ts.get(n);r===void 0&&(r=Ae(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.es=new Ct(Ot.ns),this.ss=new Ct(Ot.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new Ot(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new Ot(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new ne(new nt([])),i=new Ot(n,e),s=new Ot(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new ne(new nt([])),i=new Ot(n,e),s=new Ot(n,e+1);let r=Ae();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ot(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ot{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return ne.comparator(e.key,n.key)||$e(e.ds,n.ds)}static rs(e,n){return $e(e.ds,n.ds)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ct(Ot.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new X6(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Ot(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ot(n,0),s=new Ot(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ct($e);return n.forEach(s=>{const r=new Ot(s,0),o=new Ot(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),L.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ne.isDocumentKey(r)||(r=r.child(""));const o=new Ot(new ne(r),0);let a=new Ct($e);return this._s.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ot(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return L.forEach(n.mutations,s=>{const r=new Ot(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new Ot(n,0),s=this._s.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.Ts=e,this.docs=new St(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let i=Gi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Qt.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Gi();const o=n.path,a=new ne(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||_6(m6(u),i)<=0||(s.has(u.key)||Rf(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,i,s){le()}Es(e,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new AL(this)}getSize(e){return L.resolve(this.size)}}class AL extends EL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.persistence=e,this.As=new ia(n=>g_(n),m_),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Rs=0,this.vs=new E_,this.targetCount=0,this.bs=No.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new No(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new d_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new RL(this),this.indexManager=new bL,this.remoteDocumentCache=function(i){return new SL(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new yL(n),this.xs=new xL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new kL(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){Q("MemoryPersistence","Starting transaction:",e);const s=new OL(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class OL extends v6{constructor(e){super(),this.currentSequenceNumber=e}}class T_{constructor(e){this.persistence=e,this.$s=new E_,this.Ms=null}static Fs(e){return new T_(e)}get Bs(){if(this.Ms)return this.Ms;throw le()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,i=>{const s=ne.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,de.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ML{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(j0(n))return L.resolve(null);let i=Ki(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tg(n,null,"F"),i=Ki(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ae(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,tg(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,i,s){return j0(n)||s.isEqual(de.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(P0()<=Ue.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ng(n)),this.Fi(e,o,n,g6(s,-1)))})}$i(e,n){let i=new Ct(QI(e));return n.forEach((s,r)=>{Rf(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return P0()<=Ue.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",ng(n)),this.xi.getDocumentsMatchingQuery(e,n,Os.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new St($e),this.qi=new ia(r=>g_(r),m_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function NL(t,e,n,i){return new PL(t,e,n,i)}async function vx(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=Ae();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function LL(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=L.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);ot(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function bx(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function FL(t,e){const n=_e(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(on.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let c=Gi(),l=Ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(UL(r,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!i.isEqual(de.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Li=s,r))}function UL(t,e,n){let i=Ae(),s=Ae();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Gi();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:s}})}function VL(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function BL(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,L.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new br(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function og(t,e,n){const i=_e(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cl(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function Z0(t,e,n){const i=_e(t);let s=de.min(),r=Ae();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=_e(a),h=u.qi.get(l);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(i,o,Ki(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?r:Ae())).next(a=>($L(i,L6(e),a),{documents:a,Wi:r})))}function $L(t,e,n){let i=t.Ui.get(e)||de.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class e1{constructor(){this.activeTargetIds=tx()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zL{constructor(){this.Br=new e1,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new e1,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HL{qr(e){}shutdown(){}}/**
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
 */class t1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $l=null;function Rd(){return $l===null?$l=268435456+Math.round(2147483648*Math.random()):$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class qL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Rd(),a=this.ao(e,n);Q("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.ho(c,s,r),this.lo(e,a,c,i).then(l=>(Q("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw fh("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+na,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=jL[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Rd();return new Promise((o,a)=>{const c=new r6;c.setWithCredentials(!0),c.listenOnce(n6.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sd.NO_ERROR:const u=c.getResponseJson();Q(qt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Sd.TIMEOUT:Q(qt,`RPC '${e}' ${r} timed out`),a(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case Sd.HTTP_ERROR:const h=c.getStatus();if(Q(qt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(g)>=0?g:O.UNKNOWN}(d.status);a(new K(p,d.message))}else a(new K(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(O.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Q(qt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);Q(qt,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}wo(e,n,i){const s=Rd(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=e6(),a=t6(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new s6({})),this.ho(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=r.join("");Q(qt,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new WL({Wr:m=>{f?Q(qt,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(Q(qt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),Q(qt,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,g,_)=>{m.listen(g,v=>{try{_(v)}catch(w){setTimeout(()=>{throw w},0)}})};return p(u,Fl.EventType.OPEN,()=>{f||Q(qt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Fl.EventType.CLOSE,()=>{f||(f=!0,Q(qt,`RPC '${e}' stream ${s} transport closed`),d.so())}),p(u,Fl.EventType.ERROR,m=>{f||(f=!0,fh(qt,`RPC '${e}' stream ${s} transport errored:`,m),d.so(new K(O.UNAVAILABLE,"The operation could not be completed")))}),p(u,Fl.EventType.MESSAGE,m=>{var g;if(!f){const _=m.data[0];ot(!!_);const v=_,w=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(w){Q(qt,`RPC '${e}' stream ${s} received error:`,w);const I=w.status;let b=function(k){const x=bt[k];if(x!==void 0)return ux(x)}(I),C=w.message;b===void 0&&(b=O.INTERNAL,C="Unknown error status: "+I+" with message "+w.message),f=!0,d.so(new K(b,C)),u.close()}else Q(qt,`RPC '${e}' stream ${s} received:`,_),d.io(_)}}),p(a,i6.STAT_EVENT,m=>{m.stat===O0.PROXY?Q(qt,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===O0.NOPROXY&&Q(qt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){return new sL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,i,s,r,o,a,c){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new wx(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(qi(n.toString()),qi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new K(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KL extends Ex{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=aL(this.serializer,e),i=function(s){if(!("targetChange"in s))return de.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?de.min():r.readTime?yi(r.readTime):de.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=rg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=Zp(a)?{documents:uL(s,a)}:{query:hL(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=dx(s,r.resumeToken):r.snapshotVersion.compareTo(de.min())>0&&(o.readTime=_h(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=dL(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=rg(this.serializer),n.removeTarget=e,this.Fo(n)}}class GL extends Ex{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ot(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=lL(e.writeResults,e.commitTime),i=yi(e.commitTime);return this.listener.Zo(i,n)}return ot(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=rg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>cL(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(O.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class XL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(qi(n),this.ru=!1):Q("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{Hr(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_e(a);c.du.add(4),await fl(c),c.mu.set("Unknown"),c.du.delete(4),await Nf(c)}(this))})}),this.mu=new XL(i,s)}}async function Nf(t){if(Hr(t))for(const e of t.wu)await e(!0)}async function fl(t){for(const e of t.wu)await e(!1)}function Tx(t,e){const n=_e(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),k_(n)?C_(n):sa(n).No()&&x_(n,e))}function Ix(t,e){const n=_e(t),i=sa(n);n.fu.delete(e),i.No()&&xx(n,e),n.fu.size===0&&(i.No()?i.$o():Hr(n)&&n.mu.set("Unknown"))}function x_(t,e){t.gu.Ot(e.targetId),sa(t).jo(e)}function xx(t,e){t.gu.Ot(e),sa(t).Wo(e)}function C_(t){t.gu=new eL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),sa(t).start(),t.mu.ou()}function k_(t){return Hr(t)&&!sa(t).xo()&&t.fu.size>0}function Hr(t){return _e(t).du.size===0}function Cx(t){t.gu=void 0}async function JL(t){t.fu.forEach((e,n)=>{x_(t,e)})}async function ZL(t,e){Cx(t),k_(t)?(t.mu.au(e),C_(t)):t.mu.set("Unknown")}async function e5(t,e,n){if(t.mu.set("Online"),e instanceof fx&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await yh(t,i)}else if(e instanceof xu?t.gu.Kt(e):e instanceof hx?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(de.min()))try{const i=await bx(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.fu.get(c);l&&s.fu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(on.EMPTY_BYTE_STRING,c.snapshotVersion)),xx(s,a);const l=new br(c.target,a,1,c.sequenceNumber);x_(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await yh(t,i)}}async function yh(t,e,n){if(!cl(e))throw e;t.du.add(1),await fl(t),t.mu.set("Offline"),n||(n=()=>bx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Nf(t)})}function kx(t,e){return e().catch(n=>yh(t,n,e))}async function Lf(t){const e=_e(t),n=Ps(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;t5(e);)try{const s=await VL(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,n5(e,s)}catch(s){await yh(e,s)}Sx(e)&&Ax(e)}function t5(t){return Hr(t)&&t.lu.length<10}function n5(t,e){t.lu.push(e);const n=Ps(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Sx(t){return Hr(t)&&!Ps(t).xo()&&t.lu.length>0}function Ax(t){Ps(t).start()}async function i5(t){Ps(t).tu()}async function s5(t){const e=Ps(t);for(const n of t.lu)e.Yo(n.mutations)}async function r5(t,e,n){const i=t.lu.shift(),s=v_.from(i,e,n);await kx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Lf(t)}async function o5(t,e){e&&Ps(t).Jo&&await async function(n,i){if(s=i.code,Z6(s)&&s!==O.ABORTED){const r=n.lu.shift();Ps(n).Oo(),await kx(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Lf(n)}var s}(t,e),Sx(t)&&Ax(t)}async function n1(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=Hr(n);n.du.add(3),await fl(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Nf(n)}async function a5(t,e){const n=_e(t);e?(n.du.delete(2),await Nf(n)):e||(n.du.add(2),await fl(n),n.mu.set("Unknown"))}function sa(t){return t.yu||(t.yu=function(e,n,i){const s=_e(e);return s.nu(),new KL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:JL.bind(null,t),Zr:ZL.bind(null,t),zo:e5.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),k_(t)?C_(t):t.mu.set("Unknown")):(await t.yu.stop(),Cx(t))})),t.yu}function Ps(t){return t.pu||(t.pu=function(e,n,i){const s=_e(e);return s.nu(),new GL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:i5.bind(null,t),Zr:o5.bind(null,t),Xo:s5.bind(null,t),Zo:r5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Lf(t)):(await t.pu.stop(),t.lu.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new S_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A_(t,e){if(qi("AsyncQueue",`${e}: ${t}`),cl(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ne.comparator(n.key,i.key):(n,i)=>ne.comparator(n.key,i.key),this.keyedMap=xa(),this.sortedSet=new St(this.comparator)}static emptySet(e){return new _o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new _o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Iu=new St(ne.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):le():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Lo{constructor(e,n,i,s,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,_o.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{constructor(){this.Eu=void 0,this.listeners=[]}}class l5{constructor(){this.queries=new ia(e=>XI(e),Af),this.onlineState="Unknown",this.Au=new Set}}async function R_(t,e){const n=_e(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new c5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=A_(o,`Initialization of query '${ng(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&O_(n)}async function D_(t,e){const n=_e(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function u5(t,e){const n=_e(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&O_(n)}function h5(t,e,n){const i=_e(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function O_(t){t.Au.forEach(e=>{e.next()})}class M_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.key=e}}class Dx{constructor(e){this.key=e}}class f5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Ae(),this.mutatedKeys=Ae(),this.Ku=QI(e),this.Gu=new _o(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new i1,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Rf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(i.track({type:3,doc:d}),g=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),g=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),g=!0):f&&!d&&(i.track({type:1,doc:f}),g=!0,(c||l)&&(a=!0)),g&&(d?(o=o.add(d),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((l,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Lo(this.query,e.Gu,s,r,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new i1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Ae(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new Dx(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new Rx(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=Ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Lo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class d5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class p5{constructor(e){this.key=e,this.ec=!1}}class g5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ia(a=>XI(a),Af),this.ic=new Map,this.rc=new Set,this.oc=new St(ne.comparator),this.uc=new Map,this.cc=new E_,this.ac={},this.hc=new Map,this.lc=No.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function m5(t,e){const n=C5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await BL(n.localStore,Ki(e));n.isPrimaryClient&&Tx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await _5(n,e,i,a==="current",o.resumeToken)}return s}async function _5(t,e,n,i,s){t.dc=(h,f,d)=>async function(p,m,g,_){let v=m.view.zu(g);v.Mi&&(v=await Z0(p.localStore,m.query,!1).then(({documents:b})=>m.view.zu(b,v)));const w=_&&_.targetChanges.get(m.targetId),I=m.view.applyChanges(v,p.isPrimaryClient,w);return r1(p,m.targetId,I.Yu),I.snapshot}(t,h,f,d);const r=await Z0(t.localStore,e,!0),o=new f5(e,r.Wi),a=o.zu(r.documents),c=hl.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);r1(t,n,l.Yu);const u=new d5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function y5(t,e){const n=_e(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Af(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await og(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ix(n.remoteStore,i.targetId),ag(n,i.targetId)}).catch(al)):(ag(n,i.targetId),await og(n.localStore,i.targetId,!0))}async function v5(t,e,n){const i=k5(t);try{const s=await function(r,o){const a=_e(r),c=Tt.now(),l=o.reduce((f,d)=>f.add(d.key),Ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Gi(),p=Ae();return a.Ki.getEntries(f,l).next(m=>{d=m,d.forEach((g,_)=>{_.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const g=[];for(const _ of o){const v=G6(_,u.get(_.key).overlayedDocument);v!=null&&g.push(new Hs(_.key,v,$I(v.value.mapValue),ti.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:ZI(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new St($e)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(i,s.batchId,n),await dl(i,s.changes),await Lf(i.remoteStore)}catch(s){const r=A_(s,"Failed to persist write");n.reject(r)}}async function Ox(t,e){const n=_e(t);try{const i=await FL(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(ot(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?ot(o.ec):s.removedDocuments.size>0&&(ot(o.ec),o.ec=!1))}),await dl(n,i,e)}catch(i){await al(i)}}function s1(t,e,n){const i=_e(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=_e(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&O_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function b5(t,e,n){const i=_e(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new St(ne.comparator);o=o.insert(r,Qt.newNoDocument(r,de.min()));const a=Ae().add(r),c=new Mf(de.min(),new Map,new Ct($e),o,a);await Ox(i,c),i.oc=i.oc.remove(r),i.uc.delete(e),P_(i)}else await og(i.localStore,e,!1).then(()=>ag(i,e,n)).catch(al)}async function w5(t,e){const n=_e(t),i=e.batch.batchId;try{const s=await LL(n.localStore,e);Px(n,i,null),Mx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await dl(n,s)}catch(s){await al(s)}}async function E5(t,e,n){const i=_e(t);try{const s=await function(r,o){const a=_e(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ot(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);Px(i,e,n),Mx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await dl(i,s)}catch(s){await al(s)}}function Mx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Px(t,e,n){const i=_e(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function ag(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||Nx(t,i)})}function Nx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ix(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),P_(t))}function r1(t,e,n){for(const i of n)i instanceof Rx?(t.cc.addReference(i.key,e),T5(t,i)):i instanceof Dx?(Q("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||Nx(t,i.key)):le()}function T5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Q("SyncEngine","New document in limbo: "+n),t.rc.add(i),P_(t))}function P_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ne(nt.fromString(e)),i=t.lc.next();t.uc.set(i,new p5(n)),t.oc=t.oc.insert(n,i),Tx(t.remoteStore,new br(Ki(Sf(n.path)),i,2,d_.ct))}}async function dl(t,e,n){const i=_e(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,c)=>{o.push(i.dc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=I_.Di(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,c){const l=_e(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(c,h=>L.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!cl(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,p)}}}(i.localStore,r))}async function I5(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const i=await vx(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(O.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await dl(n,i.Qi)}}function x5(t,e){const n=_e(t),i=n.uc.get(e);if(i&&i.ec)return Ae().add(i.key);{let s=Ae();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function C5(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ox.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b5.bind(null,e),e.nc.zo=u5.bind(null,e.eventManager),e.nc.wc=h5.bind(null,e.eventManager),e}function k5(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E5.bind(null,e),e}class o1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NL(this.persistence,new ML,e.initialUser,this.serializer)}createPersistence(e){return new DL(T_.Fs,this.serializer)}createSharedClientState(e){return new zL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>s1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=I5.bind(null,this.syncEngine),await a5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new l5}createDatastore(e){const n=Pf(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new qL(s));var s;return function(r,o,a,c){return new YL(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>s1(this.syncEngine,a,0),o=t1.D()?new t1:new HL,new QL(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,c,l){const u=new g5(i,s,r,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=_e(e);Q("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):qi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Gt.UNAUTHENTICATED,this.clientId=FI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=A_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Od(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await vx(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function a1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D5(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>n1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>n1(e.remoteStore,r)),t._onlineComponents=e}function R5(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function D5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!R5(n))throw n;fh("Error using user provided cache. Falling back to memory cache: "+n),await Od(t,new o1)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Od(t,new o1);return t._offlineComponents}async function Lx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await a1(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await a1(t,new S5))),t._onlineComponents}function O5(t){return Lx(t).then(e=>e.syncEngine)}async function vh(t){const e=await Lx(t),n=e.eventManager;return n.onListen=m5.bind(null,e.syncEngine),n.onUnlisten=y5.bind(null,e.syncEngine),n}function M5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new N_({next:h=>{r.enqueueAndForget(()=>D_(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new M_(Sf(o.path),l,{includeMetadataChanges:!0,xu:!0});return R_(s,u)}(await vh(t),t.asyncQueue,e,n,i)),i.promise}function P5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new N_({next:h=>{r.enqueueAndForget(()=>D_(s,u)),h.fromCache&&a.source==="server"?c.reject(new K(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new M_(o,l,{includeMetadataChanges:!0,xu:!0});return R_(s,u)}(await vh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function N5(t,e,n,i){if(e===!0&&i===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l1(t){if(!ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function u1(t){if(ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,N5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new o6;switch(n.type){case"firstParty":return new u6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=c1.get(e);n&&(Q("ComponentProvider","Removing Datastore"),c1.delete(e),n.terminate())}(this),Promise.resolve()}}function L5(t,e,n,i={}){var s;const r=(t=Dn(t,Uf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&fh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Gt.MOCK_USER;else{o=bR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Gt(c)}t._authCredentials=new a6(new LI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class jr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Cs extends jr{constructor(e,n,i){super(e,n,Sf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new ne(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function Mn(t,e,...n){if(t=$t(t),Fx("collection","path",e),t instanceof Uf){const i=nt.fromString(e,...n);return u1(i),new Cs(t,null,i)}{if(!(t instanceof sn||t instanceof Cs))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return u1(i),new Cs(t.firestore,null,i)}}function ge(t,e,...n){if(t=$t(t),arguments.length===1&&(e=FI.A()),Fx("doc","path",e),t instanceof Uf){const i=nt.fromString(e,...n);return l1(i),new sn(t,null,new ne(i))}{if(!(t instanceof sn||t instanceof Cs))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return l1(i),new sn(t.firestore,t instanceof Cs?t.converter:null,new ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new wx(this,"async_queue_retry"),this.qc=()=>{const n=Dd();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Dd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new zi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!cl(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw qi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=S_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&le()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function f1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ns extends Uf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new F5,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ux(this),this._firestoreClient.terminate()}}function U5(t,e){const n=typeof t=="object"?t:dm(),i=typeof t=="string"?t:e||"(default)",s=fm(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=yR("firestore");r&&L5(s,...r)}return s}function Vf(t){return t._firestoreClient||Ux(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ux(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,c,l){return new T6(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new A5(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fo(on.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fo(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const V5=/^__.*__$/;class B5{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ul(e,this.data,n,this.fieldTransforms)}}class Vx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class F_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new F_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return bh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Bx(this.Yc)&&V5.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class $5{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Pf(e)}ua(e,n,i,s=!1){return new F_({Yc:e,methodName:n,oa:i,path:Zt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function U_(t){const e=t._freezeSettings(),n=Pf(t._databaseId);return new $5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z5(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);V_("Data must be an object, but it was:",o,i);const a=$x(i,o);let c,l;if(r.merge)c=new Sn(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=cg(e,h,n);if(!o.contains(f))throw new K(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Hx(u,f)||u.push(f)}c=new Sn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new B5(new mn(a),c,l)}class zf extends L_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zf}}function H5(t,e,n,i){const s=t.ua(1,e,n);V_("Data must be an object, but it was:",s,i);const r=[],o=mn.empty();zr(i,(c,l)=>{const u=B_(e,c,n);l=$t(l);const h=s.na(u);if(l instanceof zf)r.push(u);else{const f=pl(l,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Sn(r);return new Vx(o,a,s.fieldTransforms)}function j5(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[cg(e,i,n)],c=[s];if(r.length%2!=0)throw new K(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(cg(e,r[f])),c.push(r[f+1]);const l=[],u=mn.empty();for(let f=a.length-1;f>=0;--f)if(!Hx(l,a[f])){const d=a[f];let p=c[f];p=$t(p);const m=o.na(d);if(p instanceof zf)l.push(d);else{const g=pl(p,m);g!=null&&(l.push(d),u.set(d,g))}}const h=new Sn(l);return new Vx(u,h,o.fieldTransforms)}function W5(t,e,n,i=!1){return pl(n,t.ua(i?4:3,e))}function pl(t,e){if(zx(t=$t(t)))return V_("Unsupported field value:",e,t),$x(t,e);if(t instanceof L_)return function(n,i){if(!Bx(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=pl(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return z6(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Tt.fromDate(n);return{timestampValue:_h(i.serializer,s)}}if(n instanceof Tt){const s=new Tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_h(i.serializer,s)}}if(n instanceof $f)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fo)return{bytesValue:dx(i.serializer,n._byteString)};if(n instanceof sn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:w_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Ff(n)}`)}(t,e)}function $x(t,e){const n={};return UI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(i,s)=>{const r=pl(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function zx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof $f||t instanceof Fo||t instanceof sn||t instanceof L_)}function V_(t,e,n){if(!zx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ff(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function cg(t,e,n){if((e=$t(e))instanceof Bf)return e._internalPath;if(typeof e=="string")return B_(t,e);throw bh("Field path arguments must be of type string or ",t,!1,void 0,n)}const q5=new RegExp("[~\\*/\\[\\]]");function B_(t,e,n){if(e.search(q5)>=0)throw bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bf(...e.split("."))._internalPath}catch{throw bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new K(O.INVALID_ARGUMENT,a+t+c)}function Hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K5 extends jx{data(){return super.data()}}function $_(t,e){return typeof e=="string"?B_(t,e):e instanceof Bf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z_{}class G5 extends z_{}function Md(t,e,...n){let i=[];e instanceof z_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof H_).length,o=s.filter(a=>a instanceof Hf).length;if(r>1||r>0&&o>0)throw new K(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Hf extends G5{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Hf(e,n,i)}_apply(e){const n=this._parse(e);return qx(e._query,n),new jr(e.firestore,e.converter,eg(e._query,n))}_parse(e){const n=U_(e.firestore);return function(s,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new K(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){p1(u,l);const f=[];for(const d of u)f.push(d1(a,s,d));h={arrayValue:{values:f}}}else h=d1(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||p1(u,l),h=W5(o,r,u,l==="in"||l==="not-in");return Et.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Pd(t,e,n){const i=e,s=$_("where",t);return Hf._create(s,i,n)}class H_ extends z_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new H_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ii.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)qx(r,a),r=eg(r,a)}(e._query,n),new jr(e.firestore,e.converter,eg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function d1(t,e,n){if(typeof(n=$t(n))=="string"){if(n==="")throw new K(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YI(e)&&n.indexOf("/")!==-1)throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(nt.fromString(n));if(!ne.isDocumentKey(i))throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return U0(t,new ne(i))}if(n instanceof sn)return U0(t,n._key);throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ff(n)}.`)}function p1(t,e){if(!Array.isArray(t)||t.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qx(t,e){if(e.isInequality()){const i=__(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new K(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=GI(t);r!==null&&Y5(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Y5(t,e,n){if(!n.isEqual(e))throw new K(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class X5{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){const i={};return zr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new $f(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=BI(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ec(e));default:return null}}convertTimestamp(e){const n=Ms(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=nt.fromString(e);ot(yx(i));const s=new Tc(i.get(1),i.get(3)),r=new ne(i.popFirst(5));return s.isEqual(n)||qi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kx extends jx{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field($_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Cu extends Kx{data(e={}){return super.data(e)}}class Gx{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ca(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Cu(this._firestore,this._userDataWriter,i.key,i,new Ca(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Cu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ca(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Cu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ca(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:J5(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function J5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){t=Dn(t,sn);const e=Dn(t.firestore,Ns);return M5(Vf(e),t._key).then(n=>Yx(e,t,n))}class W_ extends X5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function Z5(t){t=Dn(t,jr);const e=Dn(t.firestore,Ns),n=Vf(e),i=new W_(e);return Wx(t._query),P5(n,t._query).then(s=>new Gx(e,i,t,s))}function ms(t,e,n){t=Dn(t,sn);const i=Dn(t.firestore,Ns),s=Q5(t.converter,e,n);return K_(i,[z5(U_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ti.none())])}function Vt(t,e,n,...i){t=Dn(t,sn);const s=Dn(t.firestore,Ns),r=U_(s);let o;return o=typeof(e=$t(e))=="string"||e instanceof Bf?j5(r,"updateDoc",t._key,e,n,i):H5(r,"updateDoc",t._key,e),K_(s,[o.toMutation(t._key,ti.exists(!0))])}function e8(t){return K_(Dn(t.firestore,Ns),[new y_(t._key,ti.none())])}function q_(t,...e){var n,i,s;t=$t(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||f1(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(f1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof sn)l=Dn(t.firestore,Ns),u=Sf(t._key.path),c={next:h=>{e[o]&&e[o](Yx(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dn(t,jr);l=Dn(h.firestore,Ns),u=h._query;const f=new W_(l);c={next:d=>{e[o]&&e[o](new Gx(l,f,h,d))},error:e[o+1],complete:e[o+2]},Wx(t._query)}return function(h,f,d,p){const m=new N_(p),g=new M_(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>R_(await vh(h),g)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>D_(await vh(h),g))}}(Vf(l),u,a,c)}function K_(t,e){return function(n,i){const s=new zi;return n.asyncQueue.enqueueAndForget(async()=>v5(await O5(n),i,s)),s.promise}(Vf(t),e)}function Yx(t,e,n){const i=n.docs.get(e._key),s=new W_(t);return new Kx(t,s,e._key,i,new Ca(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){na=n})(Bs),bi(new ni("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ns(new c6(n.getProvider("auth-internal")),new f6(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tc(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),An(M0,"3.10.1",t),An(M0,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="firebasestorage.googleapis.com",t8="storageBucket",n8=2*60*1e3,i8=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends xi{constructor(e,n,i=0){super(Nd(e),`Firebase Storage: ${n} (${Nd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ci.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ii;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ii||(Ii={}));function Nd(t){return"storage/"+t}function s8(){const t="An unknown error occurred, please check the error payload for server response.";return new Ci(Ii.UNKNOWN,t)}function r8(){return new Ci(Ii.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function o8(){return new Ci(Ii.CANCELED,"User canceled the upload/download.")}function a8(t){return new Ci(Ii.INVALID_URL,"Invalid URL '"+t+"'.")}function c8(t){return new Ci(Ii.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function g1(t){return new Ci(Ii.INVALID_ARGUMENT,t)}function Qx(){return new Ci(Ii.APP_DELETED,"The Firebase app was deleted.")}function l8(t){return new Ci(Ii.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(i.path==="")return i;throw c8(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},m=n===Xx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp(`^https?://${m}/${s}/${g}`,"i"),w=[{regex:a,indices:c,postModify:r},{regex:d,indices:p,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<w.length;I++){const b=w[I],C=b.regex.exec(e);if(C){const k=C[b.indices.bucket];let x=C[b.indices.path];x||(x=""),i=new Xn(k,x),b.postModify(i);break}}if(i==null)throw a8(e);return i}}class u8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h8(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...g){l||(l=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,t(d,c())},g)}function f(){r&&clearTimeout(r)}function d(g,..._){if(l){f();return}if(g){f(),u.call(null,g,..._);return}if(c()||o){f(),u.call(null,g,..._);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let p=!1;function m(g){p||(p=!0,f(),!l&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function f8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d8(t){return t!==void 0}function m1(t,e,n,i){if(i<e)throw g1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw g1(`Invalid value for '${t}'. Expected ${n} or less.`)}function p8(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wh||(wh={}));/**
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
 */function g8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8{constructor(e,n,i,s,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new zl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===wh.NO_ERROR,c=r.getStatus();if(!a||g8(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===wh.ABORT;i(!1,new zl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new zl(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());d8(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=s8();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Qx():o8();o(c)}else{const c=r8();o(c)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=h8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&f8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function _8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function y8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function v8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function b8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function w8(t,e,n,i,s,r,o=!0){const a=p8(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return v8(l,e),_8(l,n),y8(l,r),b8(l,i),new m8(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function T8(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Eh{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Eh(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return T8(this._location.path)}get storage(){return this._service}get parent(){const e=E8(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Eh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw l8(e)}}function _1(t,e){const n=e==null?void 0:e[t8];return n==null?null:Xn.makeFromBucketSpec(n,t)}class I8{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Xx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=n8,this._maxUploadRetryTime=i8,this._requests=new Set,s!=null?this._bucket=Xn.makeFromBucketSpec(s,this._host):this._bucket=_1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=_1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){m1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){m1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new u8(Qx());{const o=w8(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const y1="@firebase/storage",v1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x8="storage";function C8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new I8(n,i,s,e,Bs)}function k8(){bi(new ni(x8,C8,"PUBLIC").setMultipleInstances(!0)),An(y1,v1,""),An(y1,v1,"esm2017")}k8();const Ld=new WeakMap;function Jx(t,e){return Ld.has(e)||Ld.set(e,t||{f:{},r:{},s:{},u:{}}),Ld.get(e)}function S8(t,e,n,i){if(!t)return n;const[s,r]=Zx(t);if(!s)return n;const o=Jx(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function A8(t,e,n,i){if(!t)return;const[s,r]=Zx(t);if(!s)return;const o=Jx(void 0,i)[s],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(di),a}function Zx(t){return p4(t)||g4(t)?["f",t.path]:m4(t)?["r",t.toString()]:_4(t)?["s",t.toString()]:[]}const Fd=new WeakMap;function R8(t,e,n){const i=w2();Fd.has(i)||Fd.set(i,new Map);const s=Fd.get(i),r=A8(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):di}const D8={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function lg(t,e,n,i){if(!d4(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof Tt||p instanceof $f)h[d]=p;else if(Tm(p)){const m=l+d;h[d]=m in n?c[d]:p.path,f[m]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let m=0;m<p.length;m++){const g=p[m];g&&g.path in r&&(h[d][m]=r[g.path])}o(p,c[d]||h[d],l+d+".",[h[d],f])}else Ur(p)?(h[d]={},o(p,c[d],l+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const G_={reset:!1,wait:!0,maxRefDepth:2,converter:D8,snapshotOptions:{serverTimestamps:"estimate"}};function Th(t){for(const e in t)t[e].unsub()}function ug(t,e,n,i,s,r,o,a,c){const[l,u]=lg(i.data(t.snapshotOptions),Em(e,n),s,t);r.set(e,n,l),hg(t,e,n,s,u,r,o,a,c)}function O8({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=di;return a.once?j_(t).then(u=>{u.exists()?ug(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())}).catch(r):l=q_(t,u=>{u.exists()?ug(a,e,n,u,c,o,i,s,r):(o.set(e,n,null),s())},r),()=>{l(),Th(c)}}function hg(t,e,n,i,s,r,o,a,c){const l=Object.keys(s);if(Object.keys(i).filter(m=>l.indexOf(m)<0).forEach(m=>{i[m].unsub(),delete i[m]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function p(m){m in d&&++h>=f&&a(n)}l.forEach(m=>{const g=i[m],_=s[m],v=`${n}.${m}`;if(d[v]=!0,g)if(g.path!==_.path)g.unsub();else return;i[m]={data:()=>Em(e,v),unsub:O8({ref:_,target:e,path:v,depth:o,ops:r,resolve:p.bind(null,v),reject:c},t),path:_.path}})}function M8(t,e,n,i,s,r){const o=Object.assign({},G_,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=yt(l?[]:t.value);l||n.set(t,h,[]);const d=i;let p,m=di;const g=[],_={added:({newIndex:w,doc:I})=>{g.splice(w,0,Object.create(null));const b=g[w],[C,k]=lg(I.data(c),void 0,b,o);n.add(T(f),w,C),hg(o,f,`${h}.${w}`,b,k,n,0,i.bind(null,I),s)},modified:({oldIndex:w,newIndex:I,doc:b})=>{const C=T(f),k=g[w],x=C[w],[F,J]=lg(b.data(c),x,k,o);g.splice(I,0,k),n.remove(C,w),n.add(C,I,F),hg(o,f,`${h}.${I}`,k,J,n,0,i,s)},removed:({oldIndex:w})=>{const I=T(f);n.remove(I,w),Th(g.splice(w,1)[0])}};function v(w){const I=w.docChanges(a);if(!p&&I.length){p=!0;let b=0;const C=I.length,k=Object.create(null);for(let x=0;x<C;x++)k[I[x].doc.id]=!0;i=x=>{x&&x.id in k&&++b>=C&&(l&&(n.set(t,h,T(f)),f=t),d(T(f)),i=di)}}I.forEach(b=>{_[b.type](b)}),I.length||(l&&(n.set(t,h,T(f)),f=t),i(T(f)))}return u?Z5(e).then(v).catch(s):m=q_(e,v,s),w=>{if(m(),w){const I=typeof w=="function"?w():[];n.set(t,h,I)}g.forEach(Th)}}function P8(t,e,n,i,s,r){const o=Object.assign({},G_,r),a="value",c=Object.create(null);i=y4(i,()=>Em(t,a));let l=di;function u(h){h.exists()?ug(o,t,a,h,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?j_(e).then(u).catch(s):l=q_(e,u,s),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Th(c)}}function N8(t,e){let n=di;const i=Object.assign({},G_,e),s=T(t),r=i.target||yt();v4()&&(i.once=!0);const o=S8(s,i.ssrKey,r.value,w2());r.value=o;let c=!(E2(s)?(o||[]).length>0:o!==void 0);const l=yt(!1),u=yt(),h=qh(),f=jg();let d=di;function p(){let _=T(t);const v=new Promise((w,I)=>{if(n(i.reset),!_)return n=di,w(null);l.value=c,c=!0,_.converter||(_=_.withConverter(i.converter)),n=(Tm(_)?P8:M8)(r,_,L8,w,I,i)}).catch(w=>(h.value===v&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===v&&(l.value=!1)});h.value=v}let m=di;ht(t)&&(m=Es(t,p)),p(),s&&(d=R8(h.value,s,i.ssrKey)),Bc()&&nE(()=>h.value),f&&Aw(g);function g(_=i.reset){m(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>g}})}const L8={set:(t,e,n)=>h4(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function st(t,e){return N8(t,e)}function F8(t,{firebaseApp:e,modules:n=[]}){t.provide(b2,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const no=typeof window<"u";function U8(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function Ud(t,e){const n={};for(const i in e){const s=e[i];n[i]=si(s)?s.map(t):t(s)}return n}const Wa=()=>{},si=Array.isArray,V8=/\/$/,B8=t=>t.replace(V8,"");function Vd(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=j8(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function $8(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function b1(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function z8(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Uo(e.matched[i],n.matched[s])&&eC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Uo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H8(t[n],e[n]))return!1;return!0}function H8(t,e){return si(t)?w1(t,e):si(e)?w1(e,t):t===e}function w1(t,e){return si(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function j8(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var kc;(function(t){t.pop="pop",t.push="push"})(kc||(kc={}));var qa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qa||(qa={}));function W8(t){if(!t)if(no){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),B8(t)}const q8=/^[^#]+#/;function K8(t,e){return t.replace(q8,"#")+e}function G8(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const jf=()=>({left:window.pageXOffset,top:window.pageYOffset});function Y8(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=G8(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function E1(t,e){return(history.state?history.state.position-e:-1)+t}const fg=new Map;function X8(t,e){fg.set(t,e)}function Q8(t){const e=fg.get(t);return fg.delete(t),e}let J8=()=>location.protocol+"//"+location.host;function tC(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),b1(c,"")}return b1(n,t)+i+s}function Z8(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=tC(t,location),p=n.value,m=e.value;let g=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}g=m?f.position-m.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:g,type:kc.pop,direction:g?g>0?qa.forward:qa.back:qa.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(He({},f.state,{scroll:jf()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function T1(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?jf():null}}function eF(t){const{history:e,location:n}=window,i={value:tC(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:J8()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=He({},e.state,T1(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=He({},s.value,e.state,{forward:c,scroll:jf()});r(u.current,u,!0);const h=He({},T1(i.value,c,null),{position:u.position+1},l);r(c,h,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function tF(t){t=W8(t);const e=eF(t),n=Z8(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=He({location:"",base:t,go:i,createHref:K8.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nF(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),tF(t)}function iF(t){return typeof t=="string"||t&&typeof t=="object"}function nC(t){return typeof t=="string"||typeof t=="symbol"}const os={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iC=Symbol("");var I1;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(I1||(I1={}));function Vo(t,e){return He(new Error,{type:t,[iC]:!0},e)}function ki(t,e){return t instanceof Error&&iC in t&&(e==null||!!(t.type&e))}const x1="[^/]+?",sF={sensitive:!1,strict:!1,start:!0,end:!0},rF=/[.+*?^${}()[\]/\\]/g;function oF(t,e){const n=He({},sF,e),i=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(rF,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:g,regexp:_}=f;r.push({name:p,repeatable:m,optional:g});const v=_||x1;if(v!==x1){d+=10;try{new RegExp(`(${v})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+I.message)}}let w=m?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(w=g&&l.length<2?`(?:/${w})`:"/"+w),g&&(w+="?"),s+=w,d+=20,g&&(d+=-8),m&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:g}=d,_=p in l?l[p]:"";if(si(_)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=si(_)?_.join("/"):_;if(!v)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function aF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cF(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=aF(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(C1(i))return 1;if(C1(s))return-1}return s.length-i.length}function C1(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lF={type:0,value:""},uF=/[a-zA-Z0-9_]/;function hF(t){if(!t)return[[]];if(t==="/")return[[lF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:c==="("?n=2:uF.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function fF(t,e,n){const i=oF(hF(t.path),n),s=He(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dF(t,e){const n=[],i=new Map;e=A1({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=pF(u);p.aliasOf=f&&f.record;const m=A1(e,u),g=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of w)g.push(He({},p,{components:f?f.record.components:p.components,path:I,aliasOf:f?f.record:p}))}let _,v;for(const w of g){const{path:I}=w;if(h&&I[0]!=="/"){const b=h.record.path,C=b[b.length-1]==="/"?"":"/";w.path=h.record.path+(I&&C+I)}if(_=fF(w,h,m),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!S1(_)&&o(u.name)),p.children){const b=p.children;for(let C=0;C<b.length;C++)r(b[C],_,f&&f.children[C])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Wa}function o(u){if(nC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cF(u,n[h])>=0&&(u.record.path!==n[h].record.path||!sC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!S1(u)&&i.set(u.record.name,u)}function l(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Vo(1,{location:u});m=f.record.name,d=He(k1(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&k1(u.params,f.keys.map(v=>v.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(v=>v.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw Vo(1,{location:u,currentLocation:h});m=f.record.name,d=He({},h.params,u.params),p=f.stringify(d)}const g=[];let _=f;for(;_;)g.unshift(_.record),_=_.parent;return{name:m,path:p,params:d,matched:g,meta:mF(g)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function k1(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function pF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function S1(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mF(t){return t.reduce((e,n)=>He(e,n.meta),{})}function A1(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function sC(t,e){return e.children.some(n=>n===t||sC(t,n))}const rC=/#/g,_F=/&/g,yF=/\//g,vF=/=/g,bF=/\?/g,oC=/\+/g,wF=/%5B/g,EF=/%5D/g,aC=/%5E/g,TF=/%60/g,cC=/%7B/g,IF=/%7C/g,lC=/%7D/g,xF=/%20/g;function Y_(t){return encodeURI(""+t).replace(IF,"|").replace(wF,"[").replace(EF,"]")}function CF(t){return Y_(t).replace(cC,"{").replace(lC,"}").replace(aC,"^")}function dg(t){return Y_(t).replace(oC,"%2B").replace(xF,"+").replace(rC,"%23").replace(_F,"%26").replace(TF,"`").replace(cC,"{").replace(lC,"}").replace(aC,"^")}function kF(t){return dg(t).replace(vF,"%3D")}function SF(t){return Y_(t).replace(rC,"%23").replace(bF,"%3F")}function AF(t){return t==null?"":SF(t).replace(yF,"%2F")}function Ih(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function RF(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(oC," "),o=r.indexOf("="),a=Ih(o<0?r:r.slice(0,o)),c=o<0?null:Ih(r.slice(o+1));if(a in e){let l=e[a];si(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function R1(t){let e="";for(let n in t){const i=t[n];if(n=kF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(si(i)?i.map(r=>r&&dg(r)):[i&&dg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function DF(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=si(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const OF=Symbol(""),D1=Symbol(""),Wf=Symbol(""),X_=Symbol(""),pg=Symbol("");function ga(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hs(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Vo(4,{from:n,to:e})):h instanceof Error?a(h):iF(h)?a(Vo(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(i&&i.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Bd(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(MF(a)){const l=(a.__vccOpts||a)[e];l&&s.push(hs(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=U8(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hs(f,n,i,r,o)()}))}}return s}function MF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function O1(t){const e=bn(Wf),n=bn(X_),i=Ce(()=>e.resolve(T(t.to))),s=Ce(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Uo.bind(null,u));if(f>-1)return f;const d=M1(c[l-2]);return l>1&&M1(u)===d&&h[h.length-1].path!==d?h.findIndex(Uo.bind(null,c[l-2])):f}),r=Ce(()=>s.value>-1&&FF(n.params,i.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&eC(n.params,i.value.params));function a(c={}){return LF(c)?e[T(t.replace)?"replace":"push"](T(t.to)).catch(Wa):Promise.resolve()}return{route:i,href:Ce(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const PF=Fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:O1,setup(t,{slots:e}){const n=As(O1(t)),{options:i}=bn(Wf),s=Ce(()=>({[P1(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[P1(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ko("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),NF=PF;function LF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FF(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!si(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function M1(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const P1=(t,e,n)=>t??e??n,UF=Fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=bn(pg),s=Ce(()=>t.route||i.value),r=bn(D1,0),o=Ce(()=>{let l=T(r);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);gu(D1,Ce(()=>o.value+1)),gu(OF,a),gu(pg,s);const c=yt();return Es(()=>[c.value,a.value,t.name],([l,u,h],[f,d,p])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Uo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return N1(n.default,{Component:f,route:l});const d=h.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,g=Ko(f,He({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return N1(n.default,{Component:g,route:l})||g}}});function N1(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VF=UF;function BF(t){const e=dF(t.routes,t),n=t.parseQuery||RF,i=t.stringifyQuery||R1,s=t.history,r=ga(),o=ga(),a=ga(),c=qh(os);let l=os;no&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ud.bind(null,D=>""+D),h=Ud.bind(null,AF),f=Ud.bind(null,Ih);function d(D,H){let j,te;return nC(D)?(j=e.getRecordMatcher(D),te=H):te=D,e.addRoute(te,j)}function p(D){const H=e.getRecordMatcher(D);H&&e.removeRoute(H)}function m(){return e.getRoutes().map(D=>D.record)}function g(D){return!!e.getRecordMatcher(D)}function _(D,H){if(H=He({},H||c.value),typeof D=="string"){const y=Vd(n,D,H.path),E=e.resolve({path:y.path},H),S=s.createHref(y.fullPath);return He(y,E,{params:f(E.params),hash:Ih(y.hash),redirectedFrom:void 0,href:S})}let j;if("path"in D)j=He({},D,{path:Vd(n,D.path,H.path).path});else{const y=He({},D.params);for(const E in y)y[E]==null&&delete y[E];j=He({},D,{params:h(D.params)}),H.params=h(H.params)}const te=e.resolve(j,H),Le=D.hash||"";te.params=u(f(te.params));const lt=$8(i,He({},D,{hash:CF(Le),path:te.path})),xe=s.createHref(lt);return He({fullPath:lt,hash:Le,query:i===R1?DF(D.query):D.query||{}},te,{redirectedFrom:void 0,href:xe})}function v(D){return typeof D=="string"?Vd(n,D,c.value.path):He({},D)}function w(D,H){if(l!==D)return Vo(8,{from:H,to:D})}function I(D){return k(D)}function b(D){return I(He(v(D),{replace:!0}))}function C(D){const H=D.matched[D.matched.length-1];if(H&&H.redirect){const{redirect:j}=H;let te=typeof j=="function"?j(D):j;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=v(te):{path:te},te.params={}),He({query:D.query,hash:D.hash,params:"path"in te?{}:D.params},te)}}function k(D,H){const j=l=_(D),te=c.value,Le=D.state,lt=D.force,xe=D.replace===!0,y=C(j);if(y)return k(He(v(y),{state:typeof y=="object"?He({},Le,y.state):Le,force:lt,replace:xe}),H||j);const E=j;E.redirectedFrom=H;let S;return!lt&&z8(i,te,j)&&(S=Vo(16,{to:E,from:te}),fn(te,te,!0,!1)),(S?Promise.resolve(S):F(E,te)).catch(R=>ki(R)?ki(R,2)?R:jt(R):Ee(R,E,te)).then(R=>{if(R){if(ki(R,2))return k(He({replace:xe},v(R.to),{state:typeof R.to=="object"?He({},Le,R.to.state):Le,force:lt}),H||E)}else R=ee(E,te,!0,xe,Le);return J(E,te,R),R})}function x(D,H){const j=w(D,H);return j?Promise.reject(j):Promise.resolve()}function F(D,H){let j;const[te,Le,lt]=$F(D,H);j=Bd(te.reverse(),"beforeRouteLeave",D,H);for(const y of te)y.leaveGuards.forEach(E=>{j.push(hs(E,D,H))});const xe=x.bind(null,D,H);return j.push(xe),Qr(j).then(()=>{j=[];for(const y of r.list())j.push(hs(y,D,H));return j.push(xe),Qr(j)}).then(()=>{j=Bd(Le,"beforeRouteUpdate",D,H);for(const y of Le)y.updateGuards.forEach(E=>{j.push(hs(E,D,H))});return j.push(xe),Qr(j)}).then(()=>{j=[];for(const y of D.matched)if(y.beforeEnter&&!H.matched.includes(y))if(si(y.beforeEnter))for(const E of y.beforeEnter)j.push(hs(E,D,H));else j.push(hs(y.beforeEnter,D,H));return j.push(xe),Qr(j)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),j=Bd(lt,"beforeRouteEnter",D,H),j.push(xe),Qr(j))).then(()=>{j=[];for(const y of o.list())j.push(hs(y,D,H));return j.push(xe),Qr(j)}).catch(y=>ki(y,8)?y:Promise.reject(y))}function J(D,H,j){for(const te of a.list())te(D,H,j)}function ee(D,H,j,te,Le){const lt=w(D,H);if(lt)return lt;const xe=H===os,y=no?history.state:{};j&&(te||xe?s.replace(D.fullPath,He({scroll:xe&&y&&y.scroll},Le)):s.push(D.fullPath,Le)),c.value=D,fn(D,H,j,xe),jt()}let ae;function Ge(){ae||(ae=s.listen((D,H,j)=>{if(!ri.listening)return;const te=_(D),Le=C(te);if(Le){k(He(Le,{replace:!0}),te).catch(Wa);return}l=te;const lt=c.value;no&&X8(E1(lt.fullPath,j.delta),jf()),F(te,lt).catch(xe=>ki(xe,12)?xe:ki(xe,2)?(k(xe.to,te).then(y=>{ki(y,20)&&!j.delta&&j.type===kc.pop&&s.go(-1,!1)}).catch(Wa),Promise.reject()):(j.delta&&s.go(-j.delta,!1),Ee(xe,te,lt))).then(xe=>{xe=xe||ee(te,lt,!1),xe&&(j.delta&&!ki(xe,8)?s.go(-j.delta,!1):j.type===kc.pop&&ki(xe,20)&&s.go(-1,!1)),J(te,lt,xe)}).catch(Wa)}))}let ye=ga(),pe=ga(),Ie;function Ee(D,H,j){jt(D);const te=pe.list();return te.length?te.forEach(Le=>Le(D,H,j)):console.error(D),Promise.reject(D)}function Ne(){return Ie&&c.value!==os?Promise.resolve():new Promise((D,H)=>{ye.add([D,H])})}function jt(D){return Ie||(Ie=!D,Ge(),ye.list().forEach(([H,j])=>D?j(D):H()),ye.reset()),D}function fn(D,H,j,te){const{scrollBehavior:Le}=t;if(!no||!Le)return Promise.resolve();const lt=!j&&Q8(E1(D.fullPath,0))||(te||!j)&&history.state&&history.state.scroll||null;return Zg().then(()=>Le(D,H,lt)).then(xe=>xe&&Y8(xe)).catch(xe=>Ee(xe,D,H))}const Wt=D=>s.go(D);let mt;const Nn=new Set,ri={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:g,getRoutes:m,resolve:_,options:t,push:I,replace:b,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Ne,install(D){const H=this;D.component("RouterLink",NF),D.component("RouterView",VF),D.config.globalProperties.$router=H,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>T(c)}),no&&!mt&&c.value===os&&(mt=!0,I(s.location).catch(Le=>{}));const j={};for(const Le in os)j[Le]=Ce(()=>c.value[Le]);D.provide(Wf,H),D.provide(X_,As(j)),D.provide(pg,c);const te=D.unmount;Nn.add(D),D.unmount=function(){Nn.delete(D),Nn.size<1&&(l=os,ae&&ae(),ae=null,c.value=os,mt=!1,Ie=!1),te()}}};return ri}function Qr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $F(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Uo(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Uo(l,c))||s.push(c))}return[n,i,s]}function qf(){return bn(Wf)}function Wr(){return bn(X_)}const zF={class:"container"},HF={__name:"App",setup(t){const e=Wr();return(n,i)=>{const s=Rs("RouterView");return M(),U("div",zF,[(M(),It(s,{key:T(e).fullPath}))])}}},uC=LE({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),re=U5(uC);function L1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L1(Object(n),!0).forEach(function(i){At(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xh(t){return xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xh(t)}function jF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F1(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function WF(t,e,n){return e&&F1(t.prototype,e),n&&F1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function At(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q_(t,e){return KF(t)||YF(t,e)||hC(t,e)||QF()}function gl(t){return qF(t)||GF(t)||hC(t)||XF()}function qF(t){if(Array.isArray(t))return gg(t)}function KF(t){if(Array.isArray(t))return t}function GF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(c){r=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function hC(t,e){if(t){if(typeof t=="string")return gg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gg(t,e)}}function gg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function XF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U1=function(){},J_={},fC={},dC=null,pC={mark:U1,measure:U1};try{typeof window<"u"&&(J_=window),typeof document<"u"&&(fC=document),typeof MutationObserver<"u"&&(dC=MutationObserver),typeof performance<"u"&&(pC=performance)}catch{}var JF=J_.navigator||{},V1=JF.userAgent,B1=V1===void 0?"":V1,Ls=J_,rt=fC,$1=dC,Hl=pC;Ls.document;var ns=!!rt.documentElement&&!!rt.head&&typeof rt.addEventListener=="function"&&typeof rt.createElement=="function",gC=~B1.indexOf("MSIE")||~B1.indexOf("Trident/"),jl,Wl,ql,Kl,Gl,Yi="___FONT_AWESOME___",mg=16,mC="fa",_C="svg-inline--fa",Dr="data-fa-i2svg",_g="data-fa-pseudo-element",ZF="data-fa-pseudo-element-pending",Z_="data-prefix",ey="data-icon",z1="fontawesome-i2svg",e7="async",t7=["HTML","HEAD","STYLE","SCRIPT"],yC=function(){try{return!0}catch{return!1}}(),tt="classic",dt="sharp",ty=[tt,dt];function ml(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[tt]}})}var Sc=ml((jl={},At(jl,tt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),At(jl,dt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),jl)),Ac=ml((Wl={},At(Wl,tt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),At(Wl,dt,{solid:"fass",regular:"fasr",light:"fasl"}),Wl)),Rc=ml((ql={},At(ql,tt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),At(ql,dt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ql)),n7=ml((Kl={},At(Kl,tt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),At(Kl,dt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Kl)),i7=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vC="fa-layers-text",s7=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,r7=ml((Gl={},At(Gl,tt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),At(Gl,dt,{900:"fass",400:"fasr",300:"fasl"}),Gl)),bC=[1,2,3,4,5,6,7,8,9,10],o7=bC.concat([11,12,13,14,15,16,17,18,19,20]),a7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dc=new Set;Object.keys(Ac[tt]).map(Dc.add.bind(Dc));Object.keys(Ac[dt]).map(Dc.add.bind(Dc));var c7=[].concat(ty,gl(Dc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fr.GROUP,fr.SWAP_OPACITY,fr.PRIMARY,fr.SECONDARY]).concat(bC.map(function(t){return"".concat(t,"x")})).concat(o7.map(function(t){return"w-".concat(t)})),Ka=Ls.FontAwesomeConfig||{};function l7(t){var e=rt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function u7(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(rt&&typeof rt.querySelector=="function"){var h7=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];h7.forEach(function(t){var e=Q_(t,2),n=e[0],i=e[1],s=u7(l7(n));s!=null&&(Ka[i]=s)})}var wC={styleDefault:"solid",familyDefault:"classic",cssPrefix:mC,replacementClass:_C,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ka.familyPrefix&&(Ka.cssPrefix=Ka.familyPrefix);var Bo=q(q({},wC),Ka);Bo.autoReplaceSvg||(Bo.observeMutations=!1);var Y={};Object.keys(wC).forEach(function(t){Object.defineProperty(Y,t,{enumerable:!0,set:function(n){Bo[t]=n,Ga.forEach(function(i){return i(Y)})},get:function(){return Bo[t]}})});Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(e){Bo.cssPrefix=e,Ga.forEach(function(n){return n(Y)})},get:function(){return Bo.cssPrefix}});Ls.FontAwesomeConfig=Y;var Ga=[];function f7(t){return Ga.push(t),function(){Ga.splice(Ga.indexOf(t),1)}}var as=mg,gi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function d7(t){if(!(!t||!ns)){var e=rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=rt.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return rt.head.insertBefore(e,i),t}}var p7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oc(){for(var t=12,e="";t-- >0;)e+=p7[Math.random()*62|0];return e}function ra(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ny(t){return t.classList?ra(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function EC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g7(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(EC(t[n]),'" ')},"").trim()}function Kf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function iy(t){return t.size!==gi.size||t.x!==gi.x||t.y!==gi.y||t.rotate!==gi.rotate||t.flipX||t.flipY}function m7(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:c,path:l}}function _7(t){var e=t.transform,n=t.width,i=n===void 0?mg:n,s=t.height,r=s===void 0?mg:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&gC?c+="translate(".concat(e.x/as-i/2,"em, ").concat(e.y/as-r/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/as,"em), calc(-50% + ").concat(e.y/as,"em)) "):c+="translate(".concat(e.x/as,"em, ").concat(e.y/as,"em) "),c+="scale(".concat(e.size/as*(e.flipX?-1:1),", ").concat(e.size/as*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var y7=`:root, :host {
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
}`;function TC(){var t=mC,e=_C,n=Y.cssPrefix,i=Y.replacementClass,s=y7;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var H1=!1;function $d(){Y.autoAddCss&&!H1&&(d7(TC()),H1=!0)}var v7={mixout:function(){return{dom:{css:TC,insertCss:$d}}},hooks:function(){return{beforeDOMElementCreation:function(){$d()},beforeI2svg:function(){$d()}}}},Xi=Ls||{};Xi[Yi]||(Xi[Yi]={});Xi[Yi].styles||(Xi[Yi].styles={});Xi[Yi].hooks||(Xi[Yi].hooks={});Xi[Yi].shims||(Xi[Yi].shims=[]);var Qn=Xi[Yi],IC=[],b7=function t(){rt.removeEventListener("DOMContentLoaded",t),Ch=1,IC.map(function(e){return e()})},Ch=!1;ns&&(Ch=(rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rt.readyState),Ch||rt.addEventListener("DOMContentLoaded",b7));function w7(t){ns&&(Ch?setTimeout(t,0):IC.push(t))}function _l(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?EC(t):"<".concat(e," ").concat(g7(i),">").concat(r.map(_l).join(""),"</").concat(e,">")}function j1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var E7=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},zd=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?E7(n,s):n,c,l,u;for(i===void 0?(c=1,u=e[r[0]]):(c=0,u=i);c<o;c++)l=r[c],u=a(u,e[l],l,e);return u};function T7(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yg(t){var e=T7(t);return e.length===1?e[0].toString(16):null}function I7(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function W1(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function vg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=W1(e);typeof Qn.hooks.addPack=="function"&&!s?Qn.hooks.addPack(t,W1(e)):Qn.styles[t]=q(q({},Qn.styles[t]||{}),r),t==="fas"&&vg("fa",e)}var Yl,Xl,Ql,oo=Qn.styles,x7=Qn.shims,C7=(Yl={},At(Yl,tt,Object.values(Rc[tt])),At(Yl,dt,Object.values(Rc[dt])),Yl),sy=null,xC={},CC={},kC={},SC={},AC={},k7=(Xl={},At(Xl,tt,Object.keys(Sc[tt])),At(Xl,dt,Object.keys(Sc[dt])),Xl);function S7(t){return~c7.indexOf(t)}function A7(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!S7(s)?s:null}var RC=function(){var e=function(r){return zd(oo,function(o,a,c){return o[c]=zd(a,r,{}),o},{})};xC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),CC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),AC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in oo||Y.autoFetchSvg,i=zd(x7,function(s,r){var o=r[0],a=r[1],c=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});kC=i.names,SC=i.unicodes,sy=Gf(Y.styleDefault,{family:Y.familyDefault})};f7(function(t){sy=Gf(t.styleDefault,{family:Y.familyDefault})});RC();function ry(t,e){return(xC[t]||{})[e]}function R7(t,e){return(CC[t]||{})[e]}function dr(t,e){return(AC[t]||{})[e]}function DC(t){return kC[t]||{prefix:null,iconName:null}}function D7(t){var e=SC[t],n=ry("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fs(){return sy}var oy=function(){return{prefix:null,iconName:null,rest:[]}};function Gf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?tt:n,s=Sc[i][t],r=Ac[i][t]||Ac[i][s],o=t in Qn.styles?t:null;return r||o||null}var q1=(Ql={},At(Ql,tt,Object.keys(Rc[tt])),At(Ql,dt,Object.keys(Rc[dt])),Ql);function Yf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},At(e,tt,"".concat(Y.cssPrefix,"-").concat(tt)),At(e,dt,"".concat(Y.cssPrefix,"-").concat(dt)),e),o=null,a=tt;(t.includes(r[tt])||t.some(function(l){return q1[tt].includes(l)}))&&(a=tt),(t.includes(r[dt])||t.some(function(l){return q1[dt].includes(l)}))&&(a=dt);var c=t.reduce(function(l,u){var h=A7(Y.cssPrefix,u);if(oo[u]?(u=C7[a].includes(u)?n7[a][u]:u,o=u,l.prefix=u):k7[a].indexOf(u)>-1?(o=u,l.prefix=Gf(u,{family:a})):h?l.iconName=h:u!==Y.replacementClass&&u!==r[tt]&&u!==r[dt]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?DC(l.iconName):{},d=dr(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!oo.far&&oo.fas&&!Y.autoFetchSvg&&(l.prefix="fas")}return l},oy());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===dt&&(oo.fass||Y.autoFetchSvg)&&(c.prefix="fass",c.iconName=dr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Fs()||"fas"),c}var O7=function(){function t(){jF(this,t),this.definitions={}}return WF(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),vg(a,o[a]);var c=Rc[tt][a];c&&vg(c,o[a]),RC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),K1=[],ao={},yo={},M7=Object.keys(yo);function P7(t,e){var n=e.mixoutsTo;return K1=t,ao={},Object.keys(yo).forEach(function(i){M7.indexOf(i)===-1&&delete yo[i]}),K1.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),xh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){ao[o]||(ao[o]=[]),ao[o].push(r[o])})}i.provides&&i.provides(yo)}),n}function bg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=ao[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Or(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=ao[t]||[];s.forEach(function(r){r.apply(null,n)})}function Qi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return yo[t]?yo[t].apply(null,e):void 0}function wg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fs();if(e)return e=dr(n,e)||e,j1(OC.definitions,n,e)||j1(Qn.styles,n,e)}var OC=new O7,N7=function(){Y.autoReplaceSvg=!1,Y.observeMutations=!1,Or("noAuto")},L7={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ns?(Or("beforeI2svg",e),Qi("pseudoElements2svg",e),Qi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,w7(function(){U7({autoReplaceSvgRoot:n}),Or("watch",e)})}},F7={icon:function(e){if(e===null)return null;if(xh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:dr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Gf(e[0]);return{prefix:i,iconName:dr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Y.cssPrefix,"-"))>-1||e.match(i7))){var s=Yf(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Fs(),iconName:dr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Fs();return{prefix:r,iconName:dr(r,e)||e}}}},Pn={noAuto:N7,config:Y,dom:L7,parse:F7,library:OC,findIconDefinition:wg,toHtml:_l},U7=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?rt:n;(Object.keys(Qn.styles).length>0||Y.autoFetchSvg)&&ns&&Y.autoReplaceSvg&&Pn.dom.i2svg({node:i})};function Xf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return _l(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ns){var i=rt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function V7(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(iy(o)&&n.found&&!i.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=Kf(q(q({},r),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function B7(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(Y.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},s),{},{id:o}),children:i}]}]}function ay(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,m=p.width,g=p.height,_=s==="fak",v=[Y.replacementClass,r?"".concat(Y.cssPrefix,"-").concat(r):""].filter(function(F){return h.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(h.classes).join(" "),w={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},I=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(w.attributes[Dr]=""),c&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Oc())},children:[c]}),delete w.attributes.title);var b=q(q({},w),{},{prefix:s,iconName:r,main:n,mask:i,maskId:l,transform:o,symbol:a,styles:q(q({},I),h.styles)}),C=i.found&&n.found?Qi("generateAbstractMask",b)||{children:[],attributes:{}}:Qi("generateAbstractIcon",b)||{children:[],attributes:{}},k=C.children,x=C.attributes;return b.children=k,b.attributes=x,a?B7(b):V7(b)}function G1(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=q(q(q({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});c&&(l[Dr]="");var u=q({},o.styles);iy(s)&&(u.transform=_7({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Kf(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function $7(t){var e=t.content,n=t.title,i=t.extra,s=q(q(q({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Kf(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hd=Qn.styles;function Eg(t){var e=t[0],n=t[1],i=t.slice(4),s=Q_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(fr.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var z7={found:!1,width:512,height:512};function H7(t,e){!yC&&!Y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tg(t,e){var n=e;return e==="fa"&&Y.styleDefault!==null&&(e=Fs()),new Promise(function(i,s){if(Qi("missingIconAbstract"),n==="fa"){var r=DC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Hd[e]&&Hd[e][t]){var o=Hd[e][t];return i(Eg(o))}H7(t,e),i(q(q({},z7),{},{icon:Y.showMissingIcons&&t?Qi("missingIconAbstract")||{}:{}}))})}var Y1=function(){},Ig=Y.measurePerformance&&Hl&&Hl.mark&&Hl.measure?Hl:{mark:Y1,measure:Y1},ka='FA "6.4.0"',j7=function(e){return Ig.mark("".concat(ka," ").concat(e," begins")),function(){return MC(e)}},MC=function(e){Ig.mark("".concat(ka," ").concat(e," ends")),Ig.measure("".concat(ka," ").concat(e),"".concat(ka," ").concat(e," begins"),"".concat(ka," ").concat(e," ends"))},cy={begin:j7,end:MC},ku=function(){};function X1(t){var e=t.getAttribute?t.getAttribute(Dr):null;return typeof e=="string"}function W7(t){var e=t.getAttribute?t.getAttribute(Z_):null,n=t.getAttribute?t.getAttribute(ey):null;return e&&n}function q7(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Y.replacementClass)}function K7(){if(Y.autoReplaceSvg===!0)return Su.replace;var t=Su[Y.autoReplaceSvg];return t||Su.replace}function G7(t){return rt.createElementNS("http://www.w3.org/2000/svg",t)}function Y7(t){return rt.createElement(t)}function PC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?G7:Y7:n;if(typeof t=="string")return rt.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(PC(o,{ceFn:i}))}),s}function X7(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(PC(s),n)}),n.getAttribute(Dr)===null&&Y.keepOriginalSource){var i=rt.createComment(X7(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ny(n).indexOf(Y.replacementClass))return Su.replace(e);var s=new RegExp("".concat(Y.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,c){return c===Y.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return _l(a)}).join(`
`);n.setAttribute(Dr,""),n.innerHTML=o}};function Q1(t){t()}function NC(t,e){var n=typeof e=="function"?e:ku;if(t.length===0)n();else{var i=Q1;Y.mutateApproach===e7&&(i=Ls.requestAnimationFrame||Q1),i(function(){var s=K7(),r=cy.begin("mutate");t.map(s),r(),n()})}}var ly=!1;function LC(){ly=!0}function xg(){ly=!1}var kh=null;function J1(t){if($1&&Y.observeMutations){var e=t.treeCallback,n=e===void 0?ku:e,i=t.nodeCallback,s=i===void 0?ku:i,r=t.pseudoElementsCallback,o=r===void 0?ku:r,a=t.observeMutationsRoot,c=a===void 0?rt:a;kh=new $1(function(l){if(!ly){var u=Fs();ra(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!X1(h.addedNodes[0])&&(Y.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Y.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&X1(h.target)&&~a7.indexOf(h.attributeName))if(h.attributeName==="class"&&W7(h.target)){var f=Yf(ny(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(Z_,d||u),p&&h.target.setAttribute(ey,p)}else q7(h.target)&&s(h.target)})}}),ns&&kh.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Q7(){kh&&kh.disconnect()}function J7(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function Z7(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Yf(ny(t));return s.prefix||(s.prefix=Fs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=R7(s.prefix,t.innerText)||ry(s.prefix,yg(t.innerText))),!s.iconName&&Y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function e9(t){var e=ra(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Y.autoA11y&&(n?e["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(i||Oc()):(e["aria-hidden"]="true",e.focusable="false")),e}function t9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Z7(t),i=n.iconName,s=n.prefix,r=n.rest,o=e9(t),a=bg("parseNodeAttributes",{},t),c=e.styleParser?J7(t):[];return q({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:gi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:o}},a)}var n9=Qn.styles;function FC(t){var e=Y.autoReplaceSvg==="nest"?Z1(t,{styleParser:!1}):Z1(t);return~e.extra.classes.indexOf(vC)?Qi("generateLayersText",t,e):Qi("generateSvgReplacementMutation",t,e)}var Us=new Set;ty.map(function(t){Us.add("fa-".concat(t))});Object.keys(Sc[tt]).map(Us.add.bind(Us));Object.keys(Sc[dt]).map(Us.add.bind(Us));Us=gl(Us);function eb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ns)return Promise.resolve();var n=rt.documentElement.classList,i=function(h){return n.add("".concat(z1,"-").concat(h))},s=function(h){return n.remove("".concat(z1,"-").concat(h))},r=Y.autoFetchSvg?Us:ty.map(function(u){return"fa-".concat(u)}).concat(Object.keys(n9));r.includes("fa")||r.push("fa");var o=[".".concat(vC,":not([").concat(Dr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Dr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ra(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var c=cy.begin("onTree"),l=a.reduce(function(u,h){try{var f=FC(h);f&&u.push(f)}catch(d){yC||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){NC(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function i9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FC(t).then(function(n){n&&NC([n],e)})}function s9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:wg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:wg(s||{})),t(i,q(q({},n),{},{mask:s}))}}var r9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?gi:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,m=n.classes,g=m===void 0?[]:m,_=n.attributes,v=_===void 0?{}:_,w=n.styles,I=w===void 0?{}:w;if(e){var b=e.prefix,C=e.iconName,k=e.icon;return Xf(q({type:"icon"},e),function(){return Or("beforeDOMElementCreation",{iconDefinition:e,params:n}),Y.autoA11y&&(f?v["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(p||Oc()):(v["aria-hidden"]="true",v.focusable="false")),ay({icons:{main:Eg(k),mask:c?Eg(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:C,transform:q(q({},gi),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:v,styles:I,classes:g}})})}},o9={mixout:function(){return{icon:s9(r9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eb,n.nodeCallback=i9,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?rt:i,r=n.callback,o=r===void 0?function(){}:r;return eb(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([Tg(s,a),u.iconName?Tg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var g=Q_(m,2),_=g[0],v=g[1];d([n,ay({icons:{main:_,mask:v},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,c=Kf(a);c.length>0&&(s.style=c);var l;return iy(o)&&(l=Qi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(l||r.icon),{children:i,attributes:s}}}},a9={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return Xf({type:"layer"},function(){Or("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Y.cssPrefix,"-layers")].concat(gl(r)).join(" ")},children:o}]})}}}},c9={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,h=u===void 0?{}:u;return Xf({type:"counter",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),$7({content:n.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(Y.cssPrefix,"-layers-counter")].concat(gl(a))}})})}}}},l9={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?gi:s,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Xf({type:"text",content:n},function(){return Or("beforeDOMElementCreation",{content:n,params:i}),G1({content:n,transform:q(q({},gi),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(Y.cssPrefix,"-layers-text")].concat(gl(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,c=null;if(gC){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return Y.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,G1({content:n.innerHTML,width:a,height:c,transform:r,title:s,extra:o,watchable:!0})])}}},u9=new RegExp('"',"ug"),tb=[1105920,1112319];function h9(t){var e=t.replace(u9,""),n=I7(e,0),i=n>=tb[0]&&n<=tb[1],s=e.length===2?e[0]===e[1]:!1;return{value:yg(s?e[0]:e),isSecondary:i||s}}function nb(t,e){var n="".concat(ZF).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=ra(t.children),o=r.filter(function(k){return k.getAttribute(_g)===e})[0],a=Ls.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(s7),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?dt:tt,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ac[f][c[2].toLowerCase()]:r7[f][l],p=h9(h),m=p.value,g=p.isSecondary,_=c[0].startsWith("FontAwesome"),v=ry(d,m),w=v;if(_){var I=D7(m);I.iconName&&I.prefix&&(v=I.iconName,d=I.prefix)}if(v&&!g&&(!o||o.getAttribute(Z_)!==d||o.getAttribute(ey)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var b=t9(),C=b.extra;C.attributes[_g]=e,Tg(v,d).then(function(k){var x=ay(q(q({},b),{},{icons:{main:k,mask:oy()},prefix:d,iconName:w,extra:C,watchable:!0})),F=rt.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=x.map(function(J){return _l(J)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function f9(t){return Promise.all([nb(t,"::before"),nb(t,"::after")])}function d9(t){return t.parentNode!==document.head&&!~t7.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_g)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ib(t){if(ns)return new Promise(function(e,n){var i=ra(t.querySelectorAll("*")).filter(d9).map(f9),s=cy.begin("searchPseudoElements");LC(),Promise.all(i).then(function(){s(),xg(),e()}).catch(function(){s(),xg(),n()})})}var p9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ib,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?rt:i;Y.searchPseudoElements&&ib(s)}}},sb=!1,g9={mixout:function(){return{dom:{unwatch:function(){LC(),sb=!0}}}},hooks:function(){return{bootstrap:function(){J1(bg("mutationObserverCallbacks",{}))},noAuto:function(){Q7()},watch:function(n){var i=n.observeMutationsRoot;sb?xg():J1(bg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},rb=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},m9={mixout:function(){return{parse:{transform:function(n){return rb(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=rb(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:q({},d.outer),children:[{tag:"g",attributes:q({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:q(q({},i.icon.attributes),d.path)}]}]}}}},jd={x:0,y:0,width:"100%",height:"100%"};function ob(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _9(t){return t.tag==="g"?t.children:[t]}var y9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Yf(s.split(" ").map(function(o){return o.trim()})):oy();return r.prefix||(r.prefix=Fs()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,c=n.transform,l=r.width,u=r.icon,h=o.width,f=o.icon,d=m7({transform:c,containerWidth:h,iconWidth:l}),p={tag:"rect",attributes:q(q({},jd),{},{fill:"white"})},m=u.children?{children:u.children.map(ob)}:{},g={tag:"g",attributes:q({},d.inner),children:[ob(q({tag:u.tag,attributes:q(q({},u.attributes),d.path)},m))]},_={tag:"g",attributes:q({},d.outer),children:[g]},v="mask-".concat(a||Oc()),w="clip-".concat(a||Oc()),I={tag:"mask",attributes:q(q({},jd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:_9(f)},I]};return i.push(b,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},jd)}),{children:i,attributes:s}}}},v9={provides:function(e){var n=!1;Ls.matchMedia&&(n=Ls.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:q(q({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:q(q({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:q(q({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},b9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},w9=[v7,o9,a9,c9,l9,p9,g9,m9,y9,v9,b9];P7(w9,{mixoutsTo:Pn});Pn.noAuto;var UC=Pn.config,Ve=Pn.library;Pn.dom;var Sh=Pn.parse;Pn.findIconDefinition;Pn.toHtml;var E9=Pn.icon;Pn.layer;var T9=Pn.text;Pn.counter;function ab(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ab(Object(n),!0).forEach(function(i){pn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ab(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ah(t){return Ah=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ah(t)}function pn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I9(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function x9(t,e){if(t==null)return{};var n=I9(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Cg(t){return C9(t)||k9(t)||S9(t)||A9()}function C9(t){if(Array.isArray(t))return kg(t)}function k9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function S9(t,e){if(t){if(typeof t=="string")return kg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kg(t,e)}}function kg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function A9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},VC={exports:{}};(function(t){(function(e){var n=function(_,v,w){if(!l(v)||h(v)||f(v)||d(v)||c(v))return v;var I,b=0,C=0;if(u(v))for(I=[],C=v.length;b<C;b++)I.push(n(_,v[b],w));else{I={};for(var k in v)Object.prototype.hasOwnProperty.call(v,k)&&(I[_(k,w)]=n(_,v[k],w))}return I},i=function(_,v){v=v||{};var w=v.separator||"_",I=v.split||/(?=[A-Z])/;return _.split(I).join(w)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,w){return w?w.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var v=s(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},m=function(_,v){var w=v&&"process"in v?v.process:v;return typeof w!="function"?_:function(I,b){return w(I,_,b)}},g={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,v){return n(m(s,v),_)},decamelizeKeys:function(_,v){return n(m(o,v),_,v)},pascalizeKeys:function(_,v){return n(m(r,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:e.humps=g})(R9)})(VC);var D9=VC.exports,O9=["class","style"];function M9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=D9.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function P9(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return uy(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=P9(u);break;case"style":c.style=M9(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=x9(n,O9);return Ko(t.tag,qn(qn(qn({},e),{},{class:s.class,style:qn(qn({},s.style),o)},s.attrs),a),i)}var BC=!1;try{BC=!0}catch{}function N9(){if(!BC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ya(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?pn({},t,e):{}}function L9(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},pn(e,"fa-".concat(t.size),t.size!==null),pn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),pn(e,"fa-pull-".concat(t.pull),t.pull!==null),pn(e,"fa-swap-opacity",t.swapOpacity),pn(e,"fa-bounce",t.bounce),pn(e,"fa-shake",t.shake),pn(e,"fa-beat",t.beat),pn(e,"fa-fade",t.fade),pn(e,"fa-beat-fade",t.beatFade),pn(e,"fa-flash",t.flash),pn(e,"fa-spin-pulse",t.spinPulse),pn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function cb(t){if(t&&Ah(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if(Ah(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var hy=Fr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Ce(function(){return cb(e.icon)}),r=Ce(function(){return Ya("classes",L9(e))}),o=Ce(function(){return Ya("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),a=Ce(function(){return Ya("mask",cb(e.mask))}),c=Ce(function(){return E9(s.value,qn(qn(qn(qn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Es(c,function(u){if(!u)return N9("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Ce(function(){return c.value?uy(c.value.abstract[0],{},i):null});return function(){return l.value}}});Fr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=UC.familyPrefix,r=Ce(function(){return["".concat(s,"-layers")].concat(Cg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Ko("div",{class:r.value},i.default?i.default():[])}}});Fr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=UC.familyPrefix,r=Ce(function(){return Ya("classes",[].concat(Cg(e.counter?["".concat(s,"-layers-counter")]:[]),Cg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Ce(function(){return Ya("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),a=Ce(function(){var l=T9(e.value.toString(),qn(qn({},o.value),r.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Ce(function(){return uy(a.value,{},i)});return function(){return c.value}}});const Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},F9={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(M(),U("div",{class:Cn(["flag",{inverted:e.inverted}]),style:Nr({backgroundColor:e.color})},[Z(T(hy),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},$C=Ht(F9,[["__scopeId","data-v-6db28dbb"]]),is=cm("board",()=>{const t=yt(""),e=yt(""),n=yt("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const U9={key:0,class:"hidden-indicator"},V9=["src"],B9={class:"boardTileFlags"},$9={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=is(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,c,l,u,h,f,d,p,m,g;return M(),U("div",{class:Cn(["tile",{isSelected:T(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(c=(a=e.teamData)==null?void 0:a.verify)==null?void 0:c.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((l=e.tileData)==null?void 0:l.hidden)==!0||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=_=>i({id:e.tileData.id,...e.tileData}))},[(e==null?void 0:e.isEditor)==!0&&((h=e.tileData)==null?void 0:h.hidden)==!0?(M(),U("div",U9,[Z(T(hy),{class:"icon",icon:["fas","eye-low-vision"]})])):be("",!0),(e==null?void 0:e.isEditor)==!0&&((f=e.tileData)==null?void 0:f.type)!="null"&&!((d=e.tileData)!=null&&d.hidden)||(p=e.tileData)!=null&&p.hidden||e.isEditor!=!0&&e.tileData.type!="null"&&!((m=e.tileData)!=null&&m.hidden)?(M(),U("img",{key:1,src:e.teamData&&e.tileData.altImg&&((g=e.teamData)!=null&&g.collected.hasOwnProperty(e.tileData.id))?e.tileData.altImg:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,V9)):be("",!0),A("div",B9,[e.groupsData?(M(!0),U(Te,{key:0},un(e.groupsData,_=>(M(),It($C,{key:"tile-flag-"+_.name+"-"+e.tileData.id,class:Cn(["tileFlag","flag-end-"+_.flagEnd]),icon:_.icon,color:"none",inverted:!0,style:Nr({opacity:(_==null?void 0:_.collected)!=null&&(_!=null&&_.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","style"]))),128)):be("",!0)])],2)}}},zC=Ht($9,[["__scopeId","data-v-d9fd2ee8"]]);const z9={key:0,class:"bingo-board"},H9={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;yE(s=>({"64aaa7a8":e.boardData.settings.width,"644840fe":e.boardData.settings.height}));const n=is(),i=lR(n.selectedTile);return(s,r)=>e.boardData?(M(),U("main",z9,[(M(!0),U(Te,null,un(e.tilesData,o=>(M(),It(zC,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:T(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):be("",!0)}},fy=Ht(H9,[["__scopeId","data-v-87e12eab"]]);const yl=t=>(Ji("data-v-32ac0d65"),t=t(),Zi(),t),j9={key:0},W9=yl(()=>A("br",null,null,-1)),q9={class:"tooltiptext"},K9=yl(()=>A("br",null,null,-1)),G9=yl(()=>A("br",null,null,-1)),Y9=yl(()=>A("br",null,null,-1)),X9=yl(()=>A("li",null,null,-1)),Q9={key:0,class:"rules"},J9={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=is();return(i,s)=>{var r;return M(),U("div",null,[e.groupsData?(M(),U("ul",j9,[(M(!0),U(Te,null,un(e.groupsData,(o,a)=>(M(),U("li",{key:a+o.id,class:"tooltip"},[Z($C,{color:o.color,class:Cn(["tileFlag","flag-end-"+o.flagEnd]),inverted:o.name=="Ahka's Cum Balls",icon:o.icon,style:Nr({"--groupColor":o.color,"--width":o.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),ve(" "+me(o.name),1),W9,A("span",q9,[(M(!0),U(Te,null,un(o.member,c=>(M(),U("span",{key:c},[ve(me(c),1),K9]))),128))]),ve(" score: "+me(o.points),1),G9,Y9]))),128)),X9,((r=T(n))==null?void 0:r.rules)!=null?(M(),U("li",Q9,me(T(n).rules),1)):be("",!0)])):be("",!0)])}}},Z9=Ht(J9,[["__scopeId","data-v-32ac0d65"]]);const eU={key:0},tU={key:1,class:"items"},nU={__name:"sidePannel",setup(t){const e=is();return(n,i)=>(M(),U(Te,null,[A("h2",null,me(T(e).selectedTile.title)+me(T(e).selectedTile.points!=0?`, ${T(e).selectedTile.points} points`:""),1),(M(),It(zC,{tileData:T(e).selectedTile,key:"side-pannel-tile-"+T(e).selectedTile},null,8,["tileData"])),T(e).selectedTile.description?(M(),U("p",eU,me(T(e).selectedTile.description),1)):be("",!0),T(e).selectedTile.items?(M(),U("p",tU,[ve(" Eligible items: "),(M(!0),U(Te,null,un(T(e).selectedTile.items,(s,r)=>(M(),U(Te,null,[ve(me(s.item)+" "+me(s.count>1?"x"+s.count:"")+" "+me(r!==T(e).selectedTile.items.length-1?",":""),1)],64))),256))])):be("",!0)],64))}},iU=Ht(nU,[["__scopeId","data-v-af2af28b"]]),js=cm("userStateStore",()=>{const t=yt({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}}),sU=new Mi,rU=UO(),HC=async(t,e,n)=>{KD(rU,sU).then(i=>{n.setUser({loggedIn:!0,data:i.user})}).then(async()=>{(await j_(ge(re,"Users",n.user.data.uid))).exists()||ms(ge(re,"Users",n.user.data.uid),{count:0}),e.push(t)}).catch(i=>{const s=i.code,r=i.message;console.error(i,s,r)})};const oU={__name:"iconButton",props:{groupIcon:{required:!1,type:String},fasIcon:{required:!0,type:String}},setup(t){const e=t;return(n,i)=>{const s=Rs("font-awesome-icon");return M(),It(s,{class:Cn(["icon-button",{outline:e.fasIcon==e.groupIcon}]),icon:["fa",e.fasIcon]},null,8,["class","icon"])}}},ft=Ht(oU,[["__scopeId","data-v-c8bbd810"]]);const aU={class:"dashboard"},cU={__name:"loginButton",props:{destination:{type:Object,required:!0}},setup(t){const e=t,n=Wr(),i=n.params.boardUUID,s=js(),r=st(ge(re,"Users",`${s.user.data.uid}`)),o=qf(),a=Ce(()=>n.params.boardUUID),c=st(ge(re,"Boards",a.value)),l=(u,h)=>{o.push({name:u,params:{boardUUID:h}})};return(u,h)=>{var f,d,p,m,g,_,v,w,I;return M(),U("div",aU,[T(s).user&&T(s).user.data.uid!=0?(M(),U(Te,{key:0},[Z(ft,{class:"iconBtn",onClick:h[0]||(h[0]=b=>l("userOverview")),fasIcon:"list-ul"}),T(s).user&&T(s).user.data.uid!=0&&(T(s).user.data.uid==T(c).ownerID||((f=T(r))==null?void 0:f.type)=="admin"||(p=(d=T(c))==null?void 0:d.editors)!=null&&p.includes(T(s).user.data.uid))?(M(),It(ft,{key:0,class:Cn([{"current-page":T(n).name=="editBoard"},"iconBtn"]),onClick:h[1]||(h[1]=b=>l("editBoard",T(i))),fasIcon:"pen-to-square"},null,8,["class"])):be("",!0),(M(),It(ft,{key:1,class:Cn(["iconBtn",{"current-page":T(n).name=="overview"}]),onClick:h[2]||(h[2]=b=>l("overview",T(i))),fasIcon:"eye"},null,8,["class"])),T(s).user&&T(s).user.data.uid!=0&&(T(s).user.data.uid==T(c).ownerID||((m=T(r))==null?void 0:m.type)=="admin"||(_=(g=T(c))==null?void 0:g.moderators)!=null&&_.includes(T(s).user.data.uid)||(w=(v=T(c))==null?void 0:v.editors)!=null&&w.includes(T(s).user.data.uid))?(M(),It(ft,{key:2,class:Cn([{"current-page":T(n).name=="moderator"},"iconBtn"]),onClick:h[3]||(h[3]=b=>l("moderator",T(i))),fasIcon:"square-check"},null,8,["class"])):be("",!0),T(s).user&&T(s).user.data.uid!=0&&(T(s).user.data.uid==T(c).ownerID||((I=T(r))==null?void 0:I.type)=="admin")?(M(),It(ft,{key:3,class:Cn([{"current-page":T(n).name=="groupView"},"iconBtn"]),onClick:h[4]||(h[4]=b=>l("groupView",T(i))),fasIcon:"users-gear"},null,8,["class"])):be("",!0)],64)):(M(),It(ft,{key:1,class:"iconBtn",onClick:h[5]||(h[5]=b=>T(HC)(e.destination,T(o),T(s))),fasIcon:"right-to-bracket"}))])}}},oa=Ht(cU,[["__scopeId","data-v-c1f82fdb"]]);const Qf=t=>(Ji("data-v-d0b6509b"),t=t(),Zi(),t),lU={class:"container"},uU={class:"main-section"},hU={key:1},fU={style:{"justify-content":"end",display:"flex"}},dU=Qf(()=>A("section",null,null,-1)),pU=Qf(()=>A("h1",null,"Not authenticated",-1)),gU=Qf(()=>A("p",null,"you do not need to log in to view a published board.",-1)),mU=Qf(()=>A("p",null," if the board you are looking for is private, you need to be the owner, a moderator, or editor to view this board. ",-1)),_U={__name:"BoardView",setup(t){var h;const e=is(),n=js(),i=Wr();e.setBoardUUID(i.params.boardUUID),e.setSelectedTile("");const s=e.boardUUID,r=yt(!1),o=st(ge(re,"Users",`${n.user.data.uid}`)),{data:a}=st(Mn(re,"Boards",s,"Groups")),c=st(ge(re,"Boards",s));e.setRules((h=c.value)==null?void 0:h.rules);const l=Ce(()=>{var d;let f={};return a&&((d=a==null?void 0:a.value)==null||d.forEach(async p=>{f[p.id]={...p}})),f||{}}),{data:u}=st(Mn(re,`Boards/${s}/Tiles`));return(f,d)=>{var p;return M(),U("div",lU,[Z(oa,{destination:{name:"overview",params:{boardUUID:T(s)}}},null,8,["destination"]),T(c)&&T(u)&&(T(c).settings.public||T(n).user.data.uid==T(c).ownerID||((p=T(o))==null?void 0:p.type)=="admin")?(M(),U(Te,{key:0},[A("section",null,[A("h1",null,me(T(c).name),1)]),A("section",uU,[r.value==r.value?(M(),U(Te,{key:0},[T(l)?(M(),It(Z9,{key:0,class:"scoreCard",groupsData:T(l)},null,8,["groupsData"])):be("",!0)],64)):be("",!0),(M(),It(fy,{boardData:T(c),groupsData:T(l),tilesData:T(u),key:"bingo-board-"+T(e).boardUUID},null,8,["boardData","groupsData","tilesData"])),T(e).selectedTile!=""?(M(),U("aside",hU,[A("div",fU,[A("button",{class:"btn close",onClick:d[0]||(d[0]=()=>{T(e).setSelectedTile("")})}," ╳ ")]),T(e).selectedTile!=""?(M(),It(iU,{key:0})):be("",!0)])):be("",!0)]),dU],64)):(M(),U(Te,{key:1},[pU,gU,mU],64))])}}},yU=Ht(_U,[["__scopeId","data-v-d0b6509b"]]);const vU=t=>(Ji("data-v-409f2e33"),t=t(),Zi(),t),bU=["for"],wU=vU(()=>A("br",null,null,-1)),EU=["id","checked","onClick"],TU={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],Vt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Vt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,Vt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Vt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&Vt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(M(),U("div",{key:e.tileData.id},[A("h2",null,"{ "+me(e.tileData.id.split("")[0])+" , "+me(e.tileData.id.split("")[1])+" }",1),A("ul",null,[(M(!0),U(Te,null,un(e.groupsData,o=>(M(),U("li",{key:o.id+T(n).id,class:Cn({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[A("label",{for:o.id+T(n).id},[ve(me(o.name)+" : "+me(o.verify.hasOwnProperty(e.tileData.id)),1),wU,ve(" collected: "),(M(),U("input",{id:o.id+T(n).id,type:"checkbox",class:"toggle",key:o.id+T(n).id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:qe(a=>i({tile:T(n),group:o}),["prevent"])},null,8,EU))],8,bU)],2))),128))])])):be("",!0)}},IU=Ht(TU,[["__scopeId","data-v-409f2e33"]]);const xU={class:"container"},CU={key:0},kU={key:0},SU={key:1},AU={__name:"ModeratorView",setup(t){const e=is(),n=js(),i=Wr(),s=Ce(()=>i.params.boardUUID),{data:r}=st(Mn(re,"Boards",s.value,"Groups")),o=st(ge(re,"Users",`${n.user.data.uid}`)),a=st(ge(re,"Boards",s.value)),c=Ce(()=>{var h;let u={};return r&&((h=r==null?void 0:r.value)==null||h.forEach(f=>{f.name!="moderator"&&(u[f.id]={id:f.id,name:f.name,member:f.members,icon:f.icon,color:f.color,points:f.points,flagEnd:f.flagEnd,collected:f.collected,verify:f.verify})})),u||{}}),{data:l}=st(Mn(re,`Boards/${s.value}/Tiles`));return(u,h)=>{var f,d;return M(),U("div",xU,[Z(oa,{destination:{name:"moderator",params:T(s)}},null,8,["destination"]),A("section",null,[((f=T(a))==null?void 0:f.name)!=null?(M(),U("h1",CU,me(T(a).name),1)):be("",!0)]),T(n).user&&T(n).user.data.uid!=0&&(T(n).user.data.uid==T(a).ownerID||((d=T(o))==null?void 0:d.type)=="admin"||T(a).moderators.includes(T(n).user.data.uid)||T(a).editors.includes(T(n).user.data.uid))?(M(),U("section",kU,[Z(fy,{boardData:T(a),groupsData:T(c),tilesData:T(l)},null,8,["boardData","groupsData","tilesData"]),A("aside",null,[(M(),It(IU,{tileData:T(e).selectedTile,key:T(e).selectedTile.id,boardUUID:T(s),groupsData:T(c),boardData:T(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(M(),U("section",SU,"please log in or return to the [board]"))])}}},RU=Ht(AU,[["__scopeId","data-v-73f4d541"]]);const DU={class:"tile"},OU={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(M(),U("div",DU,me(e.tile.coordinates),1))}},MU=Ht(OU,[["__scopeId","data-v-7a1ae405"]]),PU=cm("boardCreate",()=>{const t=yt({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const jC=t=>(Ji("data-v-0c61ffd7"),t=t(),Zi(),t),NU=["onKeydown"],LU={class:"pen"},FU=jC(()=>A("br",null,null,-1)),UU=jC(()=>A("br",null,null,-1)),VU={key:0,class:"bingo-board"},BU=["onClick"],$U={key:1},zU={key:2},HU={__name:"NewBoard",setup(t){yE(h=>({ee01da0c:s.value.settings.width,"7d145273":s.value.settings.height}));const e=PU(),n=js(),i=qf(),s=yt({name:"<name of bingo board>",settings:{width:1,height:1,public:!1}}),r=st(ge(re,"Users",`${n.user.data.uid}`)),o=yt(null),a=()=>{o.value.focus()},c=h=>{h.target.blur(),o.value.innerText.trim()==""?(s.value.name="Enter title here",o.value.innerText="Enter title here"):s.value.name=o.value.innerText.trim()},l=Ce(()=>{let h=[];for(let f=0;f<=parseInt(s.value.settings.width)*s.value.settings.height-1;f++){let d=(Math.floor(f/parseInt(s.value.settings.width))+1)*100+(f%parseInt(s.value.settings.width)+1);h.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:d,img:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"})}return h}),u=async()=>{const h=ge(Mn(re,"Boards")),f=ge(Mn(re,"Boards",h.id,"Groups"));await ms(h,{...s.value,ownerID:n.user.data.uid}).then(()=>{l.value.forEach(d=>{ms(ge(re,"Boards",h.id,"Tiles",`${d.coordinates}`),{...d})})}).then(()=>{ms(ge(re,f.path),{name:"all",collected:{},verify:{},icon:"frog",color:"#8a038f",points:0}),ms(ge(re,"Users",`${n.user.data.uid}`),{count:r.value.count+1}),e.setSelectedTile(""),i.push({name:"editBoard",params:{boardUUID:h.id}})})};return(h,f)=>{var p,m;const d=Rs("font-awesome-icon");return M(),U(Te,null,[Z(oa,{destination:{name:"userOverview"}}),T(n).user.loggedIn&&T(n).user.data.uid!=0&&((p=T(r))==null?void 0:p.count)<5?(M(),U(Te,{key:0},[A("h1",{class:"title-wrap",onClick:f[0]||(f[0]=qe(g=>a(),["prevent"]))},[A("span",{class:"board-title",ref_key:"titleElement",ref:o,contenteditable:"",spellcheck:"false",onKeydown:Pi(c,["enter"]),onBlur:c},me(s.value.name),41,NU),A("span",LU,[Z(d,{icon:["fas","pen"]})])]),A("div",null,[ve(" name: width: "),xn(A("input",{min:"1",max:"9",name:"width",type:"range","onUpdate:modelValue":f[1]||(f[1]=g=>s.value.settings.width=g)},null,512),[[Gn,s.value.settings.width]]),ve(me(s.value.settings.width),1),FU,ve(" height: "),xn(A("input",{min:"1",max:"9",name:"height",type:"range","onUpdate:modelValue":f[2]||(f[2]=g=>s.value.settings.height=g)},null,512),[[Gn,s.value.settings.height]]),ve(me(s.value.settings.height),1),UU,ve(" total tiles: "+me(s.value.settings.width*s.value.settings.height),1)]),T(l)?(M(),U("main",VU,[(M(!0),U(Te,null,un(T(l),g=>(M(),It(MU,{key:g.coordinates,tile:g},null,8,["tile"]))),128))])):be("",!0),A("button",{class:"btn",onClick:qe(u,["prevent"])},"Save Settings",8,BU)],64)):be("",!0),T(n).user.loggedIn?be("",!0):(M(),U("h1",$U,"not authenticated")),((m=T(r))==null?void 0:m.count)>=5?(M(),U("h1",zU,"You've exceded the 5 board limit")):be("",!0)],64)}}},jU=Ht(HU,[["__scopeId","data-v-0c61ffd7"]]);const vl=t=>(Ji("data-v-f04e052f"),t=t(),Zi(),t),WU=vl(()=>A("h2",null,"User:",-1)),qU=vl(()=>A("br",null,null,-1)),KU={class:"UID"},GU=vl(()=>A("br",null,null,-1)),YU=vl(()=>A("h2",null,"your boards:",-1)),XU={key:0},QU={class:"iconSpan"},JU=vl(()=>A("br",null,null,-1)),ZU=["checked","onClick"],eV={key:1},tV={key:2},nV={class:"iconSpan"},iV={key:3},sV={key:4},rV={class:"iconSpan"},oV={key:1},aV={__name:"UserOverview",setup(t){const e=js(),n=st(ge(re,"Users",`${e.user.data.uid}`)),i=Mn(re,"Boards"),s=Ce(()=>{var d;let f="==";return((d=n==null?void 0:n.value)==null?void 0:d.type)=="admin"&&(f="!="),f}),r=Ce(()=>{var d;let f="==";return((d=n==null?void 0:n.value)==null?void 0:d.type)=="admin"?f="0":f=e.user.data.uid,f}),o=st(Md(i,Pd("ownerID",s.value,r.value))),a=st(Md(i,Pd("moderators","array-contains",e.user.data.uid))),c=st(Md(i,Pd("editors","array-contains",e.user.data.uid))),l=qf(),u=(f,d)=>{l.push({name:f,params:{boardUUID:d}})},h=f=>{let d={...f};d.settings.public=!f.settings.public,Vt(ge(re,"Boards",f.id),d)};return e.user.loggedIn||l.push({name:"loginView"}),(f,d)=>{var g;const p=Rs("font-awesome-icon"),m=Rs("router-link");return T(e).user.loggedIn&&T(e).user&&T(e).user.data.uid!="0"?(M(),U(Te,{key:0},[WU,ve(" Total boards: "+me((g=T(n))!=null&&g.count?T(n).count:0),1),qU,ve(" user ID: "),A("span",KU,me(T(e).user.data.uid),1),GU,ve(" share your user ID with people to have them add you as moderator / editor. "),YU,T(o)?(M(),U("ul",XU,[(M(!0),U(Te,null,un(T(o),_=>(M(),U("li",{key:_},[A("span",null,me(_.name),1),A("span",QU,[Z(p,{onClick:v=>u("editBoard",_.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Z(p,{onClick:v=>u("overview",_.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(p,{onClick:v=>u("moderator",_.id),class:"ico",icon:["fas","square-check"]},null,8,["onClick"]),Z(p,{onClick:v=>u("groupView",_.id),class:"ico",icon:["fas","users-gear"]},null,8,["onClick"]),JU,ve(" Public: "),A("input",{class:"toggle",type:"checkbox",checked:_.settings.public,onClick:qe(v=>h(_),["prevent"])},null,8,ZU)])]))),128)),!T(n)||T(n).count<5?(M(),It(m,{key:0,to:{name:"newBoard"},class:"btn highlight"},{default:tm(()=>[ve("+ create board")]),_:1})):be("",!0)])):be("",!0),T(c)?(M(),U("h2",eV,"boards you can edit:")):be("",!0),T(c)?(M(),U("ul",tV,[(M(!0),U(Te,null,un(T(c),_=>(M(),U("li",{key:_},[A("span",null,me(_.name),1),A("span",nV,[Z(p,{onClick:v=>u("editBoard",_.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Z(p,{onClick:v=>u("overview",_.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(p,{onClick:v=>u("moderator",_.id),class:"ico",icon:["fas","square-check"]},null,8,["onClick"])])]))),128))])):be("",!0),T(a)?(M(),U("h2",iV,"boards you can moderate:")):be("",!0),T(a)?(M(),U("ul",sV,[(M(!0),U(Te,null,un(T(a),_=>(M(),U("li",{key:_},[A("span",null,me(_.name),1),A("span",rV,[Z(p,{onClick:v=>u("overview",_.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Z(p,{onClick:v=>u("moderator",_.id),class:"ico",icon:["fas","square-check"]},null,8,["onClick"])])]))),128))])):be("",!0)],64)):(M(),U("h1",oV,"Not Authenticated"))}}},cV=Ht(aV,[["__scopeId","data-v-f04e052f"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function bl(t){return t+.5|0}const _s=(t,e,n)=>Math.max(Math.min(t,n),e);function Sa(t){return _s(bl(t*2.55),0,255)}function ks(t){return _s(bl(t*255),0,255)}function Oi(t){return _s(bl(t/2.55)/100,0,1)}function lb(t){return _s(bl(t*100),0,100)}const Ln={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Sg=[..."0123456789ABCDEF"],lV=t=>Sg[t&15],uV=t=>Sg[(t&240)>>4]+Sg[t&15],Jl=t=>(t&240)>>4===(t&15),hV=t=>Jl(t.r)&&Jl(t.g)&&Jl(t.b)&&Jl(t.a);function fV(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Ln[t[1]]*17,g:255&Ln[t[2]]*17,b:255&Ln[t[3]]*17,a:e===5?Ln[t[4]]*17:255}:(e===7||e===9)&&(n={r:Ln[t[1]]<<4|Ln[t[2]],g:Ln[t[3]]<<4|Ln[t[4]],b:Ln[t[5]]<<4|Ln[t[6]],a:e===9?Ln[t[7]]<<4|Ln[t[8]]:255})),n}const dV=(t,e)=>t<255?e(t):"";function pV(t){var e=hV(t)?lV:uV;return t?"#"+e(t.r)+e(t.g)+e(t.b)+dV(t.a,e):void 0}const gV=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function WC(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function mV(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function _V(t,e,n){const i=WC(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function yV(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function dy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let c,l,u;return r!==o&&(u=r-o,l=a>.5?u/(2-r-o):u/(r+o),c=yV(n,i,s,u,r),c=c*60+.5),[c|0,l||0,a]}function py(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ks)}function gy(t,e,n){return py(WC,t,e,n)}function vV(t,e,n){return py(_V,t,e,n)}function bV(t,e,n){return py(mV,t,e,n)}function qC(t){return(t%360+360)%360}function wV(t){const e=gV.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Sa(+e[5]):ks(+e[5]));const s=qC(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=vV(s,r,o):e[1]==="hsv"?i=bV(s,r,o):i=gy(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function EV(t,e){var n=dy(t);n[0]=qC(n[0]+e),n=gy(n),t.r=n[0],t.g=n[1],t.b=n[2]}function TV(t){if(!t)return;const e=dy(t),n=e[0],i=lb(e[1]),s=lb(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Oi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const ub={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},hb={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function IV(){const t={},e=Object.keys(hb),n=Object.keys(ub);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,ub[r]);r=parseInt(hb[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Zl;function xV(t){Zl||(Zl=IV(),Zl.transparent=[0,0,0,0]);const e=Zl[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const CV=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function kV(t){const e=CV.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?Sa(o):_s(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?Sa(i):_s(i,0,255)),s=255&(e[4]?Sa(s):_s(s,0,255)),r=255&(e[6]?Sa(r):_s(r,0,255)),{r:i,g:s,b:r,a:n}}}function SV(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Oi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Wd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Jr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function AV(t,e,n){const i=Jr(Oi(t.r)),s=Jr(Oi(t.g)),r=Jr(Oi(t.b));return{r:ks(Wd(i+n*(Jr(Oi(e.r))-i))),g:ks(Wd(s+n*(Jr(Oi(e.g))-s))),b:ks(Wd(r+n*(Jr(Oi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function eu(t,e,n){if(t){let i=dy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=gy(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function KC(t,e){return t&&Object.assign(e||{},t)}function fb(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ks(t[3]))):(e=KC(t,{r:0,g:0,b:0,a:1}),e.a=ks(e.a)),e}function RV(t){return t.charAt(0)==="r"?kV(t):wV(t)}class Mc{constructor(e){if(e instanceof Mc)return e;const n=typeof e;let i;n==="object"?i=fb(e):n==="string"&&(i=fV(e)||xV(e)||RV(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=KC(this._rgb);return e&&(e.a=Oi(e.a)),e}set rgb(e){this._rgb=fb(e)}rgbString(){return this._valid?SV(this._rgb):void 0}hexString(){return this._valid?pV(this._rgb):void 0}hslString(){return this._valid?TV(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=AV(this._rgb,e._rgb,n)),this}clone(){return new Mc(this.rgb)}alpha(e){return this._rgb.a=ks(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=bl(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return eu(this._rgb,2,e),this}darken(e){return eu(this._rgb,2,-e),this}saturate(e){return eu(this._rgb,1,e),this}desaturate(e){return eu(this._rgb,1,-e),this}rotate(e){return EV(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Si(){}const DV=(()=>{let t=0;return()=>t++})();function it(t){return t===null||typeof t>"u"}function ut(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Be(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Nt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Tn(t,e){return Nt(t)?t:e}function De(t,e){return typeof t>"u"?e:t}const OV=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Xe(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function je(t,e,n,i){let s,r,o;if(ut(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(Be(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Rh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Dh(t){if(ut(t))return t.map(Dh);if(Be(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Dh(t[n[s]]);return e}return t}function GC(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function MV(t,e,n,i){if(!GC(t))return;const s=e[t],r=n[t];Be(s)&&Be(r)?Pc(s,r,i):e[t]=Dh(r)}function Pc(t,e,n){const i=ut(e)?e:[e],s=i.length;if(!Be(t))return t;n=n||{};const r=n.merger||MV;let o;for(let a=0;a<s;++a){if(o=i[a],!Be(o))continue;const c=Object.keys(o);for(let l=0,u=c.length;l<u;++l)r(c[l],t,o,n)}return t}function Xa(t,e){return Pc(t,e,{merger:PV})}function PV(t,e,n){if(!GC(t))return;const i=e[t],s=n[t];Be(i)&&Be(s)?Xa(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Dh(s))}const db={"":t=>t,x:t=>t.x,y:t=>t.y};function NV(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function LV(t){const e=NV(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Oh(t,e){return(db[e]||(db[e]=LV(e)))(t)}function my(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Mh=t=>typeof t<"u",Vs=t=>typeof t=="function",pb=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function FV(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Rt=Math.PI,Bn=2*Rt,UV=Bn+Rt,Ph=Number.POSITIVE_INFINITY,VV=Rt/180,vn=Rt/2,Ys=Rt/4,gb=Rt*2/3,ys=Math.log10,$o=Math.sign;function Qa(t,e,n){return Math.abs(t-e)<n}function mb(t){const e=Math.round(t);t=Qa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(ys(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function BV(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Nc(t){return!isNaN(parseFloat(t))&&isFinite(t)}function $V(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function YC(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function vs(t){return t*(Rt/180)}function _y(t){return t*(180/Rt)}function _b(t){if(!Nt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function zV(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*Rt&&(r+=Bn),{angle:r,distance:s}}function Ag(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function HV(t,e){return(t-e+UV)%Bn-Rt}function Hn(t){return(t%Bn+Bn)%Bn}function XC(t,e,n,i){const s=Hn(t),r=Hn(e),o=Hn(n),a=Hn(r-s),c=Hn(o-s),l=Hn(s-r),u=Hn(s-o);return s===r||s===o||i&&r===o||a>c&&l<u}function Un(t,e,n){return Math.max(e,Math.min(n,t))}function jV(t){return Un(t,-32768,32767)}function Aa(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function yy(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const pr=(t,e,n,i)=>yy(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),WV=(t,e,n)=>yy(t,n,i=>t[i][e]>=n);function qV(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const QC=["push","pop","shift","splice","unshift"];function KV(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),QC.forEach(n=>{const i="_onData"+my(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function yb(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(QC.forEach(r=>{delete t[r]}),delete t._chartjs)}function GV(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const JC=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function ZC(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,JC.call(window,()=>{i=!1,t.apply(e,n)}))}}function YV(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const vy=t=>t==="start"?"left":t==="end"?"right":"center",Kt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,XV=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function QV(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=Un(Math.min(pr(a,o.axis,l).lo,n?i:pr(e,c,o.getPixelForValue(l)).lo),0,i-1)),f?r=Un(Math.max(pr(a,o.axis,u,!0).hi+1,n?0:pr(e,c,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function JV(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const tu=t=>t===0||t===1,vb=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Bn/n)),bb=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Bn/n)+1,Ja={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*vn)+1,easeOutSine:t=>Math.sin(t*vn),easeInOutSine:t=>-.5*(Math.cos(Rt*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>tu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>tu(t)?t:vb(t,.075,.3),easeOutElastic:t=>tu(t)?t:bb(t,.075,.3),easeInOutElastic(t){return tu(t)?t:t<.5?.5*vb(t*2,.1125,.45):.5+.5*bb(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ja.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ja.easeInBounce(t*2)*.5:Ja.easeOutBounce(t*2-1)*.5+.5};function by(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function wb(t){return by(t)?t:new Mc(t)}function qd(t){return by(t)?t:new Mc(t).saturate(.5).darken(.1).hexString()}const ZV=["x","y","borderWidth","radius","tension"],eB=["color","borderColor","backgroundColor"];function tB(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:eB},numbers:{type:"number",properties:ZV}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function nB(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Eb=new Map;function iB(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Eb.get(n);return i||(i=new Intl.NumberFormat(t,e),Eb.set(n,i)),i}function wy(t,e,n){return iB(e,n).format(t)}const ek={values(t){return ut(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const l=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=sB(t,n)}const o=ys(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),wy(t,i,c)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(ys(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?ek.numeric.call(this,t,e,n):""}};function sB(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Jf={formatters:ek};function rB(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Jf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Mr=Object.create(null),Rg=Object.create(null);function Za(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Kd(t,e,n){return typeof e=="string"?Pc(Za(t,e),n):Pc(Za(t,""),e)}class oB{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>qd(s.backgroundColor),this.hoverBorderColor=(i,s)=>qd(s.borderColor),this.hoverColor=(i,s)=>qd(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Kd(this,e,n)}get(e){return Za(this,e)}describe(e,n){return Kd(Rg,e,n)}override(e,n){return Kd(Mr,e,n)}route(e,n,i,s){const r=Za(this,e),o=Za(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[a],l=o[s];return Be(c)?Object.assign({},l,c):De(c,l)},set(c){this[a]=c}}})}apply(e){e.forEach(n=>n(this))}}var pt=new oB({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[tB,nB,rB]);function aB(t){return!t||it(t.size)||it(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Nh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function cB(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let c,l,u,h,f;for(c=0;c<a;c++)if(h=n[c],h!=null&&!ut(h))o=Nh(t,s,r,o,h);else if(ut(h))for(l=0,u=h.length;l<u;l++)f=h[l],f!=null&&!ut(f)&&(o=Nh(t,s,r,o,f));t.restore();const d=r.length/2;if(d>n.length){for(c=0;c<d;c++)delete s[r[c]];r.splice(0,d)}return o}function Xs(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function Tb(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Dg(t,e,n,i){tk(t,e,n,i,null)}function tk(t,e,n,i,s){let r,o,a,c,l,u,h,f;const d=e.pointStyle,p=e.rotation,m=e.radius;let g=(p||0)*VV;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(g),t.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),t.restore();return}if(!(isNaN(m)||m<=0)){switch(t.beginPath(),d){default:s?t.ellipse(n,i,s/2,m,0,0,Bn):t.arc(n,i,m,0,Bn),t.closePath();break;case"triangle":u=s?s/2:m,t.moveTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=gb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=gb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),t.closePath();break;case"rectRounded":l=m*.516,c=m-l,o=Math.cos(g+Ys)*c,h=Math.cos(g+Ys)*(s?s/2-l:c),a=Math.sin(g+Ys)*c,f=Math.sin(g+Ys)*(s?s/2-l:c),t.arc(n-h,i-a,l,g-Rt,g-vn),t.arc(n+f,i-o,l,g-vn,g),t.arc(n+h,i+a,l,g,g+vn),t.arc(n-f,i+o,l,g+vn,g+Rt),t.closePath();break;case"rect":if(!p){c=Math.SQRT1_2*m,u=s?s/2:c,t.rect(n-u,i-c,2*u,2*c);break}g+=Ys;case"rectRot":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+f,i-o),t.lineTo(n+h,i+a),t.lineTo(n-f,i+o),t.closePath();break;case"crossRot":g+=Ys;case"cross":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"star":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o),g+=Ys,h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,f=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+f,i-o),t.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(g)*m,a=Math.sin(g)*m,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(g)*(s?s/2:m),i+Math.sin(g)*m);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Vi(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ey(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Ty(t){t.restore()}function lB(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function uB(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function hB(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),it(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function fB(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,c=n-r.actualBoundingBoxAscent,l=n+r.actualBoundingBoxDescent,u=s.strikethrough?(c+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function dB(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Pr(t,e,n,i,s,r={}){const o=ut(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(t.save(),t.font=s.string,hB(t,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&dB(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),it(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(l,n,i,r.maxWidth)),t.fillText(l,n,i,r.maxWidth),fB(t,n,i,l,r),i+=Number(s.lineHeight);t.restore()}function Lh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-vn,Rt,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Rt,vn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,vn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-vn,!0),t.lineTo(n+o.topLeft,i)}const pB=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,gB=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function mB(t,e){const n=(""+t).match(pB);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const _B=t=>+t||0;function nk(t,e){const n={},i=Be(e),s=i?Object.keys(e):e,r=Be(t)?i?o=>De(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=_B(r(o));return n}function yB(t){return nk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function vo(t){return nk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function an(t){const e=yB(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function xt(t,e){t=t||{},e=e||pt.font;let n=De(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=De(t.style,e.style);i&&!(""+i).match(gB)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:De(t.family,e.family),lineHeight:mB(De(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:De(t.weight,e.weight),string:""};return s.string=aB(s),s}function nu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&ut(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function vB(t,e,n){const{min:i,max:s}=t,r=OV(e,(s-i)/2),o=(a,c)=>n&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Ws(t,e){return Object.assign(Object.create(t),e)}function Iy(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=ok("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Iy([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete t[0][c],!0},get(a,c){return sk(a,c,()=>kB(c,e,t,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,c){return xb(a).includes(c)},ownKeys(a){return xb(a)},set(a,c,l){const u=a._storage||(a._storage=s());return a[c]=u[c]=l,delete a._keys,!0}})}function zo(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:ik(t,i),setContext:r=>zo(t,r,n,i),override:r=>zo(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return sk(r,o,()=>wB(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function ik(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Vs(n)?n:()=>n,isIndexable:Vs(i)?i:()=>i}}const bB=(t,e)=>t?t+my(e):e,xy=(t,e)=>Be(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function sk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function wB(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Vs(a)&&o.isScriptable(e)&&(a=EB(e,a,t,n)),ut(a)&&a.length&&(a=TB(e,a,t,o.isIndexable)),xy(e,a)&&(a=zo(a,s,r&&r[e],o)),a}function EB(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let c=e(r,o||i);return a.delete(t),xy(t,c)&&(c=Cy(s._scopes,s,t,c)),c}function TB(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(Be(e[0])){const c=e,l=s._scopes.filter(u=>u!==c);e=[];for(const u of c){const h=Cy(l,s,t,u);e.push(zo(h,r,o&&o[t],a))}}return e}function rk(t,e,n){return Vs(t)?t(e,n):t}const IB=(t,e)=>t===!0?e:typeof t=="string"?Oh(e,t):void 0;function xB(t,e,n,i,s){for(const r of e){const o=IB(n,r);if(o){t.add(o);const a=rk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Cy(t,e,n,i){const s=e._rootScopes,r=rk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let c=Ib(a,o,n,r||n,i);return c===null||typeof r<"u"&&r!==n&&(c=Ib(a,o,r,c,i),c===null)?!1:Iy(Array.from(a),[""],s,r,()=>CB(e,n,i))}function Ib(t,e,n,i,s){for(;n;)n=xB(t,e,n,i,s);return n}function CB(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return ut(s)&&Be(n)?n:s||{}}function kB(t,e,n,i){let s;for(const r of e)if(s=ok(bB(r,t),n),typeof s<"u")return xy(t,s)?Cy(n,i,t,s):s}function ok(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function xb(t){let e=t._keys;return e||(e=t._keys=SB(t._scopes)),e}function SB(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const AB=Number.EPSILON||1e-14,Ho=(t,e)=>e<t.length&&!t[e].skip&&t[e],ak=t=>t==="x"?"y":"x";function RB(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Ag(r,s),c=Ag(o,r);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function DB(t,e,n){const i=t.length;let s,r,o,a,c,l=Ho(t,0);for(let u=0;u<i-1;++u)if(c=l,l=Ho(t,u+1),!(!c||!l)){if(Qa(e[u],0,AB)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function OB(t,e,n="x"){const i=ak(n),s=t.length;let r,o,a,c=Ho(t,0);for(let l=0;l<s;++l){if(o=a,a=c,c=Ho(t,l+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[l]),c&&(r=(c[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[l])}}function MB(t,e="x"){const n=ak(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=Ho(t,0);for(o=0;o<i;++o)if(a=c,c=l,l=Ho(t,o+1),!!c){if(l){const u=l[e]-c[e];s[o]=u!==0?(l[n]-c[n])/u:0}r[o]=a?l?$o(s[o-1])!==$o(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}DB(t,s,r),OB(t,r,e)}function iu(t,e,n){return Math.max(Math.min(t,n),e)}function PB(t,e){let n,i,s,r,o,a=Vi(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Vi(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=iu(s.cp1x,e.left,e.right),s.cp1y=iu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=iu(s.cp2x,e.left,e.right),s.cp2y=iu(s.cp2y,e.top,e.bottom)))}function NB(t,e,n,i,s){let r,o,a,c;if(e.spanGaps&&(t=t.filter(l=>!l.skip)),e.cubicInterpolationMode==="monotone")MB(t,s);else{let l=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],c=RB(l,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}e.capBezierPoints&&PB(t,n)}function ck(){return typeof window<"u"&&typeof document<"u"}function ky(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Fh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Zf=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function LB(t,e){return Zf(t).getPropertyValue(e)}const FB=["top","right","bottom","left"];function wr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=FB[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const UB=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function VB(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(UB(s,r,t.target))a=s,c=r;else{const l=e.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function nr(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Zf(n),r=s.boxSizing==="border-box",o=wr(s,"padding"),a=wr(s,"border","width"),{x:c,y:l,box:u}=VB(t,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=e;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((c-h)/d*n.width/i),y:Math.round((l-f)/p*n.height/i)}}function BB(t,e,n){let i,s;if(e===void 0||n===void 0){const r=ky(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=Zf(r),c=wr(a,"border","width"),l=wr(a,"padding");e=o.width-l.width-c.width,n=o.height-l.height-c.height,i=Fh(a.maxWidth,r,"clientWidth"),s=Fh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Ph,maxHeight:s||Ph}}const su=t=>Math.round(t*10)/10;function $B(t,e,n,i){const s=Zf(t),r=wr(s,"margin"),o=Fh(s.maxWidth,t,"clientWidth")||Ph,a=Fh(s.maxHeight,t,"clientHeight")||Ph,c=BB(t,e,n);let{width:l,height:u}=c;if(s.boxSizing==="content-box"){const f=wr(s,"border","width"),d=wr(s,"padding");l-=d.width+f.width,u-=d.height+f.height}return l=Math.max(0,l-r.width),u=Math.max(0,i?l/i:u-r.height),l=su(Math.min(l,o,c.maxWidth)),u=su(Math.min(u,a,c.maxHeight)),l&&!u&&(u=su(l/2)),(e!==void 0||n!==void 0)&&i&&c.height&&u>c.height&&(u=c.height,l=su(Math.floor(u*i))),{width:l,height:u}}function Cb(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const zB=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function kb(t,e){const n=LB(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ir(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function HB(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function jB(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=ir(t,s,n),a=ir(s,r,n),c=ir(r,e,n),l=ir(o,a,n),u=ir(a,c,n);return ir(l,u,n)}const WB=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},qB=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function bo(t,e,n){return t?WB(e,n):qB()}function lk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function uk(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function hk(t){return t==="angle"?{between:XC,compare:HV,normalize:Hn}:{between:Aa,compare:(e,n)=>e-n,normalize:e=>e}}function Sb({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function KB(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=hk(i),c=e.length;let{start:l,end:u,loop:h}=t,f,d;if(h){for(l+=c,u+=c,f=0,d=c;f<d&&o(a(e[l%c][i]),s,r);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:h,style:t.style}}function GB(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:c,normalize:l}=hk(i),{start:u,end:h,loop:f,style:d}=KB(t,e,n),p=[];let m=!1,g=null,_,v,w;const I=()=>c(s,w,_)&&a(s,w)!==0,b=()=>a(r,_)===0||c(r,w,_),C=()=>m||I(),k=()=>!m||b();for(let x=u,F=u;x<=h;++x)v=e[x%o],!v.skip&&(_=l(v[i]),_!==w&&(m=c(_,s,r),g===null&&C()&&(g=a(_,s)===0?x:F),g!==null&&k()&&(p.push(Sb({start:g,end:x,loop:f,count:o,style:d})),g=null),F=x,w=_));return g!==null&&p.push(Sb({start:g,end:h,loop:f,count:o,style:d})),p}function YB(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=GB(i[s],t.points,e);r.length&&n.push(...r)}return n}function XB(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function QB(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],c;for(c=e+1;c<=n;++c){const l=t[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:e%s,end:(c-1)%s,loop:i}),e=o=l.stop?c:null):(o=c,a.skip&&(e=c)),a=l}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function JB(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=XB(n,s,r,i);if(i===!0)return Ab(t,[{start:o,end:a,loop:r}],n,e);const c=a<o?a+s:a,l=!!t._fullLoop&&o===0&&a===s-1;return Ab(t,QB(n,o,c,l),n,e)}function Ab(t,e,n,i){return!i||!i.setContext||!n?e:ZB(t,e,n,i)}function ZB(t,e,n,i){const s=t._chart.getContext(),r=Rb(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,c=n.length,l=[];let u=r,h=e[0].start,f=h;function d(p,m,g,_){const v=a?-1:1;if(p!==m){for(p+=c;n[p%c].skip;)p-=v;for(;n[m%c].skip;)m+=v;p%c!==m%c&&(l.push({start:p%c,end:m%c,loop:g,style:_}),u=_,h=m%c)}}for(const p of e){h=a?h:p.start;let m=n[h%c],g;for(f=h+1;f<=p.end;f++){const _=n[f%c];g=Rb(i.setContext(Ws(s,{type:"segment",p0:m,p1:_,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),e$(g,u)&&d(h,f-1,p.loop,u),m=_,u=g}h<f-1&&d(h,f-1,p.loop,u)}return l}function Rb(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function e$(t,e){if(!e)return!1;const n=[],i=function(s,r){return by(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class t${constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=JC.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ai=new t$;const Db="transparent",n$={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=wb(t||Db),s=i.valid&&wb(e||Db);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class i${constructor(e,n,i,s){const r=n[i];s=nu([e.to,s,r,e.from]);const o=nu([e.from,r,s]);this._active=!0,this._fn=e.fn||n$[e.type||typeof o],this._easing=Ja[e.easing]||Ja.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=nu([e.to,n,s,e.from]),this._from=nu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}c=n/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class fk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Be(e))return;const n=Object.keys(pt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Be(r))return;const o={};for(const a of n)o[a]=r[a];(ut(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=r$(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&s$(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){e[l]=u;continue}r[l]=h=new i$(f,e,l,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ai.add(this._chart,i),!0}}function s$(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function r$(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Ob(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function o$(t,e,n){if(n===!1)return!1;const i=Ob(t,n),s=Ob(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function a$(t){let e,n,i,s;return Be(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function dk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Mb(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,c,l;if(e!==null){for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===n){if(i.all)continue;break}l=t.values[c],Nt(l)&&(r||e===0||$o(e)===$o(l))&&(e+=l)}return e}}function c$(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Pb(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function l$(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function u$(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function h$(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Nb(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Lb(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,u=l$(r,o,i),h=e.length;let f;for(let d=0;d<h;++d){const p=e[d],{[c]:m,[l]:g}=p,_=p._stacks||(p._stacks={});f=_[l]=h$(s,u,m),f[a]=g,f._top=Nb(f,o,!0,i.type),f._bottom=Nb(f,o,!1,i.type);const v=f._visualValues||(f._visualValues={});v[a]=g}}function Gd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function f$(t,e){return Ws(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function d$(t,e,n){return Ws(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function ma(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Yd=t=>t==="reset"||t==="none",Fb=(t,e)=>e?t:Object.assign({},t),p$=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:dk(n,!0),values:null};class ec{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Pb(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ma(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=De(i.xAxisID,Gd(e,"x")),o=n.yAxisID=De(i.yAxisID,Gd(e,"y")),a=n.rAxisID=De(i.rAxisID,Gd(e,"r")),c=n.indexAxis,l=n.iAxisID=s(c,r,o,a),u=n.vAxisID=s(c,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(l),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&yb(this._data,this),e._stacked&&ma(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Be(n))this._data=c$(n);else if(i!==n){if(i){yb(i,this);const s=this._cachedMeta;ma(s),s._parsed=[]}n&&Object.isExtensible(n)&&KV(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Pb(n.vScale,n),n.stack!==i.stack&&(s=!0,ma(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Lb(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=e===0&&n===s.length?!0:i._sorted,l=e>0&&i._parsed[e-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{ut(s[e])?f=this.parseArrayData(i,s,e,n):Be(s[e])?f=this.parseObjectData(i,s,e,n):f=this.parsePrimitiveData(i,s,e,n);const d=()=>h[a]===null||l&&h[a]<l[a];for(u=0;u<n;++u)i._parsed[u+e]=h=f[u],c&&(d()&&(c=!1),l=h);i._sorted=c}o&&Lb(this,f)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,c=o.axis,l=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(l[p],p),[c]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let c,l,u,h;for(c=0,l=s;c<l;++c)u=c+i,h=n[u],a[c]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],l[u]={x:r.parse(Oh(d,a),f),y:o.parse(Oh(d,c),f)};return l}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:dk(s,!0),values:n._stacks[e.axis]._visualValues};return Mb(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=Mb(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),c=p$(n,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=u$(a);let f,d;function p(){d=s[f];const m=d[a.axis];return!Nt(d[e.axis])||u>m||h<m}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(l,e,d,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(l,e,d,c);break}}return l}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Nt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=a$(De(this.options.clip,o$(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,c),u=a;u<a+c;++u){const h=s[u];h.hidden||(h.active&&l?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=d$(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=f$(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],c=this.enableOptionSharing&&Mh(i);if(a)return Fb(a,c);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],f=l.getOptionScopes(this.getDataset(),u),d=Object.keys(pt.elements[e]),p=()=>this.getContext(i,s,n),m=l.resolveNamedOptions(f,d,p,h);return m.$shared&&(m.$shared=c,r[o]=Object.freeze(Fb(m,c))),m}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(f,this.getContext(e,i,n))}const l=new fk(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Yd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Yd(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Yd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const c=l=>{for(l.length+=n,a=l.length-1;a>=o;a--)l[a]=l[a-n]};for(c(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&ma(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ce(ec,"defaults",{}),ce(ec,"datasetElementType",null),ce(ec,"dataElementType",null);class Au extends ec{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:c}=QV(n,s,o);this._drawStart=a,this._drawCount=c,JV(n)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(e);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},e),this.updateElements(s,a,c,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:m}=this.options,g=Nc(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",v=n+i,w=e.length;let I=n>0&&this.getParsed(n-1);for(let b=0;b<w;++b){const C=e[b],k=_?C:{};if(b<n||b>=v){k.skip=!0;continue}const x=this.getParsed(b),F=it(x[d]),J=k[f]=o.getPixelForValue(x[f],b),ee=k[d]=r||F?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,x,c):x[d],b);k.skip=isNaN(J)||isNaN(ee)||F,k.stop=b>0&&Math.abs(x[f]-I[f])>g,m&&(k.parsed=x,k.raw=l.data[b]),h&&(k.options=u||this.resolveDataElementOptions(b,C.active?"active":s)),_||this.updateElement(C,b,k,s),I=x}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ce(Au,"id","line"),ce(Au,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ce(Au,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Qs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Sy{constructor(e){ce(this,"options");this.options=e||{}}static override(e){Object.assign(Sy.prototype,e)}init(){}formats(){return Qs()}parse(){return Qs()}format(){return Qs()}add(){return Qs()}diff(){return Qs()}startOf(){return Qs()}endOf(){return Qs()}}var g$={_date:Sy};function m$(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const c=a._reversePixels?WV:pr;if(i){if(s._sharedOptions){const l=r[0],u=typeof l.getRange=="function"&&l.getRange(e);if(u){const h=c(r,e,n-u),f=c(r,e,n+u);return{lo:h.lo,hi:f.hi}}}}else return c(r,e,n)}return{lo:0,hi:r.length-1}}function wl(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,c=r.length;a<c;++a){const{index:l,data:u}=r[a],{lo:h,hi:f}=m$(r[a],e,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,l,d)}}}function _$(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Xd(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||wl(t,n,e,function(a,c,l){!s&&!Vi(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function y$(t,e,n,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=zV(o,{x:e.x,y:e.y});XC(h,l,u)&&s.push({element:o,datasetIndex:a,index:c})}return wl(t,n,e,r),s}function v$(t,e,n,i,s,r){let o=[];const a=_$(n);let c=Number.POSITIVE_INFINITY;function l(u,h,f){const d=u.inRange(e.x,e.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!d)return;const g=a(e,p);g<c?(o=[{element:u,datasetIndex:h,index:f}],c=g):g===c&&o.push({element:u,datasetIndex:h,index:f})}return wl(t,n,e,l),o}function Qd(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?y$(t,e,n,s):v$(t,e,n,i,s,r)}function Ub(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return wl(t,n,e,(c,l,u)=>{c[o](e[n],s)&&(r.push({element:c,datasetIndex:l,index:u}),a=a||c.inRange(e.x,e.y,s))}),i&&!a?[]:r}var b$={evaluateInteractionItems:wl,modes:{index(t,e,n,i){const s=nr(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Xd(t,s,r,i,o):Qd(t,s,r,!1,i,o),c=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(l=>{const u=a[0].index,h=l.data[u];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:u})}),c):[]},dataset(t,e,n,i){const s=nr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Xd(t,s,r,i,o):Qd(t,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=t.getDatasetMeta(c).data;a=[];for(let u=0;u<l.length;++u)a.push({element:l[u],datasetIndex:c,index:u})}return a},point(t,e,n,i){const s=nr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Xd(t,s,r,i,o)},nearest(t,e,n,i){const s=nr(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Qd(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=nr(e,t);return Ub(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=nr(e,t);return Ub(t,s,"y",n.intersect,i)}}};const pk=["left","top","right","bottom"];function _a(t,e){return t.filter(n=>n.pos===e)}function Vb(t,e){return t.filter(n=>pk.indexOf(n.pos)===-1&&n.box.axis===e)}function ya(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function w$(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function E$(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!pk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function T$(t,e){const n=E$(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:c}=a.box,l=n[a.stack],u=l&&a.stackWeight/l.weight;a.horizontal?(a.width=u?u*i:c&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:c&&e.availableHeight)}return n}function I$(t){const e=w$(t),n=ya(e.filter(l=>l.box.fullSize),!0),i=ya(_a(e,"left"),!0),s=ya(_a(e,"right")),r=ya(_a(e,"top"),!0),o=ya(_a(e,"bottom")),a=Vb(e,"x"),c=Vb(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:_a(e,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Bb(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function gk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function x$(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!Be(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&gk(o,r.getPadding());const a=Math.max(0,e.outerWidth-Bb(o,t,"left","right")),c=Math.max(0,e.outerHeight-Bb(o,t,"top","bottom")),l=a!==t.w,u=c!==t.h;return t.w=a,t.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function C$(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function k$(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Ra(t,e,n,i){const s=[];let r,o,a,c,l,u;for(r=0,o=t.length,l=0;r<o;++r){a=t[r],c=a.box,c.update(a.width||e.w,a.height||e.h,k$(a.horizontal,e));const{same:h,other:f}=x$(e,n,a,i);l|=h&&s.length,u=u||f,c.fullSize||s.push(a)}return l&&Ra(s,e,n,i)||u}function ru(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function $b(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const c=a.box,l=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/l.weight||1;if(a.horizontal){const h=e.w*u,f=l.size||c.height;Mh(l.start)&&(o=l.start),c.fullSize?ru(c,s.left,o,n.outerWidth-s.right-s.left,f):ru(c,e.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=e.h*u,f=l.size||c.width;Mh(l.start)&&(r=l.start),c.fullSize?ru(c,r,s.top,f,n.outerHeight-s.bottom-s.top):ru(c,r,e.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}e.x=r,e.y=o}var Vn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=an(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=I$(t.boxes),c=a.vertical,l=a.horizontal;je(t.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const u=c.reduce((m,g)=>g.box.options&&g.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);gk(f,an(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=T$(c.concat(l),h);Ra(a.fullSize,d,h,p),Ra(c,d,h,p),Ra(l,d,h,p)&&Ra(c,d,h,p),C$(d),$b(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,$b(a.rightAndBottom,d,h,p),t.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},je(a.chartArea,m=>{const g=m.box;Object.assign(g,t.chartArea),g.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class mk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class S$ extends mk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ru="$chartjs",A$={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},zb=t=>t===null||t==="";function R$(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Ru]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",zb(s)){const r=kb(t,"width");r!==void 0&&(t.width=r)}if(zb(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=kb(t,"height");r!==void 0&&(t.height=r)}return t}const _k=zB?{passive:!0}:!1;function D$(t,e,n){t.addEventListener(e,n,_k)}function O$(t,e,n){t.canvas.removeEventListener(e,n,_k)}function M$(t,e){const n=A$[t.type]||t.type,{x:i,y:s}=nr(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Uh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function P$(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Uh(a.addedNodes,i),o=o&&!Uh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function N$(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Uh(a.removedNodes,i),o=o&&!Uh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Lc=new Map;let Hb=0;function yk(){const t=window.devicePixelRatio;t!==Hb&&(Hb=t,Lc.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function L$(t,e){Lc.size||window.addEventListener("resize",yk),Lc.set(t,e)}function F$(t){Lc.delete(t),Lc.size||window.removeEventListener("resize",yk)}function U$(t,e,n){const i=t.canvas,s=i&&ky(i);if(!s)return;const r=ZC((a,c)=>{const l=s.clientWidth;n(a,c),l<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,u=c.contentRect.height;l===0&&u===0||r(l,u)});return o.observe(s),L$(t,r),o}function Jd(t,e,n){n&&n.disconnect(),e==="resize"&&F$(t)}function V$(t,e,n){const i=t.canvas,s=ZC(r=>{t.ctx!==null&&n(M$(r,t))},t);return D$(i,e,s),s}class B$ extends mk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(R$(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Ru])return!1;const i=n[Ru].initial;["height","width"].forEach(r=>{const o=i[r];it(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Ru],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:P$,detach:N$,resize:U$}[n]||V$;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Jd,detach:Jd,resize:Jd}[n]||O$)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return $B(e,n,i,s)}isAttached(e){const n=ky(e);return!!(n&&n.isConnected)}}function $$(t){return!ck()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?S$:B$}var fu;let qr=(fu=class{constructor(){ce(this,"x");ce(this,"y");ce(this,"active",!1);ce(this,"options");ce(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Nc(this.x)&&Nc(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ce(fu,"defaults",{}),ce(fu,"defaultRoutes"),fu);function z$(t,e){const n=t.options.ticks,i=H$(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?W$(e):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return q$(e,l,r,o/s),l;const u=j$(r,e,s);if(o>0){let h,f;const d=o>1?Math.round((c-a)/(o-1)):null;for(ou(e,l,u,it(d)?0:a-d,a),h=0,f=o-1;h<f;h++)ou(e,l,u,r[h],r[h+1]);return ou(e,l,u,c,it(d)?e.length:c+d),l}return ou(e,l,u),l}function H$(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function j$(t,e,n){const i=K$(t),s=e.length/n;if(!i)return Math.max(s,1);const r=BV(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function W$(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function q$(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function ou(t,e,n,i,s){const r=De(i,0),o=Math.min(De(s,t.length),t.length);let a=0,c,l,u;for(n=Math.ceil(n),s&&(c=s-i,n=c/Math.floor(c/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(l=Math.max(r,0);l<o;l++)l===u&&(e.push(t[l]),a++,u=Math.round(r+a*n))}function K$(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const G$=t=>t==="left"?"right":t==="right"?"left":t,jb=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,Wb=(t,e)=>Math.min(e||t,t);function qb(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Y$(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let c=t.getPixelForTick(s),l;if(!(n&&(i===1?l=Math.max(c-r,o-c):e===0?l=(t.getPixelForTick(1)-c)/2:l=(c-t.getPixelForTick(s-1))/2,c+=s<e?l:-l,c<r-a||c>o+a)))return c}function X$(t,e){je(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function va(t){return t.drawTicks?t.tickLength:0}function Kb(t,e){if(!t.display)return 0;const n=xt(t.font,e),i=an(t.padding);return(ut(t.text)?t.text.length:1)*n.lineHeight+i.height}function Q$(t,e){return Ws(t,{scale:e,type:"scale"})}function J$(t,e,n){return Ws(t,{tick:n,index:e,type:"tick"})}function Z$(t,e,n){let i=vy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=G$(i)),i}function ez(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:c}=t,{chartArea:l,scales:u}=c;let h=0,f,d,p;const m=o-s,g=a-r;if(t.isHorizontal()){if(d=Kt(i,r,a),Be(n)){const _=Object.keys(n)[0],v=n[_];p=u[_].getPixelForValue(v)+m-e}else n==="center"?p=(l.bottom+l.top)/2+m-e:p=jb(t,n,e);f=a-r}else{if(Be(n)){const _=Object.keys(n)[0],v=n[_];d=u[_].getPixelForValue(v)-g+e}else n==="center"?d=(l.left+l.right)/2-g+e:d=jb(t,n,e);p=Kt(i,o,s),h=n==="left"?-vn:vn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class Kr extends qr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=Tn(e,Number.POSITIVE_INFINITY),n=Tn(n,Number.NEGATIVE_INFINITY),i=Tn(i,Number.POSITIVE_INFINITY),s=Tn(s,Number.NEGATIVE_INFINITY),{min:Tn(e,i),max:Tn(n,s),minDefined:Nt(e),maxDefined:Nt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:Tn(n,Tn(i,n)),max:Tn(i,Tn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Xe(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=vB(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?qb(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=z$(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Xe(this.options.afterUpdate,[this])}beforeSetDimensions(){Xe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Xe(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Xe(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Xe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Xe(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Xe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Xe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=Wb(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=Un(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(e.offset?.5:1)),c=this.maxHeight-va(e.grid)-n.padding-Kb(e.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=_y(Math.min(Math.asin(Un((u.highest.height+6)/a,-1,1)),Math.asin(Un(c/l,-1,1))-Math.asin(Un(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Xe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Xe(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Kb(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=va(r)+c):(e.height=this.maxHeight,e.width=va(r)+c),i.display&&this.ticks.length){const{first:l,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=vs(this.labelRotation),m=Math.cos(p),g=Math.sin(p);if(a){const _=i.mirror?0:g*h.width+m*f.height;e.height=Math.min(this.maxHeight,e.height+_+d)}else{const _=i.mirror?0:m*h.width+g*f.height;e.width=Math.min(this.maxWidth,e.width+_+d)}this._calculatePadding(l,u,g,m)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;c?l?(f=s*e.width,d=i*n.height):(f=i*e.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=e.width:r!=="inner"&&(f=e.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Xe(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)it(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=qb(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(n/Wb(n,i));let l=0,u=0,h,f,d,p,m,g,_,v,w,I,b;for(h=0;h<n;h+=c){if(p=e[h].label,m=this._resolveTickFontOptions(h),s.font=g=m.string,_=r[g]=r[g]||{data:{},gc:[]},v=m.lineHeight,w=I=0,!it(p)&&!ut(p))w=Nh(s,_.data,_.gc,w,p),I=v;else if(ut(p))for(f=0,d=p.length;f<d;++f)b=p[f],!it(b)&&!ut(b)&&(w=Nh(s,_.data,_.gc,w,b),I+=v);o.push(w),a.push(I),l=Math.max(w,l),u=Math.max(I,u)}X$(r,n);const C=o.indexOf(l),k=a.indexOf(u),x=F=>({width:o[F]||0,height:a[F]||0});return{first:x(0),last:x(n-1),widest:x(C),highest:x(k),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return jV(this._alignToPixels?Xs(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=J$(this.getContext(),e,i))}return this.$context||(this.$context=Q$(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=vs(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=va(r),d=[],p=a.setContext(this.getContext()),m=p.display?p.width:0,g=m/2,_=function(Ie){return Xs(i,Ie,m)};let v,w,I,b,C,k,x,F,J,ee,ae,Ge;if(o==="top")v=_(this.bottom),k=this.bottom-f,F=v-g,ee=_(e.top)+g,Ge=e.bottom;else if(o==="bottom")v=_(this.top),ee=e.top,Ge=_(e.bottom)-g,k=v+g,F=this.top+f;else if(o==="left")v=_(this.right),C=this.right-f,x=v-g,J=_(e.left)+g,ae=e.right;else if(o==="right")v=_(this.left),J=e.left,ae=_(e.right)-g,C=v+g,x=this.left+f;else if(n==="x"){if(o==="center")v=_((e.top+e.bottom)/2+.5);else if(Be(o)){const Ie=Object.keys(o)[0],Ee=o[Ie];v=_(this.chart.scales[Ie].getPixelForValue(Ee))}ee=e.top,Ge=e.bottom,k=v+g,F=k+f}else if(n==="y"){if(o==="center")v=_((e.left+e.right)/2);else if(Be(o)){const Ie=Object.keys(o)[0],Ee=o[Ie];v=_(this.chart.scales[Ie].getPixelForValue(Ee))}C=v-g,x=C-f,J=e.left,ae=e.right}const ye=De(s.ticks.maxTicksLimit,h),pe=Math.max(1,Math.ceil(h/ye));for(w=0;w<h;w+=pe){const Ie=this.getContext(w),Ee=r.setContext(Ie),Ne=a.setContext(Ie),jt=Ee.lineWidth,fn=Ee.color,Wt=Ne.dash||[],mt=Ne.dashOffset,Nn=Ee.tickWidth,ri=Ee.tickColor,D=Ee.tickBorderDash||[],H=Ee.tickBorderDashOffset;I=Y$(this,w,c),I!==void 0&&(b=Xs(i,I,jt),l?C=x=J=ae=b:k=F=ee=Ge=b,d.push({tx1:C,ty1:k,tx2:x,ty2:F,x1:J,y1:ee,x2:ae,y2:Ge,width:jt,color:fn,borderDash:Wt,borderDashOffset:mt,tickWidth:Nn,tickColor:ri,tickBorderDash:D,tickBorderDashOffset:H}))}return this._ticksLength=h,this._borderValue=v,d}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=r,f=va(i.grid),d=f+u,p=h?-u:d,m=-vs(this.labelRotation),g=[];let _,v,w,I,b,C,k,x,F,J,ee,ae,Ge="middle";if(s==="top")C=this.bottom-p,k=this._getXAxisLabelAlignment();else if(s==="bottom")C=this.top+p,k=this._getXAxisLabelAlignment();else if(s==="left"){const pe=this._getYAxisLabelAlignment(f);k=pe.textAlign,b=pe.x}else if(s==="right"){const pe=this._getYAxisLabelAlignment(f);k=pe.textAlign,b=pe.x}else if(n==="x"){if(s==="center")C=(e.top+e.bottom)/2+d;else if(Be(s)){const pe=Object.keys(s)[0],Ie=s[pe];C=this.chart.scales[pe].getPixelForValue(Ie)+d}k=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")b=(e.left+e.right)/2-d;else if(Be(s)){const pe=Object.keys(s)[0],Ie=s[pe];b=this.chart.scales[pe].getPixelForValue(Ie)}k=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(c==="start"?Ge="top":c==="end"&&(Ge="bottom"));const ye=this._getLabelSizes();for(_=0,v=a.length;_<v;++_){w=a[_],I=w.label;const pe=r.setContext(this.getContext(_));x=this.getPixelForTick(_)+r.labelOffset,F=this._resolveTickFontOptions(_),J=F.lineHeight,ee=ut(I)?I.length:1;const Ie=ee/2,Ee=pe.color,Ne=pe.textStrokeColor,jt=pe.textStrokeWidth;let fn=k;o?(b=x,k==="inner"&&(_===v-1?fn=this.options.reverse?"left":"right":_===0?fn=this.options.reverse?"right":"left":fn="center"),s==="top"?l==="near"||m!==0?ae=-ee*J+J/2:l==="center"?ae=-ye.highest.height/2-Ie*J+J:ae=-ye.highest.height+J/2:l==="near"||m!==0?ae=J/2:l==="center"?ae=ye.highest.height/2-Ie*J:ae=ye.highest.height-ee*J,h&&(ae*=-1),m!==0&&!pe.showLabelBackdrop&&(b+=J/2*Math.sin(m))):(C=x,ae=(1-ee)*J/2);let Wt;if(pe.showLabelBackdrop){const mt=an(pe.backdropPadding),Nn=ye.heights[_],ri=ye.widths[_];let D=ae-mt.top,H=0-mt.left;switch(Ge){case"middle":D-=Nn/2;break;case"bottom":D-=Nn;break}switch(k){case"center":H-=ri/2;break;case"right":H-=ri;break}Wt={left:H,top:D,width:ri+mt.width,height:Nn+mt.height,color:pe.backdropColor}}g.push({label:I,font:F,textOffset:ae,options:{rotation:m,color:Ee,strokeColor:Ne,strokeWidth:jt,textAlign:fn,textBaseline:Ge,translation:[b,C],backdrop:Wt}})}return g}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-vs(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,c=o.widest.width;let l,u;return n==="left"?s?(u=this.right+r,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u+=c)):(u=this.right-a,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u-=c)):(u=this.left+a,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u=this.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(c,l,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const c=s[r];n.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,u,h,f;this.isHorizontal()?(l=Xs(e,this.left,o)-o/2,u=Xs(e,this.right,a)+a/2,h=f=c):(h=Xs(e,this.top,o)-o/2,f=Xs(e,this.bottom,a)+a/2,l=u=c),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(l,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Ey(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,c=o.font,l=o.label,u=o.textOffset;Pr(i,l,0,u,c,a)}s&&Ty(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=xt(i.font),o=an(i.padding),a=i.align;let c=r.lineHeight/2;n==="bottom"||n==="center"||Be(n)?(c+=o.bottom,ut(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:u,maxWidth:h,rotation:f}=ez(this,c,n,a);Pr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:Z$(a,n,s),textBaseline:"middle",translation:[l,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=De(e.grid&&e.grid.z,-1),s=De(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Kr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return xt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class au{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;iz(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,tz(e,o,i),this.override&&pt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in pt[s]&&(delete pt[s][i],this.override&&delete Mr[i])}}function tz(t,e,n){const i=Pc(Object.create(null),[n?pt.get(n):{},pt.get(e),t.defaults]);pt.set(e,i),t.defaultRoutes&&nz(e,t.defaultRoutes),t.descriptors&&pt.describe(e,t.descriptors)}function nz(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),c=o.join(".");pt.route(r,s,c,a)})}function iz(t){return"id"in t&&"defaults"in t}class sz{constructor(){this.controllers=new au(ec,"datasets",!0),this.elements=new au(qr,"elements"),this.plugins=new au(Object,"plugins"),this.scales=new au(Kr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):je(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=my(e);Xe(i["before"+s],[],i),n[e](i),Xe(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var li=new sz;class rz{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],c=[n,s,r.options];if(Xe(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){it(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=De(i.options&&i.options.plugins,{}),r=oz(i);return s===!1&&!n?[]:cz(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function oz(t){const e={},n=[],i=Object.keys(li.plugins.items);for(let r=0;r<i.length;r++)n.push(li.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function az(t,e){return!e&&t===!1?null:t===!0?{}:t}function cz(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const c=a.id,l=az(i[c],s);l!==null&&r.push({plugin:a,options:lz(t.config,{plugin:a,local:n[c]},l,o)})}return r}function lz(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Og(t,e){const n=pt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function uz(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function hz(t,e){return t===e?"_index_":"_value_"}function Gb(t){if(t==="x"||t==="y"||t==="r")return t}function fz(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Mg(t,...e){if(Gb(t))return t;for(const n of e){const i=n.axis||fz(n.position)||t.length>1&&Gb(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Yb(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function dz(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return Yb(t,"x",n[0])||Yb(t,"y",n[0])}return{}}function pz(t,e){const n=Mr[t.type]||{scales:{}},i=e.scales||{},s=Og(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Be(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Mg(o,a,dz(o,t),pt.scales[a.type]),l=hz(c,s),u=n.scales||{};r[o]=Xa(Object.create(null),[{axis:c},a,u[c],u[l]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,c=o.indexAxis||Og(a,e),u=(Mr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=uz(h,c),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),Xa(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Xa(a,[pt.scales[a.type],pt.scale])}),r}function vk(t){const e=t.options||(t.options={});e.plugins=De(e.plugins,{}),e.scales=pz(t,e)}function bk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function gz(t){return t=t||{},t.data=bk(t.data),vk(t),t}const Xb=new Map,wk=new Set;function cu(t,e){let n=Xb.get(t);return n||(n=e(),Xb.set(t,n),wk.add(n)),n}const ba=(t,e,n)=>{const i=Oh(e,n);i!==void 0&&t.add(i)};class mz{constructor(e){this._config=gz(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=bk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),vk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return cu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return cu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return cu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return cu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const c=new Set;n.forEach(u=>{e&&(c.add(e),u.forEach(h=>ba(c,e,h))),u.forEach(h=>ba(c,s,h)),u.forEach(h=>ba(c,Mr[r]||{},h)),u.forEach(h=>ba(c,pt,h)),u.forEach(h=>ba(c,Rg,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),wk.has(n)&&o.set(n,l),l}chartOptionScopes(){const{options:e,type:n}=this;return[e,Mr[n]||{},pt.datasets[n]||{},{type:n},pt,Rg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Qb(this._resolverCache,e,s);let c=o;if(yz(o,n)){r.$shared=!1,i=Vs(i)?i():i;const l=this.createResolver(e,i,a);c=zo(o,i,l)}for(const l of n)r[l]=c[l];return r}createResolver(e,n,i=[""],s){const{resolver:r}=Qb(this._resolverCache,e,i);return Be(n)?zo(r,n,void 0,s):r}}function Qb(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Iy(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const _z=t=>Be(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Vs(t[n]),!1);function yz(t,e){const{isScriptable:n,isIndexable:i}=ik(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Vs(a)||_z(a))||o&&ut(a))return!0}return!1}var vz="4.3.0";const bz=["top","bottom","left","right","chartArea"];function Jb(t,e){return t==="top"||t==="bottom"||bz.indexOf(t)===-1&&e==="x"}function Zb(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function ew(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Xe(n&&n.onComplete,[t],e)}function wz(t){const e=t.chart,n=e.options.animation;Xe(n&&n.onProgress,[t],e)}function Ek(t){return ck()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Du={},tw=t=>{const e=Ek(t);return Object.values(Du).filter(n=>n.canvas===e).pop()};function Ez(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function Tz(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Iz(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var cs;let ed=(cs=class{static register(...e){li.add(...e),nw()}static unregister(...e){li.remove(...e),nw()}constructor(e,n){const i=this.config=new mz(n),s=Ek(e),r=tw(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||$$(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,u=c&&c.width;if(this.id=DV(),this.ctx=a,this.canvas=c,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new rz,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=YV(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Du[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Ai.listen(this,"complete",ew),Ai.listen(this,"progress",wz),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return it(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return li}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Cb(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Tb(this.canvas,this.ctx),this}stop(){return Ai.stop(this),this}resize(e,n){Ai.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Cb(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Xe(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};je(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],c=Mg(o,a),l=c==="r",u=c==="x";return{options:a,dposition:l?"chartArea":u?"bottom":"left",dtype:l?"radialLinear":u?"category":"linear"}}))),je(r,o=>{const a=o.options,c=a.id,l=Mg(c,a),u=De(a.type,o.dtype);(a.position===void 0||Jb(a.position,l)!==Jb(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===u)h=i[c];else{const f=li.getScale(u);h=new f({id:c,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),je(s,(o,a)=>{o||delete i[a]}),je(i,o=>{Vn.configure(this,o,o.options),Vn.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(Zb("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Og(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=li.getController(a),{datasetElementType:l,dataElementType:u}=pt.datasets[a];Object.assign(c,{dataElementType:li.getElement(u),datasetElementType:l&&li.getElement(l)}),o.controller=new c(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){je(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,u=this.data.datasets.length;l<u;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||je(r,l=>{l.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Zb("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){je(this.scales,e=>{Vn.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!pb(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;Ez(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!pb(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Vn.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],je(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Vs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ai.has(this)?this.attached&&!Ai.running(this)&&Ai.start(this):(this.draw(),ew({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=Iz(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&Ey(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&Ty(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Vi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=b$.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ws(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Mh(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ai.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Tb(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Du[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};je(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(c,l)=>{n.addEventListener(this,c,l),e[c]=l},s=(c,l)=>{e[c]&&(n.removeEventListener(this,c,l),delete e[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){je(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},je(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,c;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=e.length;a<c;++a){o=e[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Rh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(c,l)=>c.filter(u=>!l.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),c=FV(e),l=Tz(e,this._lastEvent,i,c);i&&(this._lastEvent=null,Xe(r.onHover,[e,a,this],this),c&&Xe(r.onClick,[e,a,this],this));const u=!Rh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=l,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ce(cs,"defaults",pt),ce(cs,"instances",Du),ce(cs,"overrides",Mr),ce(cs,"registry",li),ce(cs,"version",vz),ce(cs,"getChart",tw),cs);function nw(){return je(ed.instances,t=>t._plugins.invalidate())}function Tk(t,e,n=e){t.lineCap=De(n.borderCapStyle,e.borderCapStyle),t.setLineDash(De(n.borderDash,e.borderDash)),t.lineDashOffset=De(n.borderDashOffset,e.borderDashOffset),t.lineJoin=De(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=De(n.borderWidth,e.borderWidth),t.strokeStyle=De(n.borderColor,e.borderColor)}function xz(t,e,n){t.lineTo(n.x,n.y)}function Cz(t){return t.stepped?lB:t.tension||t.cubicInterpolationMode==="monotone"?uB:xz}function Ik(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,c=Math.max(s,o),l=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:e.loop,ilen:l<c&&!u?i+l-c:l-c}}function kz(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:c,ilen:l}=Ik(s,n,i),u=Cz(r);let{move:h=!0,reverse:f}=i||{},d,p,m;for(d=0;d<=l;++d)p=s[(a+(f?l-d:d))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,m,p,f,r.stepped),m=p);return c&&(p=s[(a+(f?l:0))%o],u(t,m,p,f,r.stepped)),!!c}function Sz(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Ik(s,n,i),{move:c=!0,reverse:l}=i||{};let u=0,h=0,f,d,p,m,g,_;const v=I=>(o+(l?a-I:I))%r,w=()=>{m!==g&&(t.lineTo(u,g),t.lineTo(u,m),t.lineTo(u,_))};for(c&&(d=s[v(0)],t.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[v(f)],d.skip)continue;const I=d.x,b=d.y,C=I|0;C===p?(b<m?m=b:b>g&&(g=b),u=(h*u+I)/++h):(w(),t.lineTo(I,b),p=C,h=0,m=g=b),_=b}w()}function Pg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?Sz:kz}function Az(t){return t.stepped?HB:t.tension||t.cubicInterpolationMode==="monotone"?jB:ir}function Rz(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Tk(t,e.options),t.stroke(s)}function Dz(t,e,n,i){const{segments:s,options:r}=e,o=Pg(e);for(const a of s)Tk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const Oz=typeof Path2D=="function";function Mz(t,e,n,i){Oz&&!e.options.segment?Rz(t,e,n,i):Dz(t,e,n,i)}class Da extends qr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;NB(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=JB(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=YB(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],c=Az(i);let l,u;for(l=0,u=o.length;l<u;++l){const{start:h,end:f}=o[l],d=r[h],p=r[f];if(d===p){a.push(d);continue}const m=Math.abs((s-d[n])/(p[n]-d[n])),g=c(d,p,m,i.stepped);g[n]=e[n],a.push(g)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Pg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Pg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),Mz(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ce(Da,"id","line"),ce(Da,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ce(Da,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ce(Da,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function iw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Ou extends qr{constructor(n){super();ce(this,"parsed");ce(this,"skip");ce(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return iw(this,n,"x",i)}inYRange(n,i){return iw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Vi(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Dg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ce(Ou,"id","point"),ce(Ou,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ce(Ou,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const sw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},Pz=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class rw extends qr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Xe(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=xt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=sw(i,r);let l,u;n.font=s.string,this.isHorizontal()?(l=this.maxWidth,u=this._fitRows(o,r,a,c)+10):(u=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,m)=>{const g=i+n/2+r.measureText(p.text).width;(m===0||l[l.length-1]+g+2*a>o)&&(h+=u,l[l.length-(m>0?0:1)]=0,d+=u,f++),c[m]={left:0,top:d,row:f,width:g,height:s},l[l.length-1]+=g+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],u=o-e;let h=a,f=0,d=0,p=0,m=0;return this.legendItems.forEach((g,_)=>{const{itemWidth:v,itemHeight:w}=Nz(i,n,r,g,s);_>0&&d+w+2*a>u&&(h+=f+a,l.push({width:f,height:d}),p+=f+a,m++,f=d=0),c[_]={left:p,top:d,col:m,width:v,height:w},f=Math.max(f,v),d+=w+a}),h+=f,l.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=bo(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Kt(i,this.left+s,this.right-this.lineWidths[a]);for(const l of n)a!==l.row&&(a=l.row,c=Kt(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+e+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=Kt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const l of n)l.col!==a&&(a=l.col,c=Kt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Ey(e,this),this._draw(),Ty(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=pt.color,c=bo(e.rtl,this.left,this.width),l=xt(o.font),{padding:u}=o,h=l.size,f=h/2;let d;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=sw(o,h),_=function(C,k,x){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;s.save();const F=De(x.lineWidth,1);if(s.fillStyle=De(x.fillStyle,a),s.lineCap=De(x.lineCap,"butt"),s.lineDashOffset=De(x.lineDashOffset,0),s.lineJoin=De(x.lineJoin,"miter"),s.lineWidth=F,s.strokeStyle=De(x.strokeStyle,a),s.setLineDash(De(x.lineDash,[])),o.usePointStyle){const J={radius:m*Math.SQRT2/2,pointStyle:x.pointStyle,rotation:x.rotation,borderWidth:F},ee=c.xPlus(C,p/2),ae=k+f;tk(s,J,ee,ae,o.pointStyleWidth&&p)}else{const J=k+Math.max((h-m)/2,0),ee=c.leftForLtr(C,p),ae=vo(x.borderRadius);s.beginPath(),Object.values(ae).some(Ge=>Ge!==0)?Lh(s,{x:ee,y:J,w:p,h:m,radius:ae}):s.rect(ee,J,p,m),s.fill(),F!==0&&s.stroke()}s.restore()},v=function(C,k,x){Pr(s,x.text,C,k+g/2,l,{strikethrough:x.hidden,textAlign:c.textAlign(x.textAlign)})},w=this.isHorizontal(),I=this._computeTitleHeight();w?d={x:Kt(r,this.left+u,this.right-i[0]),y:this.top+u+I,line:0}:d={x:this.left+u,y:Kt(r,this.top+I+u,this.bottom-n[0].height),line:0},lk(this.ctx,e.textDirection);const b=g+u;this.legendItems.forEach((C,k)=>{s.strokeStyle=C.fontColor,s.fillStyle=C.fontColor;const x=s.measureText(C.text).width,F=c.textAlign(C.textAlign||(C.textAlign=o.textAlign)),J=p+f+x;let ee=d.x,ae=d.y;c.setWidth(this.width),w?k>0&&ee+J+u>this.right&&(ae=d.y+=b,d.line++,ee=d.x=Kt(r,this.left+u,this.right-i[d.line])):k>0&&ae+b>this.bottom&&(ee=d.x=ee+n[d.line].width+u,d.line++,ae=d.y=Kt(r,this.top+I+u,this.bottom-n[d.line].height));const Ge=c.x(ee);if(_(Ge,ae,C),ee=XV(F,ee+p+f,w?ee+J:this.right,e.rtl),v(c.x(ee),ae,C),w)d.x+=J+u;else if(typeof C.text!="string"){const ye=l.lineHeight;d.y+=xk(C,ye)}else d.y+=b}),uk(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=xt(n.font),s=an(n.padding);if(!n.display)return;const r=bo(e.rtl,this.left,this.width),o=this.ctx,a=n.position,c=i.size/2,l=s.top+c;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+l,h=Kt(e.align,h,this.right-f);else{const p=this.columnSizes.reduce((m,g)=>Math.max(m,g.height),0);u=l+Kt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const d=Kt(a,h,h+f);o.textAlign=r.textAlign(vy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Pr(o,n.text,d,u,i)}_computeTitleHeight(){const e=this.options.title,n=xt(e.font),i=an(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(Aa(e,this.left,this.right)&&Aa(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Aa(e,s.left,s.left+s.width)&&Aa(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Uz(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=Pz(s,i);s&&!r&&Xe(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Xe(n.onHover,[e,i,this],this)}else i&&Xe(n.onClick,[e,i,this],this)}}function Nz(t,e,n,i,s){const r=Lz(i,t,e,n),o=Fz(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function Lz(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function Fz(t,e,n){let i=t;return typeof e.text!="string"&&(i=xk(e,n)),i}function xk(t,e){const n=t.text?t.text.length+.5:0;return e*n}function Uz(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Vz={id:"legend",_element:rw,start(t,e,n){const i=t.legend=new rw({ctx:t.ctx,options:n,chart:t});Vn.configure(t,i,n),Vn.addBox(t,i)},stop(t){Vn.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Vn.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(n?0:void 0),u=an(l.borderWidth);return{text:e[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Ck extends qr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=ut(i.text)?i.text.length:1;this._padding=an(i.padding);const r=s*xt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,u,h;return this.isHorizontal()?(u=Kt(a,i,r),h=n+e,l=r-i):(o.position==="left"?(u=i+e,h=Kt(a,s,n),c=Rt*-.5):(u=r-e,h=Kt(a,n,s),c=Rt*.5),l=s-n),{titleX:u,titleY:h,maxWidth:l,rotation:c}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=xt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Pr(e,n.text,0,0,i,{color:n.color,maxWidth:c,rotation:l,textAlign:vy(n.align),textBaseline:"middle",translation:[o,a]})}}function Bz(t,e){const n=new Ck({ctx:t.ctx,options:e,chart:t});Vn.configure(t,n,e),Vn.addBox(t,n),t.titleBlock=n}var $z={id:"title",_element:Ck,start(t,e,n){Bz(t,n)},stop(t){const e=t.titleBlock;Vn.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Vn.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Oa={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const c=t[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),u=Ag(e,l);u<s&&(s=u,a=c)}}if(a){const c=a.tooltipPosition();n=c.x,i=c.y}return{x:n,y:i}}};function ci(t,e){return e&&(ut(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ri(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function zz(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function ow(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,c=xt(e.bodyFont),l=xt(e.titleFont),u=xt(e.footerFont),h=r.length,f=s.length,d=i.length,p=an(e.padding);let m=p.height,g=0,_=i.reduce((I,b)=>I+b.before.length+b.lines.length+b.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*l.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const I=e.displayColors?Math.max(a,c.lineHeight):c.lineHeight;m+=d*I+(_-d)*c.lineHeight+(_-1)*e.bodySpacing}f&&(m+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let v=0;const w=function(I){g=Math.max(g,n.measureText(I).width+v)};return n.save(),n.font=l.string,je(t.title,w),n.font=c.string,je(t.beforeBody.concat(t.afterBody),w),v=e.displayColors?o+2+e.boxPadding:0,je(i,I=>{je(I.before,w),je(I.lines,w),je(I.after,w)}),v=0,n.font=u.string,je(t.footer,w),n.restore(),g+=p.width,{width:g,height:m}}function Hz(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function jz(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function Wz(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:c}}=t;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),jz(l,t,e,n)&&(l="center"),l}function aw(t,e,n){const i=n.yAlign||e.yAlign||Hz(t,n);return{xAlign:n.xAlign||e.xAlign||Wz(t,e,n,i),yAlign:i}}function qz(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function Kz(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function cw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:c}=n,l=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=vo(o);let p=qz(e,a);const m=Kz(e,c,l);return c==="center"?a==="left"?p+=l:a==="right"&&(p-=l):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:Un(p,0,i.width-e.width),y:Un(m,0,i.height-e.height)}}function lu(t,e,n){const i=an(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function lw(t){return ci([],Ri(t))}function Gz(t,e,n){return Ws(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function uw(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const kk={beforeTitle:Si,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Si,beforeBody:Si,beforeLabel:Si,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return it(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Si,afterBody:Si,beforeFooter:Si,footer:Si,afterFooter:Si};function dn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?kk[e].call(n,i):s}class Ng extends qr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new fk(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Gz(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=dn(i,"beforeTitle",this,e),r=dn(i,"title",this,e),o=dn(i,"afterTitle",this,e);let a=[];return a=ci(a,Ri(s)),a=ci(a,Ri(r)),a=ci(a,Ri(o)),a}getBeforeBody(e,n){return lw(dn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return je(e,r=>{const o={before:[],lines:[],after:[]},a=uw(i,r);ci(o.before,Ri(dn(a,"beforeLabel",this,r))),ci(o.lines,dn(a,"label",this,r)),ci(o.after,Ri(dn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return lw(dn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=dn(i,"beforeFooter",this,e),r=dn(i,"footer",this,e),o=dn(i,"afterFooter",this,e);let a=[];return a=ci(a,Ri(s)),a=ci(a,Ri(r)),a=ci(a,Ri(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=n.length;c<l;++c)a.push(zz(this.chart,n[c]));return e.filter&&(a=a.filter((u,h,f)=>e.filter(u,h,f,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),je(a,u=>{const h=uw(e.callbacks,u);s.push(dn(h,"labelColor",this,u)),r.push(dn(h,"labelPointStyle",this,u)),o.push(dn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Oa[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=ow(this,i),l=Object.assign({},a,c),u=aw(this.chart,i,l),h=cw(i,l,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:u,bottomRight:h}=vo(a),{x:f,y:d}=e,{width:p,height:m}=n;let g,_,v,w,I,b;return r==="center"?(I=d+m/2,s==="left"?(g=f,_=g-o,w=I+o,b=I-o):(g=f+p,_=g+o,w=I-o,b=I+o),v=g):(s==="left"?_=f+Math.max(c,u)+o:s==="right"?_=f+p-Math.max(l,h)-o:_=this.caretX,r==="top"?(w=d,I=w-o,g=_-o,v=_+o):(w=d+m,I=w+o,g=_+o,v=_-o),b=w),{x1:g,x2:_,x3:v,y1:w,y2:I,y3:b}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=bo(i.rtl,this.x,this.width);for(e.x=lu(this,i.titleAlign,i),n.textAlign=l.textAlign(i.titleAlign),n.textBaseline="middle",o=xt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,c=0;c<r;++c)n.fillText(s[c],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,c+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,u=xt(r.bodyFont),h=lu(this,"left",r),f=s.x(h),d=c<u.lineHeight?(u.lineHeight-c)/2:0,p=n.y+d;if(r.usePointStyle){const m={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},g=s.leftForLtr(f,l)+l/2,_=p+c/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Dg(e,m,g,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Dg(e,m,g,_)}else{e.lineWidth=Be(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const m=s.leftForLtr(f,l),g=s.leftForLtr(s.xPlus(f,1),l-2),_=vo(o.borderRadius);Object.values(_).some(v=>v!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Lh(e,{x:m,y:p,w:l,h:c,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Lh(e,{x:g,y:p+1,w:l-2,h:c-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(m,p,l,c),e.strokeRect(m,p,l,c),e.fillStyle=o.backgroundColor,e.fillRect(g,p+1,l-2,c-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:u}=i,h=xt(i.bodyFont);let f=h.lineHeight,d=0;const p=bo(i.rtl,this.x,this.width),m=function(x){n.fillText(x,p.x(e.x+d),e.y+f/2),e.y+=f+r},g=p.textAlign(o);let _,v,w,I,b,C,k;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=lu(this,g,i),n.fillStyle=i.bodyColor,je(this.beforeBody,m),d=a&&g!=="right"?o==="center"?l/2+u:l+2+u:0,I=0,C=s.length;I<C;++I){for(_=s[I],v=this.labelTextColors[I],n.fillStyle=v,je(_.before,m),w=_.lines,a&&w.length&&(this._drawColorBox(n,e,I,p,i),f=Math.max(h.lineHeight,c)),b=0,k=w.length;b<k;++b)m(w[b]),f=h.lineHeight;je(_.after,m)}d=0,f=h.lineHeight,je(this.afterBody,m),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const c=bo(i.rtl,this.x,this.width);for(e.x=lu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=c.textAlign(i.footerAlign),n.textBaseline="middle",o=xt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=e,{width:l,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=vo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,c),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+l-f,c),n.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+l,c+u-p),n.quadraticCurveTo(a+l,c+u,a+l-p,c+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+d,c+u),n.quadraticCurveTo(a,c+u,a,c+u-d),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,c+h),n.quadraticCurveTo(a,c,a+h,c),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Oa[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=ow(this,e),c=Object.assign({},o,this._size),l=aw(n,e,c),u=cw(e,c,l,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=an(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),lk(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),uk(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Rh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),c=n||!Rh(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),c}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Oa[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ce(Ng,"positioners",Oa);var Yz={id:"tooltip",_element:Ng,positioners:Oa,afterInit(t,e,n){n&&(t.tooltip=new Ng({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:kk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Xz=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Qz(t,e,n,i){const s=t.indexOf(e);if(s===-1)return Xz(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const Jz=(t,e)=>t===null?null:Un(Math.round(t),0,e);function hw(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Lg extends Kr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(it(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:Qz(i,e,De(n,e),this._addedLabels),Jz(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return hw.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ce(Lg,"id","category"),ce(Lg,"defaults",{ticks:{callback:hw}});function Zz(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:f}=t,d=r||1,p=u-1,{min:m,max:g}=e,_=!it(o),v=!it(a),w=!it(l),I=(g-m)/(h+1);let b=mb((g-m)/p/d)*d,C,k,x,F;if(b<1e-14&&!_&&!v)return[{value:m},{value:g}];F=Math.ceil(g/b)-Math.floor(m/b),F>p&&(b=mb(F*b/p/d)*d),it(c)||(C=Math.pow(10,c),b=Math.ceil(b*C)/C),s==="ticks"?(k=Math.floor(m/b)*b,x=Math.ceil(g/b)*b):(k=m,x=g),_&&v&&r&&$V((a-o)/r,b/1e3)?(F=Math.round(Math.min((a-o)/b,u)),b=(a-o)/F,k=o,x=a):w?(k=_?o:k,x=v?a:x,F=l-1,b=(x-k)/F):(F=(x-k)/b,Qa(F,Math.round(F),b/1e3)?F=Math.round(F):F=Math.ceil(F));const J=Math.max(_b(b),_b(k));C=Math.pow(10,it(c)?J:c),k=Math.round(k*C)/C,x=Math.round(x*C)/C;let ee=0;for(_&&(f&&k!==o?(n.push({value:o}),k<o&&ee++,Qa(Math.round((k+ee*b)*C)/C,o,fw(o,I,t))&&ee++):k<o&&ee++);ee<F;++ee){const ae=Math.round((k+ee*b)*C)/C;if(v&&ae>a)break;n.push({value:ae})}return v&&f&&x!==a?n.length&&Qa(n[n.length-1].value,a,fw(a,I,t))?n[n.length-1].value=a:n.push({value:a}):(!v||x===a)&&n.push({value:x}),n}function fw(t,e,{horizontal:n,minRotation:i}){const s=vs(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Vh extends Kr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return it(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=n?s:c,a=c=>r=i?r:c;if(e){const c=$o(s),l=$o(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),e||o(s-c)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=Zz(s,r);return e.bounds==="ticks"&&YC(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return wy(e,this.chart.options.locale,this.options.ticks.format)}}class Fg extends Vh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Nt(e)?e:0,this.max=Nt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=vs(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ce(Fg,"id","linear"),ce(Fg,"defaults",{ticks:{callback:Jf.formatters.numeric}});const Fc=t=>Math.floor(ys(t)),Js=(t,e)=>Math.pow(10,Fc(t)+e);function dw(t){return t/Math.pow(10,Fc(t))===1}function pw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function eH(t,e){const n=e-t;let i=Fc(n);for(;pw(t,e,i)>10;)i++;for(;pw(t,e,i)<10;)i--;return Math.min(i,Fc(t))}function tH(t,{min:e,max:n}){e=Tn(t.min,e);const i=[],s=Fc(e);let r=eH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((e-c)*o)/o,u=Math.floor((e-c)/a/10)*a*10;let h=Math.floor((l-u)/Math.pow(10,r)),f=Tn(t.min,Math.round((c+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:dw(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+u+h*Math.pow(10,r))*o)/o;const d=Tn(t.max,f);return i.push({value:d,major:dw(d),significand:h}),i}class gw extends Kr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Vh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Nt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Nt(e)?Math.max(0,e):null,this.max=Nt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Nt(this._userMin)&&(this.min=e===Js(this.min,0)?Js(this.min,-1):Js(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Js(i,-1)),o(Js(s,1)))),i<=0&&r(Js(s,-1)),s<=0&&o(Js(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=tH(n,this);return e.bounds==="ticks"&&YC(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":wy(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=ys(e),this._valueRange=ys(this.max)-ys(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(ys(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ce(gw,"id","logarithmic"),ce(gw,"defaults",{ticks:{callback:Jf.formatters.logarithmic,major:{enabled:!0}}});function Ug(t){const e=t.ticks;if(e.display&&t.display){const n=an(e.backdropPadding);return De(e.font&&e.font.size,pt.font.size)+n.height}return 0}function nH(t,e,n){return n=ut(n)?n:[n],{w:cB(t,e.string,n),h:n.length*e.lineHeight}}function mw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function iH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?Rt/r:0;for(let c=0;c<r;c++){const l=o.setContext(t.getPointLabelContext(c));s[c]=l.padding;const u=t.getPointPosition(c,t.drawingArea+s[c],a),h=xt(l.font),f=nH(t.ctx,h,t._pointLabels[c]);i[c]=f;const d=Hn(t.getIndexAngle(c)+a),p=Math.round(_y(d)),m=mw(p,u.x,f.w,0,180),g=mw(p,u.y,f.h,90,270);sH(n,e,d,m,g)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=aH(t,i,s)}function sH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,c=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(c=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-c)):s.end>e.b&&(c=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+c))}function rH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,c=t.getPointPosition(e,i+s+o,r),l=Math.round(_y(Hn(c.angle+vn))),u=uH(c.y,a.h,l),h=cH(l),f=lH(c.x,a.w,h);return{visible:!0,x:c.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function oH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Vi({x:n,y:i},e)||Vi({x:n,y:r},e)||Vi({x:s,y:i},e)||Vi({x:s,y:r},e))}function aH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Ug(r)/2,additionalAngle:o?Rt/s:0};let l;for(let u=0;u<s;u++){c.padding=n[u],c.size=e[u];const h=rH(t,u,c);i.push(h),a==="auto"&&(h.visible=oH(h,l),h.visible&&(l=h))}return i}function cH(t){return t===0||t===180?"center":t<180?"left":"right"}function lH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function uH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function hH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!it(a)){const c=vo(e.borderRadius),l=an(e.backdropPadding);t.fillStyle=a;const u=i-l.left,h=s-l.top,f=r-i+l.width,d=o-s+l.height;Object.values(c).some(p=>p!==0)?(t.beginPath(),Lh(t,{x:u,y:h,w:f,h:d,radius:c}),t.fill()):t.fillRect(u,h,f,d)}}function fH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));hH(n,o,r);const a=xt(o.font),{x:c,y:l,textAlign:u}=r;Pr(n,t._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Sk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Bn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function dH(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:c}=e;!o&&!i||!a||!c||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Sk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function pH(t,e,n){return Ws(t,{label:n,index:e,type:"pointLabel"})}class uu extends Vh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=an(Ug(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Nt(e)&&!isNaN(e)?e:0,this.max=Nt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ug(this.options))}generateTickLabels(e){Vh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Xe(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?iH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Bn/(this._pointLabels.length||1),i=this.options.startAngle||0;return Hn(e*n+vs(i))}getDistanceFromCenterForValue(e){if(it(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(it(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return pH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-vn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Sk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,c,l;if(n.pointLabels.display&&fH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){c=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);dH(this,d,c,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(e.lineWidth=f,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,c=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),l=this.getPointPosition(a,c),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(l.x,l.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&!n.reverse)return;const l=i.setContext(this.getContext(c)),u=xt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=l.backdropColor;const h=an(l.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Pr(e,a.label,0,-r,u,{color:l.color})}),e.restore()}drawTitle(){}}ce(uu,"id","radialLinear"),ce(uu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Jf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ce(uu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ce(uu,"descriptors",{angleLines:{_fallback:"grid"}});const td={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_n=Object.keys(td);function gH(t,e){return t-e}function _w(t,e){if(it(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Nt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Nc(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function yw(t,e,n,i){const s=_n.length;for(let r=_n.indexOf(t);r<s-1;++r){const o=td[_n[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return _n[r]}return _n[s-1]}function mH(t,e,n,i,s){for(let r=_n.length-1;r>=_n.indexOf(n);r--){const o=_n[r];if(td[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return _n[n?_n.indexOf(n):0]}function _H(t){for(let e=_n.indexOf(t)+1,n=_n.length;e<n;++e)if(td[_n[e]].common)return _n[e]}function vw(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=yy(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function yH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=n[a],c>=0&&(e[c].major=!0);return e}function bw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:yH(t,i,s,n)}class Bh extends Kr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new g$._date(e.adapters.date);s.init(n),Xa(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:_w(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Nt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Nt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=qV(s,r,o);return this._unit=n.unit||(i.autoSkip?yw(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):mH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:_H(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),bw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Un(n,0,o),i=Un(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||yw(r.minUnit,n,i,this._getLabelCapacity(n)),a=De(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Nc(c)||c===!0,u={};let h=n,f,d;if(l&&(h=+e.startOf(h,"isoWeek",c)),h=+e.startOf(h,l?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+e.add(f,a,o),d++)vw(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&vw(u,f,p),Object.keys(u).sort((m,g)=>m-g).map(m=>+m)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Xe(o,[e,n,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,u=c&&a[c],h=l&&a[l],f=i[n],d=l&&h&&f&&f.major;return this._adapter.format(e,s||(d?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=vs(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,bw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(_w(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return GV(e.sort(gH))}}ce(Bh,"id","time"),ce(Bh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function hu(t,e,n){let i=0,s=t.length-1,r,o,a,c;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=pr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:c}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=pr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:c}=t[s]);const l=o-r;return l?a+(c-a)*(e-r)/l:a}class ww extends Bh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=hu(n,this.min),this._tableRange=hu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,c,l,u;for(o=0,a=e.length;o<a;++o)l=e[o],l>=n&&l<=i&&s.push(l);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],c=s[o-1],l=s[o],Math.round((u+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(hu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return hu(this._table,i*this._tableRange+this._minPos,!0)}}ce(ww,"id","timeseries"),ce(ww,"defaults",Bh.defaults);const Ak={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},vH={type:{type:String,required:!0},...Ak},bH=_E[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Zr(t){return Wh(t)?ke(t):t}function wH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return Wh(e)?new Proxy(t,{}):t}function EH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Rk(t,e){t.labels=e}function Dk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function TH(t,e){const n={labels:[],datasets:[]};return Rk(n,t.labels),Dk(n,t.datasets,e),n}const IH=Fr({props:vH,setup(t,e){let{expose:n}=e;const i=yt(null),s=qh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:c,data:l,options:u,plugins:h,datasetIdKey:f}=t,d=TH(l,f),p=wH(d,l);s.value=new ed(i.value,{type:c,data:p,options:{...u},plugins:h})},o=()=>{const c=ke(s.value);c&&(c.destroy(),s.value=null)},a=c=>{c.update(t.updateMode)};return im(r),tE(o),Es([()=>t.options,()=>t.data],(c,l)=>{let[u,h]=c,[f,d]=l;const p=ke(s.value);if(!p)return;let m=!1;if(u){const g=Zr(u),_=Zr(f);g&&g!==_&&(EH(p,g),m=!0)}if(h){const g=Zr(h.labels),_=Zr(d.labels),v=Zr(h.datasets),w=Zr(d.datasets);g!==_&&(Rk(p.config.data,g),m=!0),v&&v!==w&&(Dk(p.config.data,v,t.datasetIdKey),m=!0)}m&&a(p)},{deep:!0}),()=>Ko("canvas",{ref:i})}});function xH(t,e){return ed.register(e),Fr({props:Ak,setup(n,i){let{expose:s}=i;const r=qh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>Ko(IH,bH({ref:o},{type:t,...n}))}})}const CH=xH("line",Au),kH={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;ed.register(Lg,Fg,Ou,Da,$z,Yz,Vz);const n=As({datasets:e.datasets}),i=As({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(M(),It(T(CH),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const SH={class:"graph"},AH={__name:"StatsScreen",setup(t){const e=Wr(),n=Ce(()=>e.params.boardUUID||"");let i=st(Mn(re,"Boards",n.value,"Groups")),s=st(Mn(re,"Boards",n.value,"Tiles"));const r=st(ge(re,"Boards",n.value)),o=Ce(()=>{var u;let l=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{l[h.id]=h.points})),l||[]}),a=l=>{let u=[{x:16829424e5,y:0}],h=0;const f=Object.entries(l.collected).sort((d,p)=>d[1].seconds-p[1].seconds);return Object.keys(f).forEach(d=>{h+=o.value[f[d][0]],u.push({y:h,x:new Date(f[d][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},c=Ce(()=>{var u;let l=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&l.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),l});return(l,u)=>{var f;const h=Rs("router-link");return M(),U(Te,null,[A("div",null,[Z(oa,{destination:{name:"overview",params:{boardUUID:T(n)}}},null,8,["destination"]),Z(h,{class:"btn",to:{name:"overview",params:{boardUUID:T(n)}}},{default:tm(()=>[ve(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),A("h1",null,me((f=T(r))==null?void 0:f.name)+" stats:",1),A("div",SH,[Z(kH,{datasets:T(c)},null,8,["datasets"])])],64)}}};const qs=t=>(Ji("data-v-d70a5fa2"),t=t(),Zi(),t),RH=qs(()=>A("br",null,null,-1)),DH={key:0,class:"tile"},OH=["src"],MH={key:0,class:"sub-tile"},PH=["src"],NH={class:"input"},LH={class:"input"},FH={class:"pen"},UH={class:"pen"},VH={class:"pen"},BH={key:4},$H=["onClick"],zH=["onSubmit"],HH=qs(()=>A("button",{class:"btn"},"Add item",-1)),jH=qs(()=>A("br",null,null,-1)),WH=qs(()=>A("option",{disabled:"",value:""},"Please select one",-1)),qH=qs(()=>A("option",null,"drop",-1)),KH=qs(()=>A("option",null,"multi-item",-1)),GH=qs(()=>A("option",null,"null",-1)),YH=qs(()=>A("option",null,"exp",-1)),XH=[WH,qH,KH,GH,YH],QH={__name:"editTile",setup(t){const e=is(),n=u=>{u.target.innerText.trim()!=""?e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?parseInt(u.target.innerText.trim()):u.target.innerText.trim():e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?0:"",ms(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},i=u=>{u.target.value.trim()!=""||[u.target.getAttribute("name")]=="altImg"?e.selectedTile[u.target.getAttribute("name")]=u.target.value.trim():e.selectedTile[u.target.getAttribute("name")]="https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e",u.target.value.trim()!=e.selectedTile[u.target.getAttribute("name")]&&(Vt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),e.selectedTile),console.log("written"))},s=u=>{document.querySelector(u).focus()},r=u=>{e.selectedTile.items.indexOf(u)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(u),1),Vt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},o=Ce((u,h)=>({item:u,count:h})),a=()=>{Vt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},c=()=>{let u=!0;o.value.item=o.value.item.trim(),l(o.value.item)!==-1&&(e.selectedTile.items[l(o.value.item)].count=o.value.count),l(o.value.item)===-1&&o.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:o.value.item,count:o.value.count})),o.value.item!=""&&u&&(console.log("item Updated"),ms(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile,items:e.selectedTile.items})),o.value.item="",o.value.count=null},l=u=>e.selectedTile.items?e.selectedTile.items.map(function(h){return h.item}).indexOf(u):-1;return(u,h)=>{var d,p,m;const f=Rs("font-awesome-icon");return M(),U("div",null,[ve(" id: "+me(T(e).selectedTile.id),1),RH,T(e).selectedTile.type!="null"?(M(),U("div",DH,[A("img",{src:T(e).selectedTile.img,alt:""},null,8,OH),T(e).selectedTile.altImg?(M(),U("div",MH,[A("img",{src:T(e).selectedTile.altImg,alt:""},null,8,PH)])):be("",!0)])):be("",!0),A("div",NH,[ve(" Default img: "),T(e).selectedTile.type!="null"?xn((M(),U("input",{key:0,type:"text","onUpdate:modelValue":h[0]||(h[0]=g=>T(e).selectedTile.img=g),name:"img",id:"addtileimg",onBlur:h[1]||(h[1]=qe(g=>{i(g)},["prevent"])),onKeydown:h[2]||(h[2]=Pi(g=>{i(g)},["enter"]))},null,544)),[[Gn,T(e).selectedTile.img]]):be("",!0)]),A("div",LH,[ve(" Image on completed tile: "),T(e).selectedTile.type!="null"?xn((M(),U("input",{key:0,type:"text","onUpdate:modelValue":h[3]||(h[3]=g=>T(e).selectedTile.altImg=g),name:"altImg",id:"addtileimg",onBlur:h[4]||(h[4]=qe(g=>{i(g)},["prevent"])),onKeydown:h[5]||(h[5]=Pi(g=>{i(g)},["enter"]))},null,544)),[[Gn,T(e).selectedTile.altImg]]):be("",!0)]),T(e).selectedTile.type!="null"?(M(),U("h2",{key:1,onClick:h[8]||(h[8]=g=>s("#title"))},[A("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[6]||(h[6]=Pi(qe(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[7]||(h[7]=qe(g=>{n(g)},["prevent"])),name:"title",id:"title"},me(T(e).selectedTile.title),545),A("span",FH,[Z(f,{icon:["fas","pen"]})])])):be("",!0),T(e).selectedTile.type!="null"?(M(),U("p",{key:2,onClick:h[11]||(h[11]=g=>s("#points"))},[A("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[9]||(h[9]=Pi(qe(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[10]||(h[10]=qe(g=>{n(g)},["prevent"])),name:"points",id:"points"},me(T(e).selectedTile.points),545),ve(" point"+me(T(e).selectedTile.points>1?"s":""),1),A("span",UH,[Z(f,{icon:["fas","pen"]})])])):be("",!0),T(e).selectedTile.type!="null"?(M(),U("p",{key:3,onClick:h[13]||(h[13]=g=>s("#description"))},[ve(" description: "),A("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:h[12]||(h[12]=qe(g=>{n(g)},["prevent"])),name:"description",id:"description"},me(T(e).selectedTile.description),545),A("span",VH,[Z(f,{icon:["fas","pen"]})])])):be("",!0),["any-unique","multi-item"].includes(T(e).selectedTile.type)?(M(),U("ul",BH,[ve(" Eligible items: "),(M(!0),U(Te,null,un((d=T(e).selectedTile)==null?void 0:d.items,g=>(M(),U("li",{key:g==null?void 0:g.item},[ve(me(g.item)+" x"+me(g.count)+" ",1),A("button",{class:"btn",onClick:qe(_=>r(g),["prevent"])},"Delete item",8,$H)]))),128)),A("form",{onSubmit:qe(c,["prevent"])},[ve(" new "),xn(A("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":h[14]||(h[14]=g=>T(o).item=g)},null,512),[[Gn,T(o).item]]),ve(" count: "),xn(A("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":h[15]||(h[15]=g=>T(o).count=g)},null,512),[[Gn,T(o).count]]),HH],40,zH)])):be("",!0),ve(" hidden: "),((p=T(e).selectedTile)==null?void 0:p.hidden)!==void 0&&T(e).selectedTile.type!="null"?xn((M(),U("input",{key:5,type:"checkbox",class:"toggle","onUpdate:modelValue":h[16]||(h[16]=g=>T(e).selectedTile.hidden=g),ref:"refs.hidden",name:"hidden",id:"addtilehidden",onChange:a},null,544)),[[GA,T(e).selectedTile.hidden]]):be("",!0),jH,ve(" type: "),((m=T(e).selectedTile)==null?void 0:m.type)!==void 0?xn((M(),U("select",{key:6,"onUpdate:modelValue":h[17]||(h[17]=g=>T(e).selectedTile.type=g),onChange:a},XH,544)),[[YA,T(e).selectedTile.type]]):be("",!0)])}}},JH=Ht(QH,[["__scopeId","data-v-d70a5fa2"]]);const El=t=>(Ji("data-v-68b64c9f"),t=t(),Zi(),t),ZH={class:"container"},ej=["onKeydown"],tj={class:"pen"},nj={class:"main-section"},ij={key:0},sj={style:{"justify-content":"end",display:"flex"}},rj=El(()=>A("h2",null,"Rules:",-1)),oj=El(()=>A("h2",null,"Moderators:",-1)),aj={class:"moderators"},cj=["onClick"],lj=["onSubmit"],uj=El(()=>A("button",{class:"btn",type:"submit"},"Add",-1)),hj=El(()=>A("h2",null,"Editors:",-1)),fj={class:"Editors"},dj=["onClick"],pj=["onSubmit"],gj=El(()=>A("button",{class:"btn",type:"submit"},"Add",-1)),mj={key:1},_j={__name:"EditBoard",setup(t){var b,C;const e=is(),n=yt(""),i=yt("");let s=js();const r=Wr();e.setBoardUUID(r.params.boardUUID),e.setSelectedTile("");const o=e.boardUUID,a=st(ge(re,"Users",`${s.user.data.uid}`)),{data:c}=st(Mn(re,"Boards",o,"Groups")),l=st(ge(re,"Boards",o)),u=(b=l==null?void 0:l.value)==null?void 0:b.moderators,h=(C=l==null?void 0:l.value)==null?void 0:C.editors,f=Ce(()=>{var x;let k={};return c&&((x=c==null?void 0:c.value)==null||x.forEach(F=>{F.name!="moderator"&&(k[F.id]={id:F.id,name:F.name,member:F.members,icon:F.icon,color:F.color,points:F.points,flagEnd:F.flagEnd,collected:F.collected,verify:F.verify})})),k||{}}),{data:d}=st(Mn(re,`Boards/${o}/Tiles`)),p=yt(null),m=()=>{p.value.focus()},g=k=>{k.target.blur();let x=k.target.getAttribute("name"),F=l.value[x];k.target.innerText.trim()!=""?l.value[x]=k.target.innerText:(l.value[x]="<enter text here>",x=="rules"&&(l.value[x]="")),F!=l.value[x]&&Vt(ge(re,"Boards",o),l.value)},_=k=>{k=k.trim(),u.indexOf(k)!==-1&&(u.splice(u.indexOf(k),1),Vt(ge(re,"Boards",o),{moderators:u}))},v=()=>{n.value=n.value.trim(),u.indexOf(n.value)===-1&&(u.push(n.value),Vt(ge(re,"Boards",o),{moderators:u}))},w=k=>{k=k.trim(),h.indexOf(k)!==-1&&(h.splice(h.indexOf(k),1),Vt(ge(re,"Boards",o),{editors:h}))},I=()=>{i.value=i.value.trim(),h.indexOf(i.value)===-1&&(h.push(i.value),Vt(ge(re,"Boards",o),{editors:h}))};return(k,x)=>{var J,ee,ae,Ge;const F=Rs("font-awesome-icon");return M(),U("div",ZH,[Z(oa,{destination:{name:"editBoard",params:T(o)}},null,8,["destination"]),T(l)&&T(s).user.data.ui!=0&&(T(s).user.data.uid==T(l).ownerID||((J=T(a))==null?void 0:J.type)=="admin")||(ae=(ee=T(l))==null?void 0:ee.editors)!=null&&ae.includes(T(s).user.data.uid)?(M(),U(Te,{key:0},[A("section",null,[A("h1",{class:"title-wrap",onClick:x[1]||(x[1]=qe(ye=>m(),["prevent"]))},[A("span",{class:"board-title",ref_key:"titleElement",ref:p,contenteditable:"",spellcheck:"false",onKeydown:Pi(g,["enter"]),name:"name",onBlur:x[0]||(x[0]=qe(ye=>{g(ye)},["prevent"]))},me(T(l).name),41,ej),A("span",tj,[Z(F,{icon:["fas","pen"]})])])]),A("section",nj,[(M(),It(fy,{boardData:T(l),groupsData:T(f),tilesData:T(d),key:"bingo-board-"+T(e).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),T(e).selectedTile!=""?(M(),U("aside",ij,[A("div",sj,[A("button",{class:"btn close",onClick:x[2]||(x[2]=()=>{T(e).setSelectedTile("")})}," ╳ ")]),Z(JH,{tile:T(e).selectedTile},null,8,["tile"])])):be("",!0)]),A("section",null,[A("div",null,[rj,A("div",null,[A("p",{class:"rules",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:x[3]||(x[3]=qe(ye=>{g(ye)},["prevent"])),onKeydown:x[4]||(x[4]=Pi(qe(()=>{},["prevent"]),["tab"])),name:"rules"},me((Ge=T(l))==null?void 0:Ge.rules),33)])]),A("div",null,[oj,A("div",aj,[A("ul",null,[(M(!0),U(Te,null,un(T(u),ye=>(M(),U("li",{key:ye},[ve(me(ye)+" ",1),A("button",{class:"btn",onClick:qe(pe=>_(ye),["prevent"])},"-",8,cj)]))),128)),A("li",null,[A("form",{onSubmit:qe(v,["prevent"])},[xn(A("input",{type:"text","onUpdate:modelValue":x[5]||(x[5]=ye=>n.value=ye)},null,512),[[Gn,n.value]]),uj],40,lj)])])])]),A("div",null,[hj,A("div",fj,[A("ul",null,[(M(!0),U(Te,null,un(T(h),ye=>(M(),U("li",{key:ye},[ve(me(ye)+" ",1),A("button",{style:{"margin-left":"15px"},class:"btn",onClick:qe(pe=>w(ye),["prevent"])}," - ",8,dj)]))),128)),A("li",null,[A("form",{onSubmit:qe(I,["prevent"])},[xn(A("input",{type:"text","onUpdate:modelValue":x[6]||(x[6]=ye=>i.value=ye)},null,512),[[Gn,i.value]]),gj],40,pj)])])])])])],64)):(M(),U("h1",mj,"Not authenticated"))])}}},yj=Ht(_j,[["__scopeId","data-v-68b64c9f"]]);const vj=t=>(Ji("data-v-89666dab"),t=t(),Zi(),t),bj=vj(()=>A("h1",null,"Log in",-1)),wj={class:"block"},Ej={__name:"LoginView",setup(t){const e=js(),n=qf();return(i,s)=>(M(),U(Te,null,[bj,A("div",wj,[A("button",{class:"btn",onClick:s[0]||(s[0]=qe(r=>T(HC)({name:"userOverview"},T(n),T(e)),["prevent"]))}," Log in with Google "),ve(" "+me(i.users),1)])],64))}},Tj=Ht(Ej,[["__scopeId","data-v-89666dab"]]);const aa=t=>(Ji("data-v-035b07fb"),t=t(),Zi(),t),Ij={class:"container"},xj=aa(()=>A("h1",null,"groupview",-1)),Cj={key:0,class:"delete-popup"},kj={class:"delete-notification"},Sj=aa(()=>A("span",{class:"danger"},"delete",-1)),Aj={class:"highlight"},Rj=aa(()=>A("br",null,null,-1)),Dj=aa(()=>A("span",{class:"danger"},"permanent",-1)),Oj=aa(()=>A("br",null,null,-1)),Mj=aa(()=>A("span",{class:"danger"},"Delete",-1)),Pj={class:"delete-buttons"},Nj={key:1},Lj=["onKeydown","onBlur"],Fj=["onClick"],Uj={class:"color-container"},Vj=["onUpdate:modelValue","onChange"],Bj=["onBlur","onKeydown","onUpdate:modelValue"],$j={class:"members-list"},zj=["onClick"],Hj={__name:"GroupView",setup(t){const e=Wr(),n=js(),i=is();i.setBoardUUID(e.params.boardUUID);const s=st(ge(re,"Users",`${n.user.data.uid}`));i.setSelectedTile("");const{data:r}=st(Mn(re,"Boards",e.params.boardUUID,"Groups")),o=st(ge(re,"Boards",e.params.boardUUID)),a=yt(),c=yt(""),l=async m=>{await e8(ge(re,"Boards",e.params.boardUUID,"Groups",m.id)).then(()=>{a.value=void 0,c.value=""})},u=(m,g=!1)=>{g&&g.target.blur(),Vt(ge(re,"Boards",e.params.boardUUID,"Groups",m.id),{color:m.color})},h=(m,g)=>{m.target.blur(),m.target.innerText.trim()==""&&(m.target.innerText="<Team Name>"),g.name=m.target.innerText.trim(),Vt(ge(re,"Boards",e.params.boardUUID,"Groups",g.id),{name:g.name})},f=(m,g)=>{Vt(ge(re,"Boards",e.params.boardUUID,"Groups",g.id),{icon:m})},d=async m=>{a.value=m},p=()=>{const m=ge(Mn(re,"Boards",e.params.boardUUID,"Groups"));ms(ge(re,m.path),{name:"Team name",collected:{},verify:{},icon:"frog",color:"#53FF1b"})};return(m,g)=>{var _,v,w,I;return M(),U("div",Ij,[Z(oa,{destination:{name:"groupView"}}),xj,T(o)&&T(n).user.data.ui!=0&&(T(n).user.data.uid==T(o).ownerID||((_=T(s))==null?void 0:_.type)=="admin"||(v=T(o).editors)!=null&&v.includes(T(n).user.data.uid))?(M(),U(Te,{key:0},[((w=a.value)==null?void 0:w.name)!=null?(M(),U("section",Cj,[A("p",kj,[ve(" Are you sure you want to "),Sj,ve(" the team: "),A("span",Aj,me((I=a.value)==null?void 0:I.name),1),ve("?"),Rj,ve(" this is "),Dj,ve(" and you will lose all data for that team."),Oj,ve(" type the name of the team you want to "),Mj,ve(" here to verify ")]),A("div",Pj,[A("button",{class:"btn cancel",onClick:g[0]||(g[0]=qe(()=>{a.value=void 0,c.value=""},["prevent"]))}," Cancel "),xn(A("input",{type:"text",name:"DELETEME","onUpdate:modelValue":g[1]||(g[1]=b=>c.value=b),class:"danger",placeholder:"TEAM NAME"},null,512),[[Gn,c.value]]),A("button",{class:"btn danger",onClick:g[2]||(g[2]=qe(()=>{c.value==a.value.name&&l(a.value)},["prevent"]))}," DELETE ")])])):be("",!0),T(r)?(M(),U("section",Nj,[(M(!0),U(Te,null,un(T(r),b=>(M(),U("div",{class:"group",key:b.name},[A("h2",{name:"name",ref_for:!0,ref:"group.name",contenteditable:"",spellcheck:"false",onKeydown:Pi(C=>{h(C,b)},["enter"]),onBlur:qe(C=>{h(C,b)},["prevent"])},me(b.name),41,Lj),T(r).length!=1?(M(),U("button",{key:0,class:"btn",onClick:qe(C=>d(b),["prevent"])}," Delete Team - ",8,Fj)):be("",!0),A("div",Uj,[xn(A("input",{type:"color","onUpdate:modelValue":C=>b.color=C,onChange:C=>u(b),class:"color-picker"},null,40,Vj),[[Gn,b.color]]),xn(A("input",{type:"text",onBlur:qe(C=>{u(b,C)},["prevent"]),onKeydown:Pi(C=>{u(b,C)},["enter"]),"onUpdate:modelValue":C=>b.color=C},null,40,Bj),[[Gn,b.color]])]),A("div",{class:"icon-grid",style:Nr({color:b.color})},[Z(ft,{onClick:C=>f("rocket",b),groupIcon:b.icon,fasIcon:"rocket"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("spaghetti-monster-flying",b),groupIcon:b.icon,fasIcon:"spaghetti-monster-flying"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("paw",b),groupIcon:b.icon,fasIcon:"paw"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("hippo",b),groupIcon:b.icon,fasIcon:"hippo"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("crow",b),groupIcon:b.icon,fasIcon:"crow"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("frog",b),groupIcon:b.icon,fasIcon:"frog"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("feather-pointed",b),groupIcon:b.icon,fasIcon:"feather-pointed"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("cat",b),groupIcon:b.icon,fasIcon:"cat"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("dove",b),groupIcon:b.icon,fasIcon:"dove"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("spoon",b),groupIcon:b.icon,fasIcon:"spoon"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("ghost",b),groupIcon:b.icon,fasIcon:"ghost"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("heart",b),groupIcon:b.icon,fasIcon:"heart"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("hand-fist",b),groupIcon:b.icon,fasIcon:"hand-fist"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("hat-wizard",b),groupIcon:b.icon,fasIcon:"hat-wizard"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("tree",b),groupIcon:b.icon,fasIcon:"tree"},null,8,["onClick","groupIcon"]),Z(ft,{onClick:C=>f("fire",b),groupIcon:b.icon,fasIcon:"fire"},null,8,["onClick","groupIcon"])],4),A("div",$j,[(M(!0),U(Te,null,un(b.members,C=>(M(),U("p",{key:C},me(C),1))),128))])]))),128)),A("button",{class:"btn add-team",onClick:qe(p,["prevent"])},"Add team +",8,zj)])):be("",!0)],64)):(M(),U(Te,{key:1},[ve("Not Authenticated")],64))])}}},jj=Ht(Hj,[["__scopeId","data-v-035b07fb"]]),Wj=BF({history:nF(),mode:"hash",routes:[{path:"/",name:"userOverview",props:!0,component:cV},{path:"/new",name:"newBoard",component:jU},{path:"/login",name:"loginView",component:Tj},{path:"/e/:boardUUID",name:"editBoard",props:!0,component:yj},{path:"/g/:boardUUID",name:"groupView",props:!0,component:jj},{path:"/m/:boardUUID",name:"moderator",props:!0,component:RU},{path:"/b/:boardUUID",name:"overview",props:!0,component:yU},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:AH}]});var qj={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Kj={prefix:"fas",iconName:"users-rectangle",icon:[640,512,[],"e594","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},Gj={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},Yj={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},Xj={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},Qj={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Jj={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Zj={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},eW={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},tW={prefix:"fas",iconName:"shapes",icon:[512,512,["triangle-circle-square"],"f61f","M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"]},nW={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},iW={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},sW={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},rW={prefix:"fas",iconName:"eye-low-vision",icon:[640,512,["low-vision"],"f2a8","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]},oW={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},aW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},cW={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},lW={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},uW={prefix:"fas",iconName:"hat-cowboy",icon:[640,512,[],"f8c0","M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"]},hW={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},fW={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},dW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},pW={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},gW={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},mW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},_W={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},yW={prefix:"fas",iconName:"users-line",icon:[640,512,[],"e592","M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]},vW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},bW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},wW={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},EW={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},TW={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]},IW={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};Ve.add(iW);Ve.add(dW);Ve.add(eW);Ve.add(fW);Ve.add(rW);Ve.add(_W);Ve.add(nW);Ve.add(qj);Ve.add(Kj);Ve.add(Qj);Ve.add(gW);Ve.add(tW);Ve.add(yW);Ve.add(IW);Ve.add(wW);Ve.add(vW);Ve.add(Gj);Ve.add(Xj);Ve.add(EW);Ve.add(oW);Ve.add(aW);Ve.add(cW);Ve.add(bW);Ve.add(hW);Ve.add(mW);Ve.add(Yj);Ve.add(Jj);Ve.add(lW);Ve.add(TW);Ve.add(pW);Ve.add(uW);Ve.add(Zj);Ve.add(sW);const Tl=tR(HF);Tl.use(sR());Tl.use(Wj);Tl.use(F8,{firebaseApp:uC});Tl.component("FontAwesomeIcon",hy);Tl.mount("#app");
