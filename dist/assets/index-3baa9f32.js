var Ak=Object.defineProperty;var Rk=(t,e,n)=>e in t?Ak(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(Rk(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ug(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Or(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ct(i)?Pk(i):Or(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Ct(t))return t;if(Je(t))return t}}const Dk=/;(?![^(]*\))/g,Ok=/:([^]+)/,Mk=/\/\*.*?\*\//gs;function Pk(t){const e={};return t.replace(Mk,"").split(Dk).forEach(n=>{if(n){const i=n.split(Ok);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xn(t){let e="";if(Ct(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const i=xn(t[n]);i&&(e+=i+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lk=Ug(Nk);function bw(t){return!!t||t===""}function Fk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ll(t[i],e[i]);return n}function Ll(t,e){if(t===e)return!0;let n=Ry(t),i=Ry(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Za(t),i=Za(e),n||i)return t===e;if(n=oe(t),i=oe(e),n||i)return n&&i?Fk(t,e):!1;if(n=Je(t),i=Je(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ll(t[o],e[o]))return!1}}return String(t)===String(e)}function Bg(t,e){return t.findIndex(n=>Ll(n,e))}const fe=t=>Ct(t)?t:t==null?"":oe(t)||Je(t)&&(t.toString===Iw||!_e(t.toString))?JSON.stringify(t,ww,2):String(t),ww=(t,e)=>e&&e.__v_isRef?ww(t,e.value):ao(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()]}:Je(e)&&!oe(e)&&!Tw(e)?String(e):e,et={},oo=[],Qn=()=>{},Uk=()=>!1,Bk=/^on[^a-z]/,Vh=t=>Bk.test(t),Vg=t=>t.startsWith("onUpdate:"),un=Object.assign,$g=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vk=Object.prototype.hasOwnProperty,Be=(t,e)=>Vk.call(t,e),oe=Array.isArray,ao=t=>Fl(t)==="[object Map]",Ho=t=>Fl(t)==="[object Set]",Ry=t=>Fl(t)==="[object Date]",_e=t=>typeof t=="function",Ct=t=>typeof t=="string",Za=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",Ew=t=>Je(t)&&_e(t.then)&&_e(t.catch),Iw=Object.prototype.toString,Fl=t=>Iw.call(t),$k=t=>Fl(t).slice(8,-1),Tw=t=>Fl(t)==="[object Object]",zg=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,du=Ug(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$h=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zk=/-(\w)/g,vi=$h(t=>t.replace(zk,(e,n)=>n?n.toUpperCase():"")),Hk=/\B([A-Z])/g,Mr=$h(t=>t.replace(Hk,"-$1").toLowerCase()),zh=$h(t=>t.charAt(0).toUpperCase()+t.slice(1)),ef=$h(t=>t?`on${zh(t)}`:""),el=(t,e)=>!Object.is(t,e),fu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ou=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dy;const jk=()=>Dy||(Dy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let In;class xw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=In;try{return In=this,e()}finally{In=n}}}on(){In=this}off(){In=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cw(t){return new xw(t)}function Wk(t,e=In){e&&e.active&&e.effects.push(t)}function Hg(){return In}function kw(t){In&&In.cleanups.push(t)}const jg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sw=t=>(t.w&ks)>0,Aw=t=>(t.n&ks)>0,qk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ks},Kk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Sw(s)&&!Aw(s)?s.delete(t):e[n++]=s,s.w&=~ks,s.n&=~ks}e.length=n}},Pu=new WeakMap;let va=0,ks=1;const Jf=30;let Hn;const dr=Symbol(""),Zf=Symbol("");class Wg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Wk(this,i)}run(){if(!this.active)return this.fn();let e=Hn,n=vs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Hn,Hn=this,vs=!0,ks=1<<++va,va<=Jf?qk(this):Oy(this),this.fn()}finally{va<=Jf&&Kk(this),ks=1<<--va,Hn=this.parent,vs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hn===this?this.deferStop=!0:this.active&&(Oy(this),this.onStop&&this.onStop(),this.active=!1)}}function Oy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vs=!0;const Rw=[];function jo(){Rw.push(vs),vs=!1}function Wo(){const t=Rw.pop();vs=t===void 0?!0:t}function bn(t,e,n){if(vs&&Hn){let i=Pu.get(t);i||Pu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=jg()),Dw(s)}}function Dw(t,e){let n=!1;va<=Jf?Aw(t)||(t.n|=ks,n=!Sw(t)):n=!t.has(Hn),n&&(t.add(Hn),Hn.deps.push(t))}function Hi(t,e,n,i,s,r){const o=Pu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?zg(n)&&a.push(o.get("length")):(a.push(o.get(dr)),ao(t)&&a.push(o.get(Zf)));break;case"delete":oe(t)||(a.push(o.get(dr)),ao(t)&&a.push(o.get(Zf)));break;case"set":ao(t)&&a.push(o.get(dr));break}if(a.length===1)a[0]&&ep(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ep(jg(l))}}function ep(t,e){const n=oe(t)?t:[...t];for(const i of n)i.computed&&My(i);for(const i of n)i.computed||My(i)}function My(t,e){(t!==Hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Gk(t,e){var n;return(n=Pu.get(t))===null||n===void 0?void 0:n.get(e)}const Yk=Ug("__proto__,__v_isRef,__isVue"),Ow=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Za)),Xk=qg(),Qk=qg(!1,!0),Jk=qg(!0),Py=Zk();function Zk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ce(this);for(let r=0,o=this.length;r<o;r++)bn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jo();const i=Ce(this)[e].apply(this,n);return Wo(),i}}),t}function eS(t){const e=Ce(this);return bn(e,"has",t),e.hasOwnProperty(t)}function qg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?mS:Fw:e?Lw:Nw).get(i))return i;const o=oe(i);if(!t){if(o&&Be(Py,s))return Reflect.get(Py,s,r);if(s==="hasOwnProperty")return eS}const a=Reflect.get(i,s,r);return(Za(s)?Ow.has(s):Yk(s))||(t||bn(i,"get",s),e)?a:dt(a)?o&&zg(s)?a:a.value:Je(a)?t?Uw(a):Ss(a):a}}const tS=Mw(),nS=Mw(!0);function Mw(t=!1){return function(n,i,s,r){let o=n[i];if(bo(o)&&dt(o)&&!dt(s))return!1;if(!t&&(!Nu(s)&&!bo(s)&&(o=Ce(o),s=Ce(s)),!oe(n)&&dt(o)&&!dt(s)))return o.value=s,!0;const a=oe(n)&&zg(i)?Number(i)<n.length:Be(n,i),l=Reflect.set(n,i,s,r);return n===Ce(r)&&(a?el(s,o)&&Hi(n,"set",i,s):Hi(n,"add",i,s)),l}}function iS(t,e){const n=Be(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Hi(t,"delete",e,void 0),i}function sS(t,e){const n=Reflect.has(t,e);return(!Za(e)||!Ow.has(e))&&bn(t,"has",e),n}function rS(t){return bn(t,"iterate",oe(t)?"length":dr),Reflect.ownKeys(t)}const Pw={get:Xk,set:tS,deleteProperty:iS,has:sS,ownKeys:rS},oS={get:Jk,set(t,e){return!0},deleteProperty(t,e){return!0}},aS=un({},Pw,{get:Qk,set:nS}),Kg=t=>t,Hh=t=>Reflect.getPrototypeOf(t);function Ic(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ce(t),r=Ce(e);n||(e!==r&&bn(s,"get",e),bn(s,"get",r));const{has:o}=Hh(s),a=i?Kg:n?Xg:tl;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Tc(t,e=!1){const n=this.__v_raw,i=Ce(n),s=Ce(t);return e||(t!==s&&bn(i,"has",t),bn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xc(t,e=!1){return t=t.__v_raw,!e&&bn(Ce(t),"iterate",dr),Reflect.get(t,"size",t)}function Ny(t){t=Ce(t);const e=Ce(this);return Hh(e).has.call(e,t)||(e.add(t),Hi(e,"add",t,t)),this}function Ly(t,e){e=Ce(e);const n=Ce(this),{has:i,get:s}=Hh(n);let r=i.call(n,t);r||(t=Ce(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?el(e,o)&&Hi(n,"set",t,e):Hi(n,"add",t,e),this}function Fy(t){const e=Ce(this),{has:n,get:i}=Hh(e);let s=n.call(e,t);s||(t=Ce(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Hi(e,"delete",t,void 0),r}function Uy(){const t=Ce(this),e=t.size!==0,n=t.clear();return e&&Hi(t,"clear",void 0,void 0),n}function Cc(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ce(o),l=e?Kg:t?Xg:tl;return!t&&bn(a,"iterate",dr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function kc(t,e,n){return function(...i){const s=this.__v_raw,r=Ce(s),o=ao(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Kg:e?Xg:tl;return!e&&bn(r,"iterate",l?Zf:dr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function is(t){return function(...e){return t==="delete"?!1:this}}function lS(){const t={get(r){return Ic(this,r)},get size(){return xc(this)},has:Tc,add:Ny,set:Ly,delete:Fy,clear:Uy,forEach:Cc(!1,!1)},e={get(r){return Ic(this,r,!1,!0)},get size(){return xc(this)},has:Tc,add:Ny,set:Ly,delete:Fy,clear:Uy,forEach:Cc(!1,!0)},n={get(r){return Ic(this,r,!0)},get size(){return xc(this,!0)},has(r){return Tc.call(this,r,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Cc(!0,!1)},i={get(r){return Ic(this,r,!0,!0)},get size(){return xc(this,!0)},has(r){return Tc.call(this,r,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:Cc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=kc(r,!1,!1),n[r]=kc(r,!0,!1),e[r]=kc(r,!1,!0),i[r]=kc(r,!0,!0)}),[t,n,e,i]}const[cS,uS,hS,dS]=lS();function Gg(t,e){const n=e?t?dS:hS:t?uS:cS;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Be(n,s)&&s in i?n:i,s,r)}const fS={get:Gg(!1,!1)},pS={get:Gg(!1,!0)},gS={get:Gg(!0,!1)},Nw=new WeakMap,Lw=new WeakMap,Fw=new WeakMap,mS=new WeakMap;function _S(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yS(t){return t.__v_skip||!Object.isExtensible(t)?0:_S($k(t))}function Ss(t){return bo(t)?t:Yg(t,!1,Pw,fS,Nw)}function vS(t){return Yg(t,!1,aS,pS,Lw)}function Uw(t){return Yg(t,!0,oS,gS,Fw)}function Yg(t,e,n,i,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=yS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Vi(t){return bo(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function bo(t){return!!(t&&t.__v_isReadonly)}function Nu(t){return!!(t&&t.__v_isShallow)}function jh(t){return Vi(t)||bo(t)}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function wo(t){return Ou(t,"__v_skip",!0),t}const tl=t=>Je(t)?Ss(t):t,Xg=t=>Je(t)?Uw(t):t;function Bw(t){vs&&Hn&&(t=Ce(t),Dw(t.dep||(t.dep=jg())))}function Vw(t,e){t=Ce(t);const n=t.dep;n&&ep(n)}function dt(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return $w(t,!1)}function Wh(t){return $w(t,!0)}function $w(t,e){return dt(t)?t:new bS(t,e)}class bS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ce(e),this._value=n?e:tl(e)}get value(){return Bw(this),this._value}set value(e){const n=this.__v_isShallow||Nu(e)||bo(e);e=n?e:Ce(e),el(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tl(e),Vw(this))}}function w(t){return dt(t)?t.value:t}const wS={get:(t,e,n)=>w(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return dt(s)&&!dt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function zw(t){return Vi(t)?t:new Proxy(t,wS)}function ES(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Hw(t,n);return e}class IS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gk(Ce(this._object),this._key)}}function Hw(t,e,n){const i=t[e];return dt(i)?i:new IS(t,e,n)}var jw;class TS{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jw]=!1,this._dirty=!0,this.effect=new Wg(e,()=>{this._dirty||(this._dirty=!0,Vw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ce(this);return Bw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jw="__v_isReadonly";function xS(t,e,n=!1){let i,s;const r=_e(t);return r?(i=t,s=Qn):(i=t.get,s=t.set),new TS(i,s,r||!s,n)}function bs(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){qh(r,e,n)}return s}function Jn(t,e,n,i){if(_e(t)){const r=bs(t,e,n,i);return r&&Ew(r)&&r.catch(o=>{qh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Jn(t[r],e,n,i));return s}function qh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bs(l,null,10,[t,o,a]);return}}CS(t,n,s,i)}function CS(t,e,n,i=!0){console.error(t)}let nl=!1,tp=!1;const Qt=[];let hi=0;const lo=[];let Di=null,tr=0;const Ww=Promise.resolve();let Qg=null;function Jg(t){const e=Qg||Ww;return t?e.then(this?t.bind(this):t):e}function kS(t){let e=hi+1,n=Qt.length;for(;e<n;){const i=e+n>>>1;il(Qt[i])<t?e=i+1:n=i}return e}function Zg(t){(!Qt.length||!Qt.includes(t,nl&&t.allowRecurse?hi+1:hi))&&(t.id==null?Qt.push(t):Qt.splice(kS(t.id),0,t),qw())}function qw(){!nl&&!tp&&(tp=!0,Qg=Ww.then(Gw))}function SS(t){const e=Qt.indexOf(t);e>hi&&Qt.splice(e,1)}function AS(t){oe(t)?lo.push(...t):(!Di||!Di.includes(t,t.allowRecurse?tr+1:tr))&&lo.push(t),qw()}function By(t,e=nl?hi+1:0){for(;e<Qt.length;e++){const n=Qt[e];n&&n.pre&&(Qt.splice(e,1),e--,n())}}function Kw(t){if(lo.length){const e=[...new Set(lo)];if(lo.length=0,Di){Di.push(...e);return}for(Di=e,Di.sort((n,i)=>il(n)-il(i)),tr=0;tr<Di.length;tr++)Di[tr]();Di=null,tr=0}}const il=t=>t.id==null?1/0:t.id,RS=(t,e)=>{const n=il(t)-il(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gw(t){tp=!1,nl=!0,Qt.sort(RS);const e=Qn;try{for(hi=0;hi<Qt.length;hi++){const n=Qt[hi];n&&n.active!==!1&&bs(n,null,14)}}finally{hi=0,Qt.length=0,Kw(),nl=!1,Qg=null,(Qt.length||lo.length)&&Gw()}}function DS(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||et;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||et;d&&(s=n.map(f=>Ct(f)?f.trim():f)),h&&(s=n.map(Mu))}let a,l=i[a=ef(e)]||i[a=ef(vi(e))];!l&&r&&(l=i[a=ef(Mr(e))]),l&&Jn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(c,t,6,s)}}function Yw(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!_e(t)){const l=c=>{const u=Yw(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Je(t)&&i.set(t,null),null):(oe(r)?r.forEach(l=>o[l]=null):un(o,r),Je(t)&&i.set(t,o),o)}function Kh(t,e){return!t||!Vh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(t,e[0].toLowerCase()+e.slice(1))||Be(t,Mr(e))||Be(t,e))}let Cn=null,Gh=null;function Lu(t){const e=Cn;return Cn=t,Gh=t&&t.type.__scopeId||null,e}function Ul(t){Gh=t}function Bl(){Gh=null}function Xw(t,e=Cn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Gy(-1);const r=Lu(e);let o;try{o=t(...s)}finally{Lu(r),i._d&&Gy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function tf(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=t;let g,_;const v=Lu(t);try{if(n.shapeFlag&4){const T=s||i;g=ui(u.call(T,T,h,r,f,d,p)),_=l}else{const T=e;g=ui(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),_=e.props?l:OS(l)}}catch(T){Oa.length=0,qh(T,t,1),g=G(vr)}let E=g;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:b}=E;T.length&&b&7&&(o&&T.some(Vg)&&(_=MS(_,o)),E=Eo(E,_))}return n.dirs&&(E=Eo(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),g=E,Lu(v),g}const OS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vh(n))&&((e||(e={}))[n]=t[n]);return e},MS=(t,e)=>{const n={};for(const i in t)(!Vg(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function PS(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vy(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Kh(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vy(i,o,c):!0:!!o;return!1}function Vy(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Kh(n,r))return!0}return!1}function NS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const LS=t=>t.__isSuspense;function FS(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):AS(t)}function pu(t,e){if(_t){let n=_t.provides;const i=_t.parent&&_t.parent.provides;i===n&&(n=_t.provides=Object.create(i)),n[t]=e}}function vn(t,e,n=!1){const i=_t||Cn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(i.proxy):e}}function US(t,e){return em(t,null,{flush:"post"})}const Sc={};function ws(t,e,n){return em(t,e,n)}function em(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=et){const a=Hg()===(_t==null?void 0:_t.scope)?_t:null;let l,c=!1,u=!1;if(dt(t)?(l=()=>t.value,c=Nu(t)):Vi(t)?(l=()=>t,i=!0):oe(t)?(u=!0,c=t.some(E=>Vi(E)||Nu(E)),l=()=>t.map(E=>{if(dt(E))return E.value;if(Vi(E))return ir(E);if(_e(E))return bs(E,a,2)})):_e(t)?e?l=()=>bs(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Jn(t,a,3,[d])}:l=Qn,e&&i){const E=l;l=()=>ir(E())}let h,d=E=>{h=_.onStop=()=>{bs(E,a,4)}},f;if(rl)if(d=Qn,e?n&&Jn(e,a,3,[l(),u?[]:void 0,d]):l(),s==="sync"){const E=kA();f=E.__watcherHandles||(E.__watcherHandles=[])}else return Qn;let p=u?new Array(t.length).fill(Sc):Sc;const m=()=>{if(_.active)if(e){const E=_.run();(i||c||(u?E.some((T,b)=>el(T,p[b])):el(E,p)))&&(h&&h(),Jn(e,a,3,[E,p===Sc?void 0:u&&p[0]===Sc?[]:p,d]),p=E)}else _.run()};m.allowRecurse=!!e;let g;s==="sync"?g=m:s==="post"?g=()=>pn(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),g=()=>Zg(m));const _=new Wg(l,g);e?n?m():p=_.run():s==="post"?pn(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&$g(a.scope.effects,_)};return f&&f.push(v),v}function BS(t,e,n){const i=this.proxy,s=Ct(t)?t.includes(".")?Qw(i,t):()=>i[t]:t.bind(i,i);let r;_e(e)?r=e:(r=e.handler,n=e);const o=_t;Io(this);const a=em(s,r.bind(i),n);return o?Io(o):fr(),a}function Qw(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ir(t,e){if(!Je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),dt(t))ir(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(Ho(t)||ao(t))t.forEach(n=>{ir(n,e)});else if(Tw(t))for(const n in t)ir(t[n],e);return t}function Pr(t){return _e(t)?{setup:t,name:t.name}:t}const gu=t=>!!t.type.__asyncLoader,Jw=t=>t.type.__isKeepAlive;function VS(t,e){Zw(t,"a",e)}function $S(t,e){Zw(t,"da",e)}function Zw(t,e,n=_t){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Yh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Jw(s.parent.vnode)&&zS(i,e,n,s),s=s.parent}}function zS(t,e,n,i){const s=Yh(e,t,i,!0);nm(()=>{$g(i[e],s)},n)}function Yh(t,e,n=_t,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jo(),Io(n);const a=Jn(e,n,t,o);return fr(),Wo(),a});return i?s.unshift(r):s.push(r),r}}const Ji=t=>(e,n=_t)=>(!rl||t==="sp")&&Yh(t,(...i)=>e(...i),n),HS=Ji("bm"),tm=Ji("m"),jS=Ji("bu"),WS=Ji("u"),e2=Ji("bum"),nm=Ji("um"),t2=Ji("sp"),qS=Ji("rtg"),KS=Ji("rtc");function GS(t,e=_t){Yh("ec",t,e)}function Tn(t,e){const n=Cn;if(n===null)return t;const i=Jh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=et]=e[r];o&&(_e(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function js(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(jo(),Jn(l,n,8,[t.el,a,t,e]),Wo())}}const n2="components";function Vl(t,e){return XS(n2,t,!0,e)||t}const YS=Symbol();function XS(t,e,n=!0,i=!1){const s=Cn||_t;if(s){const r=s.type;if(t===n2){const a=xA(r,!1);if(a&&(a===e||a===vi(e)||a===zh(vi(e))))return r}const o=$y(s[t]||r[t],e)||$y(s.appContext[t],e);return!o&&i?r:o}}function $y(t,e){return t&&(t[e]||t[vi(e)]||t[zh(vi(e))])}function cn(t,e,n,i){let s;const r=n&&n[i];if(oe(t)||Ct(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const np=t=>t?f2(t)?Jh(t)||t.proxy:np(t.parent):null,Da=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>np(t.parent),$root:t=>np(t.root),$emit:t=>t.emit,$options:t=>im(t),$forceUpdate:t=>t.f||(t.f=()=>Zg(t.update)),$nextTick:t=>t.n||(t.n=Jg.bind(t.proxy)),$watch:t=>BS.bind(t)}),nf=(t,e)=>t!==et&&!t.__isScriptSetup&&Be(t,e),QS={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(nf(i,e))return o[e]=1,i[e];if(s!==et&&Be(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Be(c,e))return o[e]=3,r[e];if(n!==et&&Be(n,e))return o[e]=4,n[e];ip&&(o[e]=0)}}const u=Da[e];let h,d;if(u)return e==="$attrs"&&bn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==et&&Be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Be(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return nf(s,e)?(s[e]=n,!0):i!==et&&Be(i,e)?(i[e]=n,!0):Be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==et&&Be(t,o)||nf(e,o)||(a=r[0])&&Be(a,o)||Be(i,o)||Be(Da,o)||Be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ip=!0;function JS(t){const e=im(t),n=t.proxy,i=t.ctx;ip=!1,e.beforeCreate&&zy(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:T,render:b,renderTracked:x,renderTriggered:k,errorCaptured:C,serverPrefetch:F,expose:Z,inheritAttrs:ee,components:ae,directives:ye,filters:Ye}=e;if(c&&ZS(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const Le=o[we];_e(Le)&&(i[we]=Le.bind(n))}if(s){const we=s.call(n,n);Je(we)&&(t.data=Ss(we))}if(ip=!0,r)for(const we in r){const Le=r[we],Ht=_e(Le)?Le.bind(n,n):_e(Le.get)?Le.get.bind(n,n):Qn,hn=!_e(Le)&&_e(Le.set)?Le.set.bind(n):Qn,jt=Se({get:Ht,set:hn});Object.defineProperty(i,we,{enumerable:!0,configurable:!0,get:()=>jt.value,set:mt=>jt.value=mt})}if(a)for(const we in a)i2(a[we],i,n,we);if(l){const we=_e(l)?l.call(n):l;Reflect.ownKeys(we).forEach(Le=>{pu(Le,we[Le])})}u&&zy(u,t,"c");function Te(we,Le){oe(Le)?Le.forEach(Ht=>we(Ht.bind(n))):Le&&we(Le.bind(n))}if(Te(HS,h),Te(tm,d),Te(jS,f),Te(WS,p),Te(VS,m),Te($S,g),Te(GS,C),Te(KS,x),Te(qS,k),Te(e2,v),Te(nm,T),Te(t2,F),oe(Z))if(Z.length){const we=t.exposed||(t.exposed={});Z.forEach(Le=>{Object.defineProperty(we,Le,{get:()=>n[Le],set:Ht=>n[Le]=Ht})})}else t.exposed||(t.exposed={});b&&t.render===Qn&&(t.render=b),ee!=null&&(t.inheritAttrs=ee),ae&&(t.components=ae),ye&&(t.directives=ye)}function ZS(t,e,n=Qn,i=!1){oe(t)&&(t=sp(t));for(const s in t){const r=t[s];let o;Je(r)?"default"in r?o=vn(r.from||s,r.default,!0):o=vn(r.from||s):o=vn(r),dt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function zy(t,e,n){Jn(oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function i2(t,e,n,i){const s=i.includes(".")?Qw(n,i):()=>n[i];if(Ct(t)){const r=e[t];_e(r)&&ws(s,r)}else if(_e(t))ws(s,t.bind(n));else if(Je(t))if(oe(t))t.forEach(r=>i2(r,e,n,i));else{const r=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(r)&&ws(s,r,t)}}function im(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Fu(l,c,o,!0)),Fu(l,e,o)),Je(e)&&r.set(e,l),l}function Fu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Fu(t,r,n,!0),s&&s.forEach(o=>Fu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=eA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eA={data:Hy,props:Xs,emits:Xs,methods:Xs,computed:Xs,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Xs,directives:Xs,watch:nA,provide:Hy,inject:tA};function Hy(t,e){return e?t?function(){return un(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function tA(t,e){return Xs(sp(t),sp(e))}function sp(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function Xs(t,e){return t?un(un(Object.create(null),t),e):e}function nA(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=an(t[i],e[i]);return n}function iA(t,e,n,i=!1){const s={},r={};Ou(r,Qh,1),t.propsDefaults=Object.create(null),s2(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:vS(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function sA(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ce(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Kh(t.emitsOptions,d))continue;const f=e[d];if(l)if(Be(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=vi(d);s[p]=rp(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{s2(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Be(e,h)&&((u=Mr(h))===h||!Be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=rp(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Be(e,h))&&(delete r[h],c=!0)}c&&Hi(t,"set","$attrs")}function s2(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(du(l))continue;const c=e[l];let u;s&&Be(s,u=vi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Kh(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ce(n),c=a||et;for(let u=0;u<r.length;u++){const h=r[u];n[h]=rp(s,l,h,c[h],t,!Be(c,h))}}return o}function rp(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&_e(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Io(s),i=c[n]=l.call(null,e),fr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Mr(n))&&(i=!0))}return i}function r2(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!_e(t)){const u=h=>{l=!0;const[d,f]=r2(h,e,!0);un(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Je(t)&&i.set(t,oo),oo;if(oe(r))for(let u=0;u<r.length;u++){const h=vi(r[u]);jy(h)&&(o[h]=et)}else if(r)for(const u in r){const h=vi(u);if(jy(h)){const d=r[u],f=o[h]=oe(d)||_e(d)?{type:d}:Object.assign({},d);if(f){const p=Ky(Boolean,f.type),m=Ky(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Be(f,"default"))&&a.push(h)}}}const c=[o,a];return Je(t)&&i.set(t,c),c}function jy(t){return t[0]!=="$"}function Wy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qy(t,e){return Wy(t)===Wy(e)}function Ky(t,e){return oe(e)?e.findIndex(n=>qy(n,t)):_e(e)&&qy(e,t)?0:-1}const o2=t=>t[0]==="_"||t==="$stable",sm=t=>oe(t)?t.map(ui):[ui(t)],rA=(t,e,n)=>{if(e._n)return e;const i=Xw((...s)=>sm(e(...s)),n);return i._c=!1,i},a2=(t,e,n)=>{const i=t._ctx;for(const s in t){if(o2(s))continue;const r=t[s];if(_e(r))e[s]=rA(s,r,i);else if(r!=null){const o=sm(r);e[s]=()=>o}}},l2=(t,e)=>{const n=sm(e);t.slots.default=()=>n},oA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ce(e),Ou(e,"_",n)):a2(e,t.slots={})}else t.slots={},e&&l2(t,e);Ou(t.slots,Qh,1)},aA=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(un(s,e),!n&&a===1&&delete s._):(r=!e.$stable,a2(e,s)),o=e}else e&&(l2(t,e),o={default:1});if(r)for(const a in s)!o2(a)&&!(a in o)&&delete s[a]};function c2(){return{app:null,config:{isNativeTag:Uk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lA=0;function cA(t,e){return function(i,s=null){_e(i)||(i=Object.assign({},i)),s!=null&&!Je(s)&&(s=null);const r=c2(),o=new Set;let a=!1;const l=r.app={_uid:lA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:m2,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&_e(c.install)?(o.add(c),c.install(l,...u)):_e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=G(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Jh(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function op(t,e,n,i,s=!1){if(oe(t)){t.forEach((d,f)=>op(d,e&&(oe(e)?e[f]:e),n,i,s));return}if(gu(i)&&!s)return;const r=i.shapeFlag&4?Jh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,Be(h,c)&&(h[c]=null)):dt(c)&&(c.value=null)),_e(l))bs(l,a,12,[o,u]);else{const d=Ct(l),f=dt(l);if(d||f){const p=()=>{if(t.f){const m=d?Be(h,l)?h[l]:u[l]:l.value;s?oe(m)&&$g(m,r):oe(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Be(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,pn(p,n)):p()}}}const pn=FS;function uA(t){return hA(t)}function hA(t,e){const n=jk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Qn,insertStaticContent:p}=t,m=(y,I,A,R=null,P=null,V=null,W=!1,B=null,$=!!I.dynamicChildren)=>{if(y===I)return;y&&!aa(y,I)&&(R=j(y),mt(y,P,V,!0),y=null),I.patchFlag===-2&&($=!1,I.dynamicChildren=null);const{type:N,ref:ie,shapeFlag:Y}=I;switch(N){case Xh:g(y,I,A,R);break;case vr:_(y,I,A,R);break;case mu:y==null&&v(I,A,R,W);break;case Ie:ae(y,I,A,R,P,V,W,B,$);break;default:Y&1?b(y,I,A,R,P,V,W,B,$):Y&6?ye(y,I,A,R,P,V,W,B,$):(Y&64||Y&128)&&N.process(y,I,A,R,P,V,W,B,$,Fe)}ie!=null&&P&&op(ie,y&&y.ref,V,I||y,!I)},g=(y,I,A,R)=>{if(y==null)i(I.el=a(I.children),A,R);else{const P=I.el=y.el;I.children!==y.children&&c(P,I.children)}},_=(y,I,A,R)=>{y==null?i(I.el=l(I.children||""),A,R):I.el=y.el},v=(y,I,A,R)=>{[y.el,y.anchor]=p(y.children,I,A,R,y.el,y.anchor)},E=({el:y,anchor:I},A,R)=>{let P;for(;y&&y!==I;)P=d(y),i(y,A,R),y=P;i(I,A,R)},T=({el:y,anchor:I})=>{let A;for(;y&&y!==I;)A=d(y),s(y),y=A;s(I)},b=(y,I,A,R,P,V,W,B,$)=>{W=W||I.type==="svg",y==null?x(I,A,R,P,V,W,B,$):F(y,I,P,V,W,B,$)},x=(y,I,A,R,P,V,W,B)=>{let $,N;const{type:ie,props:Y,shapeFlag:se,transition:de,dirs:ke}=y;if($=y.el=o(y.type,V,Y&&Y.is,Y),se&8?u($,y.children):se&16&&C(y.children,$,null,R,P,V&&ie!=="foreignObject",W,B),ke&&js(y,null,R,"created"),k($,y,y.scopeId,W,R),Y){for(const qe in Y)qe!=="value"&&!du(qe)&&r($,qe,null,Y[qe],V,y.children,R,P,H);"value"in Y&&r($,"value",null,Y.value),(N=Y.onVnodeBeforeMount)&&ai(N,R,y)}ke&&js(y,null,R,"beforeMount");const Xe=(!P||P&&!P.pendingBranch)&&de&&!de.persisted;Xe&&de.beforeEnter($),i($,I,A),((N=Y&&Y.onVnodeMounted)||Xe||ke)&&pn(()=>{N&&ai(N,R,y),Xe&&de.enter($),ke&&js(y,null,R,"mounted")},P)},k=(y,I,A,R,P)=>{if(A&&f(y,A),R)for(let V=0;V<R.length;V++)f(y,R[V]);if(P){let V=P.subTree;if(I===V){const W=P.vnode;k(y,W,W.scopeId,W.slotScopeIds,P.parent)}}},C=(y,I,A,R,P,V,W,B,$=0)=>{for(let N=$;N<y.length;N++){const ie=y[N]=B?cs(y[N]):ui(y[N]);m(null,ie,I,A,R,P,V,W,B)}},F=(y,I,A,R,P,V,W)=>{const B=I.el=y.el;let{patchFlag:$,dynamicChildren:N,dirs:ie}=I;$|=y.patchFlag&16;const Y=y.props||et,se=I.props||et;let de;A&&Ws(A,!1),(de=se.onVnodeBeforeUpdate)&&ai(de,A,I,y),ie&&js(I,y,A,"beforeUpdate"),A&&Ws(A,!0);const ke=P&&I.type!=="foreignObject";if(N?Z(y.dynamicChildren,N,B,A,R,ke,V):W||Le(y,I,B,null,A,R,ke,V,!1),$>0){if($&16)ee(B,I,Y,se,A,R,P);else if($&2&&Y.class!==se.class&&r(B,"class",null,se.class,P),$&4&&r(B,"style",Y.style,se.style,P),$&8){const Xe=I.dynamicProps;for(let qe=0;qe<Xe.length;qe++){const vt=Xe[qe],$n=Y[vt],qr=se[vt];(qr!==$n||vt==="value")&&r(B,vt,$n,qr,P,y.children,A,R,H)}}$&1&&y.children!==I.children&&u(B,I.children)}else!W&&N==null&&ee(B,I,Y,se,A,R,P);((de=se.onVnodeUpdated)||ie)&&pn(()=>{de&&ai(de,A,I,y),ie&&js(I,y,A,"updated")},R)},Z=(y,I,A,R,P,V,W)=>{for(let B=0;B<I.length;B++){const $=y[B],N=I[B],ie=$.el&&($.type===Ie||!aa($,N)||$.shapeFlag&70)?h($.el):A;m($,N,ie,null,R,P,V,W,!0)}},ee=(y,I,A,R,P,V,W)=>{if(A!==R){if(A!==et)for(const B in A)!du(B)&&!(B in R)&&r(y,B,A[B],null,W,I.children,P,V,H);for(const B in R){if(du(B))continue;const $=R[B],N=A[B];$!==N&&B!=="value"&&r(y,B,N,$,W,I.children,P,V,H)}"value"in R&&r(y,"value",A.value,R.value)}},ae=(y,I,A,R,P,V,W,B,$)=>{const N=I.el=y?y.el:a(""),ie=I.anchor=y?y.anchor:a("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:de}=I;de&&(B=B?B.concat(de):de),y==null?(i(N,A,R),i(ie,A,R),C(I.children,A,ie,P,V,W,B,$)):Y>0&&Y&64&&se&&y.dynamicChildren?(Z(y.dynamicChildren,se,A,P,V,W,B),(I.key!=null||P&&I===P.subTree)&&u2(y,I,!0)):Le(y,I,A,ie,P,V,W,B,$)},ye=(y,I,A,R,P,V,W,B,$)=>{I.slotScopeIds=B,y==null?I.shapeFlag&512?P.ctx.activate(I,A,R,W,$):Ye(I,A,R,P,V,W,$):ve(y,I,$)},Ye=(y,I,A,R,P,V,W)=>{const B=y.component=bA(y,R,P);if(Jw(y)&&(B.ctx.renderer=Fe),wA(B),B.asyncDep){if(P&&P.registerDep(B,Te),!y.el){const $=B.subTree=G(vr);_(null,$,I,A)}return}Te(B,y,I,A,P,V,W)},ve=(y,I,A)=>{const R=I.component=y.component;if(PS(y,I,A))if(R.asyncDep&&!R.asyncResolved){we(R,I,A);return}else R.next=I,SS(R.update),R.update();else I.el=y.el,R.vnode=I},Te=(y,I,A,R,P,V,W)=>{const B=()=>{if(y.isMounted){let{next:ie,bu:Y,u:se,parent:de,vnode:ke}=y,Xe=ie,qe;Ws(y,!1),ie?(ie.el=ke.el,we(y,ie,W)):ie=ke,Y&&fu(Y),(qe=ie.props&&ie.props.onVnodeBeforeUpdate)&&ai(qe,de,ie,ke),Ws(y,!0);const vt=tf(y),$n=y.subTree;y.subTree=vt,m($n,vt,h($n.el),j($n),y,P,V),ie.el=vt.el,Xe===null&&NS(y,vt.el),se&&pn(se,P),(qe=ie.props&&ie.props.onVnodeUpdated)&&pn(()=>ai(qe,de,ie,ke),P)}else{let ie;const{el:Y,props:se}=I,{bm:de,m:ke,parent:Xe}=y,qe=gu(I);if(Ws(y,!1),de&&fu(de),!qe&&(ie=se&&se.onVnodeBeforeMount)&&ai(ie,Xe,I),Ws(y,!0),Y&&xe){const vt=()=>{y.subTree=tf(y),xe(Y,y.subTree,y,P,null)};qe?I.type.__asyncLoader().then(()=>!y.isUnmounted&&vt()):vt()}else{const vt=y.subTree=tf(y);m(null,vt,A,R,y,P,V),I.el=vt.el}if(ke&&pn(ke,P),!qe&&(ie=se&&se.onVnodeMounted)){const vt=I;pn(()=>ai(ie,Xe,vt),P)}(I.shapeFlag&256||Xe&&gu(Xe.vnode)&&Xe.vnode.shapeFlag&256)&&y.a&&pn(y.a,P),y.isMounted=!0,I=A=R=null}},$=y.effect=new Wg(B,()=>Zg(N),y.scope),N=y.update=()=>$.run();N.id=y.uid,Ws(y,!0),N()},we=(y,I,A)=>{I.component=y;const R=y.vnode.props;y.vnode=I,y.next=null,sA(y,I.props,R,A),aA(y,I.children,A),jo(),By(),Wo()},Le=(y,I,A,R,P,V,W,B,$=!1)=>{const N=y&&y.children,ie=y?y.shapeFlag:0,Y=I.children,{patchFlag:se,shapeFlag:de}=I;if(se>0){if(se&128){hn(N,Y,A,R,P,V,W,B,$);return}else if(se&256){Ht(N,Y,A,R,P,V,W,B,$);return}}de&8?(ie&16&&H(N,P,V),Y!==N&&u(A,Y)):ie&16?de&16?hn(N,Y,A,R,P,V,W,B,$):H(N,P,V,!0):(ie&8&&u(A,""),de&16&&C(Y,A,R,P,V,W,B,$))},Ht=(y,I,A,R,P,V,W,B,$)=>{y=y||oo,I=I||oo;const N=y.length,ie=I.length,Y=Math.min(N,ie);let se;for(se=0;se<Y;se++){const de=I[se]=$?cs(I[se]):ui(I[se]);m(y[se],de,A,null,P,V,W,B,$)}N>ie?H(y,P,V,!0,!1,Y):C(I,A,R,P,V,W,B,$,Y)},hn=(y,I,A,R,P,V,W,B,$)=>{let N=0;const ie=I.length;let Y=y.length-1,se=ie-1;for(;N<=Y&&N<=se;){const de=y[N],ke=I[N]=$?cs(I[N]):ui(I[N]);if(aa(de,ke))m(de,ke,A,null,P,V,W,B,$);else break;N++}for(;N<=Y&&N<=se;){const de=y[Y],ke=I[se]=$?cs(I[se]):ui(I[se]);if(aa(de,ke))m(de,ke,A,null,P,V,W,B,$);else break;Y--,se--}if(N>Y){if(N<=se){const de=se+1,ke=de<ie?I[de].el:R;for(;N<=se;)m(null,I[N]=$?cs(I[N]):ui(I[N]),A,ke,P,V,W,B,$),N++}}else if(N>se)for(;N<=Y;)mt(y[N],P,V,!0),N++;else{const de=N,ke=N,Xe=new Map;for(N=ke;N<=se;N++){const wn=I[N]=$?cs(I[N]):ui(I[N]);wn.key!=null&&Xe.set(wn.key,N)}let qe,vt=0;const $n=se-ke+1;let qr=!1,ky=0;const oa=new Array($n);for(N=0;N<$n;N++)oa[N]=0;for(N=de;N<=Y;N++){const wn=y[N];if(vt>=$n){mt(wn,P,V,!0);continue}let oi;if(wn.key!=null)oi=Xe.get(wn.key);else for(qe=ke;qe<=se;qe++)if(oa[qe-ke]===0&&aa(wn,I[qe])){oi=qe;break}oi===void 0?mt(wn,P,V,!0):(oa[oi-ke]=N+1,oi>=ky?ky=oi:qr=!0,m(wn,I[oi],A,null,P,V,W,B,$),vt++)}const Sy=qr?dA(oa):oo;for(qe=Sy.length-1,N=$n-1;N>=0;N--){const wn=ke+N,oi=I[wn],Ay=wn+1<ie?I[wn+1].el:R;oa[N]===0?m(null,oi,A,Ay,P,V,W,B,$):qr&&(qe<0||N!==Sy[qe]?jt(oi,A,Ay,2):qe--)}}},jt=(y,I,A,R,P=null)=>{const{el:V,type:W,transition:B,children:$,shapeFlag:N}=y;if(N&6){jt(y.component.subTree,I,A,R);return}if(N&128){y.suspense.move(I,A,R);return}if(N&64){W.move(y,I,A,Fe);return}if(W===Ie){i(V,I,A);for(let Y=0;Y<$.length;Y++)jt($[Y],I,A,R);i(y.anchor,I,A);return}if(W===mu){E(y,I,A);return}if(R!==2&&N&1&&B)if(R===0)B.beforeEnter(V),i(V,I,A),pn(()=>B.enter(V),P);else{const{leave:Y,delayLeave:se,afterLeave:de}=B,ke=()=>i(V,I,A),Xe=()=>{Y(V,()=>{ke(),de&&de()})};se?se(V,ke,Xe):Xe()}else i(V,I,A)},mt=(y,I,A,R=!1,P=!1)=>{const{type:V,props:W,ref:B,children:$,dynamicChildren:N,shapeFlag:ie,patchFlag:Y,dirs:se}=y;if(B!=null&&op(B,null,A,y,!0),ie&256){I.ctx.deactivate(y);return}const de=ie&1&&se,ke=!gu(y);let Xe;if(ke&&(Xe=W&&W.onVnodeBeforeUnmount)&&ai(Xe,I,y),ie&6)D(y.component,A,R);else{if(ie&128){y.suspense.unmount(A,R);return}de&&js(y,null,I,"beforeUnmount"),ie&64?y.type.remove(y,I,A,P,Fe,R):N&&(V!==Ie||Y>0&&Y&64)?H(N,I,A,!1,!0):(V===Ie&&Y&384||!P&&ie&16)&&H($,I,A),R&&Pn(y)}(ke&&(Xe=W&&W.onVnodeUnmounted)||de)&&pn(()=>{Xe&&ai(Xe,I,y),de&&js(y,null,I,"unmounted")},A)},Pn=y=>{const{type:I,el:A,anchor:R,transition:P}=y;if(I===Ie){ri(A,R);return}if(I===mu){T(y);return}const V=()=>{s(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(y.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:B}=P,$=()=>W(A,V);B?B(y.el,V,$):$()}else V()},ri=(y,I)=>{let A;for(;y!==I;)A=d(y),s(y),y=A;s(I)},D=(y,I,A)=>{const{bum:R,scope:P,update:V,subTree:W,um:B}=y;R&&fu(R),P.stop(),V&&(V.active=!1,mt(W,y,I,A)),B&&pn(B,I),pn(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},H=(y,I,A,R=!1,P=!1,V=0)=>{for(let W=V;W<y.length;W++)mt(y[W],I,A,R,P)},j=y=>y.shapeFlag&6?j(y.component.subTree):y.shapeFlag&128?y.suspense.next():d(y.anchor||y.el),te=(y,I,A)=>{y==null?I._vnode&&mt(I._vnode,null,null,!0):m(I._vnode||null,y,I,null,null,null,A),By(),Kw(),I._vnode=y},Fe={p:m,um:mt,m:jt,r:Pn,mt:Ye,mc:C,pc:Le,pbc:Z,n:j,o:t};let ut,xe;return e&&([ut,xe]=e(Fe)),{render:te,hydrate:ut,createApp:cA(te,ut)}}function Ws({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function u2(t,e,n=!1){const i=t.children,s=e.children;if(oe(i)&&oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=cs(s[r]),a.el=o.el),n||u2(o,a)),a.type===Xh&&(a.el=o.el)}}function dA(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const fA=t=>t.__isTeleport,Ie=Symbol(void 0),Xh=Symbol(void 0),vr=Symbol(void 0),mu=Symbol(void 0),Oa=[];let qn=null;function M(t=!1){Oa.push(qn=t?null:[])}function pA(){Oa.pop(),qn=Oa[Oa.length-1]||null}let sl=1;function Gy(t){sl+=t}function h2(t){return t.dynamicChildren=sl>0?qn||oo:null,pA(),sl>0&&qn&&qn.push(t),t}function U(t,e,n,i,s,r){return h2(S(t,e,n,i,s,r,!0))}function Ft(t,e,n,i,s){return h2(G(t,e,n,i,s,!0))}function ap(t){return t?t.__v_isVNode===!0:!1}function aa(t,e){return t.type===e.type&&t.key===e.key}const Qh="__vInternal",d2=({key:t})=>t??null,_u=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ct(t)||dt(t)||_e(t)?{i:Cn,r:t,k:e,f:!!n}:t:null;function S(t,e=null,n=null,i=0,s=null,r=t===Ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&d2(e),ref:e&&_u(e),scopeId:Gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Cn};return a?(rm(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),sl>0&&!o&&qn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qn.push(l),l}const G=gA;function gA(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===YS)&&(t=vr),ap(t)){const a=Eo(t,e,!0);return n&&rm(a,n),sl>0&&!r&&qn&&(a.shapeFlag&6?qn[qn.indexOf(t)]=a:qn.push(a)),a.patchFlag|=-2,a}if(CA(t)&&(t=t.__vccOpts),e){e=mA(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=xn(a)),Je(l)&&(jh(l)&&!oe(l)&&(l=un({},l)),e.style=Or(l))}const o=Ct(t)?1:LS(t)?128:fA(t)?64:Je(t)?4:_e(t)?2:0;return S(t,e,n,i,s,o,r,!0)}function mA(t){return t?jh(t)||Qh in t?un({},t):t:null}function Eo(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?_A(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&d2(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(_u(e)):[s,_u(e)]:_u(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Eo(t.ssContent),ssFallback:t.ssFallback&&Eo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function be(t=" ",e=0){return G(Xh,null,t,e)}function Ee(t="",e=!1){return e?(M(),Ft(vr,null,t)):G(vr,null,t)}function ui(t){return t==null||typeof t=="boolean"?G(vr):oe(t)?G(Ie,null,t.slice()):typeof t=="object"?cs(t):G(Xh,null,String(t))}function cs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Eo(t)}function rm(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),rm(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qh in e)?e._ctx=Cn:s===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[be(e)]):n=8);t.children=e,t.shapeFlag|=n}function _A(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xn([e.class,i.class]));else if(s==="style")e.style=Or([e.style,i.style]);else if(Vh(s)){const r=e[s],o=i[s];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ai(t,e,n,i=null){Jn(t,e,7,[n,i])}const yA=c2();let vA=0;function bA(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||yA,r={uid:vA++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:r2(i,s),emitsOptions:Yw(i,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=DS.bind(null,r),t.ce&&t.ce(r),r}let _t=null;const $l=()=>_t||Cn,Io=t=>{_t=t,t.scope.on()},fr=()=>{_t&&_t.scope.off(),_t=null};function f2(t){return t.vnode.shapeFlag&4}let rl=!1;function wA(t,e=!1){rl=e;const{props:n,children:i}=t.vnode,s=f2(t);iA(t,n,s,e),oA(t,i);const r=s?EA(t,e):void 0;return rl=!1,r}function EA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wo(new Proxy(t.ctx,QS));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?TA(t):null;Io(t),jo();const r=bs(i,t,0,[t.props,s]);if(Wo(),fr(),Ew(r)){if(r.then(fr,fr),e)return r.then(o=>{Yy(t,o,e)}).catch(o=>{qh(o,t,0)});t.asyncDep=r}else Yy(t,r,e)}else p2(t,e)}function Yy(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=zw(e)),p2(t,n)}let Xy;function p2(t,e,n){const i=t.type;if(!t.render){if(!e&&Xy&&!i.render){const s=i.template||im(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=un(un({isCustomElement:r,delimiters:a},o),l);i.render=Xy(s,c)}}t.render=i.render||Qn}Io(t),jo(),JS(t),Wo(),fr()}function IA(t){return new Proxy(t.attrs,{get(e,n){return bn(t,"get","$attrs"),e[n]}})}function TA(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=IA(t))},slots:t.slots,emit:t.emit,expose:e}}function Jh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zw(wo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Da)return Da[n](t)},has(e,n){return n in e||n in Da}}))}function xA(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function CA(t){return _e(t)&&"__vccOpts"in t}const Se=(t,e)=>xS(t,e,rl);function qo(t,e,n){const i=arguments.length;return i===2?Je(e)&&!oe(e)?ap(e)?G(t,null,[e]):G(t,e):G(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ap(n)&&(n=[n]),G(t,e,n))}const g2=Symbol(""),kA=()=>vn(g2),m2="3.2.47",SA="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,Qy=nr&&nr.createElement("template"),AA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?nr.createElementNS(SA,t):nr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qy.innerHTML=i?`<svg>${t}</svg>`:t;const a=Qy.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function RA(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function DA(t,e,n){const i=t.style,s=Ct(n);if(n&&!s){if(e&&!Ct(e))for(const r in e)n[r]==null&&lp(i,r,"");for(const r in n)lp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Jy=/\s*!important$/;function lp(t,e,n){if(oe(n))n.forEach(i=>lp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=OA(t,e);Jy.test(n)?t.setProperty(Mr(i),n.replace(Jy,""),"important"):t[i]=n}}const Zy=["Webkit","Moz","ms"],sf={};function OA(t,e){const n=sf[e];if(n)return n;let i=vi(e);if(i!=="filter"&&i in t)return sf[e]=i;i=zh(i);for(let s=0;s<Zy.length;s++){const r=Zy[s]+i;if(r in t)return sf[e]=r}return e}const ev="http://www.w3.org/1999/xlink";function MA(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ev,e.slice(6,e.length)):t.setAttributeNS(ev,e,n);else{const r=Lk(e);n==null||r&&!bw(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function PA(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bw(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function hs(t,e,n,i){t.addEventListener(e,n,i)}function NA(t,e,n,i){t.removeEventListener(e,n,i)}function LA(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=FA(e);if(i){const c=r[e]=VA(i,s);hs(t,a,c,l)}else o&&(NA(t,a,o,l),r[e]=void 0)}}const tv=/(?:Once|Passive|Capture)$/;function FA(t){let e;if(tv.test(t)){e={};let i;for(;i=t.match(tv);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let rf=0;const UA=Promise.resolve(),BA=()=>rf||(UA.then(()=>rf=0),rf=Date.now());function VA(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn($A(i,n.value),e,5,[i])};return n.value=t,n.attached=BA(),n}function $A(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const nv=/^on[a-z]/,zA=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?RA(t,i,s):e==="style"?DA(t,n,i):Vh(e)?Vg(e)||LA(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HA(t,e,i,s))?PA(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),MA(t,e,i,s))};function HA(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&nv.test(e)&&_e(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nv.test(e)&&Ct(n)?!1:e in t}function jA(t){const e=$l();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>up(r,s))},i=()=>{const s=t(e.proxy);cp(e.subTree,s),n(s)};US(i),tm(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),nm(()=>s.disconnect())})}function cp(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{cp(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)up(t.el,e);else if(t.type===Ie)t.children.forEach(n=>cp(n,e));else if(t.type===mu){let{el:n,anchor:i}=t;for(;n&&(up(n,e),n!==i);)n=n.nextSibling}}function up(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>fu(e,n):e};function WA(t){t.target.composing=!0}function iv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=To(s);const r=i||s.props&&s.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Mu(a)),t._assign(a)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",WA),hs(t,"compositionend",iv),hs(t,"change",iv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=To(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Mu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qA={deep:!0,created(t,e,n){t._assign=To(n),hs(t,"change",()=>{const i=t._modelValue,s=ol(t),r=t.checked,o=t._assign;if(oe(i)){const a=Bg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ho(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(_2(t,r))})},mounted:sv,beforeUpdate(t,e,n){t._assign=To(n),sv(t,e,n)}};function sv(t,{value:e,oldValue:n},i){t._modelValue=e,oe(e)?t.checked=Bg(e,i.props.value)>-1:Ho(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Ll(e,_2(t,!0)))}const KA={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ho(e);hs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mu(ol(o)):ol(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=To(i)},mounted(t,{value:e}){rv(t,e)},beforeUpdate(t,e,n){t._assign=To(n)},updated(t,{value:e}){rv(t,e)}};function rv(t,e){const n=t.multiple;if(!(n&&!oe(e)&&!Ho(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=ol(r);if(n)oe(e)?r.selected=Bg(e,o)>-1:r.selected=e.has(o);else if(Ll(ol(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ol(t){return"_value"in t?t._value:t.value}function _2(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const GA=["ctrl","shift","alt","meta"],YA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GA.some(n=>t[`${n}Key`]&&!e.includes(n))},Ge=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=YA[e[s]];if(r&&r(n,e))return}return t(n,...i)},XA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pi=(t,e)=>n=>{if(!("key"in n))return;const i=Mr(n.key);if(e.some(s=>s===i||XA[s]===i))return t(n)},QA=un({patchProp:zA},AA);let ov;function JA(){return ov||(ov=uA(QA))}const ZA=(...t)=>{const e=JA().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=eR(i);if(!s)return;const r=e._component;!_e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eR(t){return Ct(t)?document.querySelector(t):t}var tR=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let y2;const Zh=t=>y2=t,v2=Symbol();function hp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ma;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ma||(Ma={}));function nR(){const t=Cw(!0),e=t.run(()=>yt({}));let n=[],i=[];const s=wo({install(r){Zh(s),s._a=r,r.provide(v2,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!tR?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const b2=()=>{};function av(t,e,n,i=b2){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Hg()&&kw(s),s}function Kr(t,...e){t.slice().forEach(n=>{n(...e)})}function dp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];hp(s)&&hp(i)&&t.hasOwnProperty(n)&&!dt(i)&&!Vi(i)?t[n]=dp(s,i):t[n]=i}return t}const iR=Symbol();function sR(t){return!hp(t)||!t.hasOwnProperty(iR)}const{assign:ls}=Object;function rR(t){return!!(dt(t)&&t.effect)}function oR(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=ES(n.state.value[t]);return ls(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=wo(Se(()=>{Zh(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=w2(t,c,e,n,i,!0),l}function w2(t,e,n={},i,s,r){let o;const a=ls({actions:{}},n),l={deep:!0};let c,u,h=wo([]),d=wo([]),f;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),yt({});let m;function g(k){let C;c=u=!1,typeof k=="function"?(k(i.state.value[t]),C={type:Ma.patchFunction,storeId:t,events:f}):(dp(i.state.value[t],k),C={type:Ma.patchObject,payload:k,storeId:t,events:f});const F=m=Symbol();Jg().then(()=>{m===F&&(c=!0)}),u=!0,Kr(h,C,i.state.value[t])}const _=r?function(){const{state:C}=n,F=C?C():{};this.$patch(Z=>{ls(Z,F)})}:b2;function v(){o.stop(),h=[],d=[],i._s.delete(t)}function E(k,C){return function(){Zh(i);const F=Array.from(arguments),Z=[],ee=[];function ae(ve){Z.push(ve)}function ye(ve){ee.push(ve)}Kr(d,{args:F,name:k,store:b,after:ae,onError:ye});let Ye;try{Ye=C.apply(this&&this.$id===t?this:b,F)}catch(ve){throw Kr(ee,ve),ve}return Ye instanceof Promise?Ye.then(ve=>(Kr(Z,ve),ve)).catch(ve=>(Kr(ee,ve),Promise.reject(ve))):(Kr(Z,Ye),Ye)}}const T={_p:i,$id:t,$onAction:av.bind(null,d),$patch:g,$reset:_,$subscribe(k,C={}){const F=av(h,k,C.detached,()=>Z()),Z=o.run(()=>ws(()=>i.state.value[t],ee=>{(C.flush==="sync"?u:c)&&k({storeId:t,type:Ma.direct,events:f},ee)},ls({},l,C)));return F},$dispose:v},b=Ss(T);i._s.set(t,b);const x=i._e.run(()=>(o=Cw(),o.run(()=>e())));for(const k in x){const C=x[k];if(dt(C)&&!rR(C)||Vi(C))r||(p&&sR(C)&&(dt(C)?C.value=p[k]:dp(C,p[k])),i.state.value[t][k]=C);else if(typeof C=="function"){const F=E(k,C);x[k]=F,a.actions[k]=C}}return ls(b,x),ls(Ce(b),x),Object.defineProperty(b,"$state",{get:()=>i.state.value[t],set:k=>{g(C=>{ls(C,k)})}}),i._p.forEach(k=>{ls(b,o.run(()=>k({store:b,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(b.$state,p),c=!0,u=!0,b}function om(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=$l();return a=a||c&&vn(v2,null),a&&Zh(a),a=y2,a._s.has(i)||(r?w2(i,e,s,a):oR(i,s,a)),a._s.get(i)}return o.$id=i,o}function aR(t){{t=Ce(t);const e={};for(const n in t){const i=t[n];(dt(i)||Vi(i))&&(e[n]=Hw(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw Ko(e)},Ko=function(t){return new Error("Firebase Database ("+E2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new cR;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T2=function(t){const e=I2(t);return ed.encodeByteArray(e,!0)},Uu=function(t){return T2(t).replace(/\./g,"")},Bu=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return x2(void 0,t)}function x2(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hR(n)||(t[n]=x2(t[n],e[n]));return t}function hR(t){return t!=="__proto__"}/**
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
 */const fR=()=>dR().__FIREBASE_DEFAULTS__,pR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bu(t[1]);return e&&JSON.parse(e)},am=()=>{try{return fR()||pR()||gR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C2=t=>{var e,n;return(n=(e=am())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mR=t=>{const e=C2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_R=()=>{var t;return(t=am())===null||t===void 0?void 0:t.config},k2=t=>{var e;return(e=am())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function yR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function vR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function S2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bR(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A2(){return E2.NODE_ADMIN===!0}function R2(){try{return typeof indexedDB=="object"}catch{return!1}}function wR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="FirebaseError";class xi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ER,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?IR(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xi(s,a,i)}}function IR(t,e){return t.replace(TR,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const TR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return JSON.parse(t)}function Ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ll(Bu(r[0])||""),n=ll(Bu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},xR=function(t){const e=D2(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CR=function(t){const e=D2(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(lv(r)&&lv(o)){if(!$u(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function lv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function SR(t,e){const n=new AR(t,e);return n.subscribe.bind(n)}class AR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=of),s.error===void 0&&(s.error=of),s.complete===void 0&&(s.complete=of);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function of(){}function DR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,z(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},td=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class ti{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new al;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:Qs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qs){return this.instances.has(e)}getOptions(e=Qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qs){return this.component?this.component.multipleInstances?e:Qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PR(t){return t===Qs?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ve||(Ve={}));const FR={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},UR=Ve.INFO,BR={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},VR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=BR[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=UR,this._logHandler=VR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const $R=(t,e)=>e.some(n=>t instanceof n);let cv,uv;function zR(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HR(){return uv||(uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O2=new WeakMap,pp=new WeakMap,M2=new WeakMap,af=new WeakMap,cm=new WeakMap;function jR(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Es(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O2.set(n,t)}).catch(()=>{}),cm.set(e,t),e}function WR(t){if(pp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let gp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qR(t){gp=t(gp)}function KR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(lf(this),e,...n);return M2.set(i,e.sort?e.sort():[e]),Es(i)}:HR().includes(t)?function(...e){return t.apply(lf(this),e),Es(O2.get(this))}:function(...e){return Es(t.apply(lf(this),e))}}function GR(t){return typeof t=="function"?KR(t):(t instanceof IDBTransaction&&WR(t),$R(t,zR())?new Proxy(t,gp):t)}function Es(t){if(t instanceof IDBRequest)return jR(t);if(af.has(t))return af.get(t);const e=GR(t);return e!==t&&(af.set(t,e),cm.set(e,t)),e}const lf=t=>cm.get(t);function YR(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Es(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Es(o.result),l.oldVersion,l.newVersion,Es(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const XR=["get","getKey","getAll","getAllKeys","count"],QR=["put","add","delete","clear"],cf=new Map;function hv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=QR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||XR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return cf.set(e,r),r}qR(t=>({...t,get:(e,n,i)=>hv(e,n)||t.get(e,n,i),has:(e,n)=>!!hv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ZR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mp="@firebase/app",dv="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new zl("@firebase/app"),e3="@firebase/app-compat",t3="@firebase/analytics-compat",n3="@firebase/analytics",i3="@firebase/app-check-compat",s3="@firebase/app-check",r3="@firebase/auth",o3="@firebase/auth-compat",a3="@firebase/database",l3="@firebase/database-compat",c3="@firebase/functions",u3="@firebase/functions-compat",h3="@firebase/installations",d3="@firebase/installations-compat",f3="@firebase/messaging",p3="@firebase/messaging-compat",g3="@firebase/performance",m3="@firebase/performance-compat",_3="@firebase/remote-config",y3="@firebase/remote-config-compat",v3="@firebase/storage",b3="@firebase/storage-compat",w3="@firebase/firestore",E3="@firebase/firestore-compat",I3="firebase",T3="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="[DEFAULT]",x3={[mp]:"fire-core",[e3]:"fire-core-compat",[n3]:"fire-analytics",[t3]:"fire-analytics-compat",[s3]:"fire-app-check",[i3]:"fire-app-check-compat",[r3]:"fire-auth",[o3]:"fire-auth-compat",[a3]:"fire-rtdb",[l3]:"fire-rtdb-compat",[c3]:"fire-fn",[u3]:"fire-fn-compat",[h3]:"fire-iid",[d3]:"fire-iid-compat",[f3]:"fire-fcm",[p3]:"fire-fcm-compat",[g3]:"fire-perf",[m3]:"fire-perf-compat",[_3]:"fire-rc",[y3]:"fire-rc-compat",[v3]:"fire-gcs",[b3]:"fire-gcs-compat",[w3]:"fire-fst",[E3]:"fire-fst-compat","fire-js":"fire-js",[I3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,yp=new Map;function C3(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(yp.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,t);for(const n of zu.values())C3(n,t);return!0}function um(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Is=new Go("app","Firebase",k3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=T3;function P2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_p,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Is.create("bad-app-name",{appName:String(s)});if(n||(n=_R()),!n)throw Is.create("no-options");const r=zu.get(s);if(r){if($u(n,r.options)&&$u(i,r.config))return r;throw Is.create("duplicate-app",{appName:s})}const o=new LR(s);for(const l of yp.values())o.addComponent(l);const a=new S3(n,i,o);return zu.set(s,a),a}function hm(t=_p){const e=zu.get(t);if(!e&&t===_p)return P2();if(!e)throw Is.create("no-app",{appName:t});return e}function Sn(t,e,n){var i;let s=(i=x3[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}bi(new ti(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const A3="firebase-heartbeat-database",R3=1,cl="firebase-heartbeat-store";let uf=null;function N2(){return uf||(uf=YR(A3,R3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cl)}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),uf}async function D3(t){try{return(await N2()).transaction(cl).objectStore(cl).get(L2(t))}catch(e){if(e instanceof xi)br.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function fv(t,e){try{const i=(await N2()).transaction(cl,"readwrite");return await i.objectStore(cl).put(e,L2(t)),i.done}catch(n){if(n instanceof xi)br.warn(n.message);else{const i=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(i.message)}}}function L2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O3=1024,M3=30*24*60*60*1e3;class P3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L3(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=M3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pv(),{heartbeatsToSend:n,unsentEntries:i}=N3(this._heartbeatsCache.heartbeats),s=Uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pv(){return new Date().toISOString().substring(0,10)}function N3(t,e=O3){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),gv(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class L3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R2()?wR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await D3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gv(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(t){bi(new ti("platform-logger",e=>new JR(e),"PRIVATE")),bi(new ti("heartbeat",e=>new P3(e),"PRIVATE")),Sn(mp,dv,t),Sn(mp,dv,"esm2017"),Sn("fire-js","")}F3("");function dm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function F2(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U3=F2,U2=new Go("auth","Firebase",F2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new zl("@firebase/auth");function B3(t,...e){Hu.logLevel<=Ve.WARN&&Hu.warn(`Auth (${Us}): ${t}`,...e)}function yu(t,...e){Hu.logLevel<=Ve.ERROR&&Hu.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,...e){throw fm(t,...e)}function mi(t,...e){return fm(t,...e)}function B2(t,e,n){const i=Object.assign(Object.assign({},U3()),{[e]:n});return new Go("auth","Firebase",i).create(e,{appName:t.name})}function V3(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&wi(t,"argument-error"),B2(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return U2.create(t,...e)}function ue(t,e,...n){if(!t)throw fm(e,...n)}function Ni(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yu(e),new Error(e)}function ji(t,e){t||Ni(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $3(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($3()||vR()||"connection"in navigator)?navigator.onLine:!0}function H3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ji(n>e,"Short delay should be less than long delay!"),this.isMobile=lm()||S2()}get(){return z3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){ji(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3=new Hl(3e4,6e4);function $2(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jl(t,e,n,i,s={}){return z2(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),V2.fetch()(H2(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function z2(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},j3),e);try{const s=new K3(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ac(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ac(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ac(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ac(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw B2(t,u,c);wi(t,u)}}catch(s){if(s instanceof xi)throw s;wi(t,"network-request-failed",{message:String(s)})}}async function q3(t,e,n,i,s={}){const r=await jl(t,e,n,i,s);return"mfaPendingCredential"in r&&wi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function H2(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?pm(t.config,s):`${t.config.apiScheme}://${s}`}class K3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),W3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ac(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=mi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G3(t,e){return jl(t,"POST","/v1/accounts:delete",e)}async function Y3(t,e){return jl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X3(t,e=!1){const n=$t(t),i=await n.getIdToken(e),s=gm(i);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Pa(hf(s.auth_time)),issuedAtTime:Pa(hf(s.iat)),expirationTime:Pa(hf(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function gm(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bu(n);return s?JSON.parse(s):(yu("Failed to decode base64 JWT payload"),null)}catch(s){return yu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Q3(t){const e=gm(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof xi&&J3(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ul(t,Y3(n,{idToken:i}));ue(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nD(r.providerUserInfo):[],a=tD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new j2(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function eD(t){const e=$t(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tD(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function nD(t){return t.map(e=>{var{providerId:n}=e,i=dm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){const n=await z2(t,{},async()=>{const i=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=H2(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",V2.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Q3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await iD(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new hl;return i&&(ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hl,this.toJSON())}_performRefresh(){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new j2(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ul(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return X3(this,e)}reload(){return eD(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ul(this,G3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:b,providerData:x,stsTokenManager:k}=n;ue(E&&k,e,"internal-error");const C=hl.fromJSON(this.name,k);ue(typeof E=="string",e,"internal-error"),ss(h,e.name),ss(d,e.name),ue(typeof T=="boolean",e,"internal-error"),ue(typeof b=="boolean",e,"internal-error"),ss(f,e.name),ss(p,e.name),ss(m,e.name),ss(g,e.name),ss(_,e.name),ss(v,e.name);const F=new pr({uid:E,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:C,createdAt:_,lastLoginAt:v});return x&&Array.isArray(x)&&(F.providerData=x.map(Z=>Object.assign({},Z))),g&&(F._redirectEventId=g),F}static async _fromIdTokenResponse(e,n,i=!1){const s=new hl;s.updateFromServerResponse(n);const r=new pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ju(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function Li(t){ji(t instanceof Function,"Expected a class definition");let e=_v.get(t);return e?(ji(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_v.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W2.type="NONE";const yv=W2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e,n){return`firebase:${t}:${e}:${n}`}class co{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vu(this.userKey,s.apiKey,r),this.fullPersistenceKey=vu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new co(Li(yv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Li(yv);const o=vu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=pr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new co(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new co(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X2(e))return"Blackberry";if(Q2(e))return"Webos";if(mm(e))return"Safari";if((e.includes("chrome/")||K2(e))&&!e.includes("edge/"))return"Chrome";if(Y2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function q2(t=sn()){return/firefox\//i.test(t)}function mm(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K2(t=sn()){return/crios\//i.test(t)}function G2(t=sn()){return/iemobile/i.test(t)}function Y2(t=sn()){return/android/i.test(t)}function X2(t=sn()){return/blackberry/i.test(t)}function Q2(t=sn()){return/webos/i.test(t)}function nd(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sD(t=sn()){var e;return nd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rD(){return bR()&&document.documentMode===10}function J2(t=sn()){return nd(t)||Y2(t)||Q2(t)||X2(t)||/windows phone/i.test(t)||G2(t)}function oD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e=[]){let n;switch(t){case"Browser":n=vv(sn());break;case"Worker":n=`${vv(sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${i}`}async function eE(t,e){return jl(t,"GET","/v2/recaptchaConfig",$2(t,e))}function bv(t){return t!==void 0&&t.enterprise!==void 0}class tE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=mi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",aD().appendChild(i)})}function lD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cD="https://www.google.com/recaptcha/enterprise.js?render=",uD="recaptcha-enterprise";class hD{constructor(e){this.type=uD,this.auth=Wl(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{eE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;bv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&bv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nE(cD+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class dD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wv(this),this.idTokenSubscription=new wv(this),this.beforeStateQueue=new dD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Li(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$t(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}async initializeRecaptchaConfig(){const e=await eE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hD(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Li(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wl(t){return $t(t)}class wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=SR(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t,e){const n=um(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($u(r,e??{}))return s;wi(s,"already-initialized")}return n.initialize({options:e})}function gD(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Li);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mD(t,e,n){const i=Wl(t);ue(i._canInitEmulator,i,"emulator-config-failed"),ue(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=iE(e),{host:o,port:a}=_D(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yD()}function iE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _D(t){const e=iE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ev(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ev(o)}}}function Ev(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ni("not implemented")}_getIdTokenResponse(e){return Ni("not implemented")}_linkToIdToken(e,n){return Ni("not implemented")}_getReauthenticationResolver(e){return Ni("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t,e){return q3(t,"POST","/v1/accounts:signInWithIdp",$2(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="http://localhost";class wr extends sE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=dm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new wr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return uo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,uo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,uo(e,n)}buildRequest(){const e={requestUri:vD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends _m{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ql{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";ds.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends ql{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends ql{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ps.credential(n,i)}catch{return null}}}ps.TWITTER_SIGN_IN_METHOD="twitter.com";ps.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await pr._fromIdTokenResponse(e,i,s),o=Iv(i);return new Co({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Iv(i);return new Co({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends xi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Wu(e,n,i,s)}}function rE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,r,e,i):r})}async function bD(t,e,n=!1){const i=await ul(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Co._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ul(t,rE(i,s,e,t),n);ue(r.idToken,i,"internal-error");const o=gm(r.idToken);ue(o,i,"internal-error");const{sub:a}=o;return ue(t.uid===a,i,"user-mismatch"),Co._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(t,e,n=!1){const i="signIn",s=await rE(t,i,e),r=await Co._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function ID(t,e,n,i){return $t(t).onIdTokenChanged(e,n,i)}function TD(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(){const t=sn();return mm(t)||nd(t)}const CD=1e3,kD=10;class aE extends oE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xD()&&oD(),this.fallbackToPolling=J2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);rD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kD):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},CD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aE.type="LOCAL";const SD=aE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends oE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lE.type="SESSION";const cE=lE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new id(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await AD(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ym("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function DD(t){_i().location.href=t}/**
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
 */function uE(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function OD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PD(){return uE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="firebaseLocalStorageDb",ND=1,Ku="firebaseLocalStorage",dE="fbase_key";class Kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sd(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function LD(){const t=indexedDB.deleteDatabase(hE);return new Kl(t).toPromise()}function bp(){const t=indexedDB.open(hE,ND);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ku,{keyPath:dE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ku)?e(i):(i.close(),await LD(),e(await bp()))})})}async function Tv(t,e,n){const i=sd(t,!0).put({[dE]:e,value:n});return new Kl(i).toPromise()}async function FD(t,e){const n=sd(t,!1).get(e),i=await new Kl(n).toPromise();return i===void 0?null:i.value}function xv(t,e){const n=sd(t,!0).delete(e);return new Kl(n).toPromise()}const UD=800,BD=3;class fE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>BD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=id._getInstance(PD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OD(),!this.activeServiceWorker)return;this.sender=new RD(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bp();return await Tv(e,qu,"1"),await xv(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Tv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>FD(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=sd(s,!1).getAll();return new Kl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fE.type="LOCAL";const VD=fE;new Hl(3e4,6e4);/**
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
 */function pE(t,e){return e?Li(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends sE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return uo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $D(t){return ED(t.auth,new vm(t),t.bypassAuthState)}function zD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),wD(n,new vm(t),t.bypassAuthState)}async function HD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),bD(n,new vm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $D;case"linkViaPopup":case"linkViaRedirect":return HD;case"reauthViaPopup":case"reauthViaRedirect":return zD;default:wi(this.auth,"internal-error")}}resolve(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=new Hl(2e3,1e4);async function WD(t,e,n){const i=Wl(t);V3(t,e,_m);const s=pE(i,n);return new sr(i,"signInViaPopup",e,s).executeNotNull()}class sr extends gE{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){ji(this.filter.length===1,"Popup operations only handle one event");const e=ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jD.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="pendingRedirect",bu=new Map;class KD extends gE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const i=await GD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GD(t,e){const n=QD(e),i=XD(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function YD(t,e){bu.set(t._key(),e)}function XD(t){return Li(t._redirectPersistence)}function QD(t){return vu(qD,t.config.apiKey,t.name)}async function JD(t,e,n=!1){const i=Wl(t),s=pE(i,e),o=await new KD(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=10*60*1e3;class eO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!mE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cv(e))}saveEventToCache(e){this.cachedEventUids.add(Cv(e)),this.lastProcessedEventTime=Date.now()}}function Cv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e={}){return jl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sO=/^https?/;async function rO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nO(t);for(const n of e)try{if(oO(n))return}catch{}wi(t,"unauthorized-domain")}function oO(t){const e=vp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!sO.test(n))return!1;if(iO.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aO=new Hl(3e4,6e4);function kv(){const t=_i().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lO(t){return new Promise((e,n)=>{var i,s,r;function o(){kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kv(),n(mi(t,"network-request-failed"))},timeout:aO.get()})}if(!((s=(i=_i().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=_i().gapi)===null||r===void 0)&&r.load)o();else{const a=lD("iframefcb");return _i()[a]=()=>{gapi.load?o():n(mi(t,"network-request-failed"))},nE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wu=null,e})}let wu=null;function cO(t){return wu=wu||lO(t),wu}/**
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
 */const uO=new Hl(5e3,15e3),hO="__/auth/iframe",dO="emulator/auth/iframe",fO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pm(e,dO):`https://${t.config.authDomain}/${hO}`,i={apiKey:e.apiKey,appName:t.name,v:Us},s=pO.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Yo(i).slice(1)}`}async function mO(t){const e=await cO(t),n=_i().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:gO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=mi(t,"network-request-failed"),a=_i().setTimeout(()=>{r(o)},uO.get());function l(){_i().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const _O={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yO=500,vO=600,bO="_blank",wO="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EO(t,e,n,i=yO,s=vO){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_O),{width:i.toString(),height:s.toString(),top:r,left:o}),c=sn().toLowerCase();n&&(a=K2(c)?bO:n),q2(c)&&(e=e||wO,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(sD(c)&&a!=="_self")return IO(e||"",a),new Sv(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new Sv(h)}function IO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const TO="__/auth/handler",xO="emulator/auth/handler",CO=encodeURIComponent("fac");async function Av(t,e,n,i,s,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Us,eventId:s};if(e instanceof _m){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ql){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${CO}=${encodeURIComponent(l)}`:"";return`${kO(t)}?${Yo(a).slice(1)}${c}`}function kO({config:t}){return t.emulator?pm(t,xO):`https://${t.authDomain}/${TO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="webStorageSupport";class SO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cE,this._completeRedirectFn=JD,this._overrideRedirectResult=YD}async _openPopup(e,n,i,s){var r;ji((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Av(e,n,i,vp(),s);return EO(e,o,ym())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Av(e,n,i,vp(),s);return DD(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ji(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await mO(e),i=new eO(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(df,{type:df},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[df];o!==void 0&&n(!!o),wi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J2()||mm()||nd()}}const AO=SO;var Rv="@firebase/auth",Dv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OO(t){bi(new ti("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ue(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z2(t)},c=new fD(i,s,r,l);return gD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bi(new ti("auth-internal",e=>{const n=Wl(e.getProvider("auth").getImmediate());return(i=>new RO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Rv,Dv,DO(t)),Sn(Rv,Dv,"esm2017")}/**
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
 */const MO=5*60,PO=k2("authIdTokenMaxAge")||MO;let Ov=null;const NO=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>PO)return;const s=n==null?void 0:n.token;Ov!==s&&(Ov=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LO(t=hm()){const e=um(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pD(t,{popupRedirectResolver:AO,persistence:[VD,SD,cE]}),i=k2("authTokenSyncURL");if(i){const r=NO(i);TD(n,r,()=>r(n.currentUser)),ID(n,o=>r(o))}const s=C2("auth");return s&&mD(n,`http://${s}`),n}OO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new Map,UO={activated:!1,tokenObservers:[]};function Ei(t){return FO.get(t)||Object.assign({},UO)}const Mv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new al,await VO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new al,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function VO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gu=new Go("appCheck","AppCheck",$O);function zO(t){if(!Ei(t).activated)throw Gu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="firebase-app-check-database",jO=1,wp="firebase-app-check-store";let Rc=null;function WO(){return Rc||(Rc=new Promise((t,e)=>{try{const n=indexedDB.open(HO,jO);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Gu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(wp,{keyPath:"compositeKey"})}}}catch(n){e(Gu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Rc)}function qO(t,e){return KO(GO(t),e)}async function KO(t,e){const i=(await WO()).transaction(wp,"readwrite"),r=i.objectStore(wp).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Gu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function GO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new zl("@firebase/app-check");function Pv(t,e){return R2()?qO(t,e).catch(n=>{Ep.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO={error:"UNKNOWN_ERROR"};function XO(t){return ed.encodeString(JSON.stringify(t),!1)}async function Ip(t,e=!1){const n=t.app;zO(n);const i=Ei(n);let s=i.token,r;if(s&&!ba(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(ba(l)?s=l:await Pv(n,void 0))}if(!e&&s&&ba(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ei(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ep.warn(l.message):Ep.error(l),r=l}let a;return s?r?ba(s)?a={token:s.token,internalError:r}:a=Lv(r):(a={token:s.token},i.token=s,await Pv(n,s)):a=Lv(r),o&&ZO(n,a),a}function QO(t,e,n,i){const{app:s}=t,r=Ei(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ba(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Nv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Nv(t))}function _E(t,e){const n=Ei(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Nv(t){const{app:e}=t,n=Ei(e);let i=n.tokenRefresher;i||(i=JO(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function JO(t){const{app:e}=t;return new BO(async()=>{const n=Ei(e);let i;if(n.token?i=await Ip(t,!0):i=await Ip(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ei(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Mv.RETRIAL_MIN_WAIT,Mv.RETRIAL_MAX_WAIT)}function ZO(t,e){const n=Ei(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ba(t){return t.expireTimeMillis-Date.now()>0}function Lv(t){return{token:XO(YO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ei(this.app);for(const n of e)_E(this.app,n.next);return Promise.resolve()}}function t4(t,e){return new e4(t,e)}function n4(t){return{getToken:e=>Ip(t,e),addTokenListener:e=>QO(t,"INTERNAL",e),removeTokenListener:e=>_E(t.app,e)}}const i4="@firebase/app-check",s4="0.6.5",r4="app-check",Fv="app-check-internal";function o4(){bi(new ti(r4,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return t4(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Fv).initialize()})),bi(new ti(Fv,t=>{const e=t.getProvider("app-check").getImmediate();return n4(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Sn(i4,s4)}o4();var a4="firebase",l4="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(a4,l4,"app");const yE=Symbol("firebaseApp");function vE(t){return $l()&&vn(yE,null)||hm(t)}const fi=()=>{};function bm(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function c4(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Nr(t){return!!t&&typeof t=="object"}const u4=Object.prototype;function h4(t){return Nr(t)&&Object.getPrototypeOf(t)===u4}function wm(t){return Nr(t)&&t.type==="document"}function bE(t){return Nr(t)&&t.type==="collection"}function d4(t){return wm(t)||bE(t)}function f4(t){return Nr(t)&&t.type==="query"}function p4(t){return Nr(t)&&"ref"in t}function g4(t){return Nr(t)&&typeof t.bucket=="string"}function m4(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function _4(){return!!($l()&&vn(g2,null))}const Uv="@firebase/database",Bv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wE="";function y4(t){wE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ll(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v4(e)}}catch{}return new b4},rr=EE("localStorage"),Tp=EE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new zl("@firebase/database"),w4=function(){let t=1;return function(){return t++}}(),IE=function(t){const e=OR(t),n=new kR;n.update(e);const i=n.digest();return ed.encodeByteArray(i)},Gl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gl.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let gr=null,Vv=!0;const E4=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ho.logLevel=Ve.VERBOSE,gr=ho.log.bind(ho),e&&Tp.set("logging_enabled",!0)):typeof t=="function"?gr=t:(gr=null,Tp.remove("logging_enabled"))},Gt=function(...t){if(Vv===!0&&(Vv=!1,gr===null&&Tp.get("logging_enabled")===!0&&E4(!0)),gr){const e=Gl.apply(null,t);gr(e)}},Yl=function(t){return function(...e){Gt(t,...e)}},xp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gl(...t);ho.error(e)},Er=function(...t){const e=`FIREBASE FATAL ERROR: ${Gl(...t)}`;throw ho.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Gl(...t);ho.warn(e)},I4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},TE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},T4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ko="[MIN_NAME]",Ir="[MAX_NAME]",Xo=function(t,e){if(t===e)return 0;if(t===ko||e===Ir)return-1;if(e===ko||t===Ir)return 1;{const n=$v(t),i=$v(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},x4=function(t,e){return t===e?0:t<e?-1:1},la=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ut(e))},Em=function(t){if(typeof t!="object"||t===null)return Ut(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ut(e[i]),n+=":",n+=Em(t[e[i]]);return n+="}",n},xE=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Vn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const CE=function(t){z(!TE(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},C4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},k4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},S4=new RegExp("^-?(0*)\\d{1,10}$"),A4=-2147483648,R4=2147483647,$v=function(t){if(S4.test(t)){const e=Number(t);if(e>=A4&&e<=R4)return e}return null},Xl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},D4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Na=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class O4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Cp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="5",kE="v",SE="s",AE="r",RE="f",DE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,OE="ls",ME="p",kp="ac",PE="websocket",NE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function N4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function LE(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let i;if(e===PE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===NE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);N4(t)&&(n.ns=t.namespace);const s=[];return Vn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.counters_={}}incrementCounter(e,n=1){Zi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return uR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={},pf={};function Tm(t){const e=t.toString();return ff[e]||(ff[e]=new L4),ff[e]}function F4(t,e){const n=t.toString();return pf[n]||(pf[n]=e()),pf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Xl(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="start",B4="close",V4="pLPCommand",$4="pRTLPCB",FE="id",UE="pw",BE="ser",z4="cb",H4="seg",j4="ts",W4="d",q4="dframe",VE=1870,$E=30,K4=VE-$E,G4=25e3,Y4=3e4;class to{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yl(e),this.stats_=Tm(n),this.urlFn=l=>(this.appCheckToken&&(l[kp]=this.appCheckToken),LE(n,NE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new U4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Y4)),T4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zv)this.id=a,this.password=l;else if(o===B4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[zv]="t",i[BE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[z4]=this.scriptTagHolder.uniqueCallbackIdentifier),i[kE]=Im,this.transportSessionId&&(i[SE]=this.transportSessionId),this.lastSessionId&&(i[OE]=this.lastSessionId),this.applicationId&&(i[ME]=this.applicationId),this.appCheckToken&&(i[kp]=this.appCheckToken),typeof location<"u"&&location.hostname&&DE.test(location.hostname)&&(i[AE]=RE);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){to.forceAllow_=!0}static forceDisallow(){to.forceDisallow_=!0}static isAvailable(){return to.forceAllow_?!0:!to.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!C4()&&!k4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=T2(n),s=xE(i,K4);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[q4]="t",i[FE]=e,i[UE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=w4(),window[V4+this.uniqueCallbackIdentifier]=e,window[$4+this.uniqueCallbackIdentifier]=n,this.myIFrame=xm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Gt("frame writing exception"),a.stack&&Gt(a.stack),Gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[FE]=this.myID,e[UE]=this.myPW,e[BE]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$E+i.length<=VE;){const o=this.pendingSegs.shift();i=i+"&"+H4+s+"="+o.seg+"&"+j4+s+"="+o.ts+"&"+W4+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(G4)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=16384,Q4=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class jn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yl(this.connId),this.stats_=Tm(n),this.connURL=jn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[kE]=Im,typeof location<"u"&&location.hostname&&DE.test(location.hostname)&&(o[AE]=RE),n&&(o[SE]=n),i&&(o[OE]=i),s&&(o[kp]=s),r&&(o[ME]=r),LE(e,PE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rr.set("previous_websocket_failure",!0);try{let i;A2(),this.mySock=new Yu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!jn.forceDisallow_}static previouslyFailed(){return rr.isInMemoryStorage||rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ll(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xE(n,X4);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Q4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[to,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=jn&&jn.isAvailable();let i=n&&!jn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[jn];else{const s=this.transports_=[];for(const r of dl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);dl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=6e4,Z4=5e3,eM=10*1024,tM=100*1024,gf="t",Hv="d",nM="s",jv="r",iM="e",Wv="o",qv="a",Kv="n",Gv="p",sM="h";class rM{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yl("c:"+this.id+":"),this.transportManager_=new dl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Na(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gf in e){const n=e[gf];n===qv?this.upgradeIfSecondaryHealthy_():n===jv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=la("t",e),i=la("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=la("t",e),i=la("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=la(gf,e);if(Hv in e){const i=e[Hv];if(n===sM){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Kv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nM?this.onConnectionShutdown_(i):n===jv?this.onReset_(i):n===iM?xp("Server Error: "+i):n===Wv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Im!==i&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Na(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(J4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Na(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Z4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends HE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xu}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=32,Xv=768;class lt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ke(){return new lt("")}function Pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function As(t){return t.pieces_.length-t.pieceNum_}function tt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new lt(t.pieces_,e)}function jE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function WE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new lt(e,0)}function Mt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof lt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new lt(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Ln(t,e){const n=Pe(t),i=Pe(e);if(n===null)return e;if(n===i)return Ln(tt(t),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function KE(t,e){if(As(t)!==As(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Gn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(As(t)>As(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class aM{constructor(e,n){this.errorPrefix_=n,this.parts_=WE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=td(this.parts_[i]);GE(this)}}function lM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=td(e),GE(t)}function cM(t){const e=t.parts_.pop();t.byteLength_-=td(e),t.parts_.length>0&&(t.byteLength_-=1)}function GE(t){if(t.byteLength_>Xv)throw new Error(t.errorPrefix_+"has a key path longer than "+Xv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yv+") or object contains a cycle "+Js(t))}function Js(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends HE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cm}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=1e3,uM=60*5*1e3,Qv=30*1e3,hM=1.3,dM=3e4,fM="server_kill",Jv=3;class $i extends zE{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$i.nextPersistentConnectionId_++,this.log_=Yl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ca,this.maxReconnectDelay_=uM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!A2())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ut(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new al,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$i.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zi(e,"w")){const i=xo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xp("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dM&&(this.reconnectDelay_=ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$i.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Gt("getToken() completed but was canceled"):(Gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new rM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{An(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(fM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&An(h),l())}}}interrupt(e){Gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fp(this.interruptReasons_)&&(this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Em(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new lt(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jv&&(this.reconnectDelay_=Qv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wE.replace(/\./g,"-")]=1,lm()?e["framework.cordova"]=1:S2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xu.getInstance().currentlyOnline();return fp(this.interruptReasons_)&&e}}$i.nextPersistentConnectionId_=0;$i.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Ne(ko,e),s=new Ne(ko,n);return this.compare(i,s)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc;class YE extends rd{static get __EMPTY_NODE(){return Dc}static set __EMPTY_NODE(e){Dc=e}compare(e,n){return Xo(e.name,n.name)}isDefinedOn(e){throw Ko("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(Ir,Dc)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,Dc)}toString(){return".key"}}const fo=new YE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ot{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ot.RED,this.left=s??_n.EMPTY_NODE,this.right=r??_n.EMPTY_NODE}copy(e,n,i,s,r){return new Ot(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _n.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ot.RED=!0;Ot.BLACK=!1;class pM{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(e,n=_n.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _n(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ot.BLACK,null,null))}remove(e){return new _n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ot.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oc(this.root_,null,this.comparator_,!0,e)}}_n.EMPTY_NODE=new pM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t,e){return Xo(t.name,e.name)}function km(t,e){return Xo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp;function mM(t){Sp=t}const XE=function(t){return typeof t=="number"?"number:"+CE(t):"string:"+t},QE=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zi(e,".sv"),"Priority must be a string or number.")}else z(t===Sp||t.isEmpty(),"priority of unexpected type.");z(t===Sp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zv;class Rt{constructor(e,n=Rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QE(this.priorityNode_)}static set __childrenNodeConstructor(e){Zv=e}static get __childrenNodeConstructor(){return Zv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:Pe(e)===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Pe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(z(i!==".priority"||As(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=CE(this.value_):e+=this.value_,this.lazyHash_=IE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Rt.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Rt.VALUE_TYPE_ORDER.indexOf(n),r=Rt.VALUE_TYPE_ORDER.indexOf(i);return z(s>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JE,ZE;function _M(t){JE=t}function yM(t){ZE=t}class vM extends rd{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Xo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(Ir,new Rt("[PRIORITY-POST]",ZE))}makePost(e,n){const i=JE(e);return new Ne(n,new Rt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Zt=new vM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=Math.log(2);class wM{constructor(e){const n=r=>parseInt(Math.log(r)/bM,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qu=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ot(d,h.node,Ot.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),m=s(f+1,c);return h=t[f],d=n?n(h):h,new Ot(d,h.node,Ot.BLACK,p,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,m){const g=h-p,_=h;h-=p;const v=s(g+1,_),E=t[g],T=n?n(E):E;f(new Ot(T,E.node,m,null,v))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));m?d(g,Ot.BLACK):(d(g,Ot.BLACK),d(g,Ot.RED))}return u},o=new wM(t.length),a=r(o);return new _n(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;const Gr={};class Fi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(Gr&&Zt,"ChildrenNode.ts has not been loaded"),mf=mf||new Fi({".priority":Gr},{".priority":Zt}),mf}get(e){const n=xo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _n?n:null}hasIndex(e){return Zi(this.indexSet_,e.toString())}addIndex(e,n){z(e!==fo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Ne.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Qu(i,e.getCompare()):a=Gr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Fi(u,c)}addToIndexes(e,n){const i=Vu(this.indexes_,(s,r)=>{const o=xo(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),s===Gr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qu(a,o.getCompare())}else return Gr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ne(e.name,a))),l.insert(e,e.node)}});return new Fi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Vu(this.indexes_,s=>{if(s===Gr)return s;{const r=n.get(e.name);return r?s.remove(new Ne(e.name,r)):s}});return new Fi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class He{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&QE(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ua||(ua=new He(new _n(km),null,Fi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ua}updatePriority(e){return this.children_.isEmpty()?this:new He(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ua:n}}getChild(e){const n=Pe(e);return n===null?this:this.getImmediateChild(n).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Ne(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ua:this.priorityNode_;return new He(s,o,r)}}updateChild(e,n){const i=Pe(e);if(i===null)return n;{z(Pe(e)!==".priority"||As(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(tt(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Zt,(o,a)=>{n[o]=a.val(e),i++,r&&He.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XE(this.getPriority().val())+":"),this.forEachChild(Zt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":IE(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ne(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ne.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ql?-1:0}withIndex(e){if(e===fo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new He(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Zt),s=n.getIterator(Zt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fo?null:this.indexMap_.get(e.toString())}}He.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EM extends He{constructor(){super(new _n(km),He.EMPTY_NODE,Fi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return He.EMPTY_NODE}isEmpty(){return!1}}const Ql=new EM;Object.defineProperties(Ne,{MIN:{value:new Ne(ko,He.EMPTY_NODE)},MAX:{value:new Ne(Ir,Ql)}});YE.__EMPTY_NODE=He.EMPTY_NODE;Rt.__childrenNodeConstructor=He;mM(Ql);yM(Ql);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=!0;function Yt(t,e=null){if(t===null)return He.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Rt(n,Yt(e))}if(!(t instanceof Array)&&IM){const n=[];let i=!1;if(Vn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Yt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Ne(o,l)))}}),n.length===0)return He.EMPTY_NODE;const r=Qu(n,gM,o=>o.name,km);if(i){const o=Qu(n,Zt.getCompare());return new He(r,Yt(e),new Fi({".priority":o},{".priority":Zt}))}else return new He(r,Yt(e),Fi.Default)}else{let n=He.EMPTY_NODE;return Vn(t,(i,s)=>{if(Zi(t,i)&&i.substring(0,1)!=="."){const r=Yt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Yt(e))}}_M(Yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM extends rd{constructor(e){super(),this.indexPath_=e,z(!Re(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Xo(e.name,n.name):r}makePost(e,n){const i=Yt(e),s=He.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ne(n,s)}maxPost(){const e=He.EMPTY_NODE.updateChild(this.indexPath_,Ql);return new Ne(Ir,e)}toString(){return WE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM extends rd{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Xo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,n){const i=Yt(e);return new Ne(n,i)}toString(){return".value"}}const CM=new xM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){return{type:"value",snapshotNode:t}}function SM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function AM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function e0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ko}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zt}copy(){const e=new Sm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function t0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Zt?n="$priority":t.index_===CM?n="$value":t.index_===fo?n="$key":(z(t.index_ instanceof TM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ut(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ut(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ut(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function n0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Zt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends zE{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Yl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ju.getListenId_(e,i),a={};this.listens_[o]=a;const l=t0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),xo(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Ju.getListenId_(e,n);delete this.listens_[i]}get(e){const n=t0(e._queryParams),i=e._path.toString(),s=new al;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ll(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.rootNode_=He.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function eI(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Pe(e);t.children.has(i)||t.children.set(i,Zu());const s=t.children.get(i);e=tt(e),eI(s,e,n)}}function Ap(t,e,n){t.value!==null?n(e,t.value):OM(t,(i,s)=>{const r=new lt(e.toString()+"/"+i);Ap(s,r,n)})}function OM(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=10*1e3,PM=30*1e3,NM=5*60*1e3;class LM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MM(e);const i=i0+(PM-i0)*Math.random();Na(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Vn(e,(s,r)=>{r>0&&Zi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Na(this.reportStats_.bind(this),Math.floor(Math.random()*2*NM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pi||(pi={}));function tI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pi.ACK_USER_WRITE,this.source=tI()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new lt(e));return new eh(Ke(),n,this.revert)}}else return z(Pe(this.path)===e,"operationForChild called for unrelated child."),new eh(tt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pi.OVERWRITE}operationForChild(e){return Re(this.path)?new Tr(this.source,Ke(),this.snap.getImmediateChild(e)):new Tr(this.source,tt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pi.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new lt(e));return n.isEmpty()?null:n.value?new Tr(this.source,Ke(),n.value):new fl(this.source,Ke(),n)}else return z(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fl(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function FM(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(RM(o.childName,o.snapshotNode))}),ha(t,s,"child_removed",e,i,n),ha(t,s,"child_added",e,i,n),ha(t,s,"child_moved",r,i,n),ha(t,s,"child_changed",e,i,n),ha(t,s,"value",e,i,n),s}function ha(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>BM(t,a,l)),o.forEach(a=>{const l=UM(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function UM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BM(t,e,n){if(e.childName==null||n.childName==null)throw Ko("Should only compare child_ events.");const i=new Ne(e.childName,e.snapshotNode),s=new Ne(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){return{eventCache:t,serverCache:e}}function La(t,e,n,i){return sI(new Am(e,n,i),t.serverCache)}function rI(t,e,n,i){return sI(t.eventCache,new Am(e,n,i))}function Rp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;const VM=()=>(_f||(_f=new _n(x4)),_f);class Ze{constructor(e,n=VM()){this.value=e,this.children=n}static fromObject(e){let n=new Ze(null);return Vn(e,(i,s)=>{n=n.set(new lt(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Re(e))return null;{const i=Pe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(tt(e),n);return r!=null?{path:Mt(new lt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=Pe(e),i=this.children.get(n);return i!==null?i.subtree(tt(e)):new Ze(null)}}set(e,n){if(Re(e))return new Ze(n,this.children);{const i=Pe(e),r=(this.children.get(i)||new Ze(null)).set(tt(e),n),o=this.children.insert(i,r);return new Ze(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Ze(null):new Ze(null,this.children);{const n=Pe(e),i=this.children.get(n);if(i){const s=i.remove(tt(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Ze(null):new Ze(this.value,r)}else return this}}get(e){if(Re(e))return this.value;{const n=Pe(e),i=this.children.get(n);return i?i.get(tt(e)):null}}setTree(e,n){if(Re(e))return n;{const i=Pe(e),r=(this.children.get(i)||new Ze(null)).setTree(tt(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ze(this.value,o)}}fold(e){return this.fold_(Ke(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Mt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ke(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Re(e))return null;{const r=Pe(e),o=this.children.get(r);return o?o.findOnPath_(tt(e),Mt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ke(),n)}foreachOnPath_(e,n,i){if(Re(e))return this;{this.value&&i(n,this.value);const s=Pe(e),r=this.children.get(s);return r?r.foreachOnPath_(tt(e),Mt(n,s),i):new Ze(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Mt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new Ze(null))}}function Fa(t,e,n){if(Re(e))return new Zn(new Ze(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ln(s,e);return r=r.updateChild(o,n),new Zn(t.writeTree_.set(s,r))}else{const s=new Ze(n),r=t.writeTree_.setTree(e,s);return new Zn(r)}}}function s0(t,e,n){let i=t;return Vn(n,(s,r)=>{i=Fa(i,Mt(e,s),r)}),i}function r0(t,e){if(Re(e))return Zn.empty();{const n=t.writeTree_.setTree(e,new Ze(null));return new Zn(n)}}function Dp(t,e){return Lr(t,e)!=null}function Lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ln(n.path,e)):null}function o0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Zt,(i,s)=>{e.push(new Ne(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ne(i,s.value))}),e}function Ts(t,e){if(Re(e))return t;{const n=Lr(t,e);return n!=null?new Zn(new Ze(n)):new Zn(t.writeTree_.subtree(e))}}function Op(t){return t.writeTree_.isEmpty()}function So(t,e){return oI(Ke(),t.writeTree_,e)}function oI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=oI(Mt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Mt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e){return dI(e,t)}function $M(t,e,n,i,s){z(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Fa(t.visibleWrites,e,n)),t.lastWriteId=i}function zM(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function HM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jM(a,i.path)?s=!1:Gn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return WM(t),!0;if(i.snap)t.visibleWrites=r0(t.visibleWrites,i.path);else{const a=i.children;Vn(a,l=>{t.visibleWrites=r0(t.visibleWrites,Mt(i.path,l))})}return!0}else return!1}function jM(t,e){if(t.snap)return Gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gn(Mt(t.path,n),e))return!0;return!1}function WM(t){t.visibleWrites=lI(t.allWrites,qM,Ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qM(t){return t.visible}function lI(t,e,n){let i=Zn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Gn(n,o)?(a=Ln(n,o),i=Fa(i,a,r.snap)):Gn(o,n)&&(a=Ln(o,n),i=Fa(i,Ke(),r.snap.getChild(a)));else if(r.children){if(Gn(n,o))a=Ln(n,o),i=s0(i,a,r.children);else if(Gn(o,n))if(a=Ln(o,n),Re(a))i=s0(i,Ke(),r.children);else{const l=xo(r.children,Pe(a));if(l){const c=l.getChild(tt(a));i=Fa(i,Ke(),c)}}}else throw Ko("WriteRecord should have .snap or .children")}}return i}function cI(t,e,n,i,s){if(!i&&!s){const r=Lr(t.visibleWrites,e);if(r!=null)return r;{const o=Ts(t.visibleWrites,e);if(Op(o))return n;if(n==null&&!Dp(o,Ke()))return null;{const a=n||He.EMPTY_NODE;return So(o,a)}}}else{const r=Ts(t.visibleWrites,e);if(!s&&Op(r))return n;if(!s&&n==null&&!Dp(r,Ke()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Gn(c.path,e)||Gn(e,c.path))},a=lI(t.allWrites,o,e),l=n||He.EMPTY_NODE;return So(a,l)}}}function KM(t,e,n){let i=He.EMPTY_NODE;const s=Lr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Zt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ts(t.visibleWrites,e);return n.forEachChild(Zt,(o,a)=>{const l=So(Ts(r,new lt(o)),a);i=i.updateImmediateChild(o,l)}),o0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ts(t.visibleWrites,e);return o0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function GM(t,e,n,i,s){z(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Mt(e,n);if(Dp(t.visibleWrites,r))return null;{const o=Ts(t.visibleWrites,r);return Op(o)?s.getChild(n):So(o,s.getChild(n))}}function YM(t,e,n,i){const s=Mt(e,n),r=Lr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ts(t.visibleWrites,s);return So(o,i.getNode().getImmediateChild(n))}else return null}function XM(t,e){return Lr(t.visibleWrites,e)}function QM(t,e,n,i,s,r,o){let a;const l=Ts(t.visibleWrites,e),c=Lr(l,Ke());if(c!=null)a=c;else if(n!=null)a=So(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function JM(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Mp(t,e,n,i){return cI(t.writeTree,t.treePath,e,n,i)}function uI(t,e){return KM(t.writeTree,t.treePath,e)}function a0(t,e,n,i){return GM(t.writeTree,t.treePath,e,n,i)}function th(t,e){return XM(t.writeTree,Mt(t.treePath,e))}function ZM(t,e,n,i,s,r){return QM(t.writeTree,t.treePath,e,n,i,s,r)}function Rm(t,e,n){return YM(t.writeTree,t.treePath,e,n)}function hI(t,e){return dI(Mt(t.treePath,e),t.writeTree)}function dI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,e0(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,AM(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,SM(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,e0(i,e.snapshotNode,s.oldSnap));else throw Ko("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const fI=new tP;class Dm{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Am(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),r=ZM(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function nP(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iP(t,e,n,i,s){const r=new eP;let o,a;if(n.type===pi.OVERWRITE){const c=n;c.source.fromUser?o=Pp(t,e,c.path,c.snap,i,s,r):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Re(c.path),o=nh(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===pi.MERGE){const c=n;c.source.fromUser?o=rP(t,e,c.path,c.children,i,s,r):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Np(t,e,c.path,c.children,i,s,a,r))}else if(n.type===pi.ACK_USER_WRITE){const c=n;c.revert?o=lP(t,e,c.path,i,s,r):o=oP(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===pi.LISTEN_COMPLETE)o=aP(t,e,n.path,i,r);else throw Ko("Unknown operation type: "+n.type);const l=r.getChanges();return sP(e,o,l),{viewCache:o,changes:l}}function sP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Rp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(kM(Rp(e)))}}function pI(t,e,n,i,s,r){const o=e.eventCache;if(th(i,n)!=null)return e;{let a,l;if(Re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xr(e),u=c instanceof He?c:He.EMPTY_NODE,h=uI(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Mp(i,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Pe(n);if(c===".priority"){z(As(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=a0(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=tt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=a0(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Rm(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return La(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function nh(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Re(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Pe(n);if(!l.isCompleteForPath(n)&&As(n)>1)return e;const p=tt(n),g=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,fI,null)}const h=rI(e,c,l.isFullyInitialized()||Re(n),u.filtersNodes()),d=new Dm(s,h,r);return pI(t,h,n,s,d,a)}function Pp(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Dm(s,e,r);if(Re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=La(e,c,!0,t.filter.filtersNodes());else{const h=Pe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=La(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=tt(n),f=a.getNode().getImmediateChild(h);let p;if(Re(d))p=i;else{const m=u.getCompleteChild(h);m!=null?jE(d)===".priority"&&m.getChild(qE(d)).isEmpty()?p=m:p=m.updateChild(d,i):p=He.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=La(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function l0(t,e){return t.eventCache.isCompleteForChild(e)}function rP(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Mt(n,l);l0(e,Pe(u))&&(a=Pp(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Mt(n,l);l0(e,Pe(u))||(a=Pp(t,a,u,c,s,r,o))}),a}function c0(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Np(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Re(n)?c=i:c=new Ze(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=c0(t,f,d);l=nh(t,l,new lt(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=c0(t,p,d);l=nh(t,l,new lt(h),m,s,r,o,a)}}),l}function oP(t,e,n,i,s,r,o){if(th(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nh(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Re(n)){let c=new Ze(null);return l.getNode().forEachChild(fo,(u,h)=>{c=c.set(new lt(u),h)}),Np(t,e,n,c,s,r,a,o)}else return e}else{let c=new Ze(null);return i.foreach((u,h)=>{const d=Mt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Np(t,e,n,c,s,r,a,o)}}function aP(t,e,n,i,s){const r=e.serverCache,o=rI(e,r.getNode(),r.isFullyInitialized()||Re(n),r.isFiltered());return pI(t,o,n,i,fI,s)}function lP(t,e,n,i,s,r){let o;if(th(i,n)!=null)return e;{const a=new Dm(i,e,s),l=e.eventCache.getNode();let c;if(Re(n)||Pe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mp(i,xr(e));else{const h=e.serverCache.getNode();z(h instanceof He,"serverChildren would be complete if leaf node"),u=uI(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Pe(n);let h=Rm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,tt(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,He.EMPTY_NODE,tt(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mp(i,xr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||th(i,Ke())!=null,La(e,c,o,t.filter.filtersNodes())}}function cP(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(Pe(e)).isEmpty())?n.getChild(e):null}function u0(t,e,n,i){e.type===pi.MERGE&&e.source.queryId!==null&&(z(xr(t.viewCache_),"We should always have a full cache before handling merges"),z(Rp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=iP(t.processor_,s,e,n,i);return nP(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uP(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return FM(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0;function hP(t){z(!h0,"__referenceConstructor has already been defined"),h0=t}function Om(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return z(r!=null,"SyncTree gave us an op for an invalid query."),u0(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(u0(o,e,n,i));return r}}function Mm(t,e){let n=null;for(const i of t.views.values())n=n||cP(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0;function dP(t){z(!d0,"__referenceConstructor has already been defined"),d0=t}class f0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ze(null),this.pendingWriteTree_=JM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fP(t,e,n,i,s){return $M(t.pendingWriteTree_,e,n,i,s),s?ad(t,new Tr(tI(),e,n)):[]}function no(t,e,n=!1){const i=zM(t.pendingWriteTree_,e);if(HM(t.pendingWriteTree_,e)){let r=new Ze(null);return i.snap!=null?r=r.set(Ke(),!0):Vn(i.children,o=>{r=r.set(new lt(o),!0)}),ad(t,new eh(i.path,r,n))}else return[]}function od(t,e,n){return ad(t,new Tr(nI(),e,n))}function pP(t,e,n){const i=Ze.fromObject(n);return ad(t,new fl(nI(),e,i))}function gP(t,e,n,i){const s=yI(t,i);if(s!=null){const r=vI(s),o=r.path,a=r.queryId,l=Ln(o,e),c=new Tr(iI(a),l,n);return bI(t,o,c)}else return[]}function mP(t,e,n,i){const s=yI(t,i);if(s){const r=vI(s),o=r.path,a=r.queryId,l=Ln(o,e),c=Ze.fromObject(n),u=new fl(iI(a),l,c);return bI(t,o,u)}else return[]}function gI(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ln(o,e),c=Mm(a,l);if(c)return c});return cI(s,e,r,n,!0)}function ad(t,e){return mI(e,t.syncPointTree_,null,aI(t.pendingWriteTree_,Ke()))}function mI(t,e,n,i){if(Re(t.path))return _I(t,e,n,i);{const s=e.get(Ke());n==null&&s!=null&&(n=Mm(s,Ke()));let r=[];const o=Pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hI(i,o);r=r.concat(mI(a,l,c,u))}return s&&(r=r.concat(Om(s,t,i,n))),r}}function _I(t,e,n,i){const s=e.get(Ke());n==null&&s!=null&&(n=Mm(s,Ke()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hI(i,o),u=t.operationForChild(o);u&&(r=r.concat(_I(u,a,l,c)))}),s&&(r=r.concat(Om(s,t,i,n))),r}function yI(t,e){return t.tagToQueryMap.get(e)}function vI(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new lt(t.substr(0,e))}}function bI(t,e,n){const i=t.syncPointTree_.get(e);z(i,"Missing sync point for query tag that we're tracking");const s=aI(t.pendingWriteTree_,e);return Om(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pm(n)}node(){return this.node_}}class Nm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Mt(this.path_,e);return new Nm(this.syncTree_,n)}node(){return gI(this.syncTree_,this.path_)}}const _P=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},p0=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vP(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},vP=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&z(!1,"Unexpected increment value: "+i);const s=e.node();if(z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},bP=function(t,e,n,i){return Lm(e,new Nm(n,t),i)},wP=function(t,e,n){return Lm(t,new Pm(e),n)};function Lm(t,e,n){const i=t.getPriority().val(),s=p0(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=p0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Rt(a,Yt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Rt(s))),o.forEachChild(Zt,(a,l)=>{const c=Lm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Um(t,e){let n=e instanceof lt?e:new lt(e),i=t,s=Pe(n);for(;s!==null;){const r=xo(i.node.children,s)||{children:{},childCount:0};i=new Fm(s,i,r),n=tt(n),s=Pe(n)}return i}function Qo(t){return t.node.value}function wI(t,e){t.node.value=e,Lp(t)}function EI(t){return t.node.childCount>0}function EP(t){return Qo(t)===void 0&&!EI(t)}function ld(t,e){Vn(t.node.children,(n,i)=>{e(new Fm(n,t,i))})}function II(t,e,n,i){n&&!i&&e(t),ld(t,s=>{II(s,e,!0,i)}),n&&i&&e(t)}function IP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Jl(t){return new lt(t.parent===null?t.name:Jl(t.parent)+"/"+t.name)}function Lp(t){t.parent!==null&&TP(t.parent,t.name,t)}function TP(t,e,n){const i=EP(n),s=Zi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Lp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Lp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/[\[\].#$\/\u0000-\u001F\u007F]/,CP=/[\[\].#$\u0000-\u001F\u007F]/,yf=10*1024*1024,TI=function(t){return typeof t=="string"&&t.length!==0&&!xP.test(t)},kP=function(t){return typeof t=="string"&&t.length!==0&&!CP.test(t)},SP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kP(t)},xI=function(t,e,n){const i=n instanceof lt?new aM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Js(i));if(typeof e=="function")throw new Error(t+"contains a function "+Js(i)+" with contents = "+e.toString());if(TE(e))throw new Error(t+"contains "+e.toString()+" "+Js(i));if(typeof e=="string"&&e.length>yf/3&&td(e)>yf)throw new Error(t+"contains a string greater than "+yf+" utf8 bytes "+Js(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Vn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!TI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Js(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lM(i,o),xI(t,a,i),cM(i)}),s&&r)throw new Error(t+' contains ".value" child '+Js(i)+" in addition to actual children.")}},AP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!TI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SP(n))throw new Error(DR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DP(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!KE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Fr(t,e,n){DP(t,n),OP(t,i=>Gn(i,e)||Gn(e,i))}function OP(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(MP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();gr&&Gt("event: "+n.toString()),Xl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="repo_interrupt",NP=25;class LP{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new Fm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FP(t,e,n){if(t.stats_=Tm(t.repoInfo_),t.forceRestClient_||D4())t.server_=new Ju(t.repoInfo_,(i,s,r,o)=>{g0(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>m0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $i(t.repoInfo_,e,(i,s,r,o)=>{g0(t,i,s,r,o)},i=>{m0(t,i)},i=>{BP(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=F4(t.repoInfo_,()=>new LM(t.stats_,t.server_)),t.infoData_=new DM,t.infoSyncTree_=new f0({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=od(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bm(t,"connected",!1),t.serverSyncTree_=new f0({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Fr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function UP(t){const n=t.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function CI(t){return _P({timestamp:UP(t)})}function g0(t,e,n,i,s){t.dataUpdateCount++;const r=new lt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Vu(n,c=>Yt(c));o=mP(t.serverSyncTree_,r,l,s)}else{const l=Yt(n);o=gP(t.serverSyncTree_,r,l,s)}else if(i){const l=Vu(n,c=>Yt(c));o=pP(t.serverSyncTree_,r,l)}else{const l=Yt(n);o=od(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$m(t,r)),Fr(t.eventQueue_,a,o)}function m0(t,e){Bm(t,"connected",e),e===!1&&$P(t)}function BP(t,e){Vn(e,(n,i)=>{Bm(t,n,i)})}function Bm(t,e,n){const i=new lt("/.info/"+e),s=Yt(n);t.infoData_.updateSnapshot(i,s);const r=od(t.infoSyncTree_,i,s);Fr(t.eventQueue_,i,r)}function VP(t){return t.nextWriteId_++}function $P(t){kI(t,"onDisconnectEvents");const e=CI(t),n=Zu();Ap(t.onDisconnect_,Ke(),(s,r)=>{const o=bP(s,r,t.serverSyncTree_,e);eI(n,s,o)});let i=[];Ap(n,Ke(),(s,r)=>{i=i.concat(od(t.serverSyncTree_,s,r));const o=WP(t,s);$m(t,o)}),t.onDisconnect_=Zu(),Fr(t.eventQueue_,Ke(),i)}function zP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PP)}function kI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Gt(n,...e)}function SI(t,e,n){return gI(t.serverSyncTree_,e,n)||He.EMPTY_NODE}function Vm(t,e=t.transactionQueueTree_){if(e||cd(t,e),Qo(e)){const n=RI(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&HP(t,Jl(e),n)}else EI(e)&&ld(e,n=>{Vm(t,n)})}function HP(t,e,n){const i=n.map(c=>c.currentWriteId),s=SI(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];z(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ln(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{kI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(no(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();cd(t,Um(t.transactionQueueTree_,e)),Vm(t,t.transactionQueueTree_),Fr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Xl(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}$m(t,e)}},o)}function $m(t,e){const n=AI(t,e),i=Jl(n),s=RI(t,n);return jP(t,s,i),i}function jP(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ln(n,l.path);let u=!1,h;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(no(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NP)u=!0,h="maxretry",s=s.concat(no(t.serverSyncTree_,l.currentWriteId,!0));else{const d=SI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){xI("transaction failed: Data returned ",f,l.path);let p=Yt(f);typeof f=="object"&&f!=null&&Zi(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,_=CI(t),v=wP(p,d,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=v,l.currentWriteId=VP(t),o.splice(o.indexOf(g),1),s=s.concat(fP(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),s=s.concat(no(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(no(t.serverSyncTree_,l.currentWriteId,!0))}Fr(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}cd(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Xl(i[a]);Vm(t,t.transactionQueueTree_)}function AI(t,e){let n,i=t.transactionQueueTree_;for(n=Pe(e);n!==null&&Qo(i)===void 0;)i=Um(i,n),e=tt(e),n=Pe(e);return i}function RI(t,e){const n=[];return DI(t,e,n),n.sort((i,s)=>i.order-s.order),n}function DI(t,e,n){const i=Qo(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ld(e,s=>{DI(t,s,n)})}function cd(t,e){const n=Qo(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,wI(e,n.length>0?n:void 0)}ld(e,i=>{cd(t,i)})}function WP(t,e){const n=Jl(AI(t,e)),i=Um(t.transactionQueueTree_,e);return IP(i,s=>{vf(t,s)}),vf(t,i),II(i,s=>{vf(t,s)}),n}function vf(t,e){const n=Qo(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(no(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wI(e,void 0):n.length=r+1,Fr(t.eventQueue_,Jl(e),s);for(let o=0;o<i.length;o++)Xl(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function KP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const _0=function(t,e){const n=GP(t),i=n.namespace;n.domain==="firebase.com"&&Er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||I4();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new P4(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new lt(n.pathString)}},GP=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=qP(t.substring(u,h)));const d=KP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Re(this._path)?null:jE(this._path)}get ref(){return new Jo(this._repo,this._path)}get _queryIdentifier(){const e=n0(this._queryParams),n=Em(e);return n==="{}"?"default":n}get _queryObject(){return n0(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof zm))return!1;const n=this._repo===e._repo,i=KE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+oM(this._path)}}class Jo extends zm{constructor(e,n){super(e,n,new Sm,!1)}get parent(){const e=qE(this._path);return e===null?null:new Jo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}hP(Jo);dP(Jo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="FIREBASE_DATABASE_EMULATOR_HOST",Fp={};let XP=!1;function QP(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_0(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[YP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=_0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Cp(Cp.OWNER):new M4(t.name,t.options,e);AP("Invalid Firebase Database URL",o),Re(o.path)||Er("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ZP(a,t,u,new O4(t.name,n));return new eN(h,t)}function JP(t,e){const n=Fp[e];(!n||n[t.key]!==t)&&Er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zP(t),delete n[t.key]}function ZP(t,e,n,i){let s=Fp[e.name];s||(s={},Fp[e.name]=s);let r=s[t.toURLString()];return r&&Er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new LP(t,XP,n,i),s[t.toURLString()]=r,r}class eN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jo(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Er("Cannot call "+e+" on a deleted database.")}}/**
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
 */function tN(t){y4(Us),bi(new ti("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QP(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Sn(Uv,Bv,t),Sn(Uv,Bv,"esm2017")}$i.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$i.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tN();var nN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,Hm=Hm||{},he=nN||self;function ih(){}function ud(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iN(t){return Object.prototype.hasOwnProperty.call(t,bf)&&t[bf]||(t[bf]=++sN)}var bf="closure_uid_"+(1e9*Math.random()>>>0),sN=0;function rN(t,e,n){return t.call.apply(t.bind,arguments)}function oN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function en(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=rN:en=oN,en.apply(null,arguments)}function Mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Bs(){this.s=this.s,this.o=this.o}var aN=0;Bs.prototype.s=!1;Bs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aN!=0)&&iN(this)};Bs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const OI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jm(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function y0(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ud(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};var lN=function(){if(!he.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{he.addEventListener("test",ih,e),he.removeEventListener("test",ih,e)}catch{}return t}();function sh(t){return/^[\s\xa0]*$/.test(t)}var v0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wf(t,e){return t<e?-1:t>e?1:0}function hd(){var t=he.navigator;return t&&(t=t.userAgent)?t:""}function di(t){return hd().indexOf(t)!=-1}function Wm(t){return Wm[" "](t),t}Wm[" "]=ih;function cN(t){var e=dN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uN=di("Opera"),Ao=di("Trident")||di("MSIE"),MI=di("Edge"),Up=MI||Ao,PI=di("Gecko")&&!(hd().toLowerCase().indexOf("webkit")!=-1&&!di("Edge"))&&!(di("Trident")||di("MSIE"))&&!di("Edge"),hN=hd().toLowerCase().indexOf("webkit")!=-1&&!di("Edge");function NI(){var t=he.document;return t?t.documentMode:void 0}var rh;e:{var Ef="",If=function(){var t=hd();if(PI)return/rv:([^\);]+)(\)|;)/.exec(t);if(MI)return/Edge\/([\d\.]+)/.exec(t);if(Ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hN)return/WebKit\/(\S+)/.exec(t);if(uN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(If&&(Ef=If?If[1]:""),Ao){var Tf=NI();if(Tf!=null&&Tf>parseFloat(Ef)){rh=String(Tf);break e}}rh=Ef}var dN={};function fN(){return cN(function(){let t=0;const e=v0(String(rh)).split("."),n=v0("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=wf(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||wf(s[2].length==0,r[2].length==0)||wf(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Bp;if(he.document&&Ao){var b0=NI();Bp=b0||parseInt(rh,10)||void 0}else Bp=void 0;var pN=Bp;function pl(t,e){if(tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(PI){e:{try{Wm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pl.X.h.call(this)}}zt(pl,tn);var gN={2:"touch",3:"pen",4:"mouse"};pl.prototype.h=function(){pl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ec="closure_listenable_"+(1e6*Math.random()|0),mN=0;function _N(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++mN,this.ba=this.ea=!1}function dd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qm(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function LI(t){const e={};for(const n in t)e[n]=t[n];return e}const w0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FI(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<w0.length;r++)n=w0[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function fd(t){this.src=t,this.g={},this.h=0}fd.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=$p(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _N(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Vp(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=OI(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $p(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Km="closure_lm_"+(1e6*Math.random()|0),xf={};function UI(t,e,n,i,s){if(i&&i.once)return VI(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)UI(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[ec]?t.N(e,n,Zl(i)?!!i.capture:!!i,s):BI(t,e,n,!1,i,s)}function BI(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Zl(s)?!!s.capture:!!s,a=Ym(t);if(a||(t[Km]=a=new fd(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=yN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)lN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(zI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yN(){function t(n){return e.call(t.src,t.listener,n)}const e=vN;return t}function VI(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)VI(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[ec]?t.O(e,n,Zl(i)?!!i.capture:!!i,s):BI(t,e,n,!0,i,s)}function $I(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)$I(t,e[r],n,i,s);else i=Zl(i)?!!i.capture:!!i,n=Xm(n),t&&t[ec]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=$p(r,n,i,s),-1<n&&(dd(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ym(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$p(e,n,i,s)),(n=-1<t?e[t]:null)&&Gm(n))}function Gm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ec])Vp(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(zI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ym(e))?(Vp(n,t),n.h==0&&(n.src=null,e[Km]=null)):dd(t)}}}function zI(t){return t in xf?xf[t]:xf[t]="on"+t}function vN(t,e){if(t.ba)t=!0;else{e=new pl(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Gm(t),t=n.call(i,e)}return t}function Ym(t){return t=t[Km],t instanceof fd?t:null}var Cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xm(t){return typeof t=="function"?t:(t[Cf]||(t[Cf]=function(e){return t.handleEvent(e)}),t[Cf])}function Nt(){Bs.call(this),this.i=new fd(this),this.P=this,this.I=null}zt(Nt,Bs);Nt.prototype[ec]=!0;Nt.prototype.removeEventListener=function(t,e,n,i){$I(this,t,e,n,i)};function Vt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new tn(e,t);else if(e instanceof tn)e.target=e.target||t;else{var s=e;e=new tn(i,t),FI(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Pc(o,i,!0,e)&&s}if(o=e.g=t,s=Pc(o,i,!0,e)&&s,s=Pc(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Pc(o,i,!1,e)&&s}Nt.prototype.M=function(){if(Nt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)dd(n[i]);delete t.g[e],t.h--}}this.I=null};Nt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Nt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Vp(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Qm=he.JSON.stringify;function bN(){var t=WI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wN{constructor(){this.h=this.g=null}add(e,n){const i=HI.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var HI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new EN,t=>t.reset());class EN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IN(t){he.setTimeout(()=>{throw t},0)}function jI(t,e){zp||TN(),Hp||(zp(),Hp=!0),WI.add(t,e)}var zp;function TN(){var t=he.Promise.resolve(void 0);zp=function(){t.then(xN)}}var Hp=!1,WI=new wN;function xN(){for(var t;t=bN();){try{t.h.call(t.g)}catch(n){IN(n)}var e=HI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hp=!1}function pd(t,e){Nt.call(this),this.h=t||1,this.g=e||he,this.j=en(this.lb,this),this.l=Date.now()}zt(pd,Nt);Q=pd.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Vt(this,"tick"),this.ca&&(Jm(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){pd.X.M.call(this),Jm(this),delete this.g};function Zm(t,e,n){if(typeof t=="function")n&&(t=en(t,n));else if(t&&typeof t.handleEvent=="function")t=en(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:he.setTimeout(t,e||0)}function qI(t){t.g=Zm(()=>{t.g=null,t.i&&(t.i=!1,qI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CN extends Bs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qI(this)}M(){super.M(),this.g&&(he.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gl(t){Bs.call(this),this.h=t,this.g={}}zt(gl,Bs);var E0=[];function KI(t,e,n,i){Array.isArray(n)||(n&&(E0[0]=n.toString()),n=E0);for(var s=0;s<n.length;s++){var r=UI(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function GI(t){qm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gm(e)},t),t.g={}}gl.prototype.M=function(){gl.X.M.call(this),GI(this)};gl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gd(){this.g=!0}gd.prototype.Aa=function(){this.g=!1};function kN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function SN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function io(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RN(t,n)+(i?" "+i:"")})}function AN(t,e){t.info(function(){return"TIMEOUT: "+e})}gd.prototype.info=function(){};function RN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qm(n)}catch{return e}}var Ur={},I0=null;function md(){return I0=I0||new Nt}Ur.Pa="serverreachability";function YI(t){tn.call(this,Ur.Pa,t)}zt(YI,tn);function ml(t){const e=md();Vt(e,new YI(e))}Ur.STAT_EVENT="statevent";function XI(t,e){tn.call(this,Ur.STAT_EVENT,t),this.stat=e}zt(XI,tn);function ln(t){const e=md();Vt(e,new XI(e,t))}Ur.Qa="timingevent";function QI(t,e){tn.call(this,Ur.Qa,t),this.size=e}zt(QI,tn);function tc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return he.setTimeout(function(){t()},e)}var _d={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},JI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function e_(){}e_.prototype.h=null;function T0(t){return t.h||(t.h=t.i())}function ZI(){}var nc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function t_(){tn.call(this,"d")}zt(t_,tn);function n_(){tn.call(this,"c")}zt(n_,tn);var jp;function yd(){}zt(yd,e_);yd.prototype.g=function(){return new XMLHttpRequest};yd.prototype.i=function(){return{}};jp=new yd;function ic(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new gl(this),this.O=DN,t=Up?125:void 0,this.T=new pd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eT}function eT(){this.i=null,this.g="",this.h=!1}var DN=45e3,Wp={},oh={};Q=ic.prototype;Q.setTimeout=function(t){this.O=t};function qp(t,e,n){t.K=1,t.v=bd(Wi(e)),t.s=n,t.P=!0,tT(t,null)}function tT(t,e){t.F=Date.now(),sc(t),t.A=Wi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),cT(n.i,"t",i),t.C=0,n=t.l.H,t.h=new eT,t.g=RT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CN(en(t.La,t,t.g),t.N)),KI(t.S,t.g,"readystatechange",t.ib),e=t.H?LI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ml(),kN(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&Ui(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const u=Ui(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Up||this.g&&(this.h.h||this.g.fa()||S0(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ml(3):ml(2)),vd(this);var n=this.g.aa();this.Y=n;t:if(nT(this)){var i=S0(this.g);t="";var s=i.length,r=Ui(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Ua(this);var o="";break t}this.h.i=new he.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,SN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sh(a)){var c=a;break t}}c=null}if(n=c)io(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kp(this,n);else{this.i=!1,this.o=3,ln(12),or(this),Ua(this);break e}}this.P?(iT(this,u,o),Up&&this.i&&u==3&&(KI(this.S,this.T,"tick",this.hb),this.T.start())):(io(this.j,this.m,o,null),Kp(this,o)),u==4&&or(this),this.i&&!this.I&&(u==4?CT(this.l,this):(this.i=!1,sc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ln(12)):(this.o=0,ln(13)),or(this),Ua(this)}}}catch{}finally{}};function nT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function iT(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ON(t,n),s==oh){e==4&&(t.o=4,ln(14),i=!1),io(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Wp){t.o=4,ln(15),io(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else io(t.j,t.m,s,null),Kp(t,s);nT(t)&&s!=oh&&s!=Wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ln(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),c_(e),e.K=!0,ln(11))):(io(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Ua(t))}Q.hb=function(){if(this.g){var t=Ui(this.g),e=this.g.fa();this.C<e.length&&(vd(this),iT(this,t,e),this.i&&t!=4&&sc(this))}};function ON(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?oh:(n=Number(e.substring(n,i)),isNaN(n)?Wp:(i+=1,i+n>e.length?oh:(e=e.substr(i,n),t.C=i+n,e)))}Q.cancel=function(){this.I=!0,or(this)};function sc(t){t.V=Date.now()+t.O,sT(t,t.O)}function sT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tc(en(t.gb,t),e)}function vd(t){t.B&&(he.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(AN(this.j,this.A),this.K!=2&&(ml(),ln(17)),or(this),this.o=2,Ua(this)):sT(this,this.V-t)};function Ua(t){t.l.G==0||t.I||CT(t.l,t)}function or(t){vd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jm(t.T),GI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Gp(n.h,t))){if(!t.J&&Gp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ch(n),Id(n);else break e;l_(n),ln(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=tc(en(n.cb,n),6e3));if(1>=dT(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&ch(n),!sh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(i_(r,r.h),r.h=null))}if(i.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.za=m,ct(i.F,i.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=AT(i,i.H?i.ka:null,i.V),o.J){fT(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(vd(a),sc(a)),i.g=o}else TT(i);0<n.i.length&&Td(n)}else c[0]!="stop"&&c[0]!="close"||ar(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ar(n,7):a_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ml(4)}catch{}}function MN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ud(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function PN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ud(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function rT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ud(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PN(t),i=MN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var oT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mr){this.h=e!==void 0?e:t.h,ah(this,t.j),this.s=t.s,this.g=t.g,lh(this,t.m),this.l=t.l,e=t.i;var n=new _l;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),x0(this,n),this.o=t.o}else t&&(n=String(t).match(oT))?(this.h=!!e,ah(this,n[1]||"",!0),this.s=wa(n[2]||""),this.g=wa(n[3]||"",!0),lh(this,n[4]),this.l=wa(n[5]||"",!0),x0(this,n[6]||"",!0),this.o=wa(n[7]||"")):(this.h=!!e,this.i=new _l(null,this.h))}mr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ea(e,C0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ea(e,C0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ea(n,n.charAt(0)=="/"?UN:FN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ea(n,VN)),t.join("")};function Wi(t){return new mr(t)}function ah(t,e,n){t.j=n?wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function x0(t,e,n){e instanceof _l?(t.i=e,$N(t.i,t.h)):(n||(e=Ea(e,BN)),t.i=new _l(e,t.h))}function ct(t,e,n){t.i.set(e,n)}function bd(t){return ct(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var C0=/[#\/\?@]/g,FN=/[#\?:]/g,UN=/[#\?]/g,BN=/[#\?@]/g,VN=/#/g;function _l(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vs(t){t.g||(t.g=new Map,t.h=0,t.i&&NN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=_l.prototype;Q.add=function(t,e){Vs(this),this.i=null,t=Zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aT(t,e){Vs(t),e=Zo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lT(t,e){return Vs(t),e=Zo(t,e),t.g.has(e)}Q.forEach=function(t,e){Vs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};Q.oa=function(){Vs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};Q.W=function(t){Vs(this);let e=[];if(typeof t=="string")lT(this,t)&&(e=e.concat(this.g.get(Zo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return Vs(this),this.i=null,t=Zo(this,t),lT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function cT(t,e,n){aT(t,e),0<n.length&&(t.i=null,t.g.set(Zo(t,e),jm(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $N(t,e){e&&!t.j&&(Vs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(aT(this,i),cT(this,s,n))},t)),t.j=e}var zN=class{constructor(e,n){this.h=e,this.g=n}};function uT(t){this.l=t||HN,he.PerformanceNavigationTiming?(t=he.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(he.g&&he.g.Ga&&he.g.Ga()&&he.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HN=10;function hT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dT(t){return t.h?1:t.g?t.g.size:0}function Gp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function i_(t,e){t.g?t.g.add(e):t.h=e}function fT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uT.prototype.cancel=function(){if(this.i=pT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jm(t.i)}function s_(){}s_.prototype.stringify=function(t){return he.JSON.stringify(t,void 0)};s_.prototype.parse=function(t){return he.JSON.parse(t,void 0)};function jN(){this.g=new s_}function WN(t,e,n){const i=n||"";try{rT(t,function(s,r){let o=s;Zl(s)&&(o=Qm(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function qN(t,e){const n=new gd;if(he.Image){const i=new Image;i.onload=Mc(Nc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Mc(Nc,n,i,"TestLoadImage: error",!1,e),i.onabort=Mc(Nc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Mc(Nc,n,i,"TestLoadImage: timeout",!1,e),he.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Nc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function rc(t){this.l=t.ac||null,this.j=t.jb||!1}zt(rc,e_);rc.prototype.g=function(){return new wd(this.l,this.j)};rc.prototype.i=function(t){return function(){return t}}({});function wd(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=r_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(wd,Nt);var r_=0;Q=wd.prototype;Q.open=function(t,e){if(this.readyState!=r_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yl(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||he).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oc(this)),this.readyState=r_};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yl(this)),this.g&&(this.readyState=3,yl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof he.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gT(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function gT(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oc(this):yl(this),this.readyState==3&&gT(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,oc(this))};Q.Ua=function(t){this.g&&(this.response=t,oc(this))};Q.ga=function(){this.g&&oc(this)};function oc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yl(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KN=he.JSON.parse;function gt(t){Nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mT,this.K=this.L=!1}zt(gt,Nt);var mT="",GN=/^https?$/i,YN=["POST","PUT"];Q=gt.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jp.g(),this.C=this.u?T0(this.u):T0(jp),this.g.onreadystatechange=en(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){k0(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=he.FormData&&t instanceof he.FormData,!(0<=OI(YN,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vT(this),0<this.B&&((this.K=XN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.qa,this)):this.A=Zm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){k0(this,r)}};function XN(t){return Ao&&fN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof Hm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Vt(this,"timeout"),this.abort(8))};function k0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_T(t),Ed(t)}function _T(t){t.D||(t.D=!0,Vt(t,"complete"),Vt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Vt(this,"complete"),Vt(this,"abort"),Ed(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ed(this,!0)),gt.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?yT(this):this.fb())};Q.fb=function(){yT(this)};function yT(t){if(t.h&&typeof Hm<"u"&&(!t.C[1]||Ui(t)!=4||t.aa()!=2)){if(t.v&&Ui(t)==4)Zm(t.Ha,0,t);else if(Vt(t,"readystatechange"),Ui(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(oT)[1]||null;if(!s&&he.self&&he.self.location){var r=he.self.location.protocol;s=r.substr(0,r.length-1)}i=!GN.test(s?s.toLowerCase():"")}n=i}if(n)Vt(t,"complete"),Vt(t,"success");else{t.m=6;try{var o=2<Ui(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",_T(t)}}finally{Ed(t)}}}}function Ed(t,e){if(t.g){vT(t);const n=t.g,i=t.C[0]?ih:null;t.g=null,t.C=null,e||Vt(t,"ready");try{n.onreadystatechange=i}catch{}}}function vT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(he.clearTimeout(t.A),t.A=null)}function Ui(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<Ui(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KN(e)}};function S0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case mT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bT(t){let e="";return qm(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function o_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=bT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ct(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wT(t){this.Ca=0,this.i=[],this.j=new gd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=da("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=da("baseRetryDelayMs",5e3,t),this.bb=da("retryDelaySeedMs",1e4,t),this.$a=da("forwardChannelMaxRetries",2,t),this.ta=da("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new uT(t&&t.concurrentRequestLimit),this.Fa=new jN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=wT.prototype;Q.ma=8;Q.G=1;function a_(t){if(ET(t),t.G==3){var e=t.U++,n=Wi(t.F);ct(n,"SID",t.I),ct(n,"RID",e),ct(n,"TYPE","terminate"),ac(t,n),e=new ic(t,t.j,e,void 0),e.K=2,e.v=bd(Wi(n)),n=!1,he.navigator&&he.navigator.sendBeacon&&(n=he.navigator.sendBeacon(e.v.toString(),"")),!n&&he.Image&&(new Image().src=e.v,n=!0),n||(e.g=RT(e.l,null),e.g.da(e.v)),e.F=Date.now(),sc(e)}ST(t)}function Id(t){t.g&&(c_(t),t.g.cancel(),t.g=null)}function ET(t){Id(t),t.u&&(he.clearTimeout(t.u),t.u=null),ch(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&he.clearTimeout(t.m),t.m=null)}function Td(t){hT(t.h)||t.m||(t.m=!0,jI(t.Ja,t),t.C=0)}function QN(t,e){return dT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=tc(en(t.Ja,t,e),kT(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ic(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=LI(r),FI(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=IT(this,s,e),n=Wi(this.F),ct(n,"RID",t),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),ac(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(bT(r)))+"&"+e:this.o&&o_(n,this.o,r)),i_(this.h,s),this.Ya&&ct(n,"TYPE","init"),this.O?(ct(n,"$req",e),ct(n,"SID","null"),s.Z=!0,qp(s,n,null)):qp(s,n,e),this.G=2}}else this.G==3&&(t?A0(this,t):this.i.length==0||hT(this.h)||A0(this))};function A0(t,e){var n;e?n=e.m:n=t.U++;const i=Wi(t.F);ct(i,"SID",t.I),ct(i,"RID",n),ct(i,"AID",t.T),ac(t,i),t.o&&t.s&&o_(i,t.o,t.s),n=new ic(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=IT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),i_(t.h,n),qp(n,i,e)}function ac(t,e){t.ia&&qm(t.ia,function(n,i){ct(e,i,n)}),t.l&&rT({},function(n,i){ct(e,i,n)})}function IT(t,e,n){n=Math.min(t.i.length,n);var i=t.l?en(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{WN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function TT(t){t.g||t.u||(t.Z=1,jI(t.Ia,t),t.A=0)}function l_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=tc(en(t.Ia,t),kT(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,xT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=tc(en(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ln(10),Id(this),xT(this))};function c_(t){t.B!=null&&(he.clearTimeout(t.B),t.B=null)}function xT(t){t.g=new ic(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Wi(t.sa);ct(e,"RID","rpc"),ct(e,"SID",t.I),ct(e,"CI",t.L?"0":"1"),ct(e,"AID",t.T),ct(e,"TYPE","xmlhttp"),ac(t,e),t.o&&t.s&&o_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=bd(Wi(e)),n.s=null,n.P=!0,tT(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,Id(this),l_(this),ln(19))};function ch(t){t.v!=null&&(he.clearTimeout(t.v),t.v=null)}function CT(t,e){var n=null;if(t.g==e){ch(t),c_(t),t.g=null;var i=2}else if(Gp(t.h,e))n=e.D,fT(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=md(),Vt(i,new QI(i,n)),Td(t)}else TT(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&QN(t,e)||i==2&&l_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function kT(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ar(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=en(t.kb,t);n||(n=new mr("//www.google.com/images/cleardot.gif"),he.location&&he.location.protocol=="http"||ah(n,"https"),bd(n)),qN(n.toString(),i)}else ln(2);t.G=0,t.l&&t.l.va(e),ST(t),ET(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function ST(t){if(t.G=0,t.la=[],t.l){const e=pT(t.h);(e.length!=0||t.i.length!=0)&&(y0(t.la,e),y0(t.la,t.i),t.h.i.length=0,jm(t.i),t.i.length=0),t.l.ua()}}function AT(t,e,n){var i=n instanceof mr?Wi(n):new mr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),lh(i,i.m);else{var s=he.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new mr(null,void 0);i&&ah(r,i),e&&(r.g=e),s&&lh(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&ct(i,n,e),ct(i,"VER",t.ma),ac(t,i),i}function RT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new gt(new rc({jb:!0})):new gt(t.ra),e.Ka(t.H),e}function DT(){}Q=DT.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function uh(){if(Ao&&!(10<=Number(pN)))throw Error("Environmental error: no available transport.")}uh.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){Nt.call(this),this.g=new wT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!sh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ea(this)}zt(Dn,Nt);Dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ln(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=AT(t,null,t.V),Td(t)};Dn.prototype.close=function(){a_(this.g)};Dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qm(t),t=n);e.i.push(new zN(e.ab++,t)),e.G==3&&Td(e)};Dn.prototype.M=function(){this.g.l=null,delete this.j,a_(this.g),delete this.g,Dn.X.M.call(this)};function OT(t){t_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(OT,t_);function MT(){n_.call(this),this.status=1}zt(MT,n_);function ea(t){this.g=t}zt(ea,DT);ea.prototype.xa=function(){Vt(this.g,"a")};ea.prototype.wa=function(t){Vt(this.g,new OT(t))};ea.prototype.va=function(t){Vt(this.g,new MT)};ea.prototype.ua=function(){Vt(this.g,"b")};uh.prototype.createWebChannel=uh.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;_d.NO_ERROR=0;_d.TIMEOUT=8;_d.HTTP_ERROR=6;JI.COMPLETE="complete";ZI.EventType=nc;nc.OPEN="a";nc.CLOSE="b";nc.ERROR="c";nc.MESSAGE="d";Nt.prototype.listen=Nt.prototype.N;gt.prototype.listenOnce=gt.prototype.O;gt.prototype.getLastError=gt.prototype.Oa;gt.prototype.getLastErrorCode=gt.prototype.Ea;gt.prototype.getStatus=gt.prototype.aa;gt.prototype.getResponseJson=gt.prototype.Sa;gt.prototype.getResponseText=gt.prototype.fa;gt.prototype.send=gt.prototype.da;gt.prototype.setWithCredentials=gt.prototype.Ka;var JN=function(){return new uh},ZN=function(){return md()},kf=_d,e6=JI,t6=Ur,R0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},n6=rc,Lc=ZI,i6=gt;const D0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cr=new zl("@firebase/firestore");function O0(){return Cr.logLevel}function J(t,...e){if(Cr.logLevel<=Ve.DEBUG){const n=e.map(u_);Cr.debug(`Firestore (${ta}): ${t}`,...n)}}function qi(t,...e){if(Cr.logLevel<=Ve.ERROR){const n=e.map(u_);Cr.error(`Firestore (${ta}): ${t}`,...n)}}function hh(t,...e){if(Cr.logLevel<=Ve.WARN){const n=e.map(u_);Cr.warn(`Firestore (${ta}): ${t}`,...n)}}function u_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+t;throw qi(e),new Error(e)}function at(t,e){t||ce()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class r6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o6{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(at(typeof i.accessToken=="string"),new PT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return at(e===null||typeof e=="string"),new Kt(e)}}class a6{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class l6{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new a6(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(at(typeof n.token=="string"),this.T=n.token,new c6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=h6(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function ze(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new It(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new It(0,0))}static max(){return new pe(new It(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,i){n===void 0?n=0:n>e.length&&ce(),i===void 0?i=e.length-n:i>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class it extends vl{construct(e,n,i){return new it(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new it(n)}static emptyPath(){return new it([])}}const d6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends vl{construct(e,n,i){return new Jt(e,n,i)}static isValidIdentifier(e){return d6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Jt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(n)}static emptyPath(){return new Jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(it.fromString(e))}static fromName(e){return new ne(it.fromString(e).popFirst(5))}static empty(){return new ne(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new it(e.slice()))}}function f6(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(i===1e9?new It(n+1,0):new It(n,i));return new Rs(s,ne.empty(),e)}function p6(t){return new Rs(t.readTime,t.key,-1)}class Rs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Rs(pe.min(),ne.empty(),-1)}static max(){return new Rs(pe.max(),ne.empty(),-1)}}function g6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ze(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==m6)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,i)=>{n(e)})}static reject(e){return new L((n,i)=>{i(e)})}static waitFor(e){return new L((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next(s=>s?L.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new L((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new L((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function cc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class h_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}h_.ct=-1;function xd(t){return t==null}function dh(t){return t===0&&1/t==-1/0}function y6(t){return typeof t=="number"&&Number.isInteger(t)&&!dh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new kt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Lt.RED,this.left=s??Lt.EMPTY,this.right=r??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Lt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class P0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Jt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new xt(Jt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class v6 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new v6("Invalid base64 string: "+s):s}}(e);return new rn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const b6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(t){if(at(!!t),typeof t=="string"){let e=0;const n=b6.exec(t);if(at(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Do(t){return typeof t=="string"?rn.fromBase64String(t):rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function UT(t){const e=t.mapValue.fields.__previous_value__;return FT(e)?UT(e):e}function bl(t){const e=Ds(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class wl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?FT(t)?4:E6(t)?9007199254740991:10:ce()}function Ii(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bl(t).isEqual(bl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ds(i.timestampValue),o=Ds(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Do(i.bytesValue).isEqual(Do(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return wt(i.geoPointValue.latitude)===wt(s.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return wt(i.integerValue)===wt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=wt(i.doubleValue),o=wt(s.doubleValue);return r===o?dh(r)===dh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],Ii);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(M0(r)!==M0(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ii(r[a],o[a])))return!1;return!0}(t,e);default:return ce()}}function El(t,e){return(t.values||[]).find(n=>Ii(n,e))!==void 0}function Oo(t,e){if(t===e)return 0;const n=kr(t),i=kr(e);if(n!==i)return ze(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=wt(s.integerValue||s.doubleValue),a=wt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return N0(t.timestampValue,e.timestampValue);case 4:return N0(bl(t),bl(e));case 5:return ze(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Do(s),a=Do(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ze(o[l],a[l]);if(c!==0)return c}return ze(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=ze(wt(s.latitude),wt(r.latitude));return o!==0?o:ze(wt(s.longitude),wt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Oo(o[l],a[l]);if(c)return c}return ze(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Uc.mapValue&&r===Uc.mapValue)return 0;if(s===Uc.mapValue)return 1;if(r===Uc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ze(a[u],c[u]);if(h!==0)return h;const d=Oo(o[a[u]],l[c[u]]);if(d!==0)return d}return ze(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ce()}}function N0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=Ds(t),i=Ds(e),s=ze(n.seconds,i.seconds);return s!==0?s:ze(n.nanos,i.nanos)}function Mo(t){return Yp(t)}function Yp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ds(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Do(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Yp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Yp(i.fields[a])}`;return r+"}"}(t.mapValue):ce();var e,n}function L0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xp(t){return!!t&&"integerValue"in t}function d_(t){return!!t&&"arrayValue"in t}function F0(t){return!!t&&"nullValue"in t}function U0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eu(t){return!!t&&"mapValue"in t}function Ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ba(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(n)}setAll(e){let n=Jt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ba(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ii(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Eu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Br(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new gn(Ba(this.value))}}function BT(t){const e=[];return Br(t.fields,(n,i)=>{const s=new Jt([n]);if(Eu(i)){const r=BT(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xt(e,0,pe.min(),pe.min(),pe.min(),gn.empty(),0)}static newFoundDocument(e,n,i,s){return new Xt(e,1,n,pe.min(),i,s,0)}static newNoDocument(e,n){return new Xt(e,2,n,pe.min(),pe.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,pe.min(),pe.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fh{constructor(e,n){this.position=e,this.inclusive=n}}function B0(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ne.comparator(ne.fromName(o.referenceValue),n.key):i=Oo(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function V0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ii(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Va{constructor(e,n="asc"){this.field=e,this.dir=n}}function I6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VT{}class Et extends VT{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new x6(e,n,i):n==="array-contains"?new S6(e,i):n==="in"?new A6(e,i):n==="not-in"?new R6(e,i):n==="array-contains-any"?new D6(e,i):new Et(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new C6(e,i):new k6(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oo(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(Oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ni extends VT{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ni(e,n)}matches(e){return $T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $T(t){return t.op==="and"}function zT(t){return T6(t)&&$T(t)}function T6(t){for(const e of t.filters)if(e instanceof ni)return!1;return!0}function Qp(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+Mo(t.value);if(zT(t))return t.filters.map(e=>Qp(e)).join(",");{const e=t.filters.map(n=>Qp(n)).join(",");return`${t.op}(${e})`}}function HT(t,e){return t instanceof Et?function(n,i){return i instanceof Et&&n.op===i.op&&n.field.isEqual(i.field)&&Ii(n.value,i.value)}(t,e):t instanceof ni?function(n,i){return i instanceof ni&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&HT(r,i.filters[o]),!0):!1}(t,e):void ce()}function jT(t){return t instanceof Et?function(e){return`${e.field.canonicalString()} ${e.op} ${Mo(e.value)}`}(t):t instanceof ni?function(e){return e.op.toString()+" {"+e.getFilters().map(jT).join(" ,")+"}"}(t):"Filter"}class x6 extends Et{constructor(e,n,i){super(e,n,i),this.key=ne.fromName(i.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class C6 extends Et{constructor(e,n){super(e,"in",n),this.keys=WT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class k6 extends Et{constructor(e,n){super(e,"not-in",n),this.keys=WT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ne.fromName(i.referenceValue))}class S6 extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return d_(n)&&El(n.arrayValue,this.value)}}class A6 extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&El(this.value.arrayValue,n)}}class R6 extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!El(this.value.arrayValue,n)}}class D6 extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!d_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>El(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function $0(t,e=null,n=[],i=[],s=null,r=null,o=null){return new O6(t,e,n,i,s,r,o)}function f_(t){const e=me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Qp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),e.ft=n}return e.ft}function p_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V0(t.startAt,e.startAt)&&V0(t.endAt,e.endAt)}function Jp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function M6(t,e,n,i,s,r,o,a){return new uc(t,e,n,i,s,r,o,a)}function Cd(t){return new uc(t)}function z0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function g_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KT(t){return t.collectionGroup!==null}function po(t){const e=me(t);if(e.dt===null){e.dt=[];const n=g_(e),i=qT(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Va(n)),e.dt.push(new Va(Jt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Va(Jt.keyField(),r))}}}return e.dt}function Ki(t){const e=me(t);if(!e.wt)if(e.limitType==="F")e.wt=$0(e.path,e.collectionGroup,po(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of po(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Va(r.field,o))}const i=e.endAt?new fh(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new fh(e.startAt.position,e.startAt.inclusive):null;e.wt=$0(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function Zp(t,e){e.getFirstInequalityField(),g_(t);const n=t.filters.concat([e]);return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eg(t,e,n){return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kd(t,e){return p_(Ki(t),Ki(e))&&t.limitType===e.limitType}function GT(t){return`${f_(Ki(t))}|lt:${t.limitType}`}function tg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>jT(i)).join(", ")}]`),xd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),`Target(${n})`}(Ki(t))}; limitType=${t.limitType})`}function Sd(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ne.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of po(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=B0(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,po(n),i)||n.endAt&&!function(s,r,o){const a=B0(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,po(n),i))}(t,e)}function P6(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YT(t){return(e,n)=>{let i=!1;for(const s of po(t)){const r=N6(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function N6(t,e,n){const i=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Oo(a,l):ce()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return LT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6=new kt(ne.comparator);function Gi(){return L6}const XT=new kt(ne.comparator);function Ia(...t){let e=XT;for(const n of t)e=e.insert(n.key,n);return e}function QT(t){let e=XT;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function lr(){return $a()}function JT(){return $a()}function $a(){return new na(t=>t.toString(),(t,e)=>t.isEqual(e))}const F6=new kt(ne.comparator),U6=new xt(ne.comparator);function Ae(...t){let e=U6;for(const n of t)e=e.add(n);return e}const B6=new xt(ze);function ZT(){return B6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dh(e)?"-0":e}}function tx(t){return{integerValue:""+t}}function V6(t,e){return y6(e)?tx(e):ex(t,e)}/**
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
 */class Ad{constructor(){this._=void 0}}function $6(t,e,n){return t instanceof ph?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Il?ix(t,e):t instanceof Tl?sx(t,e):function(i,s){const r=nx(i,s),o=H0(r)+H0(i._t);return Xp(r)&&Xp(i._t)?tx(o):ex(i.serializer,o)}(t,e)}function z6(t,e,n){return t instanceof Il?ix(t,e):t instanceof Tl?sx(t,e):n}function nx(t,e){return t instanceof gh?Xp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class ph extends Ad{}class Il extends Ad{constructor(e){super(),this.elements=e}}function ix(t,e){const n=rx(e);for(const i of t.elements)n.some(s=>Ii(s,i))||n.push(i);return{arrayValue:{values:n}}}class Tl extends Ad{constructor(e){super(),this.elements=e}}function sx(t,e){let n=rx(e);for(const i of t.elements)n=n.filter(s=>!Ii(s,i));return{arrayValue:{values:n}}}class gh extends Ad{constructor(e,n){super(),this.serializer=e,this._t=n}}function H0(t){return wt(t.integerValue||t.doubleValue)}function rx(t){return d_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function H6(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Il&&i instanceof Il||n instanceof Tl&&i instanceof Tl?Ro(n.elements,i.elements,Ii):n instanceof gh&&i instanceof gh?Ii(n._t,i._t):n instanceof ph&&i instanceof ph}(t.transform,e.transform)}class j6{constructor(e,n){this.version=e,this.transformResults=n}}class ei{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ei}static exists(e){return new ei(void 0,e)}static updateTime(e){return new ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function ox(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m_(t.key,ei.none()):new hc(t.key,t.data,ei.none());{const n=t.data,i=gn.empty();let s=new xt(Jt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new $s(t.key,i,new kn(s.toArray()),ei.none())}}function W6(t,e,n){t instanceof hc?function(i,s,r){const o=i.value.clone(),a=W0(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(i,s,r){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=W0(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ax(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function za(t,e,n,i){return t instanceof hc?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=s.value.clone(),c=q0(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof $s?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=q0(s.fieldTransforms,a,r),c=r.data;return c.setAll(ax(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Iu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function q6(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=nx(i.transform,s||null);r!=null&&(n===null&&(n=gn.empty()),n.set(i.field,r))}return n||null}function j0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ro(n,i,(s,r)=>H6(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hc extends Rd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Rd{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ax(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function W0(t,e,n){const i=new Map;at(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,z6(o,a,n[s]))}return i}function q0(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,$6(r,o,e))}return i}class m_ extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K6 extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&W6(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=za(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=za(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=JT();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=ox(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,i)=>j0(n,i))&&Ro(this.baseMutations,e.baseMutations,(n,i)=>j0(n,i))}}class __{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){at(e.mutations.length===i.length);let s=F6;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new __(e,n,i,s)}}/**
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
 */class Y6{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class X6{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Me;function Q6(t){switch(t){default:return ce();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function lx(t){if(t===void 0)return qi("GRPC error has no .code"),O.UNKNOWN;switch(t){case bt.OK:return O.OK;case bt.CANCELLED:return O.CANCELLED;case bt.UNKNOWN:return O.UNKNOWN;case bt.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case bt.INTERNAL:return O.INTERNAL;case bt.UNAVAILABLE:return O.UNAVAILABLE;case bt.UNAUTHENTICATED:return O.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case bt.NOT_FOUND:return O.NOT_FOUND;case bt.ALREADY_EXISTS:return O.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return O.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case bt.ABORTED:return O.ABORTED;case bt.OUT_OF_RANGE:return O.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return O.UNIMPLEMENTED;case bt.DATA_LOSS:return O.DATA_LOSS;default:return ce()}}(Me=bt||(bt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class y_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Bc}static getOrCreateInstance(){return Bc===null&&(Bc=new y_),Bc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Bc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Dd(pe.min(),s,ZT(),Gi(),Ae())}}class dc{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new dc(i,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class cx{constructor(e,n){this.targetId=e,this.Et=n}}class ux{constructor(e,n,i=rn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class K0{constructor(){this.At=0,this.Rt=Y0(),this.vt=rn.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Ae(),n=Ae(),i=Ae();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ce()}}),new dc(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Y0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class J6{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gi(),this.qt=G0(),this.Ut=new xt(ze)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(Jp(o))if(s===0){const a=new ne(o.path);this.Qt(i,a,Xt.newNoDocument(a,pe.min()))}else at(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=y_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Jp(a.target)){const l=new ne(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Xt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=Ae();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Dd(e,n,this.Ut,this.Lt,i);return this.Lt=Gi(),this.qt=G0(),this.Ut=new xt(ze),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new K0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new xt(ze),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new K0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function G0(){return new kt(ne.comparator)}function Y0(){return new kt(ne.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),tL=(()=>({and:"AND",or:"OR"}))();class nL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iL(t,e){return mh(t,e.toTimestamp())}function yi(t){return at(!!t),pe.fromTimestamp(function(e){const n=Ds(e);return new It(n.seconds,n.nanos)}(t))}function v_(t,e){return function(n){return new it(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dx(t){const e=it.fromString(t);return at(mx(e)),e}function ng(t,e){return v_(t.databaseId,e.path)}function Sf(t,e){const n=dx(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(fx(n))}function ig(t,e){return v_(t.databaseId,e)}function sL(t){const e=dx(t);return e.length===4?it.emptyPath():fx(e)}function sg(t){return new it(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fx(t){return at(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X0(t,e,n){return{name:ng(t,e),fields:n.value.mapValue.fields}}function rL(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(at(c===void 0||typeof c=="string"),rn.fromBase64String(c||"")):(at(c===void 0||c instanceof Uint8Array),rn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:lx(l.code);return new K(c,l.message||"")}(o);n=new ux(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Sf(t,i.document.name),r=yi(i.document.updateTime),o=i.document.createTime?yi(i.document.createTime):pe.min(),a=new gn({mapValue:{fields:i.document.fields}}),l=Xt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Tu(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Sf(t,i.document),r=i.readTime?yi(i.readTime):pe.min(),o=Xt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Sf(t,i.document),r=i.removedTargetIds||[];n=new Tu([],r,s,null)}else{if(!("filter"in e))return ce();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new X6(s),o=i.targetId;n=new cx(o,r)}}return n}function oL(t,e){let n;if(e instanceof hc)n={update:X0(t,e.key,e.value)};else if(e instanceof m_)n={delete:ng(t,e.key)};else if(e instanceof $s)n={update:X0(t,e.key,e.data),updateMask:gL(e.fieldMask)};else{if(!(e instanceof K6))return ce();n={verify:ng(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof ph)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Il)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw ce()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ce()}(t,e.precondition)),n}function aL(t,e){return t&&t.length>0?(at(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?yi(i.updateTime):yi(s);return r.isEqual(pe.min())&&(r=yi(s)),new j6(r,i.transformResults||[])}(n,e))):[]}function lL(t,e){return{documents:[ig(t,e.path)]}}function cL(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=ig(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ig(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return gx(ni.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Jr(u.field),direction:dL(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||xd(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function uL(t){let e=sL(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){at(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=px(u);return h instanceof ni&&zT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Va(Zr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,xd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new fh(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new fh(d,h)}(n.endAt)),M6(e,s,o,r,a,"F",l,c)}function hL(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ce()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function px(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zr(e.unaryFilter.field);return Et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Zr(e.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zr(e.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zr(e.unaryFilter.field);return Et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(e){return Et.create(Zr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ni.create(e.compositeFilter.filters.map(n=>px(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ce()}}(e.compositeFilter.op))}(t):ce()}function dL(t){return Z6[t]}function fL(t){return eL[t]}function pL(t){return tL[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return Jt.fromServerFormat(t.fieldPath)}function gx(t){return t instanceof Et?function(e){if(e.op==="=="){if(U0(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NAN"}};if(F0(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(U0(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NOT_NAN"}};if(F0(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(e.field),op:fL(e.op),value:e.value}}}(t):t instanceof ni?function(e){const n=e.getFilters().map(i=>gx(i));return n.length===1?n[0]:{compositeFilter:{op:pL(e.op),filters:n}}}(t):ce()}function gL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,i,s,r=pe.min(),o=pe.min(),a=rn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.se=e}}function _L(t){const e=uL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.He=new vL}addToCollectionParentIndex(e,n){return this.He.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Rs.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Rs.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class vL{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new xt(it.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bL{constructor(){this.changes=new na(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&za(i.mutation,s,kn.empty(),It.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ae()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ae()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Ia();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ae()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Gi();const o=$a(),a=$a();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof $s)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),za(u.mutation,c,u.mutation.getFieldMask(),It.now())):o.set(c.key,kn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new wL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=$a();let s=new kt((o,a)=>o-a),r=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||kn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||Ae()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=JT();u.forEach(d=>{if(!r.has(d)){const f=ox(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return L.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):L.resolve(lr());let a=-1,l=r;return o.next(c=>L.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ae())).next(u=>({batchId:a,changes:QT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(i=>{let s=Ia();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Ia();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(c,u){return new uc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Xt.newInvalidDocument(c)))});let o=Ia();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&za(c.mutation,l,kn.empty(),It.now()),Sd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:yi(i.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:_L(i.bundledQuery),readTime:yi(i.readTime)}}(n)),L.resolve()}}/**
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
 */class TL{constructor(){this.overlays=new kt(ne.comparator),this.ts=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=lr();return L.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=lr(),r=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new kt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=lr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=lr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return L.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Y6(n,i));let r=this.ts.get(n);r===void 0&&(r=Ae(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.es=new xt(Dt.ns),this.ss=new xt(Dt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new Dt(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new Dt(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new ne(new it([])),i=new Dt(n,e),s=new Dt(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new ne(new it([])),i=new Dt(n,e),s=new Dt(n,e+1);let r=Ae();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Dt(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Dt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return ne.comparator(e.key,n.key)||ze(e.ds,n.ds)}static rs(e,n){return ze(e.ds,n.ds)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new xt(Dt.ns)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G6(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Dt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Dt(n,0),s=new Dt(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new xt(ze);return n.forEach(s=>{const r=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),L.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ne.isDocumentKey(r)||(r=r.child(""));const o=new Dt(new ne(r),0);let a=new xt(ze);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),L.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){at(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return L.forEach(n.mutations,s=>{const r=new Dt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new Dt(n,0),s=this._s.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e){this.Ts=e,this.docs=new kt(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let i=Gi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Xt.newInvalidDocument(s))}),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Gi();const o=n.path,a=new ne(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||g6(p6(u),i)<=0||(s.has(u.key)||Sd(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ce()}Es(e,n){return L.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new kL(this)}getSize(e){return L.resolve(this.size)}}class kL extends bL{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),L.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.persistence=e,this.As=new na(n=>f_(n),p_),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Rs=0,this.vs=new b_,this.targetCount=0,this.bs=Po.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),L.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Po(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Sn(n),L.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(r).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new h_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new SL(this),this.indexManager=new yL,this.remoteDocumentCache=function(i){return new CL(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new mL(n),this.xs=new IL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new xL(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){J("MemoryPersistence","Starting transaction:",e);const s=new RL(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return L.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class RL extends _6{constructor(e){super(),this.currentSequenceNumber=e}}class w_{constructor(e){this.persistence=e,this.$s=new b_,this.Ms=null}static Fs(e){return new w_(e)}get Bs(){if(this.Ms)return this.Ms;throw ce()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),L.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Bs,i=>{const s=ne.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,pe.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return L.or([()=>L.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=Ae(),s=Ae();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new E_(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(z0(n))return L.resolve(null);let i=Ki(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=eg(n,null,"F"),i=Ki(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ae(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,eg(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return z0(n)||s.isEqual(pe.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(O0()<=Ve.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tg(n)),this.Fi(e,o,n,f6(s,-1)))})}$i(e,n){let i=new xt(YT(e));return n.forEach((s,r)=>{Sd(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return O0()<=Ve.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",tg(n)),this.xi.getDocumentsMatchingQuery(e,n,Rs.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new kt(ze),this.qi=new na(r=>f_(r),p_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ML(t,e,n,i){return new OL(t,e,n,i)}async function _x(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Ae();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function PL(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);at(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Ae();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function yx(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function NL(t,e){const n=me(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(rn.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(r,f))});let l=Gi(),c=Ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(LL(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(pe.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return L.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function LL(t,e,n){let i=Ae(),s=Ae();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Gi();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function FL(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function UL(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,L.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new _r(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function rg(t,e,n){const i=me(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cc(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function Q0(t,e,n){const i=me(t);let s=pe.min(),r=Ae();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=me(a),h=u.qi.get(c);return h!==void 0?L.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Ki(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?r:Ae())).next(a=>(BL(i,P6(e),a),{documents:a,Wi:r})))}function BL(t,e,n){let i=t.Ui.get(e)||pe.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class J0{constructor(){this.activeTargetIds=ZT()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VL{constructor(){this.Br=new J0,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new J0,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vc=null;function Af(){return Vc===null?Vc=268435456+Math.round(2147483648*Math.random()):Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class jL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Af(),a=this.ao(e,n);J("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(J("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw hh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ta,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=zL[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Af();return new Promise((o,a)=>{const l=new i6;l.setWithCredentials(!0),l.listenOnce(e6.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case kf.NO_ERROR:const u=l.getResponseJson();J(Wt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case kf.TIMEOUT:J(Wt,`RPC '${e}' ${r} timed out`),a(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case kf.HTTP_ERROR:const h=l.getStatus();if(J(Wt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(g)>=0?g:O.UNKNOWN}(f.status);a(new K(p,f.message))}else a(new K(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(O.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(Wt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);J(Wt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Af(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JN(),a=ZN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new n6({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");J(Wt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new HL({Wr:m=>{d?J(Wt,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(J(Wt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),J(Wt,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},Hr:()=>u.close()}),p=(m,g,_)=>{m.listen(g,v=>{try{_(v)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,Lc.EventType.OPEN,()=>{d||J(Wt,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Lc.EventType.CLOSE,()=>{d||(d=!0,J(Wt,`RPC '${e}' stream ${s} transport closed`),f.so())}),p(u,Lc.EventType.ERROR,m=>{d||(d=!0,hh(Wt,`RPC '${e}' stream ${s} transport errored:`,m),f.so(new K(O.UNAVAILABLE,"The operation could not be completed")))}),p(u,Lc.EventType.MESSAGE,m=>{var g;if(!d){const _=m.data[0];at(!!_);const v=_,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){J(Wt,`RPC '${e}' stream ${s} received error:`,E);const T=E.status;let b=function(k){const C=bt[k];if(C!==void 0)return lx(C)}(T),x=E.message;b===void 0&&(b=O.INTERNAL,x="Unknown error status: "+T+" with message "+E.message),d=!0,f.so(new K(b,x)),u.close()}else J(Wt,`RPC '${e}' stream ${s} received:`,_),f.io(_)}}),p(a,t6.STAT_EVENT,m=>{m.stat===R0.PROXY?J(Wt,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===R0.NOPROXY&&J(Wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function Rf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){return new nL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new vx(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(qi(n.toString()),qi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new K(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WL extends bx{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=rL(this.serializer,e),i=function(s){if(!("targetChange"in s))return pe.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?pe.min():r.readTime?yi(r.readTime):pe.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=sg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=Jp(a)?{documents:lL(s,a)}:{query:cL(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=hx(s,r.resumeToken):r.snapshotVersion.compareTo(pe.min())>0&&(o.readTime=mh(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=hL(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=sg(this.serializer),n.removeTarget=e,this.Fo(n)}}class qL extends bx{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(at(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=aL(e.writeResults,e.commitTime),i=yi(e.commitTime);return this.listener.Zo(i,n)}return at(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=sg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>oL(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(O.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class GL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(qi(n),this.ru=!1):J("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{Vr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l.du.add(4),await fc(l),l.mu.set("Unknown"),l.du.delete(4),await Md(l)}(this))})}),this.mu=new GL(i,s)}}async function Md(t){if(Vr(t))for(const e of t.wu)await e(!0)}async function fc(t){for(const e of t.wu)await e(!1)}function wx(t,e){const n=me(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),x_(n)?T_(n):ia(n).No()&&I_(n,e))}function Ex(t,e){const n=me(t),i=ia(n);n.fu.delete(e),i.No()&&Ix(n,e),n.fu.size===0&&(i.No()?i.$o():Vr(n)&&n.mu.set("Unknown"))}function I_(t,e){t.gu.Ot(e.targetId),ia(t).jo(e)}function Ix(t,e){t.gu.Ot(e),ia(t).Wo(e)}function T_(t){t.gu=new J6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ia(t).start(),t.mu.ou()}function x_(t){return Vr(t)&&!ia(t).xo()&&t.fu.size>0}function Vr(t){return me(t).du.size===0}function Tx(t){t.gu=void 0}async function XL(t){t.fu.forEach((e,n)=>{I_(t,e)})}async function QL(t,e){Tx(t),x_(t)?(t.mu.au(e),T_(t)):t.mu.set("Unknown")}async function JL(t,e,n){if(t.mu.set("Online"),e instanceof ux&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _h(t,i)}else if(e instanceof Tu?t.gu.Kt(e):e instanceof cx?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(pe.min()))try{const i=await yx(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(rn.EMPTY_BYTE_STRING,l.snapshotVersion)),Ix(s,a);const c=new _r(l.target,a,1,l.sequenceNumber);I_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){J("RemoteStore","Failed to raise snapshot:",i),await _h(t,i)}}async function _h(t,e,n){if(!cc(e))throw e;t.du.add(1),await fc(t),t.mu.set("Offline"),n||(n=()=>yx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Md(t)})}function xx(t,e){return e().catch(n=>_h(t,n,e))}async function Pd(t){const e=me(t),n=Os(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ZL(e);)try{const s=await FL(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,e5(e,s)}catch(s){await _h(e,s)}Cx(e)&&kx(e)}function ZL(t){return Vr(t)&&t.lu.length<10}function e5(t,e){t.lu.push(e);const n=Os(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Cx(t){return Vr(t)&&!Os(t).xo()&&t.lu.length>0}function kx(t){Os(t).start()}async function t5(t){Os(t).tu()}async function n5(t){const e=Os(t);for(const n of t.lu)e.Yo(n.mutations)}async function i5(t,e,n){const i=t.lu.shift(),s=__.from(i,e,n);await xx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pd(t)}async function s5(t,e){e&&Os(t).Jo&&await async function(n,i){if(s=i.code,Q6(s)&&s!==O.ABORTED){const r=n.lu.shift();Os(n).Oo(),await xx(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Pd(n)}var s}(t,e),Cx(t)&&kx(t)}async function e1(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const i=Vr(n);n.du.add(3),await fc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Md(n)}async function r5(t,e){const n=me(t);e?(n.du.delete(2),await Md(n)):e||(n.du.add(2),await fc(n),n.mu.set("Unknown"))}function ia(t){return t.yu||(t.yu=function(e,n,i){const s=me(e);return s.nu(),new WL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:XL.bind(null,t),Zr:QL.bind(null,t),zo:JL.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),x_(t)?T_(t):t.mu.set("Unknown")):(await t.yu.stop(),Tx(t))})),t.yu}function Os(t){return t.pu||(t.pu=function(e,n,i){const s=me(e);return s.nu(),new qL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:t5.bind(null,t),Zr:s5.bind(null,t),Xo:n5.bind(null,t),Zo:i5.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Pd(t)):(await t.pu.stop(),t.lu.length>0&&(J("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new C_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k_(t,e){if(qi("AsyncQueue",`${e}: ${t}`),cc(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ne.comparator(n.key,i.key):(n,i)=>ne.comparator(n.key,i.key),this.keyedMap=Ia(),this.sortedSet=new kt(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new go;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.Iu=new kt(ne.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):ce():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class No{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new No(e,n,go.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(){this.Eu=void 0,this.listeners=[]}}class a5{constructor(){this.queries=new na(e=>GT(e),kd),this.onlineState="Unknown",this.Au=new Set}}async function S_(t,e){const n=me(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new o5),s)try{r.Eu=await n.onListen(i)}catch(o){const a=k_(o,`Initialization of query '${tg(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&R_(n)}async function A_(t,e){const n=me(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function l5(t,e){const n=me(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&R_(n)}function c5(t,e,n){const i=me(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function R_(t){t.Au.forEach(e=>{e.next()})}class D_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new No(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.key=e}}class Ax{constructor(e){this.key=e}}class u5{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Ae(),this.mutatedKeys=Ae(),this.Ku=YT(e),this.Gu=new go(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new t1,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Sd(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(i.track({type:3,doc:f}),g=!0):this.Wu(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new No(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new t1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Ae(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new Ax(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new Sx(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=Ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return No.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class h5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class d5{constructor(e){this.key=e,this.ec=!1}}class f5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new na(a=>GT(a),kd),this.ic=new Map,this.rc=new Set,this.oc=new kt(ne.comparator),this.uc=new Map,this.cc=new b_,this.ac={},this.hc=new Map,this.lc=Po.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function p5(t,e){const n=T5(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await UL(n.localStore,Ki(e));n.isPrimaryClient&&wx(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await g5(n,e,i,a==="current",o.resumeToken)}return s}async function g5(t,e,n,i,s){t.dc=(h,d,f)=>async function(p,m,g,_){let v=m.view.zu(g);v.Mi&&(v=await Q0(p.localStore,m.query,!1).then(({documents:b})=>m.view.zu(b,v)));const E=_&&_.targetChanges.get(m.targetId),T=m.view.applyChanges(v,p.isPrimaryClient,E);return i1(p,m.targetId,T.Yu),T.snapshot}(t,h,d,f);const r=await Q0(t.localStore,e,!0),o=new u5(e,r.Wi),a=o.zu(r.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);i1(t,n,c.Yu);const u=new h5(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function m5(t,e){const n=me(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!kd(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await rg(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ex(n.remoteStore,i.targetId),og(n,i.targetId)}).catch(lc)):(og(n,i.targetId),await rg(n.localStore,i.targetId,!0))}async function _5(t,e,n){const i=x5(t);try{const s=await function(r,o){const a=me(r),l=It.now(),c=o.reduce((d,f)=>d.add(f.key),Ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Gi(),p=Ae();return a.Ki.getEntries(d,c).next(m=>{f=m,f.forEach((g,_)=>{_.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const g=[];for(const _ of o){const v=q6(_,u.get(_.key).overlayedDocument);v!=null&&g.push(new $s(_.key,v,BT(v.value.mapValue),ei.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:QT(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new kt(ze)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await pc(i,s.changes),await Pd(i.remoteStore)}catch(s){const r=k_(s,"Failed to persist write");n.reject(r)}}async function Rx(t,e){const n=me(t);try{const i=await NL(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?at(o.ec):s.removedDocuments.size>0&&(at(o.ec),o.ec=!1))}),await pc(n,i,e)}catch(i){await lc(i)}}function n1(t,e,n){const i=me(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=me(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&R_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function y5(t,e,n){const i=me(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new kt(ne.comparator);o=o.insert(r,Xt.newNoDocument(r,pe.min()));const a=Ae().add(r),l=new Dd(pe.min(),new Map,new xt(ze),o,a);await Rx(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),O_(i)}else await rg(i.localStore,e,!1).then(()=>og(i,e,n)).catch(lc)}async function v5(t,e){const n=me(t),i=e.batch.batchId;try{const s=await PL(n.localStore,e);Ox(n,i,null),Dx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await pc(n,s)}catch(s){await lc(s)}}async function b5(t,e,n){const i=me(t);try{const s=await function(r,o){const a=me(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(at(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);Ox(i,e,n),Dx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await pc(i,s)}catch(s){await lc(s)}}function Dx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Ox(t,e,n){const i=me(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function og(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||Mx(t,i)})}function Mx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ex(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),O_(t))}function i1(t,e,n){for(const i of n)i instanceof Sx?(t.cc.addReference(i.key,e),w5(t,i)):i instanceof Ax?(J("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||Mx(t,i.key)):ce()}function w5(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(J("SyncEngine","New document in limbo: "+n),t.rc.add(i),O_(t))}function O_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ne(it.fromString(e)),i=t.lc.next();t.uc.set(i,new d5(n)),t.oc=t.oc.insert(n,i),wx(t.remoteStore,new _r(Ki(Cd(n.path)),i,2,h_.ct))}}async function pc(t,e,n){const i=me(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=E_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(l,h=>L.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>L.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!cc(u))throw u;J("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function E5(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const i=await _x(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(O.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await pc(n,i.Qi)}}function I5(t,e){const n=me(t),i=n.uc.get(e);if(i&&i.ec)return Ae().add(i.key);{let s=Ae();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function T5(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y5.bind(null,e),e.nc.zo=l5.bind(null,e.eventManager),e.nc.wc=c5.bind(null,e.eventManager),e}function x5(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b5.bind(null,e),e}class s1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Od(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ML(this.persistence,new DL,e.initialUser,this.serializer)}createPersistence(e){return new AL(w_.Fs,this.serializer)}createSharedClientState(e){return new VL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class C5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>n1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=E5.bind(null,this.syncEngine),await r5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a5}createDatastore(e){const n=Od(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new jL(s));var s;return function(r,o,a,l){return new KL(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>n1(this.syncEngine,a,0),o=Z0.D()?new Z0:new $L,new YL(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new f5(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);J("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class M_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):qi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=NT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{J("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(J("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=k_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Df(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await _x(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A5(t);J("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>e1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>e1(e.remoteStore,r)),t._onlineComponents=e}function S5(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function A5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!S5(n))throw n;hh("Error using user provided cache. Falling back to memory cache: "+n),await Df(t,new s1)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Df(t,new s1);return t._offlineComponents}async function Px(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await r1(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await r1(t,new C5))),t._onlineComponents}function R5(t){return Px(t).then(e=>e.syncEngine)}async function yh(t){const e=await Px(t),n=e.eventManager;return n.onListen=p5.bind(null,e.syncEngine),n.onUnlisten=m5.bind(null,e.syncEngine),n}function D5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new M_({next:h=>{r.enqueueAndForget(()=>A_(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new D_(Cd(o.path),c,{includeMetadataChanges:!0,xu:!0});return S_(s,u)}(await yh(t),t.asyncQueue,e,n,i)),i.promise}function O5(t,e,n={}){const i=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new M_({next:h=>{r.enqueueAndForget(()=>A_(s,u)),h.fromCache&&a.source==="server"?l.reject(new K(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new D_(o,c,{includeMetadataChanges:!0,xu:!0});return S_(s,u)}(await yh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M5(t,e,n,i){if(e===!0&&i===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function a1(t){if(!ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l1(t){if(ne.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nd(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,M5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s6;switch(n.type){case"firstParty":return new l6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=o1.get(e);n&&(J("ComponentProvider","Removing Datastore"),o1.delete(e),n.terminate())}(this),Promise.resolve()}}function P5(t,e,n,i={}){var s;const r=(t=Rn(t,Ld))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&hh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Kt.MOCK_USER;else{o=yR(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new r6(new PT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class $r{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class xs extends $r{constructor(e,n,i){super(e,n,Cd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new ne(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function On(t,e,...n){if(t=$t(t),Nx("collection","path",e),t instanceof Ld){const i=it.fromString(e,...n);return l1(i),new xs(t,null,i)}{if(!(t instanceof nn||t instanceof xs))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(it.fromString(e,...n));return l1(i),new xs(t.firestore,null,i)}}function ge(t,e,...n){if(t=$t(t),arguments.length===1&&(e=NT.A()),Nx("doc","path",e),t instanceof Ld){const i=it.fromString(e,...n);return a1(i),new nn(t,null,new ne(i))}{if(!(t instanceof nn||t instanceof xs))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(it.fromString(e,...n));return a1(i),new nn(t.firestore,t instanceof xs?t.converter:null,new ne(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new vx(this,"async_queue_retry"),this.qc=()=>{const n=Rf();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Rf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Rf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new zi;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!cc(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw qi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=C_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&ce()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function u1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ms extends Ld{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new N5,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lx(this),this._firestoreClient.terminate()}}function L5(t,e){const n=typeof t=="object"?t:hm(),i=typeof t=="string"?t:e||"(default)",s=um(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=mR("firestore");r&&P5(s,...r)}return s}function Fd(t){return t._firestoreClient||Lx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lx(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new w6(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new k5(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(rn.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lo(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5=/^__.*__$/;class U5{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new hc(e,this.data,n,this.fieldTransforms)}}class Fx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new $s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ux(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class N_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new N_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return vh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Ux(this.Yc)&&F5.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class B5{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Od(e)}ua(e,n,i,s=!1){return new N_({Yc:e,methodName:n,oa:i,path:Jt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(t){const e=t._freezeSettings(),n=Od(t._databaseId);return new B5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V5(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);F_("Data must be an object, but it was:",o,i);const a=Bx(i,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ag(e,h,n);if(!o.contains(d))throw new K(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$x(u,d)||u.push(d)}l=new kn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new U5(new gn(a),l,c)}class Vd extends P_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vd}}function $5(t,e,n,i){const s=t.ua(1,e,n);F_("Data must be an object, but it was:",s,i);const r=[],o=gn.empty();Br(i,(l,c)=>{const u=U_(e,l,n);c=$t(c);const h=s.na(u);if(c instanceof Vd)r.push(u);else{const d=gc(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new kn(r);return new Fx(o,a,s.fieldTransforms)}function z5(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[ag(e,i,n)],l=[s];if(r.length%2!=0)throw new K(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ag(e,r[d])),l.push(r[d+1]);const c=[],u=gn.empty();for(let d=a.length-1;d>=0;--d)if(!$x(c,a[d])){const f=a[d];let p=l[d];p=$t(p);const m=o.na(f);if(p instanceof Vd)c.push(f);else{const g=gc(p,m);g!=null&&(c.push(f),u.set(f,g))}}const h=new kn(c);return new Fx(u,h,o.fieldTransforms)}function H5(t,e,n,i=!1){return gc(n,t.ua(i?4:3,e))}function gc(t,e){if(Vx(t=$t(t)))return F_("Unsupported field value:",e,t),Bx(t,e);if(t instanceof P_)return function(n,i){if(!Ux(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=gc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return V6(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=It.fromDate(n);return{timestampValue:mh(i.serializer,s)}}if(n instanceof It){const s=new It(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mh(i.serializer,s)}}if(n instanceof Bd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lo)return{bytesValue:hx(i.serializer,n._byteString)};if(n instanceof nn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:v_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Nd(n)}`)}(t,e)}function Bx(t,e){const n={};return LT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(i,s)=>{const r=gc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Vx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof Bd||t instanceof Lo||t instanceof nn||t instanceof P_)}function F_(t,e,n){if(!Vx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Nd(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function ag(t,e,n){if((e=$t(e))instanceof Ud)return e._internalPath;if(typeof e=="string")return U_(t,e);throw vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const j5=new RegExp("[~\\*/\\[\\]]");function U_(t,e,n){if(e.search(j5)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ud(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new K(O.INVALID_ARGUMENT,a+t+l)}function $x(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(B_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W5 extends zx{data(){return super.data()}}function B_(t,e){return typeof e=="string"?U_(t,e):e instanceof Ud?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class V_{}class q5 extends V_{}function Of(t,e,...n){let i=[];e instanceof V_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof $_).length,o=s.filter(a=>a instanceof $d).length;if(r>1||r>0&&o>0)throw new K(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class $d extends q5{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new $d(e,n,i)}_apply(e){const n=this._parse(e);return jx(e._query,n),new $r(e.firestore,e.converter,Zp(e._query,n))}_parse(e){const n=L_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new K(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){d1(u,c);const d=[];for(const f of u)d.push(h1(a,s,f));h={arrayValue:{values:d}}}else h=h1(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||d1(u,c),h=H5(o,r,u,c==="in"||c==="not-in");return Et.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Mf(t,e,n){const i=e,s=B_("where",t);return $d._create(s,i,n)}class $_ extends V_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ni.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)jx(r,a),r=Zp(r,a)}(e._query,n),new $r(e.firestore,e.converter,Zp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function h1(t,e,n){if(typeof(n=$t(n))=="string"){if(n==="")throw new K(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KT(e)&&n.indexOf("/")!==-1)throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(it.fromString(n));if(!ne.isDocumentKey(i))throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return L0(t,new ne(i))}if(n instanceof nn)return L0(t,n._key);throw new K(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nd(n)}.`)}function d1(t,e){if(!Array.isArray(t)||t.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jx(t,e){if(e.isInequality()){const i=g_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new K(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=qT(t);r!==null&&K5(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function K5(t,e,n){if(!n.isEqual(e))throw new K(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class G5{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Do(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){const i={};return Br(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Bd(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=UT(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const n=Ds(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=it.fromString(e);at(mx(i));const s=new wl(i.get(1),i.get(3)),r=new ne(i.popFirst(5));return s.isEqual(n)||qi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y5(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wx extends zx{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(B_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class xu extends Wx{data(e={}){return super.data(e)}}class qx{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ta(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new xu(this._firestore,this._userDataWriter,i.key,i,new Ta(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new xu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ta(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new xu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ta(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:X5(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function X5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){t=Rn(t,nn);const e=Rn(t.firestore,Ms);return D5(Fd(e),t._key).then(n=>Kx(e,t,n))}class H_ extends G5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function Q5(t){t=Rn(t,$r);const e=Rn(t.firestore,Ms),n=Fd(e),i=new H_(e);return Hx(t._query),O5(n,t._query).then(s=>new qx(e,i,t,s))}function gs(t,e,n){t=Rn(t,nn);const i=Rn(t.firestore,Ms),s=Y5(t.converter,e,n);return W_(i,[V5(L_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ei.none())])}function Bt(t,e,n,...i){t=Rn(t,nn);const s=Rn(t.firestore,Ms),r=L_(s);let o;return o=typeof(e=$t(e))=="string"||e instanceof Ud?z5(r,"updateDoc",t._key,e,n,i):$5(r,"updateDoc",t._key,e),W_(s,[o.toMutation(t._key,ei.exists(!0))])}function J5(t){return W_(Rn(t.firestore,Ms),[new m_(t._key,ei.none())])}function j_(t,...e){var n,i,s;t=$t(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||u1(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(u1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof nn)c=Rn(t.firestore,Ms),u=Cd(t._key.path),l={next:h=>{e[o]&&e[o](Kx(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rn(t,$r);c=Rn(h.firestore,Ms),u=h._query;const d=new H_(c);l={next:f=>{e[o]&&e[o](new qx(c,d,h,f))},error:e[o+1],complete:e[o+2]},Hx(t._query)}return function(h,d,f,p){const m=new M_(p),g=new D_(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>S_(await yh(h),g)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>A_(await yh(h),g))}}(Fd(c),u,a,l)}function W_(t,e){return function(n,i){const s=new zi;return n.asyncQueue.enqueueAndForget(async()=>_5(await R5(n),i,s)),s.promise}(Fd(t),e)}function Kx(t,e,n){const i=n.docs.get(e._key),s=new H_(t);return new Wx(t,s,e._key,i,new Ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ta=n})(Us),bi(new ti("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ms(new o6(n.getProvider("auth-internal")),new u6(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Sn(D0,"3.10.1",t),Sn(D0,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="firebasestorage.googleapis.com",Z5="storageBucket",e8=2*60*1e3,t8=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends xi{constructor(e,n,i=0){super(Pf(e),`Firebase Storage: ${n} (${Pf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ci.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ti;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ti||(Ti={}));function Pf(t){return"storage/"+t}function n8(){const t="An unknown error occurred, please check the error payload for server response.";return new Ci(Ti.UNKNOWN,t)}function i8(){return new Ci(Ti.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function s8(){return new Ci(Ti.CANCELED,"User canceled the upload/download.")}function r8(t){return new Ci(Ti.INVALID_URL,"Invalid URL '"+t+"'.")}function o8(t){return new Ci(Ti.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f1(t){return new Ci(Ti.INVALID_ARGUMENT,t)}function Yx(){return new Ci(Ti.APP_DELETED,"The Firebase app was deleted.")}function a8(t){return new Ci(Ti.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Yn.makeFromUrl(e,n)}catch{return new Yn(e,"")}if(i.path==="")return i;throw o8(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},m=n===Gx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp(`^https?://${m}/${s}/${g}`,"i"),E=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<E.length;T++){const b=E[T],x=b.regex.exec(e);if(x){const k=x[b.indices.bucket];let C=x[b.indices.path];C||(C=""),i=new Yn(k,C),b.postModify(i);break}}if(i==null)throw r8(e);return i}}class l8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c8(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,t(f,l())},g)}function d(){r&&clearTimeout(r)}function f(g,..._){if(c){d();return}if(g){d(),u.call(null,g,..._);return}if(l()||o){d(),u.call(null,g,..._);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,h(E)}let p=!1;function m(g){p||(p=!0,d(),!c&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function u8(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h8(t){return t!==void 0}function p1(t,e,n,i){if(i<e)throw f1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw f1(`Invalid value for '${t}'. Expected ${n} or less.`)}function d8(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function f8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p8{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new $c(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===bh.NO_ERROR,l=r.getStatus();if(!a||f8(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===bh.ABORT;i(!1,new $c(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new $c(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());h8(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=n8();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Yx():s8();o(l)}else{const l=i8();o(l)}};this.canceled_?n(!1,new $c(!1,null,!0)):this.backoffId_=c8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&u8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $c{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function g8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function m8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function y8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function v8(t,e,n,i,s,r,o=!0){const a=d8(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return _8(c,e),g8(c,n),m8(c,r),y8(c,i),new p8(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function w8(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this._service=e,n instanceof Yn?this._location=n:this._location=Yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wh(e,n)}get root(){const e=new Yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w8(this._location.path)}get storage(){return this._service}get parent(){const e=b8(this._location.path);if(e===null)return null;const n=new Yn(this._location.bucket,e);return new wh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw a8(e)}}function g1(t,e){const n=e==null?void 0:e[Z5];return n==null?null:Yn.makeFromBucketSpec(n,t)}class E8{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Gx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=e8,this._maxUploadRetryTime=t8,this._requests=new Set,s!=null?this._bucket=Yn.makeFromBucketSpec(s,this._host):this._bucket=g1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yn.makeFromBucketSpec(this._url,e):this._bucket=g1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new l8(Yx());{const o=v8(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const m1="@firebase/storage",_1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I8="storage";function T8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new E8(n,i,s,e,Us)}function x8(){bi(new ti(I8,T8,"PUBLIC").setMultipleInstances(!0)),Sn(m1,_1,""),Sn(m1,_1,"esm2017")}x8();const Nf=new WeakMap;function Xx(t,e){return Nf.has(e)||Nf.set(e,t||{f:{},r:{},s:{},u:{}}),Nf.get(e)}function C8(t,e,n,i){if(!t)return n;const[s,r]=Qx(t);if(!s)return n;const o=Xx(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function k8(t,e,n,i){if(!t)return;const[s,r]=Qx(t);if(!s)return;const o=Xx(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(fi),a}function Qx(t){return d4(t)||f4(t)?["f",t.path]:p4(t)?["r",t.toString()]:g4(t)?["s",t.toString()]:[]}const Lf=new WeakMap;function S8(t,e,n){const i=vE();Lf.has(i)||Lf.set(i,new Map);const s=Lf.get(i),r=k8(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):fi}const A8={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function lg(t,e,n,i){if(!h4(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const p=Object.getOwnPropertyDescriptor(a,f);p&&!p.enumerable&&Object.defineProperty(h,f,p)});for(const f in a){const p=a[f];if(p==null||p instanceof Date||p instanceof It||p instanceof Bd)h[f]=p;else if(wm(p)){const m=c+f;h[f]=m in n?l[f]:p.path,d[m]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[f]=Array(p.length);for(let m=0;m<p.length;m++){const g=p[m];g&&g.path in r&&(h[f][m]=r[g.path])}o(p,l[f]||h[f],c+f+".",[h[f],d])}else Nr(p)?(h[f]={},o(p,l[f],c+f+".",[h[f],d])):h[f]=p}}return o(t,e,"",s),s}const q_={reset:!1,wait:!0,maxRefDepth:2,converter:A8,snapshotOptions:{serverTimestamps:"estimate"}};function Eh(t){for(const e in t)t[e].unsub()}function cg(t,e,n,i,s,r,o,a,l){const[c,u]=lg(i.data(t.snapshotOptions),bm(e,n),s,t);r.set(e,n,c),ug(t,e,n,s,u,r,o,a,l)}function R8({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=fi;return a.once?z_(t).then(u=>{u.exists()?cg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=j_(t,u=>{u.exists()?cg(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Eh(l)}}function ug(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(m=>c.indexOf(m)<0).forEach(m=>{i[m].unsub(),delete i[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function p(m){m in f&&++h>=d&&a(n)}c.forEach(m=>{const g=i[m],_=s[m],v=`${n}.${m}`;if(f[v]=!0,g)if(g.path!==_.path)g.unsub();else return;i[m]={data:()=>bm(e,v),unsub:R8({ref:_,target:e,path:v,depth:o,ops:r,resolve:p.bind(null,v),reject:l},t),path:_.path}})}function D8(t,e,n,i,s,r){const o=Object.assign({},q_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=yt(c?[]:t.value);c||n.set(t,h,[]);const f=i;let p,m=fi;const g=[],_={added:({newIndex:E,doc:T})=>{g.splice(E,0,Object.create(null));const b=g[E],[x,k]=lg(T.data(l),void 0,b,o);n.add(w(d),E,x),ug(o,d,`${h}.${E}`,b,k,n,0,i.bind(null,T),s)},modified:({oldIndex:E,newIndex:T,doc:b})=>{const x=w(d),k=g[E],C=x[E],[F,Z]=lg(b.data(l),C,k,o);g.splice(T,0,k),n.remove(x,E),n.add(x,T,F),ug(o,d,`${h}.${T}`,k,Z,n,0,i,s)},removed:({oldIndex:E})=>{const T=w(d);n.remove(T,E),Eh(g.splice(E,1)[0])}};function v(E){const T=E.docChanges(a);if(!p&&T.length){p=!0;let b=0;const x=T.length,k=Object.create(null);for(let C=0;C<x;C++)k[T[C].doc.id]=!0;i=C=>{C&&C.id in k&&++b>=x&&(c&&(n.set(t,h,w(d)),d=t),f(w(d)),i=fi)}}T.forEach(b=>{_[b.type](b)}),T.length||(c&&(n.set(t,h,w(d)),d=t),i(w(d)))}return u?Q5(e).then(v).catch(s):m=j_(e,v,s),E=>{if(m(),E){const T=typeof E=="function"?E():[];n.set(t,h,T)}g.forEach(Eh)}}function O8(t,e,n,i,s,r){const o=Object.assign({},q_,r),a="value",l=Object.create(null);i=m4(i,()=>bm(t,a));let c=fi;function u(h){h.exists()?cg(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?z_(e).then(u).catch(s):c=j_(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Eh(l)}}function M8(t,e){let n=fi;const i=Object.assign({},q_,e),s=w(t),r=i.target||yt();_4()&&(i.once=!0);const o=C8(s,i.ssrKey,r.value,vE());r.value=o;let l=!(bE(s)?(o||[]).length>0:o!==void 0);const c=yt(!1),u=yt(),h=Wh(),d=Hg();let f=fi;function p(){let _=w(t);const v=new Promise((E,T)=>{if(n(i.reset),!_)return n=fi,E(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(wm(_)?O8:D8)(r,_,P8,E,T,i)}).catch(E=>(h.value===v&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===v&&(c.value=!1)});h.value=v}let m=fi;dt(t)&&(m=ws(t,p)),p(),s&&(f=S8(h.value,s,i.ssrKey)),$l()&&t2(()=>h.value),d&&kw(g);function g(_=i.reset){m(),f(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>g}})}const P8={set:(t,e,n)=>c4(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function rt(t,e){return M8(t,e)}function N8(t,{firebaseApp:e,modules:n=[]}){t.provide(yE,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const eo=typeof window<"u";function L8(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const je=Object.assign;function Ff(t,e){const n={};for(const i in e){const s=e[i];n[i]=ii(s)?s.map(t):t(s)}return n}const Ha=()=>{},ii=Array.isArray,F8=/\/$/,U8=t=>t.replace(F8,"");function Uf(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=z8(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function B8(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function y1(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function V8(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Fo(e.matched[i],n.matched[s])&&Jx(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jx(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$8(t[n],e[n]))return!1;return!0}function $8(t,e){return ii(t)?v1(t,e):ii(e)?v1(e,t):t===e}function v1(t,e){return ii(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function z8(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var xl;(function(t){t.pop="pop",t.push="push"})(xl||(xl={}));var ja;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ja||(ja={}));function H8(t){if(!t)if(eo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),U8(t)}const j8=/^[^#]+#/;function W8(t,e){return t.replace(j8,"#")+e}function q8(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const zd=()=>({left:window.pageXOffset,top:window.pageYOffset});function K8(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=q8(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function b1(t,e){return(history.state?history.state.position-e:-1)+t}const hg=new Map;function G8(t,e){hg.set(t,e)}function Y8(t){const e=hg.get(t);return hg.delete(t),e}let X8=()=>location.protocol+"//"+location.host;function Zx(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),y1(l,"")}return y1(n,t)+i+s}function Q8(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=Zx(t,location),p=n.value,m=e.value;let g=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}g=m?d.position-m.position:0}else i(f);s.forEach(_=>{_(n.value,p,{delta:g,type:xl.pop,direction:g?g>0?ja.forward:ja.back:ja.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(je({},d.state,{scroll:zd()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function w1(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?zd():null}}function J8(t){const{history:e,location:n}=window,i={value:Zx(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:X8()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=je({},e.state,w1(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=je({},s.value,e.state,{forward:l,scroll:zd()});r(u.current,u,!0);const h=je({},w1(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Z8(t){t=H8(t);const e=J8(t),n=Q8(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=je({location:"",base:t,go:i,createHref:W8.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eF(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Z8(t)}function tF(t){return typeof t=="string"||t&&typeof t=="object"}function eC(t){return typeof t=="string"||typeof t=="symbol"}const rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tC=Symbol("");var E1;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(E1||(E1={}));function Uo(t,e){return je(new Error,{type:t,[tC]:!0},e)}function ki(t,e){return t instanceof Error&&tC in t&&(e==null||!!(t.type&e))}const I1="[^/]+?",nF={sensitive:!1,strict:!1,start:!0,end:!0},iF=/[.+*?^${}()[\]/\\]/g;function sF(t,e){const n=je({},nF,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(iF,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:g,regexp:_}=d;r.push({name:p,repeatable:m,optional:g});const v=_||I1;if(v!==I1){f+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+T.message)}}let E=m?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(E=g&&c.length<2?`(?:/${E})`:"/"+E),g&&(E+="?"),s+=E,f+=20,g&&(f+=-8),m&&(f+=-20),v===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:g}=f,_=p in c?c[p]:"";if(ii(_)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=ii(_)?_.join("/"):_;if(!v)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function rF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oF(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=rF(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(T1(i))return 1;if(T1(s))return-1}return s.length-i.length}function T1(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aF={type:0,value:""},lF=/[a-zA-Z0-9_]/;function cF(t){if(!t)return[[]];if(t==="/")return[[aF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:lF.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function uF(t,e,n){const i=sF(cF(t.path),n),s=je(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hF(t,e){const n=[],i=new Map;e=k1({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,p=dF(u);p.aliasOf=d&&d.record;const m=k1(e,u),g=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)g.push(je({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let _,v;for(const E of g){const{path:T}=E;if(h&&T[0]!=="/"){const b=h.record.path,x=b[b.length-1]==="/"?"":"/";E.path=h.record.path+(T&&x+T)}if(_=uF(E,h,m),d?d.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),f&&u.name&&!C1(_)&&o(u.name)),p.children){const b=p.children;for(let x=0;x<b.length;x++)r(b[x],_,d&&d.children[x])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:Ha}function o(u){if(eC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&oF(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!C1(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},p,m;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Uo(1,{location:u});m=d.record.name,f=je(x1(h.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&x1(u.params,d.keys.map(v=>v.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(v=>v.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!d)throw Uo(1,{location:u,currentLocation:h});m=d.record.name,f=je({},h.params,u.params),p=d.stringify(f)}const g=[];let _=d;for(;_;)g.unshift(_.record),_=_.parent;return{name:m,path:p,params:f,matched:g,meta:pF(g)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function x1(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function C1(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pF(t){return t.reduce((e,n)=>je(e,n.meta),{})}function k1(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function nC(t,e){return e.children.some(n=>n===t||nC(t,n))}const iC=/#/g,gF=/&/g,mF=/\//g,_F=/=/g,yF=/\?/g,sC=/\+/g,vF=/%5B/g,bF=/%5D/g,rC=/%5E/g,wF=/%60/g,oC=/%7B/g,EF=/%7C/g,aC=/%7D/g,IF=/%20/g;function K_(t){return encodeURI(""+t).replace(EF,"|").replace(vF,"[").replace(bF,"]")}function TF(t){return K_(t).replace(oC,"{").replace(aC,"}").replace(rC,"^")}function dg(t){return K_(t).replace(sC,"%2B").replace(IF,"+").replace(iC,"%23").replace(gF,"%26").replace(wF,"`").replace(oC,"{").replace(aC,"}").replace(rC,"^")}function xF(t){return dg(t).replace(_F,"%3D")}function CF(t){return K_(t).replace(iC,"%23").replace(yF,"%3F")}function kF(t){return t==null?"":CF(t).replace(mF,"%2F")}function Ih(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SF(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(sC," "),o=r.indexOf("="),a=Ih(o<0?r:r.slice(0,o)),l=o<0?null:Ih(r.slice(o+1));if(a in e){let c=e[a];ii(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function S1(t){let e="";for(let n in t){const i=t[n];if(n=xF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ii(i)?i.map(r=>r&&dg(r)):[i&&dg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AF(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ii(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const RF=Symbol(""),A1=Symbol(""),Hd=Symbol(""),G_=Symbol(""),fg=Symbol("");function fa(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function us(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Uo(4,{from:n,to:e})):h instanceof Error?a(h):tF(h)?a(Uo(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bf(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(DF(a)){const c=(a.__vccOpts||a)[e];c&&s.push(us(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=L8(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&us(d,n,i,r,o)()}))}}return s}function DF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function R1(t){const e=vn(Hd),n=vn(G_),i=Se(()=>e.resolve(w(t.to))),s=Se(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Fo.bind(null,u));if(d>-1)return d;const f=D1(l[c-2]);return c>1&&D1(u)===f&&h[h.length-1].path!==f?h.findIndex(Fo.bind(null,l[c-2])):d}),r=Se(()=>s.value>-1&&NF(n.params,i.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Jx(n.params,i.value.params));function a(l={}){return PF(l)?e[w(t.replace)?"replace":"push"](w(t.to)).catch(Ha):Promise.resolve()}return{route:i,href:Se(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const OF=Pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:R1,setup(t,{slots:e}){const n=Ss(R1(t)),{options:i}=vn(Hd),s=Se(()=>({[O1(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[O1(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:qo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),MF=OF;function PF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NF(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ii(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function D1(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const O1=(t,e,n)=>t??e??n,LF=Pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=vn(fg),s=Se(()=>t.route||i.value),r=vn(A1,0),o=Se(()=>{let c=w(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Se(()=>s.value.matched[o.value]);pu(A1,Se(()=>o.value+1)),pu(RF,a),pu(fg,s);const l=yt();return ws(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Fo(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return M1(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,g=qo(d,je({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return M1(n.default,{Component:g,route:c})||g}}});function M1(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const FF=LF;function UF(t){const e=hF(t.routes,t),n=t.parseQuery||SF,i=t.stringifyQuery||S1,s=t.history,r=fa(),o=fa(),a=fa(),l=Wh(rs);let c=rs;eo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ff.bind(null,D=>""+D),h=Ff.bind(null,kF),d=Ff.bind(null,Ih);function f(D,H){let j,te;return eC(D)?(j=e.getRecordMatcher(D),te=H):te=D,e.addRoute(te,j)}function p(D){const H=e.getRecordMatcher(D);H&&e.removeRoute(H)}function m(){return e.getRoutes().map(D=>D.record)}function g(D){return!!e.getRecordMatcher(D)}function _(D,H){if(H=je({},H||l.value),typeof D=="string"){const y=Uf(n,D,H.path),I=e.resolve({path:y.path},H),A=s.createHref(y.fullPath);return je(y,I,{params:d(I.params),hash:Ih(y.hash),redirectedFrom:void 0,href:A})}let j;if("path"in D)j=je({},D,{path:Uf(n,D.path,H.path).path});else{const y=je({},D.params);for(const I in y)y[I]==null&&delete y[I];j=je({},D,{params:h(D.params)}),H.params=h(H.params)}const te=e.resolve(j,H),Fe=D.hash||"";te.params=u(d(te.params));const ut=B8(i,je({},D,{hash:TF(Fe),path:te.path})),xe=s.createHref(ut);return je({fullPath:ut,hash:Fe,query:i===S1?AF(D.query):D.query||{}},te,{redirectedFrom:void 0,href:xe})}function v(D){return typeof D=="string"?Uf(n,D,l.value.path):je({},D)}function E(D,H){if(c!==D)return Uo(8,{from:H,to:D})}function T(D){return k(D)}function b(D){return T(je(v(D),{replace:!0}))}function x(D){const H=D.matched[D.matched.length-1];if(H&&H.redirect){const{redirect:j}=H;let te=typeof j=="function"?j(D):j;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=v(te):{path:te},te.params={}),je({query:D.query,hash:D.hash,params:"path"in te?{}:D.params},te)}}function k(D,H){const j=c=_(D),te=l.value,Fe=D.state,ut=D.force,xe=D.replace===!0,y=x(j);if(y)return k(je(v(y),{state:typeof y=="object"?je({},Fe,y.state):Fe,force:ut,replace:xe}),H||j);const I=j;I.redirectedFrom=H;let A;return!ut&&V8(i,te,j)&&(A=Uo(16,{to:I,from:te}),hn(te,te,!0,!1)),(A?Promise.resolve(A):F(I,te)).catch(R=>ki(R)?ki(R,2)?R:Ht(R):we(R,I,te)).then(R=>{if(R){if(ki(R,2))return k(je({replace:xe},v(R.to),{state:typeof R.to=="object"?je({},Fe,R.to.state):Fe,force:ut}),H||I)}else R=ee(I,te,!0,xe,Fe);return Z(I,te,R),R})}function C(D,H){const j=E(D,H);return j?Promise.reject(j):Promise.resolve()}function F(D,H){let j;const[te,Fe,ut]=BF(D,H);j=Bf(te.reverse(),"beforeRouteLeave",D,H);for(const y of te)y.leaveGuards.forEach(I=>{j.push(us(I,D,H))});const xe=C.bind(null,D,H);return j.push(xe),Yr(j).then(()=>{j=[];for(const y of r.list())j.push(us(y,D,H));return j.push(xe),Yr(j)}).then(()=>{j=Bf(Fe,"beforeRouteUpdate",D,H);for(const y of Fe)y.updateGuards.forEach(I=>{j.push(us(I,D,H))});return j.push(xe),Yr(j)}).then(()=>{j=[];for(const y of D.matched)if(y.beforeEnter&&!H.matched.includes(y))if(ii(y.beforeEnter))for(const I of y.beforeEnter)j.push(us(I,D,H));else j.push(us(y.beforeEnter,D,H));return j.push(xe),Yr(j)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),j=Bf(ut,"beforeRouteEnter",D,H),j.push(xe),Yr(j))).then(()=>{j=[];for(const y of o.list())j.push(us(y,D,H));return j.push(xe),Yr(j)}).catch(y=>ki(y,8)?y:Promise.reject(y))}function Z(D,H,j){for(const te of a.list())te(D,H,j)}function ee(D,H,j,te,Fe){const ut=E(D,H);if(ut)return ut;const xe=H===rs,y=eo?history.state:{};j&&(te||xe?s.replace(D.fullPath,je({scroll:xe&&y&&y.scroll},Fe)):s.push(D.fullPath,Fe)),l.value=D,hn(D,H,j,xe),Ht()}let ae;function ye(){ae||(ae=s.listen((D,H,j)=>{if(!ri.listening)return;const te=_(D),Fe=x(te);if(Fe){k(je(Fe,{replace:!0}),te).catch(Ha);return}c=te;const ut=l.value;eo&&G8(b1(ut.fullPath,j.delta),zd()),F(te,ut).catch(xe=>ki(xe,12)?xe:ki(xe,2)?(k(xe.to,te).then(y=>{ki(y,20)&&!j.delta&&j.type===xl.pop&&s.go(-1,!1)}).catch(Ha),Promise.reject()):(j.delta&&s.go(-j.delta,!1),we(xe,te,ut))).then(xe=>{xe=xe||ee(te,ut,!1),xe&&(j.delta&&!ki(xe,8)?s.go(-j.delta,!1):j.type===xl.pop&&ki(xe,20)&&s.go(-1,!1)),Z(te,ut,xe)}).catch(Ha)}))}let Ye=fa(),ve=fa(),Te;function we(D,H,j){Ht(D);const te=ve.list();return te.length?te.forEach(Fe=>Fe(D,H,j)):console.error(D),Promise.reject(D)}function Le(){return Te&&l.value!==rs?Promise.resolve():new Promise((D,H)=>{Ye.add([D,H])})}function Ht(D){return Te||(Te=!D,ye(),Ye.list().forEach(([H,j])=>D?j(D):H()),Ye.reset()),D}function hn(D,H,j,te){const{scrollBehavior:Fe}=t;if(!eo||!Fe)return Promise.resolve();const ut=!j&&Y8(b1(D.fullPath,0))||(te||!j)&&history.state&&history.state.scroll||null;return Jg().then(()=>Fe(D,H,ut)).then(xe=>xe&&K8(xe)).catch(xe=>we(xe,D,H))}const jt=D=>s.go(D);let mt;const Pn=new Set,ri={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:g,getRoutes:m,resolve:_,options:t,push:T,replace:b,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:Le,install(D){const H=this;D.component("RouterLink",MF),D.component("RouterView",FF),D.config.globalProperties.$router=H,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>w(l)}),eo&&!mt&&l.value===rs&&(mt=!0,T(s.location).catch(Fe=>{}));const j={};for(const Fe in rs)j[Fe]=Se(()=>l.value[Fe]);D.provide(Hd,H),D.provide(G_,Ss(j)),D.provide(fg,l);const te=D.unmount;Pn.add(D),D.unmount=function(){Pn.delete(D),Pn.size<1&&(c=rs,ae&&ae(),ae=null,l.value=rs,mt=!1,Te=!1),te()}}};return ri}function Yr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BF(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Fo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Fo(c,l))||s.push(l))}return[n,i,s]}function jd(){return vn(Hd)}function zr(){return vn(G_)}const si=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},VF={class:"container"},$F={__name:"App",setup(t){const e=zr();return(n,i)=>{const s=Vl("RouterView");return M(),U("div",VF,[(M(),Ft(s,{key:w(e).fullPath}))])}}},zF=si($F,[["__scopeId","data-v-290cd20b"]]),lC=P2({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"auth.odinn.nl",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),re=L5(lC);function P1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P1(Object(n),!0).forEach(function(i){St(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Th(t){return Th=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Th(t)}function HF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N1(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function jF(t,e,n){return e&&N1(t.prototype,e),n&&N1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y_(t,e){return qF(t)||GF(t,e)||cC(t,e)||XF()}function mc(t){return WF(t)||KF(t)||cC(t)||YF()}function WF(t){if(Array.isArray(t))return pg(t)}function qF(t){if(Array.isArray(t))return t}function KF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function GF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function cC(t,e){if(t){if(typeof t=="string")return pg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pg(t,e)}}function pg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function YF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L1=function(){},X_={},uC={},hC=null,dC={mark:L1,measure:L1};try{typeof window<"u"&&(X_=window),typeof document<"u"&&(uC=document),typeof MutationObserver<"u"&&(hC=MutationObserver),typeof performance<"u"&&(dC=performance)}catch{}var QF=X_.navigator||{},F1=QF.userAgent,U1=F1===void 0?"":F1,Ps=X_,ot=uC,B1=hC,zc=dC;Ps.document;var es=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",fC=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),Hc,jc,Wc,qc,Kc,Yi="___FONT_AWESOME___",gg=16,pC="fa",gC="svg-inline--fa",Sr="data-fa-i2svg",mg="data-fa-pseudo-element",JF="data-fa-pseudo-element-pending",Q_="data-prefix",J_="data-icon",V1="fontawesome-i2svg",ZF="async",e7=["HTML","HEAD","STYLE","SCRIPT"],mC=function(){try{return!0}catch{return!1}}(),nt="classic",ft="sharp",Z_=[nt,ft];function _c(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[nt]}})}var Cl=_c((Hc={},St(Hc,nt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),St(Hc,ft,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Hc)),kl=_c((jc={},St(jc,nt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),St(jc,ft,{solid:"fass",regular:"fasr",light:"fasl"}),jc)),Sl=_c((Wc={},St(Wc,nt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),St(Wc,ft,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Wc)),t7=_c((qc={},St(qc,nt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),St(qc,ft,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qc)),n7=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,_C="fa-layers-text",i7=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,s7=_c((Kc={},St(Kc,nt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),St(Kc,ft,{900:"fass",400:"fasr",300:"fasl"}),Kc)),yC=[1,2,3,4,5,6,7,8,9,10],r7=yC.concat([11,12,13,14,15,16,17,18,19,20]),o7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Al=new Set;Object.keys(kl[nt]).map(Al.add.bind(Al));Object.keys(kl[ft]).map(Al.add.bind(Al));var a7=[].concat(Z_,mc(Al),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",cr.GROUP,cr.SWAP_OPACITY,cr.PRIMARY,cr.SECONDARY]).concat(yC.map(function(t){return"".concat(t,"x")})).concat(r7.map(function(t){return"w-".concat(t)})),Wa=Ps.FontAwesomeConfig||{};function l7(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function c7(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ot&&typeof ot.querySelector=="function"){var u7=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];u7.forEach(function(t){var e=Y_(t,2),n=e[0],i=e[1],s=c7(l7(n));s!=null&&(Wa[i]=s)})}var vC={styleDefault:"solid",familyDefault:"classic",cssPrefix:pC,replacementClass:gC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wa.familyPrefix&&(Wa.cssPrefix=Wa.familyPrefix);var Bo=q(q({},vC),Wa);Bo.autoReplaceSvg||(Bo.observeMutations=!1);var X={};Object.keys(vC).forEach(function(t){Object.defineProperty(X,t,{enumerable:!0,set:function(n){Bo[t]=n,qa.forEach(function(i){return i(X)})},get:function(){return Bo[t]}})});Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Bo.cssPrefix=e,qa.forEach(function(n){return n(X)})},get:function(){return Bo.cssPrefix}});Ps.FontAwesomeConfig=X;var qa=[];function h7(t){return qa.push(t),function(){qa.splice(qa.indexOf(t),1)}}var os=gg,gi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function d7(t){if(!(!t||!es)){var e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ot.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return ot.head.insertBefore(e,i),t}}var f7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rl(){for(var t=12,e="";t-- >0;)e+=f7[Math.random()*62|0];return e}function sa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ey(t){return t.classList?sa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p7(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bC(t[n]),'" ')},"").trim()}function Wd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ty(t){return t.size!==gi.size||t.x!==gi.x||t.y!==gi.y||t.rotate!==gi.rotate||t.flipX||t.flipY}function g7(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function m7(t){var e=t.transform,n=t.width,i=n===void 0?gg:n,s=t.height,r=s===void 0?gg:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&fC?l+="translate(".concat(e.x/os-i/2,"em, ").concat(e.y/os-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/os,"em), calc(-50% + ").concat(e.y/os,"em)) "):l+="translate(".concat(e.x/os,"em, ").concat(e.y/os,"em) "),l+="scale(".concat(e.size/os*(e.flipX?-1:1),", ").concat(e.size/os*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _7=`:root, :host {
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
}`;function wC(){var t=pC,e=gC,n=X.cssPrefix,i=X.replacementClass,s=_7;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var $1=!1;function Vf(){X.autoAddCss&&!$1&&(d7(wC()),$1=!0)}var y7={mixout:function(){return{dom:{css:wC,insertCss:Vf}}},hooks:function(){return{beforeDOMElementCreation:function(){Vf()},beforeI2svg:function(){Vf()}}}},Xi=Ps||{};Xi[Yi]||(Xi[Yi]={});Xi[Yi].styles||(Xi[Yi].styles={});Xi[Yi].hooks||(Xi[Yi].hooks={});Xi[Yi].shims||(Xi[Yi].shims=[]);var Xn=Xi[Yi],EC=[],v7=function t(){ot.removeEventListener("DOMContentLoaded",t),xh=1,EC.map(function(e){return e()})},xh=!1;es&&(xh=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),xh||ot.addEventListener("DOMContentLoaded",v7));function b7(t){es&&(xh?setTimeout(t,0):EC.push(t))}function yc(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?bC(t):"<".concat(e," ").concat(p7(i),">").concat(r.map(yc).join(""),"</").concat(e,">")}function z1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var w7=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},$f=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?w7(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function E7(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function _g(t){var e=E7(t);return e.length===1?e[0].toString(16):null}function I7(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function H1(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function yg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=H1(e);typeof Xn.hooks.addPack=="function"&&!s?Xn.hooks.addPack(t,H1(e)):Xn.styles[t]=q(q({},Xn.styles[t]||{}),r),t==="fas"&&yg("fa",e)}var Gc,Yc,Xc,so=Xn.styles,T7=Xn.shims,x7=(Gc={},St(Gc,nt,Object.values(Sl[nt])),St(Gc,ft,Object.values(Sl[ft])),Gc),ny=null,IC={},TC={},xC={},CC={},kC={},C7=(Yc={},St(Yc,nt,Object.keys(Cl[nt])),St(Yc,ft,Object.keys(Cl[ft])),Yc);function k7(t){return~a7.indexOf(t)}function S7(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!k7(s)?s:null}var SC=function(){var e=function(r){return $f(so,function(o,a,l){return o[l]=$f(a,r,{}),o},{})};IC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),TC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),kC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in so||X.autoFetchSvg,i=$f(T7,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});xC=i.names,CC=i.unicodes,ny=qd(X.styleDefault,{family:X.familyDefault})};h7(function(t){ny=qd(t.styleDefault,{family:X.familyDefault})});SC();function iy(t,e){return(IC[t]||{})[e]}function A7(t,e){return(TC[t]||{})[e]}function ur(t,e){return(kC[t]||{})[e]}function AC(t){return xC[t]||{prefix:null,iconName:null}}function R7(t){var e=CC[t],n=iy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ns(){return ny}var sy=function(){return{prefix:null,iconName:null,rest:[]}};function qd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?nt:n,s=Cl[i][t],r=kl[i][t]||kl[i][s],o=t in Xn.styles?t:null;return r||o||null}var j1=(Xc={},St(Xc,nt,Object.keys(Sl[nt])),St(Xc,ft,Object.keys(Sl[ft])),Xc);function Kd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},St(e,nt,"".concat(X.cssPrefix,"-").concat(nt)),St(e,ft,"".concat(X.cssPrefix,"-").concat(ft)),e),o=null,a=nt;(t.includes(r[nt])||t.some(function(c){return j1[nt].includes(c)}))&&(a=nt),(t.includes(r[ft])||t.some(function(c){return j1[ft].includes(c)}))&&(a=ft);var l=t.reduce(function(c,u){var h=S7(X.cssPrefix,u);if(so[u]?(u=x7[a].includes(u)?t7[a][u]:u,o=u,c.prefix=u):C7[a].indexOf(u)>-1?(o=u,c.prefix=qd(u,{family:a})):h?c.iconName=h:u!==X.replacementClass&&u!==r[nt]&&u!==r[ft]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var d=o==="fa"?AC(c.iconName):{},f=ur(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||f||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!so.far&&so.fas&&!X.autoFetchSvg&&(c.prefix="fas")}return c},sy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ft&&(so.fass||X.autoFetchSvg)&&(l.prefix="fass",l.iconName=ur(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ns()||"fas"),l}var D7=function(){function t(){HF(this,t),this.definitions={}}return jF(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),yg(a,o[a]);var l=Sl[nt][a];l&&yg(l,o[a]),SC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),W1=[],ro={},mo={},O7=Object.keys(mo);function M7(t,e){var n=e.mixoutsTo;return W1=t,ro={},Object.keys(mo).forEach(function(i){O7.indexOf(i)===-1&&delete mo[i]}),W1.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Th(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){ro[o]||(ro[o]=[]),ro[o].push(r[o])})}i.provides&&i.provides(mo)}),n}function vg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=ro[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Ar(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=ro[t]||[];s.forEach(function(r){r.apply(null,n)})}function Qi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mo[t]?mo[t].apply(null,e):void 0}function bg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ns();if(e)return e=ur(n,e)||e,z1(RC.definitions,n,e)||z1(Xn.styles,n,e)}var RC=new D7,P7=function(){X.autoReplaceSvg=!1,X.observeMutations=!1,Ar("noAuto")},N7={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return es?(Ar("beforeI2svg",e),Qi("pseudoElements2svg",e),Qi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,b7(function(){F7({autoReplaceSvgRoot:n}),Ar("watch",e)})}},L7={icon:function(e){if(e===null)return null;if(Th(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=qd(e[0]);return{prefix:i,iconName:ur(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(X.cssPrefix,"-"))>-1||e.match(n7))){var s=Kd(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ns(),iconName:ur(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Ns();return{prefix:r,iconName:ur(r,e)||e}}}},Mn={noAuto:P7,config:X,dom:N7,parse:L7,library:RC,findIconDefinition:bg,toHtml:yc},F7=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ot:n;(Object.keys(Xn.styles).length>0||X.autoFetchSvg)&&es&&X.autoReplaceSvg&&Mn.dom.i2svg({node:i})};function Gd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return yc(i)})}}),Object.defineProperty(t,"node",{get:function(){if(es){var i=ot.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function U7(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(ty(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=Wd(q(q({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function B7(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(X.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},s),{},{id:o}),children:i}]}]}function ry(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,p=i.found?i:n,m=p.width,g=p.height,_=s==="fak",v=[X.replacementClass,r?"".concat(X.cssPrefix,"-").concat(r):""].filter(function(F){return h.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(h.classes).join(" "),E={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},T=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};f&&(E.attributes[Sr]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Rl())},children:[l]}),delete E.attributes.title);var b=q(q({},E),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:q(q({},T),h.styles)}),x=i.found&&n.found?Qi("generateAbstractMask",b)||{children:[],attributes:{}}:Qi("generateAbstractIcon",b)||{children:[],attributes:{}},k=x.children,C=x.attributes;return b.children=k,b.attributes=C,a?B7(b):U7(b)}function q1(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=q(q(q({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Sr]="");var u=q({},o.styles);ty(s)&&(u.transform=m7({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Wd(u);h.length>0&&(c.style=h);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function V7(t){var e=t.content,n=t.title,i=t.extra,s=q(q(q({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Wd(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zf=Xn.styles;function wg(t){var e=t[0],n=t[1],i=t.slice(4),s=Y_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(X.cssPrefix,"-").concat(cr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(cr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(cr.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var $7={found:!1,width:512,height:512};function z7(t,e){!mC&&!X.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eg(t,e){var n=e;return e==="fa"&&X.styleDefault!==null&&(e=Ns()),new Promise(function(i,s){if(Qi("missingIconAbstract"),n==="fa"){var r=AC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&zf[e]&&zf[e][t]){var o=zf[e][t];return i(wg(o))}z7(t,e),i(q(q({},$7),{},{icon:X.showMissingIcons&&t?Qi("missingIconAbstract")||{}:{}}))})}var K1=function(){},Ig=X.measurePerformance&&zc&&zc.mark&&zc.measure?zc:{mark:K1,measure:K1},xa='FA "6.4.0"',H7=function(e){return Ig.mark("".concat(xa," ").concat(e," begins")),function(){return DC(e)}},DC=function(e){Ig.mark("".concat(xa," ").concat(e," ends")),Ig.measure("".concat(xa," ").concat(e),"".concat(xa," ").concat(e," begins"),"".concat(xa," ").concat(e," ends"))},oy={begin:H7,end:DC},Cu=function(){};function G1(t){var e=t.getAttribute?t.getAttribute(Sr):null;return typeof e=="string"}function j7(t){var e=t.getAttribute?t.getAttribute(Q_):null,n=t.getAttribute?t.getAttribute(J_):null;return e&&n}function W7(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(X.replacementClass)}function q7(){if(X.autoReplaceSvg===!0)return ku.replace;var t=ku[X.autoReplaceSvg];return t||ku.replace}function K7(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function G7(t){return ot.createElement(t)}function OC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?K7:G7:n;if(typeof t=="string")return ot.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(OC(o,{ceFn:i}))}),s}function Y7(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ku={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(OC(s),n)}),n.getAttribute(Sr)===null&&X.keepOriginalSource){var i=ot.createComment(Y7(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ey(n).indexOf(X.replacementClass))return ku.replace(e);var s=new RegExp("".concat(X.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===X.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return yc(a)}).join(`
`);n.setAttribute(Sr,""),n.innerHTML=o}};function Y1(t){t()}function MC(t,e){var n=typeof e=="function"?e:Cu;if(t.length===0)n();else{var i=Y1;X.mutateApproach===ZF&&(i=Ps.requestAnimationFrame||Y1),i(function(){var s=q7(),r=oy.begin("mutate");t.map(s),r(),n()})}}var ay=!1;function PC(){ay=!0}function Tg(){ay=!1}var Ch=null;function X1(t){if(B1&&X.observeMutations){var e=t.treeCallback,n=e===void 0?Cu:e,i=t.nodeCallback,s=i===void 0?Cu:i,r=t.pseudoElementsCallback,o=r===void 0?Cu:r,a=t.observeMutationsRoot,l=a===void 0?ot:a;Ch=new B1(function(c){if(!ay){var u=Ns();sa(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!G1(h.addedNodes[0])&&(X.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&X.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&G1(h.target)&&~o7.indexOf(h.attributeName))if(h.attributeName==="class"&&j7(h.target)){var d=Kd(ey(h.target)),f=d.prefix,p=d.iconName;h.target.setAttribute(Q_,f||u),p&&h.target.setAttribute(J_,p)}else W7(h.target)&&s(h.target)})}}),es&&Ch.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function X7(){Ch&&Ch.disconnect()}function Q7(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function J7(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Kd(ey(t));return s.prefix||(s.prefix=Ns()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=A7(s.prefix,t.innerText)||iy(s.prefix,_g(t.innerText))),!s.iconName&&X.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Z7(t){var e=sa(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return X.autoA11y&&(n?e["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(i||Rl()):(e["aria-hidden"]="true",e.focusable="false")),e}function e9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=J7(t),i=n.iconName,s=n.prefix,r=n.rest,o=Z7(t),a=vg("parseNodeAttributes",{},t),l=e.styleParser?Q7(t):[];return q({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:gi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var t9=Xn.styles;function NC(t){var e=X.autoReplaceSvg==="nest"?Q1(t,{styleParser:!1}):Q1(t);return~e.extra.classes.indexOf(_C)?Qi("generateLayersText",t,e):Qi("generateSvgReplacementMutation",t,e)}var Ls=new Set;Z_.map(function(t){Ls.add("fa-".concat(t))});Object.keys(Cl[nt]).map(Ls.add.bind(Ls));Object.keys(Cl[ft]).map(Ls.add.bind(Ls));Ls=mc(Ls);function J1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!es)return Promise.resolve();var n=ot.documentElement.classList,i=function(h){return n.add("".concat(V1,"-").concat(h))},s=function(h){return n.remove("".concat(V1,"-").concat(h))},r=X.autoFetchSvg?Ls:Z_.map(function(u){return"fa-".concat(u)}).concat(Object.keys(t9));r.includes("fa")||r.push("fa");var o=[".".concat(_C,":not([").concat(Sr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Sr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=sa(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=oy.begin("onTree"),c=a.reduce(function(u,h){try{var d=NC(h);d&&u.push(d)}catch(f){mC||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(d){MC(d,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),h(d)})})}function n9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;NC(t).then(function(n){n&&MC([n],e)})}function i9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:bg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:bg(s||{})),t(i,q(q({},n),{},{mask:s}))}}var s9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?gi:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,d=h===void 0?null:h,f=n.titleId,p=f===void 0?null:f,m=n.classes,g=m===void 0?[]:m,_=n.attributes,v=_===void 0?{}:_,E=n.styles,T=E===void 0?{}:E;if(e){var b=e.prefix,x=e.iconName,k=e.icon;return Gd(q({type:"icon"},e),function(){return Ar("beforeDOMElementCreation",{iconDefinition:e,params:n}),X.autoA11y&&(d?v["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(p||Rl()):(v["aria-hidden"]="true",v.focusable="false")),ry({icons:{main:wg(k),mask:l?wg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:x,transform:q(q({},gi),s),symbol:o,title:d,maskId:u,titleId:p,extra:{attributes:v,styles:T,classes:g}})})}},r9={mixout:function(){return{icon:i9(s9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=J1,n.nodeCallback=n9,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?ot:i,r=n.callback,o=r===void 0?function(){}:r;return J1(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,d=i.extra;return new Promise(function(f,p){Promise.all([Eg(s,a),u.iconName?Eg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var g=Y_(m,2),_=g[0],v=g[1];f([n,ry({icons:{main:_,mask:v},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=Wd(a);l.length>0&&(s.style=l);var c;return ty(o)&&(c=Qi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},o9={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return Gd({type:"layer"},function(){Ar("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(X.cssPrefix,"-layers")].concat(mc(r)).join(" ")},children:o}]})}}}},a9={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Gd({type:"counter",content:n},function(){return Ar("beforeDOMElementCreation",{content:n,params:i}),V7({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(X.cssPrefix,"-layers-counter")].concat(mc(a))}})})}}}},l9={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?gi:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,d=i.styles,f=d===void 0?{}:d;return Gd({type:"text",content:n},function(){return Ar("beforeDOMElementCreation",{content:n,params:i}),q1({content:n,transform:q(q({},gi),r),title:a,extra:{attributes:h,styles:f,classes:["".concat(X.cssPrefix,"-layers-text")].concat(mc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(fC){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return X.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,q1({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},c9=new RegExp('"',"ug"),Z1=[1105920,1112319];function u9(t){var e=t.replace(c9,""),n=I7(e,0),i=n>=Z1[0]&&n<=Z1[1],s=e.length===2?e[0]===e[1]:!1;return{value:_g(s?e[0]:e),isSecondary:i||s}}function eb(t,e){var n="".concat(JF).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=sa(t.children),o=r.filter(function(k){return k.getAttribute(mg)===e})[0],a=Ps.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(i7),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ft:nt,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kl[d][l[2].toLowerCase()]:s7[d][c],p=u9(h),m=p.value,g=p.isSecondary,_=l[0].startsWith("FontAwesome"),v=iy(f,m),E=v;if(_){var T=R7(m);T.iconName&&T.prefix&&(v=T.iconName,f=T.prefix)}if(v&&!g&&(!o||o.getAttribute(Q_)!==f||o.getAttribute(J_)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var b=e9(),x=b.extra;x.attributes[mg]=e,Eg(v,f).then(function(k){var C=ry(q(q({},b),{},{icons:{main:k,mask:sy()},prefix:f,iconName:E,extra:x,watchable:!0})),F=ot.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=C.map(function(Z){return yc(Z)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function h9(t){return Promise.all([eb(t,"::before"),eb(t,"::after")])}function d9(t){return t.parentNode!==document.head&&!~e7.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tb(t){if(es)return new Promise(function(e,n){var i=sa(t.querySelectorAll("*")).filter(d9).map(h9),s=oy.begin("searchPseudoElements");PC(),Promise.all(i).then(function(){s(),Tg(),e()}).catch(function(){s(),Tg(),n()})})}var f9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=tb,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?ot:i;X.searchPseudoElements&&tb(s)}}},nb=!1,p9={mixout:function(){return{dom:{unwatch:function(){PC(),nb=!0}}}},hooks:function(){return{bootstrap:function(){X1(vg("mutationObserverCallbacks",{}))},noAuto:function(){X7()},watch:function(n){var i=n.observeMutationsRoot;nb?Tg():X1(vg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},ib=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},g9={mixout:function(){return{parse:{transform:function(n){return ib(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=ib(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:q({},f.outer),children:[{tag:"g",attributes:q({},f.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:q(q({},i.icon.attributes),f.path)}]}]}}}},Hf={x:0,y:0,width:"100%",height:"100%"};function sb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function m9(t){return t.tag==="g"?t.children:[t]}var _9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Kd(s.split(" ").map(function(o){return o.trim()})):sy();return r.prefix||(r.prefix=Ns()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,d=o.icon,f=g7({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:q(q({},Hf),{},{fill:"white"})},m=u.children?{children:u.children.map(sb)}:{},g={tag:"g",attributes:q({},f.inner),children:[sb(q({tag:u.tag,attributes:q(q({},u.attributes),f.path)},m))]},_={tag:"g",attributes:q({},f.outer),children:[g]},v="mask-".concat(a||Rl()),E="clip-".concat(a||Rl()),T={tag:"mask",attributes:q(q({},Hf),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:m9(d)},T]};return i.push(b,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},Hf)}),{children:i,attributes:s}}}},y9={provides:function(e){var n=!1;Ps.matchMedia&&(n=Ps.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:q(q({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:q(q({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:q(q({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},v9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},b9=[y7,r9,o9,a9,l9,f9,p9,g9,_9,y9,v9];M7(b9,{mixoutsTo:Mn});Mn.noAuto;var LC=Mn.config,Oe=Mn.library;Mn.dom;var kh=Mn.parse;Mn.findIconDefinition;Mn.toHtml;var w9=Mn.icon;Mn.layer;var E9=Mn.text;Mn.counter;function rb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Wn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rb(Object(n),!0).forEach(function(i){fn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rb(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Sh(t){return Sh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sh(t)}function fn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I9(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function T9(t,e){if(t==null)return{};var n=I9(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function xg(t){return x9(t)||C9(t)||k9(t)||S9()}function x9(t){if(Array.isArray(t))return Cg(t)}function C9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function k9(t,e){if(t){if(typeof t=="string")return Cg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cg(t,e)}}function Cg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function S9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},FC={exports:{}};(function(t){(function(e){var n=function(_,v,E){if(!c(v)||h(v)||d(v)||f(v)||l(v))return v;var T,b=0,x=0;if(u(v))for(T=[],x=v.length;b<x;b++)T.push(n(_,v[b],E));else{T={};for(var k in v)Object.prototype.hasOwnProperty.call(v,k)&&(T[_(k,E)]=n(_,v[k],E))}return T},i=function(_,v){v=v||{};var E=v.separator||"_",T=v.split||/(?=[A-Z])/;return _.split(T).join(E)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var v=s(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},d=function(_){return a.call(_)=="[object RegExp]"},f=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},m=function(_,v){var E=v&&"process"in v?v.process:v;return typeof E!="function"?_:function(T,b){return E(T,_,b)}},g={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,v){return n(m(s,v),_)},decamelizeKeys:function(_,v){return n(m(o,v),_,v)},pascalizeKeys:function(_,v){return n(m(r,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:e.humps=g})(A9)})(FC);var R9=FC.exports,D9=["class","style"];function O9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=R9.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function M9(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ly(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return ly(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=M9(u);break;case"style":l.style=O9(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=T9(n,D9);return qo(t.tag,Wn(Wn(Wn({},e),{},{class:s.class,style:Wn(Wn({},s.style),o)},s.attrs),a),i)}var UC=!1;try{UC=!0}catch{}function P9(){if(!UC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ka(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fn({},t,e):{}}function N9(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},fn(e,"fa-".concat(t.size),t.size!==null),fn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),fn(e,"fa-pull-".concat(t.pull),t.pull!==null),fn(e,"fa-swap-opacity",t.swapOpacity),fn(e,"fa-bounce",t.bounce),fn(e,"fa-shake",t.shake),fn(e,"fa-beat",t.beat),fn(e,"fa-fade",t.fade),fn(e,"fa-beat-fade",t.beatFade),fn(e,"fa-flash",t.flash),fn(e,"fa-spin-pulse",t.spinPulse),fn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function ob(t){if(t&&Sh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kh.icon)return kh.icon(t);if(t===null)return null;if(Sh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var _o=Pr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=Se(function(){return ob(e.icon)}),r=Se(function(){return Ka("classes",N9(e))}),o=Se(function(){return Ka("transform",typeof e.transform=="string"?kh.transform(e.transform):e.transform)}),a=Se(function(){return Ka("mask",ob(e.mask))}),l=Se(function(){return w9(s.value,Wn(Wn(Wn(Wn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ws(l,function(u){if(!u)return P9("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Se(function(){return l.value?ly(l.value.abstract[0],{},i):null});return function(){return c.value}}});Pr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=LC.familyPrefix,r=Se(function(){return["".concat(s,"-layers")].concat(xg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return qo("div",{class:r.value},i.default?i.default():[])}}});Pr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=LC.familyPrefix,r=Se(function(){return Ka("classes",[].concat(xg(e.counter?["".concat(s,"-layers-counter")]:[]),xg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Se(function(){return Ka("transform",typeof e.transform=="string"?kh.transform(e.transform):e.transform)}),a=Se(function(){var c=E9(e.value.toString(),Wn(Wn({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Se(function(){return ly(a.value,{},i)});return function(){return l.value}}});const L9={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(M(),U("div",{class:xn(["flag",{inverted:e.inverted}]),style:Or({backgroundColor:e.color})},[G(w(_o),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},BC=si(L9,[["__scopeId","data-v-6db28dbb"]]),ts=om("board",()=>{const t=yt(""),e=yt(""),n=yt("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const F9={key:0,class:"hidden-indicator"},U9=["src"],B9={class:"boardTileFlags"},V9={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=ts(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u,h,d,f,p,m,g;return M(),U("div",{class:xn(["tile",{isSelected:w(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(l=(a=e.teamData)==null?void 0:a.verify)==null?void 0:l.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((c=e.tileData)==null?void 0:c.hidden)==!0||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=_=>i({id:e.tileData.id,...e.tileData}))},[(e==null?void 0:e.isEditor)==!0&&((h=e.tileData)==null?void 0:h.hidden)==!0?(M(),U("div",F9,[G(w(_o),{class:"icon",icon:["fas","eye-low-vision"]})])):Ee("",!0),((d=e.tileData)==null?void 0:d.type)!="null"&&((e==null?void 0:e.isEditor)==!0&&!((f=e.tileData)!=null&&f.hidden)||(p=e.tileData)!=null&&p.hidden||e.isEditor!=!0&&!((m=e.tileData)!=null&&m.hidden))?(M(),U("img",{key:1,src:e.teamData&&e.tileData.altImg&&((g=e.teamData)!=null&&g.collected.hasOwnProperty(e.tileData.id))?e.tileData.altImg:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,U9)):Ee("",!0),S("div",B9,[e.groupsData?(M(!0),U(Ie,{key:0},cn(e.groupsData,_=>(M(),Ft(BC,{key:"tile-flag-"+_.name+"-"+e.tileData.id,class:xn(["tileFlag","flag-end-"+_.flagEnd]),icon:_.icon,color:"none",inverted:!0,style:Or({opacity:(_==null?void 0:_.collected)!=null&&(_!=null&&_.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","style"]))),128)):Ee("",!0)])],2)}}},VC=si(V9,[["__scopeId","data-v-575ed056"]]);const $9={key:0,class:"bingo-board"},z9={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;jA(s=>({"6e24fd9e":t.boardData.settings.width,"3af3ab1c":t.boardData.settings.height}));const n=ts(),i=aR(n.selectedTile);return(s,r)=>e.boardData?(M(),U("main",$9,[(M(!0),U(Ie,null,cn(e.tilesData,o=>(M(),Ft(VC,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:w(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):Ee("",!0)}},cy=si(z9,[["__scopeId","data-v-fed113b6"]]);const Yd=t=>(Ul("data-v-8c79d05e"),t=t(),Bl(),t),H9={key:0},j9=Yd(()=>S("br",null,null,-1)),W9={class:"tooltiptext"},q9=Yd(()=>S("br",null,null,-1)),K9=Yd(()=>S("br",null,null,-1)),G9=Yd(()=>S("br",null,null,-1)),Y9={key:0,class:"rules"},X9={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=ts();return(i,s)=>{var r;return M(),U("div",null,[e.groupsData?(M(),U("ul",H9,[(M(!0),U(Ie,null,cn(e.groupsData,(o,a)=>(M(),U("li",{key:a+o.id,class:"tooltip"},[G(BC,{color:o.color,class:xn(["tileFlag","flag-end-"+o.flagEnd]),icon:o.icon,style:Or({"--groupColor":o.color,"--width":o.points/750*100*1.5+"px"})},null,8,["color","class","icon","style"]),be(" "+fe(o.name),1),j9,S("span",W9,[(M(!0),U(Ie,null,cn(o.member,l=>(M(),U("span",{key:l},[be(fe(l),1),q9]))),128))]),be(" score: "+fe(o.points?o.points:"0"),1),K9,G9]))),128)),((r=w(n))==null?void 0:r.rules)!=null?(M(),U("li",Y9,fe(w(n).rules),1)):Ee("",!0)])):Ee("",!0)])}}},Q9=si(X9,[["__scopeId","data-v-8c79d05e"]]);const J9={key:0},Z9={key:1,class:"items"},eU={__name:"sidePannel",setup(t){const e=ts();return(n,i)=>(M(),U(Ie,null,[S("h2",null,fe(w(e).selectedTile.title)+fe(w(e).selectedTile.points!=0?`, ${w(e).selectedTile.points} points`:""),1),(M(),Ft(VC,{class:"board-tile",tileData:w(e).selectedTile,key:"side-pannel-tile-"+w(e).selectedTile},null,8,["tileData"])),w(e).selectedTile.description?(M(),U("p",J9,fe(w(e).selectedTile.description),1)):Ee("",!0),w(e).selectedTile.items?(M(),U("p",Z9,[be(" Eligible items: "),(M(!0),U(Ie,null,cn(w(e).selectedTile.items,(s,r)=>(M(),U(Ie,null,[be(fe(s.item)+" "+fe(s.count>1?"x"+s.count:"")+" "+fe(r!==w(e).selectedTile.items.length-1?",":""),1)],64))),256))])):Ee("",!0)],64))}},tU=si(eU,[["__scopeId","data-v-3ee9f1f5"]]),zs=om("userStateStore",()=>{const t=yt({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}}),nU={class:"icon-button btn"},Ue={__name:"iconButton",props:{groupIcon:{required:!1,type:String},fasIcon:{required:!0,type:String},label:{required:!1,type:String}},setup(t){const e=t;return(n,i)=>{const s=Vl("font-awesome-icon");return M(),U("button",nU,[be(fe(e.label)+" ",1),G(s,{class:xn({outline:e.fasIcon==e.groupIcon}),icon:["fa",e.fasIcon]},null,8,["class","icon"])])}}},iU=new Mi,sU=LO(),$C=async(t,e,n)=>{WD(sU,iU).then(i=>{n.setUser({loggedIn:!0,data:i.user})}).then(async()=>{(await z_(ge(re,"Users",n.user.data.uid))).exists()||gs(ge(re,"Users",n.user.data.uid),{count:0}),e.push(t)}).catch(i=>{const s=i.code,r=i.message;console.error(i,s,r)})};const rU={class:"dashboard"},oU={__name:"loginButton",props:{destination:{type:Object,required:!0}},setup(t){const e=t,n=zr(),i=n.params.boardUUID,s=zs(),r=rt(ge(re,"Users",`${s.user.data.uid}`)),o=jd(),a=rt(ge(re,"Boards",n.params.boardUUID)),l=(c,u)=>{o.push({name:c,params:{boardUUID:u}})};return(c,u)=>{var h,d,f,p,m,g,_,v,E,T,b,x;return M(),U("div",rU,[w(s).user&&w(s).user.data.uid!=0?(M(),U(Ie,{key:0},[G(Ue,{class:"iconBtn",label:"Dashboard",onClick:u[0]||(u[0]=k=>l("userOverview")),fasIcon:"list-ul"}),w(a)&&w(s).user&&w(s).user.data.uid!=0&&(w(s).user.data.uid==((h=w(a))==null?void 0:h.ownerID)||((d=w(r))==null?void 0:d.type)=="admin"||(p=(f=w(a))==null?void 0:f.editors)!=null&&p.includes(w(s).user.data.uid))?(M(),Ft(Ue,{key:0,class:xn([{"current-page":w(n).name=="editBoard"},"iconBtn"]),label:"Edit board",onClick:u[1]||(u[1]=k=>l("editBoard",w(i))),fasIcon:"pen-to-square"},null,8,["class"])):Ee("",!0),(M(),Ft(Ue,{key:1,class:xn(["iconBtn",{"current-page":w(n).name=="overview"}]),label:"Preview board",onClick:u[2]||(u[2]=k=>l("overview",w(i))),fasIcon:"eye"},null,8,["class"])),w(a)&&w(s).user&&w(s).user.data.uid!=0&&(w(s).user.data.uid==((m=w(a))==null?void 0:m.ownerID)||((g=w(r))==null?void 0:g.type)=="admin"||(v=(_=w(a))==null?void 0:_.moderators)!=null&&v.includes(w(s).user.data.uid)||(T=(E=w(a))==null?void 0:E.editors)!=null&&T.includes(w(s).user.data.uid))?(M(),Ft(Ue,{key:2,class:xn([{"current-page":w(n).name=="moderator"},"iconBtn"]),label:"Verify tiles",onClick:u[3]||(u[3]=k=>l("moderator",w(i))),fasIcon:"square-check"},null,8,["class"])):Ee("",!0),w(s).user&&w(s).user.data.uid!=0&&(w(s).user.data.uid==((b=w(a))==null?void 0:b.ownerID)||((x=w(r))==null?void 0:x.type)=="admin")?(M(),Ft(Ue,{key:3,class:xn([{"current-page":w(n).name=="groupView"},"iconBtn"]),label:"Magage groups",onClick:u[4]||(u[4]=k=>l("groupView",w(i))),fasIcon:"users-gear"},null,8,["class"])):Ee("",!0)],64)):(M(),Ft(Ue,{key:1,class:"iconBtn",onClick:u[5]||(u[5]=k=>w($C)(e.destination,w(o),w(s))),fasIcon:"right-to-bracket"}))])}}},vc=si(oU,[["__scopeId","data-v-c415f5f5"]]);const uy=t=>(Ul("data-v-d456fde8"),t=t(),Bl(),t),aU={class:"container"},lU={class:"main-section"},cU={key:1,class:"detail-pane"},uU={style:{"justify-content":"end",display:"flex"}},hU=uy(()=>S("h1",null,"Not authenticated",-1)),dU=uy(()=>S("p",null,"you do not need to log in to view a published board.",-1)),fU=uy(()=>S("p",null," if the board you are looking for is private, you need to be the owner, a moderator, or editor to view this board. ",-1)),pU={__name:"BoardView",setup(t){var h;const e=ts(),n=zs(),i=zr();e.setBoardUUID(i.params.boardUUID),e.setSelectedTile("");const s=e.boardUUID,r=yt(!1),o=rt(ge(re,"Users",`${n.user.data.uid}`)),{data:a}=rt(On(re,"Boards",s,"Groups")),l=rt(ge(re,"Boards",s));e.setRules((h=l.value)==null?void 0:h.rules);const c=Se(()=>{var f;let d={};return a&&((f=a==null?void 0:a.value)==null||f.forEach(async p=>{d[p.id]={...p}})),d||{}}),{data:u}=rt(On(re,`Boards/${s}/Tiles`));return(d,f)=>{var p;return M(),U("div",aU,[G(vc,{destination:{name:"overview",params:{boardUUID:w(s)}}},null,8,["destination"]),w(l)&&w(u)&&(w(l).settings.public||w(n).user.data.uid==w(l).ownerID||((p=w(o))==null?void 0:p.type)=="admin")?(M(),U(Ie,{key:0},[S("section",null,[S("h1",null,fe(w(l).name),1)]),S("section",lU,[r.value==r.value?(M(),U(Ie,{key:0},[w(c)?(M(),Ft(Q9,{key:0,class:"score-card",groupsData:w(c)},null,8,["groupsData"])):Ee("",!0)],64)):Ee("",!0),(M(),Ft(cy,{class:"bingo-board",boardData:w(l),groupsData:w(c),tilesData:w(u),key:"bingo-board-"+w(e).boardUUID},null,8,["boardData","groupsData","tilesData"])),w(e).selectedTile!=""?(M(),U("aside",cU,[S("div",uU,[G(Ue,{onClick:f[0]||(f[0]=()=>{w(e).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),w(e).selectedTile!=""?(M(),Ft(tU,{key:0})):Ee("",!0)])):Ee("",!0)])],64)):(M(),U(Ie,{key:1},[hU,dU,fU],64))])}}},gU=si(pU,[["__scopeId","data-v-d456fde8"]]),mU=["for"],_U=S("br",null,null,-1),yU=["id","checked","onClick"],vU={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],Bt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Bt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,Bt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),Bt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&Bt(ge(re,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(M(),U("div",{key:e.tileData.id},[S("h2",null,"{ "+fe(e.tileData.id.split("")[0])+" , "+fe(e.tileData.id.split("")[1])+" }",1),S("ul",null,[(M(!0),U(Ie,null,cn(e.groupsData,o=>(M(),U("li",{key:o.id+w(n).id,class:xn({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[S("label",{for:o.id+w(n).id},[be(fe(o.name)+" : "+fe(o.verify.hasOwnProperty(e.tileData.id)),1),_U,be(" collected: "),(M(),U("input",{id:o.id+w(n).id,type:"checkbox",class:"toggle",key:o.id+w(n).id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:Ge(a=>i({tile:w(n),group:o}),["prevent"])},null,8,yU))],8,mU)],2))),128))])])):Ee("",!0)}},bU={class:"container"},wU={key:0},EU={key:0},IU={key:1},TU={__name:"ModeratorView",setup(t){const e=ts(),n=zs(),i=zr(),s=Se(()=>i.params.boardUUID),{data:r}=rt(On(re,"Boards",s.value,"Groups")),o=rt(ge(re,"Users",`${n.user.data.uid}`)),a=rt(ge(re,"Boards",s.value)),l=Se(()=>{var h;let u={};return r&&((h=r==null?void 0:r.value)==null||h.forEach(d=>{d.name!="moderator"&&(u[d.id]={id:d.id,name:d.name,member:d.members,icon:d.icon,color:d.color,points:d.points,flagEnd:d.flagEnd,collected:d.collected,verify:d.verify})})),u||{}}),{data:c}=rt(On(re,`Boards/${s.value}/Tiles`));return(u,h)=>{var d,f;return M(),U("div",bU,[G(vc,{destination:{name:"moderator",params:w(s)}},null,8,["destination"]),S("section",null,[((d=w(a))==null?void 0:d.name)!=null?(M(),U("h1",wU,fe(w(a).name),1)):Ee("",!0)]),w(n).user&&w(n).user.data.uid!=0&&(w(n).user.data.uid==w(a).ownerID||((f=w(o))==null?void 0:f.type)=="admin"||w(a).moderators.includes(w(n).user.data.uid)||w(a).editors.includes(w(n).user.data.uid))?(M(),U("section",EU,[G(cy,{boardData:w(a),groupsData:w(l),tilesData:w(c)},null,8,["boardData","groupsData","tilesData"]),S("aside",null,[(M(),Ft(vU,{tileData:w(e).selectedTile,key:w(e).selectedTile.id,boardUUID:w(s),groupsData:w(l),boardData:w(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(M(),U("section",IU,"please log in or return to the [board]"))])}}},xU={class:"tile"},CU={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(M(),U("div",xU,fe(e.tile.coordinates),1))}},kU=om("boardCreate",()=>{const t=yt({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}}),SU=["onKeydown"],AU={class:"pen"},RU=S("br",null,null,-1),DU=S("br",null,null,-1),OU={key:0,class:"bingo-board"},MU=["onClick"],PU={key:1},NU={key:2},LU={__name:"NewBoard",setup(t){const e=kU(),n=zs(),i=jd(),s=yt({name:"<name of bingo board>",settings:{width:1,height:1,public:!1}}),r=rt(ge(re,"Users",`${n.user.data.uid}`)),o=yt(null),a=()=>{o.value.focus()},l=h=>{h.target.blur(),o.value.innerText.trim()==""?(s.value.name="Enter title here",o.value.innerText="Enter title here"):s.value.name=o.value.innerText.trim()},c=Se(()=>{let h=[];for(let d=0;d<=parseInt(s.value.settings.width)*s.value.settings.height-1;d++){let f=(Math.floor(d/parseInt(s.value.settings.width))+1)*100+(d%parseInt(s.value.settings.width)+1);h.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:f,img:" "})}return h}),u=async()=>{const h=ge(On(re,"Boards")),d=ge(On(re,"Boards",h.id,"Groups"));await gs(h,{...s.value,ownerID:n.user.data.uid}).then(()=>{c.value.forEach(f=>{gs(ge(re,"Boards",h.id,"Tiles",`${f.coordinates}`),{...f})})}).then(()=>{gs(ge(re,d.path),{name:"all",collected:{},verify:{},icon:"frog",color:"#8a038f",points:0}),gs(ge(re,"Users",`${n.user.data.uid}`),{count:r.value.count+1}),e.setSelectedTile(""),i.push({name:"editBoard",params:{boardUUID:h.id}})})};return n.user.loggedIn||i.push({name:"loginView"}),(h,d)=>{var p,m;const f=Vl("font-awesome-icon");return M(),U(Ie,null,[w(n).user.loggedIn&&w(n).user.data.uid!=0&&((p=w(r))==null?void 0:p.count)<5?(M(),U(Ie,{key:0},[S("h1",{class:"title-wrap",onClick:d[0]||(d[0]=Ge(g=>a(),["prevent"]))},[S("span",{class:"board-title",ref_key:"titleElement",ref:o,contenteditable:"",spellcheck:"false",onKeydown:Pi(l,["enter"]),onBlur:l},fe(s.value.name),41,SU),S("span",AU,[G(f,{icon:["fas","pen"]})])]),S("div",null,[be(" name: width: "),Tn(S("input",{min:"1",max:"9",name:"width",type:"range","onUpdate:modelValue":d[1]||(d[1]=g=>s.value.settings.width=g)},null,512),[[Kn,s.value.settings.width]]),be(fe(s.value.settings.width),1),RU,be(" height: "),Tn(S("input",{min:"1",max:"9",name:"height",type:"range","onUpdate:modelValue":d[2]||(d[2]=g=>s.value.settings.height=g)},null,512),[[Kn,s.value.settings.height]]),be(fe(s.value.settings.height),1),DU,be(" total tiles: "+fe(s.value.settings.width*s.value.settings.height),1)]),w(c)?(M(),U("main",OU,[(M(!0),U(Ie,null,cn(w(c),g=>(M(),Ft(CU,{key:g.coordinates,tile:g},null,8,["tile"]))),128))])):Ee("",!0),S("button",{class:"btn",onClick:Ge(u,["prevent"])},"Save Settings",8,MU)],64)):Ee("",!0),w(n).user.loggedIn?Ee("",!0):(M(),U("h1",PU,"not authenticated")),((m=w(r))==null?void 0:m.count)>=6?(M(),U("h1",NU,"You've exceded the 5 board limit")):Ee("",!0)],64)}}};const ns=t=>(Ul("data-v-5f429461"),t=t(),Bl(),t),FU=ns(()=>S("h1",null,"User Settings and overview",-1)),UU={class:"user-details"},BU=ns(()=>S("h2",null,"User details",-1)),VU=ns(()=>S("br",null,null,-1)),$U={class:"highlight UID"},zU=ns(()=>S("br",null,null,-1)),HU=ns(()=>S("h2",null,"Your boards",-1)),jU={class:"board-list"},WU={class:"highlight UID"},qU=["onClick"],KU=["onClick"],GU=["onClick"],YU=["onClick"],XU=["checked","onClick"],QU={class:"_item"},JU=ns(()=>S("h3",null,"New Board",-1)),ZU=ns(()=>S("p",null,"Create a new Bingo event",-1)),eB=ns(()=>S("h2",null,"Boards you can edit",-1)),tB={key:0,class:"board-list"},nB=["onClick"],iB=["onClick"],sB=["onClick"],rB={key:1},oB=ns(()=>S("h2",null,"Boards you can moderate",-1)),aB={class:"board-list"},lB=["onClick"],cB=["onClick"],uB={key:1},hB={__name:"UserOverview",setup(t){const e=zs(),n=rt(ge(re,"Users",`${e.user.data.uid}`)),i=On(re,"Boards"),s=Se(()=>{var p;let f="==";return((p=n.value)==null?void 0:p.type)=="admin"&&(f="!="),f}),r=Se(()=>{var p;let f=e.user.data.uid;return((p=n.value)==null?void 0:p.type)=="admin"&&(f="0"),f}),o=rt(Of(i,Mf("ownerID",s.value,r.value))),a=rt(Of(i,Mf("moderators","array-contains",e.user.data.uid))),l=rt(Of(i,Mf("editors","array-contains",e.user.data.uid))),c=jd(),u=(f,p)=>{c.push({name:f,params:{boardUUID:p}})},h=f=>{let p={...f};p.settings.public=!f.settings.public,Bt(ge(re,"Boards",f.id),p)};e.user.loggedIn||c.push({name:"loginView"});const d=f=>{for(var p in f)if(Object.prototype.hasOwnProperty.call(f,p))return!1;return!0};return(f,p)=>{var m;return w(e).user.loggedIn&&w(e).user&&w(e).user.data.uid!="0"?(M(),U(Ie,{key:0},[FU,S("section",UU,[BU,S("p",null,[be(" Total boards: "+fe((m=w(n))!=null&&m.count?w(n).count:0),1),VU,be(" User ID: "),S("span",$U,fe(w(e).user.data.uid),1),zU,be(" Share your user ID with people to have them add you as moderator and-or editor. ")])]),S("section",null,[HU,S("div",jU,[(M(!0),U(Ie,null,cn(w(o),g=>(M(),U("div",{class:"_item",key:g.id+g.name},[S("h3",null,fe(g.name),1),S("p",null,[be(" Board id: "),S("span",WU,fe(g.id),1)]),S("p",{onClick:_=>u("editBoard",g.id)},[G(Ue,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,qU),S("p",{onClick:_=>u("overview",g.id)},[G(Ue,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,KU),S("p",{onClick:_=>u("moderator",g.id)},[G(Ue,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,GU),S("p",{onClick:_=>u("groupView",g.id)},[G(Ue,{class:"iconBtn",label:"Manage groups: ",fasIcon:"users-gear"})],8,YU),S("p",null,[be(" Public: "),S("input",{class:"toggle",type:"checkbox",checked:g.settings.public,onClick:_=>h(g)},null,8,XU)])]))),128)),S("div",QU,[JU,ZU,!w(n)||w(n).count<6?(M(),U("button",{key:0,class:"btn highlight new-board",onClick:p[0]||(p[0]=Ge(g=>w(c).push({name:"newBoard"}),["prevent"]))}," Create new board ")):Ee("",!0)])])]),d(w(l))?Ee("",!0):(M(),U("section",{key:w(l)},[eB,w(l)?(M(),U("div",tB,[(M(!0),U(Ie,null,cn(w(l),g=>(M(),U("div",{class:"_item",key:g},[S("h3",null,fe(g.name),1),S("p",{onClick:_=>u("editBoard",g.id)},[G(Ue,{class:"iconBtn",label:"Edit board: ",fasIcon:"pen-to-square"})],8,nB),S("p",{onClick:_=>u("overview",g.id)},[G(Ue,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,iB),S("p",{onClick:_=>u("moderator",g.id)},[G(Ue,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,sB)]))),128))])):Ee("",!0)])),d(w(a))?Ee("",!0):(M(),U("section",rB,[oB,S("div",aB,[(M(!0),U(Ie,null,cn(w(a),g=>(M(),U("div",{class:"_item",key:g},[S("h3",null,fe(g.name),1),S("p",{onClick:_=>u("overview",g.id)},[G(Ue,{class:"iconBtn",label:"Preview board: ",fasIcon:"eye"})],8,lB),S("p",{onClick:_=>u("moderator",g.id)},[G(Ue,{class:"iconBtn",label:"Verify tiles: ",fasIcon:"square-check"})],8,cB)]))),128))])]))],64)):(M(),U("h1",uB,"Not Authenticated"))}}},dB=si(hB,[["__scopeId","data-v-5f429461"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function bc(t){return t+.5|0}const ms=(t,e,n)=>Math.max(Math.min(t,n),e);function Ca(t){return ms(bc(t*2.55),0,255)}function Cs(t){return ms(bc(t*255),0,255)}function Oi(t){return ms(bc(t/2.55)/100,0,1)}function ab(t){return ms(bc(t*100),0,100)}const Nn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},kg=[..."0123456789ABCDEF"],fB=t=>kg[t&15],pB=t=>kg[(t&240)>>4]+kg[t&15],Qc=t=>(t&240)>>4===(t&15),gB=t=>Qc(t.r)&&Qc(t.g)&&Qc(t.b)&&Qc(t.a);function mB(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Nn[t[1]]*17,g:255&Nn[t[2]]*17,b:255&Nn[t[3]]*17,a:e===5?Nn[t[4]]*17:255}:(e===7||e===9)&&(n={r:Nn[t[1]]<<4|Nn[t[2]],g:Nn[t[3]]<<4|Nn[t[4]],b:Nn[t[5]]<<4|Nn[t[6]],a:e===9?Nn[t[7]]<<4|Nn[t[8]]:255})),n}const _B=(t,e)=>t<255?e(t):"";function yB(t){var e=gB(t)?fB:pB;return t?"#"+e(t.r)+e(t.g)+e(t.b)+_B(t.a,e):void 0}const vB=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function zC(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function bB(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function wB(t,e,n){const i=zC(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function EB(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function hy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=EB(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function dy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(Cs)}function fy(t,e,n){return dy(zC,t,e,n)}function IB(t,e,n){return dy(wB,t,e,n)}function TB(t,e,n){return dy(bB,t,e,n)}function HC(t){return(t%360+360)%360}function xB(t){const e=vB.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Ca(+e[5]):Cs(+e[5]));const s=HC(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=IB(s,r,o):e[1]==="hsv"?i=TB(s,r,o):i=fy(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function CB(t,e){var n=hy(t);n[0]=HC(n[0]+e),n=fy(n),t.r=n[0],t.g=n[1],t.b=n[2]}function kB(t){if(!t)return;const e=hy(t),n=e[0],i=ab(e[1]),s=ab(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Oi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const lb={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},cb={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function SB(){const t={},e=Object.keys(cb),n=Object.keys(lb);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,lb[r]);r=parseInt(cb[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Jc;function AB(t){Jc||(Jc=SB(),Jc.transparent=[0,0,0,0]);const e=Jc[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const RB=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function DB(t){const e=RB.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?Ca(o):ms(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?Ca(i):ms(i,0,255)),s=255&(e[4]?Ca(s):ms(s,0,255)),r=255&(e[6]?Ca(r):ms(r,0,255)),{r:i,g:s,b:r,a:n}}}function OB(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Oi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const jf=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Xr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function MB(t,e,n){const i=Xr(Oi(t.r)),s=Xr(Oi(t.g)),r=Xr(Oi(t.b));return{r:Cs(jf(i+n*(Xr(Oi(e.r))-i))),g:Cs(jf(s+n*(Xr(Oi(e.g))-s))),b:Cs(jf(r+n*(Xr(Oi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Zc(t,e,n){if(t){let i=hy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=fy(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function jC(t,e){return t&&Object.assign(e||{},t)}function ub(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Cs(t[3]))):(e=jC(t,{r:0,g:0,b:0,a:1}),e.a=Cs(e.a)),e}function PB(t){return t.charAt(0)==="r"?DB(t):xB(t)}class Dl{constructor(e){if(e instanceof Dl)return e;const n=typeof e;let i;n==="object"?i=ub(e):n==="string"&&(i=mB(e)||AB(e)||PB(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=jC(this._rgb);return e&&(e.a=Oi(e.a)),e}set rgb(e){this._rgb=ub(e)}rgbString(){return this._valid?OB(this._rgb):void 0}hexString(){return this._valid?yB(this._rgb):void 0}hslString(){return this._valid?kB(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=MB(this._rgb,e._rgb,n)),this}clone(){return new Dl(this.rgb)}alpha(e){return this._rgb.a=Cs(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=bc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Zc(this._rgb,2,e),this}darken(e){return Zc(this._rgb,2,-e),this}saturate(e){return Zc(this._rgb,1,e),this}desaturate(e){return Zc(this._rgb,1,-e),this}rotate(e){return CB(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Si(){}const NB=(()=>{let t=0;return()=>t++})();function st(t){return t===null||typeof t>"u"}function ht(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function $e(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Pt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function En(t,e){return Pt(t)?t:e}function De(t,e){return typeof t>"u"?e:t}const LB=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Qe(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function We(t,e,n,i){let s,r,o;if(ht(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if($e(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Ah(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Rh(t){if(ht(t))return t.map(Rh);if($e(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Rh(t[n[s]]);return e}return t}function WC(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function FB(t,e,n,i){if(!WC(t))return;const s=e[t],r=n[t];$e(s)&&$e(r)?Ol(s,r,i):e[t]=Rh(r)}function Ol(t,e,n){const i=ht(e)?e:[e],s=i.length;if(!$e(t))return t;n=n||{};const r=n.merger||FB;let o;for(let a=0;a<s;++a){if(o=i[a],!$e(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function Ga(t,e){return Ol(t,e,{merger:UB})}function UB(t,e,n){if(!WC(t))return;const i=e[t],s=n[t];$e(i)&&$e(s)?Ga(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Rh(s))}const hb={"":t=>t,x:t=>t.x,y:t=>t.y};function BB(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function VB(t){const e=BB(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Dh(t,e){return(hb[e]||(hb[e]=VB(e)))(t)}function py(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Oh=t=>typeof t<"u",Fs=t=>typeof t=="function",db=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function $B(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const At=Math.PI,Bn=2*At,zB=Bn+At,Mh=Number.POSITIVE_INFINITY,HB=At/180,yn=At/2,qs=At/4,fb=At*2/3,_s=Math.log10,Vo=Math.sign;function Ya(t,e,n){return Math.abs(t-e)<n}function pb(t){const e=Math.round(t);t=Ya(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(_s(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function jB(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Ml(t){return!isNaN(parseFloat(t))&&isFinite(t)}function WB(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function qC(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function ys(t){return t*(At/180)}function gy(t){return t*(180/At)}function gb(t){if(!Pt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function qB(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*At&&(r+=Bn),{angle:r,distance:s}}function Sg(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function KB(t,e){return(t-e+zB)%Bn-At}function zn(t){return(t%Bn+Bn)%Bn}function KC(t,e,n,i){const s=zn(t),r=zn(e),o=zn(n),a=zn(r-s),l=zn(o-s),c=zn(s-r),u=zn(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function GB(t){return Fn(t,-32768,32767)}function ka(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function my(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const hr=(t,e,n,i)=>my(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),YB=(t,e,n)=>my(t,n,i=>t[i][e]>=n);function XB(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const GC=["push","pop","shift","splice","unshift"];function QB(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),GC.forEach(n=>{const i="_onData"+py(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function mb(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(GC.forEach(r=>{delete t[r]}),delete t._chartjs)}function JB(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const YC=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function XC(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,YC.call(window,()=>{i=!1,t.apply(e,n)}))}}function ZB(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const _y=t=>t==="start"?"left":t==="end"?"right":"center",qt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,eV=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function tV(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(s=Fn(Math.min(hr(a,o.axis,c).lo,n?i:hr(e,l,o.getPixelForValue(c)).lo),0,i-1)),d?r=Fn(Math.max(hr(a,o.axis,u,!0).hi+1,n?0:hr(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function nV(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const eu=t=>t===0||t===1,_b=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Bn/n)),yb=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Bn/n)+1,Xa={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*yn)+1,easeOutSine:t=>Math.sin(t*yn),easeInOutSine:t=>-.5*(Math.cos(At*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>eu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>eu(t)?t:_b(t,.075,.3),easeOutElastic:t=>eu(t)?t:yb(t,.075,.3),easeInOutElastic(t){return eu(t)?t:t<.5?.5*_b(t*2,.1125,.45):.5+.5*yb(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Xa.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Xa.easeInBounce(t*2)*.5:Xa.easeOutBounce(t*2-1)*.5+.5};function yy(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function vb(t){return yy(t)?t:new Dl(t)}function Wf(t){return yy(t)?t:new Dl(t).saturate(.5).darken(.1).hexString()}const iV=["x","y","borderWidth","radius","tension"],sV=["color","borderColor","backgroundColor"];function rV(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:sV},numbers:{type:"number",properties:iV}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function oV(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const bb=new Map;function aV(t,e){e=e||{};const n=t+JSON.stringify(e);let i=bb.get(n);return i||(i=new Intl.NumberFormat(t,e),bb.set(n,i)),i}function vy(t,e,n){return aV(e,n).format(t)}const QC={values(t){return ht(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=lV(t,n)}const o=_s(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),vy(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(_s(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?QC.numeric.call(this,t,e,n):""}};function lV(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Xd={formatters:QC};function cV(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Xd.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Rr=Object.create(null),Ag=Object.create(null);function Qa(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function qf(t,e,n){return typeof e=="string"?Ol(Qa(t,e),n):Ol(Qa(t,""),e)}class uV{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Wf(s.backgroundColor),this.hoverBorderColor=(i,s)=>Wf(s.borderColor),this.hoverColor=(i,s)=>Wf(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return qf(this,e,n)}get(e){return Qa(this,e)}describe(e,n){return qf(Ag,e,n)}override(e,n){return qf(Rr,e,n)}route(e,n,i,s){const r=Qa(this,e),o=Qa(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return $e(l)?Object.assign({},c,l):De(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var pt=new uV({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[rV,oV,cV]);function hV(t){return!t||st(t.size)||st(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ph(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function dV(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,d;for(l=0;l<a;l++)if(h=n[l],h!=null&&!ht(h))o=Ph(t,s,r,o,h);else if(ht(h))for(c=0,u=h.length;c<u;c++)d=h[c],d!=null&&!ht(d)&&(o=Ph(t,s,r,o,d));t.restore();const f=r.length/2;if(f>n.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function Ks(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function wb(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Rg(t,e,n,i){JC(t,e,n,i,null)}function JC(t,e,n,i,s){let r,o,a,l,c,u,h,d;const f=e.pointStyle,p=e.rotation,m=e.radius;let g=(p||0)*HB;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(g),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!(isNaN(m)||m<=0)){switch(t.beginPath(),f){default:s?t.ellipse(n,i,s/2,m,0,0,Bn):t.arc(n,i,m,0,Bn),t.closePath();break;case"triangle":u=s?s/2:m,t.moveTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=fb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),g+=fb,t.lineTo(n+Math.sin(g)*u,i-Math.cos(g)*m),t.closePath();break;case"rectRounded":c=m*.516,l=m-c,o=Math.cos(g+qs)*l,h=Math.cos(g+qs)*(s?s/2-c:l),a=Math.sin(g+qs)*l,d=Math.sin(g+qs)*(s?s/2-c:l),t.arc(n-h,i-a,c,g-At,g-yn),t.arc(n+d,i-o,c,g-yn,g),t.arc(n+h,i+a,c,g,g+yn),t.arc(n-d,i+o,c,g+yn,g+At),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*m,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}g+=qs;case"rectRot":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,d=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+d,i-o),t.lineTo(n+h,i+a),t.lineTo(n-d,i+o),t.closePath();break;case"crossRot":g+=qs;case"cross":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,d=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"star":h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,d=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o),g+=qs,h=Math.cos(g)*(s?s/2:m),o=Math.cos(g)*m,a=Math.sin(g)*m,d=Math.sin(g)*(s?s/2:m),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"line":o=s?s/2:Math.cos(g)*m,a=Math.sin(g)*m,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(g)*(s?s/2:m),i+Math.sin(g)*m);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Bi(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function by(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function wy(t){t.restore()}function fV(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function pV(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function gV(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),st(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function mV(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function _V(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Dr(t,e,n,i,s,r={}){const o=ht(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,gV(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&_V(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),st(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),mV(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Nh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-yn,At,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,At,yn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,yn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-yn,!0),t.lineTo(n+o.topLeft,i)}const yV=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vV=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function bV(t,e){const n=(""+t).match(yV);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const wV=t=>+t||0;function ZC(t,e){const n={},i=$e(e),s=i?Object.keys(e):e,r=$e(t)?i?o=>De(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=wV(r(o));return n}function EV(t){return ZC(t,{top:"y",right:"x",bottom:"y",left:"x"})}function yo(t){return ZC(t,["topLeft","topRight","bottomLeft","bottomRight"])}function on(t){const e=EV(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Tt(t,e){t=t||{},e=e||pt.font;let n=De(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=De(t.style,e.style);i&&!(""+i).match(vV)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:De(t.family,e.family),lineHeight:bV(De(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:De(t.weight,e.weight),string:""};return s.string=hV(s),s}function tu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&ht(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function IV(t,e,n){const{min:i,max:s}=t,r=LB(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Hs(t,e){return Object.assign(Object.create(t),e)}function Ey(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=ik("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ey([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return tk(a,l,()=>DV(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return Ib(a).includes(l)},ownKeys(a){return Ib(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function $o(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:ek(t,i),setContext:r=>$o(t,r,n,i),override:r=>$o(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return tk(r,o,()=>xV(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function ek(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Fs(n)?n:()=>n,isIndexable:Fs(i)?i:()=>i}}const TV=(t,e)=>t?t+py(e):e,Iy=(t,e)=>$e(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function tk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function xV(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Fs(a)&&o.isScriptable(e)&&(a=CV(e,a,t,n)),ht(a)&&a.length&&(a=kV(e,a,t,o.isIndexable)),Iy(e,a)&&(a=$o(a,s,r&&r[e],o)),a}function CV(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),Iy(t,l)&&(l=Ty(s._scopes,s,t,l)),l}function kV(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if($e(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=Ty(c,s,t,u);e.push($o(h,r,o&&o[t],a))}}return e}function nk(t,e,n){return Fs(t)?t(e,n):t}const SV=(t,e)=>t===!0?e:typeof t=="string"?Dh(e,t):void 0;function AV(t,e,n,i,s){for(const r of e){const o=SV(n,r);if(o){t.add(o);const a=nk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Ty(t,e,n,i){const s=e._rootScopes,r=nk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=Eb(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=Eb(a,o,r,l,i),l===null)?!1:Ey(Array.from(a),[""],s,r,()=>RV(e,n,i))}function Eb(t,e,n,i,s){for(;n;)n=AV(t,e,n,i,s);return n}function RV(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return ht(s)&&$e(n)?n:s||{}}function DV(t,e,n,i){let s;for(const r of e)if(s=ik(TV(r,t),n),typeof s<"u")return Iy(t,s)?Ty(n,i,t,s):s}function ik(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Ib(t){let e=t._keys;return e||(e=t._keys=OV(t._scopes)),e}function OV(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const MV=Number.EPSILON||1e-14,zo=(t,e)=>e<t.length&&!t[e].skip&&t[e],sk=t=>t==="x"?"y":"x";function PV(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Sg(r,s),l=Sg(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,d=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function NV(t,e,n){const i=t.length;let s,r,o,a,l,c=zo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=zo(t,u+1),!(!l||!c)){if(Ya(e[u],0,MV)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function LV(t,e,n="x"){const i=sk(n),s=t.length;let r,o,a,l=zo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=zo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function FV(t,e="x"){const n=sk(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=zo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=zo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?Vo(s[o-1])!==Vo(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}NV(t,s,r),LV(t,r,e)}function nu(t,e,n){return Math.max(Math.min(t,n),e)}function UV(t,e){let n,i,s,r,o,a=Bi(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Bi(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=nu(s.cp1x,e.left,e.right),s.cp1y=nu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=nu(s.cp2x,e.left,e.right),s.cp2y=nu(s.cp2y,e.top,e.bottom)))}function BV(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")FV(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=PV(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&UV(t,n)}function rk(){return typeof window<"u"&&typeof document<"u"}function xy(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Lh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Qd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function VV(t,e){return Qd(t).getPropertyValue(e)}const $V=["top","right","bottom","left"];function yr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=$V[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const zV=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function HV(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(zV(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Zs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Qd(n),r=s.boxSizing==="border-box",o=yr(s,"padding"),a=yr(s,"border","width"),{x:l,y:c,box:u}=HV(t,n),h=o.left+(u&&a.left),d=o.top+(u&&a.top);let{width:f,height:p}=e;return r&&(f-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/f*n.width/i),y:Math.round((c-d)/p*n.height/i)}}function jV(t,e,n){let i,s;if(e===void 0||n===void 0){const r=xy(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=Qd(r),l=yr(a,"border","width"),c=yr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=Lh(a.maxWidth,r,"clientWidth"),s=Lh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Mh,maxHeight:s||Mh}}const iu=t=>Math.round(t*10)/10;function WV(t,e,n,i){const s=Qd(t),r=yr(s,"margin"),o=Lh(s.maxWidth,t,"clientWidth")||Mh,a=Lh(s.maxHeight,t,"clientHeight")||Mh,l=jV(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const d=yr(s,"border","width"),f=yr(s,"padding");c-=f.width+d.width,u-=f.height+d.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=iu(Math.min(c,o,l.maxWidth)),u=iu(Math.min(u,a,l.maxHeight)),c&&!u&&(u=iu(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=iu(Math.floor(u*i))),{width:c,height:u}}function Tb(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const qV=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function xb(t,e){const n=VV(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function er(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function KV(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function GV(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=er(t,s,n),a=er(s,r,n),l=er(r,e,n),c=er(o,a,n),u=er(a,l,n);return er(c,u,n)}const YV=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},XV=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function vo(t,e,n){return t?YV(e,n):XV()}function ok(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function ak(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function lk(t){return t==="angle"?{between:KC,compare:KB,normalize:zn}:{between:ka,compare:(e,n)=>e-n,normalize:e=>e}}function Cb({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function QV(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=lk(i),l=e.length;let{start:c,end:u,loop:h}=t,d,f;if(h){for(c+=l,u+=l,d=0,f=l;d<f&&o(a(e[c%l][i]),s,r);++d)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function JV(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=lk(i),{start:u,end:h,loop:d,style:f}=QV(t,e,n),p=[];let m=!1,g=null,_,v,E;const T=()=>l(s,E,_)&&a(s,E)!==0,b=()=>a(r,_)===0||l(r,E,_),x=()=>m||T(),k=()=>!m||b();for(let C=u,F=u;C<=h;++C)v=e[C%o],!v.skip&&(_=c(v[i]),_!==E&&(m=l(_,s,r),g===null&&x()&&(g=a(_,s)===0?C:F),g!==null&&k()&&(p.push(Cb({start:g,end:C,loop:d,count:o,style:f})),g=null),F=C,E=_));return g!==null&&p.push(Cb({start:g,end:h,loop:d,count:o,style:f})),p}function ZV(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=JV(i[s],t.points,e);r.length&&n.push(...r)}return n}function e$(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function t$(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function n$(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=e$(n,s,r,i);if(i===!0)return kb(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return kb(t,t$(n,o,l,c),n,e)}function kb(t,e,n,i){return!i||!i.setContext||!n?e:i$(t,e,n,i)}function i$(t,e,n,i){const s=t._chart.getContext(),r=Sb(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,d=h;function f(p,m,g,_){const v=a?-1:1;if(p!==m){for(p+=l;n[p%l].skip;)p-=v;for(;n[m%l].skip;)m+=v;p%l!==m%l&&(c.push({start:p%l,end:m%l,loop:g,style:_}),u=_,h=m%l)}}for(const p of e){h=a?h:p.start;let m=n[h%l],g;for(d=h+1;d<=p.end;d++){const _=n[d%l];g=Sb(i.setContext(Hs(s,{type:"segment",p0:m,p1:_,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),s$(g,u)&&f(h,d-1,p.loop,u),m=_,u=g}h<d-1&&f(h,d-1,p.loop,u)}return c}function Sb(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function s$(t,e){if(!e)return!1;const n=[],i=function(s,r){return yy(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class r${constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=YC.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ai=new r$;const Ab="transparent",o$={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=vb(t||Ab),s=i.valid&&vb(e||Ab);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class a${constructor(e,n,i,s){const r=n[i];s=tu([e.to,s,r,e.from]);const o=tu([e.from,r,s]);this._active=!0,this._fn=e.fn||o$[e.type||typeof o],this._easing=Xa[e.easing]||Xa.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=tu([e.to,n,s,e.from]),this._from=tu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class ck{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!$e(e))return;const n=Object.keys(pt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!$e(r))return;const o={};for(const a of n)o[a]=r[a];(ht(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=c$(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&l$(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const d=i.get(c);if(h)if(d&&h.active()){h.update(d,u,a);continue}else h.cancel();if(!d||!d.duration){e[c]=u;continue}r[c]=h=new a$(d,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ai.add(this._chart,i),!0}}function l$(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function c$(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Rb(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function u$(t,e,n){if(n===!1)return!1;const i=Rb(t,n),s=Rb(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function h$(t){let e,n,i,s;return $e(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function uk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function Db(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],Pt(c)&&(r||e===0||Vo(e)===Vo(c))&&(e+=c)}return e}}function d$(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function Ob(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function f$(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function p$(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function g$(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Mb(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function Pb(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=f$(r,o,i),h=e.length;let d;for(let f=0;f<h;++f){const p=e[f],{[l]:m,[c]:g}=p,_=p._stacks||(p._stacks={});d=_[c]=g$(s,u,m),d[a]=g,d._top=Mb(d,o,!0,i.type),d._bottom=Mb(d,o,!1,i.type);const v=d._visualValues||(d._visualValues={});v[a]=g}}function Kf(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function m$(t,e){return Hs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function _$(t,e,n){return Hs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function pa(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Gf=t=>t==="reset"||t==="none",Nb=(t,e)=>e?t:Object.assign({},t),y$=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:uk(n,!0),values:null};class Ja{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Ob(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&pa(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,d,f,p)=>h==="x"?d:h==="r"?p:f,r=n.xAxisID=De(i.xAxisID,Kf(e,"x")),o=n.yAxisID=De(i.yAxisID,Kf(e,"y")),a=n.rAxisID=De(i.rAxisID,Kf(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&mb(this._data,this),e._stacked&&pa(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if($e(n))this._data=d$(n);else if(i!==n){if(i){mb(i,this);const s=this._cachedMeta;pa(s),s._parsed=[]}n&&Object.isExtensible(n)&&QB(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=Ob(n.vScale,n),n.stack!==i.stack&&(s=!0,pa(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&Pb(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,d;if(this._parsing===!1)i._parsed=s,i._sorted=!0,d=s;else{ht(s[e])?d=this.parseArrayData(i,s,e,n):$e(s[e])?d=this.parseObjectData(i,s,e,n):d=this.parsePrimitiveData(i,s,e,n);const f=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=d[u],l&&(f()&&(l=!1),c=h);i._sorted=l}o&&Pb(this,d)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let d,f,p;for(d=0,f=s;d<f;++d)p=d+i,h[d]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,d,f;for(u=0,h=s;u<h;++u)d=u+i,f=n[d],c[u]={x:r.parse(Dh(f,a),d),y:o.parse(Dh(f,l),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:uk(s,!0),values:n._stacks[e.axis]._visualValues};return Db(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=Db(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=y$(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=p$(a);let d,f;function p(){f=s[d];const m=f[a.axis];return!Pt(f[e.axis])||u>m||h<m}for(d=0;d<o&&!(!p()&&(this.updateRangeFromParsed(c,e,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Pt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=h$(De(this.options.clip,u$(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=_$(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=m$(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&Oh(i);if(a)return Nb(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],d=c.getOptionScopes(this.getDataset(),u),f=Object.keys(pt.elements[e]),p=()=>this.getContext(i,s,n),m=c.resolveNamedOptions(d,f,p,h);return m.$shared&&(m.$shared=l,r[o]=Object.freeze(Nb(m,l))),m}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(d,this.getContext(e,i,n))}const c=new ck(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Gf(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Gf(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Gf(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&pa(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}le(Ja,"defaults",{}),le(Ja,"datasetElementType",null),le(Ja,"dataElementType",null);class Su extends Ja{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=tV(n,s,o);this._drawStart=a,this._drawCount=l,nV(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),d=o.axis,f=a.axis,{spanGaps:p,segment:m}=this.options,g=Ml(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",v=n+i,E=e.length;let T=n>0&&this.getParsed(n-1);for(let b=0;b<E;++b){const x=e[b],k=_?x:{};if(b<n||b>=v){k.skip=!0;continue}const C=this.getParsed(b),F=st(C[f]),Z=k[d]=o.getPixelForValue(C[d],b),ee=k[f]=r||F?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[f],b);k.skip=isNaN(Z)||isNaN(ee)||F,k.stop=b>0&&Math.abs(C[d]-T[d])>g,m&&(k.parsed=C,k.raw=c.data[b]),h&&(k.options=u||this.resolveDataElementOptions(b,x.active?"active":s)),_||this.updateElement(x,b,k,s),T=C}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}le(Su,"id","line"),le(Su,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),le(Su,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Gs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Cy{constructor(e){le(this,"options");this.options=e||{}}static override(e){Object.assign(Cy.prototype,e)}init(){}formats(){return Gs()}parse(){return Gs()}format(){return Gs()}add(){return Gs()}diff(){return Gs()}startOf(){return Gs()}endOf(){return Gs()}}var v$={_date:Cy};function b$(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?YB:hr;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),d=l(r,e,n+u);return{lo:h.lo,hi:d.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function wc(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:d}=b$(r[a],e,o,s);for(let f=h;f<=d;++f){const p=u[f];p.skip||i(p,c,f)}}}function w$(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Yf(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||wc(t,n,e,function(a,l,c){!s&&!Bi(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function E$(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=qB(o,{x:e.x,y:e.y});KC(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return wc(t,n,e,r),s}function I$(t,e,n,i,s,r){let o=[];const a=w$(n);let l=Number.POSITIVE_INFINITY;function c(u,h,d){const f=u.inRange(e.x,e.y,s);if(i&&!f)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!f)return;const g=a(e,p);g<l?(o=[{element:u,datasetIndex:h,index:d}],l=g):g===l&&o.push({element:u,datasetIndex:h,index:d})}return wc(t,n,e,c),o}function Xf(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?E$(t,e,n,s):I$(t,e,n,i,s,r)}function Lb(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return wc(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var T$={evaluateInteractionItems:wc,modes:{index(t,e,n,i){const s=Zs(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Yf(t,s,r,i,o):Xf(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Yf(t,s,r,i,o):Xf(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Yf(t,s,r,i,o)},nearest(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Xf(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=Zs(e,t);return Lb(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=Zs(e,t);return Lb(t,s,"y",n.intersect,i)}}};const hk=["left","top","right","bottom"];function ga(t,e){return t.filter(n=>n.pos===e)}function Fb(t,e){return t.filter(n=>hk.indexOf(n.pos)===-1&&n.box.axis===e)}function ma(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function x$(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function C$(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!hk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function k$(t,e){const n=C$(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function S$(t){const e=x$(t),n=ma(e.filter(c=>c.box.fullSize),!0),i=ma(ga(e,"left"),!0),s=ma(ga(e,"right")),r=ma(ga(e,"top"),!0),o=ma(ga(e,"bottom")),a=Fb(e,"x"),l=Fb(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:ga(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Ub(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function dk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function A$(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!$e(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&dk(o,r.getPadding());const a=Math.max(0,e.outerWidth-Ub(o,t,"left","right")),l=Math.max(0,e.outerHeight-Ub(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function R$(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function D$(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Sa(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,D$(a.horizontal,e));const{same:h,other:d}=A$(e,n,a,i);c|=h&&s.length,u=u||d,l.fullSize||s.push(a)}return c&&Sa(s,e,n,i)||u}function su(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function Bb(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,d=c.size||l.height;Oh(c.start)&&(o=c.start),l.fullSize?su(l,s.left,o,n.outerWidth-s.right-s.left,d):su(l,e.left+c.placed,o,h,d),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,d=c.size||l.width;Oh(c.start)&&(r=c.start),l.fullSize?su(l,r,s.top,d,n.outerHeight-s.bottom-s.top):su(l,r,e.top+c.placed,d,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var Un={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=on(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=S$(t.boxes),l=a.vertical,c=a.horizontal;We(t.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const u=l.reduce((m,g)=>g.box.options&&g.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),d=Object.assign({},s);dk(d,on(i));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),p=k$(l.concat(c),h);Sa(a.fullSize,f,h,p),Sa(l,f,h,p),Sa(c,f,h,p)&&Sa(l,f,h,p),R$(f),Bb(a.leftAndTop,f,h,p),f.x+=f.w,f.y+=f.h,Bb(a.rightAndBottom,f,h,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},We(a.chartArea,m=>{const g=m.box;Object.assign(g,t.chartArea),g.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class fk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class O$ extends fk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Au="$chartjs",M$={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Vb=t=>t===null||t==="";function P$(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Au]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Vb(s)){const r=xb(t,"width");r!==void 0&&(t.width=r)}if(Vb(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=xb(t,"height");r!==void 0&&(t.height=r)}return t}const pk=qV?{passive:!0}:!1;function N$(t,e,n){t.addEventListener(e,n,pk)}function L$(t,e,n){t.canvas.removeEventListener(e,n,pk)}function F$(t,e){const n=M$[t.type]||t.type,{x:i,y:s}=Zs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Fh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function U$(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fh(a.addedNodes,i),o=o&&!Fh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function B$(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Fh(a.removedNodes,i),o=o&&!Fh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Pl=new Map;let $b=0;function gk(){const t=window.devicePixelRatio;t!==$b&&($b=t,Pl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function V$(t,e){Pl.size||window.addEventListener("resize",gk),Pl.set(t,e)}function $$(t){Pl.delete(t),Pl.size||window.removeEventListener("resize",gk)}function z$(t,e,n){const i=t.canvas,s=i&&xy(i);if(!s)return;const r=XC((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),V$(t,r),o}function Qf(t,e,n){n&&n.disconnect(),e==="resize"&&$$(t)}function H$(t,e,n){const i=t.canvas,s=XC(r=>{t.ctx!==null&&n(F$(r,t))},t);return N$(i,e,s),s}class j$ extends fk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(P$(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Au])return!1;const i=n[Au].initial;["height","width"].forEach(r=>{const o=i[r];st(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Au],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:U$,detach:B$,resize:z$}[n]||H$;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Qf,detach:Qf,resize:Qf}[n]||L$)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return WV(e,n,i,s)}isAttached(e){const n=xy(e);return!!(n&&n.isConnected)}}function W$(t){return!rk()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?O$:j$}var hu;let Hr=(hu=class{constructor(){le(this,"x");le(this,"y");le(this,"active",!1);le(this,"options");le(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ml(this.x)&&Ml(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},le(hu,"defaults",{}),le(hu,"defaultRoutes"),hu);function q$(t,e){const n=t.options.ticks,i=K$(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?Y$(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return X$(e,c,r,o/s),c;const u=G$(r,e,s);if(o>0){let h,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(ru(e,c,u,st(f)?0:a-f,a),h=0,d=o-1;h<d;h++)ru(e,c,u,r[h],r[h+1]);return ru(e,c,u,l,st(f)?e.length:l+f),c}return ru(e,c,u),c}function K$(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function G$(t,e,n){const i=Q$(t),s=e.length/n;if(!i)return Math.max(s,1);const r=jB(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function Y$(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function X$(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function ru(t,e,n,i,s){const r=De(i,0),o=Math.min(De(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function Q$(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const J$=t=>t==="left"?"right":t==="right"?"left":t,zb=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,Hb=(t,e)=>Math.min(e||t,t);function jb(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Z$(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function ez(t,e){We(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function _a(t){return t.drawTicks?t.tickLength:0}function Wb(t,e){if(!t.display)return 0;const n=Tt(t.font,e),i=on(t.padding);return(ht(t.text)?t.text.length:1)*n.lineHeight+i.height}function tz(t,e){return Hs(t,{scale:e,type:"scale"})}function nz(t,e,n){return Hs(t,{tick:n,index:e,type:"tick"})}function iz(t,e,n){let i=_y(t);return(n&&e!=="right"||!n&&e==="right")&&(i=J$(i)),i}function sz(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,d,f,p;const m=o-s,g=a-r;if(t.isHorizontal()){if(f=qt(i,r,a),$e(n)){const _=Object.keys(n)[0],v=n[_];p=u[_].getPixelForValue(v)+m-e}else n==="center"?p=(c.bottom+c.top)/2+m-e:p=zb(t,n,e);d=a-r}else{if($e(n)){const _=Object.keys(n)[0],v=n[_];f=u[_].getPixelForValue(v)-g+e}else n==="center"?f=(c.left+c.right)/2-g+e:f=zb(t,n,e);p=qt(i,o,s),h=n==="left"?-yn:yn}return{titleX:f,titleY:p,maxWidth:d,rotation:h}}class jr extends Hr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=En(e,Number.POSITIVE_INFINITY),n=En(n,Number.NEGATIVE_INFINITY),i=En(i,Number.POSITIVE_INFINITY),s=En(s,Number.NEGATIVE_INFINITY),{min:En(e,i),max:En(n,s),minDefined:Pt(e),maxDefined:Pt(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:En(n,En(i,n)),max:En(i,En(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Qe(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=IV(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?jb(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=q$(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Qe(this.options.afterUpdate,[this])}beforeSetDimensions(){Qe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Qe(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Qe(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Qe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Qe(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Qe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Qe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=Hb(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,d=u.highest.height,f=Fn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(e.offset?.5:1)),l=this.maxHeight-_a(e.grid)-n.padding-Wb(e.title,this.chart.options.font),c=Math.sqrt(h*h+d*d),o=gy(Math.min(Math.asin(Fn((u.highest.height+6)/a,-1,1)),Math.asin(Fn(l/c,-1,1))-Math.asin(Fn(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Qe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Qe(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Wb(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=_a(r)+l):(e.height=this.maxHeight,e.width=_a(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:d}=this._getLabelSizes(),f=i.padding*2,p=ys(this.labelRotation),m=Math.cos(p),g=Math.sin(p);if(a){const _=i.mirror?0:g*h.width+m*d.height;e.height=Math.min(this.maxHeight,e.height+_+f)}else{const _=i.mirror?0:m*h.width+g*d.height;e.width=Math.min(this.maxWidth,e.width+_+f)}this._calculatePadding(c,u,g,m)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*e.width,f=i*n.height):(d=i*e.height,f=s*n.width):r==="start"?f=n.width:r==="end"?d=e.width:r!=="inner"&&(d=e.width/2,f=n.width/2),this.paddingLeft=Math.max((d-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Qe(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)st(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=jb(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/Hb(n,i));let c=0,u=0,h,d,f,p,m,g,_,v,E,T,b;for(h=0;h<n;h+=l){if(p=e[h].label,m=this._resolveTickFontOptions(h),s.font=g=m.string,_=r[g]=r[g]||{data:{},gc:[]},v=m.lineHeight,E=T=0,!st(p)&&!ht(p))E=Ph(s,_.data,_.gc,E,p),T=v;else if(ht(p))for(d=0,f=p.length;d<f;++d)b=p[d],!st(b)&&!ht(b)&&(E=Ph(s,_.data,_.gc,E,b),T+=v);o.push(E),a.push(T),c=Math.max(E,c),u=Math.max(T,u)}ez(r,n);const x=o.indexOf(c),k=a.indexOf(u),C=F=>({width:o[F]||0,height:a[F]||0});return{first:C(0),last:C(n-1),widest:C(x),highest:C(k),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return GB(this._alignToPixels?Ks(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=nz(this.getContext(),e,i))}return this.$context||(this.$context=tz(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=ys(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),d=_a(r),f=[],p=a.setContext(this.getContext()),m=p.display?p.width:0,g=m/2,_=function(Te){return Ks(i,Te,m)};let v,E,T,b,x,k,C,F,Z,ee,ae,ye;if(o==="top")v=_(this.bottom),k=this.bottom-d,F=v-g,ee=_(e.top)+g,ye=e.bottom;else if(o==="bottom")v=_(this.top),ee=e.top,ye=_(e.bottom)-g,k=v+g,F=this.top+d;else if(o==="left")v=_(this.right),x=this.right-d,C=v-g,Z=_(e.left)+g,ae=e.right;else if(o==="right")v=_(this.left),Z=e.left,ae=_(e.right)-g,x=v+g,C=this.left+d;else if(n==="x"){if(o==="center")v=_((e.top+e.bottom)/2+.5);else if($e(o)){const Te=Object.keys(o)[0],we=o[Te];v=_(this.chart.scales[Te].getPixelForValue(we))}ee=e.top,ye=e.bottom,k=v+g,F=k+d}else if(n==="y"){if(o==="center")v=_((e.left+e.right)/2);else if($e(o)){const Te=Object.keys(o)[0],we=o[Te];v=_(this.chart.scales[Te].getPixelForValue(we))}x=v-g,C=x-d,Z=e.left,ae=e.right}const Ye=De(s.ticks.maxTicksLimit,h),ve=Math.max(1,Math.ceil(h/Ye));for(E=0;E<h;E+=ve){const Te=this.getContext(E),we=r.setContext(Te),Le=a.setContext(Te),Ht=we.lineWidth,hn=we.color,jt=Le.dash||[],mt=Le.dashOffset,Pn=we.tickWidth,ri=we.tickColor,D=we.tickBorderDash||[],H=we.tickBorderDashOffset;T=Z$(this,E,l),T!==void 0&&(b=Ks(i,T,Ht),c?x=C=Z=ae=b:k=F=ee=ye=b,f.push({tx1:x,ty1:k,tx2:C,ty2:F,x1:Z,y1:ee,x2:ae,y2:ye,width:Ht,color:hn,borderDash:jt,borderDashOffset:mt,tickWidth:Pn,tickColor:ri,tickBorderDash:D,tickBorderDashOffset:H}))}return this._ticksLength=h,this._borderValue=v,f}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,d=_a(i.grid),f=d+u,p=h?-u:f,m=-ys(this.labelRotation),g=[];let _,v,E,T,b,x,k,C,F,Z,ee,ae,ye="middle";if(s==="top")x=this.bottom-p,k=this._getXAxisLabelAlignment();else if(s==="bottom")x=this.top+p,k=this._getXAxisLabelAlignment();else if(s==="left"){const ve=this._getYAxisLabelAlignment(d);k=ve.textAlign,b=ve.x}else if(s==="right"){const ve=this._getYAxisLabelAlignment(d);k=ve.textAlign,b=ve.x}else if(n==="x"){if(s==="center")x=(e.top+e.bottom)/2+f;else if($e(s)){const ve=Object.keys(s)[0],Te=s[ve];x=this.chart.scales[ve].getPixelForValue(Te)+f}k=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")b=(e.left+e.right)/2-f;else if($e(s)){const ve=Object.keys(s)[0],Te=s[ve];b=this.chart.scales[ve].getPixelForValue(Te)}k=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?ye="top":l==="end"&&(ye="bottom"));const Ye=this._getLabelSizes();for(_=0,v=a.length;_<v;++_){E=a[_],T=E.label;const ve=r.setContext(this.getContext(_));C=this.getPixelForTick(_)+r.labelOffset,F=this._resolveTickFontOptions(_),Z=F.lineHeight,ee=ht(T)?T.length:1;const Te=ee/2,we=ve.color,Le=ve.textStrokeColor,Ht=ve.textStrokeWidth;let hn=k;o?(b=C,k==="inner"&&(_===v-1?hn=this.options.reverse?"left":"right":_===0?hn=this.options.reverse?"right":"left":hn="center"),s==="top"?c==="near"||m!==0?ae=-ee*Z+Z/2:c==="center"?ae=-Ye.highest.height/2-Te*Z+Z:ae=-Ye.highest.height+Z/2:c==="near"||m!==0?ae=Z/2:c==="center"?ae=Ye.highest.height/2-Te*Z:ae=Ye.highest.height-ee*Z,h&&(ae*=-1),m!==0&&!ve.showLabelBackdrop&&(b+=Z/2*Math.sin(m))):(x=C,ae=(1-ee)*Z/2);let jt;if(ve.showLabelBackdrop){const mt=on(ve.backdropPadding),Pn=Ye.heights[_],ri=Ye.widths[_];let D=ae-mt.top,H=0-mt.left;switch(ye){case"middle":D-=Pn/2;break;case"bottom":D-=Pn;break}switch(k){case"center":H-=ri/2;break;case"right":H-=ri;break}jt={left:H,top:D,width:ri+mt.width,height:Pn+mt.height,color:ve.backdropColor}}g.push({label:T,font:F,textOffset:ae,options:{rotation:m,color:we,strokeColor:Le,strokeWidth:Ht,textAlign:hn,textBaseline:ye,translation:[b,x],backdrop:jt}})}return g}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-ys(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,d;this.isHorizontal()?(c=Ks(e,this.left,o)-o/2,u=Ks(e,this.right,a)+a/2,h=d=l):(h=Ks(e,this.top,o)-o/2,d=Ks(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&by(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Dr(i,c,0,u,l,a)}s&&wy(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=Tt(i.font),o=on(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||$e(n)?(l+=o.bottom,ht(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:d}=sz(this,l,n,a);Dr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:d,textAlign:iz(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=De(e.grid&&e.grid.z,-1),s=De(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==jr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Tt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class ou{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;az(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,rz(e,o,i),this.override&&pt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in pt[s]&&(delete pt[s][i],this.override&&delete Rr[i])}}function rz(t,e,n){const i=Ol(Object.create(null),[n?pt.get(n):{},pt.get(e),t.defaults]);pt.set(e,i),t.defaultRoutes&&oz(e,t.defaultRoutes),t.descriptors&&pt.describe(e,t.descriptors)}function oz(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");pt.route(r,s,l,a)})}function az(t){return"id"in t&&"defaults"in t}class lz{constructor(){this.controllers=new ou(Ja,"datasets",!0),this.elements=new ou(Hr,"elements"),this.plugins=new ou(Object,"plugins"),this.scales=new ou(jr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):We(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=py(e);Qe(i["before"+s],[],i),n[e](i),Qe(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var ci=new lz;class cz{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Qe(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){st(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=De(i.options&&i.options.plugins,{}),r=uz(i);return s===!1&&!n?[]:dz(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function uz(t){const e={},n=[],i=Object.keys(ci.plugins.items);for(let r=0;r<i.length;r++)n.push(ci.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function hz(t,e){return!e&&t===!1?null:t===!0?{}:t}function dz(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=hz(i[l],s);c!==null&&r.push({plugin:a,options:fz(t.config,{plugin:a,local:n[l]},c,o)})}return r}function fz(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Dg(t,e){const n=pt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function pz(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function gz(t,e){return t===e?"_index_":"_value_"}function qb(t){if(t==="x"||t==="y"||t==="r")return t}function mz(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Og(t,...e){if(qb(t))return t;for(const n of e){const i=n.axis||mz(n.position)||t.length>1&&qb(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Kb(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function _z(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return Kb(t,"x",n[0])||Kb(t,"y",n[0])}return{}}function yz(t,e){const n=Rr[t.type]||{scales:{}},i=e.scales||{},s=Dg(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!$e(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Og(o,a,_z(o,t),pt.scales[a.type]),c=gz(l,s),u=n.scales||{};r[o]=Ga(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Dg(a,e),u=(Rr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const d=pz(h,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),Ga(r[f],[{axis:d},i[f],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ga(a,[pt.scales[a.type],pt.scale])}),r}function mk(t){const e=t.options||(t.options={});e.plugins=De(e.plugins,{}),e.scales=yz(t,e)}function _k(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function vz(t){return t=t||{},t.data=_k(t.data),mk(t),t}const Gb=new Map,yk=new Set;function au(t,e){let n=Gb.get(t);return n||(n=e(),Gb.set(t,n),yk.add(n)),n}const ya=(t,e,n)=>{const i=Dh(e,n);i!==void 0&&t.add(i)};class bz{constructor(e){this._config=vz(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=_k(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),mk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return au(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return au(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return au(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return au(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>ya(l,e,h))),u.forEach(h=>ya(l,s,h)),u.forEach(h=>ya(l,Rr[r]||{},h)),u.forEach(h=>ya(l,pt,h)),u.forEach(h=>ya(l,Ag,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),yk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Rr[n]||{},pt.datasets[n]||{},{type:n},pt,Ag]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Yb(this._resolverCache,e,s);let l=o;if(Ez(o,n)){r.$shared=!1,i=Fs(i)?i():i;const c=this.createResolver(e,i,a);l=$o(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=Yb(this._resolverCache,e,i);return $e(n)?$o(r,n,void 0,s):r}}function Yb(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:Ey(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const wz=t=>$e(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Fs(t[n]),!1);function Ez(t,e){const{isScriptable:n,isIndexable:i}=ek(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Fs(a)||wz(a))||o&&ht(a))return!0}return!1}var Iz="4.3.0";const Tz=["top","bottom","left","right","chartArea"];function Xb(t,e){return t==="top"||t==="bottom"||Tz.indexOf(t)===-1&&e==="x"}function Qb(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Jb(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Qe(n&&n.onComplete,[t],e)}function xz(t){const e=t.chart,n=e.options.animation;Qe(n&&n.onProgress,[t],e)}function vk(t){return rk()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ru={},Zb=t=>{const e=vk(t);return Object.values(Ru).filter(n=>n.canvas===e).pop()};function Cz(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function kz(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Sz(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var as;let Jd=(as=class{static register(...e){ci.add(...e),ew()}static unregister(...e){ci.remove(...e),ew()}constructor(e,n){const i=this.config=new bz(n),s=vk(e),r=Zb(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||W$(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=NB(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new cz,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ZB(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ru[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ai.listen(this,"complete",Jb),Ai.listen(this,"progress",xz),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return st(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ci}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Tb(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return wb(this.canvas,this.ctx),this}stop(){return Ai.stop(this),this}resize(e,n){Ai.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Tb(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Qe(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};We(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Og(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),We(r,o=>{const a=o.options,l=a.id,c=Og(l,a),u=De(a.type,o.dtype);(a.position===void 0||Xb(a.position,c)!==Xb(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const d=ci.getScale(u);h=new d({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),We(s,(o,a)=>{o||delete i[a]}),We(i,o=>{Un.configure(this,o,o.options),Un.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(Qb("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Dg(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=ci.getController(a),{datasetElementType:c,dataElementType:u}=pt.datasets[a];Object.assign(l,{dataElementType:ci.getElement(u),datasetElementType:c&&ci.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){We(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),d=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(d),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||We(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Qb("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){We(this.scales,e=>{Un.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!db(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;Cz(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!db(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Un.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],We(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Fs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ai.has(this)?this.attached&&!Ai.running(this)&&Ai.start(this):(this.draw(),Jb({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=Sz(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&by(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&wy(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Bi(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=T$.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Hs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Oh(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ai.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),wb(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Ru[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};We(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){We(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},We(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Ah(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=$B(e),c=kz(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Qe(r.onHover,[e,a,this],this),l&&Qe(r.onClick,[e,a,this],this));const u=!Ah(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},le(as,"defaults",pt),le(as,"instances",Ru),le(as,"overrides",Rr),le(as,"registry",ci),le(as,"version",Iz),le(as,"getChart",Zb),as);function ew(){return We(Jd.instances,t=>t._plugins.invalidate())}function bk(t,e,n=e){t.lineCap=De(n.borderCapStyle,e.borderCapStyle),t.setLineDash(De(n.borderDash,e.borderDash)),t.lineDashOffset=De(n.borderDashOffset,e.borderDashOffset),t.lineJoin=De(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=De(n.borderWidth,e.borderWidth),t.strokeStyle=De(n.borderColor,e.borderColor)}function Az(t,e,n){t.lineTo(n.x,n.y)}function Rz(t){return t.stepped?fV:t.tension||t.cubicInterpolationMode==="monotone"?pV:Az}function wk(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function Dz(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=wk(s,n,i),u=Rz(r);let{move:h=!0,reverse:d}=i||{},f,p,m;for(f=0;f<=c;++f)p=s[(a+(d?c-f:f))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,m,p,d,r.stepped),m=p);return l&&(p=s[(a+(d?c:0))%o],u(t,m,p,d,r.stepped)),!!l}function Oz(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=wk(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,d,f,p,m,g,_;const v=T=>(o+(c?a-T:T))%r,E=()=>{m!==g&&(t.lineTo(u,g),t.lineTo(u,m),t.lineTo(u,_))};for(l&&(f=s[v(0)],t.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[v(d)],f.skip)continue;const T=f.x,b=f.y,x=T|0;x===p?(b<m?m=b:b>g&&(g=b),u=(h*u+T)/++h):(E(),t.lineTo(T,b),p=x,h=0,m=g=b),_=b}E()}function Mg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?Oz:Dz}function Mz(t){return t.stepped?KV:t.tension||t.cubicInterpolationMode==="monotone"?GV:er}function Pz(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),bk(t,e.options),t.stroke(s)}function Nz(t,e,n,i){const{segments:s,options:r}=e,o=Mg(e);for(const a of s)bk(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const Lz=typeof Path2D=="function";function Fz(t,e,n,i){Lz&&!e.options.segment?Pz(t,e,n,i):Nz(t,e,n,i)}class Aa extends Hr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;BV(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=n$(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=ZV(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=Mz(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:d}=o[c],f=r[h],p=r[d];if(f===p){a.push(f);continue}const m=Math.abs((s-f[n])/(p[n]-f[n])),g=l(f,p,m,i.stepped);g[n]=e[n],a.push(g)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Mg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Mg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),Fz(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}le(Aa,"id","line"),le(Aa,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),le(Aa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),le(Aa,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function tw(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Du extends Hr{constructor(n){super();le(this,"parsed");le(this,"skip");le(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return tw(this,n,"x",i)}inYRange(n,i){return tw(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Bi(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Rg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}le(Du,"id","point"),le(Du,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),le(Du,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const nw=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},Uz=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class iw extends Hr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Qe(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=Tt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=nw(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-u;return this.legendItems.forEach((p,m)=>{const g=i+n/2+r.measureText(p.text).width;(m===0||c[c.length-1]+g+2*a>o)&&(h+=u,c[c.length-(m>0?0:1)]=0,f+=u,d++),l[m]={left:0,top:f,row:d,width:g,height:s},c[c.length-1]+=g+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,d=0,f=0,p=0,m=0;return this.legendItems.forEach((g,_)=>{const{itemWidth:v,itemHeight:E}=Bz(i,n,r,g,s);_>0&&f+E+2*a>u&&(h+=d+a,c.push({width:d,height:f}),p+=d+a,m++,d=f=0),l[_]={left:p,top:f,col:m,width:v,height:E},d=Math.max(d,v),f+=E+a}),h+=d,c.push({width:d,height:f}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=vo(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=qt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=qt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=qt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=qt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;by(e,this),this._draw(),wy(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=pt.color,l=vo(e.rtl,this.left,this.width),c=Tt(o.font),{padding:u}=o,h=c.size,d=h/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=nw(o,h),_=function(x,k,C){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;s.save();const F=De(C.lineWidth,1);if(s.fillStyle=De(C.fillStyle,a),s.lineCap=De(C.lineCap,"butt"),s.lineDashOffset=De(C.lineDashOffset,0),s.lineJoin=De(C.lineJoin,"miter"),s.lineWidth=F,s.strokeStyle=De(C.strokeStyle,a),s.setLineDash(De(C.lineDash,[])),o.usePointStyle){const Z={radius:m*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:F},ee=l.xPlus(x,p/2),ae=k+d;JC(s,Z,ee,ae,o.pointStyleWidth&&p)}else{const Z=k+Math.max((h-m)/2,0),ee=l.leftForLtr(x,p),ae=yo(C.borderRadius);s.beginPath(),Object.values(ae).some(ye=>ye!==0)?Nh(s,{x:ee,y:Z,w:p,h:m,radius:ae}):s.rect(ee,Z,p,m),s.fill(),F!==0&&s.stroke()}s.restore()},v=function(x,k,C){Dr(s,C.text,x,k+g/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},E=this.isHorizontal(),T=this._computeTitleHeight();E?f={x:qt(r,this.left+u,this.right-i[0]),y:this.top+u+T,line:0}:f={x:this.left+u,y:qt(r,this.top+T+u,this.bottom-n[0].height),line:0},ok(this.ctx,e.textDirection);const b=g+u;this.legendItems.forEach((x,k)=>{s.strokeStyle=x.fontColor,s.fillStyle=x.fontColor;const C=s.measureText(x.text).width,F=l.textAlign(x.textAlign||(x.textAlign=o.textAlign)),Z=p+d+C;let ee=f.x,ae=f.y;l.setWidth(this.width),E?k>0&&ee+Z+u>this.right&&(ae=f.y+=b,f.line++,ee=f.x=qt(r,this.left+u,this.right-i[f.line])):k>0&&ae+b>this.bottom&&(ee=f.x=ee+n[f.line].width+u,f.line++,ae=f.y=qt(r,this.top+T+u,this.bottom-n[f.line].height));const ye=l.x(ee);if(_(ye,ae,x),ee=eV(F,ee+p+d,E?ee+Z:this.right,e.rtl),v(l.x(ee),ae,x),E)f.x+=Z+u;else if(typeof x.text!="string"){const Ye=c.lineHeight;f.y+=Ek(x,Ye)}else f.y+=b}),ak(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Tt(n.font),s=on(n.padding);if(!n.display)return;const r=vo(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),u=this.top+c,h=qt(e.align,h,this.right-d);else{const p=this.columnSizes.reduce((m,g)=>Math.max(m,g.height),0);u=c+qt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const f=qt(a,h,h+d);o.textAlign=r.textAlign(_y(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Dr(o,n.text,f,u,i)}_computeTitleHeight(){const e=this.options.title,n=Tt(e.font),i=on(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(ka(e,this.left,this.right)&&ka(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],ka(e,s.left,s.left+s.width)&&ka(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!zz(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=Uz(s,i);s&&!r&&Qe(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Qe(n.onHover,[e,i,this],this)}else i&&Qe(n.onClick,[e,i,this],this)}}function Bz(t,e,n,i,s){const r=Vz(i,t,e,n),o=$z(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function Vz(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function $z(t,e,n){let i=t;return typeof e.text!="string"&&(i=Ek(e,n)),i}function Ek(t,e){const n=t.text?t.text.length+.5:0;return e*n}function zz(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Hz={id:"legend",_element:iw,start(t,e,n){const i=t.legend=new iw({ctx:t.ctx,options:n,chart:t});Un.configure(t,i,n),Un.addBox(t,i)},stop(t){Un.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Un.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=on(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Ik extends Hr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=ht(i.text)?i.text.length:1;this._padding=on(i.padding);const r=s*Tt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=qt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=qt(a,s,n),l=At*-.5):(u=r-e,h=qt(a,n,s),l=At*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Tt(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Dr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:_y(n.align),textBaseline:"middle",translation:[o,a]})}}function jz(t,e){const n=new Ik({ctx:t.ctx,options:e,chart:t});Un.configure(t,n,e),Un.addBox(t,n),t.titleBlock=n}var Wz={id:"title",_element:Ik,start(t,e,n){jz(t,n)},stop(t){const e=t.titleBlock;Un.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Un.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ra={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Sg(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function li(t,e){return e&&(ht(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ri(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function qz(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function sw(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=Tt(e.bodyFont),c=Tt(e.titleFont),u=Tt(e.footerFont),h=r.length,d=s.length,f=i.length,p=on(e.padding);let m=p.height,g=0,_=i.reduce((T,b)=>T+b.before.length+b.lines.length+b.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const T=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=f*T+(_-f)*l.lineHeight+(_-1)*e.bodySpacing}d&&(m+=e.footerMarginTop+d*u.lineHeight+(d-1)*e.footerSpacing);let v=0;const E=function(T){g=Math.max(g,n.measureText(T).width+v)};return n.save(),n.font=c.string,We(t.title,E),n.font=l.string,We(t.beforeBody.concat(t.afterBody),E),v=e.displayColors?o+2+e.boxPadding:0,We(i,T=>{We(T.before,E),We(T.lines,E),We(T.after,E)}),v=0,n.font=u.string,We(t.footer,E),n.restore(),g+=p.width,{width:g,height:m}}function Kz(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function Gz(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function Yz(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),Gz(c,t,e,n)&&(c="center"),c}function rw(t,e,n){const i=n.yAlign||e.yAlign||Kz(t,n);return{xAlign:n.xAlign||e.xAlign||Yz(t,e,n,i),yAlign:i}}function Xz(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function Qz(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function ow(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=yo(o);let p=Xz(e,a);const m=Qz(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,d)+s:a==="right"&&(p+=Math.max(h,f)+s),{x:Fn(p,0,i.width-e.width),y:Fn(m,0,i.height-e.height)}}function lu(t,e,n){const i=on(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function aw(t){return li([],Ri(t))}function Jz(t,e,n){return Hs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function lw(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Tk={beforeTitle:Si,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Si,beforeBody:Si,beforeLabel:Si,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return st(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Si,afterBody:Si,beforeFooter:Si,footer:Si,afterFooter:Si};function dn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?Tk[e].call(n,i):s}class Pg extends Hr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new ck(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Jz(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=dn(i,"beforeTitle",this,e),r=dn(i,"title",this,e),o=dn(i,"afterTitle",this,e);let a=[];return a=li(a,Ri(s)),a=li(a,Ri(r)),a=li(a,Ri(o)),a}getBeforeBody(e,n){return aw(dn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return We(e,r=>{const o={before:[],lines:[],after:[]},a=lw(i,r);li(o.before,Ri(dn(a,"beforeLabel",this,r))),li(o.lines,dn(a,"label",this,r)),li(o.after,Ri(dn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return aw(dn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=dn(i,"beforeFooter",this,e),r=dn(i,"footer",this,e),o=dn(i,"afterFooter",this,e);let a=[];return a=li(a,Ri(s)),a=li(a,Ri(r)),a=li(a,Ri(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(qz(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,d)=>e.filter(u,h,d,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),We(a,u=>{const h=lw(e.callbacks,u);s.push(dn(h,"labelColor",this,u)),r.push(dn(h,"labelPointStyle",this,u)),o.push(dn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Ra[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=sw(this,i),c=Object.assign({},a,l),u=rw(this.chart,i,c),h=ow(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=yo(a),{x:d,y:f}=e,{width:p,height:m}=n;let g,_,v,E,T,b;return r==="center"?(T=f+m/2,s==="left"?(g=d,_=g-o,E=T+o,b=T-o):(g=d+p,_=g+o,E=T-o,b=T+o),v=g):(s==="left"?_=d+Math.max(l,u)+o:s==="right"?_=d+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(E=f,T=E-o,g=_-o,v=_+o):(E=f+m,T=E+o,g=_+o,v=_-o),b=E),{x1:g,x2:_,x3:v,y1:E,y2:T,y3:b}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=vo(i.rtl,this.x,this.width);for(e.x=lu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=Tt(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=Tt(r.bodyFont),h=lu(this,"left",r),d=s.x(h),f=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+f;if(r.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},g=s.leftForLtr(d,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Rg(e,m,g,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Rg(e,m,g,_)}else{e.lineWidth=$e(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const m=s.leftForLtr(d,c),g=s.leftForLtr(s.xPlus(d,1),c-2),_=yo(o.borderRadius);Object.values(_).some(v=>v!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Nh(e,{x:m,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Nh(e,{x:g,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(m,p,c,l),e.strokeRect(m,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(g,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=Tt(i.bodyFont);let d=h.lineHeight,f=0;const p=vo(i.rtl,this.x,this.width),m=function(C){n.fillText(C,p.x(e.x+f),e.y+d/2),e.y+=d+r},g=p.textAlign(o);let _,v,E,T,b,x,k;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=lu(this,g,i),n.fillStyle=i.bodyColor,We(this.beforeBody,m),f=a&&g!=="right"?o==="center"?c/2+u:c+2+u:0,T=0,x=s.length;T<x;++T){for(_=s[T],v=this.labelTextColors[T],n.fillStyle=v,We(_.before,m),E=_.lines,a&&E.length&&(this._drawColorBox(n,e,T,p,i),d=Math.max(h.lineHeight,l)),b=0,k=E.length;b<k;++b)m(E[b]),d=h.lineHeight;We(_.after,m)}f=0,d=h.lineHeight,We(this.afterBody,m),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=vo(i.rtl,this.x,this.width);for(e.x=lu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=Tt(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:p}=yo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-d,l),n.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+f,l+u),n.quadraticCurveTo(a,l+u,a,l+u-f),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Ra[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=sw(this,e),l=Object.assign({},o,this._size),c=rw(n,e,l),u=ow(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=on(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),ok(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),ak(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Ah(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Ah(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Ra[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}le(Pg,"positioners",Ra);var Zz={id:"tooltip",_element:Pg,positioners:Ra,afterInit(t,e,n){n&&(t.tooltip=new Pg({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Tk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const eH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function tH(t,e,n,i){const s=t.indexOf(e);if(s===-1)return eH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const nH=(t,e)=>t===null?null:Fn(Math.round(t),0,e);function cw(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Ng extends jr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(st(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:tH(i,e,De(n,e),this._addedLabels),nH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return cw.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}le(Ng,"id","category"),le(Ng,"defaults",{ticks:{callback:cw}});function iH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:d}=t,f=r||1,p=u-1,{min:m,max:g}=e,_=!st(o),v=!st(a),E=!st(c),T=(g-m)/(h+1);let b=pb((g-m)/p/f)*f,x,k,C,F;if(b<1e-14&&!_&&!v)return[{value:m},{value:g}];F=Math.ceil(g/b)-Math.floor(m/b),F>p&&(b=pb(F*b/p/f)*f),st(l)||(x=Math.pow(10,l),b=Math.ceil(b*x)/x),s==="ticks"?(k=Math.floor(m/b)*b,C=Math.ceil(g/b)*b):(k=m,C=g),_&&v&&r&&WB((a-o)/r,b/1e3)?(F=Math.round(Math.min((a-o)/b,u)),b=(a-o)/F,k=o,C=a):E?(k=_?o:k,C=v?a:C,F=c-1,b=(C-k)/F):(F=(C-k)/b,Ya(F,Math.round(F),b/1e3)?F=Math.round(F):F=Math.ceil(F));const Z=Math.max(gb(b),gb(k));x=Math.pow(10,st(l)?Z:l),k=Math.round(k*x)/x,C=Math.round(C*x)/x;let ee=0;for(_&&(d&&k!==o?(n.push({value:o}),k<o&&ee++,Ya(Math.round((k+ee*b)*x)/x,o,uw(o,T,t))&&ee++):k<o&&ee++);ee<F;++ee){const ae=Math.round((k+ee*b)*x)/x;if(v&&ae>a)break;n.push({value:ae})}return v&&d&&C!==a?n.length&&Ya(n[n.length-1].value,a,uw(a,T,t))?n[n.length-1].value=a:n.push({value:a}):(!v||C===a)&&n.push({value:C}),n}function uw(t,e,{horizontal:n,minRotation:i}){const s=ys(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Uh extends jr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return st(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=Vo(s),c=Vo(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=iH(s,r);return e.bounds==="ticks"&&qC(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return vy(e,this.chart.options.locale,this.options.ticks.format)}}class Lg extends Uh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?e:0,this.max=Pt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=ys(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}le(Lg,"id","linear"),le(Lg,"defaults",{ticks:{callback:Xd.formatters.numeric}});const Nl=t=>Math.floor(_s(t)),Ys=(t,e)=>Math.pow(10,Nl(t)+e);function hw(t){return t/Math.pow(10,Nl(t))===1}function dw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function sH(t,e){const n=e-t;let i=Nl(n);for(;dw(t,e,i)>10;)i++;for(;dw(t,e,i)<10;)i--;return Math.min(i,Nl(t))}function rH(t,{min:e,max:n}){e=En(t.min,e);const i=[],s=Nl(e);let r=sH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),d=En(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;d<n;)i.push({value:d,major:hw(d),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),d=Math.round((l+u+h*Math.pow(10,r))*o)/o;const f=En(t.max,d);return i.push({value:f,major:hw(f),significand:h}),i}class fw extends jr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Uh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Pt(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Pt(e)?Math.max(0,e):null,this.max=Pt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Pt(this._userMin)&&(this.min=e===Ys(this.min,0)?Ys(this.min,-1):Ys(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ys(i,-1)),o(Ys(s,1)))),i<=0&&r(Ys(s,-1)),s<=0&&o(Ys(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=rH(n,this);return e.bounds==="ticks"&&qC(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":vy(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=_s(e),this._valueRange=_s(this.max)-_s(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(_s(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}le(fw,"id","logarithmic"),le(fw,"defaults",{ticks:{callback:Xd.formatters.logarithmic,major:{enabled:!0}}});function Fg(t){const e=t.ticks;if(e.display&&t.display){const n=on(e.backdropPadding);return De(e.font&&e.font.size,pt.font.size)+n.height}return 0}function oH(t,e,n){return n=ht(n)?n:[n],{w:dV(t,e.string,n),h:n.length*e.lineHeight}}function pw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function aH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?At/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=Tt(c.font),d=oH(t.ctx,h,t._pointLabels[l]);i[l]=d;const f=zn(t.getIndexAngle(l)+a),p=Math.round(gy(f)),m=pw(p,u.x,d.w,0,180),g=pw(p,u.y,d.h,90,270);lH(n,e,f,m,g)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=hH(t,i,s)}function lH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function cH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(gy(zn(l.angle+yn))),u=pH(l.y,a.h,c),h=dH(c),d=fH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:d,top:u,right:d+a.w,bottom:u+a.h}}function uH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Bi({x:n,y:i},e)||Bi({x:n,y:r},e)||Bi({x:s,y:i},e)||Bi({x:s,y:r},e))}function hH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Fg(r)/2,additionalAngle:o?At/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=cH(t,u,l);i.push(h),a==="auto"&&(h.visible=uH(h,c),h.visible&&(c=h))}return i}function dH(t){return t===0||t===180?"center":t<180?"left":"right"}function fH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function pH(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function gH(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!st(a)){const l=yo(e.borderRadius),c=on(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,d=r-i+c.width,f=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Nh(t,{x:u,y:h,w:d,h:f,radius:l}),t.fill()):t.fillRect(u,h,d,f)}}function mH(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));gH(n,o,r);const a=Tt(o.font),{x:l,y:c,textAlign:u}=r;Dr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function xk(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Bn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function _H(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),xk(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function yH(t,e,n){return Hs(t,{label:n,index:e,type:"pointLabel"})}class cu extends Uh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=on(Fg(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Pt(e)&&!isNaN(e)?e:0,this.max=Pt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Fg(this.options))}generateTickLabels(e){Uh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Qe(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?aH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Bn/(this._pointLabels.length||1),i=this.options.startAngle||0;return zn(e*n+ys(i))}getDistanceFromCenterForValue(e){if(st(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(st(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return yH(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-yn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),xk(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&mH(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const d=this.getContext(h),f=s.setContext(d),p=r.setContext(d);_H(this,f,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:d}=u;!d||!h||(e.lineWidth=d,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=Tt(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=on(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Dr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}le(cu,"id","radialLinear"),le(cu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Xd.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),le(cu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),le(cu,"descriptors",{angleLines:{_fallback:"grid"}});const Zd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},mn=Object.keys(Zd);function vH(t,e){return t-e}function gw(t,e){if(st(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Pt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ml(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function mw(t,e,n,i){const s=mn.length;for(let r=mn.indexOf(t);r<s-1;++r){const o=Zd[mn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return mn[r]}return mn[s-1]}function bH(t,e,n,i,s){for(let r=mn.length-1;r>=mn.indexOf(n);r--){const o=mn[r];if(Zd[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return mn[n?mn.indexOf(n):0]}function wH(t){for(let e=mn.indexOf(t)+1,n=mn.length;e<n;++e)if(Zd[mn[e]].common)return mn[e]}function _w(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=my(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function EH(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function yw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:EH(t,i,s,n)}class Bh extends jr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new v$._date(e.adapters.date);s.init(n),Ga(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:gw(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Pt(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Pt(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=XB(s,r,o);return this._unit=n.unit||(i.autoSkip?mw(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):bH(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:wH(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),yw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Fn(n,0,o),i=Fn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||mw(r.minUnit,n,i,this._getLabelCapacity(n)),a=De(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ml(l)||l===!0,u={};let h=n,d,f;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(d=h,f=0;d<i;d=+e.add(d,a,o),f++)_w(u,d,p);return(d===i||s.bounds==="ticks"||f===1)&&_w(u,d,p),Object.keys(u).sort((m,g)=>m-g).map(m=>+m)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Qe(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],d=i[n],f=c&&h&&d&&d.major;return this._adapter.format(e,s||(f?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=ys(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,yw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(gw(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return JB(e.sort(vH))}}le(Bh,"id","time"),le(Bh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function uu(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=hr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=hr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class vw extends Bh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=uu(n,this.min),this._tableRange=uu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(uu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return uu(this._table,i*this._tableRange+this._minPos,!0)}}le(vw,"id","timeseries"),le(vw,"defaults",Bh.defaults);const Ck={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},IH={type:{type:String,required:!0},...Ck},TH=m2[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Qr(t){return jh(t)?Ce(t):t}function xH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return jh(e)?new Proxy(t,{}):t}function CH(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function kk(t,e){t.labels=e}function Sk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function kH(t,e){const n={labels:[],datasets:[]};return kk(n,t.labels),Sk(n,t.datasets,e),n}const SH=Pr({props:IH,setup(t,e){let{expose:n}=e;const i=yt(null),s=Wh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:d}=t,f=kH(c,d),p=xH(f,c);s.value=new Jd(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=Ce(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return tm(r),e2(o),ws([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[d,f]=c;const p=Ce(s.value);if(!p)return;let m=!1;if(u){const g=Qr(u),_=Qr(d);g&&g!==_&&(CH(p,g),m=!0)}if(h){const g=Qr(h.labels),_=Qr(f.labels),v=Qr(h.datasets),E=Qr(f.datasets);g!==_&&(kk(p.config.data,g),m=!0),v&&v!==E&&(Sk(p.config.data,v,t.datasetIdKey),m=!0)}m&&a(p)},{deep:!0}),()=>qo("canvas",{ref:i})}});function AH(t,e){return Jd.register(e),Pr({props:Ck,setup(n,i){let{expose:s}=i;const r=Wh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>qo(SH,TH({ref:o},{type:t,...n}))}})}const RH=AH("line",Su),DH={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;Jd.register(Ng,Lg,Du,Aa,Wz,Zz,Hz);const n=Ss({datasets:e.datasets}),i=Ss({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(M(),Ft(w(RH),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}},OH={class:"graph"},MH={__name:"StatsScreen",setup(t){const e=zr(),n=Se(()=>e.params.boardUUID||"");let i=rt(On(re,"Boards",n.value,"Groups")),s=rt(On(re,"Boards",n.value,"Tiles"));const r=rt(ge(re,"Boards",n.value)),o=Se(()=>{var u;let c=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{c[h.id]=h.points})),c||[]}),a=c=>{let u=[{x:16829424e5,y:0}],h=0;const d=Object.entries(c.collected).sort((f,p)=>f[1].seconds-p[1].seconds);return Object.keys(d).forEach(f=>{h+=o.value[d[f][0]],u.push({y:h,x:new Date(d[f][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},l=Se(()=>{var u;let c=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&c.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),c});return(c,u)=>{var d;const h=Vl("router-link");return M(),U(Ie,null,[S("div",null,[G(vc,{destination:{name:"overview",params:{boardUUID:w(n)}}},null,8,["destination"]),G(h,{class:"btn",to:{name:"overview",params:{boardUUID:w(n)}}},{default:Xw(()=>[be(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),S("h1",null,fe((d=w(r))==null?void 0:d.name)+" stats:",1),S("div",OH,[G(DH,{datasets:w(l)},null,8,["datasets"])])],64)}}};const Wr=t=>(Ul("data-v-d120a50b"),t=t(),Bl(),t),PH=Wr(()=>S("br",null,null,-1)),NH={key:0,class:"tile"},LH=["src"],FH={key:0,class:"sub-tile"},UH=["src"],BH={key:1},VH={key:2},$H={class:"pen"},zH={class:"pen"},HH={class:"pen"},jH={key:6},WH=["onClick"],qH=["onSubmit"],KH=Wr(()=>S("button",{class:"btn"},"Add item",-1)),GH={key:7},YH=Wr(()=>S("option",{disabled:"",value:""},"Please select one",-1)),XH=Wr(()=>S("option",null,"drop",-1)),QH=Wr(()=>S("option",null,"multi-item",-1)),JH=Wr(()=>S("option",null,"null",-1)),ZH=Wr(()=>S("option",null,"exp",-1)),ej=[YH,XH,QH,JH,ZH],tj={__name:"editTile",setup(t){const e=ts(),n=u=>{u.target.innerText.trim()!=""?e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?parseInt(u.target.innerText.trim()):u.target.innerText.trim():e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?0:"",gs(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},i=u=>{u.target.value.trim()!=""||[u.target.getAttribute("name")]=="altImg"?e.selectedTile[u.target.getAttribute("name")]=u.target.value.trim():e.selectedTile[u.target.getAttribute("name")]="",Bt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile}),console.log("written")},s=u=>{document.querySelector(u).focus()},r=u=>{e.selectedTile.items.indexOf(u)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(u),1),Bt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},o=Se((u,h)=>({item:u,count:h})),a=()=>{Bt(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile})},l=()=>{let u=!0;o.value.item=o.value.item.trim(),c(o.value.item)!==-1&&(e.selectedTile.items[c(o.value.item)].count=o.value.count),c(o.value.item)===-1&&o.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:o.value.item,count:o.value.count})),o.value.item!=""&&u&&(console.log("item Updated"),gs(ge(re,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{...e.selectedTile,items:e.selectedTile.items})),o.value.item="",o.value.count=null},c=u=>e.selectedTile.items?e.selectedTile.items.map(function(h){return h.item}).indexOf(u):-1;return(u,h)=>{var f,p,m;const d=Vl("font-awesome-icon");return M(),U("div",null,[be(" id: "+fe(w(e).selectedTile.id),1),PH,w(e).selectedTile.type!="null"?(M(),U("div",NH,[S("img",{src:w(e).selectedTile.img,alt:""},null,8,LH),w(e).selectedTile.altImg?(M(),U("div",FH,[S("img",{src:w(e).selectedTile.altImg,alt:""},null,8,UH)])):Ee("",!0)])):Ee("",!0),w(e).selectedTile.type!="null"?(M(),U("div",BH,[be(" Default img: "),Tn(S("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=g=>w(e).selectedTile.img=g),name:"img",id:"addtileimg",onBlur:h[1]||(h[1]=g=>{i(g)}),onKeydown:h[2]||(h[2]=Pi(g=>{i(g)},["enter"]))},null,544),[[Kn,w(e).selectedTile.img]])])):Ee("",!0),w(e).selectedTile.type!="null"?(M(),U("div",VH,[be(" Image on completed tile: "),Tn(S("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=g=>w(e).selectedTile.altImg=g),name:"altImg",id:"addtileimg",onBlur:h[4]||(h[4]=Ge(g=>{i(g)},["prevent"])),onKeydown:h[5]||(h[5]=Pi(g=>{i(g)},["enter"]))},null,544),[[Kn,w(e).selectedTile.altImg]])])):Ee("",!0),w(e).selectedTile.type!="null"?(M(),U("h2",{key:3,onClick:h[8]||(h[8]=g=>s("#title"))},[S("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[6]||(h[6]=Pi(Ge(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[7]||(h[7]=Ge(g=>{n(g)},["prevent"])),name:"title",id:"title"},fe(w(e).selectedTile.title),545),S("span",$H,[G(d,{icon:["fas","pen"]})])])):Ee("",!0),w(e).selectedTile.type!="null"?(M(),U("p",{key:4,onClick:h[11]||(h[11]=g=>s("#points"))},[S("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[9]||(h[9]=Pi(Ge(g=>{n(g)},["prevent"]),["enter"])),onBlur:h[10]||(h[10]=Ge(g=>{n(g)},["prevent"])),name:"points",id:"points"},fe(w(e).selectedTile.points),545),be(" point"+fe(w(e).selectedTile.points>1?"s":""),1),S("span",zH,[G(d,{icon:["fas","pen"]})])])):Ee("",!0),w(e).selectedTile.type!="null"?(M(),U("p",{key:5,onClick:h[13]||(h[13]=g=>s("#description"))},[be(" description: "),S("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:h[12]||(h[12]=Ge(g=>{n(g)},["prevent"])),name:"description",id:"description"},fe(w(e).selectedTile.description),545),S("span",HH,[G(d,{icon:["fas","pen"]})])])):Ee("",!0),["any-unique","multi-item"].includes(w(e).selectedTile.type)?(M(),U("ul",jH,[be(" Eligible items: "),(M(!0),U(Ie,null,cn((f=w(e).selectedTile)==null?void 0:f.items,g=>(M(),U("li",{key:g==null?void 0:g.item},[be(fe(g.item)+" x"+fe(g.count)+" ",1),S("button",{class:"btn",onClick:Ge(_=>r(g),["prevent"])},"Delete item",8,WH)]))),128)),S("form",{onSubmit:Ge(l,["prevent"])},[be(" new "),Tn(S("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":h[14]||(h[14]=g=>w(o).item=g)},null,512),[[Kn,w(o).item]]),be(" count: "),Tn(S("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":h[15]||(h[15]=g=>w(o).count=g)},null,512),[[Kn,w(o).count]]),KH],40,qH)])):Ee("",!0),((p=w(e).selectedTile)==null?void 0:p.hidden)!==void 0&&w(e).selectedTile.type!="null"?(M(),U("div",GH,[be(" hidden: "),Tn(S("input",{type:"checkbox",class:"toggle","onUpdate:modelValue":h[16]||(h[16]=g=>w(e).selectedTile.hidden=g),ref:"refs.hidden",name:"hidden",id:"addtilehidden",onChange:a},null,544),[[qA,w(e).selectedTile.hidden]])])):Ee("",!0),be(" type: "),((m=w(e).selectedTile)==null?void 0:m.type)!==void 0?Tn((M(),U("select",{key:8,"onUpdate:modelValue":h[17]||(h[17]=g=>w(e).selectedTile.type=g),onChange:a},ej,544)),[[KA,w(e).selectedTile.type]]):Ee("",!0)])}}},nj=si(tj,[["__scopeId","data-v-d120a50b"]]);const ra=t=>(Ul("data-v-746097f8"),t=t(),Bl(),t),ij={class:"container"},sj=["onKeydown"],rj={class:"pen"},oj={class:"main-section"},aj={key:0,class:"detail-pane"},lj={style:{"justify-content":"end",display:"flex"}},cj={class:"board-settings"},uj=ra(()=>S("h2",null,"Board Settings",-1)),hj=ra(()=>S("h3",null,"Rules:",-1)),dj=ra(()=>S("h3",null,"Moderators:",-1)),fj={class:"moderators"},pj={class:"UID"},gj=["onClick"],mj=["onSubmit"],_j=ra(()=>S("button",{class:"btn",type:"submit"},"Add",-1)),yj=ra(()=>S("h3",null,"Editors:",-1)),vj={class:"Editors"},bj={class:"UID"},wj=["onClick"],Ej=["onSubmit"],Ij=ra(()=>S("button",{class:"btn",type:"submit"},"Add",-1)),Tj={key:1},xj={__name:"EditBoard",setup(t){var b,x;const e=ts(),n=yt(""),i=yt("");let s=zs();const r=zr();e.setBoardUUID(r.params.boardUUID),e.setSelectedTile("");const o=e.boardUUID,a=rt(ge(re,"Users",`${s.user.data.uid}`)),{data:l}=rt(On(re,"Boards",o,"Groups")),c=rt(ge(re,"Boards",o)),u=(b=c==null?void 0:c.value)==null?void 0:b.moderators,h=(x=c==null?void 0:c.value)==null?void 0:x.editors,d=Se(()=>{var C;let k={};return l&&((C=l==null?void 0:l.value)==null||C.forEach(F=>{F.name!="moderator"&&(k[F.id]={id:F.id,name:F.name,member:F.members,icon:F.icon,color:F.color,points:F.points,flagEnd:F.flagEnd,collected:F.collected,verify:F.verify})})),k||{}}),{data:f}=rt(On(re,`Boards/${o}/Tiles`)),p=yt(null),m=()=>{p.value.focus()},g=k=>{k.target.blur();let C=k.target.getAttribute("name"),F=c.value[C];k.target.innerText.trim()!=""?c.value[C]=k.target.innerText:(c.value[C]="<enter text here>",C=="rules"&&(c.value[C]="")),F!=c.value[C]&&Bt(ge(re,"Boards",o),c.value)},_=k=>{k=k.trim(),u.indexOf(k)!==-1&&(u.splice(u.indexOf(k),1),Bt(ge(re,"Boards",o),{moderators:u}))},v=()=>{n.value=n.value.trim(),u.indexOf(n.value)===-1&&(u.push(n.value),Bt(ge(re,"Boards",o),{moderators:u}))},E=k=>{k=k.trim(),h.indexOf(k)!==-1&&(h.splice(h.indexOf(k),1),Bt(ge(re,"Boards",o),{editors:h}))},T=()=>{i.value=i.value.trim(),h.indexOf(i.value)===-1&&(h.push(i.value),Bt(ge(re,"Boards",o),{editors:h}))};return(k,C)=>{var F,Z,ee,ae;return M(),U("div",ij,[G(vc,{destination:{name:"editBoard",params:w(o)}},null,8,["destination"]),w(c)&&w(s).user.data.ui!=0&&(w(s).user.data.uid==w(c).ownerID||((F=w(a))==null?void 0:F.type)=="admin")||(ee=(Z=w(c))==null?void 0:Z.editors)!=null&&ee.includes(w(s).user.data.uid)?(M(),U(Ie,{key:0},[S("section",null,[S("h1",{class:"title-wrap",onClick:C[1]||(C[1]=Ge(ye=>m(),["prevent"]))},[S("span",{class:"board-title",ref_key:"titleElement",ref:p,contenteditable:"",spellcheck:"false",onKeydown:Pi(g,["enter"]),name:"name",onBlur:C[0]||(C[0]=Ge(ye=>{g(ye)},["prevent"]))},fe(w(c).name),41,sj),S("span",rj,[G(w(_o),{icon:["fas","pen"]})])])]),S("section",oj,[(M(),Ft(cy,{boardData:w(c),groupsData:w(d),tilesData:w(f),key:"bingo-board-"+w(e).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),w(e).selectedTile!=""?(M(),U("aside",aj,[S("div",lj,[G(Ue,{onClick:C[2]||(C[2]=()=>{w(e).setSelectedTile("")}),class:"iconBtn btn close",fasIcon:"xmark"})]),G(nj,{tile:w(e).selectedTile},null,8,["tile"])])):Ee("",!0)]),S("section",cj,[uj,S("div",null,[hj,S("div",null,[S("p",{class:"rules input",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:C[3]||(C[3]=Ge(ye=>{g(ye)},["prevent"])),onKeydown:C[4]||(C[4]=Pi(Ge(()=>{},["prevent"]),["tab"])),name:"rules"},fe((ae=w(c))==null?void 0:ae.rules),33)])]),S("div",null,[dj,S("div",fj,[S("ul",null,[(M(!0),U(Ie,null,cn(w(u),ye=>(M(),U("li",{key:ye},[G(w(_o),{icon:["fas","caret-right"]}),S("span",pj,fe(ye),1),S("button",{class:"btn",onClick:Ge(Ye=>_(ye),["prevent"])},"-",8,gj)]))),128)),S("li",null,[S("form",{onSubmit:Ge(v,["prevent"])},[Tn(S("input",{type:"text","onUpdate:modelValue":C[5]||(C[5]=ye=>n.value=ye)},null,512),[[Kn,n.value]]),_j],40,mj)])])])]),S("div",null,[yj,S("div",vj,[S("ul",null,[(M(!0),U(Ie,null,cn(w(h),ye=>(M(),U("li",{key:ye},[G(w(_o),{icon:["fas","caret-right"]}),S("span",bj,fe(ye),1),S("button",{class:"btn",onClick:Ge(Ye=>E(ye),["prevent"])},"remove",8,wj)]))),128)),S("li",null,[S("form",{onSubmit:Ge(T,["prevent"])},[Tn(S("input",{type:"text","onUpdate:modelValue":C[6]||(C[6]=ye=>i.value=ye)},null,512),[[Kn,i.value]]),Ij],40,Ej)])])])])])],64)):(M(),U("h1",Tj,"Not authenticated"))])}}},Cj=si(xj,[["__scopeId","data-v-746097f8"]]),kj=S("h1",null,"Log in",-1),Sj={class:"block"},Aj={__name:"LoginView",setup(t){const e=zs(),n=jd();return(i,s)=>(M(),U(Ie,null,[kj,S("div",Sj,[S("button",{class:"btn",onClick:s[0]||(s[0]=Ge(r=>w($C)({name:"userOverview"},w(n),w(e)),["prevent"]))}," Log in with Google "),be(" "+fe(i.users),1)])],64))}},Rj={class:"container"},Dj=S("h1",null,"groupview",-1),Oj={key:0,class:"delete-popup"},Mj={class:"delete-notification"},Pj=S("span",{class:"danger"},"delete",-1),Nj={class:"highlight"},Lj=S("br",null,null,-1),Fj=S("span",{class:"danger"},"permanent",-1),Uj=S("br",null,null,-1),Bj=S("span",{class:"danger"},"Delete",-1),Vj={class:"delete-buttons"},$j={key:1},zj=["onKeydown","onBlur"],Hj=["onClick"],jj={class:"color-container"},Wj=["onUpdate:modelValue","onChange"],qj=["onBlur","onKeydown","onUpdate:modelValue"],Kj={class:"members-list"},Gj=["onClick"],Yj={__name:"GroupView",setup(t){const e=zr(),n=zs(),i=ts();i.setBoardUUID(e.params.boardUUID);const s=rt(ge(re,"Users",`${n.user.data.uid}`));i.setSelectedTile("");const{data:r}=rt(On(re,"Boards",e.params.boardUUID,"Groups")),o=rt(ge(re,"Boards",e.params.boardUUID)),a=yt(),l=yt(""),c=async m=>{await J5(ge(re,"Boards",e.params.boardUUID,"Groups",m.id)).then(()=>{a.value=void 0,l.value=""})},u=(m,g=!1)=>{g&&g.target.blur(),Bt(ge(re,"Boards",e.params.boardUUID,"Groups",m.id),{color:m.color})},h=(m,g)=>{m.target.blur(),m.target.innerText.trim()==""&&(m.target.innerText="<Team Name>"),g.name=m.target.innerText.trim(),Bt(ge(re,"Boards",e.params.boardUUID,"Groups",g.id),{name:g.name})},d=(m,g)=>{Bt(ge(re,"Boards",e.params.boardUUID,"Groups",g.id),{icon:m})},f=async m=>{a.value=m},p=()=>{const m=ge(On(re,"Boards",e.params.boardUUID,"Groups"));gs(ge(re,m.path),{name:"Team name",collected:{},verify:{},icon:"frog",color:"#53FF1b",points:0})};return(m,g)=>{var _,v,E,T;return M(),U("div",Rj,[G(vc,{destination:{name:"groupView"}}),Dj,w(o)&&w(n).user.data.ui!=0&&(w(n).user.data.uid==w(o).ownerID||((_=w(s))==null?void 0:_.type)=="admin"||(v=w(o).editors)!=null&&v.includes(w(n).user.data.uid))?(M(),U(Ie,{key:0},[((E=a.value)==null?void 0:E.name)!=null?(M(),U("section",Oj,[S("p",Mj,[be(" Are you sure you want to "),Pj,be(" the team: "),S("span",Nj,fe((T=a.value)==null?void 0:T.name),1),be("?"),Lj,be(" this is "),Fj,be(" and you will lose all data for that team."),Uj,be(" type the name of the team you want to "),Bj,be(" here to verify ")]),S("div",Vj,[S("button",{class:"btn cancel",onClick:g[0]||(g[0]=Ge(()=>{a.value=void 0,l.value=""},["prevent"]))}," Cancel "),Tn(S("input",{type:"text",name:"DELETEME","onUpdate:modelValue":g[1]||(g[1]=b=>l.value=b),class:"danger",placeholder:"TEAM NAME"},null,512),[[Kn,l.value]]),S("button",{class:"btn danger",onClick:g[2]||(g[2]=Ge(()=>{l.value==a.value.name&&c(a.value)},["prevent"]))}," DELETE ")])])):Ee("",!0),w(r)?(M(),U("section",$j,[(M(!0),U(Ie,null,cn(w(r),b=>(M(),U("div",{class:"group",key:b.name},[S("h2",{name:"name",ref_for:!0,ref:"group.name",contenteditable:"",spellcheck:"false",onKeydown:Pi(x=>{h(x,b)},["enter"]),onBlur:Ge(x=>{h(x,b)},["prevent"])},fe(b.name),41,zj),w(r).length!=1?(M(),U("button",{key:0,class:"btn",onClick:Ge(x=>f(b),["prevent"])}," Delete Team - ",8,Hj)):Ee("",!0),S("div",jj,[Tn(S("input",{type:"color","onUpdate:modelValue":x=>b.color=x,onChange:x=>u(b),class:"color-picker"},null,40,Wj),[[Kn,b.color]]),Tn(S("input",{type:"text",onBlur:Ge(x=>{u(b,x)},["prevent"]),onKeydown:Pi(x=>{u(b,x)},["enter"]),"onUpdate:modelValue":x=>b.color=x},null,40,qj),[[Kn,b.color]])]),S("div",{class:"icon-grid",style:Or({color:b.color})},[G(Ue,{onClick:x=>d("rocket",b),groupIcon:b.icon,fasIcon:"rocket"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("spaghetti-monster-flying",b),groupIcon:b.icon,fasIcon:"spaghetti-monster-flying"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("paw",b),groupIcon:b.icon,fasIcon:"paw"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("hippo",b),groupIcon:b.icon,fasIcon:"hippo"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("crow",b),groupIcon:b.icon,fasIcon:"crow"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("frog",b),groupIcon:b.icon,fasIcon:"frog"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("feather-pointed",b),groupIcon:b.icon,fasIcon:"feather-pointed"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("cat",b),groupIcon:b.icon,fasIcon:"cat"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("dove",b),groupIcon:b.icon,fasIcon:"dove"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("spoon",b),groupIcon:b.icon,fasIcon:"spoon"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("ghost",b),groupIcon:b.icon,fasIcon:"ghost"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("heart",b),groupIcon:b.icon,fasIcon:"heart"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("hand-fist",b),groupIcon:b.icon,fasIcon:"hand-fist"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("hat-wizard",b),groupIcon:b.icon,fasIcon:"hat-wizard"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("tree",b),groupIcon:b.icon,fasIcon:"tree"},null,8,["onClick","groupIcon"]),G(Ue,{onClick:x=>d("fire",b),groupIcon:b.icon,fasIcon:"fire"},null,8,["onClick","groupIcon"])],4),S("div",Kj,[(M(!0),U(Ie,null,cn(b.members,x=>(M(),U("p",{key:x},fe(x),1))),128))])]))),128)),S("button",{class:"btn add-team",onClick:Ge(p,["prevent"])},"Add team +",8,Gj)])):Ee("",!0)],64)):(M(),U(Ie,{key:1},[be("Not Authenticated")],64))])}}},Xj=UF({history:eF(),mode:"hash",routes:[{path:"/",name:"userOverview",props:!0,component:dB},{path:"/new",name:"newBoard",component:LU},{path:"/login",name:"loginView",component:Aj},{path:"/e/:boardUUID",name:"editBoard",props:!0,component:Cj},{path:"/g/:boardUUID",name:"groupView",props:!0,component:Yj},{path:"/m/:boardUUID",name:"moderator",props:!0,component:TU},{path:"/b/:boardUUID",name:"overview",props:!0,component:gU},{path:"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:MH}]});var Qj={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Jj={prefix:"fas",iconName:"users-rectangle",icon:[640,512,[],"e594","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},Zj={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},eW={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},tW={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},nW={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},iW={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},sW={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},rW={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},oW={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},aW={prefix:"fas",iconName:"shapes",icon:[512,512,["triangle-circle-square"],"f61f","M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"]},lW={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},cW={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]},uW={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},hW={prefix:"fas",iconName:"eye-low-vision",icon:[640,512,["low-vision"],"f2a8","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]},dW={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},fW={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},pW={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},gW={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},mW={prefix:"fas",iconName:"hat-cowboy",icon:[640,512,[],"f8c0","M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"]},_W={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},yW={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vW={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},bW={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wW={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},EW={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},IW={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},TW={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},xW={prefix:"fas",iconName:"users-line",icon:[640,512,[],"e592","M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"]},CW={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},kW={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},SW={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},AW={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},RW={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]},DW={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};Oe.add(cW);Oe.add(vW);Oe.add(oW);Oe.add(yW);Oe.add(hW);Oe.add(IW);Oe.add(lW);Oe.add(Qj);Oe.add(Jj);Oe.add(iW);Oe.add(wW);Oe.add(aW);Oe.add(xW);Oe.add(DW);Oe.add(TW);Oe.add(tW);Oe.add(SW);Oe.add(CW);Oe.add(Zj);Oe.add(nW);Oe.add(AW);Oe.add(dW);Oe.add(fW);Oe.add(pW);Oe.add(kW);Oe.add(_W);Oe.add(EW);Oe.add(eW);Oe.add(sW);Oe.add(gW);Oe.add(RW);Oe.add(bW);Oe.add(mW);Oe.add(rW);Oe.add(uW);const Ec=ZA(zF);Ec.use(nR());Ec.use(Xj);Ec.use(N8,{firebaseApp:lC});Ec.component("FontAwesomeIcon",_o);Ec.mount("#app");
