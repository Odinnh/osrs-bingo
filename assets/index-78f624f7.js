var Dk=Object.defineProperty;var Ok=(t,e,n)=>e in t?Dk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ae=(t,e,n)=>(Ok(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Vg(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Ho(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=It(i)?Lk(i):Ho(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(It(t))return t;if(Xe(t))return t}}const Pk=/;(?![^(]*\))/g,Mk=/:([^]+)/,Nk=/\/\*.*?\*\//gs;function Lk(t){const e={};return t.replace(Nk,"").split(Pk).forEach(n=>{if(n){const i=n.split(Mk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Is(t){let e="";if(It(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const i=Is(t[n]);i&&(e+=i+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uk=Vg(Fk);function yw(t){return!!t||t===""}function Vk(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Fl(t[i],e[i]);return n}function Fl(t,e){if(t===e)return!0;let n=ky(t),i=ky(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=el(t),i=el(e),n||i)return t===e;if(n=oe(t),i=oe(e),n||i)return n&&i?Vk(t,e):!1;if(n=Xe(t),i=Xe(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fl(t[o],e[o]))return!1}}return String(t)===String(e)}function Bg(t,e){return t.findIndex(n=>Fl(n,e))}const pe=t=>It(t)?t:t==null?"":oe(t)||Xe(t)&&(t.toString===ww||!ye(t.toString))?JSON.stringify(t,vw,2):String(t),vw=(t,e)=>e&&e.__v_isRef?vw(t,e.value):co(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()]}:Xe(e)&&!oe(e)&&!Ew(e)?String(e):e,Ze={},lo=[],Qn=()=>{},Bk=()=>!1,$k=/^on[^a-z]/,$h=t=>$k.test(t),$g=t=>t.startsWith("onUpdate:"),an=Object.assign,zg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zk=Object.prototype.hasOwnProperty,Ne=(t,e)=>zk.call(t,e),oe=Array.isArray,co=t=>Ul(t)==="[object Map]",Wo=t=>Ul(t)==="[object Set]",ky=t=>Ul(t)==="[object Date]",ye=t=>typeof t=="function",It=t=>typeof t=="string",el=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",bw=t=>Xe(t)&&ye(t.then)&&ye(t.catch),ww=Object.prototype.toString,Ul=t=>ww.call(t),jk=t=>Ul(t).slice(8,-1),Ew=t=>Ul(t)==="[object Object]",jg=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fu=Vg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hk=/-(\w)/g,_i=zh(t=>t.replace(Hk,(e,n)=>n?n.toUpperCase():"")),Wk=/\B([A-Z])/g,Mr=zh(t=>t.replace(Wk,"-$1").toLowerCase()),jh=zh(t=>t.charAt(0).toUpperCase()+t.slice(1)),tf=zh(t=>t?`on${jh(t)}`:""),tl=(t,e)=>!Object.is(t,e),pu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ay;const qk=()=>Ay||(Ay=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tn;class Tw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tn;try{return Tn=this,e()}finally{Tn=n}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Iw(t){return new Tw(t)}function Kk(t,e=Tn){e&&e.active&&e.effects.push(t)}function Hg(){return Tn}function xw(t){Tn&&Tn.cleanups.push(t)}const Wg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sw=t=>(t.w&xs)>0,Cw=t=>(t.n&xs)>0,Gk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xs},Yk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Sw(s)&&!Cw(s)?s.delete(t):e[n++]=s,s.w&=~xs,s.n&=~xs}e.length=n}},Nu=new WeakMap;let ba=0,xs=1;const Zf=30;let jn;const fr=Symbol(""),ep=Symbol("");class qg{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kk(this,i)}run(){if(!this.active)return this.fn();let e=jn,n=ms;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jn,jn=this,ms=!0,xs=1<<++ba,ba<=Zf?Gk(this):Ry(this),this.fn()}finally{ba<=Zf&&Yk(this),xs=1<<--ba,jn=this.parent,ms=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jn===this?this.deferStop=!0:this.active&&(Ry(this),this.onStop&&this.onStop(),this.active=!1)}}function Ry(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ms=!0;const kw=[];function qo(){kw.push(ms),ms=!1}function Ko(){const t=kw.pop();ms=t===void 0?!0:t}function yn(t,e,n){if(ms&&jn){let i=Nu.get(t);i||Nu.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Wg()),Aw(s)}}function Aw(t,e){let n=!1;ba<=Zf?Cw(t)||(t.n|=xs,n=!Sw(t)):n=!t.has(jn),n&&(t.add(jn),jn.deps.push(t))}function zi(t,e,n,i,s,r){const o=Nu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?jg(n)&&a.push(o.get("length")):(a.push(o.get(fr)),co(t)&&a.push(o.get(ep)));break;case"delete":oe(t)||(a.push(o.get(fr)),co(t)&&a.push(o.get(ep)));break;case"set":co(t)&&a.push(o.get(fr));break}if(a.length===1)a[0]&&tp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);tp(Wg(l))}}function tp(t,e){const n=oe(t)?t:[...t];for(const i of n)i.computed&&Dy(i);for(const i of n)i.computed||Dy(i)}function Dy(t,e){(t!==jn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Qk(t,e){var n;return(n=Nu.get(t))===null||n===void 0?void 0:n.get(e)}const Xk=Vg("__proto__,__v_isRef,__isVue"),Rw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(el)),Jk=Kg(),Zk=Kg(!1,!0),eA=Kg(!0),Oy=tA();function tA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ee(this);for(let r=0,o=this.length;r<o;r++)yn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qo();const i=Ee(this)[e].apply(this,n);return Ko(),i}}),t}function nA(t){const e=Ee(this);return yn(e,"has",t),e.hasOwnProperty(t)}function Kg(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?yA:Nw:e?Mw:Pw).get(i))return i;const o=oe(i);if(!t){if(o&&Ne(Oy,s))return Reflect.get(Oy,s,r);if(s==="hasOwnProperty")return nA}const a=Reflect.get(i,s,r);return(el(s)?Rw.has(s):Xk(s))||(t||yn(i,"get",s),e)?a:ut(a)?o&&jg(s)?a:a.value:Xe(a)?t?Lw(a):Ss(a):a}}const iA=Dw(),sA=Dw(!0);function Dw(t=!1){return function(n,i,s,r){let o=n[i];if(wo(o)&&ut(o)&&!ut(s))return!1;if(!t&&(!Lu(s)&&!wo(s)&&(o=Ee(o),s=Ee(s)),!oe(n)&&ut(o)&&!ut(s)))return o.value=s,!0;const a=oe(n)&&jg(i)?Number(i)<n.length:Ne(n,i),l=Reflect.set(n,i,s,r);return n===Ee(r)&&(a?tl(s,o)&&zi(n,"set",i,s):zi(n,"add",i,s)),l}}function rA(t,e){const n=Ne(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&zi(t,"delete",e,void 0),i}function oA(t,e){const n=Reflect.has(t,e);return(!el(e)||!Rw.has(e))&&yn(t,"has",e),n}function aA(t){return yn(t,"iterate",oe(t)?"length":fr),Reflect.ownKeys(t)}const Ow={get:Jk,set:iA,deleteProperty:rA,has:oA,ownKeys:aA},lA={get:eA,set(t,e){return!0},deleteProperty(t,e){return!0}},cA=an({},Ow,{get:Zk,set:sA}),Gg=t=>t,Hh=t=>Reflect.getPrototypeOf(t);function Ic(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ee(t),r=Ee(e);n||(e!==r&&yn(s,"get",e),yn(s,"get",r));const{has:o}=Hh(s),a=i?Gg:n?Xg:nl;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function xc(t,e=!1){const n=this.__v_raw,i=Ee(n),s=Ee(t);return e||(t!==s&&yn(i,"has",t),yn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Sc(t,e=!1){return t=t.__v_raw,!e&&yn(Ee(t),"iterate",fr),Reflect.get(t,"size",t)}function Py(t){t=Ee(t);const e=Ee(this);return Hh(e).has.call(e,t)||(e.add(t),zi(e,"add",t,t)),this}function My(t,e){e=Ee(e);const n=Ee(this),{has:i,get:s}=Hh(n);let r=i.call(n,t);r||(t=Ee(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?tl(e,o)&&zi(n,"set",t,e):zi(n,"add",t,e),this}function Ny(t){const e=Ee(this),{has:n,get:i}=Hh(e);let s=n.call(e,t);s||(t=Ee(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&zi(e,"delete",t,void 0),r}function Ly(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&zi(t,"clear",void 0,void 0),n}function Cc(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ee(o),l=e?Gg:t?Xg:nl;return!t&&yn(a,"iterate",fr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function kc(t,e,n){return function(...i){const s=this.__v_raw,r=Ee(s),o=co(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Gg:e?Xg:nl;return!e&&yn(r,"iterate",l?ep:fr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ts(t){return function(...e){return t==="delete"?!1:this}}function uA(){const t={get(r){return Ic(this,r)},get size(){return Sc(this)},has:xc,add:Py,set:My,delete:Ny,clear:Ly,forEach:Cc(!1,!1)},e={get(r){return Ic(this,r,!1,!0)},get size(){return Sc(this)},has:xc,add:Py,set:My,delete:Ny,clear:Ly,forEach:Cc(!1,!0)},n={get(r){return Ic(this,r,!0)},get size(){return Sc(this,!0)},has(r){return xc.call(this,r,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:Cc(!0,!1)},i={get(r){return Ic(this,r,!0,!0)},get size(){return Sc(this,!0)},has(r){return xc.call(this,r,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:Cc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=kc(r,!1,!1),n[r]=kc(r,!0,!1),e[r]=kc(r,!1,!0),i[r]=kc(r,!0,!0)}),[t,n,e,i]}const[hA,dA,fA,pA]=uA();function Yg(t,e){const n=e?t?pA:fA:t?dA:hA;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ne(n,s)&&s in i?n:i,s,r)}const gA={get:Yg(!1,!1)},mA={get:Yg(!1,!0)},_A={get:Yg(!0,!1)},Pw=new WeakMap,Mw=new WeakMap,Nw=new WeakMap,yA=new WeakMap;function vA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bA(t){return t.__v_skip||!Object.isExtensible(t)?0:vA(jk(t))}function Ss(t){return wo(t)?t:Qg(t,!1,Ow,gA,Pw)}function wA(t){return Qg(t,!1,cA,mA,Mw)}function Lw(t){return Qg(t,!0,lA,_A,Nw)}function Qg(t,e,n,i,s){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=bA(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Vi(t){return wo(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function wo(t){return!!(t&&t.__v_isReadonly)}function Lu(t){return!!(t&&t.__v_isShallow)}function Wh(t){return Vi(t)||wo(t)}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Eo(t){return Pu(t,"__v_skip",!0),t}const nl=t=>Xe(t)?Ss(t):t,Xg=t=>Xe(t)?Lw(t):t;function Fw(t){ms&&jn&&(t=Ee(t),Aw(t.dep||(t.dep=Wg())))}function Uw(t,e){t=Ee(t);const n=t.dep;n&&tp(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Ge(t){return Vw(t,!1)}function qh(t){return Vw(t,!0)}function Vw(t,e){return ut(t)?t:new EA(t,e)}class EA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:nl(e)}get value(){return Fw(this),this._value}set value(e){const n=this.__v_isShallow||Lu(e)||wo(e);e=n?e:Ee(e),tl(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:nl(e),Uw(this))}}function E(t){return ut(t)?t.value:t}const TA={get:(t,e,n)=>E(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Bw(t){return Vi(t)?t:new Proxy(t,TA)}function IA(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=$w(t,n);return e}class xA{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qk(Ee(this._object),this._key)}}function $w(t,e,n){const i=t[e];return ut(i)?i:new xA(t,e,n)}var zw;class SA{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zw]=!1,this._dirty=!0,this.effect=new qg(e,()=>{this._dirty||(this._dirty=!0,Uw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ee(this);return Fw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}zw="__v_isReadonly";function CA(t,e,n=!1){let i,s;const r=ye(t);return r?(i=t,s=Qn):(i=t.get,s=t.set),new SA(i,s,r||!s,n)}function _s(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Kh(r,e,n)}return s}function Xn(t,e,n,i){if(ye(t)){const r=_s(t,e,n,i);return r&&bw(r)&&r.catch(o=>{Kh(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Xn(t[r],e,n,i));return s}function Kh(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){_s(l,null,10,[t,o,a]);return}}kA(t,n,s,i)}function kA(t,e,n,i=!0){console.error(t)}let il=!1,np=!1;const Kt=[];let li=0;const uo=[];let Di=null,tr=0;const jw=Promise.resolve();let Jg=null;function Zg(t){const e=Jg||jw;return t?e.then(this?t.bind(this):t):e}function AA(t){let e=li+1,n=Kt.length;for(;e<n;){const i=e+n>>>1;sl(Kt[i])<t?e=i+1:n=i}return e}function em(t){(!Kt.length||!Kt.includes(t,il&&t.allowRecurse?li+1:li))&&(t.id==null?Kt.push(t):Kt.splice(AA(t.id),0,t),Hw())}function Hw(){!il&&!np&&(np=!0,Jg=jw.then(qw))}function RA(t){const e=Kt.indexOf(t);e>li&&Kt.splice(e,1)}function DA(t){oe(t)?uo.push(...t):(!Di||!Di.includes(t,t.allowRecurse?tr+1:tr))&&uo.push(t),Hw()}function Fy(t,e=il?li+1:0){for(;e<Kt.length;e++){const n=Kt[e];n&&n.pre&&(Kt.splice(e,1),e--,n())}}function Ww(t){if(uo.length){const e=[...new Set(uo)];if(uo.length=0,Di){Di.push(...e);return}for(Di=e,Di.sort((n,i)=>sl(n)-sl(i)),tr=0;tr<Di.length;tr++)Di[tr]();Di=null,tr=0}}const sl=t=>t.id==null?1/0:t.id,OA=(t,e)=>{const n=sl(t)-sl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qw(t){np=!1,il=!0,Kt.sort(OA);const e=Qn;try{for(li=0;li<Kt.length;li++){const n=Kt[li];n&&n.active!==!1&&_s(n,null,14)}}finally{li=0,Kt.length=0,Ww(),il=!1,Jg=null,(Kt.length||uo.length)&&qw()}}function PA(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ze;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ze;d&&(s=n.map(f=>It(f)?f.trim():f)),h&&(s=n.map(Mu))}let a,l=i[a=tf(e)]||i[a=tf(_i(e))];!l&&r&&(l=i[a=tf(Mr(e))]),l&&Xn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xn(c,t,6,s)}}function Kw(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ye(t)){const l=c=>{const u=Kw(c,e,!0);u&&(a=!0,an(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Xe(t)&&i.set(t,null),null):(oe(r)?r.forEach(l=>o[l]=null):an(o,r),Xe(t)&&i.set(t,o),o)}function Gh(t,e){return!t||!$h(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Mr(e))||Ne(t,e))}let xn=null,Yh=null;function Fu(t){const e=xn;return xn=t,Yh=t&&t.type.__scopeId||null,e}function Ls(t){Yh=t}function Fs(){Yh=null}function Qh(t,e=xn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&qy(-1);const r=Fu(e);let o;try{o=t(...s)}finally{Fu(r),i._d&&qy(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nf(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=t;let m,_;const y=Fu(t);try{if(n.shapeFlag&4){const T=s||i;m=ai(u.call(T,T,h,r,f,d,p)),_=l}else{const T=e;m=ai(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),_=e.props?l:MA(l)}}catch(T){Pa.length=0,Kh(T,t,1),m=Ue(br)}let b=m;if(_&&g!==!1){const T=Object.keys(_),{shapeFlag:I}=b;T.length&&I&7&&(o&&T.some($g)&&(_=NA(_,o)),b=To(b,_))}return n.dirs&&(b=To(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),m=b,Fu(y),m}const MA=t=>{let e;for(const n in t)(n==="class"||n==="style"||$h(n))&&((e||(e={}))[n]=t[n]);return e},NA=(t,e)=>{const n={};for(const i in t)(!$g(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function LA(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Uy(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Gh(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uy(i,o,c):!0:!!o;return!1}function Uy(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Gh(n,r))return!0}return!1}function FA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const UA=t=>t.__isSuspense;function VA(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):DA(t)}function gu(t,e){if(gt){let n=gt.provides;const i=gt.parent&&gt.parent.provides;i===n&&(n=gt.provides=Object.create(i)),n[t]=e}}function mn(t,e,n=!1){const i=gt||xn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(i.proxy):e}}function BA(t,e){return tm(t,null,{flush:"post"})}const Ac={};function ys(t,e,n){return tm(t,e,n)}function tm(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ze){const a=Hg()===(gt==null?void 0:gt.scope)?gt:null;let l,c=!1,u=!1;if(ut(t)?(l=()=>t.value,c=Lu(t)):Vi(t)?(l=()=>t,i=!0):oe(t)?(u=!0,c=t.some(b=>Vi(b)||Lu(b)),l=()=>t.map(b=>{if(ut(b))return b.value;if(Vi(b))return ir(b);if(ye(b))return _s(b,a,2)})):ye(t)?e?l=()=>_s(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Xn(t,a,3,[d])}:l=Qn,e&&i){const b=l;l=()=>ir(b())}let h,d=b=>{h=_.onStop=()=>{_s(b,a,4)}},f;if(ol)if(d=Qn,e?n&&Xn(e,a,3,[l(),u?[]:void 0,d]):l(),s==="sync"){const b=AR();f=b.__watcherHandles||(b.__watcherHandles=[])}else return Qn;let p=u?new Array(t.length).fill(Ac):Ac;const g=()=>{if(_.active)if(e){const b=_.run();(i||c||(u?b.some((T,I)=>tl(T,p[I])):tl(b,p)))&&(h&&h(),Xn(e,a,3,[b,p===Ac?void 0:u&&p[0]===Ac?[]:p,d]),p=b)}else _.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>hn(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>em(g));const _=new qg(l,m);e?n?g():p=_.run():s==="post"?hn(_.run.bind(_),a&&a.suspense):_.run();const y=()=>{_.stop(),a&&a.scope&&zg(a.scope.effects,_)};return f&&f.push(y),y}function $A(t,e,n){const i=this.proxy,s=It(t)?t.includes(".")?Gw(i,t):()=>i[t]:t.bind(i,i);let r;ye(e)?r=e:(r=e.handler,n=e);const o=gt;Io(this);const a=tm(s,r.bind(i),n);return o?Io(o):pr(),a}function Gw(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ir(t,e){if(!Xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))ir(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(Wo(t)||co(t))t.forEach(n=>{ir(n,e)});else if(Ew(t))for(const n in t)ir(t[n],e);return t}function Nr(t){return ye(t)?{setup:t,name:t.name}:t}const mu=t=>!!t.type.__asyncLoader,Yw=t=>t.type.__isKeepAlive;function zA(t,e){Qw(t,"a",e)}function jA(t,e){Qw(t,"da",e)}function Qw(t,e,n=gt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xh(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Yw(s.parent.vnode)&&HA(i,e,n,s),s=s.parent}}function HA(t,e,n,i){const s=Xh(e,t,i,!0);im(()=>{zg(i[e],s)},n)}function Xh(t,e,n=gt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qo(),Io(n);const a=Xn(e,n,t,o);return pr(),Ko(),a});return i?s.unshift(r):s.push(r),r}}const Xi=t=>(e,n=gt)=>(!ol||t==="sp")&&Xh(t,(...i)=>e(...i),n),WA=Xi("bm"),nm=Xi("m"),qA=Xi("bu"),KA=Xi("u"),Xw=Xi("bum"),im=Xi("um"),Jw=Xi("sp"),GA=Xi("rtg"),YA=Xi("rtc");function QA(t,e=gt){Xh("ec",t,e)}function zn(t,e){const n=xn;if(n===null)return t;const i=ed(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ze]=e[r];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Hs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qo(),Xn(l,n,8,[t.el,a,t,e]),Ko())}}const Zw="components";function Cs(t,e){return JA(Zw,t,!0,e)||t}const XA=Symbol();function JA(t,e,n=!0,i=!1){const s=xn||gt;if(s){const r=s.type;if(t===Zw){const a=CR(r,!1);if(a&&(a===e||a===_i(e)||a===jh(_i(e))))return r}const o=Vy(s[t]||r[t],e)||Vy(s.appContext[t],e);return!o&&i?r:o}}function Vy(t,e){return t&&(t[e]||t[_i(e)]||t[jh(_i(e))])}function on(t,e,n,i){let s;const r=n&&n[i];if(oe(t)||It(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Xe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const ip=t=>t?uE(t)?ed(t)||t.proxy:ip(t.parent):null,Oa=an(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ip(t.parent),$root:t=>ip(t.root),$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>em(t.update)),$nextTick:t=>t.n||(t.n=Zg.bind(t.proxy)),$watch:t=>$A.bind(t)}),sf=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Ne(t,e),ZA={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(sf(i,e))return o[e]=1,i[e];if(s!==Ze&&Ne(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ne(c,e))return o[e]=3,r[e];if(n!==Ze&&Ne(n,e))return o[e]=4,n[e];sp&&(o[e]=0)}}const u=Oa[e];let h,d;if(u)return e==="$attrs"&&yn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&Ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ne(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return sf(s,e)?(s[e]=n,!0):i!==Ze&&Ne(i,e)?(i[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ze&&Ne(t,o)||sf(e,o)||(a=r[0])&&Ne(a,o)||Ne(i,o)||Ne(Oa,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let sp=!0;function eR(t){const e=sm(t),n=t.proxy,i=t.ctx;sp=!1,e.beforeCreate&&By(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:b,unmounted:T,render:I,renderTracked:D,renderTriggered:C,errorCaptured:S,serverPrefetch:$,expose:ee,inheritAttrs:z,components:W,directives:me,filters:Ke}=e;if(c&&tR(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const Ce=o[te];ye(Ce)&&(i[te]=Ce.bind(n))}if(s){const te=s.call(n,n);Xe(te)&&(t.data=Ss(te))}if(sp=!0,r)for(const te in r){const Ce=r[te],Vt=ye(Ce)?Ce.bind(n,n):ye(Ce.get)?Ce.get.bind(n,n):Qn,ln=!ye(Ce)&&ye(Ce.set)?Ce.set.bind(n):Qn,Bt=xe({get:Vt,set:ln});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:pt=>Bt.value=pt})}if(a)for(const te in a)eE(a[te],i,n,te);if(l){const te=ye(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Ce=>{gu(Ce,te[Ce])})}u&&By(u,t,"c");function _e(te,Ce){oe(Ce)?Ce.forEach(Vt=>te(Vt.bind(n))):Ce&&te(Ce.bind(n))}if(_e(WA,h),_e(nm,d),_e(qA,f),_e(KA,p),_e(zA,g),_e(jA,m),_e(QA,S),_e(YA,D),_e(GA,C),_e(Xw,y),_e(im,T),_e(Jw,$),oe(ee))if(ee.length){const te=t.exposed||(t.exposed={});ee.forEach(Ce=>{Object.defineProperty(te,Ce,{get:()=>n[Ce],set:Vt=>n[Ce]=Vt})})}else t.exposed||(t.exposed={});I&&t.render===Qn&&(t.render=I),z!=null&&(t.inheritAttrs=z),W&&(t.components=W),me&&(t.directives=me)}function tR(t,e,n=Qn,i=!1){oe(t)&&(t=rp(t));for(const s in t){const r=t[s];let o;Xe(r)?"default"in r?o=mn(r.from||s,r.default,!0):o=mn(r.from||s):o=mn(r),ut(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function By(t,e,n){Xn(oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function eE(t,e,n,i){const s=i.includes(".")?Gw(n,i):()=>n[i];if(It(t)){const r=e[t];ye(r)&&ys(s,r)}else if(ye(t))ys(s,t.bind(n));else if(Xe(t))if(oe(t))t.forEach(r=>eE(r,e,n,i));else{const r=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(r)&&ys(s,r,t)}}function sm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Uu(l,c,o,!0)),Uu(l,e,o)),Xe(e)&&r.set(e,l),l}function Uu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Uu(t,r,n,!0),s&&s.forEach(o=>Uu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=nR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nR={data:$y,props:Qs,emits:Qs,methods:Qs,computed:Qs,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Qs,directives:Qs,watch:sR,provide:$y,inject:iR};function $y(t,e){return e?t?function(){return an(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function iR(t,e){return Qs(rp(t),rp(e))}function rp(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nn(t,e){return t?[...new Set([].concat(t,e))]:e}function Qs(t,e){return t?an(an(Object.create(null),t),e):e}function sR(t,e){if(!t)return e;if(!e)return t;const n=an(Object.create(null),t);for(const i in e)n[i]=nn(t[i],e[i]);return n}function rR(t,e,n,i=!1){const s={},r={};Pu(r,Zh,1),t.propsDefaults=Object.create(null),tE(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:wA(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function oR(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ee(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gh(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ne(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=_i(d);s[p]=op(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{tE(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ne(e,h)&&((u=Mr(h))===h||!Ne(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=op(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ne(e,h))&&(delete r[h],c=!0)}c&&zi(t,"set","$attrs")}function tE(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fu(l))continue;const c=e[l];let u;s&&Ne(s,u=_i(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gh(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ee(n),c=a||Ze;for(let u=0;u<r.length;u++){const h=r[u];n[h]=op(s,l,h,c[h],t,!Ne(c,h))}}return o}function op(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ye(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Io(s),i=c[n]=l.call(null,e),pr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Mr(n))&&(i=!0))}return i}function nE(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ye(t)){const u=h=>{l=!0;const[d,f]=nE(h,e,!0);an(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Xe(t)&&i.set(t,lo),lo;if(oe(r))for(let u=0;u<r.length;u++){const h=_i(r[u]);zy(h)&&(o[h]=Ze)}else if(r)for(const u in r){const h=_i(u);if(zy(h)){const d=r[u],f=o[h]=oe(d)||ye(d)?{type:d}:Object.assign({},d);if(f){const p=Wy(Boolean,f.type),g=Wy(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||Ne(f,"default"))&&a.push(h)}}}const c=[o,a];return Xe(t)&&i.set(t,c),c}function zy(t){return t[0]!=="$"}function jy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hy(t,e){return jy(t)===jy(e)}function Wy(t,e){return oe(e)?e.findIndex(n=>Hy(n,t)):ye(e)&&Hy(e,t)?0:-1}const iE=t=>t[0]==="_"||t==="$stable",rm=t=>oe(t)?t.map(ai):[ai(t)],aR=(t,e,n)=>{if(e._n)return e;const i=Qh((...s)=>rm(e(...s)),n);return i._c=!1,i},sE=(t,e,n)=>{const i=t._ctx;for(const s in t){if(iE(s))continue;const r=t[s];if(ye(r))e[s]=aR(s,r,i);else if(r!=null){const o=rm(r);e[s]=()=>o}}},rE=(t,e)=>{const n=rm(e);t.slots.default=()=>n},lR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ee(e),Pu(e,"_",n)):sE(e,t.slots={})}else t.slots={},e&&rE(t,e);Pu(t.slots,Zh,1)},cR=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(an(s,e),!n&&a===1&&delete s._):(r=!e.$stable,sE(e,s)),o=e}else e&&(rE(t,e),o={default:1});if(r)for(const a in s)!iE(a)&&!(a in o)&&delete s[a]};function oE(){return{app:null,config:{isNativeTag:Bk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uR=0;function hR(t,e){return function(i,s=null){ye(i)||(i=Object.assign({},i)),s!=null&&!Xe(s)&&(s=null);const r=oE(),o=new Set;let a=!1;const l=r.app={_uid:uR++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:fE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ye(c.install)?(o.add(c),c.install(l,...u)):ye(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ue(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ed(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ap(t,e,n,i,s=!1){if(oe(t)){t.forEach((d,f)=>ap(d,e&&(oe(e)?e[f]:e),n,i,s));return}if(mu(i)&&!s)return;const r=i.shapeFlag&4?ed(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(It(c)?(u[c]=null,Ne(h,c)&&(h[c]=null)):ut(c)&&(c.value=null)),ye(l))_s(l,a,12,[o,u]);else{const d=It(l),f=ut(l);if(d||f){const p=()=>{if(t.f){const g=d?Ne(h,l)?h[l]:u[l]:l.value;s?oe(g)&&zg(g,r):oe(g)?g.includes(r)||g.push(r):d?(u[l]=[r],Ne(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ne(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,hn(p,n)):p()}}}const hn=VA;function dR(t){return fR(t)}function fR(t,e){const n=qk();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Qn,insertStaticContent:p}=t,g=(v,w,x,k=null,M=null,V=null,K=!1,U=null,B=!!w.dynamicChildren)=>{if(v===w)return;v&&!la(v,w)&&(k=q(v),pt(v,M,V,!0),v=null),w.patchFlag===-2&&(B=!1,w.dynamicChildren=null);const{type:N,ref:se,shapeFlag:Q}=w;switch(N){case Jh:m(v,w,x,k);break;case br:_(v,w,x,k);break;case _u:v==null&&y(w,x,k,K);break;case be:W(v,w,x,k,M,V,K,U,B);break;default:Q&1?I(v,w,x,k,M,V,K,U,B):Q&6?me(v,w,x,k,M,V,K,U,B):(Q&64||Q&128)&&N.process(v,w,x,k,M,V,K,U,B,Me)}se!=null&&M&&ap(se,v&&v.ref,V,w||v,!w)},m=(v,w,x,k)=>{if(v==null)i(w.el=a(w.children),x,k);else{const M=w.el=v.el;w.children!==v.children&&c(M,w.children)}},_=(v,w,x,k)=>{v==null?i(w.el=l(w.children||""),x,k):w.el=v.el},y=(v,w,x,k)=>{[v.el,v.anchor]=p(v.children,w,x,k,v.el,v.anchor)},b=({el:v,anchor:w},x,k)=>{let M;for(;v&&v!==w;)M=d(v),i(v,x,k),v=M;i(w,x,k)},T=({el:v,anchor:w})=>{let x;for(;v&&v!==w;)x=d(v),s(v),v=x;s(w)},I=(v,w,x,k,M,V,K,U,B)=>{K=K||w.type==="svg",v==null?D(w,x,k,M,V,K,U,B):$(v,w,M,V,K,U,B)},D=(v,w,x,k,M,V,K,U)=>{let B,N;const{type:se,props:Q,shapeFlag:re,transition:he,dirs:Te}=v;if(B=v.el=o(v.type,V,Q&&Q.is,Q),re&8?u(B,v.children):re&16&&S(v.children,B,null,k,M,V&&se!=="foreignObject",K,U),Te&&Hs(v,null,k,"created"),C(B,v,v.scopeId,K,k),Q){for(const We in Q)We!=="value"&&!fu(We)&&r(B,We,null,Q[We],V,v.children,k,M,H);"value"in Q&&r(B,"value",null,Q.value),(N=Q.onVnodeBeforeMount)&&si(N,k,v)}Te&&Hs(v,null,k,"beforeMount");const Ye=(!M||M&&!M.pendingBranch)&&he&&!he.persisted;Ye&&he.beforeEnter(B),i(B,w,x),((N=Q&&Q.onVnodeMounted)||Ye||Te)&&hn(()=>{N&&si(N,k,v),Ye&&he.enter(B),Te&&Hs(v,null,k,"mounted")},M)},C=(v,w,x,k,M)=>{if(x&&f(v,x),k)for(let V=0;V<k.length;V++)f(v,k[V]);if(M){let V=M.subTree;if(w===V){const K=M.vnode;C(v,K,K.scopeId,K.slotScopeIds,M.parent)}}},S=(v,w,x,k,M,V,K,U,B=0)=>{for(let N=B;N<v.length;N++){const se=v[N]=U?as(v[N]):ai(v[N]);g(null,se,w,x,k,M,V,K,U)}},$=(v,w,x,k,M,V,K)=>{const U=w.el=v.el;let{patchFlag:B,dynamicChildren:N,dirs:se}=w;B|=v.patchFlag&16;const Q=v.props||Ze,re=w.props||Ze;let he;x&&Ws(x,!1),(he=re.onVnodeBeforeUpdate)&&si(he,x,w,v),se&&Hs(w,v,x,"beforeUpdate"),x&&Ws(x,!0);const Te=M&&w.type!=="foreignObject";if(N?ee(v.dynamicChildren,N,U,x,k,Te,V):K||Ce(v,w,U,null,x,k,Te,V,!1),B>0){if(B&16)z(U,w,Q,re,x,k,M);else if(B&2&&Q.class!==re.class&&r(U,"class",null,re.class,M),B&4&&r(U,"style",Q.style,re.style,M),B&8){const Ye=w.dynamicProps;for(let We=0;We<Ye.length;We++){const mt=Ye[We],Bn=Q[mt],Kr=re[mt];(Kr!==Bn||mt==="value")&&r(U,mt,Bn,Kr,M,v.children,x,k,H)}}B&1&&v.children!==w.children&&u(U,w.children)}else!K&&N==null&&z(U,w,Q,re,x,k,M);((he=re.onVnodeUpdated)||se)&&hn(()=>{he&&si(he,x,w,v),se&&Hs(w,v,x,"updated")},k)},ee=(v,w,x,k,M,V,K)=>{for(let U=0;U<w.length;U++){const B=v[U],N=w[U],se=B.el&&(B.type===be||!la(B,N)||B.shapeFlag&70)?h(B.el):x;g(B,N,se,null,k,M,V,K,!0)}},z=(v,w,x,k,M,V,K)=>{if(x!==k){if(x!==Ze)for(const U in x)!fu(U)&&!(U in k)&&r(v,U,x[U],null,K,w.children,M,V,H);for(const U in k){if(fu(U))continue;const B=k[U],N=x[U];B!==N&&U!=="value"&&r(v,U,N,B,K,w.children,M,V,H)}"value"in k&&r(v,"value",x.value,k.value)}},W=(v,w,x,k,M,V,K,U,B)=>{const N=w.el=v?v.el:a(""),se=w.anchor=v?v.anchor:a("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:he}=w;he&&(U=U?U.concat(he):he),v==null?(i(N,x,k),i(se,x,k),S(w.children,x,se,M,V,K,U,B)):Q>0&&Q&64&&re&&v.dynamicChildren?(ee(v.dynamicChildren,re,x,M,V,K,U),(w.key!=null||M&&w===M.subTree)&&aE(v,w,!0)):Ce(v,w,x,se,M,V,K,U,B)},me=(v,w,x,k,M,V,K,U,B)=>{w.slotScopeIds=U,v==null?w.shapeFlag&512?M.ctx.activate(w,x,k,K,B):Ke(w,x,k,M,V,K,B):de(v,w,B)},Ke=(v,w,x,k,M,V,K)=>{const U=v.component=ER(v,k,M);if(Yw(v)&&(U.ctx.renderer=Me),TR(U),U.asyncDep){if(M&&M.registerDep(U,_e),!v.el){const B=U.subTree=Ue(br);_(null,B,w,x)}return}_e(U,v,w,x,M,V,K)},de=(v,w,x)=>{const k=w.component=v.component;if(LA(v,w,x))if(k.asyncDep&&!k.asyncResolved){te(k,w,x);return}else k.next=w,RA(k.update),k.update();else w.el=v.el,k.vnode=w},_e=(v,w,x,k,M,V,K)=>{const U=()=>{if(v.isMounted){let{next:se,bu:Q,u:re,parent:he,vnode:Te}=v,Ye=se,We;Ws(v,!1),se?(se.el=Te.el,te(v,se,K)):se=Te,Q&&pu(Q),(We=se.props&&se.props.onVnodeBeforeUpdate)&&si(We,he,se,Te),Ws(v,!0);const mt=nf(v),Bn=v.subTree;v.subTree=mt,g(Bn,mt,h(Bn.el),q(Bn),v,M,V),se.el=mt.el,Ye===null&&FA(v,mt.el),re&&hn(re,M),(We=se.props&&se.props.onVnodeUpdated)&&hn(()=>si(We,he,se,Te),M)}else{let se;const{el:Q,props:re}=w,{bm:he,m:Te,parent:Ye}=v,We=mu(w);if(Ws(v,!1),he&&pu(he),!We&&(se=re&&re.onVnodeBeforeMount)&&si(se,Ye,w),Ws(v,!0),Q&&we){const mt=()=>{v.subTree=nf(v),we(Q,v.subTree,v,M,null)};We?w.type.__asyncLoader().then(()=>!v.isUnmounted&&mt()):mt()}else{const mt=v.subTree=nf(v);g(null,mt,x,k,v,M,V),w.el=mt.el}if(Te&&hn(Te,M),!We&&(se=re&&re.onVnodeMounted)){const mt=w;hn(()=>si(se,Ye,mt),M)}(w.shapeFlag&256||Ye&&mu(Ye.vnode)&&Ye.vnode.shapeFlag&256)&&v.a&&hn(v.a,M),v.isMounted=!0,w=x=k=null}},B=v.effect=new qg(U,()=>em(N),v.scope),N=v.update=()=>B.run();N.id=v.uid,Ws(v,!0),N()},te=(v,w,x)=>{w.component=v;const k=v.vnode.props;v.vnode=w,v.next=null,oR(v,w.props,k,x),cR(v,w.children,x),qo(),Fy(),Ko()},Ce=(v,w,x,k,M,V,K,U,B=!1)=>{const N=v&&v.children,se=v?v.shapeFlag:0,Q=w.children,{patchFlag:re,shapeFlag:he}=w;if(re>0){if(re&128){ln(N,Q,x,k,M,V,K,U,B);return}else if(re&256){Vt(N,Q,x,k,M,V,K,U,B);return}}he&8?(se&16&&H(N,M,V),Q!==N&&u(x,Q)):se&16?he&16?ln(N,Q,x,k,M,V,K,U,B):H(N,M,V,!0):(se&8&&u(x,""),he&16&&S(Q,x,k,M,V,K,U,B))},Vt=(v,w,x,k,M,V,K,U,B)=>{v=v||lo,w=w||lo;const N=v.length,se=w.length,Q=Math.min(N,se);let re;for(re=0;re<Q;re++){const he=w[re]=B?as(w[re]):ai(w[re]);g(v[re],he,x,null,M,V,K,U,B)}N>se?H(v,M,V,!0,!1,Q):S(w,x,k,M,V,K,U,B,Q)},ln=(v,w,x,k,M,V,K,U,B)=>{let N=0;const se=w.length;let Q=v.length-1,re=se-1;for(;N<=Q&&N<=re;){const he=v[N],Te=w[N]=B?as(w[N]):ai(w[N]);if(la(he,Te))g(he,Te,x,null,M,V,K,U,B);else break;N++}for(;N<=Q&&N<=re;){const he=v[Q],Te=w[re]=B?as(w[re]):ai(w[re]);if(la(he,Te))g(he,Te,x,null,M,V,K,U,B);else break;Q--,re--}if(N>Q){if(N<=re){const he=re+1,Te=he<se?w[he].el:k;for(;N<=re;)g(null,w[N]=B?as(w[N]):ai(w[N]),x,Te,M,V,K,U,B),N++}}else if(N>re)for(;N<=Q;)pt(v[N],M,V,!0),N++;else{const he=N,Te=N,Ye=new Map;for(N=Te;N<=re;N++){const wn=w[N]=B?as(w[N]):ai(w[N]);wn.key!=null&&Ye.set(wn.key,N)}let We,mt=0;const Bn=re-Te+1;let Kr=!1,xy=0;const aa=new Array(Bn);for(N=0;N<Bn;N++)aa[N]=0;for(N=he;N<=Q;N++){const wn=v[N];if(mt>=Bn){pt(wn,M,V,!0);continue}let ii;if(wn.key!=null)ii=Ye.get(wn.key);else for(We=Te;We<=re;We++)if(aa[We-Te]===0&&la(wn,w[We])){ii=We;break}ii===void 0?pt(wn,M,V,!0):(aa[ii-Te]=N+1,ii>=xy?xy=ii:Kr=!0,g(wn,w[ii],x,null,M,V,K,U,B),mt++)}const Sy=Kr?pR(aa):lo;for(We=Sy.length-1,N=Bn-1;N>=0;N--){const wn=Te+N,ii=w[wn],Cy=wn+1<se?w[wn+1].el:k;aa[N]===0?g(null,ii,x,Cy,M,V,K,U,B):Kr&&(We<0||N!==Sy[We]?Bt(ii,x,Cy,2):We--)}}},Bt=(v,w,x,k,M=null)=>{const{el:V,type:K,transition:U,children:B,shapeFlag:N}=v;if(N&6){Bt(v.component.subTree,w,x,k);return}if(N&128){v.suspense.move(w,x,k);return}if(N&64){K.move(v,w,x,Me);return}if(K===be){i(V,w,x);for(let Q=0;Q<B.length;Q++)Bt(B[Q],w,x,k);i(v.anchor,w,x);return}if(K===_u){b(v,w,x);return}if(k!==2&&N&1&&U)if(k===0)U.beforeEnter(V),i(V,w,x),hn(()=>U.enter(V),M);else{const{leave:Q,delayLeave:re,afterLeave:he}=U,Te=()=>i(V,w,x),Ye=()=>{Q(V,()=>{Te(),he&&he()})};re?re(V,Te,Ye):Ye()}else i(V,w,x)},pt=(v,w,x,k=!1,M=!1)=>{const{type:V,props:K,ref:U,children:B,dynamicChildren:N,shapeFlag:se,patchFlag:Q,dirs:re}=v;if(U!=null&&ap(U,null,x,v,!0),se&256){w.ctx.deactivate(v);return}const he=se&1&&re,Te=!mu(v);let Ye;if(Te&&(Ye=K&&K.onVnodeBeforeUnmount)&&si(Ye,w,v),se&6)R(v.component,x,k);else{if(se&128){v.suspense.unmount(x,k);return}he&&Hs(v,null,w,"beforeUnmount"),se&64?v.type.remove(v,w,x,M,Me,k):N&&(V!==be||Q>0&&Q&64)?H(N,w,x,!1,!0):(V===be&&Q&384||!M&&se&16)&&H(B,w,x),k&&Dn(v)}(Te&&(Ye=K&&K.onVnodeUnmounted)||he)&&hn(()=>{Ye&&si(Ye,w,v),he&&Hs(v,null,w,"unmounted")},x)},Dn=v=>{const{type:w,el:x,anchor:k,transition:M}=v;if(w===be){ni(x,k);return}if(w===_u){T(v);return}const V=()=>{s(x),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:U}=M,B=()=>K(x,V);U?U(v.el,V,B):B()}else V()},ni=(v,w)=>{let x;for(;v!==w;)x=d(v),s(v),v=x;s(w)},R=(v,w,x)=>{const{bum:k,scope:M,update:V,subTree:K,um:U}=v;k&&pu(k),M.stop(),V&&(V.active=!1,pt(K,v,w,x)),U&&hn(U,w),hn(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},H=(v,w,x,k=!1,M=!1,V=0)=>{for(let K=V;K<v.length;K++)pt(v[K],w,x,k,M)},q=v=>v.shapeFlag&6?q(v.component.subTree):v.shapeFlag&128?v.suspense.next():d(v.anchor||v.el),ne=(v,w,x)=>{v==null?w._vnode&&pt(w._vnode,null,null,!0):g(w._vnode||null,v,w,null,null,null,x),Fy(),Ww(),w._vnode=v},Me={p:g,um:pt,m:Bt,r:Dn,mt:Ke,mc:S,pc:Ce,pbc:ee,n:q,o:t};let lt,we;return e&&([lt,we]=e(Me)),{render:ne,hydrate:lt,createApp:hR(ne,lt)}}function Ws({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function aE(t,e,n=!1){const i=t.children,s=e.children;if(oe(i)&&oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=as(s[r]),a.el=o.el),n||aE(o,a)),a.type===Jh&&(a.el=o.el)}}function pR(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gR=t=>t.__isTeleport,be=Symbol(void 0),Jh=Symbol(void 0),br=Symbol(void 0),_u=Symbol(void 0),Pa=[];let qn=null;function P(t=!1){Pa.push(qn=t?null:[])}function mR(){Pa.pop(),qn=Pa[Pa.length-1]||null}let rl=1;function qy(t){rl+=t}function lE(t){return t.dynamicChildren=rl>0?qn||lo:null,mR(),rl>0&&qn&&qn.push(t),t}function L(t,e,n,i,s,r){return lE(A(t,e,n,i,s,r,!0))}function _n(t,e,n,i,s){return lE(Ue(t,e,n,i,s,!0))}function lp(t){return t?t.__v_isVNode===!0:!1}function la(t,e){return t.type===e.type&&t.key===e.key}const Zh="__vInternal",cE=({key:t})=>t??null,yu=({ref:t,ref_key:e,ref_for:n})=>t!=null?It(t)||ut(t)||ye(t)?{i:xn,r:t,k:e,f:!!n}:t:null;function A(t,e=null,n=null,i=0,s=null,r=t===be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cE(e),ref:e&&yu(e),scopeId:Yh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(om(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=It(n)?8:16),rl>0&&!o&&qn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qn.push(l),l}const Ue=_R;function _R(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===XA)&&(t=br),lp(t)){const a=To(t,e,!0);return n&&om(a,n),rl>0&&!r&&qn&&(a.shapeFlag&6?qn[qn.indexOf(t)]=a:qn.push(a)),a.patchFlag|=-2,a}if(kR(t)&&(t=t.__vccOpts),e){e=yR(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=Is(a)),Xe(l)&&(Wh(l)&&!oe(l)&&(l=an({},l)),e.style=Ho(l))}const o=It(t)?1:UA(t)?128:gR(t)?64:Xe(t)?4:ye(t)?2:0;return A(t,e,n,i,s,o,r,!0)}function yR(t){return t?Wh(t)||Zh in t?an({},t):t:null}function To(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?vR(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cE(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(yu(e)):[s,yu(e)]:yu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&To(t.ssContent),ssFallback:t.ssFallback&&To(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ie(t=" ",e=0){return Ue(Jh,null,t,e)}function ke(t="",e=!1){return e?(P(),_n(br,null,t)):Ue(br,null,t)}function ai(t){return t==null||typeof t=="boolean"?Ue(br):oe(t)?Ue(be,null,t.slice()):typeof t=="object"?as(t):Ue(Jh,null,String(t))}function as(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:To(t)}function om(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),om(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Zh in e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:xn},n=32):(e=String(e),i&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function vR(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Is([e.class,i.class]));else if(s==="style")e.style=Ho([e.style,i.style]);else if($h(s)){const r=e[s],o=i[s];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function si(t,e,n,i=null){Xn(t,e,7,[n,i])}const bR=oE();let wR=0;function ER(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||bR,r={uid:wR++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nE(i,s),emitsOptions:Kw(i,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=PA.bind(null,r),t.ce&&t.ce(r),r}let gt=null;const Vl=()=>gt||xn,Io=t=>{gt=t,t.scope.on()},pr=()=>{gt&&gt.scope.off(),gt=null};function uE(t){return t.vnode.shapeFlag&4}let ol=!1;function TR(t,e=!1){ol=e;const{props:n,children:i}=t.vnode,s=uE(t);rR(t,n,s,e),lR(t,i);const r=s?IR(t,e):void 0;return ol=!1,r}function IR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Eo(new Proxy(t.ctx,ZA));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?SR(t):null;Io(t),qo();const r=_s(i,t,0,[t.props,s]);if(Ko(),pr(),bw(r)){if(r.then(pr,pr),e)return r.then(o=>{Ky(t,o,e)}).catch(o=>{Kh(o,t,0)});t.asyncDep=r}else Ky(t,r,e)}else hE(t,e)}function Ky(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=Bw(e)),hE(t,n)}let Gy;function hE(t,e,n){const i=t.type;if(!t.render){if(!e&&Gy&&!i.render){const s=i.template||sm(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=an(an({isCustomElement:r,delimiters:a},o),l);i.render=Gy(s,c)}}t.render=i.render||Qn}Io(t),qo(),eR(t),Ko(),pr()}function xR(t){return new Proxy(t.attrs,{get(e,n){return yn(t,"get","$attrs"),e[n]}})}function SR(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=xR(t))},slots:t.slots,emit:t.emit,expose:e}}function ed(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bw(Eo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oa)return Oa[n](t)},has(e,n){return n in e||n in Oa}}))}function CR(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function kR(t){return ye(t)&&"__vccOpts"in t}const xe=(t,e)=>CA(t,e,ol);function Go(t,e,n){const i=arguments.length;return i===2?Xe(e)&&!oe(e)?lp(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&lp(n)&&(n=[n]),Ue(t,e,n))}const dE=Symbol(""),AR=()=>mn(dE),fE="3.2.47",RR="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,Yy=nr&&nr.createElement("template"),DR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?nr.createElementNS(RR,t):nr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Yy.innerHTML=i?`<svg>${t}</svg>`:t;const a=Yy.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function OR(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function PR(t,e,n){const i=t.style,s=It(n);if(n&&!s){if(e&&!It(e))for(const r in e)n[r]==null&&cp(i,r,"");for(const r in n)cp(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Qy=/\s*!important$/;function cp(t,e,n){if(oe(n))n.forEach(i=>cp(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=MR(t,e);Qy.test(n)?t.setProperty(Mr(i),n.replace(Qy,""),"important"):t[i]=n}}const Xy=["Webkit","Moz","ms"],rf={};function MR(t,e){const n=rf[e];if(n)return n;let i=_i(e);if(i!=="filter"&&i in t)return rf[e]=i;i=jh(i);for(let s=0;s<Xy.length;s++){const r=Xy[s]+i;if(r in t)return rf[e]=r}return e}const Jy="http://www.w3.org/1999/xlink";function NR(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jy,e.slice(6,e.length)):t.setAttributeNS(Jy,e,n);else{const r=Uk(e);n==null||r&&!yw(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function LR(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yw(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function cs(t,e,n,i){t.addEventListener(e,n,i)}function FR(t,e,n,i){t.removeEventListener(e,n,i)}function UR(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=VR(e);if(i){const c=r[e]=zR(i,s);cs(t,a,c,l)}else o&&(FR(t,a,o,l),r[e]=void 0)}}const Zy=/(?:Once|Passive|Capture)$/;function VR(t){let e;if(Zy.test(t)){e={};let i;for(;i=t.match(Zy);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let of=0;const BR=Promise.resolve(),$R=()=>of||(BR.then(()=>of=0),of=Date.now());function zR(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Xn(jR(i,n.value),e,5,[i])};return n.value=t,n.attached=$R(),n}function jR(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ev=/^on[a-z]/,HR=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?OR(t,i,s):e==="style"?PR(t,n,i):$h(e)?$g(e)||UR(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WR(t,e,i,s))?LR(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),NR(t,e,i,s))};function WR(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ev.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ev.test(e)&&It(n)?!1:e in t}function pE(t){const e=Vl();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>hp(r,s))},i=()=>{const s=t(e.proxy);up(e.subTree,s),n(s)};BA(i),nm(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),im(()=>s.disconnect())})}function up(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{up(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)hp(t.el,e);else if(t.type===be)t.children.forEach(n=>up(n,e));else if(t.type===_u){let{el:n,anchor:i}=t;for(;n&&(hp(n,e),n!==i);)n=n.nextSibling}}function hp(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>pu(e,n):e};function qR(t){t.target.composing=!0}function tv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pi={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=xo(s);const r=i||s.props&&s.props.type==="number";cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Mu(a)),t._assign(a)}),n&&cs(t,"change",()=>{t.value=t.value.trim()}),e||(cs(t,"compositionstart",qR),cs(t,"compositionend",tv),cs(t,"change",tv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=xo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Mu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},KR={deep:!0,created(t,e,n){t._assign=xo(n),cs(t,"change",()=>{const i=t._modelValue,s=al(t),r=t.checked,o=t._assign;if(oe(i)){const a=Bg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Wo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(gE(t,r))})},mounted:nv,beforeUpdate(t,e,n){t._assign=xo(n),nv(t,e,n)}};function nv(t,{value:e,oldValue:n},i){t._modelValue=e,oe(e)?t.checked=Bg(e,i.props.value)>-1:Wo(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Fl(e,gE(t,!0)))}const GR={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Wo(e);cs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mu(al(o)):al(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=xo(i)},mounted(t,{value:e}){iv(t,e)},beforeUpdate(t,e,n){t._assign=xo(n)},updated(t,{value:e}){iv(t,e)}};function iv(t,e){const n=t.multiple;if(!(n&&!oe(e)&&!Wo(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=al(r);if(n)oe(e)?r.selected=Bg(e,o)>-1:r.selected=e.has(o);else if(Fl(al(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function al(t){return"_value"in t?t._value:t.value}function gE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const YR=["ctrl","shift","alt","meta"],QR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YR.some(n=>t[`${n}Key`]&&!e.includes(n))},Fe=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=QR[e[s]];if(r&&r(n,e))return}return t(n,...i)},XR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sr=(t,e)=>n=>{if(!("key"in n))return;const i=Mr(n.key);if(e.some(s=>s===i||XR[s]===i))return t(n)},JR=an({patchProp:HR},DR);let sv;function ZR(){return sv||(sv=dR(JR))}const eD=(...t)=>{const e=ZR().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=tD(i);if(!s)return;const r=e._component;!ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tD(t){return It(t)?document.querySelector(t):t}var nD=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let mE;const td=t=>mE=t,_E=Symbol();function dp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ma;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ma||(Ma={}));function iD(){const t=Iw(!0),e=t.run(()=>Ge({}));let n=[],i=[];const s=Eo({install(r){td(s),s._a=r,r.provide(_E,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!nD?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yE=()=>{};function rv(t,e,n,i=yE){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Hg()&&xw(s),s}function Gr(t,...e){t.slice().forEach(n=>{n(...e)})}function fp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];dp(s)&&dp(i)&&t.hasOwnProperty(n)&&!ut(i)&&!Vi(i)?t[n]=fp(s,i):t[n]=i}return t}const sD=Symbol();function rD(t){return!dp(t)||!t.hasOwnProperty(sD)}const{assign:os}=Object;function oD(t){return!!(ut(t)&&t.effect)}function aD(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=IA(n.state.value[t]);return os(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Eo(xe(()=>{td(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=vE(t,c,e,n,i,!0),l}function vE(t,e,n={},i,s,r){let o;const a=os({actions:{}},n),l={deep:!0};let c,u,h=Eo([]),d=Eo([]),f;const p=i.state.value[t];!r&&!p&&(i.state.value[t]={}),Ge({});let g;function m(C){let S;c=u=!1,typeof C=="function"?(C(i.state.value[t]),S={type:Ma.patchFunction,storeId:t,events:f}):(fp(i.state.value[t],C),S={type:Ma.patchObject,payload:C,storeId:t,events:f});const $=g=Symbol();Zg().then(()=>{g===$&&(c=!0)}),u=!0,Gr(h,S,i.state.value[t])}const _=r?function(){const{state:S}=n,$=S?S():{};this.$patch(ee=>{os(ee,$)})}:yE;function y(){o.stop(),h=[],d=[],i._s.delete(t)}function b(C,S){return function(){td(i);const $=Array.from(arguments),ee=[],z=[];function W(de){ee.push(de)}function me(de){z.push(de)}Gr(d,{args:$,name:C,store:I,after:W,onError:me});let Ke;try{Ke=S.apply(this&&this.$id===t?this:I,$)}catch(de){throw Gr(z,de),de}return Ke instanceof Promise?Ke.then(de=>(Gr(ee,de),de)).catch(de=>(Gr(z,de),Promise.reject(de))):(Gr(ee,Ke),Ke)}}const T={_p:i,$id:t,$onAction:rv.bind(null,d),$patch:m,$reset:_,$subscribe(C,S={}){const $=rv(h,C,S.detached,()=>ee()),ee=o.run(()=>ys(()=>i.state.value[t],z=>{(S.flush==="sync"?u:c)&&C({storeId:t,type:Ma.direct,events:f},z)},os({},l,S)));return $},$dispose:y},I=Ss(T);i._s.set(t,I);const D=i._e.run(()=>(o=Iw(),o.run(()=>e())));for(const C in D){const S=D[C];if(ut(S)&&!oD(S)||Vi(S))r||(p&&rD(S)&&(ut(S)?S.value=p[C]:fp(S,p[C])),i.state.value[t][C]=S);else if(typeof S=="function"){const $=b(C,S);D[C]=$,a.actions[C]=S}}return os(I,D),os(Ee(I),D),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:C=>{m(S=>{os(S,C)})}}),i._p.forEach(C=>{os(I,o.run(()=>C({store:I,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(I.$state,p),c=!0,u=!0,I}function am(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Vl();return a=a||c&&mn(_E,null),a&&td(a),a=mE,a._s.has(i)||(r?vE(i,e,s,a):aD(i,s,a)),a._s.get(i)}return o.$id=i,o}function lD(t){{t=Ee(t);const e={};for(const n in t){const i=t[n];(ut(i)||Vi(i))&&(e[n]=$w(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw Yo(e)},Yo=function(t){return new Error("Firebase Database ("+bE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new uD;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(t){const e=wE(t);return nd.encodeByteArray(e,!0)},Vu=function(t){return EE(t).replace(/\./g,"")},Bu=function(t){try{return nd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){return TE(void 0,t)}function TE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dD(n)||(t[n]=TE(t[n],e[n]));return t}function dD(t){return t!=="__proto__"}/**
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
 */const pD=()=>fD().__FIREBASE_DEFAULTS__,gD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bu(t[1]);return e&&JSON.parse(e)},lm=()=>{try{return pD()||gD()||mD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IE=t=>{var e,n;return(n=(e=lm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_D=t=>{const e=IE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},yD=()=>{var t;return(t=lm())===null||t===void 0?void 0:t.config},xE=t=>{var e;return(e=lm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function vD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vu(JSON.stringify(n)),Vu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function bD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wD(){const t=Zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CE(){return bE.NODE_ADMIN===!0}function kE(){try{return typeof indexedDB=="object"}catch{return!1}}function ED(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="FirebaseError";class Ti extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=TD,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qo.prototype.create)}}class Qo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ID(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ti(s,a,i)}}function ID(t,e){return t.replace(xD,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const xD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){return JSON.parse(t)}function Nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=cl(Bu(r[0])||""),n=cl(Bu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},SD=function(t){const e=AE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CD=function(t){const e=AE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function So(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ov(r)&&ov(o)){if(!zu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ov(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function AD(t,e){const n=new RD(t,e);return n.subscribe.bind(n)}class RD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");DD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=af),s.error===void 0&&(s.error=af),s.complete===void 0&&(s.complete=af);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function af(){}function OD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,j(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},id=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ll;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LD(e))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xs){return this.instances.has(e)}getOptions(e=Xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ND(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Xs){return this.component?this.component.multipleInstances?e:Xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ND(t){return t===Xs?void 0:t}function LD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Le||(Le={}));const UD={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},VD=Le.INFO,BD={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},$D=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=BD[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=VD,this._logHandler=$D,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const zD=(t,e)=>e.some(n=>t instanceof n);let av,lv;function jD(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HD(){return lv||(lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RE=new WeakMap,gp=new WeakMap,DE=new WeakMap,lf=new WeakMap,um=new WeakMap;function WD(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vs(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RE.set(n,t)}).catch(()=>{}),um.set(e,t),e}function qD(t){if(gp.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KD(t){mp=t(mp)}function GD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(cf(this),e,...n);return DE.set(i,e.sort?e.sort():[e]),vs(i)}:HD().includes(t)?function(...e){return t.apply(cf(this),e),vs(RE.get(this))}:function(...e){return vs(t.apply(cf(this),e))}}function YD(t){return typeof t=="function"?GD(t):(t instanceof IDBTransaction&&qD(t),zD(t,jD())?new Proxy(t,mp):t)}function vs(t){if(t instanceof IDBRequest)return WD(t);if(lf.has(t))return lf.get(t);const e=YD(t);return e!==t&&(lf.set(t,e),um.set(e,t)),e}const cf=t=>um.get(t);function QD(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=vs(o);return i&&o.addEventListener("upgradeneeded",l=>{i(vs(o.result),l.oldVersion,l.newVersion,vs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const XD=["get","getKey","getAll","getAllKeys","count"],JD=["put","add","delete","clear"],uf=new Map;function cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uf.get(e))return uf.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=JD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||XD.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return uf.set(e,r),r}KD(t=>({...t,get:(e,n,i)=>cv(e,n)||t.get(e,n,i),has:(e,n)=>!!cv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eO(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function eO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",uv="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Bl("@firebase/app"),tO="@firebase/app-compat",nO="@firebase/analytics-compat",iO="@firebase/analytics",sO="@firebase/app-check-compat",rO="@firebase/app-check",oO="@firebase/auth",aO="@firebase/auth-compat",lO="@firebase/database",cO="@firebase/database-compat",uO="@firebase/functions",hO="@firebase/functions-compat",dO="@firebase/installations",fO="@firebase/installations-compat",pO="@firebase/messaging",gO="@firebase/messaging-compat",mO="@firebase/performance",_O="@firebase/performance-compat",yO="@firebase/remote-config",vO="@firebase/remote-config-compat",bO="@firebase/storage",wO="@firebase/storage-compat",EO="@firebase/firestore",TO="@firebase/firestore-compat",IO="firebase",xO="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="[DEFAULT]",SO={[_p]:"fire-core",[tO]:"fire-core-compat",[iO]:"fire-analytics",[nO]:"fire-analytics-compat",[rO]:"fire-app-check",[sO]:"fire-app-check-compat",[oO]:"fire-auth",[aO]:"fire-auth-compat",[lO]:"fire-rtdb",[cO]:"fire-rtdb-compat",[uO]:"fire-fn",[hO]:"fire-fn-compat",[dO]:"fire-iid",[fO]:"fire-iid-compat",[pO]:"fire-fcm",[gO]:"fire-fcm-compat",[mO]:"fire-perf",[_O]:"fire-perf-compat",[yO]:"fire-rc",[vO]:"fire-rc-compat",[bO]:"fire-gcs",[wO]:"fire-gcs-compat",[EO]:"fire-fst",[TO]:"fire-fst-compat","fire-js":"fire-js",[IO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,vp=new Map;function CO(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(vp.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,t);for(const n of ju.values())CO(n,t);return!0}function hm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bs=new Qo("app","Firebase",kO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=xO;function OE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw bs.create("bad-app-name",{appName:String(s)});if(n||(n=yD()),!n)throw bs.create("no-options");const r=ju.get(s);if(r){if(zu(n,r.options)&&zu(i,r.config))return r;throw bs.create("duplicate-app",{appName:s})}const o=new FD(s);for(const l of vp.values())o.addComponent(l);const a=new AO(n,i,o);return ju.set(s,a),a}function dm(t=yp){const e=ju.get(t);if(!e&&t===yp)return OE();if(!e)throw bs.create("no-app",{appName:t});return e}function Cn(t,e,n){var i;let s=(i=SO[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}yi(new Zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RO="firebase-heartbeat-database",DO=1,ul="firebase-heartbeat-store";let hf=null;function PE(){return hf||(hf=QD(RO,DO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ul)}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),hf}async function OO(t){try{return(await PE()).transaction(ul).objectStore(ul).get(ME(t))}catch(e){if(e instanceof Ti)wr.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function hv(t,e){try{const i=(await PE()).transaction(ul,"readwrite");return await i.objectStore(ul).put(e,ME(t)),i.done}catch(n){if(n instanceof Ti)wr.warn(n.message);else{const i=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(i.message)}}}function ME(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PO=1024,MO=30*24*60*60*1e3;class NO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=MO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dv(),{heartbeatsToSend:n,unsentEntries:i}=LO(this._heartbeatsCache.heartbeats),s=Vu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dv(){return new Date().toISOString().substring(0,10)}function LO(t,e=PO){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),fv(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class FO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kE()?ED().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fv(t){return Vu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t){yi(new Zn("platform-logger",e=>new ZD(e),"PRIVATE")),yi(new Zn("heartbeat",e=>new NO(e),"PRIVATE")),Cn(_p,uv,t),Cn(_p,uv,"esm2017"),Cn("fire-js","")}UO("");function fm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function NE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VO=NE,LE=new Qo("auth","Firebase",NE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Bl("@firebase/auth");function BO(t,...e){Hu.logLevel<=Le.WARN&&Hu.warn(`Auth (${Us}): ${t}`,...e)}function vu(t,...e){Hu.logLevel<=Le.ERROR&&Hu.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,...e){throw pm(t,...e)}function fi(t,...e){return pm(t,...e)}function FE(t,e,n){const i=Object.assign(Object.assign({},VO()),{[e]:n});return new Qo("auth","Firebase",i).create(e,{appName:t.name})}function $O(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&vi(t,"argument-error"),FE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return LE.create(t,...e)}function ce(t,e,...n){if(!t)throw pm(e,...n)}function Mi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function ji(t,e){t||Mi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zO(){return pv()==="http:"||pv()==="https:"}function pv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zO()||bD()||"connection"in navigator)?navigator.onLine:!0}function HO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,ji(n>e,"Short delay should be less than long delay!"),this.isMobile=cm()||SE()}get(){return jO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){ji(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new $l(3e4,6e4);function VE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zl(t,e,n,i,s={}){return BE(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),UE.fetch()($E(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function BE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},WO),e);try{const s=new GO(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Rc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Rc(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw FE(t,u,c);vi(t,u)}}catch(s){if(s instanceof Ti)throw s;vi(t,"network-request-failed",{message:String(s)})}}async function KO(t,e,n,i,s={}){const r=await zl(t,e,n,i,s);return"mfaPendingCredential"in r&&vi(t,"multi-factor-auth-required",{_serverResponse:r}),r}function $E(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?gm(t.config,s):`${t.config.apiScheme}://${s}`}class GO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(fi(this.auth,"network-request-failed")),qO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=fi(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e){return zl(t,"POST","/v1/accounts:delete",e)}async function QO(t,e){return zl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XO(t,e=!1){const n=Ft(t),i=await n.getIdToken(e),s=mm(i);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Na(df(s.auth_time)),issuedAtTime:Na(df(s.iat)),expirationTime:Na(df(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function df(t){return Number(t)*1e3}function mm(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bu(n);return s?JSON.parse(s):(vu("Failed to decode base64 JWT payload"),null)}catch(s){return vu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function JO(t){const e=mm(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ti&&ZO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ZO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(t){var e;const n=t.auth,i=await t.getIdToken(),s=await hl(t,QO(n,{idToken:i}));ce(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?i2(r.providerUserInfo):[],a=n2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function t2(t){const e=Ft(t);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n2(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function i2(t){return t.map(e=>{var{providerId:n}=e,i=fm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e){const n=await BE(t,{},async()=>{const i=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=$E(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ce(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await s2(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new dl;return i&&(ce(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dl,this.toJSON())}_performRefresh(){return Mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hl(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XO(this,e)}reload(){return t2(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Wu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hl(this,YO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:T,isAnonymous:I,providerData:D,stsTokenManager:C}=n;ce(b&&C,e,"internal-error");const S=dl.fromJSON(this.name,C);ce(typeof b=="string",e,"internal-error"),ns(h,e.name),ns(d,e.name),ce(typeof T=="boolean",e,"internal-error"),ce(typeof I=="boolean",e,"internal-error"),ns(f,e.name),ns(p,e.name),ns(g,e.name),ns(m,e.name),ns(_,e.name),ns(y,e.name);const $=new gr({uid:b,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:S,createdAt:_,lastLoginAt:y});return D&&Array.isArray(D)&&($.providerData=D.map(ee=>Object.assign({},ee))),m&&($._redirectEventId=m),$}static async _fromIdTokenResponse(e,n,i=!1){const s=new dl;s.updateFromServerResponse(n);const r=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wu(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;function Ni(t){ji(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?(ji(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const mv=jE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=bu(this.userKey,s.apiKey,r),this.fullPersistenceKey=bu("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ho(Ni(mv),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ni(mv);const o=bu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ho(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ho(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(GE(e))return"Blackberry";if(YE(e))return"Webos";if(_m(e))return"Safari";if((e.includes("chrome/")||WE(e))&&!e.includes("edge/"))return"Chrome";if(KE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function HE(t=Zt()){return/firefox\//i.test(t)}function _m(t=Zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WE(t=Zt()){return/crios\//i.test(t)}function qE(t=Zt()){return/iemobile/i.test(t)}function KE(t=Zt()){return/android/i.test(t)}function GE(t=Zt()){return/blackberry/i.test(t)}function YE(t=Zt()){return/webos/i.test(t)}function sd(t=Zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r2(t=Zt()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function o2(){return wD()&&document.documentMode===10}function QE(t=Zt()){return sd(t)||KE(t)||YE(t)||GE(t)||/windows phone/i.test(t)||qE(t)}function a2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e=[]){let n;switch(t){case"Browser":n=_v(Zt());break;case"Worker":n=`${_v(Zt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${i}`}async function JE(t,e){return zl(t,"GET","/v2/recaptchaConfig",VE(t,e))}function yv(t){return t!==void 0&&t.enterprise!==void 0}class ZE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eT(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=fi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",l2().appendChild(i)})}function c2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const u2="https://www.google.com/recaptcha/enterprise.js?render=",h2="recaptcha-enterprise";class d2{constructor(e){this.type=h2,this.auth=jl(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{JE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ZE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;yv(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&yv(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eT(u2+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class p2{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vv(this),this.idTokenSubscription=new vv(this),this.beforeStateQueue=new f2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ni(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ni(e))})}async initializeRecaptchaConfig(){const e=await JE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ZE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new d2(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ni(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Ni(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jl(t){return Ft(t)}class vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=AD(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e){const n=hm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(zu(r,e??{}))return s;vi(s,"already-initialized")}return n.initialize({options:e})}function m2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ni);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _2(t,e,n){const i=jl(t);ce(i._canInitEmulator,i,"emulator-config-failed"),ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=tT(e),{host:o,port:a}=y2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||v2()}function tT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y2(t){const e=tT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:bv(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:bv(o)}}}function bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mi("not implemented")}_getIdTokenResponse(e){return Mi("not implemented")}_linkToIdToken(e,n){return Mi("not implemented")}_getReauthenticationResolver(e){return Mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return KO(t,"POST","/v1/accounts:signInWithIdp",VE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="http://localhost";class Er extends nT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=fm(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Er(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,fo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:b2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hl extends ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Hl{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return In.credential(n,i)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Hl{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Hl{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ds.credential(n,i)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await gr._fromIdTokenResponse(e,i,s),o=wv(i);return new Co({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=wv(i);return new Co({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function wv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Ti{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new qu(e,n,i,s)}}function iT(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,r,e,i):r})}async function w2(t,e,n=!1){const i=await hl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Co._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await hl(t,iT(i,s,e,t),n);ce(r.idToken,i,"internal-error");const o=mm(r.idToken);ce(o,i,"internal-error");const{sub:a}=o;return ce(t.uid===a,i,"user-mismatch"),Co._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&vi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e,n=!1){const i="signIn",s=await iT(t,i,e),r=await Co._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function I2(t,e,n,i){return Ft(t).onIdTokenChanged(e,n,i)}function x2(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const Ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(){const t=Zt();return _m(t)||sd(t)}const C2=1e3,k2=10;class rT extends sT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S2()&&a2(),this.fallbackToPolling=QE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);o2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,k2):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rT.type="LOCAL";const A2=rT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT extends sT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oT.type="SESSION";const aT=oT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new rd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await R2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class D2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=vm("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}function O2(t){pi().location.href=t}/**
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
 */function lT(){return typeof pi().WorkerGlobalScope<"u"&&typeof pi().importScripts=="function"}async function P2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function N2(){return lT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="firebaseLocalStorageDb",L2=1,Gu="firebaseLocalStorage",uT="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function od(t,e){return t.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function F2(){const t=indexedDB.deleteDatabase(cT);return new Wl(t).toPromise()}function wp(){const t=indexedDB.open(cT,L2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Gu,{keyPath:uT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Gu)?e(i):(i.close(),await F2(),e(await wp()))})})}async function Ev(t,e,n){const i=od(t,!0).put({[uT]:e,value:n});return new Wl(i).toPromise()}async function U2(t,e){const n=od(t,!1).get(e),i=await new Wl(n).toPromise();return i===void 0?null:i.value}function Tv(t,e){const n=od(t,!0).delete(e);return new Wl(n).toPromise()}const V2=800,B2=3;class hT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>B2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(N2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P2(),!this.activeServiceWorker)return;this.sender=new D2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await Ev(e,Ku,"1"),await Tv(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ev(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>U2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=od(s,!1).getAll();return new Wl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hT.type="LOCAL";const $2=hT;new $l(3e4,6e4);/**
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
 */function dT(t,e){return e?Ni(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends nT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z2(t){return T2(t.auth,new bm(t),t.bypassAuthState)}function j2(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),E2(n,new bm(t),t.bypassAuthState)}async function H2(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),w2(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z2;case"linkViaPopup":case"linkViaRedirect":return H2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:vi(this.auth,"internal-error")}}resolve(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=new $l(2e3,1e4);async function ql(t,e,n){const i=jl(t);$O(t,e,ym);const s=dT(i,n);return new rr(i,"signInViaPopup",e,s).executeNotNull()}class rr extends fT{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){ji(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,W2.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="pendingRedirect",wu=new Map;class K2 extends fT{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const i=await G2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G2(t,e){const n=X2(e),i=Q2(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Y2(t,e){wu.set(t._key(),e)}function Q2(t){return Ni(t._redirectPersistence)}function X2(t){return bu(q2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){const i=jl(t),s=dT(i,e),o=await new K2(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=10*60*1e3;class eP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!pT(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iv(e))}saveEventToCache(e){this.cachedEventUids.add(Iv(e)),this.lastProcessedEventTime=Date.now()}}function Iv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e={}){return zl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sP=/^https?/;async function rP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nP(t);for(const n of e)try{if(oP(n))return}catch{}vi(t,"unauthorized-domain")}function oP(t){const e=bp(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!sP.test(n))return!1;if(iP.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aP=new $l(3e4,6e4);function xv(){const t=pi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lP(t){return new Promise((e,n)=>{var i,s,r;function o(){xv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xv(),n(fi(t,"network-request-failed"))},timeout:aP.get()})}if(!((s=(i=pi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=pi().gapi)===null||r===void 0)&&r.load)o();else{const a=c2("iframefcb");return pi()[a]=()=>{gapi.load?o():n(fi(t,"network-request-failed"))},eT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function cP(t){return Eu=Eu||lP(t),Eu}/**
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
 */const uP=new $l(5e3,15e3),hP="__/auth/iframe",dP="emulator/auth/iframe",fP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gm(e,dP):`https://${t.config.authDomain}/${hP}`,i={apiKey:e.apiKey,appName:t.name,v:Us},s=pP.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Xo(i).slice(1)}`}async function mP(t){const e=await cP(t),n=pi().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:gP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fP,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=fi(t,"network-request-failed"),a=pi().setTimeout(()=>{r(o)},uP.get());function l(){pi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const _P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yP=500,vP=600,bP="_blank",wP="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EP(t,e,n,i=yP,s=vP){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_P),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Zt().toLowerCase();n&&(a=WE(c)?bP:n),HE(c)&&(e=e||wP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(r2(c)&&a!=="_self")return TP(e||"",a),new Sv(null);const h=window.open(e||"",a,u);ce(h,t,"popup-blocked");try{h.focus()}catch{}return new Sv(h)}function TP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const IP="__/auth/handler",xP="emulator/auth/handler",SP=encodeURIComponent("fac");async function Cv(t,e,n,i,s,r){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Us,eventId:s};if(e instanceof ym){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Hl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${SP}=${encodeURIComponent(l)}`:"";return`${CP(t)}?${Xo(a).slice(1)}${c}`}function CP({config:t}){return t.emulator?gm(t,xP):`https://${t.authDomain}/${IP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="webStorageSupport";class kP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aT,this._completeRedirectFn=J2,this._overrideRedirectResult=Y2}async _openPopup(e,n,i,s){var r;ji((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Cv(e,n,i,bp(),s);return EP(e,o,vm())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Cv(e,n,i,bp(),s);return O2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ji(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await mP(e),i=new eP(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ff,{type:ff},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ff];o!==void 0&&n(!!o),vi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QE()||_m()||sd()}}const AP=kP;var kv="@firebase/auth",Av="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OP(t){yi(new Zn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ce(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XE(t)},c=new p2(i,s,r,l);return m2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),yi(new Zn("auth-internal",e=>{const n=jl(e.getProvider("auth").getImmediate());return(i=>new RP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(kv,Av,DP(t)),Cn(kv,Av,"esm2017")}/**
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
 */const PP=5*60,MP=xE("authIdTokenMaxAge")||PP;let Rv=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>MP)return;const s=n==null?void 0:n.token;Rv!==s&&(Rv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kl(t=dm()){const e=hm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=g2(t,{popupRedirectResolver:AP,persistence:[$2,A2,aT]}),i=xE("authTokenSyncURL");if(i){const r=NP(i);x2(n,r,()=>r(n.currentUser)),I2(n,o=>r(o))}const s=IE("auth");return s&&_2(n,`http://${s}`),n}OP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new Map,FP={activated:!1,tokenObservers:[]};function bi(t){return LP.get(t)||Object.assign({},FP)}const Dv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ll,await VP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ll,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function VP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Yu=new Qo("appCheck","AppCheck",BP);function $P(t){if(!bi(t).activated)throw Yu.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-app-check-database",jP=1,Ep="firebase-app-check-store";let Dc=null;function HP(){return Dc||(Dc=new Promise((t,e)=>{try{const n=indexedDB.open(zP,jP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Yu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ep,{keyPath:"compositeKey"})}}}catch(n){e(Yu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Dc)}function WP(t,e){return qP(KP(t),e)}async function qP(t,e){const i=(await HP()).transaction(Ep,"readwrite"),r=i.objectStore(Ep).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Yu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function KP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Bl("@firebase/app-check");function Ov(t,e){return kE()?WP(t,e).catch(n=>{Tp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={error:"UNKNOWN_ERROR"};function YP(t){return nd.encodeString(JSON.stringify(t),!1)}async function Ip(t,e=!1){const n=t.app;$P(n);const i=bi(n);let s=i.token,r;if(s&&!wa(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(wa(l)?s=l:await Ov(n,void 0))}if(!e&&s&&wa(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await bi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Tp.warn(l.message):Tp.error(l),r=l}let a;return s?r?wa(s)?a={token:s.token,internalError:r}:a=Mv(r):(a={token:s.token},i.token=s,await Ov(n,s)):a=Mv(r),o&&JP(n,a),a}function QP(t,e,n,i){const{app:s}=t,r=bi(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&wa(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Pv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Pv(t))}function gT(t,e){const n=bi(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Pv(t){const{app:e}=t,n=bi(e);let i=n.tokenRefresher;i||(i=XP(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function XP(t){const{app:e}=t;return new UP(async()=>{const n=bi(e);let i;if(n.token?i=await Ip(t,!0):i=await Ip(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=bi(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Dv.RETRIAL_MIN_WAIT,Dv.RETRIAL_MAX_WAIT)}function JP(t,e){const n=bi(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function wa(t){return t.expireTimeMillis-Date.now()>0}function Mv(t){return{token:YP(GP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=bi(this.app);for(const n of e)gT(this.app,n.next);return Promise.resolve()}}function eM(t,e){return new ZP(t,e)}function tM(t){return{getToken:e=>Ip(t,e),addTokenListener:e=>QP(t,"INTERNAL",e),removeTokenListener:e=>gT(t.app,e)}}const nM="@firebase/app-check",iM="0.6.5",sM="app-check",Nv="app-check-internal";function rM(){yi(new Zn(sM,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return eM(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Nv).initialize()})),yi(new Zn(Nv,t=>{const e=t.getProvider("app-check").getImmediate();return tM(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Cn(nM,iM)}rM();var oM="firebase",aM="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(oM,aM,"app");const mT=Symbol("firebaseApp");function _T(t){return Vl()&&mn(mT,null)||dm(t)}const ui=()=>{};function wm(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function lM(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Lr(t){return!!t&&typeof t=="object"}const cM=Object.prototype;function uM(t){return Lr(t)&&Object.getPrototypeOf(t)===cM}function Em(t){return Lr(t)&&t.type==="document"}function yT(t){return Lr(t)&&t.type==="collection"}function hM(t){return Em(t)||yT(t)}function dM(t){return Lr(t)&&t.type==="query"}function fM(t){return Lr(t)&&"ref"in t}function pM(t){return Lr(t)&&typeof t.bucket=="string"}function gM(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function mM(){return!!(Vl()&&mn(dE,null))}const Lv="@firebase/database",Fv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vT="";function _M(t){vT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ji(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yM(e)}}catch{}return new vM},or=bT("localStorage"),xp=bT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Bl("@firebase/database"),bM=function(){let t=1;return function(){return t++}}(),wT=function(t){const e=PD(t),n=new kD;n.update(e);const i=n.digest();return nd.encodeByteArray(i)},Gl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gl.apply(null,i):typeof i=="object"?e+=Nt(i):e+=i,e+=" "}return e};let mr=null,Uv=!0;const wM=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(po.logLevel=Le.VERBOSE,mr=po.log.bind(po),e&&xp.set("logging_enabled",!0)):typeof t=="function"?mr=t:(mr=null,xp.remove("logging_enabled"))},Ht=function(...t){if(Uv===!0&&(Uv=!1,mr===null&&xp.get("logging_enabled")===!0&&wM(!0)),mr){const e=Gl.apply(null,t);mr(e)}},Yl=function(t){return function(...e){Ht(t,...e)}},Sp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gl(...t);po.error(e)},Tr=function(...t){const e=`FIREBASE FATAL ERROR: ${Gl(...t)}`;throw po.error(e),new Error(e)},kn=function(...t){const e="FIREBASE WARNING: "+Gl(...t);po.warn(e)},EM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ET=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ko="[MIN_NAME]",Ir="[MAX_NAME]",Jo=function(t,e){if(t===e)return 0;if(t===ko||e===Ir)return-1;if(e===ko||t===Ir)return 1;{const n=Vv(t),i=Vv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},IM=function(t,e){return t===e?0:t<e?-1:1},ca=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Nt(e))},Tm=function(t){if(typeof t!="object"||t===null)return Nt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Nt(e[i]),n+=":",n+=Tm(t[e[i]]);return n+="}",n},TT=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Un(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const IT=function(t){j(!ET(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},xM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},CM=new RegExp("^-?(0*)\\d{1,10}$"),kM=-2147483648,AM=2147483647,Vv=function(t){if(CM.test(t)){const e=Number(t);if(e>=kM&&e<=AM)return e}return null},Ql=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kn("Exception was thrown by user callback.",n),e},Math.floor(0))}},RM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class Cp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="5",xT="v",ST="s",CT="r",kT="f",AT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,RT="ls",DT="p",kp="ac",OT="websocket",PT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function MT(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let i;if(e===OT)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===PT)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MM(t)&&(n.ns=t.namespace);const s=[];return Un(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.counters_={}}incrementCounter(e,n=1){Ji(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={},gf={};function xm(t){const e=t.toString();return pf[e]||(pf[e]=new NM),pf[e]}function LM(t,e){const n=t.toString();return gf[n]||(gf[n]=e()),gf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ql(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="start",UM="close",VM="pLPCommand",BM="pRTLPCB",NT="id",LT="pw",FT="ser",$M="cb",zM="seg",jM="ts",HM="d",WM="dframe",UT=1870,VT=30,qM=UT-VT,KM=25e3,GM=3e4;class no{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yl(e),this.stats_=xm(n),this.urlFn=l=>(this.appCheckToken&&(l[kp]=this.appCheckToken),MT(n,PT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GM)),TM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bv)this.id=a,this.password=l;else if(o===UM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Bv]="t",i[FT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$M]=this.scriptTagHolder.uniqueCallbackIdentifier),i[xT]=Im,this.transportSessionId&&(i[ST]=this.transportSessionId),this.lastSessionId&&(i[RT]=this.lastSessionId),this.applicationId&&(i[DT]=this.applicationId),this.appCheckToken&&(i[kp]=this.appCheckToken),typeof location<"u"&&location.hostname&&AT.test(location.hostname)&&(i[CT]=kT);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){no.forceAllow_=!0}static forceDisallow(){no.forceDisallow_=!0}static isAvailable(){return no.forceAllow_?!0:!no.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xM()&&!SM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=EE(n),s=TT(i,qM);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[WM]="t",i[NT]=e,i[LT]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sm{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bM(),window[VM+this.uniqueCallbackIdentifier]=e,window[BM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ht("frame writing exception"),a.stack&&Ht(a.stack),Ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ht("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NT]=this.myID,e[LT]=this.myPW,e[FT]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VT+i.length<=UT;){const o=this.pendingSegs.shift();i=i+"&"+zM+s+"="+o.seg+"&"+jM+s+"="+o.ts+"&"+HM+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(KM)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=16384,QM=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class Hn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yl(this.connId),this.stats_=xm(n),this.connURL=Hn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[xT]=Im,typeof location<"u"&&location.hostname&&AT.test(location.hostname)&&(o[CT]=kT),n&&(o[ST]=n),i&&(o[RT]=i),s&&(o[kp]=s),r&&(o[DT]=r),MT(e,OT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let i;CE(),this.mySock=new Qu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Qu!==null&&!Hn.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=cl(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=TT(n,YM);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Hn.responsesRequiredToBeHealthy=2;Hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[no,Hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Hn&&Hn.isAvailable();let i=n&&!Hn.previouslyFailed();if(e.webSocketOnly&&(n||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Hn];else{const s=this.transports_=[];for(const r of fl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=6e4,JM=5e3,ZM=10*1024,eN=100*1024,mf="t",$v="d",tN="s",zv="r",nN="e",jv="o",Hv="a",Wv="n",qv="p",iN="h";class sN{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yl("c:"+this.id+":"),this.transportManager_=new fl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mf in e){const n=e[mf];n===Hv?this.upgradeIfSecondaryHealthy_():n===zv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ca("t",e),i=ca("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ca("t",e),i=ca("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ca(mf,e);if($v in e){const i=e[$v];if(n===iN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Wv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tN?this.onConnectionShutdown_(i):n===zv?this.onReset_(i):n===nN?Sp("Server Error: "+i):n===jv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Im!==i&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends $T{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xu}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=32,Gv=768;class ot{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function qe(){return new ot("")}function Oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ks(t){return t.pieces_.length-t.pieceNum_}function et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ot(t.pieces_,e)}function zT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function HT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ot(e,0)}function Dt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ot)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ot(n,0)}function Ae(t){return t.pieceNum_>=t.pieces_.length}function Pn(t,e){const n=Oe(t),i=Oe(e);if(n===null)return e;if(n===i)return Pn(et(t),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function WT(t,e){if(ks(t)!==ks(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Kn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ks(t)>ks(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class oN{constructor(e,n){this.errorPrefix_=n,this.parts_=jT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=id(this.parts_[i]);qT(this)}}function aN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=id(e),qT(t)}function lN(t){const e=t.parts_.pop();t.byteLength_-=id(e),t.parts_.length>0&&(t.byteLength_-=1)}function qT(t){if(t.byteLength_>Gv)throw new Error(t.errorPrefix_+"has a key path longer than "+Gv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kv+") or object contains a cycle "+Js(t))}function Js(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends $T{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cm}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e3,cN=60*5*1e3,Yv=30*1e3,uN=1.3,hN=3e4,dN="server_kill",Qv=3;class Bi extends BT{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bi.nextPersistentConnectionId_++,this.log_=Yl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ua,this.maxReconnectDelay_=cN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!CE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Nt(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ll,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Bi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ji(e,"w")){const i=So(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SD(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Nt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sp("Unrecognized action received from server: "+Nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hN&&(this.reconnectDelay_=ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Bi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ht("getToken() completed but was canceled"):(Ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new sN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{kn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(dN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&kn(h),l())}}}interrupt(e){Ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pp(this.interruptReasons_)&&(this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Tm(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ot(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qv&&(this.reconnectDelay_=Yv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vT.replace(/\./g,"-")]=1,cm()?e["framework.cordova"]=1:SE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xu.getInstance().currentlyOnline();return pp(this.interruptReasons_)&&e}}Bi.nextPersistentConnectionId_=0;Bi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ad{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Pe(ko,e),s=new Pe(ko,n);return this.compare(i,s)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc;class KT extends ad{static get __EMPTY_NODE(){return Oc}static set __EMPTY_NODE(e){Oc=e}compare(e,n){return Jo(e.name,n.name)}isDefinedOn(e){throw Yo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Ir,Oc)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Oc)}toString(){return".key"}}const go=new KT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Rt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Rt.RED,this.left=s??pn.EMPTY_NODE,this.right=r??pn.EMPTY_NODE}copy(e,n,i,s,r){return new Rt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return pn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Rt.RED=!0;Rt.BLACK=!1;class fN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pn{constructor(e,n=pn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rt.BLACK,null,null))}remove(e){return new pn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pc(this.root_,null,this.comparator_,!0,e)}}pn.EMPTY_NODE=new fN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e){return Jo(t.name,e.name)}function km(t,e){return Jo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap;function gN(t){Ap=t}const GT=function(t){return typeof t=="number"?"number:"+IT(t):"string:"+t},YT=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ji(e,".sv"),"Priority must be a string or number.")}else j(t===Ap||t.isEmpty(),"priority of unexpected type.");j(t===Ap||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xv;class kt{constructor(e,n=kt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YT(this.priorityNode_)}static set __childrenNodeConstructor(e){Xv=e}static get __childrenNodeConstructor(){return Xv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new kt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:kt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ae(e)?this:Oe(e)===".priority"?this.priorityNode_:kt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:kt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Oe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(j(i!==".priority"||ks(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,kt.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=IT(this.value_):e+=this.value_,this.lazyHash_=wT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===kt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof kt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=kt.VALUE_TYPE_ORDER.indexOf(n),r=kt.VALUE_TYPE_ORDER.indexOf(i);return j(s>=0,"Unknown leaf type: "+n),j(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}kt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QT,XT;function mN(t){QT=t}function _N(t){XT=t}class yN extends ad{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Jo(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Ir,new kt("[PRIORITY-POST]",XT))}makePost(e,n){const i=QT(e);return new Pe(n,new kt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Yt=new yN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=Math.log(2);class bN{constructor(e){const n=r=>parseInt(Math.log(r)/vN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ju=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Rt(d,h.node,Rt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),g=s(f+1,c);return h=t[f],d=n?n(h):h,new Rt(d,h.node,Rt.BLACK,p,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,g){const m=h-p,_=h;h-=p;const y=s(m+1,_),b=t[m],T=n?n(b):b;f(new Rt(T,b.node,g,null,y))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,Rt.BLACK):(d(m,Rt.BLACK),d(m,Rt.RED))}return u},o=new bN(t.length),a=r(o);return new pn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;const Yr={};class Li{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Yr&&Yt,"ChildrenNode.ts has not been loaded"),_f=_f||new Li({".priority":Yr},{".priority":Yt}),_f}get(e){const n=So(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pn?n:null}hasIndex(e){return Ji(this.indexSet_,e.toString())}addIndex(e,n){j(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Pe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ju(i,e.getCompare()):a=Yr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Li(u,c)}addToIndexes(e,n){const i=$u(this.indexes_,(s,r)=>{const o=So(this.indexSet_,r);if(j(o,"Missing index implementation for "+r),s===Yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ju(a,o.getCompare())}else return Yr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new Li(i,this.indexSet_)}removeFromIndexes(e,n){const i=$u(this.indexes_,s=>{if(s===Yr)return s;{const r=n.get(e.name);return r?s.remove(new Pe(e.name,r)):s}});return new Li(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class ze{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&YT(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ha||(ha=new ze(new pn(km),null,Li.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ha}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ha:n}}getChild(e){const n=Oe(e);return n===null?this:this.getImmediateChild(n).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Pe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ha:this.priorityNode_;return new ze(s,o,r)}}updateChild(e,n){const i=Oe(e);if(i===null)return n;{j(Oe(e)!==".priority"||ks(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(et(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Yt,(o,a)=>{n[o]=a.val(e),i++,r&&ze.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GT(this.getPriority().val())+":"),this.forEachChild(Yt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":wT(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xl?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Yt),s=n.getIterator(Yt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wN extends ze{constructor(){super(new pn(km),ze.EMPTY_NODE,Li.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const Xl=new wN;Object.defineProperties(Pe,{MIN:{value:new Pe(ko,ze.EMPTY_NODE)},MAX:{value:new Pe(Ir,Xl)}});KT.__EMPTY_NODE=ze.EMPTY_NODE;kt.__childrenNodeConstructor=ze;gN(Xl);_N(Xl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=!0;function Wt(t,e=null){if(t===null)return ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new kt(n,Wt(e))}if(!(t instanceof Array)&&EN){const n=[];let i=!1;if(Un(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Wt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Pe(o,l)))}}),n.length===0)return ze.EMPTY_NODE;const r=Ju(n,pN,o=>o.name,km);if(i){const o=Ju(n,Yt.getCompare());return new ze(r,Wt(e),new Li({".priority":o},{".priority":Yt}))}else return new ze(r,Wt(e),Li.Default)}else{let n=ze.EMPTY_NODE;return Un(t,(i,s)=>{if(Ji(t,i)&&i.substring(0,1)!=="."){const r=Wt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Wt(e))}}mN(Wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN extends ad{constructor(e){super(),this.indexPath_=e,j(!Ae(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Jo(e.name,n.name):r}makePost(e,n){const i=Wt(e),s=ze.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(n,s)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,Xl);return new Pe(Ir,e)}toString(){return jT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN extends ad{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Jo(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const i=Wt(e);return new Pe(n,i)}toString(){return".value"}}const xN=new IN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return{type:"value",snapshotNode:t}}function CN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ko}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Yt}copy(){const e=new Am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Yt?n="$priority":t.index_===xN?n="$value":t.index_===go?n="$key":(j(t.index_ instanceof TN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Nt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Nt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Nt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Nt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function eb(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Yt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends BT{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Yl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zu.getListenId_(e,i),a={};this.listens_[o]=a;const l=Zv(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),So(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Zu.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Zv(e._queryParams),i=e._path.toString(),s=new ll;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=cl(a.responseText)}catch{kn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&kn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return{value:null,children:new Map}}function JT(t,e,n){if(Ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Oe(e);t.children.has(i)||t.children.set(i,eh());const s=t.children.get(i);e=et(e),JT(s,e,n)}}function Rp(t,e,n){t.value!==null?n(e,t.value):DN(t,(i,s)=>{const r=new ot(e.toString()+"/"+i);Rp(s,r,n)})}function DN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Un(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=10*1e3,PN=30*1e3,MN=5*60*1e3;class NN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ON(e);const i=tb+(PN-tb)*Math.random();La(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Un(e,(s,r)=>{r>0&&Ji(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*MN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hi||(hi={}));function ZT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=hi.ACK_USER_WRITE,this.source=ZT()}operationForChild(e){if(Ae(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ot(e));return new th(qe(),n,this.revert)}}else return j(Oe(this.path)===e,"operationForChild called for unrelated child."),new th(et(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=hi.OVERWRITE}operationForChild(e){return Ae(this.path)?new xr(this.source,qe(),this.snap.getImmediateChild(e)):new xr(this.source,et(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=hi.MERGE}operationForChild(e){if(Ae(this.path)){const n=this.children.subtree(new ot(e));return n.isEmpty()?null:n.value?new xr(this.source,qe(),n.value):new pl(this.source,qe(),n)}else return j(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pl(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=Oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LN(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(AN(o.childName,o.snapshotNode))}),da(t,s,"child_removed",e,i,n),da(t,s,"child_added",e,i,n),da(t,s,"child_moved",r,i,n),da(t,s,"child_changed",e,i,n),da(t,s,"value",e,i,n),s}function da(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>UN(t,a,l)),o.forEach(a=>{const l=FN(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function FN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UN(t,e,n){if(e.childName==null||n.childName==null)throw Yo("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),s=new Pe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){return{eventCache:t,serverCache:e}}function Fa(t,e,n,i){return nI(new Rm(e,n,i),t.serverCache)}function iI(t,e,n,i){return nI(t.eventCache,new Rm(e,n,i))}function Dp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Sr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;const VN=()=>(yf||(yf=new pn(IM)),yf);class Je{constructor(e,n=VN()){this.value=e,this.children=n}static fromObject(e){let n=new Je(null);return Un(e,(i,s)=>{n=n.set(new ot(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:qe(),value:this.value};if(Ae(e))return null;{const i=Oe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(et(e),n);return r!=null?{path:Dt(new ot(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ae(e))return this;{const n=Oe(e),i=this.children.get(n);return i!==null?i.subtree(et(e)):new Je(null)}}set(e,n){if(Ae(e))return new Je(n,this.children);{const i=Oe(e),r=(this.children.get(i)||new Je(null)).set(et(e),n),o=this.children.insert(i,r);return new Je(this.value,o)}}remove(e){if(Ae(e))return this.children.isEmpty()?new Je(null):new Je(null,this.children);{const n=Oe(e),i=this.children.get(n);if(i){const s=i.remove(et(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Je(null):new Je(this.value,r)}else return this}}get(e){if(Ae(e))return this.value;{const n=Oe(e),i=this.children.get(n);return i?i.get(et(e)):null}}setTree(e,n){if(Ae(e))return n;{const i=Oe(e),r=(this.children.get(i)||new Je(null)).setTree(et(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Je(this.value,o)}}fold(e){return this.fold_(qe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Dt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,qe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Ae(e))return null;{const r=Oe(e),o=this.children.get(r);return o?o.findOnPath_(et(e),Dt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,qe(),n)}foreachOnPath_(e,n,i){if(Ae(e))return this;{this.value&&i(n,this.value);const s=Oe(e),r=this.children.get(s);return r?r.foreachOnPath_(et(e),Dt(n,s),i):new Je(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Dt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.writeTree_=e}static empty(){return new Jn(new Je(null))}}function Ua(t,e,n){if(Ae(e))return new Jn(new Je(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Pn(s,e);return r=r.updateChild(o,n),new Jn(t.writeTree_.set(s,r))}else{const s=new Je(n),r=t.writeTree_.setTree(e,s);return new Jn(r)}}}function nb(t,e,n){let i=t;return Un(n,(s,r)=>{i=Ua(i,Dt(e,s),r)}),i}function ib(t,e){if(Ae(e))return Jn.empty();{const n=t.writeTree_.setTree(e,new Je(null));return new Jn(n)}}function Op(t,e){return Fr(t,e)!=null}function Fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pn(n.path,e)):null}function sb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Yt,(i,s)=>{e.push(new Pe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Pe(i,s.value))}),e}function ws(t,e){if(Ae(e))return t;{const n=Fr(t,e);return n!=null?new Jn(new Je(n)):new Jn(t.writeTree_.subtree(e))}}function Pp(t){return t.writeTree_.isEmpty()}function Ao(t,e){return sI(qe(),t.writeTree_,e)}function sI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(j(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=sI(Dt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Dt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e){return uI(e,t)}function BN(t,e,n,i,s){j(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ua(t.visibleWrites,e,n)),t.lastWriteId=i}function $N(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function zN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jN(a,i.path)?s=!1:Kn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return HN(t),!0;if(i.snap)t.visibleWrites=ib(t.visibleWrites,i.path);else{const a=i.children;Un(a,l=>{t.visibleWrites=ib(t.visibleWrites,Dt(i.path,l))})}return!0}else return!1}function jN(t,e){if(t.snap)return Kn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Kn(Dt(t.path,n),e))return!0;return!1}function HN(t){t.visibleWrites=oI(t.allWrites,WN,qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WN(t){return t.visible}function oI(t,e,n){let i=Jn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Kn(n,o)?(a=Pn(n,o),i=Ua(i,a,r.snap)):Kn(o,n)&&(a=Pn(o,n),i=Ua(i,qe(),r.snap.getChild(a)));else if(r.children){if(Kn(n,o))a=Pn(n,o),i=nb(i,a,r.children);else if(Kn(o,n))if(a=Pn(o,n),Ae(a))i=nb(i,qe(),r.children);else{const l=So(r.children,Oe(a));if(l){const c=l.getChild(et(a));i=Ua(i,qe(),c)}}}else throw Yo("WriteRecord should have .snap or .children")}}return i}function aI(t,e,n,i,s){if(!i&&!s){const r=Fr(t.visibleWrites,e);if(r!=null)return r;{const o=ws(t.visibleWrites,e);if(Pp(o))return n;if(n==null&&!Op(o,qe()))return null;{const a=n||ze.EMPTY_NODE;return Ao(o,a)}}}else{const r=ws(t.visibleWrites,e);if(!s&&Pp(r))return n;if(!s&&n==null&&!Op(r,qe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Kn(c.path,e)||Kn(e,c.path))},a=oI(t.allWrites,o,e),l=n||ze.EMPTY_NODE;return Ao(a,l)}}}function qN(t,e,n){let i=ze.EMPTY_NODE;const s=Fr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Yt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ws(t.visibleWrites,e);return n.forEachChild(Yt,(o,a)=>{const l=Ao(ws(r,new ot(o)),a);i=i.updateImmediateChild(o,l)}),sb(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ws(t.visibleWrites,e);return sb(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function KN(t,e,n,i,s){j(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Dt(e,n);if(Op(t.visibleWrites,r))return null;{const o=ws(t.visibleWrites,r);return Pp(o)?s.getChild(n):Ao(o,s.getChild(n))}}function GN(t,e,n,i){const s=Dt(e,n),r=Fr(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ws(t.visibleWrites,s);return Ao(o,i.getNode().getImmediateChild(n))}else return null}function YN(t,e){return Fr(t.visibleWrites,e)}function QN(t,e,n,i,s,r,o){let a;const l=ws(t.visibleWrites,e),c=Fr(l,qe());if(c!=null)a=c;else if(n!=null)a=Ao(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function XN(){return{visibleWrites:Jn.empty(),allWrites:[],lastWriteId:-1}}function Mp(t,e,n,i){return aI(t.writeTree,t.treePath,e,n,i)}function lI(t,e){return qN(t.writeTree,t.treePath,e)}function rb(t,e,n,i){return KN(t.writeTree,t.treePath,e,n,i)}function nh(t,e){return YN(t.writeTree,Dt(t.treePath,e))}function JN(t,e,n,i,s,r){return QN(t.writeTree,t.treePath,e,n,i,s,r)}function Dm(t,e,n){return GN(t.writeTree,t.treePath,e,n)}function cI(t,e){return uI(Dt(t.treePath,e),t.writeTree)}function uI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Jv(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,kN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,CN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Jv(i,e.snapshotNode,s.oldSnap));else throw Yo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const hI=new eL;class Om{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Rm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dm(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),r=JN(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function tL(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nL(t,e,n,i,s){const r=new ZN;let o,a;if(n.type===hi.OVERWRITE){const c=n;c.source.fromUser?o=Np(t,e,c.path,c.snap,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ae(c.path),o=ih(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===hi.MERGE){const c=n;c.source.fromUser?o=sL(t,e,c.path,c.children,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lp(t,e,c.path,c.children,i,s,a,r))}else if(n.type===hi.ACK_USER_WRITE){const c=n;c.revert?o=aL(t,e,c.path,i,s,r):o=rL(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===hi.LISTEN_COMPLETE)o=oL(t,e,n.path,i,r);else throw Yo("Unknown operation type: "+n.type);const l=r.getChanges();return iL(e,o,l),{viewCache:o,changes:l}}function iL(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Dp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(SN(Dp(e)))}}function dI(t,e,n,i,s,r){const o=e.eventCache;if(nh(i,n)!=null)return e;{let a,l;if(Ae(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Sr(e),u=c instanceof ze?c:ze.EMPTY_NODE,h=lI(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Mp(i,Sr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Oe(n);if(c===".priority"){j(ks(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=rb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=et(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=rb(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Dm(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Fa(e,a,o.isFullyInitialized()||Ae(n),t.filter.filtersNodes())}}function ih(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Ae(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Oe(n);if(!l.isCompleteForPath(n)&&ks(n)>1)return e;const p=et(n),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,hI,null)}const h=iI(e,c,l.isFullyInitialized()||Ae(n),u.filtersNodes()),d=new Om(s,h,r);return dI(t,h,n,s,d,a)}function Np(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Om(s,e,r);if(Ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Fa(e,c,!0,t.filter.filtersNodes());else{const h=Oe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Fa(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=et(n),f=a.getNode().getImmediateChild(h);let p;if(Ae(d))p=i;else{const g=u.getCompleteChild(h);g!=null?zT(d)===".priority"&&g.getChild(HT(d)).isEmpty()?p=g:p=g.updateChild(d,i):p=ze.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=Fa(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ob(t,e){return t.eventCache.isCompleteForChild(e)}function sL(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Dt(n,l);ob(e,Oe(u))&&(a=Np(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Dt(n,l);ob(e,Oe(u))||(a=Np(t,a,u,c,s,r,o))}),a}function ab(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Lp(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ae(n)?c=i:c=new Je(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=ab(t,f,d);l=ih(t,l,new ot(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=ab(t,p,d);l=ih(t,l,new ot(h),g,s,r,o,a)}}),l}function rL(t,e,n,i,s,r,o){if(nh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ih(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Ae(n)){let c=new Je(null);return l.getNode().forEachChild(go,(u,h)=>{c=c.set(new ot(u),h)}),Lp(t,e,n,c,s,r,a,o)}else return e}else{let c=new Je(null);return i.foreach((u,h)=>{const d=Dt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Lp(t,e,n,c,s,r,a,o)}}function oL(t,e,n,i,s){const r=e.serverCache,o=iI(e,r.getNode(),r.isFullyInitialized()||Ae(n),r.isFiltered());return dI(t,o,n,i,hI,s)}function aL(t,e,n,i,s,r){let o;if(nh(i,n)!=null)return e;{const a=new Om(i,e,s),l=e.eventCache.getNode();let c;if(Ae(n)||Oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mp(i,Sr(e));else{const h=e.serverCache.getNode();j(h instanceof ze,"serverChildren would be complete if leaf node"),u=lI(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Oe(n);let h=Dm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,et(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ze.EMPTY_NODE,et(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mp(i,Sr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||nh(i,qe())!=null,Fa(e,c,o,t.filter.filtersNodes())}}function lL(t,e){const n=Sr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ae(e)&&!n.getImmediateChild(Oe(e)).isEmpty())?n.getChild(e):null}function lb(t,e,n,i){e.type===hi.MERGE&&e.source.queryId!==null&&(j(Sr(t.viewCache_),"We should always have a full cache before handling merges"),j(Dp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=nL(t.processor_,s,e,n,i);return tL(t.processor_,r.viewCache),j(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,cL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cL(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return LN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cb;function uL(t){j(!cb,"__referenceConstructor has already been defined"),cb=t}function Pm(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return j(r!=null,"SyncTree gave us an op for an invalid query."),lb(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(lb(o,e,n,i));return r}}function Mm(t,e){let n=null;for(const i of t.views.values())n=n||lL(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ub;function hL(t){j(!ub,"__referenceConstructor has already been defined"),ub=t}class hb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Je(null),this.pendingWriteTree_=XN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dL(t,e,n,i,s){return BN(t.pendingWriteTree_,e,n,i,s),s?cd(t,new xr(ZT(),e,n)):[]}function io(t,e,n=!1){const i=$N(t.pendingWriteTree_,e);if(zN(t.pendingWriteTree_,e)){let r=new Je(null);return i.snap!=null?r=r.set(qe(),!0):Un(i.children,o=>{r=r.set(new ot(o),!0)}),cd(t,new th(i.path,r,n))}else return[]}function ld(t,e,n){return cd(t,new xr(eI(),e,n))}function fL(t,e,n){const i=Je.fromObject(n);return cd(t,new pl(eI(),e,i))}function pL(t,e,n,i){const s=mI(t,i);if(s!=null){const r=_I(s),o=r.path,a=r.queryId,l=Pn(o,e),c=new xr(tI(a),l,n);return yI(t,o,c)}else return[]}function gL(t,e,n,i){const s=mI(t,i);if(s){const r=_I(s),o=r.path,a=r.queryId,l=Pn(o,e),c=Je.fromObject(n),u=new pl(tI(a),l,c);return yI(t,o,u)}else return[]}function fI(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pn(o,e),c=Mm(a,l);if(c)return c});return aI(s,e,r,n,!0)}function cd(t,e){return pI(e,t.syncPointTree_,null,rI(t.pendingWriteTree_,qe()))}function pI(t,e,n,i){if(Ae(t.path))return gI(t,e,n,i);{const s=e.get(qe());n==null&&s!=null&&(n=Mm(s,qe()));let r=[];const o=Oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cI(i,o);r=r.concat(pI(a,l,c,u))}return s&&(r=r.concat(Pm(s,t,i,n))),r}}function gI(t,e,n,i){const s=e.get(qe());n==null&&s!=null&&(n=Mm(s,qe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cI(i,o),u=t.operationForChild(o);u&&(r=r.concat(gI(u,a,l,c)))}),s&&(r=r.concat(Pm(s,t,i,n))),r}function mI(t,e){return t.tagToQueryMap.get(e)}function _I(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ot(t.substr(0,e))}}function yI(t,e,n){const i=t.syncPointTree_.get(e);j(i,"Missing sync point for query tag that we're tracking");const s=rI(t.pendingWriteTree_,e);return Pm(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nm(n)}node(){return this.node_}}class Lm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Dt(this.path_,e);return new Lm(this.syncTree_,n)}node(){return fI(this.syncTree_,this.path_)}}const mL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},db=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _L(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yL(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_L=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},yL=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&j(!1,"Unexpected increment value: "+i);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},vL=function(t,e,n,i){return Fm(e,new Lm(n,t),i)},bL=function(t,e,n){return Fm(t,new Nm(e),n)};function Fm(t,e,n){const i=t.getPriority().val(),s=db(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=db(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new kt(a,Wt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new kt(s))),o.forEachChild(Yt,(a,l)=>{const c=Fm(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Vm(t,e){let n=e instanceof ot?e:new ot(e),i=t,s=Oe(n);for(;s!==null;){const r=So(i.node.children,s)||{children:{},childCount:0};i=new Um(s,i,r),n=et(n),s=Oe(n)}return i}function Zo(t){return t.node.value}function vI(t,e){t.node.value=e,Fp(t)}function bI(t){return t.node.childCount>0}function wL(t){return Zo(t)===void 0&&!bI(t)}function ud(t,e){Un(t.node.children,(n,i)=>{e(new Um(n,t,i))})}function wI(t,e,n,i){n&&!i&&e(t),ud(t,s=>{wI(s,e,!0,i)}),n&&i&&e(t)}function EL(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Jl(t){return new ot(t.parent===null?t.name:Jl(t.parent)+"/"+t.name)}function Fp(t){t.parent!==null&&TL(t.parent,t.name,t)}function TL(t,e,n){const i=wL(n),s=Ji(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Fp(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Fp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=/[\[\].#$\/\u0000-\u001F\u007F]/,xL=/[\[\].#$\u0000-\u001F\u007F]/,vf=10*1024*1024,EI=function(t){return typeof t=="string"&&t.length!==0&&!IL.test(t)},SL=function(t){return typeof t=="string"&&t.length!==0&&!xL.test(t)},CL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),SL(t)},TI=function(t,e,n){const i=n instanceof ot?new oN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Js(i));if(typeof e=="function")throw new Error(t+"contains a function "+Js(i)+" with contents = "+e.toString());if(ET(e))throw new Error(t+"contains "+e.toString()+" "+Js(i));if(typeof e=="string"&&e.length>vf/3&&id(e)>vf)throw new Error(t+"contains a string greater than "+vf+" utf8 bytes "+Js(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Un(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!EI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Js(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aN(i,o),TI(t,a,i),lN(i)}),s&&r)throw new Error(t+' contains ".value" child '+Js(i)+" in addition to actual children.")}},kL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!EI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CL(n))throw new Error(OD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RL(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!WT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ur(t,e,n){RL(t,n),DL(t,i=>Kn(i,e)||Kn(e,i))}function DL(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(OL(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function OL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();mr&&Ht("event: "+n.toString()),Ql(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL="repo_interrupt",ML=25;class NL{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eh(),this.transactionQueueTree_=new Um,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LL(t,e,n){if(t.stats_=xm(t.repoInfo_),t.forceRestClient_||RM())t.server_=new Zu(t.repoInfo_,(i,s,r,o)=>{fb(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pb(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Nt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Bi(t.repoInfo_,e,(i,s,r,o)=>{fb(t,i,s,r,o)},i=>{pb(t,i)},i=>{UL(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=LM(t.repoInfo_,()=>new NN(t.stats_,t.server_)),t.infoData_=new RN,t.infoSyncTree_=new hb({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=ld(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bm(t,"connected",!1),t.serverSyncTree_=new hb({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ur(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function FL(t){const n=t.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function II(t){return mL({timestamp:FL(t)})}function fb(t,e,n,i,s){t.dataUpdateCount++;const r=new ot(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=$u(n,c=>Wt(c));o=gL(t.serverSyncTree_,r,l,s)}else{const l=Wt(n);o=pL(t.serverSyncTree_,r,l,s)}else if(i){const l=$u(n,c=>Wt(c));o=fL(t.serverSyncTree_,r,l)}else{const l=Wt(n);o=ld(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zm(t,r)),Ur(t.eventQueue_,a,o)}function pb(t,e){Bm(t,"connected",e),e===!1&&BL(t)}function UL(t,e){Un(e,(n,i)=>{Bm(t,n,i)})}function Bm(t,e,n){const i=new ot("/.info/"+e),s=Wt(n);t.infoData_.updateSnapshot(i,s);const r=ld(t.infoSyncTree_,i,s);Ur(t.eventQueue_,i,r)}function VL(t){return t.nextWriteId_++}function BL(t){xI(t,"onDisconnectEvents");const e=II(t),n=eh();Rp(t.onDisconnect_,qe(),(s,r)=>{const o=vL(s,r,t.serverSyncTree_,e);JT(n,s,o)});let i=[];Rp(n,qe(),(s,r)=>{i=i.concat(ld(t.serverSyncTree_,s,r));const o=HL(t,s);zm(t,o)}),t.onDisconnect_=eh(),Ur(t.eventQueue_,qe(),i)}function $L(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PL)}function xI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ht(n,...e)}function SI(t,e,n){return fI(t.serverSyncTree_,e,n)||ze.EMPTY_NODE}function $m(t,e=t.transactionQueueTree_){if(e||hd(t,e),Zo(e)){const n=kI(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&zL(t,Jl(e),n)}else bI(e)&&ud(e,n=>{$m(t,n)})}function zL(t,e,n){const i=n.map(c=>c.currentWriteId),s=SI(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];j(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(io(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();hd(t,Vm(t.transactionQueueTree_,e)),$m(t,t.transactionQueueTree_),Ur(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ql(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{kn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}zm(t,e)}},o)}function zm(t,e){const n=CI(t,e),i=Jl(n),s=kI(t,n);return jL(t,s,i),i}function jL(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Pn(n,l.path);let u=!1,h;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ML)u=!0,h="maxretry",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else{const d=SI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){TI("transaction failed: Data returned ",f,l.path);let p=Wt(f);typeof f=="object"&&f!=null&&Ji(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,_=II(t),y=bL(p,d,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=VL(t),o.splice(o.indexOf(m),1),s=s.concat(dL(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(io(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0))}Ur(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}hd(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ql(i[a]);$m(t,t.transactionQueueTree_)}function CI(t,e){let n,i=t.transactionQueueTree_;for(n=Oe(e);n!==null&&Zo(i)===void 0;)i=Vm(i,n),e=et(e),n=Oe(e);return i}function kI(t,e){const n=[];return AI(t,e,n),n.sort((i,s)=>i.order-s.order),n}function AI(t,e,n){const i=Zo(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ud(e,s=>{AI(t,s,n)})}function hd(t,e){const n=Zo(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,vI(e,n.length>0?n:void 0)}ud(e,i=>{hd(t,i)})}function HL(t,e){const n=Jl(CI(t,e)),i=Vm(t.transactionQueueTree_,e);return EL(i,s=>{bf(t,s)}),bf(t,i),wI(i,s=>{bf(t,s)}),n}function bf(t,e){const n=Zo(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(io(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vI(e,void 0):n.length=r+1,Ur(t.eventQueue_,Jl(e),s);for(let o=0;o<i.length;o++)Ql(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function qL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):kn(`Invalid query segment '${n}' in query '${t}'`)}return e}const gb=function(t,e){const n=KL(t),i=n.namespace;n.domain==="firebase.com"&&Tr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Tr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PM(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ot(n.pathString)}},KL=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=WL(t.substring(u,h)));const d=qL(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Ae(this._path)?null:zT(this._path)}get ref(){return new ea(this._repo,this._path)}get _queryIdentifier(){const e=eb(this._queryParams),n=Tm(e);return n==="{}"?"default":n}get _queryObject(){return eb(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof jm))return!1;const n=this._repo===e._repo,i=WT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rN(this._path)}}class ea extends jm{constructor(e,n){super(e,n,new Am,!1)}get parent(){const e=HT(this._path);return e===null?null:new ea(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}uL(ea);hL(ea);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL="FIREBASE_DATABASE_EMULATOR_HOST",Up={};let YL=!1;function QL(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Tr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gb(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[GL]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=gb(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Cp(Cp.OWNER):new OM(t.name,t.options,e);kL("Invalid Firebase Database URL",o),Ae(o.path)||Tr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=JL(a,t,u,new DM(t.name,n));return new ZL(h,t)}function XL(t,e){const n=Up[e];(!n||n[t.key]!==t)&&Tr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$L(t),delete n[t.key]}function JL(t,e,n,i){let s=Up[e.name];s||(s={},Up[e.name]=s);let r=s[t.toURLString()];return r&&Tr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NL(t,YL,n,i),s[t.toURLString()]=r,r}class ZL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ea(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function eF(t){_M(Us),yi(new Zn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QL(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Cn(Lv,Fv,t),Cn(Lv,Fv,"esm2017")}Bi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eF();var tF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J,Hm=Hm||{},ue=tF||self;function sh(){}function dd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nF(t){return Object.prototype.hasOwnProperty.call(t,wf)&&t[wf]||(t[wf]=++iF)}var wf="closure_uid_"+(1e9*Math.random()>>>0),iF=0;function sF(t,e,n){return t.call.apply(t.bind,arguments)}function rF(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Qt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=sF:Qt=rF,Qt.apply(null,arguments)}function Mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Ut(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Vs(){this.s=this.s,this.o=this.o}var oF=0;Vs.prototype.s=!1;Vs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oF!=0)&&nF(this)};Vs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const RI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wm(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function mb(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(dd(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xt.prototype.h=function(){this.defaultPrevented=!0};var aF=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",sh,e),ue.removeEventListener("test",sh,e)}catch{}return t}();function rh(t){return/^[\s\xa0]*$/.test(t)}var _b=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ef(t,e){return t<e?-1:t>e?1:0}function fd(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function ci(t){return fd().indexOf(t)!=-1}function qm(t){return qm[" "](t),t}qm[" "]=sh;function lF(t){var e=hF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cF=ci("Opera"),Ro=ci("Trident")||ci("MSIE"),DI=ci("Edge"),Vp=DI||Ro,OI=ci("Gecko")&&!(fd().toLowerCase().indexOf("webkit")!=-1&&!ci("Edge"))&&!(ci("Trident")||ci("MSIE"))&&!ci("Edge"),uF=fd().toLowerCase().indexOf("webkit")!=-1&&!ci("Edge");function PI(){var t=ue.document;return t?t.documentMode:void 0}var oh;e:{var Tf="",If=function(){var t=fd();if(OI)return/rv:([^\);]+)(\)|;)/.exec(t);if(DI)return/Edge\/([\d\.]+)/.exec(t);if(Ro)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uF)return/WebKit\/(\S+)/.exec(t);if(cF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(If&&(Tf=If?If[1]:""),Ro){var xf=PI();if(xf!=null&&xf>parseFloat(Tf)){oh=String(xf);break e}}oh=Tf}var hF={};function dF(){return lF(function(){let t=0;const e=_b(String(oh)).split("."),n=_b("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ef(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ef(s[2].length==0,r[2].length==0)||Ef(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Bp;if(ue.document&&Ro){var yb=PI();Bp=yb||parseInt(oh,10)||void 0}else Bp=void 0;var fF=Bp;function gl(t,e){if(Xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OI){e:{try{qm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gl.X.h.call(this)}}Ut(gl,Xt);var pF={2:"touch",3:"pen",4:"mouse"};gl.prototype.h=function(){gl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ec="closure_listenable_"+(1e6*Math.random()|0),gF=0;function mF(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++gF,this.ba=this.ea=!1}function pd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Km(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function MI(t){const e={};for(const n in t)e[n]=t[n];return e}const vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function NI(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<vb.length;r++)n=vb[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gd(t){this.src=t,this.g={},this.h=0}gd.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=zp(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new mF(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function $p(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=RI(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zp(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Gm="closure_lm_"+(1e6*Math.random()|0),Sf={};function LI(t,e,n,i,s){if(i&&i.once)return UI(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)LI(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[ec]?t.N(e,n,Zl(i)?!!i.capture:!!i,s):FI(t,e,n,!1,i,s)}function FI(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Zl(s)?!!s.capture:!!s,a=Qm(t);if(a||(t[Gm]=a=new gd(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=_F(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)aF||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(BI(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _F(){function t(n){return e.call(t.src,t.listener,n)}const e=yF;return t}function UI(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)UI(t,e[r],n,i,s);return null}return n=Xm(n),t&&t[ec]?t.O(e,n,Zl(i)?!!i.capture:!!i,s):FI(t,e,n,!0,i,s)}function VI(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)VI(t,e[r],n,i,s);else i=Zl(i)?!!i.capture:!!i,n=Xm(n),t&&t[ec]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=zp(r,n,i,s),-1<n&&(pd(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zp(e,n,i,s)),(n=-1<t?e[t]:null)&&Ym(n))}function Ym(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ec])$p(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(BI(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qm(e))?($p(n,t),n.h==0&&(n.src=null,e[Gm]=null)):pd(t)}}}function BI(t){return t in Sf?Sf[t]:Sf[t]="on"+t}function yF(t,e){if(t.ba)t=!0;else{e=new gl(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ym(t),t=n.call(i,e)}return t}function Qm(t){return t=t[Gm],t instanceof gd?t:null}var Cf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xm(t){return typeof t=="function"?t:(t[Cf]||(t[Cf]=function(e){return t.handleEvent(e)}),t[Cf])}function Pt(){Vs.call(this),this.i=new gd(this),this.P=this,this.I=null}Ut(Pt,Vs);Pt.prototype[ec]=!0;Pt.prototype.removeEventListener=function(t,e,n,i){VI(this,t,e,n,i)};function Lt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Xt(e,t);else if(e instanceof Xt)e.target=e.target||t;else{var s=e;e=new Xt(i,t),NI(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Nc(o,i,!0,e)&&s}if(o=e.g=t,s=Nc(o,i,!0,e)&&s,s=Nc(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Nc(o,i,!1,e)&&s}Pt.prototype.M=function(){if(Pt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pd(n[i]);delete t.g[e],t.h--}}this.I=null};Pt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Pt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Nc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$p(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Jm=ue.JSON.stringify;function vF(){var t=jI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bF{constructor(){this.h=this.g=null}add(e,n){const i=$I.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var $I=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new wF,t=>t.reset());class wF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EF(t){ue.setTimeout(()=>{throw t},0)}function zI(t,e){jp||TF(),Hp||(jp(),Hp=!0),jI.add(t,e)}var jp;function TF(){var t=ue.Promise.resolve(void 0);jp=function(){t.then(IF)}}var Hp=!1,jI=new bF;function IF(){for(var t;t=vF();){try{t.h.call(t.g)}catch(n){EF(n)}var e=$I;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hp=!1}function md(t,e){Pt.call(this),this.h=t||1,this.g=e||ue,this.j=Qt(this.lb,this),this.l=Date.now()}Ut(md,Pt);J=md.prototype;J.ca=!1;J.R=null;J.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Lt(this,"tick"),this.ca&&(Zm(this),this.start()))}};J.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}J.M=function(){md.X.M.call(this),Zm(this),delete this.g};function e_(t,e,n){if(typeof t=="function")n&&(t=Qt(t,n));else if(t&&typeof t.handleEvent=="function")t=Qt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function HI(t){t.g=e_(()=>{t.g=null,t.i&&(t.i=!1,HI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xF extends Vs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HI(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ml(t){Vs.call(this),this.h=t,this.g={}}Ut(ml,Vs);var bb=[];function WI(t,e,n,i){Array.isArray(n)||(n&&(bb[0]=n.toString()),n=bb);for(var s=0;s<n.length;s++){var r=LI(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function qI(t){Km(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ym(e)},t),t.g={}}ml.prototype.M=function(){ml.X.M.call(this),qI(this)};ml.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _d(){this.g=!0}_d.prototype.Aa=function(){this.g=!1};function SF(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function CF(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function so(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+AF(t,n)+(i?" "+i:"")})}function kF(t,e){t.info(function(){return"TIMEOUT: "+e})}_d.prototype.info=function(){};function AF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Jm(n)}catch{return e}}var Vr={},wb=null;function yd(){return wb=wb||new Pt}Vr.Pa="serverreachability";function KI(t){Xt.call(this,Vr.Pa,t)}Ut(KI,Xt);function _l(t){const e=yd();Lt(e,new KI(e))}Vr.STAT_EVENT="statevent";function GI(t,e){Xt.call(this,Vr.STAT_EVENT,t),this.stat=e}Ut(GI,Xt);function rn(t){const e=yd();Lt(e,new GI(e,t))}Vr.Qa="timingevent";function YI(t,e){Xt.call(this,Vr.Qa,t),this.size=e}Ut(YI,Xt);function tc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var vd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},QI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function t_(){}t_.prototype.h=null;function Eb(t){return t.h||(t.h=t.i())}function XI(){}var nc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function n_(){Xt.call(this,"d")}Ut(n_,Xt);function i_(){Xt.call(this,"c")}Ut(i_,Xt);var Wp;function bd(){}Ut(bd,t_);bd.prototype.g=function(){return new XMLHttpRequest};bd.prototype.i=function(){return{}};Wp=new bd;function ic(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new ml(this),this.O=RF,t=Vp?125:void 0,this.T=new md(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new JI}function JI(){this.i=null,this.g="",this.h=!1}var RF=45e3,qp={},ah={};J=ic.prototype;J.setTimeout=function(t){this.O=t};function Kp(t,e,n){t.K=1,t.v=Ed(Hi(e)),t.s=n,t.P=!0,ZI(t,null)}function ZI(t,e){t.F=Date.now(),sc(t),t.A=Hi(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ax(n.i,"t",i),t.C=0,n=t.l.H,t.h=new JI,t.g=kx(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xF(Qt(t.La,t,t.g),t.N)),WI(t.S,t.g,"readystatechange",t.ib),e=t.H?MI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_l(),SF(t.j,t.u,t.A,t.m,t.U,t.s)}J.ib=function(t){t=t.target;const e=this.L;e&&Fi(t)==3?e.l():this.La(t)};J.La=function(t){try{if(t==this.g)e:{const u=Fi(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Vp||this.g&&(this.h.h||this.g.fa()||Sb(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_l(3):_l(2)),wd(this);var n=this.g.aa();this.Y=n;t:if(ex(this)){var i=Sb(this.g);t="";var s=i.length,r=Fi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),Va(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,CF(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rh(a)){var c=a;break t}}c=null}if(n=c)so(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gp(this,n);else{this.i=!1,this.o=3,rn(12),ar(this),Va(this);break e}}this.P?(tx(this,u,o),Vp&&this.i&&u==3&&(WI(this.S,this.T,"tick",this.hb),this.T.start())):(so(this.j,this.m,o,null),Gp(this,o)),u==4&&ar(this),this.i&&!this.I&&(u==4?Ix(this.l,this):(this.i=!1,sc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rn(12)):(this.o=0,rn(13)),ar(this),Va(this)}}}catch{}finally{}};function ex(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function tx(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=DF(t,n),s==ah){e==4&&(t.o=4,rn(14),i=!1),so(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qp){t.o=4,rn(15),so(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else so(t.j,t.m,s,null),Gp(t,s);ex(t)&&s!=ah&&s!=qp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),u_(e),e.K=!0,rn(11))):(so(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),Va(t))}J.hb=function(){if(this.g){var t=Fi(this.g),e=this.g.fa();this.C<e.length&&(wd(this),tx(this,t,e),this.i&&t!=4&&sc(this))}};function DF(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ah:(n=Number(e.substring(n,i)),isNaN(n)?qp:(i+=1,i+n>e.length?ah:(e=e.substr(i,n),t.C=i+n,e)))}J.cancel=function(){this.I=!0,ar(this)};function sc(t){t.V=Date.now()+t.O,nx(t,t.O)}function nx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tc(Qt(t.gb,t),e)}function wd(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}J.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kF(this.j,this.A),this.K!=2&&(_l(),rn(17)),ar(this),this.o=2,Va(this)):nx(this,this.V-t)};function Va(t){t.l.G==0||t.I||Ix(t.l,t)}function ar(t){wd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zm(t.T),qI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yp(n.h,t))){if(!t.J&&Yp(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)uh(n),xd(n);else break e;c_(n),rn(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=tc(Qt(n.cb,n),6e3));if(1>=ux(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&uh(n),!rh(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(s_(r,r.h),r.h=null))}if(i.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,at(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Cx(i,i.H?i.ka:null,i.V),o.J){hx(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(wd(a),sc(a)),i.g=o}else Ex(i);0<n.i.length&&Sd(n)}else c[0]!="stop"&&c[0]!="close"||lr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?lr(n,7):l_(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}_l(4)}catch{}}function OF(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dd(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function PF(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ix(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PF(t),i=OF(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var sx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _r){this.h=e!==void 0?e:t.h,lh(this,t.j),this.s=t.s,this.g=t.g,ch(this,t.m),this.l=t.l,e=t.i;var n=new yl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tb(this,n),this.o=t.o}else t&&(n=String(t).match(sx))?(this.h=!!e,lh(this,n[1]||"",!0),this.s=Ea(n[2]||""),this.g=Ea(n[3]||"",!0),ch(this,n[4]),this.l=Ea(n[5]||"",!0),Tb(this,n[6]||"",!0),this.o=Ea(n[7]||"")):(this.h=!!e,this.i=new yl(null,this.h))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ta(e,Ib,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ta(e,Ib,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ta(n,n.charAt(0)=="/"?FF:LF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ta(n,VF)),t.join("")};function Hi(t){return new _r(t)}function lh(t,e,n){t.j=n?Ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ch(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tb(t,e,n){e instanceof yl?(t.i=e,BF(t.i,t.h)):(n||(e=Ta(e,UF)),t.i=new yl(e,t.h))}function at(t,e,n){t.i.set(e,n)}function Ed(t){return at(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ib=/[#\/\?@]/g,LF=/[#\?:]/g,FF=/[#\?]/g,UF=/[#\?@]/g,VF=/#/g;function yl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bs(t){t.g||(t.g=new Map,t.h=0,t.i&&MF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}J=yl.prototype;J.add=function(t,e){Bs(this),this.i=null,t=ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rx(t,e){Bs(t),e=ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ox(t,e){return Bs(t),e=ta(t,e),t.g.has(e)}J.forEach=function(t,e){Bs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};J.oa=function(){Bs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};J.W=function(t){Bs(this);let e=[];if(typeof t=="string")ox(this,t)&&(e=e.concat(this.g.get(ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};J.set=function(t,e){return Bs(this),this.i=null,t=ta(this,t),ox(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};J.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ax(t,e,n){rx(t,e),0<n.length&&(t.i=null,t.g.set(ta(t,e),Wm(n)),t.h+=n.length)}J.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BF(t,e){e&&!t.j&&(Bs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(rx(this,i),ax(this,s,n))},t)),t.j=e}var $F=class{constructor(e,n){this.h=e,this.g=n}};function lx(t){this.l=t||zF,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ga&&ue.g.Ga()&&ue.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zF=10;function cx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ux(t){return t.h?1:t.g?t.g.size:0}function Yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function s_(t,e){t.g?t.g.add(e):t.h=e}function hx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lx.prototype.cancel=function(){if(this.i=dx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dx(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wm(t.i)}function r_(){}r_.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)};r_.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};function jF(){this.g=new r_}function HF(t,e,n){const i=n||"";try{ix(t,function(s,r){let o=s;Zl(s)&&(o=Jm(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function WF(t,e){const n=new _d;if(ue.Image){const i=new Image;i.onload=Mc(Lc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Mc(Lc,n,i,"TestLoadImage: error",!1,e),i.onabort=Mc(Lc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Mc(Lc,n,i,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Lc(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function rc(t){this.l=t.ac||null,this.j=t.jb||!1}Ut(rc,t_);rc.prototype.g=function(){return new Td(this.l,this.j)};rc.prototype.i=function(t){return function(){return t}}({});function Td(t,e){Pt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=o_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ut(Td,Pt);var o_=0;J=Td.prototype;J.open=function(t,e){if(this.readyState!=o_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vl(this)};J.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ue).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};J.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oc(this)),this.readyState=o_};J.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vl(this)),this.g&&(this.readyState=3,vl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fx(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function fx(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}J.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oc(this):vl(this),this.readyState==3&&fx(this)}};J.Va=function(t){this.g&&(this.response=this.responseText=t,oc(this))};J.Ua=function(t){this.g&&(this.response=t,oc(this))};J.ga=function(){this.g&&oc(this)};function oc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vl(t)}J.setRequestHeader=function(t,e){this.v.append(t,e)};J.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};J.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Td.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qF=ue.JSON.parse;function ft(t){Pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=px,this.K=this.L=!1}Ut(ft,Pt);var px="",KF=/^https?$/i,GF=["POST","PUT"];J=ft.prototype;J.Ka=function(t){this.L=t};J.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wp.g(),this.C=this.u?Eb(this.u):Eb(Wp),this.g.onreadystatechange=Qt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){xb(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ue.FormData&&t instanceof ue.FormData,!(0<=RI(GF,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_x(this),0<this.B&&((this.K=YF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.qa,this)):this.A=e_(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){xb(this,r)}};function YF(t){return Ro&&dF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}J.qa=function(){typeof Hm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function xb(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gx(t),Id(t)}function gx(t){t.D||(t.D=!0,Lt(t,"complete"),Lt(t,"error"))}J.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Lt(this,"complete"),Lt(this,"abort"),Id(this))};J.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Id(this,!0)),ft.X.M.call(this)};J.Ha=function(){this.s||(this.F||this.v||this.l?mx(this):this.fb())};J.fb=function(){mx(this)};function mx(t){if(t.h&&typeof Hm<"u"&&(!t.C[1]||Fi(t)!=4||t.aa()!=2)){if(t.v&&Fi(t)==4)e_(t.Ha,0,t);else if(Lt(t,"readystatechange"),Fi(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(sx)[1]||null;if(!s&&ue.self&&ue.self.location){var r=ue.self.location.protocol;s=r.substr(0,r.length-1)}i=!KF.test(s?s.toLowerCase():"")}n=i}if(n)Lt(t,"complete"),Lt(t,"success");else{t.m=6;try{var o=2<Fi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",gx(t)}}finally{Id(t)}}}}function Id(t,e){if(t.g){_x(t);const n=t.g,i=t.C[0]?sh:null;t.g=null,t.C=null,e||Lt(t,"ready");try{n.onreadystatechange=i}catch{}}}function _x(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function Fi(t){return t.g?t.g.readyState:0}J.aa=function(){try{return 2<Fi(this)?this.g.status:-1}catch{return-1}};J.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};J.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qF(e)}};function Sb(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case px:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}J.Ea=function(){return this.m};J.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yx(t){let e="";return Km(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function a_(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=yx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):at(t,e,n))}function fa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vx(t){this.Ca=0,this.i=[],this.j=new _d,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fa("baseRetryDelayMs",5e3,t),this.bb=fa("retryDelaySeedMs",1e4,t),this.$a=fa("forwardChannelMaxRetries",2,t),this.ta=fa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new lx(t&&t.concurrentRequestLimit),this.Fa=new jF,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}J=vx.prototype;J.ma=8;J.G=1;function l_(t){if(bx(t),t.G==3){var e=t.U++,n=Hi(t.F);at(n,"SID",t.I),at(n,"RID",e),at(n,"TYPE","terminate"),ac(t,n),e=new ic(t,t.j,e,void 0),e.K=2,e.v=Ed(Hi(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.v.toString(),"")),!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=kx(e.l,null),e.g.da(e.v)),e.F=Date.now(),sc(e)}Sx(t)}function xd(t){t.g&&(u_(t),t.g.cancel(),t.g=null)}function bx(t){xd(t),t.u&&(ue.clearTimeout(t.u),t.u=null),uh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function Sd(t){cx(t.h)||t.m||(t.m=!0,zI(t.Ja,t),t.C=0)}function QF(t,e){return ux(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=tc(Qt(t.Ja,t,e),xx(t,t.C)),t.C++,!0)}J.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ic(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=MI(r),NI(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wx(this,s,e),n=Hi(this.F),at(n,"RID",t),at(n,"CVER",22),this.D&&at(n,"X-HTTP-Session-Id",this.D),ac(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(yx(r)))+"&"+e:this.o&&a_(n,this.o,r)),s_(this.h,s),this.Ya&&at(n,"TYPE","init"),this.O?(at(n,"$req",e),at(n,"SID","null"),s.Z=!0,Kp(s,n,null)):Kp(s,n,e),this.G=2}}else this.G==3&&(t?Cb(this,t):this.i.length==0||cx(this.h)||Cb(this))};function Cb(t,e){var n;e?n=e.m:n=t.U++;const i=Hi(t.F);at(i,"SID",t.I),at(i,"RID",n),at(i,"AID",t.T),ac(t,i),t.o&&t.s&&a_(i,t.o,t.s),n=new ic(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=wx(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),s_(t.h,n),Kp(n,i,e)}function ac(t,e){t.ia&&Km(t.ia,function(n,i){at(e,i,n)}),t.l&&ix({},function(n,i){at(e,i,n)})}function wx(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Qt(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{HF(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Ex(t){t.g||t.u||(t.Z=1,zI(t.Ia,t),t.A=0)}function c_(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=tc(Qt(t.Ia,t),xx(t,t.A)),t.A++,!0)}J.Ia=function(){if(this.u=null,Tx(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=tc(Qt(this.eb,this),t)}};J.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rn(10),xd(this),Tx(this))};function u_(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function Tx(t){t.g=new ic(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Hi(t.sa);at(e,"RID","rpc"),at(e,"SID",t.I),at(e,"CI",t.L?"0":"1"),at(e,"AID",t.T),at(e,"TYPE","xmlhttp"),ac(t,e),t.o&&t.s&&a_(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ed(Hi(e)),n.s=null,n.P=!0,ZI(n,t)}J.cb=function(){this.v!=null&&(this.v=null,xd(this),c_(this),rn(19))};function uh(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function Ix(t,e){var n=null;if(t.g==e){uh(t),u_(t),t.g=null;var i=2}else if(Yp(t.h,e))n=e.D,hx(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=yd(),Lt(i,new YI(i,n)),Sd(t)}else Ex(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&QF(t,e)||i==2&&c_(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}}function xx(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Qt(t.kb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||lh(n,"https"),Ed(n)),WF(n.toString(),i)}else rn(2);t.G=0,t.l&&t.l.va(e),Sx(t),bx(t)}J.kb=function(t){t?(this.j.info("Successfully pinged google.com"),rn(2)):(this.j.info("Failed to ping google.com"),rn(1))};function Sx(t){if(t.G=0,t.la=[],t.l){const e=dx(t.h);(e.length!=0||t.i.length!=0)&&(mb(t.la,e),mb(t.la,t.i),t.h.i.length=0,Wm(t.i),t.i.length=0),t.l.ua()}}function Cx(t,e,n){var i=n instanceof _r?Hi(n):new _r(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),ch(i,i.m);else{var s=ue.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new _r(null,void 0);i&&lh(r,i),e&&(r.g=e),s&&ch(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&at(i,n,e),at(i,"VER",t.ma),ac(t,i),i}function kx(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ft(new rc({jb:!0})):new ft(t.ra),e.Ka(t.H),e}function Ax(){}J=Ax.prototype;J.xa=function(){};J.wa=function(){};J.va=function(){};J.ua=function(){};J.Ra=function(){};function hh(){if(Ro&&!(10<=Number(fF)))throw Error("Environmental error: no available transport.")}hh.prototype.g=function(t,e){return new An(t,e)};function An(t,e){Pt.call(this),this.g=new vx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!rh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new na(this)}Ut(An,Pt);An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;rn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Cx(t,null,t.V),Sd(t)};An.prototype.close=function(){l_(this.g)};An.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jm(t),t=n);e.i.push(new $F(e.ab++,t)),e.G==3&&Sd(e)};An.prototype.M=function(){this.g.l=null,delete this.j,l_(this.g),delete this.g,An.X.M.call(this)};function Rx(t){n_.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ut(Rx,n_);function Dx(){i_.call(this),this.status=1}Ut(Dx,i_);function na(t){this.g=t}Ut(na,Ax);na.prototype.xa=function(){Lt(this.g,"a")};na.prototype.wa=function(t){Lt(this.g,new Rx(t))};na.prototype.va=function(t){Lt(this.g,new Dx)};na.prototype.ua=function(){Lt(this.g,"b")};hh.prototype.createWebChannel=hh.prototype.g;An.prototype.send=An.prototype.u;An.prototype.open=An.prototype.m;An.prototype.close=An.prototype.close;vd.NO_ERROR=0;vd.TIMEOUT=8;vd.HTTP_ERROR=6;QI.COMPLETE="complete";XI.EventType=nc;nc.OPEN="a";nc.CLOSE="b";nc.ERROR="c";nc.MESSAGE="d";Pt.prototype.listen=Pt.prototype.N;ft.prototype.listenOnce=ft.prototype.O;ft.prototype.getLastError=ft.prototype.Oa;ft.prototype.getLastErrorCode=ft.prototype.Ea;ft.prototype.getStatus=ft.prototype.aa;ft.prototype.getResponseJson=ft.prototype.Sa;ft.prototype.getResponseText=ft.prototype.fa;ft.prototype.send=ft.prototype.da;ft.prototype.setWithCredentials=ft.prototype.Ka;var XF=function(){return new hh},JF=function(){return yd()},kf=vd,ZF=QI,e3=Vr,kb={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},t3=rc,Fc=XI,n3=ft;const Ab="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Bl("@firebase/firestore");function Rb(){return Cr.logLevel}function Z(t,...e){if(Cr.logLevel<=Le.DEBUG){const n=e.map(h_);Cr.debug(`Firestore (${ia}): ${t}`,...n)}}function Wi(t,...e){if(Cr.logLevel<=Le.ERROR){const n=e.map(h_);Cr.error(`Firestore (${ia}): ${t}`,...n)}}function dh(t,...e){if(Cr.logLevel<=Le.WARN){const n=e.map(h_);Cr.warn(`Firestore (${ia}): ${t}`,...n)}}function h_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${ia}) INTERNAL ASSERTION FAILED: `+t;throw Wi(e),new Error(e)}function rt(t,e){t||le()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class s3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r3{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new $i;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $i,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(rt(typeof i.accessToken=="string"),new Ox(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new jt(e)}}class o3{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class a3{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new o3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string"),this.T=n.token,new l3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=u3(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Be(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new bt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new bt(0,0))}static max(){return new fe(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,i){n===void 0?n=0:n>e.length&&le(),i===void 0?i=e.length-n:i>e.length-n&&le(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return bl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bl?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends bl{construct(e,n,i){return new nt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const h3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends bl{construct(e,n,i){return new Gt(e,n,i)}static isValidIdentifier(e){return h3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Gt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(nt.fromString(e))}static fromName(e){return new ie(nt.fromString(e).popFirst(5))}static empty(){return new ie(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new nt(e.slice()))}}function d3(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(i===1e9?new bt(n+1,0):new bt(n,i));return new As(s,ie.empty(),e)}function f3(t){return new As(t.readTime,t.key,-1)}class As{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new As(fe.min(),ie.empty(),-1)}static max(){return new As(fe.max(),ie.empty(),-1)}}function p3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==g3)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,i)=>{n(e)})}static reject(e){return new F((n,i)=>{i(e)})}static waitFor(e){return new F((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=F.resolve(!1);for(const i of e)n=n.next(s=>s?F.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new F((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new F((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function cc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class d_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}d_.ct=-1;function Cd(t){return t==null}function fh(t){return t===0&&1/t==-1/0}function _3(t){return typeof t=="number"&&Number.isInteger(t)&&!fh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||Mt.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uc(this.root,e,this.comparator,!0)}}class Uc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Mt.RED,this.left=s??Mt.EMPTY,this.right=r??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Mt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ob(this.data.getIterator())}getIteratorFrom(e){return new Ob(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class Ob{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Tt(Gt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class y3 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new y3("Invalid base64 string: "+s):s}}(e);return new en(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const v3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(t){if(rt(!!t),typeof t=="string"){let e=0;const n=v3.exec(t);if(rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oo(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lx(t){const e=t.mapValue.fields.__previous_value__;return Nx(e)?Lx(e):e}function wl(t){const e=Rs(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class El{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new El("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof El&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nx(t)?4:w3(t)?9007199254740991:10:le()}function wi(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wl(t).isEqual(wl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Rs(i.timestampValue),o=Rs(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Oo(i.bytesValue).isEqual(Oo(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return yt(i.geoPointValue.latitude)===yt(s.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return yt(i.integerValue)===yt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=yt(i.doubleValue),o=yt(s.doubleValue);return r===o?fh(r)===fh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Db(r)!==Db(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wi(r[a],o[a])))return!1;return!0}(t,e);default:return le()}}function Tl(t,e){return(t.values||[]).find(n=>wi(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=kr(t),i=kr(e);if(n!==i)return Be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Be(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=yt(s.integerValue||s.doubleValue),a=yt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pb(t.timestampValue,e.timestampValue);case 4:return Pb(wl(t),wl(e));case 5:return Be(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Oo(s),a=Oo(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Be(o[l],a[l]);if(c!==0)return c}return Be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=Be(yt(s.latitude),yt(r.latitude));return o!==0?o:Be(yt(s.longitude),yt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Po(o[l],a[l]);if(c)return c}return Be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Vc.mapValue&&r===Vc.mapValue)return 0;if(s===Vc.mapValue)return 1;if(r===Vc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Be(a[u],c[u]);if(h!==0)return h;const d=Po(o[a[u]],l[c[u]]);if(d!==0)return d}return Be(a.length,c.length)}(t.mapValue,e.mapValue);default:throw le()}}function Pb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Be(t,e);const n=Rs(t),i=Rs(e),s=Be(n.seconds,i.seconds);return s!==0?s:Be(n.nanos,i.nanos)}function Mo(t){return Qp(t)}function Qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Rs(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ie.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Qp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Qp(i.fields[a])}`;return r+"}"}(t.mapValue):le();var e,n}function Mb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xp(t){return!!t&&"integerValue"in t}function f_(t){return!!t&&"arrayValue"in t}function Nb(t){return!!t&&"nullValue"in t}function Lb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tu(t){return!!t&&"mapValue"in t}function Ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ba(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(n)}setAll(e){let n=Gt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ba(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Tu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Br(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new dn(Ba(this.value))}}function Fx(t){const e=[];return Br(t.fields,(n,i)=>{const s=new Gt([n]);if(Tu(i)){const r=Fx(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qt(e,0,fe.min(),fe.min(),fe.min(),dn.empty(),0)}static newFoundDocument(e,n,i,s){return new qt(e,1,n,fe.min(),i,s,0)}static newNoDocument(e,n){return new qt(e,2,n,fe.min(),fe.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,fe.min(),fe.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ph{constructor(e,n){this.position=e,this.inclusive=n}}function Fb(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ie.comparator(ie.fromName(o.referenceValue),n.key):i=Po(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ub(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function E3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ux{}class vt extends Ux{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new I3(e,n,i):n==="array-contains"?new C3(e,i):n==="in"?new k3(e,i):n==="not-in"?new A3(e,i):n==="array-contains-any"?new R3(e,i):new vt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new x3(e,i):new S3(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Po(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ei extends Ux{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ei(e,n)}matches(e){return Vx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Vx(t){return t.op==="and"}function Bx(t){return T3(t)&&Vx(t)}function T3(t){for(const e of t.filters)if(e instanceof ei)return!1;return!0}function Jp(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+Mo(t.value);if(Bx(t))return t.filters.map(e=>Jp(e)).join(",");{const e=t.filters.map(n=>Jp(n)).join(",");return`${t.op}(${e})`}}function $x(t,e){return t instanceof vt?function(n,i){return i instanceof vt&&n.op===i.op&&n.field.isEqual(i.field)&&wi(n.value,i.value)}(t,e):t instanceof ei?function(n,i){return i instanceof ei&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&$x(r,i.filters[o]),!0):!1}(t,e):void le()}function zx(t){return t instanceof vt?function(e){return`${e.field.canonicalString()} ${e.op} ${Mo(e.value)}`}(t):t instanceof ei?function(e){return e.op.toString()+" {"+e.getFilters().map(zx).join(" ,")+"}"}(t):"Filter"}class I3 extends vt{constructor(e,n,i){super(e,n,i),this.key=ie.fromName(i.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class x3 extends vt{constructor(e,n){super(e,"in",n),this.keys=jx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S3 extends vt{constructor(e,n){super(e,"not-in",n),this.keys=jx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ie.fromName(i.referenceValue))}class C3 extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return f_(n)&&Tl(n.arrayValue,this.value)}}class k3 extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tl(this.value.arrayValue,n)}}class A3 extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tl(this.value.arrayValue,n)}}class R3 extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!f_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Tl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Vb(t,e=null,n=[],i=[],s=null,r=null,o=null){return new D3(t,e,n,i,s,r,o)}function p_(t){const e=ge(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Jp(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),e.ft=n}return e.ft}function g_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!E3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$x(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ub(t.startAt,e.startAt)&&Ub(t.endAt,e.endAt)}function Zp(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function O3(t,e,n,i,s,r,o,a){return new uc(t,e,n,i,s,r,o,a)}function kd(t){return new uc(t)}function Bb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function m_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Wx(t){return t.collectionGroup!==null}function mo(t){const e=ge(t);if(e.dt===null){e.dt=[];const n=m_(e),i=Hx(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new $a(n)),e.dt.push(new $a(Gt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new $a(Gt.keyField(),r))}}}return e.dt}function qi(t){const e=ge(t);if(!e.wt)if(e.limitType==="F")e.wt=Vb(e.path,e.collectionGroup,mo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of mo(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new $a(r.field,o))}const i=e.endAt?new ph(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ph(e.startAt.position,e.startAt.inclusive):null;e.wt=Vb(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function eg(t,e){e.getFirstInequalityField(),m_(t);const n=t.filters.concat([e]);return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tg(t,e,n){return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ad(t,e){return g_(qi(t),qi(e))&&t.limitType===e.limitType}function qx(t){return`${p_(qi(t))}|lt:${t.limitType}`}function ng(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>zx(i)).join(", ")}]`),Cd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Mo(i)).join(",")),`Target(${n})`}(qi(t))}; limitType=${t.limitType})`}function Rd(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ie.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of mo(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Fb(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,mo(n),i)||n.endAt&&!function(s,r,o){const a=Fb(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,mo(n),i))}(t,e)}function P3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kx(t){return(e,n)=>{let i=!1;for(const s of mo(t)){const r=M3(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function M3(t,e,n){const i=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Po(a,l):le()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Mx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3=new xt(ie.comparator);function Ki(){return N3}const Gx=new xt(ie.comparator);function Ia(...t){let e=Gx;for(const n of t)e=e.insert(n.key,n);return e}function Yx(t){let e=Gx;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function cr(){return za()}function Qx(){return za()}function za(){return new sa(t=>t.toString(),(t,e)=>t.isEqual(e))}const L3=new xt(ie.comparator),F3=new Tt(ie.comparator);function Se(...t){let e=F3;for(const n of t)e=e.add(n);return e}const U3=new Tt(Be);function Xx(){return U3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function Zx(t){return{integerValue:""+t}}function V3(t,e){return _3(e)?Zx(e):Jx(t,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function B3(t,e,n){return t instanceof gh?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Il?tS(t,e):t instanceof xl?nS(t,e):function(i,s){const r=eS(i,s),o=$b(r)+$b(i._t);return Xp(r)&&Xp(i._t)?Zx(o):Jx(i.serializer,o)}(t,e)}function $3(t,e,n){return t instanceof Il?tS(t,e):t instanceof xl?nS(t,e):n}function eS(t,e){return t instanceof mh?Xp(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class gh extends Dd{}class Il extends Dd{constructor(e){super(),this.elements=e}}function tS(t,e){const n=iS(e);for(const i of t.elements)n.some(s=>wi(s,i))||n.push(i);return{arrayValue:{values:n}}}class xl extends Dd{constructor(e){super(),this.elements=e}}function nS(t,e){let n=iS(e);for(const i of t.elements)n=n.filter(s=>!wi(s,i));return{arrayValue:{values:n}}}class mh extends Dd{constructor(e,n){super(),this.serializer=e,this._t=n}}function $b(t){return yt(t.integerValue||t.doubleValue)}function iS(t){return f_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z3(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Il&&i instanceof Il||n instanceof xl&&i instanceof xl?Do(n.elements,i.elements,wi):n instanceof mh&&i instanceof mh?wi(n._t,i._t):n instanceof gh&&i instanceof gh}(t.transform,e.transform)}class j3{constructor(e,n){this.version=e,this.transformResults=n}}class gi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gi}static exists(e){return new gi(void 0,e)}static updateTime(e){return new gi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Od{}function sS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oS(t.key,gi.none()):new hc(t.key,t.data,gi.none());{const n=t.data,i=dn.empty();let s=new Tt(Gt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new $s(t.key,i,new Sn(s.toArray()),gi.none())}}function H3(t,e,n){t instanceof hc?function(i,s,r){const o=i.value.clone(),a=jb(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(i,s,r){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=jb(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(rS(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,i){return t instanceof hc?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=s.value.clone(),c=Hb(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof $s?function(s,r,o,a){if(!Iu(s.precondition,r))return o;const l=Hb(s.fieldTransforms,a,r),c=r.data;return c.setAll(rS(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Iu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function W3(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=eS(i.transform,s||null);r!=null&&(n===null&&(n=dn.empty()),n.set(i.field,r))}return n||null}function zb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Do(n,i,(s,r)=>z3(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hc extends Od{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends Od{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function rS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function jb(t,e,n){const i=new Map;rt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,$3(o,a,n[s]))}return i}function Hb(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,B3(r,o,e))}return i}class oS extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q3 extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&H3(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ja(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Qx();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=sS(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,i)=>zb(n,i))&&Do(this.baseMutations,e.baseMutations,(n,i)=>zb(n,i))}}class __{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){rt(e.mutations.length===i.length);let s=L3;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new __(e,n,i,s)}}/**
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
 */class G3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Y3{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,De;function Q3(t){switch(t){default:return le();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function aS(t){if(t===void 0)return Wi("GRPC error has no .code"),O.UNKNOWN;switch(t){case _t.OK:return O.OK;case _t.CANCELLED:return O.CANCELLED;case _t.UNKNOWN:return O.UNKNOWN;case _t.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case _t.INTERNAL:return O.INTERNAL;case _t.UNAVAILABLE:return O.UNAVAILABLE;case _t.UNAUTHENTICATED:return O.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case _t.NOT_FOUND:return O.NOT_FOUND;case _t.ALREADY_EXISTS:return O.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return O.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case _t.ABORTED:return O.ABORTED;case _t.OUT_OF_RANGE:return O.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return O.UNIMPLEMENTED;case _t.DATA_LOSS:return O.DATA_LOSS;default:return le()}}(De=_t||(_t={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Pd{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pd(fe.min(),s,Xx(),Ki(),Se())}}class dc{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new dc(i,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class lS{constructor(e,n){this.targetId=e,this.Et=n}}class cS{constructor(e,n,i=en.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Wb{constructor(){this.At=0,this.Rt=Kb(),this.vt=en.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Se(),n=Se(),i=Se();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:le()}}),new dc(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Kb()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class X3{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ki(),this.qt=qb(),this.Ut=new Tt(Be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(e){var n;const i=e.targetId,s=e.Et.count,r=this.Yt(i);if(r){const o=r.target;if(Zp(o))if(s===0){const a=new ie(o.path);this.Qt(i,a,qt.newNoDocument(a,fe.min()))}else rt(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=y_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Zp(a.target)){const l=new ie(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,qt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=Se();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Pd(e,n,this.Ut,this.Lt,i);return this.Lt=Ki(),this.qt=qb(),this.Ut=new Tt(Be),s}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Wb,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Tt(Be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Wb),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function qb(){return new xt(ie.comparator)}function Kb(){return new xt(ie.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Z3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),e4=(()=>({and:"AND",or:"OR"}))();class t4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _h(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n4(t,e){return _h(t,e.toTimestamp())}function mi(t){return rt(!!t),fe.fromTimestamp(function(e){const n=Rs(e);return new bt(n.seconds,n.nanos)}(t))}function v_(t,e){return function(n){return new nt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hS(t){const e=nt.fromString(t);return rt(gS(e)),e}function ig(t,e){return v_(t.databaseId,e.path)}function Af(t,e){const n=hS(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(dS(n))}function sg(t,e){return v_(t.databaseId,e)}function i4(t){const e=hS(t);return e.length===4?nt.emptyPath():dS(e)}function rg(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dS(t){return rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gb(t,e,n){return{name:ig(t,e),fields:n.value.mapValue.fields}}function s4(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(rt(c===void 0||typeof c=="string"),en.fromBase64String(c||"")):(rt(c===void 0||c instanceof Uint8Array),en.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:aS(l.code);return new Y(c,l.message||"")}(o);n=new cS(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Af(t,i.document.name),r=mi(i.document.updateTime),o=i.document.createTime?mi(i.document.createTime):fe.min(),a=new dn({mapValue:{fields:i.document.fields}}),l=qt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new xu(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Af(t,i.document),r=i.readTime?mi(i.readTime):fe.min(),o=qt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Af(t,i.document),r=i.removedTargetIds||[];n=new xu([],r,s,null)}else{if(!("filter"in e))return le();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Y3(s),o=i.targetId;n=new lS(o,r)}}return n}function r4(t,e){let n;if(e instanceof hc)n={update:Gb(t,e.key,e.value)};else if(e instanceof oS)n={delete:ig(t,e.key)};else if(e instanceof $s)n={update:Gb(t,e.key,e.data),updateMask:p4(e.fieldMask)};else{if(!(e instanceof q3))return le();n={verify:ig(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof gh)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Il)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw le()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:n4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function o4(t,e){return t&&t.length>0?(rt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?mi(i.updateTime):mi(s);return r.isEqual(fe.min())&&(r=mi(s)),new j3(r,i.transformResults||[])}(n,e))):[]}function a4(t,e){return{documents:[sg(t,e.path)]}}function l4(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=sg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return pS(ei.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Zr(u.field),direction:h4(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Cd(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function c4(t){let e=i4(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){rt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=fS(u);return h instanceof ei&&Bx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new $a(eo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Cd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new ph(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new ph(d,h)}(n.endAt)),O3(e,s,o,r,a,"F",l,c)}function u4(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return le()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=eo(e.unaryFilter.field);return vt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=eo(e.unaryFilter.field);return vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=eo(e.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=eo(e.unaryFilter.field);return vt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(e){return vt.create(eo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ei.create(e.compositeFilter.filters.map(n=>fS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return le()}}(e.compositeFilter.op))}(t):le()}function h4(t){return J3[t]}function d4(t){return Z3[t]}function f4(t){return e4[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function eo(t){return Gt.fromServerFormat(t.fieldPath)}function pS(t){return t instanceof vt?function(e){if(e.op==="=="){if(Lb(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(Nb(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lb(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(Nb(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:d4(e.op),value:e.value}}}(t):t instanceof ei?function(e){const n=e.getFilters().map(i=>pS(i));return n.length===1?n[0]:{compositeFilter:{op:f4(e.op),filters:n}}}(t):le()}function p4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,i,s,r=fe.min(),o=fe.min(),a=en.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e){this.se=e}}function m4(t){const e=c4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(){this.He=new y4}addToCollectionParentIndex(e,n){return this.He.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(As.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(As.min())}updateCollectionGroup(e,n,i){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class y4{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Tt(nt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Tt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class v4{constructor(){this.changes=new sa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?F.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class b4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ja(i.mutation,s,Sn.empty(),bt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Se()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Se()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Ia();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Se()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ki();const o=za(),a=za();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof $s)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ja(u.mutation,c,u.mutation.getFieldMask(),bt.now())):o.set(c.key,Sn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new b4(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=za();let s=new xt((o,a)=>o-a),r=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Sn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||Se()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Qx();u.forEach(d=>{if(!r.has(d)){const f=sS(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return F.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ie.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):F.resolve(cr());let a=-1,l=r;return o.next(c=>F.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Se())).next(u=>({batchId:a,changes:Yx(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(i=>{let s=Ia();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Ia();return this.indexManager.getCollectionParents(e,s).next(o=>F.forEach(o,a=>{const l=function(c,u){return new uc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,qt.newInvalidDocument(c)))});let o=Ia();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&ja(c.mutation,l,Sn.empty(),bt.now()),Rd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return F.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:mi(i.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:m4(i.bundledQuery),readTime:mi(i.readTime)}}(n)),F.resolve()}}/**
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
 */class T4{constructor(){this.overlays=new xt(ie.comparator),this.ts=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const i=cr();return F.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.re(e,n,r)}),F.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),F.resolve()}getOverlaysForCollection(e,n,i){const s=cr(),r=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new xt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=cr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=cr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return F.resolve(a)}re(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new G3(n,i));let r=this.ts.get(n);r===void 0&&(r=Se(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.es=new Tt(At.ns),this.ss=new Tt(At.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new At(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new At(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new ie(new nt([])),i=new At(n,e),s=new At(n,e+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new ie(new nt([])),i=new At(n,e),s=new At(n,e+1);let r=Se();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new At(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return ie.comparator(e.key,n.key)||Be(e.ds,n.ds)}static rs(e,n){return Be(e.ds,n.ds)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Tt(At.ns)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K3(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new At(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new At(n,0),s=new At(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Tt(Be);return n.forEach(s=>{const r=new At(s,0),o=new At(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),F.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ie.isDocumentKey(r)||(r=r.child(""));const o=new At(new ie(r),0);let a=new Tt(Be);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),F.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){rt(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return F.forEach(n.mutations,s=>{const r=new At(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new At(n,0),s=this._s.firstAfterOrEqual(i);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.Ts=e,this.docs=new xt(ie.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return F.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let i=Ki();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():qt.newInvalidDocument(s))}),F.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ki();const o=n.path,a=new ie(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||p3(f3(u),i)<=0||(s.has(u.key)||Rd(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,n,i,s){le()}Es(e,n){return F.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new S4(this)}getSize(e){return F.resolve(this.size)}}class S4 extends v4{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(i)}),F.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.persistence=e,this.As=new sa(n=>p_(n),g_),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Rs=0,this.vs=new b_,this.targetCount=0,this.bs=No.vn()}forEachTarget(e,n){return this.As.forEach((i,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),F.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new No(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Sn(n),F.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(r).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return F.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),F.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),F.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return F.resolve(i)}containsKey(e,n){return F.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new d_(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new C4(this),this.indexManager=new _4,this.remoteDocumentCache=function(i){return new x4(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new g4(n),this.xs=new E4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new I4(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){Z("MemoryPersistence","Starting transaction:",e);const s=new A4(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return F.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class A4 extends m3{constructor(e){super(),this.currentSequenceNumber=e}}class w_{constructor(e){this.persistence=e,this.$s=new b_,this.Ms=null}static Fs(e){return new w_(e)}get Bs(){if(this.Ms)return this.Ms;throw le()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),F.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),F.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Bs,i=>{const s=ie.fromPath(i);return this.Ls(e,s).next(r=>{r||n.removeEntry(s,fe.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return F.or([()=>F.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=s}static Di(e,n){let i=Se(),s=Se();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new E_(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ni(e,n).next(r=>r||this.ki(e,n,s,i)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(Bb(n))return F.resolve(null);let i=qi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tg(n,null,"F"),i=qi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Se(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,tg(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,s){return Bb(n)||s.isEqual(fe.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(e,n):(Rb()<=Le.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ng(n)),this.Fi(e,o,n,d3(s,-1)))})}$i(e,n){let i=new Tt(Kx(e));return n.forEach((s,r)=>{Rd(e,r)&&(i=i.add(r))}),i}Mi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Rb()<=Le.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ng(n)),this.xi.getDocumentsMatchingQuery(e,n,As.min())}Fi(e,n,i,s){return this.xi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e,n,i,s){this.persistence=e,this.Bi=n,this.serializer=s,this.Li=new xt(Be),this.qi=new sa(r=>p_(r),g_),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w4(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function O4(t,e,n,i){return new D4(t,e,n,i)}async function mS(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Se();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function P4(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=F.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);rt(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function _S(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function M4(t,e){const n=ge(t),i=e.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(en.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,u)&&a.push(n.Ds.updateTargetData(r,f))});let l=Ki(),c=Se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(N4(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(fe.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function N4(t,e,n){let i=Se(),s=Se();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ki();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function L4(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function F4(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,e).next(r=>r?(s=r,F.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new yr(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function og(t,e,n){const i=ge(t),s=i.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cc(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(s.target)}function Yb(t,e,n){const i=ge(t);let s=fe.min(),r=Se();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ge(a),h=u.qi.get(c);return h!==void 0?F.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,qi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?r:Se())).next(a=>(U4(i,P3(e),a),{documents:a,Wi:r})))}function U4(t,e,n){let i=t.Ui.get(e)||fe.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ui.set(e,i)}class Qb{constructor(){this.activeTargetIds=Xx()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V4{constructor(){this.Br=new Qb,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Qb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function Rf(){return $c===null?$c=268435456+Math.round(2147483648*Math.random()):$c++,"0x"+$c.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class j4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,s,r){const o=Rf(),a=this.ao(e,n);Z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(e,a,l,i).then(c=>(Z("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw dh("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ia,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=$4[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){const r=Rf();return new Promise((o,a)=>{const l=new n3;l.setWithCredentials(!0),l.listenOnce(ZF.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case kf.NO_ERROR:const u=l.getResponseJson();Z($t,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case kf.TIMEOUT:Z($t,`RPC '${e}' ${r} timed out`),a(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case kf.HTTP_ERROR:const h=l.getStatus();if(Z($t,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(f.status);a(new Y(p,f.message))}else a(new Y(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Y(O.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z($t,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);Z($t,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(e,n,i){const s=Rf(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XF(),a=JF(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new t3({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");Z($t,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new z4({Wr:g=>{d?Z($t,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(h||(Z($t,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),Z($t,`RPC '${e}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,y=>{try{_(y)}catch(b){setTimeout(()=>{throw b},0)}})};return p(u,Fc.EventType.OPEN,()=>{d||Z($t,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Fc.EventType.CLOSE,()=>{d||(d=!0,Z($t,`RPC '${e}' stream ${s} transport closed`),f.so())}),p(u,Fc.EventType.ERROR,g=>{d||(d=!0,dh($t,`RPC '${e}' stream ${s} transport errored:`,g),f.so(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),p(u,Fc.EventType.MESSAGE,g=>{var m;if(!d){const _=g.data[0];rt(!!_);const y=_,b=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(b){Z($t,`RPC '${e}' stream ${s} received error:`,b);const T=b.status;let I=function(C){const S=_t[C];if(S!==void 0)return aS(S)}(T),D=b.message;I===void 0&&(I=O.INTERNAL,D="Unknown error status: "+T+" with message "+b.message),d=!0,f.so(new Y(I,D)),u.close()}else Z($t,`RPC '${e}' stream ${s} received:`,_),f.io(_)}}),p(a,e3.STAT_EVENT,g=>{g.stat===kb.PROXY?Z($t,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===kb.NOPROXY&&Z($t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function Df(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){return new t4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,i,s,r,o,a,l){this.Ws=e,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new yS(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H4 extends vS{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=s4(this.serializer,e),i=function(s){if(!("targetChange"in s))return fe.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?fe.min():r.readTime?mi(r.readTime):fe.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=rg(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=Zp(a)?{documents:a4(s,a)}:{query:l4(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=uS(s,r.resumeToken):r.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=_h(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=u4(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=rg(this.serializer),n.removeTarget=e,this.Fo(n)}}class W4 extends vS{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=o4(e.writeResults,e.commitTime),i=mi(e.commitTime);return this.listener.Zo(i,n)}return rt(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=rg(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>r4(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(O.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Y(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class K4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Wi(n),this.ru=!1):Z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{$r(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ge(a);l.du.add(4),await fc(l),l.mu.set("Unknown"),l.du.delete(4),await Nd(l)}(this))})}),this.mu=new K4(i,s)}}async function Nd(t){if($r(t))for(const e of t.wu)await e(!0)}async function fc(t){for(const e of t.wu)await e(!1)}function bS(t,e){const n=ge(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),x_(n)?I_(n):ra(n).No()&&T_(n,e))}function wS(t,e){const n=ge(t),i=ra(n);n.fu.delete(e),i.No()&&ES(n,e),n.fu.size===0&&(i.No()?i.$o():$r(n)&&n.mu.set("Unknown"))}function T_(t,e){t.gu.Ot(e.targetId),ra(t).jo(e)}function ES(t,e){t.gu.Ot(e),ra(t).Wo(e)}function I_(t){t.gu=new X3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ra(t).start(),t.mu.ou()}function x_(t){return $r(t)&&!ra(t).xo()&&t.fu.size>0}function $r(t){return ge(t).du.size===0}function TS(t){t.gu=void 0}async function Y4(t){t.fu.forEach((e,n)=>{T_(t,e)})}async function Q4(t,e){TS(t),x_(t)?(t.mu.au(e),I_(t)):t.mu.set("Unknown")}async function X4(t,e,n){if(t.mu.set("Online"),e instanceof cS&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await yh(t,i)}else if(e instanceof xu?t.gu.Kt(e):e instanceof lS?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(fe.min()))try{const i=await _S(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(en.EMPTY_BYTE_STRING,l.snapshotVersion)),ES(s,a);const c=new yr(l.target,a,1,l.sequenceNumber);T_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){Z("RemoteStore","Failed to raise snapshot:",i),await yh(t,i)}}async function yh(t,e,n){if(!cc(e))throw e;t.du.add(1),await fc(t),t.mu.set("Offline"),n||(n=()=>_S(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Nd(t)})}function IS(t,e){return e().catch(n=>yh(t,n,e))}async function Ld(t){const e=ge(t),n=Ds(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;J4(e);)try{const s=await L4(e.localStore,i);if(s===null){e.lu.length===0&&n.$o();break}i=s.batchId,Z4(e,s)}catch(s){await yh(e,s)}xS(e)&&SS(e)}function J4(t){return $r(t)&&t.lu.length<10}function Z4(t,e){t.lu.push(e);const n=Ds(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function xS(t){return $r(t)&&!Ds(t).xo()&&t.lu.length>0}function SS(t){Ds(t).start()}async function e6(t){Ds(t).tu()}async function t6(t){const e=Ds(t);for(const n of t.lu)e.Yo(n.mutations)}async function n6(t,e,n){const i=t.lu.shift(),s=__.from(i,e,n);await IS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ld(t)}async function i6(t,e){e&&Ds(t).Jo&&await async function(n,i){if(s=i.code,Q3(s)&&s!==O.ABORTED){const r=n.lu.shift();Ds(n).Oo(),await IS(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ld(n)}var s}(t,e),xS(t)&&SS(t)}async function Jb(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const i=$r(n);n.du.add(3),await fc(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Nd(n)}async function s6(t,e){const n=ge(t);e?(n.du.delete(2),await Nd(n)):e||(n.du.add(2),await fc(n),n.mu.set("Unknown"))}function ra(t){return t.yu||(t.yu=function(e,n,i){const s=ge(e);return s.nu(),new H4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:Y4.bind(null,t),Zr:Q4.bind(null,t),zo:X4.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),x_(t)?I_(t):t.mu.set("Unknown")):(await t.yu.stop(),TS(t))})),t.yu}function Ds(t){return t.pu||(t.pu=function(e,n,i){const s=ge(e);return s.nu(),new W4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Jr:e6.bind(null,t),Zr:i6.bind(null,t),Xo:t6.bind(null,t),Zo:n6.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ld(t)):(await t.pu.stop(),t.lu.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new $i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new S_(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function C_(t,e){if(Wi("AsyncQueue",`${e}: ${t}`),cc(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ie.comparator(n.key,i.key):(n,i)=>ie.comparator(n.key,i.key),this.keyedMap=Ia(),this.sortedSet=new xt(this.comparator)}static emptySet(e){return new _o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Zb{constructor(){this.Iu=new xt(ie.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):le():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Lo{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,_o.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(){this.Eu=void 0,this.listeners=[]}}class o6{constructor(){this.queries=new sa(e=>qx(e),Ad),this.onlineState="Unknown",this.Au=new Set}}async function k_(t,e){const n=ge(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new r6),s)try{r.Eu=await n.onListen(i)}catch(o){const a=C_(o,`Initialization of query '${ng(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&R_(n)}async function A_(t,e){const n=ge(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function a6(t,e){const n=ge(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&R_(n)}function l6(t,e,n){const i=ge(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function R_(t){t.Au.forEach(e=>{e.next()})}class D_{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.key=e}}class kS{constructor(e){this.key=e}}class c6{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Se(),this.mutatedKeys=Se(),this.Ku=Kx(e),this.Gu=new _o(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Zb,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Rd(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(i.track({type:3,doc:f}),m=!0):this.Wu(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Lo(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Zb,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Se(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new kS(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new CS(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=Se();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Lo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class u6{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class h6{constructor(e){this.key=e,this.ec=!1}}class d6{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new sa(a=>qx(a),Ad),this.ic=new Map,this.rc=new Set,this.oc=new xt(ie.comparator),this.uc=new Map,this.cc=new b_,this.ac={},this.hc=new Map,this.lc=No.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function f6(t,e){const n=T6(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await F4(n.localStore,qi(e));n.isPrimaryClient&&bS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await p6(n,e,i,a==="current",o.resumeToken)}return s}async function p6(t,e,n,i,s){t.dc=(h,d,f)=>async function(p,g,m,_){let y=g.view.zu(m);y.Mi&&(y=await Yb(p.localStore,g.query,!1).then(({documents:I})=>g.view.zu(I,y)));const b=_&&_.targetChanges.get(g.targetId),T=g.view.applyChanges(y,p.isPrimaryClient,b);return t0(p,g.targetId,T.Yu),T.snapshot}(t,h,d,f);const r=await Yb(t.localStore,e,!0),o=new c6(e,r.Wi),a=o.zu(r.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);t0(t,n,c.Yu);const u=new u6(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function g6(t,e){const n=ge(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Ad(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await og(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),wS(n.remoteStore,i.targetId),ag(n,i.targetId)}).catch(lc)):(ag(n,i.targetId),await og(n.localStore,i.targetId,!0))}async function m6(t,e,n){const i=I6(t);try{const s=await function(r,o){const a=ge(r),l=bt.now(),c=o.reduce((d,f)=>d.add(f.key),Se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ki(),p=Se();return a.Ki.getEntries(d,c).next(g=>{f=g,f.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const m=[];for(const _ of o){const y=W3(_,u.get(_.key).overlayedDocument);y!=null&&m.push(new $s(_.key,y,Fx(y.value.mapValue),gi.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:Yx(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new xt(Be)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await pc(i,s.changes),await Ld(i.remoteStore)}catch(s){const r=C_(s,"Failed to persist write");n.reject(r)}}async function AS(t,e){const n=ge(t);try{const i=await M4(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?rt(o.ec):s.removedDocuments.size>0&&(rt(o.ec),o.ec=!1))}),await pc(n,i,e)}catch(i){await lc(i)}}function e0(t,e,n){const i=ge(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ge(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&R_(a)}(i.eventManager,e),s.length&&i.nc.zo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _6(t,e,n){const i=ge(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new xt(ie.comparator);o=o.insert(r,qt.newNoDocument(r,fe.min()));const a=Se().add(r),l=new Pd(fe.min(),new Map,new Tt(Be),o,a);await AS(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),O_(i)}else await og(i.localStore,e,!1).then(()=>ag(i,e,n)).catch(lc)}async function y6(t,e){const n=ge(t),i=e.batch.batchId;try{const s=await P4(n.localStore,e);DS(n,i,null),RS(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await pc(n,s)}catch(s){await lc(s)}}async function v6(t,e,n){const i=ge(t);try{const s=await function(r,o){const a=ge(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(rt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);DS(i,e,n),RS(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await pc(i,s)}catch(s){await lc(s)}}function RS(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function DS(t,e,n){const i=ge(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function ag(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||OS(t,i)})}function OS(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(wS(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),O_(t))}function t0(t,e,n){for(const i of n)i instanceof CS?(t.cc.addReference(i.key,e),b6(t,i)):i instanceof kS?(Z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||OS(t,i.key)):le()}function b6(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Z("SyncEngine","New document in limbo: "+n),t.rc.add(i),O_(t))}function O_(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ie(nt.fromString(e)),i=t.lc.next();t.uc.set(i,new h6(n)),t.oc=t.oc.insert(n,i),bS(t.remoteStore,new yr(qi(kd(n.path)),i,2,d_.ct))}}async function pc(t,e,n){const i=ge(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=E_.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=ge(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>F.forEach(l,h=>F.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>F.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!cc(u))throw u;Z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function w6(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const i=await mS(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new Y(O.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await pc(n,i.Qi)}}function E6(t,e){const n=ge(t),i=n.uc.get(e);if(i&&i.ec)return Se().add(i.key);{let s=Se();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function T6(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_6.bind(null,e),e.nc.zo=a6.bind(null,e.eventManager),e.nc.wc=l6.bind(null,e.eventManager),e}function I6(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v6.bind(null,e),e}class n0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return O4(this.persistence,new R4,e.initialUser,this.serializer)}createPersistence(e){return new k4(w_.Fs,this.serializer)}createSharedClientState(e){return new V4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class x6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>e0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=w6.bind(null,this.syncEngine),await s6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new o6}createDatastore(e){const n=Md(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new j4(s));var s;return function(r,o,a,l){return new q4(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>e0(this.syncEngine,a,0),o=Xb.D()?new Xb:new B4,new G4(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new d6(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ge(e);Z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fc(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Wi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=jt.UNAUTHENTICATED,this.clientId=Px.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Z("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Z("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=C_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Of(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await mS(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function i0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await k6(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Jb(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Jb(e.remoteStore,r)),t._onlineComponents=e}function C6(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function k6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Of(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!C6(n))throw n;dh("Error using user provided cache. Falling back to memory cache: "+n),await Of(t,new n0)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Of(t,new n0);return t._offlineComponents}async function PS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await i0(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await i0(t,new x6))),t._onlineComponents}function A6(t){return PS(t).then(e=>e.syncEngine)}async function vh(t){const e=await PS(t),n=e.eventManager;return n.onListen=f6.bind(null,e.syncEngine),n.onUnlisten=g6.bind(null,e.syncEngine),n}function R6(t,e,n={}){const i=new $i;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new P_({next:h=>{r.enqueueAndForget(()=>A_(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new D_(kd(o.path),c,{includeMetadataChanges:!0,xu:!0});return k_(s,u)}(await vh(t),t.asyncQueue,e,n,i)),i.promise}function D6(t,e,n={}){const i=new $i;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new P_({next:h=>{r.enqueueAndForget(()=>A_(s,u)),h.fromCache&&a.source==="server"?l.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new D_(o,c,{includeMetadataChanges:!0,xu:!0});return k_(s,u)}(await vh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function O6(t,e,n,i){if(e===!0&&i===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r0(t){if(!ie.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(ie.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fd(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,O6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new i3;switch(n.type){case"firstParty":return new a3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=s0.get(e);n&&(Z("ComponentProvider","Removing Datastore"),s0.delete(e),n.terminate())}(this),Promise.resolve()}}function P6(t,e,n,i={}){var s;const r=(t=Ln(t,Ud))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&dh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=jt.MOCK_USER;else{o=vD(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new jt(l)}t._authCredentials=new s3(new Ox(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class zr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zr(this.firestore,e,this._query)}}class Es extends zr{constructor(e,n,i){super(e,n,kd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new ie(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function Vn(t,e,...n){if(t=Ft(t),MS("collection","path",e),t instanceof Ud){const i=nt.fromString(e,...n);return o0(i),new Es(t,null,i)}{if(!(t instanceof Jt||t instanceof Es))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return o0(i),new Es(t.firestore,null,i)}}function $e(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Px.A()),MS("doc","path",e),t instanceof Ud){const i=nt.fromString(e,...n);return r0(i),new Jt(t,null,new ie(i))}{if(!(t instanceof Jt||t instanceof Es))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nt.fromString(e,...n));return r0(i),new Jt(t.firestore,t instanceof Es?t.converter:null,new ie(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new yS(this,"async_queue_retry"),this.qc=()=>{const n=Df();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Df();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new $i;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!cc(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Wi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=S_.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&le()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function l0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ar extends Ud{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new M6,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NS(this),this._firestoreClient.terminate()}}function N6(t,e){const n=typeof t=="object"?t:dm(),i=typeof t=="string"?t:e||"(default)",s=hm(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=_D("firestore");r&&P6(s,...r)}return s}function Vd(t){return t._firestoreClient||NS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NS(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new b3(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new S6(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fo(en.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fo(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6=/^__.*__$/;class F6{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new hc(e,this.data,n,this.fieldTransforms)}}class LS{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new $s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function FS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class N_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new N_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.ea(e),s}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return bh(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(FS(this.Yc)&&L6.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class U6{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Md(e)}ua(e,n,i,s=!1){return new N_({Yc:e,methodName:n,oa:i,path:Gt.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(t){const e=t._freezeSettings(),n=Md(t._databaseId);return new U6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V6(t,e,n,i,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,s);F_("Data must be an object, but it was:",o,i);const a=US(i,o);let l,c;if(r.merge)l=new Sn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=lg(e,h,n);if(!o.contains(d))throw new Y(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);BS(u,d)||u.push(d)}l=new Sn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new F6(new dn(a),l,c)}class zd extends M_{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zd}}function B6(t,e,n,i){const s=t.ua(1,e,n);F_("Data must be an object, but it was:",s,i);const r=[],o=dn.empty();Br(i,(l,c)=>{const u=U_(e,l,n);c=Ft(c);const h=s.na(u);if(c instanceof zd)r.push(u);else{const d=gc(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Sn(r);return new LS(o,a,s.fieldTransforms)}function $6(t,e,n,i,s,r){const o=t.ua(1,e,n),a=[lg(e,i,n)],l=[s];if(r.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(lg(e,r[d])),l.push(r[d+1]);const c=[],u=dn.empty();for(let d=a.length-1;d>=0;--d)if(!BS(c,a[d])){const f=a[d];let p=l[d];p=Ft(p);const g=o.na(f);if(p instanceof zd)c.push(f);else{const m=gc(p,g);m!=null&&(c.push(f),u.set(f,m))}}const h=new Sn(c);return new LS(u,h,o.fieldTransforms)}function z6(t,e,n,i=!1){return gc(n,t.ua(i?4:3,e))}function gc(t,e){if(VS(t=Ft(t)))return F_("Unsupported field value:",e,t),US(t,e);if(t instanceof M_)return function(n,i){if(!FS(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=gc(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return V3(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=bt.fromDate(n);return{timestampValue:_h(i.serializer,s)}}if(n instanceof bt){const s=new bt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_h(i.serializer,s)}}if(n instanceof $d)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fo)return{bytesValue:uS(i.serializer,n._byteString)};if(n instanceof Jt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:v_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Fd(n)}`)}(t,e)}function US(t,e){const n={};return Mx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(i,s)=>{const r=gc(s,e.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function VS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof $d||t instanceof Fo||t instanceof Jt||t instanceof M_)}function F_(t,e,n){if(!VS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Fd(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function lg(t,e,n){if((e=Ft(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return U_(t,e);throw bh("Field path arguments must be of type string or ",t,!1,void 0,n)}const j6=new RegExp("[~\\*/\\[\\]]");function U_(t,e,n){if(e.search(j6)>=0)throw bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bd(...e.split("."))._internalPath}catch{throw bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Y(O.INVALID_ARGUMENT,a+t+l)}function BS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(V_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H6 extends $S{data(){return super.data()}}function V_(t,e){return typeof e=="string"?U_(t,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class W6 extends B_{}function Pf(t,e,...n){let i=[];e instanceof B_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof $_).length,o=s.filter(a=>a instanceof jd).length;if(r>1||r>0&&o>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class jd extends W6{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new jd(e,n,i)}_apply(e){const n=this._parse(e);return jS(e._query,n),new zr(e.firestore,e.converter,eg(e._query,n))}_parse(e){const n=L_(e.firestore);return function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){u0(u,c);const d=[];for(const f of u)d.push(c0(a,s,f));h={arrayValue:{values:d}}}else h=c0(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||u0(u,c),h=z6(o,r,u,c==="in"||c==="not-in");return vt.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Mf(t,e,n){const i=e,s=V_("where",t);return jd._create(s,i,n)}class $_ extends B_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ei.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)jS(r,a),r=eg(r,a)}(e._query,n),new zr(e.firestore,e.converter,eg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function c0(t,e,n){if(typeof(n=Ft(n))=="string"){if(n==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wx(e)&&n.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(nt.fromString(n));if(!ie.isDocumentKey(i))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Mb(t,new ie(i))}if(n instanceof Jt)return Mb(t,n._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fd(n)}.`)}function u0(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jS(t,e){if(e.isInequality()){const i=m_(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new Y(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=Hx(t);r!==null&&q6(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function q6(t,e,n){if(!n.isEqual(e))throw new Y(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class K6{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){const i={};return Br(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new $d(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Lx(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(wl(e));default:return null}}convertTimestamp(e){const n=Rs(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=nt.fromString(e);rt(gS(i));const s=new El(i.get(1),i.get(3)),r=new ie(i.popFirst(5));return s.isEqual(n)||Wi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G6(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HS extends $S{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(V_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Su extends HS{data(e={}){return super.data(e)}}class WS{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xa(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Su(this._firestore,this._userDataWriter,i.key,i,new xa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Su(i._firestore,i._userDataWriter,o.doc.key,o.doc,new xa(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Su(i._firestore,i._userDataWriter,o.doc.key,o.doc,new xa(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Y6(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){t=Ln(t,Jt);const e=Ln(t.firestore,Ar);return R6(Vd(e),t._key).then(n=>KS(e,t,n))}class j_ extends K6{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function Q6(t){t=Ln(t,zr);const e=Ln(t.firestore,Ar),n=Vd(e),i=new j_(e);return zS(t._query),D6(n,t._query).then(s=>new WS(e,i,t,s))}function ro(t,e,n){t=Ln(t,Jt);const i=Ln(t.firestore,Ar),s=G6(t.converter,e,n);return qS(i,[V6(L_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,gi.none())])}function sn(t,e,n,...i){t=Ln(t,Jt);const s=Ln(t.firestore,Ar),r=L_(s);let o;return o=typeof(e=Ft(e))=="string"||e instanceof Bd?$6(r,"updateDoc",t._key,e,n,i):B6(r,"updateDoc",t._key,e),qS(s,[o.toMutation(t._key,gi.exists(!0))])}function H_(t,...e){var n,i,s;t=Ft(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||l0(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(l0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Jt)c=Ln(t.firestore,Ar),u=kd(t._key.path),l={next:h=>{e[o]&&e[o](KS(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ln(t,zr);c=Ln(h.firestore,Ar),u=h._query;const d=new j_(c);l={next:f=>{e[o]&&e[o](new WS(c,d,h,f))},error:e[o+1],complete:e[o+2]},zS(t._query)}return function(h,d,f,p){const g=new P_(p),m=new D_(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>k_(await vh(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>A_(await vh(h),m))}}(Vd(c),u,a,l)}function qS(t,e){return function(n,i){const s=new $i;return n.asyncQueue.enqueueAndForget(async()=>m6(await A6(n),i,s)),s.promise}(Vd(t),e)}function KS(t,e,n){const i=n.docs.get(e._key),s=new j_(t);return new HS(t,s,e._key,i,new xa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ia=n})(Us),yi(new Zn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ar(new r3(n.getProvider("auth-internal")),new c3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new El(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Cn(Ab,"3.10.1",t),Cn(Ab,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebasestorage.googleapis.com",X6="storageBucket",J6=2*60*1e3,Z6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Ti{constructor(e,n,i=0){super(Nf(e),`Firebase Storage: ${n} (${Nf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ii.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ei;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ei||(Ei={}));function Nf(t){return"storage/"+t}function e5(){const t="An unknown error occurred, please check the error payload for server response.";return new Ii(Ei.UNKNOWN,t)}function t5(){return new Ii(Ei.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n5(){return new Ii(Ei.CANCELED,"User canceled the upload/download.")}function i5(t){return new Ii(Ei.INVALID_URL,"Invalid URL '"+t+"'.")}function s5(t){return new Ii(Ei.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function h0(t){return new Ii(Ei.INVALID_ARGUMENT,t)}function YS(){return new Ii(Ei.APP_DELETED,"The Firebase app was deleted.")}function r5(t){return new Ii(Ei.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Gn.makeFromUrl(e,n)}catch{return new Gn(e,"")}if(i.path==="")return i;throw s5(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},g=n===GS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<b.length;T++){const I=b[T],D=I.regex.exec(e);if(D){const C=D[I.indices.bucket];let S=D[I.indices.path];S||(S=""),i=new Gn(C,S),I.postModify(i);break}}if(i==null)throw i5(e);return i}}class o5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a5(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,t(f,l())},m)}function d(){r&&clearTimeout(r)}function f(m,..._){if(c){d();return}if(m){d(),u.call(null,m,..._);return}if(l()||o){d(),u.call(null,m,..._);return}i<64&&(i*=2);let b;a===1?(a=2,b=0):b=(i+Math.random())*1e3,h(b)}let p=!1;function g(m){p||(p=!0,d(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function l5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t){return t!==void 0}function d0(t,e,n,i){if(i<e)throw h0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw h0(`Invalid value for '${t}'. Expected ${n} or less.`)}function u5(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function h5(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new zc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===wh.NO_ERROR,l=r.getStatus();if(!a||h5(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===wh.ABORT;i(!1,new zc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new zc(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c5(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=e5();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?YS():n5();o(l)}else{const l=t5();o(l)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=a5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function f5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function g5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function m5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _5(t,e,n,i,s,r,o=!0){const a=u5(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return g5(c,e),f5(c,n),p5(c,r),m5(c,i),new d5(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v5(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this._service=e,n instanceof Gn?this._location=n:this._location=Gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Eh(e,n)}get root(){const e=new Gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v5(this._location.path)}get storage(){return this._service}get parent(){const e=y5(this._location.path);if(e===null)return null;const n=new Gn(this._location.bucket,e);return new Eh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw r5(e)}}function f0(t,e){const n=e==null?void 0:e[X6];return n==null?null:Gn.makeFromBucketSpec(n,t)}class b5{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=GS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J6,this._maxUploadRetryTime=Z6,this._requests=new Set,s!=null?this._bucket=Gn.makeFromBucketSpec(s,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gn.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new o5(YS());{const o=_5(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const p0="@firebase/storage",g0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5="storage";function E5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new b5(n,i,s,e,Us)}function T5(){yi(new Zn(w5,E5,"PUBLIC").setMultipleInstances(!0)),Cn(p0,g0,""),Cn(p0,g0,"esm2017")}T5();const Lf=new WeakMap;function QS(t,e){return Lf.has(e)||Lf.set(e,t||{f:{},r:{},s:{},u:{}}),Lf.get(e)}function I5(t,e,n,i){if(!t)return n;const[s,r]=XS(t);if(!s)return n;const o=QS(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function x5(t,e,n,i){if(!t)return;const[s,r]=XS(t);if(!s)return;const o=QS(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(ui),a}function XS(t){return hM(t)||dM(t)?["f",t.path]:fM(t)?["r",t.toString()]:pM(t)?["s",t.toString()]:[]}const Ff=new WeakMap;function S5(t,e,n){const i=_T();Ff.has(i)||Ff.set(i,new Map);const s=Ff.get(i),r=x5(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):ui}const C5={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function cg(t,e,n,i){if(!uM(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const p=Object.getOwnPropertyDescriptor(a,f);p&&!p.enumerable&&Object.defineProperty(h,f,p)});for(const f in a){const p=a[f];if(p==null||p instanceof Date||p instanceof bt||p instanceof $d)h[f]=p;else if(Em(p)){const g=c+f;h[f]=g in n?l[f]:p.path,d[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[f]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[f][g]=r[m.path])}o(p,l[f]||h[f],c+f+".",[h[f],d])}else Lr(p)?(h[f]={},o(p,l[f],c+f+".",[h[f],d])):h[f]=p}}return o(t,e,"",s),s}const W_={reset:!1,wait:!0,maxRefDepth:2,converter:C5,snapshotOptions:{serverTimestamps:"estimate"}};function Th(t){for(const e in t)t[e].unsub()}function ug(t,e,n,i,s,r,o,a,l){const[c,u]=cg(i.data(t.snapshotOptions),wm(e,n),s,t);r.set(e,n,c),hg(t,e,n,s,u,r,o,a,l)}function k5({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=ui;return a.once?z_(t).then(u=>{u.exists()?ug(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())}).catch(r):c=H_(t,u=>{u.exists()?ug(a,e,n,u,l,o,i,s,r):(o.set(e,n,null),s())},r),()=>{c(),Th(l)}}function hg(t,e,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(g=>c.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function p(g){g in f&&++h>=d&&a(n)}c.forEach(g=>{const m=i[g],_=s[g],y=`${n}.${g}`;if(f[y]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>wm(e,y),unsub:k5({ref:_,target:e,path:y,depth:o,ops:r,resolve:p.bind(null,y),reject:l},t),path:_.path}})}function A5(t,e,n,i,s,r){const o=Object.assign({},W_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Ge(c?[]:t.value);c||n.set(t,h,[]);const f=i;let p,g=ui;const m=[],_={added:({newIndex:b,doc:T})=>{m.splice(b,0,Object.create(null));const I=m[b],[D,C]=cg(T.data(l),void 0,I,o);n.add(E(d),b,D),hg(o,d,`${h}.${b}`,I,C,n,0,i.bind(null,T),s)},modified:({oldIndex:b,newIndex:T,doc:I})=>{const D=E(d),C=m[b],S=D[b],[$,ee]=cg(I.data(l),S,C,o);m.splice(T,0,C),n.remove(D,b),n.add(D,T,$),hg(o,d,`${h}.${T}`,C,ee,n,0,i,s)},removed:({oldIndex:b})=>{const T=E(d);n.remove(T,b),Th(m.splice(b,1)[0])}};function y(b){const T=b.docChanges(a);if(!p&&T.length){p=!0;let I=0;const D=T.length,C=Object.create(null);for(let S=0;S<D;S++)C[T[S].doc.id]=!0;i=S=>{S&&S.id in C&&++I>=D&&(c&&(n.set(t,h,E(d)),d=t),f(E(d)),i=ui)}}T.forEach(I=>{_[I.type](I)}),T.length||(c&&(n.set(t,h,E(d)),d=t),i(E(d)))}return u?Q6(e).then(y).catch(s):g=H_(e,y,s),b=>{if(g(),b){const T=typeof b=="function"?b():[];n.set(t,h,T)}m.forEach(Th)}}function R5(t,e,n,i,s,r){const o=Object.assign({},W_,r),a="value",l=Object.create(null);i=gM(i,()=>wm(t,a));let c=ui;function u(h){h.exists()?ug(o,t,a,h,l,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?z_(e).then(u).catch(s):c=H_(e,u,s),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Th(l)}}function D5(t,e){let n=ui;const i=Object.assign({},W_,e),s=E(t),r=i.target||Ge();mM()&&(i.once=!0);const o=I5(s,i.ssrKey,r.value,_T());r.value=o;let l=!(yT(s)?(o||[]).length>0:o!==void 0);const c=Ge(!1),u=Ge(),h=qh(),d=Hg();let f=ui;function p(){let _=E(t);const y=new Promise((b,T)=>{if(n(i.reset),!_)return n=ui,b(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(Em(_)?R5:A5)(r,_,O5,b,T,i)}).catch(b=>(h.value===y&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===y&&(c.value=!1)});h.value=y}let g=ui;ut(t)&&(g=ys(t,p)),p(),s&&(f=S5(h.value,s,i.ssrKey)),Vl()&&Jw(()=>h.value),d&&xw(m);function m(_=i.reset){g(),f(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>m}})}const O5={set:(t,e,n)=>lM(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function wt(t,e){return D5(t,e)}function P5(t,{firebaseApp:e,modules:n=[]}){t.provide(mT,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const to=typeof window<"u";function M5(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const je=Object.assign;function Uf(t,e){const n={};for(const i in e){const s=e[i];n[i]=ti(s)?s.map(t):t(s)}return n}const Ha=()=>{},ti=Array.isArray,N5=/\/$/,L5=t=>t.replace(N5,"");function Vf(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=B5(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function F5(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U5(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Uo(e.matched[i],n.matched[s])&&JS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Uo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!V5(t[n],e[n]))return!1;return!0}function V5(t,e){return ti(t)?_0(t,e):ti(e)?_0(e,t):t===e}function _0(t,e){return ti(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function B5(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Sl;(function(t){t.pop="pop",t.push="push"})(Sl||(Sl={}));var Wa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wa||(Wa={}));function $5(t){if(!t)if(to){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),L5(t)}const z5=/^[^#]+#/;function j5(t,e){return t.replace(z5,"#")+e}function H5(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Hd=()=>({left:window.pageXOffset,top:window.pageYOffset});function W5(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=H5(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function y0(t,e){return(history.state?history.state.position-e:-1)+t}const dg=new Map;function q5(t,e){dg.set(t,e)}function K5(t){const e=dg.get(t);return dg.delete(t),e}let G5=()=>location.protocol+"//"+location.host;function ZS(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),m0(l,"")}return m0(n,t)+i+s}function Y5(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const f=ZS(t,location),p=n.value,g=e.value;let m=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}m=g?d.position-g.position:0}else i(f);s.forEach(_=>{_(n.value,p,{delta:m,type:Sl.pop,direction:m?m>0?Wa.forward:Wa.back:Wa.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(je({},d.state,{scroll:Hd()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function v0(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Hd():null}}function Q5(t){const{history:e,location:n}=window,i={value:ZS(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:G5()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=je({},e.state,v0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=je({},s.value,e.state,{forward:l,scroll:Hd()});r(u.current,u,!0);const h=je({},v0(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function X5(t){t=$5(t);const e=Q5(t),n=Y5(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=je({location:"",base:t,go:i,createHref:j5.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function J5(t){return typeof t=="string"||t&&typeof t=="object"}function eC(t){return typeof t=="string"||typeof t=="symbol"}const is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tC=Symbol("");var b0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(b0||(b0={}));function Vo(t,e){return je(new Error,{type:t,[tC]:!0},e)}function Si(t,e){return t instanceof Error&&tC in t&&(e==null||!!(t.type&e))}const w0="[^/]+?",Z5={sensitive:!1,strict:!1,start:!0,end:!0},eU=/[.+*?^${}()[\]/\\]/g;function tU(t,e){const n=je({},Z5,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(eU,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=d;r.push({name:p,repeatable:g,optional:m});const y=_||w0;if(y!==w0){f+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+T.message)}}let b=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,f+=20,m&&(f+=-8),g&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:m}=f,_=p in c?c[p]:"";if(ti(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=ti(_)?_.join("/"):_;if(!y)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function nU(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iU(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=nU(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(E0(i))return 1;if(E0(s))return-1}return s.length-i.length}function E0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sU={type:0,value:""},rU=/[a-zA-Z0-9_]/;function oU(t){if(!t)return[[]];if(t==="/")return[[sU]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:rU.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function aU(t,e,n){const i=tU(oU(t.path),n),s=je(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lU(t,e){const n=[],i=new Map;e=x0({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,p=cU(u);p.aliasOf=d&&d.record;const g=x0(e,u),m=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of b)m.push(je({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let _,y;for(const b of m){const{path:T}=b;if(h&&T[0]!=="/"){const I=h.record.path,D=I[I.length-1]==="/"?"":"/";b.path=h.record.path+(T&&D+T)}if(_=aU(b,h,g),d?d.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),f&&u.name&&!I0(_)&&o(u.name)),p.children){const I=p.children;for(let D=0;D<I.length;D++)r(I[D],_,d&&d.children[D])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:Ha}function o(u){if(eC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&iU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!I0(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},p,g;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Vo(1,{location:u});g=d.record.name,f=je(T0(h.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&T0(u.params,d.keys.map(y=>y.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(y=>y.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!d)throw Vo(1,{location:u,currentLocation:h});g=d.record.name,f=je({},h.params,u.params),p=d.stringify(f)}const m=[];let _=d;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:f,matched:m,meta:hU(m)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function T0(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function cU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function I0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hU(t){return t.reduce((e,n)=>je(e,n.meta),{})}function x0(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function nC(t,e){return e.children.some(n=>n===t||nC(t,n))}const iC=/#/g,dU=/&/g,fU=/\//g,pU=/=/g,gU=/\?/g,sC=/\+/g,mU=/%5B/g,_U=/%5D/g,rC=/%5E/g,yU=/%60/g,oC=/%7B/g,vU=/%7C/g,aC=/%7D/g,bU=/%20/g;function q_(t){return encodeURI(""+t).replace(vU,"|").replace(mU,"[").replace(_U,"]")}function wU(t){return q_(t).replace(oC,"{").replace(aC,"}").replace(rC,"^")}function fg(t){return q_(t).replace(sC,"%2B").replace(bU,"+").replace(iC,"%23").replace(dU,"%26").replace(yU,"`").replace(oC,"{").replace(aC,"}").replace(rC,"^")}function EU(t){return fg(t).replace(pU,"%3D")}function TU(t){return q_(t).replace(iC,"%23").replace(gU,"%3F")}function IU(t){return t==null?"":TU(t).replace(fU,"%2F")}function Ih(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xU(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(sC," "),o=r.indexOf("="),a=Ih(o<0?r:r.slice(0,o)),l=o<0?null:Ih(r.slice(o+1));if(a in e){let c=e[a];ti(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function S0(t){let e="";for(let n in t){const i=t[n];if(n=EU(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ti(i)?i.map(r=>r&&fg(r)):[i&&fg(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function SU(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ti(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const CU=Symbol(""),C0=Symbol(""),Wd=Symbol(""),K_=Symbol(""),pg=Symbol("");function pa(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ls(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Vo(4,{from:n,to:e})):h instanceof Error?a(h):J5(h)?a(Vo(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bf(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(kU(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ls(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=M5(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ls(d,n,i,r,o)()}))}}return s}function kU(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function k0(t){const e=mn(Wd),n=mn(K_),i=xe(()=>e.resolve(E(t.to))),s=xe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Uo.bind(null,u));if(d>-1)return d;const f=A0(l[c-2]);return c>1&&A0(u)===f&&h[h.length-1].path!==f?h.findIndex(Uo.bind(null,l[c-2])):d}),r=xe(()=>s.value>-1&&OU(n.params,i.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&JS(n.params,i.value.params));function a(l={}){return DU(l)?e[E(t.replace)?"replace":"push"](E(t.to)).catch(Ha):Promise.resolve()}return{route:i,href:xe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const AU=Nr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:k0,setup(t,{slots:e}){const n=Ss(k0(t)),{options:i}=mn(Wd),s=xe(()=>({[R0(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[R0(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Go("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),RU=AU;function DU(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OU(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ti(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function A0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const R0=(t,e,n)=>t??e??n,PU=Nr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=mn(pg),s=xe(()=>t.route||i.value),r=mn(C0,0),o=xe(()=>{let c=E(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=xe(()=>s.value.matched[o.value]);gu(C0,xe(()=>o.value+1)),gu(CU,a),gu(pg,s);const l=Ge();return ys(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Uo(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return D0(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=Go(d,je({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return D0(n.default,{Component:m,route:c})||m}}});function D0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lC=PU;function MU(t){const e=lU(t.routes,t),n=t.parseQuery||xU,i=t.stringifyQuery||S0,s=t.history,r=pa(),o=pa(),a=pa(),l=qh(is);let c=is;to&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Uf.bind(null,R=>""+R),h=Uf.bind(null,IU),d=Uf.bind(null,Ih);function f(R,H){let q,ne;return eC(R)?(q=e.getRecordMatcher(R),ne=H):ne=R,e.addRoute(ne,q)}function p(R){const H=e.getRecordMatcher(R);H&&e.removeRoute(H)}function g(){return e.getRoutes().map(R=>R.record)}function m(R){return!!e.getRecordMatcher(R)}function _(R,H){if(H=je({},H||l.value),typeof R=="string"){const v=Vf(n,R,H.path),w=e.resolve({path:v.path},H),x=s.createHref(v.fullPath);return je(v,w,{params:d(w.params),hash:Ih(v.hash),redirectedFrom:void 0,href:x})}let q;if("path"in R)q=je({},R,{path:Vf(n,R.path,H.path).path});else{const v=je({},R.params);for(const w in v)v[w]==null&&delete v[w];q=je({},R,{params:h(R.params)}),H.params=h(H.params)}const ne=e.resolve(q,H),Me=R.hash||"";ne.params=u(d(ne.params));const lt=F5(i,je({},R,{hash:wU(Me),path:ne.path})),we=s.createHref(lt);return je({fullPath:lt,hash:Me,query:i===S0?SU(R.query):R.query||{}},ne,{redirectedFrom:void 0,href:we})}function y(R){return typeof R=="string"?Vf(n,R,l.value.path):je({},R)}function b(R,H){if(c!==R)return Vo(8,{from:H,to:R})}function T(R){return C(R)}function I(R){return T(je(y(R),{replace:!0}))}function D(R){const H=R.matched[R.matched.length-1];if(H&&H.redirect){const{redirect:q}=H;let ne=typeof q=="function"?q(R):q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=y(ne):{path:ne},ne.params={}),je({query:R.query,hash:R.hash,params:"path"in ne?{}:R.params},ne)}}function C(R,H){const q=c=_(R),ne=l.value,Me=R.state,lt=R.force,we=R.replace===!0,v=D(q);if(v)return C(je(y(v),{state:typeof v=="object"?je({},Me,v.state):Me,force:lt,replace:we}),H||q);const w=q;w.redirectedFrom=H;let x;return!lt&&U5(i,ne,q)&&(x=Vo(16,{to:w,from:ne}),ln(ne,ne,!0,!1)),(x?Promise.resolve(x):$(w,ne)).catch(k=>Si(k)?Si(k,2)?k:Vt(k):te(k,w,ne)).then(k=>{if(k){if(Si(k,2))return C(je({replace:we},y(k.to),{state:typeof k.to=="object"?je({},Me,k.to.state):Me,force:lt}),H||w)}else k=z(w,ne,!0,we,Me);return ee(w,ne,k),k})}function S(R,H){const q=b(R,H);return q?Promise.reject(q):Promise.resolve()}function $(R,H){let q;const[ne,Me,lt]=NU(R,H);q=Bf(ne.reverse(),"beforeRouteLeave",R,H);for(const v of ne)v.leaveGuards.forEach(w=>{q.push(ls(w,R,H))});const we=S.bind(null,R,H);return q.push(we),Qr(q).then(()=>{q=[];for(const v of r.list())q.push(ls(v,R,H));return q.push(we),Qr(q)}).then(()=>{q=Bf(Me,"beforeRouteUpdate",R,H);for(const v of Me)v.updateGuards.forEach(w=>{q.push(ls(w,R,H))});return q.push(we),Qr(q)}).then(()=>{q=[];for(const v of R.matched)if(v.beforeEnter&&!H.matched.includes(v))if(ti(v.beforeEnter))for(const w of v.beforeEnter)q.push(ls(w,R,H));else q.push(ls(v.beforeEnter,R,H));return q.push(we),Qr(q)}).then(()=>(R.matched.forEach(v=>v.enterCallbacks={}),q=Bf(lt,"beforeRouteEnter",R,H),q.push(we),Qr(q))).then(()=>{q=[];for(const v of o.list())q.push(ls(v,R,H));return q.push(we),Qr(q)}).catch(v=>Si(v,8)?v:Promise.reject(v))}function ee(R,H,q){for(const ne of a.list())ne(R,H,q)}function z(R,H,q,ne,Me){const lt=b(R,H);if(lt)return lt;const we=H===is,v=to?history.state:{};q&&(ne||we?s.replace(R.fullPath,je({scroll:we&&v&&v.scroll},Me)):s.push(R.fullPath,Me)),l.value=R,ln(R,H,q,we),Vt()}let W;function me(){W||(W=s.listen((R,H,q)=>{if(!ni.listening)return;const ne=_(R),Me=D(ne);if(Me){C(je(Me,{replace:!0}),ne).catch(Ha);return}c=ne;const lt=l.value;to&&q5(y0(lt.fullPath,q.delta),Hd()),$(ne,lt).catch(we=>Si(we,12)?we:Si(we,2)?(C(we.to,ne).then(v=>{Si(v,20)&&!q.delta&&q.type===Sl.pop&&s.go(-1,!1)}).catch(Ha),Promise.reject()):(q.delta&&s.go(-q.delta,!1),te(we,ne,lt))).then(we=>{we=we||z(ne,lt,!1),we&&(q.delta&&!Si(we,8)?s.go(-q.delta,!1):q.type===Sl.pop&&Si(we,20)&&s.go(-1,!1)),ee(ne,lt,we)}).catch(Ha)}))}let Ke=pa(),de=pa(),_e;function te(R,H,q){Vt(R);const ne=de.list();return ne.length?ne.forEach(Me=>Me(R,H,q)):console.error(R),Promise.reject(R)}function Ce(){return _e&&l.value!==is?Promise.resolve():new Promise((R,H)=>{Ke.add([R,H])})}function Vt(R){return _e||(_e=!R,me(),Ke.list().forEach(([H,q])=>R?q(R):H()),Ke.reset()),R}function ln(R,H,q,ne){const{scrollBehavior:Me}=t;if(!to||!Me)return Promise.resolve();const lt=!q&&K5(y0(R.fullPath,0))||(ne||!q)&&history.state&&history.state.scroll||null;return Zg().then(()=>Me(R,H,lt)).then(we=>we&&W5(we)).catch(we=>te(we,R,H))}const Bt=R=>s.go(R);let pt;const Dn=new Set,ni={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:t,push:T,replace:I,go:Bt,back:()=>Bt(-1),forward:()=>Bt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:Ce,install(R){const H=this;R.component("RouterLink",RU),R.component("RouterView",lC),R.config.globalProperties.$router=H,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>E(l)}),to&&!pt&&l.value===is&&(pt=!0,T(s.location).catch(Me=>{}));const q={};for(const Me in is)q[Me]=xe(()=>l.value[Me]);R.provide(Wd,H),R.provide(K_,Ss(q)),R.provide(pg,l);const ne=R.unmount;Dn.add(R),R.unmount=function(){Dn.delete(R),Dn.size<1&&(c=is,W&&W(),W=null,l.value=is,pt=!1,_e=!1),ne()}}};return ni}function Qr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function NU(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Uo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Uo(c,l))||s.push(l))}return[n,i,s]}function zs(){return mn(Wd)}function jr(){return mn(K_)}const LU={class:"container"},FU={__name:"App",setup(t){const e=jr();return(n,i)=>{const s=Cs("RouterView");return P(),L("div",LU,[(P(),_n(s,{key:E(e).fullPath}))])}}},cC=OE({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),ve=N6(cC);function O0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O0(Object(n),!0).forEach(function(i){St(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xh(t){return xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xh(t)}function UU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P0(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function VU(t,e,n){return e&&P0(t.prototype,e),n&&P0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G_(t,e){return $U(t)||jU(t,e)||uC(t,e)||WU()}function mc(t){return BU(t)||zU(t)||uC(t)||HU()}function BU(t){if(Array.isArray(t))return gg(t)}function $U(t){if(Array.isArray(t))return t}function zU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function uC(t,e){if(t){if(typeof t=="string")return gg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gg(t,e)}}function gg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function HU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M0=function(){},Y_={},hC={},dC=null,fC={mark:M0,measure:M0};try{typeof window<"u"&&(Y_=window),typeof document<"u"&&(hC=document),typeof MutationObserver<"u"&&(dC=MutationObserver),typeof performance<"u"&&(fC=performance)}catch{}var qU=Y_.navigator||{},N0=qU.userAgent,L0=N0===void 0?"":N0,Os=Y_,st=hC,F0=dC,jc=fC;Os.document;var Zi=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",pC=~L0.indexOf("MSIE")||~L0.indexOf("Trident/"),Hc,Wc,qc,Kc,Gc,Gi="___FONT_AWESOME___",mg=16,gC="fa",mC="svg-inline--fa",Rr="data-fa-i2svg",_g="data-fa-pseudo-element",KU="data-fa-pseudo-element-pending",Q_="data-prefix",X_="data-icon",U0="fontawesome-i2svg",GU="async",YU=["HTML","HEAD","STYLE","SCRIPT"],_C=function(){try{return!0}catch{return!1}}(),tt="classic",ht="sharp",J_=[tt,ht];function _c(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[tt]}})}var Cl=_c((Hc={},St(Hc,tt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),St(Hc,ht,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Hc)),kl=_c((Wc={},St(Wc,tt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),St(Wc,ht,{solid:"fass",regular:"fasr",light:"fasl"}),Wc)),Al=_c((qc={},St(qc,tt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),St(qc,ht,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),qc)),QU=_c((Kc={},St(Kc,tt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),St(Kc,ht,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Kc)),XU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yC="fa-layers-text",JU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ZU=_c((Gc={},St(Gc,tt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),St(Gc,ht,{900:"fass",400:"fasr",300:"fasl"}),Gc)),vC=[1,2,3,4,5,6,7,8,9,10],eV=vC.concat([11,12,13,14,15,16,17,18,19,20]),tV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ur={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rl=new Set;Object.keys(kl[tt]).map(Rl.add.bind(Rl));Object.keys(kl[ht]).map(Rl.add.bind(Rl));var nV=[].concat(J_,mc(Rl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ur.GROUP,ur.SWAP_OPACITY,ur.PRIMARY,ur.SECONDARY]).concat(vC.map(function(t){return"".concat(t,"x")})).concat(eV.map(function(t){return"w-".concat(t)})),qa=Os.FontAwesomeConfig||{};function iV(t){var e=st.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(st&&typeof st.querySelector=="function"){var rV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rV.forEach(function(t){var e=G_(t,2),n=e[0],i=e[1],s=sV(iV(n));s!=null&&(qa[i]=s)})}var bC={styleDefault:"solid",familyDefault:"classic",cssPrefix:gC,replacementClass:mC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qa.familyPrefix&&(qa.cssPrefix=qa.familyPrefix);var Bo=G(G({},bC),qa);Bo.autoReplaceSvg||(Bo.observeMutations=!1);var X={};Object.keys(bC).forEach(function(t){Object.defineProperty(X,t,{enumerable:!0,set:function(n){Bo[t]=n,Ka.forEach(function(i){return i(X)})},get:function(){return Bo[t]}})});Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Bo.cssPrefix=e,Ka.forEach(function(n){return n(X)})},get:function(){return Bo.cssPrefix}});Os.FontAwesomeConfig=X;var Ka=[];function oV(t){return Ka.push(t),function(){Ka.splice(Ka.indexOf(t),1)}}var ss=mg,di={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aV(t){if(!(!t||!Zi)){var e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=st.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return st.head.insertBefore(e,i),t}}var lV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dl(){for(var t=12,e="";t-- >0;)e+=lV[Math.random()*62|0];return e}function oa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Z_(t){return t.classList?oa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wC(t[n]),'" ')},"").trim()}function qd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ey(t){return t.size!==di.size||t.x!==di.x||t.y!==di.y||t.rotate!==di.rotate||t.flipX||t.flipY}function uV(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function hV(t){var e=t.transform,n=t.width,i=n===void 0?mg:n,s=t.height,r=s===void 0?mg:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&pC?l+="translate(".concat(e.x/ss-i/2,"em, ").concat(e.y/ss-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ss,"em), calc(-50% + ").concat(e.y/ss,"em)) "):l+="translate(".concat(e.x/ss,"em, ").concat(e.y/ss,"em) "),l+="scale(".concat(e.size/ss*(e.flipX?-1:1),", ").concat(e.size/ss*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var dV=`:root, :host {
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
}`;function EC(){var t=gC,e=mC,n=X.cssPrefix,i=X.replacementClass,s=dV;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var V0=!1;function $f(){X.autoAddCss&&!V0&&(aV(EC()),V0=!0)}var fV={mixout:function(){return{dom:{css:EC,insertCss:$f}}},hooks:function(){return{beforeDOMElementCreation:function(){$f()},beforeI2svg:function(){$f()}}}},Yi=Os||{};Yi[Gi]||(Yi[Gi]={});Yi[Gi].styles||(Yi[Gi].styles={});Yi[Gi].hooks||(Yi[Gi].hooks={});Yi[Gi].shims||(Yi[Gi].shims=[]);var Yn=Yi[Gi],TC=[],pV=function t(){st.removeEventListener("DOMContentLoaded",t),Sh=1,TC.map(function(e){return e()})},Sh=!1;Zi&&(Sh=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),Sh||st.addEventListener("DOMContentLoaded",pV));function gV(t){Zi&&(Sh?setTimeout(t,0):TC.push(t))}function yc(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?wC(t):"<".concat(e," ").concat(cV(i),">").concat(r.map(yc).join(""),"</").concat(e,">")}function B0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var mV=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},zf=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?mV(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function _V(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function yg(t){var e=_V(t);return e.length===1?e[0].toString(16):null}function yV(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function $0(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function vg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=$0(e);typeof Yn.hooks.addPack=="function"&&!s?Yn.hooks.addPack(t,$0(e)):Yn.styles[t]=G(G({},Yn.styles[t]||{}),r),t==="fas"&&vg("fa",e)}var Yc,Qc,Xc,oo=Yn.styles,vV=Yn.shims,bV=(Yc={},St(Yc,tt,Object.values(Al[tt])),St(Yc,ht,Object.values(Al[ht])),Yc),ty=null,IC={},xC={},SC={},CC={},kC={},wV=(Qc={},St(Qc,tt,Object.keys(Cl[tt])),St(Qc,ht,Object.keys(Cl[ht])),Qc);function EV(t){return~nV.indexOf(t)}function TV(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!EV(s)?s:null}var AC=function(){var e=function(r){return zf(oo,function(o,a,l){return o[l]=zf(a,r,{}),o},{})};IC=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),xC=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),kC=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in oo||X.autoFetchSvg,i=zf(vV,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});SC=i.names,CC=i.unicodes,ty=Kd(X.styleDefault,{family:X.familyDefault})};oV(function(t){ty=Kd(t.styleDefault,{family:X.familyDefault})});AC();function ny(t,e){return(IC[t]||{})[e]}function IV(t,e){return(xC[t]||{})[e]}function hr(t,e){return(kC[t]||{})[e]}function RC(t){return SC[t]||{prefix:null,iconName:null}}function xV(t){var e=CC[t],n=ny("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ps(){return ty}var iy=function(){return{prefix:null,iconName:null,rest:[]}};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?tt:n,s=Cl[i][t],r=kl[i][t]||kl[i][s],o=t in Yn.styles?t:null;return r||o||null}var z0=(Xc={},St(Xc,tt,Object.keys(Al[tt])),St(Xc,ht,Object.keys(Al[ht])),Xc);function Gd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},St(e,tt,"".concat(X.cssPrefix,"-").concat(tt)),St(e,ht,"".concat(X.cssPrefix,"-").concat(ht)),e),o=null,a=tt;(t.includes(r[tt])||t.some(function(c){return z0[tt].includes(c)}))&&(a=tt),(t.includes(r[ht])||t.some(function(c){return z0[ht].includes(c)}))&&(a=ht);var l=t.reduce(function(c,u){var h=TV(X.cssPrefix,u);if(oo[u]?(u=bV[a].includes(u)?QU[a][u]:u,o=u,c.prefix=u):wV[a].indexOf(u)>-1?(o=u,c.prefix=Kd(u,{family:a})):h?c.iconName=h:u!==X.replacementClass&&u!==r[tt]&&u!==r[ht]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var d=o==="fa"?RC(c.iconName):{},f=hr(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||f||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!oo.far&&oo.fas&&!X.autoFetchSvg&&(c.prefix="fas")}return c},iy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ht&&(oo.fass||X.autoFetchSvg)&&(l.prefix="fass",l.iconName=hr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ps()||"fas"),l}var SV=function(){function t(){UU(this,t),this.definitions={}}return VU(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=G(G({},n.definitions[a]||{}),o[a]),vg(a,o[a]);var l=Al[tt][a];l&&vg(l,o[a]),AC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),j0=[],ao={},yo={},CV=Object.keys(yo);function kV(t,e){var n=e.mixoutsTo;return j0=t,ao={},Object.keys(yo).forEach(function(i){CV.indexOf(i)===-1&&delete yo[i]}),j0.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),xh(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){ao[o]||(ao[o]=[]),ao[o].push(r[o])})}i.provides&&i.provides(yo)}),n}function bg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=ao[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Dr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=ao[t]||[];s.forEach(function(r){r.apply(null,n)})}function Qi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return yo[t]?yo[t].apply(null,e):void 0}function wg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ps();if(e)return e=hr(n,e)||e,B0(DC.definitions,n,e)||B0(Yn.styles,n,e)}var DC=new SV,AV=function(){X.autoReplaceSvg=!1,X.observeMutations=!1,Dr("noAuto")},RV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zi?(Dr("beforeI2svg",e),Qi("pseudoElements2svg",e),Qi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,gV(function(){OV({autoReplaceSvgRoot:n}),Dr("watch",e)})}},DV={icon:function(e){if(e===null)return null;if(xh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Kd(e[0]);return{prefix:i,iconName:hr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(X.cssPrefix,"-"))>-1||e.match(XU))){var s=Gd(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ps(),iconName:hr(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Ps();return{prefix:r,iconName:hr(r,e)||e}}}},Rn={noAuto:AV,config:X,dom:RV,parse:DV,library:DC,findIconDefinition:wg,toHtml:yc},OV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?st:n;(Object.keys(Yn.styles).length>0||X.autoFetchSvg)&&Zi&&X.autoReplaceSvg&&Rn.dom.i2svg({node:i})};function Yd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return yc(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Zi){var i=st.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function PV(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(ey(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=qd(G(G({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function MV(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(X.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:G(G({},s),{},{id:o}),children:i}]}]}function sy(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",y=[X.replacementClass,r?"".concat(X.cssPrefix,"-").concat(r):""].filter(function($){return h.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(h.classes).join(" "),b={children:[],attributes:G(G({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},T=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};f&&(b.attributes[Rr]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Dl())},children:[l]}),delete b.attributes.title);var I=G(G({},b),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:G(G({},T),h.styles)}),D=i.found&&n.found?Qi("generateAbstractMask",I)||{children:[],attributes:{}}:Qi("generateAbstractIcon",I)||{children:[],attributes:{}},C=D.children,S=D.attributes;return I.children=C,I.attributes=S,a?MV(I):PV(I)}function H0(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=G(G(G({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Rr]="");var u=G({},o.styles);ey(s)&&(u.transform=hV({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=qd(u);h.length>0&&(c.style=h);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function NV(t){var e=t.content,n=t.title,i=t.extra,s=G(G(G({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=qd(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jf=Yn.styles;function Eg(t){var e=t[0],n=t[1],i=t.slice(4),s=G_(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(X.cssPrefix,"-").concat(ur.GROUP)},children:[{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(ur.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(ur.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var LV={found:!1,width:512,height:512};function FV(t,e){!_C&&!X.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tg(t,e){var n=e;return e==="fa"&&X.styleDefault!==null&&(e=Ps()),new Promise(function(i,s){if(Qi("missingIconAbstract"),n==="fa"){var r=RC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&jf[e]&&jf[e][t]){var o=jf[e][t];return i(Eg(o))}FV(t,e),i(G(G({},LV),{},{icon:X.showMissingIcons&&t?Qi("missingIconAbstract")||{}:{}}))})}var W0=function(){},Ig=X.measurePerformance&&jc&&jc.mark&&jc.measure?jc:{mark:W0,measure:W0},Sa='FA "6.4.0"',UV=function(e){return Ig.mark("".concat(Sa," ").concat(e," begins")),function(){return OC(e)}},OC=function(e){Ig.mark("".concat(Sa," ").concat(e," ends")),Ig.measure("".concat(Sa," ").concat(e),"".concat(Sa," ").concat(e," begins"),"".concat(Sa," ").concat(e," ends"))},ry={begin:UV,end:OC},Cu=function(){};function q0(t){var e=t.getAttribute?t.getAttribute(Rr):null;return typeof e=="string"}function VV(t){var e=t.getAttribute?t.getAttribute(Q_):null,n=t.getAttribute?t.getAttribute(X_):null;return e&&n}function BV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(X.replacementClass)}function $V(){if(X.autoReplaceSvg===!0)return ku.replace;var t=ku[X.autoReplaceSvg];return t||ku.replace}function zV(t){return st.createElementNS("http://www.w3.org/2000/svg",t)}function jV(t){return st.createElement(t)}function PC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?zV:jV:n;if(typeof t=="string")return st.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(PC(o,{ceFn:i}))}),s}function HV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ku={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(PC(s),n)}),n.getAttribute(Rr)===null&&X.keepOriginalSource){var i=st.createComment(HV(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Z_(n).indexOf(X.replacementClass))return ku.replace(e);var s=new RegExp("".concat(X.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===X.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return yc(a)}).join(`
`);n.setAttribute(Rr,""),n.innerHTML=o}};function K0(t){t()}function MC(t,e){var n=typeof e=="function"?e:Cu;if(t.length===0)n();else{var i=K0;X.mutateApproach===GU&&(i=Os.requestAnimationFrame||K0),i(function(){var s=$V(),r=ry.begin("mutate");t.map(s),r(),n()})}}var oy=!1;function NC(){oy=!0}function xg(){oy=!1}var Ch=null;function G0(t){if(F0&&X.observeMutations){var e=t.treeCallback,n=e===void 0?Cu:e,i=t.nodeCallback,s=i===void 0?Cu:i,r=t.pseudoElementsCallback,o=r===void 0?Cu:r,a=t.observeMutationsRoot,l=a===void 0?st:a;Ch=new F0(function(c){if(!oy){var u=Ps();oa(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!q0(h.addedNodes[0])&&(X.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&X.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&q0(h.target)&&~tV.indexOf(h.attributeName))if(h.attributeName==="class"&&VV(h.target)){var d=Gd(Z_(h.target)),f=d.prefix,p=d.iconName;h.target.setAttribute(Q_,f||u),p&&h.target.setAttribute(X_,p)}else BV(h.target)&&s(h.target)})}}),Zi&&Ch.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function WV(){Ch&&Ch.disconnect()}function qV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function KV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Gd(Z_(t));return s.prefix||(s.prefix=Ps()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=IV(s.prefix,t.innerText)||ny(s.prefix,yg(t.innerText))),!s.iconName&&X.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function GV(t){var e=oa(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return X.autoA11y&&(n?e["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(i||Dl()):(e["aria-hidden"]="true",e.focusable="false")),e}function YV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:di,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=KV(t),i=n.iconName,s=n.prefix,r=n.rest,o=GV(t),a=bg("parseNodeAttributes",{},t),l=e.styleParser?qV(t):[];return G({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:di,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var QV=Yn.styles;function LC(t){var e=X.autoReplaceSvg==="nest"?Y0(t,{styleParser:!1}):Y0(t);return~e.extra.classes.indexOf(yC)?Qi("generateLayersText",t,e):Qi("generateSvgReplacementMutation",t,e)}var Ms=new Set;J_.map(function(t){Ms.add("fa-".concat(t))});Object.keys(Cl[tt]).map(Ms.add.bind(Ms));Object.keys(Cl[ht]).map(Ms.add.bind(Ms));Ms=mc(Ms);function Q0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zi)return Promise.resolve();var n=st.documentElement.classList,i=function(h){return n.add("".concat(U0,"-").concat(h))},s=function(h){return n.remove("".concat(U0,"-").concat(h))},r=X.autoFetchSvg?Ms:J_.map(function(u){return"fa-".concat(u)}).concat(Object.keys(QV));r.includes("fa")||r.push("fa");var o=[".".concat(yC,":not([").concat(Rr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Rr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=oa(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=ry.begin("onTree"),c=a.reduce(function(u,h){try{var d=LC(h);d&&u.push(d)}catch(f){_C||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(d){MC(d,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),h(d)})})}function XV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;LC(t).then(function(n){n&&MC([n],e)})}function JV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:wg(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:wg(s||{})),t(i,G(G({},n),{},{mask:s}))}}var ZV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?di:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,d=h===void 0?null:h,f=n.titleId,p=f===void 0?null:f,g=n.classes,m=g===void 0?[]:g,_=n.attributes,y=_===void 0?{}:_,b=n.styles,T=b===void 0?{}:b;if(e){var I=e.prefix,D=e.iconName,C=e.icon;return Yd(G({type:"icon"},e),function(){return Dr("beforeDOMElementCreation",{iconDefinition:e,params:n}),X.autoA11y&&(d?y["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(p||Dl()):(y["aria-hidden"]="true",y.focusable="false")),sy({icons:{main:Eg(C),mask:l?Eg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:D,transform:G(G({},di),s),symbol:o,title:d,maskId:u,titleId:p,extra:{attributes:y,styles:T,classes:m}})})}},eB={mixout:function(){return{icon:JV(ZV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Q0,n.nodeCallback=XV,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?st:i,r=n.callback,o=r===void 0?function(){}:r;return Q0(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,d=i.extra;return new Promise(function(f,p){Promise.all([Tg(s,a),u.iconName?Tg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=G_(g,2),_=m[0],y=m[1];f([n,sy({icons:{main:_,mask:y},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=qd(a);l.length>0&&(s.style=l);var c;return ey(o)&&(c=Qi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},tB={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return Yd({type:"layer"},function(){Dr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(X.cssPrefix,"-layers")].concat(mc(r)).join(" ")},children:o}]})}}}},nB={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Yd({type:"counter",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:i}),NV({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(X.cssPrefix,"-layers-counter")].concat(mc(a))}})})}}}},iB={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?di:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,d=i.styles,f=d===void 0?{}:d;return Yd({type:"text",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:i}),H0({content:n,transform:G(G({},di),r),title:a,extra:{attributes:h,styles:f,classes:["".concat(X.cssPrefix,"-layers-text")].concat(mc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(pC){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return X.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,H0({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},sB=new RegExp('"',"ug"),X0=[1105920,1112319];function rB(t){var e=t.replace(sB,""),n=yV(e,0),i=n>=X0[0]&&n<=X0[1],s=e.length===2?e[0]===e[1]:!1;return{value:yg(s?e[0]:e),isSecondary:i||s}}function J0(t,e){var n="".concat(KU).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=oa(t.children),o=r.filter(function(C){return C.getAttribute(_g)===e})[0],a=Os.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(JU),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ht:tt,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kl[d][l[2].toLowerCase()]:ZU[d][c],p=rB(h),g=p.value,m=p.isSecondary,_=l[0].startsWith("FontAwesome"),y=ny(f,g),b=y;if(_){var T=xV(g);T.iconName&&T.prefix&&(y=T.iconName,f=T.prefix)}if(y&&!m&&(!o||o.getAttribute(Q_)!==f||o.getAttribute(X_)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var I=YV(),D=I.extra;D.attributes[_g]=e,Tg(y,f).then(function(C){var S=sy(G(G({},I),{},{icons:{main:C,mask:iy()},prefix:f,iconName:b,extra:D,watchable:!0})),$=st.createElement("svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=S.map(function(ee){return yc(ee)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function oB(t){return Promise.all([J0(t,"::before"),J0(t,"::after")])}function aB(t){return t.parentNode!==document.head&&!~YU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_g)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Z0(t){if(Zi)return new Promise(function(e,n){var i=oa(t.querySelectorAll("*")).filter(aB).map(oB),s=ry.begin("searchPseudoElements");NC(),Promise.all(i).then(function(){s(),xg(),e()}).catch(function(){s(),xg(),n()})})}var lB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Z0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?st:i;X.searchPseudoElements&&Z0(s)}}},e1=!1,cB={mixout:function(){return{dom:{unwatch:function(){NC(),e1=!0}}}},hooks:function(){return{bootstrap:function(){G0(bg("mutationObserverCallbacks",{}))},noAuto:function(){WV()},watch:function(n){var i=n.observeMutationsRoot;e1?xg():G0(bg("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},t1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},uB={mixout:function(){return{parse:{transform:function(n){return t1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=t1(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:G({},f.outer),children:[{tag:"g",attributes:G({},f.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:G(G({},i.icon.attributes),f.path)}]}]}}}},Hf={x:0,y:0,width:"100%",height:"100%"};function n1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hB(t){return t.tag==="g"?t.children:[t]}var dB={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Gd(s.split(" ").map(function(o){return o.trim()})):iy();return r.prefix||(r.prefix=Ps()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,d=o.icon,f=uV({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:G(G({},Hf),{},{fill:"white"})},g=u.children?{children:u.children.map(n1)}:{},m={tag:"g",attributes:G({},f.inner),children:[n1(G({tag:u.tag,attributes:G(G({},u.attributes),f.path)},g))]},_={tag:"g",attributes:G({},f.outer),children:[m]},y="mask-".concat(a||Dl()),b="clip-".concat(a||Dl()),T={tag:"mask",attributes:G(G({},Hf),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:hB(d)},T]};return i.push(I,{tag:"rect",attributes:G({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},Hf)}),{children:i,attributes:s}}}},fB={provides:function(e){var n=!1;Os.matchMedia&&(n=Os.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:G(G({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=G(G({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:G(G({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:G(G({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:G(G({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:G(G({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:G(G({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:G(G({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:G(G({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},pB={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},gB=[fV,eB,tB,nB,iB,lB,cB,uB,dB,fB,pB];kV(gB,{mixoutsTo:Rn});Rn.noAuto;var FC=Rn.config,vn=Rn.library;Rn.dom;var kh=Rn.parse;Rn.findIconDefinition;Rn.toHtml;var mB=Rn.icon;Rn.layer;var _B=Rn.text;Rn.counter;function i1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Wn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i1(Object(n),!0).forEach(function(i){un(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ah(t){return Ah=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ah(t)}function un(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yB(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function vB(t,e){if(t==null)return{};var n=yB(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Sg(t){return bB(t)||wB(t)||EB(t)||TB()}function bB(t){if(Array.isArray(t))return Cg(t)}function wB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EB(t,e){if(t){if(typeof t=="string")return Cg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cg(t,e)}}function Cg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function TB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var IB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},UC={exports:{}};(function(t){(function(e){var n=function(_,y,b){if(!c(y)||h(y)||d(y)||f(y)||l(y))return y;var T,I=0,D=0;if(u(y))for(T=[],D=y.length;I<D;I++)T.push(n(_,y[I],b));else{T={};for(var C in y)Object.prototype.hasOwnProperty.call(y,C)&&(T[_(C,b)]=n(_,y[C],b))}return T},i=function(_,y){y=y||{};var b=y.separator||"_",T=y.split||/(?=[A-Z])/;return _.split(T).join(b)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,b){return b?b.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var y=s(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return i(_,y).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},d=function(_){return a.call(_)=="[object RegExp]"},f=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,y){var b=y&&"process"in y?y.process:y;return typeof b!="function"?_:function(T,I){return b(T,_,I)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,y){return n(g(s,y),_)},decamelizeKeys:function(_,y){return n(g(o,y),_,y)},pascalizeKeys:function(_,y){return n(g(r,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(IB)})(UC);var xB=UC.exports,SB=["class","style"];function CB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=xB.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function kB(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ay(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return ay(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=kB(u);break;case"style":l.style=CB(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=vB(n,SB);return Go(t.tag,Wn(Wn(Wn({},e),{},{class:s.class,style:Wn(Wn({},s.style),o)},s.attrs),a),i)}var VC=!1;try{VC=!0}catch{}function AB(){if(!VC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ga(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?un({},t,e):{}}function RB(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},un(e,"fa-".concat(t.size),t.size!==null),un(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),un(e,"fa-pull-".concat(t.pull),t.pull!==null),un(e,"fa-swap-opacity",t.swapOpacity),un(e,"fa-bounce",t.bounce),un(e,"fa-shake",t.shake),un(e,"fa-beat",t.beat),un(e,"fa-fade",t.fade),un(e,"fa-beat-fade",t.beatFade),un(e,"fa-flash",t.flash),un(e,"fa-spin-pulse",t.spinPulse),un(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function s1(t){if(t&&Ah(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kh.icon)return kh.icon(t);if(t===null)return null;if(Ah(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var BC=Nr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=xe(function(){return s1(e.icon)}),r=xe(function(){return Ga("classes",RB(e))}),o=xe(function(){return Ga("transform",typeof e.transform=="string"?kh.transform(e.transform):e.transform)}),a=xe(function(){return Ga("mask",s1(e.mask))}),l=xe(function(){return mB(s.value,Wn(Wn(Wn(Wn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ys(l,function(u){if(!u)return AB("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=xe(function(){return l.value?ay(l.value.abstract[0],{},i):null});return function(){return c.value}}});Nr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,s=FC.familyPrefix,r=xe(function(){return["".concat(s,"-layers")].concat(Sg(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Go("div",{class:r.value},i.default?i.default():[])}}});Nr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,s=FC.familyPrefix,r=xe(function(){return Ga("classes",[].concat(Sg(e.counter?["".concat(s,"-layers-counter")]:[]),Sg(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=xe(function(){return Ga("transform",typeof e.transform=="string"?kh.transform(e.transform):e.transform)}),a=xe(function(){var c=_B(e.value.toString(),Wn(Wn({},o.value),r.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=xe(function(){return ay(a.value,{},i)});return function(){return l.value}}});const bn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},DB={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return(n,i)=>(P(),L("div",{class:Is(["flag",{inverted:e.inverted}]),style:Ho({backgroundColor:e.color})},[Ue(E(BC),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},$C=bn(DB,[["__scopeId","data-v-6db28dbb"]]),es=am("board",()=>{const t=Ge(""),e=Ge(""),n=Ge("");function i(o){t.value=o}function s(o){e.value=o}function r(o){n.value=o}return{selectedTile:t,setSelectedTile:i,boardUUID:e,setBoardUUID:s,rules:n,setRules:r}});const OB=["src"],PB={class:"boardTileFlags"},MB={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1},isEditor:{type:Boolean,required:!1}},setup(t){const e=t,n=es(),i=s=>{n.setSelectedTile(s)};return(s,r)=>{var o,a,l,c,u,h;return P(),L("div",{class:Is(["tile",{isSelected:E(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:e.teamData&&((o=e.teamData)!=null&&o.collected.hasOwnProperty(e.tileData.id))?1:0,isVerify:(l=(a=e.teamData)==null?void 0:a.verify)==null?void 0:l.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData,hidden:(e==null?void 0:e.isEditor)==!1&&(((c=e.tileData)==null?void 0:c.hidden)==!0||((u=e.tileData)==null?void 0:u.type)=="null")}]),onClick:r[0]||(r[0]=d=>i({id:e.tileData.id,...e.tileData}))},[e.tileData.type!="null"?(P(),L("img",{key:0,src:e.teamData&&e.tileData.altImg&&((h=e.teamData)!=null&&h.collected.hasOwnProperty(e.tileData.id))?e.tileData.altImg:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,OB)):ke("",!0),A("div",PB,[e.groupsData?(P(!0),L(be,{key:0},on(e.groupsData,d=>(P(),_n($C,{key:"tile-flag-"+d.name+"-"+e.tileData.id,class:Is(["tileFlag","flag-end-"+d.flagEnd]),icon:d.icon,color:"none",inverted:!0,style:Ho({opacity:(d==null?void 0:d.collected)!=null&&(d!=null&&d.collected.hasOwnProperty(e.tileData.id))?1:0})},null,8,["class","icon","style"]))),128)):ke("",!0)])],2)}}},zC=bn(MB,[["__scopeId","data-v-b972b27d"]]);const NB={key:0,class:"bingo-board"},LB={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all",collected:{}})},tilesData:{type:Object,required:!0,default:()=>{}},isEditor:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;pE(s=>({"64aaa7a8":e.boardData.settings.width,"644840fe":e.boardData.settings.height}));const n=es(),i=lD(n.selectedTile);return(s,r)=>e.boardData?(P(),L("main",NB,[(P(!0),L(be,null,on(e.tilesData,o=>(P(),_n(zC,{key:"board-tile-"+o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:E(i)==o.id,isEditor:e.isEditor},null,8,["tileData","groupsData","teamData","selected","isEditor"]))),128))])):ke("",!0)}},ly=bn(LB,[["__scopeId","data-v-87e12eab"]]);const Qd=t=>(Ls("data-v-2257b54e"),t=t(),Fs(),t),FB={key:0},UB=Qd(()=>A("br",null,null,-1)),VB={class:"tooltiptext"},BB=Qd(()=>A("br",null,null,-1)),$B=Qd(()=>A("br",null,null,-1)),zB=Qd(()=>A("br",null,null,-1)),jB={key:0,class:"rules"},HB={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t,n=es(),i=n.boardUUID;return(s,r)=>{const o=Cs("router-link");return P(),L("div",null,[e.groupsData?(P(),L("ul",FB,[(P(!0),L(be,null,on(e.groupsData,(a,l)=>(P(),L("li",{key:l+a.id,class:"tooltip"},[Ue($C,{color:a.color,class:Is(["tileFlag","flag-end-"+a.flagEnd]),inverted:a.name=="Ahka's Cum Balls",icon:a.icon,style:Ho({"--groupColor":a.color,"--width":a.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),Ie(" "+pe(a.name),1),UB,A("span",VB,[(P(!0),L(be,null,on(a.member,c=>(P(),L("span",{key:c},[Ie(pe(c),1),BB]))),128))]),Ie(" score: "+pe(a.points),1),$B,zB]))),128)),A("li",null,[Ue(o,{class:"btn",to:{name:"stats-graph",params:{boardUUID:E(i)}}},{default:Qh(()=>[Ie("Go To Graph")]),_:1},8,["to"])]),E(n).rules!=null?(P(),L("li",jB,pe(E(n).rules),1)):ke("",!0)])):ke("",!0)])}}},WB=bn(HB,[["__scopeId","data-v-2257b54e"]]);const qB={key:0},KB={key:1,class:"items"},GB={__name:"sidePannel",setup(t){const e=es();return(n,i)=>(P(),L(be,null,[(P(),_n(zC,{tileData:E(e).selectedTile,key:"side-pannel-tile-"+E(e).selectedTile},null,8,["tileData"])),A("h2",null,pe(E(e).selectedTile.id.split("")[0])+", "+pe(E(e).selectedTile.id.split("")[1]),1),A("h1",null,pe(E(e).selectedTile.title),1),E(e).selectedTile.description?(P(),L("p",qB,pe(E(e).selectedTile.description),1)):ke("",!0),E(e).selectedTile.items?(P(),L("p",KB,[Ie(" ellegible items: "),(P(!0),L(be,null,on(E(e).selectedTile.items,(s,r)=>(P(),L(be,null,[Ie(pe(s.item)+" : "+pe(s.count)+pe(r!==E(e).selectedTile.items.length-1?",":""),1)],64))),256))])):ke("",!0)],64))}},YB=bn(GB,[["__scopeId","data-v-2749e8a0"]]),Hr=am("userStateStore",()=>{const t=Ge({loggedIn:!1,data:{uid:0}});function e({loggedIn:n,data:i}){t.value={loggedIn:n,data:i}}return{user:t,setUser:e}});const QB=t=>(Ls("data-v-f64ab3da"),t=t(),Fs(),t),XB={class:"container"},JB=["onClick"],ZB={class:"main-section"},e8={key:1},t8={style:{"justify-content":"end",display:"flex"}},n8=QB(()=>A("section",null,null,-1)),i8={key:3},s8={__name:"BoardView",setup(t){var m;const e=new In,n=Kl(),i=Ge("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),s=es(),r=Hr();let o=Ge(r.user);const a=jr(),l=zs();s.setBoardUUID(a.params.boardUUID),s.setSelectedTile("");const c=s.boardUUID,u=Ge(!1),{data:h}=wt(Vn(ve,"Boards",c,"Groups")),d=wt($e(ve,"Boards",c));s.setRules((m=d.value)==null?void 0:m.rules);const f=xe(()=>{var y;let _={};return h&&((y=h==null?void 0:h.value)==null||y.forEach(async b=>{_[b.id]={...b}})),_||{}}),{data:p}=wt(Vn(ve,`Boards/${c}/Tiles`)),g=()=>{ql(n,e).then(_=>{r.setUser({loggedIn:!0,data:_.user}),l.push({name:"overview",params:{boardUUID:c}})}).catch(_=>{const y=_.code,b=_.message;console.error(y,b)})};return(_,y)=>(P(),L("div",XB,[E(r).user&&E(r).user.data.uid!=0?(P(),L("button",{key:0,class:"btn dashboard",onClick:y[0]||(y[0]=Fe(b=>E(l).push({name:"boardOverview"}),["prevent"]))}," To Dashboard ")):(P(),L("button",{key:1,class:"btn dashboard",onClick:Fe(g,["prevent"])},"login",8,JB)),E(d)&&E(p)&&(E(d).settings.public||E(o).data.uid==E(d).ownerID||E(o).data.uid==i.value)?(P(),L(be,{key:2},[A("section",null,[A("h1",null,pe(E(d).name),1)]),A("section",ZB,[u.value?(P(),L(be,{key:0},[E(f)?(P(),_n(WB,{key:0,class:"scoreCard",groupsData:E(f)},null,8,["groupsData"])):ke("",!0)],64)):ke("",!0),A("button",{class:"btn info",onClick:y[1]||(y[1]=()=>{u.value=!u.value})}," i "),(P(),_n(ly,{boardData:E(d),groupsData:E(f),tilesData:E(p),key:"bingo-board-"+E(s).boardUUID},null,8,["boardData","groupsData","tilesData"])),E(s).selectedTile!=""?(P(),L("aside",e8,[A("div",t8,[A("button",{class:"btn close",onClick:y[2]||(y[2]=()=>{E(s).setSelectedTile("")})}," ╳ ")]),E(s).selectedTile!=""?(P(),_n(YB,{key:0})):ke("",!0)])):ke("",!0)]),n8],64)):(P(),L("h1",i8,"Not authenticated"))]))}},r8=bn(s8,[["__scopeId","data-v-f64ab3da"]]);const o8=t=>(Ls("data-v-409f2e33"),t=t(),Fs(),t),a8=["for"],l8=o8(()=>A("br",null,null,-1)),c8=["id","checked","onClick"],u8={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.tileData),i=({tile:s,group:r})=>{if(Object.hasOwn(r.collected,s.id)){let o={...r.collected};delete o[s.id],sn($e(ve,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),sn($e(ve,"Boards",e.boardUUID,"Groups",r.id),{points:r.points-s.points})}else{let o={...r.collected};o[s.id]=new Date,sn($e(ve,"Boards",e.boardUUID,"Groups",r.id),{collected:o}),sn($e(ve,"Boards",e.boardUUID,"Groups",r.id),{points:r.points+s.points}),Object.hasOwn(r.verify,s.id)&&sn($e(ve,"Boards",e.boardUUID,"Groups",r.id),{verify:r.verify.filter(a=>a!=s.id)})}};return(s,r)=>e.tileData?(P(),L("div",{key:e.tileData.id},[A("h2",null,"{ "+pe(e.tileData.id.split("")[0])+" , "+pe(e.tileData.id.split("")[1])+" }",1),A("ul",null,[(P(!0),L(be,null,on(e.groupsData,o=>(P(),L("li",{key:o.id+E(n).id,class:Is({checkThis:o.verify.hasOwnProperty(e.tileData.id)})},[A("label",{for:o.id+E(n).id},[Ie(pe(o.name)+" : "+pe(o.verify.hasOwnProperty(e.tileData.id)),1),l8,Ie(" collected: "),(P(),L("input",{id:o.id+E(n).id,type:"checkbox",class:"toggle",key:o.id+E(n).id,checked:o.collected.hasOwnProperty(e.tileData.id),onClick:Fe(a=>i({tile:E(n),group:o}),["prevent"])},null,8,c8))],8,a8)],2))),128))])])):ke("",!0)}},h8=bn(u8,[["__scopeId","data-v-409f2e33"]]);const d8={class:"container"},f8=["onClick"],p8={key:2},g8={key:3},m8={__name:"ModeratorView",setup(t){const e=es(),n=Hr(),i=new In,s=Kl(),r=Ge("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),o=jr(),a=zs(),l=xe(()=>o.params.boardUUID),{data:c}=wt(Vn(ve,"Boards",l.value,"Groups")),u=wt($e(ve,"Boards",l.value)),h=xe(()=>{var g;let p={};return c&&((g=c==null?void 0:c.value)==null||g.forEach(m=>{m.name!="moderator"&&(p[m.id]={id:m.id,name:m.name,member:m.members,icon:m.icon,color:m.color,points:m.points,flagEnd:m.flagEnd,collected:m.collected,verify:m.verify})})),p||{}}),{data:d}=wt(Vn(ve,`Boards/${l.value}/Tiles`)),f=()=>{ql(s,i).then(p=>{n.setUser({loggedIn:!0,data:p.user}),a.push({name:"moderator",params:l})}).catch(p=>{const g=p.code,m=p.message;console.error(g,m)})};return(p,g)=>(P(),L("div",d8,[E(n).user&&E(n).user.data.uid!=0?(P(),L("button",{key:0,class:"btn dashboard",onClick:g[0]||(g[0]=Fe(m=>E(a).push({name:"boardOverview"}),["prevent"]))}," To Dashboard ")):(P(),L("button",{key:1,class:"btn dashboard",onClick:Fe(f,["prevent"])},"login",8,f8)),A("section",null,[A("h1",null,pe(E(u).name),1)]),E(n).user&&E(n).user.data.uid!=0&&(E(n).user.data.uid==E(u).ownerID||E(n).user.data.uid==r.value||E(u).moderators.includes(E(n).user.data.uid)||E(u).editors.includes(E(n).user.data.uid))?(P(),L("section",p8,[Ue(ly,{boardData:E(u),groupsData:E(h),tilesData:E(d)},null,8,["boardData","groupsData","tilesData"]),A("aside",null,[(P(),_n(h8,{tileData:E(e).selectedTile,key:E(e).selectedTile.id,boardUUID:E(l),groupsData:E(h),boardData:E(u)},null,8,["tileData","boardUUID","groupsData","boardData"]))])])):(P(),L("section",g8,"please log in or return to the [board]"))]))}},_8=bn(m8,[["__scopeId","data-v-bfeca2ba"]]),y8=["onSubmit"],v8=["disabled"],b8={__name:"HomeView",setup(t){const e=jr(),n=zs(),i=Ge(""),s=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(r,o)=>(P(),L(be,null,[A("form",{onSubmit:Fe(s,["prevent"])},[Ie(" Enter your bingo key: "),zn(A("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[Pi,i.value]]),A("button",{class:"btn",disabled:i.value==""},"Open Board",8,v8)],40,y8),(P(),_n(E(lC),{key:E(e).fullPath}))],64))}};const w8={class:"tile"},E8={__name:"emptyTile",props:{tile:{type:Object}},setup(t){const e=t;return(n,i)=>(P(),L("div",w8,pe(e.tile.coordinates),1))}},T8=bn(E8,[["__scopeId","data-v-7a1ae405"]]),I8=am("boardCreate",()=>{const t=Ge({});function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const jC=t=>(Ls("data-v-a6ba4400"),t=t(),Fs(),t),x8=["onKeydown"],S8={class:"pen"},C8=jC(()=>A("br",null,null,-1)),k8=jC(()=>A("br",null,null,-1)),A8={key:0,class:"bingo-board"},R8=["onClick"],D8={key:1},O8={key:2},P8={__name:"newBoard",setup(t){pE(d=>({"46d3cead":s.value.settings.width,"79d70d20":s.value.settings.height}));const e=I8(),n=Hr(),i=zs(),s=Ge({name:"<name of bingo board>",settings:{width:2,height:2,public:!1}}),r=n.user,o=wt($e(ve,"Users",`${r.data.uid}`)),a=Ge(null),l=()=>{a.value.focus()},c=d=>{d.target.blur(),a.value.innerText.trim()==""?(s.value.name="Enter title here",a.value.innerText="Enter title here"):s.value.name=a.value.innerText.trim()},u=xe(()=>{let d=[];for(let f=0;f<=parseInt(s.value.settings.width)*s.value.settings.height-1;f++){let p=(Math.floor(f/parseInt(s.value.settings.width))+1)*10+(f%parseInt(s.value.settings.width)+1);d.push({title:"<title of tile>",points:0,type:"drop",hidden:"false",description:"description",coordinates:p,img:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"})}return d}),h=async()=>{const d=$e(Vn(ve,"Boards")),f=$e(Vn(ve,"Boards",d.id,"Groups"));await ro(d,{...s.value,ownerID:r.data.uid}).then(()=>{u.value.forEach(p=>{ro($e(ve,"Boards",d.id,"Tiles",`${p.coordinates}`),{...p})})}).then(()=>{ro($e(ve,f.path),{name:"all",collected:{},verify:{},icon:"frog"}),ro($e(ve,"Users",`${r.data.uid}`),{count:o.value.count+1}),e.setSelectedTile(""),i.push({name:"editBoard",params:{boardUUID:d.id}})})};return(d,f)=>{var g,m;const p=Cs("font-awesome-icon");return P(),L(be,null,[E(r).loggedIn&&E(r).data.uid!=0&&((g=E(o))==null?void 0:g.count)<5?(P(),L(be,{key:0},[A("h1",{class:"title-wrap",onClick:f[0]||(f[0]=Fe(_=>l(),["prevent"]))},[A("span",{class:"board-title",ref_key:"titleElement",ref:a,contenteditable:"",spellcheck:"false",onKeydown:sr(c,["enter"]),onBlur:c},pe(s.value.name),41,x8),A("span",S8,[Ue(p,{icon:["fas","pen"]})])]),A("div",null,[Ie(" name: width: "),zn(A("input",{min:"2",max:"9",name:"width",type:"range","onUpdate:modelValue":f[1]||(f[1]=_=>s.value.settings.width=_)},null,512),[[Pi,s.value.settings.width]]),Ie(pe(s.value.settings.width),1),C8,Ie(" height: "),zn(A("input",{min:"2",max:"9",name:"height",type:"range","onUpdate:modelValue":f[2]||(f[2]=_=>s.value.settings.height=_)},null,512),[[Pi,s.value.settings.height]]),Ie(pe(s.value.settings.height),1),k8,Ie(" total tiles: "+pe(s.value.settings.width*s.value.settings.height),1)]),E(u)?(P(),L("main",A8,[(P(!0),L(be,null,on(E(u),_=>(P(),_n(T8,{key:_.coordinates,tile:_},null,8,["tile"]))),128))])):ke("",!0),A("button",{class:"btn",onClick:Fe(h,["prevent"])},"Save Settings",8,R8)],64)):ke("",!0),E(r).loggedIn?ke("",!0):(P(),L("h1",D8,"not authenticated")),((m=E(o))==null?void 0:m.count)>=5?(P(),L("h1",O8,"You've exceded the 5 board limit")):ke("",!0)],64)}}},M8=bn(P8,[["__scopeId","data-v-a6ba4400"]]);const vc=t=>(Ls("data-v-add735f6"),t=t(),Fs(),t),N8=vc(()=>A("h2",null,"User:",-1)),L8=vc(()=>A("br",null,null,-1)),F8={class:"UID"},U8=vc(()=>A("br",null,null,-1)),V8=vc(()=>A("h2",null,"your boards:",-1)),B8={key:0},$8={class:"iconSpan"},z8=vc(()=>A("br",null,null,-1)),j8=["checked","onClick"],H8={key:1},W8={key:2},q8={class:"iconSpan"},K8={key:3},G8={key:4},Y8={class:"iconSpan"},Q8={key:2},X8={__name:"BoardList",setup(t){const e=Hr(),n=Ge("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),i=wt($e(ve,"Users",`${e.user.data.uid}`)),s=Vn(ve,"Boards"),r=xe(()=>{let f="==";return e.user.data.uid==n.value&&(f="!="),f}),o=xe(()=>{let f="==";return e.user.data.uid==n.value?f="0":f=e.user.data.uid,f}),a=wt(Pf(s,Mf("ownerID",r.value,o.value))),l=wt(Pf(s,Mf("moderators","array-contains",e.user.data.uid))),c=wt(Pf(s,Mf("editors","array-contains",e.user.data.uid))),u=zs(),h=(f,p)=>{u.push({name:f,params:{boardUUID:p}})},d=f=>{let p={...f};p.settings.public=!f.settings.public,sn($e(ve,"Boards",f.id),p)};return e.user.loggedIn||u.push({name:"loginView"}),(f,p)=>{var _;const g=Cs("font-awesome-icon"),m=Cs("router-link");return P(),L(be,null,[E(e).user.loggedIn?ke("",!0):(P(),L("button",{key:0,class:"btn dashboard",onClick:p[0]||(p[0]=Fe((...y)=>f.popupLogin&&f.popupLogin(...y),["prevent"]))}," login ")),E(e).user&&E(e).user.data.uid!="0"?(P(),L(be,{key:1},[N8,Ie(" Total boards: "+pe((_=E(i))!=null&&_.count?E(i).count:0),1),L8,Ie(" user ID: "),A("span",F8,pe(E(e).user.data.uid),1),U8,Ie(" share your user ID with people to have them add you as moderator / editor. "),V8,E(a)?(P(),L("ul",B8,[(P(!0),L(be,null,on(E(a),y=>(P(),L("li",{key:y},[A("span",null,pe(y.name),1),A("span",$8,[Ue(g,{onClick:b=>h("editBoard",y.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Ue(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Ue(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"]),z8,Ie(" Public: "),A("input",{class:"toggle",type:"checkbox",checked:y.settings.public,onClick:Fe(b=>d(y),["prevent"])},null,8,j8)])]))),128)),!E(i)||E(i).count<5?(P(),_n(m,{key:0,to:{name:"newBoard"},class:"btn"},{default:Qh(()=>[Ie("+ create board")]),_:1})):ke("",!0)])):ke("",!0),E(c)?(P(),L("h2",H8,"boards you can edit:")):ke("",!0),E(c)?(P(),L("ul",W8,[(P(!0),L(be,null,on(E(c),y=>(P(),L("li",{key:y},[A("span",null,pe(y.name),1),A("span",q8,[Ue(g,{onClick:b=>h("editBoard",y.id),class:"ico",icon:["fas","pen-to-square"]},null,8,["onClick"]),Ue(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Ue(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):ke("",!0),E(l)?(P(),L("h2",K8,"boards you can moderate:")):ke("",!0),E(l)?(P(),L("ul",G8,[(P(!0),L(be,null,on(E(l),y=>(P(),L("li",{key:y},[A("span",null,pe(y.name),1),A("span",Y8,[Ue(g,{onClick:b=>h("overview",y.id),class:"ico",icon:["fas","eye"]},null,8,["onClick"]),Ue(g,{onClick:b=>h("moderator",y.id),class:"ico",icon:["fas","shield"]},null,8,["onClick"])])]))),128))])):ke("",!0)],64)):(P(),L("h1",Q8,"Not Authenticated"))],64)}}},J8=bn(X8,[["__scopeId","data-v-add735f6"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function bc(t){return t+.5|0}const fs=(t,e,n)=>Math.max(Math.min(t,n),e);function Ca(t){return fs(bc(t*2.55),0,255)}function Ts(t){return fs(bc(t*255),0,255)}function Oi(t){return fs(bc(t/2.55)/100,0,1)}function r1(t){return fs(bc(t*100),0,100)}const On={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},kg=[..."0123456789ABCDEF"],Z8=t=>kg[t&15],e$=t=>kg[(t&240)>>4]+kg[t&15],Jc=t=>(t&240)>>4===(t&15),t$=t=>Jc(t.r)&&Jc(t.g)&&Jc(t.b)&&Jc(t.a);function n$(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&On[t[1]]*17,g:255&On[t[2]]*17,b:255&On[t[3]]*17,a:e===5?On[t[4]]*17:255}:(e===7||e===9)&&(n={r:On[t[1]]<<4|On[t[2]],g:On[t[3]]<<4|On[t[4]],b:On[t[5]]<<4|On[t[6]],a:e===9?On[t[7]]<<4|On[t[8]]:255})),n}const i$=(t,e)=>t<255?e(t):"";function s$(t){var e=t$(t)?Z8:e$;return t?"#"+e(t.r)+e(t.g)+e(t.b)+i$(t.a,e):void 0}const r$=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function HC(t,e,n){const i=e*Math.min(n,1-n),s=(r,o=(r+t/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function o$(t,e,n){const i=(s,r=(s+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function a$(t,e,n){const i=HC(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function l$(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function cy(t){const n=t.r/255,i=t.g/255,s=t.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=l$(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function uy(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(Ts)}function hy(t,e,n){return uy(HC,t,e,n)}function c$(t,e,n){return uy(a$,t,e,n)}function u$(t,e,n){return uy(o$,t,e,n)}function WC(t){return(t%360+360)%360}function h$(t){const e=r$.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Ca(+e[5]):Ts(+e[5]));const s=WC(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?i=c$(s,r,o):e[1]==="hsv"?i=u$(s,r,o):i=hy(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function d$(t,e){var n=cy(t);n[0]=WC(n[0]+e),n=hy(n),t.r=n[0],t.g=n[1],t.b=n[2]}function f$(t){if(!t)return;const e=cy(t),n=e[0],i=r1(e[1]),s=r1(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${Oi(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const o1={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},a1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function p$(){const t={},e=Object.keys(a1),n=Object.keys(o1);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,o1[r]);r=parseInt(a1[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Zc;function g$(t){Zc||(Zc=p$(),Zc.transparent=[0,0,0,0]);const e=Zc[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const m$=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function _$(t){const e=m$.exec(t);let n=255,i,s,r;if(e){if(e[7]!==i){const o=+e[7];n=e[8]?Ca(o):fs(o*255,0,255)}return i=+e[1],s=+e[3],r=+e[5],i=255&(e[2]?Ca(i):fs(i,0,255)),s=255&(e[4]?Ca(s):fs(s,0,255)),r=255&(e[6]?Ca(r):fs(r,0,255)),{r:i,g:s,b:r,a:n}}}function y$(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Oi(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Wf=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Xr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function v$(t,e,n){const i=Xr(Oi(t.r)),s=Xr(Oi(t.g)),r=Xr(Oi(t.b));return{r:Ts(Wf(i+n*(Xr(Oi(e.r))-i))),g:Ts(Wf(s+n*(Xr(Oi(e.g))-s))),b:Ts(Wf(r+n*(Xr(Oi(e.b))-r))),a:t.a+n*(e.a-t.a)}}function eu(t,e,n){if(t){let i=cy(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=hy(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function qC(t,e){return t&&Object.assign(e||{},t)}function l1(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Ts(t[3]))):(e=qC(t,{r:0,g:0,b:0,a:1}),e.a=Ts(e.a)),e}function b$(t){return t.charAt(0)==="r"?_$(t):h$(t)}class Ol{constructor(e){if(e instanceof Ol)return e;const n=typeof e;let i;n==="object"?i=l1(e):n==="string"&&(i=n$(e)||g$(e)||b$(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=qC(this._rgb);return e&&(e.a=Oi(e.a)),e}set rgb(e){this._rgb=l1(e)}rgbString(){return this._valid?y$(this._rgb):void 0}hexString(){return this._valid?s$(this._rgb):void 0}hslString(){return this._valid?f$(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,s=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=v$(this._rgb,e._rgb,n)),this}clone(){return new Ol(this.rgb)}alpha(e){return this._rgb.a=Ts(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=bc(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return eu(this._rgb,2,e),this}darken(e){return eu(this._rgb,2,-e),this}saturate(e){return eu(this._rgb,1,e),this}desaturate(e){return eu(this._rgb,1,-e),this}rotate(e){return d$(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Ci(){}const w$=(()=>{let t=0;return()=>t++})();function it(t){return t===null||typeof t>"u"}function ct(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ve(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Ot(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function En(t,e){return Ot(t)?t:e}function Re(t,e){return typeof t>"u"?e:t}const E$=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Qe(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function He(t,e,n,i){let s,r,o;if(ct(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(Ve(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function Rh(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Dh(t){if(ct(t))return t.map(Dh);if(Ve(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=Dh(t[n[s]]);return e}return t}function KC(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function T$(t,e,n,i){if(!KC(t))return;const s=e[t],r=n[t];Ve(s)&&Ve(r)?Pl(s,r,i):e[t]=Dh(r)}function Pl(t,e,n){const i=ct(e)?e:[e],s=i.length;if(!Ve(t))return t;n=n||{};const r=n.merger||T$;let o;for(let a=0;a<s;++a){if(o=i[a],!Ve(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],t,o,n)}return t}function Ya(t,e){return Pl(t,e,{merger:I$})}function I$(t,e,n){if(!KC(t))return;const i=e[t],s=n[t];Ve(i)&&Ve(s)?Ya(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Dh(s))}const c1={"":t=>t,x:t=>t.x,y:t=>t.y};function x$(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function S$(t){const e=x$(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Oh(t,e){return(c1[e]||(c1[e]=S$(e)))(t)}function dy(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ph=t=>typeof t<"u",Ns=t=>typeof t=="function",u1=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function C$(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Ct=Math.PI,Fn=2*Ct,k$=Fn+Ct,Mh=Number.POSITIVE_INFINITY,A$=Ct/180,gn=Ct/2,qs=Ct/4,h1=Ct*2/3,ps=Math.log10,$o=Math.sign;function Qa(t,e,n){return Math.abs(t-e)<n}function d1(t){const e=Math.round(t);t=Qa(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(ps(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function R$(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((s,r)=>s-r).pop(),e}function Ml(t){return!isNaN(parseFloat(t))&&isFinite(t)}function D$(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function GC(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function gs(t){return t*(Ct/180)}function fy(t){return t*(180/Ct)}function f1(t){if(!Ot(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function O$(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*Ct&&(r+=Fn),{angle:r,distance:s}}function Ag(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function P$(t,e){return(t-e+k$)%Fn-Ct}function $n(t){return(t%Fn+Fn)%Fn}function YC(t,e,n,i){const s=$n(t),r=$n(e),o=$n(n),a=$n(r-s),l=$n(o-s),c=$n(s-r),u=$n(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function Mn(t,e,n){return Math.max(e,Math.min(n,t))}function M$(t){return Mn(t,-32768,32767)}function ka(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function py(t,e,n){n=n||(o=>t[o]<e);let i=t.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const dr=(t,e,n,i)=>py(t,n,i?s=>{const r=t[s][e];return r<n||r===n&&t[s+1][e]===n}:s=>t[s][e]<n),N$=(t,e,n)=>py(t,n,i=>t[i][e]>=n);function L$(t,e,n){let i=0,s=t.length;for(;i<s&&t[i]<e;)i++;for(;s>i&&t[s-1]>n;)s--;return i>0||s<t.length?t.slice(i,s):t}const QC=["push","pop","shift","splice","unshift"];function F$(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),QC.forEach(n=>{const i="_onData"+dy(n),s=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return t._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function p1(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);s!==-1&&i.splice(s,1),!(i.length>0)&&(QC.forEach(r=>{delete t[r]}),delete t._chartjs)}function U$(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const XC=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function JC(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,XC.call(window,()=>{i=!1,t.apply(e,n)}))}}function V$(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const gy=t=>t==="start"?"left":t==="end"?"right":"center",zt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,B$=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function $$(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(s=Mn(Math.min(dr(a,o.axis,c).lo,n?i:dr(e,l,o.getPixelForValue(c)).lo),0,i-1)),d?r=Mn(Math.max(dr(a,o.axis,u,!0).hi+1,n?0:dr(e,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function z$(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const tu=t=>t===0||t===1,g1=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Fn/n)),m1=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Fn/n)+1,Xa={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*gn)+1,easeOutSine:t=>Math.sin(t*gn),easeInOutSine:t=>-.5*(Math.cos(Ct*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>tu(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>tu(t)?t:g1(t,.075,.3),easeOutElastic:t=>tu(t)?t:m1(t,.075,.3),easeInOutElastic(t){return tu(t)?t:t<.5?.5*g1(t*2,.1125,.45):.5+.5*m1(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Xa.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Xa.easeInBounce(t*2)*.5:Xa.easeOutBounce(t*2-1)*.5+.5};function my(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function _1(t){return my(t)?t:new Ol(t)}function qf(t){return my(t)?t:new Ol(t).saturate(.5).darken(.1).hexString()}const j$=["x","y","borderWidth","radius","tension"],H$=["color","borderColor","backgroundColor"];function W$(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:H$},numbers:{type:"number",properties:j$}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function q$(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const y1=new Map;function K$(t,e){e=e||{};const n=t+JSON.stringify(e);let i=y1.get(n);return i||(i=new Intl.NumberFormat(t,e),y1.set(n,i)),i}function _y(t,e,n){return K$(e,n).format(t)}const ZC={values(t){return ct(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=G$(t,n)}const o=ps(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),_y(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(ps(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?ZC.numeric.call(this,t,e,n):""}};function G$(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Xd={formatters:ZC};function Y$(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Xd.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Or=Object.create(null),Rg=Object.create(null);function Ja(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];t=t[r]||(t[r]=Object.create(null))}return t}function Kf(t,e,n){return typeof e=="string"?Pl(Ja(t,e),n):Pl(Ja(t,""),e)}class Q${constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>qf(s.backgroundColor),this.hoverBorderColor=(i,s)=>qf(s.borderColor),this.hoverColor=(i,s)=>qf(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Kf(this,e,n)}get(e){return Ja(this,e)}describe(e,n){return Kf(Rg,e,n)}override(e,n){return Kf(Or,e,n)}route(e,n,i,s){const r=Ja(this,e),o=Ja(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return Ve(l)?Object.assign({},c,l):Re(l,c)},set(l){this[a]=l}}})}apply(e){e.forEach(n=>n(this))}}var dt=new Q$({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[W$,q$,Y$]);function X$(t){return!t||it(t.size)||it(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Nh(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function J$(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let l,c,u,h,d;for(l=0;l<a;l++)if(h=n[l],h!=null&&!ct(h))o=Nh(t,s,r,o,h);else if(ct(h))for(c=0,u=h.length;c<u;c++)d=h[c],d!=null&&!ct(d)&&(o=Nh(t,s,r,o,d));t.restore();const f=r.length/2;if(f>n.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function Ks(t,e,n){const i=t.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function v1(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Dg(t,e,n,i){ek(t,e,n,i,null)}function ek(t,e,n,i,s){let r,o,a,l,c,u,h,d;const f=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*A$;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),f){default:s?t.ellipse(n,i,s/2,g,0,0,Fn):t.arc(n,i,g,0,Fn),t.closePath();break;case"triangle":u=s?s/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=h1,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=h1,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(m+qs)*l,h=Math.cos(m+qs)*(s?s/2-c:l),a=Math.sin(m+qs)*l,d=Math.sin(m+qs)*(s?s/2-c:l),t.arc(n-h,i-a,c,m-Ct,m-gn),t.arc(n+d,i-o,c,m-gn,m),t.arc(n+h,i+a,c,m,m+gn),t.arc(n-d,i+o,c,m+gn,m+Ct),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,u=s?s/2:l,t.rect(n-u,i-l,2*u,2*l);break}m+=qs;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+d,i-o),t.lineTo(n+h,i+a),t.lineTo(n-d,i+o),t.closePath();break;case"crossRot":m+=qs;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o),m+=qs,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Ui(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function yy(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function vy(t){t.restore()}function Z$(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if(s==="middle"){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else s==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function ez(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function tz(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),it(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function nz(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function iz(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Pr(t,e,n,i,s,r={}){const o=ct(e)?e:[e],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(t.save(),t.font=s.string,tz(t,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&iz(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),it(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,n,i,r.maxWidth)),t.fillText(c,n,i,r.maxWidth),nz(t,n,i,c,r),i+=Number(s.lineHeight);t.restore()}function Lh(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-gn,Ct,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Ct,gn,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,gn,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-gn,!0),t.lineTo(n+o.topLeft,i)}const sz=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,rz=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function oz(t,e){const n=(""+t).match(sz);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const az=t=>+t||0;function tk(t,e){const n={},i=Ve(e),s=i?Object.keys(e):e,r=Ve(t)?i?o=>Re(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of s)n[o]=az(r(o));return n}function lz(t){return tk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function vo(t){return tk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function tn(t){const e=lz(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Et(t,e){t=t||{},e=e||dt.font;let n=Re(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Re(t.style,e.style);i&&!(""+i).match(rz)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Re(t.family,e.family),lineHeight:oz(Re(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Re(t.weight,e.weight),string:""};return s.string=X$(s),s}function nu(t,e,n,i){let s=!0,r,o,a;for(r=0,o=t.length;r<o;++r)if(a=t[r],a!==void 0&&(e!==void 0&&typeof a=="function"&&(a=a(e),s=!1),n!==void 0&&ct(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function cz(t,e,n){const{min:i,max:s}=t,r=E$(e,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function js(t,e){return Object.assign(Object.create(t),e)}function by(t,e=[""],n,i,s=()=>t[0]){const r=n||t;typeof i>"u"&&(i=rk("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>by([a,...t],e,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete t[0][l],!0},get(a,l){return ik(a,l,()=>_z(l,e,t,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(a,l){return w1(a).includes(l)},ownKeys(a){return w1(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function zo(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:nk(t,i),setContext:r=>zo(t,r,n,i),override:r=>zo(t.override(r),e,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete t[o],!0},get(r,o,a){return ik(r,o,()=>hz(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(r,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(r,o,a){return t[o]=a,delete r[o],!0}})}function nk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:Ns(n)?n:()=>n,isIndexable:Ns(i)?i:()=>i}}const uz=(t,e)=>t?t+dy(e):e,wy=(t,e)=>Ve(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function ik(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const i=n();return t[e]=i,i}function hz(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return Ns(a)&&o.isScriptable(e)&&(a=dz(e,a,t,n)),ct(a)&&a.length&&(a=fz(e,a,t,o.isIndexable)),wy(e,a)&&(a=zo(a,s,r&&r[e],o)),a}function dz(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(r,o||i);return a.delete(t),wy(t,l)&&(l=Ey(s._scopes,s,t,l)),l}function fz(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(t))return e[r.index%e.length];if(Ve(e[0])){const l=e,c=s._scopes.filter(u=>u!==l);e=[];for(const u of l){const h=Ey(c,s,t,u);e.push(zo(h,r,o&&o[t],a))}}return e}function sk(t,e,n){return Ns(t)?t(e,n):t}const pz=(t,e)=>t===!0?e:typeof t=="string"?Oh(e,t):void 0;function gz(t,e,n,i,s){for(const r of e){const o=pz(n,r);if(o){t.add(o);const a=sk(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function Ey(t,e,n,i){const s=e._rootScopes,r=sk(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let l=b1(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=b1(a,o,r,l,i),l===null)?!1:by(Array.from(a),[""],s,r,()=>mz(e,n,i))}function b1(t,e,n,i,s){for(;n;)n=gz(t,e,n,i,s);return n}function mz(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return ct(s)&&Ve(n)?n:s||{}}function _z(t,e,n,i){let s;for(const r of e)if(s=rk(uz(r,t),n),typeof s<"u")return wy(t,s)?Ey(n,i,t,s):s}function rk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function w1(t){let e=t._keys;return e||(e=t._keys=yz(t._scopes)),e}function yz(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))e.add(i);return Array.from(e)}const vz=Number.EPSILON||1e-14,jo=(t,e)=>e<t.length&&!t[e].skip&&t[e],ok=t=>t==="x"?"y":"x";function bz(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Ag(r,s),l=Ag(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,d=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function wz(t,e,n){const i=t.length;let s,r,o,a,l,c=jo(t,0);for(let u=0;u<i-1;++u)if(l=c,c=jo(t,u+1),!(!l||!c)){if(Qa(e[u],0,vz)){n[u]=n[u+1]=0;continue}s=n[u]/e[u],r=n[u+1]/e[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*e[u],n[u+1]=r*o*e[u])}}function Ez(t,e,n="x"){const i=ok(n),s=t.length;let r,o,a,l=jo(t,0);for(let c=0;c<s;++c){if(o=a,a=l,l=jo(t,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*e[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*e[c])}}function Tz(t,e="x"){const n=ok(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=jo(t,0);for(o=0;o<i;++o)if(a=l,l=c,c=jo(t,o+1),!!l){if(c){const u=c[e]-l[e];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?$o(s[o-1])!==$o(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}wz(t,s,r),Ez(t,r,e)}function iu(t,e,n){return Math.max(Math.min(t,n),e)}function Iz(t,e){let n,i,s,r,o,a=Ui(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Ui(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=iu(s.cp1x,e.left,e.right),s.cp1y=iu(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=iu(s.cp2x,e.left,e.right),s.cp2y=iu(s.cp2y,e.top,e.bottom)))}function xz(t,e,n,i,s){let r,o,a,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")Tz(t,s);else{let c=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],l=bz(c,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}e.capBezierPoints&&Iz(t,n)}function ak(){return typeof window<"u"&&typeof document<"u"}function Ty(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Fh(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Jd=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function Sz(t,e){return Jd(t).getPropertyValue(e)}const Cz=["top","right","bottom","left"];function vr(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=Cz[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const kz=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function Az(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(kz(s,r,t.target))a=s,l=r;else{const c=e.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Zs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Jd(n),r=s.boxSizing==="border-box",o=vr(s,"padding"),a=vr(s,"border","width"),{x:l,y:c,box:u}=Az(t,n),h=o.left+(u&&a.left),d=o.top+(u&&a.top);let{width:f,height:p}=e;return r&&(f-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/f*n.width/i),y:Math.round((c-d)/p*n.height/i)}}function Rz(t,e,n){let i,s;if(e===void 0||n===void 0){const r=Ty(t);if(!r)e=t.clientWidth,n=t.clientHeight;else{const o=r.getBoundingClientRect(),a=Jd(r),l=vr(a,"border","width"),c=vr(a,"padding");e=o.width-c.width-l.width,n=o.height-c.height-l.height,i=Fh(a.maxWidth,r,"clientWidth"),s=Fh(a.maxHeight,r,"clientHeight")}}return{width:e,height:n,maxWidth:i||Mh,maxHeight:s||Mh}}const su=t=>Math.round(t*10)/10;function Dz(t,e,n,i){const s=Jd(t),r=vr(s,"margin"),o=Fh(s.maxWidth,t,"clientWidth")||Mh,a=Fh(s.maxHeight,t,"clientHeight")||Mh,l=Rz(t,e,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const d=vr(s,"border","width"),f=vr(s,"padding");c-=f.width+d.width,u-=f.height+d.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=su(Math.min(c,o,l.maxWidth)),u=su(Math.min(u,a,l.maxHeight)),c&&!u&&(u=su(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=su(Math.floor(u*i))),{width:c,height:u}}function E1(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const Oz=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function T1(t,e){const n=Sz(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function er(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function Pz(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function Mz(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=er(t,s,n),a=er(s,r,n),l=er(r,e,n),c=er(o,a,n),u=er(a,l,n);return er(c,u,n)}const Nz=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},Lz=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function bo(t,e,n){return t?Nz(e,n):Lz()}function lk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function ck(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function uk(t){return t==="angle"?{between:YC,compare:P$,normalize:$n}:{between:ka,compare:(e,n)=>e-n,normalize:e=>e}}function I1({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function Fz(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=uk(i),l=e.length;let{start:c,end:u,loop:h}=t,d,f;if(h){for(c+=l,u+=l,d=0,f=l;d<f&&o(a(e[c%l][i]),s,r);++d)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:t.style}}function Uz(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:l,normalize:c}=uk(i),{start:u,end:h,loop:d,style:f}=Fz(t,e,n),p=[];let g=!1,m=null,_,y,b;const T=()=>l(s,b,_)&&a(s,b)!==0,I=()=>a(r,_)===0||l(r,b,_),D=()=>g||T(),C=()=>!g||I();for(let S=u,$=u;S<=h;++S)y=e[S%o],!y.skip&&(_=c(y[i]),_!==b&&(g=l(_,s,r),m===null&&D()&&(m=a(_,s)===0?S:$),m!==null&&C()&&(p.push(I1({start:m,end:S,loop:d,count:o,style:f})),m=null),$=S,b=_));return m!==null&&p.push(I1({start:m,end:h,loop:d,count:o,style:f})),p}function Vz(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=Uz(i[s],t.points,e);r.length&&n.push(...r)}return n}function Bz(t,e,n,i){let s=0,r=e-1;if(n&&!i)for(;s<e&&!t[s].skip;)s++;for(;s<e&&t[s].skip;)s++;for(s%=e,n&&(r+=s);r>s&&t[r%e].skip;)r--;return r%=e,{start:s,end:r}}function $z(t,e,n,i){const s=t.length,r=[];let o=e,a=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:e%s,end:(l-1)%s,loop:i}),e=o=c.stop?l:null):(o=l,a.skip&&(e=l)),a=c}return o!==null&&r.push({start:e%s,end:o%s,loop:i}),r}function zz(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=Bz(n,s,r,i);if(i===!0)return x1(t,[{start:o,end:a,loop:r}],n,e);const l=a<o?a+s:a,c=!!t._fullLoop&&o===0&&a===s-1;return x1(t,$z(n,o,l,c),n,e)}function x1(t,e,n,i){return!i||!i.setContext||!n?e:jz(t,e,n,i)}function jz(t,e,n,i){const s=t._chart.getContext(),r=S1(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,l=n.length,c=[];let u=r,h=e[0].start,d=h;function f(p,g,m,_){const y=a?-1:1;if(p!==g){for(p+=l;n[p%l].skip;)p-=y;for(;n[g%l].skip;)g+=y;p%l!==g%l&&(c.push({start:p%l,end:g%l,loop:m,style:_}),u=_,h=g%l)}}for(const p of e){h=a?h:p.start;let g=n[h%l],m;for(d=h+1;d<=p.end;d++){const _=n[d%l];m=S1(i.setContext(js(s,{type:"segment",p0:g,p1:_,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),Hz(m,u)&&f(h,d-1,p.loop,u),g=_,u=m}h<d-1&&f(h,d-1,p.loop,u)}return c}function S1(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Hz(t,e){if(!e)return!1;const n=[],i=function(s,r){return my(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Wz{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=XC.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,e,"progress")),r.length||(i.running=!1,this._notify(s,i,e,"complete"),i.initial=!1),n+=r.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ai=new Wz;const C1="transparent",qz={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=_1(t||C1),s=i.valid&&_1(e||C1);return s&&s.valid?s.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Kz{constructor(e,n,i,s){const r=n[i];s=nu([e.to,s,r,e.from]);const o=nu([e.from,r,s]);this._active=!0,this._fn=e.fn||qz[e.type||typeof o],this._easing=Xa[e.easing]||Xa.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=nu([e.to,n,s,e.from]),this._from=nu([e.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class hk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Ve(e))return;const n=Object.keys(dt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(s=>{const r=e[s];if(!Ve(r))return;const o={};for(const a of n)o[a]=r[a];(ct(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(e,n){const i=n.options,s=Yz(e,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&Gz(e.options.$animations,i).then(()=>{e.options=i},()=>{}),r}_createAnimations(e,n){const i=this._properties,s=[],r=e.$animations||(e.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(e,n));continue}const u=n[c];let h=r[c];const d=i.get(c);if(h)if(d&&h.active()){h.update(d,u,a);continue}else h.cancel();if(!d||!d.duration){e[c]=u;continue}r[c]=h=new Kz(d,e,c,u),s.push(h)}return s}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ai.add(this._chart,i),!0}}function Gz(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const r=t[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function Yz(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function k1(t,e){const n=t&&t.options||{},i=n.reverse,s=n.min===void 0?e:0,r=n.max===void 0?e:0;return{start:i?r:s,end:i?s:r}}function Qz(t,e,n){if(n===!1)return!1;const i=k1(t,n),s=k1(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Xz(t){let e,n,i,s;return Ve(t)?(e=t.top,n=t.right,i=t.bottom,s=t.left):e=n=i=s=t,{top:e,right:n,bottom:i,left:s,disabled:t===!1}}function dk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function A1(t,e,n,i={}){const s=t.keys,r=i.mode==="single";let o,a,l,c;if(e!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=t.values[l],Ot(c)&&(r||e===0||$o(e)===$o(c))&&(e+=c)}return e}}function Jz(t){const e=Object.keys(t),n=new Array(e.length);let i,s,r;for(i=0,s=e.length;i<s;++i)r=e[i],n[i]={x:r,y:t[r]};return n}function R1(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Zz(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function ej(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function tj(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function D1(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const r=t[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function O1(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=Zz(r,o,i),h=e.length;let d;for(let f=0;f<h;++f){const p=e[f],{[l]:g,[c]:m}=p,_=p._stacks||(p._stacks={});d=_[c]=tj(s,u,g),d[a]=m,d._top=D1(d,o,!0,i.type),d._bottom=D1(d,o,!1,i.type);const y=d._visualValues||(d._visualValues={});y[a]=m}}function Gf(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function nj(t,e){return js(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function ij(t,e,n){return js(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function ga(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const s of e){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Yf=t=>t==="reset"||t==="none",P1=(t,e)=>e?t:Object.assign({},t),sj=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:dk(n,!0),values:null};class Za{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=R1(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ga(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,d,f,p)=>h==="x"?d:h==="r"?p:f,r=n.xAxisID=Re(i.xAxisID,Gf(e,"x")),o=n.yAxisID=Re(i.yAxisID,Gf(e,"y")),a=n.rAxisID=Re(i.rAxisID,Gf(e,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&p1(this._data,this),e._stacked&&ga(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Ve(n))this._data=Jz(n);else if(i!==n){if(i){p1(i,this);const s=this._cachedMeta;ga(s),s._parsed=[]}n&&Object.isExtensible(n)&&F$(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=R1(n.vScale,n),n.stack!==i.stack&&(s=!0,ga(n),n.stack=i.stack),this._resyncElements(e),(s||r!==n._stacked)&&O1(this,n._parsed)}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=e===0&&n===s.length?!0:i._sorted,c=e>0&&i._parsed[e-1],u,h,d;if(this._parsing===!1)i._parsed=s,i._sorted=!0,d=s;else{ct(s[e])?d=this.parseArrayData(i,s,e,n):Ve(s[e])?d=this.parseObjectData(i,s,e,n):d=this.parsePrimitiveData(i,s,e,n);const f=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+e]=h=d[u],l&&(f()&&(l=!1),c=h);i._sorted=l}o&&O1(this,d)}parsePrimitiveData(e,n,i,s){const{iScale:r,vScale:o}=e,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let d,f,p;for(d=0,f=s;d<f;++d)p=d+i,h[d]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(e,n,i,s){const{xScale:r,yScale:o}=e,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(e,n,i,s){const{xScale:r,yScale:o}=e,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,d,f;for(u=0,h=s;u<h;++u)d=u+i,f=n[d],c[u]={x:r.parse(Oh(f,a),d),y:o.parse(Oh(f,l),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const s=this.chart,r=this._cachedMeta,o=n[e.axis],a={keys:dk(s,!0),values:n._stacks[e.axis]._visualValues};return A1(a,o,r.index,{mode:i})}updateRangeFromParsed(e,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=A1(s,r,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&e===i.iScale,o=s.length,a=this._getOtherScale(e),l=sj(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=ej(a);let d,f;function p(){f=s[d];const g=f[a.axis];return!Ot(f[e.axis])||u>g||h<g}for(d=0;d<o&&!(!p()&&(this.updateRangeFromParsed(c,e,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][e.axis],Ot(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(e);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Xz(Re(this.options.clip,Qz(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(e,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(e,r))}for(u=0;u<o.length;++u)o[u].draw(e,r)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const s=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];r=o.$context||(o.$context=ij(this.getContext(),e,o)),r.parsed=this.getParsed(e),r.raw=s.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=nj(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=e+"-"+n,a=r[o],l=this.enableOptionSharing&&Ph(i);if(a)return P1(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,e),h=s?[`${e}Hover`,"hover",e,""]:[e,""],d=c.getOptionScopes(this.getDataset(),u),f=Object.keys(dt.elements[e]),p=()=>this.getContext(i,s,n),g=c.resolveNamedOptions(d,f,p,h);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(P1(g,l))),g}_resolveAnimations(e,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(d,this.getContext(e,i,n))}const c=new hk(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Yf(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(e,n,i,s){Yf(s)?Object.assign(e,i):this._resolveAnimations(n,s).update(e,i)}updateSharedOptions(e,n,i){e&&!Yf(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,s){e.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(e,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,e):r<s&&this._removeElements(r,s-r)}_insertElements(e,n,i=!0){const s=this._cachedMeta,r=s.data,o=e+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=e;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(e,n),i&&this.updateElements(r,e,n,"reset")}updateElements(e,n,i,s){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(e,n);i._stacked&&ga(i,s)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,s]=e;this[n](i,s)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ae(Za,"defaults",{}),ae(Za,"datasetElementType",null),ae(Za,"dataElementType",null);class Au extends Za{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=$$(n,s,o);this._drawStart=a,this._drawCount=l,z$(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},e),this.updateElements(s,a,l,e)}updateElements(e,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),d=o.axis,f=a.axis,{spanGaps:p,segment:g}=this.options,m=Ml(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",y=n+i,b=e.length;let T=n>0&&this.getParsed(n-1);for(let I=0;I<b;++I){const D=e[I],C=_?D:{};if(I<n||I>=y){C.skip=!0;continue}const S=this.getParsed(I),$=it(S[f]),ee=C[d]=o.getPixelForValue(S[d],I),z=C[f]=r||$?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,S,l):S[f],I);C.skip=isNaN(ee)||isNaN(z)||$,C.stop=I>0&&Math.abs(S[d]-T[d])>m,g&&(C.parsed=S,C.raw=c.data[I]),h&&(C.options=u||this.resolveDataElementOptions(I,D.active?"active":s)),_||this.updateElement(D,I,C,s),T=S}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,s=e.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ae(Au,"id","line"),ae(Au,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ae(Au,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Gs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Iy{constructor(e){ae(this,"options");this.options=e||{}}static override(e){Object.assign(Iy.prototype,e)}init(){}formats(){return Gs()}parse(){return Gs()}format(){return Gs()}add(){return Gs()}diff(){return Gs()}startOf(){return Gs()}endOf(){return Gs()}}var rj={_date:Iy};function oj(t,e,n,i){const{controller:s,data:r,_sorted:o}=t,a=s._cachedMeta.iScale;if(a&&e===a.axis&&e!=="r"&&o&&r.length){const l=a._reversePixels?N$:dr;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(e);if(u){const h=l(r,e,n-u),d=l(r,e,n+u);return{lo:h.lo,hi:d.hi}}}}else return l(r,e,n)}return{lo:0,hi:r.length-1}}function wc(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:d}=oj(r[a],e,o,s);for(let f=h;f<=d;++f){const p=u[f];p.skip||i(p,c,f)}}}function aj(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,s){const r=e?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Qf(t,e,n,i,s){const r=[];return!s&&!t.isPointInArea(e)||wc(t,n,e,function(a,l,c){!s&&!Ui(a,t.chartArea,0)||a.inRange(e.x,e.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function lj(t,e,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=O$(o,{x:e.x,y:e.y});YC(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return wc(t,n,e,r),s}function cj(t,e,n,i,s,r){let o=[];const a=aj(n);let l=Number.POSITIVE_INFINITY;function c(u,h,d){const f=u.inRange(e.x,e.y,s);if(i&&!f)return;const p=u.getCenterPoint(s);if(!(!!r||t.isPointInArea(p))&&!f)return;const m=a(e,p);m<l?(o=[{element:u,datasetIndex:h,index:d}],l=m):m===l&&o.push({element:u,datasetIndex:h,index:d})}return wc(t,n,e,c),o}function Xf(t,e,n,i,s,r){return!r&&!t.isPointInArea(e)?[]:n==="r"&&!i?lj(t,e,n,s):cj(t,e,n,i,s,r)}function M1(t,e,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return wc(t,n,e,(l,c,u)=>{l[o](e[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(e.x,e.y,s))}),i&&!a?[]:r}var uj={evaluateInteractionItems:wc,modes:{index(t,e,n,i){const s=Zs(e,t),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Qf(t,s,r,i,o):Xf(t,s,r,!1,i,o),l=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Qf(t,s,r,i,o):Xf(t,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=t.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Qf(t,s,r,i,o)},nearest(t,e,n,i){const s=Zs(e,t),r=n.axis||"xy",o=n.includeInvisible||!1;return Xf(t,s,r,n.intersect,i,o)},x(t,e,n,i){const s=Zs(e,t);return M1(t,s,"x",n.intersect,i)},y(t,e,n,i){const s=Zs(e,t);return M1(t,s,"y",n.intersect,i)}}};const fk=["left","top","right","bottom"];function ma(t,e){return t.filter(n=>n.pos===e)}function N1(t,e){return t.filter(n=>fk.indexOf(n.pos)===-1&&n.box.axis===e)}function _a(t,e){return t.sort((n,i)=>{const s=e?i:n,r=e?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function hj(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function dj(t){const e={};for(const n of t){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!fk.includes(s))continue;const o=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return e}function fj(t,e){const n=dj(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&e.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&e.availableHeight)}return n}function pj(t){const e=hj(t),n=_a(e.filter(c=>c.box.fullSize),!0),i=_a(ma(e,"left"),!0),s=_a(ma(e,"right")),r=_a(ma(e,"top"),!0),o=_a(ma(e,"bottom")),a=N1(e,"x"),l=N1(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:ma(e,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function L1(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function pk(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function gj(t,e,n,i){const{pos:s,box:r}=n,o=t.maxPadding;if(!Ve(s)){n.size&&(t[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,t[s]+=n.size}r.getPadding&&pk(o,r.getPadding());const a=Math.max(0,e.outerWidth-L1(o,t,"left","right")),l=Math.max(0,e.outerHeight-L1(o,t,"top","bottom")),c=a!==t.w,u=l!==t.h;return t.w=a,t.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function mj(t){const e=t.maxPadding;function n(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function _j(t,e){const n=e.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(e[o],n[o])}),r}return i(t?["left","right"]:["top","bottom"])}function Aa(t,e,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=t.length,c=0;r<o;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,_j(a.horizontal,e));const{same:h,other:d}=gj(e,n,a,i);c|=h&&s.length,u=u||d,l.fullSize||s.push(a)}return c&&Aa(s,e,n,i)||u}function ru(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function F1(t,e,n,i){const s=n.padding;let{x:r,y:o}=e;for(const a of t){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=e.w*u,d=c.size||l.height;Ph(c.start)&&(o=c.start),l.fullSize?ru(l,s.left,o,n.outerWidth-s.right-s.left,d):ru(l,e.left+c.placed,o,h,d),c.start=o,c.placed+=h,o=l.bottom}else{const h=e.h*u,d=c.size||l.width;Ph(c.start)&&(r=c.start),l.fullSize?ru(l,r,s.top,d,n.outerHeight-s.bottom-s.top):ru(l,r,e.top+c.placed,d,h),c.start=r,c.placed+=h,r=l.right}}e.x=r,e.y=o}var Nn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const s=tn(t.options.layout.padding),r=Math.max(e-s.width,0),o=Math.max(n-s.height,0),a=pj(t.boxes),l=a.vertical,c=a.horizontal;He(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=l.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),d=Object.assign({},s);pk(d,tn(i));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),p=fj(l.concat(c),h);Aa(a.fullSize,f,h,p),Aa(l,f,h,p),Aa(c,f,h,p)&&Aa(l,f,h,p),mj(f),F1(a.leftAndTop,f,h,p),f.x+=f.w,f.y+=f.h,F1(a.rightAndBottom,f,h,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},He(a.chartArea,g=>{const m=g.box;Object.assign(m,t.chartArea),m.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class gk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,s){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(e){return!0}updateConfig(e){}}class yj extends gk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ru="$chartjs",vj={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},U1=t=>t===null||t==="";function bj(t,e){const n=t.style,i=t.getAttribute("height"),s=t.getAttribute("width");if(t[Ru]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",U1(s)){const r=T1(t,"width");r!==void 0&&(t.width=r)}if(U1(i))if(t.style.height==="")t.height=t.width/(e||2);else{const r=T1(t,"height");r!==void 0&&(t.height=r)}return t}const mk=Oz?{passive:!0}:!1;function wj(t,e,n){t.addEventListener(e,n,mk)}function Ej(t,e,n){t.canvas.removeEventListener(e,n,mk)}function Tj(t,e){const n=vj[t.type]||t.type,{x:i,y:s}=Zs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Uh(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function Ij(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Uh(a.addedNodes,i),o=o&&!Uh(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function xj(t,e,n){const i=t.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Uh(a.removedNodes,i),o=o&&!Uh(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Nl=new Map;let V1=0;function _k(){const t=window.devicePixelRatio;t!==V1&&(V1=t,Nl.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function Sj(t,e){Nl.size||window.addEventListener("resize",_k),Nl.set(t,e)}function Cj(t){Nl.delete(t),Nl.size||window.removeEventListener("resize",_k)}function kj(t,e,n){const i=t.canvas,s=i&&Ty(i);if(!s)return;const r=JC((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),Sj(t,r),o}function Jf(t,e,n){n&&n.disconnect(),e==="resize"&&Cj(t)}function Aj(t,e,n){const i=t.canvas,s=JC(r=>{t.ctx!==null&&n(Tj(r,t))},t);return wj(i,e,s),s}class Rj extends gk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(bj(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Ru])return!1;const i=n[Ru].initial;["height","width"].forEach(r=>{const o=i[r];it(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Ru],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const s=e.$proxies||(e.$proxies={}),o={attach:Ij,detach:xj,resize:kj}[n]||Aj;s[n]=o(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),s=i[n];if(!s)return;({attach:Jf,detach:Jf,resize:Jf}[n]||Ej)(e,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,s){return Dz(e,n,i,s)}isAttached(e){const n=Ty(e);return!!(n&&n.isConnected)}}function Dj(t){return!ak()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?yj:Rj}var du;let Wr=(du=class{constructor(){ae(this,"x");ae(this,"y");ae(this,"active",!1);ae(this,"options");ae(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ml(this.x)&&Ml(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const s={};return e.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},ae(du,"defaults",{}),ae(du,"defaultRoutes"),du);function Oj(t,e){const n=t.options.ticks,i=Pj(t),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?Nj(e):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Lj(e,c,r,o/s),c;const u=Mj(r,e,s);if(o>0){let h,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(ou(e,c,u,it(f)?0:a-f,a),h=0,d=o-1;h<d;h++)ou(e,c,u,r[h],r[h+1]);return ou(e,c,u,l,it(f)?e.length:l+f),c}return ou(e,c,u),c}function Pj(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function Mj(t,e,n){const i=Fj(t),s=e.length/n;if(!i)return Math.max(s,1);const r=R$(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function Nj(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Lj(t,e,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<t.length;o++)o===r&&(e.push(t[o]),s++,r=n[s*i])}function ou(t,e,n,i,s){const r=Re(i,0),o=Math.min(Re(s,t.length),t.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(e.push(t[c]),a++,u=Math.round(r+a*n))}function Fj(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const Uj=t=>t==="left"?"right":t==="right"?"left":t,B1=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,$1=(t,e)=>Math.min(e||t,t);function z1(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function Vj(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let l=t.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function Bj(t,e){He(t,n=>{const i=n.gc,s=i.length/2;let r;if(s>e){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function ya(t){return t.drawTicks?t.tickLength:0}function j1(t,e){if(!t.display)return 0;const n=Et(t.font,e),i=tn(t.padding);return(ct(t.text)?t.text.length:1)*n.lineHeight+i.height}function $j(t,e){return js(t,{scale:e,type:"scale"})}function zj(t,e,n){return js(t,{tick:n,index:e,type:"tick"})}function jj(t,e,n){let i=gy(t);return(n&&e!=="right"||!n&&e==="right")&&(i=Uj(i)),i}function Hj(t,e,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=t,{chartArea:c,scales:u}=l;let h=0,d,f,p;const g=o-s,m=a-r;if(t.isHorizontal()){if(f=zt(i,r,a),Ve(n)){const _=Object.keys(n)[0],y=n[_];p=u[_].getPixelForValue(y)+g-e}else n==="center"?p=(c.bottom+c.top)/2+g-e:p=B1(t,n,e);d=a-r}else{if(Ve(n)){const _=Object.keys(n)[0],y=n[_];f=u[_].getPixelForValue(y)-m+e}else n==="center"?f=(c.left+c.right)/2-m+e:f=B1(t,n,e);p=zt(i,o,s),h=n==="left"?-gn:gn}return{titleX:f,titleY:p,maxWidth:d,rotation:h}}class qr extends Wr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return e=En(e,Number.POSITIVE_INFINITY),n=En(n,Number.NEGATIVE_INFINITY),i=En(i,Number.POSITIVE_INFINITY),s=En(s,Number.NEGATIVE_INFINITY),{min:En(e,i),max:En(n,s),minDefined:Ot(e),maxDefined:Ot(n)}}getMinMax(e){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,e),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:En(n,En(i,n)),max:En(i,En(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Qe(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=cz(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?z1(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Oj(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Qe(this.options.afterUpdate,[this])}beforeSetDimensions(){Qe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Qe(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Qe(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Qe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i],r.label=Qe(n.callback,[r.value,i,e],this)}afterTickToLabelConversion(){Qe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Qe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=$1(this.ticks.length,e.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,d=u.highest.height,f=Mn(this.chart.width-h,0,this.maxWidth);a=e.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(e.offset?.5:1)),l=this.maxHeight-ya(e.grid)-n.padding-j1(e.title,this.chart.options.font),c=Math.sqrt(h*h+d*d),o=fy(Math.min(Math.asin(Mn((u.highest.height+6)/a,-1,1)),Math.asin(Mn(l/c,-1,1))-Math.asin(Mn(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Qe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Qe(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=j1(s,n.options.font);if(a?(e.width=this.maxWidth,e.height=ya(r)+l):(e.height=this.maxHeight,e.width=ya(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:d}=this._getLabelSizes(),f=i.padding*2,p=gs(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*d.height;e.height=Math.min(this.maxHeight,e.height+_+f)}else{const _=i.mirror?0:g*h.width+m*d.height;e.width=Math.min(this.maxWidth,e.width+_+f)}this._calculatePadding(c,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*e.width,f=i*n.height):(d=i*e.height,f=s*n.width):r==="start"?f=n.width:r==="end"?d=e.width:r!=="inner"&&(d=e.width/2,f=n.width/2),this.paddingLeft=Math.max((d-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;r==="start"?(u=0,h=e.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Qe(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)it(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=z1(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/$1(n,i));let c=0,u=0,h,d,f,p,g,m,_,y,b,T,I;for(h=0;h<n;h+=l){if(p=e[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},y=g.lineHeight,b=T=0,!it(p)&&!ct(p))b=Nh(s,_.data,_.gc,b,p),T=y;else if(ct(p))for(d=0,f=p.length;d<f;++d)I=p[d],!it(I)&&!ct(I)&&(b=Nh(s,_.data,_.gc,b,I),T+=y);o.push(b),a.push(T),c=Math.max(b,c),u=Math.max(T,u)}Bj(r,n);const D=o.indexOf(c),C=a.indexOf(u),S=$=>({width:o[$]||0,height:a[$]||0});return{first:S(0),last:S(n-1),widest:S(D),highest:S(C),widths:o,heights:a}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return M$(this._alignToPixels?Ks(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=zj(this.getContext(),e,i))}return this.$context||(this.$context=$j(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=gs(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=e.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),d=ya(r),f=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(_e){return Ks(i,_e,g)};let y,b,T,I,D,C,S,$,ee,z,W,me;if(o==="top")y=_(this.bottom),C=this.bottom-d,$=y-m,z=_(e.top)+m,me=e.bottom;else if(o==="bottom")y=_(this.top),z=e.top,me=_(e.bottom)-m,C=y+m,$=this.top+d;else if(o==="left")y=_(this.right),D=this.right-d,S=y-m,ee=_(e.left)+m,W=e.right;else if(o==="right")y=_(this.left),ee=e.left,W=_(e.right)-m,D=y+m,S=this.left+d;else if(n==="x"){if(o==="center")y=_((e.top+e.bottom)/2+.5);else if(Ve(o)){const _e=Object.keys(o)[0],te=o[_e];y=_(this.chart.scales[_e].getPixelForValue(te))}z=e.top,me=e.bottom,C=y+m,$=C+d}else if(n==="y"){if(o==="center")y=_((e.left+e.right)/2);else if(Ve(o)){const _e=Object.keys(o)[0],te=o[_e];y=_(this.chart.scales[_e].getPixelForValue(te))}D=y-m,S=D-d,ee=e.left,W=e.right}const Ke=Re(s.ticks.maxTicksLimit,h),de=Math.max(1,Math.ceil(h/Ke));for(b=0;b<h;b+=de){const _e=this.getContext(b),te=r.setContext(_e),Ce=a.setContext(_e),Vt=te.lineWidth,ln=te.color,Bt=Ce.dash||[],pt=Ce.dashOffset,Dn=te.tickWidth,ni=te.tickColor,R=te.tickBorderDash||[],H=te.tickBorderDashOffset;T=Vj(this,b,l),T!==void 0&&(I=Ks(i,T,Vt),c?D=S=ee=W=I:C=$=z=me=I,f.push({tx1:D,ty1:C,tx2:S,ty2:$,x1:ee,y1:z,x2:W,y2:me,width:Vt,color:ln,borderDash:Bt,borderDashOffset:pt,tickWidth:Dn,tickColor:ni,tickBorderDash:R,tickBorderDashOffset:H}))}return this._ticksLength=h,this._borderValue=y,f}_computeLabelItems(e){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,d=ya(i.grid),f=d+u,p=h?-u:f,g=-gs(this.labelRotation),m=[];let _,y,b,T,I,D,C,S,$,ee,z,W,me="middle";if(s==="top")D=this.bottom-p,C=this._getXAxisLabelAlignment();else if(s==="bottom")D=this.top+p,C=this._getXAxisLabelAlignment();else if(s==="left"){const de=this._getYAxisLabelAlignment(d);C=de.textAlign,I=de.x}else if(s==="right"){const de=this._getYAxisLabelAlignment(d);C=de.textAlign,I=de.x}else if(n==="x"){if(s==="center")D=(e.top+e.bottom)/2+f;else if(Ve(s)){const de=Object.keys(s)[0],_e=s[de];D=this.chart.scales[de].getPixelForValue(_e)+f}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")I=(e.left+e.right)/2-f;else if(Ve(s)){const de=Object.keys(s)[0],_e=s[de];I=this.chart.scales[de].getPixelForValue(_e)}C=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(l==="start"?me="top":l==="end"&&(me="bottom"));const Ke=this._getLabelSizes();for(_=0,y=a.length;_<y;++_){b=a[_],T=b.label;const de=r.setContext(this.getContext(_));S=this.getPixelForTick(_)+r.labelOffset,$=this._resolveTickFontOptions(_),ee=$.lineHeight,z=ct(T)?T.length:1;const _e=z/2,te=de.color,Ce=de.textStrokeColor,Vt=de.textStrokeWidth;let ln=C;o?(I=S,C==="inner"&&(_===y-1?ln=this.options.reverse?"left":"right":_===0?ln=this.options.reverse?"right":"left":ln="center"),s==="top"?c==="near"||g!==0?W=-z*ee+ee/2:c==="center"?W=-Ke.highest.height/2-_e*ee+ee:W=-Ke.highest.height+ee/2:c==="near"||g!==0?W=ee/2:c==="center"?W=Ke.highest.height/2-_e*ee:W=Ke.highest.height-z*ee,h&&(W*=-1),g!==0&&!de.showLabelBackdrop&&(I+=ee/2*Math.sin(g))):(D=S,W=(1-z)*ee/2);let Bt;if(de.showLabelBackdrop){const pt=tn(de.backdropPadding),Dn=Ke.heights[_],ni=Ke.widths[_];let R=W-pt.top,H=0-pt.left;switch(me){case"middle":R-=Dn/2;break;case"bottom":R-=Dn;break}switch(C){case"center":H-=ni/2;break;case"right":H-=ni;break}Bt={left:H,top:R,width:ni+pt.width,height:Dn+pt.height,color:de.backdropColor}}m.push({label:T,font:$,textOffset:W,options:{rotation:g,color:te,strokeColor:Ce,strokeWidth:Vt,textAlign:ln,textBaseline:me,translation:[I,D],backdrop:Bt}})}return m}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-gs(this.labelRotation))return e==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=e+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,s,r,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===e);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,d;this.isHorizontal()?(c=Ks(e,this.left,o)-o/2,u=Ks(e,this.right,a)+a/2,h=d=l):(h=Ks(e,this.top,o)-o/2,d=Ks(e,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,d),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&yy(i,s);const r=this.getLabelItems(e);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Pr(i,c,0,u,l,a)}s&&vy(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=Et(i.font),o=tn(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||Ve(n)?(l+=o.bottom,ct(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:d}=Hj(this,l,n,a);Pr(e,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:d,textAlign:jj(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Re(e.grid&&e.grid.z,-1),s=Re(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==qr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!e||a.type===e)&&s.push(a)}return s}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Et(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class au{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;Kj(n)&&(i=this.register(n));const s=this.items,r=e.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in s||(s[r]=e,Wj(e,o,i),this.override&&dt.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,s=this.scope;i in n&&delete n[i],s&&i in dt[s]&&(delete dt[s][i],this.override&&delete Or[i])}}function Wj(t,e,n){const i=Pl(Object.create(null),[n?dt.get(n):{},dt.get(e),t.defaults]);dt.set(e,i),t.defaultRoutes&&qj(e,t.defaultRoutes),t.descriptors&&dt.describe(e,t.descriptors)}function qj(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),s=i.pop(),r=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),l=o.join(".");dt.route(r,s,l,a)})}function Kj(t){return"id"in t&&"defaults"in t}class Gj{constructor(){this.controllers=new au(Za,"datasets",!0),this.elements=new au(Wr,"elements"),this.plugins=new au(Object,"plugins"),this.scales=new au(qr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(e,r,s):He(s,o=>{const a=i||this._getRegistryForType(o);this._exec(e,a,o)})})}_exec(e,n,i){const s=dy(e);Qe(i["before"+s],[],i),n[e](i),Qe(i["after"+s],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const s=n.get(e);if(s===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return s}}var oi=new Gj;class Yj{constructor(){this._init=[]}notify(e,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=s?this._descriptors(e).filter(s):this._descriptors(e),o=this._notify(r,e,n,i);return n==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,n,i,s){s=s||{};for(const r of e){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Qe(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){it(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,s=Re(i.options&&i.options.plugins,{}),r=Qj(i);return s===!1&&!n?[]:Jj(e,r,s,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),e,"stop"),this._notify(s(i,n),e,"start")}}function Qj(t){const e={},n=[],i=Object.keys(oi.plugins.items);for(let r=0;r<i.length;r++)n.push(oi.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Xj(t,e){return!e&&t===!1?null:t===!0?{}:t}function Jj(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const l=a.id,c=Xj(i[l],s);c!==null&&r.push({plugin:a,options:Zj(t.config,{plugin:a,local:n[l]},c,o)})}return r}function Zj(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Og(t,e){const n=dt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function eH(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function tH(t,e){return t===e?"_index_":"_value_"}function H1(t){if(t==="x"||t==="y"||t==="r")return t}function nH(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Pg(t,...e){if(H1(t))return t;for(const n of e){const i=n.axis||nH(n.position)||t.length>1&&H1(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function W1(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function iH(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return W1(t,"x",n[0])||W1(t,"y",n[0])}return{}}function sH(t,e){const n=Or[t.type]||{scales:{}},i=e.scales||{},s=Og(t.type,e),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Ve(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Pg(o,a,iH(o,t),dt.scales[a.type]),c=tH(l,s),u=n.scales||{};r[o]=Ya(Object.create(null),[{axis:l},a,u[l],u[c]])}),t.data.datasets.forEach(o=>{const a=o.type||t.type,l=o.indexAxis||Og(a,e),u=(Or[a]||{}).scales||{};Object.keys(u).forEach(h=>{const d=eH(h,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),Ya(r[f],[{axis:d},i[f],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ya(a,[dt.scales[a.type],dt.scale])}),r}function yk(t){const e=t.options||(t.options={});e.plugins=Re(e.plugins,{}),e.scales=sH(t,e)}function vk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function rH(t){return t=t||{},t.data=vk(t.data),yk(t),t}const q1=new Map,bk=new Set;function lu(t,e){let n=q1.get(t);return n||(n=e(),q1.set(t,n),bk.add(n)),n}const va=(t,e,n)=>{const i=Oh(e,n);i!==void 0&&t.add(i)};class oH{constructor(e){this._config=rH(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=vk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),yk(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return lu(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return lu(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return lu(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return lu(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let s=i.get(e);return(!s||n)&&(s=new Map,i.set(e,s)),s}getOptionScopes(e,n,i){const{options:s,type:r}=this,o=this._cachedScopes(e,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{e&&(l.add(e),u.forEach(h=>va(l,e,h))),u.forEach(h=>va(l,s,h)),u.forEach(h=>va(l,Or[r]||{},h)),u.forEach(h=>va(l,dt,h)),u.forEach(h=>va(l,Rg,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),bk.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Or[n]||{},dt.datasets[n]||{},{type:n},dt,Rg]}resolveNamedOptions(e,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=K1(this._resolverCache,e,s);let l=o;if(lH(o,n)){r.$shared=!1,i=Ns(i)?i():i;const c=this.createResolver(e,i,a);l=zo(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(e,n,i=[""],s){const{resolver:r}=K1(this._resolverCache,e,i);return Ve(n)?zo(r,n,void 0,s):r}}function K1(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const s=n.join();let r=i.get(s);return r||(r={resolver:by(e,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const aH=t=>Ve(t)&&Object.getOwnPropertyNames(t).reduce((e,n)=>e||Ns(t[n]),!1);function lH(t,e){const{isScriptable:n,isIndexable:i}=nk(t);for(const s of e){const r=n(s),o=i(s),a=(o||r)&&t[s];if(r&&(Ns(a)||aH(a))||o&&ct(a))return!0}return!1}var cH="4.3.0";const uH=["top","bottom","left","right","chartArea"];function G1(t,e){return t==="top"||t==="bottom"||uH.indexOf(t)===-1&&e==="x"}function Y1(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Q1(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Qe(n&&n.onComplete,[t],e)}function hH(t){const e=t.chart,n=e.options.animation;Qe(n&&n.onProgress,[t],e)}function wk(t){return ak()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Du={},X1=t=>{const e=wk(t);return Object.values(Du).filter(n=>n.canvas===e).pop()};function dH(t,e,n){const i=Object.keys(t);for(const s of i){const r=+s;if(r>=e){const o=t[s];delete t[s],(n>0||r>e)&&(t[r+n]=o)}}}function fH(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function pH(t){const{xScale:e,yScale:n}=t;if(e&&n)return{left:e.left,right:e.right,top:n.top,bottom:n.bottom}}var rs;let Zd=(rs=class{static register(...e){oi.add(...e),J1()}static unregister(...e){oi.remove(...e),J1()}constructor(e,n){const i=this.config=new oH(n),s=wk(e),r=X1(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Dj(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=w$(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Yj,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=V$(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Du[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ai.listen(this,"complete",Q1),Ai.listen(this,"progress",hH),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return it(e)?n&&r?r:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return oi}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():E1(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return v1(this.canvas,this.ctx),this}stop(){return Ai.stop(this),this}resize(e,n){Ai.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,e,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,E1(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Qe(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};He(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Pg(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),He(r,o=>{const a=o.options,l=a.id,c=Pg(l,a),u=Re(a.type,o.dtype);(a.position===void 0||G1(a.position,c)!==G1(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const d=oi.getScale(u);h=new d({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,e)}),He(s,(o,a)=>{o||delete i[a]}),He(i,o=>{Nn.configure(this,o,o.options),Nn.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(Y1("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Og(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=oi.getController(a),{datasetElementType:c,dataElementType:u}=dt.datasets[a];Object.assign(l,{dataElementType:oi.getElement(u),datasetElementType:c&&oi.getElement(c)}),o.controller=new l(this,i),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){He(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),d=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(d),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||He(r,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Y1("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){He(this.scales,e=>{Nn.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!u1(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;dH(e,s,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(e.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!u1(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Nn.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],He(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,Ns(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ai.has(this)?this.attached&&!Ai.running(this)&&Ai.start(this):(this.draw(),Q1({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!e||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,s=!i.disabled,r=pH(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&yy(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),e.controller.draw(),s&&vy(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Ui(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,s){const r=uj.modes[n];return typeof r=="function"?r(this,e,i,s):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=js(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(e),o=r.controller._resolveAnimations(void 0,s);Ph(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===e?s:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ai.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),v1(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Du[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),e[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};He(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},s=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){He(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},He(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=e.length;a<l;++a){o=e[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Rh(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,e),a=i?e:r(e,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},s=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(e,s,i,o),l=C$(e),c=fH(e,this._lastEvent,i,l);i&&(this._lastEvent=null,Qe(r.onHover,[e,a,this],this),l&&Qe(r.onClick,[e,a,this],this));const u=!Rh(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(e,n,i,s){if(e.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,s)}},ae(rs,"defaults",dt),ae(rs,"instances",Du),ae(rs,"overrides",Or),ae(rs,"registry",oi),ae(rs,"version",cH),ae(rs,"getChart",X1),rs);function J1(){return He(Zd.instances,t=>t._plugins.invalidate())}function Ek(t,e,n=e){t.lineCap=Re(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Re(n.borderDash,e.borderDash)),t.lineDashOffset=Re(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Re(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Re(n.borderWidth,e.borderWidth),t.strokeStyle=Re(n.borderColor,e.borderColor)}function gH(t,e,n){t.lineTo(n.x,n.y)}function mH(t){return t.stepped?Z$:t.tension||t.cubicInterpolationMode==="monotone"?ez:gH}function Tk(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:e.loop,ilen:c<l&&!u?i+c-l:c-l}}function _H(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:l,ilen:c}=Tk(s,n,i),u=mH(r);let{move:h=!0,reverse:d}=i||{},f,p,g;for(f=0;f<=c;++f)p=s[(a+(d?c-f:f))%o],!p.skip&&(h?(t.moveTo(p.x,p.y),h=!1):u(t,g,p,d,r.stepped),g=p);return l&&(p=s[(a+(d?c:0))%o],u(t,g,p,d,r.stepped)),!!l}function yH(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Tk(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,d,f,p,g,m,_;const y=T=>(o+(c?a-T:T))%r,b=()=>{g!==m&&(t.lineTo(u,m),t.lineTo(u,g),t.lineTo(u,_))};for(l&&(f=s[y(0)],t.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[y(d)],f.skip)continue;const T=f.x,I=f.y,D=T|0;D===p?(I<g?g=I:I>m&&(m=I),u=(h*u+T)/++h):(b(),t.lineTo(T,I),p=D,h=0,g=m=I),_=I}b()}function Mg(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?yH:_H}function vH(t){return t.stepped?Pz:t.tension||t.cubicInterpolationMode==="monotone"?Mz:er}function bH(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),Ek(t,e.options),t.stroke(s)}function wH(t,e,n,i){const{segments:s,options:r}=e,o=Mg(e);for(const a of s)Ek(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const EH=typeof Path2D=="function";function TH(t,e,n,i){EH&&!e.options.segment?bH(t,e,n,i):wH(t,e,n,i)}class Ra extends Wr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;xz(this._points,i,e,s,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=zz(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,s=e[n],r=this.points,o=Vz(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=vH(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:d}=o[c],f=r[h],p=r[d];if(f===p){a.push(f);continue}const g=Math.abs((s-f[n])/(p[n]-f[n])),m=l(f,p,g,i.stepped);m[n]=e[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(e,n,i){return Mg(this)(e,this,n,i)}path(e,n,i){const s=this.segments,r=Mg(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(e,this,a,{start:n,end:n+i-1});return!!o}draw(e,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(e.save(),TH(e,this,i,s),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ae(Ra,"id","line"),ae(Ra,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ae(Ra,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ae(Ra,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Z1(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class Ou extends Wr{constructor(n){super();ae(this,"parsed");ae(this,"skip");ae(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return Z1(this,n,"x",i)}inYRange(n,i){return Z1(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!Ui(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Dg(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ae(Ou,"id","point"),ae(Ou,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ae(Ou,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const ew=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},IH=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class tw extends Wr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Qe(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,s)=>e.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,s=Et(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=ew(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=e;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||c[c.length-1]+m+2*a>o)&&(h+=u,c[c.length-(g>0?0:1)]=0,f+=u,d++),l[g]={left:0,top:f,row:d,width:m,height:s},c[c.length-1]+=m+a}),h}_fitCols(e,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-e;let h=a,d=0,f=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:y,itemHeight:b}=xH(i,n,r,m,s);_>0&&f+b+2*a>u&&(h+=d+a,c.push({width:d,height:f}),p+=d+a,g++,d=f=0),l[_]={left:p,top:f,col:g,width:y,height:b},d=Math.max(d,y),f+=b+a}),h+=d,c.push({width:d,height:f}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=bo(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=zt(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=zt(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+e+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=zt(i,this.top+e+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=zt(i,this.top+e+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;yy(e,this),this._draw(),vy(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=e,a=dt.color,l=bo(e.rtl,this.left,this.width),c=Et(o.font),{padding:u}=o,h=c.size,d=h/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=ew(o,h),_=function(D,C,S){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const $=Re(S.lineWidth,1);if(s.fillStyle=Re(S.fillStyle,a),s.lineCap=Re(S.lineCap,"butt"),s.lineDashOffset=Re(S.lineDashOffset,0),s.lineJoin=Re(S.lineJoin,"miter"),s.lineWidth=$,s.strokeStyle=Re(S.strokeStyle,a),s.setLineDash(Re(S.lineDash,[])),o.usePointStyle){const ee={radius:g*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:$},z=l.xPlus(D,p/2),W=C+d;ek(s,ee,z,W,o.pointStyleWidth&&p)}else{const ee=C+Math.max((h-g)/2,0),z=l.leftForLtr(D,p),W=vo(S.borderRadius);s.beginPath(),Object.values(W).some(me=>me!==0)?Lh(s,{x:z,y:ee,w:p,h:g,radius:W}):s.rect(z,ee,p,g),s.fill(),$!==0&&s.stroke()}s.restore()},y=function(D,C,S){Pr(s,S.text,D,C+m/2,c,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},b=this.isHorizontal(),T=this._computeTitleHeight();b?f={x:zt(r,this.left+u,this.right-i[0]),y:this.top+u+T,line:0}:f={x:this.left+u,y:zt(r,this.top+T+u,this.bottom-n[0].height),line:0},lk(this.ctx,e.textDirection);const I=m+u;this.legendItems.forEach((D,C)=>{s.strokeStyle=D.fontColor,s.fillStyle=D.fontColor;const S=s.measureText(D.text).width,$=l.textAlign(D.textAlign||(D.textAlign=o.textAlign)),ee=p+d+S;let z=f.x,W=f.y;l.setWidth(this.width),b?C>0&&z+ee+u>this.right&&(W=f.y+=I,f.line++,z=f.x=zt(r,this.left+u,this.right-i[f.line])):C>0&&W+I>this.bottom&&(z=f.x=z+n[f.line].width+u,f.line++,W=f.y=zt(r,this.top+T+u,this.bottom-n[f.line].height));const me=l.x(z);if(_(me,W,D),z=B$($,z+p+d,b?z+ee:this.right,e.rtl),y(l.x(z),W,D),b)f.x+=ee+u;else if(typeof D.text!="string"){const Ke=c.lineHeight;f.y+=Ik(D,Ke)}else f.y+=I}),ck(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Et(n.font),s=tn(n.padding);if(!n.display)return;const r=bo(e.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),u=this.top+c,h=zt(e.align,h,this.right-d);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=c+zt(e.align,this.top,this.bottom-p-e.labels.padding-this._computeTitleHeight())}const f=zt(a,h,h+d);o.textAlign=r.textAlign(gy(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,Pr(o,n.text,f,u,i)}_computeTitleHeight(){const e=this.options.title,n=Et(e.font),i=tn(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,s,r;if(ka(e,this.left,this.right)&&ka(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],ka(e,s.left,s.left+s.width)&&ka(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!kH(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const s=this._hoveredItem,r=IH(s,i);s&&!r&&Qe(n.onLeave,[e,s,this],this),this._hoveredItem=i,i&&!r&&Qe(n.onHover,[e,i,this],this)}else i&&Qe(n.onClick,[e,i,this],this)}}function xH(t,e,n,i,s){const r=SH(i,t,e,n),o=CH(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function SH(t,e,n,i){let s=t.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),e+n.size/2+i.measureText(s).width}function CH(t,e,n){let i=t;return typeof e.text!="string"&&(i=Ik(e,n)),i}function Ik(t,e){const n=t.text?t.text.length+.5:0;return e*n}function kH(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var AH={id:"legend",_element:tw,start(t,e,n){const i=t.legend=new tw({ctx:t.ctx,options:n,chart:t});Nn.configure(t,i,n),Nn.addBox(t,i)},stop(t){Nn.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Nn.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=tn(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class xk extends Wr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const s=ct(i.text)?i.text.length:1;this._padding=tn(i.padding);const r=s*Et(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=zt(a,i,r),h=n+e,c=r-i):(o.position==="left"?(u=i+e,h=zt(a,s,n),l=Ct*-.5):(u=r-e,h=zt(a,n,s),l=Ct*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Et(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Pr(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:gy(n.align),textBaseline:"middle",translation:[o,a]})}}function RH(t,e){const n=new xk({ctx:t.ctx,options:e,chart:t});Nn.configure(t,n,e),Nn.addBox(t,n),t.titleBlock=n}var DH={id:"title",_element:xk,start(t,e,n){RH(t,n)},stop(t){const e=t.titleBlock;Nn.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Nn.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Da={average(t){if(!t.length)return!1;let e,n,i=0,s=0,r=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=t.length;r<o;++r){const l=t[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Ag(e,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function ri(t,e){return e&&(ct(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ri(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function OH(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function nw(t,e){const n=t.chart.ctx,{body:i,footer:s,title:r}=t,{boxWidth:o,boxHeight:a}=e,l=Et(e.bodyFont),c=Et(e.titleFont),u=Et(e.footerFont),h=r.length,d=s.length,f=i.length,p=tn(e.padding);let g=p.height,m=0,_=i.reduce((T,I)=>T+I.before.length+I.lines.length+I.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),_){const T=e.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=f*T+(_-f)*l.lineHeight+(_-1)*e.bodySpacing}d&&(g+=e.footerMarginTop+d*u.lineHeight+(d-1)*e.footerSpacing);let y=0;const b=function(T){m=Math.max(m,n.measureText(T).width+y)};return n.save(),n.font=c.string,He(t.title,b),n.font=l.string,He(t.beforeBody.concat(t.afterBody),b),y=e.displayColors?o+2+e.boxPadding:0,He(i,T=>{He(T.before,b),He(T.lines,b),He(T.after,b)}),y=0,n.font=u.string,He(t.footer,b),n.restore(),m+=p.width,{width:m,height:g}}function PH(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function MH(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(t==="left"&&s+r+o>e.width||t==="right"&&s-r-o<0)return!0}function NH(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=t;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),MH(c,t,e,n)&&(c="center"),c}function iw(t,e,n){const i=n.yAlign||e.yAlign||PH(t,n);return{xAlign:n.xAlign||e.xAlign||NH(t,e,n,i),yAlign:i}}function LH(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function FH(t,e,n){let{y:i,height:s}=t;return e==="top"?i+=n:e==="bottom"?i-=s+n:i-=s/2,i}function sw(t,e,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=t,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=vo(o);let p=LH(e,a);const g=FH(e,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,d)+s:a==="right"&&(p+=Math.max(h,f)+s),{x:Mn(p,0,i.width-e.width),y:Mn(g,0,i.height-e.height)}}function cu(t,e,n){const i=tn(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function rw(t){return ri([],Ri(t))}function UH(t,e,n){return js(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function ow(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Sk={beforeTitle:Ci,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ci,beforeBody:Ci,beforeLabel:Ci,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return it(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ci,afterBody:Ci,beforeFooter:Ci,footer:Ci,afterFooter:Ci};function cn(t,e,n,i){const s=t[e].call(n,i);return typeof s>"u"?Sk[e].call(n,i):s}class Ng extends Wr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new hk(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=UH(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,s=cn(i,"beforeTitle",this,e),r=cn(i,"title",this,e),o=cn(i,"afterTitle",this,e);let a=[];return a=ri(a,Ri(s)),a=ri(a,Ri(r)),a=ri(a,Ri(o)),a}getBeforeBody(e,n){return rw(cn(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,s=[];return He(e,r=>{const o={before:[],lines:[],after:[]},a=ow(i,r);ri(o.before,Ri(cn(a,"beforeLabel",this,r))),ri(o.lines,cn(a,"label",this,r)),ri(o.after,Ri(cn(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(e,n){return rw(cn(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,s=cn(i,"beforeFooter",this,e),r=cn(i,"footer",this,e),o=cn(i,"afterFooter",this,e);let a=[];return a=ri(a,Ri(s)),a=ri(a,Ri(r)),a=ri(a,Ri(o)),a}_createItems(e){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(OH(this.chart,n[l]));return e.filter&&(a=a.filter((u,h,d)=>e.filter(u,h,d,i))),e.itemSort&&(a=a.sort((u,h)=>e.itemSort(u,h,i))),He(a,u=>{const h=ow(e.callbacks,u);s.push(cn(h,"labelColor",this,u)),r.push(cn(h,"labelPointStyle",this,u)),o.push(cn(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(e,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Da[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=nw(this,i),c=Object.assign({},a,l),u=iw(this.chart,i,c),h=sw(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,s){const r=this.getCaretPosition(e,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(e,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=vo(a),{x:d,y:f}=e,{width:p,height:g}=n;let m,_,y,b,T,I;return r==="center"?(T=f+g/2,s==="left"?(m=d,_=m-o,b=T+o,I=T-o):(m=d+p,_=m+o,b=T-o,I=T+o),y=m):(s==="left"?_=d+Math.max(l,u)+o:s==="right"?_=d+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(b=f,T=b-o,m=_-o,y=_+o):(b=f+g,T=b+o,m=_+o,y=_-o),I=b),{x1:m,x2:_,x3:y,y1:b,y2:T,y3:I}}drawTitle(e,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=bo(i.rtl,this.x,this.width);for(e.x=cu(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=Et(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+a,l+1===r&&(e.y+=i.titleMarginBottom-a)}}_drawColorBox(e,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=Et(r.bodyFont),h=cu(this,"left",r),d=s.x(h),f=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+f;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(d,c)+c/2,_=p+l/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,Dg(e,g,m,_),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Dg(e,g,m,_)}else{e.lineWidth=Ve(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(d,c),m=s.leftForLtr(s.xPlus(d,1),c-2),_=vo(o.borderRadius);Object.values(_).some(y=>y!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,Lh(e,{x:g,y:p,w:c,h:l,radius:_}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Lh(e,{x:m,y:p+1,w:c-2,h:l-2,radius:_}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(g,p,c,l),e.strokeRect(g,p,c,l),e.fillStyle=o.backgroundColor,e.fillRect(m,p+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=Et(i.bodyFont);let d=h.lineHeight,f=0;const p=bo(i.rtl,this.x,this.width),g=function(S){n.fillText(S,p.x(e.x+f),e.y+d/2),e.y+=d+r},m=p.textAlign(o);let _,y,b,T,I,D,C;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=cu(this,m,i),n.fillStyle=i.bodyColor,He(this.beforeBody,g),f=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,T=0,D=s.length;T<D;++T){for(_=s[T],y=this.labelTextColors[T],n.fillStyle=y,He(_.before,g),b=_.lines,a&&b.length&&(this._drawColorBox(n,e,T,p,i),d=Math.max(h.lineHeight,l)),I=0,C=b.length;I<C;++I)g(b[I]),d=h.lineHeight;He(_.after,g)}f=0,d=h.lineHeight,He(this.afterBody,g),e.y-=r}drawFooter(e,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=bo(i.rtl,this.x,this.width);for(e.x=cu(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=Et(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+i.footerSpacing}}drawBackground(e,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=e,{width:c,height:u}=i,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:p}=vo(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(e,n,i,s),n.lineTo(a+c-d,l),n.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(e,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(e,n,i,s),n.lineTo(a+f,l+u),n.quadraticCurveTo(a,l+u,a,l+u-f),o==="center"&&r==="left"&&this.drawCaret(e,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Da[e.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=nw(this,e),l=Object.assign({},o,this._size),c=iw(n,e,l),u=sw(e,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=tn(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(e.save(),e.globalAlpha=i,this.drawBackground(r,e,s,n),lk(e,n.textDirection),r.y+=o.top,this.drawTitle(r,e,n),this.drawBody(r,e,n),this.drawFooter(r,e,n),ck(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,s=e.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Rh(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(e,r,n,i),a=this._positionChanged(o,e),l=n||!Rh(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,s){const r=this.options;if(e.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(e,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:i,caretY:s,options:r}=this,o=Da[r.position].call(this,e,n);return o!==!1&&(i!==o.x||s!==o.y)}}ae(Ng,"positioners",Da);var VH={id:"tooltip",_element:Ng,positioners:Da,afterInit(t,e,n){n&&(t.tooltip=new Ng({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Sk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const BH=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function $H(t,e,n,i){const s=t.indexOf(e);if(s===-1)return BH(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const zH=(t,e)=>t===null?null:Mn(Math.round(t),0,e);function aw(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Lg extends qr{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(it(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:$H(i,e,Re(n,e),this._addedLabels),zH(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=e===0&&n===r.length-1?r:r.slice(e,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=e;o<=n;o++)s.push({value:o});return s}getLabelForValue(e){return aw.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ae(Lg,"id","category"),ae(Lg,"defaults",{ticks:{callback:aw}});function jH(t,e){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:d}=t,f=r||1,p=u-1,{min:g,max:m}=e,_=!it(o),y=!it(a),b=!it(c),T=(m-g)/(h+1);let I=d1((m-g)/p/f)*f,D,C,S,$;if(I<1e-14&&!_&&!y)return[{value:g},{value:m}];$=Math.ceil(m/I)-Math.floor(g/I),$>p&&(I=d1($*I/p/f)*f),it(l)||(D=Math.pow(10,l),I=Math.ceil(I*D)/D),s==="ticks"?(C=Math.floor(g/I)*I,S=Math.ceil(m/I)*I):(C=g,S=m),_&&y&&r&&D$((a-o)/r,I/1e3)?($=Math.round(Math.min((a-o)/I,u)),I=(a-o)/$,C=o,S=a):b?(C=_?o:C,S=y?a:S,$=c-1,I=(S-C)/$):($=(S-C)/I,Qa($,Math.round($),I/1e3)?$=Math.round($):$=Math.ceil($));const ee=Math.max(f1(I),f1(C));D=Math.pow(10,it(l)?ee:l),C=Math.round(C*D)/D,S=Math.round(S*D)/D;let z=0;for(_&&(d&&C!==o?(n.push({value:o}),C<o&&z++,Qa(Math.round((C+z*I)*D)/D,o,lw(o,T,t))&&z++):C<o&&z++);z<$;++z){const W=Math.round((C+z*I)*D)/D;if(y&&W>a)break;n.push({value:W})}return y&&d&&S!==a?n.length&&Qa(n[n.length-1].value,a,lw(a,T,t))?n[n.length-1].value=a:n.push({value:a}):(!y||S===a)&&n.push({value:S}),n}function lw(t,e,{horizontal:n,minRotation:i}){const s=gs(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*e*(""+t).length;return Math.min(e/r,o)}class Vh extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return it(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(e){const l=$o(s),c=$o(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),e||o(s-l)}this.min=s,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=jH(s,r);return e.bounds==="ticks"&&GC(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const s=(i-n)/Math.max(e.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return _y(e,this.chart.options.locale,this.options.ticks.format)}}class Fg extends Vh{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Ot(e)?e:0,this.max=Ot(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=gs(this.options.ticks.minRotation),s=(e?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ae(Fg,"id","linear"),ae(Fg,"defaults",{ticks:{callback:Xd.formatters.numeric}});const Ll=t=>Math.floor(ps(t)),Ys=(t,e)=>Math.pow(10,Ll(t)+e);function cw(t){return t/Math.pow(10,Ll(t))===1}function uw(t,e,n){const i=Math.pow(10,n),s=Math.floor(t/i);return Math.ceil(e/i)-s}function HH(t,e){const n=e-t;let i=Ll(n);for(;uw(t,e,i)>10;)i++;for(;uw(t,e,i)<10;)i--;return Math.min(i,Ll(t))}function WH(t,{min:e,max:n}){e=En(t.min,e);const i=[],s=Ll(e);let r=HH(e,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((e-l)*o)/o,u=Math.floor((e-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),d=En(t.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;d<n;)i.push({value:d,major:cw(d),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),d=Math.round((l+u+h*Math.pow(10,r))*o)/o;const f=En(t.max,d);return i.push({value:f,major:cw(f),significand:h}),i}class hw extends qr{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,n){const i=Vh.prototype.parse.apply(this,[e,n]);if(i===0){this._zero=!0;return}return Ot(i)&&i>0?i:null}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Ot(e)?Math.max(0,e):null,this.max=Ot(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ot(this._userMin)&&(this.min=e===Ys(this.min,0)?Ys(this.min,-1):Ys(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=e?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ys(i,-1)),o(Ys(s,1)))),i<=0&&r(Ys(s,-1)),s<=0&&o(Ys(i,1)),this.min=i,this.max=s}buildTicks(){const e=this.options,n={min:this._userMin,max:this._userMax},i=WH(n,this);return e.bounds==="ticks"&&GC(i,this,"value"),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(e){return e===void 0?"0":_y(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=ps(e),this._valueRange=ps(this.max)-ps(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(ps(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const n=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+n*this._valueRange)}}ae(hw,"id","logarithmic"),ae(hw,"defaults",{ticks:{callback:Xd.formatters.logarithmic,major:{enabled:!0}}});function Ug(t){const e=t.ticks;if(e.display&&t.display){const n=tn(e.backdropPadding);return Re(e.font&&e.font.size,dt.font.size)+n.height}return 0}function qH(t,e,n){return n=ct(n)?n:[n],{w:J$(t,e.string,n),h:n.length*e.lineHeight}}function dw(t,e,n,i,s){return t===i||t===s?{start:e-n/2,end:e+n/2}:t<i||t>s?{start:e-n,end:e}:{start:e,end:e+n}}function KH(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],s=[],r=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?Ct/r:0;for(let l=0;l<r;l++){const c=o.setContext(t.getPointLabelContext(l));s[l]=c.padding;const u=t.getPointPosition(l,t.drawingArea+s[l],a),h=Et(c.font),d=qH(t.ctx,h,t._pointLabels[l]);i[l]=d;const f=$n(t.getIndexAngle(l)+a),p=Math.round(fy(f)),g=dw(p,u.x,d.w,0,180),m=dw(p,u.y,d.h,90,270);GH(n,e,f,g,m)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=XH(t,i,s)}function GH(t,e,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<e.l?(a=(e.l-i.start)/r,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),s.start<e.t?(l=(e.t-s.start)/o,t.t=Math.min(t.t,e.t-l)):s.end>e.b&&(l=(s.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}function YH(t,e,n){const i=t.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=t.getPointPosition(e,i+s+o,r),c=Math.round(fy($n(l.angle+gn))),u=e7(l.y,a.h,c),h=JH(c),d=ZH(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:d,top:u,right:d+a.w,bottom:u+a.h}}function QH(t,e){if(!e)return!0;const{left:n,top:i,right:s,bottom:r}=t;return!(Ui({x:n,y:i},e)||Ui({x:n,y:r},e)||Ui({x:s,y:i},e)||Ui({x:s,y:r},e))}function XH(t,e,n){const i=[],s=t._pointLabels.length,r=t.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Ug(r)/2,additionalAngle:o?Ct/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=e[u];const h=YH(t,u,l);i.push(h),a==="auto"&&(h.visible=QH(h,c),h.visible&&(c=h))}return i}function JH(t){return t===0||t===180?"center":t<180?"left":"right"}function ZH(t,e,n){return n==="right"?t-=e:n==="center"&&(t-=e/2),t}function e7(t,e,n){return n===90||n===270?t-=e/2:(n>270||n<90)&&(t-=e),t}function t7(t,e,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=e;if(!it(a)){const l=vo(e.borderRadius),c=tn(e.backdropPadding);t.fillStyle=a;const u=i-c.left,h=s-c.top,d=r-i+c.width,f=o-s+c.height;Object.values(l).some(p=>p!==0)?(t.beginPath(),Lh(t,{x:u,y:h,w:d,h:f,radius:l}),t.fill()):t.fillRect(u,h,d,f)}}function n7(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let s=e-1;s>=0;s--){const r=t._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(t.getPointLabelContext(s));t7(n,o,r);const a=Et(o.font),{x:l,y:c,textAlign:u}=r;Pr(n,t._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function Ck(t,e,n,i){const{ctx:s}=t;if(n)s.arc(t.xCenter,t.yCenter,e,0,Fn);else{let r=t.getPointPosition(0,e);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=t.getPointPosition(o,e),s.lineTo(r.x,r.y)}}function i7(t,e,n,i,s){const r=t.ctx,o=e.circular,{color:a,lineWidth:l}=e;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),Ck(t,n,o,i),r.closePath(),r.stroke(),r.restore())}function s7(t,e,n){return js(t,{label:n,index:e,type:"pointLabel"})}class uu extends Vh{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=tn(Ug(this.options)/2),n=this.width=this.maxWidth-e.width,i=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+n/2+e.left),this.yCenter=Math.floor(this.top+i/2+e.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:e,max:n}=this.getMinMax(!1);this.min=Ot(e)&&!isNaN(e)?e:0,this.max=Ot(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ug(this.options))}generateTickLabels(e){Vh.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((n,i)=>{const s=Qe(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const e=this.options;e.display&&e.pointLabels.display?KH(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,n,i,s){this.xCenter+=Math.floor((e-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,n,i,s))}getIndexAngle(e){const n=Fn/(this._pointLabels.length||1),i=this.options.startAngle||0;return $n(e*n+gs(i))}getDistanceFromCenterForValue(e){if(it(e))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*n:(e-this.min)*n}getValueForDistanceFromCenter(e){if(it(e))return NaN;const n=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(e){const n=this._pointLabels||[];if(e>=0&&e<n.length){const i=n[e];return s7(this.getContext(),e,i)}}getPointPosition(e,n,i=0){const s=this.getIndexAngle(e)-gn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(e,n){return this.getPointPosition(e,this.getDistanceFromCenterForValue(n))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[e];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:n}}=this.options;if(e){const i=this.ctx;i.save(),i.beginPath(),Ck(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const e=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&n7(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const d=this.getContext(h),f=s.setContext(d),p=r.setContext(d);i7(this,f,l,o,p)}}),i.display){for(e.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:d}=u;!d||!h||(e.lineWidth=d,e.strokeStyle=h,e.setLineDash(u.borderDash),e.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(s),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=Et(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){e.font=u.string,o=e.measureText(a.label).width,e.fillStyle=c.backdropColor;const h=tn(c.backdropPadding);e.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}Pr(e,a.label,0,-r,u,{color:c.color})}),e.restore()}drawTitle(){}}ae(uu,"id","radialLinear"),ae(uu,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Xd.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ae(uu,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ae(uu,"descriptors",{angleLines:{_fallback:"grid"}});const ef={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},fn=Object.keys(ef);function r7(t,e){return t-e}function fw(t,e){if(it(e))return null;const n=t._adapter,{parser:i,round:s,isoWeekday:r}=t._parseOpts;let o=e;return typeof i=="function"&&(o=i(o)),Ot(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ml(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function pw(t,e,n,i){const s=fn.length;for(let r=fn.indexOf(t);r<s-1;++r){const o=ef[fn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(a*o.size))<=i)return fn[r]}return fn[s-1]}function o7(t,e,n,i,s){for(let r=fn.length-1;r>=fn.indexOf(n);r--){const o=fn[r];if(ef[o].common&&t._adapter.diff(s,i,o)>=e-1)return o}return fn[n?fn.indexOf(n):0]}function a7(t){for(let e=fn.indexOf(t)+1,n=fn.length;e<n;++e)if(ef[fn[e]].common)return fn[e]}function gw(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:s}=py(n,e),r=n[i]>=e?n[i]:n[s];t[r]=!0}}function l7(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(e[l].major=!0);return e}function mw(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:l7(t,i,s,n)}class Bh extends qr{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),s=this._adapter=new rj._date(e.adapters.date);s.init(n),Ya(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:fw(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Ot(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Ot(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=L$(s,r,o);return this._unit=n.unit||(i.autoSkip?pw(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):o7(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:a7(this._unit),this.initOffsets(s),e.reverse&&a.reverse(),mw(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,s,r;this.options.offset&&e.length&&(s=this.getDecimalForValue(e[0]),e.length===1?n=1-s:n=(this.getDecimalForValue(e[1])-s)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?i=r:i=(r-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=Mn(n,0,o),i=Mn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||pw(r.minUnit,n,i,this._getLabelCapacity(n)),a=Re(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ml(l)||l===!0,u={};let h=n,d,f;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(d=h,f=0;d<i;d=+e.add(d,a,o),f++)gw(u,d,p);return(d===i||s.bounds==="ticks"||f===1)&&gw(u,d,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(e,o)}_tickFormatFunction(e,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Qe(o,[e,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],d=i[n],f=c&&h&&d&&d.major;return this._adapter.format(e,s||(f?h:u))}generateTickLabels(e){let n,i,s;for(n=0,i=e.length;n<i;++n)s=e[n],s.label=this._tickFormatFunction(s.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,s=gs(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(e,0,mw(this,[e],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)e=e.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)e.push(fw(this,s[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return U$(e.sort(r7))}}ae(Bh,"id","time"),ae(Bh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function hu(t,e,n){let i=0,s=t.length-1,r,o,a,l;n?(e>=t[i].pos&&e<=t[s].pos&&({lo:i,hi:s}=dr(t,"pos",e)),{pos:r,time:a}=t[i],{pos:o,time:l}=t[s]):(e>=t[i].time&&e<=t[s].time&&({lo:i,hi:s}=dr(t,"time",e)),{time:r,pos:a}=t[i],{time:o,pos:l}=t[s]);const c=o-r;return c?a+(l-a)*(e-r)/c:a}class _w extends Bh{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=hu(n,this.min),this._tableRange=hu(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=e.length;o<a;++o)c=e[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(hu(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return hu(this._table,i*this._tableRange+this._minPos,!0)}}ae(_w,"id","timeseries"),ae(_w,"defaults",Bh.defaults);const kk={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},c7={type:{type:String,required:!0},...kk},u7=fE[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function Jr(t){return Wh(t)?Ee(t):t}function h7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return Wh(e)?new Proxy(t,{}):t}function d7(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Ak(t,e){t.labels=e}function Rk(t,e,n){const i=[];t.datasets=e.map(s=>{const r=t.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function f7(t,e){const n={labels:[],datasets:[]};return Ak(n,t.labels),Rk(n,t.datasets,e),n}const p7=Nr({props:c7,setup(t,e){let{expose:n}=e;const i=Ge(null),s=qh(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:d}=t,f=f7(c,d),p=h7(f,c);s.value=new Zd(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=Ee(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(t.updateMode)};return nm(r),Xw(o),ys([()=>t.options,()=>t.data],(l,c)=>{let[u,h]=l,[d,f]=c;const p=Ee(s.value);if(!p)return;let g=!1;if(u){const m=Jr(u),_=Jr(d);m&&m!==_&&(d7(p,m),g=!0)}if(h){const m=Jr(h.labels),_=Jr(f.labels),y=Jr(h.datasets),b=Jr(f.datasets);m!==_&&(Ak(p.config.data,m),g=!0),y&&y!==b&&(Rk(p.config.data,y,t.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>Go("canvas",{ref:i})}});function g7(t,e){return Zd.register(e),Nr({props:kk,setup(n,i){let{expose:s}=i;const r=qh(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>Go(p7,u7({ref:o},{type:t,...n}))}})}const m7=g7("line",Au),_7={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(t){const e=t;Zd.register(Lg,Fg,Ou,Ra,DH,VH,AH);const n=Ss({datasets:e.datasets}),i=Ss({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(P(),_n(E(m7),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const y7={class:"graph"},v7={__name:"StatsScreen",setup(t){const e=jr(),n=xe(()=>e.params.boardUUID||"");let i=wt(Vn(ve,"Boards",n.value,"Groups")),s=wt(Vn(ve,"Boards",n.value,"Tiles"));const r=wt($e(ve,"Boards",n.value)),o=xe(()=>{var u;let c=[];return s&&((u=s==null?void 0:s.value)==null||u.forEach(h=>{c[h.id]=h.points})),c||[]}),a=c=>{let u=[{x:16829424e5,y:0}],h=0;const d=Object.entries(c.collected).sort((f,p)=>f[1].seconds-p[1].seconds);return Object.keys(d).forEach(f=>{h+=o.value[d[f][0]],u.push({y:h,x:new Date(d[f][1].seconds*1e3)})}),u.push({x:Date.now(),y:h}),u},l=xe(()=>{var u;let c=[];return i!=null&&i.value&&((u=i==null?void 0:i.value)==null||u.forEach(h=>{h.name!="moderator"&&c.push({label:h.name,borderColor:h.color,backgroundColor:h.color,data:a(h)})})),c});return(c,u)=>{var d;const h=Cs("router-link");return P(),L(be,null,[A("div",null,[Ue(h,{class:"btn",to:{name:"overview",params:{boardUUID:E(n)}}},{default:Qh(()=>[Ie(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),A("h1",null,pe((d=E(r))==null?void 0:d.name)+" stats:",1),A("div",y7,[Ue(_7,{datasets:E(l)},null,8,["datasets"])])],64)}}};const xi=t=>(Ls("data-v-5d41fd9f"),t=t(),Fs(),t),b7=xi(()=>A("br",null,null,-1)),w7={key:0,class:"tile"},E7=["src"],T7={key:0,class:"sub-tile"},I7=["src"],x7=["onSubmit"],S7={class:"input"},C7={class:"input"},k7={class:"pen"},A7={class:"pen"},R7={class:"pen"},D7={key:3},O7=["onClick"],P7=["onSubmit"],M7=xi(()=>A("button",{class:"btn"},"Add item",-1)),N7=xi(()=>A("br",null,null,-1)),L7=xi(()=>A("br",null,null,-1)),F7=xi(()=>A("option",{disabled:"",value:""},"Please select one",-1)),U7=xi(()=>A("option",null,"drop",-1)),V7=xi(()=>A("option",null,"multi-item",-1)),B7=xi(()=>A("option",null,"null",-1)),$7=xi(()=>A("option",null,"exp",-1)),z7=[F7,U7,V7,B7,$7],j7=xi(()=>A("button",{type:"submit"},"Update Tile",-1)),H7={__name:"editTile",setup(t){const e=es(),n=async()=>{let u=e.selectedTile;e.setSelectedTile(""),await ro($e(ve,"Boards",e.boardUUID,"Tiles",u.id),{description:u.description,altImg:u.altImg,img:u.img,title:u.title,points:parseInt(u.points),hidden:(u==null?void 0:u.hidden)!==void 0?u.hidden:!1,type:(u==null?void 0:u.type)!==void 0?u.type:"drop"}),e.setSelectedTile(u)},i=u=>{u.target.innerText.trim()!=""?e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?parseInt(u.target.innerText.trim()):u.target.innerText.trim():e.selectedTile[u.target.getAttribute("name")]=u.target.getAttribute("name")=="points"?0:"",u.target.innerText.trim()!=e.selectedTile[u.target.getAttribute("name")]&&sn($e(ve,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),e.selectedTile)},s=u=>{u.target.value.trim()!=""||[u.target.getAttribute("name")]=="altImg"?e.selectedTile[u.target.getAttribute("name")]=u.target.value.trim():e.selectedTile[u.target.getAttribute("name")]="https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e",u.target.value.trim()!=e.selectedTile[u.target.getAttribute("name")]&&(sn($e(ve,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),e.selectedTile),console.log("written"))},r=u=>{document.querySelector(u).focus()},o=u=>{e.selectedTile.items.indexOf(u)!==-1&&(e.selectedTile.items.splice(e.selectedTile.items.indexOf(u),1),sn($e(ve,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items}))},a=xe((u,h)=>({item:u,count:h})),l=()=>{let u=!0;a.value.item=a.value.item.trim(),c(a.value.item)!==-1&&(e.selectedTile.items[c(a.value.item)].count=a.value.count),c(a.value.item)===-1&&a.value.item!=""&&(e.selectedTile.items==null&&(e.selectedTile.items=[]),e.selectedTile.items.push({item:a.value.item,count:a.value.count})),a.value.item!=""&&u&&sn($e(ve,"Boards",e.boardUUID,"Tiles",e.selectedTile.id),{items:e.selectedTile.items})},c=u=>e.selectedTile.items?e.selectedTile.items.map(function(h){return h.item}).indexOf(u):-1;return(u,h)=>{var f,p,g,m,_;const d=Cs("font-awesome-icon");return P(),L("div",null,[Ie(" id: "+pe(E(e).selectedTile.id),1),b7,E(e).selectedTile.type!="null"?(P(),L("div",w7,[A("img",{src:E(e).selectedTile.img,alt:""},null,8,E7),E(e).selectedTile.altImg?(P(),L("div",T7,[A("img",{src:E(e).selectedTile.altImg,alt:""},null,8,I7)])):ke("",!0)])):ke("",!0),A("form",{onSubmit:Fe(n,["prevent"])},[A("div",S7,[Ie(" img: "),E(e).selectedTile.type!="null"?zn((P(),L("input",{key:0,type:"text","onUpdate:modelValue":h[0]||(h[0]=y=>E(e).selectedTile.img=y),name:"img",id:"addtileimg",onBlur:h[1]||(h[1]=Fe(y=>{s(y)},["prevent"])),onKeydown:h[2]||(h[2]=sr(y=>{s(y)},["enter"]))},null,544)),[[Pi,E(e).selectedTile.img]]):ke("",!0)]),A("div",C7,[Ie(" alt: "),E(e).selectedTile.type!="null"?zn((P(),L("input",{key:0,type:"text","onUpdate:modelValue":h[3]||(h[3]=y=>E(e).selectedTile.altImg=y),name:"altImg",id:"addtileimg",onBlur:h[4]||(h[4]=Fe(y=>{s(y)},["prevent"])),onKeydown:h[5]||(h[5]=sr(y=>{s(y)},["enter"]))},null,544)),[[Pi,E(e).selectedTile.altImg]]):ke("",!0)]),E(e).selectedTile.type!="null"?(P(),L("h2",{key:0,onClick:h[8]||(h[8]=y=>r("#title"))},[A("span",{ref:"boardStore.selectedTile.title",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[6]||(h[6]=sr(Fe(y=>{i(y)},["prevent"]),["enter"])),onBlur:h[7]||(h[7]=Fe(y=>{i(y)},["prevent"])),name:"title",id:"title"},pe(E(e).selectedTile.title),545),A("span",k7,[Ue(d,{icon:["fas","pen"]})])])):ke("",!0),E(e).selectedTile.type!="null"?(P(),L("p",{key:1,onClick:h[11]||(h[11]=y=>r("#points"))},[A("span",{type:"text",ref:"boardStore.selectedTile.points",contenteditable:"",class:"editable",spellcheck:"false",onKeydown:h[9]||(h[9]=sr(Fe(y=>{i(y)},["prevent"]),["enter"])),onBlur:h[10]||(h[10]=Fe(y=>{i(y)},["prevent"])),name:"points",id:"points"},pe(E(e).selectedTile.points),545),Ie(" point"+pe(E(e).selectedTile.points>1?"s":""),1),A("span",A7,[Ue(d,{icon:["fas","pen"]})])])):ke("",!0),E(e).selectedTile.type!="null"?(P(),L("p",{key:2,onClick:h[13]||(h[13]=y=>r("#description"))},[Ie(" description: "),A("span",{type:"text",ref:"boardStore.selectedTile.description",contenteditable:"",class:"editable",spellcheck:"false",onBlur:h[12]||(h[12]=Fe(y=>{i(y)},["prevent"])),name:"description",id:"description"},pe(E(e).selectedTile.description),545),A("span",R7,[Ue(d,{icon:["fas","pen"]})])])):ke("",!0),["any-unique","multi-item"].includes(E(e).selectedTile.type)?(P(),L("ul",D7,[Ie(" Ellegible items: "),(P(!0),L(be,null,on((f=E(e).selectedTile)==null?void 0:f.items,y=>(P(),L("li",{key:y==null?void 0:y.item},[Ie(pe(y.item)+" | "+pe(y.count)+" ",1),A("button",{class:"btn",onClick:Fe(b=>o(y),["prevent"])},"-",8,O7)]))),128)),A("form",{onSubmit:Fe(l,["prevent"])},[Ie(" new "),zn(A("input",{required:"",type:"text",name:"item",id:"item","onUpdate:modelValue":h[14]||(h[14]=y=>E(a).item=y)},null,512),[[Pi,E(a).item]]),Ie(" count: "),zn(A("input",{required:"",type:"number",name:"item",id:"item",min:"1",step:"1","onUpdate:modelValue":h[15]||(h[15]=y=>E(a).count=y)},null,512),[[Pi,E(a).count]]),M7],40,P7)])):ke("",!0),Ie(" hidden: "),((p=E(e).selectedTile)==null?void 0:p.hidden)!==void 0&&E(e).selectedTile.type!="null"?zn((P(),L("input",{key:4,type:"checkbox",class:"toggle","onUpdate:modelValue":h[16]||(h[16]=y=>E(e).selectedTile.hidden=y),ref:"refs.hidden",name:"hidden",id:"addtilehidden"},null,512)),[[KR,E(e).selectedTile.hidden]]):ke("",!0),N7,Ie(" type: "+pe((m=(g=E(e))==null?void 0:g.selectedTile)==null?void 0:m.type),1),L7,((_=E(e).selectedTile)==null?void 0:_.type)!==void 0?zn((P(),L("select",{key:5,"onUpdate:modelValue":h[17]||(h[17]=y=>E(e).selectedTile.type=y)},z7,512)),[[GR,E(e).selectedTile.type]]):ke("",!0),j7],40,x7)])}}},W7=bn(H7,[["__scopeId","data-v-5d41fd9f"]]);const Ec=t=>(Ls("data-v-1f445665"),t=t(),Fs(),t),q7={class:"container"},K7=["onClick"],G7=["onKeydown"],Y7={class:"pen"},Q7={class:"main-section"},X7={key:0},J7={style:{"justify-content":"end",display:"flex"}},Z7=Ec(()=>A("h2",null,"Rules:",-1)),e9=Ec(()=>A("h2",null,"Moderators:",-1)),t9={class:"moderators"},n9=["onClick"],i9=["onSubmit"],s9=Ec(()=>A("button",{class:"btn",type:"submit"},"Add",-1)),r9=Ec(()=>A("h2",null,"Editors:",-1)),o9={class:"Editors"},a9=["onClick"],l9=["onSubmit"],c9=Ec(()=>A("button",{class:"btn",type:"submit"},"Add",-1)),u9={key:3},h9={__name:"EditBoard",setup(t){var $,ee;const e=Ge("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=es(),i=Ge(""),s=Ge("");let r=Hr();const o=jr(),a=zs();n.setBoardUUID(o.params.boardUUID),n.setSelectedTile("");const l=n.boardUUID,{data:c}=wt(Vn(ve,"Boards",l,"Groups")),u=wt($e(ve,"Boards",l)),h=($=u==null?void 0:u.value)==null?void 0:$.moderators,d=(ee=u==null?void 0:u.value)==null?void 0:ee.editors,f=xe(()=>{var W;let z={};return c&&((W=c==null?void 0:c.value)==null||W.forEach(me=>{me.name!="moderator"&&(z[me.id]={id:me.id,name:me.name,member:me.members,icon:me.icon,color:me.color,points:me.points,flagEnd:me.flagEnd,collected:me.collected,verify:me.verify})})),z||{}}),{data:p}=wt(Vn(ve,`Boards/${l}/Tiles`)),g=Ge(null),m=()=>{g.value.focus()},_=z=>{z.target.blur();let W=z.target.getAttribute("name"),me=u.value[W];z.target.innerText.trim()!=""?u.value[W]=z.target.innerText:(u.value[W]="<enter text here>",W=="rules"&&(u.value[W]="")),me!=u.value[W]&&sn($e(ve,"Boards",l),u.value)},y=z=>{z=z.trim(),h.indexOf(z)!==-1&&(h.splice(h.indexOf(z),1),sn($e(ve,"Boards",l),{moderators:h}))},b=()=>{i.value=i.value.trim(),h.indexOf(i.value)===-1&&(h.push(i.value),sn($e(ve,"Boards",l),{moderators:h}))},T=z=>{z=z.trim(),d.indexOf(z)!==-1&&(d.splice(d.indexOf(z),1),sn($e(ve,"Boards",l),{editors:d}))},I=()=>{s.value=s.value.trim(),d.indexOf(s.value)===-1&&(d.push(s.value),sn($e(ve,"Boards",l),{editors:d}))},D=new In,C=Kl(),S=()=>{ql(C,D).then(z=>{r.setUser({loggedIn:!0,data:z.user}),a.push({name:"editBoard",params:l})}).catch(z=>{const W=z.code,me=z.message;console.error(W,me)})};return(z,W)=>{var Ke,de,_e;const me=Cs("font-awesome-icon");return P(),L("div",q7,[E(r).user&&E(r).user.data.uid!=0?(P(),L("button",{key:0,class:"btn dashboard",onClick:W[0]||(W[0]=Fe(te=>E(a).push({name:"boardOverview"}),["prevent"]))}," To Dashboard ")):(P(),L("button",{key:1,class:"btn dashboard",onClick:Fe(S,["prevent"])},"login",8,K7)),E(u)&&E(r).user.data.ui!=0&&(E(r).user.data.uid==E(u).ownerID||E(r).user.data.uid==e.value||(de=(Ke=E(u))==null?void 0:Ke.editors)!=null&&de.includes(E(r).user.data.uid))?(P(),L(be,{key:2},[A("section",null,[A("h1",{class:"title-wrap",onClick:W[2]||(W[2]=Fe(te=>m(),["prevent"]))},[A("span",{class:"board-title",ref_key:"titleElement",ref:g,contenteditable:"",spellcheck:"false",onKeydown:sr(_,["enter"]),name:"title",onBlur:W[1]||(W[1]=Fe(te=>{_(te)},["prevent"]))},pe(E(u).name),41,G7),A("span",Y7,[Ue(me,{icon:["fas","pen"]})])])]),A("section",Q7,[(P(),_n(ly,{boardData:E(u),groupsData:E(f),tilesData:E(p),key:"bingo-board-"+E(n).boardUUID,isEditor:!0},null,8,["boardData","groupsData","tilesData"])),E(n).selectedTile!=""?(P(),L("aside",X7,[A("div",J7,[A("button",{class:"btn close",onClick:W[3]||(W[3]=()=>{E(n).setSelectedTile("")})}," ╳ ")]),Ue(W7,{tile:E(n).selectedTile},null,8,["tile"])])):ke("",!0)]),A("section",null,[A("div",null,[Z7,A("div",null,[A("p",{class:"rules",style:{"white-space":"pre-wrap"},contenteditable:"",spellcheck:"false",onBlur:W[4]||(W[4]=Fe(te=>{_(te)},["prevent"])),onKeydown:W[5]||(W[5]=sr(Fe(()=>{},["prevent"]),["tab"])),name:"rules"},pe((_e=E(u))==null?void 0:_e.rules),33)])]),A("div",null,[e9,A("div",t9,[A("ul",null,[(P(!0),L(be,null,on(E(h),te=>(P(),L("li",{key:te},[Ie(pe(te)+" ",1),A("button",{class:"btn",onClick:Fe(Ce=>y(te),["prevent"])},"-",8,n9)]))),128)),A("li",null,[A("form",{onSubmit:Fe(b,["prevent"])},[zn(A("input",{type:"text","onUpdate:modelValue":W[6]||(W[6]=te=>i.value=te)},null,512),[[Pi,i.value]]),s9],40,i9)])])])]),A("div",null,[r9,A("div",o9,[A("ul",null,[(P(!0),L(be,null,on(E(d),te=>(P(),L("li",{key:te},[Ie(pe(te)+" ",1),A("button",{style:{"margin-left":"15px"},class:"btn",onClick:Fe(Ce=>T(te),["prevent"])}," - ",8,a9)]))),128)),A("li",null,[A("form",{onSubmit:Fe(I,["prevent"])},[zn(A("input",{type:"text","onUpdate:modelValue":W[7]||(W[7]=te=>s.value=te)},null,512),[[Pi,s.value]]),c9],40,l9)])])])])])],64)):(P(),L("h1",u9,"Not authenticated"))])}}},d9=bn(h9,[["__scopeId","data-v-1f445665"]]);const f9=t=>(Ls("data-v-01feab08"),t=t(),Fs(),t),p9=f9(()=>A("h1",null,"Log in",-1)),g9={class:"block"},m9=["onClick"],_9={__name:"loginView",setup(t){const e=new In,n=Hr(),i=Kl(),s=zs(),r=()=>{ql(i,e).then(o=>{n.setUser({loggedIn:!0,data:o.user})}).then(async()=>{(await z_($e(ve,"Users",n.user.data.uid))).exists()||ro($e(ve,"Users",n.user.data.uid),{count:0}),s.push({name:"boardOverview"})}).catch(o=>{const a=o.code,l=o.message;console.error(o,a,l)})};return(o,a)=>(P(),L(be,null,[p9,A("div",g9,[A("button",{class:"btn",onClick:Fe(r,["prevent"])},"Log in with Google",8,m9),Ie(" "+pe(o.users),1)])],64))}},y9=bn(_9,[["__scopeId","data-v-01feab08"]]),v9=["onClick"],b9=A("h1",null,"groupview",-1),w9={key:0},E9=A("li",null,[A("button",{class:"btn"},"add group +")],-1),T9={__name:"GroupView",setup(t){const e=Ge("aFWUj88W5KRTc7RldKqiNEKB7Zh1"),n=es(),i=new In,s=Kl(),r=Hr(),o=zs(),a=jr();n.setBoardUUID(a.params.boardUUID),n.setSelectedTile("");const l=Ge(n.boardUUID),c=wt(Vn(ve,"Boards",l.value,"Groups")),u=wt($e(ve,"Boards",l.value)),h=()=>{ql(s,i).then(d=>{r.setUser({loggedIn:!0,data:d.user}),o.push({name:"boardOverview"})}).catch(d=>{const f=d.code,p=d.message;console.error(f,p)})};return(d,f)=>(P(),L(be,null,[E(r).user&&E(r).user.data.uid!=0?(P(),L("button",{key:0,class:"btn dashboard",onClick:f[0]||(f[0]=Fe(p=>E(o).push({name:"boardOverview"}),["prevent"]))}," To Dashboard ")):(P(),L("button",{key:1,class:"btn dashboard",onClick:Fe(h,["prevent"])},"login",8,v9)),b9,E(u)&&E(r).user.data.ui!=0&&(E(r).user.data.uid==E(u).ownerID||E(r).user.data.uid==e.value||E(u).editors.includes(E(r).user.data.uid))?(P(),L(be,{key:2},[E(c)?(P(),L("ul",w9,[(P(!0),L(be,null,on(E(c),p=>(P(),L("li",{key:p.name},[A("ul",null,[(P(!0),L(be,null,on(p.members,g=>(P(),L("li",{key:g},pe(g),1))),128))])]))),128)),E9])):ke("",!0)],64)):(P(),L(be,{key:3},[Ie("Not Authenticated")],64))],64))}},ki="/osrs-bingo",I9=MU({history:X5(),routes:[{path:ki+"/",name:"Home",component:b8},{path:ki+"/new",name:"newBoard",component:M8},{path:ki+"/login",name:"loginView",component:y9},{path:ki+"/edit/:boardUUID",name:"editBoard",props:!0,component:d9},{path:ki+"/groups/:boardUUID",name:"groupView",props:!0,component:T9},{path:ki+"/b/:boardUUID",name:"overview",props:!0,component:r8},{path:ki+"/boards/",name:"boardOverview",props:!0,component:J8},{path:ki+"/b/:boardUUID/stats/",name:"stats-graph",props:!0,component:v7},{path:ki+"/m/:boardUUID",name:"moderator",props:!0,component:_8}]});var x9={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},S9={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},C9={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},k9={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},A9={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},R9={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},D9={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},O9={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},P9={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},M9={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},N9={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},L9={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},F9={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]},U9={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};vn.add(N9);vn.add(P9);vn.add(F9);vn.add(k9);vn.add(O9);vn.add(x9);vn.add(C9);vn.add(U9);vn.add(A9);vn.add(R9);vn.add(D9);vn.add(L9);vn.add(M9);vn.add(S9);const Tc=eD(FU);Tc.use(iD());Tc.use(I9);Tc.use(P5,{firebaseApp:cC});Tc.component("FontAwesomeIcon",BC);Tc.mount("#app");
